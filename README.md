# dawsonrussell.com

Next.js 14 (App Router) + TypeScript + Tailwind. Hosts the marketing site at `/`
and the AI training funnel at `/training` and `/training/cohort`.

## Local dev

```bash
npm install
cp .env.local.example .env.local   # then fill values
npm run dev                        # http://localhost:3000
npm run typecheck                  # tsc --noEmit
npm run build                      # production build
```

## Routes

- `/` — main site (ported from the previous static `index.html`; legacy file kept at `legacy/index.html`).
- `/training` — free 1-hour training registration. Form posts to GHL.
- `/training/cohort` — paid cohort sales page. CTA hits Stripe Checkout.

## Environment variables

| Var | Used by | Required for |
| --- | --- | --- |
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | `<RegistrationForm />` (`lib/ghl.ts`) | `/training` form submit |
| `NEXT_PUBLIC_GA_ID` | `<Analytics />` | GA4 tracking (default `G-V2FH4YZNRJ`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | `<Analytics />` | Meta Pixel tracking |
| `STRIPE_SECRET_KEY` | `app/api/checkout/route.ts` (Phase E) | Cohort checkout |
| `STRIPE_PRICE_ID` | `app/api/checkout/route.ts` (Phase E) | Cohort checkout |
| `STRIPE_WEBHOOK_SECRET` | `app/api/webhook/route.ts` (Phase E) | Fulfillment trigger to GHL |

## Where to swap copy

All swappable copy lives in [`lib/constants.ts`](lib/constants.ts):

- Training date/time, headline, subhead → `TRAINING`
- Cohort name, price, seat cap, refund/scarcity lines → `COHORT`
- 6-week curriculum (modules 5 + 6 left as `{{MODULE_5_NAME}}` / `{{MODULE_6_NAME}}` placeholders) → `MODULES`
- FAQ arrays → `TRAINING_FAQ`, `COHORT_FAQ`
- About bios → `ABOUT_SHORT`, `ABOUT_LONG`

Search the codebase for `{{` to find every remaining placeholder token.

## GHL webhook config

The training registration form (`<RegistrationForm />`) POSTs JSON to
`NEXT_PUBLIC_GHL_WEBHOOK_URL` with this shape:

```json
{
  "firstName": "Jane",
  "email": "jane@example.com",
  "source": "training-hero"
}
```

In GHL, create an Inbound Webhook trigger that maps `firstName` → First Name,
`email` → Email, and uses `source` for tagging (e.g. `training-hero` vs
`training-footer`).

The Stripe webhook (Phase E) will POST a similar payload from
`app/api/webhook/route.ts` on `checkout.session.completed`, with an additional
tag like `cohort-1-buyer` so GHL can move that contact into a different
campaign.

## Stripe webhook setup *(Phase E — pending copy review)*

Not yet wired. When ready:

```bash
# Local
stripe listen --forward-to localhost:3000/api/webhook
# copy the whsec_… into STRIPE_WEBHOOK_SECRET

# Production
# Stripe dashboard → Developers → Webhooks → Add endpoint
# URL: https://dawsonrussell.com/api/webhook
# Events: checkout.session.completed
# Copy signing secret → Vercel env STRIPE_WEBHOOK_SECRET
```

## Vercel deploy

```bash
vercel              # preview
vercel --prod       # production
```

Set all env vars in Vercel → Project → Settings → Environment Variables.

## Project structure

```
app/
  layout.tsx
  page.tsx                       # ported from legacy/index.html
  globals.css
  training/
    page.tsx                     # free training reg
    cohort/
      page.tsx                   # paid sales page
components/
  Analytics.tsx
  RegistrationForm.tsx           # GHL post
  CheckoutButton.tsx             # Stripe stub (Phase E)
  CurriculumCard.tsx
  CountdownTimer.tsx
  FAQ.tsx
  LogoBar.tsx
  home/                          # ported homepage sections
    Nav.tsx
    Footer.tsx
    ContactForm.tsx
lib/
  constants.ts                   # all swappable copy/data
  ghl.ts                         # GHL webhook helper
legacy/
  index.html                     # original static site, kept for reference
```
