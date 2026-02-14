"use client";

import { Banknote, Shield, PoundSterling } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function UKPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1EC}\u{1F1E7}"}
      region="the UK"
      tagline="Built for UK gyms. Direct Debit (BACS), GDPR compliance, and pricing in GBP."
      marketContext="The UK gym market is valued at over £5 billion, with more than 7,200 fitness facilities serving 10.4 million members. Direct Debit remains the dominant payment method for recurring memberships, accounting for over 80% of collections. With GDPR enforcement intensifying and the ICO issuing record fines, UK gym operators need software that handles compliance by default — not as an afterthought. GymWyse is purpose-built for these requirements, with native BACS integration, UK-hosted data, and VAT-ready reporting out of the box."
      features={[
        {
          icon: Banknote,
          title: "Direct Debit (BACS)",
          description:
            "Collect membership fees via Direct Debit. Reduce failed payments by 60% compared to card-based billing.",
          details: [
            "Native GoCardless integration for BACS Direct Debit — no third-party add-ons required",
            "Industry-leading 3% failure rate vs 8% average on card-based billing",
            "Automatic retry logic with smart scheduling to maximise successful collections",
            "Real-time reconciliation dashboard showing pending, collected, and failed payments",
            "Supports variable Direct Debits for add-ons, PT sessions, and overage charges",
          ],
        },
        {
          icon: Shield,
          title: "GDPR Compliant",
          description:
            "Full data protection compliance. Member data hosted on AWS London (eu-west-2) with encryption at rest and in transit.",
          details: [
            "All member data hosted on AWS London (eu-west-2) — never leaves UK jurisdiction",
            "Right to erasure automation: one-click member data deletion with full audit trail",
            "Data Processing Agreement (DPA) included with every subscription at no extra cost",
            "Consent management built into every member touchpoint — sign-up, check-in, marketing",
            "Regular penetration testing and SOC 2 Type II compliance for enterprise peace of mind",
          ],
        },
        {
          icon: PoundSterling,
          title: "VAT-Ready Reporting",
          description:
            "All pricing in British Pounds with automated VAT calculations and one-click export to your accounting software.",
          details: [
            "Native Xero and QuickBooks integration — sync invoices and payments automatically",
            "Automatic 20% VAT calculation with support for reduced and zero-rated items",
            "Making Tax Digital (MTD) compatible exports for seamless HMRC submissions",
            "Multi-location P&L reports broken down by revenue stream, membership type, and VAT category",
            "End-of-month financial pack generated automatically — save 6+ hours of manual accounting",
          ],
        },
      ]}
      testimonials={[
        {
          gym: "The Foundry",
          location: "Shoreditch, London — 4 locations",
          challenge:
            "With four locations across London, The Foundry was losing over £2,000 per month to failed card payments. Their previous provider charged per-transaction fees on Direct Debit and offered no retry logic, leading to an 8.2% payment failure rate.",
          solution:
            "GymWyse's native GoCardless integration replaced their card-based billing with BACS Direct Debit. Automatic retry scheduling and smart payment date selection reduced friction for members.",
          results: [
            { metric: "Annual savings", value: "£24,000" },
            { metric: "DD failure rate reduction", value: "8.2% → 3.1%" },
            { metric: "Member churn reduction", value: "-22%" },
            { metric: "Setup time", value: "3 days" },
          ],
          quote:
            "We were haemorrhaging money on failed payments. GymWyse paid for itself in the first month — across four locations, the savings are staggering.",
          author: "James Sheridan",
          role: "Operations Director, The Foundry",
        },
        {
          gym: "Core Collective",
          location: "Birmingham — boutique fitness studio",
          challenge:
            "Core Collective received an ICO inquiry after a member data complaint. Their US-hosted software couldn't demonstrate GDPR compliance, and their insurance provider flagged them as higher risk, increasing premiums by £800 per year.",
          solution:
            "Migrating to GymWyse moved all member data to AWS London with full encryption. The included DPA, consent management workflows, and right-to-erasure automation resolved the ICO inquiry within 2 weeks.",
          results: [
            { metric: "Insurance savings", value: "£800/yr" },
            { metric: "ICO inquiry resolution", value: "2 weeks" },
            { metric: "GDPR compliance score", value: "100%" },
            { metric: "Data migration time", value: "48 hours" },
          ],
          quote:
            "The ICO inquiry was a wake-up call. GymWyse gave us provable GDPR compliance and our insurance premium dropped back down. The DPA being included by default is how it should be everywhere.",
          author: "Sarah Mitchell",
          role: "Founder, Core Collective",
        },
      ]}
      comparison={{
        competitor: "Mindbody UK",
        rows: [
          {
            feature: "Monthly Pricing",
            gymwyse: "£79/location",
            competitor: "£129/location",
          },
          {
            feature: "BACS Direct Debit",
            gymwyse: "Native (included)",
            competitor: "Add-on (£40/mo extra)",
          },
          {
            feature: "UK Data Hosting",
            gymwyse: "AWS London (eu-west-2)",
            competitor: "US servers",
          },
          {
            feature: "VAT Reports",
            gymwyse: "Built-in + MTD ready",
            competitor: "Manual export only",
          },
          {
            feature: "Setup Fee",
            gymwyse: "£0",
            competitor: "£500+",
          },
          {
            feature: "Contract Length",
            gymwyse: "Monthly (cancel anytime)",
            competitor: "12-month minimum",
          },
        ],
        switchReasons: [
          "Save £600/year on subscription fees (£50/month difference per location)",
          "Save £480/year on Direct Debit add-on costs (£40/month eliminated)",
          "Save £500+ on setup fees — GymWyse has zero setup costs",
          "Total Year 1 savings: £1,580+ per location — most gyms break even in the first month",
        ],
      }}
      trends={[
        {
          title: "Active Ageing Programs",
          description:
            "The over-60 segment is the fastest-growing demographic in UK fitness, with participation up 24% since 2022. GymWyse supports senior-friendly class scheduling, accessibility tagging, and age-segmented retention tracking to help gyms capture this expanding market.",
        },
        {
          title: "Longevity-Focused Retention",
          description:
            "UK members increasingly prioritise sustainable, long-term fitness over quick results. GymWyse's plateau detection and progress tracking tools help coaches identify members at risk of disengagement before they cancel — reducing churn by keeping members motivated through measurable progress.",
        },
        {
          title: "Hybrid Memberships",
          description:
            "The studio + outdoor + virtual model is now standard across UK boutique fitness. GymWyse's flexible membership builder lets operators create hybrid tiers that combine in-studio classes, outdoor sessions, and on-demand content — all tracked under a single membership with unified attendance analytics.",
        },
      ]}
      faq={[
        {
          question: "How does BACS Direct Debit work with GymWyse?",
          answer:
            "GymWyse integrates natively with GoCardless for BACS Direct Debit. When a member signs up, they complete a Direct Debit mandate online. Collections are automated on your chosen schedule, with smart retry logic for failed payments. You get real-time reconciliation and can see pending, collected, and failed payments in one dashboard. No third-party add-ons or extra fees required.",
        },
        {
          question: "Is GymWyse fully GDPR compliant?",
          answer:
            "Yes. All member data is hosted on AWS London (eu-west-2) and never leaves UK jurisdiction. Every GymWyse subscription includes a Data Processing Agreement (DPA) at no extra cost. We provide one-click right to erasure, automated consent management, full audit trails, and regular penetration testing. We are SOC 2 Type II compliant.",
        },
        {
          question: "Does GymWyse handle VAT automatically?",
          answer:
            "Yes. GymWyse automatically calculates 20% VAT on applicable items and supports reduced and zero-rated categories. Reports are Making Tax Digital (MTD) compatible, so you can submit directly to HMRC. We also integrate with Xero and QuickBooks for automated invoice and payment syncing.",
        },
        {
          question: "Is all pricing in GBP?",
          answer:
            "Absolutely. All GymWyse pricing for UK customers is in British Pounds with no currency conversion fees. Your members see GBP amounts on their Direct Debit mandates, invoices, and receipts. Your reporting and accounting exports are all in GBP.",
        },
        {
          question: "Can GymWyse support multiple UK locations?",
          answer:
            "Yes. Our Growth plan is designed for multi-location operators (2-5 sites) at £63/location/month. You get a unified dashboard showing revenue, attendance, and churn across all locations, plus per-location drill-downs. For 6+ locations, contact us for Enterprise pricing with dedicated account management.",
        },
        {
          question: "How does GymWyse support Active Ageing programs?",
          answer:
            "GymWyse includes senior-friendly class scheduling with accessibility tags, age-segmented retention analytics, and the ability to create targeted membership tiers for the over-60 demographic. You can track participation trends, set capacity limits for accessible sessions, and run targeted marketing campaigns to this growing segment.",
        },
        {
          question: "How do I migrate from Mindbody to GymWyse?",
          answer:
            "We provide a dedicated migration team that handles the entire process. We export your member data, payment mandates, class schedules, and historical records from Mindbody. Most single-location migrations complete within 48 hours, and multi-location migrations within 5 business days. We run both systems in parallel during the transition so you never miss a payment.",
        },
        {
          question: "What payment methods does GymWyse support in the UK?",
          answer:
            "GymWyse supports BACS Direct Debit (via GoCardless), all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and manual/cash payments. Direct Debit is the recommended method for recurring memberships due to its significantly lower failure rates (3% vs 8% for cards).",
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
