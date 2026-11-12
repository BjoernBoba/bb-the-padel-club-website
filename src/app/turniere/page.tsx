
export const metadata = {
  title: "Turniere | BB The Padel Club",
  description: "Turniere und Wettkämpfe im BB The Padel Club.",
};

export default function TurnierePage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Wettbewerb
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text)" }}
          >
            Turniere
          </h1>
          <div className="w-20 h-px mx-auto mb-8" style={{ background: "var(--gold)" }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Der interaktive Turnierplan ist in Entwicklung. Hier werden bald alle
            kommenden Turniere, Brackets und Anmeldungen zu finden sein.
          </p>
        </div>

        {/* Platzhalter-Bracket */}
        <div
          className="rounded-lg p-8 mb-16"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2
            className="text-xl font-semibold mb-8 text-center"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--gold)" }}
          >
            Turnierplan — Folgt demnächst
          </h2>

          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4">
            {/* Runde 1 */}
            <div className="flex flex-col gap-6 shrink-0">
              {[["Team A", "Team B"], ["Team C", "Team D"], ["Team E", "Team F"], ["Team G", "Team H"]].map(
                ([t1, t2], i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {[t1, t2].map((team) => (
                      <div
                        key={team}
                        className="w-32 px-3 py-2 text-sm text-center rounded"
                        style={{
                          background: "var(--surface-2)",
                          border: "1px dashed var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {team}
                      </div>
                    ))}
                  </div>
                )
              )}
              <p className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>
                Runde 1
              </p>
            </div>

            <div className="flex flex-col gap-12 shrink-0">
              {[["Winner 1", "Winner 2"], ["Winner 3", "Winner 4"]].map(([t1, t2], i) => (
                <div key={i} className="flex flex-col gap-1">
                  {[t1, t2].map((team) => (
                    <div
                      key={team}
                      className="w-32 px-3 py-2 text-sm text-center rounded"
                      style={{
                        background: "var(--surface-2)",
                        border: "1px dashed var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {team}
                    </div>
                  ))}
                </div>
              ))}
              <p className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>
                Halbfinale
              </p>
            </div>

            <div className="flex flex-col gap-4 shrink-0">
              <div className="flex flex-col gap-1">
                {["Finalist 1", "Finalist 2"].map((team) => (
                  <div
                    key={team}
                    className="w-36 px-3 py-2 text-sm text-center rounded"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px dashed var(--gold-dark)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {team}
                  </div>
                ))}
              </div>
              <p className="text-xs text-center mt-2" style={{ color: "var(--gold)" }}>
                Finale
              </p>
            </div>
          </div>

          <p
            className="text-center text-sm mt-8 italic"
            style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
          >
            Echte Turnierdaten werden nach der Integration des Turniersystems angezeigt.
          </p>
        </div>

      </div>
    </div>
  );
}
