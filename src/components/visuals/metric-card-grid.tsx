"use client";

import { motion } from "framer-motion";

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
  color?: string;
}

export function MetricCardGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          viewport={{ once: true }}
          className="glass-card p-5 border border-glass-border hover:border-electric-green/30 transition-colors"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
            style={{
              backgroundColor: `${metric.color || "#00FF88"}20`,
            }}
          >
            {metric.icon}
          </div>
          <div className="text-xs text-cool-gray mb-1">{metric.label}</div>
          <div className="text-xl text-pure-white font-mono font-bold mb-0.5">
            {metric.value}
          </div>
          {metric.description && (
            <div className="text-xs text-dim-gray">{metric.description}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
