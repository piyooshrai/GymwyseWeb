"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart3,
  TrendingUp,
  CreditCard,
  RefreshCw,
  Shield,
  Banknote,
  Zap,
  Calendar,
  Dumbbell,
  Settings,
  MapPin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const features = [
  {
    icon: Banknote,
    title: "ACH, Direct Debit, and BPAY Support",
    description:
      "GymWyse supports every major payment method your members expect, regardless of where your gym operates. In the United States, ACH bank transfers provide a low-cost alternative to credit card processing, with transaction fees as low as 0.8% compared to the 2.9% typical for card payments. In the United Kingdom and Australia, GymWyse integrates natively with GoCardless for BACS Direct Debit and Australian Direct Debit respectively, allowing members to set up a mandate in 60 seconds via the member app with no paper forms or branch visits required. In Australia, BPAY is also supported for members who prefer to pay via their internet banking. All payment methods are managed from a single dashboard — you never need to log into a separate payment portal. Members can switch between payment methods at any time through the app without contacting your front desk, reducing administrative overhead and improving member satisfaction.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Billing Engine",
    description:
      "GymWyse's recurring billing engine handles the full lifecycle of membership payments with zero manual intervention. You configure billing schedules — weekly, fortnightly, monthly, quarterly, or annual — and the system automatically charges each member on their billing date. Proration is handled automatically when members upgrade, downgrade, or freeze mid-cycle. The engine supports multiple billing dates per month so you can stagger payment collection rather than hitting the payment processor with all charges on the same day. This staggered approach improves cash flow predictability and reduces the spike in failed payments that occur when all members are billed simultaneously. Rate changes can be applied to individual members, specific membership tiers, or your entire member base with configurable advance notice periods. The system generates receipts automatically and sends them via email and in-app notification.",
  },
  {
    icon: CreditCard,
    title: "Failed Payment Dunning and Recovery",
    description:
      "Failed payments are the single largest source of involuntary churn in the gym industry. Between 5% and 8% of recurring payments fail each month due to expired cards, insufficient funds, or bank processing errors. GymWyse's dunning engine automatically retries failed transactions using intelligent scheduling — spacing retries across different days and times to maximise the chance of success. The system sends personalised notifications to members with failed payments via email, SMS, and push notifications, each containing a one-click link to update their payment method. A configurable dunning sequence escalates communication over a 14-day window, from friendly reminders to urgent notices. GymWyse recovers an average of 40% of failed payments that would otherwise be permanently lost. For a gym with 500 members and an average failed payment rate of 6%, that translates to recovering $2,000 to $4,000 in monthly revenue. The recovery process runs entirely in the background with no staff intervention required.",
  },
  {
    icon: Shield,
    title: "PCI Compliance and Security",
    description:
      "GymWyse is fully PCI DSS Level 1 compliant — the highest level of payment card industry security certification. No card data is ever stored on GymWyse servers. All payment information is tokenised at the point of entry through our payment processor partners (Stripe, GoCardless, and BPAY), meaning that even in the unlikely event of a data breach, no usable payment data would be exposed. The platform uses TLS 1.3 encryption for all data in transit and AES-256 encryption for data at rest. Regular third-party penetration testing is conducted quarterly, and the results are available to Enterprise customers upon request. Two-factor authentication is available for all staff accounts, and role-based access controls ensure that only authorised personnel can initiate refunds, process charges, or view financial reports. GymWyse handles PCI compliance on your behalf — you never need to complete a Self-Assessment Questionnaire or worry about maintaining compliance yourself.",
  },
];

const operationsOverview = [
  { icon: Users, label: "Membership Management" },
  { icon: Zap, label: "QR Check-Ins" },
  { icon: Calendar, label: "Class Scheduling" },
  { icon: CreditCard, label: "Billing & Invoicing" },
  { icon: Dumbbell, label: "PT Booking" },
  { icon: Settings, label: "Staff Management" },
  { icon: BarChart3, label: "Revenue Analytics" },
  { icon: TrendingUp, label: "Churn Prediction" },
];

const caseStudyResults = [
  { value: "40%", label: "Failed payments recovered" },
  { value: "$3,800/mo", label: "Revenue recaptured" },
  { value: "0.8%", label: "ACH transaction fee (from 2.9%)" },
  { value: "2 days", label: "Full migration completed" },
];

const comparisonRows = [
  {
    feature: "Payment Methods",
    gymwyse: "ACH, Direct Debit, BPAY, Cards (unified)",
    competitor: "Card processing only (typically)",
  },
  {
    feature: "Failed Payment Recovery",
    gymwyse: "Automated dunning, 40% recovery rate",
    competitor: "Manual retry, 10-15% recovery",
  },
  {
    feature: "Recurring Billing",
    gymwyse: "Built-in with proration and staggering",
    competitor: "Basic recurring (separate integration)",
  },
  {
    feature: "PCI Compliance",
    gymwyse: "Level 1, handled on your behalf",
    competitor: "SAQ required (your responsibility)",
  },
  {
    feature: "Member Portal",
    gymwyse: "Self-service payment updates in app",
    competitor: "Call or email to update (manual)",
  },
  {
    feature: "Gym-Specific Features",
    gymwyse: "Freeze handling, proration, tier changes",
    competitor: "Generic subscription management",
  },
  {
    feature: "Transaction Fees",
    gymwyse: "No markup on processor fees",
    competitor: "Markup added on top of processor fees",
  },
  {
    feature: "Integration",
    gymwyse: "Native (billing, scheduling, CRM unified)",
    competitor: "Separate system requiring integration",
  },
];

const testimonials = [
  {
    quote:
      "We were using a standalone payment processor that had no idea our business was a gym. Failed payments just sat there until we manually retried them, and half the time the card had expired. GymWyse's dunning engine recovered $3,800 in the first month alone. The fact that payment processing is built into the same system as our member management and scheduling means everything just works together — no more data silos.",
    name: "Derek Johansson",
    role: "Owner, Pacific Strength Co.",
    location: "Seattle, WA",
  },
  {
    quote:
      "Switching from Square to GymWyse for payment processing cut our transaction costs significantly. We moved our recurring billing to ACH which dropped our per-transaction fee from 2.9% to 0.8%. On 400 members at $65 per month, that saves us over $500 every month in processing fees alone. The automated failed payment recovery is the cherry on top — we stopped losing $2,000 a month in declined transactions.",
    name: "Priya Patel",
    role: "Director, CoreFit Gym",
    location: "Houston, TX",
  },
  {
    quote:
      "As an Australian gym owner, I needed a platform that handled Direct Debit and BPAY natively. Most US-built platforms do not even know what BPAY is. GymWyse supports both plus GoCardless Direct Debit, all managed from one dashboard. The 40% failed payment recovery rate is real — we tracked it over six months and it consistently recovered payments that would have been written off with our previous provider.",
    name: "Tom Henderson",
    role: "Owner, Harbour Fitness",
    location: "Sydney, AU",
  },
];

const faqItems = [
  {
    question: "What payment methods does GymWyse support?",
    answer:
      "GymWyse supports credit and debit cards (Visa, Mastercard, American Express) via Stripe, ACH bank transfers in the United States, BACS Direct Debit in the United Kingdom via GoCardless, Australian Direct Debit via GoCardless, and BPAY in Australia. All payment methods are managed from a single unified dashboard. Members can set up and update their payment methods through the GymWyse member app without contacting your front desk. There is no payment processing markup added by GymWyse on top of the processor's standard fees.",
  },
  {
    question: "How does GymWyse recover failed payments?",
    answer:
      "GymWyse's failed payment dunning engine automatically retries failed transactions using intelligent scheduling that spaces retries across different days and times to maximise success rates. Simultaneously, the system sends personalised notifications to the member via email, SMS, and push notification with a one-click link to update their payment method. The dunning sequence escalates over a configurable 14-day window. On average, GymWyse recovers 40% of failed payments that would otherwise be lost, compared to the 10-15% typical with manual follow-up.",
  },
  {
    question: "Does GymWyse add a markup to payment processing fees?",
    answer:
      "No. GymWyse does not add any markup on top of the payment processor's standard fees. You pay Stripe's standard rate for card transactions and GoCardless's standard rate for Direct Debit. For ACH payments in the US, fees are typically 0.8% per transaction, compared to 2.9% for card payments. This transparency means you always know exactly what you are paying for payment processing and can compare rates directly.",
  },
  {
    question: "Is GymWyse PCI compliant?",
    answer:
      "Yes. GymWyse is PCI DSS Level 1 compliant, the highest level of payment card security certification. No card data is stored on GymWyse servers — all payment information is tokenised through our processor partners. The platform uses TLS 1.3 encryption in transit and AES-256 encryption at rest. Quarterly penetration testing is conducted by independent third parties. PCI compliance is handled entirely by GymWyse on your behalf, so you never need to complete a Self-Assessment Questionnaire or manage compliance yourself.",
  },
  {
    question: "Can members update their payment method themselves?",
    answer:
      "Yes. Members can update their payment method at any time through the GymWyse member app. When a payment fails, the dunning notification includes a one-click link that takes the member directly to a secure payment update page. This self-service capability dramatically reduces the administrative burden on your front-desk staff and increases the speed of payment method updates, which directly improves recovery rates on failed payments.",
  },
  {
    question: "How does GymWyse handle membership freezes and proration?",
    answer:
      "When a member freezes their membership, GymWyse automatically pauses billing for the freeze period and resumes it when the freeze ends. If a member upgrades or downgrades their membership mid-billing-cycle, the system automatically calculates the prorated amount and adjusts the next charge accordingly. Proration calculations account for the exact number of days on each plan, ensuring members are charged fairly and your revenue is accurately tracked. All proration adjustments are reflected in real-time on your revenue dashboard and in the member's billing history.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function ProblemSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ─── Hero Section ─── */}
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
              Payment Processing
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Gym Payment Processing Software with 40% Failed Payment Recovery
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Stop losing thousands every month to failed payments and high
              transaction fees. GymWyse gym management software includes a
              fully integrated payment processing engine with ACH, Direct
              Debit, BPAY, and card support — plus automated dunning that
              recovers 40% of failed payments without staff intervention.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/roi-calculator">
                <Button size="lg" variant="primary">
                  Calculate ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="secondary">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Problem Statement ─── */}
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
              The Payment Problems Costing Gyms Thousands
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Payment processing is the financial backbone of every gym, yet
              most operators treat it as an afterthought. The result is
              thousands of dollars lost every month to failed payments,
              excessive transaction fees, and disconnected systems that create
              administrative chaos and revenue leakage.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: AlertTriangle,
                title: "Failed Payments Bleed Revenue",
                description:
                  "Between 5% and 8% of recurring gym payments fail each month. For a gym with 500 members paying $65 per month, that is $1,625 to $2,600 in monthly revenue at risk. Most gyms using standalone payment processors have no automated recovery mechanism — failed payments sit in a queue until someone manually retries them, often days or weeks later. By then, the card may have been cancelled entirely, and the member has mentally disengaged from the gym. This silent revenue leak compounds month after month, costing the average gym $20,000 to $30,000 per year.",
              },
              {
                icon: CreditCard,
                title: "Excessive Transaction Fees",
                description:
                  "Many gyms process all recurring payments via credit card at rates of 2.9% plus $0.30 per transaction, even though lower-cost alternatives like ACH bank transfers (0.8%) and Direct Debit are available. For a gym processing $30,000 per month in recurring payments, the difference between card rates and ACH is over $600 per month — or $7,200 per year in unnecessary fees. Standalone payment processors have no incentive to steer you toward lower-cost methods because they profit from higher transaction volumes.",
              },
              {
                icon: RefreshCw,
                title: "Disconnected Payment Systems",
                description:
                  "When your payment processor is separate from your gym management software, you end up with two systems that do not communicate. A member who cancels in your gym software still gets charged by the payment processor. A membership freeze is not reflected in the billing system. Failed payment data lives in a different dashboard from your member records. Staff waste hours each week reconciling data between systems, and errors create member complaints, double-charges, and refund requests that damage trust and increase administrative costs.",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
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
                  <h3 className="text-lg font-bold text-pure-white">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Solution Overview ─── */}
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
              How GymWyse Solves Gym Payment Processing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse eliminates the gap between your gym management software
              and your payment processing by building payments directly into
              the platform. ACH, Direct Debit, BPAY, and card payments are
              all managed from a single dashboard alongside your member
              records, class schedules, and billing history. Failed payment
              recovery runs automatically in the background with intelligent
              retry logic and member-facing dunning sequences that recover
              40% of declined transactions. No separate payment portal, no
              manual reconciliation, no data silos. Visit our{" "}
              <Link
                href="/pricing"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                pricing page
              </Link>{" "}
              to see transparent processing rates with zero markup from
              GymWyse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Feature Deep-Dive ─── */}
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
              Payment Processing Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four pillars of payment processing built specifically for
              gym operations.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
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
                  <h3 className="text-lg font-bold text-pure-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Gym Operations Basics ─── */}
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
              Complete Gym Operations Platform
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Payment processing is fully integrated into the broader GymWyse
              platform. Beyond payments, GymWyse manages every aspect of gym
              operations — membership management with flexible tiers and
              freeze options, QR-code check-ins via the member app, class
              scheduling with waitlists and automated notifications, personal
              training booking with session packages and recurring
              appointments, staff management with role-based permissions and
              commission tracking, revenue analytics with real-time dashboards,
              and AI-powered churn prediction. Because payments are native to
              the platform, billing data flows seamlessly into your revenue
              analytics, churn predictions, and member profiles — giving you
              a unified operational view that standalone payment processors
              simply cannot provide.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {operationsOverview.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card flex flex-col items-center gap-3 rounded-xl border border-glass-border p-6 text-center"
                >
                  <Icon className="h-6 w-6 text-electric-green" />
                  <span className="text-sm font-medium text-soft-white">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Case Study ─── */}
      <section className="bg-midnight py-24">
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
                Titan Gym, Chicago, IL
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                Single location — 720 members — Full-service gym with
                group fitness, PT, and retail
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Titan Gym was using a standalone payment processor
                    alongside their gym management software. Failed payments
                    were accumulating in the payment portal with no automated
                    recovery — the front desk manager would manually retry
                    them once a week, recovering less than 15%. All recurring
                    payments were processed via credit card at 2.9%, despite
                    ACH being available at a fraction of the cost. The two
                    systems did not communicate, so membership freezes were
                    not reflected in billing, leading to member complaints
                    and refund requests. The owner estimated the gym was
                    losing over $4,000 per month to failed payments and
                    spending $600 per month in unnecessary transaction fees.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Titan Gym migrated to GymWyse in two days. Payment
                    processing moved onto the same platform as member
                    management and scheduling, eliminating data silos. The
                    gym migrated 60% of its recurring payments from credit
                    cards to ACH, reducing transaction fees from $870 per
                    month to under $350. GymWyse&apos;s dunning engine
                    immediately started recovering failed payments — in
                    month one, it recovered $3,800 that would have been
                    written off. Membership freezes now automatically pause
                    billing, and proration is handled without manual
                    calculation. Member complaints about billing errors
                    dropped to zero.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="font-mono text-xl font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-deep-space py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
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
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-dim-gray">
                      {testimonial.role}
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

      {/* ─── Comparison Table ─── */}
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
              GymWyse vs Standalone Payment Processors
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See why integrated gym payment processing outperforms
              disconnected standalone solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-electric-green">
                        GymWyse
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        Standalone Processor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-glass-border last:border-0"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-soft-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-electric-green">
                          {row.gymwyse}
                        </td>
                        <td className="px-6 py-4 text-sm text-dim-gray">
                          {row.competitor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Everything you need to know about gym payment processing
              with GymWyse.
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

      {/* ─── Final CTA ─── */}
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
              Stop Losing Revenue to Failed Payments
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Every month without automated payment recovery is money lost
              permanently. GymWyse gives you integrated payment processing
              with ACH, Direct Debit, and card support — plus a dunning
              engine that recovers 40% of failed payments automatically. No
              markup on transaction fees. No separate payment portal. Start
              your 14-day free trial today or book a personalised demo to
              see how much revenue you can recover.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="xl" variant="primary">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="xl" variant="secondary">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dim-gray">
              <span>No credit card required</span>
              <span>14-day free trial</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
