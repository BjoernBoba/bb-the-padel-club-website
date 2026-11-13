export const metadata = {
  title: "AGB | BB The Padel Club",
};

export default function AgbPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="text-lg mb-2" style={{ color: "var(--text-muted)" }}>The Padel Club</p>
        <div className="w-16 h-px mb-4" style={{ background: "var(--gold)" }} />
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Stand: August 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              1. Geltungsbereich
            </h2>
            <p className="mb-3">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Buchungen, den
              Zutritt sowie die Nutzung der Sportanlage „The Padel Club" durch Kunden und Besucher.
            </p>
            <p>
              Mit Abschluss einer Buchung bestätigt der Kunde, diese AGB gelesen und akzeptiert zu haben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              2. Buchung und Zutritt
            </h2>
            <ul className="space-y-2 list-none">
              {[
                "Die Buchung erfolgt ausschließlich über das jeweilige Buchungssystem.",
                "Der Zutritt erfolgt über einen digitalen QR-Code oder ein anderes vom Betreiber bereitgestelltes Zugangssystem.",
                "Der Zutritt ist ausschließlich für den gebuchten Zeitraum gestattet.",
                "Eine Weitergabe des Zutrittscodes an Dritte ist unzulässig.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: "var(--gold)" }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              3. Nutzung der Anlage
            </h2>
            <p className="mb-3">
              Die Anlage darf ausschließlich zum Padelspielen und den hierfür vorgesehenen Zwecken genutzt werden.
            </p>
            <p>
              Untersagt sind insbesondere mutwillige Beschädigungen, Betreten nicht freigegebener Bereiche,
              Rauchen innerhalb der Halle, offenes Feuer, gefährliche Gegenstände sowie Glasflaschen auf den Spielflächen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              4. Gesundheit und Eigenverantwortung
            </h2>
            <p>
              Jeder Nutzer bestätigt, gesundheitlich zur Ausübung des Sports in der Lage zu sein. Das
              Betreten und die Nutzung der Anlage erfolgen auf eigene Gefahr. Es wird empfohlen, geeignete
              Sportkleidung sowie ausschließlich saubere Hallenschuhe mit nicht färbender Sohle zu tragen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              5. Haftung
            </h2>
            <p className="mb-3">
              Der Betreiber haftet nach den gesetzlichen Vorschriften.
            </p>
            <p className="mb-3">
              Eine Haftung besteht insbesondere bei Vorsatz, grober Fahrlässigkeit sowie bei
              Verletzung von Leben, Körper oder Gesundheit.
            </p>
            <p>
              Soweit gesetzlich zulässig, ist die Haftung für leicht fahrlässig verursachte Schäden
              ausgeschlossen, sofern keine wesentlichen Vertragspflichten verletzt werden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
