import type { Metadata } from "next";
import { TrainingHero } from "./_sections/TrainingHero";
import { ValueProps } from "./_sections/ValueProps";
import { AboutShort } from "./_sections/AboutShort";
import { SprintCredential } from "./_sections/SprintCredential";
import { TrainingFAQ } from "./_sections/TrainingFAQ";
import { TrainingCTA } from "./_sections/TrainingCTA";
import { TrustStrip } from "./_sections/TrustStrip";
import { MetaDemo } from "./_sections/MetaDemo";
import { TRAINING } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${TRAINING.headline} — Free 1-Hour Training`,
  description: TRAINING.subhead,
};

export default function TrainingPage() {
  return (
    <>
      <TrainingHero />
      <TrustStrip />
      <ValueProps />
      <AboutShort />
      <SprintCredential />
      <TrainingFAQ />
      <MetaDemo />
      <TrainingCTA />
    </>
  );
}
