export const metadata = {
  title: "AGB | BB The Padel Club",
};

export default function AgbPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="w-16 h-px mb-4" style={{ background: "var(--gold)" }} />
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Stand: November 2024
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 1 Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen BB The Padel Club
              (nachfolgend Betreiber) und seinen Kunden (nachfolgend Mitglied oder Gast) über die Nutzung
              der Padel-Anlagen, die Buchung von Courts sowie sonstige Leistungen des Betreibers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 2 Leistungsangebot
            </h2>
            <p>
              Der Betreiber stellt Padel-Courts zur stunden- oder halbstundenweisen Nutzung zur Verfügung.
              Das Angebot umfasst außerdem Verleih von Schlägern und Bällen, Nutzung von Umkleidekabinen
              sowie den Aufenthalt in der Lounge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 3 Buchung und Vertragsschluss
            </h2>
            <p>
              Buchungen können online über das Buchungssystem, telefonisch oder persönlich vorgenommen werden.
              Ein Vertrag kommt mit Bestätigung der Buchung zustande. Der Betreiber behält sich das Recht vor,
              Buchungen ohne Angabe von Gründen abzulehnen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 4 Preise und Zahlung
            </h2>
            <p>
              Es gelten die zum Zeitpunkt der Buchung ausgewiesenen Preise. Die Zahlung erfolgt im Voraus
              oder direkt vor Ort. Akzeptierte Zahlungsmittel: EC-Karte, Kreditkarte, Barzahlung.
              Rechnungen sind sofort fällig.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 5 Stornierung und Umbuchung
            </h2>
            <p>
              Stornierungen sind bis 24 Stunden vor dem gebuchten Termin kostenfrei möglich. Bei späterer
              Stornierung oder Nichterscheinen wird der volle Buchungsbetrag fällig. Umbuchungen sind bis
              12 Stunden vor dem Termin einmalig kostenlos möglich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 6 Hausordnung und Nutzungsbedingungen
            </h2>
            <p>
              Die Nutzung der Anlage erfolgt auf eigene Gefahr. Geeignetes Sportschuhwerk ist Pflicht.
              Speisen und Getränke von außen sind in den Spielbereichen nicht gestattet. Der Betreiber
              behält sich das Recht vor, Personen die gegen die Hausordnung verstoßen des Geländes zu verweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 7 Haftung
            </h2>
            <p>
              Der Betreiber haftet nicht für Personen- oder Sachschäden, die durch unsachgemäße Nutzung
              der Anlage oder durch Verschulden des Nutzers entstehen. Eine Haftung für abhanden gekommene
              oder beschädigte persönliche Gegenstände wird ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 8 Datenschutz
            </h2>
            <p>
              Die erhobenen personenbezogenen Daten werden ausschließlich zur Vertragsabwicklung genutzt
              und nicht an Dritte weitergegeben. Näheres regelt unsere Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 9 Änderungen der AGB
            </h2>
            <p>
              Der Betreiber behält sich das Recht vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle
              Version ist auf der Website einsehbar. Wesentliche Änderungen werden Mitgliedern per E-Mail
              mitgeteilt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              § 10 Schlussbestimmungen
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Musterstadt. Sollten
              einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies nicht die
              Wirksamkeit der übrigen Bestimmungen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
