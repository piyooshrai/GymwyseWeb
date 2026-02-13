"use client";

import { ComparisonPageTemplate } from "@/components/comparison-page-template";

export function PushPressComparison() {
  return (
    <ComparisonPageTemplate
      competitorName="PushPress"
      tagline="Why gyms are upgrading from PushPress to GymWyse for advanced analytics and AI features"
      metrics={[
        { label: "Starting Price", gymwyse: "$99/mo", competitor: "$159/mo" },
        { label: "Setup Fee", gymwyse: "$0", competitor: "Varies" },
        { label: "Contract", gymwyse: "Monthly", competitor: "Annual" },
        { label: "Revenue Analytics", gymwyse: "Full Suite", competitor: "Basic" },
        { label: "Churn Prediction", gymwyse: "AI-Powered", competitor: "No" },
        { label: "Mobile App", gymwyse: "Included", competitor: "Included" },
      ]}
      sections={[
        {
          title: "Pricing & Value",
          gymwyseWins: [
            "Lower starting price ($99 vs $159/mo)",
            "No long-term contracts required",
            "All analytics included at base price",
            "Better multi-location volume discounts",
          ],
          competitorLoses: [
            "Higher base price at $159/mo",
            "Annual commitment preferred",
            "Advanced features require higher tiers",
            "Limited multi-location pricing options",
          ],
        },
        {
          title: "Revenue Analytics",
          gymwyseWins: [
            "Real-time MRR dashboard with trend analysis",
            "AI churn prediction 30 days in advance",
            "Revenue stream breakdown by source",
            "Automated ROI tracking and reporting",
          ],
          competitorLoses: [
            "Basic revenue reporting",
            "No predictive churn analytics",
            "Limited revenue categorization",
            "No automated ROI calculations",
          ],
        },
        {
          title: "Member Experience",
          gymwyseWins: [
            "AI Avatar coaches with 6 personalities",
            "40% higher member app engagement",
            "Equipment QR code system",
            "Wearable device integration",
          ],
          competitorLoses: [
            "Standard member app",
            "Basic engagement features",
            "No equipment management",
            "Limited wearable support",
          ],
        },
        {
          title: "Scalability",
          gymwyseWins: [
            "Portfolio dashboard for all locations",
            "Cross-location analytics and benchmarking",
            "$79/location for 2-5 locations",
            "Enterprise features for 6+ locations",
          ],
          competitorLoses: [
            "Limited portfolio overview",
            "No cross-location benchmarking",
            "Higher per-location costs",
            "Enterprise features limited",
          ],
        },
      ]}
      caseStudy={{
        quote: "GymWyse gave us the analytics depth PushPress couldn't",
        author: "Marcus Johnson",
        role: "Regional Director, Apex Fitness",
        savings: "$62,400",
        churnReduction: "30%",
        mrrGrowth: "+19.5%",
      }}
    />
  );
}
