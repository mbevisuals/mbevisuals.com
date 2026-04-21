# Your portfolio site — getting started

A starter portfolio for your 3D animation freelance work, built with plain HTML/CSS/JS. No build tools, no frameworks — open a file and it works.

## 1. Open the project in VS Code

1. Open VS Code.
2. `File → Open Folder…` and select this `portfolio` folder.
3. You'll see three files in the sidebar:
   - `index.html` — the page structure (what's on the page)
   - `styles.css` — the styling (how it looks)
   - `script.js` — small interactions (fade-ins, current year)

## 2. Preview the site while you edit

The fastest way is the **Live Server** extension:

1. In VS Code, click the Extensions icon on the left sidebar (or `Cmd+Shift+X`).
2. Search for **Live Server** (by Ritwick Dey) and install it.
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser opens the site. Every time you save a file, it reloads automatically.

No Live Server? Just double-click `index.html` in Finder — it opens in your browser. You just have to refresh manually after each edit.

## 3. How the three files fit together

Think of it like a 3D scene:

- **HTML** is the scene hierarchy — what objects exist.
- **CSS** is the material / lighting — how each object looks.
- **JS** is the animation / rigging — what moves or reacts.

Your mechanical engineering brain will recognize the pattern: structure, then properties, then behavior.

## 4. What to change first

Start small. In order:

1. **Your name / logo** — `index.html`, line with `<a href="#home" class="nav-logo">`.
2. **The hero headline** — `index.html`, inside `<h1>...</h1>`.
3. **Your brand accent color** — `styles.css`, change `--accent: #ff6a3d;` at the very top. That one variable recolors the whole site.
4. **Project images** — in `index.html`, each `<article class="project-card">` has an `<img src="...">`. Swap the Unsplash URLs for your renders. For local images:
   - Make an `images/` folder next to `index.html`.
   - Put `my-render.jpg` inside.
   - Set `src="images/my-render.jpg"`.
5. **Showing video instead of a still?** Replace:
   ```html
   <img src="..." alt="..." />
   ```
   with:
   ```html
   <video src="videos/my-render.mp4" autoplay loop muted playsinline></video>
   ```
   For 3D work, short looping MP4s look fantastic in the grid.

## 5. Adding a new project

Copy one of the existing `<article class="project-card">` blocks in `index.html` and paste it inside the same `<div class="grid">`. Change the image and text. That's it.

## 6. When you want to publish it

Since you already host through Hostpoint, the simplest path:

1. Zip the whole `portfolio` folder (or just the three files + any images you add).
2. Upload via Hostpoint's file manager / FTP to your web root.
3. The site is live — `index.html` is the homepage by default.

If you want to try GitHub Pages later (free, fast), it's also an option — happy to walk through it.

## 7. A few things to learn next (in order)

1. CSS Flexbox — the tool behind most of this layout.
2. CSS Grid — what `display: grid` in the `.grid` class does.
3. Basic JS DOM manipulation — the `document.querySelector` stuff in `script.js`.

freeCodeCamp's "Responsive Web Design" course is the best free path from where you are now.

---

Have fun. The accent color at the top of `styles.css` is the single best place to make the site feel like *yours* in 10 seconds — try a few.
