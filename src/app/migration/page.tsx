import type { Metadata } from "next";
import { MigrationPage } from "./migration-page";

export const metadata: Metadata = {
  title: "Switch to GymWyse - Migration Guide for Gym Owners",
  description:
    "Switch from Mindbody, Zen Planner, or Glofox to GymWyse in 7-10 days. We handle all data migration. Zero downtime. Zero data loss.",
};

export default function Page() {
  return <MigrationPage />;
}
