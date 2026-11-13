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
            <p className="mt-3">
              Für Schäden, die durch andere Nutzer entstehen, übernimmt der Betreiber keine Haftung,
              soweit ihn kein eigenes Verschulden trifft.
            </p>
            <p className="mt-3">
              Für den Verlust oder die Beschädigung von Kleidung, Sportgeräten, Wertgegenständen
              oder Fahrzeugen übernimmt der Betreiber keine Haftung, soweit keine gesetzliche Haftung besteht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              6. Haftung der Nutzer
            </h2>
            <p>
              Jeder Nutzer haftet für sämtliche von ihm vorsätzlich oder fahrlässig verursachten Schäden
              an Courts, Glasanlagen, Netzen, Beleuchtung, Zugangssystemen, Automaten, Möbeln und sonstiger
              Ausstattung. Beschädigungen sind unverzüglich zu melden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              7. Kinder und Jugendliche
            </h2>
            <p>
              Kinder unter 14 Jahren dürfen die Anlage nur unter Aufsicht eines Erziehungsberechtigten
              oder einer von diesem beauftragten volljährigen Person nutzen. Eltern oder
              Erziehungsberechtigte haften im Rahmen der gesetzlichen Vorschriften.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              8. Videoüberwachung
            </h2>
            <p>
              Zur Wahrung des Hausrechts, zur Verhinderung von Straftaten sowie zum Schutz von Personen
              und Eigentum können Eingangs-, Lounge- und sonstige Gemeinschaftsbereiche videoüberwacht werden.
              Eine etwaige Videoüberwachung erfolgt entsprechend den geltenden Datenschutzbestimmungen.
              Spielflächen und Umkleiden werden nur überwacht, soweit dies datenschutzrechtlich zulässig ist.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              9. Hausrecht
            </h2>
            <p>
              Den Anweisungen des Betreibers oder beauftragter Personen ist Folge zu leisten. Der Betreiber
              kann Personen bei Missbrauch, aggressivem Verhalten, Alkohol- oder Drogeneinfluss,
              Sachbeschädigungen oder erheblichen Verstößen gegen diese AGB ohne Anspruch auf Erstattung
              von der weiteren Nutzung ausschließen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              10. Verspätungen
            </h2>
            <p>
              Die gebuchte Spielzeit endet unabhängig vom tatsächlichen Spielbeginn zum gebuchten
              Endzeitpunkt. Ein Anspruch auf Verlängerung besteht nicht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              11. Stornierung
            </h2>
            <p>
              Es gelten die im Buchungssystem veröffentlichten Stornierungsbedingungen. Bei höherer
              Gewalt oder technischen Ausfällen kann der Betreiber Buchungen stornieren oder verschieben.
              Bereits gezahlte Entgelte werden in diesem Fall erstattet oder gutgeschrieben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              12. Datenschutz
            </h2>
            <p>
              Personenbezogene Daten werden ausschließlich nach den Bestimmungen der
              Datenschutz-Grundverordnung (DSGVO) verarbeitet. Einzelheiten ergeben sich aus der
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              13. Salvatorische Klausel
            </h2>
            <p>
              Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
              der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              14. Gerichtsstand
            </h2>
            <p>
              Soweit gesetzlich zulässig, gilt deutsches Recht. Ist der Kunde Kaufmann oder hat keinen
              allgemeinen Gerichtsstand in Deutschland, ist Gerichtsstand der Sitz des Betreibers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              15. Anerkennung
            </h2>
            <p className="mb-4">
              Mit Abschluss der Buchung bestätigt der Kunde ausdrücklich:
            </p>
            <blockquote
              className="border-l-4 pl-6 italic"
              style={{ borderColor: "var(--gold)", color: "var(--text)" }}
            >
              „Ich habe die Allgemeinen Geschäftsbedingungen sowie die Platz- und Sicherheitsregeln
              gelesen und akzeptiere diese. Die Nutzung der Anlage erfolgt unter Beachtung sämtlicher
              Sicherheitsvorschriften."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
}
