import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; text: string | string[]; link?: { href: string; label: string } }[] = [
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
    text: ["Schläger-Ausleihe vor Ort", "Bälle zum Kauf erhältlich", "Ballmaschine mietbar"],
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
    text: "Regelmäßige Events für alle Spielstärken – verpasse nichts und tritt unserer WhatsApp-Gruppe bei.",
    link: { href: "https://chat.whatsapp.com/C6EIU6hfeDqAIz5s8dK2QF", label: "WhatsApp-Gruppe beitreten" },
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
        <div className="flex flex-col items-center mb-12 gap-3">
          <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
            — The Padel Club —
          </p>
          <h2
            className="text-4xl text-center"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Das erwartet Dich
          </h2>
          <div className="w-12 h-px mt-1" style={{ background: "var(--gold)" }} />
        </div>
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
              {feature.link && (
                <a
                  href={feature.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--gold)] transition-colors duration-200"
                  style={{ background: "var(--black)" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" style={{ color: "var(--text-muted)" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.056-1.11l-.29-.173-3.005.788.803-2.927-.19-.302A7.944 7.944 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                  <span className="text-xs tracking-wide flex-1" style={{ color: "var(--text-muted)" }}>
                    {feature.link.label}
                  </span>
                  <span className="text-xs" style={{ color: "var(--gold-dark)" }}>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
