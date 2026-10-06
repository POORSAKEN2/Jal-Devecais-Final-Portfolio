// Every sound is synthesized with WebAudio; no audio files ship with the site.
// The startup and shutdown themes are original compositions in the spirit of
// early-2000s system sounds, not recordings of any real OS sound.

let ctx: AudioContext | null = null;
let reverb: ConvolverNode | null = null;

function audio() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

// A generated hall impulse: decaying stereo noise, so the themes bloom like a big room.
function hall(a: AudioContext) {
  if (reverb) return reverb;
  const seconds = 2.8;
  const length = Math.floor(a.sampleRate * seconds);
  const impulse = a.createBuffer(2, length, a.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.6);
    }
  }
  reverb = a.createConvolver();
  reverb.buffer = impulse;
  const wet = a.createGain();
  wet.gain.value = 0.55;
  reverb.connect(wet).connect(a.destination);
  return reverb;
}

function tone(freq: number, start: number, length: number, type: OscillatorType = "sine", gain = 0.08) {
  const a = audio();
  if (!a) return;
  const t = a.currentTime + start;
  const osc = a.createOscillator();
  const amp = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  amp.gain.setValueAtTime(0, t);
  amp.gain.linearRampToValueAtTime(gain, t + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + length);
  osc.connect(amp).connect(a.destination);
  osc.start(t);
  osc.stop(t + length + 0.05);
}

// Warm pad voice: two detuned saws through a lowpass that opens as the note swells.
function pad(freqs: number[], start: number, attack: number, hold: number, release: number, gain = 0.018) {
  const a = audio();
  if (!a) return;
  const room = hall(a);
  const t = a.currentTime + start;
  const end = t + attack + hold + release;

  const filter = a.createBiquadFilter();
  filter.type = "lowpass";
  filter.Q.value = 0.7;
  filter.frequency.setValueAtTime(500, t);
  filter.frequency.exponentialRampToValueAtTime(2600, t + attack + hold * 0.5);
  filter.frequency.exponentialRampToValueAtTime(900, end);

  const amp = a.createGain();
  amp.gain.setValueAtTime(0, t);
  amp.gain.linearRampToValueAtTime(1, t + attack);
  amp.gain.setValueAtTime(1, t + attack + hold);
  amp.gain.exponentialRampToValueAtTime(0.0001, end);

  filter.connect(amp);
  amp.connect(a.destination);
  amp.connect(room);

  for (const f of freqs) {
    for (const cents of [-7, 6]) {
      const osc = a.createOscillator();
      const g = a.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = f;
      osc.detune.value = cents;
      g.gain.value = gain;
      osc.connect(g).connect(filter);
      osc.start(t);
      osc.stop(end + 0.05);
    }
  }
}

// Glassy bell: sine fundamental plus a quiet inharmonic partial, long decay into the hall.
function bell(freq: number, start: number, decay = 1.6, gain = 0.06) {
  const a = audio();
  if (!a) return;
  const room = hall(a);
  const t = a.currentTime + start;
  for (const [ratio, level] of [
    [1, 1],
    [2.76, 0.18],
  ] as const) {
    const osc = a.createOscillator();
    const amp = a.createGain();
    osc.type = "sine";
    osc.frequency.value = freq * ratio;
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(gain * level, t + 0.008);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + decay / ratio);
    osc.connect(amp);
    amp.connect(a.destination);
    amp.connect(room);
    osc.start(t);
    osc.stop(t + decay + 0.05);
  }
}

function bass(freq: number, start: number, length: number, gain = 0.09) {
  const a = audio();
  if (!a) return;
  const t = a.currentTime + start;
  const osc = a.createOscillator();
  const amp = a.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(0, t);
  amp.gain.linearRampToValueAtTime(gain, t + 0.5);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + length);
  osc.connect(amp).connect(a.destination);
  osc.start(t);
  osc.stop(t + length + 0.05);
}

// Note frequencies (Hz)
const N = {
  Eb2: 77.78,
  Ab2: 103.83,
  Eb3: 155.56,
  G3: 196.0,
  Ab3: 207.65,
  Bb3: 233.08,
  C4: 261.63,
  Eb4: 311.13,
  F4: 349.23,
  G4: 392.0,
  Bb4: 466.16,
  G5: 783.99,
  Bb5: 932.33,
  C6: 1046.5,
  D6: 1174.66,
  Eb6: 1244.51,
  G6: 1567.98,
};

export const sounds = {
  click: () => tone(1400, 0, 0.03, "square", 0.025),
  open: () => {
    tone(660, 0, 0.12);
    tone(990, 0.06, 0.16);
  },
  close: () => {
    tone(880, 0, 0.1);
    tone(587, 0.05, 0.14);
  },
  minimize: () => tone(520, 0, 0.1, "triangle", 0.06),
  notify: () => {
    tone(1046, 0, 0.12, "triangle", 0.06);
    tone(1318, 0.09, 0.2, "triangle", 0.06);
  },
  error: () => {
    tone(330, 0, 0.18, "square", 0.04);
    tone(247, 0.12, 0.25, "square", 0.04);
  },
  // ~4.5s: an Ab major-9 swell resolving to Eb add-9, with a rising bell sparkle on top.
  startup: () => {
    pad([N.Ab3, N.C4, N.Eb4, N.G4, N.Bb4], 0, 0.7, 0.5, 0.9);
    bass(N.Ab2, 0, 1.6);
    pad([N.Eb3, N.G3, N.Bb3, N.Eb4, N.F4, N.G4], 1.25, 0.45, 1.6, 1.8);
    bass(N.Eb2, 1.25, 3.6);
    bell(N.G5, 0.35);
    bell(N.Bb5, 0.6);
    bell(N.C6, 0.85);
    bell(N.Eb6, 1.25, 2.6, 0.075);
    bell(N.G6, 1.55, 2.2, 0.035);
  },
  // ~3s: the same colours falling back to rest.
  shutdown: () => {
    pad([N.Eb3, N.G3, N.Bb3, N.Eb4, N.F4], 0, 0.15, 0.6, 1.6);
    pad([N.Ab3, N.C4, N.Eb4, N.G4], 0.9, 0.25, 0.4, 1.6);
    bass(N.Eb2, 0, 2.8);
    bell(N.D6, 0.05, 1.4);
    bell(N.Bb5, 0.3, 1.4);
    bell(N.G5, 0.55, 1.6);
    bell(N.Eb4 * 2, 0.85, 2.2, 0.05);
  },
};

export type SoundName = keyof typeof sounds;
