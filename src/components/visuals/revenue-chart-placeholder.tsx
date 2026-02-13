"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface RevenueChartPlaceholderProps {
  title?: string;
}

export function RevenueChartPlaceholder({
  title = "MRR Growth",
}: RevenueChartPlaceholderProps) {
  const data = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    let base = 45000;
    return months.map((month) => {
      base = Math.round(base * (1 + Math.random() * 0.08 + 0.02));
      return { month, value: base };
    });
  }, []);

  const maxVal = Math.max(...data.map((d) => d.value));
  const growth = Math.round(
    ((data[data.length - 1].value - data[0].value) / data[0].value) * 100
  );

  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-pure-white mb-2">{title}</h3>
        <div className="flex items-center gap-6">
          <div>
            <span className="text-xs text-cool-gray">Current</span>
            <span className="text-xl font-bold text-electric-green ml-2 font-mono">
              ${data[data.length - 1].value.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-xs text-cool-gray">Growth</span>
            <span className="text-xl font-bold text-sapphire-blue ml-2 font-mono">
              +{growth}%
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2 h-48">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full bg-electric-green/30 rounded-t relative"
              initial={{ height: 0 }}
              whileInView={{ height: `${(d.value / maxVal) * 100}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-x-0 bottom-0 bg-electric-green/60 rounded-t"
                style={{ height: `${60 + Math.random() * 40}%` }}
              />
            </motion.div>
            <span className="text-xs text-dim-gray mt-2">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
