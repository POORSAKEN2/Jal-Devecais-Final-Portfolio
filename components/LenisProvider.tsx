"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null
    });

    window.__lenis = lenis;

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return children;
}
