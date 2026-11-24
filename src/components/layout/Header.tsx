"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/news", label: "News" },
  { href: "/galerie", label: "Galerie" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/preise", label: "Preise" },
  { href: "/turniere", label: "Events" },
  { href: "/regeln", label: "Regeln" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: "var(--black)", borderBottom: "1px solid var(--border)" }}
    >
      <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
        <Image src="/images/logo.png" alt="BB The Padel Club" width={48} height={48} className="object-contain" />
        <span
          className="hidden sm:block text-sm font-semibold tracking-widest uppercase"
          style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
        >
          BB The Padel Club
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm tracking-wide uppercase transition-colors duration-200"
            style={{
              color: pathname === href ? "var(--gold)" : "var(--text-muted)",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? "var(--gold)" : "var(--text-muted)")}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Social Icons – Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/bbthepadelclub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://chat.whatsapp.com/C6EIU6hfeDqAIz5s8dK2QF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.056-1.11l-.29-.173-3.005.788.803-2.927-.19-.302A7.944 7.944 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@bbthepadelclub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>
          </a>
        </div>

        <div className="hidden md:block w-px h-5" style={{ background: "var(--border)" }} />

        <Link
          href="/buchen"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-200"
          style={{ background: "var(--gold)", color: "var(--black)", borderRadius: "2px" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-light)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
        >
          Jetzt Buchen
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className="block w-6 h-0.5 transition-transform duration-300"
            style={{
              background: "var(--gold)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-opacity duration-300"
            style={{ background: "var(--gold)", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 transition-transform duration-300"
            style={{
              background: "var(--gold)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-y-0 right-0 w-72 z-50 flex flex-col pt-20 pb-8 px-8 gap-6"
          style={{ background: "var(--black)", borderLeft: "1px solid var(--border)" }}
        >
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <span className="block text-2xl" style={{ color: "var(--gold)" }}>✕</span>
          </button>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg tracking-wide uppercase py-2 border-b transition-colors duration-200"
              style={{
                color: pathname === href ? "var(--gold)" : "var(--text)",
                borderColor: "var(--border)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/buchen"
            className="mt-4 inline-flex justify-center items-center px-5 py-3 text-sm font-semibold tracking-wider uppercase"
            style={{ background: "var(--gold)", color: "var(--black)", borderRadius: "2px" }}
            onClick={() => setMenuOpen(false)}
          >
            Jetzt Buchen
          </Link>

          <div className="flex items-center gap-5 mt-2">
            <a
              href="https://www.instagram.com/bbthepadelclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "var(--text-muted)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://chat.whatsapp.com/C6EIU6hfeDqAIz5s8dK2QF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ color: "var(--text-muted)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.056-1.11l-.29-.173-3.005.788.803-2.927-.19-.302A7.944 7.944 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bbthepadelclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{ color: "var(--text-muted)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
