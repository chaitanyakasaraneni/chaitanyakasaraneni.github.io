# ckasaraneni.com

Source for [ckasaraneni.com](https://ckasaraneni.com) - my personal site.

## Stack

Plain HTML, one CSS file, one JS file. No framework, no build step.

- `index.html`, `about.html`, `portfolio.html`, `contact.html`, `404.html`
- `styles.css` - design system (CSS variables, light + dark theme)
- `theme.js` - theme toggle (persists to `localStorage`, falls back to `prefers-color-scheme`)
- `img/` - images
- `CNAME` - custom domain

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to `master`. GitHub Pages serves the site at `ckasaraneni.com` (CNAME).

## Notes

- Contact form posts to Formspree (`xjkpvprp`).
- Theme is light by default, with system preference and per-user toggle.
- No external font requests; uses system font stack.
