import type { Metadata } from "next";
import { RecoveryManagementPage } from "./recovery-management-page";

export const metadata: Metadata = {
  title: "Recovery Service Management | Cold Plunge & Sauna Booking | GymWyse",
  description:
    "Manage cold plunge, infrared sauna, cryotherapy, and IV drip bookings. Track recovery revenue, automate upsells, and maximize every time slot.",
};

export default function Page() {
  return <RecoveryManagementPage />;
}
