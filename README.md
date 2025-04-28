# html-scss-multipage-layout (in progress) ![Project Status](https://img.shields.io/badge/status-in%20progress-yellow)

🎨 A static website project built with pure HTML, SCSS, and PureCSS.  
🚀 Bundled using Vite.

## Technologies Used:
- HTML5
- SCSS
- PureCSS (via CDN)
- Vite (for bundling)
- Responsive grid layout (mobile-first approach)
  
## Project Structure:
- Home page (`index.html`)
- Catalog page (`catalog.html`)
- Blog page (`blog.html`)
- About page (`about.html`)

**Note**: These pages are currently treated as **temporary "breakpoints"** for navigation.  
At this stage, in order to switch between the pages, you must manually change the **breakpoint** in the URL (e.g., `index.html`, `catalog.html`, `blog.html`, `about.html`).

## How to run the project locally:
```bash
git clone <repository-url>

npm i
npx vite build
npx vite preview

