export const metadata = {
  title: "Preise | BB The Padel Club",
};

const PREISE = [
  {
    saison: "Winter Hauptzeit",
    zeitraum: "Okt. – Apr.",
    zeit: "14 – 23 Uhr",
    court: "36,00 €",
    person: "9,00 €",
  },
  {
    saison: "Winter Nebenzeit",
    zeitraum: "Okt. – Apr.",
    zeit: "08 – 14 Uhr",
    court: "32,00 €",
    person: "8,00 €",
  },
  {
    saison: "Sommer Hauptzeit",
    zeitraum: "Mai – Sept.",
    zeit: "14 – 23 Uhr",
    court: "34,00 €",
    person: "8,50 €",
  },
  {
    saison: "Sommer Nebenzeit",
    zeitraum: "Mai – Sept.",
    zeit: "08 – 14 Uhr",
    court: "30,00 €",
    person: "7,50 €",
  },
];

export default function PreisePage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — Courtmiete —
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Preise
          </h1>
        </div>

        <div
          className="p-8 mb-8"
          style={{ background: "var(--surface)", borderTop: "2px solid var(--gold)" }}
        >
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Doppelcourt · Preise pro 60 Minuten
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Pro-Person-Preis bei vier Spielern mit gleicher Kostenaufteilung.
          </p>

          {/* Desktop-Tabelle */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Saison / Zeit", "Zeitraum", "Uhrzeit", "Pro Court", "Pro Person"].map((h) => (
                    <th
                      key={h}
                      className="pb-3 text-left font-semibold tracking-wider text-xs uppercase"
                      style={{ color: "var(--gold)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PREISE.map((row, i) => (
                  <tr
                    key={row.saison}
                    style={{
                      borderBottom: i < PREISE.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <td className="py-4 font-medium" style={{ color: "var(--text)" }}>
                      {row.saison}
                    </td>
                    <td className="py-4" style={{ color: "var(--text-muted)" }}>{row.zeitraum}</td>
                    <td className="py-4" style={{ color: "var(--text-muted)" }}>{row.zeit}</td>
                    <td className="py-4 font-semibold" style={{ color: "var(--text)" }}>{row.court}</td>
                    <td className="py-4 font-semibold" style={{ color: "var(--gold)" }}>{row.person}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile-Karten */}
          <div className="md:hidden flex flex-col gap-4">
            {PREISE.map((row) => (
              <div
                key={row.saison}
                className="p-4"
                style={{ background: "var(--black)", border: "1px solid var(--border)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>{row.saison}</p>
                <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                  {row.zeitraum} · {row.zeit}
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Pro Court</p>
                    <p className="font-semibold" style={{ color: "var(--text)" }}>{row.court}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Pro Person</p>
                    <p className="font-semibold" style={{ color: "var(--gold)" }}>{row.person}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-center mb-6" style={{ color: "var(--text-muted)" }}>
          Alle Preise inkl. MwSt. · Buchung über unser Online-Buchungssystem.
        </p>

      </div>
    </div>
  );
}
