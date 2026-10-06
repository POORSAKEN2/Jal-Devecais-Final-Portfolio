"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { sounds, type SoundName } from "@/lib/sound";

export type AppId =
  | "welcome"
  | "projects"
  | "viewer"
  | "experience"
  | "about"
  | "mail"
  | "system"
  | "music"
  | "recycle"
  | "resume";

export type OsApi = {
  open: (id: AppId) => void;
  close: (id: AppId) => void;
  openProject: (index: number) => void;
  projectIndex: number;
  setProjectIndex: (index: number) => void;
  play: (name: SoundName) => void;
};

export const OsContext = createContext<OsApi | null>(null);

export function useOs() {
  const os = useContext(OsContext);
  if (!os) throw new Error("useOs must be used inside the desktop");
  return os;
}

function readFlag(key: string, fallback: boolean) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value === "1";
  } catch {
    return fallback;
  }
}

function writeFlag(key: string, value: boolean) {
  try {
    window.localStorage.setItem(key, value ? "1" : "0");
  } catch {
    /* storage unavailable: setting lasts for this visit only */
  }
}

// Sound is on by default; the retro cursor is opt-in. Both are remembered per browser.
export function useSettings() {
  const [soundOn, setSoundOn] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);

  useEffect(() => {
    setSoundOn(readFlag("jalxp-sound", true));
    setCursorOn(readFlag("jalxp-cursor", false));
  }, []);

  const toggleSound = useCallback(() => {
    const next = !soundOn;
    writeFlag("jalxp-sound", next);
    if (next) sounds.startup();
    setSoundOn(next);
  }, [soundOn]);

  const toggleCursor = useCallback(() => {
    setCursorOn((on) => {
      writeFlag("jalxp-cursor", !on);
      return !on;
    });
  }, []);

  return { soundOn, cursorOn, toggleSound, toggleCursor };
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}
