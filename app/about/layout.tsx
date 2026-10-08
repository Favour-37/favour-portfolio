import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Favour Baraka — full-stack developer based in Nairobi, Kenya, founder of Pneubah, and President of Dominion Outreach.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Favour Baraka",
    description:
      "Favour Baraka — full-stack developer based in Nairobi, Kenya, founder of Pneubah, and President of Dominion Outreach.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Favour Baraka",
    description:
      "Favour Baraka — full-stack developer based in Nairobi, Kenya, founder of Pneubah, and President of Dominion Outreach.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}