import Link from "next/link";
import Image from "next/image";

export type NewsPreviewItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  excerpt?: string;
  image?: { asset: { url: string } };
};

export default function NewsPreview({ news }: { news: NewsPreviewItem[] }) {
  return (
    <section className="py-20 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-3xl"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Aktuelles
          </h2>
          {news.length > 0 && (
            <Link
              href="/news"
              className="text-sm tracking-wide uppercase transition-colors duration-200"
              style={{ color: "var(--gold)" }}
            >
              Alle News →
            </Link>
          )}
        </div>

        {news.length === 0 ? (
          <p className="text-center py-16" style={{ color: "var(--text-muted)" }}>
            Bald gibt es hier aktuelle News aus dem BB The Padel Club.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Link key={item._id} href={`/news/${item.slug.current}`} className="group block">
                <div
                  className="overflow-hidden mb-4"
                  style={{ background: "var(--surface)", aspectRatio: "16/9" }}
                >
                  {item.image?.asset?.url ? (
                    <Image
                      src={item.image.asset.url}
                      alt={item.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)" }}
                    />
                  )}
                </div>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  {item.category}
                </span>
                <h3
                  className="mt-2 text-lg font-semibold group-hover:text-[var(--gold-light)] transition-colors"
                  style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  {new Date(item.publishedAt).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
