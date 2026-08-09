# Omnira — Technical + Investor / Infrastructure Thesis Build Prompt

You are building **one of two parallel Omnira websites**. This one is the
analytical/investor direction. A sibling variant (cinematic) is being built
separately in `omnira-cinematic/` — do not read it, borrow from it, or try
to reconcile visual language with it. The two are supposed to look like
different companies at first glance while telling the same underlying truth.

**Before writing code:**
1. Read `/AGENTS.md` at the repo root. It is not optional context — it is
   binding: stack (Next.js App Router + React + TypeScript, no backend),
   repo layout, the backend policy in §5, and the verification/report format
   in §6–7 all apply here exactly as written. This document adds direction
   on top of it; it does not replace it.
2. Read `/CONTENT.md`. It is the source of truth for the architecture,
   economics, and technical explanations on this site — this variant leans
   on it more heavily than the cinematic one, since the whole point here is
   technical and economic credibility. **Note:** the source content refers
   to the product as "360 World" throughout — that is a legacy/internal
   name for the same system. Replace every instance with "Omnira" in
   anything user-facing. Never ship the string "360 World".
3. Look at `brand_assets/` in this folder (a screenshot of the pre-redesign
   live dashboard). This variant should feel like a **direct descendant**
   of it, not a departure — same instinct toward honest, live, monospace
   numbers and clean card-based data density — but executed at a
   noticeably higher level of typographic and layout sophistication.
4. Read `/COMPETITION.MD` at the repo root and **Appendix (§10) below**,
   which distills it plus sourced, current market evidence. COMPETITION.MD
   mixes two very different kinds of content: (a) factual competitive
   positioning (who the competitors are, how Omnira differs) — usable on
   the public site, and (b) internal go-to-market notes (trial-credit
   amounts, named prospect segments still under evaluation, outreach
   plans) — **never publish (b)**. §10 has already separated these for
   you; when in doubt about a specific fact from COMPETITION.MD not
   covered in §10, treat it as internal and leave it out.
5. This directory is the project root for this variant. Scaffold a fresh
   Next.js app here following the repo layout in AGENTS.md §2
   (`app/`, `components/ui/`, `components/<feature>/`, `lib/api/`,
   `lib/utils/`, `hooks/`, `types/` — `brand_assets/` already exists, keep it).

---

## 1. Creative direction

The site reads like a well-written infrastructure thesis that happens to
be interactive — the register of a strong a16z/technical-memo essay
crossed with the execution quality of the best current infrastructure
company homepages (the clarity of Vercel or Linear, the systems-thinking
confidence of a serious cloud/AI-infra vendor). The goal is not to impress
with spectacle; it's to make a technical reader (engineer), a business
reader (customer), and a financial reader (investor) each independently
conclude within the first screen that **the team understands the
technology, the market, and the path to building a large company** — the
exact sentence in the brief.

Confidence here comes from *restraint and precision*, not motion. Every
section should feel like it was written by someone who could defend every
sentence in a room full of skeptical engineers. If a claim can't be traced
back to CONTENT.md or labeled honestly as general industry context, cut it
— see TASK.md's constraint against fabricated customers, partnerships, or
metrics.

## 2. Visual identity

Light-first (a dark mode is a reasonable stretch goal, not a requirement),
staying close to the brand screenshot's DNA but elevated:

- **Palette**: a refined neutral gray scale (not stark white — a warm-ish
  off-white ground like the brand screenshot's, with a true near-black for
  headline text) plus a single accent — the brand's signal green — used
  sparingly and consistently: live/positive states, primary actions,
  chart's "Omnira" series. A second muted color (a desaturated slate or
  amber) for "public cloud / failover" contexts in charts and diagrams,
  so the Omnira-vs-baseline contrast reads instantly wherever it appears.
- **Type**: a clean, highly legible grotesk for everything editorial —
  Geist Sans or Inter via `next/font` — with real typographic care: a
  proper type scale, tight measure on body paragraphs (60–75 characters),
  and generous line-height for the longer explanatory passages this site
  needs. Monospace (Geist Mono or JetBrains Mono) for every number that is
  data rather than prose — stat call-outs, chart axes, live counters,
  percentages — this is the single strongest visual inheritance from the
  brand screenshot and should be used with total consistency.
- **Density**: higher information density than the cinematic site, but
  "dense," not "cluttered" — one dominant idea per section even when
  supporting detail (a diagram, a table, a stat row) sits alongside it.
  Section numbering (01, 02, 03…) mirroring CONTENT.md's own document
  structure is an intentional, on-brand touch — use it in section headers.
- Define every color, spacing value, type size, and radius as a token
  (AGENTS §4/§8). No hardcoded hex or px in components.
- Avoid anything that reads as "crypto dashboard" (AGENTS §1's explicit
  warning) — no neon gradients, no glow-everything, no speculative ticker
  aesthetics. This is a systems and economics story told with clean data
  visualization, not a trading terminal.

## 3. Storytelling strategy

Structure the whole page as a technical/investment memo made interactive —
Problem → Solution → Architecture → Security → Economics → Market
Opportunity → Proof → the two real product paths → closing thesis. Unlike
the cinematic site, copy here is allowed to run longer and do real
explanatory work; the visualizations exist to make dense ideas scannable,
not to replace the writing. Every section should be legible read top to
bottom with the visuals turned off — the diagrams and charts are
reinforcement, not the only vehicle for the argument.

Tie the close of the page back to CONTENT.md's own closing structure
(Security / Economics / Scale / Vision) almost verbatim — it's already a
strong four-pillar summary and mirroring it signals the site was actually
built from the source material.

## 4. Page structure

1. Nav (sticky, with jump-to-section links — doc-style, not marketing-style)
2. Hero — thesis statement + a tight row of the 3 headline figures
   (~98% edge, ≤2% cloud, 0% master data at edge)
3. 01 — The Problem
4. 02 — The Solution (decoupling data from compute)
5. 03 — Architecture (interactive Data/Compute/Control Plane diagram)
6. 04 — Security (the trust objection, handled directly)
7. 05 — Economics (the 98/2/0 model, Cloud Tax comparison)
8. 06 — How Scaling Changes (old way vs. Omnira way)
9. 07 — Market Opportunity & Competitive Landscape (industry context and
   named competitors, explicitly labeled as such — see §10)
10. 08 — Live Network (the real dashboard proof point)
11. 09 — Two Paths (Contribute / Deploy, feature-level detail)
12. Closing thesis (Security / Economics / Scale / Vision)
13. Footer (nav, legal, links)

## 5. Section-by-section guidance

**Nav.** Sticky, with section jump links (01–09-style, echoing the
memo structure) rather than a conventional marketing nav. Include direct
Contribute/Deploy entry points at all times, plus sign in/create account
per the brand screenshot's existing pattern (scaffold the auth entry
points per AGENTS §5 — sign in/up screens can be stubbed, but the nav
affordance for them should exist).

**Hero.** The thesis in one sentence ("We are not just building software.
We are creating a new layer of computing infrastructure," reframed in
Omnira's own voice), a supporting line, and immediately — no scroll
required — the three defining numbers from CONTENT.md's economic model
(~98% distributed edge compute / ≤2% public cloud / 0% master data stored
at the edge) as a clean stat row. This is the single most important design
decision on the page: lead with the model's core claim, in numbers,
immediately.

**01 Problem.** CONTENT.md §02 directly: AI, analytics, and software
workloads need increasing compute; companies keep expensive infrastructure
provisioned 24/7 to cover occasional peak demand, because of the standing
assumption that data and compute must live together. A simple chart
contrasting a spiky/occasional demand curve against a flat, expensive
always-on provisioning line makes the waste visible in one image.

**02 Solution.** The core reframe: computing power treated like
electricity — generated in a distributed grid, routed dynamically to
demand, rather than permanently provisioned (CONTENT.md §03–04). Introduce
the Data Plane / Compute Plane split as the mechanism. This section sets
up the architecture diagram that follows; keep it conceptual here, save
implementation-level detail for §03.

**03 Architecture.** The centerpiece of the page. An interactive system
diagram with three labeled layers/nodes — **Data Plane** (customer's
on-prem or controlled cloud storage — S3/GCS/R2, air-gapped supported),
**Control Plane** (scheduling, routing, policy, telemetry, billing,
secrets — decides where workloads run), **Compute Plane / Edge Fleet**
(the distributed device fleet — phones, laptops, smart TVs, IoT, edge
hardware) — plus **Public Cloud** as an explicitly secondary,
failover/burst node (AWS, GCP, Azure, Cloudflare, Fly.io, Oracle).
Clicking or hovering a node should surface its real explanation from
CONTENT.md (§06–09) and, ideally, highlight the workload types that flow
through it (API services, web apps, mobile apps, AI inference, analytics,
AI agents — CONTENT.md §05). This should look and behave like a real
systems diagram an infrastructure engineer would respect, not a marketing
illustration.

**04 Security.** Address the objection from CONTENT.md §10 head-on and by
name: *"Are we putting customer data on random people's phones?"* Answer:
no. Master data never leaves the customer's designated perimeter; edge
devices only ever receive fragmented, transient micro-tasks, processed in
memory, wiped after execution (§11). A simple before/after or flow visual
(a task fragment entering the edge, executing, dissolving — no persistent
copy created) makes "zero master data at the edge" concrete rather than
just asserted. This section should read as confident and specific, the
way a security page in a real infra company's docs would, not defensive.
Give the isolation mechanism a real name rather than leaving it abstract:
frame edge execution as running inside hardened, single-tenant sandboxes
(MicroVM-style isolation with strict network air-gapping is the right
level of specificity — see §10) — this is also the site's sharpest
differentiator versus older peer-to-peer compute networks, which typically
run tasks in open P2P sandboxes without enterprise-grade isolation.

**05 Economics.** The 98% / ≤2% / 0% model as the section's spine
(CONTENT.md §09/§12), plus a "Cloud Tax" comparison: a chart contrasting
the cost curve of continuously provisioned cloud capacity against
Omnira's elastic, edge-first model. Be precise about what these numbers
are — a target operating model, not a historical performance claim — and
don't let the copy imply otherwise. A useful, sourced anchor for the "old
way" side of the comparison: even public cloud's own discount tier
(spot/interruptible instances) tops out around a 90% reduction off
on-demand pricing and can still be reclaimed without notice when a
full-price customer needs the capacity (§10) — Omnira's pitch is
recovering cost on hardware already owned, not renting a better discount
tier on hardware someone else owns.

**06 How Scaling Changes.** A direct side-by-side (table or two-column
timeline) contrasting the old way (CONTENT.md §13: forecast demand,
provision in advance, manual scaling, negotiate more cloud, costs rise
with usage, scale gated by budget) against Omnira's way (§14: capacity
expands as the device ecosystem expands — more devices, more available
compute, more workload capacity — scaling with the ecosystem instead of
centralized investment). This is a good place for a simple animated
counter-style visual: as "devices" ticks up, "available capacity" ticks up
with it, visually proving the mechanism rather than just stating it.

**07 Market Opportunity & Competitive Landscape.** Two halves, both backed
by the sourced material in §10 — do not invent numbers here; pull from
§10's cited stats and cite them on-page (a compact "Sources" footnote
under the section, the way a real research memo would).

*Market half:* the growth in AI-driven compute demand is not a claim
Omnira has to make on its own credibility — it's independently reported.
Lead with the supply/demand mismatch (AI-driven data center demand growing
23–30% annually through 2030 against historically low vacancy) and the
capital scale of the buildout (AI infrastructure spend projected to
roughly triple from 2026 to 2030). Label this half explicitly as
market/industry context, distinct from any claim about Omnira itself, so
a diligent reader never has to wonder which numbers are Omnira's and which
are the market's.

*Competitive half:* a clear-eyed, factual landscape table, not a takedown.
Three tiers — DePIN networks (Akash, Render, io.net), AI-specialized
neoclouds (CoreWeave, Lambda Labs), and traditional hyperscalers
(AWS/GCP/Azure) — each with its real position, its customer base, and the
specific gap Omnira closes (§10 has the full table and the Golem Network
comparison, which is the single sharpest contrast: Omnira targets the same
underlying opportunity — real, durable demand for crowdsourced compute —
but wraps it in enterprise-grade security isolation and plain-dollar
accounting instead of crypto-native onboarding). Name real companies
factually; never editorialize or disparage.

**08 Live Network.** The direct evolution of the brand screenshot's
dashboard — rebuilt with the site's elevated type/layout system rather
than copied. Devices online now, requests served, network earned,
earnings by device type with the same honest disclaimer pattern the
original had (pilot/indicative-figures language if the mock data
represents a pilot state — see AGENTS §5's requirement to model real
failure/latency, not just happy-path mock data). This is the section that
proves everything above isn't just a thesis — it's running.

**09 Two Paths.** Contribute and Deploy as two detailed, parallel cards or
columns (not a vague CTA pair like the cinematic site's simpler version —
this variant can afford real feature-level bullets): Contribute covers
connecting hardware, earning from unused capacity, monitoring device
activity/performance, and control over participation (AGENTS §1, "never
hide the off switch" — make sure that control is visible here, not just
promised). Deploy covers shipping websites/APIs/applications/AI models
onto the network instead of a traditional cloud provider.

**Closing thesis.** Four pillars, near-verbatim from CONTENT.md §18:
Security (data stays within the designated enterprise perimeter) /
Economics (~98% distributed edge compute) / Scale (compute capacity grows
with the device ecosystem) / Vision (compute, delivered like a utility).
Keep this section restrained and quotable — it's the sentence a reader
should be able to repeat back after they leave.

## 6. Animation and interaction ideas

Motion here is a supporting tool, not the medium — restrained and always
in service of making a number or a relationship legible faster.

- **Count-up numbers** on scroll-into-view for every headline stat (hero
  row, economics section, live network numbers) — a well-worn but correct
  pattern for this register of site.
- **Chart draw-in**: axes and lines animate in once when a chart enters
  the viewport, then stay static — no looping or idle motion on charts.
- **Interactive architecture diagram** (§03): hover/click on a node
  highlights its connections and swaps in its explanation; on scroll,
  consider animating a data packet moving along the active path
  (Data → Control → Compute/Edge, with an alternate path to Public Cloud)
  to make "routing" visible rather than just labeled.
- **Sticky section progress**: a slim doc-style progress indicator tied to
  the 01–09 section numbers, similar to how technical documentation sites
  show reading position — reinforces the memo framing from §3.
- **Tables/tabs**: use for the old-way-vs-new-way comparison (§06) and any
  device-type breakdown in Live Network — Radix-based (via shadcn/ui)
  primitives, not custom-built from scratch.
- Explicitly avoid: full-bleed video, parallax camera moves, particle
  fields, scroll-scrubbed 3D — that vocabulary belongs to the cinematic
  site. If you find yourself reaching for a 3D library, stop and ask
  whether a well-labeled 2D diagram would actually communicate the idea
  faster to an engineer or investor. It almost always will.

## 7. Recommended libraries / tools

| Purpose | Choice | Why |
|---|---|---|
| Charts (demand curve, cost comparison, earnings breakdown) | Recharts | Full control over styling to match the token system; pairs cleanly with shadcn without fighting its own opinionated theme. |
| Architecture / systems diagram (§03) | React Flow | Built specifically for interactive node/edge diagrams — the right tool for a Data/Control/Compute-plane diagram with hoverable, connected nodes. |
| UI primitives (tabs, tooltips, accordions, tables) | shadcn/ui + Radix | Accessible-by-default primitives, fully restyleable to the token system — matches AGENTS §4's "one design system" rule better than an opinionated component kit. |
| Scroll reveals / count-ups / restrained transitions | Framer Motion | Sufficient for every motion need here; no scroll-scrubbed timeline library needed since nothing on this page is a pinned cinematic sequence. |
| Custom chart work beyond Recharts' reach (e.g. a bespoke cost-curve illustration) | D3 (only if Recharts genuinely can't express it) | Reach for this only when a specific visualization doesn't fit Recharts' model — don't default to it. |

Explicitly do not use: GSAP/ScrollTrigger, Lenis, Three.js/React Three
Fiber, Lottie/Rive, Tremor, Aceternity UI, Magic UI. None of them fit this
direction's restraint, and several (Tremor especially) impose their own
visual opinions that would fight the "one design system" requirement in
AGENTS §4.

## 8. Implementation instructions for Claude Code

1. Scaffold the Next.js app in this directory (App Router, TypeScript,
   Tailwind). Note any dependency you add beyond the recommendations above
   with a one-line justification, per AGENTS §2.
2. Set up the token system first — light-first neutral palette, signal
   green accent, secondary muted color for "public cloud" contexts, type
   scale, mono for data, spacing, radius — before building any section.
3. Server Components by default. `"use client"` only at the leaves that
   need it — the architecture diagram, charts, count-up numbers, live
   network widget. Long-form section copy stays server-rendered.
4. Build `lib/api/` service functions for everything data-driven on the
   page: network stats (devices online, requests served, earnings by
   device type — mirroring the brand screenshot's shape), and if the
   architecture diagram's node content is data-driven rather than
   hardcoded JSX, model that too. Typed, async, failure-capable, with
   realistic latency (AGENTS §5) — this site's whole credibility rests on
   not faking the one section (Live Network) that claims to be real.
5. Every data visualization (charts, the architecture diagram, live
   network module) needs its own loading skeleton matching the final
   layout, a real error state, and an empty state where legitimately
   possible (e.g. devices online could be zero) — per AGENTS §4's "every
   async surface ships three states." Trigger all three by hand during
   verification, don't assume them from the code.
6. Accessibility is not optional given the data density here: charts need
   a text-equivalent (a visually-hidden data table or summary, not just a
   canvas/SVG), the architecture diagram needs a keyboard-navigable
   fallback or an accompanying list view for non-pointer users, and all
   live-updating numbers need `aria-live` regions per AGENTS §4.
7. Responsive strategy for the architecture diagram specifically: don't
   just shrink it on mobile — restructure it into a vertical, stacked flow
   (Data → Control → Compute/Edge → Public Cloud as a linear list with the
   same hover/tap-to-expand explanations) so small-screen readers get the
   same information, not a squinted version of the desktop diagram.
8. Run and pass lint, typecheck, and build per AGENTS §6 before calling
   anything done. Then walk the page by hand: full read at desktop,
   tablet, and mobile widths; every chart and the diagram in their
   loading/error/empty states; keyboard-only navigation through the nav,
   the diagram, and every table/tab; screen-reader pass on the stat rows
   and live numbers.
9. Report using the exact five-section format in AGENTS §7.

## 9. Design principles and things to avoid

- **Precision over spectacle.** If a section can be strengthened by
  cutting an animation and tightening a sentence instead, do that.
- **Never let a chart be decorative.** Every chart on this page must map
  to a number the copy actually explains — no illustrative-only data viz.
- **Don't fabricate.** No invented customers, partnerships, or
  Omnira-specific metrics. Market/industry context (§07) must be
  identifiable as general context, never blended with claims about
  Omnira's own performance.
- **Avoid "crypto dashboard" energy** — no neon glow, no ticker-tape
  aesthetics, no gratuitous gradients. This is an infrastructure company,
  not a trading app (AGENTS §1).
- **High density, never overwhelming.** One dominant idea per section even
  when a diagram, table, and stat row all sit in it together — if a
  section needs a second dominant idea, it's two sections.
- **Don't bury the off switch.** Contribute's messaging must make device
  control and the ability to stop participating as visible as the earnings
  pitch (AGENTS §1 — "never hide the off switch").
- **Keep the memo honest about what kind of number each figure is** — a
  target operating model (98/2/0) is not the same claim as a live metric
  (Live Network section), and the copy should never let a reader conflate
  the two.
- **Never publish internal strategy as if it were product fact.**
  COMPETITION.MD contains go-to-market notes (specific trial-credit
  amounts, named prospect segments still under evaluation, outreach
  scripts) alongside its factual competitive positioning. Only the
  factual positioning belongs on the site — see §10 for what's cleared
  for public use and what isn't.
- **Cite what you cite.** Any market-growth or industry number on the page
  needs a visible source (a footnote, a hover citation, a "Sources" line)
  — an uncited stat on an investor-facing infrastructure site reads as
  fabricated even when it isn't.

## 10. Appendix — sourced market evidence & competitive landscape

Reference material for §5's Problem, Security, Economics, and Market
Opportunity & Competitive Landscape sections. Pull numbers from here
directly rather than approximating from memory, and carry the citation
through to the page (see the "Cite what you cite" principle above).

### Sourced market stats (public web sources, current as of Aug 2026)

| Stat | Use it for | Source |
|---|---|---|
| Average enterprise/on-prem server utilization runs roughly 10–20%, versus 65%+ at hyperscalers — most enterprise compute sits idle most of the time. | 01 Problem / the "idle capacity is everywhere, including inside companies that already feel compute-constrained" beat. | Industry server-utilization research, widely cited across data-center efficiency literature (e.g. Uptime Institute-style studies, Hyperview, Middleware.io) |
| AI-driven data center demand is projected to grow 23–30% annually through 2030, pushing global vacancy to historic lows (down to ~6.7%, near 0% in some U.S. markets) even as new supply comes online. | 01 Problem and 07 Market — supply cannot keep pace with demand using the old provisioning model. | CBRE, *Global Data Center Trends 2026* |
| 30–50% of planned 2026 AI data-center capacity is projected to slip to 2028 because of power-grid interconnection queues and construction bottlenecks. | 01 Problem — power and provisioning lead times are the literal ceiling the hero/problem section should name. | JLL, *2026 Global Data Center Market Outlook* |
| AI infrastructure spend is projected to grow from ~$76B (2026) to ~$224B (2030); global data center capacity is expected to roughly double (≈103GW → ≈200GW) by 2030, requiring on the order of $3T in new infrastructure investment. | 07 Market Opportunity — the scale of the buildout the old model requires. | Industry market-sizing coverage (JLL; multiple AI-data-center market reports, 2026) |
| AWS EC2 Spot Instances offer up to a 90% discount off on-demand pricing, but capacity can be reclaimed without notice when full-price demand needs it. | 05 Economics / 07 Competitive — the ceiling on what "renting someone else's discount tier" can offer, and why it isn't the same offer as Omnira's. | AWS public pricing documentation |
| The global smartphone installed base alone is in the range of ~4.7–5.1 billion active devices. | Optional supporting texture for 07 Market or the Architecture/Edge Fleet explainer — scale of the potential Contribute-side device pool (do not present as Omnira's current network size — see §9's "kind of number" rule). | Industry mobile-market tracking (TechInsights, industry smartphone-usage reporting, 2026) |

Present every row above as attributed general industry/market context —
never merge it with a claim about Omnira's own performance.

### Competitive landscape (from COMPETITION.MD — cleared for public use)

Three competitor tiers, each with a real gap Omnira is positioned against:

| Tier | Examples | Primary hardware source | Customer base | Gap Omnira closes |
|---|---|---|---|---|
| DePIN networks | Akash Network, Render Network, io.net | Crypto-mining farms, independent data centers, retail GPUs | AI startups, Web3 developers, VFX studios | Enterprise CISO-grade compliance, security isolation, and simple B2B onboarding are generally not their focus. |
| AI-specialized neoclouds | CoreWeave, Lambda Labs | Newly purchased dedicated GPU data centers | Enterprise AI labs, LLM trainers | High cost, rigid contract lock-in, and heavy capital expenditure — they're buying new hardware, not monetizing idle hardware. |
| Traditional hyperscalers | AWS, GCP, Azure | Proprietary centralized data centers | Mainstream enterprise IT | Expensive base rates, proprietary lock-in, and (via Spot/interruptible pricing) capacity that can be reclaimed at any time — see the Spot-discount stat above. |

**Golem Network** (the closest historical analog — one of the earliest
decentralized compute protocols, predating the term "DePIN") is the
sharpest single contrast to draw, because it proves the underlying demand
is real and durable while also showing exactly where that model hits a
wall with enterprise buyers:

| | Golem Network | Omnira |
|---|---|---|
| Primary supply target | Consumer PCs, retail crypto miners, small node operators | Enterprise IT: hardware companies already own (mid-market, universities, studios) alongside everyday consumer devices |
| Payout / settlement | GLM token (crypto settlement) | Plain-dollar accounting — no token, no wallet, no crypto onboarding step |
| Security & compliance | Open peer-to-peer sandbox execution | Hardened, single-tenant isolation with strict network air-gapping |
| Positioning | "Join a decentralized Web3 compute network" | Recover cost on capacity you already own and control, without adopting crypto-native tooling |

The takeaway to carry into 07's competitive copy: the demand for
crowdsourced compute is proven — Golem has survived multiple market cycles
running real jobs. What has kept this model out of mainstream corporate IT
is crypto-first onboarding and consumer-grade trust assumptions, which is
exactly the gap Omnira's enterprise-grade, non-crypto approach is built to
close. This is also why the "no tokens, plain dollars" fact belongs
somewhere visible in 09 Two Paths (Contribute) — it's a genuine, sourced
differentiator, not spin.

### Explicitly excluded from the public site

COMPETITION.MD also contains internal go-to-market material that must
**not** appear anywhere on the live site, even paraphrased: specific trial
or credit amounts, named target customer segments still under feasibility
review, named geographies under evaluation, prospecting channels, and any
named individuals or informal group references. If a fact from
COMPETITION.MD isn't in one of the two tables above, treat it as internal
and leave it out.
