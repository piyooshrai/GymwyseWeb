"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BentoCardProps {
  className?: string;
  title: string;
  description: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  cta?: string;
  visual?: React.ReactNode;
}

export function BentoCard({
  className,
  title,
  description,
  badge,
  stats,
  cta,
  visual,
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-8 group relative overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 h-full flex flex-col">
        {badge && (
          <span className="inline-block self-start px-3 py-1 text-xs font-medium text-electric-green bg-electric-green/10 rounded-full mb-4">
            {badge}
          </span>
        )}

        <h3 className="text-xl font-semibold text-pure-white mb-3">
          {title}
        </h3>
        <p className="text-cool-gray leading-relaxed mb-6">{description}</p>

        {stats && (
          <div className="flex gap-6 mb-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-lg font-semibold text-electric-green font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-dim-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {visual && (
          <div className="flex-1 rounded-lg min-h-[120px] mb-4 overflow-hidden">
            {visual}
          </div>
        )}

        {cta && (
          <button className="inline-flex items-center gap-2 text-sm font-medium text-electric-green group-hover:gap-3 transition-all mt-auto">
            {cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
