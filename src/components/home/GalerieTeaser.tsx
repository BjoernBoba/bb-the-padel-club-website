import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";

export default function GalerieTeaser() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2
            className="text-3xl"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Galerie
          </h2>
          <Link
            href="/galerie"
            className="text-sm tracking-wide uppercase"
            style={{ color: "var(--gold)" }}
          >
            Zur Galerie →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 3).map((img) => (
            <Link key={img.src} href="/galerie" className="overflow-hidden block group" style={{ aspectRatio: "3/4" }}>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
