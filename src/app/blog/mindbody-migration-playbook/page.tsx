import type { Metadata } from "next";
import { MindbodyMigrationPage } from "./blog-page";

export const metadata: Metadata = {
  title: "Switching from Mindbody: The Complete Migration Playbook | GymWyse Blog",
  description: "The zero-downtime migration process used by 200+ gyms to switch from Mindbody.",
  openGraph: {
    title: "Switching from Mindbody: The Complete Migration Playbook",
    description: "The zero-downtime migration process used by 200+ gyms to switch from Mindbody.",
    type: "article",
    publishedTime: "2026-01-11",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <MindbodyMigrationPage />;
}
