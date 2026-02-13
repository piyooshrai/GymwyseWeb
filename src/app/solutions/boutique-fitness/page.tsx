import type { Metadata } from "next";
import { BoutiqueFitnessPage } from "./boutique-fitness-page";

export const metadata: Metadata = {
  title: "Boutique Fitness Studio Software - Yoga, Pilates, Barre - GymWyse",
  description:
    "Software built for boutique fitness studios. Class scheduling, member engagement, revenue analytics. Perfect for yoga, pilates, and barre studios. $99/mo.",
};

export default function Page() {
  return <BoutiqueFitnessPage />;
}
