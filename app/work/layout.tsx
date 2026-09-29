import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Software projects built by Favour Baraka, including Dominion Outreach and Glory Dome Construction, using Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Work — Favour Baraka",
    description:
      "Software projects built by Favour Baraka, including Dominion Outreach and Glory Dome Construction, using Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Favour Baraka",
    description:
      "Software projects built by Favour Baraka, including Dominion Outreach and Glory Dome Construction, using Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}