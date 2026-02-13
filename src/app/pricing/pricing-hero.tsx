"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/pricing-card";
import { ComparisonTable } from "@/components/comparison-table";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const tiers = {
  monthly: [
    {
      tier: "Starter",
      price: "$99",
      billingCycle: "per location/month",
      description: "Perfect for single-location independent gyms",
      features: [
        "Core platform (unlimited members)",
        "Revenue Analytics module",
        "Member mobile app",
        "Email support",
        "Standard integrations",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      tier: "Growth",
      price: "$79",
      billingCycle: "per location/month",
      description: "For gyms with 2-5 locations",
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "Multi-location dashboard",
        "Cross-location analytics",
        "Priority support",
        "Advanced integrations",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      billingCycle: "6+ locations",
      description: "For multi-location fitness operators",
      features: [
        "Everything in Growth, plus:",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "White-label options",
        "Advanced security",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
  annual: [
    {
      tier: "Starter",
      price: "$79",
      billingCycle: "per location/month (billed annually)",
      description: "Perfect for single-location independent gyms",
      features: [
        "Core platform (unlimited members)",
        "Revenue Analytics module",
        "Member mobile app",
        "Email support",
        "Standard integrations",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      tier: "Growth",
      price: "$63",
      billingCycle: "per location/month (billed annually)",
      description: "For gyms with 2-5 locations",
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "Multi-location dashboard",
        "Cross-location analytics",
        "Priority support",
        "Advanced integrations",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      billingCycle: "6+ locations",
      description: "For multi-location fitness operators",
      features: [
        "Everything in Growth, plus:",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "White-label options",
        "Advanced security",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
};

const modules = [
  {
    name: "Retail & POS",
    price: "$49/mo per location",
    description: "Full point-of-sale system with inventory management",
  },
  {
    name: "Equipment Management",
    price: "$39/mo per location",
    description: "QR codes, maintenance tracking, member reporting",
  },
  {
    name: "Trainer Hub",
    price: "$59/mo per location",
    description: "Client management, program builder, AI workout generator",
  },
  {
    name: "Advanced Class Management",
    price: "$49/mo per location",
    description: "Waitlists, instructor analytics, booking automation",
  },
];

const comparisonFeatures = [
  {
    name: "Base Price (1 location)",
    gymwyse: "$99/mo",
    mindbody: "$129/mo",
    zenplanner: "$117/mo",
    glofox: "$110/mo",
  },
  {
    name: "Revenue Analytics",
    gymwyse: true,
    mindbody: false,
    zenplanner: "Limited",
    glofox: false,
  },
  {
    name: "Multi-Location Pricing",
    gymwyse: "$79/location",
    mindbody: "$129/location",
    zenplanner: "$117/location",
    glofox: "$110/location",
  },
  {
    name: "Churn Prediction AI",
    gymwyse: true,
    mindbody: false,
    zenplanner: false,
    glofox: false,
  },
  {
    name: "Member Mobile App",
    gymwyse: "Included",
    mindbody: "+$50/mo",
    zenplanner: "+$40/mo",
    glofox: "Included",
  },
  {
    name: "Setup Fees",
    gymwyse: "$0",
    mindbody: "$500+",
    zenplanner: "$300+",
    glofox: "$250+",
  },
  {
    name: "Contract Length",
    gymwyse: "Monthly",
    mindbody: "12 months",
    zenplanner: "12 months",
    glofox: "12 months",
  },
];

const faqItems = [
  {
    question: "Is there a setup fee?",
    answer:
      "No. Unlike Mindbody ($500+) or Zen Planner ($300+), we have zero setup fees. You pay only for your subscription.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. We have no long-term contracts. Cancel anytime with 30 days notice. Most competitors lock you into 12-month agreements.",
  },
  {
    question: "What happens if I add more locations?",
    answer:
      "You pay per location. 1 location = $99/mo. 2-5 locations = $79/mo each. 6+ locations = custom pricing with volume discounts.",
  },
  {
    question: "Do I need all the modules?",
    answer:
      "No. Start with the core platform + Revenue Analytics ($99/mo). Add modules as you need them. Average gym adds 1-2 modules.",
  },
  {
    question: "How does the 14-day trial work?",
    answer:
      "Full access to all features for 14 days. No credit card required. After trial, choose your plan or cancel with no charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Credit card, ACH (US), Direct Debit (UK), BPAY (Australia). All payments processed securely via Stripe.",
  },
];

export function PricingHero() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      {/* Pricing Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Transparent Pricing
            </h1>
            <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No surprises. Pay for what you need. Add modules
              as you grow.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-1 inline-flex">
              <button
                onClick={() => setBilling("monthly")}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer",
                  billing === "monthly"
                    ? "bg-electric-green text-deep-space"
                    : "text-cool-gray hover:text-pure-white"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer",
                  billing === "annual"
                    ? "bg-electric-green text-deep-space"
                    : "text-cool-gray hover:text-pure-white"
                )}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers[billing].map((tier) => (
              <PricingCard key={tier.tier} {...tier} />
            ))}
          </div>

          {/* Module add-ons */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
              Add-On Modules
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {modules.map((module) => (
                <div key={module.name} className="glass-card p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-pure-white">
                      {module.name}
                    </h3>
                    <span className="text-sm font-medium text-electric-green whitespace-nowrap ml-4">
                      {module.price}
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray">{module.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
              How We Compare
            </h2>
            <div className="glass-card p-6 md:p-8 max-w-5xl mx-auto">
              <ComparisonTable features={comparisonFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
              Pricing FAQ
            </h2>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
