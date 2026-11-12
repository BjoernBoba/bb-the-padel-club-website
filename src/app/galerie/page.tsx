"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

const videos = [
  { id: "placeholder1", title: "Highlights Turnier 2024" },
  { id: "placeholder2", title: "Court-Einführung & Regelkunde" },
];

export default function GaleriePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const slides = galleryImages.map((img) => ({ src: img.src }));

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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mb-16">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="mb-4 overflow-hidden cursor-pointer group break-inside-avoid relative"
              onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
            >
              {!loaded[i] && (
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{ background: "var(--surface)", aspectRatio: "4/3" }}
                />
              )}
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
        />

        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--text)", fontFamily: "var(--font-playfair)" }}
          >
            Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-4 p-8"
                style={{ background: "var(--surface)", aspectRatio: "16/9", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--gold)", opacity: 0.7 }}
                >
                  <svg viewBox="0 0 24 24" fill="var(--black)" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>
                  {v.title}
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                  Video folgt demnächst
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
