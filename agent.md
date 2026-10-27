# Portfolio Website Build Workflow

This document defines the order an AI coding agent should follow when building or updating this portfolio. Use it together with [prd.md](./prd.md) for requirements, [README.md](./README.md) for the site outline and publishing context, and `.github/copilot-instructions.md` for workspace-specific visual guidance.

## Before implementation

1. Read the PRD, README, and workspace instructions before changing files.
2. Inspect the current project structure and existing implementation; preserve working patterns and user changes.
3. Identify available content and assets, including any CV or LinkedIn profile supplied by the owner. Use visibly identified editable placeholders for pending details; never make them appear factual.
4. Confirm that the planned work remains a responsive, accessible portfolio suitable for GitHub Pages.
5. Build in the following top-down order. Keep the page usable as each stage is added.

## Build sequence

### Navigation
- Build the sticky header first using a flex layout that adapts from laptop to tablet to phone.
- On wider layouts, arrange links left-to-right in page order: Home, My Stack, Experience, Projects, Scratch pad, and Contact. Style the sticky header as a quiet Material Web app bar. On phones, show the hamburger button in the header and preserve the same link order in its menu.
- When links no longer fit, collapse them into an accessible hamburger menu with a clear name, state, keyboard operation, focus treatment, and close behavior.
- Keep destinations consistent with real section IDs; prevent overflow and preserve a logical reading order.

### Hero
- Introduce the owner as “Muthoni, Rogers,” with the supplied Data Analytics and Analytics Engineering titles and short biography.
- Display the portrait as a staff-ID/name tag on an animated, bounded draggable lanyard; keep it visible below the sticky header on phones.
- Use a clean, interactive liquid-plexus particle field as a fixed, full-page background behind content; keep it responsive and respectful of reduced-motion preferences.
- Layer the particle field and lanyard so neither reserves space above the introduction.
- Keep the hero focused on the introduction and call to action; put the technology icons in a “My Stack” section after the hero.
- Place the GitHub, LinkedIn, X, and TikTok icons immediately below the hero call to action. Link approved profiles; keep the X mark as a non-linked placeholder until the owner supplies its profile URL.
- Add a visible scroll cue. Use motion as a visual prompt, not as a promise of physical haptic feedback.

### My Stack
- Present icons for Power BI, Apache Airflow, dbt, Python, Snowflake, databases, Azure Data Factory, Apache Kafka, Microsoft Excel, Google Sheets, and Qlik Sense/QlikView in a seamless, right-to-left looping marquee. Duplicate decorative items must be hidden from assistive technology; honor reduced motion.

### Experience
- Present career progression as a CV-style timeline or flow connected by an intuitive line.
- Include roles, organizations, dates, and supplied responsibilities or outcomes; include company logos when provided.
- Keep organization names as text so logos are not the sole source of meaning.

### Projects
- Build four featured project previews with an image, title, concise description, and link to fuller project details when available.
- Include a separate GitHub/source-code link when provided and distinguish it from the details link.
- Use clearly marked placeholders for missing content; never invent facts, outcomes, or URLs.

### Scratch pad
- Show a visual process such as a rough paper idea, a BI dashboard sketch, and the realized work on a laptop.
- Add concise captions and label experiments or unfinished work.

### Contact and footer
- Provide a direct email link and approved profile links, plus attribution and a back-to-top link.
- Do not present example email addresses or profile URLs as real owner information.

## Quality checks

- Check that Navigation, Hero, My Stack, Experience, Projects, Scratch Pad, Contact, and Footer appear in order and are reachable.
- Check flex navigation and the hamburger at laptop, tablet, and phone widths; prevent clipping and horizontal overflow.
- Use semantic HTML, descriptive alternatives for meaningful images, visible keyboard focus, and sufficient contrast.
- Keep essential content available without JavaScript; respect reduced-motion preferences for lanyard and scroll-cue motion.
- Verify local asset paths and section links. Check the GitHub Pages URL when it is available.
- Run the smallest relevant validation supported by the project; report checks that could not be run.
- Summarize what changed, validation performed, and any owner-supplied content still needed.

## Working rules

- Prefer the simplest maintainable implementation that satisfies the PRD.
- Use Material Web components through the pinned CDN import map for navigation and primary actions. Keep interface corners square, reuse the Experience background color across page sections, and preserve the portfolio's established palette and content.
- Preserve existing content and unrelated user changes; avoid unnecessary dependencies and infrastructure.
- Follow existing project patterns and `.github/copilot-instructions.md` without sacrificing accessibility or the PRD's requirements.
- Update the PRD or README only when an intentional product or publishing decision changes.
