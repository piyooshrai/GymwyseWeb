"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const regions = [
  {
    flag: "\u{1F1FA}\u{1F1F8}",
    region: "United States",
    features: ["ACH payments", "US tax compliance", "24/7 support (EST)"],
    cta: "/",
  },
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    region: "United Kingdom",
    features: ["Direct Debit (BACS)", "GDPR compliant", "UK pricing (GBP)"],
    cta: "/uk",
  },
  {
    flag: "\u{1F1E6}\u{1F1FA}",
    region: "Australia",
    features: ["BPAY & Direct Debit", "AUD pricing", "AEST support hours"],
    cta: "/au",
  },
  {
    flag: "\u{1F1E6}\u{1F1EA}",
    region: "UAE & Middle East",
    features: ["RTL Arabic support", "AED pricing", "Local data hosting"],
    cta: "/ae",
  },
];

export function RegionalTrustSection() {
  return (
    <section className="py-24 md:py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
            Global Platform. Local Expertise.
          </h2>
          <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
            Built for gyms across the US, UK, Australia, and Middle East. We
            understand regional compliance, payment methods, and market needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href={region.cta}
                className="glass-card p-6 block group hover:border-electric-green/30 transition-colors h-full"
              >
                <span className="text-4xl mb-4 block">{region.flag}</span>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {region.region}
                </h3>
                <ul className="space-y-2">
                  {region.features.map((feature, j) => (
                    <li key={j} className="text-sm text-cool-gray">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
