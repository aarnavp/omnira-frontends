# Omnira — Cinematic / Immersive Build Prompt

You are building **one of two parallel Omnira websites**. This one is the
cinematic direction. A sibling variant (analytical/investor) is being built
separately in `omnira-analytical/` — do not read it, borrow from it, or try
to reconcile visual language with it. The two are supposed to look like
different companies at first glance while telling the same underlying truth.

**Before writing code:**
1. Read `/AGENTS.md` at the repo root. It is not optional context — it is
   binding: stack (Next.js App Router + React + TypeScript, no backend),
   repo layout, the backend policy in §5, and the verification/report format
   in §6–7 all apply here exactly as written. This document adds direction
   on top of it; it does not replace it.
2. Read `/CONTENT.md`. It is the source of truth for what Omnira actually
   *is*. **Note:** the source content refers to the product as "360 World"
   throughout — that is a legacy/internal name for the same system. Replace
   every instance with "Omnira" in anything user-facing. Never ship the
   string "360 World".
3. Look at `brand_assets/` in this folder (a screenshot of the pre-redesign
   live dashboard). Treat it as *evidence this company is real and building
   something measurable* — not as a template. You are explicitly encouraged
   to depart from its light, dashboard-first visual language. Keep the
   wordmark logic (a small mark + "Omnira") and the fact that it is honest
   about live, unglamorous numbers; discard the rest if a stronger cinematic
   language demands it.
4. Skim `/COMPETITION.MD` at the repo root and **Appendix (§10) below**.
   It's mostly competitive/GTM detail that belongs on the analytical site,
   not this one — but it contains one fact worth carrying into this film:
   Omnira settles in plain dollars, never a crypto token. That's a real,
   sourced differentiator (see §10) and a natural beat for the Contribute
   half of "Two Ways In." Don't otherwise turn this page into a competitor
   comparison — that register belongs to `omnira-analytical/`.
5. This directory is the project root for this variant. Scaffold a fresh
   Next.js app here following the repo layout in AGENTS.md §2
   (`app/`, `components/ui/`, `components/<feature>/`, `lib/api/`,
   `lib/utils/`, `hooks/`, `types/` — `brand_assets/` already exists, keep it).

---

## 1. Creative direction

The site is a single continuous scroll-driven film in three acts, matching
the arc in the brief: **the ceiling on today's compute → the discovery of
idle capacity as a network → Omnira as the invisible layer underneath
everything**. The visitor should never feel like they landed on a "startup
homepage" — they should feel like they opened a product film that happens
to let them click through at the end.

Reference points to hold in your head (as *quality bars*, not as things to
imitate literally): Apple product-reveal pages, Stripe's globe/network
sequences, high-production tech documentaries (the kind that explain a
system by making you feel its scale before they explain its mechanics).
The emotional target across the whole page is **awe settling into quiet
confidence** — not hype, not sci-fi cosplay. Nothing about Omnira is
fictional; the cinematic treatment earns its drama from a true story
(idle devices outnumber data centers by orders of magnitude), not from
invented spectacle.

One-line test for every section you build: *does this shot explain the
idea, or just decorate the page?* If it's decoration, cut it.

## 2. Visual identity

Depart from the brand screenshot's light theme — go **dark-first**. This is
the one variant explicitly licensed to do that (see AGENTS §3.2 /
TASK.md), and dark space reads as "network at night, lighting up" far
better than a white dashboard does.

- **Base palette**: near-black ground (`#05070A`–`#0A0D12` range), not pure
  black — pure black kills the sense of depth you need for particle/glow
  work. One primary accent drawn from the brand's green family but pushed
  toward something more electric/bioluminescent (a signal green, roughly
  the hue of the brand mark's lime green but higher chroma) — this is the
  "network is alive" color, used for glowing nodes, active states, and the
  accent stroke on the wordmark. One secondary color (a cool cyan or warm
  amber — pick one, don't use both) for data-in-motion: particle trails,
  connection lines, the moment compute moves from one device to another.
  Neutral grays for body copy, desaturated so the accent colors stay the
  only saturated things on screen.
- **Type**: a display serif or high-personality variable grotesk for
  chapter headlines — something with documentary-title-card weight (e.g.
  Fraunces, or a bold variable grotesk like Bricolage Grotesque via
  `next/font/google`) paired with a quiet, highly legible grotesk for body
  copy (Inter or Geist Sans). Reserve a monospace (JetBrains Mono or Geist
  Mono) for anything that reads as *data* — counters, coordinates, the live
  network numbers — this monospace-for-data convention is the one thread
  you keep from the brand screenshot, and it's what makes the live-numbers
  moment near the end feel earned rather than bolted on.
- Type scale should have real range: chapter openers can be enormous
  (think 8–14vw headlines), body copy stays conservative and small. Big
  jumps in scale are part of the cinematic grammar — don't flatten it into
  a conventional 6-step scale out of caution.
- Define every color, spacing value, and radius as a token (AGENTS §4/§8 —
  no hardcoded hex or px in components). Dark-first tokens still need to be
  real tokens, not one-off inline values because "it's just this one hero."
- No visible card grids or dashboard chrome until the very end of the
  page. The whole point is that this doesn't look like SaaS until the
  story chooses to reveal that it's also a real, live product.

## 3. Storytelling strategy

Full-bleed scrollytelling, one idea per screen, sparse copy — the motion
and imagery carry meaning; text confirms it rather than explaining it from
scratch. Every section is a "shot," not a "block." Copy should read like
a documentary voiceover: short declarative sentences, present tense,
building on each other.

Structure the narrative in three explicit acts (this is the spine — do not
flatten it into an undifferentiated scroll):

- **Act I — The Ceiling.** The world's compute demand is outgrowing the
  old way of provisioning it. Establish the problem honestly, using the
  real framing from CONTENT.md (companies keep expensive infrastructure
  running 24/7 to cover occasional peaks; data and compute have always
  been assumed to need to live together).
- **Act II — The Discovery.** Idle capacity is everywhere and mostly
  invisible. Compute can be treated like electricity: generated in many
  places, routed to wherever it's needed. This act contains the visual
  centerpiece — one device becoming thousands becoming millions.
  It also has to carry the mechanics honestly, just compressed: data stays
  put, compute is what moves, a control layer decides where.
- **Act III — The Future.** Omnira as the layer nobody has to think about.
  This is where the story splits into the two real doors the product has —
  Contribute and Deploy — and where the live network numbers appear as
  proof the film wasn't fiction.

## 4. Page structure

1. Cold open (brief, skippable — see §6)
2. Hero manifesto line
3. Act I — The Ceiling (the problem)
4. Act I → II transition — The Idle World (idle capacity revealed globally)
5. Act II — The Shift (compute-as-utility reframe)
6. Act II centerpiece — The Network Awakens (one device → millions, globe)
7. Act II — How It Actually Works (compressed 3-layer explainer: data
   stays, compute moves, a control layer routes)
8. Act II — Your Data Never Leaves (security beat)
9. Act III — Two Ways In (Contribute / Deploy split)
10. Act III — Live Pulse (restrained real-numbers module)
11. Closing manifesto + primary CTA
12. Footer (nav, legal, links — conventional, not cinematic; this is where
    the visitor lands once the film is over)

## 5. Section-by-section guidance

**Cold open.** 1–2 seconds max, or skip entirely on repeat visits (respect
a session flag). A single line fades in on black — something like a soft
pulse of light with no text, or one short line ("Somewhere, right now, a
device is idle.") — then cuts to the hero. Must have a visible, immediate
skip affordance; never trap a returning visitor in a splash screen.

**Hero manifesto.** Full-viewport. One sentence, huge type, doing the job
of "here's what's about to happen to computing." Small supporting line
underneath. A quiet scroll cue (not a bouncing arrow cliché — something
that matches the token system, e.g. a thin animated line). No nav clutter
yet, but a persistent minimal top-left wordmark and a way to jump straight
to Contribute/Deploy for a visitor who doesn't want the film (accessibility
and usability requirement, see §9).

**Act I — The Ceiling.** Visualize a single always-on data center under
strain — racks, heat, a demand line that keeps climbing while capacity is
provisioned in discrete, expensive steps. Copy: today's infrastructure
model assumes you provision for your peak and pay for that peak all the
time, because the old rule was that data and compute have to live in the
same place. Keep it honest and specific — this is the real problem
statement from CONTENT.md §02, not generic "cloud is broken" copy.
Optional grounding moment: one real, sourced figure held briefly on screen
as a caption (not a chart) can sharpen this without breaking the film's
register — e.g. AI-driven demand for data center capacity growing 23–30%
a year through 2030 while availability keeps tightening (§10 has the
citation). Use at most one such figure in the entire film, here, and let
the visuals carry everything else.

**The Idle World.** Zoom out from the strained data center to a world view
— dim, mostly-dark device silhouettes (laptops, phones, TVs, servers)
scattered globally, almost all idle. This is the pivot: the world is
already full of the capacity the last section said was scarce; it's just
not connected.

**The Shift (compute as utility).** Introduce the electricity-grid
metaphor directly from CONTENT.md §03 — computing power generated in many
places and routed to wherever it's needed, the same way a grid works.
Visually: dim nodes begin to flicker on, individually, unconnected.

**The Network Awakens (centerpiece).** The single most expensive section
on the page, and the one the whole film has been building to: a single
node lights up, then a handful, then the view pulls back and it's
thousands, then a full globe pulsing with millions of live connections and
particle traffic moving between them. This is the "camera move" of the
site — the scroll position should feel like a dolly/zoom-out, not a static
scene playing a video. Land on a wide, breathing view of a fully awake
network before continuing.

**How It Actually Works.** Compress the Data Plane / Compute Plane /
Control Plane model into a cinematic, not technical, version: three simple
labeled states — *Data stays where you put it. Compute happens wherever
capacity exists. A control layer decides which is which, in real time.*
This section should feel like a diagram made of light, not a whitepaper
figure — save the detailed architecture diagram for the analytical site.
One clear visual per idea, transitions between the three ideas driven by
scroll.

**Your Data Never Leaves.** Address the trust question head-on, briefly
and confidently, using CONTENT.md §10–11: customer master data stays
inside its own perimeter; edge devices only ever receive small, transient,
fragmented tasks that live in memory and are wiped after execution. Visual:
a "vault" or perimeter boundary that stays solid and closed while small
fragments of light dart out to the network and dissolve on return. This
should read as reassurance, not as a technical deep-dive — no need to spell
out ~98%/2% here, that number belongs on the analytical site's economics
section; keep this beat about trust.

**Two Ways In.** The story splits. Full-width, roughly even split between
**Contribute** ("Your devices are already capable of this. Turn them on.")
and **Deploy** ("Ship on the network instead of a data center.") — each
with its own short line and its own CTA. This is the first moment the page
behaves like a product rather than a film; treat the transition into it
deliberately (e.g. the camera settling, motion calming down) so it doesn't
feel jarring after the centerpiece. Give Contribute's line the one
concrete, practical detail worth surfacing this early: you're paid in
real dollars, never a token (§10) — it's a genuine trust signal, not just
tone, and it earns its place even in a page this spare.

**Live Pulse.** A small, restrained module — not a dashboard, a *pulse* —
showing 2–3 real live numbers (devices online now, requests served,
network active) pulled through `lib/api/` exactly like the brand
screenshot did, monospace digits, maybe one sparkline. This is the bridge
between "cinematic story" and "this is a real, running product," and it's
the one place the brand screenshot's honesty (indicative-data disclaimers,
real tickers) should show up explicitly in the copy if the mock data
carries that disclaimer.

**Closing manifesto.** Return to the mission statement from AGENTS.md §1,
in the same voice as the hero. Primary CTA. This is the frame that should
stick with the visitor after they close the tab.

**Footer.** Conventional and calm on purpose — nav links, legal, social.
The film is over; this is the credits, and it should look like every other
serious company's footer, not another cinematic beat.

## 6. Animation and interaction ideas

- **Scroll-scrubbed sequence for the centerpiece** (§5, "Network Awakens"):
  drive a React Three Fiber scene's camera and particle-system state off
  scroll progress (via a GSAP ScrollTrigger timeline or a Framer Motion
  `useScroll` progress value feeding into R3F) rather than autoplaying —
  the visitor should feel like *they* are pulling the camera back as they
  scroll, exactly like Apple's frame-scrubbed product pages.
- **Lenis** for smooth, weighted scroll across the whole page — this
  matters more here than on the analytical site because scroll *is* the
  interaction model, not just a nicety.
- **GSAP + ScrollTrigger** for chapter-to-chapter transitions and pinned
  sections (e.g. pinning the "How It Actually Works" three-state diagram
  while its content swaps underneath the scroll).
- **Framer Motion** for everything that isn't the big scroll-scrubbed
  sequence: fade/slide reveals, the CTA split's hover states, the live
  pulse counters.
- Particles/nodes: a lightweight custom GLSL point-cloud shader (via R3F)
  is the right tool for "millions of devices" — do not attempt to render
  actual millions of DOM/SVG nodes.
- **Skip/jump affordance**: a persistent, unobtrusive control (e.g. a thin
  progress rail down one edge of the viewport, doubling as chapter jump
  links) so a returning or impatient visitor can skip straight to Two Ways
  In or Live Pulse without replaying the whole film. This is a usability
  requirement, not optional polish — see §9.
- **`prefers-reduced-motion` fallback**: a genuinely different, non-broken
  experience — static hero art per section, normal scroll, no
  camera-scrub, no autoplaying particle fields. Build this path
  deliberately; don't just disable transitions and call it done.
- **Mobile motion budget**: the R3F centerpiece should degrade to a
  lighter treatment on mobile (fewer particles, simpler shader, or a
  pre-rendered looping video/canvas-sprite fallback) rather than shipping
  the full desktop scene at a crawl. Decide this deliberately and document
  the breakpoint, don't let it happen by accident under load.

## 7. Recommended libraries / tools

| Purpose | Choice | Why |
|---|---|---|
| Smooth scroll | Lenis | Scroll is the primary interaction model here; needs to feel weighted and continuous under a scroll-scrubbed sequence. |
| Scroll-driven timelines / pinning | GSAP + ScrollTrigger | The established tool for exactly this "pin section, scrub timeline" pattern; more control than Framer Motion's scroll hooks for multi-stage sequences. |
| General transitions / micro-interactions | Framer Motion | Everything that isn't the big scrubbed sequence — reveals, hover states, the live pulse counters. |
| 3D network / globe / particles | React Three Fiber + drei + custom GLSL | Only 3D-justified section of either site; a shader-driven point cloud is the only sane way to represent "millions of nodes." |
| Lightweight device iconography | Lottie (optional) | If small looping icon animations (a device "waking up") are wanted without the weight of R3F for something that small. |
| Live pulse numbers/sparkline | Small hand-built widget (SVG or a minimal Recharts sparkline) | Don't pull in Tremor or a dashboard library for two numbers and a sparkline — that's the analytical site's job. |

Do not reach for Aceternity UI or Magic UI as drop-in components — use them
(if at all) as *reference* for interaction patterns, then hand-build to the
token system per AGENTS §4/§8. This site's components live in
`components/ui/` and `components/<feature>/` like everything else in the
repo; nothing gets copy-pasted wholesale from a component library.

## 8. Implementation instructions for Claude Code

1. Scaffold the Next.js app in this directory (App Router, TypeScript,
   Tailwind). Note any dependency you add beyond the recommendations above
   with a one-line justification, per AGENTS §2.
2. Set up the token system first — colors, type scale, spacing, radius —
   in `globals.css`/Tailwind config, dark-first, before building any
   section. Every section pulls from these tokens; nothing hardcoded.
3. Server Components by default. `"use client"` only at the leaves that
   actually need it — the R3F canvas, the scroll-driven timeline
   controller, the live pulse widget. The hero's static text, the footer,
   and most copy blocks do not need to be client components.
4. Build `lib/api/network.ts` (or similar) with a typed, async,
   failure-capable service function for the Live Pulse numbers — same
   shape a real endpoint would have (see AGENTS §5). Model realistic
   latency and an occasional failure path so the loading and error states
   are real, not decorative. This is the one place on this site that needs
   all three async states (loading skeleton matching the final layout,
   error state, and — if devices-online can legitimately be zero — an
   empty state).
5. Build the scroll-scrubbed centerpiece as its own isolated client
   component with a clear, documented API (a `progress: number` 0–1 in,
   camera/particle state out) so it's testable and swappable without
   touching the rest of the page.
6. Implement the `prefers-reduced-motion` path as a real second code path,
   not a CSS `transition: none` patch — verify it by actually toggling the
   OS setting and scrolling through the whole page.
7. Keep the nav/skip affordance mounted globally so Contribute and Deploy
   are reachable from anywhere on the page, at any scroll position,
   including before the film finishes — this is a hard requirement, not a
   nice-to-have (§9).
8. Run and pass lint, typecheck, and build per AGENTS §6 before calling
   anything done. Then walk the page by hand: full scroll at desktop,
   tablet, and mobile widths; reduced-motion on and off; keyboard-only
   navigation through nav, skip control, and both CTAs; loading/error/empty
   states on the Live Pulse widget triggered deliberately.
9. Report using the exact five-section format in AGENTS §7.

## 9. Design principles and things to avoid

- **Cinematic never means unusable.** Nav, skip, and both CTAs must be
  reachable at all times, not just after the film "finishes." A visitor
  who wants to sign up in five seconds must be able to.
- **No generic SaaS layouts, no dashboard chrome, no card grids** anywhere
  before the Live Pulse module — that's the whole point of this variant
  (see AGENTS §1 warning against "crypto dashboard" energy, and TASK.md's
  explicit avoid-list).
- **Motion must explain, not decorate.** Every animation should be
  answerable with "this is showing the viewer X." If you can't name the X,
  cut the animation.
- **Don't fake metrics.** The Live Pulse numbers come from
  `lib/api/`, mocked with realistic shape and latency exactly like AGENTS
  §5 requires — never literal invented numbers hardcoded into a component.
- **Respect the mobile visitor.** A squeezed desktop scene is not a mobile
  design — build the mobile cinematic experience deliberately, with its
  own motion budget (§6).
- **Avoid motion-sickness triggers**: no uncontrolled parallax speed
  mismatches, no simultaneous camera pan + zoom + rotate without a very
  good reason, always ship the reduced-motion path.
- **Don't let the metaphor outrun the truth.** Every visual claim
  (millions of devices, data never leaving its perimeter, compute routed
  like electricity) has to trace back to something CONTENT.md actually
  says. Cinematic license applies to *how* it's shown, not to *what* is
  claimed.
- **Stay out of competitor/GTM territory.** This is not the place for
  named competitors, market-sizing figures, or anything from
  COMPETITION.MD beyond the one dollars-not-tokens fact in §10 — that
  register belongs entirely to `omnira-analytical/`.

## 10. Appendix — sourced facts cleared for use here

This film should stay image-led; treat both of these as optional,
sparingly-used grounding material, not as content to build sections
around (that register belongs to `omnira-analytical/`).

- **Plain-dollar payouts, never a token.** Sourced from COMPETITION.MD's
  competitive comparison against crypto-native peer-to-peer compute
  networks (e.g. Golem Network, which settles in the GLM token) — Omnira
  settling in ordinary currency, with no wallet or token step, is a real,
  factual differentiator and fits naturally into the Contribute beat in
  "Two Ways In."
- **One data-center-demand figure, if a caption is wanted for Act I:** AI-
  driven demand for data center capacity is growing an estimated 23–30% a
  year through 2030, pushing global vacancy toward historic lows even as
  new supply comes online (CBRE, *Global Data Center Trends 2026*). Use it
  once, as a brief caption, not a chart or a recurring motif — the full
  sourced stat table and competitive landscape live in
  `omnira-analytical/PROMPT.md` §10, and that's where the rest of this
  material belongs.
