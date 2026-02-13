"use client";

import { motion } from "framer-motion";
import { ROICalculator } from "@/components/roi-calculator";

export function ROICalculatorPage() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            ROI Calculator
          </h1>
          <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
            See exactly how much GymWyse will save you compared to your current
            software.
          </p>
        </motion.div>

        <div className="glass-card p-6 md:p-10">
          <ROICalculator />
        </div>

        {/* Competitor comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-pure-white text-center mb-8">
            How You&apos;d Do With Other Platforms
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold text-pure-white mb-2">
                Mindbody
              </h4>
              <div className="text-sm text-cool-gray mb-4">
                $129/mo per location
              </div>
              <div className="text-xs text-dim-gray">No revenue analytics</div>
              <div className="text-xs text-dim-gray">No churn prediction</div>
              <div className="text-xs text-dim-gray">$500+ setup fee</div>
            </div>

            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold text-pure-white mb-2">
                Zen Planner
              </h4>
              <div className="text-sm text-cool-gray mb-4">
                $117/mo per location
              </div>
              <div className="text-xs text-dim-gray">
                Limited revenue reporting
              </div>
              <div className="text-xs text-dim-gray">No churn prediction</div>
              <div className="text-xs text-dim-gray">$300+ setup fee</div>
            </div>

            <div className="glass-card p-6 text-center border-electric-green/30 bg-electric-green/5">
              <h4 className="text-lg font-semibold text-electric-green mb-2">
                GymWyse
              </h4>
              <div className="text-sm text-cool-gray mb-4">
                $99/mo per location
              </div>
              <div className="text-xs text-electric-green">
                Full revenue analytics
              </div>
              <div className="text-xs text-electric-green">
                AI churn prediction
              </div>
              <div className="text-xs text-electric-green">$0 setup fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
