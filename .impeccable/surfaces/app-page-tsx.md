---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Home (portfolio desktop)

Scope: the single-page portfolio at `/`. Visitor mode: Experience, with a hard Persuade floor (resume + email reachable in one click from the first viewport).

Audience/job: recruiters deciding whether to interview Jal. Action: open resume, send email, inspect shipped projects. Proof: 5 real projects with screenshots, 5 roles with detail bullets.

Constraints: owner-pinned world (early-2000s Windows XP desktop), retro skin on a modern accessible core, opt-in sound/cursor, boot intro skippable and shown once per session, no Microsoft logos, wallpaper photo, or startup sound copied; everything original and parody-named.

## Direction contract

THESIS: The portfolio is a computer you log into, not a page you scroll. Refuses the hero-then-cards scroll stack: every piece of content is an application with its own native XP grammar.

OWN-WORLD: Luna palette committed on every atom: royal-blue title bars and taskbar, green Start button, beige #ECE9D8 dialog bodies, XP task-pane blues, orange hover glow on buttons, Tahoma/Trebuchet type, authored shaded 48px SVG icons, original sky-and-hill wallpaper. Raise (from the duotone spread): total palette commitment, no stock Tailwind gray or default control survives. Raise (from the exposure record): one state vocabulary everywhere: active vs inactive title bars, pressed taskbar buttons, selected icon tint, dotted focus.

STORY: Boot, log on as Jal, land on a desktop with a Welcome window naming who Jal is and four tasks (projects, resume, experience, email). Visitor opens apps, believes the work is real, emails or opens the resume.

FIRST VIEWPORT: Full-screen desktop. Left column of icons. Centered Welcome window (~560px) with name at display size, role and city, and an XP "Pick a task" list. Taskbar at bottom with Start, open-window buttons, tray (sound, cursor, mail, clock). Tray balloon points to Resume.pdf.

FORM: Windows XP desktop (owner-pinned; outranks roll). Seed key 524c79d0. Signature interaction: window manager (open, focus, drag, minimize to taskbar, maximize), boot-to-logon ritual. Motion grammar: short XP-native zoom on open/minimize, nothing scattered.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
