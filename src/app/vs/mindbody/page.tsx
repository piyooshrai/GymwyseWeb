import type { Metadata } from "next";
import { MindbodyComparison } from "./mindbody-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Mindbody - Why Gyms Are Switching & Saving $500+/mo",
  description:
    "Compare GymWyse and Mindbody. No setup fees ($500 savings). No contracts. Revenue analytics included. See why independent gyms are switching. Migration takes 7-10 days.",
};

export default function Page() {
  return <MindbodyComparison />;
}
