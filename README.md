# Ajith P C — Personal Portfolio Website 🚀

A modern, responsive, dark-mode single-page personal portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for **Ajith P C**, first-year B.Tech Computer Science and Engineering (Artificial Intelligence) student at **Thejus Engineering College, Thrissur, Kerala**.

Featuring a sleek dark theme (`#1f242d` / `#323946`) with neon cyan accents (`#00eeff`), a glowing hexagonal profile frame with backlight, typing hero tagline, interactive skills cards, 6-project showcase grid with hover overlays, EmailJS/Formspree-ready contact form, and smooth navigation.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (JavaScript)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom theme palette
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll entrance, staggered reveals, hover micro-interactions)
- **Typing Effect**: [react-type-animation](https://github.com/maxmarinich/react-type-animation)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, HeroIcons, Feather)
- **Smooth Scrolling**: [react-scroll](https://www.npmjs.com/package/react-scroll)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts (400, 500, 600, 700)
- **Contact Form**: [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) ready (with built-in simulation fallback for local dev)

---

## 📁 Project Structure

```text
ajith-portfolio/
├── public/
│   ├── cv.pdf              # TODO: Replace with your actual resume PDF
│   └── favicon.svg         # Cyan neon hexagon "A." favicon
├── src/
│   ├── assets/
│   │   ├── avatar.svg      # Default sleek developer illustration
│   │   └── projects/       # 6 high-res project preview SVGs
│   │       ├── project1.svg ... project6.svg
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky nav, active scroll spy, mobile hamburger
│   │   ├── Hero.jsx        # Typing tagline, intro, social icons, CV pill, hexagon
│   │   ├── About.jsx       # Hexagon photo, college info, expandable "Read More"
│   │   ├── Skills.jsx      # 4 cards (Web Dev, Python/C, AI/ML, Problem Solving)
│   │   ├── Projects.jsx    # Responsive 1/2/3 col grid with hover overlay & demo links
│   │   ├── Contact.jsx     # Form with validation, state indicators & EmailJS
│   │   ├── Footer.jsx      # Copyright, quick social links, back-to-top trigger
│   │   ├── HexImage.jsx    # Precision CSS clip-path hexagon with glowing cyan border
│   │   ├── SectionHeading.jsx # Standardized section title with cyan glow
│   │   └── ScrollToTop.jsx # Floating back-to-top button
│   ├── data/
│   │   ├── projects.js     # All 6 projects (titles, descriptions, tags, URLs)
│   │   ├── skills.js       # 4 skills cards & learning focus topics
│   │   └── socials.js      # GitHub, LinkedIn, Instagram, Email links
│   ├── App.jsx             # Main single-page assembly
│   ├── index.css           # Tailwind directives, custom scrollbars, hexagon clip-path
│   └── main.jsx            # React root mount
├── .env.example            # Template for EmailJS & Formspree credentials
├── .env                    # Local environment variables
├── index.html              # Meta tags, SEO description, Google Fonts preconnect
├── tailwind.config.js      # Custom theme colors & shadow glow utilities
├── vite.config.js          # Vite config
└── package.json            # Project dependencies & scripts
```

---

## 🛠️ Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or later) installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 🎨 How to Customize Your Content

All personal content is centralized in the `src/data/` folder and `public/` folder so you don't need to touch complex React code.

### 1. Update Profile Photo
- **Step 1**: Place your photo inside `src/assets/` (e.g. `src/assets/my-photo.jpg`).
- **Step 2**: Open `src/components/HexImage.jsx` and update the import:
  ```jsx
  import myPhoto from '../assets/my-photo.jpg';

  const HexImage = ({
    src = myPhoto, // <-- Replace defaultAvatar with your photo
    alt = 'Ajith P C - Portrait',
    className = '',
  }) => { ... }
  ```
- The image will automatically be clipped into the glowing cyan hexagon frame!

### 2. Replace Your Resume / CV
- Save your updated resume as `cv.pdf` and place it directly into the `public/` directory:
  ```text
  public/cv.pdf
  ```
- The "Download CV" button in the Hero section is already configured to download `public/cv.pdf`.

### 3. Update Social Media Links
Open [`src/data/socials.js`](file:///c:/Users/user/ajith%201/src/data/socials.js) and replace the URLs with your profiles:
```javascript
export const socials = [
  {
    id: 'github',
    url: 'https://github.com/your-username', // TODO
    ...
  },
  {
    id: 'linkedin',
    url: 'https://linkedin.com/in/your-profile', // TODO
    ...
  },
  ...
];
```

### 4. Update Projects & Works
Open [`src/data/projects.js`](file:///c:/Users/user/ajith%201/src/data/projects.js). You can edit any of the 6 projects, change their tags, descriptions, live demo links, and GitHub repository links.

### 5. Update Skills & Learning Focus
Open [`src/data/skills.js`](file:///c:/Users/user/ajith%201/src/data/skills.js) to tweak skill cards, badges, and learning topics.

### 6. Connect Live Contact Form (EmailJS or Formspree)
By default, the contact form includes a **demo simulation mode** that works immediately without keys.

To receive real emails in your inbox:
#### Option A: EmailJS (Free & Recommended)
1. Sign up free at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (connect your Gmail/Outlook).
3. Create an Email Template with parameters: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`.
4. Copy your **Service ID**, **Template ID**, and **Public Key**.
5. Put them in your `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_xxxxxxx
   ```

#### Option B: Formspree
1. Sign up at [Formspree](https://formspree.io/) and create a new form.
2. Put the endpoint URL in your `.env` file:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```

---

## 🚀 How to Deploy for Free

### Option 1: Deploy to Vercel (Recommended — 2 minutes)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ajith P C Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Under **Environment Variables**, add any `VITE_EMAILJS_*` keys if you use EmailJS.
6. Click **Deploy**! Your website will be live with free HTTPS and a `vercel.app` domain.

### Option 2: Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

### Option 3: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, set `base: '/<repository-name>/'`.
3. In `package.json`, add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📱 Accessibility & Responsive Breakpoints

- **Mobile First**: Optimized for small screens (320px+), tablets (768px), laptops (1024px), and wide monitors (1280px+).
- **Semantics**: Uses `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` tags.
- **ARIA**: Screen reader labels (`aria-label`, `aria-expanded`, `aria-describedby`, `aria-invalid`).
- **Focus**: High-visibility cyan focus rings (`:focus-visible`) for keyboard navigation.
- **Reduced Motion**: Smooth degradation for users with `prefers-reduced-motion`.

---

&copy; 2026 Ajith P C. All Rights Reserved.

