import type { Metadata } from "next";
import { CohortHero } from "./_sections/CohortHero";
import { CohortProblem } from "./_sections/CohortProblem";
import { Curriculum } from "./_sections/Curriculum";
import { WhatMembersShip } from "./_sections/WhatMembersShip";
import { Included } from "./_sections/Included";
import { WhoFor } from "./_sections/WhoFor";
import { Pricing } from "./_sections/Pricing";
import { AboutLong } from "./_sections/AboutLong";
import { CohortFAQ } from "./_sections/CohortFAQ";
import { FinalCTA } from "./_sections/FinalCTA";
import { COHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The 5-Day AI Sprint for Capital Raise Marketing — ${COHORT.sessionShortLabel} Session`,
  description:
    "Mon–Fri live workweek sprint, 90 min a day (~20 hours total), plus 21 days of Slack and office hours after. Walk out Friday afternoon with a deployed landing page, deck, ads ready to launch, and outreach automation sending.",
};

export default function CohortPage() {
  return (
    <>
      <CohortHero />
      <CohortProblem />
      <Curriculum />
      <WhatMembersShip />
      <Included />
      <WhoFor />
      <Pricing />
      <AboutLong />
      <CohortFAQ />
      <FinalCTA />
    </>
  );
}
