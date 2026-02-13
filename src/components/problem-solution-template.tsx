"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ProblemSolutionPageData } from "@/lib/problem-solution-data";

export function ProblemSolutionTemplate({
  data,
}: {
  data: ProblemSolutionPageData;
}) {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Problem / Solution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              {data.headline}
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
              {data.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-alert-red/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-alert-red" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                {data.problemTitle}
              </h2>
            </div>
            <p className="text-base text-soft-white leading-relaxed mb-12">
              {data.problemDescription}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.problemStats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 border border-alert-red/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-alert-red font-mono mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-cool-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-electric-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                {data.solutionTitle}
              </h2>
            </div>
            <p className="text-base text-soft-white leading-relaxed mb-12">
              {data.solutionDescription}
            </p>
            <div className="space-y-6">
              {data.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-electric-green font-bold font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pure-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 border border-glass-border hover:border-electric-green/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <ChevronRight className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-pure-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed pl-8">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            {data.ctaHeadline}
          </h2>
          <p className="text-lg text-soft-white mb-12">
            {data.ctaDescription}
          </p>
          <div className="glass-card p-12">
            <div className="text-5xl font-bold text-electric-green mb-4">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Full platform access &bull; No setup fees &bull; Cancel anytime
            </div>
            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-dim-gray mt-6">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
