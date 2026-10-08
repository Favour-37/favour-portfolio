import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dominion Outreach — Case Study",
  description:
    "Case study: a free discipleship platform for Dominion Outreach, built by Favour Baraka with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  alternates: { canonical: "/work/dominion-outreach" },
  openGraph: {
    title: "Dominion Outreach — Case Study — Favour Baraka",
    description:
      "Case study: a free discipleship platform for Dominion Outreach, built by Favour Baraka with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominion Outreach — Case Study — Favour Baraka",
    description:
      "Case study: a free discipleship platform for Dominion Outreach, built by Favour Baraka with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}