# Personal Portfolio Website

This project is a personal portfolio website for presenting who I am, my career progression, selected projects, creative process, and ways to connect. It will adapt from laptop to tablet to mobile and will be published with GitHub Pages. See [prd.md](./prd.md) for product requirements and [agent.md](./agent.md) for the implementation workflow.

## Planned sections

1. **Navigation** — Responsive flex layout with section links around a centered circular portrait that also links home. Collapse to an accessible hamburger menu when links no longer fit.
2. **Hero** — Name, role, short introduction, and social links. The portrait appears as a staff-ID/name tag hanging from the navigation on a lanyard, with an analytics-inspired visual background and a cue to scroll.
3. **Experience** — Career progression in a CV-style timeline or flow, with roles, dates, descriptions, and organization logos when available.
4. **Projects** — Four featured previews with an image, short description, a link to fuller project details, and a GitHub/source link when available.
5. **Scratch pad** — The creative process, such as an idea on paper, a BI dashboard sketch, and the realized work on a laptop. Identify unfinished work.
6. **Contact** — A clear invitation to connect with approved email and social profile links.
7. **Footer** — Copyright or attribution and a link back to the top.

## Layout and visual direction

- Use a responsive single-page layout with navigation linking to section anchors.
- Present sections in this order: hero, experience, projects, scratch pad, and contact.
- Use a flex-based header that adapts from laptop to tablet to phone; use the hamburger when the links no longer fit.
- Use readable typography, consistent spacing, a restrained personal color palette, and strong visual hierarchy.
- Use Google Sans for body and display text, loaded from Google Fonts.
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

## GitHub and LinkedIn

Include TikTok, LinkedIn, and GitHub links in the hero or contact area and repeat them in the footer as appropriate. Replace these examples with my approved profile URLs before publication:

- TikTok: `[profile URL to be supplied]`
- GitHub: `[profile URL to be supplied]`
- LinkedIn: `[profile URL to be supplied]`
- Email: `[email address to be supplied]`

## Publish with GitHub Pages

1. Push the website files to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Choose the deployment source. For a simple static site, select the branch containing the site and the folder where `index.html` is located (commonly `main` and `/ (root)`).
4. Save the settings and use the published URL shown on the Pages settings screen to check the site.

For a project repository, account for the repository name in asset and navigation paths. After publishing, verify the page and its images and links at the GitHub Pages URL. Future updates can be published by pushing changes to the selected source.
