import type { Metadata } from "next";
import { DemoPage } from "./demo-page";

export const metadata: Metadata = {
  title: "Book a Demo - GymWyse Gym Management Software",
  description:
    "See GymWyse in action. Book a personalized demo and discover how to track revenue, predict churn, and recover $12K+/month for your gym.",
};

export default function Page() {
  return <DemoPage />;
}
