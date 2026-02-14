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
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Pricing", gymwyse: "$99/mo", competitor: "$117/mo" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$300+" },
  { label: "Contract", gymwyse: "Monthly", competitor: "Annual" },
  { label: "Revenue Analytics", gymwyse: "Full suite", competitor: "Basic reporting" },
  { label: "Churn Prediction", gymwyse: "AI-powered", competitor: "No" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified view", competitor: "Per-location pricing" },
  { label: "Failed Payment Recovery", gymwyse: "Included", competitor: "Manual follow-up" },
  { label: "Member Mobile App", gymwyse: "Included", competitor: "+$40/mo" },
  { label: "Support", gymwyse: "Email + live chat", competitor: "Email + phone (business hours)" },
];

const yearOneCosts = {
  zenplanner: [
    { item: "Setup fee", cost: "$300" },
    { item: "Monthly subscription (12 x $117)", cost: "$1,404" },
    { item: "Member app add-on (12 x $40)", cost: "$480" },
    { item: "Additional location fee", cost: "$117/ea" },
    { item: "Year 1 Total", cost: "$2,184", highlight: true },
  ],
  gymwyse: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 x $99)", cost: "$1,188" },
    { item: "Member app", cost: "Included" },
    { item: "Additional location fee", cost: "$79/ea" },
    { item: "Year 1 Total", cost: "$1,188", highlight: true },
  ],
};

const featureComparisons = [
  {
    title: "Revenue Analytics",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with growth trends",
      "Churn rate auto-calculated monthly",
      "Profit margin by service line (memberships, PT, classes)",
      "Revenue forecasting with 6-month projections",
      "Failed payment recovery tracking with success rates",
      "One-click P&L export for your accountant",
    ],
    competitor: [
      "Basic financial reports (revenue by plan type)",
      "No MRR tracking — calculate manually in a spreadsheet",
      "No churn rate visibility or trends",
      "No profit margin analysis by service",
      "CSV export only — build your own reports in Excel",
    ],
    winner: "GymWyse",
    impact:
      "Zen Planner gives you basic reporting but no real-time revenue intelligence. You cannot see MRR, churn trends, or profit margins without exporting data and building spreadsheets manually.",
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
      "No churn prediction capability",
      "No at-risk member identification",
      "Manual outreach only — you notice after they cancel",
      "No engagement scoring or tracking",
    ],
    winner: "GymWyse",
    impact:
      "For a 450-member CrossFit box: GymWyse catches 5 at-risk members per month that Zen Planner misses. At $150/month per CrossFit member, that is $750/month or $9,000/year in saved revenue.",
  },
  {
    title: "Multi-Location Management",
    icon: Building2,
    gymwyse: [
      "One login, all locations visible",
      "Unified portfolio dashboard (total MRR, members, churn)",
      "Cross-location analytics (compare Box A vs Box B performance)",
      "Volume pricing: $79/location for 2-5 locations",
    ],
    competitor: [
      "Full price per location ($117 each, no volume discount)",
      "Limited multi-location overview tools",
      "No cross-location benchmarking or comparison",
      "Separate billing per facility",
    ],
    winner: "GymWyse",
    impact:
      "A 3-location CrossFit affiliate on Zen Planner pays $351/month ($117 x 3). On GymWyse: $257/month ($99 + $79 + $79). That is $94/month or $1,128/year saved — before counting better analytics.",
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
      "Costs $40/month extra for branded app",
      "Basic features (schedule, check-in, payments)",
      "No AI coaching or personalization",
      "No wearable device integration",
    ],
    winner: "GymWyse",
    impact: "Better features with AI coaching and wearable sync, and $480/year cheaper than Zen Planner's app add-on.",
  },
  {
    title: "Gym-Specific Features",
    icon: Calendar,
    gymwyse: [
      "Belt rank and skill progression tracking",
      "WOD/class programming with performance logging",
      "Equipment QR code system for maintenance reporting",
      "Automated billing with smart failed payment recovery",
    ],
    competitor: [
      "Belt rank tracking available but manual process",
      "WOD tracking with basic logging",
      "No equipment management system",
      "Standard billing with manual payment follow-up",
    ],
    winner: "GymWyse",
    impact:
      "Zen Planner has solid gym-specific features but lacks the automation layer. Belt rank tracking alone saves coaches 30 minutes per day when automated through GymWyse.",
  },
];

const switchReasons = [
  {
    title: "\"Our Churn Was Invisible Until Members Were Already Gone\"",
    problem:
      "Zen Planner does not predict churn or flag at-risk members. In a CrossFit box where community is everything, losing a member often means losing their training partner too. You only find out when the cancellation email arrives.",
    solution:
      "GymWyse AI monitors attendance patterns, payment behavior, and engagement signals. It flags members 30 days before they are likely to cancel. Your coaches can reach out personally — \"Hey, we noticed you have not been in this week. Everything okay?\" — and save them before they leave.",
    caseStudy:
      "Iron Republic (Austin) caught 8 at-risk members in their first month on GymWyse. Coaches reached out to all 8. Saved 6 of them. At $150/month per member, that is $900/month in retained revenue.",
  },
  {
    title: "\"I Was Paying Full Price for Every Location\"",
    problem:
      "Zen Planner charges $117 per location with no volume discount. For affiliate owners expanding to 2-3 boxes, costs scale linearly. A 3-location operation pays $351/month before any add-ons.",
    solution:
      "GymWyse offers volume pricing: $99 for your first location, $79 each for locations 2-5. A 3-location operation pays $257/month. Plus you get a unified dashboard comparing performance across all locations — something Zen Planner cannot do.",
    caseStudy: null,
  },
  {
    title: "\"Belt Rank Tracking Was Eating Up Our Coaches' Time\"",
    problem:
      "For martial arts and BJJ gyms on Zen Planner, belt rank and skill progression tracking is a manual process. Coaches spend 20-30 minutes per day updating records, checking requirements, and managing promotions across spreadsheets.",
    solution:
      "GymWyse automates belt rank progression. Set requirements (attendance count, skill checkoffs, time-in-rank), and the system tracks everything automatically. Coaches get notified when a student is eligible for promotion. No spreadsheets, no manual tracking.",
    caseStudy:
      "Iron Republic's MMA program had 120 students across 6 belt levels. Their head coach was spending 30 minutes daily on rank tracking. GymWyse automated the entire process — that is 15 hours per month back for actual coaching.",
  },
];

const faqItems = [
  {
    question: "How long does migration from Zen Planner take?",
    answer:
      "7 to 10 days with zero downtime. We export your member data, payment methods, attendance history, and class schedules from Zen Planner. Members keep booking classes throughout the entire process. Most staff pick up GymWyse in under 30 minutes.",
  },
  {
    question: "What about my annual Zen Planner contract?",
    answer:
      "If you are mid-contract, you will need to pay out the remaining months. Even with cancellation fees, most gyms break even within 4-5 months on GymWyse due to lower subscription cost, recovered revenue from churn prevention, and eliminated add-on fees.",
  },
  {
    question: "Does GymWyse support CrossFit-specific features like WODs?",
    answer:
      "Yes. GymWyse supports WOD programming, performance logging, benchmark tracking, and leaderboard features. Plus you get AI-powered analytics on top — see which class times have highest retention, which WOD styles drive the most attendance, and which members are disengaging.",
  },
  {
    question: "Can I track belt ranks and martial arts progression?",
    answer:
      "Yes. GymWyse has automated belt rank progression tracking. Set requirements per rank (attendance count, skills, time-in-rank), and the system tracks everything automatically. Coaches get notified when students are eligible for promotion. No spreadsheets needed.",
  },
  {
    question: "Will my members need to download a new app?",
    answer:
      "Yes. Members download the GymWyse member app (iOS and Android). We provide pre-written announcement templates for email and SMS. The app includes AI coaching, wearable sync, and workout tracking — most members find it a significant upgrade.",
  },
  {
    question: "What if GymWyse does not work out for us?",
    answer:
      "Month-to-month contract means you can cancel anytime with 30 days notice. No penalty, no remaining balance, no cancellation fee. Export your data and go back to Zen Planner or try something else. Zero risk.",
  },
];

export function ZenPlannerComparison() {
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
              GymWyse vs Zen Planner
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Save $114+/month, get AI-powered churn prediction, and ditch the
              annual contract. Built for CrossFit boxes, MMA gyms, and martial
              arts studios who need more than basic reporting.
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
                Zen Planner
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
              Zen Planner&apos;s base price does not include the mobile app
              add-on or multi-location fees. Here is what Year 1 actually
              costs for a single location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Zen Planner */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Zen Planner Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.zenplanner.map((item, i) => (
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
              You save in Year 1:
            </div>
            <div className="text-4xl font-bold text-electric-green font-mono">
              $996
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from churn prevention and
              AI-powered analytics
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
                      Zen Planner
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
            Why Gyms Switch from Zen Planner
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
              We handle data export from Zen Planner, member import, staff
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
            What Former Zen Planner Users Say
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
                JR
              </div>
              <div>
                <div className="text-base font-semibold text-pure-white">
                  Iron Republic
                </div>
                <div className="text-xs text-dim-gray">Austin, TX &mdash; CrossFit box, 450 members</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-dim-gray uppercase mb-1">
                  Before
                </div>
                <p className="text-sm text-cool-gray">
                  Zen Planner: $117/month + $40/month app add-on. Annual contract. No churn visibility. Belt rank tracking for their MMA program was entirely manual — head coach spent 30 minutes daily on spreadsheets.
                </p>
              </div>
              <div>
                <div className="text-xs text-electric-green uppercase mb-1">
                  After
                </div>
                <p className="text-sm text-soft-white">
                  GymWyse: $99/month, everything included. Churn dropped from 3.8% to 2.6%. Automated belt rank tracking saved 30 minutes per day. AI flagged 8 at-risk members in the first month — saved 6 of them.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Subscription saved", value: "$114/mo" },
                { label: "Churn reduction", value: "3.8% to 2.6%" },
                { label: "Coach time saved", value: "30 min/day" },
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
                &ldquo;Zen Planner worked fine for scheduling, but we had zero visibility into who was about to leave. GymWyse flagged members we would have lost. The belt rank automation alone was worth the switch — our head coach got 15 hours a month back.&rdquo;
              </p>
              <div className="text-xs text-dim-gray mt-2">
                — Jake Rodriguez, Owner
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
              <span>Iron Republic (Austin, TX)</span>
              <span>&bull;</span>
              <span>CrossFit boxes and MMA gyms nationwide</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
