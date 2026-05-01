import Link from "next/link";
import { IridescentCard } from "@/components/IridescentCard";
import { COHORT } from "@/lib/constants";

export function SprintCredential() {
  return (
    <section style={{ padding: "5rem 2rem 6rem" }}>
      <div className="container sprint-credential-grid">
        <div style={{ minWidth: 0 }}>
          <div className="section-label">After the training</div>
          <h2 className="section-heading">
            The credential, <em className="serif" style={{ fontStyle: "italic" }}>not just a course.</em>
          </h2>
          <p className="body-text">
            The free training is the demo. The {COHORT.startDayShortLabel} session
            is the real thing — five days, 90 minutes a day, ten capital raise
            issuers in the room with me building the whole AI marketing system
            live.
          </p>
          <p className="body-text">
            Hover the credential. The 1 of 10 seats look like this.
          </p>
          <div style={{ marginTop: "2.25rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/training/cohort" className="btn-primary">
              Join the {COHORT.startDayShortLabel} Session
            </Link>
            <Link href="/training/cohort#curriculum" className="btn-secondary">
              See the curriculum
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <IridescentCard />
        </div>
      </div>
    </section>
  );
}
