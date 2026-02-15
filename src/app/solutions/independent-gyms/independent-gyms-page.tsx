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
  CreditCard,
  Headphones,
  Shield,
  Building2,
  Smartphone,
  Calendar,
  HelpCircle,
  Quote,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problemStats = [
  {
    value: "67%",
    label: "of independent gyms overpay for unused features",
  },
  {
    value: "$2,400/yr",
    label: "average wasted spend on enterprise tools",
  },
  {
    value: "8.1%",
    label: "average monthly churn without prediction tools",
  },
];

const solutionMetrics = [
  {
    value: "$99/mo",
    label: "All features included",
  },
  {
    value: "< 1 day",
    label: "Full setup and data migration",
  },
  {
    value: "32%",
    label: "Average churn reduction",
  },
  {
    value: "$2,100/mo",
    label: "Average payment recovery",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    description:
      "See every dollar flowing through your gym in real time. The revenue intelligence dashboard gives you a complete financial picture without logging into your bank, opening a spreadsheet, or waiting for month-end reports. Track MRR growth, compare revenue streams side by side, and understand exactly which parts of your business drive profit and which quietly drain it.",
    bullets: [
      "Real-time MRR tracking updated continuously as transactions occur",
      "Revenue stream breakdown across memberships, personal training, group classes, retail, and day passes",
      "Per-service P&L that shows true margin after accounting for instructor pay, room costs, and supplies",
      "Monthly financial summaries with tax-ready exports you can hand directly to your accountant",
    ],
  },
  {
    icon: Shield,
    title: "Churn Prevention",
    description:
      "Members do not cancel out of nowhere. They disengage gradually over weeks, and by the time they submit a cancellation request, the decision was made long ago. GymWyse AI risk scoring analyzes visit patterns, booking behavior, payment history, and engagement signals to identify members who are drifting toward the exit.",
    bullets: [
      "AI risk scoring updated daily for every active member based on 40+ behavioral signals",
      "Flags at-risk members 30 days before they typically cancel, giving you time to intervene",
      "Automated win-back sequences with personalized outreach based on each member's history",
      "Average gym saves 18 members per month who would have otherwise quietly disappeared",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Recovery",
    description:
      "Every failed payment is revenue walking out the door, and most gym owners either do not notice or rely on awkward phone calls to chase it down. GymWyse automated payment recovery handles the entire process without staff involvement, from intelligent retry logic to member self-service card updates.",
    bullets: [
      "Smart retry logic that learns the best day and time to reattempt charges for each member",
      "Self-service card update flow via mobile so members can fix payment issues in under a minute",
      "Automated follow-up sequences for persistent failures with escalating urgency",
      "Average gym recovers $2,100 per month in payments that would otherwise be written off",
    ],
  },
  {
    icon: Calendar,
    title: "Operations Hub",
    description:
      "Running a gym means juggling class schedules, trainer assignments, equipment maintenance, retail inventory, and member paperwork every single day. The operations hub brings all of these into a single interface so you stop bouncing between tools, sticky notes, and spreadsheets.",
    bullets: [
      "Drag-and-drop class scheduling with capacity limits, waitlists, and automated reminders",
      "Trainer assignment with availability management, session tracking, and pay-period summaries",
      "Equipment QR code maintenance logs for tracking service history, usage, and warranty dates",
      "Integrated retail POS and digital waivers with e-signature for a paperless front desk",
    ],
  },
];

const caseStudyResults = [
  { value: "$3,480/yr", label: "Software cost savings" },
  { value: "$1,800/mo", label: "Recovered failed payments" },
  { value: "5.1%", label: "Monthly churn (from 8.2%)" },
  { value: "+22%", label: "Revenue growth in 6 months" },
];

const comparisonRows = [
  {
    feature: "Monthly Price",
    gymwyse: "$99",
    competitor: "$200-400",
  },
  {
    feature: "Setup Fee",
    gymwyse: "$0",
    competitor: "$500-2,000",
  },
  {
    feature: "Revenue Analytics",
    gymwyse: "Included",
    competitor: "Not available or add-on",
  },
  {
    feature: "AI Churn Prediction",
    gymwyse: "Included",
    competitor: "Not available",
  },
  {
    feature: "Payment Recovery",
    gymwyse: "Included",
    competitor: "+$50/mo add-on",
  },
  {
    feature: "Contract",
    gymwyse: "Monthly",
    competitor: "12-24 months",
  },
  {
    feature: "Member App",
    gymwyse: "Included",
    competitor: "+$50/mo add-on",
  },
  {
    feature: "Support",
    gymwyse: "Email + live chat",
    competitor: "Email only for basic tier",
  },
];

const testimonials = [
  {
    quote:
      "Switching from ABC Fitness saved us $3,200 a year and the churn prediction alone has kept 40+ members who would have quietly disappeared. Best business decision we made last year.",
    author: "Sarah Mitchell",
    title: "Owner, Iron House Fitness",
    location: "Denver",
  },
  {
    quote:
      "I was skeptical about leaving Mindbody but the migration took less than a day. Now I have revenue analytics I never had before, and my failed payment recovery rate went from maybe 15% to over 40%.",
    author: "James Park",
    title: "Owner, Elevate Gym",
    location: "Austin",
  },
];

const faqItems = [
  {
    question: "Is GymWyse too advanced for a small gym?",
    answer:
      "No. GymWyse was built specifically for single-location gyms. The interface is clean and focused, with no enterprise complexity or features designed for chain operations. Most owners learn the entire platform in an afternoon and are fully operational by the next day.",
  },
  {
    question: "How does pricing work? Are there hidden fees?",
    answer:
      "$99/month flat. Every feature is included from day one. No setup fees, no contracts, no per-member charges. If you want to add optional modules, they are available: Retail POS (+$49), Equipment Tracking (+$39), Trainer Hub (+$59). But the core platform includes everything most independent gyms need.",
  },
  {
    question: "Can I migrate from Mindbody or ABC Fitness?",
    answer:
      "Yes. We handle the full migration for you, including member data, payment profiles, class schedules, and active contracts. The average migration takes 1-3 days with zero downtime. Your members will not notice a thing during the transition.",
  },
  {
    question: "How does AI churn prediction actually work?",
    answer:
      "The system analyzes visit frequency, booking patterns, payment history, and engagement signals for every active member. When a member starts showing early warning signs, such as declining visits, missed bookings, or reduced app usage, they are flagged as at-risk 30 days before they typically cancel. This gives you a meaningful intervention window to reach out and re-engage them.",
  },
  {
    question: "What if a member's payment fails?",
    answer:
      "Smart retry logic automatically reattempts the charge at the optimal time based on that member's historical payment patterns. If retries do not succeed, the member receives a frictionless mobile flow to update their card on file. The entire process runs without staff involvement. Average recovery rate across all GymWyse gyms is 40%.",
  },
  {
    question: "Do I need technical expertise to set this up?",
    answer:
      "No. We handle setup and data migration entirely. The interface was designed for gym owners, not IT departments. There is no code to write, no integrations to configure manually, and no server to manage. Most owners are fully operational within a single day.",
  },
  {
    question: "Can I track revenue by service type?",
    answer:
      "Yes. The revenue dashboard provides a real-time breakdown across memberships, personal training, group classes, retail, and day passes. Per-service P&L reports show true margin after accounting for instructor pay, room costs, equipment, and supplies, so you know exactly which services drive profit.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Email and live chat support are included with every account. Average response time is under 2 hours during business hours. There is no tiered support system. Every customer gets the same level of service regardless of plan or gym size.",
  },
];

export function IndependentGymsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
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
              Built for Independent Gyms
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Stop Paying Enterprise Prices for Software You Don&apos;t Need
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              You run a single-location gym. You don&apos;t need 47 modules,
              regional dashboards, or a dedicated account manager. You need
              software that shows you exactly where money is coming in, where
              it&apos;s leaking out, and which members are about to leave — at a
              price that makes sense for an independent operator.
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
                  Calculate Your ROI
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
              The Independent Gym Owner&apos;s Dilemma
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Independent gym owners are caught between two bad options. On one
              side, there are spreadsheets, sticky notes, and basic tools that
              leave you flying blind — no revenue visibility, no churn
              prediction, no automated payment recovery. On the other side,
              enterprise platforms like Mindbody, ABC Fitness, and ClubReady
              charge $200-400/month for bloated software designed for
              500-location chains. You end up paying for features you&apos;ll
              never use, navigating interfaces designed for regional managers,
              and waiting on hold behind multi-location operators. Neither option
              works for the 75% of gyms that operate a single location.
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
              A Financial Command Center Built for Your Gym
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse is purpose-built for single-location gyms. Instead of
              stripping down an enterprise platform and charging you for the
              leftovers, we built every feature from scratch around what
              independent operators actually need: a real-time MRR dashboard,
              per-service profitability breakdowns, AI-powered churn prediction,
              and automated payment recovery. Every feature is included at
              $99/mo. No modules to unlock. No add-on fees for critical tools.
              No contracts locking you in.
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
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four core modules that cover every aspect of running an
              independent gym.
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
                Apex Performance Lab, Los Angeles
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                220-member independent gym. Previously on Mindbody at $289/mo +
                $50 member app + $50 payment recovery = $389/mo total.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-alert-red">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Paying nearly $400/month for software with features designed
                    for chain operations. No visibility into which services drove
                    margin. Lost an average of 16 members per month with no
                    early warning system.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Switched to GymWyse in a single weekend. Immediate
                    visibility into per-service profitability revealed their
                    smoothie bar was operating at a loss while PT sessions had
                    60% margins. AI churn prediction flagged at-risk members,
                    enabling proactive outreach.
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
                  &ldquo;We were paying Mindbody almost $400 a month and had no
                  idea which services were actually profitable. Within a week of
                  switching to GymWyse, we discovered our smoothie bar was
                  losing money and our PT sessions were our biggest margin
                  driver. The cost savings alone paid for the switch, but the
                  revenue insights changed how we run the business.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      Marcus Chen
                    </p>
                    <p className="text-xs text-dim-gray">
                      Owner, Apex Performance Lab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
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
              GymWyse vs Enterprise Platforms
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See how purpose-built software for independent gyms compares to
              enterprise platforms designed for chains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b border-glass-border bg-deep-space/50 px-6 py-4">
                <div className="text-sm font-semibold text-dim-gray">
                  Feature
                </div>
                <div className="text-center text-sm font-semibold text-electric-green">
                  GymWyse
                </div>
                <div className="text-center text-sm font-semibold text-dim-gray">
                  Enterprise Platforms
                </div>
              </div>

              {/* Table Rows */}
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 items-center px-6 py-4 ${
                    index < comparisonRows.length - 1
                      ? "border-b border-glass-border"
                      : ""
                  }`}
                >
                  <div className="text-sm font-medium text-soft-white">
                    {row.feature}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-electric-green" />
                    <span className="text-electric-green">{row.gymwyse}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <X className="h-4 w-4 flex-shrink-0 text-alert-red" />
                    <span className="text-alert-red">{row.competitor}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              Everything you need to know about switching to GymWyse.
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
              Your Gym Deserves Better Than Enterprise Leftovers
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Join hundreds of independent gym owners who switched to software
              built for their business, not stripped down from a chain platform.
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <div className="glass-card rounded-2xl border border-glass-border p-8 text-center">
                <div className="text-5xl font-mono font-bold text-electric-green">
                  $99/mo
                </div>
                <p className="mt-3 text-sm text-cool-gray">
                  Everything included. No setup fees. No contracts.
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
