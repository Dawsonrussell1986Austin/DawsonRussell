import type { Metadata } from "next";
import { CohortHero } from "./_sections/CohortHero";
import { CohortProblem } from "./_sections/CohortProblem";
import { Curriculum } from "./_sections/Curriculum";
import { Included } from "./_sections/Included";
import { WhoFor } from "./_sections/WhoFor";
import { Pricing } from "./_sections/Pricing";
import { AboutLong } from "./_sections/AboutLong";
import { CohortFAQ } from "./_sections/CohortFAQ";
import { FinalCTA } from "./_sections/FinalCTA";
import { COHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The 7-Day AI Sprint for Capital Raise Marketing — ${COHORT.number}`,
  description:
    "A 7-day live sprint (1 hour per business day) plus 21 days of Slack and office hours. Walk out with the AI system for decks, ads, investor copy, and landing pages.",
};

export default function CohortPage() {
  return (
    <>
      <CohortHero />
      <CohortProblem />
      <Curriculum />
      <Included />
      <WhoFor />
      <Pricing />
      <AboutLong />
      <CohortFAQ />
      <FinalCTA />
    </>
  );
}
