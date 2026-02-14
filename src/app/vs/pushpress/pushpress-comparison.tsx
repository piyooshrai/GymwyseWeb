"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Users,
  BarChart3,
  Smartphone,
  CreditCard,
  Building2,
  Headphones,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Pricing", gymwyse: "$99/mo", competitor: "Free / $159 / $249 (tiered)" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$0" },
  { label: "Contract", gymwyse: "Monthly", competitor: "Monthly" },
  { label: "Revenue Analytics", gymwyse: "Full suite", competitor: "Basic (Pro) / Limited (Max)" },
  { label: "Churn Prediction", gymwyse: "AI-powered", competitor: "No" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified view", competitor: "Max tier only ($249/mo)" },
  { label: "Failed Payment Recovery", gymwyse: "Included", competitor: "Pro+ only" },
  { label: "Member Mobile App", gymwyse: "Included", competitor: "Included" },
  { label: "Support", gymwyse: "Email + live chat", competitor: "Tiered (email / priority / dedicated)" },
];

const yearOneCosts = {
  pushpress: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 \u00D7 $159 Pro)", cost: "$1,908" },
    { item: "Member app", cost: "Included" },
    { item: "Advanced reporting (Max upgrade)", cost: "+$90/mo" },
    { item: "Year 1 Total (Pro)", cost: "$1,908", highlight: true },
  ],
  gymwyse: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 \u00D7 $99)", cost: "$1,188" },
    { item: "Member app", cost: "Included" },
    { item: "Advanced reporting", cost: "Included" },
    { item: "Year 1 Total", cost: "$1,188", highlight: true },
  ],
};

const featureComparisons = [
  {
    title: "Revenue Analytics",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with growth trends",
      "Churn rate auto-calculated monthly with trend lines",
      "Profit margin by service line (memberships, PT, retail)",
      "Revenue forecasting with 6-month projections",
      "Failed payment recovery tracking with success rates",
      "One-click P&L export for your accountant",
    ],
    competitor: [
      "Basic revenue reports on Pro tier",
      "No MRR tracking or trend analysis",
      "No profit margin breakdown by service",
      "No revenue forecasting",
      "CSV export — build your own dashboards",
    ],
    winner: "GymWyse",
    impact:
      "PushPress Pro gives you basic revenue numbers but no intelligence layer. To get better reporting, you need the Max tier at $249/month — and even then, there is no MRR tracking, churn rate calculation, or profit margin analysis.",
  },
  {
    title: "Churn Prevention",
    icon: Users,
    gymwyse: [
      "AI predicts churn 30 days before cancellation",
      "Auto-flags at-risk members (declining attendance, missed payments)",
      "Automated win-back campaigns via email and SMS",
      "Engagement scoring per member with trend tracking",
    ],
    competitor: [
      "No churn prediction on any tier",
      "No at-risk member identification",
      "Manual outreach only — you notice after they cancel",
      "No engagement scoring or member health metrics",
    ],
    winner: "GymWyse",
    impact:
      "For a 340-member functional fitness gym: GymWyse catches 4 at-risk members per month that PushPress misses. At $130/month per member, that is $520/month or $6,240/year in saved revenue.",
  },
  {
    title: "Retail and Inventory Tracking",
    icon: ShoppingCart,
    gymwyse: [
      "Full retail POS with inventory tracking",
      "Shrinkage detection with variance alerts",
      "Profit margin per product category",
      "Automated reorder notifications",
    ],
    competitor: [
      "Basic POS for retail sales",
      "No shrinkage or variance detection",
      "No product-level profit analysis",
      "Manual inventory management",
    ],
    winner: "GymWyse",
    impact:
      "The average gym loses 3-5% of retail revenue to shrinkage (theft, miscounts, expired products). GymWyse detects these losses automatically. For a gym doing $7,000/month in retail, that is $2,520-$4,200/year in recovered revenue.",
  },
  {
    title: "Member Mobile App",
    icon: Smartphone,
    gymwyse: [
      "Included at no extra cost",
      "AI Avatar coaches (6 personalities for motivation)",
      "Wearable sync (Apple Health, WHOOP, Garmin)",
      "Workout tracking with progress photos",
      "Challenges and gamification to boost retention",
    ],
    competitor: [
      "Included on all tiers",
      "Class booking and check-in",
      "Basic workout logging",
      "No AI coaching or personalization",
      "No wearable device integration",
    ],
    winner: "GymWyse",
    impact: "Both include a member app, but GymWyse adds AI coaching, wearable sync, and gamification that drive 40% higher engagement and measurably lower churn.",
  },
  {
    title: "Pricing Transparency",
    icon: CreditCard,
    gymwyse: [
      "One plan: $99/month, everything included",
      "No feature gating behind higher tiers",
      "Volume pricing for multi-location ($79/location for 2-5)",
      "Month-to-month, cancel anytime",
    ],
    competitor: [
      "Free tier is very limited (basic scheduling only)",
      "Pro ($159/mo) unlocks most features but lacks analytics",
      "Max ($249/mo) needed for advanced features",
      "Feature-gated tiers create upgrade pressure",
    ],
    winner: "GymWyse",
    impact:
      "PushPress Core (free) gets you started, but growing gyms quickly need Pro ($159/mo) or Max ($249/mo). GymWyse includes everything — analytics, churn prediction, payment recovery — for $99/month. No tier upgrades, no feature surprises.",
  },
];

const switchReasons = [
  {
    title: "\"The Free Tier Got Us In, But We Outgrew It Fast\"",
    problem:
      "PushPress Core (free) is attractive for brand-new gyms, but it is severely limited: basic scheduling, no analytics, no automations, limited support. Most gyms outgrow it within 3-6 months and upgrade to Pro at $159/month — a 60% price jump over GymWyse with fewer analytics features.",
    solution:
      "GymWyse starts at $99/month with everything included from day one. No feature gating, no tier upgrades, no surprise costs. You get the same analytics, churn prediction, and payment recovery whether you have 50 members or 500.",
    caseStudy:
      "Summit Strength (Denver) started on PushPress Core, upgraded to Pro at $159/month within 4 months, then realized they still did not have the analytics they needed. Switched to GymWyse at $99/month and got better reporting, churn prediction, and retail tracking — saving $60/month immediately.",
  },
  {
    title: "\"We Had No Idea We Were Losing $4,200 a Year in Retail\"",
    problem:
      "PushPress offers basic POS for retail sales but no inventory analytics. Functional fitness gyms selling supplements, apparel, and equipment accessories had no way to track shrinkage (theft, expired products, miscounts). Revenue looked fine on the surface, but money was disappearing.",
    solution:
      "GymWyse retail analytics track every product: cost, margin, shrinkage rate, and reorder point. Variance alerts flag when inventory does not match sales records. You see exactly where retail revenue is leaking and fix it.",
    caseStudy:
      "Summit Strength ran GymWyse retail analytics against their supplement and apparel inventory. Discovered $4,200/year in shrinkage — mostly expired protein powder that was never pulled from shelves and apparel miscounts. Automated reorder alerts and expiry tracking eliminated 90% of the loss.",
  },
  {
    title: "\"Churn Was Our Biggest Problem and PushPress Couldn't Help\"",
    problem:
      "PushPress has no churn prediction on any tier. In functional fitness gyms where members often train in groups, losing one member can trigger a cascade — their training partner stops coming, then their friend. By the time you notice the cancellation, you have lost 2-3 members.",
    solution:
      "GymWyse AI monitors attendance patterns, payment behavior, and engagement signals across every member. It flags at-risk members 30 days before they are likely to cancel. Your coaches intervene early with personalized outreach, saving members before the cascade starts.",
    caseStudy:
      "Summit Strength's churn dropped 22% in the first 3 months on GymWyse. AI flagged 12 at-risk members that coaches would have missed. They saved 9 of them through personal outreach. At $130/month per member, that is $1,170/month in retained revenue.",
  },
];

const faqItems = [
  {
    question: "How long does migration from PushPress take?",
    answer:
      "7 to 10 days with zero downtime. We export your member data, payment methods, attendance history, and class schedules from PushPress. Members keep booking classes throughout the entire process. Most staff pick up GymWyse in under 30 minutes.",
  },
  {
    question: "PushPress is month-to-month too. Why switch?",
    answer:
      "Both are month-to-month, which is great. The difference is what you get for the price. PushPress Pro at $159/month lacks churn prediction, advanced analytics, and retail tracking. GymWyse at $99/month includes all of those. You save $60/month and get better features.",
  },
  {
    question: "What if I am on PushPress Core (free)?",
    answer:
      "PushPress Core works for very basic scheduling but lacks analytics, automations, payment recovery, and priority support. If you are outgrowing Core, GymWyse at $99/month gives you everything PushPress Max offers ($249/month) and more — including AI churn prediction that PushPress does not have on any tier.",
  },
  {
    question: "Does GymWyse support functional fitness and CrossFit?",
    answer:
      "Yes. GymWyse supports WOD programming, performance logging, benchmark tracking, leaderboards, and class scheduling. Plus you get AI-powered analytics on top — see which class times have highest retention, which programming styles drive the most attendance, and which members are disengaging.",
  },
  {
    question: "Will my members need to download a new app?",
    answer:
      "Yes. Members download the GymWyse member app (iOS and Android). We provide pre-written announcement templates for email and SMS. The app includes AI coaching, wearable sync, and workout tracking — most members find it a significant upgrade over the PushPress member experience.",
  },
  {
    question: "What if GymWyse does not work out for us?",
    answer:
      "Month-to-month contract means you can cancel anytime with 30 days notice. No penalty, no remaining balance, no cancellation fee. Export your data and go back to PushPress or try something else. Zero risk — same flexibility you have with PushPress.",
  },
];

export function PushPressComparison() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Honest Comparison
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              GymWyse vs PushPress
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Get more features for $60/month less. AI-powered churn
              prediction, retail analytics, and real-time revenue dashboards
              — all included at $99/month. No tier upgrades needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Switch to GymWyse
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Quick Comparison
          </motion.h2>

          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
              <div className="p-5 text-sm font-semibold text-dim-gray">
                Feature
              </div>
              <div className="p-5 text-sm font-semibold text-electric-green text-center">
                GymWyse
              </div>
              <div className="p-5 text-sm font-semibold text-dim-gray text-center">
                PushPress
              </div>
            </div>
            {quickMetrics.map((m, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-glass-border/50 last:border-0 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                }`}
              >
                <div className="p-4 text-sm text-pure-white font-medium">
                  {m.label}
                </div>
                <div className="p-4 text-sm text-electric-green text-center flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {m.gymwyse}
                </div>
                <div className="p-4 text-sm text-cool-gray text-center">
                  {m.competitor}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real Cost Comparison */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              The Real Cost Comparison
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              PushPress Core is free but extremely limited. Most growing
              gyms need Pro ($159/month) or Max ($249/month). Here is what
              Year 1 costs on PushPress Pro vs GymWyse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PushPress */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                PushPress Pro Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.pushpress.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      item.highlight
                        ? "pt-4 border-t border-glass-border"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-semibold text-pure-white"
                          : "text-cool-gray"
                      }`}
                    >
                      {item.item}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        item.highlight ? "text-alert-red text-xl" : "text-alert-red"
                      }`}
                    >
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GymWyse */}
            <motion.div
              className="glass-card p-8 border-electric-green/20 bg-electric-green/[0.03]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                GymWyse Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.gymwyse.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      item.highlight
                        ? "pt-4 border-t border-glass-border"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-semibold text-pure-white"
                          : "text-cool-gray"
                      }`}
                    >
                      {item.item}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        item.highlight
                          ? "text-electric-green text-xl"
                          : "text-electric-green"
                      }`}
                    >
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto mt-8 glass-card p-6 bg-electric-green/[0.05] border-electric-green/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-soft-white mb-1">
              You save in Year 1 (vs PushPress Pro):
            </div>
            <div className="text-4xl font-bold text-electric-green font-mono">
              $720
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from churn prevention, retail
              shrinkage detection, and AI-powered analytics
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature-by-Feature Breakdown */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Feature-by-Feature Breakdown
          </motion.h2>

          <div className="space-y-12">
            {featureComparisons.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white">
                    {feature.title}
                  </h3>
                  <span className="ml-auto px-3 py-1 text-xs font-medium bg-electric-green/20 text-electric-green rounded-full">
                    Winner: {feature.winner}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-electric-green uppercase tracking-wider mb-4">
                      GymWyse
                    </h4>
                    <div className="space-y-2">
                      {feature.gymwyse.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-electric-green mt-0.5 shrink-0" />
                          <span className="text-sm text-cool-gray">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-alert-red uppercase tracking-wider mb-4">
                      PushPress
                    </h4>
                    <div className="space-y-2">
                      {feature.competitor.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-alert-red mt-0.5 shrink-0" />
                          <span className="text-sm text-cool-gray">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <p className="text-sm text-soft-white italic">
                    {feature.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gyms Switch */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Gyms Switch from PushPress
          </motion.h2>

          <div className="space-y-8">
            {switchReasons.map((reason, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  {reason.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-alert-red" />
                      <span className="text-xs text-alert-red uppercase font-medium tracking-wider">
                        The Problem
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {reason.problem}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-electric-green" />
                      <span className="text-xs text-electric-green uppercase font-medium tracking-wider">
                        The Solution
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {reason.solution}
                    </p>
                  </div>
                </div>
                {reason.caseStudy && (
                  <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border mt-4">
                    <p className="text-sm text-soft-white italic">
                      {reason.caseStudy}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="py-16 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="glass-card p-8 md:p-10 border border-electric-green/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-pure-white mb-4">
              Switching Takes 7-10 Days. Zero Downtime.
            </h3>
            <p className="text-sm text-cool-gray max-w-xl mx-auto mb-6">
              We handle data export from PushPress, member import, staff
              training, and go-live. Your members keep booking classes
              throughout the entire process. Most staff pick up GymWyse in
              20 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/migration">
                <Button variant="secondary" size="lg">
                  See Full Migration Process
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Your Migration
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Former PushPress Users Say
          </motion.h2>

          <motion.div
            className="glass-card p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                TM
              </div>
              <div>
                <div className="text-base font-semibold text-pure-white">
                  Summit Strength
                </div>
                <div className="text-xs text-dim-gray">Denver, CO &mdash; functional fitness, 340 members</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-dim-gray uppercase mb-1">
                  Before
                </div>
                <p className="text-sm text-cool-gray">
                  PushPress Pro: $159/month. Basic reporting only — no churn visibility, no retail analytics. Supplement and apparel inventory was managed on a spreadsheet. Had no idea they were losing $4,200/year in retail shrinkage.
                </p>
              </div>
              <div>
                <div className="text-xs text-electric-green uppercase mb-1">
                  After
                </div>
                <p className="text-sm text-soft-white">
                  GymWyse: $99/month, everything included. Retail analytics immediately uncovered $4,200/year in shrinkage. Churn dropped 22% in the first quarter. AI flagged 12 at-risk members in the first month — coaches saved 9 of them through personal outreach.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Subscription saved", value: "$60/mo" },
                { label: "Churn reduction", value: "22%" },
                { label: "Retail shrinkage found", value: "$4,200/yr" },
              ].map((r, j) => (
                <div key={j} className="text-center py-2">
                  <div className="text-lg font-bold text-electric-green font-mono">
                    {r.value}
                  </div>
                  <div className="text-xs text-dim-gray">{r.label}</div>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-electric-green/30 pl-4">
              <p className="text-sm text-soft-white italic">
                &ldquo;PushPress was solid for scheduling and basic gym management, but we were flying blind on analytics. GymWyse showed us things we never knew — $4,200 in retail shrinkage, 12 members about to leave, and which class times were actually profitable. The switch paid for itself in the first month.&rdquo;
              </p>
              <div className="text-xs text-dim-gray mt-2">
                — Tyler Morrison, Owner
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-base font-medium text-pure-white pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
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
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Ready to Make the Switch?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              14-day free trial. No credit card. No contract. Cancel anytime.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-6 text-xs text-cool-gray">
              <span>Summit Strength (Denver, CO)</span>
              <span>&bull;</span>
              <span>Functional fitness gyms nationwide</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
