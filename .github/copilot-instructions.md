# Taste Skill Front-End Ruleset & Visual Hygiene (v2 Full Specification)
This file dictates the strict visual hygiene rules and workflow execution loops required for all landing pages, user interfaces, app screens, marketing sites, portfolios, and web components generated in this workspace. It is designed to replace generic, average AI layouts with high-taste, concept-driven editorial engineering.

When building or updating this portfolio, follow the top-down implementation sequence in the root `agent.md` and the product requirements in `prd.md`.

---

## 1. THE CORE HOUSE RULES (Banned Patterns)
The following elements are completely banned from any generated code. Coding agents must never output these defaults:
*   **No Purple/Indigo Gradients:** Never default to the generic AI "magic" purple/indigo glowing gradients for buttons, headers, or backgrounds.
*   **No Section Eyebrows:** Do not use tiny, uppercase, bright-colored accent text floating directly above headers (e.g., "FEATURES" or "WELCOME").
*   **No Floating Ornaments:** Do not frame text using unearned horizontal rules, centered icons enclosed in tinted boxes, emojis as structural anchors, or decorative shapes at rest.
*   **No Shadows at Rest:** Box shadows are prohibited on cards or panels when resting. Depth may be triggered exclusively during user interaction (hover/active states).
*   **No Monospace Labels:** Do not use small monospace text blocks for random functional labeling unless it is an actual code sample or command block.
*   **No Index Numbering:** Do not number list layouts or structural cards (e.g., "01.", "02.", "03.") to fill compositional volume.
*   **No Fake UI Mockups / Generic Grids:** Do not inject empty placeholder grids or artificial analytics dashboards to fill blank stretches. Every container must serve a real, data-driven semantic purpose.

---

## 2. ART DIRECTION & BRIEF INFERENCE WORKFLOW
When tasked with writing layout markup or CSS, the agent must step through this operational sequence before rendering a single element block:

### Phase 1: Context Inventory & The Competitor Test
1. Identify what is real: the subject, the explicit target audience, the one singular call-to-action, and any existing brand constraints.
2. Draft a physical/semantic inventory of the client's unique traits (8 to 12 items). Focus heavily on local physical markers, architectural shapes, material textures, specific historic years, geographic paint colors, shopfront typography, or raw structural constraints.
3. **Apply the Competitor Test:** If a chosen design motif or concept can be applied to a direct industry competitor, discard it. It is generic. The layout must hinge entirely on a trait unique to this exact subject.

### Phase 2: Structural Architecture & Proportions
*   **Layout over Decoration:** Substance must be achieved by sizing text larger, dedicating entire fields of solid color, and utilizing meaningful whitespace instead of cosmetic borders or lines.
*   **Typography Dominance:** Headlines must fit within a maximum of two lines across every viewport configuration. The primary title block must utilize a confident, heavy typographic hierarchy, supported immediately (32–48px below) by a clear plain-text explanation sentence.
*   **The Frame Rule:** The layout must maintain one singular pair of perfectly equal outer margins across the entire vertical scroll. Asymmetry is permitted exclusively *inside* the layout grid, never in the boundary frame. A layout void must only exist if a heavy visual anchor closes it cleanly on the opposite side of the screen. No section stretch taller than 50% of the viewport may sit empty.

---

## 3. COMPOSITION PRINCIPLES BY KIND

### Kind A: Public-Facing Pages (Landing pages, Portfolios, Marketing sites)
*   **The First Screen Fold:** Must explicitly state exactly what the entity is, when/where it occurs (if an event), or what it costs/does (if a product). Include one clear, semantic primary action button directly on the initial screen.
*   **Section Separation:** Neighboring vertical layout bands must never share the exact same grid geometry or column split. Every section must open with an H2 or H3 heading naming its literal purpose; do not create nameless background transitions.
*   **Data Density:** Do not create thin, half-baked feature lists. Deliver robust detail loops (e.g., full pricing items with detailed line breakdowns, complete descriptive fields for portfolio projects) to prevent structural layouts from reading as thin or artificial.

### Kind B: Application Screens (Dashboards, Admin, Settings, Inboxes)
*   **Quiet Panels:** Restrict layout architecture to clean, uniform, quiet borders, aligned numerical figures, and tight structural data columns.
*   **Color Discipline:** Spend color capital exclusively on real-time interactive user states, focused input indicators, or critical system warning markers. Never apply decorative background color fields or multi-tonal rainbow charts inside an app container.
*   **Real Data Realism:** Never use grey placeholder bars, arbitrary "lorem ipsum" strings, or fictional vanity metrics. Interface items must display logical, mathematically sound, interconnected mock data.

---

## 4. IMAGERY AND MOTIFS
When populating visual components, follow this hierarchy of preference:
1.  **Semantic HTML/CSS Drawings:** Render a flat, consistent graphic language using solid color fields, structural margins, and native HTML architecture to visualize what no physical photograph can represent (e.g., custom interface blocks, exact tool dimensions).
2.  **Archival & Historical Artifacts:** Lean into real-world archival media such as old maps, technical architectural plates, vintage botanical illustrations, or old street-level views to form the grounding visual theme for non-software projects.
3.  **The Floor Rule:** Every page must hold a minimum floor of four real visual items (up to twelve for deep layouts), which can include structural graphics, archival frames, cropped interface pieces, or product clips.

---

## 5. THE MOTION LAYER (INTERACTIVE HYGIENE)
Motion must only be injected once the static wireframe layout reads perfectly balanced and completely finished without it.
*   **The Element Count:** A fully engineered page must incorporate at least 8 (ideally 16+) distinct moving elements reacting cleanly during the initial load window or down-scroll timeline.
*   **Staggered Entrance Loops:** Elements inside layout sections (headings, copy paragraphs, accompanying media assets) must cascade into view in sequence. Stagger each item by 60ms to 90ms, rising exactly 16px to 32px smoothly while shifting opacity from 0 to 1.
*   **Control Interaction:** Every link, layout card, and action button must yield immediate, obvious feedback on hover, click, and keyboard focus states.
*   **Performance Constraints:** All interactive transitions must change `transform` and `opacity` vectors exclusively. Every custom motion script must explicitly wrap within a `prefers-reduced-motion` CSS media query or fallback system to preserve instant structural availability.

---

## 6. EXECUTION CHECKLIST
Prior to finalizing any code block output, mentally check the layout against these performance standards:
*   [ ] Does the typography look solid and massive, with headlines constrained to 2 lines or fewer at all breakpoints?
*   [ ] Are the outer margins matching perfectly on both sides of the screen without random section clipping?
*   [ ] Have you stripped away all purple glowing gradients, small capitalized eyebrow phrases, and unearned thin lines?
*   [ ] Does the component work flawlessly on a phone screen using just a standard thumb measure?
