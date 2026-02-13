"use client";

import { cityPages } from "@/lib/city-data";
import { CityPageTemplate } from "@/components/city-page-template";

const data = cityPages.find((c) => c.slug === "gym-software-glasgow")!;

export function CityPage() {
  return <CityPageTemplate data={data} />;
}
