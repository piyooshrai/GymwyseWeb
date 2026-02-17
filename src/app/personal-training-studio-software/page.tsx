import type { Metadata } from "next";
import { verticalPages } from "@/lib/vertical-data";
import { VerticalPage } from "./vertical-page";

const data = verticalPages.find((p) => p.slug === "personal-training-studio-software")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <VerticalPage />;
}
