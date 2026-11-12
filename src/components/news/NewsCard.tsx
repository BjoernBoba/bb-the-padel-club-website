import Link from "next/link";
import Image from "next/image";
import { NewsPreviewItem } from "@/components/home/NewsPreview";

export default function NewsCard({ item }: { item: NewsPreviewItem }) {
  return (
    <Link href={`/news/${item.slug.current}`} className="group block">
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
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)" }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              BB The Padel Club
            </span>
          </div>
        )}
      </div>
      <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
        {item.category}
      </span>
      <h3
        className="mt-2 text-lg font-semibold group-hover:text-[var(--gold-light)] transition-colors"
        style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
      >
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="mt-2 text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
          {item.excerpt}
        </p>
      )}
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
        {new Date(item.publishedAt).toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
      <span
        className="mt-3 inline-block text-xs tracking-wide uppercase transition-colors group-hover:text-[var(--gold-light)]"
        style={{ color: "var(--gold)" }}
      >
        Weiterlesen →
      </span>
    </Link>
  );
}
