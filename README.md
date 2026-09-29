# Piyush Boldhane — Developer Portfolio

A modern, responsive, high-performance developer portfolio website built with **React**, **Vite**, and **CSS Modules**. Designed specifically for a Computer Science undergraduate focused on Java, databases, and practical backend software development.

---

## 🚀 Features

- **Developer Aesthetic**: Minimalist, technical dark-mode-first design with subtle accents, terminal-style panels, and clean typography.
- **Dark & Light Mode**: Built-in theme toggle with `localStorage` persistence and automatic attribute switching.
- **Interactive JVM Simulation**: Interactive step-by-step visualizer for Stack, References, Heap, and Garbage Collection simulation.
- **Honest & Grounded Content**: Formatted specifically for a junior developer/internship candidate—no exaggerated claims, fake stats, or artificial progress bars.
- **Centralized Configuration**: All personal info, social links, resume paths, and project repository URLs are managed in a single file (`src/config/siteConfig.js`).
- **Data-Driven Projects**: Projects are structured as data objects in `src/data/projects.js`—add or update projects without touching UI markup.
- **Detailed Project Modals**: Complete technical breakdown for each project (Problem, Architecture, Implementation, Key Challenges, and verified Bug fixes) with full keyboard accessibility (Escape to close, body scroll lock).
- **Direct Resume Access**: Direct viewing and downloading of `resume.pdf` from the navbar, hero section, and dedicated resume banner.
- **Fully Responsive**: Optimized for 1920px+, 1440px, 1024px, 768px, 480px, and 375px viewports with a responsive mobile navigation drawer.
- **Accessible & SEO Ready**: Semantic HTML5 tags, ARIA labels, focus states, Open Graph metadata, Twitter cards, and keyboard navigability.
- **Zero Backend Required**: Production-ready static build, deployable anywhere for free (Vercel, Netlify, GitHub Pages).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: CSS Modules + Global Custom Properties (variables)
- **Icons**: Lucide React + custom inline SVGs for GitHub and LinkedIn
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Intersection Observer**: `react-intersection-observer` for scroll-triggered fades and active navbar tracking

---

## 📁 Folder Structure

```
Portfolio/
├── public/
│   ├── favicon.svg            # Site favicon (<PB/> code icon)
│   └── resume.pdf             # Your actual PDF resume (viewable & downloadable)
├── src/
│   ├── assets/                # Static images & icons
│   ├── components/
│   │   ├── About/             # About bio, focus areas, and stats
│   │   ├── Contact/           # Contact cards + validated mailto form
│   │   ├── Education/         # Academic background timeline & cards
│   │   ├── Experience/        # Training timeline (Revat Network C/C++)
│   │   ├── Footer/            # Footer navigation, branding & socials
│   │   ├── Hero/              # Hero banner + terminal card + action buttons
│   │   ├── Icons/             # Custom SVG components (GitHub, LinkedIn)
│   │   ├── Navbar/            # Sticky header, active link indicator, mobile menu
│   │   ├── Projects/          # Project cards, interactive JVM modal, architecture flow
│   │   └── Resume/            # Dedicated resume banner section
│   ├── config/
│   │   └── siteConfig.js      # ⭐️ CENTRAL CONFIG FILE: All links & personal info
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark / Light mode provider & hook
│   ├── data/
│   │   └── projects.js        # ⭐️ Structured project details array
│   ├── hooks/
│   │   └── usePortfolio.js    # Reusable hooks (inView, active section, scroll lock)
│   ├── styles/
│   │   └── global.css         # Theme variables, typography, reset & base styles
│   ├── App.jsx                # Main layout composition
│   └── main.jsx               # React DOM entry point
├── index.html                 # SEO meta, Open Graph tags & font imports
├── package.json
└── vite.config.js
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js** (v18 or higher recommended; tested on Node v24)
- **npm** (v9 or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized, production-ready static bundle inside the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Where to update personal links & information
Open **[`src/config/siteConfig.js`](src/config/siteConfig.js)**. You can change:
- Full name, headline, tagline
- Email, phone number, location
- GitHub profile URL
- LinkedIn profile URL
- Project repository URLs and demo links
- SEO title and description

```javascript
const siteConfig = {
  name: "Piyush Boldhane",
  email: "piyushboldhane@gmail.com",
  github: "https://github.com/PiyushBoldhane",
  linkedin: "https://www.linkedin.com/in/PiyushBoldhane",
  // ...
};
```

### 2. Where to add or edit projects
Open **[`src/data/projects.js`](src/data/projects.js)**.
Each project is an object in the array with:
- `title`, `category`, `shortDescription`
- `technologies` (array of tags)
- `features` (bullet points shown on card)
- `details`: `purpose`, `whatIBuilt`, `technicalImplementation`, `challenges`, `highlights`
- Optional `aiNote` (for transparent disclosure of AI-assisted workflows)
- Optional `architecture` (renders an automatic step-by-step layer diagram)

To add a new project, simply append another object to the `projects` array. The UI will render the card and detail modal automatically!

### 3. Where to replace your Resume PDF
Your resume is served directly from:
```
public/resume.pdf
```
To update your resume:
1. Export your latest resume as a PDF.
2. Rename it to `resume.pdf`.
3. Drop it into the `public/` directory (replacing the existing `public/resume.pdf`).
4. Both the "View Resume" and "Download Resume" buttons across the site will immediately serve the new file.

### 4. Where to adjust Theme & Colors
Open **[`src/styles/global.css`](src/styles/global.css)**.
All colors are configured as CSS variables under `:root` (Dark) and `[data-theme="light"]` (Light):
- `--accent`: Primary accent color (default: `#58a6ff` in dark mode, `#0969da` in light mode)
- `--bg-primary`: Main background color
- `--bg-card`: Card surface color
- `--border`: Border outline color

---

## 🌐 Free Deployment Guide

### Option A: Deploy to Vercel (Recommended — 2 minutes)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"** and import your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Done!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

### Option C: Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<REPO_NAME>/'` (if using a project repository).
2. Install `gh-pages`: `npm install -D gh-pages`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

---

## 📜 Resume Data Grounding

All information in this portfolio is strictly based on Piyush Boldhane's resume:
- **Education**: SB Jain Institute of Technology, Management & Research (B.Tech CSE, 2023–2027, CGPA 8.76, 4th Year)
- **Skills**: Java, C, PostgreSQL, JDBC, Maven, OOP, DSA, Problem-Solving, Git, GitHub, IntelliJ IDEA, VS Code, Communication, Teamwork
- **Experience**: Revat Network — C/C++ Training Program (Dec 2023 – Feb 2024)
- **Projects**: MovieRelay (Spring Boot, byte-range streaming, bug diagnosis), JVM Memory Visualizer (JavaFX, simulation engine), Gym Management System (JavaFX, JDBC, PostgreSQL, RBAC)
