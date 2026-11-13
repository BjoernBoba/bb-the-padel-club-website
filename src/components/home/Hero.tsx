"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "91svh", minHeight: "600px", background: "var(--black)", paddingBottom: "28vh" }}
    >
      {/* Großes Logo als Wasserzeichen unterhalb der Buttons */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={380}
          height={380}
          className="object-contain"
        />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <Image
          src="/images/logo.png"
          alt="BB The Padel Club Logo"
          width={80}
          height={80}
          className="object-contain mb-6"
        />
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          — The Padel Club —
        </p>
        <h1
          className="text-5xl sm:text-7xl font-bold leading-tight mb-8"
          style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
        >
          Play. Focus.<br />Win. Repeat.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/buchen"
            className="px-8 py-3 font-semibold tracking-wider uppercase transition-colors duration-200 text-sm"
            style={{ background: "var(--gold)", color: "var(--black)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
          >
            Jetzt Buchen →
          </Link>
          <Link
            href="/galerie"
            className="px-8 py-3 font-semibold tracking-wider uppercase text-sm transition-colors duration-200"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--black)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Galerie entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}
