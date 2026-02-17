import type { Metadata } from "next";
import { verticalPages } from "@/lib/vertical-data";
import { VerticalPage } from "./vertical-page";

const data = verticalPages.find((p) => p.slug === "yoga-studio-software")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <VerticalPage />;
}
