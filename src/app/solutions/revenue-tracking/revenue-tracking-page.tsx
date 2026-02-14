"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function RevenueTrackingPage() {
  return (
    <SolutionsPageTemplate
      headline="Revenue Analytics for Gyms"
      tagline="Real-time MRR dashboards, revenue stream breakdowns, per-service P&L, and cashflow forecasting. Stop guessing where your money comes from and where it goes. Know exactly which services drive profit and which ones quietly drain it."
      problemSolutions={[
        {
          problem: "You're guessing at your real revenue numbers",
          solution:
            "Most gym owners check their bank account and call it revenue tracking. But bank balances do not tell you MRR, they do not separate recurring membership income from one-time personal training sales, and they definitely do not show you revenue trends until it is too late to act on them. The GymWyse real-time MRR dashboard breaks down every dollar by source, including memberships, personal training, group classes, retail, day passes, and ancillary services, updated continuously as transactions occur. You can view daily, weekly, monthly, and annual trends with comparison overlays so you always know whether revenue is growing, plateauing, or declining relative to prior periods.",
          stats: [
            { label: "Data freshness", value: "Real-time" },
            { label: "Revenue streams tracked", value: "12+" },
          ],
        },
        {
          problem: "Failed payments slip through the cracks every month",
          solution:
            "A single failed payment might only be $50, but across your member base, failed payments add up to thousands in monthly revenue leakage. Most gym owners either do not notice or rely on manual follow-up that is inconsistent at best. GymWyse smart payment retry logic learns the optimal day and time to reattempt each member's charge based on historical payment success patterns, recovering payments automatically without any staff involvement. When retries do not work, automated follow-up sequences notify the member and provide a frictionless mobile card-update flow. The average gym recovers over $2,100 per month in payments that would otherwise have been lost.",
          stats: [
            { label: "Recovery rate", value: "40%" },
            { label: "Avg recovered/month", value: "$2,100" },
          ],
        },
        {
          problem: "No visibility into profitability by service line",
          solution:
            "Full classes and busy training schedules feel productive, but without cost allocation you have no idea which services actually contribute margin. GymWyse revenue waterfall analysis pairs revenue data with configurable cost inputs, including instructor pay, room allocation, equipment depreciation, and supply costs, to show true profit margin on every service you offer. You can see that your 6 AM boot camp generates high revenue but low margin because of premium instructor rates, while your mid-day yoga class quietly delivers the best margin in your portfolio. This per-service P&L transparency lets you optimize pricing, scheduling, and staffing around what actually makes money.",
          stats: [
            { label: "Margin visibility", value: "Per-service" },
            { label: "Profit optimization", value: "+15%" },
          ],
        },
        {
          problem: "You cannot forecast cashflow or plan for seasonal dips",
          solution:
            "Gym revenue is seasonal, and owners who do not plan for it get caught off guard every January retention drop and every summer slowdown. GymWyse cashflow forecasting uses your historical revenue patterns, current member pipeline, upcoming contract renewals, and seasonal adjustment factors to project revenue 30, 60, and 90 days forward. The forecast dashboard shows best-case, expected, and worst-case scenarios so you can plan equipment purchases, marketing spend, and staffing levels with confidence instead of anxiety. Gyms that use cashflow forecasting report 40 percent fewer cash crunches and make spending decisions an average of three weeks earlier because they see what is coming before it arrives.",
          stats: [
            { label: "Forecast horizon", value: "90 days" },
            { label: "Cash crunch reduction", value: "40%" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Revenue Dashboard",
          features: [
            "Real-time MRR tracking with continuous updates as transactions occur, not end-of-day batch processing",
            "Revenue by stream breakdown across memberships, personal training, classes, retail, day passes, and custom categories",
            "Growth trend analysis with period-over-period comparison overlays for daily, weekly, monthly, and annual views",
            "Revenue forecasting with best-case, expected, and worst-case projections based on historical patterns and current pipeline",
            "Custom date range reports with drag-to-select and preset options for this month, last quarter, year-to-date, and more",
            "Revenue concentration analysis showing dependency on top members and identifying diversification opportunities",
          ],
        },
        {
          title: "Payment Management",
          features: [
            "Automated failed payment recovery with smart retry logic that learns optimal reattempt timing per member",
            "Frictionless member self-service card updates via mobile link so declined payments get resolved without staff calls",
            "Payment method management with support for credit cards, ACH bank transfers, and digital wallets",
            "Automated invoicing with customizable templates, payment terms, and scheduled delivery for personal training and services",
            "Multi-currency support for gyms serving international members or operating across borders",
            "Payment aging reports showing overdue balances by age bucket with one-click follow-up action for each member",
          ],
        },
        {
          title: "Profitability Analysis",
          features: [
            "Per-service margin analysis pairing revenue with configurable cost inputs for true profit visibility on every offering",
            "Class profitability reports factoring instructor pay, room costs, equipment, and average attendee revenue per session",
            "Trainer revenue tracking showing per-session and per-client revenue generation alongside compensation costs",
            "Expense categorization with customizable buckets for rent, payroll, marketing, equipment, supplies, and overhead",
            "Break-even analysis per service line showing the minimum volume needed before each offering becomes profitable",
            "Margin trend reports showing how profitability is changing over time for each service and the business as a whole",
          ],
        },
        {
          title: "Financial Reporting",
          features: [
            "Automated monthly financial reports delivered to your inbox with executive summary and key metric highlights",
            "Tax-ready exports formatted for your accountant with revenue recognition, deferred income, and categorized expenses",
            "Revenue recognition tracking for prepaid packages and annual memberships in compliance with accrual accounting standards",
            "Accounts receivable aging dashboard showing outstanding balances, collection probability, and total exposure at a glance",
            "Cashflow projections with 30, 60, and 90 day forward views incorporating renewals, seasonality, and pipeline data",
            "Custom report builder with drag-and-drop metrics, filters, and scheduling for any recurring financial report you need",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "Revenue analytics is included in every GymWyse plan at no extra cost. No premium tier, no add-on fee. Full financial visibility from the day you sign up.",
        addOns:
          "Average gym discovers $5K+ in hidden revenue leaks within the first 30 days, including failed payments, underpriced services, and unprofitable time slots.",
      }}
    />
  );
}
