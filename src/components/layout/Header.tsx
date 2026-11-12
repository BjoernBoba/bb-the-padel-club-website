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
