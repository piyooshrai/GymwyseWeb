import type { Metadata } from "next";
import { PersonalTrainerClientPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Personal Trainer Client Management: From Spreadsheets to Scalable Systems | GymWyse Blog",
  description:
    "How PTs and multi-trainer studios replace spreadsheets with automated scheduling, commission tracking, and client progress dashboards.",
  openGraph: {
    title:
      "Personal Trainer Client Management: From Spreadsheets to Scalable Systems",
    description:
      "How PTs and multi-trainer studios replace spreadsheets with automated scheduling, commission tracking, and client progress dashboards.",
    type: "article",
    publishedTime: "2026-02-14",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <PersonalTrainerClientPage />;
}
