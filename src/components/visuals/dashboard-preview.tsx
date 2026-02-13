"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  MapPin,
  Users,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  CreditCard,
  RefreshCw,
  Dumbbell,
  CalendarDays,
  Settings,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";

function Sparkline({
  trend,
  color,
}: {
  trend: "up" | "down";
  color: string;
}) {
  const upPath = "M0 18 L6 14 L12 16 L18 10 L24 12 L30 6 L36 8 L42 2";
  const downPath = "M0 4 L6 8 L12 6 L18 12 L24 10 L30 16 L36 14 L42 18";
  return (
    <svg width="42" height="20" viewBox="0 0 42 20" fill="none">
      <motion.path
        d={trend === "up" ? upPath : downPath}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
}

const sidebarItems = [
  { icon: LayoutDashboard, label: "Command Center", active: true },
  { icon: MapPin, label: "Locations" },
  { icon: Users, label: "Members" },
  { icon: DollarSign, label: "Revenue" },
  { icon: CreditCard, label: "Billing" },
  { icon: ShoppingBag, label: "POS Terminal" },
  { icon: Dumbbell, label: "Trainers" },
  { icon: CalendarDays, label: "Classes" },
  { icon: Settings, label: "Settings" },
];

const metricCards = [
  {
    label: "Total MRR",
    value: "$562,500",
    trend: "+7.3%",
    trendDir: "up" as const,
    icon: DollarSign,
    color: "#00FF88",
  },
  {
    label: "Active Members",
    value: "3,769",
    trend: "+8.4%",
    trendDir: "up" as const,
    icon: Users,
    color: "#3B82F6",
  },
  {
    label: "Failed Payments",
    value: "23",
    trend: "Needs attention",
    trendDir: "down" as const,
    icon: AlertTriangle,
    color: "#F59E0B",
  },
  {
    label: "Recovered Revenue",
    value: "$1,285",
    trend: "+24.1%",
    trendDir: "up" as const,
    icon: RefreshCw,
    color: "#00FF88",
  },
];

const locations = [
  {
    name: "Downtown LA",
    mrr: "$187,500",
    trend: "+8.2%",
    trendDir: "up" as const,
    members: 1243,
  },
  {
    name: "Santa Monica",
    mrr: "$142,800",
    trend: "+5.1%",
    trendDir: "up" as const,
    members: 987,
  },
  {
    name: "Beverly Hills",
    mrr: "$134,200",
    trend: "+9.7%",
    trendDir: "up" as const,
    members: 876,
  },
  {
    name: "Pasadena",
    mrr: "$98,000",
    trend: "-1.2%",
    trendDir: "down" as const,
    members: 663,
  },
];

export function DashboardPreview() {
  return (
    <div className="relative select-none pointer-events-none">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-electric-green/5 rounded-3xl blur-2xl" />

      <div className="relative rounded-xl overflow-hidden border border-glass-border shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="bg-[#080b1e] px-3 py-2 flex items-center gap-2 border-b border-glass-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-alert-red/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-sunset-orange/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-electric-green/70" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block bg-deep-space/80 rounded px-3 py-0.5 text-[9px] text-dim-gray font-mono">
              app.gymwyse.com/command-center
            </div>
          </div>
        </div>

        <div className="flex bg-[#0A0E27]">
          {/* Sidebar */}
          <div className="w-[140px] bg-[#080b1e] border-r border-glass-border py-3 flex-shrink-0 hidden sm:block">
            {/* Logo */}
            <div className="flex items-center gap-1.5 px-3 mb-4">
              <div className="w-5 h-5 bg-electric-green rounded flex items-center justify-center">
                <span className="text-deep-space font-bold text-[7px]">
                  GW
                </span>
              </div>
              <span className="text-[10px] font-semibold text-pure-white">
                GymWyse
              </span>
            </div>
            <div className="space-y-0.5 px-1.5">
              {sidebarItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-[9px] ${
                    item.active
                      ? "bg-electric-green/10 text-electric-green"
                      : "text-dim-gray"
                  }`}
                >
                  <item.icon className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 p-3 sm:p-4 space-y-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-[11px] font-semibold text-pure-white">
                Revenue Command Center
              </div>
              <div className="text-[8px] text-dim-gray">
                Real-time insights across all your locations
              </div>
            </motion.div>

            {/* Alert Banners */}
            <div className="space-y-1.5">
              <motion.div
                className="flex items-center gap-2 bg-alert-red/10 border border-alert-red/20 rounded px-2 py-1.5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <AlertTriangle className="w-2.5 h-2.5 text-alert-red flex-shrink-0" />
                <span className="text-[8px] text-alert-red truncate">
                  High Payment Failure Rate &bull; Downtown LA
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-sunset-orange/10 border border-sunset-orange/20 rounded px-2 py-1.5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <TrendingDown className="w-2.5 h-2.5 text-sunset-orange flex-shrink-0" />
                <span className="text-[8px] text-sunset-orange truncate">
                  Revenue Drop Alert &bull; Santa Monica
                </span>
              </motion.div>
            </div>

            {/* Metric Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {metricCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="bg-[#0d1230] border border-glass-border rounded-lg p-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <card.icon
                        className="w-2.5 h-2.5"
                        style={{ color: card.color }}
                      />
                    </div>
                    <span className="text-[7px] text-dim-gray truncate">
                      {card.label}
                    </span>
                  </div>
                  <div className="text-[12px] font-bold text-pure-white font-mono leading-tight">
                    {card.value}
                  </div>
                  <div
                    className={`text-[7px] mt-0.5 flex items-center gap-0.5 ${
                      card.trendDir === "up"
                        ? "text-electric-green"
                        : "text-sunset-orange"
                    }`}
                  >
                    {card.trendDir === "up" ? (
                      <TrendingUp className="w-2 h-2" />
                    ) : (
                      <AlertTriangle className="w-2 h-2" />
                    )}
                    {card.trend}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Locations Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-dim-gray" />
                  <span className="text-[9px] font-medium text-pure-white">
                    Locations
                  </span>
                </div>
                <span className="text-[7px] text-dim-gray">
                  4 active locations
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {locations.map((loc, i) => (
                  <motion.div
                    key={loc.name}
                    className="bg-[#0d1230] border border-glass-border rounded-lg p-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[8px] font-medium text-pure-white truncate">
                        {loc.name}
                      </span>
                      <span
                        className={`text-[7px] ${
                          loc.trendDir === "up"
                            ? "text-electric-green"
                            : "text-alert-red"
                        }`}
                      >
                        {loc.trend}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-pure-white font-mono">
                          {loc.mrr}
                        </div>
                        <div className="text-[6px] text-dim-gray">MRR</div>
                      </div>
                      <Sparkline
                        trend={loc.trendDir}
                        color={
                          loc.trendDir === "up" ? "#00FF88" : "#FF4444"
                        }
                      />
                    </div>
                    <div className="flex items-center gap-1 mt-1 pt-1 border-t border-glass-border">
                      <Users className="w-2 h-2 text-dim-gray" />
                      <span className="text-[7px] text-dim-gray">
                        {loc.members.toLocaleString()} active
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Revenue Chart Area */}
            <motion.div
              className="bg-[#0d1230] border border-glass-border rounded-lg p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-2.5 h-2.5 text-dim-gray" />
                  <span className="text-[9px] font-medium text-pure-white">
                    Revenue Trend
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[7px] text-electric-green">
                    ● MRR
                  </span>
                  <span className="text-[7px] text-sapphire-blue">
                    ● Target
                  </span>
                </div>
              </div>
              <svg
                className="w-full"
                height="60"
                viewBox="0 0 300 60"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="heroChartGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#00FF88"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="100%"
                      stopColor="#00FF88"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                {/* Target line */}
                <motion.path
                  d="M0 38 L50 35 L100 32 L150 28 L200 24 L250 20 L300 16"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity={0.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.8 }}
                />
                {/* Actual revenue line */}
                <motion.path
                  d="M0 45 L50 38 L100 40 L150 30 L200 26 L250 18 L300 12"
                  fill="none"
                  stroke="#00FF88"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.8 }}
                />
                <path
                  d="M0 45 L50 38 L100 40 L150 30 L200 26 L250 18 L300 12 L300 60 L0 60 Z"
                  fill="url(#heroChartGrad)"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
