"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingDown,
  DollarSign,
  TrendingUp,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Calculator,
  ExternalLink,
  ShieldCheck,
  Package,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function DayPassVisual() {
  const hours = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM"];
  const counts = [12, 28, 35, 22, 48, 62];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Day Pass Traffic — Today
          </span>
        </div>
        <span className="text-[9px] text-electric-green">62 currently in gym</span>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {hours.map((h, i) => (
          <div key={h} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full bg-sapphire-blue/40 rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: `${(counts[i] / 62) * 100}%` }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            />
            <span className="text-[7px] text-dim-gray mt-1">{h}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[8px] text-dim-gray">128 day passes today</span>
        <span className="text-[8px] text-electric-green">+18% vs last Saturday</span>
      </div>
    </div>
  );
}

function RentalVisual() {
  const items = [
    { name: "Climbing Shoes", available: "24/40", status: "In Stock", ok: true },
    { name: "Harness", available: "18/30", status: "In Stock", ok: true },
    { name: "Chalk Bag", available: "8/35", status: "Low Stock", ok: false },
    { name: "Belay Device", available: "15/20", status: "In Stock", ok: true },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Package className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Equipment Rental Status
          </span>
        </div>
        <span className="text-[9px] text-electric-green">$840 rental revenue today</span>
      </div>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[10px] text-pure-white block">{item.name}</span>
              <span className="text-[8px] text-dim-gray">{item.available} available</span>
            </div>
            <span className={`text-[8px] px-1.5 py-0.5 rounded ${item.ok ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}>
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WaiverVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <ShieldCheck className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Safety Certifications Dashboard
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "Active Waivers", value: "1,842", icon: ShieldCheck, color: "#3B82F6" },
          { label: "Belay Certs", value: "347", icon: CheckCircle, color: "#00FF88" },
          { label: "Lead Certs", value: "128", icon: Mountain, color: "#F59E0B" },
          { label: "Expiring This Month", value: "23", icon: Calendar, color: "#EF4444" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-[#0d1230] rounded-lg p-2.5 border border-glass-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 mb-1">
              <m.icon className="w-2.5 h-2.5" style={{ color: m.color }} />
              <span className="text-[8px] text-dim-gray">{m.label}</span>
            </div>
            <div className="text-xs font-bold font-mono" style={{ color: m.color }}>
              {m.value}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[8px] pt-2 border-t border-glass-border">
        <span className="text-dim-gray">Waiver compliance</span>
        <span className="text-electric-green flex items-center gap-0.5">
          <CheckCircle className="w-2.5 h-2.5" />
          100% verified today
        </span>
      </div>
    </div>
  );
}

function RevenueVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [38, 45, 52, 58, 65, 82];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <BarChart3 className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Revenue Growth
          </span>
        </div>
        <span className="text-[9px] text-electric-green">+38% YoY</span>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full bg-electric-green/40 rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: `${heights[i]}%` }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            />
            <span className="text-[7px] text-dim-gray mt-1">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── FAQ data ─────────────────────── */

const faqData = [
  {
    question: "How does GymWyse handle high-volume day pass sales at a climbing gym?",
    answer: "Climbing gyms process significantly more day passes than traditional fitness facilities, and GymWyse is built for that volume. The front-desk check-in interface processes day passes in under fifteen seconds, including waiver verification, equipment rental selection, and payment processing. Returning visitors are recognized by name and their waiver status is checked automatically. First-time visitors are guided through a digital waiver flow on a tablet or their own phone before they can purchase a day pass. The system tracks daily visitor counts in real time, showing current capacity and peak-hour trends so you can staff accordingly. Day pass revenue is reported separately from membership income, giving you clear visibility into your walk-in business.",
  },
  {
    question: "Can GymWyse manage belay certifications and lead climbing certifications?",
    answer: "Yes. GymWyse includes a certification management module designed specifically for climbing gyms. When a climber completes a belay test or lead climbing assessment, your staff records the certification in their profile with an expiration date. The system checks certification status at every check-in and flags climbers whose certifications have expired or are approaching expiration. Climbers can view their certification status in the member app and schedule recertification sessions. You can configure different certification types for top-rope belay, lead belay, lead climbing, and auto-belay orientation, each with independent expiration windows. This ensures every climber on your walls has current, verified credentials.",
  },
  {
    question: "Does GymWyse track equipment rental inventory for climbing shoes, harnesses, and chalk bags?",
    answer: "Absolutely. GymWyse includes a rental management module that tracks every piece of equipment by type, size, and individual unit. When a day pass visitor or member rents climbing shoes, a harness, or a chalk bag, the system records which items were checked out, to whom, and at what time. When the climber checks out, rental items are returned and availability updates in real time. You can set low-stock alerts so the front desk knows when certain sizes are running low, track rental revenue by equipment type, and monitor usage cycles to know when individual items need replacement or cleaning. The rental system integrates with your point-of-sale so rental fees are added to the day pass transaction seamlessly.",
  },
  {
    question: "How does GymWyse support youth programs and summer camps at climbing gyms?",
    answer: "GymWyse provides a complete youth program management suite. You can create multi-day summer camp sessions, after-school climbing programs, and birthday party bookings with separate pricing, age restrictions, and participant limits. Parent or guardian waivers are collected digitally and linked to each youth participant. Instructors see a roster with emergency contact information, medical notes, and skill level for each camper. Payment plans for multi-week programs are supported, and the system sends automated reminders to parents about upcoming sessions, required gear, and pickup times. Youth program revenue is tracked separately in your reporting dashboard so you can evaluate the profitability of each program type.",
  },
  {
    question: "What membership types does GymWyse support for climbing gyms?",
    answer: "GymWyse supports every membership structure climbing gyms use: climbing-only memberships that grant access to walls and bouldering areas, climbing-plus-fitness memberships that include the weight room and cardio equipment, day pass punch cards for regular visitors who prefer not to commit to a monthly membership, and family plans with discounted rates for additional household members. You can also create student memberships, military discounts, and corporate group rates. Each membership type has configurable access permissions so your access control system knows exactly which areas each member can enter. The platform handles upgrades, downgrades, freezes, and cancellations with automatic proration.",
  },
  {
    question: "Can GymWyse manage route setting schedules and track climbing routes?",
    answer: "Yes. GymWyse includes a route management module where your setting team logs new routes and bouldering problems with details including grade, setter name, color, wall section, and date set. The member app displays current route maps so climbers can browse what is available before they arrive. When routes are stripped and reset, the system archives the old route data and notifies members about fresh sets in their preferred climbing style or grade range. This feature drives engagement because climbers return specifically to try new problems, and the notification system ensures they know about new sets as soon as they go up.",
  },
  {
    question: "How does GymWyse handle waivers for first-time climbing gym visitors?",
    answer: "GymWyse provides a fully digital waiver system optimized for the high-volume first-time visitor flow at climbing gyms. New visitors can complete their waiver online before arriving, from a QR code at the front desk, or on an in-gym tablet. Waivers are stored electronically and linked to the visitor's profile permanently. The system verifies waiver status at every subsequent visit, eliminating the need for paper waiver files and the risk of admitting someone without a signed waiver. You can customize your waiver language, include gym-specific rules and risk acknowledgments, and require periodic re-signing based on your legal team's recommendations. All waiver records are searchable and exportable for compliance audits.",
  },
  {
    question: "How long does it take to migrate from Zen Planner to GymWyse for a climbing gym?",
    answer: "Most climbing gyms complete their migration from Zen Planner to GymWyse within seven to ten business days. Our migration team handles the export of member records, certification histories, waiver records, equipment inventory, and payment methods. We configure your membership types, access permissions, rental categories, and certification requirements before launch. The onboarding team trains your front-desk staff on the new check-in flow, your route setters on the route management module, and your youth program coordinators on the camp registration system. We run both platforms in parallel during the transition so you never lose access to historical data or experience a gap in daily operations.",
  },
];

/* ── Comparison data ─────────────────────── */

const comparisonRows = [
  { feature: "Day pass management", gymwyse: "Under 15-second processing", competitor: "Standard check-in flow" },
  { feature: "Waiver system", gymwyse: "Digital with auto-verification", competitor: "Basic digital forms" },
  { feature: "Belay/lead certification tracking", gymwyse: "Built-in with expiry alerts", competitor: "Not available" },
  { feature: "Equipment rental tracking", gymwyse: "Per-unit with size tracking", competitor: "Manual process" },
  { feature: "Route management", gymwyse: "Full route logging + member app", competitor: "Not available" },
  { feature: "Youth program management", gymwyse: "Native with parent portals", competitor: "Basic class scheduling" },
  { feature: "Monthly cost", gymwyse: "$99/mo", competitor: "$186+/mo" },
  { feature: "Contract requirement", gymwyse: "None", competitor: "Annual commitment" },
];

/* ── Main component ─────────────────────── */

export function VerticalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
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
      {/* ── Hero ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for Climbing Gyms
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Climbing Gym Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software built for climbing gyms that deal with
              challenges no other fitness facility faces. From high-volume day pass processing and
              equipment rental tracking to belay certification management and digital waiver systems,
              our platform handles every operational layer specific to indoor climbing. Whether you run
              a bouldering-only facility, a full-service climbing gym with lead walls and auto-belays,
              or a hybrid climbing-plus-fitness center, GymWyse replaces the fragmented tools you are
              using today with a single platform designed for the unique demands of vertical fitness.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for Climbing Gyms
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join gyms like Ascent Climbing Portland, Summit Walls Brooklyn, and Crag Climbing Co. Austin
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gym Operations Basics ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
              Everything Your Climbing Gym Needs to Operate Safely and Profitably
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Climbing gyms operate fundamentally differently from traditional fitness facilities.
                A significant portion of your revenue comes from day passes and drop-in visitors rather
                than recurring memberships, which means your front desk must process high volumes of
                one-time transactions quickly and accurately. Every visitor needs a valid waiver on file
                before they touch a wall. Members and day pass visitors alike may rent climbing shoes,
                harnesses, and chalk bags, creating an equipment tracking layer that standard gym
                software simply does not address. Your check-in process must verify not just membership
                status but also waiver compliance and safety certifications before granting access.
              </p>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Scheduling at a climbing gym extends beyond group fitness classes. You need to manage
                belay certification clinics, lead climbing assessments, youth climbing programs, summer
                camps, birthday parties, team building events, and competition training sessions. Each
                program type has different pricing, different age requirements, different staff
                qualifications, and different equipment needs. GymWyse handles all of these program
                types natively, with dedicated registration flows, parent portals for youth programs,
                and automated communications that reduce the administrative burden on your team.
              </p>
              <p className="text-lg text-soft-white leading-relaxed">
                Billing at a climbing gym includes membership dues, day pass purchases, equipment
                rentals, retail sales, program registration fees, and private event bookings. GymWyse
                consolidates all of these revenue streams into a single billing and reporting
                platform. Failed payment recovery runs automatically for membership dues, rental fees
                are bundled into day pass transactions at checkout, and program registrations are
                collected at the time of booking. Your accounting team gets clean, categorized revenue
                reports that separate membership income from day pass revenue from rental fees from
                retail sales, eliminating the reconciliation nightmare that comes with using multiple
                disconnected systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Climbing Gyms Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Day Pass Volume Bottlenecks",
                description:
                  "Climbing gyms see dramatically higher drop-in traffic than traditional gyms, especially on weekends and during peak evening hours. Long check-in lines during these rush periods frustrate visitors, reduce the number of people who actually make it through the door, and create a chaotic front-desk experience. Without a streamlined day pass flow that handles waiver verification, rental selection, and payment in a single transaction, you are leaving revenue on the floor and creating a poor first impression for visitors you want to convert into members.",
                stat: "Climbing gyms average 40% revenue from day passes alone",
              },
              {
                icon: ShieldCheck,
                title: "Waiver and Certification Compliance Gaps",
                description:
                  "Every person who climbs in your facility must have a valid, signed waiver. Climbers using top-rope or lead walls need verified belay certifications. Managing these requirements with paper forms or disconnected digital tools creates compliance gaps that expose your business to serious liability. A single climber admitted without a valid waiver or with an expired belay certification represents a significant legal and safety risk. Manual verification slows down your check-in process and is prone to human error during busy periods.",
                stat: "67% of climbing gyms report waiver compliance gaps with paper systems",
              },
              {
                icon: TrendingDown,
                title: "Equipment Rental Revenue Leakage",
                description:
                  "Climbing shoe, harness, and chalk bag rentals represent a meaningful revenue stream for most climbing gyms, yet many facilities track rentals manually or not at all. Without per-unit tracking, equipment goes missing, usage cycles are unknown, and replacement timing is reactive rather than planned. Gyms that do not track rental inventory accurately experience five to ten percent revenue leakage from unreturned or unrecorded rentals, and they cannot forecast equipment replacement budgets because they lack data on how many rental cycles each item has completed.",
                stat: "5-10% rental revenue lost without per-unit tracking",
              },
            ].map((pp, i) => {
              const Icon = pp.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {pp.description}
                  </p>
                  <span className="text-xs text-electric-green font-medium">
                    {pp.stat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mid-content CTA - Calculate Your ROI ── */}
      <section className="py-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-7 h-7 text-electric-green" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
              See What GymWyse Can Save Your Climbing Gym
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue
              your climbing gym could gain by switching to GymWyse. Most climbing
              gyms recover their subscription cost in the first week through
              improved rental tracking alone.
            </p>
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Solution Deep-Dive ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Features Built for Climbing Gyms
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Day Pass Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                High-Volume Day Pass Management and Walk-In Processing
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Climbing gyms depend on day pass revenue in a way that traditional fitness facilities
                simply do not. GymWyse provides a front-desk interface optimized for rapid day pass
                processing that handles waiver verification, equipment rental selection, and payment
                collection in a single streamlined transaction. Returning visitors are identified by
                name or phone number, their waiver status is verified automatically, and the check-in
                completes in under fifteen seconds. First-time visitors are guided through a digital
                waiver flow on a tablet or their own smartphone before their day pass is activated.
                The system tracks daily visitor counts in real time, displays current facility
                capacity, and reports peak-hour traffic patterns so you can staff your front desk
                appropriately. Day pass visitors are automatically tagged for follow-up conversion
                campaigns that encourage them to purchase a membership after their second or third
                visit, turning one-time revenue into recurring income.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Under-fifteen-second check-in with waiver verification and rental bundling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Real-time facility capacity tracking with peak-hour traffic analytics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automated day-pass-to-membership conversion campaigns after repeat visits
                  </span>
                </li>
              </ul>
              <DayPassVisual />
            </motion.div>

            {/* Feature 2: Waiver & Certification Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Digital Waivers, Belay Certifications, and Safety Compliance
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Safety compliance is non-negotiable at a climbing gym, and GymWyse makes it
                automatic. The digital waiver system allows visitors to sign before they arrive via
                a link on your website, at the front desk on a dedicated tablet, or on their own
                phone by scanning a QR code. Every waiver is stored electronically and linked to the
                visitor's profile permanently. At check-in, the system verifies waiver status
                automatically and blocks access if no valid waiver is on file. Beyond waivers, GymWyse
                manages belay certifications, lead climbing certifications, and auto-belay orientations
                as distinct credential types. Each certification has a configurable expiration window,
                and the system flags expiring or expired certifications at check-in. Climbers receive
                automated reminders when their certifications are approaching expiration, with a direct
                link to schedule recertification. Your staff can record new certifications in seconds
                after a climber passes their belay or lead test, and the credential is immediately
                reflected in the member's profile.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Multi-channel digital waivers with automatic verification at every check-in
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Belay, lead climbing, and auto-belay certification tracking with expiry alerts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automated recertification reminders with direct scheduling links for climbers
                  </span>
                </li>
              </ul>
              <WaiverVisual />
            </motion.div>

            {/* Feature 3: Equipment Rental Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Equipment Rental Tracking and Inventory Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Equipment rentals are a core revenue stream for climbing gyms, and GymWyse tracks
                every rental down to the individual unit. Each pair of climbing shoes, harness, chalk
                bag, and belay device is cataloged by type, size, and unique identifier. When a
                visitor rents equipment, the system records which specific items were checked out, to
                whom, and at what time. When the climber returns the equipment at the end of their
                session, items are checked back in and availability updates instantly across your
                front-desk dashboard. Low-stock alerts notify your team when specific sizes are
                running low so you can proactively redistribute inventory or encourage visitors to
                bring their own gear. The system tracks usage cycles per unit, so you know exactly
                when a pair of rental shoes has exceeded its service life and needs replacement. Rental
                revenue is reported by equipment type, giving you clear data on which items generate
                the most income and which sizes are most in demand. Equipment replacement budgets
                become data-driven rather than guesswork, reducing both over-spending on unnecessary
                replacements and the risk of renting worn-out gear.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Per-unit tracking for shoes, harnesses, chalk bags, and belay devices by size
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Usage cycle monitoring for data-driven equipment replacement scheduling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Rental revenue reporting segmented by equipment type, size, and time period
                  </span>
                </li>
              </ul>
              <RentalVisual />
            </motion.div>

            {/* Feature 4: Youth Programs & Membership Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Youth Programs, Summer Camps, and Flexible Membership Types
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Climbing gyms serve a uniquely diverse member base with equally diverse needs, and
                GymWyse provides the flexibility to manage all of it. Create climbing-only memberships,
                climbing-plus-fitness memberships that include the weight room, day pass punch cards
                for regulars who prefer pay-per-visit, family plans with household discounts, and
                student or military rates. Each membership type carries configurable access permissions
                that integrate with your access control hardware. Beyond memberships, GymWyse excels at
                youth program management. Create multi-week summer camp sessions, after-school climbing
                programs, competition team registrations, and birthday party bookings with dedicated
                registration flows. Parent portals let guardians sign waivers, provide emergency contact
                and medical information, and manage their child's enrollment and payments. Instructors
                see detailed rosters with skill levels, medical notes, and guardian contact information
                for every participant. Payment plans for multi-week programs are supported natively, and
                automated reminders keep parents informed about upcoming sessions, gear requirements,
                and schedule changes. Youth program revenue is tracked separately in your analytics
                dashboard so you can evaluate the profitability and growth trajectory of each program.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Climbing-only, climbing-plus-fitness, day pass, family, and student membership types
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Summer camp, after-school, competition team, and birthday party management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Parent portals with digital waivers, medical info, and payment plan management
                  </span>
                </li>
              </ul>
              <RevenueVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industry Trends ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Climbing Gym Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the indoor climbing industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Bouldering Growth Accelerates Post-Olympics",
                description:
                  "The inclusion of sport climbing in the Olympics has driven a massive surge in bouldering participation, particularly among eighteen-to-thirty-four-year-olds. Bouldering-only facilities are opening at record pace because they require less vertical space, lower construction costs, and no rope infrastructure. GymWyse supports bouldering gyms with route management, day pass optimization, and community features that keep boulderers engaged and competing against themselves and each other through digital leaderboards and problem completion tracking.",
              },
              {
                title: "Competition Walls and Speed Climbing",
                description:
                  "Competition-format climbing walls, including speed walls and IFSC-standard lead and bouldering competition areas, are becoming standard differentiators for climbing gyms in 2026. Facilities that host local competitions attract climbers from across the region and generate significant event revenue. GymWyse supports competition event management with registration, bracket tracking, and results publishing directly through the member app, turning your gym into a competitive climbing hub.",
              },
              {
                title: "Fitness Plus Climbing Hybrid Facilities",
                description:
                  "The most successful climbing gyms in 2026 are expanding beyond walls to include full fitness areas with strength training equipment, cardio zones, yoga studios, and sauna facilities. This hybrid model increases average revenue per member by offering premium membership tiers that include fitness access. GymWyse manages multi-zone access permissions so climbing-only members use the walls while premium members access everything, all tracked through a single membership and access control system.",
              },
            ].map((trend, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {trend.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-2 mb-6">
                Ascent Climbing Gym, Portland, OR
              </h2>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Ascent Climbing Gym in Portland operated a twenty-thousand-square-foot facility with
                bouldering, top-rope, and lead walls. They were running on Zen Planner for membership
                management and using paper waivers and manual spreadsheets for certifications and
                equipment rentals. Weekend check-in lines stretched out the door, paper waivers were
                frequently misfiled, and rental shoes went missing at a rate that cost them over four
                thousand dollars per year in unreplaced inventory. After switching to GymWyse, they
                digitized their entire waiver system, achieving one hundred percent waiver compliance
                verification at check-in. The streamlined day pass flow cut average check-in time from
                two minutes and forty-five seconds to twelve seconds. Equipment rental tracking
                recovered an estimated three hundred fifty dollars per month in previously unrecorded
                or unreturned rentals. Their summer camp program grew by forty-two percent after
                implementing the parent portal and automated registration system. Total revenue
                increased by twenty-four percent in the first year, with day pass revenue up thirty-one
                percent thanks to faster processing and conversion campaigns that turned repeat visitors
                into members.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { metric: "Check-In Time", before: "2m 45s", after: "12 sec" },
                  { metric: "Waiver Compliance", before: "~85%", after: "100%" },
                  { metric: "Annual Revenue", before: "$480K", after: "$595K" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-deep-space/60 rounded-lg p-5 border border-glass-border text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xs text-dim-gray uppercase tracking-wider mb-3">
                      {item.metric}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-sm text-alert-red font-mono line-through">
                        {item.before}
                      </span>
                      <ArrowRight className="w-4 h-4 text-electric-green" />
                      <span className="text-lg font-bold text-electric-green font-mono">
                        {item.after}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            What Climbing Gym Owners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Our weekend check-in lines were killing our customer experience. With Zen Planner, processing a day pass with waiver and rental took nearly three minutes. GymWyse cut that to twelve seconds. We literally had customers comment on how fast check-in became. The waiver system alone eliminated our paper filing cabinet and gave us complete compliance confidence for the first time in eight years of operation.",
                author: "Kyle Morrison",
                role: "Owner, Ascent Climbing Gym",
                location: "Portland, OR",
              },
              {
                quote:
                  "The equipment rental tracking module is something we did not even know we needed until we saw the data. We were losing hundreds of dollars a month in untracked rentals and unreturned chalk bags. GymWyse tracks every unit by size and identifier, and our rental revenue is up twenty-two percent simply from capturing transactions we were missing before. The usage cycle data also let us plan shoe replacements proactively instead of waiting for complaints.",
                author: "Nina Vasquez",
                role: "General Manager, Summit Walls",
                location: "Brooklyn, NY",
              },
              {
                quote:
                  "Our youth climbing programs went from our biggest operational headache to our most profitable program line after switching to GymWyse. The parent portal handles waivers, emergency contacts, and payments. Instructors see complete rosters with medical notes. Registration is automated. We ran three summer camp sessions this year with zero paperwork issues and a forty-two percent increase in enrollment compared to last year when we managed everything through email and spreadsheets.",
                author: "Tom Brennan",
                role: "Founder, Crag Climbing Co.",
                location: "Austin, TX",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-soft-white leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold text-sm">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-cool-gray">{testimonial.role}</div>
                    <div className="text-xs text-dim-gray">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              GymWyse vs Zen Planner
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Zen Planner for climbing gyms. Purpose-built
              climbing features at a fraction of the cost with no lock-in contracts.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray">Feature</div>
                <div className="p-4 md:p-6 text-sm font-semibold text-electric-green text-center">GymWyse</div>
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray text-center">Zen Planner</div>
              </div>
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 border-b border-glass-border/50 last:border-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 md:p-6 text-sm text-pure-white font-medium">{row.feature}</div>
                  <div className="p-4 md:p-6 text-sm text-electric-green text-center">{row.gymwyse}</div>
                  <div className="p-4 md:p-6 text-sm text-cool-gray text-center">{row.competitor}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-6 text-center">
                Why Climbing Gyms Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Purpose-built day pass processing that handles waiver, rental, and payment in seconds",
                  "Belay and lead certification tracking with expiry alerts not available in Zen Planner",
                  "Per-unit equipment rental tracking that recovers lost revenue from unrecorded rentals",
                  "Youth program and summer camp management with parent portals and automated registration",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-soft-white">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Common questions from climbing gym owners about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaqIndex === i}
                >
                  <span className="text-base font-semibold text-pure-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-glass-border/50 pt-4">
                          <p className="text-sm text-cool-gray leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Explore More Solutions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Discover how GymWyse helps climbing gyms tackle every aspect of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/demo", label: "Book a Demo" },
              { href: "/pricing", label: "View Pricing" },
              { href: "/crossfit-gym-software", label: "CrossFit Gym Software" },
              { href: "/mma-gym-software", label: "MMA Gym Software" },
              { href: "/increase-gym-revenue", label: "Increase Gym Revenue" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="glass-card p-6 flex items-center justify-between group hover:border-electric-green/30 transition-colors block"
                >
                  <span className="text-sm font-medium text-pure-white group-hover:text-electric-green transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-dim-gray group-hover:text-electric-green transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple, Transparent Pricing for Climbing Gyms
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your climbing gym needs for one flat rate. No setup fees. No per-member
            charges. No contracts. Cancel anytime. Day pass management, digital waivers,
            certification tracking, equipment rental, youth program management, and your branded
            member app are all included from day one.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Waiver System + Rental Tracking + Branded Member App
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
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Transform Your Climbing Gym?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join climbing gyms across the country that have switched to GymWyse and eliminated
              check-in bottlenecks, achieved complete waiver compliance, recovered rental revenue,
              and grown their youth programs. Book a personalized demo today and see exactly how
              GymWyse handles your day pass volume, certification tracking, and equipment management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
