import type { Metadata } from "next";
export const metadata: Metadata = { title: "Glory Dome Construction — Case Study" };
export default function GloryDomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}