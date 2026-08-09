Help me develop two separate high-quality prompts for Claude Code to build two completely different versions of the Omnira website.

Both websites should communicate the same core company vision, product, and technical foundation, but they should have radically different storytelling approaches, visual identities, and user experiences.

Use the previous website prompts below as the foundation. Reinterpret and redistribute the information into these two distinct directions instead of creating minor variations.

IMPORTANT:
- Use the information in `CONTENT.md` as the primary source of truth for Omnira's product details, messaging, architecture, and technical explanations.
- Use the assets and information inside the `brand_assets` folder as a reference, but do not feel restricted by them.
- For the cinematic version specifically, you are encouraged to explore a completely different visual direction from the existing brand assets if it creates a stronger experience.
- Research the web for inspiration, industry examples, technical concepts, and visual ideas that could make the website significantly more impressive.
- Look for concepts that would make investors, engineers, and potential customers immediately think:
  "This is a company building something important."

Do not invent fake customers, partnerships, metrics, or achievements. However, you may use:
- general industry statistics
- publicly available market trends
- conceptual visualizations
- realistic technical demonstrations
- comparisons that explain the scale of the opportunity

The goal is to create two premium website directions that feel like they were designed by a world-class technology design agency.

---

TECHNICAL REQUIREMENTS:

The websites should be built using modern frontend technologies and should prioritize exceptional interaction quality.

Consider using libraries such as:

Core:
- Next.js
- React
- TypeScript
- Tailwind CSS

Animation / Motion:
- Framer Motion
- GSAP
- Motion One
- React Spring
- Lenis smooth scrolling

3D / Immersive Experiences:
- Three.js
- React Three Fiber
- Drei
- WebGL
- GLSL shaders
- Lottie
- Rive

Data Visualization:
- D3.js
- Recharts
- Visx
- React Flow
- Tremor

Premium UI:
- Shadcn/UI
- Radix UI
- Aceternity UI
- Magic UI

Do not blindly include every library. Choose the tools that best fit each specific direction.

Each website prompt should include:
1. Creative direction
2. Visual identity
3. Storytelling strategy
4. Page structure
5. Section-by-section guidance
6. Animation and interaction ideas
7. Recommended libraries/tools
8. Implementation instructions for Claude Code
9. Design principles and things to avoid

---

# WEBSITE DIRECTION 1: CINEMATIC / IMMERSIVE

Primary trait:
Cinematic visual storytelling.

This website should prioritize emotion, atmosphere, scale, and imagination over traditional startup landing page conventions.

The website should feel like:
- an Apple product reveal
- a futuristic documentary
- a high-budget technology film
- an exploration of the future of computing

The existing brand assets are only a starting point. Feel free to create a completely different visual language if it creates a stronger cinematic experience.

The website should tell a story as the user scrolls.

Think of the website as a visual journey:

Beginning:
The current problem with computing.
A world where demand for compute is growing faster than infrastructure can support.

Middle:
The discovery of a new computing paradigm.
Show millions of devices, networks, and resources becoming one interconnected system.

End:
The future.
Omnira becomes the invisible infrastructure layer powering the next generation of technology.

Potential experiences:
- Full-screen HD cinematic video backgrounds
- Scroll-controlled video sequences where scenes transform as the user progresses
- Dynamic environments that evolve section by section
- Camera movement effects
- 3D worlds representing distributed compute networks
- Particles representing data movement
- Realistic global infrastructure visualizations
- Smooth transitions between chapters of the story

Example concept:
A user scrolls through a cinematic environment where a single computer expands into thousands, then millions of connected compute resources, visually showing the transformation from isolated machines into a global computing network.

The website should feel alive:
- motion should have purpose
- animations should explain concepts
- transitions should create curiosity
- every section should feel like part of one continuous story

Avoid:
- generic SaaS layouts
- excessive cards
- static dashboards
- normal startup templates

The visitor should think:

"Computing is about to change, and Omnira is building that future."

---

# WEBSITE DIRECTION 2: TECHNICAL + INVESTOR / INFRASTRUCTURE THESIS

Primary trait:
Clear thinking, technical credibility, business logic, and investment-quality communication.

This website should combine:
- analytics
- infrastructure explanation
- investor storytelling
- market thesis

The goal is to make Omnira feel like a serious infrastructure company capable of becoming a foundational technology platform.

The website should communicate:

"We are not just building software. We are creating a new layer of computing infrastructure."

Prioritize:

## Problem
Clearly explain:
- why current compute infrastructure is becoming insufficient
- increasing demand from AI, software, and large-scale applications
- limitations of existing approaches

## Solution
Explain:
- how Omnira works
- how distributed compute resources are coordinated
- why this model creates advantages

## Architecture
Show:
- system diagrams
- infrastructure flows
- provider/user relationships
- workload distribution
- compute allocation

## Economics
Explain:
- how value flows through the ecosystem
- why providers participate
- why users benefit
- scalability advantages

## Market Opportunity
Create a compelling narrative around:
- growth of compute demand
- AI infrastructure needs
- future computing trends

Use visuals such as:
- interactive architecture diagrams
- animated network maps
- performance comparisons
- cost models
- scalability demonstrations
- benchmark-style visualizations
- infrastructure dashboards

The design should feel inspired by:
- leading AI infrastructure companies
- technical research papers
- premium venture-backed startups
- a16z-style investment theses

Visual style:
- sophisticated typography
- strong writing
- clean layouts
- intentional animations
- high information density without feeling overwhelming

This website should make visitors think:

"The team understands the technology, the market, and the path to building a massive company."

---

FINAL OUTPUT REQUIREMENTS:

Create two separate Claude Code prompts.

Each prompt should be detailed enough that Claude Code can directly build the frontend.

The two websites must:
- share the same Omnira identity and core message
- have completely different storytelling approaches
- feel like two different companies at first glance
- both feel premium and world-class
- use the strongest information available from `content.md`
- incorporate any additional ideas or inspiration that make the experience significantly more compelling