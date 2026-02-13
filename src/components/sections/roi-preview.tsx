"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ROICalculator = dynamic(
  () => import("@/components/roi-calculator").then((mod) => mod.ROICalculator),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="text-dim-gray">Loading calculator...</div>
      </div>
    ),
  }
);

export function ROIPreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-deep-space to-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
            See Your ROI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-soft-white">
            See exactly how much GymWyse will save you vs. your current
            software.
          </p>
        </motion.div>

        <div className="glass-card p-6 md:p-10">
          <ROICalculator />
        </div>
      </div>
    </section>
  );
}
