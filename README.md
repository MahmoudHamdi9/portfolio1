# Your Portfolio Website

A ready-to-publish personal website. No coding experience needed to update it —
you only ever edit **one file** for text/links, and drop in image files for photos.

## What's in this folder

```
portfolio/
├── index.html              ← the page itself (don't need to edit)
├── css/
│   └── styles.css          ← all the visual design (don't need to edit)
├── js/
│   ├── config.js           ← ⭐ EDIT THIS FILE for your text, links, projects
│   └── main.js             ← builds the page from config.js (don't need to edit)
├── assets/
│   ├── images/             ← your photo + project images go here
│   └── cv/                 ← your CV/resume PDF goes here
└── README.md                ← this file
```

---

## 1. Preview the website on your computer

You don't need to install anything. Just double-click `index.html` and it
opens in your browser. That's it — you're looking at your live site.

After you make any change below, save the file and refresh the browser tab
to see it update.

---

## 2. Change your text (name, about, projects, etc.)

Open **`js/config.js`** in any plain text editor (Notepad, TextEdit, or
[VS Code](https://code.visualstudio.com/) if you want something nicer).

Every piece of text on the site is inside quotation marks `" "` in that file,
organized into clearly labeled sections:

1. **identity** — your name, title, tagline, location
2. **about** — your introduction paragraphs
3. **contact** — email, LinkedIn, GitHub
4. **heroStats** — the 4 highlight numbers at the top of the page
5. **skillGroups** — your skills, grouped by category
6. **projects** — your featured projects
7. **certifications** — your certificates

To change something, replace the text **inside the quotes only**. For example:

```js
title: "Data Analyst",
```
becomes
```js
title: "Senior Data Analyst",
```

**Don't delete** the commas `,` or quotation marks `"` around each value —
they're what keeps the file working. If the page stops working after an
edit, the most common cause is a missing comma or quotation mark near
whatever you just changed.

---

## 3. Replace your profile photo

1. Add your photo to `assets/images/` — name it something simple like
   `profile.jpg`.
2. Open `js/config.js`, find `profileImage` inside the `identity` section,
   and change it to:
   ```js
   profileImage: "assets/images/profile.jpg",
   ```
3. Save, refresh the browser. Use a square-ish photo for the best result
   (the placeholder is 640×640px).

---

## 4. Replace project images

Each project in `js/config.js` has an `image` line, e.g.:

```js
image: "assets/images/project-mall.svg",
```

1. Add your dashboard screenshot or project image to `assets/images/`
   (a name like `project-1.jpg` is fine).
2. Update that project's `image` line to point to your new file.
3. For a consistent look, use landscape images around **800×500px** (or
   similar 8:5 ratio) — that's the shape the cards are designed for.

---

## 5. Change any button link (LinkedIn, GitHub, project links, etc.)

All links live in `js/config.js` too — you never need to touch the HTML.

- **LinkedIn / GitHub / Email** → in the `contact` section
- **Each project's GitHub repo / live dashboard link** → inside that
  project's block, in `githubUrl` and `demoUrl`

Just paste your real URL between the quotes:
```js
githubUrl: "https://github.com/yourname/your-repo",
```

If you leave `demoUrl` as an empty string `""`, the "View Dashboard" button
for that project simply won't show up — no broken links.

---

## 6. Add a new project

In `js/config.js`, find the `projects` section. Copy one whole project block
(everything from the opening `{` to the closing `},`) and paste it just
before the closing `]` of the `projects` list. Then edit the values inside
your new copy.

```js
projects: [
  { ...existing project... },
  { ...existing project... },
  {
    title: "Your New Project",
    image: "assets/images/your-image.jpg",
    tools: ["Tool One", "Tool Two"],
    problem: "The business problem you solved.",
    outcome: "What you found or delivered.",
    metric: "One headline number",
    githubUrl: "https://github.com/yourname/repo",
    demoUrl: "",
  },
],
```

---

## 7. Add your CV/resume

1. Put your CV PDF file in `assets/cv/` — e.g. `Mahmoud-Hamdi-CV.pdf`.
2. In `js/config.js`, find `cvUrl` inside `identity` and set it to:
   ```js
   cvUrl: "assets/cv/Mahmoud-Hamdi-CV.pdf",
   ```
3. The "Download CV" button will now work automatically. Until you do this,
   the button is intentionally disabled so it never links to a missing file.

---

## 8. Publish it for free with GitHub Pages

1. Create a free account at [github.com](https://github.com) if you don't
   have one.
2. Create a new repository (the "+" icon → "New repository"). Name it
   anything, e.g. `portfolio`. Keep it **Public**.
3. Upload this entire `portfolio` folder's contents to that repository:
   - Easiest way: on the repository page, click **"Add file" → "Upload files"**,
     then drag in everything from inside this folder (not the folder itself —
     its contents: `index.html`, `css/`, `js/`, `assets/`, `README.md`).
4. Once uploaded, go to the repository's **Settings → Pages**.
5. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   choose the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait 1–2 minutes. GitHub will show you a link like
   `https://yourusername.github.io/portfolio/` — that's your live website.

Every time you edit `js/config.js` (or any file) and re-upload it to the
same repository, your live site updates automatically within a minute or two.

---

## Troubleshooting

- **The page looks blank or broken after an edit** — you likely removed a
  comma `,` or quotation mark `"` in `js/config.js`. Undo your last change
  and try again more carefully.
- **An image doesn't show up** — double check the file name in
  `js/config.js` matches the actual file name in `assets/images/` exactly,
  including uppercase/lowercase letters and the file extension (`.jpg` vs `.png`).
- **A button doesn't do anything** — its link in `js/config.js` is probably
  still empty (`""`). Add a real URL between the quotes.
