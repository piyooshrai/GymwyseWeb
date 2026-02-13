"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProblemSolution {
  problem: string;
  solution: string;
  stats: { label: string; value: string }[];
}

interface FeatureGroup {
  title: string;
  features: string[];
}

interface SolutionsPageTemplateProps {
  headline: string;
  tagline: string;
  problemSolutions: ProblemSolution[];
  featureGroups: FeatureGroup[];
  pricing: {
    price: string;
    description: string;
    addOns: string;
  };
}

export function SolutionsPageTemplate({
  headline,
  tagline,
  problemSolutions,
  featureGroups,
  pricing,
}: SolutionsPageTemplateProps) {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
            Built for You
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            {headline}
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">{tagline}</p>
        </motion.div>

        {/* Problem-Solution blocks */}
        <div className="max-w-5xl mx-auto space-y-16 mb-24">
          {problemSolutions.map((ps, i) => (
            <motion.div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-sm font-medium text-alert-red uppercase tracking-wider mb-2">
                  The Problem
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4">
                  {ps.problem}
                </h3>
                <div className="text-sm font-medium text-electric-green uppercase tracking-wider mb-2">
                  The Solution
                </div>
                <p className="text-base text-cool-gray leading-relaxed mb-6">
                  {ps.solution}
                </p>
                <div className="flex gap-6">
                  {ps.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="text-xl font-bold text-electric-green font-mono">
                        {stat.value}
                      </div>
                      <div className="text-xs text-dim-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`glass-card p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="bg-slate-surface rounded-lg aspect-[4/3] flex items-center justify-center">
                  <span className="text-dim-gray text-sm">
                    Feature Preview
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature groups */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featureGroups.map((group, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                      <span className="text-sm text-cool-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-soft-white mb-12">{pricing.description}</p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4">
              {pricing.price}
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Revenue Analytics + Member App
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
          <p className="text-base text-cool-gray">{pricing.addOns}</p>
        </div>
      </div>
    </section>
  );
}
