import type { Metadata } from "next";
import { EquipmentQRPage } from "./equipment-qr-page";

export const metadata: Metadata = {
  title: "Equipment QR Code Management - Track & Maintain Gym Equipment | GymWyse",
  description:
    "QR code equipment management for gyms. Members scan to report issues. Track maintenance history. Prevent liability. $39/mo add-on.",

  openGraph: {
    title: "Equipment QR Code Management - Track & Maintain Gym Equipment | GymWyse",
    description:
      "QR code equipment management for gyms. Members scan to report issues. Track maintenance history. Prevent liability. $39/mo add-on.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <EquipmentQRPage />;
}
