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
- Visitors can reach experience, projects, scratch work, and contact; project entries explain the work, role, tools, or outcomes.
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
- **Must have:** Responsive portfolio layout with Navigation, Hero, Experience, Projects, Scratch Pad, Contact, and Footer sections.
- **Must have:** Flex-based navigation adapting from laptop to tablet and phone, with section links flanking a centered circular home portrait on wide layouts and an accessible hamburger when links do not fit.
- **Must have:** Four featured project previews and a clear route to fuller project details and imagery when available.
- **Must have:** Scannable project and experience content with accessible navigation, meaningful image alternatives, and readable color contrast.
- **Should have:** Project imagery, live project links, source-code links, and downloadable documents when supplied.
- **Should have:** Dates or short captions for scratch-pad entries where useful.
- **Could have:** Lightweight interaction that improves navigation or understanding without blocking content.
- **Not in scope:** User accounts, server-side features, a content-management system, a database, or invented personal claims.
- Avoid adding features that make a simple portfolio harder to maintain or slower to load.

## 8. Information architecture and core features
### 8.1 Navigation
- Arrange links around a circular portrait/home link on wide screens; keep the header sticky and adapt the flex layout across devices without clipping.
- Collapse links into a keyboard-accessible hamburger when they cannot fit; provide clear open, close, and focus states.

### 8.2 Hero
- Introduce the owner with the provisional display name “Muthoni, Rogers,” role, and concise biography; use clearly marked editable placeholders until approved.
- Feature a circular owner portrait in the sticky navigation and as a staff ID/name tag hanging from a lanyard.
- Let the lanyard swing, respond to pointer hover, and support bounded elastic dragging; respect reduced-motion preferences.
- Use an abstract, connected data-point illustration that communicates how data relationships lead to informed decisions.
- Introduce the owner as a data analytics and analytics engineering professional, with an approximately 30-word biography.
- Show the approved technology toolbox below the introduction. Keep social profile links in the contact section.
- Include an obvious scroll cue that signals there is more content below.

### 8.3 Experience
- Show career progression as a readable CV-style timeline or flow connected by an intuitive line.
- Include role, organization, dates, supplied responsibilities or outcomes, and company logos where available; retain text labels for each organization.

### 8.4 Projects
- Feature four project previews with images, titles, short descriptions, and links to fuller details when available.
- Include a GitHub/source link when one exists; distinguish project-detail and source-code actions.
- Never invent project facts, links, or outcomes; label temporary sample content as placeholder content.

### 8.5 Scratch pad
- Showcase the making process, for example: rough paper idea, BI dashboard sketch, then implemented work shown on a laptop.
- Explain each stage with a short caption; identify experiments or unfinished work clearly.

### 8.6 Contact and footer
- Provide a clear invitation to connect, approved email and profile links, attribution, and a back-to-top link.
- Do not present example contact information as real owner details.

## 9. Navigation and interaction
- Navigation links lead to the relevant page sections; the central portrait/home link returns to the top.
- Provide visible interaction and focus states, and keep essential content available without JavaScript.
- Use motion sparingly for the lanyard and scroll cue; honor reduced-motion preferences.
- A browser cannot guarantee physical haptic feedback, so the scroll prompt must communicate visually without requiring vibration.

## 10. Visual and content direction
- Use readable typography, consistent spacing, and a restrained personal color palette.
- Establish a clear hierarchy from hero to experience, projects, scratch pad, and contact.
- Use relevant imagery and concise descriptions; distinguish previews from full project case studies.

## 11. Accessibility, responsiveness, and quality
- Support phone, tablet, and desktop viewport sizes without horizontal overflow.
- Use semantic headings and landmarks; ensure keyboard users can reach and identify navigation and links.
- Provide descriptive alt text for meaningful images, empty alternatives for decorative images, sufficient contrast, readable text sizing, and visible keyboard focus.
- Test the published GitHub Pages URL, images, section links, and external links.

## 12. Technical and publishing constraints
- Target a static website deployable through GitHub Pages.
- The static implementation uses `index.html`, `styles.css`, `script.js` for responsive navigation, and local artwork in `assets/images/`.
- Keep the implementation simple, maintainable, and compatible with the publishing target.
- Account for the repository name when configuring asset and navigation paths for a project site.
- Keep local asset paths organized; avoid unnecessary dependencies or build complexity.
- Document publishing instructions in the project README as implementation evolves.

## 13. Acceptance criteria
- Navigation, hero, experience, projects, scratch pad, contact, and footer exist in the specified order.
- The center portrait acts as a home link; the sticky navigation flexes responsively and exposes a usable hamburger when needed. On mobile, the hamburger is left and portrait is right at matching dimensions.
- Hero content introduces the owner, presents a data-network background, toolbox icons, and a visible scroll invitation without reserving space for the background or lanyard.
- Experience presents the two supplied roles and responsibilities; four project previews link to available details and source code.
- Project, experience, and scratch-pad content uses supplied facts or visibly marked placeholders.
- The interface adapts to common mobile and desktop widths and remains readable.
- Keyboard navigation, link focus, image alternatives, and contrast receive a basic accessibility check.
- GitHub Pages resolves images and links, and no placeholder profile, email, or project links appear as real owner information.

## 14. Content dependencies and open items
- The owner must supply a portrait, role, biography, a CV or LinkedIn reference, and an email address. Approved TikTok, LinkedIn, and GitHub profiles are provided.
- The owner has supplied two experience entries. Further roles can be added as additional details are ready.
- The owner must select four projects and supply descriptions, imagery, contributions, detail pages, and source links where available.
- The owner must provide scratch-pad material and decide which experiments or works in progress to publish.
- Palette, typography, exact visual style, and optional interaction remain implementation decisions.

## 15. Guidance for implementation agents
- Read this PRD and the README before changing the website.
- Preserve the responsive portfolio purpose, section order, and static GitHub Pages target.
- Prefer accessible semantic HTML, responsive CSS, and minimal JavaScript.
- Use clearly identified placeholders only where owner content is pending; do not invent factual claims or silently omit a planned section.
- Keep this document aligned with deliberate changes to product scope or behavior.
