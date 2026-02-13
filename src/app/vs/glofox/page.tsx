import type { Metadata } from "next";
import { GlofoxComparison } from "./glofox-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Glofox - Better Revenue Analytics & AI Features",
  description:
    "Compare GymWyse and Glofox. Superior revenue analytics, AI churn prediction, lower pricing. See why gyms are choosing GymWyse.",
};

export default function Page() {
  return <GlofoxComparison />;
}
