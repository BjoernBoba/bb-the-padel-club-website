import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Galerie | BB The Padel Club",
};

export const dynamic = "force-dynamic";

async function getGalleryItems() {
  return client.fetch(
    `*[_type == "galleryItem"] | order(order asc) {
      _id,
      mediaType,
      image,
      "videoUrl": video.asset->url,
      caption
    }`,
    {},
    { cache: "no-store" }
  );
}

export default async function GaleriePage() {
  const raw = await getGalleryItems();

  console.log("[galerie] raw count:", raw.length, JSON.stringify(raw.slice(0, 1)));

  const items = raw.map((item: {
    _id: string;
    mediaType: "photo" | "video";
    image?: object;
    videoUrl?: string;
    caption?: string;
  }) => ({
    _id: item._id,
    mediaType: item.mediaType,
    imageUrl: item.image ? urlFor(item.image).width(1200).quality(85).url() : undefined,
    videoUrl: item.videoUrl,
    caption: item.caption,
  }));

  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            — Bilder & Videos —
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Galerie
          </h1>
        </div>

        {items.length === 0 ? (
          <p className="text-center py-20" style={{ color: "var(--text-muted)" }}>
            Noch keine Inhalte vorhanden.
          </p>
        ) : (
          <GalleryClient items={items} />
        )}
      </div>
    </div>
  );
}
