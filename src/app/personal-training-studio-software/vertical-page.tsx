"use client";

import { verticalPages } from "@/lib/vertical-data";
import { VerticalPageTemplate } from "@/components/vertical-page-template";

const data = verticalPages.find((p) => p.slug === "personal-training-studio-software")!;

export function VerticalPage() {
  return <VerticalPageTemplate data={data} />;
}
