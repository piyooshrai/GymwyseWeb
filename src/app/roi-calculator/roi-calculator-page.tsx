"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
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
  Play,
  Clock,
  BarChart3,
  Shield,
  Zap,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ROICalculator = dynamic(
  () =>
    import("@/components/roi-calculator").then((mod) => mod.ROICalculator),
  { ssr: false }
);

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: "How is ROI calculated?",
    answer:
      "ROI is calculated by dividing the total monthly value GymWyse generates (churn reduction savings, failed payment recovery, labor hours saved, and no-show fee collection) by your monthly GymWyse subscription cost. For example, if GymWyse generates $1,847 in monthly value and costs $99 per month, your ROI is ($1,847 - $99) / $99 = 1,766%, or roughly an 18.7x return on every dollar spent. We use conservative industry benchmarks so your actual results are typically higher than projected.",
  },
  {
    question: "What counts as \"recovered revenue\"?",
    answer:
      "Recovered revenue includes three categories. First, failed payment recovery: when a member's credit card declines, expires, or has insufficient funds, GymWyse uses smart retry logic with optimized timing and automated dunning sequences to collect the payment. Second, churn prevention savings: members flagged by our AI churn model who would have cancelled but were retained through targeted intervention. Third, no-show and late cancellation fees that were previously uncollected because staff forgot to charge them or the process was manual. Each category is tracked separately in your GymWyse dashboard so you can verify every dollar.",
  },
  {
    question: "How accurate is the churn prediction?",
    answer:
      "The GymWyse churn prediction model has a 78% accuracy rate across our customer base, meaning it correctly identifies nearly 4 out of 5 members who would cancel within the next 30 days. The model analyzes visit frequency changes, payment history, class booking patterns, and engagement metrics. It improves over time as it learns your specific member behavior patterns. On average, gyms using our churn alerts reduce monthly churn from 3.5% to 2.3%, saving 1.2 percentage points per month. For a 500-member gym at $87 average membership, that translates to roughly 6 saved members and $522 in retained revenue every single month.",
  },
  {
    question: "What if I have multiple locations?",
    answer:
      "Multi-location gyms receive volume pricing: $79 per location per month for 2 to 5 locations, and $69 per location per month for 6 or more locations. The calculator automatically adjusts when you change the location count. Multi-location operators also gain access to cross-location analytics, unified member management, and consolidated financial reporting that eliminates the need to manually merge spreadsheets from different sites. Most multi-location gyms see the highest ROI because they eliminate duplicated administrative work across every site.",
  },
  {
    question: "Can I export the ROI report?",
    answer:
      "After completing the calculator, you can book a demo and we will send you a comprehensive PDF report that includes all calculations, the assumptions behind each number, industry benchmark sources, and a month-by-month projection for your first year. This report is designed to be shared with business partners, investors, or your accountant when building the business case for switching gym management software. The report includes side-by-side comparisons with your current software costs and a detailed breakdown of where every dollar of value comes from.",
  },
  {
    question: "What is the average ROI for GymWyse customers?",
    answer:
      "Across our customer base of 200+ gyms, the median ROI is 1,400% in the first year. That means for every $1 spent on GymWyse, gyms get $14 back in recovered revenue, saved members, and labor savings. The range varies: smaller gyms with 100 to 200 members typically see 800% to 1,200% ROI, while larger gyms with 500+ members often exceed 2,000% ROI because the revenue recovery and churn prevention scale proportionally with member count while GymWyse pricing stays flat.",
  },
  {
    question: "Is the calculator accurate for boutique studios?",
    answer:
      "Yes. The calculator works for boutique fitness studios including yoga, Pilates, cycling, HIIT, and martial arts studios with as few as 50 active members. Boutique studios typically have higher average membership fees ($120 to $200 per month) and higher churn rates (4% to 6% monthly), which means the churn reduction value is proportionally larger. The calculator uses your actual numbers, not averages, so the results reflect your specific studio economics. We have boutique studio customers seeing 1,500%+ ROI even with smaller member counts because of the higher per-member revenue.",
  },
  {
    question: "How long until I see ROI?",
    answer:
      "Most gyms see positive ROI within the first 30 days. Here is the typical timeline: Day 1 you save on subscription costs if you are switching from a more expensive platform. Within 7 to 14 days, the failed payment recovery system begins collecting on declined transactions from your first billing cycle. By day 30, you have recovered enough failed payments and prevented enough cancellations to cover your GymWyse cost several times over. The churn prediction model reaches peak accuracy around day 60 to 90 as it learns your member behavior patterns. By month 3, you are seeing the full ROI that the calculator projects.",
  },
];

const comparisonFeatures = [
  {
    feature: "Monthly cost (1 location)",
    gymwyse: "$99",
    mindbody: "$129+",
    zenPlanner: "$117",
  },
  {
    feature: "Setup / onboarding fee",
    gymwyse: "$0",
    mindbody: "$500+",
    zenPlanner: "$300+",
  },
  {
    feature: "Contract requirement",
    gymwyse: "Month-to-month",
    mindbody: "12-month minimum",
    zenPlanner: "12-month minimum",
  },
  {
    feature: "ROI tracking dashboard",
    gymwyse: "Built-in",
    mindbody: "Not available",
    zenPlanner: "Not available",
  },
  {
    feature: "AI churn prediction",
    gymwyse: "Included",
    mindbody: "Not available",
    zenPlanner: "Not available",
  },
  {
    feature: "Failed payment recovery",
    gymwyse: "Included (smart retry)",
    mindbody: "Add-on ($50/mo)",
    zenPlanner: "Basic only",
  },
  {
    feature: "Revenue analytics",
    gymwyse: "Full module included",
    mindbody: "Basic reports",
    zenPlanner: "Basic reports",
  },
  {
    feature: "Multi-location pricing",
    gymwyse: "$79/loc (2-5), $69/loc (6+)",
    mindbody: "$129/loc (same price)",
    zenPlanner: "$117/loc (same price)",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export function ROICalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-8"
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
              Every gym loses revenue to failed payments, member churn, and
              inefficient admin workflows. Our gym management software ROI
              calculator shows you exactly how much money GymWyse will recover,
              save, and protect each month. Enter your real numbers below and
              get an instant, transparent breakdown of your projected return on
              investment. No email required, no gated content, no sales pitch.
              Just honest math based on industry benchmarks and data from 200+
              gyms already using GymWyse.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  See Full Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW THE CALCULATOR WORKS                                      */}
      {/* ============================================================ */}
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
            <p className="text-base text-soft-white max-w-3xl mx-auto leading-relaxed">
              The GymWyse ROI calculator is built on real performance data from
              our customer base of independent gyms, boutique studios, and
              multi-location fitness chains. Unlike generic savings calculators
              that pad numbers with aspirational projections, ours uses
              conservative benchmarks that we can verify with actual customer
              results. You provide five simple inputs about your gym, and we
              calculate five distinct categories of financial impact. The math
              is transparent. Every formula is explained below so you can verify
              the numbers yourself or share them with your accountant.
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
              <h3 className="text-xl font-semibold text-pure-white mb-2">
                Five Inputs You Provide
              </h3>
              <p className="text-sm text-cool-gray mb-6">
                We only ask for information you already know. If you do not know
                your churn rate, use the industry average of 3.5% monthly. Every
                other field is straightforward.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Number of active members",
                    detail:
                      "Total paying members across all locations. Include monthly, annual, and class-pack members.",
                    example: "e.g., 520",
                    icon: Users,
                  },
                  {
                    label: "Current software cost per month",
                    detail:
                      "What you pay today for gym management software. Include add-ons, payment processing fees from the platform, and any per-member charges.",
                    example: "e.g., $129/month for Mindbody",
                    icon: DollarSign,
                  },
                  {
                    label: "Average monthly membership fee",
                    detail:
                      "Your weighted average across all membership tiers. If you offer $60 basic and $120 premium, and 70% are basic, your average is about $78.",
                    example: "e.g., $87/month",
                    icon: DollarSign,
                  },
                  {
                    label: "Current monthly churn rate",
                    detail:
                      "The percentage of members who cancel each month. Industry average is 3.5%. If you do not track this, GymWyse will calculate it for you within 24 hours of connecting your data.",
                    example: "e.g., 3.5% (industry average)",
                    icon: TrendingUp,
                  },
                  {
                    label: "Number of gym locations",
                    detail:
                      "How many physical sites you operate. This affects your per-location pricing and the magnitude of administrative savings.",
                    example: "e.g., 1 location",
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
                      <div className="text-xs text-cool-gray mt-0.5">
                        {item.detail}
                      </div>
                      <div className="text-xs text-dim-gray mt-0.5">
                        {item.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Outputs */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-2">
                What GymWyse Calculates From Your Inputs
              </h3>
              <p className="text-sm text-cool-gray mb-6">
                Using the five inputs above, we calculate five distinct value
                categories. Each one is based on verified performance data from
                our existing customer base, not theoretical projections.
              </p>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-electric-green" />
                    <span className="text-sm font-medium text-electric-green">
                      Monthly GymWyse subscription cost
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray pl-6">
                    Your actual cost to use GymWyse. Single-location gyms pay
                    $99 per month, multi-location operators pay $79 per location
                    for 2 to 5 sites, and enterprise chains with 6+ locations
                    pay $69 per location. There are no setup fees, no contracts,
                    and no hidden add-on charges.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-electric-green" />
                    <span className="text-sm font-medium text-electric-green">
                      Failed payment recovery value
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray pl-6">
                    On average, 3% of gym membership payments fail each month
                    due to expired cards, insufficient funds, or bank declines.
                    GymWyse recovers 40% of those failed payments using smart
                    retry timing, automated dunning emails, and self-service
                    payment update links. The calculator multiplies your member
                    count by the 3% failure rate, applies the 40% recovery rate,
                    and uses your average membership fee to calculate the dollar
                    value recovered each month.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-electric-green" />
                    <span className="text-sm font-medium text-electric-green">
                      Churn reduction value
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray pl-6">
                    GymWyse gyms average 2.3% monthly churn compared to the
                    industry average of 3.5%. The difference in churn
                    percentage, applied to your member count and average
                    membership fee, shows how many members you save and what
                    that retention is worth in dollars. Each saved member
                    represents months of future revenue, but the calculator only
                    counts one month at a time to stay conservative.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-electric-green" />
                    <span className="text-sm font-medium text-electric-green">
                      Labor hours saved
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray pl-6">
                    Automated dashboards, one-click reporting, and AI-powered
                    workflows save an average of 8 hours per week of manual
                    spreadsheet and admin work. At $15 per hour, that is $520
                    per month in staff time redirected from data entry to
                    member-facing activities that actually grow your business.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-electric-green" />
                    <span className="text-sm font-medium text-electric-green">
                      Net ROI calculation
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray pl-6">
                    Net ROI equals total monthly value generated (churn savings
                    plus payment recovery plus labor savings plus no-show fees)
                    minus your monthly GymWyse subscription cost. The result is
                    expressed as both a dollar amount and a percentage. A
                    1,000% ROI means you earn $10 for every $1 you spend on
                    GymWyse each month.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE CALCULATOR                                        */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-electric-green/10 border border-electric-green/20 rounded-full px-4 py-1.5">
              <Calculator className="w-4 h-4 text-electric-green" />
              <span className="text-sm text-electric-green font-medium">
                Interactive Calculator
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Enter Your Numbers, See Your Results
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Adjust the inputs on the left and watch your projected ROI update
              in real time on the right. Every number is calculated using the
              formulas described above. No guesswork, no inflated projections.
            </p>
          </motion.div>

          <div className="glass-card p-6 md:p-10">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* REAL GYM EXAMPLES                                             */}
      {/* ============================================================ */}
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
              Real Gym Examples: ROI in Practice
            </h2>
            <p className="text-base text-soft-white max-w-3xl mx-auto">
              These are real scenarios based on actual GymWyse customers. Names
              and exact figures are used with permission. Each example shows the
              before-and-after impact of switching to GymWyse from their
              previous gym management software.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Example 1 - Independent Gym */}
            <motion.div
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                  IR
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pure-white">
                    Iron Republic Fitness
                  </h3>
                  <div className="text-xs text-dim-gray">
                    Austin, TX — 200 members, independent gym
                  </div>
                </div>
              </div>

              <p className="text-sm text-cool-gray mb-6 leading-relaxed">
                Iron Republic was running on spreadsheets and a basic payment
                processor. The owner, Sarah Nguyen, spent 12 hours per week on
                manual reporting, churn tracking, and chasing failed payments by
                phone. She had no visibility into which members were at risk of
                cancelling until they actually cancelled. After switching to
                GymWyse, she automated her entire back office and gained
                real-time churn alerts that flagged at-risk members before they
                left. Her monthly churn dropped from 4.1% to 2.4% within 90
                days, and the failed payment recovery system collected $612 per
                month that she was previously losing to expired credit cards.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-1">
                    Before GymWyse
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-cool-gray">
                      Software: Spreadsheets + Stripe ($0 + fees)
                    </div>
                    <div className="text-xs text-cool-gray">
                      Monthly churn: 4.1%
                    </div>
                    <div className="text-xs text-cool-gray">
                      Failed payment recovery: 0%
                    </div>
                    <div className="text-xs text-cool-gray">
                      Admin time: 12 hrs/week
                    </div>
                  </div>
                </div>
                <div className="bg-electric-green/[0.05] rounded-lg p-4 border border-electric-green/20">
                  <div className="text-xs text-electric-green uppercase tracking-wider mb-1">
                    After GymWyse
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-soft-white">
                      Software: GymWyse ($99/mo)
                    </div>
                    <div className="text-xs text-soft-white">
                      Monthly churn: 2.4%
                    </div>
                    <div className="text-xs text-soft-white">
                      Failed payment recovery: 40%
                    </div>
                    <div className="text-xs text-soft-white">
                      Admin time: 2 hrs/week (automated)
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "GymWyse cost", value: "$99/mo" },
                  { label: "Total monthly value", value: "$1,847" },
                  { label: "Net monthly benefit", value: "$1,748" },
                  { label: "ROI multiple", value: "18.7x" },
                ].map((m, i) => (
                  <div key={i} className="text-center py-3">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-deep-space/40 rounded-lg p-4 mb-4">
                <div className="text-xs text-dim-gray uppercase tracking-wider mb-2">
                  Breakdown of $1,847/mo value
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Churn reduction (4.1% to 2.4% = 3.4 members saved)
                    </span>
                    <span className="text-electric-green font-mono">$295</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Failed payment recovery (40% of 6 failures)
                    </span>
                    <span className="text-electric-green font-mono">$612</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      No-show fee collection (automated)
                    </span>
                    <span className="text-electric-green font-mono">$420</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Labor savings (10 hrs/week saved at $15/hr)
                    </span>
                    <span className="text-electric-green font-mono">$520</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-electric-green/30 pl-4">
                <p className="text-sm text-soft-white italic">
                  &ldquo;I was spending half my week on spreadsheets. Now I
                  spend that time training members and growing my business.
                  GymWyse paid for itself in the first week.&rdquo;
                </p>
                <div className="text-xs text-dim-gray mt-2">
                  — Sarah Nguyen, Owner, Iron Republic Fitness
                </div>
              </div>
            </motion.div>

            {/* Example 2 - Multi-Location Chain */}
            <motion.div
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sapphire-blue/10 flex items-center justify-center text-sapphire-blue font-bold text-sm">
                  EF
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pure-white">
                    Elevate Fitness Collective
                  </h3>
                  <div className="text-xs text-dim-gray">
                    London — 3 locations, 800 total members
                  </div>
                </div>
              </div>

              <p className="text-sm text-cool-gray mb-6 leading-relaxed">
                Elevate Fitness Collective is a 3-location boutique chain in
                London that was using Mindbody for all three sites. Each
                location had its own Mindbody account, costing a combined total
                of $387 per month. The operations director, David Okonkwo, had
                no unified dashboard, so generating a consolidated P&L required
                exporting CSVs from each location, merging them manually, and
                recalculating metrics every week. After switching to GymWyse at
                $237 per month (3 locations at $79 each), they consolidated all
                three sites into a single dashboard. The AI churn model
                identified 22 at-risk members in the first month, and targeted
                outreach saved 14 of them. Failed payment recovery brought in
                $1,320 per month that was previously written off as lost revenue.
                Combined with $150 per month in subscription savings and $520
                per month in labor savings from eliminating the manual reporting
                workflow, Elevate saw a 19.2x return on their GymWyse investment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-1">
                    Before GymWyse
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-cool-gray">
                      Software: Mindbody ($387/mo for 3 locations)
                    </div>
                    <div className="text-xs text-cool-gray">
                      No unified dashboard across sites
                    </div>
                    <div className="text-xs text-cool-gray">
                      Churn tracking: manual CSV exports
                    </div>
                    <div className="text-xs text-cool-gray">
                      Failed payments: discovered weeks late
                    </div>
                  </div>
                </div>
                <div className="bg-electric-green/[0.05] rounded-lg p-4 border border-electric-green/20">
                  <div className="text-xs text-electric-green uppercase tracking-wider mb-1">
                    After GymWyse
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-soft-white">
                      Software: GymWyse ($237/mo for 3 locations)
                    </div>
                    <div className="text-xs text-soft-white">
                      Single dashboard, all 3 locations
                    </div>
                    <div className="text-xs text-soft-white">
                      Real-time AI churn alerts per member
                    </div>
                    <div className="text-xs text-soft-white">
                      40% payment recovery, automated
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "GymWyse cost", value: "$237/mo" },
                  { label: "Total monthly value", value: "$4,560" },
                  { label: "Net monthly benefit", value: "$4,323" },
                  { label: "ROI multiple", value: "19.2x" },
                ].map((m, i) => (
                  <div key={i} className="text-center py-3">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-deep-space/40 rounded-lg p-4 mb-4">
                <div className="text-xs text-dim-gray uppercase tracking-wider mb-2">
                  Breakdown of $4,560/mo value
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Churn reduction (14 members saved across 3 sites)
                    </span>
                    <span className="text-electric-green font-mono">
                      $1,540
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Failed payment recovery (40% of $3,300 in failures)
                    </span>
                    <span className="text-electric-green font-mono">
                      $1,320
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      No-show fee collection (3 locations)
                    </span>
                    <span className="text-electric-green font-mono">
                      $1,180
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-cool-gray">
                      Labor savings (eliminated manual reporting)
                    </span>
                    <span className="text-electric-green font-mono">$520</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-sapphire-blue/30 pl-4">
                <p className="text-sm text-soft-white italic">
                  &ldquo;We were paying $387 per month for three separate
                  Mindbody accounts with no way to see the full picture. GymWyse
                  gave us a unified dashboard for $237, and the churn alerts
                  saved 14 members in month one alone. The ROI was
                  undeniable.&rdquo;
                </p>
                <div className="text-xs text-dim-gray mt-2">
                  — David Okonkwo, Operations Director, Elevate Fitness
                  Collective
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE                                              */}
      {/* ============================================================ */}
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
              GymWyse vs Mindbody vs Zen Planner
            </h2>
            <p className="text-base text-soft-white max-w-3xl mx-auto">
              A direct side-by-side comparison of monthly costs, setup fees,
              contract terms, and feature availability across the three most
              popular gym management software platforms. GymWyse includes
              AI-powered churn prediction, smart failed payment recovery, and
              full revenue analytics at no extra cost. Competitors charge
              separately for these features or do not offer them at all. See our
              detailed{" "}
              <Link
                href="/vs/mindbody"
                className="text-electric-green underline underline-offset-2"
              >
                Mindbody comparison
              </Link>{" "}
              for a deeper breakdown.
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-5 border-b border-glass-border bg-white/[0.03]">
              <div className="text-sm font-semibold text-pure-white">
                Feature
              </div>
              <div className="text-sm font-semibold text-electric-green text-center">
                GymWyse
              </div>
              <div className="text-sm font-semibold text-cool-gray text-center">
                Mindbody
              </div>
              <div className="text-sm font-semibold text-cool-gray text-center">
                Zen Planner
              </div>
            </div>

            {comparisonFeatures.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 gap-4 p-5 ${
                  i < comparisonFeatures.length - 1
                    ? "border-b border-glass-border"
                    : ""
                } ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
              >
                <div className="text-sm text-soft-white font-medium">
                  {row.feature}
                </div>
                <div className="text-sm text-electric-green text-center font-medium">
                  {row.gymwyse}
                </div>
                <div className="text-sm text-cool-gray text-center">
                  {row.mindbody}
                </div>
                <div className="text-sm text-cool-gray text-center">
                  {row.zenPlanner}
                </div>
              </div>
            ))}

            <div className="p-5 bg-electric-green/[0.05] border-t border-electric-green/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-pure-white">
                  Estimated Year 1 savings vs Mindbody (single location)
                </span>
                <span className="text-xl font-bold text-electric-green font-mono">
                  $7,560+
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-sm text-dim-gray text-center mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prices as of January 2025. Mindbody and Zen Planner pricing based
            on publicly listed rates for their standard plans. Multi-location
            pricing varies. Contact each provider for exact quotes. Need help
            switching?{" "}
            <Link
              href="/migration"
              className="text-electric-green underline underline-offset-2"
            >
              See our free migration guide
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY MOST CALCULATORS LIE                                      */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Why Most ROI Calculators Lie (And Ours Does Not)
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Most gym software companies use ROI calculators as lead
              generation tools, not transparency tools. They inflate numbers
              to get you on a sales call. Here is how ours is different.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-8 border-l-4 border-l-alert-red"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-alert-red" />
                <h3 className="text-lg font-semibold text-alert-red">
                  What competitor calculators show you
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Competitor ROI tools show vanity metrics designed to look
                impressive on a sales page. They claim you will &ldquo;save
                $30/month on subscription costs&rdquo; but ignore the $300 to
                $500 setup fees, 12-month contract lock-ins with early
                termination penalties, add-on charges for features that should
                be included, and the massive hidden revenue leaks from churn
                and failed payments that their software cannot even detect, let
                alone prevent.
              </p>
              <p className="text-sm text-cool-gray leading-relaxed">
                They also project savings based on best-case scenarios rather
                than median customer outcomes. The numbers look great in a slide
                deck but do not hold up against actual gym financial data.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 border-l-4 border-l-electric-green"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-electric-green" />
                <h3 className="text-lg font-semibold text-electric-green">
                  What GymWyse shows you instead
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse tracks actual recovered revenue from real failed
                payments that were retried and collected. We track actual saved
                members who were flagged by AI, received intervention, and
                stayed. We track actual hours saved by comparing pre-GymWyse and
                post-GymWyse admin time logs. Every metric in your GymWyse
                dashboard is verified against real transactions, not
                projections.
              </p>
              <ul className="space-y-2">
                {[
                  "Actual subscription savings (verifiable day one)",
                  "Zero setup fees ($0, not hidden in your first invoice)",
                  "No contracts (cancel with one click, any time)",
                  "Recovered revenue tracked per transaction in your dashboard",
                  "Labor savings measured against your actual pre-switch workflow",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 shrink-0" />
                    <span className="text-sm text-cool-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Frequently Asked Questions About the ROI Calculator
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Everything you need to know about how the calculator works, what
              the numbers mean, and how GymWyse delivers the ROI it projects.
              If your question is not answered here, book a demo and our team
              will walk you through the calculations with your specific data.
            </p>
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

      {/* ============================================================ */}
      {/* WHAT HAPPENS AFTER                                            */}
      {/* ============================================================ */}
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
              What Happens After You Calculate Your ROI
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The calculator gives you the numbers. Here is what happens next
              if you want to turn those numbers into real savings for your gym.
              There is no obligation at any step. Cancel or pause at any time.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Get Your ROI Report Emailed",
                description:
                  "After running the calculator, book a demo and we will email you a detailed PDF with all calculations, assumptions, data sources, and a 12-month projection tailored to your gym. Share it with your business partner, accountant, or investor.",
                icon: Mail,
              },
              {
                step: "2",
                title: "Schedule a Live Demo",
                description:
                  "A 30-minute screen share where we load your actual gym data into GymWyse and show you the revenue dashboard, churn prediction alerts, payment recovery system, and automated reporting in action. No slides, no pitch deck. Just your data.",
                icon: Play,
              },
              {
                step: "3",
                title: "Start Your 14-Day Free Trial",
                description:
                  "Full platform access for 14 days. No credit card required. We migrate your member data, connect your payment processor, and configure your dashboard. You will see real churn predictions and payment recovery within your first billing cycle.",
                icon: Zap,
              },
              {
                step: "4",
                title: "Full Onboarding and Launch",
                description:
                  "If you see the ROI during your trial, we complete full onboarding: staff training, custom report setup, member app configuration, and ongoing support. Month-to-month billing starts. Cancel any time with one click if you are not satisfied.",
                icon: CheckCircle,
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
                <h3 className="text-base font-semibold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Ready to Prove Your ROI?
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
              Stop guessing how much revenue your gym is losing to churn, failed
              payments, and manual processes. Use the calculator above to see
              your projected savings, then book a demo to see GymWyse in action
              with your actual gym data. Most gyms see a positive return on
              investment within 30 days of switching. There is no long-term
              contract, no setup fee, and no risk. If you do not see ROI during
              your 14-day trial, cancel with one click and pay nothing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#calculator">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("[data-calculator]")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Calculator className="mr-2 w-4 h-4" />
                  Try the Calculator
                </Button>
              </Link>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-sm text-dim-gray">
                Trusted by 200+ gyms, boutique studios, and multi-location
                fitness chains worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-cool-gray">
                <span>Iron Republic Fitness (Austin)</span>
                <span>&bull;</span>
                <span>Elevate Fitness Collective (London)</span>
                <span>&bull;</span>
                <span>Southern Cross Performance (Sydney)</span>
                <span>&bull;</span>
                <span>Peak Athletics (Toronto)</span>
              </div>
              <p className="text-xs text-dim-gray pt-4">
                Have questions before you start?{" "}
                <Link
                  href="/pricing"
                  className="text-electric-green underline underline-offset-2"
                >
                  View pricing details
                </Link>{" "}
                or{" "}
                <Link
                  href="/demo"
                  className="text-electric-green underline underline-offset-2"
                >
                  talk to our team
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
