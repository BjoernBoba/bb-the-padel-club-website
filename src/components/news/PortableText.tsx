import { PortableText as SanityPortableText, PortableTextBlock } from "@portabletext/react";
import Image from "next/image";

const components = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}>
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2" style={{ color: "var(--gold-light)", fontFamily: "var(--font-playfair)" }}>
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold mt-3 mb-2" style={{ color: "var(--gold-light)" }}>
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed" style={{ color: "var(--text)" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote
        className="border-l-4 pl-6 my-6 italic"
        style={{ borderColor: "var(--gold)", color: "var(--text-muted)" }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline transition-colors hover:text-[var(--gold-light)]"
        style={{ color: "var(--gold)" }}
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ color: "var(--text)" }}>{children}</strong>
    ),
  },
  types: {
    image: ({ value }: { value?: { asset?: { url: string }; alt?: string } }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-8">
          <Image
            src={value.asset.url}
            alt={value.alt ?? ""}
            width={900}
            height={500}
            className="w-full object-cover"
          />
        </div>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <SanityPortableText value={value} components={components} />;
}
