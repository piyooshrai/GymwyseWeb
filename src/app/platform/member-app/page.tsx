import type { Metadata } from "next";
import { MemberAppPage } from "./member-app-page";

export const metadata: Metadata = {
  title: "AI Avatar Member App - 6 Personality-Driven Coaches | GymWyse",
  description:
    "Boost member engagement by 40% with AI Avatar coaches. 6 personality-driven fitness guides. Included free with every GymWyse plan.",
};

export default function Page() {
  return <MemberAppPage />;
}
