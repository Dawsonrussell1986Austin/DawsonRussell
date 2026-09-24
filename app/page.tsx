import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";

const links = [
  { label: "RaiseLaunch", href: "https://raiselaunch.com", external: true },
  { label: "DryRun", href: "https://apps.apple.com/us/app/dry-run-alcohol-free-days/id6789925355", external: true },
  { label: "LifeJournal", href: "https://www.getlifejournal.app", external: true },
  { label: "Films & work", href: "/studio", external: false },
  { label: "Field Notes", href: "/notes", external: false },
];

export default function HomePage() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="minimal-home" id="main">
          <h1>I make things.</h1>
          <p className="home-intro">
            I run RaiseLaunch, build apps, and make films in Austin, Texas.
          </p>
          <div className="home-links">
            <h2>Explore</h2>
            <ul>
              {links.map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <span>{label}</span><span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link href={href}>
                      <span>{label}</span><span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className="home-contact">
            Have something in mind? <a href="mailto:dawson@dawsonrussell.com">Email me.</a>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
