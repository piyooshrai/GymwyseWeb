"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function MultiLocationPage() {
  return (
    <SolutionsPageTemplate
      headline="Multi-Location Gym Management"
      tagline="From 2 locations to 100+, manage your entire fitness portfolio from one dashboard. Cross-location analytics, a unified member database, and volume pricing that actually rewards growth instead of punishing it."
      problemSolutions={[
        {
          problem: "You can't see the full picture across locations",
          solution:
            "When every location runs its own reports and spreadsheets, getting a portfolio-level view means hours of manual consolidation and data that is already stale by the time you read it. The GymWyse portfolio dashboard aggregates MRR, churn rate, member count, and revenue per square foot across every location into a single real-time view. Drill down into any site for location-specific detail, or zoom out to compare performance across your entire network. Regional managers and owners finally have the same source of truth without waiting for end-of-month reports.",
          stats: [
            { label: "Locations supported", value: "100+" },
            { label: "Data delay", value: "Real-time" },
          ],
        },
        {
          problem: "Each location operates in a silo",
          solution:
            "Members who belong to one location cannot easily access another. Staff at site A have no idea what site B is doing. Promotions are inconsistent, pricing varies without reason, and a member who moves across town churns instead of transfers. GymWyse centralized member database allows members to book, check in, and attend classes at any location on their plan. Unified reporting, billing, and communications mean your brand experience is consistent whether a member walks into your downtown flagship or your suburban satellite. Operators save an average of 60 percent on cross-location admin time.",
          stats: [
            { label: "Cross-location access", value: "Unified" },
            { label: "Admin time saved", value: "60%" },
          ],
        },
        {
          problem: "You're overpaying per location with your current software",
          solution:
            "Most gym software vendors charge full price per location with no volume consideration, which means your software bill scales linearly even though your operational overhead does not. GymWyse multi-location pricing starts at $79 per location for 2 to 5 sites with custom enterprise rates for larger portfolios, saving you 30 percent or more compared to competitors like Mindbody or ClubReady. Every location gets the full platform including revenue analytics, member app, and churn prediction, so you never have to choose which sites get the best tools.",
          stats: [
            { label: "Per-location savings", value: "30%" },
            { label: "vs Mindbody", value: "-$50/loc" },
          ],
        },
        {
          problem: "Underperforming locations hide behind averages",
          solution:
            "When you only look at aggregate numbers, a struggling location can be masked by a strong one for months before the problem surfaces. GymWyse location benchmarking compares every site against your portfolio average and against its own historical trend across key metrics including member growth, revenue per member, churn rate, class utilization, and trainer productivity. Automated alerts flag locations that drop below configurable thresholds, so you can intervene early with targeted operational changes instead of discovering the problem at quarter-end. Operators who use location benchmarking identify underperformance an average of 45 days sooner.",
          stats: [
            { label: "Early detection", value: "45 days" },
            { label: "Performance variance", value: "Tracked" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Portfolio Management",
          features: [
            "Unified dashboard showing real-time MRR, member count, churn rate, and utilization across every location",
            "Cross-location P&L comparison with drill-down by site, region, or custom grouping",
            "Consolidated member database with single-profile access across all locations on a member's plan",
            "Portfolio-level analytics including aggregate growth trends, revenue concentration, and risk exposure",
            "Location performance benchmarks comparing each site against portfolio averages and its own historical trend",
            "Automated underperformance alerts when any location drops below configurable thresholds on key metrics",
          ],
        },
        {
          title: "Operations at Scale",
          features: [
            "Centralized class scheduling with location-specific calendars that roll up into a master portfolio view",
            "Multi-location staff management with cross-site scheduling, credential tracking, and payroll summaries",
            "Standardized pricing and promotion management that can be applied globally or customized per location",
            "Bulk communications with audience segmentation by location, membership type, visit frequency, and engagement level",
            "Inter-location member transfers with seamless plan migration, prorated billing, and access provisioning",
            "Centralized inventory and retail management with per-location stock tracking and consolidated purchasing",
          ],
        },
        {
          title: "Revenue Intelligence",
          features: [
            "Revenue by location breakdown with per-site MRR, growth rate, and revenue per member trending",
            "Churn prediction per location with AI-driven risk scoring calibrated to each site's member behavior patterns",
            "Failed payment recovery running across all sites with consolidated recovery reporting and per-location drill-down",
            "Revenue forecasting at portfolio and location level based on current trends, seasonal patterns, and pipeline data",
            "Profitability analysis per location factoring rent, staffing, equipment, and marketing costs against revenue",
            "Custom financial reporting with scheduled email delivery to owners, regional managers, and investors",
          ],
        },
        {
          title: "Enterprise Features",
          features: [
            "Role-based access control with granular permissions for owners, regional managers, site managers, and front desk staff",
            "Custom API integrations with your existing accounting, payroll, and CRM systems",
            "Dedicated account manager with quarterly business reviews and proactive optimization recommendations",
            "SLA guarantees with 99.9 percent uptime commitment and priority support response times",
            "White-label options for the member app so every location presents your brand, not ours",
            "Data export and warehouse integration for teams that want to run custom analytics in their own BI tools",
          ],
        },
      ]}
      pricing={{
        price: "$79/location/mo",
        description:
          "2-5 locations: $79/location/month. 6+ locations: custom pricing with volume discounts that increase as you grow. Every location gets the full platform from day one.",
        addOns:
          "All locations include: Revenue Analytics, Member App, Churn Prediction, Multi-Location Dashboard, and Cross-Site Member Access.",
      }}
    />
  );
}
