// Single source of truth for all copy/data that needs to swap.
// Placeholders use {{TOKENS}} so they're easy to grep + replace.

export const SITE = {
  name: "Dawson Russell",
  domain: "dawsonrussell.com",
  contactEmail: "dawson@dawsonrussell.com",
};

// ---------- Free training (page: /training) ----------
export const TRAINING = {
  // ISO date in user's local zone — swap when finalized
  dateISO: "2026-05-08T13:00:00-06:00",
  // Display strings
  dateLabel: "May 8, 2026",
  timeLabel: "1:00 PM MT",
  durationLabel: "1 hour, live",
  eyebrow: "Capital Raises in 2026 · Live Training",
  headline:
    "Watch me build a $25K capital raise marketing package in 20 minutes — live, on screen.",
  subhead:
    "Decks, ads, landing pages, and investor copy. The exact AI workflow I use for Reg D, Reg A, and Reg CF raises.",
  ctaLabel: "Reserve My Seat",
  noReplayNote: "No replay. Live only.",

  // Hero video. Use ONE of these:
  //   videoUrl    — direct .mp4/.webm file (drop in /public, e.g. "/dawson-intro.mp4")
  //   videoEmbed  — YouTube/Vimeo embed URL (e.g. "https://www.youtube.com/embed/XXXX")
  // Leave both empty to show a placeholder.
  videoUrl: "" as string,
  videoEmbed: "" as string,
  videoPoster: "" as string, // optional poster image for <video>, e.g. "/dawson-poster.jpg"
};

// ---------- Paid cohort (page: /training/cohort) ----------
export const COHORT = {
  name: "{{COHORT_NAME}}",
  number: "Cohort 1",
  startDateLabel: "May 15, 2026",
  startDateISO: "2026-05-15",
  price: 2499,
  priceLabel: "$2,499",
  anchorPriceLabel: "$3,997",
  seats: "{{SEATS}}", // e.g. "25"

  // Optional hero video (same pattern as TRAINING). Leave empty to show
  // the curriculum preview card on the right.
  videoUrl: "" as string,
  videoEmbed: "" as string,
  videoPoster: "" as string,
  format: {
    sessions: "6 weekly 1-hour live sessions",
    trainingAccess: "7 days of training recordings + prompts",
    slackAccess: "21 days of private Slack community access after the cohort ends",
  },
  refundLine:
    "Pay in full. 14-day refund if you attend Week 1 and it's not for you.",
  scarcityLine:
    "Limited to {{SEATS}} founders. Founding member pricing — Cohort 2 will be priced higher.",
};

// ---------- Curriculum (6 weeks) ----------
export type Module = {
  week: number;
  name: string;
  build: string;
  deliverable: string;
};

export const MODULES: Module[] = [
  {
    week: 1,
    name: "Images",
    build:
      "AI-generated investor-grade images: hero shots, deck visuals, ad creative, and brand photography without a photo shoot.",
    deliverable:
      "A library of 50+ on-brand images you own outright, ready for the deck and the ad account.",
  },
  {
    week: 2,
    name: "Copywriting",
    build:
      "The exact prompts I use for investor emails, LP one-pagers, and ad scripts that read like a human wrote them.",
    deliverable:
      "A drafted investor email sequence and a one-pager you can send Monday.",
  },
  {
    week: 3,
    name: "Web",
    build:
      "An investor-facing site built and deployed inside the session — copy, design, and code, top to bottom.",
    deliverable: "A live URL for your raise, on your own domain.",
  },
  {
    week: 4,
    name: "Ads",
    build:
      "Meta and LinkedIn ad accounts wired up with AI-generated creative variants, audience targeting, and budget plans.",
    deliverable:
      "A running test campaign with 5+ creative variants and a tracking setup.",
  },
  {
    week: 5,
    name: "{{MODULE_5_NAME}}",
    build: "{{MODULE_5_BUILD}}",
    deliverable: "{{MODULE_5_DELIVERABLE}}",
  },
  {
    week: 6,
    name: "{{MODULE_6_NAME}}",
    build: "{{MODULE_6_BUILD}}",
    deliverable: "{{MODULE_6_DELIVERABLE}}",
  },
];

// ---------- Training FAQ (5 items) ----------
export const TRAINING_FAQ = [
  {
    q: "Is this recorded?",
    a: "No. The training is live only — no replay. Block the hour and show up.",
  },
  {
    q: "Who is this for?",
    a: "Capital raise founders, GPs, and issuer marketing teams running Reg D, Reg A, or Reg CF offerings. If you're raising or about to raise, this is for you.",
  },
  {
    q: "How much does it cost?",
    a: "Free. The training is one hour and there's no charge to attend.",
  },
  {
    q: "Will there be a pitch?",
    a: "At the end I'll mention the paid cohort for people who want to go deeper. The first 55 minutes are pure training — no pitch.",
  },
  {
    q: "What software do I need?",
    a: "A browser. The session runs on Zoom and the tools I demo are all web-based.",
  },
];

// ---------- Cohort FAQ (8 items) ----------
export const COHORT_FAQ = [
  {
    q: "What if I miss a session?",
    a: "All 6 sessions are recorded and available for 7 days after the final week. Live attendance is recommended but not required.",
  },
  {
    q: "Is there a payment plan?",
    a: "Not for Cohort 1. Founding members pay in full. Future cohorts may offer split pay.",
  },
  {
    q: "What software do I need?",
    a: "A browser, a Meta Ads account, and accounts at the AI tools we use (ChatGPT, Claude, a few others). I'll send the full list on signup.",
  },
  {
    q: "Who is this for?",
    a: "Capital raise founders, GPs, and issuer marketing teams who are actively raising or about to. Not for agencies or service providers.",
  },
  {
    q: "What happens after the 21 days of Slack?",
    a: "The Slack community closes. You keep all the prompts, templates, workflows, and recordings you downloaded during the cohort.",
  },
  {
    q: "Are sessions recorded?",
    a: "Yes. Recordings are available for 7 days after the cohort ends.",
  },
  {
    q: "What's the refund policy?",
    a: "Attend Week 1 live. If it's not for you, email me within 14 days of Week 1 for a full refund.",
  },
  {
    q: "Is this tax-deductible?",
    a: "For most founders running a capital raise, yes — it's a marketing expense. Talk to your CPA.",
  },
];

// ---------- About Dawson ----------
export const ABOUT_SHORT = `I've built marketing for 200+ capital raises across Reg D, Reg A, and Reg CF — from $500K seed rounds to $75M Reg A+ offerings. I run AI builds for issuer marketing teams full-time. This training is the system I use every day.`;

export const ABOUT_LONG = `I've spent the last decade in capital raise marketing. Started as the in-house growth lead for a Reg A+ issuer, then built marketing systems for 200+ raises across Reg D, Reg A, and Reg CF — from $500K seed rounds to $75M Reg A+ offerings.

The thing nobody tells you about raising capital: the marketing is half the work and most founders treat it like an afterthought. Decks take 6 weeks. Ad creative gets outsourced and comes back generic. Investor emails sound like they were written by a lawyer.

In 2024 I started rebuilding everything around AI — image generation for hero shots, prompt libraries for investor copy, n8n workflows for ad iteration, custom GPTs for due diligence prep. The decks I used to spend 3 weeks on now take 3 days. The ad creative outperforms the agency work. The investor emails read like a person wrote them, because the prompts I built are good.

This cohort is the system I use, in your hands, in 6 weeks. You'll walk out with the prompts, the workflows, the templates, and a working set of assets for your raise.`;

// ---------- Trust strip ----------
export const TRUST_STRIP =
  "Built on 200+ capital raises across Reg D, Reg A, and Reg CF.";

// ---------- Value props (training page, 3-up) ----------
export const VALUE_PROPS = [
  {
    title: "A complete AI marketing workflow",
    body: "The exact end-to-end system you can use Monday morning — no theory, no tool reviews.",
  },
  {
    title: "The prompts I use every day",
    body: "Decks, investor emails, ad creative — copy-paste ready, tuned on real raises.",
  },
  {
    title: "A live build on screen",
    body: "I'll build one full investor asset start to finish during the hour. You watch the work.",
  },
];

// ---------- Who it's for / not for (cohort) ----------
export const WHO_FOR = [
  "You're actively raising or planning a raise in the next 6 months",
  "You're the founder, GP, or marketing lead — you make the calls",
  "You'd rather build it yourself than hire an agency",
  "You're comfortable with new software and willing to do the work",
];

export const WHO_NOT_FOR = [
  "You're a marketing agency looking to resell this",
  "You want a done-for-you service — this is a build cohort",
  "You're not raising capital and have no plans to",
  "You're looking for theory, not working assets",
];

// ---------- What's included (cohort) ----------
export const INCLUDED = [
  "6 live cohort sessions, 1 hour each",
  "7-day access to all recordings + prompts",
  "21-day private Slack community after the cohort ends",
  "All my working prompts and n8n workflows",
  "Templates: deck, email sequence, ad scripts",
];
