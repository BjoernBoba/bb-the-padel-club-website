import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = 2026;

  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--gold-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="BB The Padel Club" width={48} height={48} className="object-contain" />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
              >
                BB The Padel Club
              </span>
            </div>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              Respect. Passion. Community.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/bbthepadelclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-[var(--gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bbthepadelclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-colors duration-200 hover:text-[var(--gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--gold)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/news", label: "News" },
                { href: "/galerie", label: "Galerie" },
                { href: "/anfahrt", label: "Anfahrt" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--gold)" }}
            >
              Rechtliches
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/agb", label: "AGB" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--gold)" }}
            >
              Adresse
            </h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Schachenstrasse 112-114<br />
              66954 Pirmasens<br />
            </p>

            <h4
              className="text-xs uppercase tracking-widest mb-3 mt-6"
              style={{ color: "var(--gold)" }}
            >
              Kontakt
            </h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              info@bbthepadelclub.de<br />
            </p>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <span>© {year} BB The Padel Club. Alle Rechte vorbehalten.</span>
          <span>Built with ❤ für den Sport.</span>
        </div>
      </div>
    </footer>
  );
}
