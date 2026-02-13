"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface RegionalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RegionalPricingTier {
  tier: string;
  price: string;
  billingCycle: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

interface RegionalPageTemplateProps {
  flag: string;
  region: string;
  tagline: string;
  features: RegionalFeature[];
  pricing: RegionalPricingTier[];
  cities: string;
}

export function RegionalPageTemplate({
  flag,
  region,
  tagline,
  features,
  pricing,
  cities,
}: RegionalPageTemplateProps) {
  return (
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
          <p className="text-lg text-soft-white leading-relaxed">{tagline}</p>
        </motion.div>

        {/* Regional features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-5">
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

        {/* Regional pricing */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
            {region} Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((tier) => (
              <PricingCard
                key={tier.tier}
                {...tier}
                cta="Start Free Trial"
              />
            ))}
          </div>
        </div>

        {/* Regional CTA */}
        <div className="text-center">
          <p className="text-base text-soft-white mb-8">Join gyms in {cities}</p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Why GymWyse for this region */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-pure-white text-center mb-8">
            Why Gyms in {region} Choose GymWyse
          </h2>
          <div className="glass-card p-8">
            <div className="space-y-4">
              {[
                "Real-time revenue analytics tailored to your market",
                "AI-powered churn prediction saves members before they leave",
                "No setup fees, no long-term contracts",
                "14-day free trial with full access",
                "Dedicated support in your timezone",
                "1,708% average ROI for gyms like yours",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                  <span className="text-sm text-cool-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
