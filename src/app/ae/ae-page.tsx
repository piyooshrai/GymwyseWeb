"use client";

import { Languages, Banknote, Server } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function AEPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1E6}\u{1F1EA}"}
      region="UAE & Middle East"
      tagline="Built for the Middle East. RTL Arabic support, AED pricing, and local data hosting."
      features={[
        {
          icon: Languages,
          title: "RTL Arabic Support",
          description:
            "Full right-to-left Arabic interface. Serve your Arabic-speaking members natively.",
        },
        {
          icon: Banknote,
          title: "AED Pricing",
          description:
            "All pricing in UAE Dirhams. Accepts local payment methods including Apple Pay.",
        },
        {
          icon: Server,
          title: "Local Data Hosting",
          description:
            "Data hosted in the Middle East region. Full compliance with local data regulations.",
        },
      ]}
      pricing={[
        {
          tier: "Starter",
          price: "AED 365",
          billingCycle: "per location/month",
          features: [
            "Core platform",
            "Revenue Analytics",
            "Arabic RTL support",
            "Local payment methods",
            "Email support",
          ],
        },
        {
          tier: "Growth",
          price: "AED 289",
          billingCycle: "per location/month",
          description: "2-5 locations",
          features: [
            "Everything in Starter",
            "Multi-location dashboard",
            "Priority support",
            "Custom branding",
          ],
          highlighted: true,
        },
      ]}
      cities="Dubai, Abu Dhabi, Riyadh, Doha, and across the Middle East"
    />
  );
}
