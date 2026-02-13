"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function RevenueTrackingPage() {
  return (
    <SolutionsPageTemplate
      headline="Revenue Analytics for Gyms"
      tagline="Real-time P&L. Revenue stream breakdown. Failed payment recovery. Know exactly where your money comes from and where it goes."
      problemSolutions={[
        {
          problem: "You're guessing at your real revenue numbers",
          solution:
            "Real-time MRR dashboard shows exactly where you stand. Track revenue by source: memberships, PT, classes, retail, and more.",
          stats: [
            { label: "Data freshness", value: "Real-time" },
            { label: "Revenue streams tracked", value: "12+" },
          ],
        },
        {
          problem: "Failed payments slip through the cracks",
          solution:
            "Smart payment retry logic and automated follow-ups recover 40% of failed payments without manual intervention.",
          stats: [
            { label: "Recovery rate", value: "40%" },
            { label: "Avg recovered/month", value: "$2,100" },
          ],
        },
        {
          problem: "No visibility into profitability by service",
          solution:
            "Revenue waterfall analysis shows margin on every service. See which classes, trainers, and offerings actually make money.",
          stats: [
            { label: "Margin visibility", value: "Per-service" },
            { label: "Profit optimization", value: "+15%" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Revenue Dashboard",
          features: [
            "Real-time MRR tracking",
            "Revenue by stream breakdown",
            "Growth trend analysis",
            "Revenue forecasting",
            "Custom date range reports",
          ],
        },
        {
          title: "Payment Management",
          features: [
            "Automated failed payment recovery",
            "Smart retry logic",
            "Payment method management",
            "Automated invoicing",
            "Multi-currency support",
          ],
        },
        {
          title: "Profitability Analysis",
          features: [
            "Per-service margin analysis",
            "Class profitability reports",
            "Trainer revenue tracking",
            "Expense categorization",
            "Break-even analysis",
          ],
        },
        {
          title: "Financial Reporting",
          features: [
            "Automated monthly reports",
            "Tax-ready exports",
            "Revenue recognition",
            "Accounts receivable aging",
            "Cash flow projections",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "Revenue analytics is included in every GymWyse plan at no extra cost.",
        addOns:
          "Average gym discovers $5K+ in hidden revenue leaks within the first 30 days",
      }}
    />
  );
}
