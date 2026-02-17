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
  ShoppingBag,
  Heart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function ClassScheduleVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slots = [
    { time: "6:00 AM", classes: [true, false, true, false, true, true] },
    { time: "9:30 AM", classes: [true, true, true, true, true, false] },
    { time: "12:00 PM", classes: [false, true, false, true, false, true] },
    { time: "5:30 PM", classes: [true, true, true, true, true, false] },
    { time: "7:00 PM", classes: [true, false, true, false, true, false] },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <Calendar className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Barre Class Schedule
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        <div />
        {days.map((d) => (
          <div key={d} className="text-[8px] text-dim-gray pb-1">
            {d}
          </div>
        ))}
        {slots.map((slot) => (
          <>
            <div
              key={slot.time}
              className="text-[7px] text-dim-gray flex items-center"
            >
              {slot.time}
            </div>
            {slot.classes.map((active, j) => (
              <motion.div
                key={`${slot.time}-${j}`}
                className={`h-5 rounded ${active ? "bg-electric-green/20 border border-electric-green/30" : "bg-[#0d1230] border border-glass-border"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: j * 0.03 }}
                viewport={{ once: true }}
              />
            ))}
          </>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[8px] text-dim-gray">24 classes this week</span>
        <span className="text-[8px] text-electric-green">92% capacity</span>
      </div>
    </div>
  );
}

function RetailVisual() {
  const items = [
    { name: "Grip Socks (S)", qty: "42 in stock", price: "$18", ok: true },
    { name: "Barre Socks (M)", qty: "7 left", price: "$16", ok: false },
    { name: "Studio Tank Top", qty: "31 in stock", price: "$38", ok: true },
    { name: "Water Bottle", qty: "19 in stock", price: "$24", ok: true },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <ShoppingBag className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Retail Inventory
          </span>
        </div>
        <span className="text-[9px] text-electric-green">$1,240 this week</span>
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
              <span className={`text-[8px] ${item.ok ? "text-dim-gray" : "text-alert-red"}`}>
                {item.qty}
              </span>
            </div>
            <span className="text-[10px] font-mono text-electric-green">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MemberEngagementVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <Heart className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Community Engagement
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "Active Members", value: "187", icon: Users, color: "#3B82F6" },
          { label: "Classes Booked", value: "412", icon: Calendar, color: "#00FF88" },
          { label: "Challenges Active", value: "3", icon: Star, color: "#F59E0B" },
          { label: "Retail Revenue", value: "$4.2K", icon: DollarSign, color: "#00FF88" },
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
        <span className="text-dim-gray">This week vs last</span>
        <span className="text-electric-green flex items-center gap-0.5">
          <TrendingUp className="w-2.5 h-2.5" />
          +22% engagement
        </span>
      </div>
    </div>
  );
}

function RevenueVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [40, 52, 48, 65, 58, 78];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <BarChart3 className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Revenue Growth
          </span>
        </div>
        <span className="text-[9px] text-electric-green">+27% YoY</span>
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
    question: "Can GymWyse manage class-pack-based pricing alongside unlimited memberships?",
    answer: "Absolutely. GymWyse supports unlimited memberships, fixed-class packs such as five-class or ten-class bundles, and single-drop-in purchases all within the same system. Members can purchase class packs directly through the branded member app or at the front desk. The platform automatically tracks remaining credits, sends low-balance reminders, and offers one-click upsell prompts when a client is running low. You can also configure autopay to convert expiring class packs into recurring memberships, smoothing your revenue without manual intervention.",
  },
  {
    question: "How does GymWyse handle small class sizes and waitlists for barre classes?",
    answer: "Boutique barre studios typically cap classes between twelve and fifteen participants to maintain a high-quality, personalized experience. GymWyse lets you set per-class capacity limits and automatically activates a waitlist once the cap is reached. When a spot opens due to a cancellation, the next person on the waitlist is notified instantly via push notification and email. You can configure automatic enrollment or require manual confirmation. The system also tracks historical waitlist data so you can identify which time slots consistently fill up and consider adding duplicate sections to capture unmet demand.",
  },
  {
    question: "Does GymWyse support retail point-of-sale for grip socks and studio merchandise?",
    answer: "Yes. GymWyse includes a built-in retail module that handles inventory management, barcode scanning, and point-of-sale transactions. You can sell grip socks, barre socks, branded apparel, water bottles, and any other merchandise. The system tracks stock levels in real time, sends low-inventory alerts, and generates sales reports segmented by product category. Members can also purchase retail items through the app for in-studio pickup, which streamlines checkout during busy class transitions and increases average transaction value.",
  },
  {
    question: "Can instructors manage their own schedules and substitutions in GymWyse?",
    answer: "Instructors get a dedicated portal where they can view their upcoming classes, mark availability, and request substitutions. When a sub is needed, GymWyse notifies all qualified instructors automatically. The first instructor to accept gets assigned, and members are notified of the change. Studio owners retain full approval control and can override any substitution. This eliminates the back-and-forth group texts and ensures every class is covered without owner intervention.",
  },
  {
    question: "How does GymWyse help me run intro offers and promotional pricing for new members?",
    answer: "GymWyse includes a promotion engine that lets you create introductory offers such as three classes for thirty dollars or a two-week unlimited trial at a reduced rate. You can set eligibility rules so that only first-time clients see these offers, define expiration windows, and configure automatic conversion to a standard membership once the intro period ends. The system tracks conversion rates from intro offers to full memberships, giving you hard data on which promotions drive lasting retention versus one-time visitors.",
  },
  {
    question: "What kind of community features does GymWyse offer for barre studios?",
    answer: "GymWyse helps you build community with challenges, milestone tracking, and social features built into the member app. You can create studio-wide challenges such as thirty classes in sixty days, track member streaks, and award digital badges for achievements. Members can share their progress, leave class reviews, and connect with fellow participants. The platform also supports teacher training program management, letting you enroll aspiring instructors, track their certification progress, and schedule mentorship sessions alongside your regular class calendar.",
  },
  {
    question: "Is GymWyse suitable for hybrid barre studios offering both in-person and online classes?",
    answer: "GymWyse is built for hybrid delivery. You can schedule in-person classes with capacity limits and virtual classes with integrated video streaming links in the same calendar. Members see both options in the app and can filter by format. For on-demand content, you can upload recorded barre workouts to a content library that members access based on their membership tier. The platform tracks attendance across both formats, so you get a unified view of engagement whether a member attends in-studio or joins from home.",
  },
  {
    question: "How long does it take to migrate from Mindbody to GymWyse?",
    answer: "Most barre studios complete their migration from Mindbody to GymWyse within seven to ten business days. Our migration team handles the export of member records, purchase history, class schedules, and payment methods. We run both systems in parallel during a brief overlap period so you never lose access to historical data. The onboarding team also configures your branded app, sets up your class templates, and trains your front-desk staff. Many studio owners tell us the process was smoother than they expected, and they wish they had made the switch sooner.",
  },
];

/* ── Comparison data ─────────────────────── */

const comparisonRows = [
  { feature: "Boutique class-pack pricing", gymwyse: "Built-in", competitor: "Add-on required" },
  { feature: "Branded member app", gymwyse: "Included", competitor: "$199/mo extra" },
  { feature: "Retail POS & inventory", gymwyse: "Included", competitor: "Third-party integration" },
  { feature: "Waitlist with auto-enrollment", gymwyse: "Automatic", competitor: "Manual only" },
  { feature: "Instructor sub management", gymwyse: "Self-service portal", competitor: "Admin only" },
  { feature: "Community challenges", gymwyse: "Built-in", competitor: "Not available" },
  { feature: "Monthly cost (single location)", gymwyse: "$99/mo", competitor: "$249+/mo" },
  { feature: "Contract requirement", gymwyse: "None", competitor: "12-month minimum" },
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
              Built for Barre Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Barre Studio Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software designed specifically for boutique barre studios.
              From classical barre and cardio barre to barre-yoga fusion and prenatal barre, our platform
              handles every class format, manages your prop inventory, and keeps your intimate community
              thriving. Stop wrestling with generic tools that were never built for the boutique fitness
              experience and start running your studio with software that understands the nuances of
              barre instruction, small class sizes, and the personalized attention your members expect.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for Barre Studios
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join studios like Pure Barre SF, The Barre Code Chicago, and Barre3 Portland
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
              Everything Your Barre Studio Needs to Run Smoothly
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Running a barre studio means juggling dozens of moving parts every single day. You need
                a membership system that handles class packs, unlimited monthly passes, and introductory
                offers without confusion. You need a check-in process that is fast enough to process a
                full class of twelve to fifteen members in under two minutes, because your lobby is small
                and your next class starts right after. You need scheduling tools that account for
                classical barre, cardio barre, barre-yoga fusion, prenatal barre, and private sessions,
                each with different durations, instructor qualifications, and equipment requirements.
              </p>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Billing in a boutique barre environment is more nuanced than a traditional gym. Your
                members might purchase a ten-class pack, an unlimited monthly membership, or a single
                drop-in. Some members freeze their accounts during summer travel. Others want to gift
                class credits to friends. Your billing system must handle all of these scenarios
                gracefully, processing recurring charges, tracking class-pack balances, issuing refunds,
                and managing failed payments with automated retry logic and dunning emails that feel
                personal rather than corporate.
              </p>
              <p className="text-lg text-soft-white leading-relaxed">
                Staff management is equally critical. Your instructors are the heartbeat of your studio,
                and each one brings a unique teaching style that draws loyal followers. GymWyse gives you
                tools to manage instructor availability, handle substitution requests, track per-class
                pay rates, and generate payroll summaries. Front-desk staff can manage check-ins, process
                retail sales, and answer member questions from a single unified dashboard instead of
                toggling between three or four different applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Barre Studios Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Class Capacity Chaos",
                description:
                  "Barre classes cap at twelve to fifteen students, and overbooking even one spot destroys the boutique experience. Without proper capacity management and automated waitlists, studios either turn away eager clients or pack rooms beyond what instructors can safely monitor. Late cancellations leave empty spots that could have gone to waitlisted members, and manual tracking through spreadsheets leads to double-bookings that frustrate everyone involved.",
                stat: "Studios lose up to $800/month from unfilled cancellation spots",
              },
              {
                icon: DollarSign,
                title: "Complex Pricing Fragmentation",
                description:
                  "Boutique barre studios rely on a layered pricing model with class packs, unlimited memberships, intro offers, and single drop-ins. Managing these tiers across spreadsheets or basic software creates billing errors, revenue leakage, and frustrated members who are charged incorrectly. When a member downgrades from unlimited to a ten-pack, the proration math alone can consume thirty minutes of admin time per incident.",
                stat: "42% of boutique studios report billing errors monthly",
              },
              {
                icon: TrendingDown,
                title: "Member Retention Drop-Off",
                description:
                  "The average barre studio sees thirty-five percent of new members disengage after their introductory package expires. Without automated follow-up sequences, challenge programs, and milestone celebrations, studios lose clients silently. By the time an owner notices a regular is missing, the member has already signed up at a competing studio. Reactive outreach is too late; proactive engagement is the only way to protect your community.",
                stat: "35% of new members churn after intro packages expire",
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
              See What GymWyse Can Save Your Barre Studio
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue
              you could gain by switching to GymWyse. Most barre studios see a
              return on investment within the first sixty days.
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
            Features Built for Barre Studios
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Smart Class Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Smart Barre Class Scheduling and Capacity Control
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Schedule every barre format your studio offers from a single calendar. GymWyse
                understands that classical barre requires a different setup than cardio barre, and
                that prenatal barre classes need specialized prop configurations and lower capacity
                limits. Set maximum enrollment per class based on your studio dimensions, barre
                positions, and instructor preferences. The system automatically manages waitlists,
                sends real-time notifications when spots open, and tracks attendance patterns so
                you know which time slots consistently sell out and which need marketing attention.
                Recurring schedules propagate weeks in advance, and one-off workshops or special
                events slot seamlessly into your calendar without disrupting your regular programming.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Per-class capacity limits with automatic waitlist activation for boutique class sizes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Multi-format support for classical, cardio, fusion, and prenatal barre
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Instructor substitution portal with automated notifications to qualified subs
                  </span>
                </li>
              </ul>
              <ClassScheduleVisual />
            </motion.div>

            {/* Feature 2: Boutique Pricing & Billing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Boutique Pricing Models and Automated Billing
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Barre studios thrive on flexible pricing that meets members where they are. GymWyse
                supports every pricing structure boutique studios use: five-class and ten-class packs
                with configurable expiration windows, unlimited monthly memberships with autopay,
                intro offers for first-time clients, single drop-in rates, and private session
                packages. The platform handles proration automatically when members switch between
                tiers, sends low-balance alerts when class packs are running out, and triggers
                upsell prompts at the perfect moment. Failed payment recovery runs automatically
                with customizable retry schedules and personalized dunning messages that preserve
                your studio brand. Every transaction syncs with your accounting software, eliminating
                end-of-month reconciliation headaches and giving you real-time visibility into your
                revenue streams across membership types, class packs, retail, and private sessions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Class packs, unlimited memberships, drop-ins, and intro offers in one system
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automatic proration, failed payment recovery, and personalized dunning sequences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Real-time revenue dashboards segmented by membership type and product category
                  </span>
                </li>
              </ul>
              <RetailVisual />
            </motion.div>

            {/* Feature 3: Community & Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Community Building and Member Retention Tools
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Community is the lifeblood of every barre studio, and GymWyse gives you the tools
                to nurture it systematically rather than hoping it happens organically. Create
                studio-wide challenges like thirty classes in sixty days or summer barre streaks
                that keep members motivated and showing up consistently. Track individual milestones
                such as one-hundredth class celebrations, birthday shoutouts, and membership
                anniversaries with automated recognition messages that make members feel seen. The
                member app includes social features where clients can share their achievements,
                leave class reviews, and connect with other regulars. For studios that offer teacher
                training programs, GymWyse manages enrollment, tracks certification progress, and
                schedules mentorship sessions alongside your regular class calendar. Automated
                re-engagement campaigns identify at-risk members based on declining attendance
                patterns and trigger personalized outreach before they churn, turning passive
                attrition into active retention.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Studio challenges, streak tracking, and milestone celebrations with digital badges
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Teacher training program management with certification tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automated at-risk member detection and personalized re-engagement campaigns
                  </span>
                </li>
              </ul>
              <MemberEngagementVisual />
            </motion.div>

            {/* Feature 4: Retail & Prop Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Retail Sales, Prop Inventory, and Equipment Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Barre studios depend on a curated retail offering to supplement class revenue and
                reinforce brand identity. GymWyse includes a full retail point-of-sale system that
                manages your grip socks, barre socks, branded apparel, water bottles, and any other
                merchandise. Track inventory levels in real time, receive low-stock alerts before you
                run out of your best sellers, and view sales reports segmented by product category,
                time period, and purchasing member. Members can browse and purchase retail items
                through the app for in-studio pickup, reducing checkout bottlenecks during busy class
                transitions. Beyond retail, GymWyse tracks your studio prop inventory including
                exercise balls, resistance bands, light hand weights, and barre-mounted equipment.
                Know exactly when props need replacement based on usage cycles, assign equipment to
                specific class formats, and maintain a maintenance log that keeps your studio safe
                and professional. The combined retail and equipment data feeds into your financial
                dashboard, giving you a complete picture of non-membership revenue streams and
                operational costs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Full retail POS with barcode scanning, inventory tracking, and in-app purchasing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Prop and equipment lifecycle tracking for balls, bands, weights, and barre hardware
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Unified financial dashboard combining class revenue, retail sales, and equipment costs
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
              Barre Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the barre fitness industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Barre Fitness Growing 15% Year Over Year",
                description:
                  "The barre fitness segment continues to expand at approximately fifteen percent annually, driven by growing demand from demographics beyond the traditional core audience. Men's barre classes are gaining traction as athletes and cross-trainers discover the benefits of isometric holds and targeted muscle engagement. Studios that offer co-ed scheduling and marketing that speaks to diverse audiences are capturing new market share that competitors miss.",
              },
              {
                title: "Hybrid and On-Demand Barre Delivery",
                description:
                  "The most successful barre studios in 2026 operate hybrid models that combine in-person classes with live-streamed sessions and an on-demand video library. Members expect the flexibility to attend from home on busy days without losing their class credits. Studios using GymWyse manage both formats from a single platform, tracking attendance and engagement metrics across in-studio and virtual participation to optimize their programming mix.",
              },
              {
                title: "Wellness Integration and Holistic Programming",
                description:
                  "Barre studios are expanding beyond pure fitness into holistic wellness offerings. Barre-yoga fusion classes, meditation add-ons, and nutrition coaching packages are becoming standard differentiators. Studios that bundle these services into premium membership tiers see higher average revenue per member and stronger retention, because members consolidate their wellness spending into a single trusted studio.",
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
                Pure Barre Studio, San Francisco
              </h2>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Pure Barre Studio in San Francisco was running their twenty-instructor, two-location
                operation on Mindbody when they hit a breaking point. Class packs were being miscounted,
                waitlists required manual management, and their retail inventory of grip socks and
                branded apparel was tracked in a separate spreadsheet. After switching to GymWyse, they
                consolidated everything into a single platform. Within ninety days, they saw a
                twenty-eight percent increase in class attendance driven by automated waitlist fills and
                targeted re-engagement campaigns. Retail revenue climbed nineteen percent thanks to
                in-app purchasing and low-stock alerts that ensured best-sellers never ran out. Their
                admin team reported saving twelve hours per week previously spent on manual billing
                reconciliation and instructor schedule coordination.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { metric: "Class Attendance", before: "72%", after: "92%" },
                  { metric: "Monthly Revenue", before: "$38K", after: "$52K" },
                  { metric: "Admin Hours/Week", before: "20 hrs", after: "8 hrs" },
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
            What Barre Studio Owners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "We switched from Mindbody after five years and the difference is night and day. Our waitlist management alone has recovered thousands of dollars in previously lost revenue. The branded app makes us look like a premium studio, which we are. Our members love the class-pack tracking and the ability to purchase grip socks directly from their phones.",
                author: "Rachel Simmons",
                role: "Owner, Align Barre Studio",
                location: "Austin, TX",
              },
              {
                quote:
                  "GymWyse transformed how we manage our teacher training program. We used to track certification progress in Google Docs, which was embarrassing for a studio of our size. Now everything from mentorship scheduling to practical exam sign-ups lives in one platform. Our trainees are more engaged and our certification completion rate has increased by forty percent.",
                author: "Priya Kapoor",
                role: "Studio Director, Elevate Barre",
                location: "Toronto, ON",
              },
              {
                quote:
                  "The retail module pays for the entire GymWyse subscription by itself. We were losing track of grip sock inventory constantly with our old spreadsheet system, and members had to wait in line at the front desk. Now they order through the app and pick up before class. Our retail revenue is up thirty-one percent since switching from ClassPass-integrated scheduling tools.",
                author: "Margot Laurent",
                role: "Founder, Barre Collective",
                location: "Denver, CO",
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
              GymWyse vs Mindbody
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Mindbody for barre studios. Lower cost,
              more features, and no long-term contracts.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray">Feature</div>
                <div className="p-4 md:p-6 text-sm font-semibold text-electric-green text-center">GymWyse</div>
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray text-center">Mindbody</div>
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
                Why Barre Studios Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Save over $150 per month compared to Mindbody with more features included",
                  "No twelve-month contract lock-in — cancel anytime with no penalties",
                  "Branded member app included at no extra cost instead of a $199/month add-on",
                  "Purpose-built boutique features like class packs, waitlists, and retail POS",
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
              Common questions from barre studio owners about GymWyse.
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
              Discover how GymWyse helps barre studios tackle every aspect of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/demo", label: "Book a Demo" },
              { href: "/pricing", label: "View Pricing" },
              { href: "/yoga-studio-software", label: "Yoga Studio Software" },
              { href: "/pilates-studio-software", label: "Pilates Studio Software" },
              { href: "/reduce-gym-member-churn", label: "Reduce Member Churn" },
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
            Simple, Transparent Pricing for Barre Studios
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your barre studio needs for one flat rate. No setup fees. No contracts.
            No per-member charges. Cancel anytime. Your branded member app, unlimited class
            scheduling, retail POS, and revenue analytics are all included from day one.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Revenue Analytics + Branded Member App + Retail POS
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
              Ready to Transform Your Barre Studio?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join hundreds of barre studios that have switched to GymWyse and never looked back.
              Whether you run a single boutique location or a multi-studio operation, our platform
              scales with you. Book a personalized demo today and see exactly how GymWyse handles
              your class formats, pricing models, and community features.
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/platform/revenue-analytics"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Explore the Revenue Command Center
              </Link>
              <Link
                href="/blog"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Read Our Latest Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
