import type { Metadata } from "next";
import { BoutiqueFitnessPage } from "./boutique-fitness-page";

export const metadata: Metadata = {
  title: "Boutique Fitness Studio Software - Yoga, Pilates, Barre - GymWyse",
  description:
    "Software built for boutique fitness studios. Class scheduling, member engagement, revenue analytics. Perfect for yoga, pilates, and barre studios. $99/mo.",

  openGraph: {
    title: "Boutique Fitness Studio Software - Yoga, Pilates, Barre - GymWyse",
    description:
      "Software built for boutique fitness studios. Class scheduling, member engagement, revenue analytics. Perfect for yoga, pilates, and barre studios. $99/mo.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <BoutiqueFitnessPage />;
}
