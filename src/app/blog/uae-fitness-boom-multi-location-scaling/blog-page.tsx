"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Building2,
  Globe,
  BarChart3,
  Shield,
  DollarSign,
  Users,
  CalendarDays,
  TrendingUp,
  MapPin,
  BookOpen,
  CheckCircle2,
  Star,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   JSON-LD Structured Data
   ──────────────────────────────────────────────────────────── */

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What currencies does GymWyse support for UAE and GCC gym billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GymWyse supports multi-currency billing across AED (UAE Dirham), SAR (Saudi Riyal), QAR (Qatari Riyal), BHD (Bahraini Dinar), and KWD (Kuwaiti Dinar). Each location bills members in local currency while your portfolio dashboard consolidates everything into a single reporting currency of your choice.",
      },
    },
    {
      "@type": "Question",
      name: "Does GymWyse comply with UAE and Saudi data hosting regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GymWyse offers local data hosting in both the UAE and Saudi Arabia, meeting UAE Information Assurance Standards and the Saudi Personal Data Protection Law (PDPL). Member data stays in-region, and all payment processing follows local compliance frameworks including DIFC and QFC regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How does GymWyse handle Ramadan scheduling across multiple locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GymWyse includes a Ramadan scheduling mode that automatically adjusts class times, staffing rosters, and member notifications across all locations based on local Iftar and Suhoor timings. The system also manages reduced operating hours, shifts peak classes to post-Iftar windows, and provides Ramadan-specific analytics to track attendance pattern changes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I manage VIP and luxury membership tiers across different UAE locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. GymWyse supports unlimited membership tiers with location-specific pricing, cross-location access controls, and VIP amenity tracking. You can create platinum-level memberships that grant access to all locations while maintaining exclusive perks like private training suites, spa credits, and priority class booking at each individual site.",
      },
    },
    {
      "@type": "Question",
      name: "What ROI can a multi-location UAE gym expect from switching to GymWyse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on our partner data, a 3-location UAE gym portfolio typically saves $2,400 per month per location through automated billing recovery, reduced admin overhead, and optimized scheduling. That totals $86,400 per year in savings, not including the revenue uplift from better member retention and data-driven pricing adjustments.",
      },
    },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Scale a Gym Business Across the UAE and GCC",
  description:
    "A step-by-step guide for gym operators expanding across Dubai, Abu Dhabi, Riyadh, and Doha with multi-currency billing, local compliance, and portfolio-wide analytics.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit Your Current Operations",
      text: "Evaluate per-location P&L, identify revenue leakage from failed payments, and benchmark each site against regional averages for member acquisition cost and lifetime value.",
    },
    {
      "@type": "HowToStep",
      name: "Establish Local Compliance",
      text: "Set up local data hosting to meet UAE and Saudi regulations, configure VAT-compliant invoicing for each jurisdiction, and ensure member data handling follows PDPL and DIFC requirements.",
    },
    {
      "@type": "HowToStep",
      name: "Configure Multi-Currency Billing",
      text: "Enable AED, SAR, and QAR billing for each location. Set up automated currency conversion for consolidated reporting and configure location-specific payment gateways.",
    },
    {
      "@type": "HowToStep",
      name: "Build Your Portfolio Dashboard",
      text: "Connect all locations to a unified command center. Configure portfolio-wide KPIs including cross-location member flow, aggregate revenue tracking, and comparative performance metrics.",
    },
    {
      "@type": "HowToStep",
      name: "Launch and Optimize",
      text: "Roll out location by location, train local staff on the platform, and use AI-driven insights to continuously optimize pricing, scheduling, and retention across your entire portfolio.",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   Comparison Table Data
   ──────────────────────────────────────────────────────────── */

const comparisonRows = [
  {
    feature: "Multi-Currency Billing",
    legacy: "Manual invoicing per country, spreadsheet reconciliation",
    gymwyse: "Automatic AED/SAR/QAR billing with real-time FX consolidation",
  },
  {
    feature: "Cross-Location Reporting",
    legacy: "Weekly email reports stitched together in Excel",
    gymwyse: "Live portfolio dashboard with per-location drill-down",
  },
  {
    feature: "Regulatory Compliance",
    legacy: "Consultant fees, manual audits, risk of non-compliance",
    gymwyse: "Built-in local data hosting, automated VAT, PDPL-ready",
  },
  {
    feature: "Ramadan Scheduling",
    legacy: "Manual timetable changes, staff confusion, member complaints",
    gymwyse: "Auto-adjusted schedules synced to local Iftar timings",
  },
  {
    feature: "Failed Payment Recovery",
    legacy: "Staff phone calls, awkward conversations, 15% recovery rate",
    gymwyse: "AI-driven retry logic, smart dunning sequences, 40% recovery",
  },
  {
    feature: "VIP Membership Management",
    legacy: "Separate systems per location, no cross-access tracking",
    gymwyse: "Unified VIP tiers with cross-location access and amenity tracking",
  },
  {
    feature: "Member Churn Prediction",
    legacy: "React after cancellation, no early warning system",
    gymwyse: "AI flags at-risk members 30 days early across all locations",
  },
];

/* ────────────────────────────────────────────────────────────
   FAQ Component
   ──────────────────────────────────────────────────────────── */

const faqItems = [
  {
    question: "What currencies does GymWyse support for UAE and GCC gym billing?",
    answer:
      "GymWyse supports multi-currency billing across AED (UAE Dirham), SAR (Saudi Riyal), QAR (Qatari Riyal), BHD (Bahraini Dinar), and KWD (Kuwaiti Dinar). Each location bills members in local currency while your portfolio dashboard consolidates everything into a single reporting currency of your choice. Exchange rate updates happen automatically, and historical rate locking ensures your financial reports stay accurate month over month.",
  },
  {
    question: "Does GymWyse comply with UAE and Saudi data hosting regulations?",
    answer:
      "Yes. GymWyse offers local data hosting in both the UAE and Saudi Arabia, meeting UAE Information Assurance Standards and the Saudi Personal Data Protection Law (PDPL). Member data stays in-region, and all payment processing follows local compliance frameworks. For operators in free zones, we also support DIFC and QFC regulatory requirements, giving you coverage whether your entity is onshore or in a free zone.",
  },
  {
    question: "How does GymWyse handle Ramadan scheduling across multiple locations?",
    answer:
      "GymWyse includes a dedicated Ramadan scheduling mode that automatically adjusts class times, staffing rosters, and member notifications across all locations based on local Iftar and Suhoor timings. The system manages reduced operating hours, shifts peak classes to post-Iftar windows, and provides Ramadan-specific analytics to track attendance pattern changes. You can pre-configure your Ramadan schedule weeks in advance, and the system handles the rest, including automatic revert to normal scheduling once Ramadan ends.",
  },
  {
    question: "Can I manage VIP and luxury membership tiers across different UAE locations?",
    answer:
      "Absolutely. GymWyse supports unlimited membership tiers with location-specific pricing, cross-location access controls, and VIP amenity tracking. You can create platinum-level memberships that grant access to all locations while maintaining exclusive perks like private training suites, spa credits, and priority class booking at each individual site. The system also tracks VIP utilization and lifetime value separately, so you can see exactly how your premium segment performs compared to standard memberships.",
  },
  {
    question: "What ROI can a multi-location UAE gym expect from switching to GymWyse?",
    answer:
      "Based on our partner data, a 3-location UAE gym portfolio typically saves $2,400 per month per location through automated billing recovery, reduced admin overhead, and optimized scheduling. That totals $86,400 per year in direct savings. On top of that, gyms using our AI retention tools see an average 23% reduction in churn, which for a 1,000-member-per-location portfolio translates to an additional 69 retained members per month across all sites. At an average membership value of $150/month, that is over $124,000 in preserved annual revenue.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
            aria-expanded={openIndex === i}
          >
            <span className="text-pure-white font-semibold pr-4 group-hover:text-electric-green transition-colors duration-200">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-electric-green" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 text-cool-gray leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Blog Page Component
   ──────────────────────────────────────────────────────────── */

export function UAEFitnessBoomPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />

      <main className="bg-deep-space">
        {/* ── Hero Section ── */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
                  Market Expansion
                </span>
                <span className="text-xs text-dim-gray flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  12 min read
                </span>
                <span className="text-xs text-dim-gray flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  December 10, 2025
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
                The UAE Fitness Boom: Multi-Location Scaling Strategy for 2026
              </h1>

              <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-3xl">
                Navigating Dubai, Abu Dhabi, and Riyadh expansion with
                multi-currency billing, local data hosting, and portfolio-wide
                P&L management.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-electric-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-pure-white">
                    GymWyse Product Team
                  </p>
                  <p className="text-xs text-dim-gray">
                    Multi-Location Strategy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Direct Answer Section ── */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="glass-card p-8 border border-electric-green/20">
                <p className="text-lg md:text-xl text-soft-white leading-relaxed">
                  <strong className="text-electric-green">
                    Scaling a gym business across the UAE and GCC
                  </strong>{" "}
                  requires three capabilities most legacy platforms lack:
                  multi-currency billing that handles AED, SAR, and QAR
                  simultaneously, local data hosting that satisfies UAE and
                  Saudi compliance mandates, and a portfolio-wide P&L dashboard
                  that gives you real-time visibility across every location from
                  a single screen. Without all three, expansion creates more
                  operational drag than revenue growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Market Context Section ── */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Why 2026 Is the Year to Scale in the Gulf
            </h2>

            <div className="prose-custom space-y-5 text-soft-white leading-relaxed">
              <p>
                The GCC fitness market is on an unprecedented trajectory. The
                UAE alone is expected to surpass $2.5 billion in fitness
                industry revenue by 2027, driven by government-backed health
                initiatives, a young and affluent population, and a post-pandemic
                culture shift toward premium wellness experiences. Saudi
                Arabia&apos;s Vision 2030 program has allocated substantial
                investment to sports infrastructure, with the Kingdom targeting
                a 40% physical activity participation rate among its citizens.
                Qatar, buoyed by post-World Cup infrastructure and tourism
                momentum, is positioning Doha as a regional wellness hub.
              </p>

              <p>
                For gym operators already running successful single-location
                businesses, the expansion math is compelling. Dubai&apos;s
                population grew by over 100,000 residents in 2024 alone, many of
                them high-income professionals who expect premium fitness
                facilities. Abu Dhabi is investing heavily in Saadiyat Island and
                Yas Island communities, each representing thousands of new
                potential members within walking distance of a well-placed gym.
                Riyadh&apos;s new entertainment districts and giga-projects are
                creating entirely new neighborhoods that have zero existing
                fitness infrastructure.
              </p>

              <p>
                But here is the catch that trips up most operators: what works
                for a single gym in Dubai Marina does not automatically translate
                to a second location in Abu Dhabi, let alone a third in Riyadh.
                Each market has its own regulatory framework, currency, cultural
                expectations, and operating rhythm. Ramadan scheduling alone can
                throw a wrench into your entire quarterly plan if your systems
                are not built for it. The operators who scale successfully are
                the ones who solve the operational complexity first and expand
                second.
              </p>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { stat: "$2.5B+", label: "UAE fitness market by 2027" },
                { stat: "40%", label: "Saudi Vision 2030 activity target" },
                { stat: "100K+", label: "New Dubai residents in 2024" },
                { stat: "3x", label: "GCC gym openings vs. 2020" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                    {item.stat}
                  </p>
                  <p className="text-xs text-cool-gray mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Multi-Location Challenge ── */}
        <section className="py-16 md:py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              The Multi-Location Challenge Nobody Talks About
            </h2>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                Opening your second or third location feels like it should be
                straightforward. You have a proven model, a brand that members
                trust, and enough revenue to fund the expansion. The problem is
                not building the gym. The problem is managing the portfolio.
              </p>

              <p>
                We have spoken with over 50 multi-location gym operators across
                the GCC, and the same pain points surface every time. Finance
                teams spend an average of 12 hours per week reconciling revenue
                across locations that bill in different currencies. Scheduling
                managers maintain separate spreadsheets for each site because
                their existing software cannot handle location-specific
                operating hours, let alone Ramadan adjustments. Membership data
                lives in silos, making it impossible to track a VIP member who
                uses three different locations or to understand aggregate churn
                rates across the portfolio.
              </p>

              <p>
                The cost of this fragmentation is real. Our data shows that
                multi-location gym operators using disconnected systems lose an
                average of $2,400 per month per location in operational
                inefficiency, failed payment leakage, and missed retention
                opportunities. For a three-location portfolio, that is $86,400
                per year dripping out of the business before you even consider
                the opportunity cost of decisions made on incomplete data.
              </p>

              <p>
                Then there are the region-specific complexities. The UAE
                requires 5% VAT on gym memberships and must issue
                Federal Tax Authority compliant invoices. Saudi Arabia enforces
                its own VAT regime at 15% and recently strengthened the Personal
                Data Protection Law (PDPL), which carries significant penalties
                for non-compliance. If you are operating in a free zone like
                DIFC or QFC, you face an additional layer of regulatory
                requirements around data handling and financial reporting.
                Arabic language support is not a nice-to-have for member
                communications; it is a regulatory and practical necessity across
                the region.
              </p>
            </div>

            {/* Challenge Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Multi-Currency Chaos",
                  desc: "AED, SAR, and QAR billing across locations with manual FX reconciliation eating 12+ hours per week.",
                },
                {
                  icon: Shield,
                  title: "Compliance Landmines",
                  desc: "UAE VAT, Saudi PDPL, DIFC/QFC regulations, and local data hosting mandates vary by jurisdiction.",
                },
                {
                  icon: Users,
                  title: "Fragmented Member Data",
                  desc: "VIP members using multiple locations are invisible when each site runs its own system.",
                },
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 space-y-3">
                  <div className="p-2 rounded-lg bg-electric-green/10 inline-flex">
                    <card.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How the Command Center Solves This ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              How the Command Center Solves This
            </h2>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                GymWyse&apos;s Command Center was built specifically for
                multi-location operators who need to see their entire portfolio
                on a single screen without sacrificing location-level detail.
                At its core is the{" "}
                <strong className="text-electric-green">
                  Portfolio-Wide P&L Hub
                </strong>
                , a dashboard metric that aggregates revenue, expenses, and
                profit margin data across every location in your portfolio and
                presents it in real time with the ability to drill down into any
                individual site.
              </p>

              <p>
                The Portfolio-Wide P&L Hub does not just add up numbers. It
                normalizes currency differences automatically, converting AED,
                SAR, and QAR figures into your chosen reporting currency at
                daily-updated exchange rates while preserving the original local
                currency data for each location&apos;s individual reports. You
                see consolidated revenue and per-location revenue side by side.
                You see which location has the highest member acquisition cost
                and which has the best retention rate. You see where failed
                payments are concentrated and whether your recovery sequences
                are performing consistently or if one location is
                underperforming.
              </p>

              <p>
                Beyond the P&L Hub, the Command Center handles the operational
                complexity that makes multi-location management in the Gulf
                uniquely difficult. The Ramadan scheduling engine pre-configures
                adjusted timetables for each location based on local sunset
                times, automatically shifting peak classes to post-Iftar
                windows and reducing morning session capacity during the fasting
                period. Staff rosters adjust accordingly. Member notifications
                go out in both English and Arabic, with the language preference
                pulled from each member&apos;s profile.
              </p>

              <p>
                VIP membership management becomes seamless when all locations
                feed into a single system. A platinum member who trains at your
                Dubai Marina location three times a week and drops into your Abu
                Dhabi site on weekends is visible as one member with one
                lifetime value, not two separate records. Cross-location access
                controls ensure they can use the private training suite they are
                paying for at every location, and their spa credits, personal
                training packages, and loyalty points follow them wherever they
                go.
              </p>
            </div>

            {/* Command Center Feature Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: "Portfolio-Wide P&L Hub",
                  desc: "Consolidated revenue, expense, and margin data across all locations with real-time currency normalization and per-site drill-down capabilities.",
                },
                {
                  icon: DollarSign,
                  title: "Multi-Currency Engine",
                  desc: "Automatic AED, SAR, and QAR billing with daily FX rate updates, local payment gateway integration, and unified financial reporting.",
                },
                {
                  icon: CalendarDays,
                  title: "Ramadan Scheduling Mode",
                  desc: "Pre-configured timetable adjustments synced to local Iftar timings, automatic staff roster changes, and bilingual member notifications.",
                },
                {
                  icon: Users,
                  title: "Unified VIP Management",
                  desc: "Single member profile across all locations with cross-access controls, amenity tracking, and portfolio-wide loyalty point accumulation.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass-card p-6 space-y-3 border border-glass-border hover:border-electric-green/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-electric-green/10">
                      <feature.icon className="w-5 h-5 text-electric-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-pure-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-16 md:py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Legacy Manual Management vs. GymWyse AI Management
            </h2>

            <p className="text-soft-white leading-relaxed">
              The difference between managing a multi-location Gulf portfolio
              manually and running it through a purpose-built platform is not
              incremental. It is structural. Here is what changes across every
              major operational dimension.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left p-4 text-sm font-semibold text-pure-white">
                      Capability
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-alert-red">
                      Legacy Manual Management
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-electric-green">
                      GymWyse AI Management
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-glass-border last:border-0"
                    >
                      <td className="p-4 text-sm font-medium text-pure-white">
                        {row.feature}
                      </td>
                      <td className="p-4 text-sm text-cool-gray">
                        {row.legacy}
                      </td>
                      <td className="p-4 text-sm text-soft-white">
                        {row.gymwyse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row, i) => (
                <div key={i} className="glass-card p-5 space-y-3">
                  <h3 className="text-sm font-semibold text-pure-white">
                    {row.feature}
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-medium text-alert-red mb-1">
                        Legacy Manual Management
                      </p>
                      <p className="text-sm text-cool-gray">{row.legacy}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-electric-green mb-1">
                        GymWyse AI Management
                      </p>
                      <p className="text-sm text-soft-white">{row.gymwyse}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI Calculation Section ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              The ROI Math for Multi-Location UAE Gyms
            </h2>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                Let us walk through the numbers for a realistic three-location
                UAE gym portfolio: one in Dubai Marina, one in Abu Dhabi&apos;s
                Saadiyat Island, and one in Riyadh&apos;s King Abdullah
                Financial District. Each location has approximately 800
                members with an average membership price of $150 per month.
              </p>
            </div>

            {/* ROI Breakdown Card */}
            <div className="glass-card p-8 border border-electric-green/20 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-electric-green/10">
                  <TrendingUp className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-xl font-bold text-pure-white">
                  Annual Savings Breakdown
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Failed Payment Recovery",
                    calc: "3 locations x $800/mo recovered",
                    total: "$28,800/year",
                  },
                  {
                    label: "Admin Time Savings",
                    calc: "3 locations x $900/mo in staff hours",
                    total: "$32,400/year",
                  },
                  {
                    label: "Scheduling Optimization",
                    calc: "3 locations x $400/mo in utilization gains",
                    total: "$14,400/year",
                  },
                  {
                    label: "Compliance Automation",
                    calc: "3 locations x $300/mo vs. consultant fees",
                    total: "$10,800/year",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-glass-border last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-pure-white">
                        {item.label}
                      </p>
                      <p className="text-xs text-cool-gray">{item.calc}</p>
                    </div>
                    <p className="text-lg font-bold text-electric-green font-mono mt-1 sm:mt-0">
                      {item.total}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-electric-green/30 flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-pure-white">
                    Total Annual Savings
                  </p>
                  <p className="text-sm text-cool-gray">
                    3 locations x $2,400/mo = $86,400/year
                  </p>
                </div>
                <p className="text-3xl font-bold text-electric-green font-mono mt-2 sm:mt-0">
                  $86,400
                </p>
              </div>
            </div>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                That $86,400 represents direct operational savings. It does not
                include the revenue preservation from improved retention. Our
                AI churn prediction model reduces member cancellations by an
                average of 23% across partner gyms. For a portfolio of 2,400
                total members with an average monthly churn rate of 5%, that
                means saving approximately 28 members per month from
                cancellation, or 336 members per year. At $150 per month
                average membership value, those retained members represent{" "}
                <strong className="text-electric-green">
                  $604,800 in preserved annual revenue
                </strong>
                .
              </p>

              <p>
                Combined, the operational savings and revenue preservation
                deliver a return that makes the platform investment negligible
                in comparison. And for operators planning a fourth or fifth
                location, the savings compound because every new site plugs into
                the same Command Center infrastructure without requiring
                additional admin headcount.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  <DollarSign className="w-4 h-4" />
                  Calculate Your Exact ROI
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  See It in Action
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Regional Compliance Deep Dive ── */}
        <section className="py-16 md:py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Regional Compliance: What You Need to Know
            </h2>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                Compliance is not glamorous, but in the GCC it can make or
                break your expansion. Each jurisdiction has distinct
                requirements, and getting them wrong carries real penalties.
                Here is what multi-location operators need to have in place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "UAE (Dubai & Abu Dhabi)",
                  items: [
                    "5% VAT on gym memberships with FTA-compliant invoicing",
                    "Local data hosting meeting UAE IA Standards",
                    "DIFC/ADGM compliance for free zone entities",
                    "Arabic language support in member-facing communications",
                    "Dubai Sports Council licensing requirements",
                  ],
                },
                {
                  icon: MapPin,
                  title: "Saudi Arabia (Riyadh & Jeddah)",
                  items: [
                    "15% VAT with ZATCA e-invoicing compliance",
                    "Saudi PDPL data protection and in-Kingdom hosting",
                    "Vision 2030 Quality of Life program alignment",
                    "Gender-separated facility management requirements",
                    "GACA approval for foreign fitness brand operations",
                  ],
                },
                {
                  icon: MapPin,
                  title: "Qatar (Doha)",
                  items: [
                    "QFC regulatory framework for free zone operations",
                    "Qatar National Vision 2030 health sector alignment",
                    "Local payment gateway integration (QPay)",
                    "Bilingual Arabic/English member communication",
                    "Qatar Sports Authority facility standards",
                  ],
                },
                {
                  icon: MapPin,
                  title: "Cross-Border Considerations",
                  items: [
                    "Multi-currency reconciliation and reporting",
                    "Transfer pricing documentation across entities",
                    "Cross-border member data handling protocols",
                    "Consolidated group financial reporting",
                    "Regional franchise and licensing structures",
                  ],
                },
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sapphire-blue/10">
                      <card.icon className="w-5 h-5 text-sapphire-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-pure-white">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-cool-gray"
                      >
                        <CheckCircle2 className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-soft-white leading-relaxed">
              GymWyse handles all of this out of the box. Local data hosting
              is pre-configured for both the UAE and Saudi Arabia. VAT
              calculations are jurisdiction-aware and update automatically
              when rates change. Invoices generate in the correct format for
              each tax authority. And Arabic language support is baked into
              every member-facing touchpoint, from push notifications to
              billing statements.
            </p>
          </div>
        </section>

        {/* ── Luxury Amenity & Cultural Considerations ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Luxury Amenities, VIP Tiers, and Cultural Nuance
            </h2>

            <div className="space-y-5 text-soft-white leading-relaxed">
              <p>
                The GCC fitness market is not just growing. It is premiumizing.
                Members in Dubai, Abu Dhabi, and Riyadh increasingly expect
                luxury-grade experiences: private training suites, recovery
                rooms with cryotherapy and infrared saunas, dedicated ladies-only
                floors, valet parking, and concierge-level service at the front
                desk. For multi-location operators, this creates a complex
                amenity management challenge that compounds with every new site.
              </p>

              <p>
                GymWyse lets you configure unlimited membership tiers with
                location-specific amenity bundles. Your Dubai Marina platinum
                tier might include access to a rooftop recovery lounge, while
                your Riyadh platinum tier includes a dedicated prayer room,
                private changing suites, and complimentary valet. The system
                tracks amenity utilization per member and per tier, showing you
                exactly which perks drive upgrades and which go unused.
              </p>

              <p>
                Cultural programming is another differentiator that
                multi-location operators in the Gulf must get right. Ladies-only
                hours, Ramadan operating schedules, Eid holiday programming, and
                Arabic-first communication preferences are not optional features
                in this market. They are table stakes. GymWyse automates all of
                this: Ramadan timetables adjust based on local sunset times,
                class descriptions publish in both Arabic and English, and
                gender-specific scheduling rules are enforced automatically at
                the facility level. This is the kind of operational detail that
                earns member loyalty and, more importantly, prevents the
                cultural missteps that can damage a brand in a tight-knit
                community.
              </p>

              <p>
                Local partnerships also play a critical role in GCC expansion.
                Corporate wellness programs with major employers, tie-ups with
                luxury hotel chains for guest access, and collaboration with
                government sports councils for community events are all revenue
                channels that a smart multi-location operator should be
                pursuing. GymWyse&apos;s partnership management module tracks
                referral sources, corporate billing, and partner-specific
                reporting so you can see exactly which relationships are
                driving growth and which are costing more than they return.
              </p>
            </div>
          </div>
        </section>

        {/* ── Expert Commentary Block ── */}
        <section className="py-16 md:py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass-card p-8 md:p-10 border border-sapphire-blue/20 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-sapphire-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sapphire-blue/10">
                    <Building2 className="w-6 h-6 text-sapphire-blue" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-pure-white">
                      Insights from GymWyse Product Team
                    </h2>
                    <p className="text-sm text-sapphire-blue">
                      Multi-Location Strategy
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-soft-white leading-relaxed">
                  <p>
                    &ldquo;We built the Command Center after spending six months
                    embedded with multi-location operators across the GCC. The
                    pattern was always the same: talented gym owners with a
                    proven single-location model who were drowning in
                    operational complexity the moment they opened a second site.
                    Their existing tools were not designed for multi-currency
                    billing, multi-jurisdiction compliance, or the cultural
                    nuances that define the Gulf fitness market.&rdquo;
                  </p>

                  <p>
                    &ldquo;The biggest insight was that portfolio-level
                    visibility is not a nice-to-have. It is the difference
                    between operators who scale to five locations profitably and
                    those who stall at two. When you can see every location&apos;s
                    P&L on one screen, in one currency, updated in real time,
                    your decision-making fundamentally changes. You stop
                    reacting to problems and start anticipating them. That
                    shift alone is worth more than any single feature we
                    ship.&rdquo;
                  </p>

                  <p>
                    &ldquo;The GCC fitness market is entering a golden era. The
                    demand is there, the infrastructure investment is there, and
                    the consumer willingness to pay premium prices is there. The
                    operators who will capture this opportunity are the ones who
                    treat expansion as a systems problem, not just a real estate
                    problem. Build the operational backbone first, and the
                    growth follows.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Step-by-Step Scaling Framework ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Your 5-Step Scaling Framework
            </h2>

            <p className="text-soft-white leading-relaxed">
              Whether you are going from one location to three or from three to
              ten, the scaling playbook follows the same sequence. Here is the
              framework that the fastest-growing GCC gym portfolios use.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Audit Your Current Operations",
                  desc: "Before you sign a lease, get your existing location running on clean data. Evaluate per-service P&L, identify revenue leakage from failed payments, and benchmark your member acquisition cost and lifetime value against regional averages. If your single location is not optimized, expansion will amplify the problems.",
                },
                {
                  step: "02",
                  title: "Establish Local Compliance Infrastructure",
                  desc: "Set up local data hosting, configure VAT-compliant invoicing for each target jurisdiction, and ensure your member data handling meets PDPL and DIFC requirements before you start collecting member information. Retrofitting compliance is ten times more expensive than building it in from day one.",
                },
                {
                  step: "03",
                  title: "Configure Multi-Currency Billing",
                  desc: "Enable AED, SAR, and QAR billing for each location with automated currency conversion for consolidated reporting. Set up location-specific payment gateways that support local card networks and preferred payment methods including Apple Pay, Samsung Pay, and regional digital wallets.",
                },
                {
                  step: "04",
                  title: "Build Your Portfolio Dashboard",
                  desc: "Connect all locations to a unified Command Center. Configure portfolio-wide KPIs including cross-location member flow, aggregate revenue tracking, and comparative performance metrics. This is your early warning system for underperforming locations and your compass for resource allocation decisions.",
                },
                {
                  step: "05",
                  title: "Launch, Learn, and Optimize",
                  desc: "Roll out location by location, not all at once. Train local staff on the platform, seed each new location with VIP members from your existing sites for immediate social proof, and use AI-driven insights to continuously optimize pricing, scheduling, and retention across the portfolio.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 flex gap-5"
                >
                  <div className="shrink-0">
                    <span className="text-3xl font-bold text-electric-green/30 font-mono">
                      {item.step}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-pure-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="py-16 md:py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Frequently Asked Questions
            </h2>
            <p className="text-soft-white leading-relaxed">
              Answers to the most common questions from gym operators expanding
              across the UAE and GCC.
            </p>
            <FAQAccordion />
          </div>
        </section>

        {/* ── Bottom CTA Section ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Ready to Scale Across the Gulf?
            </h2>
            <p className="text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
              Join the multi-location operators already using GymWyse to manage
              portfolios across Dubai, Abu Dhabi, Riyadh, and Doha. See your
              entire business on one screen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/demo">
                <Button variant="primary" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="xl">
                  <DollarSign className="w-4 h-4" />
                  Calculate Your ROI
                </Button>
              </Link>
              <Link href="/ae">
                <Button variant="outline" size="xl">
                  <Globe className="w-4 h-4" />
                  UAE Region Page
                </Button>
              </Link>
            </div>
            <p className="text-xs text-dim-gray pt-2">
              No credit card required. 14-day free trial. Cancel anytime.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
