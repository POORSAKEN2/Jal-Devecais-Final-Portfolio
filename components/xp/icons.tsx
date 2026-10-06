import type { ReactNode, SVGProps } from "react";

// Gradients live in one hidden sprite so every icon instance can reference them.
export function XpIconDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="xpg-folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d37a" />
          <stop offset="1" stopColor="#d9a630" />
        </linearGradient>
        <linearGradient id="xpg-folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff2b8" />
          <stop offset="0.45" stopColor="#fbd86c" />
          <stop offset="1" stopColor="#e9b23b" />
        </linearGradient>
        <linearGradient id="xpg-paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfe4ee" />
        </linearGradient>
        <linearGradient id="xpg-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0564a" />
          <stop offset="1" stopColor="#b51d16" />
        </linearGradient>
        <linearGradient id="xpg-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6fb2ff" />
          <stop offset="1" stopColor="#1458d6" />
        </linearGradient>
        <linearGradient id="xpg-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fd0ff" />
          <stop offset="0.6" stopColor="#2f86e8" />
          <stop offset="1" stopColor="#1652c4" />
        </linearGradient>
        <linearGradient id="xpg-beige" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f1e6" />
          <stop offset="1" stopColor="#c9c2a8" />
        </linearGradient>
        <linearGradient id="xpg-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fe07a" />
          <stop offset="1" stopColor="#2e9a2a" />
        </linearGradient>
        <linearGradient id="xpg-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc35a" />
          <stop offset="1" stopColor="#e5730f" />
        </linearGradient>
        <linearGradient id="xpg-brown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c58a4e" />
          <stop offset="1" stopColor="#7e4b1f" />
        </linearGradient>
        <linearGradient id="xpg-bin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b9cfc3" />
          <stop offset="0.45" stopColor="#f2f8f4" />
          <stop offset="1" stopColor="#8fae9c" />
        </linearGradient>
        <radialGradient id="xpg-disc" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#c9e6ff" />
          <stop offset="0.65" stopColor="#ffd38a" />
          <stop offset="1" stopColor="#8aa7d8" />
        </radialGradient>
      </defs>
    </svg>
  );
}

type IconProps = { size?: number; className?: string };

function Svg({ size = 48, className, children, ...rest }: IconProps & { children: ReactNode } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

const shadow = <ellipse cx="24" cy="44.5" rx="17" ry="2" fill="#000" opacity="0.18" />;

export const FolderIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <path d="M4 12a2 2 0 0 1 2-2h11l4 4h21a2 2 0 0 1 2 2v24H4Z" fill="url(#xpg-folder-back)" stroke="#b5841e" />
    <rect x="8" y="15" width="32" height="10" rx="1" fill="#fff" stroke="#c9c9c9" />
    <path d="M2.5 20.5a2 2 0 0 1 2-2h39a2 2 0 0 1 2 2.3l-2.6 19a2 2 0 0 1-2 1.7H6.6a2 2 0 0 1-2-1.7Z" fill="url(#xpg-folder-front)" stroke="#c18f22" />
    <path d="M6 22h36" stroke="#fff" strokeOpacity="0.8" />
  </Svg>
);

export const PdfIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <path d="M10 3h20l9 9v31H10Z" fill="url(#xpg-paper)" stroke="#8c94a6" />
    <path d="M30 3v9h9" fill="#e6eaf2" stroke="#8c94a6" strokeLinejoin="round" />
    <path d="M14 17h20M14 21h20M14 25h14" stroke="#b7bfcf" strokeWidth="1.5" />
    <rect x="6" y="29" width="28" height="11" rx="2" fill="url(#xpg-red)" stroke="#8e1410" />
    <text x="20" y="37.6" textAnchor="middle" fontFamily="Tahoma, Verdana, sans-serif" fontWeight="700" fontSize="8" fill="#fff">
      PDF
    </text>
  </Svg>
);

export const NotepadIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <rect x="9" y="6" width="30" height="37" rx="1.5" fill="url(#xpg-paper)" stroke="#7d869a" />
    <rect x="9" y="6" width="30" height="7" fill="url(#xpg-blue)" stroke="#1c4cae" />
    {[14, 20, 26, 32].map((x) => (
      <rect key={x} x={x} y="3.5" width="2.4" height="7" rx="1.2" fill="#e5e7ec" stroke="#7d869a" strokeWidth="0.8" />
    ))}
    <path d="M13 19h22M13 24h22M13 29h22M13 34h15" stroke="#9aa6c3" strokeWidth="1.4" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <rect x="4" y="11" width="40" height="28" rx="2" fill="url(#xpg-paper)" stroke="#5d7bb8" />
    <path d="M4.8 12.2 24 27l19.2-14.8" fill="none" stroke="#5d7bb8" strokeWidth="1.6" />
    <path d="M4.8 38 18 23.5M43.2 38 30 23.5" stroke="#9fb2d9" strokeWidth="1.2" />
    <circle cx="38" cy="12" r="6.5" fill="url(#xpg-blue)" stroke="#fff" strokeWidth="1.5" />
    <path d="M35 12h6M38 9v6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

export const PlayerIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <circle cx="22" cy="23" r="18" fill="url(#xpg-disc)" stroke="#6e86b4" />
    <circle cx="22" cy="23" r="5.5" fill="#fff" stroke="#8a9cc0" />
    <circle cx="22" cy="23" r="2" fill="#c6cfdf" />
    <path d="M10 15a14 14 0 0 1 9-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    <circle cx="35" cy="34" r="10" fill="url(#xpg-orange)" stroke="#a24f05" />
    <path d="M32 29.5v9l7.5-4.5Z" fill="#fff" />
  </Svg>
);

export const ComputerIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <rect x="5" y="5" width="38" height="29" rx="2.5" fill="url(#xpg-beige)" stroke="#8a8370" />
    <rect x="9" y="9" width="30" height="21" rx="1" fill="url(#xpg-screen)" stroke="#45597d" />
    <path d="M9 23c8-6 16-7 30-3v10H9Z" fill="#59b94a" opacity="0.9" />
    <path d="M11 11h12" stroke="#fff" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M19 34h10l2 6H17Z" fill="url(#xpg-beige)" stroke="#8a8370" />
    <rect x="12" y="40" width="24" height="3" rx="1.5" fill="url(#xpg-beige)" stroke="#8a8370" />
  </Svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <path d="M18 13v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" fill="none" stroke="#5b3413" strokeWidth="2.4" />
    <rect x="5" y="13" width="38" height="28" rx="3" fill="url(#xpg-brown)" stroke="#5b3413" />
    <path d="M5 24c12 4 26 4 38 0" fill="none" stroke="#5b3413" strokeWidth="1.2" />
    <rect x="20.5" y="22" width="7" height="6" rx="1" fill="url(#xpg-orange)" stroke="#7a4310" />
    <path d="M8 16h32" stroke="#e7b583" strokeOpacity="0.7" />
  </Svg>
);

export const RecycleIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <path d="M10 13h28l-3 29a2 2 0 0 1-2 1.8H15a2 2 0 0 1-2-1.8Z" fill="url(#xpg-bin)" stroke="#5f7f6d" />
    <ellipse cx="24" cy="13" rx="15" ry="3.5" fill="#dfeee5" stroke="#5f7f6d" />
    <path d="M17 19l1.6 20M24 19.5v20M31 19l-1.6 20" stroke="#8fb09c" strokeWidth="1.2" />
    <path d="m19.5 30 3-5 3 5m1.6-1.5 2.4 4.5h-6m-5.2 0H16l2.6-4.4" fill="none" stroke="#2f8a3c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const WelcomeIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <rect x="5" y="5" width="38" height="36" rx="7" fill="url(#xpg-orange)" stroke="#a24f05" />
    <path d="M9 11c4-3 26-3 30 0" stroke="#fff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" fill="none" />
    <text x="24" y="31" textAnchor="middle" fontFamily="'Trebuchet MS', Tahoma, sans-serif" fontWeight="700" fontStyle="italic" fontSize="17" fill="#fff">
      JD
    </text>
  </Svg>
);

export const PictureIcon = (p: IconProps) => (
  <Svg {...p}>
    {shadow}
    <rect x="5" y="8" width="38" height="31" rx="1.5" fill="#fff" stroke="#7d869a" />
    <rect x="8.5" y="11.5" width="31" height="24" fill="url(#xpg-screen)" />
    <path d="M8.5 31c7-7 14-8 31-3v7.5h-31Z" fill="#4fae3f" />
    <circle cx="32" cy="18" r="3" fill="#fff2a8" />
  </Svg>
);

/* 16px glyphs for taskbar, tray, menus */

type GlyphProps = { className?: string };

export const GoArrow = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7.2" fill="url(#xpg-green)" stroke="#257a22" />
    <path d="M4.5 8h6M8 5l3 3-3 3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SpeakerGlyph = ({ muted, className }: GlyphProps & { muted: boolean }) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={className}>
    <path d="M2 6h3l4-3.5v11L5 10H2Z" fill="#f1f1f1" stroke="#1d2f5e" strokeWidth="0.9" strokeLinejoin="round" />
    {muted ? (
      <path d="m10.5 5.5 4 5m0-5-4 5" stroke="#e03a1e" strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.6a6 6 0 0 1 0 8.8" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    )}
  </svg>
);

export const CursorGlyph = ({ on, className }: GlyphProps & { on: boolean }) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={className}>
    <path d="M3 1.5v11.5l3-2.8 2 4.3 2-.9-2-4.2h4Z" fill="#fff" stroke="#000" strokeWidth="0.9" strokeLinejoin="round" />
    {on ? <path d="M12.5 2.5l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5Z" fill="#ffe14d" stroke="#b07a00" strokeWidth="0.5" /> : null}
  </svg>
);

export const PowerGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className={className}>
    <rect x="1" y="1" width="22" height="22" rx="4" fill="url(#xpg-red)" stroke="#fff" strokeWidth="1.2" />
    <path d="M12 5.5v6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M8 8.2a5.5 5.5 0 1 0 8 0" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const LogOffGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className={className}>
    <rect x="1" y="1" width="22" height="22" rx="4" fill="url(#xpg-orange)" stroke="#fff" strokeWidth="1.2" />
    <path d="M10 6H6.5v12H10" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    <path d="M10 12h8m-3-3.2L18.2 12 15 15.2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GitHubGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.16 1.17.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.48 3.16-1.17 3.16-1.17.62 1.57.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedInGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={className}>
    <rect width="24" height="24" rx="3" fill="#0a66c2" />
    <path
      fill="#fff"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z"
    />
  </svg>
);

export const PhoneGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={className}>
    <rect x="6" y="1.5" width="12" height="21" rx="2.5" fill="url(#xpg-beige)" stroke="#5c5646" />
    <rect x="8" y="4" width="8" height="10" rx="0.8" fill="url(#xpg-screen)" />
    <circle cx="12" cy="18.5" r="1.6" fill="#5c5646" />
  </svg>
);

export const InfoGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7.2" fill="url(#xpg-blue)" stroke="#0e3f9e" />
    <circle cx="8" cy="4.6" r="1.1" fill="#fff" />
    <path d="M8 7v5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WarningGlyph = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" className={className}>
    <path d="M16 2.5 30 28H2Z" fill="url(#xpg-orange)" stroke="#8d4a06" strokeLinejoin="round" />
    <path d="M16 11v8" stroke="#000" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="16" cy="23.5" r="1.6" fill="#000" />
  </svg>
);

export const StartOrb = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className={className}>
    <circle cx="10" cy="10" r="8.6" fill="url(#xpg-orange)" stroke="#fff" strokeWidth="1.2" />
    <path d="M4.5 7.5a6 6 0 0 1 11 0" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <text x="10" y="14" textAnchor="middle" fontFamily="'Trebuchet MS', Tahoma, sans-serif" fontWeight="700" fontStyle="italic" fontSize="10" fill="#fff">
      J
    </text>
  </svg>
);

/* Title-bar control glyphs */

export const MinimizeGlyph = () => (
  <svg viewBox="0 0 13 13" width="13" height="13" aria-hidden="true">
    <rect x="3" y="9" width="7" height="2.4" fill="#fff" />
  </svg>
);

export const MaximizeGlyph = ({ restore }: { restore: boolean }) => (
  <svg viewBox="0 0 13 13" width="13" height="13" aria-hidden="true">
    {restore ? (
      <>
        <path d="M4.5 1.5h7v6" fill="none" stroke="#fff" strokeWidth="1.4" />
        <rect x="1.7" y="4.2" width="7" height="7" fill="none" stroke="#fff" strokeWidth="1.4" />
        <rect x="1.7" y="4.2" width="7" height="2" fill="#fff" />
      </>
    ) : (
      <>
        <rect x="1.7" y="1.7" width="9.6" height="9.6" fill="none" stroke="#fff" strokeWidth="1.4" />
        <rect x="1.7" y="1.7" width="9.6" height="2.4" fill="#fff" />
      </>
    )}
  </svg>
);

export const CloseGlyph = () => (
  <svg viewBox="0 0 13 13" width="13" height="13" aria-hidden="true">
    <path d="m2.5 2.5 8 8m0-8-8 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
