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
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <BoutiqueFitnessPage />;
}
