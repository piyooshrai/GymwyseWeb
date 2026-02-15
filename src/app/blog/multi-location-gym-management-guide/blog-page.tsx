"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Building2, BarChart3, Users, DollarSign, MapPin, CreditCard, TrendingUp, Shield, Layers, Clock, Globe, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "How many locations can GymWyse manage simultaneously?",
    a: "GymWyse has no hard limit on the number of locations. Our largest customer currently manages 47 locations across three countries from a single dashboard. The platform is architected for multi-tenancy at scale, with location-level permissions, regional groupings, and portfolio-wide roll-ups. Whether you have 2 locations or 200, the experience remains fast and responsive.",
  },
  {
    q: "Can staff members have different permissions at different locations?",
    a: "Absolutely. GymWyse supports granular role-based access control (RBAC) at the location level. A regional manager might have full access to 5 locations in their territory, read-only access to others, and no access to financial data for locations outside their purview. You can create custom roles or use our pre-built templates for common positions like Front Desk, Trainer, Location Manager, and Regional Director.",
  },
  {
    q: "How does cross-location member access work?",
    a: "Members can be granted access to multiple locations through flexible membership tiers. A single-site member pays their base rate and visits their home gym. A multi-site member can check in at any location in your network using the same credentials, QR code, or app. The system automatically tracks visit distribution across locations for accurate revenue attribution and capacity planning.",
  },
  {
    q: "What happens if one location loses internet connectivity?",
    a: "GymWyse includes offline-capable check-in at each location. Member data is cached locally, so door access and check-ins continue working even during connectivity outages. When the connection is restored, all offline transactions sync automatically. Financial transactions queue locally and process once connectivity returns, with conflict resolution built in.",
  },
  {
    q: "How long does it take to onboard a new location onto GymWyse?",
    a: "A new location can be fully operational on GymWyse within 5-7 business days. If you are already running GymWyse at other locations, the process is faster -- typically 2-3 days -- because your org-level settings, membership templates, class structures, and reporting configurations can be cloned. Our onboarding team handles data migration, hardware setup, and staff training as part of the standard implementation.",
  },
];

const pillars = [
  { icon: BarChart3, title: "Unified Dashboard & KPIs", desc: "Stop toggling between tabs. A single portfolio view shows revenue, member count, churn rate, class utilization, and staff performance across every location. Drill down from portfolio to region to location to individual member in seconds. Standardized KPIs mean you are comparing apples to apples, not wrestling with inconsistent spreadsheets from each site manager." },
  { icon: DollarSign, title: "Portfolio P&L Management", desc: "Consolidated profit and loss statements roll up automatically from each location. See which sites are profitable, which are trending downward, and which cost centers are out of line. Automated inter-location revenue sharing handles members who visit multiple sites, ensuring each location gets fair credit for the foot traffic it generates." },
  { icon: Users, title: "Staff Management Across Sites", desc: "Centralized scheduling lets you move staff between locations based on demand. Track certifications, performance reviews, and payroll across your entire workforce. When Location A is overstaffed on Tuesdays and Location B is short, the system surfaces the mismatch and suggests rebalancing -- with one-click schedule transfers that notify affected staff automatically." },
  { icon: MapPin, title: "Cross-Location Member Access", desc: "Members expect flexibility. Whether they live near one location and work near another, or they travel between cities, seamless multi-site access removes friction. Smart check-in routes each visit to the correct location record, tracks capacity in real time, and prevents overcrowding while maximizing facility utilization across your network." },
  { icon: CreditCard, title: "Centralized Billing & Revenue", desc: "One billing engine for all locations. Standardize pricing tiers, manage promotions centrally, and handle multi-currency transactions for international portfolios. Automated dunning sequences run identically at every site, and financial reconciliation rolls up into a single ledger while maintaining location-level detail for tax and regulatory reporting." },
  { icon: TrendingUp, title: "Location Performance Ranking", desc: "Weekly automated scorecards rank each location across 12 key metrics: revenue per square foot, member acquisition cost, churn rate, NPS score, class fill rate, PT attachment rate, ancillary revenue per member, staff utilization, equipment downtime, cleanliness scores, social media engagement, and complaint resolution time. Underperformers get flagged with specific improvement recommendations." },
  { icon: Globe, title: "Regional Compliance Automation", desc: "Different locations may fall under different tax jurisdictions, labor laws, and health regulations. GymWyse automatically applies the correct compliance rules based on each location's address -- from sales tax calculations to waiver requirements to data residency obligations. You configure once at the organization level and the system inherits down." },
];

export function MultiLocationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Manage Multiple Gym Locations Efficiently",
    description: "A comprehensive guide to eliminating cross-location reporting chaos with unified dashboards and centralized management.",
    step: pillars.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
      text: p.desc,
    })),
  };

  return (
    <main className="min-h-screen bg-deep-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-grid overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-sapphire-blue/10 text-sapphire-blue border border-sapphire-blue/20 mb-6">
              Published January 7, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              Multi-Location Gym Management:{" "}
              <span className="text-electric-green">From Chaos to Control</span>
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              How to eliminate 4.2 hours of weekly cross-location reporting with unified dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Answer */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-electric-green mb-4">The Short Answer</h2>
            <p className="text-lg text-soft-white leading-relaxed">
              You go from chaos to control by replacing per-location spreadsheets and siloed software with a unified management platform that aggregates every location&apos;s data into one real-time dashboard. This means standardized KPIs, consolidated P&L, centralized billing, cross-location member access, and automated performance rankings -- eliminating an average of 4.2 hours of manual weekly reporting and giving you a portfolio-wide view in seconds instead of days.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">The Multi-Location Management Problem Nobody Talks About</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Here is the dirty secret of gym expansion: the operational complexity doesn&apos;t grow linearly with each new location -- it grows exponentially. Two locations feel manageable. Three start to strain your systems. By the time you hit five, you are drowning in a sea of disconnected spreadsheets, conflicting reports, and the nagging feeling that something is slipping through the cracks at a site you have not visited this week.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The typical multi-location gym owner we talk to spends 4.2 hours every week just compiling cross-location reports. That is 218 hours a year -- more than five full work weeks -- spent copying numbers from different systems into a master spreadsheet. And by the time that spreadsheet is done, the data is already stale.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The problem is not the gym owners. They are sharp operators who built successful single-site businesses. The problem is that the tools they used to run one location were never designed for a portfolio. It is like trying to run an airline with a bus schedule -- technically possible, but you will lose planes.
          </p>
        </motion.div>
      </section>

      {/* 7 Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The 7 Pillars of <span className="text-electric-green">Multi-Location Control</span>
          </motion.h2>
          <motion.p
            className="text-cool-gray text-lg text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Each pillar addresses a specific pain point that multi-site operators face daily.
          </motion.p>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sapphire-blue/10 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-sapphire-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white mb-2">
                      <span className="text-electric-green mr-2">Pillar {i + 1}:</span>
                      {pillar.title}
                    </h3>
                    <p className="text-cool-gray leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Hook */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">How the Command Center Solves This</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-8">
            GymWyse&apos;s <span className="text-electric-green font-semibold">Multi-Location Portfolio Dashboard</span> is the single pane of glass that multi-site operators have been asking for. At the portfolio level, you see aggregated revenue, total membership, blended churn rate, and net growth trends across all locations. One click drills you into any individual site, where the full suite of single-location analytics is available with zero context-switching. The comparative view lets you benchmark locations against each other across any metric, instantly surfacing which sites are leading and which need attention. Automated weekly scorecards are emailed to location managers with their individual performance against portfolio averages, creating healthy internal competition without any manual report-building from you.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Reporting Time Saved", value: "4.2 hrs/wk", color: "text-electric-green" },
                { label: "Portfolio View", value: "Real-time", color: "text-sapphire-blue" },
                { label: "Cross-Site Metrics", value: "12 KPIs", color: "text-electric-green" },
                { label: "Onboard New Site", value: "2-3 days", color: "text-sapphire-blue" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="text-sm text-cool-gray mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
            Legacy Manual Management vs. <span className="text-electric-green">GymWyse AI Management</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Capability</th>
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Legacy Manual Management</th>
                  <th className="text-left py-4 px-4 text-electric-green font-medium">GymWyse AI Management</th>
                </tr>
              </thead>
              <tbody className="text-soft-white">
                {[
                  ["Cross-location reporting", "4.2+ hours/week compiling spreadsheets", "Real-time unified dashboard, zero manual work"],
                  ["KPI standardization", "Each location defines own metrics", "12 standardized KPIs across all sites"],
                  ["Revenue attribution", "Guesswork for multi-site members", "Automatic per-visit revenue allocation"],
                  ["Staff scheduling", "Phone calls and WhatsApp groups", "Centralized drag-and-drop with demand forecasting"],
                  ["Member experience", "Separate logins per location", "Single membership, any-location access"],
                  ["Financial consolidation", "Monthly manual roll-ups (error-prone)", "Automated real-time portfolio P&L"],
                  ["New location onboarding", "Weeks of setup and configuration", "2-3 days with cloned org settings"],
                  ["Performance benchmarking", "Anecdotal comparisons at quarterly meetings", "Automated weekly scorecards with rankings"],
                ].map(([cap, legacy, gymwyse], i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-4 px-4 font-medium">{cap}</td>
                    <td className="py-4 px-4 text-cool-gray">{legacy}</td>
                    <td className="py-4 px-4 text-electric-green">{gymwyse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ROI Calculation */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">ROI Calculation: The Math That Matters</h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-cool-gray text-lg">For a 5-location operator with an owner/GM earning $85,000/year:</p>
            <div className="space-y-3 text-soft-white">
              <p><span className="text-sapphire-blue font-semibold">Weekly reporting time saved:</span> 4.2 hours x $40.87/hr (loaded cost) = <span className="text-electric-green font-bold">$171.65/week</span></p>
              <p><span className="text-sapphire-blue font-semibold">Annual reporting savings:</span> $171.65 x 52 = <span className="text-electric-green font-bold">$8,926/year</span></p>
              <p><span className="text-sapphire-blue font-semibold">Revenue leakage caught (billing errors, missed PT, etc.):</span> avg <span className="text-electric-green font-bold">$1,200/location/year</span></p>
              <p><span className="text-sapphire-blue font-semibold">5-location leakage recovery:</span> $1,200 x 5 = <span className="text-electric-green font-bold">$6,000/year</span></p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p><span className="text-electric-green font-semibold">Total quantifiable annual savings:</span> $8,926 + $6,000 = <span className="text-electric-green font-bold">$14,926/year</span></p>
                <p className="text-cool-gray mt-2 text-base">This does not include the harder-to-quantify benefits: faster decision-making from real-time data, reduced staff turnover from better scheduling, and improved member retention from consistent cross-location experiences. Operators report total value impact of <span className="text-electric-green font-bold">$25,000-$40,000/year</span> across a 5-location portfolio.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Portfolio ROI <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Regional Compliance Note</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { region: "United States", note: "Multi-state operations must navigate varying sales tax rates, employee classification laws, and state-specific gym membership cancellation statutes. GymWyse auto-applies the correct tax jurisdiction based on each location's registered address and handles nexus calculations for multi-state revenue reporting." },
              { region: "United Kingdom", note: "Multi-site operators must ensure GDPR compliance when sharing member data across locations. Employment law varies for zero-hours contracts commonly used in fitness. GymWyse maintains location-level data processing records and supports region-specific employment contract templates." },
              { region: "Australia", note: "Multi-location operators across states face different WorkSafe requirements and Fair Work scheduling rules. The Fitness Industry Code applies nationally. GymWyse automates compliance with Australian Consumer Law cooling-off periods and state-specific workplace health and safety reporting." },
              { region: "UAE", note: "Operators spanning Dubai, Abu Dhabi, and other emirates navigate different municipal licensing requirements and free zone regulations. VAT at 5% applies federally. GymWyse supports multi-currency (AED, SAR, BHD) and complies with UAE Federal Tax Authority e-invoicing requirements." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-bold text-sapphire-blue mb-2">{item.region}</h3>
                <p className="text-cool-gray text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expert Commentary */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Insights from GymWyse Product Team</h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <p className="text-lg text-soft-white leading-relaxed italic mb-4">
              &quot;We built the Multi-Location Portfolio Dashboard after watching a 12-location operator spend every Monday morning on a 3-hour conference call where each site manager read numbers off a spreadsheet. It was painful to observe. The real tragedy was not the wasted time -- it was the decisions that were not being made because the data was always a week old and never apples-to-apples. Today, that same operator opens their GymWyse dashboard on Monday morning and has a complete portfolio picture in 30 seconds. They spend their Monday calls discussing strategy instead of data collection.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, based on multi-location operator research across 4 continents
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-soft-white pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-cool-gray leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA + Internal Links */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Ready to Turn Multi-Location Chaos Into Control?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            See the Portfolio Dashboard in action with your actual locations mapped out in a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Portfolio Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
          <div className="border-t border-glass-border pt-8">
            <p className="text-sm text-dim-gray mb-3">Related Resources</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/solutions/multi-location" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Multi-Location Solutions <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/roi-calculator" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                ROI Calculator <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/demo" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Request Demo <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
