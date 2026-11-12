"use client";

import { useState } from "react";

export default function GoogleMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse flex items-center justify-center gap-3"
          style={{ background: "var(--surface)" }}
        >
          <div
            className="w-5 h-5 rounded-full animate-bounce"
            style={{ background: "var(--gold)", animationDelay: "0ms" }}
          />
          <div
            className="w-5 h-5 rounded-full animate-bounce"
            style={{ background: "var(--gold)", animationDelay: "150ms" }}
          />
          <div
            className="w-5 h-5 rounded-full animate-bounce"
            style={{ background: "var(--gold)", animationDelay: "300ms" }}
          />
        </div>
      )}
      <iframe
        src="https://maps.google.com/maps?q=Schachenstrasse+112,+66954+Pirmasens,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "400px", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
        title="BB The Padel Club – Schachenstrasse 112, Pirmasens"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
