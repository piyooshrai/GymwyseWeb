"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/bento-card";

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
          />

          <BentoCard
            className="md:col-span-4"
            title="Churn Prevention AI"
            description="Identify at-risk members before they cancel. Win them back automatically."
            badge="2.3% avg churn rate"
          />

          <BentoCard
            className="md:col-span-4"
            title="Multi-Location Hub"
            description="Manage 1 gym or 100. One dashboard for your entire portfolio."
            badge="Scales infinitely"
          />

          <BentoCard
            className="md:col-span-4"
            title="AI Avatar Member App"
            description="6 personality-driven coaches. Boost engagement by 40%."
          />

          <BentoCard
            className="md:col-span-4"
            title="Equipment QR Codes"
            description="Members scan. You track. Prevent liability."
          />

          <BentoCard
            className="md:col-span-4"
            title="Retail & POS"
            description="Sell supplements, merch, equipment. All in one system."
          />
        </div>
      </div>
    </section>
  );
}
