"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function MultiLocationPage() {
  return (
    <SolutionsPageTemplate
      headline="Multi-Location Gym Management"
      tagline="From 2 locations to 100+. One dashboard for your entire fitness portfolio. Cross-location analytics that actually work."
      problemSolutions={[
        {
          problem: "You can't see the full picture across locations",
          solution:
            "Portfolio dashboard shows MRR, churn, and member count across all locations at a glance. Compare performance instantly.",
          stats: [
            { label: "Locations supported", value: "100+" },
            { label: "Data delay", value: "Real-time" },
          ],
        },
        {
          problem: "Each location operates in a silo",
          solution:
            "Centralized member database lets members access any location. Unified reporting, billing, and communications.",
          stats: [
            { label: "Cross-location access", value: "Unified" },
            { label: "Admin time saved", value: "60%" },
          ],
        },
        {
          problem: "You're overpaying per location",
          solution:
            "Volume pricing at $79/location (2-5) or custom enterprise rates (6+). Save 30%+ compared to competitors charging full price per site.",
          stats: [
            { label: "Per-location savings", value: "30%" },
            { label: "vs Mindbody", value: "-$50/loc" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Portfolio Management",
          features: [
            "Unified dashboard for all locations",
            "Cross-location P&L comparison",
            "Consolidated member database",
            "Portfolio-level analytics",
            "Location performance benchmarks",
          ],
        },
        {
          title: "Operations at Scale",
          features: [
            "Centralized class scheduling",
            "Multi-location staff management",
            "Standardized pricing across sites",
            "Bulk communications",
            "Inter-location transfers",
          ],
        },
        {
          title: "Revenue Intelligence",
          features: [
            "Revenue by location breakdown",
            "Churn prediction per location",
            "Failed payment recovery (all sites)",
            "Revenue forecasting",
            "Profitability analysis",
          ],
        },
        {
          title: "Enterprise Features",
          features: [
            "Role-based access control",
            "Custom integrations",
            "Dedicated account manager",
            "SLA guarantees",
            "White-label options",
          ],
        },
      ]}
      pricing={{
        price: "$79/location/mo",
        description:
          "2-5 locations: $79/location/month. 6+ locations: custom pricing with volume discounts.",
        addOns:
          "All locations include: Revenue Analytics, Member App, Multi-Location Dashboard",
      }}
    />
  );
}
