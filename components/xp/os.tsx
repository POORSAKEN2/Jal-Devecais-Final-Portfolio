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
  | "recycle";

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

function readFlag(key: string) {
  try {
    return window.localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(key: string, value: boolean) {
  try {
    window.localStorage.setItem(key, value ? "1" : "0");
  } catch {
    /* storage unavailable: setting lasts for this visit only */
  }
}

// Sound and the retro cursor are opt-in, off by default, remembered per browser.
export function useSettings() {
  const [soundOn, setSoundOn] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);

  useEffect(() => {
    setSoundOn(readFlag("jalxp-sound"));
    setCursorOn(readFlag("jalxp-cursor"));
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn((on) => {
      writeFlag("jalxp-sound", !on);
      if (!on) sounds.notify();
      return !on;
    });
  }, []);

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
