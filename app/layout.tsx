import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const PORTRAIT_URL =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1787825099/WhatsApp_Image_2026-08-27_at_11.24.00_h3ckml.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://favour-portfolio.vercel.app"),
  title: {
    default: "Favour Baraka",
    template: "%s — Favour Baraka",
  },
  description: "Software engineer and founder, building digital platforms with care and precision.",
  openGraph: {
    title: "Favour Baraka",
    description: "Software engineer and founder, building digital platforms with care and precision.",
    images: [{ url: PORTRAIT_URL }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Baraka",
    description: "Software engineer and founder, building digital platforms with care and precision.",
    images: [PORTRAIT_URL],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1928",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ScrollProgress />
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0a1928]/70 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              Favour Baraka
            </Link>
            <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
              <Link href="/" className="nav-link hover:text-white">Home</Link>
              <Link href="/about" className="nav-link hover:text-white">About</Link>
              <Link href="/work" className="nav-link hover:text-white">Work</Link>
              <Link href="/contact" className="nav-link hover:text-white">Contact</Link>
            </nav>
            <MobileNav />
          </div>
        </header>

        <main className="pt-20 min-h-screen relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>

        <footer className="border-t border-white/5 py-12 text-sm text-gray-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} Favour Baraka.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

