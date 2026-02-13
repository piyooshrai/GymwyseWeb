"use client";

import { problemSolutionPages } from "@/lib/problem-solution-data";
import { ProblemSolutionTemplate } from "@/components/problem-solution-template";

const data = problemSolutionPages.find((p) => p.slug === "personal-training-software")!;

export function ProblemSolutionPage() {
  return <ProblemSolutionTemplate data={data} />;
}
