"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Building2,
    title: "Portfolio Dashboard",
    description:
      "See MRR, churn, and member count across all locations in one view",
  },
  {
    icon: TrendingUp,
    title: "Cross-Location Analytics",
    description:
      "Compare performance. Find your best and worst performers instantly",
  },
  {
    icon: Users,
    title: "Centralized Member Database",
    description:
      "Members can access any location. You track everything centrally",
  },
];

export function MultiLocationSection() {
  return (
    <section className="py-24 md:py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-sapphire-blue text-sm font-medium tracking-wider uppercase">
              Built to Scale
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white mt-6 leading-tight">
              From 1 Location to 100
            </h2>
            <p className="text-lg text-soft-white mt-6 leading-relaxed">
              Start with one gym. Scale to a fitness empire. GymWyse grows with
              you.
            </p>

            <div className="space-y-6 mt-12">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-sapphire-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-sapphire-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-pure-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cool-gray mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/solutions/multi-location">
              <Button variant="primary" size="lg" className="mt-8">
                See Multi-Location Features
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Dashboard placeholder */}
            <div className="glass-card p-6 rounded-xl">
              <div className="bg-slate-surface rounded-lg p-6">
                <h4 className="text-sm font-medium text-dim-gray mb-4">
                  Multi-Location Overview
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Downtown LA",
                      mrr: "$142K",
                      members: 1247,
                      churn: "1.8%",
                    },
                    {
                      name: "Santa Monica",
                      mrr: "$98K",
                      members: 892,
                      churn: "2.1%",
                    },
                    {
                      name: "Beverly Hills",
                      mrr: "$187K",
                      members: 1534,
                      churn: "1.5%",
                    },
                    {
                      name: "Pasadena",
                      mrr: "$76K",
                      members: 614,
                      churn: "2.8%",
                    },
                  ].map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-glass-border/50 last:border-0"
                    >
                      <div>
                        <span className="text-sm font-medium text-pure-white">
                          {loc.name}
                        </span>
                        <span className="text-xs text-dim-gray ml-2">
                          {loc.members} members
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-electric-green">
                          {loc.mrr}
                        </span>
                        <span className="text-xs text-cool-gray">
                          {loc.churn} churn
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-glass-border flex items-center justify-between">
                  <span className="text-sm font-medium text-pure-white">
                    Total Portfolio
                  </span>
                  <span className="text-lg font-bold font-mono text-electric-green">
                    $503K MRR
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
