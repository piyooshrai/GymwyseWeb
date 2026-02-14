"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface RegionalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
}

interface RegionalPricingTier {
  tier: string;
  price: string;
  billingCycle: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

interface RegionalTestimonial {
  gym: string;
  location: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  quote: string;
  author: string;
  role: string;
}

interface RegionalComparison {
  competitor: string;
  rows: { feature: string; gymwyse: string; competitor: string }[];
  switchReasons: string[];
}

interface RegionalFAQ {
  question: string;
  answer: string;
}

interface RegionalTrend {
  title: string;
  description: string;
}

interface RegionalPageTemplateProps {
  flag: string;
  region: string;
  tagline: string;
  marketContext?: string;
  features: RegionalFeature[];
  testimonials?: RegionalTestimonial[];
  comparison?: RegionalComparison;
  trends?: RegionalTrend[];
  faq?: RegionalFAQ[];
  pricing: RegionalPricingTier[];
  cities: string;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-glass-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium text-pure-white pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dim-gray shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-5"
        >
          <p className="text-sm text-cool-gray leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export function RegionalPageTemplate({
  flag,
  region,
  tagline,
  marketContext,
  features,
  testimonials,
  comparison,
  trends,
  faq,
  pricing,
  cities,
}: RegionalPageTemplateProps) {
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">{flag}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
                Gym Software for {region}
              </h1>
            </div>
            <p className="text-lg text-soft-white leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Market Context */}
          {marketContext && (
            <motion.div
              className="max-w-3xl mx-auto mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 border-l-4 border-l-electric-green">
                <p className="text-base text-cool-gray leading-relaxed">
                  {marketContext}
                </p>
              </div>
            </motion.div>
          )}

          {/* Regional Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
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
                <p className="text-sm text-cool-gray leading-relaxed mb-4">
                  {feature.description}
                </p>
                {feature.details && (
                  <ul className="space-y-2">
                    {feature.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-electric-green shrink-0 mt-0.5" />
                        <span className="text-xs text-dim-gray">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends */}
      {trends && trends.length > 0 && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
              {region} Fitness Trends GymWyse Supports
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {trends.map((trend, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {trend.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {trend.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
              {region} Gyms Using GymWyse
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-pure-white mb-1">
                    {t.gym}
                  </h3>
                  <p className="text-xs text-dim-gray mb-4">{t.location}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs text-alert-red uppercase tracking-wider font-medium">
                        Challenge
                      </span>
                      <p className="text-sm text-cool-gray mt-1">
                        {t.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-electric-green uppercase tracking-wider font-medium">
                        Solution
                      </span>
                      <p className="text-sm text-cool-gray mt-1">
                        {t.solution}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {t.results.map((r, j) => (
                      <div key={j} className="bg-deep-space/60 rounded-lg p-3">
                        <div className="text-lg font-bold text-electric-green font-mono">
                          {r.value}
                        </div>
                        <div className="text-[10px] text-dim-gray">
                          {r.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-electric-green pl-4">
                    <p className="text-sm text-cool-gray italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-xs text-dim-gray mt-2">
                      — {t.author}, {t.role}
                    </p>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison */}
      {comparison && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
              GymWyse vs {comparison.competitor} ({region})
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left text-sm text-dim-gray py-4 pr-4">
                      Feature
                    </th>
                    <th className="text-center text-sm text-electric-green py-4 px-4 font-semibold">
                      GymWyse
                    </th>
                    <th className="text-center text-sm text-dim-gray py-4 pl-4">
                      {comparison.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, i) => (
                    <tr key={i} className="border-b border-glass-border/50">
                      <td className="text-sm text-cool-gray py-4 pr-4 font-medium">
                        {row.feature}
                      </td>
                      <td className="text-center text-sm text-electric-green py-4 px-4">
                        {row.gymwyse}
                      </td>
                      <td className="text-center text-sm text-dim-gray py-4 pl-4">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {comparison.switchReasons.length > 0 && (
              <div className="glass-card p-6">
                <h3 className="text-base font-semibold text-pure-white mb-4">
                  Why {region} gyms switch:
                </h3>
                <ol className="space-y-2">
                  {comparison.switchReasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-electric-green font-bold text-sm shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-sm text-cool-gray">{reason}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="glass-card p-8">
              {faq.map((item, i) => (
                <FAQItem key={i} q={item.question} a={item.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            {region} Pricing
          </h2>
          <p className="text-base text-soft-white text-center mb-12 max-w-2xl mx-auto">
            No setup fees. Monthly contracts. 14-day free trial. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {pricing.map((tier) => (
              <PricingCard
                key={tier.tier}
                {...tier}
                cta="Start Free Trial"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Ready to Stop the Revenue Leaks?
          </h2>
          <p className="text-base text-soft-white mb-8">
            Join gyms in {cities} that switched to software built for the{" "}
            {region} market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Real-time revenue analytics",
              "AI-powered churn prediction",
              "No setup fees",
              "14-day free trial",
              "1,708% average ROI",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-electric-green" />
                <span className="text-xs text-dim-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
