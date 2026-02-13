import type { Metadata } from "next";
import { PushPressComparison } from "./pushpress-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs PushPress - Advanced Gym Management Alternative",
  description:
    "Compare GymWyse and PushPress. Better revenue analytics, AI features, and multi-location management. See why gyms prefer GymWyse.",
};

export default function Page() {
  return <PushPressComparison />;
}
