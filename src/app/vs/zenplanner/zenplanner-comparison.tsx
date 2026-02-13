"use client";

import { ComparisonPageTemplate } from "@/components/comparison-page-template";

export function ZenPlannerComparison() {
  return (
    <ComparisonPageTemplate
      competitorName="Zen Planner"
      tagline="Why independent gyms are choosing GymWyse over Zen Planner for better revenue tracking"
      metrics={[
        { label: "Starting Price", gymwyse: "$99/mo", competitor: "$117/mo" },
        { label: "Setup Fee", gymwyse: "$0", competitor: "$300+" },
        { label: "Contract", gymwyse: "Monthly", competitor: "12 months" },
        { label: "Revenue Analytics", gymwyse: "Full Suite", competitor: "Limited" },
        { label: "Churn Prediction", gymwyse: "AI-Powered", competitor: "No" },
        { label: "Mobile App", gymwyse: "Included", competitor: "+$40/mo" },
      ]}
      sections={[
        {
          title: "Pricing & Value",
          gymwyseWins: [
            "No setup fees (Zen Planner charges $300+)",
            "No long-term contracts (cancel anytime)",
            "Revenue analytics included at no extra cost",
            "Member mobile app included free",
          ],
          competitorLoses: [
            "$300+ setup fee",
            "12-month contract minimum",
            "Limited reporting capabilities",
            "Mobile app costs $40/mo extra",
          ],
        },
        {
          title: "Revenue Analytics",
          gymwyseWins: [
            "Real-time MRR dashboard",
            "AI-powered churn prediction",
            "Revenue stream breakdown",
            "Failed payment auto-recovery",
          ],
          competitorLoses: [
            "Basic financial reports only",
            "No predictive analytics",
            "No revenue stream visibility",
            "Manual payment follow-ups",
          ],
        },
        {
          title: "Member Experience",
          gymwyseWins: [
            "AI Avatar coaches boost engagement 40%",
            "Modern, intuitive mobile app",
            "Equipment QR code reporting",
            "Wearable device integration",
          ],
          competitorLoses: [
            "No AI-powered features",
            "Dated mobile experience",
            "No equipment management",
            "Limited integrations",
          ],
        },
        {
          title: "Multi-Location Management",
          gymwyseWins: [
            "Unified portfolio dashboard",
            "Cross-location performance comparison",
            "Volume pricing ($79/location for 2-5)",
            "Centralized member access",
          ],
          competitorLoses: [
            "Limited multi-location tools",
            "No cross-location benchmarking",
            "Full price per location ($117 each)",
            "Separate member databases",
          ],
        },
      ]}
      caseStudy={{
        quote: "The revenue analytics alone saved us from losing 12 members last quarter",
        author: "Marcus Johnson",
        role: "Regional Director, Apex Fitness",
        savings: "$52,000",
        churnReduction: "28%",
        mrrGrowth: "+15.7%",
      }}
    />
  );
}
