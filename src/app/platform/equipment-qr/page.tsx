import type { Metadata } from "next";
import { EquipmentQRPage } from "./equipment-qr-page";

export const metadata: Metadata = {
  title: "Equipment QR Code Management - Track & Maintain Gym Equipment | GymWyse",
  description:
    "QR code equipment management for gyms. Members scan to report issues. Track maintenance history. Prevent liability. $39/mo add-on.",
};

export default function Page() {
  return <EquipmentQRPage />;
}
