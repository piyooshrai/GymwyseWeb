import type { Metadata } from "next";
import { YogaStudioSoftwareGuidePage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Yoga Studio Software: Managing Classes, Retreats, and Teacher Certifications | GymWyse Blog",
  description:
    "How yoga-specific scheduling, teacher certification tracking, retreat management, and retail POS simplify studio operations.",
  openGraph: {
    title:
      "Yoga Studio Software: Managing Classes, Retreats, and Teacher Certifications",
    description:
      "How yoga-specific scheduling, teacher certification tracking, retreat management, and retail POS simplify studio operations.",
    type: "article",
    publishedTime: "2026-02-12",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <YogaStudioSoftwareGuidePage />;
}
