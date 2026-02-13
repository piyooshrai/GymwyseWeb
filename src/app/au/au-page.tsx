"use client";

import { Banknote, Globe, Clock } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function AUPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1E6}\u{1F1FA}"}
      region="Australia"
      tagline="Built for Australian gyms. BPAY & Direct Debit, AUD pricing, and AEST support."
      features={[
        {
          icon: Banknote,
          title: "BPAY & Direct Debit",
          description:
            "Collect payments via BPAY and Direct Debit. Local payment methods your members trust.",
        },
        {
          icon: Globe,
          title: "AUD Pricing",
          description:
            "All pricing in Australian Dollars. No hidden currency conversion fees.",
        },
        {
          icon: Clock,
          title: "AEST Support Hours",
          description:
            "Dedicated support during Australian business hours. Local team ready to help.",
        },
      ]}
      pricing={[
        {
          tier: "Starter",
          price: "A$129",
          billingCycle: "per location/month",
          features: [
            "Core platform",
            "Revenue Analytics",
            "BPAY integration",
            "Direct Debit support",
            "Email support",
          ],
        },
        {
          tier: "Growth",
          price: "A$99",
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
      cities="Sydney, Melbourne, Brisbane, Perth, and across Australia"
    />
  );
}
