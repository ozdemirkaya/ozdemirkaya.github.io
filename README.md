# Özdemir Kaya — Personal Portfolio Website

This repository contains the source code for the personal portfolio website of Özdemir Kaya. The website showcases software development expertise, project highlights, and contact channels in a modern, responsive, and single-page dark interface.

## 🌐 Live Demo

Visit the live website here:
👉 **[https://ozdemirkaya.github.io/](https://ozdemirkaya.github.io/)**

## 🛠️ Tech Stack

- **HTML5:** Semantic document structure.
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, and Glassmorphism effects.
- **Vanilla JavaScript (ES6+):** Responsive behavior, animations, and dynamic utilities.
- **GitHub Pages:** Static site hosting and deployment.
- **Web3Forms:** Serverless form submission handling.
- **Lucide Icons:** SVG icons loaded via CDN.
- **Google Fonts:** Plus Jakarta Sans & JetBrains Mono typography.

## ✨ Features

- **Responsive Single-Page Layout:** Optimized for mobile, tablet, and desktop devices.
- **Modern Dark UI:** Neon accent colors and premium glassmorphism styling.
- **Smooth Scroll Animations:** Interactivity powered by CSS transitions and the JavaScript Intersection Observer API.
- **Project Showcase Section:** Structured grid highlighting featured projects with quick repository and detail links.
- **Contact Section & Functional Form:** Direct social/email links and a fully integrated contact form.
- **Client-Side Validation and User Feedback:** Real-time form input verification and immediate submission status feedback via API.
- **SEO-Friendly Structure:** Configured with descriptive title, meta tags, and semantic HTML5 elements.

## 📂 File Structure

```text
├── assets/                 # Image assets, logos, and project screenshots
├── index.html              # Main HTML document and SEO meta configuration
├── style.css               # Core stylesheet, CSS variables, and responsive layout rules
├── script.js               # Interactive features (navigation, clipboard API, scroll reveal)
├── package.json            # Node.js workspace scripts and devDependencies
├── package-lock.json       # Dependency version lockfile
└── README.md               # Project documentation
```

## 💻 Local Development

You can run a local development server using one of the following methods.

### Option A: Python HTTP Server (Zero Dependencies)
Run the following command from the project root:
```bash
python3 -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option B: Node.js & NPM
Install dependencies and start the development server:
```bash
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🔧 Customization & Maintenance

### CSS Design System
Global styles, animations, and theme configurations can be modified by editing the `:root` variables in `style.css`:
- `--primary`: Accent purple color (`hsl(260, 100%, 68%)`)
- `--secondary`: Accent teal color (`hsl(180, 100%, 45%)`)
- `--bg-main`: Base background color (`hsl(230, 25%, 5%)`)

### Adding Projects
To add or modify featured projects, update the `.projects-grid` container in `index.html`. 
*Note: Brand logos (like LinkedIn and GitHub) are implemented as inline SVGs for maximum reliability, speed, and compatibility.*

### Contact Form & Web3Forms Integration
The contact form sends submissions to [Web3Forms](https://web3forms.com/).
- **Access Key:** The API access key is defined as a hidden input in `index.html`:
  ```html
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  ```
- **Submission Logic:** JavaScript (`script.js`) intercepts the submit event, gathers form data, and submits it to Web3Forms API via `fetch`.
- **Cache Busting:** If you update `script.js`, bump the query version parameter in `index.html` (e.g., `script.js?v=7`) to force browsers to reload the script instead of reading it from cache.

### Updating Contact Information
Contact details and links should be updated in:
- `index.html` (under `<section id="contact">` and `<footer>`)
- `script.js` (update the `emailAddress` string inside the clipboard copy function)
