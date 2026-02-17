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
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <AUPage />;
}
