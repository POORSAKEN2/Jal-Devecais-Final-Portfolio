"use client";

import { useEffect } from "react";

export type BootPhase = "power" | "boot" | "welcome" | "off" | "done";

type BootScreenProps = {
  phase: BootPhase;
  onAdvance: () => void;
  onPowerOn: () => void;
};

const BOOT_MS = 2600;
const WELCOME_MS = 1400;

export function BootScreen({ phase, onAdvance, onPowerOn }: BootScreenProps) {
  useEffect(() => {
    if (phase !== "boot" && phase !== "welcome") return;
    const timer = window.setTimeout(onAdvance, phase === "boot" ? BOOT_MS : WELCOME_MS);
    const skip = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && ["Shift", "Control", "Alt", "Meta", "Tab"].includes(event.key)) return;
      onAdvance();
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [phase, onAdvance]);

  if (phase === "done") return null;

  // First visit starts powered down: the click that turns it on also unlocks audio,
  // so the startup sound can play the moment loading finishes.
  if (phase === "power") {
    return (
      <div className="screen-off screen-off--power" role="dialog" aria-modal="true" aria-label="Computer is off">
        <p>MyPortfolio XP</p>
        <button type="button" className="screen-off__btn" onClick={onPowerOn} autoFocus>
          Turn it on
        </button>
      </div>
    );
  }

  if (phase === "off") {
    return (
      <div className="screen-off" role="dialog" aria-modal="true" aria-label="Computer turned off">
        <p>It&apos;s now safe to turn off your computer.</p>
        <button type="button" className="screen-off__btn" onClick={onPowerOn} autoFocus>
          Turn it back on
        </button>
      </div>
    );
  }

  if (phase === "welcome") {
    return (
      <div className="logon" role="status" aria-label="Welcome">
        <div className="logon__bar logon__bar--top" />
        <div className="logon__middle">
          <p className="logon__word">welcome</p>
        </div>
        <div className="logon__bar logon__bar--bottom" />
      </div>
    );
  }

  return (
    <div className="boot" role="status" aria-label="Starting MyPortfolio XP">
      <div className="boot__center">
        <p className="boot__mark">
          <span className="boot__name">MyPortfolio</span>
          <span className="boot__xp">xp</span>
        </p>
        <p className="boot__edition">Portfolio Edition</p>
        <div className="boot__progress" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <p className="boot__foot boot__foot--left">Copyright &copy; 2026 Jal Devecais</p>
      <p className="boot__foot boot__foot--right">Press any key or tap to skip</p>
    </div>
  );
}
