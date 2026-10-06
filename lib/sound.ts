// Every sound is synthesized with WebAudio; no audio files ship with the site.

let ctx: AudioContext | null = null;

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
  startup: () => {
    [523.25, 659.25, 783.99, 987.77, 1174.66].forEach((f, i) => tone(f, i * 0.16, 1.4 - i * 0.12, "sine", 0.05));
    tone(261.63, 0, 1.8, "triangle", 0.03);
  },
  shutdown: () => {
    [987.77, 783.99, 659.25, 523.25].forEach((f, i) => tone(f, i * 0.18, 1, "sine", 0.05));
  },
};

export type SoundName = keyof typeof sounds;
