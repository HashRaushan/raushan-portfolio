# Raushan Kumar Pathak — Professional Portfolio

A responsive, premium corporate-style personal portfolio website using a navy, white and gold visual identity. Built with HTML, CSS and vanilla JavaScript so it can be hosted directly on GitHub Pages without a build process.

## Included sections
- Home / professional introduction
- About
- Professional experience (MEIL — SCADA Engineer, contract-based, BWSSB project)
- Marketing, Operations, and Business & Analytics areas of focus
- Project gallery with category filters
- Education
- Professional contact placeholders

## Important content accuracy notes
- No employment dates, degree dates, BBA institution, contact details, certifications, or numerical achievements have been invented.
- Project cards are clearly marked as planned projects or research topics in progress. Replace those labels only when you have completed the work and can provide evidence.
- Computer Science appears only as a diploma in the education section. This portfolio does not position you as a programmer or software developer.
- Replace all contact placeholders before publishing.

## Personalise before publishing
1. Replace `assets/profile-placeholder.svg` with your own professional portrait. Keep the filename the same, or update the image path in `index.html`.
2. In `index.html`, replace `YOUR_EMAIL@example.com` with your professional email.
3. Replace the LinkedIn and GitHub `href="#"` values with your actual profile URLs and remove the placeholder-link class.
4. Add your verified BBA institution, dates, MBA dates and employment dates if you want them displayed.
5. Update the project cards only with genuine completed work, deliverables and findings.
6. Add your actual CV PDF and link the Download Resume button when it is ready. The current version intentionally does not include a fake download.

## Run locally
You can open `index.html` directly in a browser. For a local development server, use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new **public** GitHub repository, for example `raushan-portfolio`.
2. Upload all files and folders from this project. Keep `index.html` in the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site will be available at the URL shown in Settings → Pages.

For a user-site URL such as `https://USERNAME.github.io`, name the repository exactly `USERNAME.github.io`. For a project-site URL, GitHub Pages will show the published address in repository settings.

## Files
- `index.html` — website content and structure
- `styles.css` — responsive styling and visual design
- `script.js` — navigation, project filters, reveal effects
- `assets/profile-placeholder.svg` — replaceable portrait placeholder
- `assets/favicon.svg` — browser icon

## Notes
Google Fonts are loaded from Google Fonts when the visitor has an internet connection. The site itself is static and does not require a server-side backend. The contact section uses direct email and social links rather than a non-functional form.
