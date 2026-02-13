"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  trend?: string;
  trendDirection?: "up" | "down";
}

interface BlurredDashboardHeroProps {
  metrics: Metric[];
  chartType?: "line" | "bar" | "area";
  primaryColor?: string;
}

export function BlurredDashboardHero({
  metrics,
  chartType = "line",
  primaryColor = "#00FF88",
}: BlurredDashboardHeroProps) {
  return (
    <div className="relative">
      <div className="glass-card p-6 md:p-8">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 border border-glass-border"
            >
              <div className="text-xs text-cool-gray mb-1">{metric.label}</div>
              <div className="text-xl md:text-2xl text-pure-white font-mono font-bold">
                {metric.value}
              </div>
              {metric.trend && (
                <div
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    metric.trendDirection === "up"
                      ? "text-electric-green"
                      : "text-sapphire-blue"
                  }`}
                >
                  {metric.trendDirection === "up" ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {metric.trend}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="h-48 md:h-64 bg-deep-space/50 rounded-lg border border-glass-border relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full p-6"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={primaryColor} stopOpacity={0.2} />
                <stop
                  offset="100%"
                  stopColor={primaryColor}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            {chartType === "line" && (
              <>
                <motion.path
                  d="M 0 160 Q 50 140, 80 130 T 160 110 T 240 80 T 320 60 T 400 30"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                <path
                  d="M 0 160 Q 50 140, 80 130 T 160 110 T 240 80 T 320 60 T 400 30 L 400 200 L 0 200 Z"
                  fill="url(#chartFill)"
                />
              </>
            )}
            {chartType === "bar" &&
              [40, 60, 45, 75, 55, 85, 70, 95, 80, 100].map((h, i) => (
                <motion.rect
                  key={i}
                  x={i * 40 + 5}
                  y={200 - h * 1.8}
                  width="30"
                  height={h * 1.8}
                  fill={primaryColor}
                  opacity={0.6}
                  rx="4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
              ))}
            {chartType === "area" && (
              <>
                <motion.path
                  d="M 0 150 C 40 130, 80 160, 120 120 S 200 90, 240 100 S 320 50, 400 40"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                <path
                  d="M 0 150 C 40 130, 80 160, 120 120 S 200 90, 240 100 S 320 50, 400 40 L 400 200 L 0 200 Z"
                  fill="url(#chartFill)"
                />
              </>
            )}
          </svg>

          <motion.div
            className="absolute right-4 top-4 glass-card px-3 py-1.5 text-xs border border-glass-border"
            style={{ color: primaryColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            Real-time tracking
          </motion.div>
        </div>
      </div>
    </div>
  );
}
