import type { Metadata } from "next";
import Link from "next/link";
import RuleAnimation, { type AnimationDemo } from "@/components/regeln/RuleAnimation";

export const metadata: Metadata = {
  title: "Padelregeln | BB The Padel Club",
  description:
    "Die Regeln des Padelspiels einfach erklärt – Court, Aufschlag, Zählweise, Glas und Gitter.",
};

const SERVE_DEMOS: AnimationDemo[] = [
  {
    area: "serve",
    title: "Gültig · diagonal ins Feld",
    path: [
      [94, 153],
      [278, 76],
      [364, 40],
    ],
    labels: ["Aufschlag", "Boden im diagonalen Feld", "Glas · gültig"],
  },
  {
    area: "serve",
    title: "Fehler · Aufschlag ans Gitter",
    path: [
      [94, 153],
      [263, 64],
      [285, 40],
    ],
    labels: ["Aufschlag", "Boden im diagonalen Feld", "Gitter · Aufschlagfehler"],
  },
];

const RALLY_DEMOS: AnimationDemo[] = [
  {
    area: "rally",
    title: "Gültig · Rückschlag nach Glas",
    path: [
      [306, 111],
      [108, 92],
      [38, 78],
      [91, 65],
      [270, 133],
    ],
    labels: ["Gegnerischer Schlag", "Boden", "Glas", "Rückschlag", "Boden · gültig"],
  },
  {
    area: "rally",
    title: "Fehler · Glas direkt getroffen",
    path: [
      [100, 85],
      [382, 116],
    ],
    labels: ["Schlag", "Glas ohne Bodenkontakt · Fehler"],
  },
];

function RuleSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-6 p-6 md:p-8"
      style={{
        background: "var(--surface)",
        borderTop: "2px solid var(--gold)",
        scrollMarginTop: "80px",
      }}
    >
      <h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-playfair)", color: "var(--text)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const NAV_ITEMS = [
  { href: "#court", label: "Court" },
  { href: "#aufschlag", label: "Aufschlag" },
  { href: "#punkte", label: "Zählweise" },
  { href: "#glas", label: "Glas & Gitter" },
  { href: "#fragen", label: "FAQ" },
];

const FAQ_ITEMS = [
  {
    q: "Kann ich ohne Vorkenntnisse spielen?",
    a: "Ja. Spielt die ersten Bälle locker übers Netz und probiert aus, wie der Ball vom Glas zurückkommt. Padel ist leicht zu lernen – der Court ist kleiner als beim Tennis und die Glaswände helfen dabei, den Ball im Spiel zu halten.",
  },
  {
    q: "Was brauche ich an Ausrüstung?",
    a: "Einen Padel-Schläger, Padel-Bälle und saubere Hallenschuhe mit griffiger Sohle. Schläger kannst du bei uns vor Ort leihen, Bälle gibt es bei uns zu kaufen.",
  },
  {
    q: "Wie viele Personen brauchen wir?",
    a: "Für Doppel seid ihr zu viert. Bei BB The Padel Club könnt ihr auf unserem Single-Court auch zu zweit spielen.",
  },
  {
    q: "Wie läuft eine Buchung ab?",
    a: "Über unser Online-Buchungssystem kannst du direkt einen freien Court buchen.",
  },
];

export default function RegelnPage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — Spielregeln —
          </p>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text)" }}
          >
            Padelregeln
          </h1>
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Zu viert auf den Court, diagonal aufschlagen und die Glaswände mitspielen lassen. Mit
            diesen Grundregeln bist du bereit für deinen ersten Ballwechsel.
          </p>

          <nav className="flex flex-wrap gap-2 mt-6" aria-label="Abschnitte">
            {NAV_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 uppercase tracking-wider transition-colors duration-200 hover:text-[var(--text)]"
                style={{
                  border: "1px solid var(--gold-dark)",
                  background: "var(--surface)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Court */}
        <RuleSection id="court" title="Der Doppelcourt">
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
            Zwei Teams mit je zwei Personen teilen sich einen 20 × 10 Meter großen Court. Das Netz
            trennt die beiden Spielfeldhälften. Die Glaswände und Metallgitter gehören zum Spielfeld
            und können im Rahmen der Regeln aktiv ins Spiel einbezogen werden.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Gespielt wird auf Kunstrasen. Der Padel-Schläger hat eine feste, gelochte Schlagfläche
            und ist kompakter als ein Tennisschläger – ideal für das schnelle Spiel im begrenzten
            Raum.
          </p>
        </RuleSection>

        {/* Aufschlag */}
        <RuleSection id="aufschlag" title="Der Aufschlag">
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
            Jedes Aufschlagspiel beginnt von der rechten Seite hinter der Aufschlaglinie. Lass den
            Ball einmal aufspringen und triff ihn auf oder unterhalb der Hüfthöhe. Der Ball muss
            diagonal über das Netz ins gegenüberliegende Aufschlagfeld fliegen. Nach dem ersten
            Bodenkontakt darf er ans Glas – berührt er vor dem zweiten Aufsprung das Gitter, gilt
            es als Fehler.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            Pro Punkt hast du zwei Versuche. Eine Person serviert das gesamte Spiel und wechselt
            nach jedem Punkt die Seite (rechts ↔ links). Nach einem Spielgewinn übernimmt das
            andere Team den Aufschlag. Innerhalb eines Teams wechseln sich die zwei Spieler von
            Aufschlagspiel zu Aufschlagspiel ab.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVE_DEMOS.map((demo) => (
              <RuleAnimation key={demo.title} demo={demo} />
            ))}
          </div>
        </RuleSection>

        {/* Punkte */}
        <RuleSection id="punkte" title="Die Zählweise">
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
            Die Punkte zählen wie im Tennis: 15, 30, 40. Wer nach dem Stand 40:30 oder 40:0 den
            nächsten Punkt gewinnt, gewinnt das Spiel. Bei 40:40 (Einstand) braucht ein Team zwei
            Punkte in Folge. Alternativ kann beim Einstand der{" "}
            <span style={{ color: "var(--text)" }}>Golden Point</span> gespielt werden – dann
            entscheidet ein einziger Punkt direkt, ohne dass ein Vorteil ausgespielt wird.
          </p>
          <div
            className="grid grid-cols-3 gap-px mb-5 text-center text-sm"
            style={{ background: "var(--border)" }}
          >
            {[
              { label: "Spiel", desc: "15 · 30 · 40" },
              { label: "Satz", desc: "6 Spiele, 2 Vorsprung" },
              { label: "Match", desc: "Best of 3 Sätze" },
            ].map(({ label, desc }) => (
              <div key={label} className="p-4" style={{ background: "var(--surface-2)" }}>
                <p
                  className="font-semibold mb-1"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
                >
                  {label}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Für einen Satz braucht ihr sechs Spiele mit zwei Spielen Vorsprung. Bei 5:5 kann er
            7:5 enden. Bei 6:6 entscheidet ein Tie-Break. Wer zuerst zwei Sätze gewinnt, gewinnt
            das Match.
          </p>
        </RuleSection>

        {/* Glas */}
        <RuleSection id="glas" title="Glas und Gitter im Ballwechsel">
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
            Kommt der Ball auf eurer Seite einmal auf, dürft ihr ihn auch nach einem Abpraller vom
            Glas oder Gitter noch zurückspielen – solange er nicht ein zweites Mal den Boden
            berührt. Ihr könnt beim Rückschlag auch bewusst das eigene Glas nutzen.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            Auf der gegnerischen Seite muss euer Schlag zuerst den Boden treffen, bevor der Ball
            an Glas oder Gitter gehen darf.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RALLY_DEMOS.map((demo) => (
              <RuleAnimation key={demo.title} demo={demo} />
            ))}
          </div>
        </RuleSection>

        {/* Punktverlust */}
        <RuleSection id="fehler" title="Wann verliert ein Team den Punkt?">
          <ul className="text-sm space-y-3" style={{ color: "var(--text-muted)" }}>
            {[
              "Der Ball springt auf ihrer Seite zweimal auf, bevor er zurückgespielt wird.",
              "Ihr Schlag trifft gegnerisches Glas oder Gitter direkt ohne vorherigen Bodenkontakt.",
              "Der Ball fliegt direkt aus dem Court heraus (ohne gültigen Aufsprung).",
              "Der Ball berührt eine Person des Teams oder ihre Kleidung bzw. Ausrüstung.",
              "Nach zwei ungültigen Aufschlägen in Folge geht der Punkt an das andere Team.",
            ].map((text) => (
              <li key={text} className="flex gap-3">
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                {text}
              </li>
            ))}
          </ul>
        </RuleSection>

        {/* FAQ */}
        <RuleSection id="fragen" title="Vor dem ersten Spiel">
          <div>
            {FAQ_ITEMS.map(({ q, a }) => (
              <details
                key={q}
                className="faq-item py-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <summary
                  className="cursor-pointer text-sm font-medium"
                  style={{ color: "var(--gold-light)" }}
                >
                  {q}
                </summary>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </RuleSection>

        {/* CTA */}
        <div
          className="text-center py-10 px-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            — Bereit zum Spielen? —
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text)" }}
          >
            Ab auf den Court
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Theorie ist gut – Praxis ist besser. Buche jetzt einen Court und legt los.
          </p>
          <Link
            href="/buchen"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 hover:bg-[var(--gold-light)]"
            style={{ background: "var(--gold)", color: "var(--black)", borderRadius: "2px" }}
          >
            Jetzt Buchen
          </Link>
        </div>
      </div>
    </div>
  );
}
