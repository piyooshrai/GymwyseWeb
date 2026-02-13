"use client";

import { motion } from "framer-motion";
import { ArrowRight, QrCode, Wrench, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: QrCode,
    title: "QR Code on Every Machine",
    description: "Generate unique QR codes for every piece of equipment. Members scan to report issues in seconds.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description: "Track maintenance history, schedule preventive maintenance, and log repairs. Never miss a service date.",
  },
  {
    icon: Shield,
    title: "Liability Prevention",
    description: "Document equipment condition and member reports. Protect yourself with a complete audit trail.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "See which equipment gets used most. Make smart purchasing decisions based on real data.",
  },
];

export function EquipmentQRPage() {
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
            Equipment Management
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Equipment QR Codes
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">
            Members scan. You track. Prevent liability. Smart equipment
            management with QR codes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-electric-green" />
              </div>
              <h3 className="text-lg font-semibold text-pure-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-8 mb-8">
            <div className="text-3xl font-bold text-electric-green mb-2">
              $39/mo
            </div>
            <div className="text-sm text-cool-gray">
              per location add-on
            </div>
          </div>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              See Equipment QR in Action
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
