"use client";

import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export type GalleryItem = {
  _id: string;
  mediaType: "photo" | "video";
  imageUrl?: string;
  videoUrl?: string;
  caption?: string;
};

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  const photos = items.filter((i) => i.mediaType === "photo" && i.imageUrl);
  const videos = items.filter((i) => i.mediaType === "video" && i.videoUrl);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = photos.map((p) => ({ src: p.imageUrl! }));

  return (
    <>
      {/* Fotos */}
      {photos.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mb-16">
          {photos.map((item, i) => (
            <div
              key={item._id}
              className="mb-4 overflow-hidden cursor-pointer group break-inside-avoid relative"
              onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
            >
              {!loaded[item._id] && (
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{ background: "var(--surface)", aspectRatio: "4/3" }}
                />
              )}
              <Image
                src={item.imageUrl!}
                alt={item.caption || `Galerie Bild ${i + 1}`}
                width={800}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={() => setLoaded((prev) => ({ ...prev, [item._id]: true }))}
              />
            </div>
          ))}
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />

      {/* Videos */}
      {videos.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((item) => (
              <div key={item._id} className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: "var(--surface)", border: "1px solid var(--border)" }}>
                {activeVideo === item._id ? (
                  <video
                    ref={videoRef}
                    src={item.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <button
                    className="w-full h-full flex flex-col items-center justify-center gap-4 group"
                    onClick={() => setActiveVideo(item._id)}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--gold)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="var(--black)" className="w-8 h-8 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {item.caption && (
                      <p className="text-sm text-center px-4" style={{ color: "var(--text-muted)" }}>
                        {item.caption}
                      </p>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
