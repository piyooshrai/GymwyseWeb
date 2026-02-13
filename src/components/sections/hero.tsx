"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-deep-space">
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-green/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sapphire-blue/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                The Operating System for Modern Gyms
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Gym Software That
              <span className="block text-electric-green">Proves Its ROI</span>
            </h1>

            <p className="text-lg text-soft-white max-w-xl leading-relaxed">
              Track revenue in real-time. Predict churn before it happens.
              Recover $12K+ per month. Built for independent gyms that want to
              scale without the enterprise price tag.
            </p>

            {/* Animated metrics strip */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl md:text-4xl text-electric-green font-mono font-bold">
                  1,708%
                </div>
                <div className="text-sm text-cool-gray">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-sapphire-blue font-mono font-bold">
                  18x
                </div>
                <div className="text-sm text-cool-gray">Payback Multiple</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-pure-white font-mono font-bold">
                  $12K+
                </div>
                <div className="text-sm text-cool-gray">Monthly Recovery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  See Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-sunset-orange text-sunset-orange" />
                <span className="text-sm text-cool-gray">4.9/5 on G2</span>
              </div>
              <div className="h-4 w-px bg-glass-border hidden sm:block" />
              <div className="text-sm text-cool-gray">
                Trusted by 200+ gyms across 12 countries
              </div>
            </div>
          </motion.div>

          {/* Right: Dashboard Preview */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="glass-card p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard placeholder */}
              <div className="bg-slate-surface rounded-lg aspect-[4/3] flex flex-col p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-alert-red/60" />
                  <div className="w-3 h-3 rounded-full bg-sunset-orange/60" />
                  <div className="w-3 h-3 rounded-full bg-electric-green/60" />
                  <span className="text-xs text-dim-gray ml-2">
                    Revenue Command Center
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-dim-gray">MRR</div>
                    <div className="text-lg font-bold text-electric-green font-mono">
                      $562K
                    </div>
                    <div className="text-xs text-electric-green">+7.3%</div>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-dim-gray">Members</div>
                    <div className="text-lg font-bold text-pure-white font-mono">
                      4,287
                    </div>
                    <div className="text-xs text-sapphire-blue">+124</div>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-dim-gray">Churn</div>
                    <div className="text-lg font-bold text-pure-white font-mono">
                      2.1%
                    </div>
                    <div className="text-xs text-electric-green">-0.4%</div>
                  </div>
                </div>
                {/* Chart placeholder */}
                <div className="flex-1 flex items-end gap-1 px-2">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-electric-green/20 rounded-t"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="w-full bg-electric-green/60 rounded-t"
                          style={{ height: `${60 + Math.random() * 40}%` }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Floating metric cards */}
              <motion.div
                className="absolute -left-8 top-1/4 glass-card p-4 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-cool-gray">Total MRR</div>
                <div className="text-xl font-bold text-electric-green font-mono">
                  $562,500
                </div>
                <div className="text-xs text-electric-green">+7.3%</div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 glass-card p-4 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className="text-xs text-cool-gray">Churn Prevented</div>
                <div className="text-xl font-bold text-sapphire-blue font-mono">
                  23
                </div>
                <div className="text-xs text-sapphire-blue">This month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
