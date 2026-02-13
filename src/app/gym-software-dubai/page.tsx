import type { Metadata } from "next";
import { cityPages } from "@/lib/city-data";
import { CityPage } from "./city-page";

const data = cityPages.find((c) => c.slug === "gym-software-dubai")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function Page() {
  return <CityPage />;
}
