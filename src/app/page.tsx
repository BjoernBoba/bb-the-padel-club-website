import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CommunitySection from "@/components/home/CommunitySection";
import NewsPreview, { NewsPreviewItem } from "@/components/home/NewsPreview";
import GalerieTeaser from "@/components/home/GalerieTeaser";
import BookingCTA from "@/components/home/BookingCTA";
import { client } from "@/sanity/lib/client";
import { newsPreviewQuery } from "@/lib/queries";

async function NewsSectionAsync() {
  let news: NewsPreviewItem[] = [];
  try {
    news = await client.fetch(newsPreviewQuery);
  } catch {
    // Sanity nicht erreichbar
  }
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
      <Suspense fallback={
        <section className="py-20 px-6" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="h-8 w-24 rounded mb-8 animate-pulse" style={{ background: "var(--border)" }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse" style={{ aspectRatio: "3/4", background: "var(--border)" }} />
              ))}
            </div>
          </div>
        </section>
      }>
        <GalerieTeaser />
      </Suspense>
      <BookingCTA />
    </>
  );
}
