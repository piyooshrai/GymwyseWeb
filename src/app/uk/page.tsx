import type { Metadata } from "next";
import { UKPage } from "./uk-page";

export const metadata: Metadata = {
  title: "Gym Management Software UK - Direct Debit & GDPR Compliant",
  description:
    "UK gym software with Direct Debit (BACS), GDPR compliance, and GBP pricing. Built for gyms in London, Manchester, Birmingham. Start £79/mo. Free trial.",

  openGraph: {
    title: "Gym Management Software UK - Direct Debit & GDPR Compliant",
    description:
      "UK gym software with Direct Debit (BACS), GDPR compliance, and GBP pricing. Built for gyms in London, Manchester, Birmingham. Start £79/mo. Free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <UKPage />;
}
