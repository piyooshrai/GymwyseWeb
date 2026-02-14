"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Users,
  Building2,
  CheckCircle,
  Mail,
  Phone,
  Play,
} from "lucide-react";
import { ROICalculator } from "@/components/roi-calculator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
      >
        <span className="text-base font-medium text-pure-white pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-electric-green" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-glass-border pt-4">
                <p className="text-sm text-cool-gray leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqItems = [
  {
    question: "Is this calculator accurate for my gym size?",
    answer:
      "Yes. The calculator works for gyms with 50 to 5,000 members. Larger gyms see proportionally higher savings because churn reduction and failed payment recovery scale with member count. Smaller gyms still see 1,000%+ ROI because GymWyse's flat pricing means the platform cost stays low while recovered revenue adds up.",
  },
  {
    question: "What if my churn rate is already low (under 2%)?",
    answer:
      "You will still benefit from failed payment recovery, labor savings, and better financial visibility. Even gyms with low churn save $200 to $400 per month from payment recovery and automated reporting alone. The calculator accounts for this — enter your actual churn rate and the results adjust accordingly.",
  },
  {
    question: "Does this include setup costs?",
    answer:
      "Yes. GymWyse has $0 setup fees. Competitors charge $300 to $500 for onboarding and data migration. We factor that into Year 1 savings. You also avoid contract lock-in penalties since GymWyse is month-to-month.",
  },
  {
    question: "What if I don't know my current churn rate?",
    answer:
      "Use the industry average of 3.5% monthly. This is the median churn rate across independent gyms and boutique studios in the US, UK, and Australia. After switching to GymWyse, you will know your exact churn rate within 24 hours — the dashboard calculates it automatically from your member data.",
  },
  {
    question: "How long until I see these savings?",
    answer:
      "Immediate savings come from lower subscription costs (day one). Failed payment recovery kicks in within your first billing cycle (30 days). Churn reduction typically shows measurable results in 60 to 90 days as the AI model learns your specific member patterns. Most gyms see full ROI realization within 90 days.",
  },
  {
    question: "What if my results show negative ROI?",
    answer:
      "Highly unlikely. If your gym has fewer than 50 members or already uses free software with no failed payments, GymWyse might not produce significant savings. For 99% of gyms with 100+ members, ROI exceeds 500%. The calculator is conservative — most gyms see higher real-world ROI than predicted because they discover revenue leaks they did not know existed.",
  },
  {
    question: "Does this work for multi-location gyms?",
    answer:
      "Yes. Enter your total member count and number of locations. The calculator adjusts for volume pricing ($79 per location for 2 to 5 locations, $69 for 6+). Multi-location gyms typically see the highest ROI because they benefit from unified reporting, cross-location analytics, and eliminated manual consolidation work.",
  },
  {
    question: "Can I export this calculation for my accountant?",
    answer:
      "After your demo, we provide a detailed ROI breakdown PDF with all calculations, data sources, and assumptions cited. This is useful for presenting the business case to partners, investors, or your accountant before making the switch.",
  },
];

export function ROICalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Free ROI Calculator
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Calculate Your Gym Software ROI
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto leading-relaxed">
              See exactly how much GymWyse will save you vs Mindbody, Zen
              Planner, or Glofox. Most gyms save $500+ per month. Enter your
              numbers below and get an instant breakdown.
            </p>
          </motion.div>

          <div className="glass-card p-6 md:p-10">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* How the Calculator Works */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              How the Calculator Works
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The GymWyse ROI calculator uses real industry benchmarks to show
              your potential savings. No guesswork — just math.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Inputs */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-6">
                Inputs You Provide
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Number of active members",
                    example: "e.g., 520",
                    icon: Users,
                  },
                  {
                    label: "Current software cost",
                    example: "e.g., $129/month for Mindbody",
                    icon: DollarSign,
                  },
                  {
                    label: "Average membership fee",
                    example: "e.g., $87/month",
                    icon: DollarSign,
                  },
                  {
                    label: "Current monthly churn rate",
                    example: "e.g., 3.5% (industry average)",
                    icon: TrendingUp,
                  },
                  {
                    label: "Number of locations",
                    example: "e.g., 1",
                    icon: Building2,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-electric-green/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-electric-green" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-pure-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-dim-gray">{item.example}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What We Calculate */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-6">
                What We Calculate
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-medium text-electric-green mb-1">
                    Churn Reduction Savings
                  </div>
                  <p className="text-sm text-cool-gray">
                    Industry average churn with legacy software is 3.5% monthly.
                    GymWyse gyms average 2.3% with AI predictions. For a
                    520-member gym at $87/month, that is 6 members saved per
                    month — $522/month or $6,264/year.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-electric-green mb-1">
                    Failed Payment Recovery
                  </div>
                  <p className="text-sm text-cool-gray">
                    7% of gym revenue fails to collect each month. GymWyse
                    recovers 40% of failed payments through smart retry logic and
                    automated dunning. For $45K MRR, that is $1,267/month
                    recovered.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-electric-green mb-1">
                    No-Show Fee Collection
                  </div>
                  <p className="text-sm text-cool-gray">
                    Average gyms lose $800/month to uncollected late cancellation
                    and no-show fees. GymWyse automation collects 60% — $480/month
                    recovered.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-electric-green mb-1">
                    Labor Savings
                  </div>
                  <p className="text-sm text-cool-gray">
                    Automated dashboards and reporting save 8+ hours per week of
                    manual spreadsheet work. At $15/hour, that is $520/month in
                    staff time freed up.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Gym Examples */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Real Gym Examples
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Here is what the numbers look like for gyms that have already
              switched to GymWyse.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Example 1 */}
            <motion.div
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                  AP
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pure-white">
                    Apex Performance Lab
                  </h3>
                  <div className="text-xs text-dim-gray">
                    Los Angeles — 520 members, independent gym
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-1">
                    Before
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-cool-gray">
                      Software: Mindbody ($129/mo)
                    </div>
                    <div className="text-xs text-cool-gray">
                      Churn: 3.8% monthly
                    </div>
                    <div className="text-xs text-cool-gray">
                      Payment recovery: &lt;10%
                    </div>
                    <div className="text-xs text-cool-gray">
                      Reporting: 10 hrs/week manual
                    </div>
                  </div>
                </div>
                <div className="bg-electric-green/[0.05] rounded-lg p-4 border border-electric-green/20">
                  <div className="text-xs text-electric-green uppercase tracking-wider mb-1">
                    After
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-soft-white">
                      Software: GymWyse ($99/mo)
                    </div>
                    <div className="text-xs text-soft-white">
                      Churn: 2.1% monthly
                    </div>
                    <div className="text-xs text-soft-white">
                      Payment recovery: 42%
                    </div>
                    <div className="text-xs text-soft-white">
                      Reporting: 0 hrs (automated)
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Monthly benefit", value: "$4,000" },
                  { label: "Annual benefit", value: "$48,000" },
                  { label: "Year 1 ROI", value: "4,040%" },
                  { label: "Payback period", value: "< 1 week" },
                ].map((m, i) => (
                  <div key={i} className="text-center py-3">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-electric-green/30 pl-4">
                <p className="text-sm text-soft-white italic">
                  &ldquo;Saved $4,000/month. The churn alerts caught members we
                  would have lost.&rdquo;
                </p>
                <div className="text-xs text-dim-gray mt-2">
                  — Marcus Chen, Owner
                </div>
              </div>
            </motion.div>

            {/* Example 2 */}
            <motion.div
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-sapphire-blue/10 flex items-center justify-center text-sapphire-blue font-bold text-sm">
                  TF
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pure-white">
                    The Foundry
                  </h3>
                  <div className="text-xs text-dim-gray">
                    London — 4 locations, boutique chain
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-1">
                    Before
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-cool-gray">
                      Software: Mindbody (£516/mo for 4)
                    </div>
                    <div className="text-xs text-cool-gray">
                      No unified dashboard
                    </div>
                    <div className="text-xs text-cool-gray">
                      Churn tracking: manual
                    </div>
                    <div className="text-xs text-cool-gray">
                      Failed payments: noticed eventually
                    </div>
                  </div>
                </div>
                <div className="bg-electric-green/[0.05] rounded-lg p-4 border border-electric-green/20">
                  <div className="text-xs text-electric-green uppercase tracking-wider mb-1">
                    After
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-soft-white">
                      Software: GymWyse (£316/mo for 4)
                    </div>
                    <div className="text-xs text-soft-white">
                      One dashboard, all locations
                    </div>
                    <div className="text-xs text-soft-white">
                      Real-time churn alerts
                    </div>
                    <div className="text-xs text-soft-white">
                      42% payment recovery
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Monthly benefit", value: "£9,400" },
                  { label: "Annual benefit", value: "£112,800" },
                  { label: "Year 1 ROI", value: "2,984%" },
                  { label: "Subscription saved", value: "£200/mo" },
                ].map((m, i) => (
                  <div key={i} className="text-center py-3">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-sapphire-blue/30 pl-4">
                <p className="text-sm text-soft-white italic">
                  &ldquo;ROI was 2,800% in Year 1. We finally see all 4
                  locations in one dashboard.&rdquo;
                </p>
                <div className="text-xs text-dim-gray mt-2">
                  — James Sheridan, Operations Director
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              How We Compare to Competitors
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Side-by-side cost comparison with the most popular gym software
              platforms.
            </p>
          </motion.div>

          {/* Mindbody comparison */}
          <motion.div
            className="glass-card overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-6 border-b border-glass-border bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-pure-white">
                GymWyse vs Mindbody
              </h3>
            </div>
            {[
              {
                feature: "Monthly cost (1 location)",
                gymwyse: "$99",
                competitor: "$129",
                savings: "$30/month",
              },
              {
                feature: "Setup fee",
                gymwyse: "$0",
                competitor: "$500+",
                savings: "$500 one-time",
              },
              {
                feature: "Contract length",
                gymwyse: "Monthly",
                competitor: "12 months",
                savings: "No lock-in",
              },
              {
                feature: "Churn prediction",
                gymwyse: "AI-powered",
                competitor: "Not available",
                savings: "~$500/mo saved",
              },
              {
                feature: "Failed payment recovery",
                gymwyse: "Included",
                competitor: "Add-on ($50/mo)",
                savings: "$50/month",
              },
              {
                feature: "Revenue analytics",
                gymwyse: "Full module",
                competitor: "Basic reports",
                savings: "Worth $99/mo",
              },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 gap-4 p-5 ${
                  i < 5 ? "border-b border-glass-border" : ""
                } ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
              >
                <div className="text-sm text-soft-white font-medium">
                  {row.feature}
                </div>
                <div className="text-sm text-electric-green text-center font-medium">
                  {row.gymwyse}
                </div>
                <div className="text-sm text-cool-gray text-center">
                  {row.competitor}
                </div>
                <div className="text-sm text-electric-green text-center font-medium">
                  {row.savings}
                </div>
              </div>
            ))}
            <div className="p-5 bg-electric-green/[0.05] border-t border-electric-green/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-pure-white">
                  Year 1 Total Savings
                </span>
                <span className="text-xl font-bold text-electric-green font-mono">
                  $7,560+
                </span>
              </div>
            </div>
          </motion.div>

          {/* Zen Planner comparison */}
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 border-b border-glass-border bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-pure-white">
                GymWyse vs Zen Planner
              </h3>
            </div>
            {[
              {
                feature: "Monthly cost (1 location)",
                gymwyse: "$99",
                competitor: "$117",
                savings: "$18/month",
              },
              {
                feature: "Setup fee",
                gymwyse: "$0",
                competitor: "$300+",
                savings: "$300 one-time",
              },
              {
                feature: "Multi-location pricing",
                gymwyse: "$79/location",
                competitor: "$117/location",
                savings: "$38/location/mo",
              },
              {
                feature: "Churn tracking",
                gymwyse: "Automated AI",
                competitor: "Manual",
                savings: "6+ hrs/mo saved",
              },
              {
                feature: "Revenue analytics",
                gymwyse: "Full module",
                competitor: "Basic",
                savings: "Better visibility",
              },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 gap-4 p-5 ${
                  i < 4 ? "border-b border-glass-border" : ""
                } ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
              >
                <div className="text-sm text-soft-white font-medium">
                  {row.feature}
                </div>
                <div className="text-sm text-electric-green text-center font-medium">
                  {row.gymwyse}
                </div>
                <div className="text-sm text-cool-gray text-center">
                  {row.competitor}
                </div>
                <div className="text-sm text-electric-green text-center font-medium">
                  {row.savings}
                </div>
              </div>
            ))}
            <div className="p-5 bg-electric-green/[0.05] border-t border-electric-green/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-pure-white">
                  Year 1 Total Savings (single location)
                </span>
                <span className="text-xl font-bold text-electric-green font-mono">
                  $3,216+
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Our Calculator Is Different */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Why Most ROI Calculators Lie (And Ours Doesn&apos;t)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-8 border-l-4 border-l-alert-red"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-alert-red mb-4">
                What competitors show you
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                &ldquo;You&apos;ll save $30/month on subscription costs!&rdquo;
                That&apos;s it. They ignore setup fees ($300 to $500), contract
                lock-ins (12 months minimum), add-on costs for payment recovery
                and member apps, and the hidden revenue leaks from churn and
                failed payments that their software cannot detect.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 border-l-4 border-l-electric-green"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-electric-green mb-4">
                What GymWyse shows you
              </h3>
              <ul className="space-y-2">
                {[
                  "Actual subscription savings (GymWyse is cheaper upfront)",
                  "Zero setup fees (save $300-500 immediately)",
                  "No contracts (cancel anytime, no penalty)",
                  "Recovered revenue (churn prevention, failed payments)",
                  "Labor savings (automated reporting, no manual work)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 shrink-0" />
                    <span className="text-sm text-cool-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-sm text-soft-white mt-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our calculator is conservative. Most gyms see higher ROI than
            calculated because they discover revenue leaks they did not know
            existed, churn drops faster than predicted, and staff saves more time
            than estimated.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              What Happens After You Calculate
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "See Your Results",
                description:
                  "The calculator shows your monthly savings, annual ROI, and payback multiple instantly.",
                icon: Calculator,
              },
              {
                step: "2",
                title: "Get Detailed Report",
                description:
                  "Book a demo and receive a full ROI breakdown PDF with all calculations and assumptions.",
                icon: Mail,
              },
              {
                step: "3",
                title: "See GymWyse Live",
                description:
                  "30-minute demo with your data. See the revenue dashboard, churn alerts, and member app.",
                icon: Play,
              },
              {
                step: "4",
                title: "Start Free Trial",
                description:
                  "14-day full access. No credit card required. If you don't see ROI, cancel with one click.",
                icon: ArrowRight,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Ready to See Your Savings?
            </h2>
            <p className="text-lg text-soft-white">
              No pressure. No sales pitch. Just transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  See Pricing
                </Button>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-sm text-dim-gray mb-4">
                Trusted by 200+ gyms worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-cool-gray">
                <span>Apex Performance Lab (Los Angeles)</span>
                <span>&bull;</span>
                <span>The Foundry (London)</span>
                <span>&bull;</span>
                <span>Southern Cross Performance (Sydney)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
