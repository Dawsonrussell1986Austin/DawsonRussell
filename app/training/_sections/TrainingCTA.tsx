import { TRAINING } from "@/lib/constants";
import { LegacyRegistrationForm } from "@/components/LegacyRegistrationForm";

export function TrainingCTA() {
  return (
    <section className="cta">
      <div className="cta-layout">
        <div className="cta-copy">
          <div className="section-label">Reserve your seat</div>
          <h2 className="section-heading">
            One hour, <em className="serif" style={{ fontStyle: "italic" }}>live.</em>
          </h2>
          <p className="cta-description">
            {TRAINING.dateLabel} · {TRAINING.timeLabel}. {TRAINING.subhead}
          </p>
          <div className="cta-promises">
            <div className="cta-promise">
              <div className="cta-promise-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.3 3L6 10.3 2.7 7" />
                </svg>
              </div>
              {TRAINING.noReplayNote}
            </div>
            <div className="cta-promise">
              <div className="cta-promise-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 5v3l2 1" />
                </svg>
              </div>
              {TRAINING.durationLabel}
            </div>
            <div className="cta-promise">
              <div className="cta-promise-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4h12M2 8h12M2 12h8" />
                </svg>
              </div>
              Walk out with the workflow you can use Monday
            </div>
          </div>
        </div>
        <div>
          <div className="cta-form-wrapper">
            <div className="cta-form-header">
              <h3>Reserve my seat</h3>
              <p>First name + email — that&apos;s it.</p>
            </div>
            <LegacyRegistrationForm
              ctaLabel={TRAINING.ctaLabel}
              source="training-footer"
            />
            <p className="form-note">No replay. Live only.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
