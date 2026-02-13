"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/bento-card";
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Building2,
  Users,
  DollarSign,
  Smartphone,
  QrCode,
  ShoppingCart,
  Dumbbell,
  Heart,
  Flame,
  MapPin,
} from "lucide-react";

/* ── Mini Visuals ───────────────────────────────────────── */

function RevenueCommandVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 space-y-3 border border-glass-border">
      {/* Mini metric row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "MRR", value: "$562K", icon: DollarSign, color: "#00FF88" },
          { label: "Members", value: "3,769", icon: Users, color: "#3B82F6" },
          {
            label: "Growth",
            value: "+7.3%",
            icon: TrendingUp,
            color: "#00FF88",
          },
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
            <div
              className="text-sm font-bold font-mono"
              style={{ color: m.color }}
            >
              {m.value}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Mini revenue chart */}
      <div className="bg-[#0d1230] rounded-lg p-3 border border-glass-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-dim-gray">Revenue Trend</span>
          <span className="text-[9px] text-electric-green">● Live</span>
        </div>
        <svg
          className="w-full"
          height="48"
          viewBox="0 0 200 48"
          preserveAspectRatio="none"
        >
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
    {
      id: "#1247",
      risk: "High",
      reason: "14 days inactive",
      color: "text-alert-red",
      bg: "bg-alert-red/10 border-alert-red/20",
    },
    {
      id: "#3891",
      risk: "Medium",
      reason: "Missed 2 payments",
      color: "text-sunset-orange",
      bg: "bg-sunset-orange/10 border-sunset-orange/20",
    },
    {
      id: "#5623",
      risk: "High",
      reason: "No bookings 21d",
      color: "text-alert-red",
      bg: "bg-alert-red/10 border-alert-red/20",
    },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 space-y-2 border border-glass-border">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-pure-white font-medium">
          Churn Risk Alerts
        </span>
        <span className="text-[9px] text-alert-red bg-alert-red/10 px-1.5 py-0.5 rounded">
          3 at risk
        </span>
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
            <span className="text-[10px] text-pure-white">
              Member {m.id}
            </span>
          </div>
          <span className={`text-[9px] ${m.color}`}>{m.reason}</span>
        </motion.div>
      ))}
      <div className="text-[9px] text-electric-green text-center pt-1">
        Auto win-back campaigns enabled →
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
        <span className="text-[10px] text-pure-white font-medium">
          Portfolio Overview
        </span>
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
              <span className="text-[10px] font-mono text-electric-green">
                {l.mrr}
              </span>
              <span
                className={`text-[9px] flex items-center gap-0.5 ${l.up ? "text-electric-green" : "text-alert-red"}`}
              >
                {l.up ? (
                  <TrendingUp className="w-2.5 h-2.5" />
                ) : (
                  <TrendingDown className="w-2.5 h-2.5" />
                )}
                {l.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[10px] text-dim-gray">Total Portfolio</span>
        <span className="text-xs font-bold font-mono text-electric-green">
          $503K MRR
        </span>
      </div>
    </div>
  );
}

function MemberAppVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border flex items-center justify-center">
      <motion.div
        className="w-[120px] bg-[#0d1230] rounded-xl border border-glass-border overflow-hidden"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Phone status bar */}
        <div className="h-4 bg-[#080b1e] flex items-center justify-center">
          <div className="w-8 h-1 bg-dim-gray/30 rounded-full" />
        </div>
        {/* App content */}
        <div className="p-2 space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-electric-green/20 flex items-center justify-center">
              <Flame className="w-3 h-3 text-electric-green" />
            </div>
            <div>
              <div className="text-[8px] text-pure-white font-medium">
                Coach Blaze
              </div>
              <div className="text-[7px] text-dim-gray">AI Motivator</div>
            </div>
          </div>
          <div className="bg-electric-green/10 rounded p-1.5">
            <div className="text-[7px] text-electric-green">
              &ldquo;Great streak! 12 days in a row 🔥&rdquo;
            </div>
          </div>
          <div className="flex gap-1">
            {[Dumbbell, Heart, Smartphone].map((Icon, i) => (
              <div
                key={i}
                className="flex-1 bg-[#080b1e] rounded p-1.5 flex items-center justify-center"
              >
                <Icon className="w-3 h-3 text-dim-gray" />
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[7px]">
              <span className="text-dim-gray">Weekly Goal</span>
              <span className="text-electric-green">80%</span>
            </div>
            <div className="h-1 bg-[#080b1e] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric-green rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EquipmentQRVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-3 border border-glass-border">
      <div className="flex items-center gap-3">
        <motion.div
          className="w-16 h-16 bg-[#0d1230] rounded-lg border border-glass-border flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <QrCode className="w-8 h-8 text-electric-green" />
        </motion.div>
        <div className="flex-1 space-y-1.5">
          <div className="text-[10px] text-pure-white font-medium">
            Leg Press #14
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-green" />
            <span className="text-[9px] text-electric-green">
              Operational
            </span>
          </div>
          <div className="text-[8px] text-dim-gray">
            Last serviced: 3 days ago
          </div>
          <div className="text-[8px] text-dim-gray">
            Today&apos;s usage: 47 scans
          </div>
        </div>
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
        <span className="text-[10px] text-pure-white font-medium">
          POS Terminal
        </span>
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
              <span className="text-dim-gray ml-1">×{item.qty}</span>
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

/* ── Section ─────────────────────────────────────────────── */

export function BentoFeaturesSection() {
  return (
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
            Everything you need to run a profitable gym. From revenue analytics
            to member engagement. Built for independent gyms, scales to 10+
            locations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          <BentoCard
            className="md:col-span-8 md:row-span-2"
            title="Revenue Command Center"
            description="Real-time P&L across all locations. Know exactly where your money comes from and where it goes."
            stats={[
              { label: "MRR Tracking", value: "Real-time" },
              { label: "Churn Prediction", value: "AI-Powered" },
              { label: "ROI Proof", value: "1,708%" },
            ]}
            cta="Explore Revenue Analytics"
            visual={<RevenueCommandVisual />}
          />

          <BentoCard
            className="md:col-span-4"
            title="Churn Prevention AI"
            description="Identify at-risk members before they cancel. Win them back automatically."
            badge="2.3% avg churn rate"
            visual={<ChurnPreventionVisual />}
          />

          <BentoCard
            className="md:col-span-4"
            title="Multi-Location Hub"
            description="Manage 1 gym or 100. One dashboard for your entire portfolio."
            badge="Scales infinitely"
            visual={<MultiLocationVisual />}
          />

          <BentoCard
            className="md:col-span-4"
            title="AI Avatar Member App"
            description="6 personality-driven coaches. Boost engagement by 40%."
            visual={<MemberAppVisual />}
          />

          <BentoCard
            className="md:col-span-4"
            title="Equipment QR Codes"
            description="Members scan. You track. Prevent liability."
            visual={<EquipmentQRVisual />}
          />

          <BentoCard
            className="md:col-span-4"
            title="Retail & POS"
            description="Sell supplements, merch, equipment. All in one system."
            visual={<RetailPOSVisual />}
          />
        </div>
      </div>
    </section>
  );
}
