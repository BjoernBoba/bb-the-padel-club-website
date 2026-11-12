export const metadata = {
  title: "Datenschutz | BB The Padel Club",
};

export default function DatenschutzPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Datenschutzerklärung
        </h1>
        <div className="w-16 h-px mb-4" style={{ background: "var(--gold)" }} />
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Stand: November 2024 · Gemäß DSGVO und BDSG
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              BB The Padel Club<br />
              Max Mustermann<br />
              Musterstraße 1, 12345 Musterstadt<br />
              E-Mail: datenschutz@thepadelclub.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden durch den Hosting-Anbieter automatisch folgende Daten
              in sogenannten Server-Log-Dateien gespeichert: IP-Adresse, Datum und Uhrzeit, aufgerufene
              Seite, Referrer-URL sowie Browser und Betriebssystem. Diese Daten sind nicht einer
              bestimmten Person zuordenbar und werden ausschließlich zur technischen Bereitstellung der
              Website verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              3. Cookies
            </h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
              der Seite erforderlich sind. Es werden keine Tracking- oder Werbe-Cookies eingesetzt.
              Du kannst Cookies in deinem Browser jederzeit deaktivieren oder löschen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              5. Google Maps
            </h2>
            <p>
              Auf der Anfahrtsseite verwenden wir Google Maps (Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA). Beim Laden der Karte wird deine IP-Adresse an Google
              übermittelt. Weitere Informationen findest du in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)" }}
                className="hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              6. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA
              gehostet. Vercel verarbeitet Verbindungsdaten auf Servern innerhalb der EU und der USA.
              Weitere Informationen: vercel.com/legal/privacy-policy. Mit Vercel wurde ein
              Datenverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              7. Deine Rechte
            </h2>
            <p>
              Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
              (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit
              (Art. 20 DSGVO) sowie das Widerspruchsrecht (Art. 21 DSGVO). Außerdem hast du das Recht,
              dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            </p>
            <p className="mt-3">
              Für Anfragen zu deinen Datenschutzrechten wende dich an: datenschutz@thepadelclub.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              8. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand November 2024. Durch die
              Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw.
              behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
