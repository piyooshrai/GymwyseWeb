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
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function TrainerScheduleVisual() {
  const trainers = ["Coach Alex", "Coach Maria", "Coach Dev", "Coach Sam"];
  const bays = ["Bay A", "Bay B", "Bay C"];
  const schedule = [
    [true, false, true, false],
    [false, true, false, true],
    [true, false, true, true],
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <Calendar className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Trainer & Bay Schedule — Tuesday
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1 text-center">
        <div />
        {trainers.map((t) => (
          <div key={t} className="text-[7px] text-dim-gray pb-1 truncate">
            {t}
          </div>
        ))}
        {bays.map((bay, bi) => (
          <>
            <div
              key={bay}
              className="text-[8px] text-dim-gray flex items-center"
            >
              {bay}
            </div>
            {schedule[bi].map((active, j) => (
              <motion.div
                key={`${bay}-${j}`}
                className={`h-6 rounded ${active ? "bg-electric-green/20 border border-electric-green/30" : "bg-[#0d1230] border border-glass-border"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: j * 0.04 }}
                viewport={{ once: true }}
              />
            ))}
          </>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-glass-border">
        <span className="text-[8px] text-dim-gray">32 sessions this week</span>
        <span className="text-[8px] text-electric-green">94% bay utilization</span>
      </div>
    </div>
  );
}

function CommissionVisual() {
  const trainers = [
    { name: "Coach Alex", sessions: "18", revenue: "$2,880", commission: "$1,152", rate: "40%" },
    { name: "Coach Maria", sessions: "22", revenue: "$3,520", commission: "$1,408", rate: "40%" },
    { name: "Coach Dev", sessions: "15", revenue: "$2,400", commission: "$840", rate: "35%" },
    { name: "Coach Sam", sessions: "20", revenue: "$3,200", commission: "$1,280", rate: "40%" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Commission Tracker — This Month
          </span>
        </div>
        <span className="text-[9px] text-electric-green">$4,680 total</span>
      </div>
      <div className="space-y-1.5">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[10px] text-pure-white block">{t.name}</span>
              <span className="text-[8px] text-dim-gray">{t.sessions} sessions ({t.rate})</span>
            </div>
            <span className="text-[10px] font-mono text-electric-green">
              {t.commission}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ClientProgressVisual() {
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center gap-1 mb-3">
        <ClipboardList className="w-3 h-3 text-sapphire-blue" />
        <span className="text-[10px] text-pure-white font-medium">
          Client Progress Dashboard
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "Active Clients", value: "94", icon: Users, color: "#3B82F6" },
          { label: "Sessions/Week", value: "78", icon: Calendar, color: "#00FF88" },
          { label: "Assessments Due", value: "12", icon: ClipboardList, color: "#F59E0B" },
          { label: "Monthly Revenue", value: "$24K", icon: DollarSign, color: "#00FF88" },
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
        <span className="text-dim-gray">Client retention rate</span>
        <span className="text-electric-green flex items-center gap-0.5">
          <TrendingUp className="w-2.5 h-2.5" />
          89% over 6 months
        </span>
      </div>
    </div>
  );
}

function RevenueVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [45, 50, 55, 62, 68, 80];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <BarChart3 className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Studio Revenue Growth
          </span>
        </div>
        <span className="text-[9px] text-electric-green">+34% YoY</span>
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
    question: "How does GymWyse handle multi-trainer scheduling and room allocation?",
    answer: "GymWyse provides a visual scheduling grid that maps trainers to training bays, rooms, or open floor zones across your studio. Each trainer sets their own availability, and the system prevents double-booking of both trainers and spaces. When a client books a session, GymWyse automatically assigns the appropriate bay based on session type, trainer preference, and equipment needs. Studio owners see a unified calendar view that shows every trainer's schedule side by side, making it easy to spot gaps, optimize bay utilization, and identify opportunities to add capacity during high-demand time slots.",
  },
  {
    question: "Can GymWyse track commissions and revenue splits for each trainer?",
    answer: "Yes. GymWyse supports fully customizable commission structures per trainer. You can configure flat-rate commissions, percentage-based splits, tiered rates based on session volume, and bonus thresholds. The platform calculates commissions automatically as sessions are completed and payments are collected. Trainers can view their own earnings dashboard in real time, reducing payroll questions and disputes. At the end of each pay period, studio owners export a commission summary that integrates directly with payroll software, eliminating manual spreadsheet calculations that consume hours every month.",
  },
  {
    question: "Does GymWyse support package management for personal training sessions?",
    answer: "Absolutely. GymWyse manages every package type personal training studios sell: individual pay-per-session pricing, five-session and ten-session packs with configurable expiration windows, monthly unlimited programs with session frequency limits, and semi-private training bundles for two to four clients. The system tracks remaining sessions per client in real time, sends automated low-balance alerts when packages are running out, and triggers upsell prompts that encourage clients to purchase their next package before the current one expires. Package revenue is attributed to the assigned trainer for accurate commission tracking.",
  },
  {
    question: "How does client handoff work when a trainer leaves or a client needs reassignment?",
    answer: "GymWyse makes trainer transitions seamless. When a client needs to be reassigned, the studio owner transfers the client profile, including all assessment history, program notes, progress photos, and remaining package balance, to the new trainer with a single action. The new trainer receives a comprehensive handoff summary and the client is notified with an introduction to their new trainer. No data is lost, and the client's training continuity is preserved. This feature is critical for studios where trainer turnover is a reality and client retention depends on smooth transitions.",
  },
  {
    question: "What assessment and progress tracking tools does GymWyse provide?",
    answer: "GymWyse includes a comprehensive assessment suite that trainers use to track client progress over time. Built-in templates cover body composition measurements, movement screening protocols, strength benchmarks, cardiovascular fitness tests, and flexibility assessments. Trainers can create custom assessment templates specific to their methodology. All assessment data is stored chronologically, allowing trainers and clients to view progress charts that visualize improvements over weeks and months. Progress photos can be uploaded and compared side by side. Automated assessment reminders ensure trainers never miss a scheduled re-evaluation.",
  },
  {
    question: "Can GymWyse manage semi-private training sessions with two to four clients?",
    answer: "Yes. Semi-private training is one of the fastest-growing revenue models for personal training studios, and GymWyse supports it natively. You can create semi-private session types with configurable capacity limits, shared pricing structures, and individual progress tracking for each participant. Clients book into semi-private slots through the member app, and the system ensures capacity limits are respected. Each participant's attendance, package deductions, and progress notes are tracked individually even though they share a session. This lets studios increase revenue per trainer hour while maintaining the personalized attention clients expect.",
  },
  {
    question: "How does GymWyse help personal training studios add online programming?",
    answer: "GymWyse includes an online programming module that lets trainers deliver workout plans, nutrition guidelines, and coaching feedback digitally through the member app. Trainers build programs using a drag-and-drop exercise library, assign them to clients, and track completion rates. Clients log their workouts, record weights and reps, and communicate with their trainer through in-app messaging. This hybrid model lets studios generate revenue from clients who cannot attend in person every session, expanding your addressable market beyond your physical location and increasing each trainer's client capacity without adding floor hours.",
  },
  {
    question: "How long does it take to migrate from Zen Planner to GymWyse?",
    answer: "Most personal training studios complete their migration from Zen Planner to GymWyse within five to seven business days. Our migration team exports all client records, session histories, package balances, trainer profiles, and payment methods. We configure your commission structures, bay assignments, and session types before launch. The onboarding team trains your trainers on the mobile app and your front-desk staff on the admin dashboard. During the transition, we run both systems in parallel so you never lose access to historical data. Studios consistently report that the migration was easier and faster than they anticipated.",
  },
];

/* ── Comparison data ─────────────────────── */

const comparisonRows = [
  { feature: "Multi-trainer scheduling", gymwyse: "Visual grid with bay mapping", competitor: "Basic calendar only" },
  { feature: "Commission tracking", gymwyse: "Automated per-session", competitor: "Manual calculation" },
  { feature: "Client handoff tools", gymwyse: "One-click with full history", competitor: "Not available" },
  { feature: "Semi-private session support", gymwyse: "Native with individual tracking", competitor: "Workaround required" },
  { feature: "Online programming", gymwyse: "Built-in with exercise library", competitor: "Third-party integration" },
  { feature: "Assessment templates", gymwyse: "Customizable with progress charts", competitor: "Basic forms only" },
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
              Built for Personal Training Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Personal Training Studio Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software purpose-built for personal training studio
              owners who manage multiple trainers, training bays, and complex commission structures.
              This is not a tool for solo personal trainers working out of a commercial gym. This is
              for studio owners who need to coordinate schedules across a team of coaches, track
              revenue splits down to the penny, manage client handoffs between trainers, and run
              assessment programs that keep clients progressing and renewing their packages month
              after month. If you own a personal training studio, GymWyse replaces the patchwork of
              spreadsheets, scheduling apps, and payment tools you are juggling today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for PT Studios
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join studios like Elevate Performance Sydney, Iron House PT Denver, and Peak Athletics Toronto
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
              Everything Your Personal Training Studio Needs in One Platform
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Operating a personal training studio is fundamentally different from running a
                traditional gym. Your revenue depends on the performance of individual trainers,
                each managing their own client roster across shared training spaces. You need a
                scheduling system that prevents double-booking of both trainers and training bays,
                accounts for session duration variations between thirty-minute express sessions and
                sixty-minute full sessions, and handles back-to-back bookings with appropriate buffer
                time for equipment reset. Every scheduling conflict costs you revenue and erodes the
                professional experience your clients expect.
              </p>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Billing at a personal training studio involves layers that standard gym software was
                never designed to handle. Individual clients purchase session packs at different price
                points. Some clients train once per week while others train four times. Package
                expiration policies vary. Gift certificates need tracking. And behind every client
                payment sits a commission split that must be calculated accurately for each trainer.
                Manual commission tracking in spreadsheets leads to errors, disputes, and frustrated
                trainers who are your most valuable asset. GymWyse automates the entire billing and
                commission pipeline from payment collection through payroll export.
              </p>
              <p className="text-lg text-soft-white leading-relaxed">
                Staff management in a multi-trainer studio requires coordination that goes beyond
                simple scheduling. You need to track each trainer's client load, monitor their
                revenue contribution, manage their availability preferences, and handle client
                reassignment when trainers take leave or move on. GymWyse gives studio owners a
                complete workforce management layer that treats your trainers as the revenue-generating
                professionals they are, not just names on a calendar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Personal Training Studios Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Multi-Trainer Scheduling Conflicts",
                description:
                  "When multiple trainers share training bays, scheduling conflicts are inevitable without proper software. Double-booked rooms disrupt sessions, frustrate clients, and make your studio look unprofessional. Trainers end up texting each other to coordinate, wasting time that should be spent coaching. Without a visual bay-mapping system, studio owners cannot see utilization gaps or identify opportunities to add capacity during peak demand windows.",
                stat: "Studios lose an average of 6 sessions/week to scheduling conflicts",
              },
              {
                icon: DollarSign,
                title: "Commission Tracking Nightmares",
                description:
                  "Personal training studios with three or more trainers spend an average of eight hours per month manually calculating commissions. Different trainers may have different rate structures, tiered bonuses based on session volume, and split arrangements for semi-private sessions. Spreadsheet errors lead to underpayments that erode trainer trust and overpayments that eat into margins. The lack of real-time visibility into commissions means trainers constantly ask owners for earning updates.",
                stat: "8+ hours/month wasted on manual commission calculations",
              },
              {
                icon: TrendingDown,
                title: "Client Attrition During Trainer Transitions",
                description:
                  "When a trainer leaves your studio, their clients are at immediate risk of churning. Without a structured handoff process that preserves assessment history, program notes, and relationship context, new trainers start from scratch with inherited clients. The resulting disconnect causes clients to question the value of their investment. Studios report losing up to forty percent of a departing trainer's clients within sixty days if the transition is not managed proactively with proper tooling.",
                stat: "40% of clients churn within 60 days of a trainer departure",
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
              See What GymWyse Can Save Your PT Studio
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue your
              personal training studio could gain by switching to GymWyse. Studios with
              four or more trainers typically see ROI within the first thirty days.
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
            Features Built for Personal Training Studios
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Multi-Trainer Scheduling & Bay Allocation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Multi-Trainer Scheduling and Bay Allocation
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse provides a visual scheduling grid that maps every trainer to every training
                bay, room, or open floor zone in your studio. When a client books a session, the system
                checks trainer availability, bay availability, and equipment requirements simultaneously
                to prevent conflicts before they happen. Each trainer manages their own availability
                through a self-service portal, and studio owners see a unified daily and weekly view
                that reveals utilization gaps and peak-demand bottlenecks. Buffer time between sessions
                is configurable per trainer and per session type, ensuring adequate equipment reset time
                between back-to-back bookings. The system supports thirty-minute, forty-five-minute,
                and sixty-minute session formats with different bay requirements, and automatically
                adjusts the calendar to accommodate varying session lengths across your trainer roster.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Visual bay-mapping grid prevents double-booking of trainers and training spaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Configurable buffer time between sessions for equipment reset and trainer transition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Trainer self-service availability management with owner override controls
                  </span>
                </li>
              </ul>
              <TrainerScheduleVisual />
            </motion.div>

            {/* Feature 2: Commission & Revenue Split Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Automated Commission and Revenue Split Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Commission tracking is one of the most time-consuming tasks for personal training
                studio owners, and GymWyse eliminates it entirely. Configure each trainer's commission
                structure individually: flat rate per session, percentage of session revenue, tiered
                rates that increase with session volume, or hybrid models that combine a base rate
                with performance bonuses. For semi-private sessions with multiple clients, the system
                calculates commissions based on total session revenue rather than per-client, ensuring
                trainers are compensated fairly for higher-value sessions. Every commission is calculated
                in real time as sessions are completed and payments are collected. Trainers see their
                own earnings dashboard with running totals, and studio owners export pay-period summaries
                that integrate with QuickBooks, Xero, and other accounting platforms. No more spreadsheets,
                no more disputes, no more end-of-month calculation marathons.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Per-trainer commission structures with flat, percentage, tiered, and hybrid options
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Real-time trainer earnings dashboards that reduce payroll inquiries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    One-click payroll export compatible with QuickBooks, Xero, and standard CSV
                  </span>
                </li>
              </ul>
              <CommissionVisual />
            </motion.div>

            {/* Feature 3: Client Assessment & Progress Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Client Assessment, Progress Tracking, and Handoff Tools
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Client progress is the engine that drives package renewals, and GymWyse gives your
                trainers professional-grade tools to document and showcase results. Built-in assessment
                templates cover body composition, movement screening, strength benchmarks, cardiovascular
                fitness, and flexibility testing. Trainers can create custom assessment templates aligned
                with their coaching methodology. All data is stored chronologically and visualized in
                progress charts that clients can view in the member app, reinforcing the value of their
                investment with every milestone achieved. Progress photos are uploaded, timestamped, and
                compared side by side. When a client needs to transition between trainers due to
                scheduling changes, trainer departures, or specialization needs, GymWyse enables a
                one-click handoff that transfers the complete client profile including every assessment
                record, program note, progress photo, and remaining package balance to the receiving
                trainer. The new trainer gets a comprehensive handoff summary, and the client receives
                an introduction message, ensuring continuity without disruption.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Customizable assessment templates with chronological progress charts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Progress photo uploads with side-by-side comparison and timestamping
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    One-click trainer handoff preserving full client history and package balances
                  </span>
                </li>
              </ul>
              <ClientProgressVisual />
            </motion.div>

            {/* Feature 4: Package Management & Revenue Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Package Management, Semi-Private Sessions, and Online Programming
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Personal training studios generate revenue through a variety of session types and
                package structures, and GymWyse handles them all natively. Create individual session
                pricing, five-session and ten-session packs with configurable expiration windows,
                monthly programs with built-in session frequency limits, and semi-private training
                bundles for two to four participants. The platform tracks remaining sessions per client
                in real time, sends automated low-balance alerts before packages expire, and presents
                upsell prompts that encourage clients to renew before they lapse. Semi-private training
                sessions, one of the fastest-growing revenue models in 2026, are supported with
                individual attendance and progress tracking for each participant even though they share
                a session slot. Beyond in-person training, GymWyse includes an online programming module
                where trainers build and deliver workout plans through the member app. Clients log their
                at-home workouts, track weights and reps, and message their trainer directly. This hybrid
                model lets each trainer serve more clients without adding floor hours, expanding your
                revenue capacity beyond your physical space.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Individual, pack, monthly, and semi-private package types with automatic balance tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Semi-private session support with per-participant progress and attendance tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Online programming with exercise library, client workout logging, and in-app messaging
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
              Personal Training Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the personal training studio industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Semi-Private Training Is the Fastest-Growing Revenue Model",
                description:
                  "Semi-private training sessions with two to four clients are becoming the dominant revenue driver for personal training studios in 2026. Clients pay sixty to seventy percent of a private session rate while trainers earn more per hour by serving multiple clients simultaneously. Studios that adopt this model report twenty to thirty percent increases in trainer revenue per hour without sacrificing client outcomes. GymWyse supports semi-private sessions natively with individual progress tracking for each participant.",
              },
              {
                title: "Online Programming as a Revenue Add-On",
                description:
                  "The most profitable personal training studios in 2026 combine in-person sessions with online programming delivered through a mobile app. Clients who cannot attend the studio every day follow their trainer's program at home or at a commercial gym, logging their workouts and receiving feedback digitally. This hybrid model increases each trainer's client capacity by thirty to fifty percent without adding floor time, and it creates a secondary revenue stream that supplements in-person session income.",
              },
              {
                title: "Nutrition Coaching Integration",
                description:
                  "Personal training studios are increasingly bundling nutrition coaching with training packages to deliver holistic results and increase average client value. Studios that offer nutrition coaching see higher retention rates because clients achieve results faster and attribute their success to the studio's comprehensive approach. GymWyse supports nutrition coaching add-ons as package modifiers, letting trainers or dedicated nutrition coaches deliver meal plans and track dietary compliance alongside training progress.",
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
                Elevate Performance Studio, Sydney
              </h2>
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Elevate Performance Studio in Sydney operated with eight trainers across four training
                bays. They were using Zen Planner for scheduling and a separate spreadsheet for
                commission tracking. Double-booked bays disrupted sessions at least three times per
                week, and the studio owner spent ten hours per month reconciling commission calculations.
                After migrating to GymWyse, scheduling conflicts dropped to zero thanks to the visual
                bay-mapping grid. Commission tracking became fully automated, saving the owner over
                forty hours per quarter. They also introduced semi-private training sessions using
                GymWyse's native support, which increased average trainer revenue per hour by
                twenty-six percent. Client retention improved from seventy-one percent to eighty-eight
                percent over six months, attributed to the assessment and progress tracking tools that
                gave clients visible evidence of their improvement. Total studio revenue grew by
                thirty-two percent within the first year of switching to GymWyse.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { metric: "Scheduling Conflicts", before: "3/week", after: "0/week" },
                  { metric: "Client Retention", before: "71%", after: "88%" },
                  { metric: "Annual Revenue", before: "$310K", after: "$409K" },
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
            What PT Studio Owners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "We had four trainers sharing three bays, and scheduling was a daily nightmare with Zen Planner. GymWyse's bay-mapping grid solved it instantly. Now we have zero conflicts and our trainers actually trust the system. The commission tracking alone saves me a full day of work every month. I cannot believe we ran on spreadsheets for so long.",
                author: "Marcus Chen",
                role: "Owner, Iron House Personal Training",
                location: "Denver, CO",
              },
              {
                quote:
                  "The client handoff feature saved us when our lead trainer moved interstate. Previously, we would have lost half his clients. With GymWyse, we transferred every assessment record, progress photo, and program note to the replacement trainer in minutes. Not a single client churned during the transition. That feature alone has paid for years of the subscription.",
                author: "Aisha Okafor",
                role: "Director, Thrive PT Studio",
                location: "London, UK",
              },
              {
                quote:
                  "Semi-private training was something we wanted to offer for over a year but could never manage properly with our old scheduling software. GymWyse handles it natively — individual attendance, per-client progress tracking, and correct commission calculations even when the session has mixed package types. Our trainer revenue per hour is up twenty-three percent since we launched the semi-private program.",
                author: "James Whitfield",
                role: "Founder, Peak Athletics",
                location: "Toronto, ON",
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
              See how GymWyse stacks up against Zen Planner for personal training studios.
              Purpose-built features at a lower price with no long-term commitment.
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
                Why PT Studios Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Automated commission tracking eliminates eight-plus hours of manual calculations per month",
                  "Visual bay-mapping scheduling prevents double-booking of trainers and training spaces",
                  "One-click client handoff preserves full assessment history during trainer transitions",
                  "Semi-private training support with individual progress tracking per participant",
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
              Common questions from personal training studio owners about GymWyse.
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
              Discover how GymWyse helps personal training studios tackle every aspect of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/demo", label: "Book a Demo" },
              { href: "/pricing", label: "View Pricing" },
              { href: "/personal-training-software", label: "Personal Training Software" },
              { href: "/crossfit-gym-software", label: "CrossFit Gym Software" },
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
            Simple, Transparent Pricing for PT Studios
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your personal training studio needs for one flat rate. No setup fees.
            No per-trainer surcharges. No contracts. Cancel anytime. Multi-trainer scheduling,
            automated commission tracking, client assessment tools, and your branded member app
            are all included from day one.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Commission Tracking + Assessment Tools + Branded Member App
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
              Ready to Transform Your Personal Training Studio?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join personal training studios across three continents that have switched to GymWyse
              and eliminated scheduling conflicts, automated commission tracking, and improved client
              retention. Book a personalized demo today and see exactly how GymWyse handles your
              multi-trainer operations, revenue splits, and client management workflows.
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
