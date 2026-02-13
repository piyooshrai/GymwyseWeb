"use client";

import { verticalPages } from "@/lib/vertical-data";
import { VerticalPageTemplate } from "@/components/vertical-page-template";

const data = verticalPages.find((p) => p.slug === "crossfit-gym-software")!;

export function VerticalPage() {
  return <VerticalPageTemplate data={data} />;
}
