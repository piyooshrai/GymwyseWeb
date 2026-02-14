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
  TrendingUp,
  Shield,
  Bell,
  Heart,
  Target,
  HelpCircle,
  Quote,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problemStats = [
  {
    value: "8.1%",
    label: "Average monthly gym churn rate",
  },
  {
    value: "$24K/yr",
    label: "Revenue lost per 40 churned members/mo",
  },
  {
    value: "5-7x",
    label: "Cost of acquisition vs retention",
  },
];

const solutionMetrics = [
  {
    value: "30 days",
    label: "Early warning before cancellation",
  },
  {
    value: "32%",
    label: "Average churn reduction",
  },
  {
    value: "18 members/mo",
    label: "Average saves per gym",
  },
  {
    value: "14 signals",
    label: "Behavioral analysis points",
  },
];

const features = [
  {
    icon: Shield,
    title: "AI Risk Scoring",
    description:
      "Analyzes visit frequency trends, booking behavior changes, payment reliability, app engagement drops, class variety reduction, and check-in timing shifts. Each member gets a dynamic risk score updated daily. Dashboard shows all at-risk members ranked by cancellation probability.",
    bullets: [
      "Visit frequency trend analysis detecting gradual decline before it becomes absence",
      "Booking behavior monitoring for changes in class types, scheduling, and cancellations",
      "Payment reliability tracking including late payments and failed charge patterns",
      "App engagement scoring based on login frequency, feature usage, and interaction depth",
    ],
  },
  {
    icon: Bell,
    title: "Automated Re-engagement",
    description:
      "When a member crosses a risk threshold, automated campaigns trigger. Personalized based on the specific warning signals: a member with declining visits gets a different message than one with payment issues. Options include check-in messages from staff, special class recommendations, limited-time offers, and personal outreach prompts for trainers.",
    bullets: [
      "Risk-signal-specific campaign triggers tailored to each member's warning pattern",
      "Staff check-in messages that feel personal even though they are automated at scale",
      "Smart class recommendations based on the member's history and schedule preferences",
      "Trainer outreach prompts for highest-risk cases that need a personal touch",
    ],
  },
  {
    icon: Heart,
    title: "Win-Back Sequences",
    description:
      "For members who do cancel, automated win-back sequences deploy at strategic intervals (7 days, 30 days, 90 days). Customizable offers and messaging. Track win-back conversion rates by sequence type and timing.",
    bullets: [
      "Strategic timing at 7, 30, and 90 day intervals post-cancellation",
      "Customizable offers and messaging for each stage of the win-back journey",
      "Conversion tracking by sequence type to identify what works best",
      "A/B testing support to continuously optimize win-back performance",
    ],
  },
  {
    icon: Target,
    title: "Retention Analytics",
    description:
      "Track churn rate trends over time. Identify which member segments have highest risk. See which re-engagement campaigns drive the best save rates. Compare retention metrics month-over-month and against industry benchmarks. Know your exact cost-per-save.",
    bullets: [
      "Churn rate trend tracking with month-over-month and year-over-year comparisons",
      "Member segment analysis showing which groups have the highest cancellation risk",
      "Campaign performance metrics revealing which re-engagement approaches drive the best save rates",
      "Industry benchmark comparisons so you know where you stand relative to similar gyms",
    ],
  },
];

const caseStudyResults = [
  { value: "5.1%", label: "Monthly churn (from 9.4%)" },
  { value: "22 members/mo", label: "Saved via early intervention" },
  { value: "\u00A31,400/mo", label: "Reduced ad spend on replacement acquisition" },
  { value: "\u00A338K/yr", label: "Net revenue impact" },
];

const howItWorks = [
  {
    step: 1,
    title: "Monitor",
    description:
      "GymWyse continuously analyzes 14 behavioral signals for every member, building a dynamic risk profile updated daily.",
  },
  {
    step: 2,
    title: "Detect",
    description:
      "When patterns indicate a member is drifting toward cancellation, the AI flags them and assigns a risk score with the specific warning signals identified.",
  },
  {
    step: 3,
    title: "Engage",
    description:
      "Automated re-engagement triggers based on the specific risk signals. A member with declining visits receives different outreach than one with payment issues.",
  },
  {
    step: 4,
    title: "Retain",
    description:
      "Track which interventions work. Measure your save rate. Optimize campaigns based on data. Watch your churn rate drop month over month.",
  },
];

const testimonials = [
  {
    quote:
      "Our churn was 8% and we thought that was normal. GymWyse showed us it didn\u2019t have to be. Six months later we\u2019re at 4.9% and the AI catches at-risk members we never would have spotted manually.",
    author: "Rachel Kim",
    title: "Owner, Momentum Fitness",
    location: "Chicago",
  },
  {
    quote:
      "The automated re-engagement is a game-changer. I used to personally call members when I noticed they hadn\u2019t been in for a while, but I\u2019d only catch a fraction of them. Now the system catches everyone and I only need to get involved for the highest-risk cases.",
    author: "Ben Taylor",
    title: "Manager, Peak Athletics",
    location: "Sydney",
  },
];

const faqItems = [
  {
    question: "How does AI churn prediction work?",
    answer:
      "Analyzes 14 behavioral signals including visit frequency, booking changes, payment reliability, app engagement, class variety, and check-in timing. Uses machine learning to identify patterns that precede cancellation and flags members before they reach the point of no return.",
  },
  {
    question: "How far in advance can it predict churn?",
    answer:
      "Typically 30 days before cancellation. The system flags members at the earliest detectable signal change, giving you maximum time to intervene.",
  },
  {
    question: "What kind of re-engagement campaigns can I set up?",
    answer:
      "Fully customizable. Options include automated check-in messages, personalized class recommendations, limited-time offers, trainer outreach prompts, and custom email/SMS sequences. Each campaign can be triggered by specific risk signals.",
  },
  {
    question: "Does it work for small gyms?",
    answer:
      "Yes. The AI is effective for gyms of all sizes. Even with 100 members, the system identifies at-risk patterns that human observation misses.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most gyms see measurable churn reduction within 30-60 days. The system begins flagging at-risk members within 48 hours of activation using your existing member data.",
  },
  {
    question: "Can I customize the risk thresholds?",
    answer:
      "Yes. Adjust sensitivity levels based on your preferences. Set different thresholds for different membership types. Define which signals matter most for your gym\u2019s specific member behavior.",
  },
  {
    question: "What about members who\u2019ve already cancelled?",
    answer:
      "Win-back sequences can target recent cancellations with automated outreach at 7, 30, and 90 day intervals. Customizable offers and messaging for each stage.",
  },
  {
    question: "How does this integrate with my existing communications?",
    answer:
      "Works alongside your existing email and SMS tools. GymWyse handles the intelligence (who to contact and why) while you choose the delivery channel.",
  },
];

export function ReduceChurnPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-deep-space py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-electric-green">
              Churn Prevention
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Stop Losing Members You Didn&apos;t Know Were Leaving
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              The average gym loses 30-50% of its members annually — and most
              owners don&apos;t realize a member is gone until the cancellation
              email arrives. GymWyse AI churn prediction identifies at-risk
              members 30 days before they cancel, giving you time to intervene
              with personalized re-engagement that actually works.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="secondary">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Member Churn Is a Silent Revenue Killer
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Most gyms discover a member has churned after the fact — when
              the cancellation request hits or the payment stops going through.
              By then, the member has already mentally checked out. The warning
              signs were there for weeks: declining visit frequency, fewer class
              bookings, missed check-ins, reduced engagement with the app. But
              without the right tools, these signals are invisible. The cost is
              staggering. A gym with 500 members and 8% monthly churn loses 40
              members every month. At $50 average membership, that&apos;s
              $24,000 in annual revenue walking out the door every single month.
              And acquiring a new member costs 5-7x more than retaining an
              existing one.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problemStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 text-center"
              >
                <div className="text-3xl font-mono font-bold text-electric-green md:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-cool-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              AI That Sees Churn Before It Happens
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse analyzes 14 behavioral signals including visit frequency,
              booking patterns, payment history, app engagement, class variety,
              and check-in timing. When the algorithm detects a member drifting
              toward cancellation, it flags them and triggers personalized
              re-engagement automatically. No manual tracking, no guesswork, no
              spreadsheet audits.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 text-center"
              >
                <div className="text-3xl font-mono font-bold text-electric-green">
                  {metric.value}
                </div>
                <p className="mt-3 text-sm text-cool-gray">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              How GymWyse Prevents Churn at Every Stage
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four integrated modules that detect, engage, recover, and measure
              — so no member slips through the cracks.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-xl font-bold text-pure-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {feature.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-sm text-soft-white"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-green" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-electric-green" />
                <span className="text-sm font-medium text-electric-green">
                  Case Study
                </span>
              </div>
              <h2 className="text-2xl font-bold text-pure-white md:text-3xl">
                The Foundry, London
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                450-member CrossFit and functional fitness facility.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-alert-red">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Monthly churn had crept to 9.4% — losing over 40 members
                    per month. The owner was spending &pound;2,000/month on
                    Facebook ads to replace them, creating a costly acquisition
                    treadmill. No visibility into which members were at risk
                    until they cancelled.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Deployed GymWyse AI churn prediction across the full
                    membership base. Within 48 hours, the system flagged 67
                    at-risk members. Automated re-engagement campaigns launched
                    for each based on their specific risk signals.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="text-xl font-mono font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-glass-border bg-deep-space/30 p-6">
                <Quote className="mb-3 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;We were on a treadmill — losing 40 members a month and
                  spending thousands to replace them. GymWyse flagged 67 at-risk
                  members in the first 48 hours. We saved 22 of them that month
                  alone. The reduction in churn paid for the platform ten times
                  over.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      Jack Morrison
                    </p>
                    <p className="text-xs text-dim-gray">
                      Owner, The Foundry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              From silent signals to saved members — in four steps.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 hidden h-full w-px bg-glass-border md:block" />

              <div className="space-y-8">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-glass-border bg-deep-space">
                      <span className="font-mono text-lg font-bold text-electric-green">
                        {item.step}
                      </span>
                    </div>
                    <div className="glass-card flex-1 rounded-2xl border border-glass-border p-6">
                      <h3 className="text-lg font-bold text-pure-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-deep-space py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <Quote className="mb-4 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-dim-gray">
                      {testimonial.title}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-dim-gray">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Everything you need to know about AI churn prediction.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card overflow-hidden rounded-xl border border-glass-border"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
                >
                  <span className="pr-4 text-sm font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-dim-gray transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-glass-border px-6 py-4">
                        <p className="text-sm leading-relaxed text-cool-gray">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Every Member You Save Is Revenue You Keep
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Stop spending 5x more to replace members when you can spend a
              fraction to keep them. AI churn prediction included at no extra
              cost.
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <div className="glass-card rounded-2xl border border-glass-border p-8 text-center">
                <div className="text-5xl font-mono font-bold text-electric-green">
                  $99/mo
                </div>
                <p className="mt-3 text-sm text-cool-gray">
                  AI churn prediction. Automated re-engagement. Win-back
                  sequences. All included.
                </p>
                <Link href="/demo" className="mt-6 block">
                  <Button size="xl" variant="primary" className="w-full">
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-xs text-dim-gray">
                  No credit card required &bull; Full access &bull; Cancel
                  anytime
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
