import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glory Dome Construction — Case Study",
  description:
    "Case study: a Next.js website for Glory Dome Construction Ltd, a Nairobi-based construction materials, machinery rental, and civil works company.",
  alternates: { canonical: "/work/glory-dome" },
  openGraph: {
    title: "Glory Dome Construction — Case Study — Favour Baraka",
    description:
      "Case study: a Next.js website for Glory Dome Construction Ltd, a Nairobi-based construction materials, machinery rental, and civil works company.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glory Dome Construction — Case Study — Favour Baraka",
    description:
      "Case study: a Next.js website for Glory Dome Construction Ltd, a Nairobi-based construction materials, machinery rental, and civil works company.",
  },
};

export default function GloryDomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}