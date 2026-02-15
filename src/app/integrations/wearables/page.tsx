import type { Metadata } from "next";
import { WearablesPage } from "./wearables-page";

export const metadata: Metadata = {
  title: "Wearable Tech Integration | GymWyse Gym Management Software",
  description:
    "Sync Apple Watch, WHOOP, Garmin, and Fitbit with your gym management software. Auto-log workouts, track recovery scores, and boost member engagement.",
};

export default function Page() {
  return <WearablesPage />;
}
