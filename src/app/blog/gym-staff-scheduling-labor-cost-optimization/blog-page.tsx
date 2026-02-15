"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  TrendingDown,
  BarChart3,
  CalendarDays,
  AlertTriangle,
  Zap,
  Target,
} from "lucide-react";

const faqs = [
  {
    q: "What is a healthy labor-to-revenue ratio for a gym?",
    a: "The industry benchmark for gym labor costs is 25 to 35 percent of total revenue. Below 25 percent often means you are understaffed and service quality is suffering, which drives up churn. Above 35 percent means labor is eating into your margins and you likely have scheduling inefficiencies. The sweet spot for most independent gyms is 28 to 32 percent. Multi-location operators can sometimes hit 24 to 28 percent through economies of scale. GymWyse tracks this ratio in real time so you can see the impact of every scheduling decision on your bottom line.",
  },
  {
    q: "How does demand-based scheduling actually work?",
    a: "Demand-based scheduling uses historical visit data, class booking patterns, and seasonal trends to predict how many members will be in your gym at every hour of every day. The algorithm then recommends optimal staffing levels for each time block. For example, if your data shows that Tuesday evenings between 5 PM and 7 PM average 85 members but Wednesday mornings between 6 AM and 8 AM average only 22, the system schedules accordingly rather than applying the same staffing template to both periods. GymWyse updates these predictions weekly as new data comes in.",
  },
  {
    q: "How much can demand-based scheduling actually save?",
    a: "Gyms switching from static to demand-based scheduling typically save 15 to 20 percent on labor costs within the first quarter. For a gym spending $12,000 per month on labor, that translates to $1,800 to $2,400 per month in savings. The savings come from three sources: eliminating overstaffing during predictably slow periods, reducing overtime by proactively managing shift lengths, and optimizing the mix of full-time versus part-time staff based on demand patterns.",
  },
  {
    q: "How do I handle scheduling for classes versus floor staff?",
    a: "Class instructors and floor staff require different scheduling approaches. Class scheduling is driven by member demand for specific class types and times, while floor staffing is driven by general facility occupancy. The key insight is that they interact: a popular 6 PM spinning class creates a surge in floor traffic 15 minutes before and after the class as members warm up and cool down. Smart scheduling accounts for these ripple effects, staffing the floor to handle class-adjacent traffic spikes rather than just the baseline occupancy.",
  },
  {
    q: "What is the real cost of overstaffing versus understaffing?",
    a: "Overstaffing by one unnecessary shift per day at $15 per hour costs $450 per month in direct labor. But understaffing has hidden costs that are far more expensive: a 2-point increase in churn rate from poor service quality at a 500-member gym with $59 average membership costs $7,080 per year in lost revenue. The math almost always favors slightly overstaffing high-traffic periods and cutting deep on verified low-traffic periods. Data-driven scheduling lets you know which periods are which, so you are not guessing.",
  },
  {
    q: "How do I reduce overtime costs without cutting staff hours?",
    a: "Overtime prevention starts with visibility. Most gym overtime happens because managers do not see the accumulation until payroll. GymWyse tracks weekly hours in real time and alerts you when any staff member approaches the overtime threshold, typically at 35 hours for a 40-hour threshold. The system suggests shift swaps with part-time staff who have availability, redistributing hours before overtime kicks in. Gyms using automated overtime alerts reduce overtime hours by 60 to 70 percent in the first month.",
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
  name: "How to Optimize Gym Staff Scheduling and Cut Labor Costs",
  description:
    "A step-by-step guide to implementing demand-based staff scheduling that reduces labor costs by 15-20% while maintaining service quality.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit your current labor-to-revenue ratio",
      text: "Calculate total labor costs (wages, benefits, payroll taxes) as a percentage of total revenue to establish your baseline.",
    },
    {
      "@type": "HowToStep",
      name: "Map historical demand patterns",
      text: "Analyze 90 days of check-in data and class booking patterns to identify peak, moderate, and low-traffic periods by day and hour.",
    },
    {
      "@type": "HowToStep",
      name: "Build demand-based staffing templates",
      text: "Create scheduling templates that match staff levels to predicted demand for each time block throughout the week.",
    },
    {
      "@type": "HowToStep",
      name: "Implement overtime prevention alerts",
      text: "Set up automated tracking that alerts managers when staff approach overtime thresholds and suggests shift swaps.",
    },
    {
      "@type": "HowToStep",
      name: "Monitor and optimize weekly",
      text: "Use the Labor Cost Optimization Dashboard to track labor-to-revenue ratio, cost per member visit, and scheduling efficiency in real time.",
    },
  ],
};

export function GymStaffSchedulingPage() {
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
            Operations &middot; February 1, 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Gym Staff Scheduling: Cut Labor Costs Without Cutting Corners
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-2xl mx-auto">
            How demand-based staff scheduling and labor-to-revenue ratios help
            gyms save 15-20% on their biggest expense.
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
              Gym staff scheduling optimization means matching staffing levels
              to actual member demand hour by hour, rather than running the
              same static schedule every week. Gyms that switch from fixed
              schedules to demand-based scheduling cut labor costs by 15 to 20
              percent while maintaining or improving service quality, because
              they staff heavy when members show up and lean when they do not.
              For a gym spending $12,000 per month on labor, that is $1,800 to
              $2,400 in monthly savings.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Why Labor Is Your Biggest Lever ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Why Labor Is Your Biggest Cost Lever
          </h2>
          <p className="text-soft-white leading-relaxed">
            For most gyms, labor is the single largest operating expense,
            typically accounting for 25 to 35 percent of total revenue. Rent
            is usually fixed. Equipment depreciates on a schedule you cannot
            change. Marketing spend is discretionary but hard to cut without
            killing growth. But labor, the combination of front desk staff,
            floor trainers, class instructors, cleaners, and managers, is both
            your biggest cost and your most flexible one.
          </p>
          <p className="text-soft-white leading-relaxed">
            The problem is that most gyms manage labor with a static weekly
            template. Monday through Friday gets one schedule. Weekends get
            another. Maybe holidays get a third. This template was probably
            created when the gym opened, adjusted a few times since, and now
            runs on autopilot regardless of whether Tuesday at 2 PM has 12
            members or 120 members in the building.
          </p>
          <p className="text-soft-white leading-relaxed">
            Static scheduling creates two expensive problems simultaneously.
            During peak hours, you are often understaffed because the template
            was not designed for your busiest days. During off-peak hours, you
            are overstaffed because the template was designed for an average
            that does not exist. The result is that you pay too much for labor
            in aggregate while still delivering subpar service during the
            hours that matter most.
          </p>
        </div>
      </motion.section>

      {/* ── Labor-to-Revenue Benchmarks ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Labor-to-Revenue Ratio Benchmarks
          </h2>
          <p className="text-soft-white leading-relaxed">
            Before you can optimize, you need to know where you stand. The
            labor-to-revenue ratio is the percentage of your total revenue
            that goes to labor costs including wages, benefits, payroll taxes,
            and contractor payments for instructors.
          </p>
          <div className="glass-card p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  type: "Budget/Value Gyms",
                  ratio: "20-25%",
                  note: "Minimal staffing, self-service model, automated check-in",
                  color: "text-electric-green",
                },
                {
                  type: "Independent Gyms",
                  ratio: "28-32%",
                  note: "Front desk + floor staff + part-time instructors",
                  color: "text-electric-green",
                },
                {
                  type: "Boutique Studios",
                  ratio: "32-38%",
                  note: "Instructor-heavy, high-touch service model",
                  color: "text-yellow-400",
                },
                {
                  type: "Full-Service Clubs",
                  ratio: "35-42%",
                  note: "Multiple departments, specialized staff, spa/pool",
                  color: "text-yellow-400",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className="font-semibold text-pure-white text-sm">
                    {item.type}
                  </p>
                  <p
                    className={`text-3xl font-bold font-mono ${item.color} mt-1`}
                  >
                    {item.ratio}
                  </p>
                  <p className="text-xs text-dim-gray mt-1">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              If your ratio is more than 5 percentage points above the
              benchmark for your gym type, scheduling optimization should be a
              top priority. Every percentage point reduction on a $40,000
              monthly revenue base saves $400 per month.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Demand-Based Scheduling Algorithms ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            How Demand-Based Scheduling Works
          </h2>
          <p className="text-soft-white leading-relaxed">
            Demand-based scheduling replaces the static weekly template with a
            dynamic model that adjusts staffing to predicted member traffic.
            The algorithm works in three layers.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: BarChart3,
                title: "Layer 1: Historical Pattern Analysis",
                desc: "The system analyzes 90 days of check-in data, class bookings, and door access logs to build a baseline demand profile for every hour of every day of the week. It identifies recurring patterns like the Monday 6 PM rush, the Wednesday mid-morning lull, and the Saturday morning peak. This baseline accounts for 70 to 80 percent of demand predictability.",
              },
              {
                icon: CalendarDays,
                title: "Layer 2: Seasonal and Event Adjustments",
                desc: "On top of the baseline, the algorithm layers seasonal adjustments: January new-year surge, summer dip, back-to-school September bump. It also factors in local events, holidays, and weather patterns. A rainy Tuesday shifts some outdoor runners indoors, increasing floor traffic by 10 to 15 percent. The system learns these adjustments from your specific data over time.",
              },
              {
                icon: Zap,
                title: "Layer 3: Real-Time Adaptation",
                desc: "The third layer uses real-time signals. If class bookings for tomorrow evening are 30 percent above the predicted baseline, the system alerts you to consider adding floor staff for the post-class cool-down period. If a major storm is forecast, it suggests reducing morning staffing. This real-time layer captures the 20 to 30 percent of demand variability that historical patterns miss.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric-green/10 shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-electric-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-pure-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Overtime Prevention ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Overtime Prevention: The Silent Budget Killer
          </h2>
          <p className="text-soft-white leading-relaxed">
            Overtime is one of the most common and preventable labor cost
            overruns in gym operations. At time-and-a-half rates, every
            overtime hour costs 50 percent more than a regular hour. For a
            gym where three staff members each work 5 overtime hours per week
            at $16 per hour, that is an extra $120 per week, or $6,240 per
            year, just in the overtime premium. Not the wages themselves, just
            the premium on top.
          </p>
          <p className="text-soft-white leading-relaxed">
            The root cause of gym overtime is almost always poor visibility.
            Managers do not realize that Sarah picked up an extra shift on
            Wednesday and is now at 42 hours by Friday. Or that covering for a
            sick call-out on Saturday pushed two staff members past 40. By the
            time it shows up on payroll, it is too late to fix.
          </p>
          <p className="text-soft-white leading-relaxed">
            Automated overtime prevention works by tracking cumulative hours
            in real time and alerting managers before thresholds are crossed.
            When a staff member hits 35 hours with shifts still remaining, the
            system flags it and suggests alternatives: swap the remaining shift
            with a part-time employee who has availability, split a long shift
            between two part-timers, or adjust the next week&apos;s schedule
            to compensate. Gyms using automated overtime alerts reduce overtime
            hours by 60 to 70 percent in the first month of implementation.
          </p>
        </div>
      </motion.section>

      {/* ── Cross-Training Staff Utilization ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Cross-Training: The Force Multiplier
          </h2>
          <p className="text-soft-white leading-relaxed">
            Cross-trained staff are the most underutilized scheduling asset in
            the gym industry. A front desk employee who can also clean and do
            basic floor supervision gives you 3x the scheduling flexibility
            compared to three specialized roles. A trainer who can cover
            reception during low-traffic periods means you do not need a
            dedicated front desk person for every open hour.
          </p>
          <p className="text-soft-white leading-relaxed">
            The key to effective cross-training is tracking staff capabilities
            in your scheduling system so the algorithm knows who can fill which
            roles. GymWyse maintains a skills matrix for each team member:
            front desk operations, floor supervision, group class instruction
            (by class type), cleaning, sales consultations, and equipment
            maintenance. When the demand-based scheduler recommends a staffing
            plan, it pulls from the skills matrix to suggest specific staff
            members for each role, maximizing coverage while minimizing the
            total number of people on the clock.
          </p>
          <p className="text-soft-white leading-relaxed">
            The math is compelling. A gym with 8 specialized staff members
            (3 front desk, 3 floor, 2 cleaners) needs all 8 to cover a full
            day. The same gym with 6 cross-trained staff members can cover the
            same hours with comparable service quality because each person can
            shift roles as demand changes throughout the day. That is a 25
            percent reduction in headcount requirement from cross-training
            alone, before any scheduling optimization is applied.
          </p>
        </div>
      </motion.section>

      {/* ── Overstaffing vs Understaffing ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Real Cost of Overstaffing vs. Understaffing
          </h2>
          <p className="text-soft-white leading-relaxed">
            Gym owners tend to fear overstaffing because it is visible on
            payroll. But understaffing has hidden costs that often exceed the
            visible savings. Understanding the true cost of each helps you make
            better scheduling decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-3 border-t-2 border-red-400">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-pure-white">
                  Cost of Overstaffing
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-cool-gray">
                <li>
                  Direct labor cost: $15-20/hr per unnecessary staff member
                </li>
                <li>Typically 1-2 extra shifts per day during off-peak</li>
                <li>Monthly cost: $450-1,200 in wasted labor</li>
                <li>Annual impact: $5,400-14,400</li>
                <li className="text-red-400">Visible on payroll, easy to identify</li>
              </ul>
            </div>
            <div className="glass-card p-6 space-y-3 border-t-2 border-yellow-400">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-pure-white">
                  Cost of Understaffing
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-cool-gray">
                <li>
                  Member experience degrades: longer wait times, less attention
                </li>
                <li>
                  2-4% increase in churn from poor service quality
                </li>
                <li>
                  500 members x 3% extra churn x $59/mo x 8 mo avg tenure =
                  $7,080/yr
                </li>
                <li>Staff burnout increases turnover costs ($3,500 per hire)</li>
                <li className="text-yellow-400">
                  Hidden in churn data, hard to trace back to staffing
                </li>
              </ul>
            </div>
          </div>
          <p className="text-soft-white leading-relaxed">
            The data-driven approach is to overstaff slightly during peak hours
            (where member experience directly impacts retention) and cut deeply
            during verified low-traffic periods (where one cross-trained staff
            member can cover the floor). This asymmetric strategy minimizes
            total cost because the hidden costs of understaffing during peak
            hours far exceed the visible costs of one extra person during
            off-peak.
          </p>
        </div>
      </motion.section>

      {/* ── Seasonal Demand Patterns ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Seasonal Demand Patterns and Staffing Adjustments
          </h2>
          <p className="text-soft-white leading-relaxed">
            Gym traffic follows predictable seasonal patterns that should
            drive staffing decisions. Ignoring seasonality means overstaffing
            in summer and potentially understaffing during the January rush.
          </p>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold text-pure-white">
              Monthly Traffic Index (100 = Annual Average)
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
              {[
                { month: "Jan", index: 135, color: "text-electric-green" },
                { month: "Feb", index: 120, color: "text-electric-green" },
                { month: "Mar", index: 110, color: "text-sapphire-blue" },
                { month: "Apr", index: 105, color: "text-sapphire-blue" },
                { month: "May", index: 98, color: "text-cool-gray" },
                { month: "Jun", index: 85, color: "text-yellow-400" },
                { month: "Jul", index: 80, color: "text-red-400" },
                { month: "Aug", index: 82, color: "text-red-400" },
                { month: "Sep", index: 108, color: "text-sapphire-blue" },
                { month: "Oct", index: 100, color: "text-cool-gray" },
                { month: "Nov", index: 92, color: "text-cool-gray" },
                { month: "Dec", index: 85, color: "text-yellow-400" },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-midnight rounded-lg text-center">
                  <p className="text-xs text-dim-gray">{item.month}</p>
                  <p className={`text-lg font-bold font-mono ${item.color}`}>
                    {item.index}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              Data from 200+ gyms across the GymWyse network. Your specific
              patterns may vary based on location, climate, and member
              demographics. The Labor Cost Optimization Dashboard shows your
              gym&apos;s actual seasonal patterns.
            </p>
          </div>
          <p className="text-soft-white leading-relaxed">
            Smart seasonal staffing means hiring temporary staff or increasing
            part-timer hours for the January through February surge, then
            reducing to a core team during summer months. The mistake most
            gyms make is maintaining January staffing levels through March and
            April when demand has already dropped by 15 to 20 percent. By the
            time they adjust, they have spent two months overstaffed.
            Demand-based scheduling catches these transitions in real time.
          </p>
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
                    "Schedule creation",
                    "Static weekly template, 2-3 hrs/week to maintain",
                    "AI-generated demand-based schedule, 15 min to review",
                  ],
                  [
                    "Demand prediction",
                    "Manager intuition and guesswork",
                    "3-layer algorithm: historical + seasonal + real-time",
                  ],
                  [
                    "Overtime tracking",
                    "Discovered on payroll after the fact",
                    "Real-time alerts at 35-hour threshold with swap suggestions",
                  ],
                  [
                    "Labor-to-revenue tracking",
                    "Monthly calculation by accountant",
                    "Real-time ratio dashboard updated daily",
                  ],
                  [
                    "Cross-training utilization",
                    "Informal, manager-dependent",
                    "Skills matrix integrated into scheduling algorithm",
                  ],
                  [
                    "Seasonal adjustments",
                    "Reactive, 4-6 week lag",
                    "Proactive, weekly demand recalibration",
                  ],
                  [
                    "Shift swap management",
                    "Text messages and phone calls",
                    "In-app swap requests with auto-approval rules",
                  ],
                  [
                    "Cost per member visit",
                    "Not tracked",
                    "Calculated in real time per shift and per period",
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
              <Clock className="w-6 h-6 text-electric-green" />
              <h3 className="text-xl font-semibold text-pure-white">
                Labor Cost Optimization Dashboard
              </h3>
            </div>
            <p className="text-soft-white leading-relaxed">
              The GymWyse Command Center&apos;s Labor Cost Optimization
              Dashboard gives you real-time visibility into your gym&apos;s
              staffing efficiency. The dashboard displays your current
              labor-to-revenue ratio alongside the benchmark for your gym type,
              so you always know whether you are running lean, optimal, or
              heavy on labor costs.
            </p>
            <p className="text-soft-white leading-relaxed">
              The core of the dashboard is the demand overlay: a visual
              heatmap showing predicted member traffic for the upcoming week
              layered against your current staffing schedule. Green zones
              indicate optimal staffing. Yellow zones indicate potential
              overstaffing. Red zones indicate understaffing risk. You can
              adjust shifts directly from this view, and the dashboard
              instantly recalculates the projected labor-to-revenue ratio for
              the week.
            </p>
            <p className="text-soft-white leading-relaxed">
              Overtime tracking runs in the background, with alerts pushed to
              manager phones when any team member crosses the 35-hour
              threshold. The system suggests specific swap options: which
              part-time staff have availability, which shifts could be
              shortened without impacting coverage, and what the cost
              difference is for each option.
            </p>
            <p className="text-soft-white leading-relaxed">
              The dashboard also tracks a metric most gyms ignore: cost per
              member visit. This number tells you exactly how much labor you
              are spending to serve each member interaction, and it varies
              dramatically by time of day. A Tuesday at 2 PM with 15 members
              and 2 staff costs $2.40 per member visit in labor. A Saturday at
              10 AM with 80 members and 4 staff costs $0.90 per visit.
              Understanding this metric helps you optimize shift lengths to
              minimize cost per visit without sacrificing coverage.
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
            ROI Calculation: Labor Optimization Savings
          </h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Let us walk through a concrete example for a gym with $45,000
              monthly revenue and current labor costs of $14,850 per month
              (33% labor-to-revenue ratio, which is 3 to 5 points above the
              independent gym benchmark).
            </p>
            <div className="space-y-3 text-soft-white">
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Current monthly labor cost</span>
                <span className="text-red-400 font-mono">$14,850/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Current labor-to-revenue ratio</span>
                <span className="text-red-400 font-mono">33.0%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Demand-based scheduling savings (15%)</span>
                <span className="text-electric-green font-mono">
                  -$2,228/mo
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Overtime elimination savings (est.)</span>
                <span className="text-electric-green font-mono">
                  -$520/mo
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Cross-training efficiency gains (est.)</span>
                <span className="text-electric-green font-mono">
                  -$380/mo
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Manager time saved (3 hrs/week x $22/hr)</span>
                <span className="text-electric-green font-mono">
                  -$264/mo
                </span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-electric-green">
                <span className="font-bold text-pure-white">
                  Total monthly savings
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $3,392/mo
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold text-pure-white">
                  New labor-to-revenue ratio
                </span>
                <span className="text-electric-green font-mono font-bold">
                  25.5%
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold text-pure-white">
                  Annual labor cost savings
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $40,704/yr
                </span>
              </div>
            </div>
            <p className="text-sm text-cool-gray">
              That brings the labor-to-revenue ratio from 33% down to 25.5%,
              well within the optimal range for an independent gym. The $40,704
              annual savings drops directly to the bottom line.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Labor Savings
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
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
              Staff scheduling must comply with regional labor laws regarding
              minimum hours, overtime thresholds, break requirements, and
              predictive scheduling mandates:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  region: "United States",
                  note: "FLSA overtime threshold at 40 hours/week. State-specific predictive scheduling laws in Oregon, New York City, San Francisco, Seattle, and Chicago require advance notice of schedule changes (typically 14 days). State meal and rest break requirements vary. ACA compliance for part-time vs full-time classification.",
                },
                {
                  region: "United Kingdom",
                  note: "Working Time Regulations 1998: maximum 48 hours/week average (opt-out available), minimum 11 hours rest between shifts, 20 minutes break for 6+ hour shifts. National Minimum Wage / Living Wage compliance. Part-time Workers Regulations for equal treatment.",
                },
                {
                  region: "Australia",
                  note: "Fair Work Act 2009 governs maximum weekly hours (38 ordinary hours), overtime rates, and modern award provisions for the fitness industry. Penalty rates apply for weekends and public holidays. The Fitness Industry Award 2020 sets minimum pay rates and conditions for gym staff.",
                },
                {
                  region: "UAE",
                  note: "Federal Decree-Law No. 33 of 2021 on labor relations: maximum 8 hours/day (48 hours/week), overtime capped at 2 hours/day with 25-50% premium. Reduced hours during Ramadan. WPS (Wage Protection System) compliance for electronic salary payments. End-of-service gratuity calculations.",
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
              GymWyse scheduling tools include region-specific compliance
              guardrails that prevent scheduling violations, including maximum
              hour alerts, mandatory break enforcement, and predictive
              scheduling notice requirements where applicable.
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
              &ldquo;Labor cost optimization is not about cutting staff. It is
              about putting the right people in the right place at the right
              time. The gyms we work with that have the lowest labor-to-revenue
              ratios are not the ones with the fewest employees. They are the
              ones whose employees are always in the right position. A
              cross-trained team of 6 that is scheduled based on demand data
              will outperform a specialized team of 8 on a static template, in
              both cost efficiency and member satisfaction. The Labor Cost
              Optimization Dashboard makes this visible for the first time.
              Most gym owners have never seen their cost-per-member-visit
              broken down by hour. When they do, the scheduling changes
              become obvious and the savings follow immediately.&rdquo;
            </p>
            <p className="text-sapphire-blue font-semibold mt-4">
              &mdash; GymWyse Product Team
            </p>
          </div>
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
            Optimize Your Biggest Expense
          </h2>
          <p className="text-lg text-soft-white leading-relaxed">
            See how the GymWyse Labor Cost Optimization Dashboard helps you
            save 15-20% on staffing while improving member service. Start your
            free trial today.
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
            <Link href="/bootcamp-software">
              <Button variant="outline" size="lg">
                Explore Bootcamp Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
