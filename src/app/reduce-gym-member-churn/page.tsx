import type { Metadata } from "next";
import { problemSolutionPages } from "@/lib/problem-solution-data";
import { ProblemSolutionPage } from "./problem-solution-page";

const data = problemSolutionPages.find((p) => p.slug === "reduce-gym-member-churn")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function Page() {
  return <ProblemSolutionPage />;
}
