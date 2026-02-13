"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Zap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Book a Migration Call",
    description:
      "We'll review your current setup, map your data, and create a custom migration plan.",
  },
  {
    step: "2",
    title: "Data Migration",
    description:
      "We import all members, payment history, contracts, schedules, and settings.",
  },
  {
    step: "3",
    title: "Team Training",
    description:
      "Hands-on training for your staff. Usually takes 1-2 hours. We record it for reference.",
  },
  {
    step: "4",
    title: "Parallel Run",
    description:
      "Run both systems side-by-side for a few days. Verify everything works perfectly.",
  },
  {
    step: "5",
    title: "Go Live",
    description:
      "Switch over with zero downtime. Your members won't notice a thing.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Zero Data Loss",
    description: "Every member record, payment history, and contract is migrated.",
  },
  {
    icon: Clock,
    title: "7-10 Days",
    description: "Most gyms are fully migrated in under two weeks.",
  },
  {
    icon: Zap,
    title: "Zero Downtime",
    description: "Your gym operations continue uninterrupted during migration.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A migration specialist is assigned to your account.",
  },
];

export function MigrationPage() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
            Migration Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Switching Is Easy
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">
            We handle the entire migration from your current software. Zero
            downtime. Zero data loss. Your members won&apos;t even notice.
          </p>
        </motion.div>

        {/* Guarantees */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <g.icon className="w-6 h-6 text-electric-green" />
              </div>
              <h3 className="text-base font-semibold text-pure-white mb-2">
                {g.title}
              </h3>
              <p className="text-sm text-cool-gray">{g.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-pure-white text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-electric-green/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-electric-green font-bold">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pure-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-cool-gray">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What we migrate */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-pure-white text-center mb-12">
            What We Migrate
          </h2>
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Member profiles & contact info",
                "Payment history & billing",
                "Active contracts & memberships",
                "Class schedules & bookings",
                "Staff & instructor records",
                "Equipment & inventory data",
                "Historical financial data",
                "Document & waiver records",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-electric-green shrink-0" />
                  <span className="text-sm text-cool-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-base text-soft-white mb-8">
            Book a migration call and we&apos;ll create a custom plan for your gym.
          </p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Book Migration Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
