"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, Users, TrendingUp, AlertTriangle, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProblemSolution {
  problem: string;
  solution: string;
  stats: { label: string; value: string }[];
}

interface FeatureGroup {
  title: string;
  features: string[];
}

interface SolutionsPageTemplateProps {
  headline: string;
  tagline: string;
  problemSolutions: ProblemSolution[];
  featureGroups: FeatureGroup[];
  pricing: {
    price: string;
    description: string;
    addOns: string;
  };
}

/* ── Contextual visuals per problem-solution index ─────── */

function RevenueVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 space-y-3 border border-glass-border">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "MRR", value: "$562K", icon: DollarSign, color: "#00FF88" },
          { label: "Growth", value: "+7.3%", icon: TrendingUp, color: "#00FF88" },
        ].map((m) => (
          <div key={m.label} className="bg-[#0d1230] rounded-lg p-3 border border-glass-border">
            <div className="flex items-center gap-1 mb-1">
              <m.icon className="w-3 h-3" style={{ color: m.color }} />
              <span className="text-[10px] text-dim-gray">{m.label}</span>
            </div>
            <div className="text-sm font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#0d1230] rounded-lg p-3 border border-glass-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-dim-gray">Revenue Trend</span>
          <span className="text-[9px] text-electric-green">● Live</span>
        </div>
        <svg className="w-full" height="56" viewBox="0 0 200 56" preserveAspectRatio="none">
          <defs>
            <linearGradient id="solGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF88" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#00FF88" stopOpacity={0} />
            </linearGradient>
          </defs>
          <motion.path d="M0 44 L28 36 L56 40 L84 30 L112 32 L140 20 L168 24 L200 12" fill="none" stroke="#00FF88" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
          <path d="M0 44 L28 36 L56 40 L84 30 L112 32 L140 20 L168 24 L200 12 L200 56 L0 56 Z" fill="url(#solGrad1)" />
        </svg>
      </div>
    </div>
  );
}

function ChurnVisual() {
  const alerts = [
    { id: "#1247", reason: "14 days inactive", color: "text-alert-red", bg: "bg-alert-red/10 border-alert-red/20" },
    { id: "#3891", reason: "Missed 2 payments", color: "text-sunset-orange", bg: "bg-sunset-orange/10 border-sunset-orange/20" },
    { id: "#5623", reason: "No bookings 21d", color: "text-alert-red", bg: "bg-alert-red/10 border-alert-red/20" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 space-y-2 border border-glass-border">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-pure-white font-medium">Churn Risk Alerts</span>
        <span className="text-[9px] text-alert-red bg-alert-red/10 px-1.5 py-0.5 rounded">3 at risk</span>
      </div>
      {alerts.map((a, i) => (
        <motion.div key={a.id} className={`flex items-center justify-between p-2 rounded border ${a.bg}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2">
            <AlertTriangle className={`w-3 h-3 ${a.color}`} />
            <span className="text-[10px] text-pure-white">Member {a.id}</span>
          </div>
          <span className={`text-[9px] ${a.color}`}>{a.reason}</span>
        </motion.div>
      ))}
      <div className="text-[9px] text-electric-green text-center pt-1">Auto win-back campaigns →</div>
    </div>
  );
}

function OperationsVisual() {
  const items = [
    { label: "Equipment Uptime", value: "99.2%", icon: Shield, color: "#00FF88" },
    { label: "Active Members", value: "3,769", icon: Users, color: "#3B82F6" },
    { label: "Monthly Reports", value: "12", icon: BarChart3, color: "#F59E0B" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 space-y-2 border border-glass-border">
      <span className="text-[10px] text-pure-white font-medium">Operations Dashboard</span>
      {items.map((item, i) => (
        <motion.div key={item.label} className="flex items-center justify-between p-2.5 bg-[#0d1230] rounded-lg border border-glass-border" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
              <item.icon className="w-3 h-3" style={{ color: item.color }} />
            </div>
            <span className="text-[10px] text-cool-gray">{item.label}</span>
          </div>
          <span className="text-xs font-bold font-mono text-pure-white">{item.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function GrowthVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [40, 52, 48, 65, 58, 80];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-pure-white font-medium">Member Growth</span>
        <span className="text-[9px] text-electric-green">+24% YoY</span>
      </div>
      <div className="flex items-end gap-1.5 h-20">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center">
            <motion.div className="w-full bg-electric-green/40 rounded-t" initial={{ height: 0 }} whileInView={{ height: `${heights[i]}%` }} transition={{ delay: i * 0.08, duration: 0.4 }} viewport={{ once: true }} />
            <span className="text-[7px] text-dim-gray mt-1">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const solutionVisuals = [RevenueVisual, ChurnVisual, OperationsVisual, GrowthVisual];

export function SolutionsPageTemplate({
  headline,
  tagline,
  problemSolutions,
  featureGroups,
  pricing,
}: SolutionsPageTemplateProps) {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
            Built for You
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            {headline}
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">{tagline}</p>
        </motion.div>

        {/* Problem-Solution blocks */}
        <div className="max-w-5xl mx-auto space-y-16 mb-24">
          {problemSolutions.map((ps, i) => {
            const Visual = solutionVisuals[i % solutionVisuals.length];
            return (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-sm font-medium text-alert-red uppercase tracking-wider mb-2">
                    The Problem
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white mb-4">
                    {ps.problem}
                  </h3>
                  <div className="text-sm font-medium text-electric-green uppercase tracking-wider mb-2">
                    The Solution
                  </div>
                  <p className="text-base text-cool-gray leading-relaxed mb-6">
                    {ps.solution}
                  </p>
                  <div className="flex gap-6">
                    {ps.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="text-xl font-bold text-electric-green font-mono">
                          {stat.value}
                        </div>
                        <div className="text-xs text-dim-gray">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`glass-card p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature groups */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featureGroups.map((group, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                      <span className="text-sm text-cool-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-soft-white mb-12">{pricing.description}</p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4">
              {pricing.price}
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
          <p className="text-base text-cool-gray">{pricing.addOns}</p>
        </div>
      </div>
    </section>
  );
}
