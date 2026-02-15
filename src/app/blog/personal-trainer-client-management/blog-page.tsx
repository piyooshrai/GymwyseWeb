"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  Camera,
  Award,
  CheckCircle,
  Globe,
  Bell,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "How does automated scheduling work for personal trainers?",
    a: "Trainers set their availability windows (e.g., Monday-Friday 6 AM to 2 PM). Clients see available slots in real time and book directly through the app. The system prevents double-bookings, enforces minimum session gaps (like 15 minutes between clients), and handles recurring appointments. If a client needs to reschedule, they swap to another available slot without the trainer managing a back-and-forth text conversation.",
  },
  {
    q: "What commission structures does GymWyse support?",
    a: "Three main models: flat rate (trainer earns a fixed amount per session regardless of what the client pays), percentage (trainer earns a percentage of the session fee, typically 40-60%), and tiered (the percentage increases as the trainer hits volume thresholds, e.g., 45% for the first 40 sessions per month, 55% for sessions 41-60, and 65% above 60). Each trainer can have their own commission structure, and the system calculates payroll automatically.",
  },
  {
    q: "Can clients track their progress through the platform?",
    a: "Yes. The client portal shows body measurements over time, progress photos (with side-by-side comparison tools), personal records for key lifts, workout history, session attendance streak, and trainer notes from each session. Clients can also view their remaining sessions and package expiration dates. The progress dashboard keeps clients motivated between sessions and reduces the 'am I making progress?' anxiety that drives cancellations.",
  },
  {
    q: "How does package management work?",
    a: "Trainers or studio admins create packages: 10-session pack valid for 3 months, 20-session pack valid for 5 months, monthly unlimited sessions, etc. When a client purchases a package, the system tracks sessions remaining, usage rate (to predict when they will need to renew), and expiration countdown. Automated reminders go to the client when they have 2 sessions remaining or when their package is within 14 days of expiring.",
  },
  {
    q: "What about multi-trainer coordination for studios?",
    a: "Studio owners can manage multiple trainers from a single dashboard. View each trainer's schedule, client load, retention rates, and revenue contribution. The system prevents scheduling conflicts when trainers share equipment or spaces, and it handles client reassignment smoothly when a trainer leaves or goes on holiday. Cross-referral tracking shows which trainers are bringing in new clients versus only serving existing ones.",
  },
  {
    q: "How do automated session reminders reduce no-shows?",
    a: "The platform sends three touchpoints: a reminder 24 hours before the session (with one-tap confirm or reschedule), a reminder 2 hours before (with location and any preparation notes), and a post-session summary within 1 hour (with workout details and next session confirmation). Gyms using this three-touch system report a 72% reduction in no-shows compared to trainers who rely on manual text reminders.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function PersonalTrainerClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
              {
                "@type": "HowTo",
                name: "How to Set Up Scalable Personal Training Client Management",
                description:
                  "A step-by-step guide to replacing spreadsheets with automated scheduling, commission tracking, and client progress systems.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Configure Trainer Profiles",
                    text: "Set up each trainer with their qualifications, availability, commission structure, and specialisations.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Enable Automated Scheduling",
                    text: "Define booking rules including availability windows, session duration defaults, buffer times, and cancellation policies.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Create Session Packages",
                    text: "Build package options with session counts, validity periods, pricing tiers, and auto-renewal settings.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Set Up Client Progress Tracking",
                    text: "Configure measurement types, progress photo settings, PR tracking categories, and automated progress report schedules.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Activate Commission Calculation",
                    text: "Assign commission structures to each trainer and configure automated payroll report generation.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Launch Automated Reminders",
                    text: "Enable the three-touch reminder system for session confirmations, preparation notes, and post-session summaries.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
              Personal Training
            </span>
            <span className="text-xs text-dim-gray">February 14, 2026</span>
            <span className="text-xs text-dim-gray">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-tight mb-6">
            Personal Trainer Client Management: From Spreadsheets to Scalable
            Systems
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed">
            How PTs and multi-trainer studios replace spreadsheets with
            automated scheduling, commission tracking, and client progress
            dashboards.
          </p>
        </div>
      </motion.section>

      {/* Direct Answer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <h2 className="text-xl font-bold text-electric-green mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              The Short Answer
            </h2>
            <p className="text-soft-white leading-relaxed text-lg">
              Personal trainers using spreadsheets and text messages to manage
              clients hit a ceiling at 15-20 active clients. Beyond that,
              sessions get double-booked, progress tracking falls apart,
              commissions get miscalculated, and client experience suffers.
              Scalable PT management software automates scheduling, tracks
              client progress with measurements and photos, calculates
              commissions accurately, and sends session reminders that reduce
              no-shows by 72%. Trainers using these systems grow their client
              base 40% faster while spending 8 fewer hours per week on admin.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Session Scheduling */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <Calendar className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Session Scheduling and Rescheduling Automation
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              The average personal trainer spends 5.2 hours per week on
              scheduling. That is texting clients to confirm times, juggling
              reschedule requests, checking a calendar that does not sync
              across devices, and occasionally double-booking because two
              clients texted simultaneously. At a billing rate of $60-$80 per
              session, those 5.2 hours represent $312-$416 in lost earning
              capacity every single week.
            </p>
            <p>
              Automated scheduling eliminates this entirely. Trainers define
              their availability windows once: Monday through Friday, 6 AM to 2
              PM, with 15-minute buffers between sessions and a 60-minute
              lunch block. Clients see available slots in real time through the
              member app and book directly. The system prevents double-bookings,
              enforces buffer times, and handles recurring appointments (same
              time every Tuesday and Thursday) with a single setup.
            </p>
            <p>
              Rescheduling is where the real magic happens. Instead of the
              back-and-forth text dance (&quot;Can we move Thursday?&quot;
              &quot;Sure, what works?&quot; &quot;How about 3 PM?&quot;
              &quot;I have someone at 3, what about 4?&quot;), the client taps
              &quot;Reschedule&quot; in the app and sees every available slot
              for the next two weeks. They pick a new time, the trainer gets a
              notification, and both calendars update automatically. The average
              reschedule takes 12 seconds instead of 12 messages.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Cancellation Policies
            </h3>
            <p>
              Configurable cancellation policies protect trainer revenue while
              respecting client needs. Typical setups include free cancellation
              up to 24 hours before, 50% charge for cancellation within 24
              hours, and full charge for no-shows. The system enforces these
              policies automatically at the point of cancellation, so the
              trainer never has to have the awkward &quot;I need to charge
              you&quot; conversation. The policy was agreed to at sign-up, and
              the system executes it.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Automated Session Reminders
            </h3>
            <p>
              The three-touch reminder system is deceptively powerful. First
              touch: 24 hours before, with a &quot;Confirm&quot; or
              &quot;Reschedule&quot; button. This catches the clients who
              genuinely forgot they had a session and need to move it. Second
              touch: 2 hours before, with the session location, any preparation
              notes (&quot;bring your foam roller today&quot;), and a final
              confirmation. Third touch: post-session, within 1 hour, with the
              workout summary, any personal records hit, and a prompt to book
              the next session or confirm the recurring slot.
            </p>
            <p>
              Studios using this three-touch system report a 72% reduction in
              no-shows. For a trainer running 30 sessions per week with a
              historical 8% no-show rate, that is recovering approximately 2
              sessions per week, or $6,240-$8,320 in annual revenue that
              would otherwise evaporate.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Commission Structures */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <DollarSign className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Commission Structures That Scale
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Commission calculation is where spreadsheets break down fastest.
              When you have 8 trainers on different commission structures, some
              earning flat rates and others on tiered percentages, and sessions
              range from 30-minute express slots to 90-minute premium sessions,
              the monthly payroll calculation becomes an error-prone ordeal that
              damages trainer trust every time a mistake is made.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Flat Rate Commissions
            </h3>
            <p>
              The simplest model: the trainer earns a fixed amount per session
              regardless of what the client pays. A session that costs the
              client $80 and a session that costs $60 both pay the trainer $35.
              This works well for new trainers or studios that want predictable
              labour costs. The system tracks sessions delivered, multiplies by
              the flat rate, and generates a payroll report. Simple.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Percentage Commissions
            </h3>
            <p>
              The trainer earns a percentage of the session fee, typically
              40-60% depending on whether the studio provides equipment, space,
              and lead generation. A trainer earning 50% on an $80 session gets
              $40. This aligns incentives because the trainer benefits from
              selling higher-tier packages. The system calculates the percentage
              on each session automatically, accounting for different session
              types and prices.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Tiered Commissions
            </h3>
            <p>
              The most motivating structure: the percentage increases as the
              trainer delivers more sessions per month. For example, 45% for
              sessions 1-40, 55% for sessions 41-60, and 65% for sessions above
              60. This rewards high performers and incentivises trainers to fill
              their schedule. The system tracks the running total in real time
              so trainers can see exactly where they stand on the tier ladder.
              When a trainer crosses a tier threshold mid-month, the higher rate
              applies only to sessions above that threshold, not retroactively.
            </p>
            <p>
              Each trainer can have their own commission structure, so your
              senior trainer on a tiered plan and your new hire on a flat rate
              are both calculated correctly without manual intervention. Monthly
              commission reports are generated automatically, broken down by
              session type, client, date, and tier, giving both the trainer and
              the studio owner full transparency.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Client Progress Tracking */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <TrendingUp className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Client Progress Tracking
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Progress visibility is the single biggest driver of personal
              training retention. Clients who can see measurable improvement
              renew their packages at 2.4x the rate of clients who feel
              uncertain about their results. But &quot;progress&quot; means
              different things to different clients: weight loss, strength
              gains, body composition changes, flexibility improvements, or
              simply feeling better. Your tracking system needs to accommodate
              all of them.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Measurements and Body Composition
            </h3>
            <p>
              Regular measurements (weight, body fat percentage, waist, hips,
              chest, arms, thighs) plotted over time create the objective
              evidence that keeps clients motivated. The system stores
              measurements with dates, generates trend charts, and highlights
              milestones (&quot;You have lost 3 inches from your waist since
              January&quot;). Trainers log measurements during sessions using
              the app, and clients see updated charts in their portal
              immediately.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Progress Photos
            </h3>
            <p>
              Before-and-after photos are the most emotionally compelling
              progress indicator. The photo module captures front, side, and
              back photos with standardised framing guides to ensure consistency.
              Side-by-side comparison tools let clients swipe between their Day
              1 photo and their current photo. These photos are stored securely
              and are only visible to the client and their assigned trainer,
              never shared publicly without explicit consent.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Personal Records and Strength Tracking
            </h3>
            <p>
              For clients focused on strength, the PR board tracks personal
              records across key movements: squat, deadlift, bench press,
              overhead press, and any custom movements the trainer adds.
              When a client hits a new PR during a session, the trainer logs it
              with one tap, and the client receives a PR notification with a
              celebratory graphic they can share. Small touches like these
              create emotional investment in the training relationship.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Package Management and Multi-Trainer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <Briefcase className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Package Management and Multi-Trainer Coordination
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Session packages are the bread and butter of PT revenue. A
              10-session pack at $70 per session ($700 total) committed upfront
              is more valuable than 10 individual bookings at $80 each because
              of the guaranteed revenue and reduced admin per session. But
              tracking remaining sessions, expiration dates, and renewal
              timing manually across 20+ active clients is where trainers start
              losing money.
            </p>
            <p>
              The package module tracks everything automatically. When a client
              purchases a 20-session pack valid for 5 months, the system
              monitors sessions remaining, calculates the usage rate (to predict
              whether the client will use all sessions before expiry), and
              triggers renewal conversations at the right time. If a client has
              3 sessions remaining with 6 weeks until expiration, they get a
              gentle reminder. If they have 8 sessions remaining with 2 weeks
              until expiration, they get a stronger nudge with the option to
              extend.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Multi-Trainer Studio Coordination
            </h3>
            <p>
              Studios with 5-15 trainers face coordination challenges that solo
              trainers never encounter. Equipment conflicts (two trainers both
              wanting the squat rack at 10 AM), space conflicts (the small
              studio room double-booked), and client handoffs (when a trainer
              leaves or goes on holiday) all require a system that sees the
              whole picture.
            </p>
            <p>
              The multi-trainer dashboard shows the studio owner a bird&apos;s
              eye view: each trainer&apos;s schedule, client load, utilisation
              rate (percentage of available hours that are booked), retention
              rate, and revenue contribution. This data informs staffing
              decisions, identifies trainers who need support, and reveals
              whether one trainer&apos;s clients are churning at an unusually
              high rate, which might indicate a service quality issue.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Trainer Performance Analytics
            </h3>
            <p>
              Beyond revenue, the analytics track metrics that predict long-term
              success: client retention rate per trainer, average package renewal
              rate, client progress velocity (are their clients actually getting
              results?), session punctuality, and client satisfaction scores from
              automated post-session feedback. These metrics help studio owners
              invest in coaching their coaches, identify top performers for
              leadership roles, and address performance issues before they
              affect revenue.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Command Center Hook */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            How the Command Center Solves This: Trainer Performance Dashboard
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-soft-white leading-relaxed">
              The GymWyse Trainer Performance Dashboard gives studio owners and
              independent PTs a complete picture of their business. Every
              session, commission, client interaction, and progress metric feeds
              into actionable insights that drive growth.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Revenue Per Trainer
                    </p>
                    <p className="text-sm text-cool-gray">
                      Monthly and trending revenue by trainer with commission
                      breakdown and utilisation rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Client Retention Heat Map
                    </p>
                    <p className="text-sm text-cool-gray">
                      Visual map showing which clients are active, at risk of
                      lapsing, or overdue for a session
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Package Expiration Forecast
                    </p>
                    <p className="text-sm text-cool-gray">
                      Upcoming expirations and predicted renewal rates based on
                      usage patterns and historical data
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      No-Show and Cancellation Analytics
                    </p>
                    <p className="text-sm text-cool-gray">
                      Trends by client, trainer, time slot, and day of week to
                      identify and address patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Commission Calculator
                    </p>
                    <p className="text-sm text-cool-gray">
                      Real-time commission tracking with tier progress, monthly
                      projections, and payroll-ready reports
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Client Progress Aggregation
                    </p>
                    <p className="text-sm text-cool-gray">
                      Studio-wide client outcome metrics showing which trainers
                      are delivering the best results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Area
                  </th>
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Legacy Manual Management
                  </th>
                  <th className="py-4 text-sm font-semibold text-electric-green uppercase tracking-wider">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Session Scheduling
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Text messages, phone calls, manual calendar entries
                  </td>
                  <td className="py-4 text-soft-white">
                    Real-time availability, self-service booking, automatic
                    conflict prevention
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Rescheduling
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Back-and-forth texting averaging 12 messages per reschedule
                  </td>
                  <td className="py-4 text-soft-white">
                    Client self-service swap in 12 seconds with automatic
                    notifications
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Commission Tracking
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    End-of-month spreadsheet, frequent errors, trainer disputes
                  </td>
                  <td className="py-4 text-soft-white">
                    Real-time calculation with tier tracking, transparent to both
                    trainer and owner
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Progress Tracking
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Trainer&apos;s notebook, photos in camera roll, no client
                    visibility
                  </td>
                  <td className="py-4 text-soft-white">
                    Digital measurements, secure progress photos, client-facing
                    dashboard with trend charts
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Package Management
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Tally marks on a card, expiration dates in a spreadsheet
                  </td>
                  <td className="py-4 text-soft-white">
                    Auto-tracked sessions, usage-rate predictions, renewal
                    reminders
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    No-Show Management
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Manual text reminders, inconsistent follow-up, awkward
                    charge conversations
                  </td>
                  <td className="py-4 text-soft-white">
                    Three-touch automated reminders, auto-applied cancellation
                    policies
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Trainer Analytics
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    No visibility into trainer performance beyond revenue
                  </td>
                  <td className="py-4 text-soft-white">
                    Retention rates, client outcomes, utilisation, satisfaction
                    scores per trainer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ROI Calculation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            ROI Calculation: For a Studio with 6 Trainers
          </h2>
          <div className="glass-card p-8">
            <p className="text-soft-white leading-relaxed mb-6">
              Here is the math for a personal training studio with 6 trainers,
              each running approximately 25 sessions per week at an average rate
              of $75 per session.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  GymWyse PT management plan (annual)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  $3,588/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  No-show reduction (72% fewer, 6 trainers x 2 recovered
                  sessions/week x $75 x 52)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$46,800/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Scheduling time saved (5.2 hrs/week x 6 trainers x $25/hr x
                  52)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$40,560/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Package renewal improvement (15% higher renewal, 8 extra
                  renewals/year x $700 avg)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$5,600/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Commission error elimination (avg 2 disputes/month x 1.5
                  hrs/dispute x $25/hr x 12)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$900/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Client retention from progress visibility (6 extra retained
                  clients x $300/month x 6 months)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$10,800/year
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-electric-green">
                <span className="text-pure-white font-bold text-lg">
                  Total annual value
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $104,660
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-electric-green/5 rounded-lg px-4">
                <span className="text-pure-white font-bold">
                  Net annual ROI
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $101,072 (29.2x return)
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Regional Compliance Note */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-sapphire-blue" />
            <h2 className="text-3xl font-bold text-pure-white">
              Regional Personal Training Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇺🇸 United States
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                NCCA-accredited certifications (NASM, ACE, ACSM, NSCA), CPR/AED
                certification, professional liability insurance, state-level
                business licensing, independent contractor vs employee
                classification (IRS 20-factor test), scope of practice
                boundaries (no nutritional prescriptions without RD
                credentials).
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇬🇧 United Kingdom
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                CIMSPA-recognised Level 3 Personal Training qualification,
                professional liability insurance (minimum £5M), first aid
                certification, GDPR for client data, HMRC self-assessment for
                self-employed trainers, ICO registration if processing personal
                data.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇺 Australia
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Certificate IV in Fitness (SIS40221) minimum, Fitness Australia
                registration, first aid and CPR certification, professional
                indemnity insurance, ABN registration, GST obligations above
                threshold, scope of practice per qualification level.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇪 United Arab Emirates
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Dubai Sports Council or ADSC personal trainer licensing,
                internationally recognised certification (ACE, NASM, or
                equivalent), valid residency visa and work permit, fitness
                facility registration, liability insurance, adherence to
                cultural considerations in client interactions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expert Commentary */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-sapphire-blue/10">
                <Users className="w-5 h-5 text-sapphire-blue" />
              </div>
              <div>
                <p className="text-pure-white font-semibold">
                  GymWyse Product Team
                </p>
                <p className="text-sm text-cool-gray">Expert Commentary</p>
              </div>
            </div>
            <div className="space-y-4 text-soft-white leading-relaxed">
              <p>
                &quot;We interviewed 120 personal trainers before building the
                PT module, and the number one frustration was not what you would
                expect. It was not scheduling or payments. It was the feeling
                that they were spending more time being an administrator than
                being a trainer. One trainer in London said, &lsquo;I became a
                PT because I love helping people get fit, not because I love
                chasing people for payment.&rsquo; That quote is on our product
                wall.&quot;
              </p>
              <p>
                &quot;The commission system took three iterations to get right.
                First version was too simple (flat rate only). Second version
                was too complex (trainers could not understand their own
                earnings). Third version hit the sweet spot: simple to
                configure, transparent in real time, and accurate to the penny.
                The key was showing trainers their running commission total
                alongside their tier progress. That gamification effect
                increased average sessions per trainer by 11%.&quot;
              </p>
              <p>
                &quot;Progress photos changed the retention game entirely. We
                saw a 34% increase in 3-month package renewals at studios that
                activated the progress photo feature. Clients renew because they
                can see the change, not just feel it. The side-by-side
                comparison tool is the highest-engagement feature in the entire
                client app. People open the app just to look at their progress
                photos, even on non-training days.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-pure-white font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-electric-green shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-cool-gray leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-10 h-10 text-electric-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Ditch the Spreadsheets. Scale Your Training Business.
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-2xl mx-auto">
            See how GymWyse transforms personal training operations with
            automated scheduling, commission tracking, and client progress
            dashboards. Built for trainers who want to train, not administrate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="lg">
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/solutions/personal-trainers">
              <Button variant="outline" size="lg">
                Explore PT Solutions
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
