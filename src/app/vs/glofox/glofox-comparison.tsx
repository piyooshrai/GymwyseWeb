"use client";

import { ComparisonPageTemplate } from "@/components/comparison-page-template";

export function GlofoxComparison() {
  return (
    <ComparisonPageTemplate
      competitorName="Glofox"
      tagline="Why gyms are choosing GymWyse over Glofox for superior revenue analytics and AI features"
      metrics={[
        { label: "Starting Price", gymwyse: "$99/mo", competitor: "$110/mo" },
        { label: "Setup Fee", gymwyse: "$0", competitor: "$250+" },
        { label: "Contract", gymwyse: "Monthly", competitor: "12 months" },
        { label: "Revenue Analytics", gymwyse: "Full Suite", competitor: "No" },
        { label: "Churn Prediction", gymwyse: "AI-Powered", competitor: "No" },
        { label: "Mobile App", gymwyse: "Included", competitor: "Included" },
      ]}
      sections={[
        {
          title: "Pricing & Value",
          gymwyseWins: [
            "No setup fees (Glofox charges $250+)",
            "No long-term contracts",
            "Revenue analytics included at no extra cost",
            "Better multi-location pricing ($79/location vs $110)",
          ],
          competitorLoses: [
            "$250+ setup fee required",
            "12-month contract minimum",
            "No revenue analytics tools",
            "Full price for each location",
          ],
        },
        {
          title: "Revenue Analytics",
          gymwyseWins: [
            "Real-time MRR tracking across all locations",
            "AI churn prediction catches members before they leave",
            "Revenue waterfall analysis",
            "Automated failed payment recovery",
          ],
          competitorLoses: [
            "No real-time revenue dashboard",
            "No churn prediction capability",
            "No revenue stream analysis",
            "Manual payment recovery",
          ],
        },
        {
          title: "AI & Technology",
          gymwyseWins: [
            "AI Avatar coaches with 6 personalities",
            "Predictive analytics for member retention",
            "Smart scheduling optimization",
            "Equipment QR code system",
          ],
          competitorLoses: [
            "No AI-powered features",
            "No predictive capabilities",
            "Basic scheduling only",
            "No equipment management",
          ],
        },
        {
          title: "Multi-Location Management",
          gymwyseWins: [
            "Unified portfolio dashboard",
            "Cross-location analytics and benchmarking",
            "Volume pricing saves 30% per location",
            "Single member database across locations",
          ],
          competitorLoses: [
            "Limited multi-location overview",
            "No cross-location comparison tools",
            "Full price per location",
            "Separate databases per location",
          ],
        },
      ]}
      caseStudy={{
        quote: "Switching from Glofox gave us visibility we never had before",
        author: "Priya Patel",
        role: "Owner, Zen Warrior Studio",
        savings: "$48,000",
        churnReduction: "25%",
        mrrGrowth: "+22.1%",
      }}
    />
  );
}
