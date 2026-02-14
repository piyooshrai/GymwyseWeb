"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  MapPin,
  Calculator,
  Quote,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ProblemSolutionPageData } from "@/lib/problem-solution-data";

export function ProblemSolutionTemplate({
  data,
}: {
  data: ProblemSolutionPageData;
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

      {/* Mid-content CTA */}
      <section className="py-16 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="glass-card p-8 md:p-10 border border-electric-green/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-electric-green" />
              <h3 className="text-xl font-semibold text-pure-white">
                See How Much You Could Save
              </h3>
            </div>
            <p className="text-sm text-cool-gray leading-relaxed mb-6 max-w-lg mx-auto">
              Use our free ROI calculator to see exactly how much revenue
              GymWyse can recover for your gym.
            </p>
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
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
                {feature.details && feature.details.length > 0 && (
                  <ul className="mt-4 pl-8 space-y-2">
                    {feature.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <span className="text-sm text-cool-gray leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {data.caseStudy && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                    Case Study
                  </span>
                </div>

                <div className="glass-card p-8 md:p-12">
                  {/* Gym info header */}
                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                      {data.caseStudy.gym
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pure-white">
                        {data.caseStudy.gym}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-dim-gray">
                        <MapPin className="w-3 h-3" />
                        {data.caseStudy.location}
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-alert-red/10 rounded flex items-center justify-center">
                          <AlertTriangle className="w-3.5 h-3.5 text-alert-red" />
                        </div>
                        <h4 className="text-sm font-medium text-alert-red uppercase tracking-wider">
                          Challenge
                        </h4>
                      </div>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {data.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-electric-green/10 rounded flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-electric-green" />
                        </div>
                        <h4 className="text-sm font-medium text-electric-green uppercase tracking-wider">
                          Solution
                        </h4>
                      </div>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {data.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    {data.caseStudy.results.map((result, i) => (
                      <motion.div
                        key={i}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-2xl font-bold text-electric-green font-mono">
                          {result.value}
                        </div>
                        <div className="text-xs text-dim-gray mt-1">
                          {result.metric}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial blockquote */}
                  <div className="border-l-2 border-electric-green/30 pl-6">
                    <Quote className="w-6 h-6 text-electric-green/30 mb-3" />
                    <blockquote className="text-base text-soft-white italic leading-relaxed mb-4">
                      &ldquo;{data.caseStudy.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sapphire-blue/20 flex items-center justify-center text-sapphire-blue text-xs font-bold">
                        {data.caseStudy.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-pure-white">
                          {data.caseStudy.author}
                        </div>
                        <div className="text-xs text-dim-gray">
                          {data.caseStudy.role}, {data.caseStudy.gym}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {data.comparison && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
                  GymWyse vs {data.comparison.competitor}
                </h2>
                <p className="text-base text-cool-gray text-center mb-12">
                  See how GymWyse compares feature-by-feature.
                </p>

                <div className="glass-card overflow-hidden">
                  {/* Table header */}
                  <div className="grid grid-cols-3 gap-4 p-6 border-b border-glass-border">
                    <div className="text-sm font-medium text-dim-gray uppercase tracking-wider">
                      Feature
                    </div>
                    <div className="text-sm font-medium text-electric-green uppercase tracking-wider text-center">
                      GymWyse
                    </div>
                    <div className="text-sm font-medium text-dim-gray uppercase tracking-wider text-center">
                      {data.comparison.competitor}
                    </div>
                  </div>

                  {/* Table rows */}
                  {data.comparison.rows.map((row, i) => (
                    <motion.div
                      key={i}
                      className={`grid grid-cols-3 gap-4 p-6 ${
                        i < data.comparison!.rows.length - 1
                          ? "border-b border-glass-border"
                          : ""
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-sm text-pure-white font-medium">
                        {row.feature}
                      </div>
                      <div className="text-sm text-electric-green text-center flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>{row.gymwyse}</span>
                      </div>
                      <div className="text-sm text-alert-red text-center flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 shrink-0" />
                        <span>{row.competitor}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-electric-green" />
                  <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="text-base text-cool-gray text-center mb-12">
                  Everything you need to know about this solution.
                </p>
              </motion.div>

              <div className="space-y-3">
                {data.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass-card overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                      onClick={() =>
                        setOpenFaqIndex(
                          openFaqIndex === index ? null : index
                        )
                      }
                      aria-expanded={openFaqIndex === index}
                    >
                      <span className="text-base font-medium text-pure-white pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-cool-gray shrink-0 transition-transform duration-200 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-cool-gray leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
