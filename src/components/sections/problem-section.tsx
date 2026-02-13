"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    title: "Hidden Revenue Leaks",
    description:
      "Failed payments, no-shows, and underpriced services cost you $5K+/month",
  },
  {
    icon: Users,
    title: "Invisible Churn",
    description:
      "You don't know which members are at risk until they cancel",
  },
  {
    icon: TrendingDown,
    title: "No Real-Time Insights",
    description:
      "Last month's reports don't help you make today's decisions",
  },
];

export function ProblemSection() {
  return (
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
            You&apos;re paying $500+/month for software that can&apos;t tell you which
            members are about to churn, which classes lose money, or where your
            revenue is leaking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
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
              <h3 className="text-lg font-semibold text-pure-white mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
