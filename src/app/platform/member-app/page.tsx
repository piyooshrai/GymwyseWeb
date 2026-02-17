import type { Metadata } from "next";
import { MemberAppPage } from "./member-app-page";

export const metadata: Metadata = {
  title: "AI Avatar Member App - 6 Personality-Driven Coaches | GymWyse",
  description:
    "Boost member engagement by 40% with AI Avatar coaches. 6 personality-driven fitness guides. Included free with every GymWyse plan.",

  openGraph: {
    title: "AI Avatar Member App - 6 Personality-Driven Coaches | GymWyse",
    description:
      "Boost member engagement by 40% with AI Avatar coaches. 6 personality-driven fitness guides. Included free with every GymWyse plan.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MemberAppPage />;
}
