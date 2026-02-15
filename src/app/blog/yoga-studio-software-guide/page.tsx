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
  },
};

export default function Page() {
  return <YogaStudioSoftwareGuidePage />;
}
