---
name: Jal Devecais XP
description: A portfolio you log into. Luna-era Windows desktop, modern accessible core.
colors:
  luna-blue: "#0058ee"
  luna-blue-deep: "#00138c"
  luna-idle: "#7a96df"
  start-green: "#47a547"
  dialog-beige: "#ece9d8"
  beige-rule: "#d8d2bd"
  selection-blue: "#316ac5"
  link-blue: "#1a4fb3"
  task-pane-blue: "#6375d6"
  task-pane-panel: "#d6dff7"
  field-border: "#7f9db9"
  group-legend: "#0046d5"
  luna-orange: "#f6a54b"
  close-red: "#dc6527"
  balloon-cream: "#ffffe1"
  paper-white: "#ffffff"
  ink: "#000000"
  amp-chrome: "#2b2c3e"
  amp-lcd-green: "#00e000"
typography:
  display:
    fontFamily: "Trebuchet MS, Tahoma, Segoe UI, sans-serif"
    fontSize: "clamp(34px, 6vw, 48px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Trebuchet MS, Tahoma, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
  title:
    fontFamily: "Trebuchet MS, Tahoma, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.01em"
  body:
    fontFamily: "Tahoma, Segoe UI, Verdana, DejaVu Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Tahoma, Segoe UI, Verdana, DejaVu Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  mono:
    fontFamily: "Lucida Console, Courier New, monospace"
    fontSize: "14px"
    lineHeight: 1.5
rounded:
  none: "0px"
  control: "3px"
  balloon: "8px"
  window-top: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "22px"
components:
  button-push:
    backgroundColor: "{colors.dialog-beige}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "25px"
  input-field:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 6px"
  window-titlebar:
    backgroundColor: "{colors.luna-blue}"
    textColor: "{colors.paper-white}"
    typography: "{typography.title}"
    height: "30px"
  window-titlebar-inactive:
    backgroundColor: "{colors.luna-idle}"
    textColor: "#dce6fb"
  start-button:
    backgroundColor: "{colors.start-green}"
    textColor: "{colors.paper-white}"
    height: "30px"
  list-row-selected:
    backgroundColor: "{colors.selection-blue}"
    textColor: "{colors.paper-white}"
  task-pane-panel:
    backgroundColor: "{colors.task-pane-panel}"
    textColor: "{colors.link-blue}"
    rounded: "{rounded.control}"
  balloon-tip:
    backgroundColor: "{colors.balloon-cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.balloon}"
---

# Design System: Jal Devecais XP

## Overview

**Creative North Star: "The Logged-In Desktop"**

The portfolio is a computer the visitor logs into, not a page they scroll. Every piece of content is an application with its own native early-2000s grammar: the projects are an Explorer folder, a project is an Image Preview, experience is a details-view list, the bio is a Notepad file, contact is a New Message window, the toolkit is System Properties with a Device Manager tree, and the favorite music is a skinned player. The world is Windows XP's Luna theme, rebuilt from scratch with original artwork and parody names, never copied Microsoft assets.

Commitment is total. Every atom speaks Luna: royal-blue gradient title bars, a green Start button, beige dialog bodies, task-pane blues, orange hover glow on push buttons, dotted focus rectangles, shaded 48px icons. Under the skin the core is modern: responsive (windows open maximized on phones), keyboard operable, reduced-motion aware, with sound on by default behind a tray mute and the retro cursor off until the visitor turns it on.

Density is desktop-native: chrome sizes are small (12–13px labels), but reading content (summaries, experience bullets, project descriptions) sits at 13.5–14px with 1.55 line height so a recruiter can actually read it.

**Key Characteristics:**
- Content as applications, each in its period-correct form.
- One state vocabulary everywhere: active/inactive title bars, pressed taskbar buttons, selection blue, dotted focus.
- Authored, shaded icon set; original sky-and-hill wallpaper.
- Nostalgia with an off switch: boot ritual once per session, synthesized sounds on by default with a tray mute, pixel cursor opt-in.

## Colors

A committed Luna palette: saturated royal blue owns all chrome, beige owns every dialog body, and orange and green appear only where XP put them.

### Primary
- **Luna Royal Blue** (luna-blue): active title bars, window frames, the taskbar's body, and every primary chrome surface. Deepens to Midnight Frame (luna-blue-deep) on frame outlines.
- **Idle Periwinkle** (luna-idle): inactive windows' frames and title bars. Its only job is telling the visitor which window has focus.

### Secondary
- **Start Green** (start-green): the Start button only, and the green task arrows (go/next) in Welcome, Image Preview and All Programs.
- **Luna Orange** (luna-orange): the hairline rule under header bands (Welcome, Start menu), the selected-tab top edge, push-button hover glow.

### Tertiary
- **Close Ember** (close-red): the close control only.
- **Balloon Cream** (balloon-cream): tray balloons and inline error notes.

### Neutral
- **Dialog Beige** (dialog-beige): the body of every window and dialog. Never swap it for gray.
- **Beige Rule** (beige-rule): dividers between toolbar, address bar, content and status bar.
- **Paper White** (paper-white): content wells (lists, Explorer content, Notepad, text fields).
- **Selection Blue** (selection-blue): selected rows, hovered Start-menu items, text selection.
- **Link Blue** (link-blue): every in-window link and task-pane action.

### Named Rules
**The Chrome Is Blue, The Body Is Beige Rule.** Window chrome is Luna blue; window bodies are dialog beige or paper white. No third surface color is introduced for content containers.

**The Earned Orange Rule.** Orange appears only as XP used it: header hairlines, selected-tab edges, hover glow. Never as a fill or a call-to-action color.

## Typography

**Display Font:** Trebuchet MS (with Tahoma, Segoe UI)
**Body Font:** Tahoma (with Segoe UI, Verdana, DejaVu Sans)
**Label/Mono Font:** Lucida Console (Notepad and the JalAmp LCD only)

**Character:** Trebuchet carries XP's title-bar and Welcome-screen voice: humanist, slightly italic-friendly, bold. Tahoma is the workhorse UI face of the era, compact and legible at 11–13px.

### Hierarchy
- **Display** (700, clamp(34px, 6vw, 48px), 1): the name in the Welcome band and the boot wordmark only.
- **Headline** (400, 20px): "Pick a task…" style section voices in Trebuchet, colored deep blue.
- **Title** (700, 13px): window title bars, with a 1px navy text shadow when active.
- **Body** (400, 14px, 1.55): summaries, project descriptions, experience bullets (13.5px). Keep to 60–68ch.
- **Label** (400, 12px): menus, address bars, status bars, buttons, legends, taskbar.

### Named Rules
**The Readable Payload Rule.** Chrome may be 12px; anything a recruiter reads to decide (descriptions, bullets, summaries) is 13.5px or larger.

**The No Kicker Rule.** Headings stand alone. No small label or eyebrow above a heading; the window title already names the context.

## Layout

The desktop fills the viewport above a 30px taskbar (40px on phones). Desktop icons run in a left column that wraps into more columns on short screens. Windows are absolutely positioned, cascade 28px per new window from (140, 20), clamp to the viewport, drag by their title bar, and maximize on title-bar double-click. The Welcome window sizes to its content and centers.

Under 768px every window opens maximized over the desktop; icons become a four-column grid; the Explorer task pane hides; Experience stacks list over detail; taskbar buttons collapse to icons with accessible names; the tray keeps mail, sound, cursor and clock.

Spacing is a tight 4/8/12/16/22px ladder: 4–8px inside chrome, 12–16px window content padding, 22px between content groups.

## Elevation & Depth

Depth comes from the window stack, not cards. Windows carry a soft two-layer drop shadow plus a 1px dark frame outline; the focused window sits on top with the deeper shadow, inactive windows get a lighter one. Inside windows everything is flat except Luna's own bevels (push buttons, taskbar buttons, tabs), which are gradients and inset highlights, never offset block shadows.

### Shadow Vocabulary
- **Active window** (`0 0 0 1px #00138c, 0 14px 34px rgba(0,20,60,.38), 0 3px 8px rgba(0,20,60,.25)`): the focused window.
- **Inactive window** (`0 0 0 1px #5a74c4, 0 8px 22px rgba(0,20,60,.22)`): background windows.
- **Popup** (`4px 4px 14px rgba(0,0,0,.45)`): Start menu. Balloons use `2px 5px 12px rgba(0,0,0,.3)`.

### Named Rules
**The Stack Is The Depth Rule.** Elevation exists only between windows and popups. Content inside a window never floats on its own shadow.

## Shapes

Windows have 8px rounded top corners and square bottoms (square everywhere when maximized). Controls use 3px radii. Text fields are square. Balloons are 8px with a pointed tail toward the tray. The Start button is the one asymmetric shape: square left, 12px rounded right. The JalAmp skin drops Luna geometry for square metal chrome with inset LCD panels.

## Components

### Buttons
- **Shape:** gently rounded (3px), 1px navy border (#003c74).
- **Push button:** white-to-beige vertical gradient, 12px Tahoma, min 75×25px.
- **Hover / Focus:** hover adds the orange inner glow; keyboard focus adds the blue inner glow plus a dotted rectangle inset 5px; active inverts the gradient.
- **Toolbar buttons** (Send, Previous/Next): borderless until hover, then a beige outline on white.

### Inputs / Fields
- **Style:** square, 1px steel-blue border (#7f9db9), white fill; read-only fields tint to #f7f6f0.
- **Focus:** border shifts to selection blue with a 1px soft ring.
- **Error:** a cream balloon-style note with a black hairline below the field, `role="alert"`.

### Navigation
- **Taskbar:** Luna blue gradient; green Start button with italic Trebuchet "start"; one button per open window, pressed (#1e52b7, inset shadow) when that window is focused; clicking a focused window's button minimizes it.
- **Start menu:** blue header with the JD tile and name, orange hairline; white left column of bold apps with descriptions; light-blue right column of places; "All Programs" swaps in the full list; Log Off and Turn Off in the footer.
- **Task pane:** blue gradient sidebar with white-headed panels of link-blue actions.

### Windows (signature)
Title bar 30px with a 16px app icon, title, and minimize/maximize/close controls (21px; close in ember). Active and inactive states are always visibly distinct. A window that owns an open message box renders inactive. Escape closes the focused window and returns focus to whatever opened it.

### List view (signature)
Details-view rows with a 16px icon, bold role, muted company and tabular dates; selected row in selection blue with white text; arrow keys move selection.

### JalAmp (signature)
A skinned player in metal chrome: black LCD with green digits, a scrolling marquee title, a spectrum visualizer, bevelled transport buttons, cover art, and a green-on-black playlist with a blue selected row. "Play on Spotify" is honest: no audio is faked.

## Do's and Don'ts

### Do:
- **Do** express every new piece of content as an XP application with its native anatomy (menu bar, address bar, status bar, group boxes, tabs).
- **Do** keep active/inactive, pressed and selected states visibly distinct on every new control.
- **Do** keep resume and email one click from the first viewport (Welcome tasks, tray mail, Start menu, balloon).
- **Do** author new icons in the existing shaded 48px style, referencing the shared gradient sprite.
- **Do** keep a one-click sound mute in the tray, keep the retro cursor opt-in, and honor `prefers-reduced-motion`.

### Don't:
- **Don't** copy Microsoft assets: no Windows flag, no Bliss photograph, no real startup sound, no real product names.
- **Don't** use stock web-app gray, rounded cards, or modern pill buttons inside a window.
- **Don't** add a kicker or eyebrow label above any heading.
- **Don't** fake functionality: decorative menu-bar words stay non-interactive, and nothing pretends to play audio, send mail, or restore files it can't.
- **Don't** let a tip or popup sit on content: balloons dismiss on any tap elsewhere or when a window opens.
