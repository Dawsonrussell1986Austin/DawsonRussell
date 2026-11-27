import { Header, Footer } from "@/components/field-notes/Chrome";

export const metadata = {
  title: "Free Live Training",
  description:
    "Free live training with Dawson Russell: land your first AI client. Thursdays at 7 PM Central.",
  robots: { index: false, follow: false },
};

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" +
  encodeURIComponent("Free Live Training: Land Your First AI Client") +
  "&dates=20261203T190000/20261203T200000" +
  "&ctz=America/Chicago" +
  "&recur=" +
  encodeURIComponent("RRULE:FREQ=WEEKLY;BYDAY=TH") +
  "&details=" +
  encodeURIComponent(
    "Free live training with Dawson Russell. Your join link arrives by email and text before we start. Details: https://dawsonrussell.com/training"
  );

export default function Training() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article training">
          <p className="eyebrow">Free live training</p>
          <h1>You’re in.</h1>
          <p className="lede">
            Thursday at 7 PM Central. Live with Dawson, and free.
          </p>
          <p>
            Your join link is on its way by email and text. Put it on your
            calendar now so Thursday doesn’t slip past you.
          </p>

          <div className="training-actions">
            <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
              <span>Add to Google Calendar</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="/first-ai-client-training.ics" download>
              <span>Apple or Outlook calendar</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <h2>What you’ll see</h2>
          <ul>
            <li>The 3 AI services local businesses already pay for.</li>
            <li>The tools to deliver each one, even if you’re new to AI.</li>
            <li>The script to land your first client.</li>
          </ul>

          <h2>Before Thursday</h2>
          <ul>
            <li>
              Save{" "}
              <a className="text-link" href="mailto:dawson@dawsonrussell.com">
                dawson@dawsonrussell.com
              </a>{" "}
              to your contacts so the link doesn’t land in spam.
            </li>
            <li>Write down three local businesses you already know.</li>
            <li>Bring a notebook. You’ll leave with a plan for week one.</li>
          </ul>

          <div className="article-signup">
            <p>
              No link by Thursday afternoon? Email{" "}
              <a className="text-link" href="mailto:dawson@dawsonrussell.com">
                dawson@dawsonrussell.com
              </a>{" "}
              and we’ll send it again.
            </p>
            <p className="fine">
              No tech background needed. Results vary and landing clients takes
              real work. This training shows you the path, not a guarantee of
              income.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
