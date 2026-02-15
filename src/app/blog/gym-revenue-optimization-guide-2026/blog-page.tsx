"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  DollarSign,
  TrendingUp,
  CreditCard,
  Users,
  BarChart3,
  Calculator,
  Shield,
  Target,
  Zap,
  BookOpen,
  Check,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ---------------------------------------------------------------------------
   DATA
   --------------------------------------------------------------------------- */

const comparisonRows = [
  {
    feature: "Pricing Strategy",
    legacy: "Annual price increase based on gut feel and competitor guessing",
    gymwyse:
      "AI-driven price elasticity modeling that tests micro-adjustments across membership tiers in real time",
  },
  {
    feature: "Revenue Visibility",
    legacy: "Monthly P&L spreadsheet reviewed once a quarter",
    gymwyse:
      "Real-time per-service margin dashboard updated every 15 minutes with anomaly alerts",
  },
  {
    feature: "Failed Payment Recovery",
    legacy: "Staff manually calls members after a failed charge, often weeks late",
    gymwyse:
      "Automated smart-retry logic with optimized billing windows recovers 40% of failures within 72 hours",
  },
  {
    feature: "Churn Forecasting",
    legacy: "Notice cancellations only after they happen in the monthly report",
    gymwyse:
      "AI flags at-risk members 30 days before cancellation using 14 behavioral signals",
  },
  {
    feature: "MRR Tracking",
    legacy: "Vanity MRR that counts gross bookings without adjusting for churn or discounts",
    gymwyse:
      "True MRR calculation factoring net new, expansion, contraction, and churned revenue",
  },
  {
    feature: "Per-Service Profitability",
    legacy: "No visibility into which classes, PT sessions, or add-ons are actually profitable",
    gymwyse:
      "Per-service P&L attribution including instructor costs, energy, and equipment depreciation",
  },
  {
    feature: "Reporting Cadence",
    legacy: "End-of-month reports delivered 1-2 weeks after the period closes",
    gymwyse:
      "Live dashboards with daily automated email digests and threshold-based Slack alerts",
  },
];

const faqItems = [
  {
    question:
      "What is the most important revenue metric for gym owners to track?",
    answer:
      "Monthly Recurring Revenue (MRR) is the single most important metric, but only if you calculate it correctly. True MRR is not just total membership fees collected. It must account for new member revenue, expansion revenue from upgrades, contraction from downgrades, and lost revenue from cancellations. Most gym management platforms report a vanity MRR number that inflates actual performance. GymWyse calculates net MRR with all four components visible on a single dashboard, so you always know whether your revenue base is genuinely growing or just masking churn with new sign-ups.",
  },
  {
    question: "How much revenue does the average gym lose to failed payments?",
    answer:
      "Our data from 200+ gyms shows the average facility loses $2,100 per month to failed payments, which adds up to $25,200 per year. This is preventable revenue leakage. The majority of failed payments are caused by expired cards, insufficient funds on billing day, or bank-side processing errors. Smart retry logic that attempts the charge at optimized intervals, combined with automated member notifications via SMS and email, recovers 38-42% of these failures without any manual staff intervention. For a gym losing the average amount, that recovery is worth roughly $840 per month or $10,080 per year.",
  },
  {
    question:
      "How do I calculate the true cost of member churn for my gym?",
    answer:
      "The true cost of churn goes far beyond the lost monthly fee. To calculate it accurately, multiply the number of members lost per month by the average lifetime value (LTV) of a member, not just the monthly fee. If your average member stays 14 months at $79 per month, the LTV is $1,106. Losing 15 members per month means you are losing $16,590 in lifetime value every single month. Then add the customer acquisition cost (CAC) to replace each churned member, which averages $85-$120 in digital advertising alone. The total economic impact of losing 15 members per month is closer to $18,000 when you factor in replacement costs.",
  },
  {
    question: "What is per-service P&L analysis and why does it matter?",
    answer:
      "Per-service P&L analysis means calculating the true profit or loss for every individual revenue stream in your gym: each class type, personal training, retail, juice bar, locker rentals, and any other offering. Most gyms track total revenue and total costs but cannot tell you whether their 6 AM spin class makes money or loses money once you account for instructor premiums, peak-hour energy costs, equipment wear, and the opportunity cost of that room. Without this visibility, you might be investing resources into services that are actually draining your bottom line while underinvesting in your most profitable offerings.",
  },
  {
    question:
      "How quickly can a gym see ROI from implementing revenue analytics?",
    answer:
      "Most gyms see measurable ROI within 30 to 45 days of activating a revenue analytics platform. The fastest wins come from failed payment recovery, which starts generating recovered revenue within the first week as the automated retry sequences activate. The second wave of ROI comes from identifying and adjusting underperforming services, typically within the first month. The third wave, churn reduction through predictive analytics, builds over 60 to 90 days as the AI model calibrates to your specific member behavior patterns. On average, gyms on the GymWyse platform report a net positive ROI within six weeks of going live.",
  },
  {
    question:
      "Is revenue optimization different for boutique studios versus large-format gyms?",
    answer:
      "The principles are the same but the emphasis shifts. Boutique studios typically have higher per-member revenue but smaller member bases, so each cancellation has a proportionally larger impact. Their focus should be on maximizing per-visit revenue and retention. Large-format gyms with lower price points need to focus more on volume metrics and payment recovery because the sheer number of transactions creates more opportunities for revenue leakage. Both benefit equally from per-service P&L analysis, but boutique studios often discover more extreme profitability variations between services because their cost structures are more variable.",
  },
  {
    question:
      "What compliance requirements affect gym billing and payment processing?",
    answer:
      "In the US, gym billing is governed by state-specific health club laws that regulate auto-renewal disclosures, cancellation rights, and refund policies. California, New York, and Illinois have particularly strict requirements. In the UK, gyms must comply with Consumer Rights Act 2015 provisions on unfair contract terms and direct debit regulations. In Australia, the Australian Consumer Law governs automatic renewal disclosures and cooling-off periods. In the UAE, RERA-related commercial licensing and consumer protection regulations apply, along with VAT compliance at 5%. GymWyse automatically configures billing workflows to comply with regional requirements based on your gym location.",
  },
];

/* ---------------------------------------------------------------------------
   COMPONENT
   --------------------------------------------------------------------------- */

export function GymRevenueOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── JSON-LD Structured Data ── */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Optimize Gym Revenue in 2026",
            description:
              "A three-lever framework for maximizing gym revenue through pricing intelligence, member retention, and payment recovery.",
            step: [
              {
                "@type": "HowToStep",
                name: "Implement Pricing Intelligence",
                text: "Analyze per-service profitability, test micro-price adjustments using elasticity data, and set automated pricing rules based on demand patterns and utilization rates.",
              },
              {
                "@type": "HowToStep",
                name: "Reduce Member Churn",
                text: "Deploy AI-driven churn prediction to flag at-risk members 30 days early, then activate automated retention workflows including personalized outreach and targeted offers.",
              },
              {
                "@type": "HowToStep",
                name: "Recover Failed Payments",
                text: "Set up smart-retry billing logic with optimized charge windows and automated member notifications via SMS and email to recover 40% of failed payments without manual effort.",
              },
              {
                "@type": "HowToStep",
                name: "Monitor with Revenue Analytics Dashboard",
                text: "Track true MRR, per-service margins, churn cost, and recovery rates on a real-time dashboard to make data-driven decisions continuously.",
              },
            ],
          }),
        }}
      />

      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section className="bg-deep-space py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-electric-green">
              <BookOpen className="mr-1.5 inline-block h-3.5 w-3.5" />
              Revenue Guide
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              The Complete Guide to Gym Revenue Optimization in 2026
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Gym revenue optimization comes down to three levers: pricing
              intelligence, member retention, and payment recovery. Most owners
              obsess over the first while ignoring the other two, leaving an
              average of $4,300 per month on the table. This guide, backed by
              data from 200+ gyms, shows you exactly how to pull all three
              levers and compound the results.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="secondary">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-dim-gray">
              Reading time: approximately 12 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — DIRECT ANSWER
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="glass-card rounded-2xl border border-electric-green/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                  <Target className="h-5 w-5 text-electric-green" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                  The Short Answer
                </span>
              </div>
              <p className="text-lg leading-relaxed text-soft-white">
                Gym revenue optimization is the systematic process of
                maximizing every dollar your facility generates by improving
                three core levers: pricing intelligence (knowing exactly what
                each service is worth and charging accordingly), member
                retention (reducing churn that silently erodes your revenue
                base), and payment recovery (recapturing the $2,100 per month
                the average gym loses to failed transactions). When all three
                levers are working together, the compounding effect adds
                $50,000 or more to annual revenue for a typical 500-member
                gym.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — LEVER 1: PRICING INTELLIGENCE
          ================================================================ */}
      <section className="bg-deep-space py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <DollarSign className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Lever 1
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Pricing Intelligence: Stop Guessing What Your Services Are
              Worth
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Here is a scenario we see constantly: a gym owner sets their
                membership price at $79 per month because the competitor down
                the street charges $75 and they figure a four-dollar premium
                is reasonable. That is not pricing strategy. That is reactive
                positioning with zero data behind it.
              </p>
              <p>
                True pricing intelligence starts with per-service P&amp;L
                analysis. Every revenue stream in your gym, from group
                classes to personal training to retail to locker rentals,
                needs its own profit and loss calculation. When we analyzed
                P&amp;L statements from over 200 gyms on the GymWyse
                platform, 73% of owners could not identify the profit margin
                on their individual services. They knew total revenue and
                total costs, but the gap between those numbers was a black
                box.
              </p>
              <p>
                What they discovered when they ran per-service analysis was
                often surprising. A packed HIIT class that felt like a
                winner was actually running at a 4% margin once instructor
                premiums and peak-hour energy costs were factored in. A
                lightly attended yoga session with a salaried instructor and
                minimal equipment was generating a 62% margin. Without this
                visibility, you are making scheduling, staffing, and
                investment decisions in the dark.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  Per-Service P&amp;L Framework
                </h3>
                <div className="space-y-3 text-sm text-cool-gray">
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-soft-white">
                        Direct revenue:
                      </strong>{" "}
                      Membership fees, class drop-in rates, PT session
                      charges, retail sales
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-soft-white">
                        Direct costs:
                      </strong>{" "}
                      Instructor pay (per-class or hourly), equipment
                      depreciation, consumables
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-soft-white">
                        Allocated overhead:
                      </strong>{" "}
                      Rent per square foot per hour, energy costs during
                      session, insurance allocation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-soft-white">
                        Opportunity cost:
                      </strong>{" "}
                      What else could that room, that time slot, and that
                      instructor be generating?
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Once you can see per-service margins, pricing decisions
                become data-driven. You can test micro-adjustments: raising a
                class pack price by $2 and measuring whether attendance
                changes. You can identify services where demand exceeds
                supply and justify premium pricing. You can sunset
                unprofitable offerings or restructure them to reduce costs.
                Pricing intelligence is not about charging more. It is about
                charging right.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — LEVER 2: MEMBER RETENTION
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Users className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Lever 2
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Member Retention: The Revenue You Never Have to Re-Earn
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Let us put a real number on what churn costs you. The
                industry average for annual gym member churn is 30-50%. For
                a 500-member gym charging $79 per month, a 35% annual churn
                rate means you lose 175 members per year. That is $13,825 in
                monthly recurring revenue wiped out, or $165,900 over the
                year.
              </p>
              <p>
                But the damage does not stop at the lost subscription. Each
                churned member also takes their ancillary spending with them:
                PT sessions, class packs, retail purchases, juice bar spend.
                Our data shows the average gym member spends 1.4x their
                membership fee when you include all ancillary revenue. So
                that $165,900 in lost memberships is actually closer to
                $232,260 in total lost revenue.
              </p>
              <p>
                Then add the cost of replacing them. The average customer
                acquisition cost for a gym member through digital
                advertising is $89. Replacing 175 members costs $15,575 in
                marketing spend alone, not counting staff time for tours,
                onboarding, and contract processing.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Churn Cost Calculator: 500-Member Gym
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Members lost annually (35% churn)
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      175
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Lost membership revenue
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      $165,900
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Lost ancillary revenue (1.4x factor)
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      $66,360
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Replacement cost ($89/member)
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      $15,575
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-pure-white font-semibold">
                      Total annual churn cost
                    </span>
                    <span className="text-electric-green font-mono font-bold text-lg">
                      $247,835
                    </span>
                  </div>
                </div>
              </div>

              <p>
                A 10% reduction in churn, going from 35% to 25% annual
                churn, saves 50 of those 175 members. At $79 per month plus
                ancillary revenue, that is $66,360 in retained revenue per
                year. That single lever, a modest churn reduction, pays for
                your entire tech stack many times over.
              </p>
              <p>
                The key to retention is prediction. You cannot intervene with
                a member who is about to cancel if you do not know they are
                at risk. GymWyse&apos;s AI analyzes 14 behavioral signals,
                including visit frequency trends, class booking patterns, app
                engagement, and payment reliability, to flag at-risk members
                30 days before they cancel. That 30-day window is where
                retention happens: personalized outreach, targeted offers,
                and staff-driven conversations that address the specific
                reason the member is disengaging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — LEVER 3: PAYMENT RECOVERY
          ================================================================ */}
      <section className="bg-deep-space py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <CreditCard className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Lever 3
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Payment Recovery: The $25,200 You Are Leaving on the Table
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Failed payments are the silent revenue killer. They are not
                dramatic like a wave of cancellations. They do not show up
                in your member feedback surveys. They just quietly drain
                $2,100 per month from the average gym, adding up to $25,200
                per year in preventable leakage.
              </p>
              <p>
                The causes are mundane: expired credit cards, insufficient
                funds on billing day, bank-side processing errors, and card
                replacements that members forget to update. None of these are
                acts of intentional churn. The member did not decide to
                leave. Their payment simply failed, and nobody followed up
                quickly enough to fix it.
              </p>
              <p>
                This is where the distinction between voluntary and
                involuntary churn matters. Voluntary churn is a deliberate
                cancellation decision. Involuntary churn happens when a
                payment failure goes unresolved until the membership lapses.
                Our data shows involuntary churn accounts for 15-20% of all
                gym cancellations. These are members who would have stayed
                if the billing issue had been resolved.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Smart Recovery Sequence
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "Hour 1",
                      action: "Automatic retry with optimized billing window",
                      detail:
                        "The system identifies the optimal time to retry based on historical success patterns for that card type and bank.",
                    },
                    {
                      step: "Hour 4",
                      action: "SMS notification to member",
                      detail:
                        "A friendly, non-alarming text letting the member know their payment did not go through and providing a one-tap link to update their card.",
                    },
                    {
                      step: "Day 2",
                      action: "Email with update link",
                      detail:
                        "A detailed email with the amount, the issue, and a secure link to update payment details. No login required.",
                    },
                    {
                      step: "Day 4",
                      action: "Second retry attempt",
                      detail:
                        "A second automated charge attempt, often on a different day of the week when the member is more likely to have funds available.",
                    },
                    {
                      step: "Day 7",
                      action: "Staff follow-up task",
                      detail:
                        "If automated methods have not resolved the issue, a task is generated for staff to make a personal call with context about the failure reason.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-8 w-16 items-center justify-center rounded-lg bg-electric-green/10 flex-shrink-0">
                        <span className="text-xs font-semibold text-electric-green">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pure-white">
                          {item.action}
                        </p>
                        <p className="text-sm text-cool-gray mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The math on payment recovery is straightforward. If you are
                losing the average $2,100 per month and smart recovery
                sequences recapture 40% of those failures, that is $840 per
                month back in your pocket, or $10,080 per year. This is pure
                found revenue. You did not need to acquire a single new
                member to earn it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — MRR CALCULATION
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <BarChart3 className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                The Metrics
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              True MRR: The Number That Actually Matters
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Monthly Recurring Revenue is the heartbeat of your gym
                business, but most owners are measuring it wrong. Vanity MRR
                counts the total value of all active memberships. True MRR
                breaks that number into four components so you can see what
                is actually happening beneath the surface.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  True MRR Breakdown: Example Gym (500 members)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Starting MRR (month opening)
                    </span>
                    <span className="text-soft-white font-mono">
                      $39,500
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      + New member revenue (22 joins at $79 avg)
                    </span>
                    <span className="text-electric-green font-mono">
                      +$1,738
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      + Expansion revenue (8 upgrades, avg +$30)
                    </span>
                    <span className="text-electric-green font-mono">
                      +$240
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      - Contraction (5 downgrades, avg -$25)
                    </span>
                    <span className="text-red-400 font-mono">-$125</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      - Churned revenue (15 cancellations at $79 avg)
                    </span>
                    <span className="text-red-400 font-mono">-$1,185</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      - Failed payment leakage (unrecovered)
                    </span>
                    <span className="text-red-400 font-mono">-$1,260</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-pure-white font-semibold">
                      Ending True MRR
                    </span>
                    <span className="text-electric-green font-mono font-bold text-lg">
                      $38,908
                    </span>
                  </div>
                </div>
                <p className="text-xs text-dim-gray mt-4">
                  Vanity MRR would show $41,238 by counting only new joins
                  and upgrades. True MRR reveals a $592 net decline.
                </p>
              </div>

              <p>
                The gap between vanity MRR and true MRR is where revenue
                disappears. In the example above, an owner looking at vanity
                metrics would think the business grew by $1,978 that month.
                The reality is a net decline of $592. Without true MRR
                visibility, you could be celebrating growth that does not
                exist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7 — ROI CALCULATION
          ================================================================ */}
      <section className="bg-deep-space py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Calculator className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                ROI Calculation
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              The Three-Lever ROI: Real Math, Real Numbers
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Let us run the numbers for a realistic 500-member gym
                charging an average of $79 per month, with a current annual
                churn rate of 35% and average failed payment losses of
                $2,100 per month.
              </p>

              <div className="glass-card rounded-xl p-6 border border-electric-green/20">
                <h3 className="text-lg font-semibold text-pure-white mb-5">
                  Annual ROI From All Three Levers
                </h3>
                <div className="space-y-4">
                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Lever 1: Pricing Intelligence
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      Per-service P&amp;L reveals 3 underpriced services.
                      Average $4 increase across 280 affected members =
                      $1,120/mo additional revenue.
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$13,440/year
                    </p>
                  </div>

                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Lever 2: Churn Reduction (35% to 25%)
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      50 fewer cancellations per year at $79/mo membership
                      plus 1.4x ancillary factor = $5,530 saved per retained
                      member in lifetime value.
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$66,360/year in retained revenue
                    </p>
                  </div>

                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Lever 3: Payment Recovery (40% recapture)
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      $2,100/mo in failed payments x 40% recovery rate =
                      $840/mo recovered.
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$10,080/year
                    </p>
                  </div>

                  <div className="border-t border-glass-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-pure-white font-semibold">
                        Combined annual impact
                      </span>
                      <span className="text-electric-green font-mono font-bold text-xl">
                        +$89,880/year
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-cool-gray text-sm">
                        GymWyse platform cost (Growth plan)
                      </span>
                      <span className="text-red-400 font-mono text-sm">
                        -$2,388/year
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-pure-white font-semibold">
                        Net ROI
                      </span>
                      <span className="text-electric-green font-mono font-bold text-xl">
                        +$87,492/year
                      </span>
                    </div>
                    <p className="text-xs text-dim-gray mt-3">
                      That is a 37:1 return on platform investment. Even if
                      results are half this estimate, the ROI is still
                      18:1.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                These are not theoretical projections. They are based on
                median outcomes from gyms already using the GymWyse
                platform. Your specific numbers will vary, which is why we
                built a{" "}
                <Link
                  href="/roi-calculator"
                  className="text-electric-green underline hover:brightness-110"
                >
                  free ROI calculator
                </Link>{" "}
                that uses your actual member count, pricing, and churn rate
                to generate a personalized estimate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — COMMAND CENTER HOOK
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Zap className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                How the Command Center Solves This
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              The Revenue Analytics Dashboard
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Everything described in this guide maps directly to a single
                screen in the GymWyse Command Center: the Revenue Analytics
                Dashboard. This is not a reporting tool you check once a
                month. It is a live operational dashboard that updates every
                15 minutes and proactively alerts you when something needs
                attention.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: TrendingUp,
                    label: "True MRR Tracker",
                    desc: "Four-component MRR with new, expansion, contraction, and churned revenue broken out in real time.",
                  },
                  {
                    icon: DollarSign,
                    label: "Per-Service P&L",
                    desc: "Profit margin for every class, PT package, and ancillary service, updated daily with cost allocation.",
                  },
                  {
                    icon: AlertTriangle,
                    label: "Churn Risk Scores",
                    desc: "AI-generated risk score for every member, with automated retention workflows triggered at configurable thresholds.",
                  },
                  {
                    icon: RefreshCw,
                    label: "Payment Recovery Pipeline",
                    desc: "Live view of failed payments, retry status, member notifications, and recovery rate trending over time.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-5 border border-glass-border"
                  >
                    <item.icon className="h-5 w-5 text-electric-green mb-3" />
                    <h4 className="text-sm font-semibold text-pure-white mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-cool-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                The dashboard also includes threshold-based alerts. If your
                MRR drops below a configurable target, if failed payments
                exceed a set amount, or if churn risk spikes for a cohort of
                members, you get a Slack notification or email digest
                immediately. No more waiting for the end-of-month report to
                discover a problem that started three weeks ago.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/platform/revenue-analytics">
                  <Button size="lg" variant="primary">
                    Explore Revenue Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    See It Live in a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9 — COMPARISON TABLE
          ================================================================ */}
      <section className="bg-deep-space py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
                Legacy Manual Management vs. GymWyse AI Management
              </h2>
              <p className="mt-4 text-lg text-cool-gray">
                A side-by-side look at how each revenue lever is handled.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="py-4 pr-4 text-cool-gray font-medium w-1/4">
                      Feature
                    </th>
                    <th className="py-4 px-4 text-red-400 font-medium w-[37.5%]">
                      Legacy Manual Management
                    </th>
                    <th className="py-4 pl-4 text-electric-green font-medium w-[37.5%]">
                      GymWyse AI Management
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="border-b border-glass-border"
                    >
                      <td className="py-4 pr-4 text-pure-white font-medium align-top">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-cool-gray align-top">
                        {row.legacy}
                      </td>
                      <td className="py-4 pl-4 text-soft-white align-top">
                        {row.gymwyse}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 10 — REGIONAL COMPLIANCE
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Shield className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Regional Compliance Note
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Revenue Optimization Across Regulatory Environments
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Revenue optimization strategies must operate within the
                regulatory framework of your jurisdiction. Here is what you
                need to know for each major market:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    region: "United States",
                    details:
                      "State-specific health club laws govern auto-renewal disclosures, cancellation rights (often 3-day cooling-off), and refund policies. California, New York, and Illinois have the strictest consumer protection requirements. PCI DSS compliance is mandatory for payment processing.",
                  },
                  {
                    region: "United Kingdom",
                    details:
                      "Consumer Rights Act 2015 applies to gym memberships, including unfair contract terms provisions. Direct debit collections are governed by the Direct Debit Guarantee scheme. GDPR applies to all member data used in analytics and retention workflows.",
                  },
                  {
                    region: "Australia",
                    details:
                      "Australian Consumer Law mandates clear disclosure of automatic renewal terms and cooling-off periods for gym contracts. The Privacy Act 1988 governs member data handling. State-level fair trading laws add additional requirements.",
                  },
                  {
                    region: "UAE",
                    details:
                      "Consumer protection regulations require transparent pricing and contract terms. VAT at 5% applies to membership and service fees. RERA-related commercial licensing requirements vary by emirate. Data localization requirements may apply to member records.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-5 border border-glass-border"
                  >
                    <h4 className="text-sm font-semibold text-electric-green mb-2">
                      {item.region}
                    </h4>
                    <p className="text-xs text-cool-gray leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                GymWyse automatically configures billing workflows,
                cancellation processes, and data handling to comply with the
                regulations in your gym&apos;s jurisdiction. When you set up your
                account, the platform detects your location and applies the
                appropriate compliance rules, so you can focus on revenue
                optimization without worrying about regulatory exposure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 11 — EXPERT COMMENTARY
          ================================================================ */}
      <section className="bg-deep-space py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <BookOpen className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Insights from GymWyse Product Team
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Expert Commentary
            </h2>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 border border-electric-green/20">
                <p className="text-soft-white leading-relaxed italic">
                  &ldquo;The biggest misconception we see is that revenue
                  optimization means raising prices. It does not. The gyms
                  seeing the largest revenue gains on our platform are not
                  charging more per member. They are losing fewer members,
                  recovering more failed payments, and reallocating resources
                  from unprofitable services to profitable ones. The revenue
                  was always there. It was just leaking out through cracks
                  they could not see.&rdquo;
                </p>
                <p className="text-sm text-electric-green mt-4 font-medium">
                  — GymWyse Product Team
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <p className="text-soft-white leading-relaxed italic">
                  &ldquo;We built the Revenue Analytics Dashboard because
                  every gym owner we talked to was making decisions based on
                  incomplete data. They had revenue numbers and cost numbers,
                  but no bridge between the two at the service level. When we
                  showed them their per-class P&amp;L for the first time, the
                  reaction was always the same: genuine surprise. Half their
                  assumptions about what was making money were wrong.&rdquo;
                </p>
                <p className="text-sm text-electric-green mt-4 font-medium">
                  — GymWyse Product Team
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 12 — FAQ
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Target className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Common questions about gym revenue optimization, pricing
              strategy, and payment recovery.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card overflow-hidden rounded-xl border border-glass-border"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="pr-4 text-base font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-dim-gray transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-glass-border px-6 py-5">
                        <p className="text-sm leading-relaxed text-cool-gray">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 13 — FINAL CTA
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Stop Guessing. Start Optimizing.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              You have read the guide. You understand the three levers. Now
              put them to work. GymWyse&apos;s Revenue Analytics Dashboard
              starts surfacing per-service margins, churn risk scores, and
              payment recovery opportunities within 48 hours of activation.
              No spreadsheets. No guesswork. Just revenue clarity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="xl" variant="primary">
                  Start Your Free 14-Day Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="xl" variant="secondary">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-dim-gray">
              No credit card required. Full access to Revenue Analytics for
              14 days.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
