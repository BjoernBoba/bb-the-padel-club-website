import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-32 px-6">
      <Image
        src="/images/better-players.webp"
        alt="Better Players. Better People. Better Everyday."
        fill
        className="object-cover object-center"
        quality={85}
      />
      <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.65)" }} />

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
