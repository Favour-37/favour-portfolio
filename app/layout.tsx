import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import RouteProgress from "@/components/RouteProgress";
import MobileNav from "@/components/MobileNav";
import "./globals.css";
import Lenis from "lenis";
import SmoothScroll from "@/components/SmoothScroll";
import IntroSplash from "@/components/IntroSplash";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://favourbaraka.co.ke"),
  title: {
    default: "Favour Baraka",
    template: "%s — Favour Baraka",
  },
  description: "Favour Baraka is a full-stack developer and founder based in Nairobi, Kenya, building things that hold up under real use.",
  icons: {
    icon: [{
      url: "https://res.cloudinary.com/dxiefklmt/image/upload/w_192,h_192,c_fill,f_png/v1787844672/FB_favicon_pyhjsg.png",
      type: "image/png",
      sizes: "192x192",
    }],
  },
  verification: {
    google: "5AHVH-sW_1U9wu-Gs2cGxutI3fgXHlT2AYR8FmdsZvM",
  },
  openGraph: {
    title: "Favour Baraka",
    description: "Favour Baraka is a full-stack developer and founder based in Nairobi, Kenya, building things that hold up under real use.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Baraka",
    description: "Favour Baraka is a full-stack developer and founder based in Nairobi, Kenya, building things that hold up under real use.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1928",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Favour Baraka",
              jobTitle: "Full-Stack Developer",
              url: "https://favourbaraka.co.ke",
              sameAs: [
                "https://github.com/Favour-37",
                "https://www.linkedin.com/in/favour-baraka-a27490408/",
                "https://x.com/favour35049",
              ],
              knowsAbout: [
                "Software Engineering",
                "Full-Stack Development",
                "Next.js",
                "React",
                "TypeScript",
                "NestJS",
              ],
            }),
          }}
        />
        <ScrollProgress />
        <RouteProgress />
        <ScrollProgress />

        <IntroSplash />

        <div className="grain-overlay" />
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
  <SmoothScroll>
    <PageTransition>{children}</PageTransition>
  </SmoothScroll>
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