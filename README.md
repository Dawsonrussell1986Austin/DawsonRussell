# dawsonrussell.com

AI video ad agency portfolio + lead-gen site.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- MDX case studies in `/content/work/`
- Cal.com booking (placeholder: https://cal.com/dawsonrussell)
- Vercel deployment

## Dev

```bash
npm install
npm run dev
```

## Content

- Case study metadata: `lib/work.ts`
- Case study bodies: `content/work/<slug>.mdx`
- Media assets: drop into `public/` (e.g. `public/hero-reel.mp4`, `public/work/<slug>/hero.mp4`)

## Deploy

Push to main, Vercel handles the rest.
