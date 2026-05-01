import "../legacy.css";
import type { Metadata } from "next";
import Link from "next/link";
import { LegacyFooter } from "@/components/LegacyFooter";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — Dawson Russell",
  description:
    "How dawsonrussell.com collects, uses, and protects your information.",
};

const LAST_UPDATED = "April 30, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header
        style={{
          padding: "1.25rem 2rem",
          borderBottom: "1px solid rgba(26,26,26,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              color: "#1A1A1A",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#1A1A1A",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                fontWeight: 600,
              }}
            >
              DR
            </span>
            Dawson Russell
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "0.85rem",
              color: "#4A4A4A",
              textDecoration: "none",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "4rem 2rem 5rem",
          fontFamily: "Inter, sans-serif",
          color: "#1A1A1A",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#A09A93",
            marginBottom: "1rem",
          }}
        >
          Legal
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            color: "#6B6B6B",
            fontSize: "0.9rem",
            marginBottom: "3rem",
          }}
        >
          Last updated: {LAST_UPDATED}
        </p>

        <Section heading="Overview">
          <p>
            This Privacy Policy describes how Dawson Russell
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
            uses, and shares information when you visit{" "}
            <strong>{SITE.domain}</strong> (the &quot;Site&quot;), submit a
            form, register for training, or purchase a session.
          </p>
          <p>
            By using the Site, you agree to the practices described here. If
            you don&apos;t agree, don&apos;t use the Site.
          </p>
        </Section>

        <Section heading="Information we collect">
          <p>We collect three categories of information:</p>
          <List
            items={[
              <span key="forms">
                <strong>Information you give us through forms.</strong> When
                you submit the contact form, register for free training, or
                join a paid session, we collect what you type — typically your
                first name, email address, phone number (if provided), company
                name (if provided), and any free-text messages.
              </span>,
              <span key="payments">
                <strong>Payment information.</strong> When you pay a deposit
                or balance for a session, payment is processed by Stripe. We
                don&apos;t store full card numbers on our servers; Stripe
                handles tokenization and storage. We receive a record of the
                charge (amount, last 4 of card, billing email).
              </span>,
              <span key="analytics">
                <strong>Automatically collected information.</strong> When you
                visit the Site, we and our analytics providers may collect IP
                address, browser type and version, device information, referrer
                URL, pages viewed, time on page, and approximate location
                (city/region from IP). This is collected through cookies and
                similar technologies (see Cookies below).
              </span>,
            ]}
          />
        </Section>

        <Section heading="How we use your information">
          <List
            items={[
              "Respond to inquiries you send us through the contact form.",
              "Send you the training session link, calendar invite, and follow-up emails when you register.",
              "Process and confirm payments for paid sessions, including the deposit and the balance charged after Demo Day.",
              "Operate, maintain, and improve the Site.",
              "Measure marketing performance (which pages convert, which referral sources drive registrations).",
              "Comply with legal obligations and enforce our terms.",
            ]}
          />
        </Section>

        <Section heading="Third-party services we share with">
          <p>
            We don&apos;t sell your information. We share it only with the
            third-party tools we use to operate the Site:
          </p>
          <List
            items={[
              <span key="ghl">
                <strong>GoHighLevel (GHL)</strong> — receives training
                registration form submissions (first name, email) so we can
                send the session link and follow-up sequences.
              </span>,
              <span key="formsubmit">
                <strong>FormSubmit</strong> — receives general contact-form
                submissions from the homepage and forwards them to our email.
              </span>,
              <span key="stripe">
                <strong>Stripe</strong> — processes deposits and balance
                charges for paid sessions.
              </span>,
              <span key="ga">
                <strong>Google Analytics 4</strong> — measures site traffic
                and user behavior (cookies, IP, page views).
              </span>,
              <span key="meta">
                <strong>Meta Pixel</strong> (when enabled) — measures ad
                campaign performance and powers retargeting.
              </span>,
              <span key="vercel">
                <strong>Vercel</strong> — our hosting provider; processes
                request logs incidental to serving the Site.
              </span>,
            ]}
          />
          <p>
            Each provider has its own privacy practices. We recommend
            reviewing their policies if you want details on how they handle
            data.
          </p>
        </Section>

        <Section heading="Cookies and tracking">
          <p>
            We use cookies and similar technologies for analytics and ad
            measurement. Cookies are small files stored on your device that
            help us recognize repeat visits and understand how the Site is
            used.
          </p>
          <p>
            You can disable cookies in your browser settings. Doing so may
            limit some Site functionality.
          </p>
        </Section>

        <Section heading="Data retention">
          <p>
            We retain form submissions and registration data as long as
            needed to operate the Site, communicate with you, and comply with
            legal obligations. You can request deletion at any time using the
            contact information below.
          </p>
        </Section>

        <Section heading="Your rights">
          <p>
            Depending on where you live (e.g. California, the EU/UK), you may
            have rights to access, correct, delete, or port the personal
            information we hold about you, and to object to or restrict
            certain processing. To exercise any of these rights, email{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              style={{ color: "#D4714E" }}
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
          <p>
            For California residents: we don&apos;t sell personal information
            within the meaning of the CCPA.
          </p>
        </Section>

        <Section heading="Children's privacy">
          <p>
            The Site isn&apos;t directed to children under 13, and we
            don&apos;t knowingly collect personal information from anyone
            under 13. If you believe we have, contact us and we&apos;ll
            delete it.
          </p>
        </Section>

        <Section heading="Security">
          <p>
            We use reasonable administrative and technical measures to
            protect your information. No method of internet transmission or
            electronic storage is 100% secure, however, and we can&apos;t
            guarantee absolute security.
          </p>
        </Section>

        <Section heading="Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. When we do,
            we&apos;ll change the &quot;Last updated&quot; date at the top of
            this page. Material changes will be communicated through the
            Site or by email when appropriate.
          </p>
        </Section>

        <Section heading="Contact">
          <p>
            Questions about this Privacy Policy? Email{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              style={{ color: "#D4714E" }}
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
        </Section>
      </article>

      <LegacyFooter />
    </>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.45rem",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          marginBottom: "1rem",
          color: "#1A1A1A",
        }}
      >
        {heading}
      </h2>
      <div
        style={{
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "#4A4A4A",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
