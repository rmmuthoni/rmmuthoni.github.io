# Personal Portfolio Website — Product Requirements Document

## 1. Document purpose
- This is the shared product brief for the owner, designers, developers, and AI agents, and the source of truth for purpose, audience, scope, and behavior.
- If implementation details are not specified here, prefer the simplest accessible static-site solution.
- Do not invent personal biography, credentials, project claims, or contact details.

## 2. Product overview
- **Product and outcome:** A responsive personal portfolio presenting the owner's identity, professional journey, selected projects, and creative process.
- **Publishing target and principle:** GitHub Pages; make it easy for visitors to understand the owner's work and connect.

## 3. Why this website exists
- Give employers, collaborators, and peers one clear place to learn about the owner, career progression, project contributions, and contact.
- Show finished work and its creative process in a site that can grow over time.

## 4. Goals and success criteria
- Visitors can identify who the owner is and what they do from the opening section.
- Visitors can reach the stack, experience, projects, scratch work, and contact; project entries explain the work, role, tools, or outcomes.
- The layout remains readable on phones, tablets, and desktop screens, with content and links accessible by keyboard and assistive technology.
- Content can be updated without redesigning the information architecture.
- The site and its local assets can be published and checked using GitHub Pages.

## 5. Audience
- Employers, recruiters, clients, collaborators, and peers looking for the owner's focus, experience, work, and a way to connect.

## 6. User needs
- Understand the owner's identity and area of focus quickly.
- Tell polished projects apart from experiments and unfinished work.
- See the owner's role, tools, and relevant context for each selected project.
- Find professional profiles and an email contact link.

## 7. Scope and priorities
- **Must have:** Responsive portfolio layout with Navigation, Hero, My Stack, Experience, Projects, Scratch Pad, Contact, and Footer sections.
- **Must have:** Material Web app bar navigation adapting from laptop to tablet and phone, with links in page order and an accessible hamburger on smaller screens.
- **Must have:** Four featured project previews and a clear route to fuller project details and imagery when available.
- **Must have:** Scannable project and experience content with accessible navigation, meaningful image alternatives, and readable color contrast.
- **Should have:** Project imagery, live project links, source-code links, and downloadable documents when supplied.
- **Should have:** Dates or short captions for scratch-pad entries where useful.
- **Could have:** Lightweight interaction that improves navigation or understanding without blocking content.
- **Not in scope:** User accounts, server-side features, a content-management system, a database, or invented personal claims.
- Avoid adding features that make a simple portfolio harder to maintain or slower to load.

## 8. Information architecture and core features
### 8.1 Navigation
- Keep the header sticky and style it as a Material Web app bar. Arrange the links in page order—Home, My Stack, Experience, Projects, Scratch pad, Contact—and adapt the layout across devices without clipping.
- Collapse links into a keyboard-accessible hamburger when they cannot fit; provide clear open, close, and focus states.

### 8.2 Hero
- Introduce the owner with the provisional display name “Muthoni, Rogers,” role, and concise biography; use clearly marked editable placeholders until approved.
- Feature the owner portrait as a staff ID/name tag hanging from a lanyard that stays visible below the sticky navigation on phones.
- Let the lanyard swing, respond to pointer hover, and support bounded elastic dragging with a naturally lagging badge; respect reduced-motion preferences.
- Use a full-bleed, interactive tsParticles liquid-plexus field sized to the page content behind the entire page, on white, so visitors see new nodes as they scroll. Use about 100 dark slate nodes sized 1.5–3px, subtle linked lines with a 120px distance, slow natural drift, and a 150px cursor-repel area. Keep the field behind page content, resize it with the viewport and page content, and disable movement and hover effects when reduced motion is preferred. Use translucent section colors to preserve the visual palette without hiding the background.
- Introduce the owner as a data analytics and analytics engineering professional, with an approximately 30-word biography.
- Keep the hero focused on the introduction and primary action; show technology icons in the My Stack section after the hero.
- Place GitHub, LinkedIn, X, and TikTok icons directly below the primary action. Use supplied profile links; do not invent the X profile URL.
- Include an obvious scroll cue that signals there is more content below.

### 8.3 My Stack
- Present Power BI, Apache Airflow, dbt, Python, Snowflake, databases, Azure Data Factory, Apache Kafka, Microsoft Excel, Google Sheets, and Qlik Sense/QlikView icons in a seamless, right-to-left looping marquee immediately after the hero. Respect reduced-motion preferences and hide duplicated marquee content from assistive technology.

### 8.4 Experience
- Show career progression as a readable CV-style timeline or flow connected by an intuitive line.
- Include role, organization, dates, supplied responsibilities or outcomes, and company logos where available; retain text labels for each organization.

### 8.5 Projects
- Feature four compact project previews in a looping, right-to-left marquee with a pause control and reduced-motion support. Use the supplied Snowflake/dbt architecture image and Snowflake, dbt, and Power BI icons on the retail analytics project; link to its details and GitHub repository.
- Include a GitHub/source link when one exists; distinguish project-detail and source-code actions.
- Never invent project facts, links, or outcomes; label temporary sample content as placeholder content.

### 8.6 Scratch pad
- Showcase the making process, for example: rough paper idea, BI dashboard sketch, then implemented work shown on a laptop.
- Explain each stage with a short caption; identify experiments or unfinished work clearly.

### 8.7 Contact and footer
- Provide a contact form delivered through the configured Formspree endpoint, a direct email link, approved profile links, attribution, and a back-to-top link.
- Do not present example contact information as real owner details.

## 9. Navigation and interaction
- Navigation links lead to the relevant page sections in page order, starting with Home and continuing to My Stack, Experience, Projects, Scratch pad, and Contact.
- Provide visible interaction and focus states, and keep essential content available without JavaScript.
- Use motion sparingly for the lanyard, scroll cue, and hero particle field; honor reduced-motion preferences.
- A browser cannot guarantee physical haptic feedback, so the scroll prompt must communicate visually without requiring vibration.

## 10. Visual and content direction
- Use readable typography, consistent spacing, and a restrained personal color palette.
- Use Material Web components loaded from a pinned CDN import map for navigation and primary actions. Keep UI corners square, apply the Experience section's background color consistently across page sections, and retain the established portfolio palette and particle background.
- Establish a clear hierarchy from hero to experience, projects, scratch pad, and contact.
- Use relevant imagery and concise descriptions; distinguish previews from full project case studies.

## 11. Accessibility, responsiveness, and quality
- Support phone, tablet, and desktop viewport sizes without horizontal overflow.
- Use semantic headings and landmarks; ensure keyboard users can reach and identify navigation and links.
- Provide descriptive alt text for meaningful images, empty alternatives for decorative images, sufficient contrast, readable text sizing, and visible keyboard focus.
- Test the published GitHub Pages URL, images, section links, and external links.

## 12. Technical and publishing constraints
- Target a static website deployable through GitHub Pages.
- The static implementation uses `index.html`, `styles.css`, and `script.js` for responsive navigation and the full-page particle field, plus local artwork in `assets/images/`. Load the pinned tsParticles bundle before the local script.
- Load Material Web 2.5.0 button components through an esm.run import map; keep the site buildless and deployable on GitHub Pages.
- Keep the implementation simple, maintainable, and compatible with the publishing target.
- Account for the repository name when configuring asset and navigation paths for a project site.
- Keep local asset paths organized; avoid unnecessary dependencies or build complexity.
- Document publishing instructions in the project README as implementation evolves.

## 13. Acceptance criteria
- Navigation, hero, My Stack, experience, projects, scratch pad, contact, and footer exist in the specified order.
- The desktop navigation follows page order, starting with Home. On mobile, the header shows only the hamburger button, which contains the same ordered section links.
- Hero content introduces the owner over the interactive particle field and has a visible scroll invitation without reserving space for the background or lanyard.
- Experience presents the two supplied roles and responsibilities; four project previews link to available details and source code.
- Project, experience, and scratch-pad content uses supplied facts or visibly marked placeholders.
- The interface adapts to common mobile and desktop widths and remains readable.
- Keyboard navigation, link focus, image alternatives, and contrast receive a basic accessibility check.
- GitHub Pages resolves images and links, and no placeholder profile, email, or project links appear as real owner information.

## 14. Content dependencies and open items
- The owner must supply a portrait, role, biography, and a CV or LinkedIn reference. The contact email and Formspree endpoint are configured; approved TikTok, LinkedIn, and GitHub profiles are provided.
- The owner has supplied two experience entries. Further roles can be added as additional details are ready.
- The owner supplied the public retail analytics project at [data-modeling-with-dbt-snowflake-and-powerbi](https://github.com/rmmuthoni/data-modeling-with-dbt-snowflake-and-powerbi); three more projects and any additional project imagery or contribution details remain to be supplied.
- The owner must provide scratch-pad material and decide which experiments or works in progress to publish.
- Palette, typography, exact visual style, and optional interaction remain implementation decisions.

## 15. Guidance for implementation agents
- Read this PRD and the README before changing the website.
- Preserve the responsive portfolio purpose, section order, and static GitHub Pages target.
- Prefer accessible semantic HTML, responsive CSS, and minimal JavaScript.
- Use clearly identified placeholders only where owner content is pending; do not invent factual claims or silently omit a planned section.
- Keep this document aligned with deliberate changes to product scope or behavior.
