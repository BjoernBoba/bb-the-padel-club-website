import GoogleMap from "@/components/GoogleMap";

export default function AnfahrtPage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — So findest du uns —
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Anfahrt
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className="p-8"
            style={{ background: "var(--surface)", borderTop: "2px solid var(--gold)" }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
            >
              BB The Padel Club
            </h2>

            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                Adresse
              </h3>
              <address className="not-italic text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Schachenstrasse 112–114<br />
                66954 Pirmasens<br />
                Deutschland
              </address>
            </div>

            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                Öffnungszeiten
              </h3>
              <table className="w-full text-sm" style={{ color: "var(--text-muted)" }}>
                <tbody>
                  {[
                    ["Täglich", "08:00 – 23:00 Uhr"],
                  ].map(([day, hours]) => (
                    <tr key={day} className="border-b" style={{ borderColor: "var(--border)" }}>
                      <td className="py-2 pr-4">{day}</td>
                      <td className="py-2" style={{ color: "var(--text)" }}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                Kontakt
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                ✉ info@bbthepadelclub.de
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                Parken
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Kostenfreie Parkplätze stehen direkt vor der Anlage zur Verfügung.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Schachenstrasse+112,+66954+Pirmasens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase"
              style={{ background: "var(--gold)", color: "var(--black)" }}
            >
              Route planen →
            </a>
          </div>

          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
