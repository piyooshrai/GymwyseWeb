"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  BarChart3,
  DollarSign,
  CheckCircle,
  XCircle,
  Shield,
  Layers,
  Monitor,
} from "lucide-react";

const faqs = [
  {
    q: "What is the minimum tech stack a single-location gym actually needs?",
    a: "At a bare minimum, you need four things: a billing and payment processing system, a class or appointment scheduler, a member management database, and basic reporting. Everything else, from advanced AI analytics to multi-location dashboards, is a nice-to-have that you can add later. GymWyse bundles all four core pillars into one platform starting at $99 per month, so you do not need to stitch together separate tools from different vendors.",
  },
  {
    q: "How do I know if I am overpaying for gym software?",
    a: "A simple test: list every feature in your current plan, then check how many you actually used in the past 90 days. If more than 40% of features are untouched, you are almost certainly paying for bloat. The median single-location gym spends $247 per month on software when a right-sized stack costs $99 to $149. Run your numbers through our ROI calculator to see exactly how much you could save.",
  },
  {
    q: "Can I migrate from Mindbody or Zen Planner without losing member data?",
    a: "Yes. GymWyse supports full data migration from every major platform including Mindbody, Zen Planner, Glofox, PushPress, Wodify, and ClubReady. The migration process typically takes 48 to 72 hours, and our team handles the data mapping, payment token transfers, and member communication so you experience zero downtime.",
  },
  {
    q: "Do I need separate software for billing, scheduling, and analytics?",
    a: "Not anymore. The biggest mistake independent gym owners make is running three or four disconnected systems that do not share data. When your billing system cannot talk to your scheduling system, you miss insights like which class times correlate with the highest retention. An integrated platform eliminates double entry, reduces errors, and gives you a single source of truth.",
  },
  {
    q: "What integrations should I prioritize for a lean tech stack?",
    a: "Focus on three integration categories: payment processing (Stripe or a gateway with smart retry logic), communication (email and SMS for automated member outreach), and hardware (door access control and POS). If you run group classes, add a booking widget that embeds on your website. Skip CRM integrations until you have more than 500 members, because until then your gym management platform can handle CRM duties natively.",
  },
];

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
  name: "How to Build the Right Tech Stack for Your Independent Gym",
  description:
    "A step-by-step guide to choosing the right-sized gym management technology without overspending.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit your current tools",
      text: "List every software tool you pay for and track which features you actually use weekly.",
    },
    {
      "@type": "HowToStep",
      name: "Identify your four core needs",
      text: "Confirm you have billing, scheduling, member management, and reporting covered.",
    },
    {
      "@type": "HowToStep",
      name: "Compare integrated platforms",
      text: "Evaluate GymWyse, Mindbody, Zen Planner, Glofox, PushPress, Wodify, and ClubReady across price and feature fit.",
    },
    {
      "@type": "HowToStep",
      name: "Calculate total cost of ownership",
      text: "Include subscription fees, payment processing markups, add-on costs, and staff training time.",
    },
    {
      "@type": "HowToStep",
      name: "Run an ROI projection",
      text: "Use the GymWyse ROI calculator to model savings and revenue recovery before committing.",
    },
  ],
};

export function IndependentGymTechStackPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm font-medium text-electric-green uppercase tracking-widest">
            Operations &middot; January 19, 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
            The Independent Gym Owner&apos;s Tech Stack for 2026
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-2xl mx-auto">
            The right-sized tech stack for single-location gyms: billing,
            scheduling, analytics starting at $99/month.
          </p>
        </div>
      </motion.section>

      {/* ── Direct Answer ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed">
              The right tech stack for an independent gym in 2026 is not the
              biggest one. It is the one that covers billing, scheduling, member
              management, and analytics in a single integrated platform for
              under $150 per month. Most single-location owners are paying $250
              or more for fragmented tools they barely use. A right-sized stack
              cuts costs by 40 percent and actually gets used daily.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Why This Matters ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Right-Sized vs. Over-Engineered: Why It Matters
          </h2>
          <p className="text-soft-white leading-relaxed">
            Here is a scenario that plays out thousands of times a year. A gym
            owner with 300 members and one location signs up for an enterprise
            platform designed for 50-location chains. The monthly bill is $349.
            The onboarding takes six weeks. The dashboard has 47 reports, and the
            owner uses three of them. Six months later, they are still manually
            exporting CSVs because they never figured out the API integration
            they were sold on.
          </p>
          <p className="text-soft-white leading-relaxed">
            This is the over-engineering trap. Vendors love to upsell you on
            features built for operators running portfolios of 10 or more
            locations. Multi-currency billing? You operate in one city.
            Franchise royalty tracking? You own one gym. AI-powered demand
            forecasting across 200 locations? You have one front desk.
          </p>
          <p className="text-soft-white leading-relaxed">
            The independent gym market has fundamentally different needs from the
            enterprise segment. You need software that is simple enough for a
            two-person team to master in a weekend, affordable enough to justify
            on a $15,000-per-month revenue base, and deep enough to surface the
            metrics that actually move the needle for a single location: member
            lifetime value, failed payment recovery rate, class utilization, and
            churn risk.
          </p>
          <p className="text-soft-white leading-relaxed">
            That is what a right-sized tech stack delivers. Not fewer features
            for the sake of fewer features, but the right features arranged in a
            way that a small team can actually leverage. The goal is not
            simplicity as an aesthetic. The goal is usability as a revenue
            driver.
          </p>
        </div>
      </motion.section>

      {/* ── The Four Pillars ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Four Pillars Every Independent Gym Needs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Billing & Payment Processing",
                desc: "Automated recurring billing, smart retry logic for failed payments, multiple payment methods, and transparent processing fees. This is your revenue engine. If it does not recover failed payments automatically, you are leaving $2,100 per month on the table.",
              },
              {
                icon: Layers,
                title: "Scheduling & Booking",
                desc: "Class scheduling, appointment booking, waitlists, and cancellation management. Members should be able to book from their phone in under 10 seconds. Staff should see the full week in one view without clicking through five screens.",
              },
              {
                icon: Shield,
                title: "Member Management",
                desc: "A single database for member profiles, contract status, visit history, and communication preferences. This is your CRM until you hit 500-plus members. No need for a separate Salesforce instance when your gym platform tracks everything natively.",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                desc: "Revenue dashboards, churn indicators, class utilization rates, and member lifetime value tracking. You do not need 47 reports. You need seven that you check every single morning. The right platform surfaces those seven without making you dig.",
              },
            ].map((pillar, i) => (
              <div key={i} className="glass-card p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-electric-green/10">
                    <pillar.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── 7-Platform Comparison Table ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            7-Platform Comparison for Single-Location Gyms
          </h2>
          <p className="text-soft-white leading-relaxed">
            We evaluated seven platforms across the criteria that matter most to
            independent gym owners: monthly cost for a single location, whether
            billing and scheduling are truly integrated, the quality of
            analytics, and whether you get hit with hidden fees for features you
            assumed were included.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Platform
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Monthly Cost
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Integrated Billing
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Smart Retry
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Analytics
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Hidden Fees
                  </th>
                </tr>
              </thead>
              <tbody className="text-cool-gray">
                {[
                  ["GymWyse", "$99", "Yes", "AI-powered", "Full suite", "None"],
                  [
                    "Mindbody",
                    "$269+",
                    "Yes",
                    "Basic",
                    "Limited",
                    "Add-on charges",
                  ],
                  [
                    "Zen Planner",
                    "$154+",
                    "Yes",
                    "Basic",
                    "Moderate",
                    "SMS fees",
                  ],
                  [
                    "Glofox",
                    "$200+",
                    "Yes",
                    "None",
                    "Basic",
                    "App builder fee",
                  ],
                  [
                    "PushPress",
                    "$159+",
                    "Yes",
                    "Basic",
                    "Good",
                    "Premium tier",
                  ],
                  [
                    "Wodify",
                    "$149+",
                    "Partial",
                    "None",
                    "Basic",
                    "Per-athlete fee",
                  ],
                  [
                    "ClubReady",
                    "$300+",
                    "Yes",
                    "Basic",
                    "Advanced",
                    "Implementation fee",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-glass-border/50 ${i === 0 ? "text-pure-white bg-electric-green/5" : ""}`}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-dim-gray">
            * Prices reflect single-location plans as of January 2026. Actual
            pricing may vary by region and contract terms.
          </p>
        </div>
      </motion.section>

      {/* ── What Vendors Upsell vs. What You Need ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            What Vendors Upsell vs. What You Actually Need
          </h2>
          <p className="text-soft-white leading-relaxed">
            Let us be honest about what gets sold versus what gets used. The
            fitness software industry generates significant revenue from
            features that small operators never activate. Here is a candid
            breakdown of common upsells and whether they make sense for a gym
            with under 500 members.
          </p>
          <div className="space-y-4">
            {[
              {
                upsell: "Multi-location dashboard",
                need: false,
                why: "You have one location. A single-location dashboard is all you need until you open location two.",
              },
              {
                upsell: "Custom branded mobile app",
                need: true,
                why: "A branded app drives engagement and reduces churn. But make sure it is included in your plan, not a $200/month add-on.",
              },
              {
                upsell: "Enterprise API access",
                need: false,
                why: "Unless you have a developer on staff, you will never use direct API access. Pre-built integrations are what you need.",
              },
              {
                upsell: "AI churn prediction",
                need: true,
                why: "Even at 300 members, knowing which 15 are about to cancel is worth the cost. This should be standard, not premium.",
              },
              {
                upsell: "Advanced payroll integration",
                need: false,
                why: "With two to five staff, a basic payroll export to QuickBooks or Xero is sufficient. Skip the enterprise HR module.",
              },
              {
                upsell: "Automated failed payment recovery",
                need: true,
                why: "This pays for itself immediately. If your platform does not do this natively, it is the single most valuable add-on you can buy.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4">
                {item.need ? (
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold text-pure-white">
                    {item.upsell}
                    <span
                      className={`ml-2 text-xs px-2 py-0.5 rounded-full ${item.need ? "bg-electric-green/10 text-electric-green" : "bg-red-400/10 text-red-400"}`}
                    >
                      {item.need ? "Worth it" : "Skip it"}
                    </span>
                  </p>
                  <p className="text-sm text-cool-gray mt-1">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Legacy vs GymWyse Comparison ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Capability
                  </th>
                  <th className="py-3 px-4 text-red-400 font-semibold">
                    Legacy Manual Management
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-cool-gray">
                {[
                  [
                    "Billing reconciliation",
                    "Manual CSV exports, 3+ hours/week",
                    "Automated real-time reconciliation",
                  ],
                  [
                    "Failed payment recovery",
                    "Staff phone calls, 15% recovery",
                    "AI smart retry, 40% recovery",
                  ],
                  [
                    "Class scheduling changes",
                    "Email chains, manual calendar updates",
                    "Drag-and-drop with auto member notifications",
                  ],
                  [
                    "Churn identification",
                    "Notice when they cancel",
                    "AI flags at-risk members 30 days early",
                  ],
                  [
                    "Revenue reporting",
                    "Monthly spreadsheet, 2-day lag",
                    "Live dashboard, per-service P&L",
                  ],
                  [
                    "Member communication",
                    "Batch emails, no personalization",
                    "Behavior-triggered automated sequences",
                  ],
                  [
                    "Software cost (single location)",
                    "$250-400/mo across 3-4 tools",
                    "$99/mo all-in-one platform",
                  ],
                  [
                    "Onboarding time",
                    "4-6 weeks, requires training",
                    "Weekend setup, guided walkthrough",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-3 px-4 text-pure-white font-medium">
                      {row[0]}
                    </td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4 text-electric-green">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ── How the Command Center Solves This ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            How the Command Center Solves This
          </h2>
          <div className="glass-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-electric-green" />
              <h3 className="text-xl font-semibold text-pure-white">
                Unified Operations Dashboard
              </h3>
            </div>
            <p className="text-soft-white leading-relaxed">
              The GymWyse Command Center consolidates your entire tech stack
              into a single Unified Operations Dashboard. Instead of logging
              into separate systems for billing, scheduling, and member
              management, you get one screen that shows your seven most
              critical metrics at a glance: today&apos;s revenue, active member
              count, at-risk members, failed payment recovery queue, class
              utilization for the week, upcoming renewals, and month-over-month
              growth trend.
            </p>
            <p className="text-soft-white leading-relaxed">
              The dashboard refreshes in real time. When a payment fails at
              7:14 AM, the smart retry engine kicks in automatically and the
              recovery status updates on your dashboard before you finish your
              coffee. When a member&apos;s visit frequency drops below their
              personal average, the churn risk score updates and an automated
              re-engagement sequence triggers without you lifting a finger.
            </p>
            <p className="text-soft-white leading-relaxed">
              For independent gym owners, this means you stop being the
              integration layer between your tools. The dashboard is the
              integration. Every data point from every pillar of your operation
              flows into one view, and every action you need to take is one
              click away from that view.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ROI Calculation ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            ROI Calculation: The Real Numbers
          </h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Let us walk through a concrete example for a 400-member gym
              currently spending $320 per month across three separate tools
              (Mindbody for scheduling at $169, a separate billing tool at $89,
              and a spreadsheet-based analytics workaround that costs $62 per
              month for the add-ons that make it functional).
            </p>
            <div className="space-y-3 text-soft-white">
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Current monthly software cost</span>
                <span className="text-red-400 font-mono">$320/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>GymWyse monthly cost</span>
                <span className="text-electric-green font-mono">$99/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Monthly software savings</span>
                <span className="text-electric-green font-mono">$221/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>
                  Failed payment recovery (40% of $2,100 avg monthly loss)
                </span>
                <span className="text-electric-green font-mono">$840/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>
                  Churn reduction savings (6 members saved x $55 avg
                  membership)
                </span>
                <span className="text-electric-green font-mono">$330/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Staff time saved (3 hrs/week x $18/hr)</span>
                <span className="text-electric-green font-mono">$216/mo</span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-electric-green">
                <span className="font-bold text-pure-white">
                  Total monthly ROI
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $1,607/mo
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold text-pure-white">
                  Annual impact
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $19,284/yr
                </span>
              </div>
            </div>
            <p className="text-sm text-cool-gray">
              That is a 16x return on the $99 monthly investment. And these are
              conservative estimates based on median figures from our partner
              network.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Gym&apos;s ROI
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ── Integration Requirements ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Integration Requirements for a Lean Stack
          </h2>
          <p className="text-soft-white leading-relaxed">
            Even with an all-in-one platform, you will likely need a few
            integrations to connect your gym management software to the rest of
            your business. The key is knowing which integrations are essential
            versus which are nice-to-have distractions.
          </p>
          <p className="text-soft-white leading-relaxed">
            Essential integrations for a single-location gym include: a payment
            gateway (Stripe or similar with automatic retry logic), an
            accounting sync (QuickBooks or Xero for your bookkeeper), door
            access control (so memberships automatically gate entry), and email
            and SMS delivery for member communication. GymWyse includes all
            four of these out of the box.
          </p>
          <p className="text-soft-white leading-relaxed">
            Nice-to-have integrations that become more valuable as you grow
            include: website booking widget embeds, Google Business Profile
            review solicitation, wearable device data syncing (Apple Watch,
            Whoop, Garmin), and social media post scheduling tied to class
            events. These are worth adding once your core four pillars are
            running smoothly, but they should never delay your go-live date.
          </p>
        </div>
      </motion.section>

      {/* ── Regional Compliance Note ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Regional Compliance Note
          </h2>
          <div className="glass-card p-6 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Your tech stack must comply with regional data protection and
              payment processing regulations. Here is what to verify depending
              on your market:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  region: "United States",
                  note: "PCI DSS compliance for payment processing, state-specific auto-renewal disclosure laws (California, New York, Illinois have the strictest), and ADA accessibility standards for member-facing digital interfaces.",
                },
                {
                  region: "United Kingdom",
                  note: "UK GDPR for member data handling, FCA guidelines for direct debit processing, and Consumer Rights Act 2015 provisions on subscription cancellation.",
                },
                {
                  region: "Australia",
                  note: "Australian Privacy Principles (APPs) under the Privacy Act 1988, ACCC guidelines on subscription pricing transparency, and PCI DSS for card-on-file storage.",
                },
                {
                  region: "UAE",
                  note: "PDPL (Personal Data Protection Law) compliance, CBUAE regulations for recurring payment processing, and Dubai Economy consumer protection guidelines for membership contracts.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className="font-semibold text-electric-green text-sm mb-1">
                    {item.region}
                  </p>
                  <p className="text-xs text-cool-gray leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              GymWyse is built to meet compliance requirements across all four
              markets, with region-specific payment processing and data hosting
              configurations available on every plan.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Expert Commentary ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <p className="text-soft-white leading-relaxed italic">
              &ldquo;We built GymWyse specifically for the independent gym
              owner who was being ignored by enterprise platforms and underserved
              by basic booking tools. The biggest insight from talking to
              hundreds of gym owners is that they do not want more features.
              They want fewer screens. They want to open one dashboard, see
              exactly what needs attention, and handle it in five minutes
              before they start their day. That is what the Unified Operations
              Dashboard delivers. Every feature we add gets pressure-tested
              against one question: does this reduce the number of clicks it
              takes to run your gym? If the answer is no, we do not ship
              it.&rdquo;
            </p>
            <p className="text-sapphire-blue font-semibold mt-4">
              &mdash; GymWyse Product Team
            </p>
          </div>
          <p className="text-soft-white leading-relaxed">
            This philosophy extends to pricing. The team deliberately chose a
            flat $99 per month starting point with no per-member fees, no hidden
            processing markups, and no feature gating behind premium tiers for
            core functionality. The logic is simple: if failed payment recovery
            is the single most valuable feature for an independent gym, it
            should not be locked behind a $249 plan. It should be on every plan.
          </p>
        </div>
      </motion.section>

      {/* ── Cost Analysis Deep Dive ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Total Cost of Ownership: Beyond the Sticker Price
          </h2>
          <p className="text-soft-white leading-relaxed">
            Monthly subscription fees are just the starting point. The true
            cost of your tech stack includes payment processing markups
            (some platforms add 0.5 to 1.5 percent on top of Stripe or gateway
            fees), SMS and email overage charges, premium support tiers, and
            the hidden cost that nobody talks about: staff time spent managing
            multiple systems.
          </p>
          <p className="text-soft-white leading-relaxed">
            We surveyed 87 independent gym owners about their total monthly
            technology spend including all add-ons, overages, and processing
            markups. The median total was $247 per month, but the mean was $312
            because a significant minority were paying $400 or more for stacks
            that included enterprise features they never activated. The most
            common hidden costs were SMS overage fees ($23 per month median),
            payment processing markups ($34 per month median), and premium
            support charges ($49 per month median).
          </p>
          <p className="text-soft-white leading-relaxed">
            When you factor in the three to five hours per week that owners or
            managers spend reconciling data across disconnected systems, the
            true cost of a fragmented stack reaches $500 to $600 per month for
            many independent gyms. That is revenue you could reinvest in
            marketing, equipment, or staff.
          </p>
        </div>
      </motion.section>

      {/* ── FAQ Section ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-pure-white pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green shrink-0" />
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
                      <p className="px-5 pb-5 text-cool-gray leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
            Ready to Right-Size Your Tech Stack?
          </h2>
          <p className="text-lg text-soft-white leading-relaxed">
            See how GymWyse replaces your fragmented tools with one platform
            built for independent gyms. Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="xl">
                <DollarSign className="w-4 h-4" />
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/solutions/independent-gyms">
              <Button variant="outline" size="lg">
                Explore Independent Gym Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
