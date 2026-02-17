import type { Metadata } from "next";
import { AUPage } from "./au-page";

export const metadata: Metadata = {
  title: "Gym Management Software Australia - BPAY & AUD Pricing",
  description:
    "Australian gym software with BPAY, Direct Debit, AUD pricing. Built for gyms in Sydney, Melbourne, Brisbane. Start A$129/mo. Free trial.",

  openGraph: {
    title: "Gym Management Software Australia - BPAY & AUD Pricing",
    description:
      "Australian gym software with BPAY, Direct Debit, AUD pricing. Built for gyms in Sydney, Melbourne, Brisbane. Start A$129/mo. Free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <AUPage />;
}
