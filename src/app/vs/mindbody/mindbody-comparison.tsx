"use client";

import { ComparisonPageTemplate } from "@/components/comparison-page-template";

export function MindbodyComparison() {
  return (
    <ComparisonPageTemplate
      competitorName="Mindbody"
      tagline="Why independent gyms are switching to GymWyse and saving $500+/month"
      metrics={[
        { label: "Starting Price", gymwyse: "$99/mo", competitor: "$129/mo" },
        { label: "Setup Fee", gymwyse: "$0", competitor: "$500+" },
        { label: "Contract", gymwyse: "Monthly", competitor: "12 months" },
        { label: "Revenue Analytics", gymwyse: "Included", competitor: "No" },
        { label: "Churn Prediction", gymwyse: "AI-Powered", competitor: "No" },
        { label: "Mobile App", gymwyse: "Included", competitor: "+$50/mo" },
      ]}
      sections={[
        {
          title: "Pricing & Value",
          gymwyseWins: [
            "No setup fees (Mindbody charges $500+)",
            "No long-term contracts (Mindbody locks you in for 12 months)",
            "30% cheaper for multi-location (Mindbody charges full price per location)",
            "All features included (Mindbody nickel-and-dimes with add-ons)",
          ],
          competitorLoses: [
            "$500+ setup fee",
            "12-month contract minimum",
            "Full price for each location",
            "Mobile app costs extra $50/mo",
          ],
        },
        {
          title: "Revenue Analytics",
          gymwyseWins: [
            "Real-time MRR tracking across all locations",
            "AI-powered churn prediction (catch members before they cancel)",
            "Revenue waterfall showing exactly where money comes and goes",
            "ROI calculator built-in (prove your software pays for itself)",
          ],
          competitorLoses: [
            "Basic reporting only",
            "No churn prediction",
            "No revenue breakdown by stream",
            "No ROI tracking",
          ],
        },
        {
          title: "Member Experience",
          gymwyseWins: [
            "AI Avatar coaches (6 personalities, 40% higher engagement)",
            "Integrated mobile app (included, not extra)",
            "Wearable sync ready (Apple Watch, WHOOP)",
            "QR code equipment reporting",
          ],
          competitorLoses: [
            "Generic branded app",
            "Mobile app costs $50/mo extra",
            "No AI features",
            "No equipment management",
          ],
        },
        {
          title: "Multi-Location Management",
          gymwyseWins: [
            "Portfolio dashboard (see all locations at once)",
            "Cross-location analytics and benchmarking",
            "Volume pricing (save 30% per location)",
            "Centralized member database",
          ],
          competitorLoses: [
            "Separate logins per location",
            "No cross-location reporting",
            "Full price per location",
            "Siloed member data",
          ],
        },
      ]}
      caseStudy={{
        quote: "We saved $6,400 in the first month",
        author: "Sarah Chen",
        role: "Owner, FitHub Downtown LA",
        savings: "$76,800",
        churnReduction: "32%",
        mrrGrowth: "+18.3%",
      }}
    />
  );
}
