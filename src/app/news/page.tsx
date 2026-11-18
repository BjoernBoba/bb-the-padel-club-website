import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { newsListQuery } from "@/lib/queries";
import { NewsPreviewItem } from "@/components/home/NewsPreview";
import NewsCard from "@/components/news/NewsCard";

export const dynamic = "force-dynamic";

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

async function NewsListAsync() {
  let news: NewsPreviewItem[] = [];
  try {
    news = await client.fetch(newsListQuery);
  } catch {
    // Sanity nicht erreichbar
  }
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
