"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricCardGrid } from "@/components/visuals/metric-card-grid";
import Link from "next/link";
import type { CityPageData } from "@/lib/city-data";

export function CityPageTemplate({ data }: { data: CityPageData }) {
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

      {/* City Stats */}
      <section className="py-24 md:py-32 bg-midnight">
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
      <section className="py-24 md:py-32 bg-deep-space">
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

      {/* City-Specific Features */}
      <section className="py-24 md:py-32 bg-midnight">
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

      {/* Pricing CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
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
