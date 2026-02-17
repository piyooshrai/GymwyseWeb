import type { Metadata } from "next";
import { PersonalTrainersPage } from "./personal-trainers-page";

export const metadata: Metadata = {
  title: "Software for Independent Personal Trainers | GymWyse",
  description:
    "Manage clients, schedule sessions, process payments, and build workout programs. You don't need a gym to use GymWyse. You just need clients.",

  openGraph: {
    title: "Software for Independent Personal Trainers | GymWyse",
    description:
      "Manage clients, schedule sessions, process payments, and build workout programs. You don't need a gym to use GymWyse. You just need clients.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <PersonalTrainersPage />;
}
