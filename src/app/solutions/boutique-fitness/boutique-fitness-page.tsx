"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Calendar,
  BarChart3,
  Brain,
  Smartphone,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problemStats = [
  { value: "30%", label: "Average boutique no-show rate" },
  { value: "$840/mo", label: "Revenue lost to empty spots" },
  { value: "45%", label: "Intro members who don't renew" },
];

const solutionMetrics = [
  { value: "40%", label: "No-show reduction" },
  { value: "85%", label: "Waitlist fill rate" },
  { value: "+35%", label: "Retention boost" },
  { value: "$99/mo", label: "All features included" },
];

const features = [
  {
    icon: Calendar,
    title: "Class Management & Waitlists",
    points: [
      "Smart scheduling with recurring series, one-offs, and workshops",
      "Real-time waitlist backfill — cancelled spots offered to next member in seconds",
      "Configurable late-cancel and no-show fee policies per class type",
      "Capacity optimization using historical attendance data",
    ],
  },
  {
    icon: BarChart3,
    title: "Per-Class Profitability",
    points: [
      "True P&L per session factoring instructor pay, room overhead, equipment depreciation, and avg revenue per attendee",
      "Identify which time slots and class types drive margin",
      "Pricing optimization recommendations based on demand and cost data",
    ],
  },
  {
    icon: Brain,
    title: "Member Retention Engine",
    points: [
      "AI engagement scoring monitoring booking frequency, class variety, social interactions, payment patterns",
      "Automated re-engagement at the exact moment members start fading",
      "Package expiration alerts with personalized renewal offers",
      "35% retention boost within 90 days",
    ],
  },
  {
    icon: Smartphone,
    title: "Branded Studio Experience",
    points: [
      "Custom member app matching your color palette, typography, and imagery",
      "Branded booking flow that feels like your studio, not a third-party tool",
      "One-tap booking with push notifications, calendar sync, Apple Wallet",
      "Digital waivers, progress tracking, instructor bios",
    ],
  },
];

const caseStudyResults = [
  { value: "12%", label: "No-show rate (from 30%)" },
  { value: "+38%", label: "Intro-to-regular conversion" },
  { value: "+24%", label: "Revenue per class" },
  { value: "$26K MRR", label: "Up from $18K in 5 months" },
];

const comparisonRows = [
  { feature: "Monthly Price", gymwyse: "$99", competitor: "$129+" },
  { feature: "Per-Class P&L", gymwyse: "Included", competitor: "Not available" },
  { feature: "Waitlist Management", gymwyse: "Real-time backfill", competitor: "Basic waitlist" },
  { feature: "Branded App", gymwyse: "Included", competitor: "+$50/mo" },
  { feature: "AI Retention", gymwyse: "Included", competitor: "Not available" },
  { feature: "No-Show Enforcement", gymwyse: "Configurable per class", competitor: "Basic policy" },
  { feature: "Setup Fee", gymwyse: "$0", competitor: "$500+" },
  { feature: "Contract", gymwyse: "Monthly", competitor: "12 months" },
];

const testimonials = [
  {
    quote:
      "The per-class profitability data changed everything. We discovered our Tuesday evening pilates was losing money despite being 80% full. We adjusted instructor compensation and it went from a loss to our third most profitable class.",
    author: "Elena Rodriguez",
    role: "Owner, Pure Movement Pilates, Miami",
    initials: "ER",
  },
  {
    quote:
      "Our intro-to-member conversion rate was 55% before GymWyse. Six months later it's 76%. The AI retention engine catches fading members before they even realize they're losing interest.",
    author: "Tom Nguyen",
    role: "Co-founder, Cycle Theory, San Francisco",
    initials: "TN",
  },
];

const faqItems = [
  {
    question: "Which class types does GymWyse support?",
    answer:
      "All types: yoga, pilates, barre, cycling, HIIT, dance, boxing, reformer, aerial. Fully customizable class categories, capacity limits, and pricing structures.",
  },
  {
    question: "How does per-class profitability work?",
    answer:
      "Factors instructor pay rate, room allocation costs, equipment depreciation, and average revenue per attendee across membership types and class packs. Shows true margin per session.",
  },
  {
    question: "Can I customize the member app to match my brand?",
    answer:
      "Yes. Custom colors, typography, imagery, logo, and instructor bios. The app looks like your studio's app, not a GymWyse-branded tool.",
  },
  {
    question: "How does the waitlist fill cancelled spots?",
    answer:
      "When a member cancels, the next person on the waitlist receives an instant push notification and has a configurable window to confirm. If they don't, it moves to the next person automatically.",
  },
  {
    question: "What's the intro-to-member conversion feature?",
    answer:
      "AI monitors new member behavior during their intro package (booking frequency, class variety, engagement). If signals suggest they're losing interest, automated re-engagement triggers with class recommendations and renewal offers.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. Monthly billing, cancel anytime. No setup fees, no per-member charges. $99/month flat with all features included.",
  },
  {
    question: "Can I manage multiple instructors and their pay?",
    answer:
      "Yes. Instructor profiles with availability, per-class pay rates, revenue share calculations, sub requests, and exportable pay-period summaries.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most boutique studios are fully operational within 1-2 days. We handle data migration from your current platform including member records, schedules, and payment profiles.",
  },
];

export function BoutiqueFitnessPage() {
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
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for Boutique Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Your Studio Deserves Software as Premium as Your Experience
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Whether you run yoga, pilates, barre, cycling, or HIIT — your
              members expect a seamless, branded experience from booking to
              checkout. GymWyse gives boutique studios per-class profitability
              analytics, intelligent waitlist management, and a branded member
              app that looks like yours, not ours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/platform/revenue-analytics">
                <Button variant="secondary" size="lg">
                  See Per-Class Analytics
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-midnight">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Boutique Studios Run on Razor-Thin Margins
            </h2>
            <p className="text-base text-cool-gray leading-relaxed">
              Boutique fitness studios face a unique squeeze. Every empty spot
              in a class is revenue that can never be recovered. No-shows waste
              instructor time, disappoint waitlisted members, and silently
              erode profitability. Most studios have no idea which classes are
              actually profitable once you factor in instructor costs, room
              allocation, and equipment wear. And when a new member finishes
              their intro package, there&apos;s a 45% chance they never come
              back — usually because nobody noticed they were drifting away
              until it was too late. Generic gym software doesn&apos;t
              understand boutique. You need per-class economics, not
              per-facility reports.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problemStats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-alert-red font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-cool-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-24 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Financial-Grade Analytics for Boutique Fitness
            </h2>
            <p className="text-base text-cool-gray leading-relaxed">
              Per-class P&L that factors instructor costs and room allocation.
              Intelligent waitlist backfill that fills cancelled spots in
              seconds. AI engagement scoring that catches fading members before
              they ghost. A branded app that matches your aesthetic.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {solutionMetrics.map((metric, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-electric-green font-mono mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-cool-gray">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive */}
      <section className="py-24 bg-midnight">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything Your Studio Needs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white">
                    {feature.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {feature.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-electric-green mt-0.5 shrink-0" />
                      <span className="text-sm text-cool-gray">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Flow State Yoga, Brooklyn
            </h2>
            <p className="text-base text-cool-gray">
              Premium yoga studio — 12 classes/day, 3 rooms, 8 instructors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-alert-red" />
                <h3 className="text-sm font-medium text-alert-red uppercase tracking-wider">
                  Challenge
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                30% no-show rate, with prime-time heated vinyasa classes
                regularly losing 4-5 spots. 45% of intro-package members never
                converted to regular memberships. No visibility into per-class
                profitability — their most popular class turned out to have the
                lowest margin due to a premium instructor rate.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-electric-green" />
                <h3 className="text-sm font-medium text-electric-green uppercase tracking-wider">
                  Solution
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                Deployed GymWyse with branded booking app, intelligent waitlist
                management, and per-class profitability analytics. AI retention
                engine flagged intro members showing disengagement patterns and
                triggered personalized re-engagement.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {caseStudyResults.map((result, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-electric-green font-mono mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-dim-gray">{result.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass-card p-8 border-electric-green/20 bg-electric-green/[0.03]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Quote className="w-8 h-8 text-electric-green/30 mb-4" />
            <p className="text-base text-soft-white italic leading-relaxed mb-4">
              &ldquo;We thought our heated vinyasa class was our cash cow
              because it was always full. GymWyse showed us it was actually our
              lowest-margin class because of the premium instructor rate. We
              restructured our schedule and pricing, and our MRR jumped from
              $18K to $26K in five months.&rdquo;
            </p>
            <div className="text-sm text-dim-gray">
              — Priya Sharma, Founder, Flow State Yoga
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            GymWyse vs Mindbody for Boutique
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
              <div className="p-5 text-sm font-semibold text-cool-gray text-center">
                Mindbody
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-glass-border last:border-b-0 ${
                  i % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <div className="p-5 text-sm text-soft-white font-medium">
                  {row.feature}
                </div>
                <div className="p-5 text-sm text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-electric-green shrink-0" />
                  <span className="text-electric-green">{row.gymwyse}</span>
                </div>
                <div className="p-5 text-sm text-center flex items-center justify-center gap-2">
                  {row.competitor === "Not available" ? (
                    <X className="w-4 h-4 text-alert-red shrink-0" />
                  ) : null}
                  <span className="text-cool-gray">{row.competitor}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Studio Owners Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
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
                      {t.author}
                    </div>
                    <div className="text-xs text-dim-gray">{t.role}</div>
                  </div>
                </div>
                <div className="border-l-2 border-electric-green/30 pl-4">
                  <p className="text-sm text-soft-white italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-midnight">
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
      <section className="py-24 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Give Your Members the Experience They&apos;re Paying For
            </h2>
            <p className="text-base text-cool-gray max-w-2xl mx-auto">
              Your members chose your studio because the experience is
              exceptional. Your digital experience should match your physical
              one — seamless booking, personalized engagement, and a branded
              app that feels like an extension of your space.
            </p>

            <motion.div
              className="glass-card p-8 md:p-10 border-electric-green/20 bg-electric-green/[0.03] max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-electric-green font-mono mb-3">
                $99/mo
              </div>
              <p className="text-sm text-cool-gray mb-6">
                Per-class analytics. Branded app. AI retention. All included.
              </p>
              <Link href="/demo">
                <Button variant="primary" size="lg" className="w-full">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <p className="text-sm text-dim-gray">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
