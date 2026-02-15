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
  FileText,
  Receipt,
  Clock,
  DollarSign,
  Calendar,
  Dumbbell,
  Settings,
  Zap,
  MapPin,
  Quote,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const features = [
  {
    icon: Receipt,
    title: "Recurring Billing with Flexible Schedules",
    description:
      "GymWyse's recurring billing engine automates the entire membership payment lifecycle. You configure billing schedules — weekly, fortnightly, monthly, quarterly, or annual — and the system charges each member automatically on their billing date. Multiple billing frequencies can coexist within the same gym, allowing you to offer monthly memberships alongside annual prepaid plans. Proration is handled automatically when members upgrade, downgrade, or freeze mid-cycle, ensuring accurate charges without manual calculation. The engine supports staggered billing dates so you can distribute payment collection across the month rather than processing all charges on the same day. This reduces failed payment spikes and improves cash flow predictability. Rate changes can be applied to individual members, specific membership tiers, or your entire member base with configurable advance notice periods. Members receive automatic receipts via email and in-app notification after every successful charge.",
  },
  {
    icon: FileText,
    title: "Automated Invoicing and One-Time Charges",
    description:
      "Beyond recurring membership fees, gyms need to bill for one-time purchases such as joining fees, personal training packages, merchandise, locker rentals, and event registrations. GymWyse generates professional invoices automatically for every transaction, whether it is a recurring charge or a one-time purchase. Invoices are branded with your gym's logo, colours, and contact information. They are delivered via email and accessible in the member's app account at any time. You can create ad hoc invoices for custom charges — equipment damage fees, key replacement costs, or custom service packages — and send them directly from the member's profile. Bulk invoicing lets you charge a group of members simultaneously for events, workshops, or promotional offers. Every invoice is tracked in the system with payment status — paid, pending, overdue — and overdue invoices can trigger automated reminder sequences. Invoice data feeds directly into your financial reporting dashboard for real-time revenue tracking.",
  },
  {
    icon: Clock,
    title: "Late Fee Automation and Suspension Workflows",
    description:
      "GymWyse automates the entire late payment lifecycle so your staff never has to manually chase overdue accounts. You configure late fee rules per membership type — a flat fee or percentage charge that is automatically applied when a payment is overdue by a configurable number of days. Late fee application is fully automated with no staff intervention required. Members are notified at each stage via email, SMS, and push notification, giving them a grace period to update their payment method or resolve the issue. Beyond late fees, GymWyse includes configurable suspension workflows that automatically restrict gym access when overdue balances exceed a threshold you define. For example, you might apply a $10 late fee at 7 days overdue, a second $15 fee at 14 days, and automatically suspend QR check-in access and class bookings at 21 days. When the member settles the balance, access is reinstated automatically — no staff action required. The entire workflow is visible on a dedicated overdue accounts dashboard where managers can see every member in the dunning pipeline, the stage they are at, and the outstanding amount. For members experiencing financial hardship, GymWyse supports payment plans that split overdue balances into manageable instalments with configurable amounts, frequencies, and durations. Payment plan progress is tracked on the member's profile, and the system automatically processes each instalment on schedule.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting and Payment Recovery",
    description:
      "GymWyse provides comprehensive financial reporting that gives you real-time visibility into every aspect of your gym's billing operations. The reporting dashboard includes total revenue by period broken down by stream — membership fees, personal training, class packs, retail, and ancillary services — so you can see exactly which revenue lines are growing and which are underperforming. Outstanding balance reports show every member with an overdue amount sorted by ageing bucket (0-30 days, 31-60 days, 61-90 days, and 90+ days), giving you a clear accounts receivable position at all times. Revenue forecasting uses your current membership base, billing schedules, and historical churn rates to project future income with high accuracy. Failed payment recovery runs automatically through a dunning engine that retries declined transactions with intelligent scheduling and sends personalised notifications to members with one-click payment update links. The system recovers an average of 40% of failed payments that would otherwise be permanently lost. All financial data can be exported to CSV and PDF, and GymWyse integrates natively with Xero and QuickBooks for automatic accounting synchronisation. Monthly and annual financial summaries are generated automatically and can be scheduled for delivery to your accountant, business partners, or investors on a recurring basis.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "GymWyse supports billing in multiple currencies natively, making it the ideal platform for gym businesses operating across different markets. Supported currencies include USD for the United States, GBP for the United Kingdom, AUD for Australia, and AED for the United Arab Emirates. Each gym location is configured with its primary currency, and all invoices, reports, and member-facing billing displays use the correct currency symbol, formatting, and decimal conventions automatically. For gym chains operating across multiple countries, the central dashboard provides consolidated revenue reporting with automatic currency conversion at daily exchange rates, so you can view total group revenue in a single base currency without manually converting figures. Tax handling is also localised to each market — GymWyse supports GST for Australia, VAT for the United Kingdom, and configurable sales tax rates for US states and municipalities. Currency-specific payment methods are supported as well: ACH in the US, BACS Direct Debit in the UK, Australian Direct Debit and BPAY in Australia, and card payments globally via Stripe. This localisation ensures your invoices are professional and compliant regardless of where your gym operates.",
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
  { value: "15 hrs/wk", label: "Admin time saved on billing" },
  { value: "40%", label: "Failed payments recovered" },
  { value: "$0", label: "Billing errors per month (from $2,400)" },
  { value: "98.2%", label: "Collection rate (from 89%)" },
];

const comparisonRows = [
  {
    feature: "Recurring Billing",
    gymwyse: "Automated with proration and staggering",
    competitor: "Manual invoicing (error-prone)",
  },
  {
    feature: "Invoice Generation",
    gymwyse: "Automatic, branded, delivered via app + email",
    competitor: "Manual creation in Word/Excel",
  },
  {
    feature: "Failed Payment Recovery",
    gymwyse: "Automated dunning with 40% recovery",
    competitor: "Manual phone calls and emails",
  },
  {
    feature: "Late Fee Management",
    gymwyse: "Automated application with member notification",
    competitor: "Manual tracking and application",
  },
  {
    feature: "Payment Plans",
    gymwyse: "Built-in with automated instalment processing",
    competitor: "Ad hoc arrangements (untracked)",
  },
  {
    feature: "Financial Reporting",
    gymwyse: "Real-time dashboard with ageing reports",
    competitor: "Monthly manual spreadsheet compilation",
  },
  {
    feature: "Accounting Integration",
    gymwyse: "Native Xero and QuickBooks sync",
    competitor: "Manual data entry to accounting software",
  },
  {
    feature: "Time Investment",
    gymwyse: "Fully automated (zero staff hours)",
    competitor: "8-15 hours per week of manual billing admin",
  },
];

const testimonials = [
  {
    quote:
      "Before GymWyse, our billing was a nightmare. Two staff members spent a combined 12 hours per week creating invoices, chasing overdue payments, calculating late fees, and reconciling our accounts. We had billing errors every month that led to member complaints and refund requests. GymWyse automated everything — invoices generate automatically, late fees apply themselves, and failed payments are recovered without anyone lifting a finger. We reassigned those 12 hours to member engagement and our retention improved.",
    name: "Nicole Fischer",
    role: "Owner, Elevate Gym",
    location: "Portland, OR",
  },
  {
    quote:
      "We switched from manual billing to GymWyse after a month where we discovered $2,400 in billing errors — members charged incorrect amounts, missed charges on frozen accounts, and invoices sent to the wrong email addresses. Since migrating to GymWyse, we have had zero billing errors in nine months. The automated system is more accurate, faster, and costs nothing in staff time. Our collection rate went from 89% to 98.2%.",
    name: "Carlos Rivera",
    role: "Director, Momentum Fitness",
    location: "Las Vegas, NV",
  },
  {
    quote:
      "The payment plan feature saved several memberships we would have lost. When a member falls behind, we can set up a structured repayment plan right in GymWyse instead of choosing between writing off the debt or losing the member entirely. The instalments process automatically and the member stays active. We have recovered over $8,000 in overdue balances through payment plans that we would have written off under our old system.",
    name: "Hannah Park",
    role: "Co-owner, True Grit Fitness",
    location: "Raleigh, NC",
  },
];

const faqItems = [
  {
    question: "How does GymWyse handle recurring membership billing?",
    answer:
      "GymWyse automates recurring billing with configurable schedules — weekly, fortnightly, monthly, quarterly, or annual. Each member is charged automatically on their billing date via their chosen payment method (card, ACH, or Direct Debit). Proration is calculated automatically for mid-cycle upgrades, downgrades, and freezes. Staggered billing dates distribute payment processing across the month for smoother cash flow. Receipts are generated and delivered automatically via email and the member app after every successful charge.",
  },
  {
    question: "Does GymWyse generate invoices automatically?",
    answer:
      "Yes. Every transaction — recurring charges, one-time purchases, late fees, and payment plan instalments — generates a professional branded invoice automatically. Invoices include your gym's logo, contact information, and payment details. They are delivered via email and accessible in the member's app account. You can also create ad hoc invoices for custom charges and send them from the member's profile. Bulk invoicing is available for charging groups of members for events or workshops.",
  },
  {
    question: "How does the failed payment recovery work?",
    answer:
      "GymWyse's dunning engine automatically retries failed transactions using intelligent scheduling that spaces retries across different days and times to maximise success rates. Simultaneously, personalised notifications are sent to the member via email, SMS, and push notification with a one-click link to update their payment method. The dunning sequence escalates over a configurable window, typically 14 days. GymWyse recovers an average of 40% of failed payments. For more details, see our gym payment processing page.",
  },
  {
    question: "Can I set up payment plans for members with overdue balances?",
    answer:
      "Yes. GymWyse supports custom payment plans that split overdue balances into manageable instalments. You configure the instalment amount, frequency, and duration. The system processes each instalment automatically on schedule and tracks progress on the member's profile. Payment plans help you retain members experiencing temporary financial difficulty while still recovering the revenue owed. Both the member and management can see the plan status, remaining balance, and next instalment date.",
  },
  {
    question: "Does GymWyse integrate with accounting software?",
    answer:
      "Yes. GymWyse integrates natively with Xero and QuickBooks, automatically syncing invoices, payments, refunds, and revenue data. This eliminates manual data entry and ensures your accounting records are always up to date. For other accounting platforms, GymWyse provides CSV and PDF exports that can be imported directly. Financial reports can be scheduled for automatic delivery to your accountant on a daily, weekly, or monthly basis.",
  },
  {
    question: "How does late fee management work?",
    answer:
      "You configure late fee rules per membership type — either a flat fee or percentage charge applied automatically when a payment is overdue by a configurable number of days. Members receive a notification before the late fee is applied, providing a grace period to resolve the issue. Late fees are added to the member's account automatically and appear on their next invoice. You can waive late fees on a case-by-case basis if needed. All late fee revenue is tracked separately in your financial reporting dashboard so you can see how much it contributes to your bottom line.",
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
              Billing & Invoicing
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Gym Billing Software with Automated Invoicing and Payment
              Recovery
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Stop spending hours on manual invoicing and payment chasing.
              GymWyse gym management software automates recurring billing,
              invoice generation, late fee management, payment plans, and
              failed payment recovery — so you collect more revenue with
              zero administrative effort.
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
              The True Cost of Manual Gym Billing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Manual billing is one of the most expensive and error-prone
              processes in gym operations. Between creating invoices,
              chasing overdue payments, calculating late fees, and
              reconciling accounts, billing administration consumes 8-15
              hours per week at the average gym — and errors cost thousands
              in lost revenue and damaged member relationships.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Manual Invoicing Wastes Staff Hours",
                description:
                  "Creating and sending invoices manually — whether through Word documents, Excel templates, or generic accounting software — is a labour-intensive process that scales poorly. A gym with 400 members generates at least 400 invoices per month for recurring dues alone, plus additional invoices for PT packages, joining fees, merchandise, and one-time charges. When invoices are created manually, errors are inevitable: wrong amounts, wrong billing dates, wrong payment methods, invoices sent to former members, and charges applied to frozen accounts. Each error requires investigation, correction, and often a member-facing apology, consuming even more staff time and damaging trust.",
              },
              {
                icon: DollarSign,
                title: "Overdue Payments Go Uncollected",
                description:
                  "When billing is manual, chasing overdue payments becomes a game of memory and persistence. Staff must remember which members have not paid, send individual follow-up messages, track who has responded, and log payment promises. This process is inconsistent at best and non-existent at worst. Many gyms simply accept a collection rate of 85-90%, writing off the remaining 10-15% as bad debt. For a gym with $30,000 in monthly recurring revenue, a 10% uncollected rate means losing $3,000 every month — $36,000 per year — that could be recovered with automated dunning and payment follow-up.",
              },
              {
                icon: Receipt,
                title: "No Financial Visibility Until Month End",
                description:
                  "With manual billing, financial data lives in spreadsheets that are updated periodically — typically weekly or monthly. This means you have no real-time visibility into your collection rate, outstanding receivables, or revenue trends. Problems that could be caught immediately — a spike in failed payments, a batch of invoices sent with incorrect amounts, or a sudden drop in collection rate — go unnoticed until someone compiles the monthly report. By then, the damage is done: revenue is lost, members are frustrated, and you are making business decisions based on data that is weeks old.",
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
              How GymWyse Solves Gym Billing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse replaces manual billing with a fully automated system
              that handles recurring charges, invoice generation, late fee
              application, payment plan management, and failed payment
              recovery — all without staff intervention. Every transaction
              generates a branded invoice delivered instantly. Overdue
              payments are pursued automatically through multi-channel
              dunning sequences. Financial data is available in real time
              through a comprehensive reporting dashboard. The result is a
              98%+ collection rate, zero billing errors, and zero hours
              spent on billing administration. For detailed payment
              processing information including supported methods and
              transaction fees, visit our{" "}
              <Link
                href="/gym-payment-processing"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                gym payment processing
              </Link>{" "}
              page.
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
              Billing Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four pillars of automated billing that eliminate manual work
              and maximise your collection rate.
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
              Billing and invoicing are fully integrated into the broader
              GymWyse platform. Beyond billing, GymWyse manages every
              aspect of gym operations — membership management with
              flexible tiers and freeze options that automatically adjust
              billing, QR-code check-ins via the member app, class
              scheduling with waitlists and automated notifications,
              personal training booking with session packages and recurring
              appointments, staff management with role-based permissions
              and commission tracking, revenue analytics with real-time
              dashboards, and AI-powered churn prediction. Because billing
              is native to the platform, membership changes are instantly
              reflected in billing — a freeze pauses charges automatically,
              a tier upgrade prorates the next payment, and a cancellation
              stops billing on the correct date without manual intervention.
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
                Crossroads Fitness, Dallas, TX
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                2 locations — 900 members — Full-service gym with group
                fitness, PT, and retail
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Crossroads Fitness managed billing manually across two
                    locations. Two staff members spent a combined 15 hours
                    per week creating invoices in Excel, chasing overdue
                    payments via phone and email, calculating late fees
                    manually, and reconciling bank statements against their
                    member database. Billing errors averaged $2,400 per
                    month in incorrectly charged or missed payments. The
                    collection rate was 89%, meaning over $3,000 per month
                    went uncollected. Financial reporting was compiled
                    monthly in a spreadsheet, meaning the owner had no
                    real-time visibility into cash flow or outstanding
                    receivables.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Crossroads Fitness migrated to GymWyse and activated
                    automated billing across both locations. Recurring
                    charges now process automatically on each member&apos;s
                    billing date. Invoices generate and deliver themselves.
                    Late fees apply according to preconfigured rules without
                    staff involvement. The failed payment dunning engine
                    started recovering 40% of declined transactions in the
                    first month. Payment plans were set up for 12 members
                    with overdue balances, recovering $4,200 that would have
                    been written off. Within 90 days, the collection rate
                    improved from 89% to 98.2%, billing errors dropped to
                    zero, and the 12 hours of weekly billing admin were
                    eliminated entirely. Staff time was redirected to
                    member engagement and retention activities.
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
              GymWyse vs Manual Billing
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See why automated gym billing software outperforms manual
              invoicing and payment chasing at every step.
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
                        Manual Billing
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
              Everything you need to know about gym billing software
              on GymWyse.
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
              Automate Your Billing. Collect Every Dollar.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Every hour spent on manual billing is an hour not spent on
              member engagement. Every uncollected payment is revenue lost
              permanently. GymWyse automates your entire billing operation
              — recurring charges, invoicing, late fees, payment plans, and
              failed payment recovery — so you achieve a 98%+ collection
              rate with zero staff hours. Start your 14-day free trial
              today or book a personalised demo to see how much time and
              revenue you can recover.
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
