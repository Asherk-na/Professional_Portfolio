# Personal Portfolio — Tomson Katau

This simple static website showcases a professional portfolio, academic background, experience, skills, hobbies, and contact information.

## How to use
- Replace `assets/photo.jpg` with your professional photo (230x230 recommended) or leave the placeholder.
- Replace `assets/resume.pdf` with your resume if you want the CV download button to work.
- Update contact details in `index.html` (email, phone, LinkedIn) to your real ones.
- Replace or augment the content in each section to match your real experience and achievements.

## Development
- Open `index.html` directly in a browser for a quick preview.
- For local development with a small static server, you can use Python's `http.server`:

```bash
# Run from project root
flatpak-spawn --host python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

## Files
- `index.html` - main website content
- `css/styles.css` - site styles
- `js/main.js` - small behavior scripts
- `assets/` - photos, PDF resume, and other media

## Notes & Customization
- Color theme: navy blue, black, and white. Modify `css/styles.css` to change colors (root variables).
 - Color theme: navy blue, black, and white with a light-blue background (accent). Modify `css/styles.css` to change colors (root variables: `--navy`, `--accent`, `--bg-alt`).
 - UI polish: improved typography (Inter font), refined header and navigation behavior, button animations, card shadows, and mobile nav accessibility improvements. Adjust any styles in `css/styles.css` under the variables and section style blocks.
 - Accessibility: added improved focus states, aria-expanded handling for mobile nav, keyboard close (Escape), and a nav overlay to aid mobile navigation.
 - Accessibility: added improved focus states `:focus-visible`, `aria-current` handling for nav (scroll spy), a skip-to-content link for keyboard users, `aria-expanded` handling for mobile nav, keyboard close (Escape), and a nav overlay to aid mobile navigation.
- The site is responsive and mobile-friendly; you can enhance it by adding more JS or a CSS framework.
- The contact form is a placeholder mailto link. If you want to collect messages, set up a server-side endpoint or use a service like Formspree.

## Recent updates
- Contact details: I auto-populated the email and phone in the `Contact` section by extracting them from `assets/resume.pdf` (`asherkatau@gmail.com`, `+264 81 729 0375`). Please verify these details and update them in `index.html` if necessary.
- Image optimization: Small JPG and WebP versions of your profile photo were created (`assets/IMG_0584-1-240.jpg`, `assets/IMG_0584-1-480.jpg`, and corresponding WebP files). The `index.html` now uses a `picture` element with `srcset` to improve loading performance on smaller devices.

## Deploying to GitHub Pages

To host the site on GitHub Pages, follow these steps (or let me do it for you if you give me access to the repository):

1. Initialize a git repository, commit all files, and push to GitHub (replace `<username>` and `<repo>`):

```bash
# from project root
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:<username>/<repo>.git
git push -u origin main
```

2. Go to your repository on GitHub > Settings > Pages. Set "Source" to "main" branch and the root folder ("/"). Wait a few minutes for Pages to build and your site will be available at `https://<username>.github.io/<repo>/`.

3. (Optional) For a custom domain, add a `CNAME` file to the repo with your domain and set DNS records accordingly.

If you prefer automatic deploys or previews, I can also set up GitHub Actions to build and push to `gh-pages` branch.

### Quick script deploy
There's a small script `deploy.sh` in the repo that can publish the content of the repository root to the `gh-pages` branch. Make it executable and run it:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Using GitHub Actions (Automatic)
I added a GitHub Actions workflow at `.github/workflows/deploy.yml` that uploads the repo root and deploys to GitHub Pages on push to `main`. If you'd prefer actions to be the deploy method, ensure your GitHub Pages settings are configured to use the `GitHub Actions` deployment source (or use `gh-pages` branch if you change the workflow to publish there).

Notes:
- The workflow uploads the repository contents as an artifact and deploys using `actions/deploy-pages@v1`.
- If you want the site published to the `gh-pages` branch instead, we can change the workflow or use the `deploy.sh` script.

---

If you'd like, I can:
- Add a light/dark toggle
- Add animations (scroll reveal)
- Convert to a one-page React or Gatsby site
- Add a proper contact form with server-side posting

## Accessibility checks
To run a quick accessibility check locally: 

1. Open `index.html` in Chrome and run Lighthouse (DevTools > Lighthouse > Accessibility).
2. Or run `pa11y` in the terminal (node required):

```bash
# Install pa11y globally once
npm install -g pa11y
pa11y http://localhost:8080
```

I can run these checks for you and fix any findings if you prefer.  

Let me know what you prefer next.