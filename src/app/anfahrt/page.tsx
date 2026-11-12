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
                    ["Montag – Freitag", "08:00 – 22:00 Uhr"],
                    ["Samstag", "08:00 – 20:00 Uhr"],
                    ["Sonntag", "08:00 – 20:00 Uhr"],
                    ["Feiertage", "10:00 – 18:00 Uhr"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6" style={{ background: "var(--surface)", borderTop: "2px solid var(--gold)" }}>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
            >
              🚗 Parken
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Kostenfreie Parkplätze stehen direkt vor der Anlage zur Verfügung.
            </p>
          </div>
          <div className="p-6" style={{ background: "var(--surface)", borderTop: "2px solid var(--gold)" }}>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
            >
              🚌 Öffentliche Verkehrsmittel
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Haltestelle in der Nähe der Schachenstrasse. Weitere Infos beim VRN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
