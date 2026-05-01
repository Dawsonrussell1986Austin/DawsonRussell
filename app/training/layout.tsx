import "../legacy.css";
import { LegacyNav } from "@/components/LegacyNav";
import { LegacyFooter } from "@/components/LegacyFooter";

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LegacyNav />
      {children}
      <LegacyFooter />
    </>
  );
}
