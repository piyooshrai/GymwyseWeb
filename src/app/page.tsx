"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Building2,
  MapPin,
  ShoppingCart,
  QrCode,
  ChevronDown,
  Shield,
  CreditCard,
  CalendarDays,
  Flame,
  UserCheck,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/visuals/dashboard-preview";

/* ── Inline Mini Visuals (from bento-features) ──────────────── */

function RevenueCommandVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 space-y-3 border border-glass-border">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "MRR", value: "$562K", icon: DollarSign, color: "#00FF88" },
          { label: "Members", value: "3,769", icon: Users, color: "#3B82F6" },
          { label: "Growth", value: "+7.3%", icon: TrendingUp, color: "#00FF88" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-[#0d1230] rounded-lg p-2.5 border border-glass-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 mb-1">
              <m.icon className="w-3 h-3" style={{ color: m.color }} />
              <span className="text-[10px] text-dim-gray">{m.label}</span>
            </div>
            <div className="text-sm font-bold font-mono" style={{ color: m.color }}>
              {m.value}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#0d1230] rounded-lg p-3 border border-glass-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-dim-gray">Revenue Trend</span>
          <span className="text-[9px] text-electric-green">● Live</span>
        </div>
        <svg className="w-full" height="48" viewBox="0 0 200 48" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bentoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF88" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#00FF88" stopOpacity={0} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 38 L25 32 L50 35 L75 26 L100 28 L125 18 L150 20 L175 12 L200 8"
            fill="none"
            stroke="#00FF88"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          <path
            d="M0 38 L25 32 L50 35 L75 26 L100 28 L125 18 L150 20 L175 12 L200 8 L200 48 L0 48 Z"
            fill="url(#bentoGrad)"
          />
        </svg>
      </div>
    </div>
  );
}

function ChurnPreventionVisual() {
  const members = [
    { id: "#1247", risk: "High", reason: "14 days inactive", color: "text-alert-red", bg: "bg-alert-red/10 border-alert-red/20" },
    { id: "#3891", risk: "Medium", reason: "Missed 2 payments", color: "text-sunset-orange", bg: "bg-sunset-orange/10 border-sunset-orange/20" },
    { id: "#5623", risk: "High", reason: "No bookings 21d", color: "text-alert-red", bg: "bg-alert-red/10 border-alert-red/20" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 space-y-2 border border-glass-border">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-pure-white font-medium">Churn Risk Alerts</span>
        <span className="text-[9px] text-alert-red bg-alert-red/10 px-1.5 py-0.5 rounded">3 at risk</span>
      </div>
      {members.map((m, i) => (
        <motion.div
          key={m.id}
          className={`flex items-center justify-between p-2 rounded border ${m.bg}`}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className={`w-3 h-3 ${m.color}`} />
            <span className="text-[10px] text-pure-white">Member {m.id}</span>
          </div>
          <span className={`text-[9px] ${m.color}`}>{m.reason}</span>
        </motion.div>
      ))}
      <div className="text-[9px] text-electric-green text-center pt-1">
        Auto win-back campaigns enabled &rarr;
      </div>
    </div>
  );
}

function MultiLocationVisual() {
  const locs = [
    { name: "Downtown LA", mrr: "$142K", trend: "+8.2%", up: true },
    { name: "Santa Monica", mrr: "$98K", trend: "+5.1%", up: true },
    { name: "Beverly Hills", mrr: "$187K", trend: "+9.7%", up: true },
    { name: "Pasadena", mrr: "$76K", trend: "-1.2%", up: false },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border">
      <div className="flex items-center gap-1 mb-2">
        <Building2 className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">Portfolio Overview</span>
      </div>
      <div className="space-y-1.5">
        {locs.map((l, i) => (
          <motion.div
            key={l.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-2.5 h-2.5 text-dim-gray" />
              <span className="text-[10px] text-pure-white">{l.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-electric-green">{l.mrr}</span>
              <span className={`text-[9px] flex items-center gap-0.5 ${l.up ? "text-electric-green" : "text-alert-red"}`}>
                {l.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                {l.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[10px] text-dim-gray">Total Portfolio</span>
        <span className="text-xs font-bold font-mono text-electric-green">$503K MRR</span>
      </div>
    </div>
  );
}

function RetailPOSVisual() {
  const items = [
    { name: "Protein Shake", qty: 2, price: "$9.99" },
    { name: "GymWyse Tee", qty: 1, price: "$29.99" },
    { name: "BCAAs", qty: 1, price: "$14.99" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border">
      <div className="flex items-center gap-1 mb-2">
        <ShoppingCart className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">POS Terminal</span>
      </div>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className="flex items-center justify-between py-1 px-2 bg-[#0d1230] rounded text-[9px]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-pure-white">
              {item.name}
              <span className="text-dim-gray ml-1">&times;{item.qty}</span>
            </span>
            <span className="text-electric-green font-mono">{item.price}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border text-[10px]">
        <span className="text-dim-gray">Total</span>
        <span className="font-bold font-mono text-electric-green">$64.96</span>
      </div>
    </div>
  );
}

/* ── FAQ Data ────────────────────────────────────────────────── */

const faqItems = [
  {
    q: "What is GymWyse?",
    a: "GymWyse is a comprehensive gym management software platform built for independent gyms, boutique studios, and multi-location fitness operators. It combines membership management, class scheduling, billing, revenue analytics, churn prevention, and a built-in POS system into a single unified platform. Unlike legacy gym software that only handles the basics, GymWyse gives you real-time financial visibility and AI-powered member retention tools that actively help you grow revenue and reduce churn.",
  },
  {
    q: "How much does GymWyse cost?",
    a: "GymWyse pricing starts at $99 per month for a single-location gym with up to 250 active members. Multi-location operators receive volume discounts based on the number of locations and total member count. Every plan includes unlimited staff accounts, the full Revenue Command Center, churn prevention AI, class scheduling, billing automation, and our member-facing mobile app. There are no hidden fees, no per-transaction charges, and no long-term contracts. Most gyms see a positive ROI within the first 30 days of switching to GymWyse.",
  },
  {
    q: "Can I switch from Mindbody, Zen Planner, or Glofox?",
    a: "Absolutely. We have dedicated migration specialists who handle the entire transition for you at no extra cost. We import your member database, payment profiles, class schedules, contracts, and historical data from Mindbody, Zen Planner, Glofox, Pike13, Wodify, PushPress, and most other gym management platforms. The typical migration takes 5 to 10 business days, and we run both systems in parallel during the transition to ensure zero disruption to your members or billing cycles.",
  },
  {
    q: "Does GymWyse work for boutique studios and yoga studios?",
    a: "Yes. GymWyse is designed to scale from a single-room yoga studio to a 10-plus-location fitness empire. Boutique studios love our unlimited class types, waitlist management, PT booking system, and the AI-powered member engagement app. The platform adapts to your business model whether you run class-based memberships, punch cards, drop-in sessions, personal training packages, or hybrid models that combine multiple revenue streams.",
  },
  {
    q: "What payment methods does GymWyse support?",
    a: "GymWyse supports ACH bank transfers, credit and debit cards (Visa, Mastercard, Amex), Direct Debit via BACS for UK gyms, BPAY and Direct Debit for Australian gyms, and local payment methods for the Middle East market. Our automated failed payment recovery system retries failed payments with smart timing and sends personalized reminders to members, recovering an average of 40 percent of failed payments without any manual intervention from your staff.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every new gym gets a full 14-day free trial with access to all features, no credit card required. During your trial, our onboarding team will help you set up your gym, import your data, and configure your membership tiers and class schedules. If you decide GymWyse is right for your gym, you simply add your payment method and continue. If not, your trial ends automatically with no charges and no obligations.",
  },
  {
    q: "Is my data secure?",
    a: "Security is a top priority at GymWyse. We use AES-256 encryption for all data at rest, TLS 1.3 for data in transit, and SOC 2 Type II certified infrastructure. Member payment information is tokenized and never stored on our servers. We maintain a 98 percent uptime SLA with redundant data centers in the US, UK, and Australia. For gyms in the Middle East, we offer local data hosting in UAE data centers to comply with regional data residency requirements. We are fully GDPR compliant for our UK and European customers.",
  },
  {
    q: "How does the churn prevention AI work?",
    a: "GymWyse analyzes over 40 behavioral signals for each member, including visit frequency, class attendance patterns, payment history, app engagement, and check-in trends. When a member shows early warning signs of disengagement, the system flags them as at-risk and can automatically trigger personalized win-back campaigns via email, push notification, or SMS. Gym owners using our churn prevention system see an average reduction in monthly churn from 5.2 percent down to 2.3 percent, which translates to significant revenue savings over the course of a year.",
  },
];

/* ── Main Page Component ─────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-deep-space">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-green/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sapphire-blue/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block">
                <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                  The Operating System for Modern Gyms
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
                Gym Management Software That Proves Its ROI{" "}
                <span className="text-electric-green">18x Over</span>
              </h1>

              <p className="text-lg text-soft-white max-w-xl leading-relaxed">
                Track revenue in real-time, prevent churn before it happens, and recover $12K+ per
                month. GymWyse is the gym management software built for independent gyms and
                multi-location fitness operators in the US, UK, Australia, and Middle East. Stop
                guessing where your money goes and start proving your ROI with real-time financial
                data, automated failed payment recovery, and AI-powered churn prevention that keeps
                your members engaged and your revenue growing month over month.
              </p>

              <div className="text-sm text-cool-gray">
                Trusted by 200+ gyms in the US, UK, Australia, and Middle East
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl md:text-4xl text-electric-green font-mono font-bold">
                    1,708%
                  </div>
                  <div className="text-sm text-cool-gray">Average ROI</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-sapphire-blue font-mono font-bold">
                    18x
                  </div>
                  <div className="text-sm text-cool-gray">Payback Multiple</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-pure-white font-mono font-bold">
                    $12K+
                  </div>
                  <div className="text-sm text-cool-gray">Monthly Recovery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/roi-calculator">
                  <Button variant="primary" size="lg">
                    Calculate Your ROI
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="secondary" size="lg">
                    Book a Demo
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-sunset-orange text-sunset-orange" />
                  <span className="text-sm text-cool-gray">4.9/5 on G2</span>
                </div>
                <div className="h-4 w-px bg-glass-border hidden sm:block" />
                <div className="text-sm text-cool-gray">
                  Trusted by 200+ gyms across 12 countries
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: SOCIAL PROOF STRIP
          ═══════════════════════════════════════════════════════ */}
      <section className="py-12 border-y border-glass-border bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            className="text-center text-dim-gray text-xs font-medium tracking-wider uppercase mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trusted by independent gyms and multi-location operators
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { name: "Apex Performance Lab", loc: "Los Angeles, 4 locations" },
              { name: "The Foundry", loc: "London, 2 locations" },
              { name: "Southern Cross Performance", loc: "Sydney, 2 locations" },
              { name: "Pinnacle Performance", loc: "Dubai, 4 locations" },
              { name: "Flow State Yoga", loc: "Brooklyn" },
              { name: "IronClad Fitness", loc: "Houston, 5 locations" },
              { name: "Summit Fitness", loc: "Denver" },
              { name: "Desert Strength", loc: "Dubai" },
            ].map((gym, i) => (
              <motion.div
                key={gym.name}
                className="glass-card px-4 py-2.5 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-medium text-pure-white">{gym.name}</div>
                <div className="text-xs text-dim-gray">{gym.loc}</div>
              </motion.div>
            ))}
            <div className="glass-card px-4 py-2.5 text-center border-electric-green/30">
              <div className="text-sm font-medium text-electric-green">200+ gyms</div>
              <div className="text-xs text-dim-gray">across 12 countries</div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pure-white font-mono">200+</div>
              <div className="text-sm text-cool-gray mt-1">Active Gyms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pure-white font-mono">12</div>
              <div className="text-sm text-cool-gray mt-1">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pure-white font-mono">$45M+</div>
              <div className="text-sm text-cool-gray mt-1">Revenue Tracked</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pure-white font-mono">98%</div>
              <div className="text-sm text-cool-gray mt-1">Uptime SLA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: PROBLEM SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-alert-red text-sm font-medium tracking-wider uppercase">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              Legacy Gym Software Is Bleeding You Dry
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              You are paying $500 or more per month for outdated gym management software that
              cannot tell you which members are about to churn, which classes are losing money, or
              where your revenue is leaking. The worst part is that most gym owners do not even
              realize how much money they are leaving on the table because their current software
              lacks the real-time analytics and proactive alerts needed to make data-driven
              decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: DollarSign,
                title: "Hidden Revenue Leaks",
                desc: "Failed payments, no-shows, and underpriced services are silently costing you $5,000 or more every single month. Without automated failed payment recovery and real-time revenue tracking, these leaks go undetected. Most gym owners discover the damage only when they review their bank statements at the end of the quarter and realize they have been hemorrhaging cash for months.",
              },
              {
                icon: Users,
                title: "Invisible Churn",
                desc: "You cannot see which members are at risk of canceling until they actually walk out the door. By the time you notice a member has not visited in three weeks, they have already mentally checked out and started looking at competitors. Legacy gym software gives you zero predictive visibility into member disengagement, leaving you constantly in reactive mode instead of proactively retaining your most valuable members.",
              },
              {
                icon: TrendingDown,
                title: "No Real-Time Insights",
                desc: "Last month's reports do not help you make today's decisions. If you are still waiting for a monthly revenue summary to understand your business performance, you are always operating with outdated information. Modern gym management requires real-time dashboards that show you exactly what is happening across every location, every class, and every revenue stream right now, not 30 days ago.",
              },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                className="glass-card p-8 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <point.icon className="w-6 h-6 text-alert-red" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">{point.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: COMPLETE GYM OPERATIONS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              The Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              Complete Gym Operations Platform
            </h2>
            <p className="text-lg text-soft-white max-w-3xl mx-auto leading-relaxed">
              Before we get to revenue analytics and churn prevention, let&apos;s cover the basics.
              GymWyse handles everything you need to run your gym day-to-day. This is a gym
              management system that replaces your entire software stack with one integrated
              platform, so you never have to juggle multiple tools, spreadsheets, or workarounds
              again. Every feature below is included in every plan at no extra cost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: UserCheck,
                title: "Memberships & Check-Ins",
                color: "#00FF88",
                desc: "Digital contracts with e-signatures eliminate paper-based sign-ups and reduce admin overhead by hours each week. QR code check-in lets members tap and go in under two seconds. Create unlimited membership tiers, family accounts with linked billing, corporate group plans, and automatic renewals. Set up trial memberships, freeze policies, and cancellation workflows that match your gym's specific rules and processes.",
              },
              {
                icon: CalendarDays,
                title: "Class & PT Scheduling",
                color: "#3B82F6",
                desc: "Build unlimited class types with recurring schedules that auto-populate your calendar weeks in advance. Set capacity limits with automatic waitlist management that fills empty spots instantly when cancellations occur. Personal training booking with trainer availability, session packages, and revenue tracking per trainer. Members self-book classes and PT sessions via the mobile app, and automated reminders reduce no-shows by up to 35 percent across all your locations.",
              },
              {
                icon: CreditCard,
                title: "Billing & Payments",
                color: "#00FF88",
                desc: "Automated recurring billing handles monthly, quarterly, and annual memberships without any manual intervention. One-time payments for drop-ins, merchandise, and personal training sessions are processed instantly. Our failed payment recovery engine automatically retries declined cards with intelligent timing and personalized member outreach, recovering an average of 40 percent of failed payments. We support ACH, Direct Debit via BACS, BPAY, and all major credit cards. Configure late fees, payment plans, and pro-rated billing to match your business model.",
              },
              {
                icon: Shield,
                title: "Staff Management",
                color: "#3B82F6",
                desc: "Role-based permissions let you control exactly what each staff member can see and do within the platform. Front desk staff see check-ins and scheduling. Managers see revenue data and member details. Owners see the complete financial picture across all locations. Track instructor schedules, assign classes, and manage commission structures with automated payroll calculations. Set up multi-level approval workflows for refunds, membership freezes, and contract changes to prevent unauthorized actions.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="glass-card p-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.color }} />
                </div>
                <h3 className="text-xl font-semibold text-pure-white mb-3">{card.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-lg text-soft-white mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Now let&apos;s talk about what makes GymWyse different from every other gym management
            platform on the market...
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: FEATURE BENTO GRID
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              One Platform. Complete Control.
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
              Everything you need to run a profitable gym. From revenue analytics to member
              engagement, churn prevention to multi-location management. Built for independent
              gyms, scales to 10+ locations without skipping a beat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Revenue Command Center — large card */}
            <motion.div
              className="glass-card p-8 group relative overflow-hidden md:col-span-8 md:row-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  Revenue Command Center
                </h3>
                <p className="text-cool-gray leading-relaxed mb-6">
                  Real-time P&amp;L across all locations. Know exactly where your money comes from
                  and where it goes. Track MRR, ARR, average revenue per member, lifetime value,
                  and dozens more financial KPIs that your current gym management software cannot
                  even calculate. The Revenue Command Center gives you the financial visibility that
                  enterprise fitness chains have always had, now available to independent gym owners
                  at a fraction of the cost.
                </p>
                <div className="flex gap-6 mb-6">
                  {[
                    { label: "MRR Tracking", value: "Real-time" },
                    { label: "Churn Prediction", value: "AI-Powered" },
                    { label: "ROI Proof", value: "1,708%" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-semibold text-electric-green font-mono">
                        {stat.value}
                      </div>
                      <div className="text-xs text-dim-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 rounded-lg min-h-[120px] mb-4 overflow-hidden">
                  <RevenueCommandVisual />
                </div>
              </div>
            </motion.div>

            {/* Churn Prevention AI */}
            <motion.div
              className="glass-card p-8 group relative overflow-hidden md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <span className="inline-block self-start px-3 py-1 text-xs font-medium text-electric-green bg-electric-green/10 rounded-full mb-4">
                  2.3% avg churn rate
                </span>
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  Churn Prevention AI
                </h3>
                <p className="text-cool-gray leading-relaxed mb-6">
                  Identify at-risk members before they cancel. Automated win-back campaigns trigger
                  when members show disengagement signals. Reduce your churn rate from the industry
                  average of 5.2% down to 2.3%.
                </p>
                <div className="flex-1 rounded-lg min-h-[120px] mb-4 overflow-hidden">
                  <ChurnPreventionVisual />
                </div>
              </div>
            </motion.div>

            {/* Multi-Location Hub */}
            <motion.div
              className="glass-card p-8 group relative overflow-hidden md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <span className="inline-block self-start px-3 py-1 text-xs font-medium text-electric-green bg-electric-green/10 rounded-full mb-4">
                  Scales infinitely
                </span>
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  Multi-Location Hub
                </h3>
                <p className="text-cool-gray leading-relaxed mb-6">
                  Manage 1 gym or 100. One dashboard for your entire portfolio. Compare location
                  performance side by side, identify underperformers, and allocate resources where
                  they matter most.
                </p>
                <div className="flex-1 rounded-lg min-h-[120px] mb-4 overflow-hidden">
                  <MultiLocationVisual />
                </div>
              </div>
            </motion.div>

            {/* Retail & POS */}
            <motion.div
              className="glass-card p-8 group relative overflow-hidden md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-pure-white mb-3">Retail & POS</h3>
                <p className="text-cool-gray leading-relaxed mb-6">
                  Sell supplements, merchandise, and equipment directly from the platform. Integrated
                  point-of-sale with inventory tracking, barcode scanning, and automatic revenue
                  attribution to your financial dashboard.
                </p>
                <div className="flex-1 rounded-lg min-h-[120px] mb-4 overflow-hidden">
                  <RetailPOSVisual />
                </div>
              </div>
            </motion.div>

            {/* Engagement & Safety Add-Ons */}
            <motion.div
              className="glass-card p-8 group relative overflow-hidden md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <span className="inline-block self-start px-3 py-1 text-xs font-medium text-sapphire-blue bg-sapphire-blue/10 rounded-full mb-4">
                  Included in all plans
                </span>
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  Engagement & Safety Add-Ons
                </h3>
                <p className="text-cool-gray leading-relaxed mb-4">
                  The AI Avatar Member App features six personality-driven virtual coaches that boost
                  member engagement by 40 percent through personalized motivation, workout tracking,
                  and goal setting. Equipment QR Codes let members scan any machine to log usage,
                  view exercise tutorials, and report maintenance issues, while you track equipment
                  utilization and prevent liability with a complete digital audit trail.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border text-center">
                    <Flame className="w-6 h-6 text-electric-green mx-auto mb-1" />
                    <div className="text-[10px] text-pure-white font-medium">AI Avatar App</div>
                    <div className="text-[9px] text-dim-gray">6 coach personalities</div>
                  </div>
                  <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border text-center">
                    <QrCode className="w-6 h-6 text-sapphire-blue mx-auto mb-1" />
                    <div className="text-[10px] text-pure-white font-medium">Equipment QR</div>
                    <div className="text-[9px] text-dim-gray">Scan, track, maintain</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: ROI CALCULATOR TEASER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Prove Your ROI
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              See Exactly What You&apos;ll Save
            </h2>
            <p className="text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
              Most gyms save $500 to $2,000 per month by switching to GymWyse. The savings come
              from automated failed payment recovery, reduced member churn, lower software
              subscription costs, and significant labor savings from eliminating manual admin tasks
              that eat up your staff's time every single week.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg font-semibold text-pure-white mb-2">
              Average Savings for a 520-Member Gym
            </h3>
            <p className="text-sm text-dim-gray mb-6">
              Based on actual data from GymWyse customers with 400 to 600 active members
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Subscription savings vs. legacy software",
                  value: "$30/month",
                  color: "text-electric-green",
                },
                {
                  label: "Failed payment recovery (avg 40% recovery rate)",
                  value: "$1,267/month",
                  color: "text-electric-green",
                },
                {
                  label: "Churn reduction savings (2.9% fewer cancellations)",
                  value: "$522/month",
                  color: "text-electric-green",
                },
                {
                  label: "Labor savings from automation (10+ hrs/week)",
                  value: "$520/month",
                  color: "text-electric-green",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-glass-border"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm text-cool-gray">{item.label}</span>
                  <span className={`font-mono font-bold ${item.color}`}>{item.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-electric-green/30">
              <span className="text-lg font-semibold text-pure-white">
                Total Monthly Savings
              </span>
              <div className="text-right">
                <div className="text-2xl font-bold font-mono text-electric-green">
                  $2,339/month
                </div>
                <div className="text-sm text-dim-gray">= $28,068/year</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate Your Exact ROI
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: MID-PAGE CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric-green/5 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sapphire-blue/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
                Ready to see how GymWyse works?
              </h2>
              <p className="text-lg text-soft-white mb-8 max-w-xl mx-auto">
                Get a personalized walkthrough of the platform tailored to your gym&apos;s specific
                needs. Our product specialists will show you exactly how GymWyse can help you grow
                revenue, reduce churn, and save time on administrative tasks every single week.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="lg">
                    Book a 15-Minute Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button variant="secondary" size="lg">
                    Calculate Your Savings
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8: TESTIMONIALS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Real Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              What Gym Owners Say
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto">
              Hear from real gym owners who switched to GymWyse and saw measurable improvements in
              revenue, member retention, and operational efficiency within the first 90 days.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We switched from Mindbody to GymWyse six months ago and our MRR has grown 18.3 percent. The Revenue Command Center alone is worth the switch. We can finally see which classes are profitable and which ones are costing us money. The failed payment recovery system has recaptured over $7,600 in revenue that we would have lost completely with our old software. I wish we had made the switch two years ago.",
                author: "Jason Rivera",
                role: "Owner, Apex Performance Lab",
                location: "Los Angeles, CA — 4 locations",
                metric: "+18.3% MRR growth",
                prev: "Switched from Mindbody",
              },
              {
                quote:
                  "Managing two locations in London used to mean two separate logins, two sets of reports, and constant confusion about overall performance. GymWyse gave us a single dashboard with real-time data from both gyms. We spotted a churn issue at our East London location within the first week that would have cost us twenty-plus members. The Direct Debit integration via BACS works perfectly and our members love the self-booking app.",
                author: "Emma Thornton",
                role: "Co-Founder, The Foundry",
                location: "London, UK — 2 locations",
                metric: "20+ members saved from churn",
                prev: "Switched from Glofox",
              },
              {
                quote:
                  "As an Aussie gym owner, I was tired of software built for the American market. GymWyse actually supports BPAY and Australian Direct Debit, which none of our previous tools handled properly. The churn prevention AI flagged 14 at-risk members in our first month and the automated win-back campaigns brought 11 of them back. That is $4,400 in monthly revenue we would have lost. The onboarding team migrated everything from Zen Planner in under a week.",
                author: "Liam Patterson",
                role: "Director, Southern Cross Performance",
                location: "Sydney, Australia — 2 locations",
                metric: "11 of 14 at-risk members retained",
                prev: "Switched from Zen Planner",
              },
            ].map((t, i) => (
              <motion.div
                key={t.author}
                className="glass-card p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-sunset-orange text-sunset-orange"
                    />
                  ))}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-glass-border pt-4">
                  <div className="font-semibold text-pure-white">{t.author}</div>
                  <div className="text-sm text-dim-gray">{t.role}</div>
                  <div className="text-xs text-dim-gray mt-1">{t.location}</div>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="text-xs font-medium text-electric-green bg-electric-green/10 px-2 py-1 rounded">
                      {t.metric}
                    </span>
                    <span className="text-xs text-dim-gray">{t.prev}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 9: REGIONAL SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Global Reach, Local Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              Gym Management Software for the US, UK, Australia, and Middle East
            </h2>
            <p className="text-lg text-soft-white max-w-3xl mx-auto leading-relaxed">
              GymWyse is not a one-size-fits-all gym management platform. We have built
              region-specific features, payment integrations, compliance tools, and local support
              teams for every market we serve. Whether you run a CrossFit box in Texas, a boutique
              studio in Shoreditch, a functional fitness gym in Bondi, or a premium health club in
              Dubai Marina, GymWyse is built for your market.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                flag: "\u{1F1FA}\u{1F1F8}",
                region: "United States",
                desc: "Gym management software with ACH payments, US tax compliance, and 24/7 EST support — no more hacked-together tools. GymWyse integrates with QuickBooks and Xero for seamless accounting, handles state-by-state sales tax calculations automatically, and provides dedicated US-based customer support from people who actually understand the American fitness market.",
                cta: "/",
              },
              {
                flag: "\u{1F1EC}\u{1F1E7}",
                region: "United Kingdom",
                desc: "Gym software with Direct Debit via BACS, full GDPR compliance, and GBP pricing for independent UK gyms and studios. Our UK team understands the regulatory landscape, VAT handling, and the unique challenges of running a gym in the British market. Local data hosting ensures your member data never leaves UK soil.",
                cta: "/uk",
              },
              {
                flag: "\u{1F1E6}\u{1F1FA}",
                region: "Australia",
                desc: "Gym management system with BPAY and Direct Debit support, built for Aussie gyms that want to automate membership admin and eliminate manual billing headaches. AUD pricing with no currency conversion fees, AEST-hours support team, and integrations with Australian accounting platforms like MYOB and Xero AU.",
                cta: "/au",
              },
              {
                flag: "\u{1F1E6}\u{1F1EA}",
                region: "UAE & Middle East",
                desc: "Gym management platform with Arabic RTL support, AED pricing, and local data hosting for gyms in Dubai, Riyadh, Doha, and beyond. We understand the premium fitness market in the Gulf region, support multiple currencies across GCC countries, and provide Arabic-language member communications and booking interfaces.",
                cta: "/ae",
              },
            ].map((region, i) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href={region.cta}
                  className="glass-card p-6 block group hover:border-electric-green/30 transition-colors h-full"
                >
                  <span className="text-4xl mb-4 block">{region.flag}</span>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">{region.region}</h3>
                  <p className="text-sm text-cool-gray leading-relaxed">{region.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 10: FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-soft-white">
              Everything you need to know about GymWyse gym management software. If your question
              is not answered here, reach out to our team and we will get back to you within 24
              hours.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-pure-white font-medium pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-dim-gray flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-cool-gray leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 11: FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-t from-deep-space via-midnight to-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Ready to Prove Your ROI?
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto">
              Join 200+ gyms that switched to software that actually makes them money. GymWyse is
              the gym management platform that pays for itself in the first month and delivers
              compounding returns every month after that. Stop subsidizing bloated legacy software
              that gives you nothing but spreadsheets and start using a platform built to grow your
              revenue.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="xl">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>

            <p className="text-sm text-dim-gray">
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </p>

            <div className="pt-8 border-t border-glass-border">
              <p className="text-xs text-dim-gray mb-4 tracking-wider uppercase">
                Trusted by leading gyms worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-sm text-cool-gray">
                  Apex Performance Lab{" "}
                  <span className="text-dim-gray">(Los Angeles)</span>
                </div>
                <div className="h-4 w-px bg-glass-border hidden sm:block" />
                <div className="text-sm text-cool-gray">
                  The Foundry <span className="text-dim-gray">(London)</span>
                </div>
                <div className="h-4 w-px bg-glass-border hidden sm:block" />
                <div className="text-sm text-cool-gray">
                  Southern Cross Performance{" "}
                  <span className="text-dim-gray">(Sydney)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
