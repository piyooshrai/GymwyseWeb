import type { Metadata } from "next";
import { cityPages } from "@/lib/city-data";
import { CityPage } from "./city-page";

const data = cityPages.find((c) => c.slug === "gym-software-portland")!;

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
  return <CityPage />;
}
