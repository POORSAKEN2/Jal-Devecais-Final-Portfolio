"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { profile, projects } from "@/data/portfolio";
import { sounds, type SoundName } from "@/lib/sound";
import { BootScreen, type BootPhase } from "./BootScreen";
import {
  BriefcaseIcon,
  ComputerIcon,
  CursorGlyph,
  FolderIcon,
  GitHubGlyph,
  GoArrow,
  InfoGlyph,
  LinkedInGlyph,
  LogOffGlyph,
  MailIcon,
  NotepadIcon,
  PdfIcon,
  PictureIcon,
  PlayerIcon,
  PowerGlyph,
  RecycleIcon,
  SpeakerGlyph,
  StartOrb,
  WelcomeIcon,
  XpIconDefs,
} from "./icons";
import { OsContext, useMediaQuery, useSettings, type AppId, type OsApi } from "./os";
import { XpWindow, type WindowFrame } from "./XpWindow";
import { ExperienceApp } from "./apps/ExperienceApp";
import { MailApp } from "./apps/MailApp";
import { MusicApp } from "./apps/MusicApp";
import { NotepadApp } from "./apps/NotepadApp";
import { ProjectsApp } from "./apps/ProjectsApp";
import { RecycleApp } from "./apps/RecycleApp";
import { SystemApp } from "./apps/SystemApp";
import { ViewerApp } from "./apps/ViewerApp";
import { WelcomeApp } from "./apps/WelcomeApp";

type AppSpec = {
  title: string;
  Icon: (p: { size?: number }) => ReactNode;
  w: number;
  h: number;
  skin?: "luna" | "amp";
  resizable?: boolean;
  autoHeight?: boolean;
  render: () => ReactNode;
};

const APPS: Record<AppId, AppSpec> = {
  welcome: { title: "Welcome", Icon: WelcomeIcon, w: 580, h: 560, autoHeight: true, render: () => <WelcomeApp /> },
  projects: { title: "My Projects", Icon: FolderIcon, w: 780, h: 540, render: () => <ProjectsApp /> },
  viewer: { title: "Image Preview", Icon: PictureIcon, w: 640, h: 640, render: () => <ViewerApp /> },
  experience: { title: "My Experience", Icon: BriefcaseIcon, w: 800, h: 520, render: () => <ExperienceApp /> },
  about: { title: "About Me.txt - Notepad", Icon: NotepadIcon, w: 560, h: 480, render: () => <NotepadApp /> },
  mail: { title: "New Message", Icon: MailIcon, w: 600, h: 500, render: () => <MailApp /> },
  system: { title: "System Properties", Icon: ComputerIcon, w: 440, h: 520, resizable: false, render: () => <SystemApp /> },
  music: { title: "JalAmp", Icon: PlayerIcon, w: 400, h: 400, skin: "amp", resizable: false, render: () => <MusicApp /> },
  recycle: { title: "Recycle Bin", Icon: RecycleIcon, w: 560, h: 380, render: () => <RecycleApp /> },
};

type DesktopItem =
  | { kind: "app"; id: AppId; label: string; Icon: AppSpec["Icon"] }
  | { kind: "link"; href: string; label: string; Icon: AppSpec["Icon"] };

const DESKTOP_ITEMS: DesktopItem[] = [
  { kind: "app", id: "projects", label: "My Projects", Icon: FolderIcon },
  { kind: "link", href: profile.resumeHref, label: "Resume.pdf", Icon: PdfIcon },
  { kind: "app", id: "experience", label: "My Experience", Icon: BriefcaseIcon },
  { kind: "app", id: "about", label: "About Me.txt", Icon: NotepadIcon },
  { kind: "app", id: "mail", label: "Email Jal", Icon: MailIcon },
  { kind: "app", id: "music", label: "JalAmp", Icon: PlayerIcon },
  { kind: "app", id: "system", label: "My Toolkit", Icon: ComputerIcon },
  { kind: "app", id: "recycle", label: "Recycle Bin", Icon: RecycleIcon },
];

type Win = { id: AppId; frame: WindowFrame | null; z: number; minimized: boolean; maximized: boolean };

const TASKBAR_H = 30;

function placeFrame(id: AppId, cascade: number): WindowFrame {
  const spec = APPS[id];
  const vw = window.innerWidth;
  const vh = window.innerHeight - TASKBAR_H;
  const w = Math.min(spec.w, vw - 24);
  const h = Math.min(spec.h, vh - 24);
  if (id === "welcome") return { w, h, x: Math.round((vw - w) / 2), y: Math.max(12, Math.round((vh - h) / 2.4)) };
  const step = (cascade % 6) * 28;
  return {
    w,
    h,
    x: Math.min(140 + step, Math.max(12, vw - w - 12)),
    y: Math.min(20 + step, Math.max(12, vh - h - 12)),
  };
}

export function Desktop() {
  const [phase, setPhase] = useState<BootPhase>("boot");
  const [wins, setWins] = useState<Win[]>([{ id: "welcome", frame: null, z: 1, minimized: false, maximized: false }]);
  const [projectIndex, setProjectIndex] = useState(0);
  const [startOpen, setStartOpen] = useState(false);
  const [shutdownOpen, setShutdownOpen] = useState(false);
  const [standby, setStandby] = useState(false);
  const [balloon, setBalloon] = useState(false);
  const [allPrograms, setAllPrograms] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [clock, setClock] = useState("");
  const { soundOn, cursorOn, toggleSound, toggleCursor } = useSettings();
  const compact = useMediaQuery("(max-width: 767px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const zTop = useRef(1);
  const cascade = useRef(0);
  const openers = useRef(new Map<AppId, HTMLElement | null>());
  const startBtn = useRef<HTMLButtonElement>(null);
  const startMenu = useRef<HTMLDivElement>(null);
  const balloonRef = useRef<HTMLDivElement>(null);
  const soundRef = useRef(soundOn);
  soundRef.current = soundOn;

  const play = useCallback((name: SoundName) => {
    if (soundRef.current) sounds[name]();
  }, []);

  /* ---------- boot ---------- */

  useEffect(() => {
    let booted = false;
    try {
      booted = window.sessionStorage.getItem("jalxp-booted") === "1";
    } catch {
      /* no session storage: show the boot every time */
    }
    if (booted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPhase("done");
    setWins((ws) => ws.map((w) => (w.frame ? w : { ...w, frame: placeFrame(w.id, 0) })));
  }, []);

  const advanceBoot = useCallback(() => {
    setPhase((p) => (p === "boot" ? "welcome" : p === "welcome" ? "done" : p));
  }, []);

  // Side effects of finishing the log-on live here, not in the state updater,
  // so they fire exactly once per boot.
  const prevPhase = useRef<BootPhase>(phase);
  useEffect(() => {
    const was = prevPhase.current;
    prevPhase.current = phase;
    if (was !== "welcome" || phase !== "done") return;
    try {
      window.sessionStorage.setItem("jalxp-booted", "1");
    } catch {
      /* ignore */
    }
    if (soundRef.current) sounds.startup();
    const t = window.setTimeout(() => setBalloon(true), 900);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (!balloon) return;
    play("notify");
    const t = window.setTimeout(() => setBalloon(false), 14000);
    // Any tap elsewhere dismisses the tip so it never sits on top of content.
    const onDown = (event: PointerEvent) => {
      if (!balloonRef.current?.contains(event.target as Node)) setBalloon(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [balloon, play]);

  /* ---------- clock ---------- */

  useEffect(() => {
    const tick = () =>
      setClock(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  /* ---------- window manager ---------- */

  const focusWin = useCallback((id: AppId) => {
    setWins((ws) => {
      const target = ws.find((w) => w.id === id);
      if (!target || (target.z === zTop.current && !target.minimized)) return ws;
      zTop.current += 1;
      return ws.map((w) => (w.id === id ? { ...w, z: zTop.current, minimized: false } : w));
    });
  }, []);

  const open = useCallback(
    (id: AppId) => {
      setStartOpen(false);
      setBalloon(false);
      openers.current.set(id, document.activeElement as HTMLElement | null);
      setWins((ws) => {
        zTop.current += 1;
        if (ws.some((w) => w.id === id)) {
          return ws.map((w) => (w.id === id ? { ...w, z: zTop.current, minimized: false } : w));
        }
        cascade.current += 1;
        return [...ws, { id, frame: placeFrame(id, cascade.current), z: zTop.current, minimized: false, maximized: false }];
      });
      play("open");
    },
    [play],
  );

  const close = useCallback(
    (id: AppId) => {
      setWins((ws) => ws.filter((w) => w.id !== id));
      play("close");
      const opener = openers.current.get(id);
      openers.current.delete(id);
      window.requestAnimationFrame(() => {
        if (opener && document.body.contains(opener)) opener.focus();
      });
    },
    [play],
  );

  const minimize = useCallback(
    (id: AppId) => {
      setWins((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
      play("minimize");
    },
    [play],
  );

  const toggleMaximize = useCallback((id: AppId) => {
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)));
  }, []);

  const move = useCallback((id: AppId, x: number, y: number) => {
    setWins((ws) => ws.map((w) => (w.id === id && w.frame ? { ...w, frame: { ...w.frame, x, y } } : w)));
  }, []);

  const openProject = useCallback(
    (index: number) => {
      setProjectIndex(index);
      open("viewer");
    },
    [open],
  );

  const activeId = useMemo(() => {
    const visible = wins.filter((w) => !w.minimized);
    if (!visible.length) return null;
    return visible.reduce((a, b) => (b.z > a.z ? b : a)).id;
  }, [wins]);

  const os: OsApi = useMemo(
    () => ({ open, close, openProject, projectIndex, setProjectIndex, play }),
    [open, close, openProject, projectIndex, play],
  );

  /* ---------- start menu ---------- */

  useEffect(() => {
    if (!startOpen) {
      setAllPrograms(false);
      return;
    }
    const onDown = (event: PointerEvent) => {
      const t = event.target as Node;
      if (!startMenu.current?.contains(t) && !startBtn.current?.contains(t)) setStartOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStartOpen(false);
        startBtn.current?.focus();
      }
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    startMenu.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [startOpen]);

  /* ---------- retro cursor + sparkle trail (opt-in) ---------- */

  useEffect(() => {
    document.documentElement.classList.toggle("xp-cursor", cursorOn);
    if (!cursorOn || reducedMotion) return;
    let last = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.timeStamp - last < 45) return;
      last = event.timeStamp;
      const s = document.createElement("span");
      s.className = "sparkle";
      s.style.left = `${event.clientX + 10}px`;
      s.style.top = `${event.clientY + 14}px`;
      document.body.appendChild(s);
      window.setTimeout(() => s.remove(), 700);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [cursorOn, reducedMotion]);

  useEffect(() => {
    if (soundOn) {
      const onClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest("button, a")) sounds.click();
      };
      window.addEventListener("click", onClick, true);
      return () => window.removeEventListener("click", onClick, true);
    }
  }, [soundOn]);

  /* ---------- power ---------- */

  function power(action: "standby" | "off" | "restart") {
    setShutdownOpen(false);
    play("shutdown");
    if (action === "standby") setStandby(true);
    if (action === "off") setPhase("off");
    if (action === "restart") setPhase("boot");
  }

  const viewerTitle = `${projects[projectIndex].title} - Image Preview`;

  return (
    <OsContext.Provider value={os}>
      <XpIconDefs />
      <h1 className="sr-only">
        {profile.name}, {profile.role} in {profile.location}: portfolio
      </h1>

      <div className="desktop">
        <div className="wallpaper" aria-hidden="true">
          <svg className="wallpaper__hills" viewBox="0 0 1600 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hill-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7fc35a" />
                <stop offset="1" stopColor="#3f8f2a" />
              </linearGradient>
              <linearGradient id="hill-front" x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0" stopColor="#9bd65c" />
                <stop offset="0.35" stopColor="#5fae32" />
                <stop offset="1" stopColor="#2f7a1f" />
              </linearGradient>
            </defs>
            <path d="M0 330C260 250 520 230 820 270s560 40 780-30V600H0Z" fill="url(#hill-back)" opacity="0.85" />
            <path d="M0 420C300 300 640 250 980 300c260 38 440 110 620 90V600H0Z" fill="url(#hill-front)" />
          </svg>
        </div>

        <nav className="desktop__icons" aria-label="Desktop">
          {DESKTOP_ITEMS.map((item) => {
            const key = item.kind === "app" ? item.id : item.href;
            const inner = (
              <>
                <item.Icon size={48} />
                <span className="desk-icon__label">{item.label}</span>
              </>
            );
            return item.kind === "app" ? (
              <button
                key={key}
                type="button"
                className="desk-icon"
                data-selected={selectedIcon === key || undefined}
                onClick={() => {
                  setSelectedIcon(key);
                  open(item.id);
                }}
              >
                {inner}
              </button>
            ) : (
              <a
                key={key}
                className="desk-icon"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-selected={selectedIcon === key || undefined}
                onClick={() => {
                  setSelectedIcon(key);
                  play("open");
                }}
              >
                {inner}
              </a>
            );
          })}
        </nav>

        {wins.map((w) => {
          const spec = APPS[w.id];
          const frame = w.frame ?? { x: 0, y: 0, w: spec.w, h: spec.h };
          return (
            <XpWindow
              key={w.id}
              id={`win-${w.id}`}
              title={w.id === "viewer" ? viewerTitle : spec.title}
              icon={<spec.Icon size={16} />}
              frame={frame}
              z={w.z + 10}
              active={activeId === w.id}
              minimized={w.minimized}
              maximized={w.maximized}
              compact={compact}
              unplaced={!w.frame}
              skin={spec.skin}
              resizable={spec.resizable}
              autoHeight={spec.autoHeight}
              onFocus={() => focusWin(w.id)}
              onClose={() => close(w.id)}
              onMinimize={() => minimize(w.id)}
              onToggleMaximize={() => toggleMaximize(w.id)}
              onMove={(x, y) => move(w.id, x, y)}
            >
              {spec.render()}
            </XpWindow>
          );
        })}
      </div>

      {startOpen ? (
        <div ref={startMenu} className="startmenu" id="start-menu" aria-label="Start menu" role="region">
          <div className="startmenu__head">
            <span className="startmenu__pic">
              <WelcomeIcon size={42} />
            </span>
            <span className="startmenu__user">{profile.name}</span>
          </div>
          <div className="startmenu__cols">
            {allPrograms ? (
              <ul className="startmenu__left startmenu__all" aria-label="All Programs">
                <li>
                  <button type="button" className="startmenu__allrow" onClick={() => setAllPrograms(false)}>
                    <GoArrow className="startmenu__back" /> <strong>Back</strong>
                  </button>
                </li>
                <li className="startmenu__sep" aria-hidden="true" />
                <li>
                  <button type="button" onClick={() => open("welcome")}>
                    <WelcomeIcon size={24} /> <strong>Welcome</strong>
                  </button>
                </li>
                {DESKTOP_ITEMS.map((item) =>
                  item.kind === "app" ? (
                    <li key={item.id}>
                      <button type="button" onClick={() => open(item.id)}>
                        <item.Icon size={24} /> <strong>{item.label}</strong>
                      </button>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noreferrer" onClick={() => setStartOpen(false)}>
                        <item.Icon size={24} /> <strong>{item.label}</strong>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            ) : (
            <ul className="startmenu__left">
              <li>
                <button type="button" onClick={() => open("projects")}>
                  <FolderIcon size={32} />
                  <span>
                    <strong>My Projects</strong>
                    <small>Apps and systems I&apos;ve shipped</small>
                  </span>
                </button>
              </li>
              <li>
                <a href={profile.resumeHref} target="_blank" rel="noreferrer" onClick={() => setStartOpen(false)}>
                  <PdfIcon size={32} />
                  <span>
                    <strong>Resume.pdf</strong>
                    <small>Download or print</small>
                  </span>
                </a>
              </li>
              <li>
                <button type="button" onClick={() => open("experience")}>
                  <BriefcaseIcon size={32} />
                  <span>
                    <strong>My Experience</strong>
                    <small>Five roles since 2024</small>
                  </span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => open("mail")}>
                  <MailIcon size={32} />
                  <span>
                    <strong>Email Jal</strong>
                    <small>{profile.email}</small>
                  </span>
                </button>
              </li>
              <li className="startmenu__sep" aria-hidden="true" />
              <li>
                <button type="button" onClick={() => open("music")}>
                  <PlayerIcon size={32} />
                  <span>
                    <strong>JalAmp</strong>
                    <small>Songs on repeat</small>
                  </span>
                </button>
              </li>
              <li className="startmenu__sep" aria-hidden="true" />
              <li>
                <button type="button" className="startmenu__allrow" onClick={() => setAllPrograms(true)}>
                  <strong>All Programs</strong>
                  <GoArrow />
                </button>
              </li>
            </ul>
            )}
            <ul className="startmenu__right">
              <li>
                <button type="button" onClick={() => open("welcome")}>
                  <WelcomeIcon size={24} /> Welcome
                </button>
              </li>
              <li>
                <button type="button" onClick={() => open("about")}>
                  <NotepadIcon size={24} /> About Me
                </button>
              </li>
              <li>
                <button type="button" onClick={() => open("system")}>
                  <ComputerIcon size={24} /> My Toolkit
                </button>
              </li>
              <li className="startmenu__sep" aria-hidden="true" />
              <li>
                <a href={profile.github.href} target="_blank" rel="noreferrer">
                  <GitHubGlyph className="startmenu__glyph" /> GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
                  <LinkedInGlyph className="startmenu__glyph" /> LinkedIn
                </a>
              </li>
              <li>
                <button type="button" onClick={() => open("recycle")}>
                  <RecycleIcon size={24} /> Recycle Bin
                </button>
              </li>
            </ul>
          </div>
          <div className="startmenu__foot">
            <button
              type="button"
              onClick={() => {
                setStartOpen(false);
                setPhase("welcome");
              }}
            >
              <LogOffGlyph /> Log Off
            </button>
            <button
              type="button"
              onClick={() => {
                setStartOpen(false);
                setShutdownOpen(true);
              }}
            >
              <PowerGlyph /> Turn Off Computer
            </button>
          </div>
        </div>
      ) : null}

      <nav className="taskbar" aria-label="Taskbar">
        <button
          ref={startBtn}
          type="button"
          className="start-btn"
          aria-expanded={startOpen}
          aria-controls="start-menu"
          onClick={() => setStartOpen((o) => !o)}
        >
          <StartOrb />
          <span>start</span>
        </button>

        <ul className="taskbar__tasks">
          {wins.map((w) => {
            const spec = APPS[w.id];
            const isActive = activeId === w.id;
            return (
              <li key={w.id}>
                <button
                  type="button"
                  className="task-btn"
                  aria-pressed={isActive}
                  aria-label={w.id === "viewer" ? viewerTitle : spec.title}
                  onClick={() => (isActive ? minimize(w.id) : focusWin(w.id))}
                >
                  <spec.Icon size={16} />
                  <span>{w.id === "viewer" ? viewerTitle : spec.title}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="tray">
          <button
            type="button"
            className="tray__btn"
            aria-label="Email Jal"
            title="Email Jal"
            onClick={() => open("mail")}
          >
            <MailIcon size={18} />
          </button>
          <button
            type="button"
            className="tray__btn"
            aria-pressed={soundOn}
            aria-label={soundOn ? "Turn sounds off" : "Turn sounds on"}
            title={soundOn ? "Sounds on" : "Sounds off"}
            onClick={toggleSound}
          >
            <SpeakerGlyph muted={!soundOn} />
          </button>
          <button
            type="button"
            className="tray__btn"
            aria-pressed={cursorOn}
            aria-label={cursorOn ? "Use the normal cursor" : "Use the retro cursor"}
            title={cursorOn ? "Retro cursor on" : "Retro cursor off"}
            onClick={toggleCursor}
          >
            <CursorGlyph on={cursorOn} />
          </button>
          <time className="tray__clock" suppressHydrationWarning>
            {clock}
          </time>
        </div>

        {balloon && phase === "done" ? (
          <div ref={balloonRef} className="balloon" role="status">
            <button type="button" className="balloon__close" aria-label="Dismiss tip" onClick={() => setBalloon(false)}>
              <svg viewBox="0 0 10 10" width="10" height="10" aria-hidden="true">
                <path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <p className="balloon__title">
              <InfoGlyph /> Welcome to Jal&apos;s desktop
            </p>
            <p className="balloon__text">Hiring? My resume and email are one click away.</p>
            <p className="balloon__actions">
              <a href={profile.resumeHref} target="_blank" rel="noreferrer">
                Open Resume.pdf
              </a>
              <button
                type="button"
                onClick={() => {
                  setBalloon(false);
                  open("mail");
                }}
              >
                Email Jal
              </button>
            </p>
          </div>
        ) : null}
      </nav>

      {shutdownOpen ? (
        <div className="shutdown-veil">
          <div className="shutdown" role="dialog" aria-modal="true" aria-labelledby="shutdown-title">
            <p id="shutdown-title" className="shutdown__title">
              Turn off computer
            </p>
            <div className="shutdown__options">
              <button type="button" onClick={() => power("standby")} autoFocus>
                <span className="shutdown__orb shutdown__orb--standby" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15.5 4.5a8 8 0 1 0 4 11.6A7 7 0 0 1 15.5 4.5Z" fill="#fff" /></svg>
                </span>
                Stand By
              </button>
              <button type="button" onClick={() => power("off")}>
                <span className="shutdown__orb shutdown__orb--off" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 4v7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" /><path d="M7.4 7.2a7 7 0 1 0 9.2 0" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" /></svg>
                </span>
                Turn Off
              </button>
              <button type="button" onClick={() => power("restart")}>
                <span className="shutdown__orb shutdown__orb--restart" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M18.5 12a6.5 6.5 0 1 1-2-4.7" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" /><path d="M17.5 3.5v4.6h-4.6" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                Restart
              </button>
            </div>
            <div className="shutdown__foot">
              <button type="button" className="xp-btn" onClick={() => setShutdownOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {standby ? (
        <button type="button" className="standby" onClick={() => setStandby(false)} autoFocus>
          <span>Stand by. Click anywhere to wake.</span>
        </button>
      ) : null}

      <BootScreen phase={phase} onAdvance={advanceBoot} onPowerOn={() => setPhase("boot")} />
    </OsContext.Provider>
  );
}
