"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  Banknote,
  Shield,
  PoundSterling,
  Users,
  BarChart3,
  TrendingUp,
  Calendar,
  Building2,
  Dumbbell,
  MapPin,
  Quote,
  CreditCard,
  Lock,
  Settings,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const marketStats = [
  { value: "7,200+", label: "Gyms across the United Kingdom" },
  { value: "£5B+", label: "Annual UK fitness industry revenue" },
  { value: "10.4M", label: "Active gym members nationwide" },
  { value: "28%", label: "Boutique studio growth since 2023" },
];

const bacsFeatures = [
  "GoCardless integration for seamless BACS Direct Debit collection with no payment processing markup added by GymWyse",
  "Members set up Direct Debit mandates in 60 seconds via the GymWyse member app — no paper forms, no branch visits",
  "Failed payment retry is fully automatic: three attempts over 14 days with smart scheduling to maximise recovery",
  "Industry-leading 40% recovery rate on failed Direct Debits, compared to the 15-20% typical with manual follow-up",
  "Real-time reconciliation with bank feeds so your accounts are always up to date without manual data entry",
  "Supports variable Direct Debits for add-ons, personal training sessions, and overage charges beyond the base membership",
];

const gdprFeatures = [
  "Full GDPR compliance built into the platform from the ground up with privacy-by-design architecture",
  "Data Processing Agreement (DPA) provided with every subscription at no extra cost — ready for ICO audit",
  "All member data stored on UK and EU servers (AWS London eu-west-2) and never transferred outside UK jurisdiction",
  "Right to erasure: one-click member data deletion with full audit trail for ICO accountability",
  "Data portability: export all member data in standard machine-readable formats (CSV, JSON) on demand",
  "Consent management for marketing communications built into every member touchpoint — sign-up, check-in, app interactions",
  "Cookie compliance handled automatically on your member-facing booking pages and portals",
];

const ukOperations = [
  {
    icon: PoundSterling,
    title: "VAT Handling",
    description:
      "Automatic VAT calculation on all transactions at the standard 20% rate with support for reduced and zero-rated items. VAT-inclusive pricing display across all member-facing surfaces. Quarterly VAT report generation compatible with Making Tax Digital (MTD) for seamless HMRC submissions. Native Xero and QuickBooks integration syncs invoices and payments automatically.",
  },
  {
    icon: CreditCard,
    title: "GBP Pricing",
    description:
      "All prices, reports, invoices, receipts, and Direct Debit mandates are displayed and processed in British Pounds. No hidden currency conversion fees. Your members see GBP at every touchpoint, and your accounting exports are natively in pounds — no post-processing required.",
  },
  {
    icon: Calendar,
    title: "Bank Holidays & Scheduling",
    description:
      "Auto-adjust class schedules for all UK bank holidays including England, Scotland, Wales, and Northern Ireland regional variations. Staff rotas update automatically. Members receive push notifications about holiday schedule changes. Recurring classes intelligently skip or reschedule around bank holidays.",
  },
  {
    icon: Building2,
    title: "Multi-Site Management",
    description:
      "Purpose-built for growing UK gym chains. Unified dashboard showing revenue, attendance, churn, and occupancy across all locations. Per-site drill-downs for granular analysis. Centralised membership management with cross-location access controls. Staff can be assigned to one or multiple sites.",
  },
  {
    icon: Users,
    title: "Staff Contracts & Commission",
    description:
      "Track staff contracts, working hours, and commission in GBP. Configure PT session commission rates per trainer. Automated commission calculation and reporting. Holiday accrual tracking aligned with UK employment law minimums. Export payroll-ready reports for your accountant.",
  },
];

const fitnessTrends = [
  {
    title: "Hybrid Memberships",
    description:
      "The in-gym plus digital classes model is now standard across UK boutique fitness. GymWyse lets you create hybrid membership tiers that combine studio access, outdoor sessions, and on-demand video content under a single subscription with unified attendance tracking.",
  },
  {
    title: "Outdoor Bootcamps",
    description:
      "Park-based fitness sessions continue to surge in popularity across the UK. GymWyse supports outdoor venue management with park licensing compliance tracking, GPS-based check-ins for outdoor locations, and weather-aware scheduling with automatic member notifications.",
  },
  {
    title: "Recovery Services",
    description:
      "Ice baths, infrared saunas, and cryotherapy are growing 20% year-over-year in premium UK gyms. GymWyse handles amenity booking, capacity management, and add-on billing for recovery services alongside your core fitness programming.",
  },
  {
    title: "Women-Only Sessions",
    description:
      "Dedicated women-only training hours and classes are a growing demand across UK facilities. GymWyse allows you to schedule, promote, and manage gender-specific sessions with appropriate access controls and targeted marketing automation.",
  },
  {
    title: "Early Morning Classes",
    description:
      "A 6am class surge is sweeping the London commuter belt and major UK cities as professionals fit training around work schedules. GymWyse provides demand forecasting to help you optimise early-morning class capacity and staffing levels.",
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

const foundryResults = [
  { value: "2.8%", label: "Monthly churn (from 4.2%)" },
  { value: "£1,800/mo", label: "Recovered in failed payments" },
  { value: "1 dashboard", label: "Unified across 2 locations" },
  { value: "3 days", label: "Full migration from Glofox" },
];

const comparisonRows = [
  {
    feature: "Monthly Pricing",
    gymwyse: "From £79/location",
    glofox: "From £110/location",
  },
  {
    feature: "BACS Direct Debit",
    gymwyse: "Native GoCardless (included)",
    glofox: "Third-party add-on (extra cost)",
  },
  {
    feature: "GDPR Tools",
    gymwyse: "Full suite (DPA, erasure, consent)",
    glofox: "Basic consent only",
  },
  {
    feature: "Churn Prediction",
    gymwyse: "AI-powered (14 signals)",
    glofox: "Not available",
  },
  {
    feature: "Multi-Location Dashboard",
    gymwyse: "Unified (included in Growth)",
    glofox: "Separate dashboards per site",
  },
  {
    feature: "UK Data Hosting",
    gymwyse: "AWS London (eu-west-2)",
    glofox: "EU servers (Ireland)",
  },
  {
    feature: "VAT Reporting",
    gymwyse: "Built-in + MTD ready",
    glofox: "Manual export required",
  },
  {
    feature: "Setup Fee",
    gymwyse: "£0",
    glofox: "£300+",
  },
];

const cityPages = [
  {
    name: "London",
    href: "/gym-software-london",
    description:
      "The UK capital with over 1,400 gyms competing for 2.5 million active fitness consumers. From Shoreditch CrossFit boxes to Mayfair wellness clubs.",
  },
  {
    name: "Manchester",
    href: "/gym-software-manchester",
    description:
      "A booming fitness scene with 500+ facilities. Strong independent gym culture competing against budget chains across Greater Manchester.",
  },
  {
    name: "Birmingham",
    href: "/gym-software-birmingham",
    description:
      "The Midlands fitness hub with rapid boutique studio growth. Over 350 facilities serving a diverse and growing fitness community.",
  },
  {
    name: "Edinburgh",
    href: "/gym-software-edinburgh",
    description:
      "Scotland's capital blending traditional gyms with innovative boutique concepts. Strong demand for outdoor and hybrid training formats.",
  },
  {
    name: "Leeds",
    href: "/gym-software-leeds",
    description:
      "A fast-growing northern fitness market with a thriving independent gym scene and increasing demand for functional training studios.",
  },
  {
    name: "Glasgow",
    href: "/gym-software-glasgow",
    description:
      "Scotland's largest city with a passionate fitness community. Budget gyms and CrossFit boxes dominate, with boutique studios gaining ground.",
  },
  {
    name: "Bristol",
    href: "/gym-software-bristol",
    description:
      "A health-conscious city with strong yoga, Pilates, and climbing gym presence. The South West's most dynamic fitness market.",
  },
  {
    name: "Liverpool",
    href: "/gym-software-liverpool",
    description:
      "A competitive market where independent operators thrive alongside national chains. Strong community-driven fitness culture.",
  },
];

const faqItems = [
  {
    question: "Is GymWyse GDPR compliant?",
    answer:
      "Yes, fully. GymWyse is built with privacy-by-design architecture and includes a complete GDPR compliance suite. All member data is hosted on AWS London (eu-west-2) and never leaves UK jurisdiction. Every subscription includes a Data Processing Agreement (DPA) at no extra cost. We provide one-click right to erasure with full audit trails, automated consent management across all member touchpoints, data portability exports in standard formats, and cookie compliance on all member-facing pages. We undergo regular penetration testing and maintain SOC 2 Type II compliance.",
  },
  {
    question: "Does GymWyse support Direct Debit?",
    answer:
      "Yes. GymWyse integrates natively with GoCardless for BACS Direct Debit collection. Members complete a DD mandate in 60 seconds via the member app. Collections run on your chosen schedule with automatic retry logic — three attempts over 14 days — achieving a 40% recovery rate on failed payments. Real-time reconciliation with bank feeds means your accounts stay current without manual intervention. No third-party add-ons, no per-transaction markup from GymWyse.",
  },
  {
    question: "What is the pricing in GBP?",
    answer:
      "GymWyse pricing for UK customers is entirely in British Pounds with no currency conversion fees. Starter plan is £79 per location per month. Growth plan (2-5 locations) is £59 per location per month. Enterprise pricing is custom for 6+ locations. All plans include BACS Direct Debit integration, GDPR compliance tools, and VAT-ready reporting. No setup fees. No long-term contracts — cancel anytime.",
  },
  {
    question: "Can I switch from Glofox to GymWyse?",
    answer:
      "Absolutely. We provide a dedicated migration team that handles the entire transition from Glofox. We export your member data, payment mandates, class schedules, and historical records. Most single-location migrations complete within 48 hours, and multi-location migrations within 5 business days. We run both systems in parallel during the transition so you never miss a payment or lose a booking. Visit our migration page for a detailed walkthrough of the process.",
  },
  {
    question: "Is there UK-based support?",
    answer:
      "Yes. GymWyse provides UK-based support during GMT business hours. Starter plan includes email support with a 4-hour response time guarantee. Growth and Enterprise plans include priority support via email, phone, and live chat with a 1-hour response time during business hours. Enterprise clients also receive a dedicated account manager based in the UK.",
  },
  {
    question: "Does GymWyse handle VAT?",
    answer:
      "Yes. GymWyse automatically calculates 20% VAT on all applicable transactions with support for reduced and zero-rated items. All member-facing prices can be displayed VAT-inclusive. The platform generates quarterly VAT reports compatible with Making Tax Digital (MTD) for direct HMRC submission. Native integration with Xero and QuickBooks automates invoice and payment syncing for your accountant.",
  },
  {
    question: "Can I manage multiple UK locations from one account?",
    answer:
      "Yes. The Growth plan (£59/location/month for 2-5 sites) includes a unified multi-location dashboard. You see revenue, attendance, churn, and member activity across all locations in one view, with per-site drill-downs for detailed analysis. Staff can be assigned to one or multiple locations. Members can access any location based on their membership tier. For 6+ locations, Enterprise pricing includes dedicated account management and custom SLA.",
  },
  {
    question: "Is member data stored in the UK?",
    answer:
      "Yes. All GymWyse member data for UK customers is stored on AWS London (eu-west-2) infrastructure within the United Kingdom. Data is encrypted at rest and in transit. Backups are stored in UK data centres. Data never leaves UK jurisdiction unless you explicitly request a data export. This is a core commitment, not an optional add-on.",
  },
];

const pricingPlans = [
  {
    tier: "Starter",
    price: "£79",
    period: "per location/month",
    description: "Single location",
    features: [
      "Full gym management platform",
      "BACS Direct Debit (GoCardless)",
      "GDPR compliance suite",
      "VAT-ready reporting",
      "Class scheduling and booking",
      "Member app with QR check-in",
      "Revenue analytics dashboard",
      "Email support (4hr response)",
    ],
    highlighted: false,
  },
  {
    tier: "Growth",
    price: "£59",
    period: "per location/month",
    description: "2-5 locations",
    features: [
      "Everything in Starter",
      "Unified multi-location dashboard",
      "Cross-location member access",
      "AI churn prediction",
      "Priority support (1hr response)",
      "Custom branding",
      "Staff commission tracking",
      "Advanced retention analytics",
    ],
    highlighted: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "for 6+ locations",
    description: "Large chains",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom SLA and uptime guarantee",
      "API access and integrations",
      "On-site onboarding",
      "Bespoke reporting",
      "White-label member app",
      "Phone support (24/7)",
    ],
    highlighted: false,
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function UKPage() {
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
              United Kingdom
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Gym Management Software for the United Kingdom
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              GymWyse is the leading gym software UK operators trust to run
              their facilities. Purpose-built gym management software for the
              British fitness market — with native BACS Direct Debit collection,
              full GDPR compliance, VAT-ready reporting in GBP, and AI-powered
              churn prediction. Whether you run a single studio in Bristol or a
              multi-site chain across London, GymWyse gives you every tool you
              need to grow membership, reduce churn, and increase revenue.
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

      {/* ─── UK Fitness Market Context ─── */}
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
              The UK Fitness Market in 2025
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              The United Kingdom is home to more than 7,200 gyms and fitness
              facilities generating over £5 billion in annual revenue — making
              it the fastest-growing fitness market in Europe. Over 10.4 million
              Britons hold active gym memberships. Boutique fitness studios have
              grown by 28% since 2023, driven by demand for specialist training,
              community-focused experiences, and hybrid in-person and digital
              programming. At the same time, independent gym operators face
              intense competition from budget chains like PureGym and The Gym
              Group, which continue to expand aggressively, as well as premium
              boutique concepts commanding higher price points. In this
              competitive landscape, the right gym management software is not a
              luxury — it is a survival tool.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 text-center"
              >
                <div className="font-mono text-3xl font-bold text-electric-green md:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-cool-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BACS Direct Debit Integration ─── */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-electric-green/10">
              <Banknote className="h-7 w-7 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Seamless BACS Direct Debit Collection
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Direct Debit accounts for over 80% of recurring gym membership
              payments in the United Kingdom. GymWyse provides seamless BACS
              Direct Debit collection through a native GoCardless integration —
              with no payment processing markup added by GymWyse on top of
              GoCardless fees. Your members set up their DD mandate in 60
              seconds via the member app. Failed payments are retried
              automatically with three attempts spread over 14 days, achieving a
              40% recovery rate on failed DDs compared to the 15-20% typical
              with manual chasing. Bank feed reconciliation keeps your accounts
              in sync without manual data entry.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="glass-card rounded-2xl border border-glass-border p-8">
              <ul className="space-y-4">
                {bacsFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-soft-white"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-green" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GDPR Compliance ─── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-electric-green/10">
              <Shield className="h-7 w-7 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Full GDPR Compliance Built In
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              With the Information Commissioner&apos;s Office issuing
              record fines and GDPR enforcement intensifying across the UK, gym
              operators cannot afford to rely on software that treats data
              protection as an afterthought. GymWyse is built with
              privacy-by-design architecture from the ground up. Every feature
              that touches member data has been designed with GDPR compliance as
              a core requirement, not a bolt-on. Your Data Processing Agreement
              is included at no extra cost, member data never leaves UK servers,
              and your team can action a right-to-erasure request with a single
              click.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="glass-card rounded-2xl border border-glass-border p-8">
              <ul className="space-y-4">
                {gdprFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-soft-white"
                  >
                    <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-green" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UK-Specific Operations ─── */}
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
              Built for UK Gym Operations
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Every operational detail has been configured for how British gyms
              actually run — from VAT calculations to bank holiday scheduling.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ukOperations.map((item, index) => {
              const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── UK Fitness Trends ─── */}
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
              UK Fitness Trends GymWyse Supports
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              The British fitness landscape is evolving fast. GymWyse is built
              to help you capitalise on every emerging opportunity.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fitnessTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <h3 className="text-lg font-bold text-pure-white">
                  {trend.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Complete Gym Operations ─── */}
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
              Beyond the UK-specific features, GymWyse covers every aspect of
              running a gym. Membership management with flexible tiers and
              freeze options. QR-code check-ins via the member app. Class
              scheduling with waitlists and automatic notifications. Billing and
              invoicing in GBP with Direct Debit and card support. Personal
              training booking with session packages and recurring appointments.
              Staff management with role-based permissions, shift scheduling,
              and commission tracking. Revenue analytics with real-time
              dashboards. AI churn prediction that flags at-risk members 30 days
              before they cancel. All configured for UK operations out of the
              box — no workarounds, no manual configuration.
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

      {/* ─── Testimonial: The Foundry, London ─── */}
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
                The Foundry, London
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                2 locations (Shoreditch and Hackney) — 450 members — CrossFit
                box
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    The Foundry was previously using Glofox to manage their two
                    CrossFit locations. They faced persistent BACS Direct Debit
                    collection issues with Glofox&apos;s third-party payment
                    integration, which lacked automatic retry logic and charged
                    per-transaction fees. Monthly churn sat at 4.2% with no
                    churn prediction tooling to identify at-risk members. Each
                    location ran on a separate dashboard, making it impossible to
                    get a unified view of the business. The owner spent hours
                    each week manually reconciling payments and switching between
                    dashboards to understand overall performance.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    The Foundry migrated to GymWyse in 3 days with zero downtime.
                    GymWyse&apos;s native GoCardless integration replaced the
                    unreliable third-party payment setup, bringing automatic retry
                    logic and bank feed reconciliation. AI churn prediction
                    flagged 34 at-risk members in the first week. The unified
                    multi-location dashboard gave the owner a single view across
                    both Shoreditch and Hackney for the first time.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {foundryResults.map((result, index) => (
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

              <div className="mt-8 rounded-xl border border-glass-border bg-deep-space/30 p-6">
                <Quote className="mb-3 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;Glofox was costing us money we didn&apos;t even realise
                  we were losing. Failed Direct Debits were falling through the
                  cracks, and we had no idea which members were about to cancel.
                  GymWyse recovered £1,800 a month in failed payments and cut
                  our churn from 4.2% to 2.8%. Having both locations on one
                  dashboard changed how I run the business — I can see
                  everything in one place for the first time.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      Marcus Webb
                    </p>
                    <p className="text-xs text-dim-gray">
                      Owner, The Foundry (Shoreditch &amp; Hackney)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Additional Testimonials ─── */}
      <section className="bg-deep-space py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl border border-glass-border p-8"
            >
              <Quote className="mb-4 h-6 w-6 text-electric-green/40" />
              <blockquote className="text-base italic leading-relaxed text-soft-white">
                &ldquo;We switched from a US-based platform that didn&apos;t
                understand UK Direct Debit or VAT. GymWyse handled the
                migration in under 48 hours, and our failed payment rate
                dropped from 7.1% to 2.4% within the first month. The GDPR
                compliance tools gave us confidence we simply didn&apos;t have
                before — our insurance provider even reduced our premium when
                we showed them the DPA and data hosting setup.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                  <Users className="h-5 w-5 text-electric-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    Laura Dennison
                  </p>
                  <p className="text-xs text-dim-gray">
                    Owner, Iron House Gym
                  </p>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-dim-gray">
                    <MapPin className="h-3 w-3" />
                    Manchester
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl border border-glass-border p-8"
            >
              <Quote className="mb-4 h-6 w-6 text-electric-green/40" />
              <blockquote className="text-base italic leading-relaxed text-soft-white">
                &ldquo;Managing three Edinburgh locations on separate systems
                was a nightmare. GymWyse&apos;s multi-site dashboard finally
                gave us a real picture of the business. Churn prediction
                identified 19 at-risk members in the first week — we saved 11
                of them with automated re-engagement campaigns. The AI pays
                for itself every single month.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                  <Users className="h-5 w-5 text-electric-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    Craig Thornton
                  </p>
                  <p className="text-xs text-dim-gray">
                    Director, Apex Fitness (3 locations)
                  </p>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-dim-gray">
                    <MapPin className="h-3 w-3" />
                    Edinburgh
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Comparison vs Glofox ─── */}
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
              GymWyse vs Glofox for the UK Market
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See how GymWyse compares to Glofox on the features that matter
              most to UK gym operators. For a full detailed breakdown, visit
              our{" "}
              <Link
                href="/vs/glofox"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Glofox comparison page
              </Link>
              .
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
                        Glofox
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
                          {row.glofox}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/vs/glofox">
                <Button size="md" variant="secondary">
                  Full Glofox Comparison
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── UK City Coverage ─── */}
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
              Serving Gyms Across the United Kingdom
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              GymWyse powers fitness facilities in every major UK city. Explore
              our dedicated city pages for local market insights.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cityPages.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={city.href} className="group block">
                  <div className="glass-card h-full rounded-xl border border-glass-border p-6 transition-colors hover:border-electric-green/30">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-electric-green" />
                      <h3 className="text-base font-bold text-pure-white group-hover:text-electric-green">
                        {city.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-cool-gray">
                      {city.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
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
              Everything UK gym owners need to know about GymWyse.
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

      {/* ─── Pricing in GBP ─── */}
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
              Transparent Pricing in British Pounds
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              No hidden fees. No currency conversion. No long-term contracts.
              All pricing in GBP for UK customers. Cancel anytime.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-electric-green/50"
                    : "border-glass-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-block rounded-full bg-electric-green/10 px-3 py-1 text-xs font-medium text-electric-green">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-pure-white">
                  {plan.tier}
                </h3>
                <p className="mt-1 text-xs text-dim-gray">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="font-mono text-4xl font-bold text-electric-green">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm text-dim-gray">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-soft-white"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.tier === "Enterprise" ? "/demo" : "/pricing"}
                  className="mt-8 block"
                >
                  <Button
                    size="lg"
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.tier === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-dim-gray">
            All plans include BACS Direct Debit, GDPR compliance suite, and
            VAT-ready reporting. No setup fees. 14-day free trial on Starter
            and Growth plans. Visit our{" "}
            <Link
              href="/pricing"
              className="text-electric-green underline underline-offset-2 hover:brightness-110"
            >
              pricing page
            </Link>{" "}
            for a full feature comparison.
          </p>
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
              Ready to Upgrade Your UK Gym?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Join hundreds of UK gyms that have switched to GymWyse for native
              Direct Debit, GDPR compliance, and AI churn prediction — all in
              one platform, priced in GBP. Start your 14-day free trial today,
              or book a personalised demo to see how GymWyse fits your specific
              operation. Migration from your current provider is handled by our
              dedicated team — most gyms are live within 48 hours.
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
            <p className="mt-6 text-sm text-cool-gray">
              Switching from another provider?{" "}
              <Link
                href="/migration"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Learn about our free migration service
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
