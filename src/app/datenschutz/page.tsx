export const metadata = {
  title: "Datenschutz | BB The Padel Club",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-none mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span style={{ color: "var(--gold)" }}>●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DatenschutzPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-24">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
          THE PADEL CLUB
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Datenschutzhinweise
        </h1>
        <p className="text-base mb-2" style={{ color: "var(--text-muted)" }}>
          für Online-Buchungen und den Besuch des Clubs
        </p>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          BB Court Sports GmbH · Clubstandort: Schachenstraße 112–114, 66954 Pirmasens
        </p>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          Information nach Art. 13 Datenschutz-Grundverordnung (DSGVO)
        </p>
        <div className="w-16 h-px mb-4" style={{ background: "var(--gold)" }} />
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Stand: 29. Oktober 2026 · Version 1.0
        </p>

        <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
          Diese Hinweise informieren darüber, wie personenbezogene Daten bei Online-Buchungen und
          beim Besuch von THE PADEL CLUB verarbeitet werden.
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <Section title="1. Verantwortlicher">
            <p>
              BB Court Sports GmbH<br />
              Terrassenweg 10<br />
              66953 Pirmasens<br />
              Geschäftsführer: Ben Berger<br />
              E-Mail: bb@bbthepadelclub.de
            </p>
            <p className="mt-3">
              Betriebsstätte von THE PADEL CLUB:<br />
              Schachenstraße 112–114, 66954 Pirmasens
            </p>
          </Section>

          <Section title="2. Datenerhebung beim Website-Besuch">
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch technische
              Verbindungsdaten in sogenannten Server-Log-Dateien erfasst. Dazu gehören insbesondere
              IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie
              verwendeter Browser und Betriebssystem. Diese Daten sind nicht einer bestimmten Person
              direkt zuordenbar und dienen ausschließlich dem technisch sicheren Betrieb der Website.
              Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO.
            </p>
          </Section>

          <Section title="3. Verarbeitung bei der Online-Buchung">
            <h3 className="font-semibold mt-4 mb-2" style={{ color: "var(--text)" }}>3.1 Verarbeitete Daten</h3>
            <p>Im Rahmen einer Online-Buchung können insbesondere folgende Daten verarbeitet werden:</p>
            <BulletList items={[
              "Vor- und Nachname sowie gegebenenfalls Rechnungsanschrift",
              "E-Mail-Adresse und Telefonnummer",
              "Benutzerkonto- und Anmeldedaten",
              "Buchungsdaten, insbesondere Standort, Platz, Datum, Uhrzeit und gebuchte Leistungen",
              "Namen oder Kennzeichnungen mitspielender Personen, soweit diese angegeben werden",
              "Zahlungs-, Transaktions- und Rechnungsdaten",
              "freiwillige Nachrichten und Anmerkungen",
              "technische Protokolldaten, insbesondere IP-Adresse, Zeitpunkt und Browserinformationen",
            ]} />
            <p className="mt-3">
              Pflichtangaben sind im Buchungsformular gekennzeichnet. Ohne die erforderlichen Angaben
              kann die gewünschte Buchung nicht durchgeführt werden.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>3.2 Zwecke und Rechtsgrundlagen</h3>
            <p>
              Wir verarbeiten die Daten zur Anbahnung, Durchführung und Abrechnung der Buchung sowie
              zur Bereitstellung der gebuchten Leistungen. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO.
            </p>
            <p className="mt-3">
              Soweit Rechnungs- und Buchungsdaten aufgrund handels- oder steuerrechtlicher Vorschriften
              aufzubewahren sind, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchst. c DSGVO.
            </p>
            <p className="mt-3">
              Technische Protokoll- und Sicherheitsdaten werden zum sicheren Betrieb des Buchungssystems,
              zur Verhinderung von Missbrauch und zur Aufklärung technischer Störungen verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO. Das berechtigte Interesse liegt im
              sicheren, zuverlässigen und missbrauchsfreien Betrieb des Angebots.
            </p>
            <p className="mt-3">
              Werbung per E-Mail oder Newsletter erfolgt nur aufgrund einer gesonderten Einwilligung
              oder im gesetzlich zulässigen Rahmen gegenüber Bestandskunden. Eine Einwilligung in
              Werbung ist freiwillig und nicht Voraussetzung für eine Buchung.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>3.3 Angaben über Mitspieler</h3>
            <p>
              Wenn die buchende Person Namen oder Kontaktdaten von Mitspielern angibt, muss sie
              berechtigt sein, uns diese Daten zu übermitteln, und die betreffenden Personen über
              diese Datenschutzhinweise informieren.
            </p>
          </Section>

          <Section title="4. Zahlungsabwicklung">
            <p>
              Zur Zahlungsabwicklung werden die bei der Buchung ausgewiesenen Zahlungsdienstleister
              eingesetzt. Je nach gewählter Zahlungsart werden die erforderlichen Daten unmittelbar
              an den jeweiligen Zahlungsdienstleister übermittelt. Dieser kann für bestimmte
              Verarbeitungsvorgänge selbst datenschutzrechtlich verantwortlich sein.
            </p>
            <p className="mt-3">
              THE PADEL CLUB erhält grundsätzlich nur die zur Zuordnung und Bestätigung der Zahlung
              erforderlichen Informationen. Vollständige Kreditkartendaten werden nicht durch
              THE PADEL CLUB gespeichert, soweit die Verarbeitung technisch unmittelbar über den
              Zahlungsdienstleister erfolgt.
            </p>
          </Section>

          <Section title="5. Buchungs-, Hosting- und IT-Dienstleister">
            <p>
              Für den Betrieb des Buchungssystems und der technischen Infrastruktur können
              spezialisierte Buchungs-, Hosting-, E-Mail-, Zahlungs- und IT-Dienstleister eingesetzt
              werden. Soweit diese Unternehmen Daten ausschließlich im Auftrag der BB Court Sports
              GmbH verarbeiten, bestehen Vereinbarungen zur Auftragsverarbeitung nach Art. 28 DSGVO.
            </p>
            <p className="mt-3">
              Weitere Empfänger können Steuerberater, Banken, Versicherungen, Rechtsberater und
              Behörden sein, soweit die Übermittlung zur Vertragsabwicklung, zur Erfüllung gesetzlicher
              Pflichten oder zur Geltendmachung beziehungsweise Abwehr von Rechtsansprüchen
              erforderlich ist.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>5.1 Hosting (Vercel)</h3>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street Suite 701, San Francisco,
              CA 94104, USA gehostet. Vercel verarbeitet Verbindungsdaten auf Servern innerhalb der
              EU und der USA. Eine Datenverarbeitungsvereinbarung nach Art. 28 DSGVO ist abgeschlossen.
              Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)" }}
                className="hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>5.2 Google Maps</h3>
            <p>
              Auf der Anfahrtsseite wird Google Maps eingesetzt (Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland; Google LLC, 1600 Amphitheatre Parkway, Mountain View,
              CA 94043, USA). Beim Laden der Karte wird die IP-Adresse des Nutzers an Google
              übermittelt. Die Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 Buchst. f DSGVO;
              das berechtigte Interesse besteht in der benutzerfreundlichen Darstellung des
              Clubstandorts. Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)" }}
                className="hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section title="6. Übermittlungen in Drittländer">
            <p>
              Eine Verarbeitung außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums
              findet nur statt, wenn die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind. Hierzu
              können insbesondere ein Angemessenheitsbeschluss der Europäischen Kommission oder
              geeignete Garantien wie EU-Standardvertragsklauseln gehören.
            </p>
          </Section>

          <Section title="7. Speicherdauer der Buchungsdaten">
            <p>
              Buchungs- und Vertragsdaten werden zunächst für die Durchführung der Buchung gespeichert.
              Anschließend werden sie gelöscht, sobald sie hierfür nicht mehr erforderlich sind und
              keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere
              Speicherung bestehen.
            </p>
            <p className="mt-3">
              Rechnungs-, Buchungs- und Zahlungsunterlagen werden entsprechend den handels- und
              steuerrechtlichen Aufbewahrungsfristen gespeichert. Technische Protokolldaten werden
              nur so lange gespeichert, wie sie für den jeweiligen Sicherheits- oder Betriebszweck
              erforderlich sind.
            </p>
          </Section>

          <Section title="8. Videoüberwachung im und am Clubgebäude">
            <p className="italic mb-4" style={{ color: "var(--text)" }}>
              Wichtige Einordnung: Die Kenntnisnahme dieser Hinweise ist keine Einwilligung in die
              Videoüberwachung. Die Zulässigkeit jeder Kamera wird separat anhand ihres Zwecks,
              ihrer Erforderlichkeit und einer dokumentierten Interessenabwägung beurteilt.
            </p>

            <h3 className="font-semibold mt-4 mb-2" style={{ color: "var(--text)" }}>8.1 Überwachte Bereiche</h3>
            <p>
              In entsprechend gekennzeichneten Bereichen innerhalb des Clubs und auf den zum Gebäude
              gehörenden Außenflächen werden Videokameras eingesetzt. Hierzu können insbesondere
              Zutritts-, Eingangs-, Ausgangs-, Lager-, Technik-, Kassen- und eigene Parkplatzbereiche
              gehören, soweit deren Überwachung im Einzelfall erforderlich und zulässig ist.
            </p>
            <p className="mt-3">
              Die Kameras zeichnen in den jeweils ausgewiesenen Bereichen durchgehend oder zu den auf
              dem örtlichen Hinweisschild genannten Zeiten Bilddaten auf. Der konkrete Erfassungsbereich
              ist auf das für den jeweiligen Sicherheitszweck erforderliche Maß begrenzt.
            </p>
            <p className="mt-3">
              Sanitäranlagen, Duschen und Umkleidekabinen werden nicht überwacht. Aufenthalts- und
              Gastronomiebereiche, dauerhafte Arbeitsplätze, öffentliche Gehwege, Straßen und
              benachbarte Grundstücke werden nicht erfasst oder technisch ausgeblendet. Eine
              Tonaufzeichnung findet nicht statt. Gesichtserkennung, biometrische Identifizierung,
              Verhaltensanalyse und automatisierte Profilbildung werden nicht eingesetzt.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>8.2 Zwecke der Videoüberwachung</h3>
            <p>Die Videoüberwachung erfolgt — abhängig vom jeweils überwachten Bereich — zu folgenden Zwecken:</p>
            <BulletList items={[
              "Schutz des Gebäudes und des Eigentums vor konkret festgestellten Einbrüchen, Diebstählen und Sachbeschädigungen",
              "Aufklärung und Beweissicherung bei konkreten sicherheitsrelevanten Vorfällen",
              "Durchsetzung des Hausrechts",
              "Schutz besonders gefährdeter Zutritts-, Kassen-, Lager- oder Technikbereiche",
            ]} />
            <p className="mt-3">
              Eine Verwendung der Aufnahmen zur allgemeinen Verhaltens- oder Leistungskontrolle von
              Beschäftigten, Mitgliedern, Spielern oder Gästen findet nicht statt.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>8.3 Rechtsgrundlage und berechtigte Interessen</h3>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO. Die berechtigten Interessen bestehen
              im Schutz von Personen, Gebäude, Betriebsmitteln und Eigentum, in der Aufklärung
              dokumentierter Vorfälle sowie in der Durchsetzung des Hausrechts.
            </p>
            <p className="mt-3">
              Für jeden Kamerabereich wird geprüft und dokumentiert, ob eine konkrete Gefährdungslage
              besteht, die Kamera zur Erreichung des Zwecks geeignet und erforderlich ist und keine
              gleich wirksamen, weniger eingriffsintensiven Maßnahmen zur Verfügung stehen. Die
              Interessen und Rechte der betroffenen Personen werden in die Abwägung einbezogen.
            </p>
            <p className="mt-3">
              Das Betreten eines gekennzeichneten Kamerabereichs und die Bestätigung dieser
              Datenschutzhinweise stellen keine datenschutzrechtliche Einwilligung in die
              Videoüberwachung dar.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>8.4 Aufzeichnungsdauer und Löschung</h3>
            <p>
              Die Aufnahmen werden grundsätzlich spätestens nach 72 Stunden automatisch gelöscht
              oder überschrieben. Wird innerhalb dieser Frist ein konkreter Vorfall festgestellt,
              dürfen ausschließlich die dafür relevanten Sequenzen gesichert und so lange gespeichert
              werden, wie dies zur Aufklärung, Beweissicherung, Rechtsverfolgung oder Abwehr von
              Ansprüchen erforderlich ist. Danach werden auch diese Aufnahmen gelöscht.
            </p>
            <p className="mt-3">
              Eine längere allgemeine Speicherfrist findet nur statt, wenn sie für einen bestimmten
              Kamerabereich und einen konkreten Zweck gesondert erforderlich, verhältnismäßig und
              dokumentiert ist.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>8.5 Zugriff und Empfänger</h3>
            <p>
              Zugriff auf die Aufnahmen haben ausschließlich ausdrücklich berechtigte Personen der
              BB Court Sports GmbH sowie gegebenenfalls vertraglich gebundene Sicherheits- oder
              IT-Dienstleister. Eine Sichtung erfolgt grundsätzlich nur bei einem konkreten Anlass.
            </p>
            <p className="mt-3">
              Im Ereignisfall können relevante Aufnahmen insbesondere an Polizei, Staatsanwaltschaften,
              Gerichte, Versicherungen und Rechtsberater übermittelt werden, soweit dies rechtlich
              zulässig und für die Aufklärung oder Rechtsverfolgung erforderlich ist.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>8.6 Hinweise vor Ort</h3>
            <p>
              Vor dem Betreten eines überwachten Bereichs wird durch gut sichtbare Hinweisschilder
              über die Videoüberwachung informiert. Dort werden mindestens der Verantwortliche, die
              Zwecke, die Rechtsgrundlage, das berechtigte Interesse, die Speicherdauer und eine
              Zugangsmöglichkeit zu den vollständigen Datenschutzhinweisen genannt.
            </p>
          </Section>

          <Section title="9. Cookies und vergleichbare Technologien">
            <p>
              Technisch erforderliche Cookies und Speichertechnologien werden eingesetzt, soweit sie
              für den Betrieb und die Sicherheit des Buchungssystems erforderlich sind. Nicht
              erforderliche Analyse-, Marketing- oder Drittanbieter-Technologien werden nur nach
              einer gesonderten, freiwilligen Einwilligung über die Cookie-Einstellungen der Webseite
              eingesetzt.
            </p>
          </Section>

          <Section title="10. Rechte betroffener Personen">
            <p>Betroffene Personen haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf:</p>
            <BulletList items={[
              "Auskunft nach Art. 15 DSGVO",
              "Berichtigung nach Art. 16 DSGVO",
              "Löschung nach Art. 17 DSGVO",
              "Einschränkung der Verarbeitung nach Art. 18 DSGVO",
              "Datenübertragbarkeit nach Art. 20 DSGVO",
              "Widerspruch nach Art. 21 DSGVO",
              "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft",
            ]} />
            <p className="mt-3">
              Soweit eine Verarbeitung auf Art. 6 Abs. 1 Buchst. f DSGVO beruht, kann aus Gründen,
              die sich aus der besonderen persönlichen Situation ergeben, Widerspruch eingelegt werden.
              Wir verarbeiten die betreffenden Daten anschließend nicht mehr, sofern keine zwingenden
              schutzwürdigen Gründe oder Gründe zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen nachgewiesen werden können.
            </p>
            <p className="mt-3">
              Anfragen können an{" "}
              <a href="mailto:bb@bbthepadelclub.de" style={{ color: "var(--gold)" }} className="hover:underline">
                bb@bbthepadelclub.de
              </a>{" "}
              gerichtet werden.
            </p>
          </Section>

          <Section title="11. Beschwerderecht">
            <p>
              Betroffene Personen können sich bei einer Datenschutzaufsichtsbehörde beschweren.
              Für die BB Court Sports GmbH ist grundsätzlich zuständig:
            </p>
            <p className="mt-3">
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
              Postfach 30 40, 55020 Mainz<br />
              Besucheranschrift: Hintere Bleiche 34, 55116 Mainz<br />
              Telefon: +49 6131 8920-0<br />
              E-Mail:{" "}
              <a href="mailto:poststelle@datenschutz.rlp.de" style={{ color: "var(--gold)" }} className="hover:underline">
                poststelle@datenschutz.rlp.de
              </a><br />
              Web:{" "}
              <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }} className="hover:underline">
                www.datenschutz.rlp.de
              </a>
            </p>
          </Section>

          <Section title="12. Änderung dieser Datenschutzhinweise">
            <p>
              Diese Datenschutzhinweise können angepasst werden, wenn sich eingesetzte Verfahren,
              Dienstleister oder gesetzliche Anforderungen ändern. Für die jeweilige Buchung wird
              die zum Buchungszeitpunkt bereitgestellte Version dokumentiert.
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
}
