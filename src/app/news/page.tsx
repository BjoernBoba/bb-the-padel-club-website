import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { newsListQuery } from "@/lib/queries";
import { NewsPreviewItem } from "@/components/home/NewsPreview";
import NewsCard from "@/components/news/NewsCard";

function NewsGrid({ news }: { news: NewsPreviewItem[] }) {
  return (
    <>
      {news.length === 0 ? (
        <div className="py-32 text-center">
          <p className="text-xl mb-4" style={{ color: "var(--text-muted)" }}>
            Noch keine News vorhanden.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

const DEMO_NEWS: NewsPreviewItem[] = [
  {
    _id: "demo-0",
    title: "Neueröffnung am 12. Dezember 2026 — Seid dabei!",
    slug: { current: "neuroeffnung-dezember-2026" },
    publishedAt: "2026-11-12T10:00:00Z",
    category: "Events",
    excerpt:
      "Es ist so weit: Am 12. Dezember 2026 öffnet BB The Padel Club offiziell seine Türen. Feiert mit uns den Start — mit Live-Musik, Snacks, Getränken und natürlich jeder Menge Padel. Der Eintritt ist frei!",
    image: { asset: { url: "/images/hero.webp" } },
  },
  {
    _id: "demo-1",
    title: "Erstes Club-Turnier: Anmeldung ab sofort offen",
    slug: { current: "erstes-club-turnier" },
    publishedAt: "2026-02-01T10:00:00Z",
    category: "Turniere",
    excerpt:
      "Am 15. März 2026 findet das erste offizielle Clubturnier statt. Alle Mitglieder sind herzlich eingeladen — Paare und Mixed-Teams willkommen. Begrenzte Plätze, jetzt anmelden!",
    image: { asset: { url: "/images/better-players.webp" } },
  },
  {
    _id: "demo-2",
    title: "Neue Öffnungszeiten & erweitertes Kursangebot ab März",
    slug: { current: "neue-oeffnungszeiten-maerz" },
    publishedAt: "2026-01-20T09:00:00Z",
    category: "News",
    excerpt:
      "Ab März 2026 sind wir täglich von 07:00 bis 23:00 Uhr für euch da. Zusätzlich starten wir mit wöchentlichen Anfänger- und Fortgeschrittenenkursen — jetzt vormerken lassen!",
    image: { asset: { url: "/images/vertical.webp" } },
  },
];

async function NewsListAsync() {
  let news: NewsPreviewItem[] = [];
  try {
    news = await client.fetch(newsListQuery);
  } catch {
    // Sanity noch nicht konfiguriert
  }
  // Demo-Daten anzeigen solange Sanity noch keine echten Artikel liefert
  if (news.length === 0) news = DEMO_NEWS;
  return <NewsGrid news={news} />;
}

export default function NewsPage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — BB The Padel Club —
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            News & Events
          </h1>
        </div>

        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="mb-4 rounded" style={{ background: "var(--surface)", aspectRatio: "16/9" }} />
                <div className="h-3 w-16 rounded mb-3" style={{ background: "var(--surface)" }} />
                <div className="h-5 w-full rounded mb-2" style={{ background: "var(--surface)" }} />
                <div className="h-5 w-3/4 rounded" style={{ background: "var(--surface)" }} />
              </div>
            ))}
          </div>
        }>
          <NewsListAsync />
        </Suspense>
      </div>
    </div>
  );
}
