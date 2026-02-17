import type { Metadata } from "next";
import { AEPage } from "./ae-page";

export const metadata: Metadata = {
  title: "Gym Management Software Dubai & UAE - Arabic Support & AED Pricing",
  description:
    "UAE gym software with RTL Arabic support, AED pricing, and local data hosting. Built for gyms in Dubai, Abu Dhabi, Riyadh. Free trial.",

  openGraph: {
    title: "Gym Management Software Dubai & UAE - Arabic Support & AED Pricing",
    description:
      "UAE gym software with RTL Arabic support, AED pricing, and local data hosting. Built for gyms in Dubai, Abu Dhabi, Riyadh. Free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <AEPage />;
}
