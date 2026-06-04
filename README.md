# robond.dev — Personal Portfolio

Personal portfolio site for **Robert Aydinyan** — Senior Full-Stack Web & Mobile Developer based in Yerevan, Armenia.

Live: <https://www.robond.dev>

## Stack

- React 18 + React Router v6
- Vite for dev server / bundling
- AOS (scroll animations), react-lazy-load-image-component
- EmailJS for the contact form (no backend)
- Plain CSS with CSS variables for theming

## Project layout

```
src/
├── App.jsx                 # Router + global layout
├── Components/
│   ├── HomePage/           # Landing
│   ├── AboutPage/          # Bio + tech stack
│   ├── PortfolioPage/      # Project grid + earlier work
│   ├── ContactPage/        # Form (EmailJS) + contact info
│   └── layouts/            # Header, Footer, Sidebar, menus
├── data/
│   └── projects.json       # Source of truth for portfolio entries
└── styles/                 # Global CSS + design tokens
public/
├── images/projects/0{id}/  # Per-project screenshots
├── CV.pdf                  # Downloadable CV
└── Robert Aydinyan.pdf     # Long-form CV
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build into ./build
npm run preview    # preview the production build locally
```

Contact form needs an EmailJS account. Create `.env` from this template:

```
VITE_EMAIL_SERVICE_ID=...
VITE_EMAIL_TEMPLATE_ID=...
VITE_EMAIL_PUBLIC_KEY=...
```

## Adding a project

Edit `src/data/projects.json`:

- **`featured`** — appears in the main grid; requires a screenshot at `public/images/projects/0{id}/01.png`.
- **`earlierWork`** — text-only entries shown beneath the grid; no screenshot needed.

Each featured entry supports: `title`, `company`, `year`, `role`, `cat`, `tag`, `tech[]`, `description`, `liveUrl` (or `null`), `internal` (boolean), `heightPX`.

## Deploying

Static build — deploys to any static host (Hostinger, Netlify, Vercel, S3+CloudFront, etc.):

```bash
npm run build
# upload ./build to host of choice
```

## Contact

- Email: <contact@robond.dev>
- LinkedIn: <https://www.linkedin.com/in/robertaydinyan/>
- Phone: +374 33 230 250
