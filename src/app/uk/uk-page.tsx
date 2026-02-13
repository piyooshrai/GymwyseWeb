"use client";

import { Banknote, Shield, PoundSterling } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function UKPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1EC}\u{1F1E7}"}
      region="the UK"
      tagline="Built for UK gyms. Direct Debit (BACS), GDPR compliance, and pricing in GBP."
      features={[
        {
          icon: Banknote,
          title: "Direct Debit (BACS)",
          description:
            "Collect membership fees via Direct Debit. Reduce failed payments by 60%.",
        },
        {
          icon: Shield,
          title: "GDPR Compliant",
          description:
            "Full data protection compliance. Member data hosted in UK/EU.",
        },
        {
          icon: PoundSterling,
          title: "GBP Pricing",
          description:
            "All pricing in British Pounds. No currency conversion fees.",
        },
      ]}
      pricing={[
        {
          tier: "Starter",
          price: "\u00A379",
          billingCycle: "per location/month",
          features: [
            "Core platform",
            "Revenue Analytics",
            "Direct Debit integration",
            "GDPR compliance",
            "Email support",
          ],
        },
        {
          tier: "Growth",
          price: "\u00A363",
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
      cities="London, Manchester, Birmingham, Edinburgh, and across the UK"
    />
  );
}
