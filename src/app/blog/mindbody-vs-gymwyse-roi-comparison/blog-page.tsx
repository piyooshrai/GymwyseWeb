"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  XCircle,
  DollarSign,
  BarChart3,
  Shield,
  Users,
  Calendar,
  Smartphone,
  TrendingUp,
  Globe,
  Zap,
  AlertTriangle,
  Clock,
  Calculator,
  MessageSquareQuote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── FAQ Data ─────────────────────────────── */
const faqs = [
  {
    question: "How long does migration from Mindbody to GymWyse actually take?",
    answer:
      "Most single-location gyms complete migration in 7-10 business days. Multi-location operators typically finish in 14-21 days depending on volume. Our Migration Hub handles member records, billing history, class schedules, and staff permissions automatically. You get a dedicated migration specialist and a parallel-run period where both systems operate simultaneously, so there is zero downtime and zero risk of lost data. Over 200 gyms have completed this process without a single missed billing cycle.",
  },
  {
    question: "Will my members notice the switch from Mindbody?",
    answer:
      "Your members will notice an improvement, not a disruption. During migration, we send branded communications on your behalf explaining the upgrade. The GymWyse member app is more intuitive than Mindbody's, and members can book classes, manage billing, and track workouts from day one. We have seen member app engagement increase by 40% post-migration because the interface is cleaner and the AI-powered workout recommendations actually keep people coming back.",
  },
  {
    question: "Does GymWyse integrate with the payment processors I already use?",
    answer:
      "Yes. GymWyse supports Stripe, Square, GoCardless, BACS Direct Debit (UK), BPAY (Australia), and all major US ACH processors out of the box. We also support multi-currency billing for operators with international locations. Our smart retry logic works across all processors, automatically reattempting failed payments at optimal intervals, which recovers an average of 40% of declined transactions without manual intervention.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "GymWyse operates on month-to-month billing with no long-term contracts. You can cancel anytime with 30 days notice. We also offer annual plans at a 20% discount if you prefer to lock in pricing. Compare that to Mindbody, which typically requires annual commitments on their higher-tier plans and charges early termination fees. We believe our platform should earn your business every month, not trap you in a contract.",
  },
  {
    question: "How does GymWyse's churn prediction AI actually work?",
    answer:
      "Our churn prediction model analyzes 14 behavioral signals per member, including visit frequency decay, class booking pattern shifts, payment method changes, app engagement drops, and social interaction metrics. When a member crosses a risk threshold, the system flags them 30 days before likely cancellation and triggers automated re-engagement sequences. These can include personalized offers, trainer outreach prompts, or targeted push notifications. On average, gyms using this feature save 18 members per month from churning.",
  },
  {
    question: "What kind of ROI can I realistically expect in the first 90 days?",
    answer:
      "Based on data from 200+ gyms, the average operator sees $1,800-$3,200 in recovered revenue within the first 90 days from failed payment recovery and churn prevention alone. Factor in the software cost savings versus Mindbody (typically $40-$350/month depending on tier) and most gyms hit positive ROI within 45 days. Our ROI calculator at /roi-calculator uses your specific member count, average revenue per member, and current churn rate to give you a personalized projection.",
  },
];

/* ── Comparison Table Data ────────────────── */
const comparisonRows = [
  {
    category: "Scheduling & Booking",
    legacy: "Manual calendar management, phone/email bookings, no waitlist automation",
    gymwyse: "AI-optimized scheduling, real-time booking with auto-waitlist, demand prediction",
  },
  {
    category: "Billing & Payments",
    legacy: "Basic recurring billing, manual follow-up on failed payments, single-currency",
    gymwyse: "Smart retry logic recovering 40% of failures, multi-currency, automated dunning sequences",
  },
  {
    category: "Member Retention",
    legacy: "Reactive cancellation handling, no early warning system, gut-feel outreach",
    gymwyse: "AI churn prediction 30 days early, automated re-engagement, behavioral scoring for every member",
  },
  {
    category: "Analytics & Reporting",
    legacy: "Basic revenue reports, no per-class P&L, manual spreadsheet exports",
    gymwyse: "Real-time revenue analytics, per-service profitability, automated KPI dashboards across locations",
  },
  {
    category: "Member App Experience",
    legacy: "Generic app interface, limited personalization, no AI workout recommendations",
    gymwyse: "Branded app with AI workout avatars, smart push notifications, 40% higher engagement",
  },
  {
    category: "Multi-Location Management",
    legacy: "Separate logins per location, manual cross-location reporting, no unified view",
    gymwyse: "Unified Command Center dashboard, portfolio-level KPIs, location benchmarking in one click",
  },
  {
    category: "Compliance & Security",
    legacy: "Basic data encryption, limited regional compliance, manual audit trails",
    gymwyse: "HIPAA, GDPR, PCI-DSS compliant, region-aware billing (BACS/BPAY), automated audit logs",
  },
];

/* ── Main Component ──────────────────────── */
export function MindbodyVsGymwysePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  /* ── JSON-LD Schemas ── */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Mindbody to GymWyse",
    description:
      "A step-by-step guide for gym owners switching from Mindbody to GymWyse for better ROI, churn prevention, and revenue analytics.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Calculate your current costs",
        text: "Audit your Mindbody subscription tier, add-on fees, payment processing costs, and the hours your team spends on manual tasks the platform does not automate.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Run the GymWyse ROI calculator",
        text: "Use the GymWyse ROI calculator at /roi-calculator to project savings based on your member count, average revenue per member, and current churn rate.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Book a migration consultation",
        text: "Schedule a demo with the GymWyse team to review your specific data migration requirements, integrations, and timeline.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Execute parallel-run migration",
        text: "GymWyse runs alongside Mindbody during migration so there is zero downtime. Member records, billing history, schedules, and staff permissions transfer automatically.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Activate AI-powered features",
        text: "Once migrated, enable churn prediction, smart payment retry, and per-service analytics to start recovering revenue from day one.",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="bg-deep-space">
        {/* ════════════════════════════════════════════
            HERO + DIRECT ANSWER
        ════════════════════════════════════════════ */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
                  Comparison
                </span>
                <span className="text-xs text-dim-gray">
                  December 2, 2025 &middot; 12 min read
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
                Mindbody vs. GymWyse: Why ROI-First Tech Wins in 2026
              </h1>

              {/* DIRECT ANSWER - first 50-70 words */}
              <div className="glass-card p-6 border-l-4 border-electric-green">
                <p className="text-lg md:text-xl text-soft-white leading-relaxed">
                  <strong className="text-electric-green">The short answer:</strong>{" "}
                  GymWyse wins for gym owners who care about measurable return on investment.
                  Mindbody built its reputation as the industry default, but its pricing has
                  ballooned to $139-$699 per month while core automation features still require
                  expensive add-ons. GymWyse delivers AI-driven churn prevention, smart payment
                  recovery, and per-service analytics starting at $99 per month, with most gyms
                  hitting positive ROI within 45 days of switching.
                </p>
              </div>

              <p className="text-soft-white leading-relaxed">
                Look, I get it. You have been on Mindbody for years. Your staff knows it. Your
                members are used to the booking flow. The thought of switching platforms feels
                like ripping out the plumbing in a building you are still operating. I have
                talked to hundreds of gym owners who felt exactly the same way, and I am going
                to walk you through why switching is not only easier than you think, but why
                the math overwhelmingly favors making the move in 2026.
              </p>
              <p className="text-soft-white leading-relaxed">
                This is not a fluffy marketing comparison. We are going to look at real pricing,
                real features, real cost savings, and a specific ROI calculation you can run
                against your own numbers. By the end of this post, you will know exactly what
                switching costs, what it saves, and whether it makes sense for your gym.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            PRICING BREAKDOWN
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                The Pricing Reality: What You Actually Pay
              </h2>
              <p className="text-soft-white leading-relaxed mb-8">
                Mindbody&apos;s pricing page looks straightforward until you factor in the add-ons.
                Their Starter plan begins at $139 per month, but it lacks automated marketing,
                advanced reporting, and branded app features. To get what most serious gym owners
                need, you are looking at their Accelerate ($279/mo) or Ultimate ($699/mo) tiers.
                Then there are transaction fees, branded app surcharges, and API access costs
                that quietly push your total spend north of $500 per month for a single location.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Mindbody Pricing Card */}
                <div className="glass-card p-6 border border-glass-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-red-500/10">
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-pure-white">Mindbody</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Starter</span>
                      <span className="text-pure-white font-mono font-semibold">$139/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Accelerate</span>
                      <span className="text-pure-white font-mono font-semibold">$279/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Ultimate</span>
                      <span className="text-pure-white font-mono font-semibold">$699/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-cool-gray text-sm">Branded App Add-on</span>
                      <span className="text-red-400 font-mono font-semibold">+$200/mo</span>
                    </div>
                  </div>
                  <p className="text-xs text-dim-gray mt-4">
                    * Plus transaction fees, API access charges, and annual contract lock-in on higher tiers.
                  </p>
                </div>

                {/* GymWyse Pricing Card */}
                <div className="glass-card p-6 border border-electric-green/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-electric-green/10">
                      <DollarSign className="w-5 h-5 text-electric-green" />
                    </div>
                    <h3 className="text-xl font-bold text-pure-white">GymWyse</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Starter</span>
                      <span className="text-electric-green font-mono font-semibold">$99/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Growth</span>
                      <span className="text-electric-green font-mono font-semibold">$199/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-cool-gray text-sm">Enterprise</span>
                      <span className="text-electric-green font-mono font-semibold">$349/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-cool-gray text-sm">Branded App</span>
                      <span className="text-electric-green font-mono font-semibold">Included</span>
                    </div>
                  </div>
                  <p className="text-xs text-dim-gray mt-4">
                    * Month-to-month billing. No contracts. AI features included at every tier.
                  </p>
                </div>
              </div>

              <p className="text-soft-white leading-relaxed">
                Let me put this in context. A gym on Mindbody&apos;s Accelerate plan with the branded
                app add-on is spending $479 per month, or $5,748 per year. That same gym on
                GymWyse Growth pays $199 per month, or $2,388 per year, with the branded app
                included and AI-powered features that Mindbody charges extra for. That is a{" "}
                <strong className="text-electric-green">$3,360 annual saving</strong> before
                you even account for the revenue GymWyse&apos;s automation generates. And honestly,
                the savings are just the beginning of the conversation. The real story is what
                happens to your revenue after you switch.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28 bg-midnight py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-3">
                Feature-by-Feature: Legacy Manual Management vs. GymWyse AI Management
              </h2>
              <p className="text-soft-white leading-relaxed mb-10">
                Forget the feature checklist that every SaaS company uses to make themselves
                look good. This table compares what you are actually doing today with legacy
                tools versus what GymWyse automates. These are not theoretical capabilities.
                These are workflows running across 200+ gyms right now.
              </p>

              {/* Desktop Table */}
              <div className="hidden md:block glass-card border border-glass-border overflow-hidden rounded-xl">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-left p-4 text-sm font-semibold text-pure-white w-1/5">
                        Category
                      </th>
                      <th className="text-left p-4 text-sm font-semibold text-red-400 w-2/5">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4" />
                          Legacy Manual Management
                        </div>
                      </th>
                      <th className="text-left p-4 text-sm font-semibold text-electric-green w-2/5">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          GymWyse AI Management
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <motion.tr
                        key={row.category}
                        className="border-b border-glass-border last:border-b-0"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <td className="p-4 text-sm font-medium text-pure-white align-top">
                          {row.category}
                        </td>
                        <td className="p-4 text-sm text-cool-gray align-top">
                          {row.legacy}
                        </td>
                        <td className="p-4 text-sm text-soft-white align-top">
                          {row.gymwyse}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {comparisonRows.map((row, i) => (
                  <motion.div
                    key={row.category}
                    className="glass-card p-4 border border-glass-border"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <h4 className="text-sm font-semibold text-pure-white mb-3">
                      {row.category}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-cool-gray">{row.legacy}</p>
                      </div>
                      <div className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <p className="text-xs text-soft-white">{row.gymwyse}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            HOW THE COMMAND CENTER SOLVES THIS
        ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-sapphire-blue/10">
                  <Zap className="w-5 h-5 text-sapphire-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                  How the Command Center Solves This
                </h2>
              </div>

              <p className="text-soft-white leading-relaxed mb-6">
                The GymWyse Command Center is not just another dashboard. It is the operational
                nerve center that replaces the five or six tabs you currently have open trying
                to piece together what is happening across your business. And for gym owners
                migrating from Mindbody, the{" "}
                <strong className="text-electric-green">Migration Hub Tooling</strong> dashboard
                metric is the feature that eliminates the anxiety of switching.
              </p>

              <div className="glass-card p-6 md:p-8 border border-sapphire-blue/20 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-sapphire-blue" />
                  <h3 className="text-lg font-semibold text-pure-white">
                    Migration Hub Tooling Dashboard
                  </h3>
                </div>
                <p className="text-soft-white leading-relaxed mb-4">
                  The Migration Hub Tooling metric gives you a single-pane view of your entire
                  migration status in real time. It tracks five critical dimensions: member
                  record transfer completion percentage, billing history integrity score,
                  schedule migration accuracy, staff permission mapping status, and integration
                  connectivity health. Each dimension is scored from 0 to 100, and the
                  composite Migration Readiness Score tells you exactly when you are safe to
                  cut over from Mindbody.
                </p>
                <p className="text-soft-white leading-relaxed mb-4">
                  During the parallel-run phase, the dashboard shows side-by-side billing
                  reconciliation between Mindbody and GymWyse, flagging any discrepancies
                  before they affect members. It also tracks member app adoption rate
                  post-migration, so you can see how quickly your members are transitioning
                  to the new booking flow. The average Migration Readiness Score across our
                  200+ migrations is 97.3%, meaning nearly every data point transfers cleanly
                  on the first pass.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    { label: "Member Records", value: "99.1%" },
                    { label: "Billing History", value: "98.7%" },
                    { label: "Schedule Accuracy", value: "99.5%" },
                    { label: "Staff Permissions", value: "97.2%" },
                    { label: "Integration Health", value: "96.8%" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-deep-space/60 rounded-lg p-3 text-center border border-glass-border"
                    >
                      <p className="text-lg font-mono font-bold text-electric-green">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-cool-gray mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-soft-white leading-relaxed">
                Beyond migration, the Command Center consolidates every KPI that matters into
                a single view: real-time MRR, churn risk scores, failed payment recovery
                pipeline, per-class profitability, and member engagement trends. For multi-location
                operators, you get portfolio-level benchmarking that shows which locations are
                outperforming and which need attention. This is the difference between managing
                your gym by spreadsheet and managing it like a data-driven business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            ROI CALCULATION
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28 bg-midnight py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-electric-green/10">
                  <Calculator className="w-5 h-5 text-electric-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                  The ROI Math: A Specific Example
                </h2>
              </div>

              <p className="text-soft-white leading-relaxed mb-6">
                Let me walk you through the numbers for a gym I will call &quot;Iron House Fitness,&quot;
                a single-location facility with 800 members, an average revenue per member of
                $95 per month, and a monthly churn rate of 4.5%. These are median numbers
                from our customer base, so this is not a cherry-picked success story. This is
                what a typical gym looks like.
              </p>

              <div className="glass-card p-6 md:p-8 border border-electric-green/20 mb-8">
                <h3 className="text-xl font-bold text-pure-white mb-6">
                  Monthly ROI Breakdown: Iron House Fitness
                </h3>

                <div className="space-y-4">
                  {/* Churn Prevention */}
                  <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-pure-white mb-1">
                          Churn Prevention Savings
                        </h4>
                        <p className="text-sm text-soft-white leading-relaxed">
                          If you save just <strong className="text-electric-green">3 members
                          from churning</strong> at $95/mo each, that is{" "}
                          <strong className="text-electric-green">$285/mo in retained revenue</strong>,
                          or <strong className="text-electric-green">$3,420/year</strong>. Our
                          average customer saves 18 members per month, which would be $1,710/mo
                          or $20,520/year for a gym this size. But let us be conservative and
                          use 3.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Failed Payment Recovery */}
                  <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-pure-white mb-1">
                          Failed Payment Recovery
                        </h4>
                        <p className="text-sm text-soft-white leading-relaxed">
                          The average gym loses $2,100/mo to failed payments. Smart retry logic
                          recovers <strong className="text-electric-green">40% of those
                          failures</strong>, which is{" "}
                          <strong className="text-electric-green">$840/mo recovered</strong>,
                          or <strong className="text-electric-green">$10,080/year</strong>.
                          This is money that was already owed to you. GymWyse just collects it.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Software Cost Savings */}
                  <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-pure-white mb-1">
                          Software Cost Savings (vs. Mindbody Accelerate)
                        </h4>
                        <p className="text-sm text-soft-white leading-relaxed">
                          Mindbody Accelerate + branded app: $479/mo. GymWyse Growth: $199/mo.
                          Monthly savings:{" "}
                          <strong className="text-electric-green">$280/mo</strong>, or{" "}
                          <strong className="text-electric-green">$3,360/year</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-electric-green/5 rounded-lg p-4 border border-electric-green/30">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-electric-green mb-1">
                          Conservative Monthly ROI
                        </h4>
                        <p className="text-sm text-soft-white leading-relaxed">
                          $285 (churn prevention) + $840 (payment recovery) + $280 (cost savings)
                          = <strong className="text-electric-green text-lg">$1,405/mo</strong> or{" "}
                          <strong className="text-electric-green text-lg">$16,860/year</strong> in
                          net value. That is a{" "}
                          <strong className="text-electric-green">706% annual return</strong> on
                          a $199/mo software investment. And remember, we used the conservative
                          estimate of 3 members saved. The real number is typically 6x higher.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/roi-calculator">
                    <Button variant="primary" size="lg">
                      <Calculator className="w-4 h-4" />
                      Calculate Your Specific ROI
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-soft-white leading-relaxed">
                These numbers are not aspirational projections. They come from aggregated,
                anonymized data across our customer base. Your specific ROI depends on your
                member count, average revenue per member, current churn rate, and how much
                you are currently paying for gym management software. The{" "}
                <Link href="/roi-calculator" className="text-electric-green underline underline-offset-2 hover:text-electric-green/80">
                  ROI calculator
                </Link>{" "}
                on our site lets you plug in your own numbers and see a personalized projection
                in under two minutes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            MIGRATION PROCESS
        ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                The Migration Process: What Actually Happens
              </h2>

              <p className="text-soft-white leading-relaxed mb-8">
                The number one objection I hear from gym owners considering a switch is: &quot;I
                cannot afford downtime.&quot; I hear you. Your members are paying you to provide
                a seamless experience, and if the booking system goes down during peak hours,
                you have got a front desk mutiny on your hands. That is why GymWyse built the
                parallel-run migration protocol. Here is exactly what happens, step by step.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "01",
                    title: "Data Export & Audit (Day 1-2)",
                    description:
                      "Your migration specialist pulls a complete data export from Mindbody: member records, billing history, class schedules, staff accounts, and integration configurations. We run an automated audit to flag any data quality issues before transfer.",
                    icon: Shield,
                  },
                  {
                    step: "02",
                    title: "Parallel System Setup (Day 3-5)",
                    description:
                      "GymWyse is configured alongside Mindbody. Both systems run simultaneously. Bookings sync in real time so neither your staff nor your members experience any disruption. Your billing continues through Mindbody during this phase.",
                    icon: Calendar,
                  },
                  {
                    step: "03",
                    title: "Staff Training & Testing (Day 6-8)",
                    description:
                      "Your team gets hands-on training with the GymWyse interface, typically 2-3 hours total. We run test bookings, test payments, and verify every integration. The Migration Hub dashboard shows you the readiness score in real time.",
                    icon: Users,
                  },
                  {
                    step: "04",
                    title: "Cutover & Activation (Day 9-10)",
                    description:
                      "Once the Migration Readiness Score hits 95%+, we execute the cutover. Billing flips to GymWyse, the member app goes live, and AI features activate. Members receive a branded notification about the upgrade. Zero downtime.",
                    icon: Zap,
                  },
                  {
                    step: "05",
                    title: "Post-Migration Optimization (Day 11-30)",
                    description:
                      "Your migration specialist stays on for 30 days to optimize AI settings, fine-tune churn prediction thresholds, and ensure payment recovery is calibrated to your specific billing patterns. This is where the ROI starts compounding.",
                    icon: TrendingUp,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="glass-card p-5 border border-glass-border flex gap-4"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-electric-green/10 flex items-center justify-center">
                        <span className="text-sm font-mono font-bold text-electric-green">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-pure-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-soft-white leading-relaxed">
                Over 200 gyms have completed this process. The average total migration time
                is 9 business days for single-location gyms and 17 business days for
                multi-location operators. Not a single gym has reported a missed billing
                cycle during migration. If you run a{" "}
                <Link href="/yoga-studio-software" className="text-electric-green underline underline-offset-2 hover:text-electric-green/80">
                  yoga studio
                </Link>{" "}
                or boutique fitness space, the process is even faster because class structures
                tend to be simpler and member counts are more manageable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            WHY ROI-FIRST MATTERS
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Why ROI-First Beats Feature-Bloat Every Time
              </h2>

              <p className="text-soft-white leading-relaxed mb-4">
                Here is the fundamental problem with Mindbody and most legacy gym management
                platforms: they were built in an era when the selling point was feature count.
                The more checkboxes on the comparison chart, the better. So they added
                marketplace integrations, salon booking, spa management, pet grooming
                scheduling, and a dozen other verticals that have nothing to do with running
                a gym. The result is a bloated platform where the features you actually need
                are buried under menus you will never click.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                GymWyse took the opposite approach. Every feature we build has to answer one
                question: &quot;Does this directly improve the gym owner&apos;s bottom line?&quot; If the
                answer is not a clear yes with a measurable dollar impact, we do not build it.
                That is why our churn prediction exists (saves an average of $1,710/mo), our
                smart payment retry exists (recovers $840/mo), and our per-class P&amp;L analytics
                exist (identifies $300-$800/mo in scheduling optimization opportunities). Every
                feature has a number attached to it.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                Mindbody will tell you they have 800+ integrations. Great. How many of those
                integrations measurably increase your revenue? GymWyse has 45 integrations,
                and every single one of them is purpose-built for gym and fitness studio
                operators. We integrate with the wearables your members actually use, the
                payment processors that optimize for fitness billing patterns, and the
                marketing tools that drive class bookings. Depth over breadth. ROI over
                checkbox count.
              </p>
              <p className="text-soft-white leading-relaxed">
                The gym owners who are winning in 2026 are not the ones with the most software
                features. They are the ones who can tell you their per-class profit margin,
                their 30-day churn risk by member segment, and their exact failed payment
                recovery rate. That is what ROI-first tech delivers. That is what GymWyse
                was built to do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            REGIONAL COMPLIANCE
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28 bg-midnight py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-sapphire-blue/10">
                  <Globe className="w-5 h-5 text-sapphire-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                  Regional Compliance: Built In, Not Bolted On
                </h2>
              </div>

              <div className="glass-card p-6 md:p-8 border border-glass-border">
                <p className="text-soft-white leading-relaxed mb-4">
                  If you operate in the United States, GymWyse is fully HIPAA-compliant for gyms
                  that handle health-related member data, including biometric screenings, personal
                  training assessments, and wearable device integrations. All member health data
                  is encrypted at rest and in transit with SOC 2 Type II certified infrastructure.
                  For payment processing, we support all major US ACH providers and maintain
                  PCI-DSS Level 1 compliance across every tier.
                </p>
                <p className="text-soft-white leading-relaxed mb-4">
                  In the United Kingdom, GymWyse is fully GDPR-compliant with automated data
                  subject access request handling, consent management, and right-to-erasure
                  workflows. Our billing engine natively supports BACS Direct Debit, which is
                  the standard payment rail for UK gym memberships, eliminating the third-party
                  middleware that Mindbody requires for UK operators. We also handle VAT
                  calculations and HMRC-ready reporting automatically.
                </p>
                <p className="text-soft-white leading-relaxed mb-4">
                  Australian operators benefit from native BPAY integration for membership
                  billing, GST-compliant invoicing, and data residency within Australian
                  data centers. We comply with the Australian Privacy Act and the Notifiable
                  Data Breaches scheme, which means your member data stays in-country and
                  any incidents trigger automated compliance workflows.
                </p>
                <p className="text-soft-white leading-relaxed">
                  For UAE-based gyms, GymWyse supports Arabic language interfaces, dirham
                  billing, and compliance with the UAE Federal Data Protection Law (PDPL).
                  We also integrate with local payment gateways including Network International
                  and Telr, and handle VAT reporting per Federal Tax Authority requirements.
                  Whether you operate in one market or across multiple regions, GymWyse adapts
                  to local regulatory requirements without manual configuration.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            EXPERT COMMENTARY
        ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-6 md:p-8 border border-electric-green/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-electric-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-electric-green/10">
                      <MessageSquareQuote className="w-5 h-5 text-electric-green" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-pure-white">
                      Insights from GymWyse Product Team
                    </h2>
                  </div>

                  <blockquote className="border-l-2 border-electric-green pl-5 mb-6">
                    <p className="text-lg text-soft-white leading-relaxed italic">
                      &quot;The fitness industry has a technology problem disguised as a feature
                      problem. Gym owners do not need more features. They need fewer features
                      that actually work and measurably improve their business. When we talk
                      to gym owners switching from Mindbody, the most common thing we hear is
                      not &apos;I wish I had more tools.&apos; It is &apos;I wish the tools I
                      am paying for actually did something I could measure.&apos; That insight
                      is the foundation of everything we build.&quot;
                    </p>
                  </blockquote>

                  <p className="text-soft-white leading-relaxed mb-4">
                    Our product philosophy is simple: every screen in GymWyse should show you
                    a number that matters. Not vanity metrics like &quot;total app downloads&quot;
                    or &quot;lifetime bookings&quot; that make you feel good but do not tell you
                    if your business is actually improving. We surface metrics like revenue per
                    available class slot, member lifetime value by acquisition channel, and
                    predicted revenue impact of schedule changes. These are decision-making
                    metrics, not dashboard decoration.
                  </p>
                  <p className="text-soft-white leading-relaxed">
                    We also believe that AI should be invisible. You should not have to
                    understand machine learning to benefit from it. When our churn prediction
                    flags a member, you do not see a probability score and a confusion matrix.
                    You see a plain-language alert that says &quot;Sarah has not visited in 18
                    days and skipped her last 3 bookings. Suggested action: send a personal
                    check-in.&quot; That is AI working for gym owners, not gym owners working
                    for AI.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            REAL COST SAVINGS EXAMPLES
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Real Cost Savings by Gym Type
              </h2>
              <p className="text-soft-white leading-relaxed mb-8">
                Different types of fitness businesses see different ROI profiles from switching.
                Here is what the data shows for the three most common gym types on our platform.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: "Independent Gym",
                    members: "300-800 members",
                    annualSaving: "$8,400-$16,800",
                    topBenefit: "Failed payment recovery drives the largest ROI. Independent gyms typically have less dedicated admin staff, so automated recovery replaces a part-time role.",
                    icon: Users,
                  },
                  {
                    type: "Boutique Studio",
                    members: "100-400 members",
                    annualSaving: "$5,200-$9,600",
                    topBenefit: "Per-class P&L analytics reveal which sessions to cut and which to add. Studios using this feature have increased per-session revenue by 22% through better scheduling.",
                    icon: Calendar,
                  },
                  {
                    type: "Multi-Location Operator",
                    members: "2,000+ members",
                    annualSaving: "$36,000-$72,000",
                    topBenefit: "Unified analytics and cross-location benchmarking eliminate hours of weekly reporting. The portfolio-level view catches underperforming locations months earlier.",
                    icon: Globe,
                  },
                ].map((gym, i) => (
                  <motion.div
                    key={gym.type}
                    className="glass-card p-6 border border-glass-border"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-electric-green/10 inline-flex mb-4">
                      <gym.icon className="w-5 h-5 text-electric-green" />
                    </div>
                    <h3 className="text-lg font-bold text-pure-white mb-1">{gym.type}</h3>
                    <p className="text-xs text-cool-gray mb-3">{gym.members}</p>
                    <p className="text-2xl font-mono font-bold text-electric-green mb-4">
                      {gym.annualSaving}
                      <span className="text-xs text-cool-gray font-normal ml-1">/year</span>
                    </p>
                    <p className="text-sm text-soft-white leading-relaxed">{gym.topBenefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION
        ════════════════════════════════════════════ */}
        <section className="pb-20 md:pb-28 bg-midnight py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-soft-white leading-relaxed mb-10">
                Straight answers to the questions gym owners ask before switching from Mindbody.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="glass-card border border-glass-border overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                      aria-expanded={openFaq === index}
                    >
                      <span className="text-sm md:text-base font-medium text-pure-white pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-electric-green" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 border-t border-glass-border pt-4">
                            <p className="text-sm text-cool-gray leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            BOTTOM CTA
        ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
                Ready to See What ROI-First Looks Like?
              </h2>
              <p className="text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
                Stop overpaying for features you never use. Start measuring the dollar impact
                of every tool in your stack. Book a personalized demo and we will walk through
                your specific ROI projection live on the call.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link href="/demo">
                  <Button variant="primary" size="xl">
                    Book Your Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button variant="secondary" size="xl">
                    <Calculator className="w-4 h-4" />
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-dim-gray">
                Free 14-day trial. No credit card required. Migration support included.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
