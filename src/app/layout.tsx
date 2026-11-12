import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BB The Padel Club",
  description: "Premium Padel Courts. Community. Leidenschaft. Erlebe das Spiel auf höchstem Niveau.",
  openGraph: {
    title: "BB The Padel Club",
    description: "Premium Padel Courts. Community. Leidenschaft.",
    type: "website",
    images: [{ url: "/images/hero.webp", width: 2560, height: 2560 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "var(--black)", color: "var(--text)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
