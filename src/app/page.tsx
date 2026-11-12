import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CommunitySection from "@/components/home/CommunitySection";
import NewsPreview, { NewsPreviewItem } from "@/components/home/NewsPreview";
import GalerieTeaser from "@/components/home/GalerieTeaser";
import BookingCTA from "@/components/home/BookingCTA";
import { client } from "@/sanity/lib/client";
import { newsPreviewQuery } from "@/lib/queries";

const DEMO_NEWS: NewsPreviewItem[] = [
  {
    _id: "demo-0",
    title: "Neueröffnung am 12. Dezember 2026 — Seid dabei!",
    slug: { current: "neuroeffnung-dezember-2026" },
    publishedAt: "2026-11-12T10:00:00Z",
    category: "Events",
    excerpt: "Am 12. Dezember 2026 öffnet BB The Padel Club offiziell seine Türen. Eintritt frei!",
    image: { asset: { url: "/images/hero.webp" } },
  },
  {
    _id: "demo-1",
    title: "Erstes Club-Turnier: Anmeldung ab sofort offen",
    slug: { current: "erstes-club-turnier" },
    publishedAt: "2026-02-01T10:00:00Z",
    category: "Turniere",
    excerpt: "Am 15. März 2026 findet das erste offizielle Clubturnier statt.",
    image: { asset: { url: "/images/better-players.webp" } },
  },
  {
    _id: "demo-2",
    title: "Neue Öffnungszeiten & erweitertes Kursangebot ab März",
    slug: { current: "neue-oeffnungszeiten-maerz" },
    publishedAt: "2026-01-20T09:00:00Z",
    category: "News",
    excerpt: "Ab März täglich von 07:00 bis 23:00 Uhr — plus neue Anfänger- und Fortgeschrittenenkurse.",
    image: { asset: { url: "/images/vertical.webp" } },
  },
];

async function NewsSectionAsync() {
  let news: NewsPreviewItem[] = [];
  try {
    news = await client.fetch(newsPreviewQuery);
  } catch {
    // Sanity noch nicht konfiguriert oder nicht erreichbar
  }
  if (news.length === 0) news = DEMO_NEWS;
  return <NewsPreview news={news} />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CommunitySection />
      <Suspense fallback={
        <section className="py-20 px-6" style={{ background: "var(--black)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="h-8 w-32 rounded mb-12 animate-pulse" style={{ background: "var(--surface)" }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="mb-4" style={{ background: "var(--surface)", aspectRatio: "16/9" }} />
                  <div className="h-3 w-16 rounded mb-3" style={{ background: "var(--surface)" }} />
                  <div className="h-5 w-full rounded mb-2" style={{ background: "var(--surface)" }} />
                  <div className="h-5 w-3/4 rounded" style={{ background: "var(--surface)" }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      }>
        <NewsSectionAsync />
      </Suspense>
      <GalerieTeaser />
      <BookingCTA />
    </>
  );
}
