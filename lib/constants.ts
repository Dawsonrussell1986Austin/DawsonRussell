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
    "Watch me build a $25K capital raise marketing package — live, on screen, in 25 minutes.",
  subhead:
    "AI changed more in the last 90 days than in the previous two years. The issuers who adapt now will outraise the ones who don't — by a margin that won't be closeable later.",
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

// ---------- Paid 5-day session (page: /training/cohort) ----------
export const COHORT = {
  name: "{{COHORT_NAME}}",
  // Session label (date range) — used in CTAs, badges, pricing.
  sessionLabel: "May 11 – 15, 2026",
  sessionShortLabel: "May 11 – 15",
  startDateLabel: "Monday, May 11, 2026",
  startDayShortLabel: "May 11th",
  startDateISO: "2026-05-11",
  price: 2499,
  priceLabel: "$2,499",
  anchorPriceLabel: "$3,997",
  depositAmount: 500,
  depositLabel: "$500",
  remainderAmount: 1999,
  remainderLabel: "$1,999",
  paymentNote:
    "Pay the $500 deposit to reserve your seat. The $1,999 balance is due only after the 5-day session — and only if you completed the work and found it worth $2,499.",
  seats: "10",
  // Refund / completion policy — reused on pricing card and FAQ.
  completionRequirement:
    "To be eligible to walk away from the $1,999 balance, you must show up — attend live or watch every recording within the session week, ship the daily homework, and present at Friday Demo Day.",
  totalHoursLabel: "~20 hours across 5 days",
  workweekLine:
    "5 days. 90 minutes a day — less than your happy hour, less than an extended lunch. Listen in the car. Hit it at the gym. Trade one Netflix night for the homework. By Friday afternoon, you've shipped a complete AI-powered raise marketing system.",

  // Optional hero video (same pattern as TRAINING). Leave empty to show
  // the curriculum preview card on the right.
  videoUrl: "" as string,
  videoEmbed: "" as string,
  videoPoster: "" as string,
  format: {
    sessions:
      "Mon–Fri live workweek sprint, 90 minutes a day (~20 hours total, including Friday Demo Day)",
    trainingAccess:
      "All session recordings + prompts (rewatch on your schedule)",
    slackAccess:
      "21 days of private Slack support and office hours with Dawson after the sprint",
  },
  refundLine:
    "$500 deposit reserves your seat (10 per session, non-refundable — the seat is real and limited). The $1,999 balance is due after the session, only if you completed the work.",
  scarcityLine:
    "Limited to 10 capital raise issuers per session. Founding member pricing — future sessions will be priced higher.",
};

// ---------- Curriculum (5 days, Monday–Friday workweek sprint) ----------
export type Module = {
  day: number;
  dayLabel: string;
  name: string;
  liveTime: string;
  agenda: string[];
  async: string[];
  deliverable: string;
  note?: string;
};

export const MODULES: Module[] = [
  {
    day: 1,
    dayLabel: "Monday",
    name: "Foundation, Visuals & Copy",
    liveTime: "Live: 90 min, 9–10:30am CT",
    agenda: [
      "Kickoff + intros",
      "AI stack overview + Claude Project setup",
      "Midjourney workflow for investor visuals",
      "Copywriting framework + the 5-prompt investor email sequence",
    ],
    async: [
      "Build a Claude Project loaded with your docs",
      "Generate hero image + 6 deck visuals + 3 ad creatives",
      "Draft 8-email investor sequence",
    ],
    deliverable:
      "Claude Project + visual asset pack + email sequence draft",
    note:
      "Heaviest day — Monday energy is highest, people are fresh.",
  },
  {
    day: 2,
    dayLabel: "Tuesday",
    name: "Pitch Deck & Web",
    liveTime: "Live: 90 min, 9–10:30am CT",
    agenda: [
      "Pitch deck narrative rebuild",
      "Claude Code crash course",
      "Investor landing page structure",
      "Vercel deploy walkthrough",
    ],
    async: [
      "Rebuild your pitch deck using the new narrative",
      "Build and deploy a landing page to a live URL",
      "Connect the form to GHL",
    ],
    deliverable:
      "Rewritten deck + deployed investor landing page on a real URL",
    note:
      "The 'holy crap, I just built that' day — landing page goes live for real.",
  },
  {
    day: 3,
    dayLabel: "Wednesday",
    name: "Ads",
    liveTime: "Live: 90 min, 9–10:30am CT",
    agenda: [
      "Reg D / Reg A / Reg CF compliance line for paid ads",
      "Meta audience setup for accredited investors",
      "AI-generated ad creative — 30-variation workflow",
      "Hook library + scaling framework",
    ],
    async: [
      "Build 10 ad variations + 3 audiences",
      "Draft a 30-day media plan + budget allocation",
    ],
    deliverable:
      "10 ads + 3 audiences ready to launch + a 30-day media plan",
    note:
      "Optional 60-min office hours at 4pm CT for stuck moments.",
  },
  {
    day: 4,
    dayLabel: "Thursday",
    name: "Outreach Automation",
    liveTime: "Live: 90 min, 9–10:30am CT",
    agenda: [
      "Apollo + EDGAR investor sourcing",
      "n8n basics — build one workflow live together",
      "Personalized cold email at scale",
      "AI-powered investor research briefings",
    ],
    async: [
      "Build an n8n workflow for lead sourcing + outreach",
      "Set up the CRM template",
      "Generate 25 personalized investor research briefings",
    ],
    deliverable:
      "Working outreach automation + CRM + 25 briefings ready to send",
  },
  {
    day: 5,
    dayLabel: "Friday — Demo Day",
    name: "Integration & Launch",
    liveTime: "Live: 90 min, 1–2:30pm CT",
    agenda: [
      "Each member presents (5 min): deck, landing page, system walkthrough",
      "Live group + Dawson feedback",
      "Final hour: everyone launches — campaigns go live, outreach starts sending",
      "Send-off + 21-day Slack window kicks off",
    ],
    async: [
      "Morning (9am–12pm): connect everything end-to-end",
      "Test the full flow with a fake lead",
      "Final polish on deck + landing page (Slack open for stuck moments)",
    ],
    deliverable:
      "A complete, deployed, live AI-powered capital raise marketing system",
    note:
      "Friday afternoon by design — productive panic + you ride the high into the weekend.",
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
    a: "At the end I'll mention the paid 5-day session for people who want to go deeper. The first 55 minutes are pure training — no pitch.",
  },
  {
    q: "What software do I need?",
    a: "A browser. The session runs on Zoom and the tools I demo are all web-based.",
  },
];

// ---------- Cohort FAQ ----------
export const COHORT_FAQ = [
  {
    q: "How much time will this actually take?",
    a: "About 20 hours across 5 days. Live sessions: 90 minutes a day. Mon–Thu at 9–10:30am CT. Friday Demo Day at 1–2:30pm CT. Plus ~2 hours of build time each afternoon. Block the workweek like you'd block a conference.",
  },
  {
    q: "Is this self-paced?",
    a: "No. Mon–Fri live workweek sprint. Block the calendar. The homework is yours to do at the pace you can sustain, but the classes are live and the energy of doing it together with a small group of issuers is the whole point. If you can show up live (or hit the recording the same evening), you're fine.",
  },
  {
    q: "What if I miss a session?",
    a: "Every session is recorded and posted within an hour of wrapping. You can rewatch any time. Live is where the questions get answered in real time — that's where the value is — so do everything you can to be there.",
  },
  {
    q: "What happens after the 5 days?",
    a: "You get 21 more days of private Slack support and office hours with me. Bring your asset reviews, stuck points, campaign questions — I'll work through them with you while your raise goes into market.",
  },
  {
    q: "How does the $500 deposit work?",
    a: "Your $500 reserves your seat. We only open 10 seats per session — once they're gone, they're gone. The deposit is non-refundable because the seat is real and someone else can't take it. The $1,999 balance is due after the 5-day session ends.",
  },
  {
    q: "When and how is the $1,999 balance due?",
    a: "Friday afternoon, after Demo Day. To be eligible to either pay it or walk away, you have to actually show up: attend live or watch every recording within the session week, ship the daily homework, and present at Friday Demo Day. If you completed the work and it delivered, the balance is due. If you completed it and it didn't deliver, walk away — the $500 deposit is the only money that ever changed hands.",
  },
  {
    q: "What software do I need?",
    a: "A browser, a Meta Ads account, and accounts at the AI tools we use (Claude, ChatGPT, Midjourney, Vercel, n8n, Apollo). Full setup list goes out on signup so you can have everything wired before Monday morning.",
  },
  {
    q: "Who is this for?",
    a: "Capital raise founders, GPs, and issuer marketing teams who are actively raising or about to. Not for agencies, service providers, or anyone trying to do this on the side of a full-time job — clear the workweek or skip this round.",
  },
  {
    q: "What's the refund policy?",
    a: "There isn't one in the traditional sense — and that's the whole point. You only pay $500 up front. If you completed the work and the system delivered, you owe the $1,999 balance. If you completed it and it didn't deliver, you walk away owing nothing. The $500 deposit is non-refundable: you took a real, limited seat (10 per session) that another founder could've filled. If you ghost the session, skip the homework, or treat it like passive content, the $500 is gone and the eligibility to walk away from the balance is gone too — but you also won't be charged the $1,999. We don't refund people who don't show up.",
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

This sprint is the system I use, in your hands, in one workweek. Mon–Fri, head down — you walk out Friday afternoon with prompts, workflows, templates, and a complete set of working assets for your raise. Plus 21 more days of Slack and office hours to grind through whatever's still in your way.`;

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
  "You can commit 90 min a day live Mon–Fri, plus ~2 hours of build time after",
  "You're actively raising or planning a raise in the next 6 months",
  "You're the founder, GP, or marketing lead — you make the calls",
  "You'd rather build it yourself than hire an agency",
];

export const WHO_NOT_FOR = [
  "You can't clear the week — this isn't a side-of-desk course",
  "You want a self-paced course you'll get to \"eventually\"",
  "You want done-for-you — this is build-with-me",
  "You're a marketing agency looking to resell this",
];

// ---------- What's included (cohort) ----------
export const INCLUDED = [
  "Mon–Fri live workweek sprint, 90 min a day, taught by Dawson",
  "Friday Demo Day — present, get feedback, launch live with the group",
  "All session recordings + prompts (rewatch on your schedule)",
  "21 days of private Slack support + office hours with Dawson after",
  "All working prompts, n8n workflows, and Claude Projects",
  "Templates: deck, landing page, email sequence, ad scripts, investor briefings",
];
