import type { Metadata } from "next";
import { IndependentGymsPage } from "./independent-gyms-page";

export const metadata: Metadata = {
  title: "Gym Software for Independent Owners - GymWyse",
  description:
    "Built for single-location independent gyms. Revenue analytics, churn prediction, and member engagement. $99/mo, no contracts. Start your free trial.",
};

export default function Page() {
  return <IndependentGymsPage />;
}
