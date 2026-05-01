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
  title: `The 6-Week AI System for Capital Raise Marketing — ${COHORT.number}`,
  description:
    "A 6-week cohort that gives you the AI system for capital raise marketing — decks, ads, investor copy, and the prompts behind them.",
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
