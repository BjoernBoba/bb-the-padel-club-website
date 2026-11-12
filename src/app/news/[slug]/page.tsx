import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { newsBySlugQuery } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortableTextRenderer from "@/components/news/PortableText";

type NewsArticle = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  excerpt?: string;
  image?: { asset: { url: string } };
  body?: unknown[];
};

async function ArticleContent({ slug }: { slug: string }) {
  let article: NewsArticle | null = null;
  try {
    article = await client.fetch(newsBySlugQuery, { slug });
  } catch {
    // Sanity nicht erreichbar
  }

  if (!article) notFound();

  return (
    <>
      {article.image?.asset?.url && (
        <div className="relative w-full" style={{ height: "50vh" }}>
          <Image
            src={article.image.asset.url}
            alt={article.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--black) 100%)" }} />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/news"
          className="text-sm tracking-wide uppercase mb-8 inline-block"
          style={{ color: "var(--gold)" }}
        >
          ← Zurück zur Übersicht
        </Link>

        <span className="text-xs tracking-widest uppercase block mb-3" style={{ color: "var(--gold)" }}>
          {article.category}
        </span>
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
        >
          {article.title}
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          {new Date(article.publishedAt).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        {article.excerpt && (
          <p
            className="text-xl leading-relaxed mb-8 pb-8"
            style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}
          >
            {article.excerpt}
          </p>
        )}

        {article.body && article.body.length > 0 && (
          <div className="prose-padel">
            <PortableTextRenderer value={article.body} />
          </div>
        )}
      </div>
    </>
  );
}

function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div style={{ height: "50vh", background: "var(--surface)" }} />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="h-3 w-24 rounded mb-8" style={{ background: "var(--surface)" }} />
        <div className="h-3 w-16 rounded mb-4" style={{ background: "var(--surface)" }} />
        <div className="h-10 w-3/4 rounded mb-3" style={{ background: "var(--surface)" }} />
        <div className="h-10 w-1/2 rounded mb-8" style={{ background: "var(--surface)" }} />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 rounded" style={{ background: "var(--surface)", width: i === 4 ? "60%" : "100%" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen" style={{ background: "var(--black)" }}>
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent slug={slug} />
      </Suspense>
    </div>
  );
}
