"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart3,
  TrendingUp,
  CreditCard,
  Calendar,
  Dumbbell,
  ClipboardList,
  DollarSign,
  Package,
  Settings,
  Zap,
  MapPin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const features = [
  {
    icon: Calendar,
    title: "Session Scheduling and Client Management",
    description:
      "GymWyse provides a dedicated personal training scheduling system that handles the complexity of one-on-one and small-group training bookings. Trainers and clients can book sessions through the member app with real-time availability showing open time slots based on trainer schedules, room availability, and equipment requirements. Recurring appointments are supported — a client who trains every Tuesday and Thursday at 7am can set up recurring bookings that automatically repeat each week. Cancellation policies are configurable per trainer, with late-cancellation fees charged automatically to the client's account. Each client has a comprehensive profile showing their training history, session notes, goals, measurements, and progress photos. Trainers can access their daily schedule, client profiles, and session notes from any device. The system sends automated reminders to both trainers and clients before each session, reducing no-shows and ensuring everyone arrives prepared.",
  },
  {
    icon: ClipboardList,
    title: "Workout Programming and Progress Tracking",
    description:
      "GymWyse includes a workout programming tool that lets trainers create, assign, and track training programmes for their clients. Programmes are built from an exercise library with over 500 exercises, each with descriptions, muscle group tags, and video demonstrations. Trainers can create multi-week periodised programmes with progressive overload, assign them to individual clients or groups, and track completion and performance metrics over time. Clients see their assigned workouts in the member app, log their sets, reps, and weights during training sessions, and view their progress history with charts showing strength gains, volume trends, and personal records. Session notes can be attached to each workout, and trainers can leave feedback and programme adjustments directly in the app. This in-app programming replaces paper workout logs and disconnected spreadsheets, keeping all client training data in one place alongside their booking history and billing records.",
  },
  {
    icon: DollarSign,
    title: "Commission Tracking and Payroll Reporting",
    description:
      "Managing trainer compensation is one of the most time-consuming administrative tasks for gym owners — and one of the most error-prone when done manually. GymWyse automates commission tracking by calculating each trainer's earnings in real time based on configurable commission structures. You can set commission rates per trainer, per service type, or per client pricing tier. Common structures include percentage of session revenue (typically 40-60%), flat fee per session, tiered rates based on monthly session volume, and hybrid models combining a base rate with performance bonuses. The system tracks every session delivered, calculates commissions automatically, and generates payroll-ready reports that can be exported to your accounting software or sent directly to your payroll provider. Commission dashboards show each trainer's earnings, session counts, client retention rates, and revenue contribution — giving you complete visibility into the financial performance of your PT department without any manual calculation.",
  },
  {
    icon: Package,
    title: "Package Management and Billing",
    description:
      "GymWyse handles the full lifecycle of personal training package sales, tracking, and expiry. You can create unlimited package types — from single sessions to 10-packs, 20-packs, and unlimited monthly subscriptions. Each package type has configurable pricing, session count, validity period, and auto-renewal settings. When a client purchases a package, the session balance is tracked automatically and decremented as sessions are completed. Low-balance alerts notify both the client and their trainer when sessions are running out, creating a natural upsell moment. Expired sessions can be handled according to your policy — forfeit, extend, or roll over. For recurring PT subscriptions, GymWyse handles billing automatically through the same payment engine used for membership dues, including failed payment recovery and dunning sequences. Clients can purchase packages through the member app with one tap, and package history is visible on their profile alongside their booking and workout data.",
  },
];

const operationsOverview = [
  { icon: Users, label: "Membership Management" },
  { icon: Zap, label: "QR Check-Ins" },
  { icon: Calendar, label: "Class Scheduling" },
  { icon: CreditCard, label: "Billing & Invoicing" },
  { icon: Dumbbell, label: "PT Booking" },
  { icon: Settings, label: "Staff Management" },
  { icon: BarChart3, label: "Revenue Analytics" },
  { icon: TrendingUp, label: "Churn Prediction" },
];

const caseStudyResults = [
  { value: "34%", label: "Increase in PT revenue" },
  { value: "0 hrs", label: "Weekly manual commission calculation" },
  { value: "18%", label: "Package renewal rate improvement" },
  { value: "4.5 hrs/wk", label: "Admin time saved per trainer" },
];

const comparisonRows = [
  {
    feature: "Session Scheduling",
    gymwyse: "Integrated with gym schedule and member app",
    competitor: "Standalone calendar (separate from gym)",
  },
  {
    feature: "Workout Programming",
    gymwyse: "Built-in with 500+ exercise library",
    competitor: "Core feature but no gym integration",
  },
  {
    feature: "Commission Tracking",
    gymwyse: "Automated with payroll-ready exports",
    competitor: "Not included (manual or third-party)",
  },
  {
    feature: "Package Management",
    gymwyse: "Full lifecycle with auto-renewal and alerts",
    competitor: "Basic package tracking",
  },
  {
    feature: "Client Billing",
    gymwyse: "Integrated with gym billing engine",
    competitor: "Separate payment system",
  },
  {
    feature: "Membership Integration",
    gymwyse: "PT data connected to member profile and churn",
    competitor: "No gym membership awareness",
  },
  {
    feature: "Revenue Analytics",
    gymwyse: "Per-trainer, per-service profitability",
    competitor: "Basic revenue reports",
  },
  {
    feature: "Pricing",
    gymwyse: "Included in gym platform (no extra cost)",
    competitor: "$19-$99/mo per trainer",
  },
];

const testimonials = [
  {
    quote:
      "We were using TrueCoach for workout programming and a spreadsheet for commission tracking. Two separate systems with no connection to our gym software. When we switched to GymWyse, everything came together — scheduling, programming, commission, and billing all in one place. Our trainers save 4-5 hours per week on admin, and I stopped spending Sunday nights calculating commissions in Excel. PT revenue is up 34% because the package alerts and renewal reminders actually work.",
    name: "Matt Russo",
    role: "Owner, Forge & Flame Gym",
    location: "Boston, MA",
  },
  {
    quote:
      "TrueCoach was great for programming but it had no scheduling, no commission tracking, and no integration with our gym management system. Every trainer was managing their own calendar in Google Calendar and submitting handwritten session logs for commission calculations. GymWyse replaced all of it. The automated commission tracking alone is worth the switch — zero errors, zero disputes, and my trainers can see their earnings in real time.",
    name: "Samira Hashemi",
    role: "Director, Atlas Performance Center",
    location: "Washington, DC",
  },
  {
    quote:
      "As a studio that runs exclusively on personal training and semi-private sessions, we needed software that treated PT as a core feature rather than an afterthought. GymWyse's package management with low-balance alerts doubled our package renewal rate. Clients get a notification when they are down to their last 2 sessions, and they can repurchase directly in the app. We went from chasing renewals manually to having them happen automatically.",
    name: "Jordan Blake",
    role: "Co-owner, Precision Training Studio",
    location: "Austin, TX",
  },
];

const faqItems = [
  {
    question: "How does GymWyse handle personal training scheduling?",
    answer:
      "GymWyse provides a dedicated PT scheduling system integrated into the member app. Trainers set their availability windows, and clients book sessions from available time slots with two taps. Recurring appointments are supported for clients with regular schedules. The system prevents double-bookings, sends automated reminders to both trainer and client, and enforces late-cancellation policies automatically. Session history, notes, and client details are all accessible from the trainer's dashboard on any device.",
  },
  {
    question: "Can trainers create workout programmes in GymWyse?",
    answer:
      "Yes. GymWyse includes a workout programming tool with an exercise library of over 500 exercises, each with descriptions, muscle group tags, and video demonstrations. Trainers create multi-week periodised programmes, assign them to clients, and track completion and performance metrics. Clients log their sets, reps, and weights during sessions through the member app and view their progress history with charts. Session notes and trainer feedback are attached directly to each workout entry.",
  },
  {
    question: "How does commission tracking work?",
    answer:
      "GymWyse calculates trainer commissions automatically in real time based on configurable commission structures. You can set rates per trainer, per service type, or per pricing tier. Supported structures include percentage of session revenue, flat fee per session, tiered rates based on volume, and hybrid models. The system tracks every session delivered and generates payroll-ready reports exportable to your accounting software. Commission dashboards show earnings, session counts, client retention, and revenue contribution for each trainer.",
  },
  {
    question: "How do PT package sales and tracking work?",
    answer:
      "You create unlimited package types with configurable pricing, session counts, validity periods, and auto-renewal settings. When a client purchases a package through the member app or front desk, session balance is tracked automatically. Sessions are decremented as they are completed. Low-balance alerts notify clients and their trainer when sessions are running out. Expired sessions follow your configured policy — forfeit, extend, or roll over. Package purchase history is visible on the client's profile.",
  },
  {
    question: "Does GymWyse replace TrueCoach?",
    answer:
      "For most gym owners, yes. GymWyse provides workout programming, session scheduling, client management, commission tracking, and package billing — all integrated into your gym management platform. TrueCoach focuses exclusively on programming and has no scheduling, commission tracking, or gym integration. If your primary need is advanced periodisation for competitive athletes, TrueCoach may offer deeper programming tools. But for gym owners who need PT management connected to their billing, scheduling, and member data, GymWyse provides a more comprehensive and cost-effective solution. Visit our{\" \"} personal trainers solutions page for more details.",
  },
  {
    question: "Is PT management included in all GymWyse plans?",
    answer:
      "Yes. Personal training scheduling, client management, workout programming, package tracking, and commission reporting are included in all GymWyse plans at no additional cost. There are no per-trainer fees or per-session charges. Whether you have 2 trainers or 20, the functionality is the same. This contrasts with standalone PT software that typically charges $19-$99 per month per trainer on top of your gym management platform costs.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function ProblemSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
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
      {/* ─── Hero Section ─── */}
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
              Personal Training
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Personal Training Software for Gym Owners and Studios
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Manage every aspect of personal training from a single gym
              management software platform. GymWyse gives you session
              scheduling, client management, workout programming, commission
              tracking, and package billing — all integrated with your
              membership, billing, and analytics systems. No separate PT
              software. No per-trainer fees.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/roi-calculator">
                <Button size="lg" variant="primary">
                  Calculate ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="secondary">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Problem Statement ─── */}
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
              Why Personal Training Management Falls Apart
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Personal training is one of the highest-margin revenue streams
              in any gym, yet it is often the worst managed. When PT
              operations rely on disconnected tools and manual processes,
              revenue leaks, trainers get frustrated, and clients receive
              an inconsistent experience.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Fragmented Scheduling Across Tools",
                description:
                  "Most gyms manage PT scheduling through a patchwork of Google Calendar, WhatsApp messages, and paper sign-up sheets. Trainers maintain their own calendars separately from the gym's main schedule, leading to double-bookings, scheduling conflicts with group classes, and zero visibility for management. Clients cannot see their trainer's availability without sending a message and waiting for a response. This friction reduces booking frequency — studies show that every additional step in the booking process reduces conversion by 20%. When scheduling is disconnected from the gym platform, session data is also invisible to your revenue analytics and churn prediction systems.",
              },
              {
                icon: DollarSign,
                title: "Manual Commission Tracking and Errors",
                description:
                  "Calculating trainer commissions manually is one of the most error-prone tasks in gym operations. Typical challenges include tracking sessions delivered versus sessions paid for, handling cancellations and no-shows against commission calculations, managing different commission rates for different trainers and service types, and reconciling package-based payments with individual session delivery. A single error can damage trust between management and trainers. Many gym owners spend 2-4 hours per week manually calculating commissions in spreadsheets, with regular disputes and corrections that consume even more time.",
              },
              {
                icon: Package,
                title: "Packages Expire Without Renewal",
                description:
                  "Personal training packages are a significant revenue source, but most gyms have no automated system to track session balances or prompt renewals. A client who purchased a 10-pack three months ago may have two sessions remaining without either the trainer or the client realising it. When the package runs out, there is no automated prompt to purchase a new one. The client drifts away, and the revenue is lost. Industry data shows that 30-40% of PT package holders do not renew — not because they are dissatisfied, but because nobody asked them at the right time.",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-bold text-pure-white">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Solution Overview ─── */}
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
              How GymWyse Solves PT Management
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse brings every aspect of personal training management
              into one platform. Session scheduling is integrated with your
              gym calendar and member app. Workout programming keeps client
              training data alongside their booking and billing records.
              Commission tracking is automated with payroll-ready exports.
              Package management with low-balance alerts and auto-renewal
              ensures clients never lapse without a prompt. All PT data
              feeds into your revenue analytics and churn prediction, so
              you see the full picture of how personal training contributes
              to your business. Explore our{" "}
              <Link
                href="/solutions/personal-trainers"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                personal trainers solutions page
              </Link>{" "}
              for a detailed walkthrough.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Feature Deep-Dive ─── */}
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
              Personal Training Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four integrated tools that streamline every aspect of running
              a personal training operation inside your gym.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-bold text-pure-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Gym Operations Basics ─── */}
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
              Complete Gym Operations Platform
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Personal training management is fully integrated into the
              GymWyse platform. Beyond PT tools, GymWyse covers every
              aspect of running a gym — membership management with flexible
              tiers and freeze options, QR-code check-ins via the member
              app, class scheduling with waitlists and automated
              notifications, billing and invoicing with ACH, Direct Debit,
              and card payments, staff management with role-based
              permissions, revenue analytics with real-time dashboards, and
              AI-powered churn prediction. PT session data connects to your
              churn prediction engine — a client who stops booking sessions
              is flagged as at-risk, enabling proactive outreach before they
              cancel their membership entirely.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {operationsOverview.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card flex flex-col items-center gap-3 rounded-xl border border-glass-border p-6 text-center"
                >
                  <Icon className="h-6 w-6 text-electric-green" />
                  <span className="text-sm font-medium text-soft-white">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Case Study ─── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-electric-green" />
                <span className="text-sm font-medium text-electric-green">
                  Case Study
                </span>
              </div>
              <h2 className="text-2xl font-bold text-pure-white md:text-3xl">
                Anchor Athletics, Tampa, FL
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                Single location — 520 members — 8 personal trainers —
                Full-service gym with strong PT programme
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Anchor Athletics had 8 personal trainers using TrueCoach
                    for workout programming ($79/mo per trainer) and Google
                    Calendar for scheduling. Commission tracking was done in
                    a shared spreadsheet updated by the front desk manager
                    every Friday — a process that took 3 hours and regularly
                    produced errors. Package balances were tracked on paper
                    cards at the front desk, and 35% of package holders were
                    not renewing because nobody noticed when sessions ran
                    out. PT revenue had plateaued despite growing demand.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Anchor Athletics migrated all PT operations to GymWyse.
                    Session scheduling moved into the member app, giving
                    clients self-service booking and automated reminders.
                    Workout programming replaced TrueCoach at zero
                    additional cost — saving $632 per month in per-trainer
                    fees. Commission tracking became fully automated with
                    real-time dashboards for each trainer. Package management
                    with low-balance alerts triggered renewal prompts when
                    clients reached their last 2 sessions. Package renewal
                    rates improved from 65% to 83%. PT revenue increased
                    34% within four months as the combination of easier
                    booking, automated renewals, and zero admin friction
                    drove more sessions and higher retention.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="font-mono text-xl font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-deep-space py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <Quote className="mb-4 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-dim-gray">
                      {testimonial.role}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-dim-gray">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
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
              GymWyse vs TrueCoach for Personal Training
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See how an integrated PT management solution compares to
              standalone personal training software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-electric-green">
                        GymWyse
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        TrueCoach
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-glass-border last:border-0"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-soft-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-electric-green">
                          {row.gymwyse}
                        </td>
                        <td className="px-6 py-4 text-sm text-dim-gray">
                          {row.competitor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Everything you need to know about personal training software
              on GymWyse.
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
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
                >
                  <span className="pr-4 text-sm font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-dim-gray transition-transform duration-200 ${
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
                      <div className="border-t border-glass-border px-6 py-4">
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

      {/* ─── Final CTA ─── */}
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
              Grow Your PT Revenue. Eliminate the Admin.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Personal training should be your gym&apos;s highest-margin
              revenue stream — not its biggest administrative headache.
              GymWyse gives you session scheduling, workout programming,
              automated commission tracking, and package management all in
              one platform with no per-trainer fees. Start your 14-day free
              trial today or book a personalised demo to see how GymWyse
              can transform your PT operations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="xl" variant="primary">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="xl" variant="secondary">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dim-gray">
              <span>No credit card required</span>
              <span>14-day free trial</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
