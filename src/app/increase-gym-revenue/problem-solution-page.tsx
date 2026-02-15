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
  DollarSign,
  ShoppingCart,
  CreditCard,
  PieChart,
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
    icon: BarChart3,
    title: "Revenue Analytics Dashboard",
    description:
      "GymWyse provides a real-time revenue analytics dashboard that breaks down every dollar flowing through your gym. You can see total revenue, recurring membership revenue, one-time purchase revenue, personal training revenue, and ancillary income streams — all updated in real time as transactions occur. The dashboard includes month-over-month and year-over-year comparisons, so you can instantly identify growth trends and seasonal patterns. Revenue per member metrics show your average lifetime value and how it changes across membership tiers, join-date cohorts, and engagement levels. You can drill down by revenue source to understand which membership plans, class packages, PT sessions, and retail items generate the most profit per unit of effort. The dashboard also surfaces revenue concentration risk — if 40% of your income comes from a single membership tier, you will know about it and can diversify. All data is exportable to CSV and PDF for board presentations, investor reports, and accountant reviews.",
  },
  {
    icon: ShoppingCart,
    title: "Upsell and Cross-Sell Automation",
    description:
      "GymWyse identifies upsell opportunities automatically based on member behaviour and triggers personalised offers at exactly the right moment. When a member consistently attends group classes three or more times per week, the system can offer an unlimited class add-on. When a member has been on a basic plan for 90 days and shows high engagement, it can suggest a premium tier upgrade with a one-click upgrade path in the member app. Cross-sell workflows connect related services — a member booking their first yoga class might receive an automated offer for a yoga accessories bundle, or a member completing a 12-week PT programme might be offered a nutrition coaching add-on. Every upsell campaign includes A/B testing capabilities so you can optimise offer timing, messaging, and discount levels. Conversion tracking shows exactly how much incremental revenue each automated campaign generates, giving you a clear return on investment for every workflow you create.",
  },
  {
    icon: CreditCard,
    title: "Failed Payment Recovery",
    description:
      "Failed payments are one of the largest sources of hidden revenue loss in the gym industry. Studies show that 5-8% of recurring gym payments fail each month due to expired cards, insufficient funds, or bank processing errors. Without automated recovery, most of these payments are never collected. GymWyse's failed payment recovery engine automatically retries failed transactions using intelligent scheduling — spacing retries across different days and times to maximise the chance of success. The system sends personalised notifications to members with failed payments, providing easy one-click payment update links in email, SMS, and push notifications. A configurable dunning sequence escalates communication over a 14-day window, from friendly reminders to urgent notices. GymWyse recovers an average of 40% of failed payments that would otherwise be lost — for a gym with 500 members, that typically translates to $2,000-$4,000 in monthly revenue recovered.",
  },
  {
    icon: PieChart,
    title: "Per-Service Profitability Analysis",
    description:
      "Not all revenue is created equal. A group class generating $500 per session with 25 attendees and one instructor is far more profitable than a personal training session generating $80 with a trainer earning 60% commission. GymWyse's per-service profitability analysis calculates the true margin on every service your gym offers, factoring in direct costs such as instructor pay and commission, allocated overhead like facility costs per square foot used, and opportunity costs based on time slot demand. The analysis reveals which classes, packages, and services are your profit engines and which are margin drains. Armed with this data, you can make informed decisions about pricing adjustments, schedule optimisation, service discontinuation, and resource allocation. Many GymWyse users discover that 20-30% of their schedule is occupied by low-margin or loss-making services that could be replaced with more profitable alternatives — often increasing overall revenue by 10-15% without adding a single new member.",
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
  { value: "$8,400/mo", label: "Revenue increase within 6 months" },
  { value: "40%", label: "Failed payments recovered" },
  { value: "22%", label: "Upsell conversion rate" },
  { value: "3 services", label: "Low-margin classes replaced" },
];

const comparisonRows = [
  {
    feature: "Revenue Tracking",
    gymwyse: "Real-time dashboard, per-source breakdown",
    competitor: "Monthly manual spreadsheet updates",
  },
  {
    feature: "Upsell Automation",
    gymwyse: "Behaviour-triggered, personalised campaigns",
    competitor: "No automation (manual offers)",
  },
  {
    feature: "Failed Payment Recovery",
    gymwyse: "Automated retries + dunning (40% recovery)",
    competitor: "Manual follow-up (10-15% recovery)",
  },
  {
    feature: "Per-Service Profitability",
    gymwyse: "Automatic margin calculation per service",
    competitor: "Not tracked or estimated manually",
  },
  {
    feature: "Revenue Forecasting",
    gymwyse: "AI-powered predictions with churn factored in",
    competitor: "Simple linear projections (if any)",
  },
  {
    feature: "A/B Testing for Offers",
    gymwyse: "Built-in with conversion tracking",
    competitor: "Not available",
  },
  {
    feature: "Financial Exports",
    gymwyse: "CSV, PDF, Xero/QuickBooks integration",
    competitor: "Manual data entry to accounting software",
  },
  {
    feature: "Revenue Alerts",
    gymwyse: "Configurable thresholds and notifications",
    competitor: "None (discovered at month end)",
  },
];

const testimonials = [
  {
    quote:
      "We had no idea how much money we were leaving on the table until GymWyse showed us. The per-service profitability analysis revealed that our Saturday morning Pilates class was actually losing money when we factored in instructor costs and the premium time slot. We replaced it with a high-demand HIIT class and added $1,200 per month to our bottom line. The revenue dashboard alone is worth the subscription — we stopped using spreadsheets entirely.",
    name: "Marcus Chen",
    role: "Owner, FitHub Studios",
    location: "San Diego, CA",
  },
  {
    quote:
      "We switched from Zen Planner to GymWyse because we needed real revenue analytics, not just basic reports. The upsell automation was a game changer — within 60 days, 22% of our basic members upgraded to premium after receiving personalised in-app offers. Failed payment recovery alone brought back $3,100 in the first month. I wish we had switched years ago.",
    name: "Lisa Hartwell",
    role: "Director, Forge Fitness Center",
    location: "Nashville, TN",
  },
  {
    quote:
      "As a multi-location operator, I need to know exactly which locations and services are driving profit and which are dragging. GymWyse gives me per-location, per-service margin breakdowns in real time. We identified two underperforming class types across all three gyms and replaced them with bootcamp sessions that generate 3x the revenue per slot. That insight was worth more than a year of consulting fees.",
    name: "Andre Williams",
    role: "CEO, Apex Athletics (3 locations)",
    location: "Charlotte, NC",
  },
];

const faqItems = [
  {
    question: "How does GymWyse help increase gym revenue?",
    answer:
      "GymWyse increases gym revenue through four integrated mechanisms: real-time revenue analytics that surface growth opportunities and margin issues; automated upsell and cross-sell campaigns triggered by member behaviour; failed payment recovery that recaptures 40% of declined transactions; and per-service profitability analysis that helps you optimise your schedule and pricing for maximum margin. Together, these tools give you complete visibility into where your money comes from and where you are leaving revenue on the table.",
  },
  {
    question: "How much revenue can GymWyse recover from failed payments?",
    answer:
      "On average, GymWyse recovers 40% of failed recurring payments through automated retries and dunning sequences. For a gym with 500 members and an average failed payment rate of 6%, that typically translates to recovering $2,000-$4,000 per month in payments that would otherwise be permanently lost. The recovery engine uses intelligent retry scheduling — spacing attempts across different days and times — combined with personalised member notifications via email, SMS, and push to maximise recovery rates.",
  },
  {
    question: "What kind of upsell campaigns can I create?",
    answer:
      "GymWyse supports behaviour-triggered upsell campaigns across email, SMS, and in-app push notifications. Common campaigns include membership tier upgrades for highly engaged basic members, class package add-ons for frequent class attendees, personal training introductory offers for members who have never booked a PT session, and retail product recommendations based on class preferences. Every campaign supports A/B testing so you can optimise timing, messaging, and discount levels. Conversion tracking shows exactly how much incremental revenue each campaign generates.",
  },
  {
    question: "Can I see revenue broken down by individual services?",
    answer:
      "Yes. GymWyse provides per-service profitability analysis that calculates the true margin on every service your gym offers. This includes group classes, personal training, retail, and ancillary services. The system factors in direct costs like instructor pay and commissions, allocated overhead based on facility usage, and opportunity costs based on time-slot demand. You can identify which services are your highest-margin offerings and which are underperforming, then make data-driven decisions about pricing, scheduling, and resource allocation.",
  },
  {
    question: "Does GymWyse integrate with accounting software?",
    answer:
      "Yes. GymWyse integrates natively with Xero and QuickBooks, automatically syncing invoices, payments, and revenue data. This eliminates manual data entry and ensures your accounting records are always up to date. For other accounting platforms, GymWyse provides CSV and PDF exports that can be imported directly. Revenue reports are generated in real time and can be scheduled for automatic delivery to your accountant on a daily, weekly, or monthly basis.",
  },
  {
    question: "How does revenue forecasting work?",
    answer:
      "GymWyse's revenue forecasting model projects future revenue based on current membership trends, historical seasonality patterns, churn predictions, and scheduled price changes. Unlike simple linear projections, the forecast factors in the AI churn prediction engine's output — so if the model predicts a 15% increase in churn next month due to seasonal patterns, the revenue forecast adjusts accordingly. Forecasts are updated daily and displayed as a range with confidence intervals, giving you realistic expectations rather than optimistic straight-line projections.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function ProblemSolutionPage() {
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
              Revenue Growth
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Increase Gym Revenue with Data-Driven Management Software
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Most gym owners know they are leaving money on the table but
              cannot pinpoint exactly where. GymWyse gym management software
              gives you real-time revenue analytics, automated upsell
              campaigns, failed payment recovery, and per-service
              profitability analysis — so you can grow revenue without
              growing your member base.
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
              Why Most Gyms Plateau on Revenue
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              The fitness industry operates on razor-thin margins. The average
              gym earns a net profit margin of just 10-15%, and most operators
              have no visibility into which services are profitable and which
              are draining resources. Revenue growth stalls not because of a
              lack of members, but because of a lack of insight into what
              drives — and kills — profitability.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Blind Spots in Revenue Data",
                description:
                  "Most gyms track total revenue in a spreadsheet but have no breakdown by service, membership tier, or time period. You know your top-line number, but you cannot tell whether your Tuesday evening spin class is more profitable than your Thursday morning HIIT. Without per-service margin data, you are making scheduling and pricing decisions based on gut feeling rather than financial reality. These blind spots compound over months, and small inefficiencies add up to thousands in lost profit annually.",
              },
              {
                icon: DollarSign,
                title: "Failed Payments Go Unrecovered",
                description:
                  "Between 5% and 8% of recurring gym payments fail every month. For a 500-member gym charging $60 per month, that is $1,500-$2,400 in monthly revenue that simply disappears if not recovered. Most gyms either chase failed payments manually — an inconsistent and time-consuming process — or write them off entirely. Without automated retry logic and member notification sequences, the majority of failed payments are never collected, creating a silent and persistent revenue leak.",
              },
              {
                icon: ShoppingCart,
                title: "No Upsell Infrastructure",
                description:
                  "Gym members are consistently under-monetised. A member paying $49 per month for a basic plan who attends classes five times a week and has never been offered a premium upgrade is a missed opportunity. A member who completes a PT package and is never offered a follow-up programme is revenue left on the table. Without automated upsell and cross-sell workflows triggered by member behaviour, these opportunities pass by unnoticed — every single day, across hundreds of members.",
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
              How GymWyse Drives Revenue Growth
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse turns your gym into a data-driven revenue engine. The
              platform provides complete financial visibility through real-time
              dashboards that break down revenue by source, service, member
              cohort, and time period. Automated upsell and cross-sell
              campaigns trigger at exactly the right moment based on member
              behaviour, converting existing members into higher-value
              customers without manual effort. Failed payment recovery runs
              continuously in the background, recapturing revenue that would
              otherwise vanish. And per-service profitability analysis reveals
              which parts of your operation generate real margin and which
              drain it — so you can optimise your schedule, pricing, and
              resource allocation for maximum profit. Explore our{" "}
              <Link
                href="/platform/revenue-analytics"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                revenue analytics platform
              </Link>{" "}
              to see the full dashboard.
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
              Revenue Growth Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four powerful tools that work together to maximise every
              dollar your gym generates.
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
              Revenue analytics is one pillar of the GymWyse platform. Beyond
              financial tools, GymWyse handles every operational aspect of
              running a gym — membership management with flexible tiers and
              freeze options, QR-code check-ins via the member app, class
              scheduling with waitlists and automated notifications, billing
              and invoicing with support for ACH, Direct Debit, and card
              payments, personal training booking with session packages and
              recurring appointments, staff management with role-based
              permissions and commission tracking, and AI-powered churn
              prediction that flags at-risk members before they cancel. All
              of these data streams feed into your revenue analytics, giving
              you a 360-degree view of the financial health of your business.
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
                Ironclad Fitness, Phoenix, AZ
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                2 locations — 840 members — Full-service gym with group
                fitness and PT
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Ironclad Fitness was growing its member base but revenue
                    was plateauing. Owner Sarah Nguyen tracked financials in
                    a Google Sheet updated monthly and had no visibility into
                    per-service profitability. Failed payments were chased
                    manually by front-desk staff — inconsistently and slowly.
                    There was no upsell strategy beyond occasional in-person
                    conversations at the front desk. Sarah suspected the gym
                    was leaving significant revenue on the table but had no
                    data to prove it or act on it.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    After migrating to GymWyse, the revenue analytics
                    dashboard immediately revealed three underperforming
                    class types that occupied premium time slots but
                    generated negative margins after instructor costs. Sarah
                    replaced them with high-demand bootcamp sessions. The
                    failed payment recovery engine started running
                    automatically, recovering 40% of declined payments
                    within 14 days. Automated upsell campaigns triggered
                    personalised upgrade offers to engaged basic-tier
                    members, achieving a 22% conversion rate. Within six
                    months, monthly revenue increased by $8,400 across both
                    locations — without adding a single new member.
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
              GymWyse vs Spreadsheets for Revenue Management
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See why purpose-built revenue analytics outperform manual
              spreadsheet tracking at every level of financial management.
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
                        Spreadsheets
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
              Everything you need to know about increasing gym revenue
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
              Unlock the Revenue Your Gym Is Already Generating
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              You do not need more members to grow revenue — you need better
              data. GymWyse gives you real-time revenue analytics, automated
              upsell campaigns, failed payment recovery, and per-service
              profitability analysis so you can maximise every dollar your
              gym earns. Start your 14-day free trial today or book a
              personalised demo to see exactly how much revenue you are
              leaving on the table.
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
