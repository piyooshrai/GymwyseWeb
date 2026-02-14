"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Users,
  Building2,
  Star,
  TrendingUp,
  ChevronDown,
  Calculator,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricCardGrid } from "@/components/visuals/metric-card-grid";
import Link from "next/link";
import type { CityPageData } from "@/lib/city-data";

export function CityPageTemplate({ data }: { data: CityPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const countryLabel =
    data.country === "US"
      ? "United States"
      : data.country === "UK"
        ? "United Kingdom"
        : data.country === "AU"
          ? "Australia"
          : "Middle East";

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
            <div className="flex items-center justify-center gap-2 text-sm text-cool-gray">
              <MapPin className="w-4 h-4 text-electric-green" />
              <span>
                {data.city}, {countryLabel}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Gym Software for{" "}
              <span className="text-electric-green">{data.city}</span>{" "}
              {data.emoji}
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
              {data.tagline}
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
            <p className="text-sm text-dim-gray">
              Starting at {data.price} &bull; No setup fees &bull; Cancel
              anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Context */}
      {data.marketContext && (
        <section className="py-20 md:py-24 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="glass-card p-10 md:p-14 border border-glass-border relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-electric-green" />
              <div className="flex items-center gap-2 text-sm text-electric-green font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                {data.city} Fitness Market
              </div>
              <p className="text-base md:text-lg text-soft-white leading-relaxed">
                {data.marketContext}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* City Stats */}
      <section className={`py-24 md:py-32 ${data.marketContext ? "bg-deep-space" : "bg-midnight"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <MetricCardGrid
            metrics={[
              {
                icon: <Building2 className="w-5 h-5 text-electric-green" />,
                label: `Gyms in ${data.city}`,
                value: data.totalGyms,
                description: "Total fitness facilities",
                color: "#00FF88",
              },
              {
                icon: <Star className="w-5 h-5 text-sapphire-blue" />,
                label: "Using GymWyse",
                value: data.gymwyseGyms,
                description: "And growing every month",
                color: "#3B82F6",
              },
              {
                icon: <Users className="w-5 h-5 text-electric-green" />,
                label: "Avg. Members Managed",
                value: "500+",
                description: "Per GymWyse gym",
                color: "#00FF88",
              },
              {
                icon: <MapPin className="w-5 h-5 text-sapphire-blue" />,
                label: "Active In",
                value: data.neighborhoods.split(",").length + "+ areas",
                description: data.neighborhoods,
                color: "#3B82F6",
              },
            ]}
          />
        </div>
      </section>

      {/* Featured Gyms */}
      <section className={`py-24 md:py-32 ${data.marketContext ? "bg-midnight" : "bg-deep-space"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
            {data.city} Gyms Using GymWyse
          </h2>
          <p className="text-base text-soft-white text-center mb-16 max-w-2xl mx-auto">
            Join these {data.city} fitness businesses already growing with
            GymWyse
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.gyms.map((gym, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 border border-glass-border hover:border-electric-green/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-xs text-electric-green mb-3">
                  <MapPin className="w-3 h-3" />
                  {gym.neighborhood}
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-2">
                  {gym.name}
                </h3>
                <p className="text-sm text-cool-gray mb-4">{gym.type}</p>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-dim-gray" />
                  <span className="text-sm text-dim-gray">
                    {gym.memberCount} members
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Breakdown */}
      {data.neighborhoodBreakdown && data.neighborhoodBreakdown.length > 0 && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                {data.city} Neighborhood Breakdown
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto">
                Fitness landscape across {data.city}&apos;s top neighborhoods
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.neighborhoodBreakdown.map((neighborhood, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 border border-glass-border hover:border-electric-green/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-pure-white">
                      {neighborhood.name}
                    </h3>
                    <span className="text-xs font-medium text-electric-green bg-electric-green/10 px-3 py-1 rounded-full">
                      {neighborhood.fitnessType}
                    </span>
                  </div>
                  <div className="text-sm text-cool-gray leading-relaxed mb-4">
                    {neighborhood.description}
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-glass-border">
                    <span className="text-xs text-dim-gray">Avg. Pricing</span>
                    <span className="text-sm font-mono font-semibold text-electric-green">
                      {neighborhood.avgPricing}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City-Specific Features */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
            Built for {data.city}
          </h2>
          <p className="text-base text-soft-white text-center mb-16 max-w-2xl mx-auto">
            Features designed specifically for {data.city}&apos;s fitness market
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Content CTA */}
      <section className="py-20 md:py-24 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="glass-card p-10 md:p-14 border border-electric-green/20 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-green/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
                Ready to Transform Your {data.city} Gym?
              </h2>
              <p className="text-base text-soft-white mb-8 max-w-xl mx-auto">
                See exactly how much revenue GymWyse can unlock for your
                business, or jump straight into a personalized demo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/roi-calculator">
                  <Button variant="secondary" size="lg">
                    <Calculator className="mr-2 w-4 h-4" />
                    Calculate Your ROI
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="primary" size="lg">
                    <CalendarCheck className="mr-2 w-4 h-4" />
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Fitness Trends */}
      {data.trends && data.trends.length > 0 && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Local Fitness Trends
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto">
                What&apos;s shaping {data.city}&apos;s fitness industry right
                now
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.trends.map((trend, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-8 border border-glass-border hover:border-sapphire-blue/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-sapphire-blue/10 group-hover:bg-sapphire-blue/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-sapphire-blue" />
                  </div>
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

      {/* Comparison Table */}
      {data.comparison && data.comparison.rows.length > 0 && (
        <section className="py-24 md:py-32 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                GymWyse vs {data.comparison.competitor}
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto">
                See how GymWyse stacks up for {data.city} gym owners
              </p>
            </motion.div>
            <motion.div
              className="glass-card border border-glass-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 p-5 border-b border-glass-border bg-white/[0.03]">
                <div className="text-sm font-medium text-dim-gray">
                  Feature
                </div>
                <div className="text-sm font-medium text-electric-green text-center">
                  GymWyse
                </div>
                <div className="text-sm font-medium text-dim-gray text-center">
                  {data.comparison.competitor}
                </div>
              </div>
              {/* Table Rows */}
              {data.comparison.rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 p-5 ${
                    i < data.comparison!.rows.length - 1
                      ? "border-b border-glass-border"
                      : ""
                  } ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
                >
                  <div className="text-sm text-soft-white font-medium">
                    {row.feature}
                  </div>
                  <div className="text-sm text-electric-green text-center font-medium">
                    {row.gymwyse}
                  </div>
                  <div className="text-sm text-cool-gray text-center">
                    {row.competitor}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-24 md:py-32 bg-deep-space">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto">
                Common questions from {data.city} gym owners
              </p>
            </motion.div>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card border border-glass-border overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  >
                    <span className="text-base font-medium text-pure-white pr-4">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-electric-green" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-glass-border pt-4">
                            <p className="text-sm text-cool-gray leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing CTA */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Start Growing Your {data.city} Gym Today
          </h2>
          <p className="text-lg text-soft-white mb-12">
            {data.price}. No setup fees. No contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4">
              {data.price}
            </div>
            <div className="text-base text-soft-white mb-2">
              Core platform + Revenue Analytics + Member App
            </div>
            <div className="text-sm text-cool-gray mb-8">
              Pricing in {data.currency}
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

          <div className="text-sm text-cool-gray">
            <p>
              Serving gyms in {data.neighborhoods}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
