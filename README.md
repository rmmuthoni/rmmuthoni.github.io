# Personal Portfolio Website

This project is a personal portfolio website for presenting who I am, my career progression, selected projects, creative process, and ways to connect. It will adapt from laptop to tablet to mobile and will be published with GitHub Pages. See [prd.md](./prd.md) for product requirements and [agent.md](./agent.md) for the implementation workflow.

## Planned sections

1. **Navigation** — Sticky Material Web app bar with ordered section links: Home, My Stack, Experience, Projects, Scratch pad, and Contact. Collapse to an accessible hamburger menu on smaller screens.
2. **Hero** — Name, two professional titles, a concise introduction, and a portrait as a visible, swinging, draggable staff-ID/name tag over an interactive liquid-plexus particle field.
3. **My Stack** — A seamless right-to-left marquee of technology icons for Power BI, Apache Airflow, dbt, Python, Snowflake, databases, Azure Data Factory, Apache Kafka, Microsoft Excel, Google Sheets, and Qlik Sense/QlikView.
4. **Experience** — CV-style timeline presenting the supplied Business Intelligence Analyst and Data Analytics Intern roles, dates, organizations, and responsibilities.
5. **Projects** — Four featured previews with an image, short description, a link to fuller project details, and a GitHub/source link when available.
6. **Scratch pad** — The creative process, such as an idea on paper, a BI dashboard sketch, and the realized work on a laptop. Identify unfinished work.
7. **Contact** — A message form delivered through Formspree, with a direct email link and approved social profiles.
8. **Footer** — Copyright or attribution and a link back to the top.

## Layout and visual direction

- Use a responsive single-page layout with navigation linking to section anchors.
- Present sections in this order: hero, My Stack, experience, projects, scratch pad, and contact.
- Use a flex-based header that adapts from laptop to tablet to phone; use the hamburger when the links no longer fit.
- Use readable typography, consistent spacing, a restrained personal color palette, and strong visual hierarchy.
- Use Material Web components loaded from a pinned CDN for navigation and primary actions. Keep UI corners square, use the Experience section's shared background color throughout the page sections, and retain the portfolio's teal-and-earth palette and full-page particle background.
- Use Google Sans for body and display text, loaded from Google Fonts.
- Keep the navigation sticky; let the full-page particle field scroll with the content so visitors see new nodes farther down the page, while the hero lanyard reserves no space above the introduction. Use quiet, translucent section colors so the field remains visible behind the page while preserving readable content; respect reduced-motion preferences.
- Show GitHub, LinkedIn, X, and TikTok icons directly below the hero's “Explore my work” button.
- Show technology icons for Power BI, Apache Airflow, dbt, Python, Snowflake, databases, Azure Data Factory, Apache Kafka, Microsoft Excel, Google Sheets, and Qlik Sense/QlikView in the My Stack section.
- Make project previews and experience entries quick to scan; use meaningful imagery and short descriptions rather than dense text.
- Provide descriptive alt text for meaningful images, sufficient color contrast, and keyboard-accessible navigation.
- Use clearly marked editable placeholders until I provide final biography, experience, project, image, and profile details.

## Suggested project structure

```text
portfolio/
├── index.html          # Portfolio page and section content
├── styles.css          # Layout, typography, and responsive styles
├── script.js           # Accessible responsive navigation behavior
├── assets/
│   └── images/         # Portrait, analytics scene, project, and process artwork
├── agent.md            # Top-down implementation workflow
├── prd.md              # Product requirements
└── README.md           # Project overview and publishing instructions
```

This is a starting outline; the exact files may vary with the implementation. Keep image and document paths organized and use optimized images for faster loading.

Technology icons are stored locally in `assets/icons/`.
The hero particle field uses the pinned tsParticles all-bundle from jsDelivr.
Material Web 2.5.0 button components are loaded from esm.run through an import map; no build step is required.

## Social profiles

GitHub, LinkedIn, and TikTok profiles are linked in the hero and contact sections. The X icon is shown in the hero; its profile URL still needs to be supplied.

- GitHub: [rmmuthoni](https://github.com/rmmuthoni)
- LinkedIn: [muthoni-rogers](https://www.linkedin.com/in/muthoni-rogers/)
- X: `[profile URL to be supplied]`
- TikTok: [@rmmuthoni](https://www.tiktok.com/@rmmuthoni)
- Email: [rmmuthoni@outlook.com](mailto:rmmuthoni@outlook.com)

## Publish with GitHub Pages

1. Push the website files to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Choose the deployment source. For a simple static site, select the branch containing the site and the folder where `index.html` is located (commonly `main` and `/ (root)`).
4. Save the settings and use the published URL shown on the Pages settings screen to check the site.

For a project repository, account for the repository name in asset and navigation paths. After publishing, verify the page and its images and links at the GitHub Pages URL. Future updates can be published by pushing changes to the selected source.
