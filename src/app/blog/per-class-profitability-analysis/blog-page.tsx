"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  Calculator,
  Shield,
  Target,
  Zap,
  BookOpen,
  Check,
  Clock,
  Flame,
  BatteryCharging,
  CalendarDays,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ---------------------------------------------------------------------------
   DATA
   --------------------------------------------------------------------------- */

const comparisonRows = [
  {
    feature: "Class Revenue Tracking",
    legacy:
      "Total class revenue divided equally across all classes on the schedule",
    gymwyse:
      "Per-class revenue attribution tracking every drop-in, class pack allocation, and membership value allocation",
  },
  {
    feature: "Instructor Cost Allocation",
    legacy:
      "Average instructor cost applied uniformly regardless of time slot or seniority",
    gymwyse:
      "Actual per-class instructor cost including premium rates for early/late slots, certifications, and seniority tiers",
  },
  {
    feature: "Energy Cost Attribution",
    legacy: "Monthly utility bill divided by number of operating hours",
    gymwyse:
      "Peak-hour energy multiplier applied per class based on HVAC load, lighting, and equipment power draw during session",
  },
  {
    feature: "Equipment Depreciation",
    legacy:
      "Annual depreciation spread across total gym hours, no per-class assignment",
    gymwyse:
      "Per-class depreciation calculated from equipment usage intensity, replacement cycles, and maintenance logs",
  },
  {
    feature: "Room Utilization Analysis",
    legacy:
      "Capacity percentage based on sign-ups, no revenue-per-square-foot calculation",
    gymwyse:
      "Revenue per square foot per hour for every class, showing true room yield and opportunity cost of each time slot",
  },
  {
    feature: "Schedule Optimization",
    legacy:
      "Schedule built around instructor availability and member survey feedback",
    gymwyse:
      "AI-optimized schedule recommendations based on per-class margin, demand patterns, and room yield data",
  },
  {
    feature: "Profitability Alerts",
    legacy: "No alerts; unprofitable classes run indefinitely until manually reviewed",
    gymwyse:
      "Automated alerts when any class falls below a configurable margin threshold for two consecutive weeks",
  },
];

const faqItems = [
  {
    question: "How do I calculate the true cost of running a single class?",
    answer:
      "To calculate the true cost of a single class, you need to add five cost layers. First, instructor cost: what you pay the instructor for that specific session, including any premium for early morning, late evening, or weekend slots. Second, energy cost: the incremental electricity, HVAC, and water usage during the class period, which can be estimated from your utility bills divided by operating hours and adjusted for peak-hour multipliers. Third, equipment depreciation: the annual depreciation of equipment used in that class divided by the number of sessions using that equipment per year. Fourth, room cost: your total facility rent or mortgage divided by total usable square footage, multiplied by the room size, divided by operating hours. Fifth, administrative overhead: a fair allocation of front desk, cleaning, and system costs per class. When you add all five layers, the true cost per class is typically 40-60% higher than what most owners estimate.",
  },
  {
    question:
      "Why would a packed class be unprofitable?",
    answer:
      "A packed class becomes unprofitable when the costs to run it exceed the revenue it generates, regardless of attendance. The most common scenario is a popular early-morning or late-evening class with a premium instructor. The instructor commands a higher per-session rate for unsociable hours, the HVAC system runs harder to condition the space outside normal operating hours, and if the class uses high-wear equipment like spin bikes or rowers, the depreciation cost per session is significant. A class with 30 attendees paying an effective rate of $8 per visit generates $240 in revenue. If the instructor costs $120 for that slot, energy is $35, equipment depreciation is $45, and room cost is $50, the total cost is $250 and the class loses $10 every time it runs. Meanwhile, a half-full yoga class with a salaried instructor, no equipment depreciation, and minimal energy draw might clear a 65% margin.",
  },
  {
    question:
      "What is a good profit margin for a gym class?",
    answer:
      "A healthy per-class profit margin varies by class type but generally falls in the 35-55% range for a well-run gym. High-margin classes tend to be those with low equipment requirements, salaried or lower-cost instructors, and moderate energy demands — think yoga, Pilates mat work, or bodyweight circuit classes. Lower-margin classes include spin, rowing, and specialized formats that require expensive equipment, premium instructors, and high energy consumption. Any class consistently running below a 15% margin deserves scrutiny: either the pricing needs adjustment, the cost structure needs optimization, or the class should be replaced with a more profitable alternative. The goal is not to make every class a high-margin winner but to ensure your schedule as a whole delivers a blended margin above 40%.",
  },
  {
    question:
      "How do I account for instructor premium rates in per-class P&L?",
    answer:
      "Instructor premium rates should be assigned directly to the specific class sessions where they apply. If an instructor earns a base rate of $50 per class but receives a $25 premium for teaching the 6 AM slot, the full $75 is the cost for that session — not the average of $50 spread across all their classes. The same applies to weekend premiums, specialty certification premiums, and seniority-based pay increases. GymWyse tracks individual instructor rate cards with slot-based modifiers so the per-class P&L reflects the actual cost rather than an averaged figure. This level of detail is critical because it is often the premium slots — early morning, late evening, weekends — that look busiest but are the least profitable once true instructor costs are applied.",
  },
  {
    question:
      "How does equipment depreciation affect per-class profitability?",
    answer:
      "Equipment depreciation has a larger impact on per-class profitability than most owners realize. Consider a spin studio with 30 bikes costing $2,500 each, with a useful life of 5 years. The annual depreciation for the bike fleet is $15,000, or $1,250 per month. If the spin studio runs 25 classes per week, that is roughly 108 classes per month, making the equipment depreciation cost per class approximately $11.57. Add maintenance costs of roughly $3 per bike per month (belts, pedals, seat adjustments), and you have another $90 per month or $0.83 per class. Total equipment cost per spin class: approximately $12.40. For a class generating $200 in revenue, that is a 6.2% cost just from equipment. Over a year, that is $1,339 in equipment costs for spin alone. These numbers compound across equipment-heavy formats like rowing, functional training, and reformer Pilates.",
  },
  {
    question:
      "What is room utilization rate and why does it matter for class profitability?",
    answer:
      "Room utilization rate measures how effectively you are using your physical space to generate revenue. It is calculated as: (actual class revenue per square foot per hour) divided by (maximum potential revenue per square foot per hour). A 1,200 square foot studio that generates $200 from a one-hour class produces $0.167 per square foot per hour. If the maximum achievable revenue for that room (based on the highest-performing class at full capacity) is $0.30 per square foot per hour, the utilization rate is 55.6%. Room utilization matters because space is your most expensive fixed asset. Every hour a room sits empty or runs a low-yield class is an opportunity cost. GymWyse calculates room yield for every time slot so you can identify periods where the room is underperforming and test higher-yield alternatives — additional classes, PT sessions, or open gym time with a per-visit fee.",
  },
  {
    question:
      "How often should I review per-class profitability data?",
    answer:
      "We recommend a weekly review of the per-class profitability dashboard for trend monitoring, with a deep-dive monthly analysis for schedule optimization decisions. The weekly review should take no more than 10 minutes: scan for any class that has dropped below your margin threshold, note any classes with declining attendance trends, and check for outlier cost spikes (such as a substitute instructor at a higher rate). The monthly deep dive should assess the full schedule portfolio: rank all classes by margin, identify the bottom 10% for potential restructuring, compare room yield across time slots, and model schedule changes using the GymWyse what-if simulator before implementing them. Seasonal patterns also matter — outdoor classes, holiday schedules, and summer drop-offs all affect profitability, so quarterly trend analysis is valuable.",
  },
];

/* ---------------------------------------------------------------------------
   COMPONENT
   --------------------------------------------------------------------------- */

export function PerClassProfitabilityPage() {
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
            name: "How to Run Per-Class Profitability Analysis for Your Gym",
            description:
              "A step-by-step framework for calculating true per-class profit and loss, including instructor costs, energy, equipment depreciation, and room utilization.",
            step: [
              {
                "@type": "HowToStep",
                name: "Calculate Per-Class Revenue Attribution",
                text: "Attribute revenue from memberships, class packs, and drop-ins to each individual class session based on actual attendance and pricing tier allocation.",
              },
              {
                "@type": "HowToStep",
                name: "Assign True Instructor Costs",
                text: "Apply actual per-session instructor rates including premium modifiers for early morning, late evening, weekend, and specialty certification slots.",
              },
              {
                "@type": "HowToStep",
                name: "Calculate Energy and Facility Costs",
                text: "Determine per-class energy costs using peak-hour multipliers for HVAC, lighting, and equipment power draw during each session window.",
              },
              {
                "@type": "HowToStep",
                name: "Apply Equipment Depreciation",
                text: "Allocate equipment depreciation per class based on usage intensity, replacement cycles, and maintenance cost logs for the specific equipment used.",
              },
              {
                "@type": "HowToStep",
                name: "Analyze Room Utilization and Yield",
                text: "Calculate revenue per square foot per hour for each class to determine room yield and identify opportunity costs of underperforming time slots.",
              },
              {
                "@type": "HowToStep",
                name: "Optimize Schedule Based on Margin Data",
                text: "Use per-class P&L data to restructure your schedule, replacing or repricing low-margin classes and expanding high-margin offerings to maximize portfolio profitability.",
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
              <BarChart3 className="mr-1.5 inline-block h-3.5 w-3.5" />
              Analytics Deep Dive
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Per-Class Profitability: Why Your Busiest Class Might Be Your
              Least Profitable
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              A packed class feels like a win. Full sign-up sheet,
              waitlist, energy in the room. But when you layer in
              instructor premiums, peak-hour energy costs, equipment
              depreciation, and the opportunity cost of that room, the
              math often tells a different story. This guide walks you
              through true per-class P&amp;L analysis so you can find your
              real money-makers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  See Per-Class Analytics Live
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
                Per-class profitability analysis calculates the true profit
                or loss of every individual class on your schedule by
                attributing all direct and indirect costs, including
                instructor pay, energy consumption, equipment depreciation,
                and room utilization, to each session. Most gym owners
                discover that their busiest classes run at margins below
                15% while lightly attended sessions with lower cost
                structures generate margins above 55%. Without this
                analysis, you are building your schedule around attendance
                instead of around profit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — THE "PACKED BUT UNPROFITABLE" TRAP
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
                <AlertTriangle className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                The Trap
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              The &ldquo;Packed But Unprofitable&rdquo; Problem
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Let us walk through a real scenario we see constantly on the
                GymWyse platform. A gym owner runs a 6 AM spin class that
                consistently fills all 30 bikes. There is a waitlist most
                days. The instructor is one of the best in the city. The
                energy in the room is electric. By every visible metric,
                this class is a winner.
              </p>
              <p>
                Then we run the numbers:
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  6 AM Spin Class P&amp;L: The Reality
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Revenue (30 riders x $8.00 effective rate)
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      $240.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Instructor cost (premium early-AM rate)
                    </span>
                    <span className="text-red-400 font-mono">-$120.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Energy cost (pre-dawn HVAC + 30 bike displays)
                    </span>
                    <span className="text-red-400 font-mono">-$38.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Equipment depreciation (30 bikes at $2,500, 5-yr life)
                    </span>
                    <span className="text-red-400 font-mono">-$12.40</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Room cost (1,200 sq ft at $0.042/sq ft/hr)
                    </span>
                    <span className="text-red-400 font-mono">-$50.40</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Cleaning and setup (post-class deep clean)
                    </span>
                    <span className="text-red-400 font-mono">-$15.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-pure-white font-semibold">
                      Net profit per class
                    </span>
                    <span className="text-electric-green font-mono font-bold text-lg">
                      $4.20
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cool-gray">Margin</span>
                    <span className="text-yellow-400 font-mono font-semibold">
                      1.75%
                    </span>
                  </div>
                </div>
              </div>

              <p>
                A 1.75% margin. On your busiest, most popular, most
                waitlisted class. One sick-day substitute instructor at $140
                instead of $120 flips it to a loss. One bike needing an
                emergency repair adds another $80 to the cost line. The
                class that feels like your strongest offering is actually
                your most fragile.
              </p>
              <p>
                Now look at the contrast:
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  10 AM Yoga Flow P&amp;L: The Quiet Earner
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Revenue (14 attendees x $9.50 effective rate)
                    </span>
                    <span className="text-electric-green font-mono font-semibold">
                      $133.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Instructor cost (standard mid-day rate, salaried)
                    </span>
                    <span className="text-red-400 font-mono">-$40.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Energy cost (standard hours, minimal equipment)
                    </span>
                    <span className="text-red-400 font-mono">-$8.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Equipment depreciation (mats and blocks only)
                    </span>
                    <span className="text-red-400 font-mono">-$1.20</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Room cost (800 sq ft at $0.042/sq ft/hr)
                    </span>
                    <span className="text-red-400 font-mono">-$33.60</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-glass-border pb-2">
                    <span className="text-cool-gray">
                      Cleaning and setup (light reset)
                    </span>
                    <span className="text-red-400 font-mono">-$5.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-pure-white font-semibold">
                      Net profit per class
                    </span>
                    <span className="text-electric-green font-mono font-bold text-lg">
                      $45.20
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cool-gray">Margin</span>
                    <span className="text-electric-green font-mono font-semibold">
                      33.98%
                    </span>
                  </div>
                </div>
              </div>

              <p>
                The yoga class has half the attendance and less total
                revenue, but it generates 10x the profit of the spin class.
                If you had to choose between adding a second spin class or a
                second yoga flow, the data makes the decision obvious. But
                without per-class P&amp;L, you would instinctively double
                down on spin because it is the one with the waitlist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — INSTRUCTOR COST ALLOCATION
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
                Cost Layer 1
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Instructor Cost Allocation: Premium Rates Are Margin Killers
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Instructor costs are the single largest variable expense in
                per-class profitability, and they vary far more than most
                owners account for. A base-rate group fitness instructor
                might cost $45 per class during standard hours. But that
                same instructor, or a more senior one, teaching the 6 AM or
                8 PM slot could cost $75-$120 per session once you factor
                in early/late premiums.
              </p>
              <p>
                The mistake we see in 80% of gym P&amp;L analyses is
                averaging instructor costs across all classes. When you pay
                six instructors a combined $2,400 per week for 40 classes,
                the average is $60 per class. But the reality is that your
                off-peak classes cost $45 and your premium-slot classes cost
                $95. That $35 difference per session changes the
                profitability picture entirely.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Typical Instructor Premium Structure
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      slot: "5:30-6:30 AM",
                      premium: "+50-60%",
                      reason:
                        "Early morning premium: instructors require higher pay to teach before standard hours",
                    },
                    {
                      slot: "7:00-8:00 PM",
                      premium: "+25-40%",
                      reason:
                        "Evening premium: competes with instructor side gigs and personal time",
                    },
                    {
                      slot: "Saturday/Sunday",
                      premium: "+30-50%",
                      reason:
                        "Weekend premium: reduced instructor availability drives rates up",
                    },
                    {
                      slot: "Specialty certification",
                      premium: "+20-35%",
                      reason:
                        "TRX, Reformer Pilates, Olympic lifting: certification premiums for qualified instructors",
                    },
                    {
                      slot: "10+ years experience",
                      premium: "+15-25%",
                      reason:
                        "Seniority premium: veteran instructors command higher rates and have stronger followings",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 border-b border-glass-border pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-8 min-w-[100px] items-center justify-center rounded-lg bg-electric-green/10 flex-shrink-0">
                        <span className="text-xs font-semibold text-electric-green">
                          {item.premium}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pure-white">
                          {item.slot}
                        </p>
                        <p className="text-xs text-cool-gray mt-1">
                          {item.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The solution is not to stop paying premium rates. Good
                instructors are worth every dollar, and members will follow
                their favorite instructor to a competitor if you lose them.
                The solution is to price and schedule with full visibility
                into what those premiums cost at the class level, so you can
                ensure the revenue side of the equation justifies the
                investment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — ENERGY & EQUIPMENT COSTS
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
                <BatteryCharging className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Cost Layers 2 &amp; 3
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Energy Costs and Equipment Depreciation: The Hidden Margin
              Erasers
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Energy costs are not uniform across your operating hours.
                Running the HVAC system to condition a gym at 5:30 AM in
                January costs significantly more than maintaining
                temperature at 11 AM when the building has been warmed up
                for hours. Peak electricity rates in many markets add
                20-40% to per-kWh costs during certain windows. A spin
                class with 30 display consoles, amplified music, and
                full-room lighting draws more power than a bodyweight class
                using natural light and a Bluetooth speaker.
              </p>
              <p>
                We recommend calculating a per-class energy multiplier
                based on three variables: time of day (off-peak vs. peak
                utility rates), equipment power draw during the session,
                and HVAC load relative to outside temperature. For most
                gyms, the per-class energy cost ranges from $6 for a
                low-draw mid-day session to $40+ for a high-draw early
                morning equipment-intensive class.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Equipment Depreciation: Per-Class Impact by Format
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      format: "Spin / Indoor Cycling",
                      equipment: "30 bikes at $2,500 each",
                      life: "5 years",
                      perClass: "$12.40",
                      annual: "$1,339",
                    },
                    {
                      format: "Rowing HIIT",
                      equipment: "20 rowers at $1,800 each",
                      life: "6 years",
                      perClass: "$5.77",
                      annual: "$624",
                    },
                    {
                      format: "Reformer Pilates",
                      equipment: "15 reformers at $4,000 each",
                      life: "8 years",
                      perClass: "$7.21",
                      annual: "$779",
                    },
                    {
                      format: "Functional Training",
                      equipment: "Mixed rig, dumbbells, kettlebells",
                      life: "7 years avg",
                      perClass: "$4.80",
                      annual: "$519",
                    },
                    {
                      format: "Yoga / Mat Pilates",
                      equipment: "Mats, blocks, straps",
                      life: "3 years",
                      perClass: "$1.20",
                      annual: "$130",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-5 gap-2 text-xs border-b border-glass-border pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-pure-white font-medium col-span-1">
                        {item.format}
                      </span>
                      <span className="text-cool-gray col-span-1">
                        {item.equipment}
                      </span>
                      <span className="text-cool-gray text-center">
                        {item.life}
                      </span>
                      <span className="text-electric-green font-mono text-center">
                        {item.perClass}
                      </span>
                      <span className="text-electric-green font-mono text-center">
                        {item.annual}
                      </span>
                    </div>
                  ))}
                  <div className="grid grid-cols-5 gap-2 text-xs text-dim-gray pt-1">
                    <span>Format</span>
                    <span>Equipment</span>
                    <span className="text-center">Useful Life</span>
                    <span className="text-center">Per Class</span>
                    <span className="text-center">Per Year</span>
                  </div>
                </div>
              </div>

              <p>
                The difference between $1.20 per class for yoga and $12.40
                per class for spin is not trivial when compounded across
                hundreds of sessions per year. Equipment-heavy formats need
                to generate proportionally higher revenue per attendee to
                justify the depreciation load. If they do not, you are
                slowly converting capital equipment into thin-margin
                classes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — ROOM UTILIZATION
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
                <CalendarDays className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Cost Layer 4
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Room Utilization: Your Most Expensive Asset Needs to Earn Its
              Keep
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Physical space is typically the largest fixed cost in a gym
                business. Whether you own or lease, every square foot
                carries a cost per hour. The question is whether each hour
                of room usage is generating revenue that justifies that
                cost.
              </p>
              <p>
                Room utilization rate is calculated as the actual revenue
                generated per square foot per hour divided by the maximum
                potential revenue per square foot per hour. A 1,200 square
                foot studio generating $240 from a packed spin class
                produces $0.20 per square foot per hour. The same room
                hosting a semi-private PT session with three clients at $60
                each generates $180 in revenue, or $0.15 per square foot
                per hour. But the PT session has dramatically lower costs
                (no equipment fleet, no premium instructor, minimal energy),
                so the net yield per square foot could be higher despite
                lower gross revenue.
              </p>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Room Yield Comparison: Same Studio, Different Uses
                </h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-3 text-xs text-dim-gray border-b border-glass-border pb-2">
                    <span>Usage</span>
                    <span className="text-center">Gross Revenue</span>
                    <span className="text-center">Total Cost</span>
                    <span className="text-center">Net Yield/sq ft/hr</span>
                  </div>
                  {[
                    {
                      usage: "30-person Spin",
                      revenue: "$240",
                      cost: "$235.80",
                      yield: "$0.004",
                    },
                    {
                      usage: "14-person Yoga",
                      revenue: "$133",
                      cost: "$87.80",
                      yield: "$0.056",
                    },
                    {
                      usage: "3-client Semi-Private PT",
                      revenue: "$180",
                      cost: "$72.00",
                      yield: "$0.090",
                    },
                    {
                      usage: "Open Gym ($5 drop-in, avg 8 users)",
                      revenue: "$40",
                      cost: "$18.00",
                      yield: "$0.018",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 gap-3 text-sm border-b border-glass-border pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-pure-white font-medium">
                        {item.usage}
                      </span>
                      <span className="text-cool-gray text-center font-mono">
                        {item.revenue}
                      </span>
                      <span className="text-red-400 text-center font-mono">
                        {item.cost}
                      </span>
                      <span className="text-electric-green text-center font-mono font-semibold">
                        {item.yield}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The room yield data above tells a powerful story. The
                semi-private PT session generates 22x the net yield per
                square foot compared to the packed spin class. The yoga
                class delivers 14x the net yield. Even open gym with
                minimal staffing produces 4.5x the return. This does not
                mean you should eliminate spin classes. It means you need to
                be extremely intentional about when, how many, and at what
                price you offer them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7 — SCHEDULE OPTIMIZATION
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
                <Wrench className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                The Fix
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Schedule Optimization: Building Around Margin, Not Just
              Attendance
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Once you have per-class P&amp;L data, schedule optimization
                becomes a portfolio management exercise. You are not trying
                to make every class a high-margin winner. You are building a
                schedule where the portfolio as a whole delivers a blended
                margin above your target, typically 40% or higher.
              </p>
              <p>
                Here are the levers you can pull once you have visibility:
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: DollarSign,
                    title: "Reprice equipment-heavy classes",
                    desc: "If your spin class runs at a 1.75% margin, a $2 per-ride increase for 30 riders adds $60 per class, moving the margin from 1.75% to 26.75%. Test the price sensitivity — most gym members will not notice a $2 change on a class they love.",
                  },
                  {
                    icon: Clock,
                    title: "Shift premium-cost classes to standard-rate slots",
                    desc: "If the 6 AM spin instructor costs $120 but the 9:30 AM instructor costs $55, moving a spin class from 6 AM to a mid-morning slot saves $65 per session in instructor costs alone. The 6 AM slot can be filled with a lower-cost format.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Expand high-margin formats",
                    desc: "If yoga consistently delivers 34% margins, adding a second mid-day yoga session is likely to produce similar results. Use the what-if simulator to model the expected margin before committing.",
                  },
                  {
                    icon: Flame,
                    title: "Introduce minimum-attendance thresholds",
                    desc: "Set a breakeven attendance number for every class. If a HIIT class needs 12 attendees to break even and consistently draws 8, it is a scheduled loss. Either increase marketing to fill it or replace it.",
                  },
                  {
                    icon: CalendarDays,
                    title: "Optimize room transitions",
                    desc: "Dead time between classes is lost room yield. If you have 30 minutes between a spin class and a yoga class, that is 30 minutes of zero revenue from your most expensive asset. Tighten transitions to 15 minutes or fill gaps with open gym access.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-card rounded-xl p-5 border border-glass-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-green/10 flex-shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-electric-green" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-pure-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-cool-gray leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — ROI CALCULATION
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
                <Calculator className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                ROI Calculation
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              The Math: What Schedule Optimization Is Worth
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Let us model a realistic schedule optimization for a gym
                running 35 classes per week across two studios.
              </p>

              <div className="glass-card rounded-xl p-6 border border-electric-green/20">
                <h3 className="text-lg font-semibold text-pure-white mb-5">
                  Schedule Optimization ROI: 35-Class Weekly Schedule
                </h3>
                <div className="space-y-4">
                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Repricing 8 equipment-heavy classes (+$2/rider)
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      8 classes x avg 25 riders x $2 increase x 4.3
                      weeks/mo = $1,720/mo additional revenue
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$20,640/year
                    </p>
                  </div>

                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Shifting 3 classes from premium to standard slots
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      3 classes x $45 instructor savings x 4.3 weeks/mo =
                      $580.50/mo in cost reduction
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$6,966/year in saved costs
                    </p>
                  </div>

                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Adding 2 high-margin yoga classes
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      2 classes x $45.20 net profit x 4.3 weeks/mo =
                      $388.72/mo additional profit
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$4,665/year
                    </p>
                  </div>

                  <div className="glass-card rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-electric-green" />
                      <span className="text-sm font-semibold text-pure-white">
                        Replacing 2 below-breakeven classes with open gym
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray">
                      Eliminating 2 classes losing avg $8/session and
                      replacing with open gym netting $22/hr = $258.60/mo
                      swing
                    </p>
                    <p className="text-electric-green font-mono font-semibold mt-2">
                      +$3,103/year
                    </p>
                  </div>

                  <div className="border-t border-glass-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-pure-white font-semibold">
                        Combined annual impact
                      </span>
                      <span className="text-electric-green font-mono font-bold text-xl">
                        +$35,374/year
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
                        +$32,986/year
                      </span>
                    </div>
                    <p className="text-xs text-dim-gray mt-3">
                      A 14.8:1 return on platform investment from schedule
                      optimization alone, before counting retention and
                      payment recovery gains.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                These numbers assume conservative estimates. Many gyms find
                larger gains because their initial schedule has never been
                optimized with margin data. Use our{" "}
                <Link
                  href="/roi-calculator"
                  className="text-electric-green underline hover:brightness-110"
                >
                  free ROI calculator
                </Link>{" "}
                to model the impact for your specific class schedule and
                cost structure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9 — COMMAND CENTER HOOK
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
                <Zap className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                How the Command Center Solves This
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              The Class Revenue Attribution Panel
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Every analysis in this guide maps to a single view in the
                GymWyse Command Center: the Class Revenue Attribution
                Panel. This is not a monthly report you export to a
                spreadsheet. It is a live operational dashboard that
                calculates per-class P&amp;L in real time as costs flow in
                and attendance is recorded.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: BarChart3,
                    label: "Per-Class P&L View",
                    desc: "Real-time margin calculation for every class on your schedule, updated after each session with actual attendance and cost data.",
                  },
                  {
                    icon: Users,
                    label: "Instructor Cost Tracker",
                    desc: "Per-session instructor costs with slot-based premium modifiers, seniority tiers, and substitute cost tracking.",
                  },
                  {
                    icon: BatteryCharging,
                    label: "Energy Attribution",
                    desc: "Per-class energy cost estimates using time-of-day rates, equipment power profiles, and HVAC load calculations.",
                  },
                  {
                    icon: CalendarDays,
                    label: "Room Yield Heatmap",
                    desc: "Revenue per square foot per hour visualized across your weekly schedule, highlighting high-yield and underperforming slots.",
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
                The panel also includes a what-if schedule simulator. Before
                you make any changes to your timetable, you can model the
                impact: &ldquo;What happens to my blended margin if I
                replace the Tuesday 6 AM spin with a yoga flow?&rdquo; or
                &ldquo;What if I increase the spin class pack price by $3
                per ride?&rdquo; The simulator uses your actual historical
                data to project outcomes, so decisions are grounded in
                evidence rather than guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/solutions/boutique-fitness">
                  <Button size="lg" variant="primary">
                    Explore Boutique Fitness Solutions
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
          SECTION 10 — COMPARISON TABLE
          ================================================================ */}
      <section className="bg-midnight py-20 md:py-24">
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
                How per-class profitability is handled in each approach.
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
          SECTION 11 — REGIONAL COMPLIANCE
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
                <Shield className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Regional Compliance Note
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl mb-6">
              Per-Class Pricing and Compliance Across Markets
            </h2>

            <div className="space-y-6 text-soft-white leading-relaxed">
              <p>
                Per-class pricing adjustments, class pack structures, and
                drop-in rates are subject to consumer protection regulations
                that vary by jurisdiction. Here is what to consider in each
                market:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    region: "United States",
                    details:
                      "Class pack and drop-in pricing must comply with state consumer protection laws. Several states require clear disclosure of per-class costs when selling bundles. Auto-renewal for class packs must follow FTC guidelines. Instructor classification as employee vs. independent contractor affects cost allocation and tax treatment.",
                  },
                  {
                    region: "United Kingdom",
                    details:
                      "Consumer Contracts Regulations 2013 require clear pricing information before purchase. Class packs sold online have a 14-day cancellation right. HMRC employment status rules determine whether instructors are employees or self-employed, significantly impacting per-class cost calculations.",
                  },
                  {
                    region: "Australia",
                    details:
                      "Australian Consumer Law prohibits misleading pricing and requires GST-inclusive display prices. Cooling-off periods apply to class pack purchases in some states. Fair Work Act governs instructor pay rates with specific award rates for fitness instructors depending on qualifications.",
                  },
                  {
                    region: "UAE",
                    details:
                      "Consumer protection regulations require transparent pricing in AED. VAT at 5% applies to class fees and memberships. Instructor visa sponsorship costs may need to be factored into per-class cost allocation. MOHAP licensing requirements for specialized fitness instruction can affect instructor rate structures.",
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
                GymWyse automatically applies the correct tax treatment and
                disclosure requirements based on your gym&apos;s location.
                Instructor cost allocation templates are pre-configured for
                employee and contractor models in each jurisdiction, so your
                per-class P&amp;L reflects the true cost including
                employment taxes, insurance, and mandatory benefits where
                applicable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 12 — EXPERT COMMENTARY
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
                  &ldquo;The single most common reaction when gym owners see
                  their per-class P&amp;L for the first time is disbelief.
                  They have been running a class for years, packing it to
                  capacity, building their marketing around it, and it turns
                  out to be their lowest-margin offering. The data is not
                  telling them to kill the class. It is telling them to
                  price it correctly, staff it efficiently, and understand
                  its true role in the schedule. Sometimes a low-margin
                  class is worth keeping as a member acquisition tool, but
                  only if you know that is what it is doing and you are not
                  subsidizing it at the expense of higher-margin
                  alternatives.&rdquo;
                </p>
                <p className="text-sm text-electric-green mt-4 font-medium">
                  — GymWyse Product Team
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-glass-border">
                <p className="text-soft-white leading-relaxed italic">
                  &ldquo;We designed the Class Revenue Attribution Panel to
                  answer one question: is this class earning its spot on the
                  schedule? Every square foot of your gym has a cost per
                  hour. Every instructor has a rate per session. Every piece
                  of equipment has a depreciation curve. When you bring all
                  of that together at the class level, you stop managing by
                  vibes and start managing by evidence. The gyms that adopt
                  this approach consistently find $25,000 to $40,000 in
                  annual margin improvement within their first quarter of
                  using the data.&rdquo;
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
          SECTION 13 — FAQ
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
              Common questions about per-class profitability, cost
              allocation, and schedule optimization.
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
          SECTION 14 — FINAL CTA
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
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Find Out Which Classes Are Actually Making You Money
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              You have read the guide. You understand why attendance is not
              the same as profitability. Now see the numbers for your own
              gym. GymWyse&apos;s Class Revenue Attribution Panel starts
              calculating per-class P&amp;L within 48 hours of activation,
              using your actual instructor rates, energy data, and
              equipment inventory.
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
              No credit card required. Full access to Class Revenue
              Attribution for 14 days.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
