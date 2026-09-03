# Zebscan — coming soon page

Single-page "under construction" teaser for zebscan.com. Self-contained
(fonts, logo and hero photo are inlined as base64), multilingual (EN/SV/DA).

## Editing

Edit `src/template.html` (styles, copy, translations), then rebuild:

```
node src/build.js
```

This regenerates `index.html` at the repo root, which is what gets served.
Don't edit `index.html` directly — it's a build artifact.

## Deploying

This repo is set up for GitHub Pages: push to `main` and enable Pages
(Settings → Pages → Deploy from branch → `main` / `/ (root)`) if it isn't
already. `CNAME` points Pages at the custom domain.
