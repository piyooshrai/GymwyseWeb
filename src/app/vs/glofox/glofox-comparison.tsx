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
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Pricing", gymwyse: "$99/mo", competitor: "\u00A399-199/mo (tiered)" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "\u00A3200" },
  { label: "Contract", gymwyse: "Monthly", competitor: "12 months" },
  { label: "Revenue Analytics", gymwyse: "Full suite", competitor: "Limited" },
  { label: "Churn Prediction", gymwyse: "AI-powered", competitor: "No" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified view", competitor: "Basic overview" },
  { label: "Failed Payment Recovery", gymwyse: "Included", competitor: "Manual process" },
  { label: "Member Mobile App", gymwyse: "Included", competitor: "Included" },
  { label: "US Support Hours", gymwyse: "Email + live chat", competitor: "Limited (UK-based team)" },
];

const yearOneCosts = {
  glofox: [
    { item: "Setup fee", cost: "\u00A3200" },
    { item: "Monthly subscription (12 \u00D7 \u00A3149 avg)", cost: "\u00A31,788" },
    { item: "Additional location fees", cost: "\u00A3149/ea" },
    { item: "Premium support add-on", cost: "\u00A3360" },
    { item: "Year 1 Total", cost: "\u00A32,348", highlight: true },
  ],
  gymwyse: [
    { item: "Setup fee", cost: "\u00A30" },
    { item: "Monthly subscription (12 \u00D7 \u00A379)", cost: "\u00A3948" },
    { item: "Additional location fees", cost: "\u00A363/ea" },
    { item: "Premium support", cost: "Included" },
    { item: "Year 1 Total", cost: "\u00A3948", highlight: true },
  ],
};

const featureComparisons = [
  {
    title: "Revenue Analytics",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with growth trends",
      "Churn rate auto-calculated monthly with trend lines",
      "Profit margin by service line (memberships, PT, classes)",
      "Revenue forecasting with 6-month projections",
      "Failed payment recovery tracking with success rates",
      "One-click P&L export for your accountant",
    ],
    competitor: [
      "Basic revenue reports (total revenue, membership count)",
      "No MRR tracking or churn rate calculation",
      "No profit margin analysis by service",
      "No revenue forecasting capability",
      "CSV export only — manual analysis required",
    ],
    winner: "GymWyse",
    impact:
      "Glofox provides basic revenue totals but no real-time intelligence. You cannot see MRR trends, churn rates, or profit margins without exporting data to spreadsheets and building reports manually.",
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
      "No engagement scoring or analytics",
    ],
    winner: "GymWyse",
    impact:
      "For a 3-location boutique studio with 800 total members: GymWyse catches 10 at-risk members per month that Glofox misses. At \u00A380/month per member, that is \u00A3800/month or \u00A39,600/year in saved revenue.",
  },
  {
    title: "Multi-Location Management",
    icon: Building2,
    gymwyse: [
      "One login, all locations visible on a unified dashboard",
      "Cross-location analytics (compare Location A vs B vs C)",
      "Unified member database across all sites",
      "Volume pricing: \u00A363/location for 2-5 locations",
    ],
    competitor: [
      "Basic multi-location overview",
      "Limited cross-location comparison tools",
      "Separate member management per location",
      "Full price per additional location",
    ],
    winner: "GymWyse",
    impact:
      "A 3-location boutique studio on Glofox pays approximately \u00A3447/month (\u00A3149 \u00D7 3). On GymWyse: \u00A3205/month (\u00A379 + \u00A363 + \u00A363). That is \u00A3242/month or \u00A32,904/year saved — with better analytics across all sites.",
  },
  {
    title: "API and Integrations",
    icon: Globe,
    gymwyse: [
      "Full REST API with comprehensive documentation",
      "Webhook support for real-time event notifications",
      "Native integrations with Zapier, Mailchimp, Stripe",
      "Wearable sync (Apple Health, WHOOP, Garmin)",
    ],
    competitor: [
      "Limited API with restricted endpoints",
      "Fewer third-party integrations available",
      "Basic Zapier support",
      "No wearable device integration",
    ],
    winner: "GymWyse",
    impact:
      "If your studio relies on custom integrations or third-party tools, GymWyse offers a more robust API. Glofox has improved but still lacks the depth needed for complex tech stacks.",
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
      "Included (branded app available)",
      "Basic features (schedule, booking, payments)",
      "No AI coaching or personalization",
      "No wearable device integration",
      "No gamification features",
    ],
    winner: "GymWyse",
    impact: "Both include a member app, but GymWyse adds AI coaching, wearable sync, and gamification that drive 40% higher engagement. More engagement means lower churn.",
  },
];

const switchReasons = [
  {
    title: "\"We Had Three Locations and No Unified View\"",
    problem:
      "Glofox offers basic multi-location support, but comparing performance across sites is difficult. For boutique studios expanding across London boroughs or multiple cities, there is no easy way to see which location is thriving and which is struggling — without pulling separate reports and combining them manually.",
    solution:
      "GymWyse gives you a single unified dashboard across all locations. Compare churn rates, MRR, class attendance, and revenue per member across sites in real time. Spot underperforming locations instantly and shift resources where they are needed.",
    caseStudy:
      "Core Collective (London) unified their 3 locations on GymWyse and discovered their East London studio had 4.1% churn vs 2.3% in West London. They identified the problem (inconsistent class times), fixed it, and churn dropped to 2.5% within 8 weeks.",
  },
  {
    title: "\"We Needed AI Features That Glofox Doesn't Offer\"",
    problem:
      "Glofox is a solid scheduling and booking platform, but it has no AI-powered features. No churn prediction, no engagement scoring, no smart recommendations. For studios competing against Peloton and ClassPass, that technology gap is a problem.",
    solution:
      "GymWyse includes AI churn prediction, engagement scoring, AI Avatar coaches in the member app, and smart analytics — all included in the base price. Your studio gets enterprise-level intelligence at a fraction of the cost.",
    caseStudy:
      "Core Collective deployed AI Avatar coaches in the GymWyse member app. Member engagement with the app increased 38%. Members who used the AI coach had 45% lower churn than those who did not.",
  },
  {
    title: "\"US Support Was Nearly Impossible to Get\"",
    problem:
      "Glofox is headquartered in Dublin, Ireland. Their support team is primarily UK/Ireland-based. US and UAE gym owners often report delayed responses due to time zone differences and limited US support hours.",
    solution:
      "GymWyse offers email and live chat support covering US, UK, and UAE business hours. No extra charge for priority support. Average response time is 12-24 hours for email, under 5 minutes for live chat during business hours.",
    caseStudy: null,
  },
];

const faqItems = [
  {
    question: "How long does migration from Glofox take?",
    answer:
      "7 to 10 days with zero downtime. We export your member data, payment methods, attendance history, and class schedules from Glofox. Members keep booking classes throughout the entire process. Most staff pick up GymWyse in under 30 minutes.",
  },
  {
    question: "What about my 12-month Glofox contract?",
    answer:
      "If you are mid-contract, you will need to pay out the remaining months. Even with early termination costs, most studios break even within 4-5 months on GymWyse due to lower subscription cost, recovered revenue from churn prevention, and the unified multi-location dashboard eliminating hours of manual reporting.",
  },
  {
    question: "Does GymWyse support BACS Direct Debit for UK payments?",
    answer:
      "Yes. GymWyse supports BACS Direct Debit (UK), SEPA (Europe), and multi-currency billing for international studios. Pricing is localized in GBP, EUR, AED, and AUD. We support 12+ countries with local payment methods.",
  },
  {
    question: "Is GymWyse a good fit for boutique studios?",
    answer:
      "Yes. GymWyse is designed for independent gyms and boutique studios of all sizes. Features like class scheduling, membership management, and branded member app work for everything from a single yoga studio to a 5-location boutique fitness chain. The AI features give boutiques enterprise-level intelligence.",
  },
  {
    question: "Will my members need to download a new app?",
    answer:
      "Yes. Members download the GymWyse member app (iOS and Android). We provide pre-written announcement templates for email and SMS. The app includes AI coaching, wearable sync, and workout tracking — most members find it a significant upgrade over the Glofox member experience.",
  },
  {
    question: "What if GymWyse does not work out for us?",
    answer:
      "Month-to-month contract means you can cancel anytime with 30 days notice. No penalty, no remaining balance, no cancellation fee. Export your data and switch to another provider. Zero risk compared to Glofox's 12-month commitment.",
  },
];

export function GlofoxComparison() {
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
              GymWyse vs Glofox
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Save &pound;150+/month, get AI-powered churn prediction, and
              unify your multi-location studios on one dashboard. Built for
              boutique fitness studios who need more than scheduling.
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
                Glofox
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
              Glofox&apos;s tiered pricing means you often end up on the mid
              or top tier. Here is what Year 1 actually costs for a single
              location on Glofox&apos;s mid-tier plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Glofox */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Glofox Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.glofox.map((item, i) => (
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
              &pound;1,400
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
                      Glofox
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
            Why Studios Switch from Glofox
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
              We handle data export from Glofox, member import, staff
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
            What Former Glofox Users Say
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
                ER
              </div>
              <div>
                <div className="text-base font-semibold text-pure-white">
                  Core Collective
                </div>
                <div className="text-xs text-dim-gray">London &mdash; 3 locations, boutique fitness</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-dim-gray uppercase mb-1">
                  Before
                </div>
                <p className="text-sm text-cool-gray">
                  Glofox: &pound;149/month per location (&pound;447/month total). 12-month contract. No unified dashboard across 3 boroughs. Churn was invisible — they discovered members were leaving only when the cancellation notification arrived.
                </p>
              </div>
              <div>
                <div className="text-xs text-electric-green uppercase mb-1">
                  After
                </div>
                <p className="text-sm text-soft-white">
                  GymWyse: &pound;205/month total for 3 locations. Unified dashboard revealed East London studio had 4.1% churn vs 2.3% elsewhere. Fixed scheduling issues and reduced overall churn by 28%. AI Avatar coaches boosted app engagement 38%.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Monthly savings", value: "\u00A3150/mo" },
                { label: "Churn reduction", value: "28%" },
                { label: "App engagement", value: "+38%" },
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
                &ldquo;Glofox was fine for booking and scheduling, but we were completely blind on churn across our 3 studios. GymWyse showed us exactly which location was bleeding members and why. The unified dashboard alone was worth the switch — we stopped spending 2 hours every Monday morning building cross-location reports in spreadsheets.&rdquo;
              </p>
              <div className="text-xs text-dim-gray mt-2">
                — Emma Richardson, Co-founder
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
              <span>Core Collective (London)</span>
              <span>&bull;</span>
              <span>Boutique studios across UK, Ireland, and UAE</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
