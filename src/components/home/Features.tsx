const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    title: "Premium Courts",
    text: ["4 Panorama-Doppelplätze", "1 Panorama-Einzelplatz", "1 Kids- & Senioren-Court", "1 Padel-Ping-Pong"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3c0 0 3 4.5 3 9s-3 9-3 9M12 3c0 0-3 4.5-3 9s3 9 3 9M3 12h18" />
      </svg>
    ),
    title: "Professionelles Equipment",
    text: "Schläger und Bälle für alle Niveaus. Ausleihe und Verkauf vor Ort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community & Events",
    text: "Regelmäßige Workshops und Events für alle Spielstärken.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 2l1.578 5.513M9 2L7.422 7.513M15 2l1.578 5.513M21 2l-1.578 5.513" />
        <path d="M3 7.513h18v3c0 4.418-3.582 8-8 8h-2c-4.418 0-8-3.582-8-8v-3z" />
        <path d="M9 18.513v2M15 18.513v2M7 20.513h10" />
      </svg>
    ),
    title: "Lounge & Café",
    text: "Entspann nach dem Match in unserer gemütlichen Lounge mit frischen Getränken und Snacks.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl text-center mb-12"
          style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
        >
          Was uns auszeichnet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 flex flex-col gap-4"
              style={{
                background: "var(--surface-2)",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <div style={{ color: "var(--gold)" }}>{feature.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>
              <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {Array.isArray(feature.text) ? (
                  <ul className="space-y-1">
                    {feature.text.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span style={{ color: "var(--gold)" }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  feature.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
