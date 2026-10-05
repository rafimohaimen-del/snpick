# snpick — World News, Picked & Explained

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-orange)](#responsive-design)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-green)](#accessibility)

---

## 📖 Overview

**snpick** is a modern, responsive editorial news and deep-dive analysis web publication built from high-fidelity Figma/editorial mockups. It reimagines global journalism with an emphasis on context, primary source verification, and transparent reporting.

The project is built entirely with a **clean Vanilla Web Stack (HTML5, Modern CSS3 tokens, and modular JavaScript)** — delivering sub-second load times, zero build tooling overhead, and a 100% accessible reading experience across all devices.

---

## ✨ Key Features

- 🌓 **Dual Theme Engine (Dark & Light Mode):**
  - Instant theme switcher with animated transition.
  - Automatically respects user OS system preference (`prefers-color-scheme`).
  - Persists preference locally in `localStorage`.
- 🔍 **Accessible Live Search Dialog:**
  - Modern `<dialog closedby="any">` implementation with light-dismiss and backdrop blur.
  - Instant client-side fuzzy keyword matching across articles, categories, and tags.
  - Keyboard accessible: open with `Ctrl+K`, `Cmd+K`, or `/`, and dismiss with `Esc`.
- 📱 **100% Fluid Responsive Design:**
  - Optimized from 360px mobile viewports to 4K ultra-wide screens.
  - Mobile touch-friendly slide-out drawer menu with navigation shortcuts and theme toggle.
- ⏱️ **Editorial Reading Utilities:**
  - Sticky top reading progress indicator that visualizes article completion on scroll.
  - Web Share API integration with automatic fallback to clipboard copy toast.
  - LocalStorage-backed bookmarking system to save stories for later.
- 🏷️ **Dynamic Category Filtering:**
  - Live filtering on section archives (`All`, `Analysis`, `Opinion`, `Explainer`) without page reloads.
- 📬 **Interactive "The Morning Pick" Newsletter Flow:**
  - Regex email validation, simulated API submission state, and floating toast confirmations.
- 📐 **Standardized Advertisement Layouts:**
  - Realistic publisher monetization slots matching standard IAB dimensions (`728x90` leaderboard, `300x250` rectangle, `300x600` skyscraper).

---

## 🗂️ Project Structure

```
Snpick/
├── index.html            # Homepage (Hero story, 30s digest, latest analysis, opinion, ads)
├── article.html          # Deep-reading view (Key takeaways, pullquotes, sources, progress)
├── category.html         # Section archive (Middle East, dynamic format filters, pagination)
├── about.html            # Mission manifesto, "How we work" 3-step cards, founder bio
│
├── css/
│   ├── variables.css     # CSS tokens, light/dark themes, typography & colors
│   ├── base.css          # Reset, typographic hierarchy, containers & utilities
│   ├── components.css    # Header, tickers, cards, ads, newsletter box, footer, dialog
│   └── responsive.css    # Mobile drawer, tablet layouts, media queries
│
├── js/
│   ├── data.js           # Central structured article dataset
│   ├── theme.js          # Dark/Light theme manager with persistence
│   ├── search.js         # Live search modal with query filter & highlighting
│   ├── main.js           # Mobile drawer, newsletter forms, toasts & category filters
│   └── article.js        # Reading progress bar, clipboard share, and bookmarks
│
├── assets/
│   ├── logo.svg          # Pure SVG snpick brandmark
│   └── images/           # High-resolution vector editorial artwork
│
├── README.md             # Project documentation and portfolio guide
└── .gitignore
```

---

## 🚀 Quick Start / Local Preview

Because **snpick** uses vanilla web standards with no dependencies or build steps required:

### Option 1: Double Click
Simply double-click [`index.html`](index.html) in your file explorer to open it in any web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

Using VS Code:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub & GitHub Pages (Step-by-Step)

Follow these steps to host this project online for free and generate your portfolio link:

### 1. Initialize Git & Commit Code
In your project root (`c:/xampp/htdocs/myworks/October/Snpick`):

```bash
git init
git add .
git commit -m "feat: complete responsive snpick editorial web publication"
```

### 2. Create a GitHub Repository
1. Go to [GitHub](https://github.com/new).
2. Name the repository: `snpick`.
3. Choose **Public** so employers and visitors can see the live demo.
4. Leave "Add a README file" unchecked (you already have this one).
5. Click **Create repository**.

### 3. Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/snpick.git
git push -u origin main
```

*(If you prefer a graphical interface, you can also download [GitHub Desktop](https://desktop.github.com/) or drag-and-drop the files directly via the GitHub web UI).*

### 4. Enable GitHub Pages (Free Live Hosting)
1. On GitHub, navigate to your `snpick` repository.
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under *Code and automation*).
4. Under **Build and deployment**:
   - **Source:** Choose `Deploy from a branch`.
   - **Branch:** Select `main` and `/ (root)`.
   - Click **Save**.
5. Wait ~60 seconds. Refresh the page to see:
   > **Your site is live at:** `https://<YOUR_GITHUB_USERNAME>.github.io/snpick/`

---

## 💼 How to Showcase this on Your Portfolio

### 1. Project Card Description (For your portfolio site)
> **snpick — Editorial & Global News Publication**  
> *A high-performance, responsive editorial web application inspired by modern journalism platforms. Built with semantic HTML5, modern CSS custom properties (Light/Dark themes), and modular JavaScript featuring live client-side search, dynamic category filtering, and scroll progress tracking.*  
> - **Live Demo:** `https://<YOUR_GITHUB_USERNAME>.github.io/snpick/`  
> - **GitHub:** `https://github.com/<YOUR_GITHUB_USERNAME>/snpick`  
> - **Tech Stack:** Vanilla JavaScript, CSS3 Design Tokens, HTML5, Responsive UI/UX, A11y.

### 2. GitHub Profile Pinned Repository
Pin `snpick` to your GitHub profile:
1. Go to your GitHub profile overview.
2. Click **Customize your pins**.
3. Select `snpick`.
4. In the repository's "About" section on the right, paste your live GitHub Pages link and add tags: `responsive-design`, `vanilla-javascript`, `dark-mode`, `editorial-design`, `portfolio-project`.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
