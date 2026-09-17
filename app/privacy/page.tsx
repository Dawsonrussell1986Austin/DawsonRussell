import { Header, Footer } from "@/components/field-notes/Chrome";
export const metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article">
          <p className="eyebrow">Field Notes</p>
          <h1>Privacy</h1>
          <p>
            If you subscribe to Field Notes, your email address is used to send
            the newsletter through Kit. You can unsubscribe using the link in
            each newsletter.
          </p>
          <p>
            This site uses Google Analytics to understand visits and website
            usage. Embedded films are delivered through Mux, and fonts are
            loaded from Google Fonts. Those services receive the technical
            information needed to provide their services.
          </p>
          <p>
            Questions about your subscription or personal information? Contact{" "}
            <a className="text-link" href="mailto:dawson@dawsonrussell.com">
              dawson@dawsonrussell.com
            </a>
            .
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
