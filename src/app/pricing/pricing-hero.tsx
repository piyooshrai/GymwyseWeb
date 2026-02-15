"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/pricing-card";
import { ComparisonTable } from "@/components/comparison-table";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Globe,
  Zap,
  Calculator,
} from "lucide-react";

/* ─────────────── Pricing Tier Data ─────────────── */

const tiers = {
  monthly: [
    {
      tier: "Starter",
      price: "$99",
      billingCycle: "/month",
      description: "For single-location gyms ready to grow smarter",
      features: [
        "Unlimited members — no per-member fees",
        "Class scheduling and booking management",
        "Billing and payment processing",
        "Member check-in (QR, barcode, or PIN)",
        "Branded member mobile app",
        "Revenue analytics dashboard",
        "AI-powered churn prediction",
        "Automated failed payment recovery",
        "Equipment QR codes and tracking",
        "Email and live chat support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      tier: "Growth",
      price: "$79",
      billingCycle: "/month per location",
      description: "For gyms with 2-5 locations scaling fast",
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "Multi-location management dashboard",
        "Cross-location reporting and analytics",
        "Priority email, chat, and phone support",
        "Staff permission and role management",
        "Location-level P&L statements",
        "Centralized member database",
        "Inter-location member transfers",
        "Consolidated billing across locations",
        "Custom branding per location",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      billingCycle: "for 6+ locations",
      description: "For multi-location fitness operators who need full control",
      features: [
        "Everything in Growth, plus:",
        "Dedicated account manager",
        "White-label mobile app with your branding",
        "Custom integrations and API access",
        "SLA guarantee with 99.9% uptime",
        "Onsite training and implementation",
        "Advanced security and SSO",
        "Custom reporting and data exports",
        "Volume pricing discounts",
        "Quarterly business reviews",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
  annual: [
    {
      tier: "Starter",
      price: "$79",
      billingCycle: "/month (billed annually)",
      description: "For single-location gyms ready to grow smarter",
      features: [
        "Unlimited members — no per-member fees",
        "Class scheduling and booking management",
        "Billing and payment processing",
        "Member check-in (QR, barcode, or PIN)",
        "Branded member mobile app",
        "Revenue analytics dashboard",
        "AI-powered churn prediction",
        "Automated failed payment recovery",
        "Equipment QR codes and tracking",
        "Email and live chat support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      tier: "Growth",
      price: "$63",
      billingCycle: "/month per location (billed annually)",
      description: "For gyms with 2-5 locations scaling fast",
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "Multi-location management dashboard",
        "Cross-location reporting and analytics",
        "Priority email, chat, and phone support",
        "Staff permission and role management",
        "Location-level P&L statements",
        "Centralized member database",
        "Inter-location member transfers",
        "Consolidated billing across locations",
        "Custom branding per location",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      billingCycle: "for 6+ locations",
      description: "For multi-location fitness operators who need full control",
      features: [
        "Everything in Growth, plus:",
        "Dedicated account manager",
        "White-label mobile app with your branding",
        "Custom integrations and API access",
        "SLA guarantee with 99.9% uptime",
        "Onsite training and implementation",
        "Advanced security and SSO",
        "Custom reporting and data exports",
        "Volume pricing discounts",
        "Quarterly business reviews",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
};

/* ─────────────── Regional Pricing ─────────────── */

const regionalPricing = [
  { region: "United States", currency: "USD", starter: "$99", growth: "$79", flag: "US" },
  { region: "United Kingdom", currency: "GBP", starter: "\u00A379", growth: "\u00A363", flag: "GB" },
  { region: "Australia", currency: "AUD", starter: "AU$129", growth: "AU$103", flag: "AU" },
  { region: "United Arab Emirates", currency: "AED", starter: "AED 365", growth: "AED 289", flag: "AE" },
];

/* ─────────────── All Plans Include ─────────────── */

const allPlansInclude = [
  "$0 setup fee — always",
  "Month-to-month contracts, cancel anytime",
  "14-day free trial with full access",
  "Free data migration from any platform",
  "Unlimited members with no per-member fees",
  "Real-time revenue analytics dashboard",
  "AI-powered churn prediction engine",
  "Branded member mobile app included",
  "Automated failed payment recovery",
  "99.9% platform uptime guarantee",
];

/* ─────────────── Comparison Table ─────────────── */

const comparisonFeatures = [
  {
    name: "Monthly Cost (1 Location)",
    gymwyse: "$99/mo",
    mindbody: "$129/mo",
    zenplanner: "$117/mo",
    glofox: "$110/mo",
  },
  {
    name: "Setup Fee",
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
  {
    name: "Unlimited Members",
    gymwyse: true,
    mindbody: "Limited",
    zenplanner: true,
    glofox: true,
  },
  {
    name: "Revenue Analytics",
    gymwyse: true,
    mindbody: false,
    zenplanner: "Limited",
    glofox: false,
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
    name: "Failed Payment Recovery",
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
    name: "Free Data Migration",
    gymwyse: true,
    mindbody: false,
    zenplanner: false,
    glofox: "Limited",
  },
];

/* ─────────────── FAQ Data ─────────────── */

const faqItems = [
  {
    question: "Is there a setup fee?",
    answer:
      "No. GymWyse has zero setup fees, zero onboarding fees, and zero hidden charges. You pay only your monthly subscription. Compare that to Mindbody ($500+ setup), Zen Planner ($300+ setup), or Glofox ($250+ setup). We believe you should invest in your gym, not in getting started with software.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. All GymWyse plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice and you will not be charged again. Most competitors lock you into 12-month agreements with early termination fees. We earn your business every single month.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers (US), Direct Debit (UK), and BPAY (Australia). All payments are processed securely via Stripe with PCI-DSS Level 1 compliance. Invoices are generated automatically each billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan comes with a 14-day free trial with full access to all features. No credit card required to start. After your trial ends, simply choose a plan to continue, or walk away with no charges. We also offer a free data migration during your trial so you can test with your real gym data.",
  },
  {
    question: "Do I need to pay extra for the member app?",
    answer:
      "No. The branded member mobile app is included in every plan at no additional cost. Your members get class booking, check-in, workout tracking, and direct messaging — all under your gym's brand. Other platforms charge $40 to $50 per month extra for a member-facing app.",
  },
  {
    question: "What about data migration costs?",
    answer:
      "Data migration is completely free on all plans. Our team handles the full migration from your current platform — member records, billing history, class schedules, and payment methods. The average migration takes 3 to 5 business days with zero downtime for your gym. Learn more on our migration page.",
  },
  {
    question: "Are there any per-member fees?",
    answer:
      "Absolutely not. GymWyse supports unlimited members on every plan. Whether you have 50 members or 5,000, you pay the same flat monthly rate. We never charge per-member fees, per-transaction fees, or revenue-sharing percentages. Your growth should not cost you more in software.",
  },
  {
    question: "Do you offer volume discounts for multiple locations?",
    answer:
      "Yes. Our Growth plan already offers a lower per-location rate ($79/month versus $99/month for Starter). For 6 or more locations, our Enterprise plan includes custom volume pricing that decreases further as you scale. Contact our sales team for a personalized quote based on your portfolio size.",
  },
];

/* ─────────────── Component ─────────────── */

export function PricingHero() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* ── Hero Section ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Gym Management Software Pricing
              <br />
              <span className="text-electric-green">
                Simple, Transparent, No Contracts
              </span>
            </h1>
            <p className="text-lg md:text-xl text-soft-white max-w-3xl mx-auto leading-relaxed">
              GymWyse gym management software starts at just $99 per month with
              no setup fees, no long-term contracts, and no per-member charges.
              Every plan includes unlimited members, revenue analytics, churn
              prediction, a branded member app, and automated payment recovery.
              Pay only for what you need and scale as you grow.
            </p>
          </motion.div>

          {/* ── Billing Toggle ── */}
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

          {/* ── Pricing Tiers ── */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers[billing].map((tier) => (
              <PricingCard key={tier.tier} {...tier} />
            ))}
          </div>

          {/* ── Regional Pricing ── */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-2 text-electric-green text-sm font-medium tracking-wider uppercase">
                <Globe className="w-4 h-4" />
                <span>Regional Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                Local Pricing for Your Region
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto leading-relaxed">
                We offer localized pricing so you pay a fair rate no matter
                where your gym operates. All prices are for the Starter plan
                on monthly billing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {regionalPricing.map((region) => (
                <motion.div
                  key={region.region}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-3">{region.flag === "US" ? "\uD83C\uDDFA\uD83C\uDDF8" : region.flag === "GB" ? "\uD83C\uDDEC\uD83C\uDDE7" : region.flag === "AU" ? "\uD83C\uDDE6\uD83C\uDDFA" : "\uD83C\uDDE6\uD83C\uDDEA"}</div>
                  <h3 className="text-base font-semibold text-pure-white mb-1">
                    {region.region}
                  </h3>
                  <div className="text-2xl font-bold text-electric-green font-mono">
                    {region.starter}
                  </div>
                  <div className="text-xs text-dim-gray mt-1">
                    Starter / month
                  </div>
                  <div className="text-sm text-cool-gray mt-2">
                    Growth: {region.growth}/mo per location
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── All Plans Include ── */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-2 text-electric-green text-sm font-medium tracking-wider uppercase">
                <Zap className="w-4 h-4" />
                <span>Included in Every Plan</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                All Plans Include These Features
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto leading-relaxed">
                No matter which plan you choose, you get a complete gym
                management platform with every feature you need to run, grow,
                and optimize your fitness business from day one.
              </p>
            </div>

            <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {allPlansInclude.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                    <span className="text-sm text-soft-white leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Comparison Table ── */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                GymWyse vs. the Competition
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto leading-relaxed">
                See how GymWyse Starter compares to Mindbody Essentials, Zen
                Planner, and Glofox on price, features, and flexibility. We
                include more in our base plan so you never pay extra for
                essentials like a member app or churn analytics.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8 max-w-5xl mx-auto">
              <ComparisonTable features={comparisonFeatures} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                Pricing FAQ
              </h2>
              <p className="text-base text-soft-white max-w-xl mx-auto leading-relaxed">
                Answers to the most common questions about GymWyse pricing,
                billing, trials, and migration. Still have questions? Reach out
                to our team anytime.
              </p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Ready to Modernize Your Gym?
            </h2>
            <p className="text-base text-soft-white mb-8 max-w-xl mx-auto leading-relaxed">
              Join 200+ gyms that switched to GymWyse for transparent pricing,
              powerful analytics, and zero lock-in contracts. Start your 14-day
              free trial today or calculate your potential savings with our ROI
              calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Your 14-Day Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  <Calculator className="mr-2 w-4 h-4" />
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
