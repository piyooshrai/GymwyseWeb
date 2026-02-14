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
  { label: "Pricing", gymwyse: "$99/mo", competitor: "$129/mo" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$500+" },
  { label: "Contract", gymwyse: "Monthly", competitor: "12 months" },
  { label: "Revenue Analytics", gymwyse: "Included", competitor: "Not available" },
  { label: "Churn Prediction", gymwyse: "AI-powered", competitor: "No" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified view", competitor: "Separate logins" },
  { label: "Failed Payment Recovery", gymwyse: "Included", competitor: "+$50/mo" },
  { label: "Member Mobile App", gymwyse: "Included", competitor: "+$50/mo" },
  { label: "Support", gymwyse: "Email + live chat", competitor: "Email only" },
];

const yearOneCosts = {
  mindbody: [
    { item: "Setup fee", cost: "$500" },
    { item: "Monthly subscription (12 × $129)", cost: "$1,548" },
    { item: "Member app add-on (12 × $50)", cost: "$600" },
    { item: "Payment recovery add-on (12 × $50)", cost: "$600" },
    { item: "Year 1 Total", cost: "$3,248", highlight: true },
  ],
  gymwyse: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 × $99)", cost: "$1,188" },
    { item: "Member app", cost: "Included" },
    { item: "Payment recovery", cost: "Included" },
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
      "Profit margin by service line",
      "Revenue forecasting (6-month projections)",
      "Failed payment recovery tracking",
      "One-click P&L export for accountant",
    ],
    competitor: [
      "Basic reports (revenue by service, by staff)",
      "No MRR tracking — calculate manually",
      "No churn rate visibility",
      "No profit margin analysis",
      "Export to CSV — build in Excel yourself",
    ],
    winner: "GymWyse",
    impact:
      "Mindbody does not offer real-time revenue analytics. You are flying blind on MRR, churn, and profit margins.",
  },
  {
    title: "Churn Prevention",
    icon: Users,
    gymwyse: [
      "AI predicts churn 30 days early",
      "Auto-flags at-risk members (declining attendance, missed payments)",
      "Automated win-back campaigns via email and SMS",
      "Engagement scoring per member",
    ],
    competitor: [
      "No churn prediction",
      "No at-risk member identification",
      "Manual outreach — you notice after they cancel",
    ],
    winner: "GymWyse",
    impact:
      "For a 520-member gym: GymWyse catches 6 members per month that Mindbody misses. At $87/month per member, that is $522/month or $6,264/year saved.",
  },
  {
    title: "Multi-Location Management",
    icon: Building2,
    gymwyse: [
      "One login, all locations visible",
      "Unified portfolio dashboard (total MRR, members, churn)",
      "Cross-location analytics (compare Location A churn 1.8% vs Location B 3.2%)",
      "See which location is profitable instantly",
    ],
    competitor: [
      "Separate login per location",
      "No unified dashboard",
      "Manual consolidation (export each CSV, combine in Excel)",
      "Cannot compare locations without manual work",
    ],
    winner: "GymWyse",
    impact:
      "A 4-location gym owner on Mindbody: \"I logged into 4 dashboards every morning. 30 minutes just to see our numbers.\" On GymWyse: 30 seconds.",
  },
  {
    title: "Member Mobile App",
    icon: Smartphone,
    gymwyse: [
      "Included (no extra cost)",
      "AI Avatar coaches (6 personalities)",
      "Wearable sync (Apple Health, WHOOP, Garmin)",
      "Workout tracking + progress photos",
      "Challenges and gamification",
    ],
    competitor: [
      "Costs $50/month extra",
      "Basic features (book classes, view schedule)",
      "No AI coaching",
      "No wearable sync",
    ],
    winner: "GymWyse",
    impact: "Better features, $600/year cheaper.",
  },
  {
    title: "Failed Payment Recovery",
    icon: CreditCard,
    gymwyse: [
      "Included (no extra cost)",
      "Auto-retry 3× over 7 days at optimal times",
      "Email + SMS notifications to members",
      "Self-service recovery portal",
      "Recovery rate: 40-50%",
    ],
    competitor: [
      "Add-on ($50/month extra)",
      "Auto-retry 2×",
      "Email notification only",
      "Manual follow-up required after 2 failures",
      "Recovery rate: 10-15%",
    ],
    winner: "GymWyse",
    impact:
      "Average gym loses $5,000/month to failed payments. Mindbody recovers ~$500 (10%). GymWyse recovers ~$2,000 (40%). Difference: $1,500/month = $18,000/year.",
  },
  {
    title: "Customer Support",
    icon: Headphones,
    gymwyse: [
      "Email support (12-24 hour response)",
      "Live chat (business hours)",
      "Video tutorials and knowledge base",
      "No extra cost for support",
    ],
    competitor: [
      "Email support (24-48 hour response)",
      "Phone support costs $99/month extra",
      "Knowledge base",
      "Community forum",
    ],
    winner: "GymWyse",
    impact: "Better response time. Mindbody charges $99/month for phone support that GymWyse includes free.",
  },
];

const switchReasons = [
  {
    title: "\"I Had No Idea We Were Losing Money\"",
    problem:
      "Mindbody does not show profit margins. You see revenue by service but not how much a PT session actually costs you (trainer pay + equipment + overhead), which classes are profitable, or whether retail is worth it.",
    solution:
      "GymWyse shows profit margin per service: Memberships 68% margin, PT sessions 42%, Group classes 71%, Retail 28%. You optimize. Cut low-margin services, invest in high-margin ones.",
    caseStudy:
      "Apex Performance Lab (DTLA) discovered their Intro PT Package (3 sessions for $99) was losing money — trainer cost was $120. They stopped offering it, switched to a 5-session minimum, and profitability improved $3,600/month.",
  },
  {
    title: "\"Members Were Canceling and I Didn't Know Why\"",
    problem:
      "Mindbody does not track churn or identify at-risk members. You find out someone canceled when they cancel. By then it is too late.",
    solution:
      "GymWyse AI flags members before they leave: declining attendance (4×/week to 1×/week), missed payments, no bookings in 14 days. You intervene early with personalized outreach.",
    caseStudy:
      "The Foundry (London) caught 23 at-risk members in the first month. Sent personalized outreach. Saved 18 of them. That is £3,600/month in saved revenue.",
  },
  {
    title: "\"I Was Paying $250+ When I Added Everything Up\"",
    problem:
      "Mindbody base price looks reasonable at $129/month. But add the member app ($50), payment recovery ($50), marketing tools ($29), and priority support ($99) and you are paying $357/month.",
    solution:
      "GymWyse all-in: $99/month. Everything included. Save $258/month or $3,096/year.",
    caseStudy: null,
  },
  {
    title: "\"The 12-Month Contract Felt Like a Trap\"",
    problem:
      "Mindbody locks you in for 12 months. Want to leave at month 6? Pay the remaining 6 months ($774 cancellation fee).",
    solution:
      "GymWyse is month-to-month. Cancel anytime with 30 days notice. No penalty. No cancellation fee.",
    caseStudy: null,
  },
];

const faqItems = [
  {
    question: "Is switching really worth the hassle?",
    answer:
      "Yes. Migration takes 7 to 10 days, one time. You save $2,000+ per year permanently, plus gain better features like churn prediction and revenue analytics that Mindbody does not offer. Most gyms break even within the first month.",
  },
  {
    question: "What happens to my Mindbody contract if I switch mid-year?",
    answer:
      "You pay the remaining months on your Mindbody contract. Even with cancellation fees, most gyms break even within 6 months on GymWyse due to recovered revenue from churn prevention and failed payment recovery.",
  },
  {
    question: "Will my members need to re-download a new app?",
    answer:
      "Yes. Members download the GymWyse member app (iOS and Android). We provide a pre-written announcement email and SMS template to send them. Most members do not even notice the difference — they still book classes and check in like normal.",
  },
  {
    question: "Do I lose my historical data?",
    answer:
      "No. We import your full member history including join dates, attendance records, purchase history, and payment methods. Nothing is lost during migration.",
  },
  {
    question: "Can I try GymWyse before committing to switch?",
    answer:
      "Yes. Start a 14-day free trial with full access to all features. Import your data, show your staff, and poke around. No credit card required. No commitment.",
  },
  {
    question: "What if I hate GymWyse after switching?",
    answer:
      "Month-to-month contract means you can cancel anytime. Export your data and go back to Mindbody or try something else. No penalty, no remaining balance, no cancellation fee.",
  },
  {
    question: "Does GymWyse work in the UK, Australia, and UAE?",
    answer:
      "Yes. GymWyse supports BACS Direct Debit (UK), BPAY (Australia), and multi-currency billing (UAE). Pricing is localized in GBP, AUD, and AED. We support 12+ countries.",
  },
  {
    question: "How long does migration from Mindbody take?",
    answer:
      "7 to 10 days with zero downtime. Day 1-2: data export. Day 3-5: data import. Day 6: staff training (2 hours). Day 7-9: optional parallel run. Day 10: go live. Members keep booking classes throughout the entire process.",
  },
];

export function MindbodyComparison() {
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
              GymWyse vs Mindbody
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Save $500+/month, get better features, and escape the 12-month
              contract. Here is the honest, point-by-point comparison.
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
                Mindbody
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
              Mindbody&apos;s base price looks reasonable until you add the
              extras. Here is what Year 1 actually costs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mindbody */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Mindbody Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.mindbody.map((item, i) => (
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
              $2,060
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from churn prevention and
              payment recovery
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
                      Mindbody
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
            Why Gyms Switch from Mindbody
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
              We handle data export, member import, staff training, and
              go-live. Your members keep booking classes throughout the entire
              process. Most staff pick up GymWyse in 20 minutes.
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

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Former Mindbody Users Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                gym: "Apex Performance Lab",
                location: "Los Angeles, 4 locations",
                initials: "MC",
                before:
                  "Mindbody: $516/month. Separate dashboards per location. No idea which was profitable.",
                after:
                  "GymWyse: $316/month. One dashboard. Discovered Pasadena location was losing money — shifted marketing, attendance +32%.",
                results: [
                  { label: "Subscription saved", value: "$200/mo" },
                  { label: "Profit increase", value: "$8,400/mo" },
                ],
                quote:
                  "Mindbody couldn't show us which location was bleeding cash. GymWyse showed us in 5 minutes.",
                author: "Marcus Chen",
                role: "Owner",
              },
              {
                gym: "The Foundry",
                location: "London, 2 locations",
                initials: "SP",
                before:
                  "Mindbody UK: £129/month. No churn visibility. Failed payments recovered manually.",
                after:
                  "GymWyse: £79/month. 23 at-risk members flagged in first month. 42% payment recovery rate.",
                results: [
                  { label: "Churn reduction", value: "3.8% → 2.1%" },
                  { label: "Monthly impact", value: "+£4,800" },
                ],
                quote:
                  "Mindbody was like driving blind. GymWyse turned the lights on.",
                author: "Sarah Patel",
                role: "Owner",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-pure-white">
                      {t.gym}
                    </div>
                    <div className="text-xs text-dim-gray">{t.location}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs text-dim-gray uppercase mb-1">
                      Before
                    </div>
                    <p className="text-sm text-cool-gray">{t.before}</p>
                  </div>
                  <div>
                    <div className="text-xs text-electric-green uppercase mb-1">
                      After
                    </div>
                    <p className="text-sm text-soft-white">{t.after}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {t.results.map((r, j) => (
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
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="text-xs text-dim-gray mt-2">
                    — {t.author}, {t.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <span>Apex Performance Lab (Los Angeles)</span>
              <span>&bull;</span>
              <span>The Foundry (London)</span>
              <span>&bull;</span>
              <span>Southern Cross Performance (Sydney)</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
