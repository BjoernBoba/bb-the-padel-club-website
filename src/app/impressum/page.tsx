export const metadata = {
  title: "Impressum | BB The Padel Club",
};

export default function ImpressumPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Impressum
        </h1>
        <div className="w-16 h-px mb-12" style={{ background: "var(--gold)" }} />

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              BB Court Sports GmbH<br />
              Terrassenweg 10<br />
              66953 Pirmasens<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Vertreten durch
            </h2>
            <p>Ben Berger</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Kontakt
            </h2>
            <p>
              Telefon: 0156 3016 9060<br />
              E-Mail: info@bbthepadelclub.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Handelsregister
            </h2>
            <p>
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Max Mustermann<br />
              Musterstraße 1<br />
              12345 Musterstadt
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
