import type { Metadata } from "next";
import { SecurityPage } from "./security-page";

export const metadata: Metadata = {
  title: "Security & Compliance | GDPR, Data Protection | GymWyse",
  description:
    "GymWyse security: AES-256 encryption, GDPR compliance, regional data hosting, SOC 2 certification. Your members' data is safe with us.",

  openGraph: {
    title: "Security & Compliance | GDPR, Data Protection | GymWyse",
    description:
      "GymWyse security: AES-256 encryption, GDPR compliance, regional data hosting, SOC 2 certification. Your members' data is safe with us.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <SecurityPage />;
}
