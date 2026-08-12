# PROMPT.md — omnira-final

Creative brief for the third Omnira frontend. Read `omnira-cinematic/PROMPT.md` and
`omnira-analytical/PROMPT.md` first — this document assumes their content and only
states what's different here.

## 1. Why this site exists

`omnira-cinematic` proved the visual/motion language: a restrained dark palette, fluid
confident type, disciplined scroll-reveals, procedural illustration instead of stock
imagery. But it is almost empty of information — one sourced stat in the whole site.

`omnira-analytical` proved the content: every stat from `CONTENT.md`, an interactive
architecture diagram, comparison tables, a real citation pattern. But it reads like a
memo, not a product a visitor would want to explore.

`omnira-final` carries analytical's full information density, rendered with
cinematic's visual polish — **slick, not completely cinematic.**

## 2. The reference: Linear, not a film

`inspo/` holds three screenshots of linear.app's marketing site. Take from them,
specifically:

- Headlines that mix a bold-white clause with a muted-gray continuation clause in the
  **same line** — this is the typographic device that replaces cinematic's huge serif
  display type as "the thing that makes a headline feel confident."
- A numbered `FIG 0.2` / `FIG 0.3` micro-label system on illustrations, alternating a
  dim label with a highlighted one for emphasis — not decoration, a wayfinding device.
- Asymmetric panels separated by hairlines, not identical bordered cards.
- Minimalist isometric/wireframe line-art icons — no photography, no icon library.
- Real product-like data visuals (scatter plots, status pills, bar charts) that look
  like an actual dashboard, not a generic "SaaS mockup."
- Generous negative space despite real content density — density comes from having
  something to say in every section, not from cramming panels together.

## 3. Non-negotiables

- **Dark theme.** Void-black ground, one saturated brand accent (signal-green, reused
  verbatim from `omnira-cinematic` for cross-site consistency — do not introduce a new
  brand hue).
- **Exactly one signature animated centerpiece**: the Architecture section's plane
  diagram (ported from `omnira-analytical`, restyled dark, given a single
  scroll-triggered staggered entrance). No pinned/scrubbed scrollytelling sequences.
  No WebGL, no Three.js, no GSAP ScrollTrigger pinning. Every other section uses plain
  `whileInView` scroll-reveals — restrained, not a film.
- **A two-level numbered IA**: `0X` per section, `0X.Y` per sub-panel, extended from
  the inspo's own "5.0 Monitor / 5.1 Pulse / 5.2 Insights" pattern across the whole
  page. This replaces both cinematic's chapter-rail and analytical's bare `01–09`
  nav, and doubles as the `FIG` label system.
- **Every stat in `omnira-analytical` survives here.** This is not a slimmer site —
  it's the same density, better presented. Do not cut a section for the sake of
  looking cleaner; solve density with layout and typography, not deletion.

## 4. Explicitly avoid

Generic SaaS layouts. Repetitive identical card grids (a grid of 3+ visually
identical bordered boxes is a smell — vary size, treatment, or split with hairlines
instead). Excessive rounded rectangles (radius scale tops out at 20px, not 32px).
Purple gradients (the one new tertiary accent, `--color-index`, is a small, sparingly
used periwinkle chip for FIG-labels only — never a gradient, never in charts). Stock
imagery (illustration is either the 6 hand-built isometric SVG icons or real
data — nothing else). Unnecessary glassmorphism (`backdrop-blur` is used in exactly
one place: the sticky top nav, matching cinematic's own restraint there).

## 5. Numbered section list

00 Hero · 01 The problem · 02 The paradigm shift · 03 What it runs · 04 Architecture
(centerpiece) · 05 Security · 06 Economics · 07 Scaling · 08 True hybrid
infrastructure · 09 Market & competition · 10 Live network · 11 Two paths ·
12 Closing thesis. `/login`, `/signup` stay unnumbered utility routes.

## 6. Sources

Do not author new citation content in this app. `components/ui/sources-note.tsx` is
a footnote *shell* only, ported for structural consistency with `omnira-analytical` —
the actual sourced figures are compiled separately in a standalone reference doc, not
duplicated here.
