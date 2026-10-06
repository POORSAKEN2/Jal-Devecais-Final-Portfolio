"use client";

import { useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { CloseGlyph, MaximizeGlyph, MinimizeGlyph } from "./icons";

export type WindowFrame = { x: number; y: number; w: number; h: number };

type XpWindowProps = {
  id: string;
  title: string;
  icon: ReactNode;
  frame: WindowFrame;
  z: number;
  active: boolean;
  minimized: boolean;
  maximized: boolean;
  compact: boolean;
  unplaced?: boolean;
  autoHeight?: boolean;
  skin?: "luna" | "amp";
  resizable?: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onMove: (x: number, y: number) => void;
  children: ReactNode;
};

export function XpWindow({
  id,
  title,
  icon,
  frame,
  z,
  active,
  minimized,
  maximized,
  compact,
  unplaced = false,
  autoHeight = false,
  skin = "luna",
  resizable = true,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onMove,
  children,
}: XpWindowProps) {
  const ref = useRef<HTMLElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const filled = maximized || compact;

  // New windows take focus so keyboard users land inside them.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    onFocus();
    if (filled || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;
    drag.current = { dx: event.clientX - frame.x, dy: event.clientY - frame.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 70;
    const x = Math.min(Math.max(event.clientX - drag.current.dx, -frame.w + 120), maxX);
    const y = Math.min(Math.max(event.clientY - drag.current.dy, 0), maxY);
    onMove(x, y);
  }

  function endDrag() {
    drag.current = null;
  }

  const style = filled || unplaced
    ? { zIndex: z }
    : autoHeight
      ? { zIndex: z, left: frame.x, top: frame.y, width: frame.w, maxHeight: frame.h }
      : { zIndex: z, left: frame.x, top: frame.y, width: frame.w, height: frame.h };

  return (
    <section
      ref={ref}
      role="dialog"
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
      hidden={minimized}
      data-skin={skin}
      data-active={active || undefined}
      className={`xp-window ${filled ? "xp-window--filled" : unplaced ? "xp-window--auto" : ""} ${autoHeight && !filled ? "xp-window--fit" : ""}`}
      style={style}
      onPointerDownCapture={onFocus}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
    >
      <div
        className="xp-titlebar"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={(event) => {
          if (!compact && resizable && !(event.target as HTMLElement).closest("button")) onToggleMaximize();
        }}
      >
        <span className="xp-titlebar__icon">{icon}</span>
        <h2 id={`${id}-title`} className="xp-titlebar__text">
          {title}
        </h2>
        <div className="xp-titlebar__controls">
          <button type="button" className="xp-ctl" aria-label={`Minimize ${title}`} onClick={onMinimize}>
            <MinimizeGlyph />
          </button>
          {!compact && resizable ? (
            <button
              type="button"
              className="xp-ctl"
              aria-label={maximized ? `Restore ${title}` : `Maximize ${title}`}
              onClick={onToggleMaximize}
            >
              <MaximizeGlyph restore={maximized} />
            </button>
          ) : null}
          <button type="button" className="xp-ctl xp-ctl--close" aria-label={`Close ${title}`} onClick={onClose}>
            <CloseGlyph />
          </button>
        </div>
      </div>
      <div className="xp-window__body">{children}</div>
    </section>
  );
}
