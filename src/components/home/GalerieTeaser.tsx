import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getHomepageImages() {
  return client.fetch(
    `*[_type == "galleryItem" && mediaType == "photo" && showOnHomepage == true] | order(order asc) {
      _id,
      image,
      caption
    }`
  );
}

export default async function GalerieTeaser() {
  const raw = await getHomepageImages();

  const images = raw
    .filter((item: { image?: object }) => item.image)
    .slice(0, 3)
    .map((item: { _id: string; image: object; caption?: string }) => ({
      _id: item._id,
      src: urlFor(item.image).width(600).height(800).quality(85).url(),
      alt: item.caption || "Galerie Bild",
    }));

  if (images.length === 0) return null;

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
          {images.map((img: { _id: string; src: string; alt: string }) => (
            <Link key={img._id} href="/galerie" className="overflow-hidden block group" style={{ aspectRatio: "3/4" }}>
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
