# Portfolio · Alessandro Barros

Personal website with the professional experience, projects and résumé of Alessandro Barros, full stack developer.

**Live:** https://portfolio.a-barros.uk

## Stack

- [Astro](https://astro.build) generating static HTML, with no client-side UI framework
- TypeScript in strict mode
- Hand-written CSS with design tokens (light and dark themes), no styling libraries
- Self-hosted fonts (Inter and JetBrains Mono via Fontsource)
- Deployed on Vercel

## Features

- Portuguese at `/` and English at `/en/`, with `hreflang` and per-language meta tags
- Printable résumé at `/curriculo/` and `/en/resume/`, generated from the same data as the site
- Light and dark themes that follow the system preference
- Images optimized at build time (WebP with `srcset`)
- Open Graph, JSON-LD (`Person`), sitemap and `robots.txt`
- Minimal JavaScript: only the theme toggle, mobile menu, copy-email button and print button

## Getting started

Requires Node.js 22.23.4 or later.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build into dist/
npm run preview  # serve the build locally
```

## Editing the content

All site and résumé text, in both languages, lives in [`src/data/content.ts`](src/data/content.ts). Fixed UI strings (menus, buttons) live in [`src/i18n.ts`](src/i18n.ts). TypeScript reports an error if a translation is missing.

### Adding or replacing a project

Projects are the `featuredProjects` (large cards) and `otherProjects` (compact list) arrays in `src/data/content.ts`. To add a screenshot, save the image in `src/assets/projects/`, import it at the top of the file and set it as `image`. Without an image, the card shows the `terminal` commands instead. Astro converts and resizes the image during the build.

```ts
import myAppShot from '../assets/projects/my-app.png';

{
    name: 'My App',
    kind: { pt: 'Aplicação full stack', en: 'Full stack app' },
    summary: { pt: '...', en: '...' },
    highlights: { pt: ['...'], en: ['...'] },
    stack: ['TypeScript', 'React'],
    repo: 'https://github.com/AleBL/my-app',
    demo: 'https://my-app.example.com', // optional
    image: myAppShot,                   // optional
}
```

## Project structure

```
src/
├── assets/        images optimized at build time (photo, logos, project screenshots)
├── components/    one page section per component
├── data/          content (profile, experience, projects, skills, education)
├── layouts/       base HTML, SEO and theme
├── pages/         routes: home pt/en, résumé pt/en and 404
├── styles/        tokens and global styles
└── i18n.ts        languages, UI strings and date formatting
```

## Credits

The first version of this site started from [portfolio-website](https://github.com/jackson-nestelroad/portfolio-website) by Jackson Nestelroad. The current version was rewritten from scratch in Astro; the hexagon background pattern is a nod to that origin.
