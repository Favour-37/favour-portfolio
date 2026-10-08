import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Favour Baraka — full-stack developer based in Nairobi, Kenya, for freelance work, collaboration, or a quick hello.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Favour Baraka",
    description:
      "Get in touch with Favour Baraka — full-stack developer based in Nairobi, Kenya, for freelance work, collaboration, or a quick hello.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Favour Baraka",
    description:
      "Get in touch with Favour Baraka — full-stack developer based in Nairobi, Kenya, for freelance work, collaboration, or a quick hello.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}