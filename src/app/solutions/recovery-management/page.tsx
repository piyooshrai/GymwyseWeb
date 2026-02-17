import type { Metadata } from "next";
import { RecoveryManagementPage } from "./recovery-management-page";

export const metadata: Metadata = {
  title: "Recovery Service Management | Cold Plunge & Sauna Booking | GymWyse",
  description:
    "Manage cold plunge, infrared sauna, cryotherapy, and IV drip bookings. Track recovery revenue, automate upsells, and maximize every time slot.",

  openGraph: {
    title: "Recovery Service Management | Cold Plunge & Sauna Booking | GymWyse",
    description:
      "Manage cold plunge, infrared sauna, cryotherapy, and IV drip bookings. Track recovery revenue, automate upsells, and maximize every time slot.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <RecoveryManagementPage />;
}
