import type { Metadata } from "next";
import { EquipmentTrackingQRPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "QR-Based Equipment Tracking: The ROI of Knowing What Breaks Before It Does | GymWyse Blog",
  description:
    "How QR code equipment management prevents downtime, extends asset life by 25%, and provides usage data for purchasing decisions.",
  openGraph: {
    title:
      "QR-Based Equipment Tracking: The ROI of Knowing What Breaks Before It Does",
    description:
      "How QR code equipment management prevents downtime, extends asset life by 25%, and provides usage data for purchasing decisions.",
    type: "article",
    publishedTime: "2026-02-08",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <EquipmentTrackingQRPage />;
}
