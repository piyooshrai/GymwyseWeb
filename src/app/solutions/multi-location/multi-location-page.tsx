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
  Building2,
  MapPin,
  Shield,
  Globe,
  Layers,
  HelpCircle,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problemStats = [
  {
    value: "4.2 hrs/wk",
    label: "Time wasted on cross-location reporting",
  },
  {
    value: "6-8 weeks",
    label: "Delay in spotting underperforming sites",
  },
  {
    value: "23%",
    label: "Revenue variance between best and worst locations",
  },
];

const solutionMetrics = [
  { value: "Real-time", label: "Cross-location visibility" },
  { value: "1 login", label: "Unified dashboard" },
  { value: "< 24 hrs", label: "Anomaly detection" },
  { value: "$99/mo", label: "Per location" },
];

const features = [
  {
    icon: Layers,
    title: "Unified Dashboard",
    bullets: [
      "Portfolio-level MRR, churn, and utilization",
      "Per-location breakdowns with drill-down",
      "Side-by-side performance comparison",
      "Trend analysis across time periods",
      "Export consolidated reports for investors or partners",
    ],
  },
  {
    icon: BarChart3,
    title: "Cross-Location Intelligence",
    bullets: [
      "AI anomaly detection flags when a location deviates from its baseline",
      "Revenue-per-member comparison across sites",
      "Identify which locations are outperforming and why",
      "Replicate winning retention and marketing strategies network-wide",
    ],
  },
  {
    icon: Users,
    title: "Centralized Member Management",
    bullets: [
      "Members can book and check in at any location",
      "Unified member profiles across sites",
      "Cross-location membership tiers and pricing",
      "Transfer members between locations seamlessly",
    ],
  },
  {
    icon: Building2,
    title: "Network Staff Scheduling",
    bullets: [
      "Schedule staff across locations from one view",
      "Float trainers between sites based on demand",
      "Centralized payroll tracking with per-location breakdowns",
      "Role-based permissions so site managers see their location, regional managers see everything",
    ],
  },
];

const caseStudyResults = [
  { value: "$4,200/mo", label: "Recovered failed payments across sites" },
  { value: "6 hrs/wk", label: "Saved on cross-location reporting" },
  { value: "18%", label: "Revenue increase across network" },
  { value: "2.1%", label: "Cross-location churn variance (from 6.8%)" },
];

const comparisonRows = [
  {
    feature: "Per-Location Price",
    gymwyse: "$99/mo",
    competitor: "$200-400/mo",
  },
  {
    feature: "Unified Dashboard",
    gymwyse: true,
    competitor: "Separate logins",
  },
  {
    feature: "Cross-Location Booking",
    gymwyse: "Included",
    competitor: "Limited",
  },
  {
    feature: "AI Anomaly Detection",
    gymwyse: "Included",
    competitor: "Not available",
  },
  {
    feature: "Consolidated Reporting",
    gymwyse: "Real-time",
    competitor: "Manual compilation",
  },
  {
    feature: "Staff Cross-Scheduling",
    gymwyse: "Included",
    competitor: "Not available",
  },
  {
    feature: "Setup Fee",
    gymwyse: "$0",
    competitor: "$2,000-5,000",
  },
  {
    feature: "Contract",
    gymwyse: "Monthly",
    competitor: "24 months",
  },
];

const testimonials = [
  {
    quote:
      "We went from 5 separate Mindbody accounts to one GymWyse dashboard. My regional manager went from spending every Monday morning on spreadsheets to actually visiting locations. That\u2019s the real ROI.",
    author: "Lisa Fernandez",
    role: "COO, Peak Performance Network",
    location: "Florida",
  },
  {
    quote:
      "The cross-location anomaly detection caught a churn spike at our Westside location before it showed up in monthly numbers. We intervened, fixed the issue, and saved an estimated 30 members. That\u2019s $45,000 in annual revenue.",
    author: "Michael Barnes",
    role: "Founder, Atlas Gyms",
    location: "Colorado",
  },
];

const faqs = [
  {
    question: "How does per-location pricing work?",
    answer:
      "$99/month per location. All features included at every site. No per-member fees, no add-on charges. Volume discounts available for 10+ locations.",
  },
  {
    question: "Can members book across locations?",
    answer:
      "Yes. Members have a single profile that works across all your locations. They can book classes, check in, and manage their membership at any site.",
  },
  {
    question: "How does the unified dashboard work?",
    answer:
      "Single login shows aggregate performance across all locations. Drill down into any site for detailed metrics. Compare locations side-by-side. Export consolidated or per-location reports.",
  },
  {
    question: "What if different locations have different pricing?",
    answer:
      "Fully supported. Each location can have its own membership tiers, class pricing, and promotional offers while still rolling up to unified financial reporting.",
  },
  {
    question: "Can site managers only see their location?",
    answer:
      "Yes. Role-based permissions let you control visibility. Site managers see their location, regional managers see their region, and owners see everything.",
  },
  {
    question: "How does cross-location staff scheduling work?",
    answer:
      "Schedule all staff from one view. Assign trainers to float between sites. Track hours per location for payroll. Set availability preferences per staff member.",
  },
  {
    question: "How long does it take to migrate multiple locations?",
    answer:
      "We migrate all locations simultaneously. Average timeline is 3-5 days for a 5-location network. Zero downtime \u2014 we run parallel during transition.",
  },
  {
    question: "Do you integrate with our existing payroll and accounting?",
    answer:
      "We export payroll data in formats compatible with QuickBooks, Xero, Gusto, and ADP. Consolidated and per-location breakdowns available.",
  },
];

export function MultiLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Multi-Location Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              One Dashboard. Every Location. Complete Control.
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              Managing multiple gym locations shouldn&apos;t mean logging into
              separate systems, reconciling spreadsheets, or flying blind on
              which sites are profitable. GymWyse gives you a unified command
              center that shows real-time performance across every location
              &mdash; revenue, churn, utilization, and staff &mdash; in a single
              view.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              Multi-Location Chaos Is the Norm
            </h2>
            <p className="text-soft-white leading-relaxed">
              Most multi-location gym operators are running each site as a
              separate business because their software forces it. Separate
              logins per location. Different reporting formats. No way to
              compare performance across sites in real time. Regional managers
              waste hours compiling reports that are already outdated by the time
              they&apos;re finished. When a location starts underperforming, you
              find out from the P&amp;L statement &mdash; weeks or months after
              the warning signs appeared. Staff scheduling across locations is a
              nightmare of group chats and shared spreadsheets. And if one
              location has cracked a retention strategy that works, there&apos;s
              no systematic way to replicate it across the network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {problemStats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold font-mono text-alert-red mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-cool-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-24 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              A Unified Command Center for Your Gym Network
            </h2>
            <p className="text-soft-white leading-relaxed">
              Real-time cross-location dashboard. Per-site and aggregate MRR,
              churn rates, utilization, and revenue per member. AI anomaly
              detection flags underperforming locations before the monthly
              P&amp;L reveals the damage. Centralized member management with
              cross-location booking. Staff scheduling across sites.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {solutionMetrics.map((metric, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold font-mono text-electric-green mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-cool-gray">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Everything You Need to Run a Network
            </h2>
            <p className="text-soft-white leading-relaxed">
              Four core capabilities that turn disconnected locations into a
              unified, data-driven gym network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-4">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-cool-gray leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Case Study
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3">
                IronClad Fitness, 5 Locations, Texas
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-sunset-orange uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-soft-white leading-relaxed">
                    Running 5 locations across Houston and Dallas on Mindbody
                    with separate logins per site. Regional manager spent 6+
                    hours weekly compiling performance reports. One location was
                    silently losing $4,200/month in failed payments that went
                    unnoticed for 3 months because reporting was
                    location-siloed.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-electric-green uppercase tracking-wider mb-2">
                    Solution
                  </h3>
                  <p className="text-soft-white leading-relaxed">
                    Migrated all 5 locations to GymWyse in a single weekend.
                    Unified dashboard immediately revealed the payment recovery
                    gap. AI anomaly detection now flags performance deviations
                    within 24 hours.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudyResults.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-2xl font-bold font-mono text-electric-green mb-1">
                      {result.value}
                    </p>
                    <p className="text-xs text-cool-gray">{result.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-glass-border pt-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-electric-green/30 shrink-0 mt-1" />
                  <div>
                    <p className="text-soft-white leading-relaxed italic mb-4">
                      &ldquo;We had no idea our Dallas location was hemorrhaging
                      $4,200 a month in failed payments. With separate Mindbody
                      logins per site, it just fell through the cracks. GymWyse
                      caught it on day one. The unified dashboard alone
                      justified the switch.&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-pure-white">
                      David Torres
                    </p>
                    <p className="text-xs text-dim-gray">
                      CEO, IronClad Fitness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              GymWyse vs Mindbody/ABC for Multi-Location
            </h2>
            <p className="text-soft-white leading-relaxed">
              See how GymWyse stacks up against the platforms most
              multi-location operators are currently using.
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-sm font-semibold text-pure-white p-4">
                      Feature
                    </th>
                    <th className="text-center text-sm font-semibold text-electric-green p-4">
                      GymWyse
                    </th>
                    <th className="text-center text-sm font-semibold text-dim-gray p-4">
                      Mindbody / ABC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/5 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <td className="text-sm text-cool-gray p-4">
                        {row.feature}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.gymwyse === "boolean" ? (
                          row.gymwyse ? (
                            <Check className="w-5 h-5 text-electric-green mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-alert-red mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium text-electric-green">
                            {row.gymwyse}
                          </span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.competitor === "boolean" ? (
                          row.competitor ? (
                            <Check className="w-5 h-5 text-cool-gray mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-alert-red mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-dim-gray">
                            {row.competitor}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              What Multi-Location Operators Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote className="w-8 h-8 text-electric-green/30 mb-4" />
                <p className="text-soft-white leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-dim-gray">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-10 h-10 text-electric-green mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-soft-white leading-relaxed">
              Common questions about managing multiple gym locations with
              GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-pure-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      openFaq === i
                        ? "rotate-180 text-electric-green"
                        : "text-dim-gray"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-cool-gray leading-relaxed">
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
      <section className="py-24 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Stop Managing Locations. Start Managing a Network.
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Unified visibility across every site. Real-time performance data.
              AI-powered anomaly detection. One dashboard that gives you
              complete control over your entire gym network.
            </p>

            <div className="glass-card p-8 md:p-10 max-w-xl mx-auto mt-8">
              <p className="text-4xl md:text-5xl font-bold font-mono text-electric-green mb-2">
                $99/mo
              </p>
              <p className="text-sm text-dim-gray mb-1">per location</p>
              <p className="text-sm text-cool-gray mb-8">
                All features included. No contracts. Volume discounts for 10+.
              </p>
              <Link href="/demo">
                <Button variant="primary" size="lg" className="w-full">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <p className="text-xs text-dim-gray mt-4">
                No credit card required &bull; Full access &bull; Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
