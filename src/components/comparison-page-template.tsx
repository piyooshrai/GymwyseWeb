"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ComparisonMetric {
  label: string;
  gymwyse: string;
  competitor: string;
}

interface ComparisonSection {
  title: string;
  gymwyseWins: string[];
  competitorLoses: string[];
}

interface ComparisonPageTemplateProps {
  competitorName: string;
  tagline: string;
  metrics: ComparisonMetric[];
  sections: ComparisonSection[];
  caseStudy: {
    quote: string;
    author: string;
    role: string;
    savings: string;
    churnReduction: string;
    mrrGrowth: string;
  };
}

export function ComparisonPageTemplate({
  competitorName,
  tagline,
  metrics,
  sections,
  caseStudy,
}: ComparisonPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Make the Switch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              GymWyse vs {competitorName}
            </h1>
            <p className="text-lg text-soft-white">{tagline}</p>
          </motion.div>

          {/* Quick comparison */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Competitor column */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-dim-gray/20 rounded-lg flex items-center justify-center text-dim-gray font-bold text-sm">
                    {competitorName.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white">
                    {competitorName}
                  </h3>
                </div>
                <div className="space-y-4">
                  {metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-cool-gray">
                        {metric.label}
                      </span>
                      <span className="text-sm text-alert-red font-medium">
                        {metric.competitor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GymWyse column */}
              <div className="glass-card p-8 border-electric-green/30 bg-electric-green/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric-green rounded-lg flex items-center justify-center text-deep-space font-bold text-sm">
                    GW
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white">
                    GymWyse
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-electric-green/20 text-electric-green rounded-full">
                    Recommended
                  </span>
                </div>
                <div className="space-y-4">
                  {metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-cool-gray">
                        {metric.label}
                      </span>
                      <span className="text-sm text-electric-green font-medium">
                        {metric.gymwyse}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/demo">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mt-6"
                  >
                    Switch to GymWyse
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed comparison sections */}
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold text-pure-white mb-8">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-electric-green uppercase tracking-wider mb-4">
                      GymWyse Advantages
                    </h4>
                    {section.gymwyseWins.map((win, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <span className="text-sm text-cool-gray">{win}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-alert-red uppercase tracking-wider mb-4">
                      {competitorName} Drawbacks
                    </h4>
                    {section.competitorLoses.map((lose, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <X className="w-4 h-4 text-alert-red shrink-0 mt-0.5" />
                        <span className="text-sm text-cool-gray">{lose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Migration process */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pure-white text-center mb-12">
              Switching Is Easy
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Book a Demo",
                  desc: "We'll show you GymWyse and map out your migration",
                },
                {
                  step: "2",
                  title: "Data Import",
                  desc: "We migrate your members, schedules, and history",
                },
                {
                  step: "3",
                  title: "Team Training",
                  desc: "We train your staff (usually takes 1-2 hours)",
                },
                {
                  step: "4",
                  title: "Go Live",
                  desc: "Launch with zero downtime for your members",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-pure-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cool-gray">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-base text-soft-white mb-6">
                Most gyms are fully migrated in 7-10 days. We handle all the
                heavy lifting.
              </p>
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Your Migration
                </Button>
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                  Case Study
                </span>
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-pure-white mb-4">
                  &ldquo;{caseStudy.quote}&rdquo;
                </h3>
                <div className="grid grid-cols-3 gap-6 my-8">
                  <div>
                    <div className="text-2xl font-bold text-electric-green font-mono">
                      {caseStudy.savings}
                    </div>
                    <div className="text-xs text-dim-gray">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-electric-green font-mono">
                      {caseStudy.churnReduction}
                    </div>
                    <div className="text-xs text-dim-gray">
                      Churn Reduction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-electric-green font-mono">
                      {caseStudy.mrrGrowth}
                    </div>
                    <div className="text-xs text-dim-gray">MRR Growth</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sapphire-blue/20 flex items-center justify-center text-sapphire-blue font-semibold text-sm">
                    {caseStudy.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-pure-white">
                      {caseStudy.author}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {caseStudy.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
