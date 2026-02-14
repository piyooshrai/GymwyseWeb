"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingDown,
  DollarSign,
  TrendingUp,
  CreditCard,
  BarChart3,
  Smartphone,
  ChevronDown,
  CheckCircle,
  Calculator,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurredDashboardHero } from "@/components/visuals/blurred-dashboard-hero";
import Link from "next/link";
import type { VerticalPageData } from "@/lib/vertical-data";

const painIcons = [Calendar, Users, TrendingDown];

/* ── Feature visuals for index > 0 ─────────────────────── */

function SchedulingVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = [
    { time: "6:00 AM", classes: [true, true, false, true, true] },
    { time: "9:00 AM", classes: [true, false, true, true, false] },
    { time: "12:00 PM", classes: [false, true, true, false, true] },
    { time: "6:00 PM", classes: [true, true, true, true, true] },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <Calendar className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Class Schedule
        </span>
      </div>
      <div className="grid grid-cols-6 gap-1 text-center">
        <div />
        {days.map((d) => (
          <div key={d} className="text-[8px] text-dim-gray pb-1">
            {d}
          </div>
        ))}
        {slots.map((slot) => (
          <>
            <div
              key={slot.time}
              className="text-[7px] text-dim-gray flex items-center"
            >
              {slot.time}
            </div>
            {slot.classes.map((active, j) => (
              <motion.div
                key={`${slot.time}-${j}`}
                className={`h-5 rounded ${active ? "bg-electric-green/20 border border-electric-green/30" : "bg-[#0d1230] border border-glass-border"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: j * 0.03 }}
                viewport={{ once: true }}
              />
            ))}
          </>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[8px] text-dim-gray">18 classes this week</span>
        <span className="text-[8px] text-electric-green">85% capacity</span>
      </div>
    </div>
  );
}

function BillingVisual() {
  const payments = [
    { member: "Sarah K.", amount: "$129", status: "Paid", ok: true },
    { member: "James R.", amount: "$99", status: "Paid", ok: true },
    { member: "Lisa M.", amount: "$149", status: "Failed", ok: false },
    { member: "David W.", amount: "$99", status: "Paid", ok: true },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Recent Payments
          </span>
        </div>
        <span className="text-[9px] text-electric-green">$476 today</span>
      </div>
      <div className="space-y-1.5">
        {payments.map((p, i) => (
          <motion.div
            key={p.member}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] text-pure-white">{p.member}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-electric-green">
                {p.amount}
              </span>
              <span
                className={`text-[8px] px-1.5 py-0.5 rounded ${p.ok ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}
              >
                {p.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EngagementVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <Smartphone className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Member Engagement
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          {
            label: "App Opens",
            value: "1,247",
            icon: Smartphone,
            color: "#3B82F6",
          },
          {
            label: "Bookings",
            value: "312",
            icon: Calendar,
            color: "#00FF88",
          },
          {
            label: "Check-ins",
            value: "289",
            icon: Users,
            color: "#F59E0B",
          },
          {
            label: "Revenue",
            value: "$48K",
            icon: DollarSign,
            color: "#00FF88",
          },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-[#0d1230] rounded-lg p-2.5 border border-glass-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 mb-1">
              <m.icon className="w-2.5 h-2.5" style={{ color: m.color }} />
              <span className="text-[8px] text-dim-gray">{m.label}</span>
            </div>
            <div
              className="text-xs font-bold font-mono"
              style={{ color: m.color }}
            >
              {m.value}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[8px] pt-2 border-t border-glass-border">
        <span className="text-dim-gray">This week vs last</span>
        <span className="text-electric-green flex items-center gap-0.5">
          <TrendingUp className="w-2.5 h-2.5" />
          +18% engagement
        </span>
      </div>
    </div>
  );
}

function RevenueBreakdownVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [35, 48, 42, 60, 55, 75];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <BarChart3 className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Revenue Growth
          </span>
        </div>
        <span className="text-[9px] text-electric-green">+31% YoY</span>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full bg-electric-green/40 rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: `${heights[i]}%` }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            />
            <span className="text-[7px] text-dim-gray mt-1">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const featureVisuals = [
  SchedulingVisual,
  BillingVisual,
  EngagementVisual,
  RevenueBreakdownVisual,
];

/* ── Internal links data ─────────────────────── */

const internalLinks = [
  {
    href: "/reduce-gym-member-churn",
    label: "Reduce Gym Member Churn",
  },
  {
    href: "/increase-gym-revenue",
    label: "Increase Gym Revenue",
  },
  {
    href: "/gym-class-scheduling",
    label: "Gym Class Scheduling",
  },
  {
    href: "/gym-billing-software",
    label: "Gym Billing Software",
  },
  {
    href: "/gym-payment-processing",
    label: "Gym Payment Processing",
  },
  {
    href: "/personal-training-software",
    label: "Personal Training Software",
  },
];

export function VerticalPageTemplate({ data }: { data: VerticalPageData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
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
              Built for {data.verticalName}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              {data.headline}
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              {data.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for {data.verticalName}
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join studios like {data.exampleGyms}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges {data.verticalName} Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.painPoints.map((pp, i) => {
              const Icon = painIcons[i % painIcons.length];
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {pp.description}
                  </p>
                  <span className="text-xs text-electric-green font-medium">
                    {pp.stat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      {data.solutionOverview && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                  How GymWyse Solves This
                </h2>
                <p className="text-lg text-soft-white leading-relaxed">
                  {data.solutionOverview}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Mid-content CTA - Calculate Your ROI */}
      <section className="py-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-7 h-7 text-electric-green" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
              See What GymWyse Can Save You
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue
              you could gain by switching to GymWyse.
            </p>
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Features Built for {data.verticalName}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {data.features.map((feature, i) => {
              const Visual =
                featureVisuals[(i - 1) % featureVisuals.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-pure-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.details && feature.details.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {feature.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-soft-white">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!feature.details && <div className="mb-2" />}
                  {i === 0 && (
                    <BlurredDashboardHero
                      metrics={[
                        {
                          label: "Active Classes",
                          value: "23",
                          trend: "+4 this month",
                          trendDirection: "up",
                        },
                        { label: "Weekly Bookings", value: "312" },
                        {
                          label: "Attendance",
                          value: "85%",
                          trendDirection: "up",
                          trend: "+3%",
                        },
                      ]}
                      chartType={i % 2 === 0 ? "area" : "bar"}
                    />
                  )}
                  {i > 0 && <Visual />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Trends */}
      {data.trends && data.trends.length > 0 && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
                Industry Trends
              </h2>
              <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
                Stay ahead of the curve with insights shaping the{" "}
                {data.verticalName.toLowerCase()} industry.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.trends.map((trend, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                    <TrendingUp className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {trend.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {trend.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-pure-white mb-6">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold">
                    {data.testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {data.testimonial.author}
                    </div>
                    <div className="text-xs text-cool-gray">
                      {data.testimonial.role}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {data.testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {data.testimonial.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-glass-border/50 last:border-0"
                  >
                    <span className="text-sm text-cool-gray">{stat.label}</span>
                    <span className="text-lg font-bold text-electric-green font-mono">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Metrics */}
            {data.testimonial.beforeAfter &&
              data.testimonial.beforeAfter.length > 0 && (
                <div className="mt-10 pt-10 border-t border-glass-border/50">
                  <h4 className="text-lg font-semibold text-pure-white mb-6 text-center">
                    Before &amp; After GymWyse
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.testimonial.beforeAfter.map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-deep-space/60 rounded-lg p-5 border border-glass-border text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-xs text-dim-gray uppercase tracking-wider mb-3">
                          {item.metric}
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-sm text-alert-red font-mono line-through">
                            {item.before}
                          </span>
                          <ArrowRight className="w-4 h-4 text-electric-green" />
                          <span className="text-lg font-bold text-electric-green font-mono">
                            {item.after}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {data.comparison && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
                GymWyse vs {data.comparison.competitor}
              </h2>
              <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
                See how GymWyse stacks up against {data.comparison.competitor}{" "}
                for {data.verticalName.toLowerCase()}.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
                  <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray">
                    Feature
                  </div>
                  <div className="p-4 md:p-6 text-sm font-semibold text-electric-green text-center">
                    GymWyse
                  </div>
                  <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray text-center">
                    {data.comparison.competitor}
                  </div>
                </div>

                {/* Table Rows */}
                {data.comparison.rows.map((row, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-3 border-b border-glass-border/50 last:border-0"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-4 md:p-6 text-sm text-pure-white font-medium">
                      {row.feature}
                    </div>
                    <div className="p-4 md:p-6 text-sm text-electric-green text-center">
                      {row.gymwyse}
                    </div>
                    <div className="p-4 md:p-6 text-sm text-cool-gray text-center">
                      {row.competitor}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Switch Reasons */}
              {data.comparison.switchReasons.length > 0 && (
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-pure-white mb-6 text-center">
                    Why {data.verticalName} Switch to GymWyse
                  </h3>
                  <ul className="space-y-3 max-w-2xl mx-auto">
                    {data.comparison.switchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                        <span className="text-soft-white">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
                Common questions from {data.verticalName.toLowerCase()} about
                GymWyse.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {data.faq.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                    aria-expanded={openFaqIndex === i}
                  >
                    <span className="text-base font-semibold text-pure-white pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-electric-green" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-glass-border/50 pt-4">
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
      )}

      {/* Internal Links */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Explore More Solutions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Discover how GymWyse helps {data.verticalName.toLowerCase()}{" "}
              tackle every aspect of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {internalLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="glass-card p-6 flex items-center justify-between group hover:border-electric-green/30 transition-colors block"
                >
                  <span className="text-sm font-medium text-pure-white group-hover:text-electric-green transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-dim-gray group-hover:text-electric-green transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple Pricing for {data.verticalName}
          </h2>
          <p className="text-lg text-soft-white mb-12">
            $99/month. No setup fees. No contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Revenue Analytics + Member App
            </div>
            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-dim-gray mt-6">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
