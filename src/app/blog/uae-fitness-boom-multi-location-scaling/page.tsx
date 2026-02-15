import type { Metadata } from "next";
import { UAEFitnessBoomPage } from "./blog-page";

export const metadata: Metadata = {
  title: "The UAE Fitness Boom: Multi-Location Scaling Strategy for 2026 | GymWyse Blog",
  description: "Navigating Dubai, Abu Dhabi, and Riyadh expansion with multi-currency billing, local data hosting, and portfolio-wide P&L management.",
  openGraph: {
    title: "The UAE Fitness Boom: Multi-Location Scaling Strategy for 2026",
    description: "Navigating Dubai, Abu Dhabi, and Riyadh expansion with multi-currency billing and portfolio P&L.",
    type: "article",
    publishedTime: "2025-12-10",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <UAEFitnessBoomPage />;
}
