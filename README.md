# Advika Gupta portfolio

A responsive, framework-free portfolio page. Open `index.html` in a browser to preview it. The site uses local HTML, CSS, and JavaScript and can be hosted on any static web host.

## Update the content

Edit `portfolio-data.js` to change the introduction, add roles, update education or skills, and add projects or achievements. Each project can include a live demo or source link by setting its `url` field. Add projects to the `projects` array; the gallery and category filters are generated from that list. Add a category name to `category` to create a new filter automatically.

## Change your profile photo

The supplied portrait is saved at `assets/advika-portrait.jpg` and is already used on the page. Replace that image with a new portrait (keep the same filename) to update it. The image is cropped with `object-fit: cover` inside the designed frame.

If you prefer a different filename, update the `src` on the image in `index.html`:

```html
<img src="assets/your-photo.jpg" alt="Advika Gupta">
```

Then add this to `styles.css`:

```css
.portrait-placeholder img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inherit;
}
```

## Publish

Upload this folder to a static hosting provider such as GitHub Pages, Netlify, or Cloudflare Pages. Set the publish directory to `advika-portfolio` (or the repository root if you move these files to the root). No build step or server is required. The typefaces load from Google Fonts; the page falls back to system fonts if those fonts are unavailable.

## Current details to add when available

- A profile photo
- Public project links or live demos
- Any additional projects you want featured
