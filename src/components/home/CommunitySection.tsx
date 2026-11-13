export default function CommunitySection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--black)", paddingTop: "6rem", paddingBottom: "9rem" }}
    >
      {/* Logo als Wasserzeichen im Hintergrund */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <img src="/images/logo.png" alt="" width={320} height={320} className="object-contain" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
          style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
        >
          Better Players.<br />Better People.<br />Better Everyday.
        </h2>
        <p
          className="text-lg tracking-[0.25em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          Respect. Passion. Community.
        </p>
      </div>
    </section>
  );
}
