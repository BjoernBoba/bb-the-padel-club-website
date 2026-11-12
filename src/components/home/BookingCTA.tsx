"use client";

import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="py-16 px-6" style={{ background: "var(--black)", borderTop: "1px solid var(--gold-dark)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          — Court Reservierung —
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
        >
          Bereit zu spielen?
        </h2>
        <p className="mb-8 text-lg" style={{ color: "var(--text-muted)" }}>
          Sicher dir deinen Court und erlebe Padel auf höchstem Niveau.
        </p>
        <Link
          href="/buchen"
          className="inline-flex items-center px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
          style={{ background: "var(--gold)", color: "var(--black)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-light)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
        >
          Court buchen
        </Link>
      </div>
    </section>
  );
}
