import TurnierProWidget from "@/components/TurnierProWidget";

export const metadata = {
  title: "Turniere | BB The Padel Club",
  description: "Turniere und Wettkämpfe im BB The Padel Club.",
};

export default function TurnierePage() {
  return (
    <div style={{ background: "var(--black)", color: "var(--text)", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — Events & Turniere —
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text)" }}
          >
            Turniere
          </h1>
        </div>

        <TurnierProWidget />
      </div>
    </div>
  );
}
