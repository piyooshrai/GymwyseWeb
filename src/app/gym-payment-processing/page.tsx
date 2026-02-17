import type { Metadata } from "next";
import { problemSolutionPages } from "@/lib/problem-solution-data";
import { ProblemSolutionPage } from "./problem-solution-page";

const data = problemSolutionPages.find((p) => p.slug === "gym-payment-processing")!;

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
  return <ProblemSolutionPage />;
}
