"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Clock,
  Zap,
  HeartHandshake,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Book a Migration Call",
    description:
      "We'll review your current setup, map your data, and create a custom migration plan.",
  },
  {
    step: "2",
    title: "Data Migration",
    description:
      "We import all members, payment history, contracts, schedules, and settings.",
  },
  {
    step: "3",
    title: "Team Training",
    description:
      "Hands-on training for your staff. Usually takes 1-2 hours. We record it for reference.",
  },
  {
    step: "4",
    title: "Parallel Run",
    description:
      "Run both systems side-by-side for a few days. Verify everything works perfectly.",
  },
  {
    step: "5",
    title: "Go Live",
    description:
      "Switch over with zero downtime. Your members won't notice a thing.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Zero Data Loss",
    description: "Every member record, payment history, and contract is migrated.",
  },
  {
    icon: Clock,
    title: "7-10 Days",
    description: "Most gyms are fully migrated in under two weeks.",
  },
  {
    icon: Zap,
    title: "Zero Downtime",
    description: "Your gym operations continue uninterrupted during migration.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A migration specialist is assigned to your account.",
  },
];

const migrationTimelines = [
  {
    from: "Mindbody",
    days: "7-10 days",
    complexity: "Medium",
    note: "Mindbody exports are comprehensive. Easiest migration.",
  },
  {
    from: "Zen Planner",
    days: "7-10 days",
    complexity: "Medium",
    note: "Zen Planner exports are clean.",
  },
  {
    from: "Glofox",
    days: "10-14 days",
    complexity: "Medium-High",
    note: "Glofox API is less robust. May require manual CSV exports.",
  },
  {
    from: "Spreadsheets",
    days: "5-7 days",
    complexity: "Low",
    note: "Fastest migration. Clean slate.",
  },
];

const worries = [
  {
    worry: "We'll lose member data",
    reality:
      "Zero data loss in 200+ migrations. We run a full audit before and after import, comparing member counts, payment records, and contract details line by line. Your data is verified before we ever go live.",
  },
  {
    worry: "There will be downtime",
    reality:
      "Zero downtime. Your old system stays live until Day 10. Members keep booking classes, making payments, and checking in as usual. We only flip the switch when everything is verified and your team gives the green light.",
  },
  {
    worry: "Staff won't learn the new system",
    reality:
      "Most staff pick it up in 20 minutes. Check-in is one scan versus 10 steps in Mindbody. We provide hands-on training, recorded video walkthroughs, and a dedicated Slack channel for questions during the first two weeks.",
  },
  {
    worry: "What if I hate it?",
    reality:
      "Month-to-month billing. Cancel anytime. We can export your data and you go back to your old system. No lock-in, no cancellation fees, no hard feelings. We keep your data export-ready at all times.",
  },
];

const caseStudyTimeline = [
  { day: "Day 1-2", event: "Data export from Mindbody" },
  { day: "Day 3-5", event: "Imported 1,247 members, contracts, and payment history" },
  { day: "Day 6", event: "Staff training (2 sessions, 45 minutes each)" },
  { day: "Day 7-9", event: "Parallel run with both systems live" },
  { day: "Day 10", event: "Went live on GymWyse" },
];

const faqs = [
  {
    question: "How long does migration take?",
    answer:
      "7-10 days for most gyms. Spreadsheet migrations are faster at 5-7 days since the data is simpler. Glofox migrations may take 10-14 days due to API limitations that sometimes require manual CSV exports. Your migration specialist will give you an exact timeline on your first call.",
  },
  {
    question: "Will my members need to download a new app?",
    answer:
      "Yes. Members will need to download the GymWyse app to book classes and manage their account. We provide pre-written email and SMS templates you can send to announce the switch, along with step-by-step instructions your front desk staff can share with members who need help.",
  },
  {
    question: "Do I lose historical data?",
    answer:
      "No. We import full member history, purchase records, and attendance logs for the past 12+ months. Older data can be imported on request. Your reporting and analytics will have the historical context you need from day one.",
  },
  {
    question: "What does migration cost?",
    answer:
      "$0. Migration is included in your subscription at no extra charge. Optional add-ons are available if you want them: on-site training for your team ($500) and expedited migration that compresses the timeline by 3-4 days ($300). Neither is required.",
  },
  {
    question: "Can I run both systems in parallel?",
    answer:
      "Yes. We recommend a 3-day parallel run where both systems stay live simultaneously. This lets you compare data, verify accuracy, and build confidence before fully switching. Your old system remains accessible throughout the entire migration process.",
  },
  {
    question: "What if something goes wrong?",
    answer:
      "We have a documented rollback plan for every migration. If anything is off, we can revert to your old system instantly. In 200+ migrations, we have never needed to execute a full rollback. Minor issues like a wrong instructor assignment are resolved in minutes.",
  },
];

export function MigrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero + Guarantees + Steps + What We Migrate */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Migration Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Switching Is Easy
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              We handle the entire migration from your current software. Zero
              downtime. Zero data loss. Your members won&apos;t even notice.
            </p>
          </motion.div>

          {/* Guarantees */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {g.title}
                </h3>
                <p className="text-sm text-cool-gray">{g.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-pure-white text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-electric-green/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-electric-green font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pure-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-cool-gray">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What we migrate */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-pure-white text-center mb-12">
              What We Migrate
            </h2>
            <div className="glass-card p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Member profiles & contact info",
                  "Payment history & billing",
                  "Active contracts & memberships",
                  "Class schedules & bookings",
                  "Staff & instructor records",
                  "Equipment & inventory data",
                  "Historical financial data",
                  "Document & waiver records",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-electric-green shrink-0" />
                    <span className="text-sm text-cool-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Timelines by Software */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Migration Timelines by Software
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Every platform is different. Here is what to expect based on where
              you are migrating from, including estimated timelines and
              complexity levels from our 200+ completed migrations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationTimelines.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-electric-green font-medium tracking-wider uppercase mb-3">
                  From {t.from}
                </p>
                <h3 className="text-xl font-bold text-pure-white mb-1">
                  {t.days}
                </h3>
                <p className="text-sm text-cool-gray mb-4">
                  {t.complexity} complexity
                </p>
                <p className="text-sm text-soft-white leading-relaxed">
                  {t.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Worries Addressed */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Common Worries, Addressed
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Switching gym software feels risky. We get it. Here are the four
              concerns we hear most often and the reality behind each one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {worries.map((w, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-base font-medium text-pure-white">
                    &ldquo;{w.worry}&rdquo;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-electric-green/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-electric-green" />
                  </div>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {w.reality}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
              The Foundry, London
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              4 locations. 1,247 members. Migrated from Mindbody in 10 days.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 mb-8">
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Migration Timeline
              </h3>
              <div className="space-y-4">
                {caseStudyTimeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-semibold text-electric-green whitespace-nowrap min-w-[72px]">
                      {item.day}
                    </span>
                    <span className="text-sm text-cool-gray">{item.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                Results
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-6">
                One minor issue came up during the parallel run: a wrong
                instructor assignment on two group classes. The migration
                specialist fixed it in 5 minutes. No member-facing disruption.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-deep-space/60 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-electric-green mb-1">
                    Smooth
                  </p>
                  <p className="text-xs text-cool-gray">Migration</p>
                </div>
                <div className="bg-deep-space/60 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-electric-green mb-1">
                    $200/mo
                  </p>
                  <p className="text-xs text-cool-gray">Subscription Savings</p>
                </div>
                <div className="bg-deep-space/60 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-electric-green mb-1">
                    8 hrs/wk
                  </p>
                  <p className="text-xs text-cool-gray">Time Savings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Everything you need to know about switching to GymWyse. If your
              question is not listed here, book a migration call and we will
              answer it directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card border border-glass-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaq === i}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-base text-soft-white mb-8">
            Book a migration call and we&apos;ll create a custom plan for your gym.
          </p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Book Migration Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
