"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Database,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const phases = [
  {
    number: 1,
    title: "Discovery & Audit",
    timeline: "Week 1",
    description:
      "Every successful migration starts with understanding exactly what you have. During the first week, our migration specialist conducts a thorough audit of your current gym management software. We identify every piece of data that needs to move: member profiles, payment histories, class schedules, active contracts, attendance records, staff accounts, and any custom configurations you rely on. We document your current workflow so we can replicate it inside GymWyse without disrupting how your team operates. By the end of Week 1, you receive a detailed migration plan with timelines, milestones, and a single point of contact who owns the process from start to finish.",
  },
  {
    number: 2,
    title: "Data Export & Migration",
    timeline: "Week 2",
    description:
      "In the second week, we export your complete dataset from your existing platform. This includes your full member database with contact information and membership status, historical payment records and outstanding balances, class and appointment schedules, personal training session logs, and all active contract details. Our automated import pipeline brings everything into GymWyse, followed by a rigorous data validation process. We perform line-by-line verification, comparing record counts, payment totals, and contract terms against the original source. If a single record is off, we catch it here. Nothing goes live until every data point matches.",
  },
  {
    number: 3,
    title: "Configuration & Customization",
    timeline: "Week 2-3",
    description:
      "With your data safely inside GymWyse, we configure the platform to match your exact business operations. We set up your membership tiers with correct pricing, billing cycles, and proration rules. Class schedules are rebuilt with instructor assignments, capacity limits, and waitlist settings. Payment gateways are connected and tested with live transactions. Staff roles and permissions are configured so front desk staff, trainers, and managers each see exactly what they need. The goal is that when your team logs in for the first time, the system feels familiar. Nothing changes in how they work. The software just works better.",
  },
  {
    number: 4,
    title: "Team Training",
    timeline: "Week 3",
    description:
      "We run live training sessions tailored to each role in your gym. Front desk staff learn member check-in, class booking, and payment processing. Personal trainers learn session scheduling, client notes, and progress tracking. Managers and owners get trained on reporting, analytics, churn prediction, and revenue dashboards. Each session is role-specific so nobody sits through features they will never use. Every training session is recorded and stored in your GymWyse account for future reference, perfect for onboarding new hires. We also set up a dedicated Slack or Microsoft Teams channel where your team can ask questions and get real-time answers during the transition period.",
  },
  {
    number: 5,
    title: "Parallel Running & Go Live",
    timeline: "Week 4",
    description:
      "For one full week, both your old system and GymWyse run simultaneously. Members can check in on both platforms. Payments process through both systems. Class bookings sync across both. This parallel run gives your team confidence that everything works correctly before the final switch. Your migration specialist monitors both systems daily, comparing data in real time. When you and your team are confident that GymWyse is handling everything correctly, we schedule the cutover. It happens instantly with zero downtime. Your members will not experience any interruption. After go-live, you can cancel your old software subscription.",
  },
  {
    number: 6,
    title: "Optimization & Review",
    timeline: "Week 5-6",
    description:
      "Migration does not end at go-live. In the weeks following your switch, your migration specialist conducts a comprehensive 30-day check-in. We review your analytics setup to make sure dashboards reflect the metrics that matter to your business. We configure churn prediction thresholds based on your member behavior patterns. Payment recovery automation is tuned to maximize the recapture of failed transactions. We walk through every feature to ensure nothing is left on the table. This is where gyms start seeing the real value of switching: features they never had before, working out of the box, with data that is already populated.",
  },
];

const migratedItems = [
  "Member profiles and contact information",
  "Membership status and tier assignments",
  "Complete payment and transaction history",
  "Billing information and recurring payment details",
  "Class schedules, bookings, and waitlists",
  "Personal training sessions and client assignments",
  "Active contracts and agreement terms",
  "Attendance and check-in history",
  "Member notes and communication logs",
  "Staff accounts and role assignments",
];

const notMigratedItems = [
  {
    item: "Custom reports from your old system",
    reason:
      "GymWyse reporting is significantly more powerful with real-time dashboards, churn prediction, and revenue analytics that replace anything you had before. We help you rebuild any report you need.",
  },
  {
    item: "Third-party integrations",
    reason:
      "Rather than carrying over old API connections, we set up fresh integrations with your payment processor, email marketing platform, and any other tools you use. This ensures a clean, reliable connection.",
  },
  {
    item: "Old login credentials",
    reason:
      "Members receive a fresh app invitation with a new secure login. This is actually a benefit: it cleans up inactive accounts and gives members a fresh start with a modern app experience.",
  },
];

const timelines = [
  {
    from: "Mindbody",
    duration: "3-4 weeks",
    detail:
      "The most common migration we perform. Mindbody has a well-documented API and comprehensive data export tools, which makes the extraction process straightforward. We have completed over 80 Mindbody migrations and have the process down to a science.",
  },
  {
    from: "Zen Planner",
    duration: "2-3 weeks",
    detail:
      "Zen Planner provides clean CSV exports and a logical data structure that maps well to GymWyse. These migrations tend to be our fastest because the data requires minimal transformation. Typical completion time is under three weeks.",
  },
  {
    from: "Glofox",
    duration: "3-4 weeks",
    detail:
      "Glofox does not provide a self-service API, so data export often requires manual CSV downloads from the admin panel. Our team walks you through each export step and handles the rest. Allow a full four weeks for Glofox migrations.",
  },
  {
    from: "Spreadsheets or manual records",
    duration: "1-2 weeks",
    detail:
      "If you are running your gym on spreadsheets, paper sign-in sheets, or a combination of disconnected tools, this is actually the simplest migration. We import your data directly and you gain a complete system from day one.",
  },
  {
    from: "Other software",
    duration: "3-5 weeks",
    detail:
      "For platforms not listed above, we perform a case-by-case assessment during the Discovery phase. We have migrated gyms from PushPress, Wodify, Pike13, ClubReady, and dozens of other tools. Timeline depends on data export capabilities.",
  },
];

const worries = [
  {
    question: "Will I lose member data?",
    answer:
      "No. Every single record is verified during migration. We perform automated line-by-line comparison between your original data and what lands in GymWyse. Member counts, payment totals, contract terms, attendance records, everything is cross-checked before go-live. We also retain a complete backup of your original exported data for 90 days after migration, so there is always a safety net. In over 200 migrations, we have never lost a single record.",
  },
  {
    question: "Will my members be confused?",
    answer:
      "We design the transition to be as invisible as possible. Members receive a professionally written welcome email explaining the switch, along with a direct link to download the GymWyse app and set up their account. Check-in works from day one, whether your gym uses QR codes, key fobs, or manual check-in. Your front desk staff are trained to assist any member who has questions. In practice, most members complete the transition within the first week without needing any help.",
  },
  {
    question: "What about my payment processing?",
    answer:
      "Payment migration is seamless. GymWyse supports ACH bank transfers in the United States, Direct Debit and BACS payments in the United Kingdom, BPAY in Australia, and credit and debit card processing worldwide through Stripe and GoCardless. Recurring billing transfers automatically, meaning your members do not need to re-enter their payment information. Active subscriptions continue without interruption. We test every payment connection with a live transaction before go-live to ensure nothing is missed.",
  },
  {
    question: "What if I am still in a contract with my current provider?",
    answer:
      "This is more common than you would think, and we can help. Many gym software providers will waive early termination fees when presented with a formal written cancellation request, especially if you have been a long-term customer. We provide a cancellation letter template that has worked for dozens of our migrating gyms. If your provider refuses to waive fees, we can help you calculate whether the savings from switching to GymWyse offset the termination cost. And remember, GymWyse has no contracts. You pay month-to-month and can switch anytime.",
  },
];

const caseStudies = [
  {
    name: "The Foundry",
    location: "London, United Kingdom",
    locations: 2,
    members: 450,
    migratedFrom: "Glofox",
    duration: "3 weeks",
    description:
      "The Foundry had been on Glofox for two years but was frustrated by limited reporting and a clunky member app. They were hesitant to switch because they worried about disrupting their members during peak season. We scheduled the migration to begin on a Monday and ran the parallel period over a quieter week. The entire process completed in 3 weeks with zero member complaints. During the migration audit, we discovered $2,100 per month in failed recurring payments that Glofox was not flagging. GymWyse payment recovery auto-recovered 40 percent of that amount in the first month alone.",
    quote:
      "We should have switched a year ago. The migration was painless and we immediately started recovering revenue we did not even know we were losing.",
    quoteAuthor: "James K., Owner, The Foundry",
  },
  {
    name: "IronClad Fitness",
    location: "Houston, Texas",
    locations: 5,
    members: 2100,
    migratedFrom: "Mindbody",
    duration: "4 weeks",
    description:
      "IronClad Fitness operates five locations across the Houston metro area with a combined membership of 2,100. They were paying over $800 per month for Mindbody and spending hours each week wrestling with reports across multiple locations. Migration took 4 weeks due to the multi-location complexity, but the process was smooth. Staff training was completed in just 2 sessions: one for front desk and one for managers. The consolidated multi-location dashboard in GymWyse eliminated the need for manual report merging, saving the operations team an estimated 6 hours per week.",
    quote:
      "Managing five locations used to mean five separate logins and five separate reports. Now I see everything in one dashboard. The migration paid for itself in the first month through time savings alone.",
    quoteAuthor: "Sarah M., Director of Operations, IronClad Fitness",
  },
];

const checklist = [
  "Export your complete member list from your current software, including contact info and membership status",
  "Export payment and billing history for at least the past 12 months, including failed payment records",
  "Export your current class schedule with instructor assignments and capacity settings",
  "Document all membership tier names, pricing, billing cycles, and any promotional rates currently active",
  "Compile a list of all staff members with their roles (admin, instructor, front desk, manager)",
  "Note any third-party integrations you currently use, such as email marketing, accounting, or access control",
  "Identify two or three training windows where your team can attend live sessions without disrupting operations",
  "Set a target go-live date, ideally mid-week (Tuesday or Wednesday) rather than Monday to avoid start-of-week rush",
];

const pricingTiers = [
  {
    name: "Standard Migration",
    price: "$0",
    priceDetail: "Included with all plans",
    features: [
      "Full data migration from any platform",
      "Dedicated migration specialist",
      "Live team training sessions with recordings",
      "1-week parallel running period",
      "30-day post-migration support",
      "Data validation and verification",
    ],
  },
  {
    name: "Express Migration",
    price: "$499",
    priceDetail: "One-time fee",
    features: [
      "Everything in Standard migration",
      "Completed in under 2 weeks",
      "Priority scheduling and support",
      "Expedited data validation",
      "Extended parallel running if needed",
      "48-hour response guarantee on all questions",
    ],
  },
  {
    name: "White-Glove Migration",
    price: "Custom",
    priceDetail: "For 5+ locations",
    features: [
      "Everything in Express migration",
      "Dedicated senior migration specialist",
      "On-site training at your locations",
      "Custom integration setup and testing",
      "Multi-location data consolidation",
      "Executive reporting dashboard configuration",
    ],
  },
];

const faqs = [
  {
    question: "How long does migration take?",
    answer:
      "Most single-location gyms complete migration in 3 to 4 weeks. Migrations from Zen Planner or spreadsheets can be faster at 2 to 3 weeks. Multi-location gyms or those migrating from platforms with limited export tools may take up to 5 weeks. Your migration specialist provides an exact timeline during the Discovery phase.",
  },
  {
    question: "Is there downtime during migration?",
    answer:
      "No. Your current system stays fully operational throughout the entire migration process. We run both systems in parallel during the final week so there is never a gap in service. Members can check in, book classes, and make payments without interruption at every stage.",
  },
  {
    question: "What data gets migrated?",
    answer:
      "We migrate member profiles, contact information, membership status, payment history, billing details, class schedules, personal training sessions, contracts, attendance history, staff accounts, and member notes. Essentially everything that matters to your daily operations comes over.",
  },
  {
    question: "Do my members need to do anything?",
    answer:
      "Members receive a welcome email with a link to download the GymWyse app and create their account. Their membership, billing, and booking history is already there when they log in. Most members complete setup in under two minutes. Your front desk staff can assist anyone who needs help.",
  },
  {
    question: "What if I am in a contract with my current provider?",
    answer:
      "We provide a cancellation letter template and guidance on negotiating early termination. Many providers waive fees for long-term customers. We can also help you calculate the break-even point so you can make an informed decision. GymWyse itself has no contracts or lock-in periods.",
  },
  {
    question: "Can I migrate multiple locations?",
    answer:
      "Yes. We have migrated gyms with up to 12 locations in a single migration project. Multi-location migrations follow the same process but include additional steps for data consolidation and multi-site dashboard configuration. Our White-Glove migration tier is designed specifically for this.",
  },
  {
    question: "What if something goes wrong during migration?",
    answer:
      "Every migration has a documented rollback plan. If anything is not right, we can revert to your previous system immediately. We retain a complete backup of your original data for 90 days. In over 200 completed migrations, we have never needed to execute a full rollback.",
  },
  {
    question: "Is migration really free?",
    answer:
      "Yes. Standard migration is included at no additional cost with every GymWyse subscription plan. This covers data migration, team training, parallel running, and 30-day post-migration support. Express and White-Glove tiers are available as optional upgrades for gyms that want a faster timeline or dedicated on-site support.",
  },
];

/* ─── Component ────────────────────────────────────────────────────────── */

export function MigrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── 1. Hero ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Migration Hub
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Switching from Mindbody, Zen Planner, or Glofox? We Make It
              Painless.
            </h1>
            <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-3xl mx-auto">
              Migrating your gym management software should not be stressful.
              GymWyse handles the entire process for you: data export, member
              import, payment setup, staff training, and go-live support. Zero
              downtime. Zero data loss. Your members will not even notice the
              switch happened.
            </p>
            <p className="text-base text-cool-gray leading-relaxed max-w-2xl mx-auto">
              Our dedicated migration specialists have moved over 200 gyms from
              legacy platforms to GymWyse with a perfect track record. Every
              member record, every payment history entry, every class schedule
              arrives intact and verified.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Migration
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. The #1 Reason Gyms Don't Switch ────────────────────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              The Number One Reason Gyms Do Not Switch
            </h2>
            <p className="text-lg text-soft-white leading-relaxed mb-6">
              Fear. It is always fear. Fear of losing years of member data during
              the transfer. Fear that members will be confused and frustrated by
              a new app. Fear that staff will need weeks of retraining and
              productivity will plummet. Fear that the gym will experience
              downtime during the busiest part of the month. We understand these
              concerns because we hear them on every single discovery call.
            </p>
            <p className="text-lg text-soft-white leading-relaxed mb-8">
              Here is the reality: switching gym software is not nearly as
              painful as staying on a platform that is costing you money, wasting
              your time, and failing to recover revenue. The fear is worse than
              the migration itself.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-10 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-electric-green font-mono">
                  200+
                </p>
                <p className="text-sm text-cool-gray mt-1">Gyms migrated</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-electric-green font-mono">
                  0
                </p>
                <p className="text-sm text-cool-gray mt-1">
                  Records lost
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-electric-green font-mono">
                  0
                </p>
                <p className="text-sm text-cool-gray mt-1">
                  Minutes downtime
                </p>
              </div>
            </div>
            <p className="text-base text-soft-white leading-relaxed">
              Average migration timeline: 3 to 4 weeks from first call to
              go-live. Your gym stays fully operational throughout the entire
              process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Step-by-Step Migration Process ─────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Step-by-Step Migration Process
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Every GymWyse migration follows a proven six-phase process
              developed over 200 successful transitions. Each phase has clear
              deliverables, timelines, and checkpoints so you always know
              exactly where things stand.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-electric-green/20 hidden md:block" />

            <div className="space-y-8">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-electric-green/10 border border-electric-green/30 rounded-full flex items-center justify-center shrink-0 z-10 relative">
                    <span className="text-electric-green font-bold font-mono text-lg">
                      {phase.number}
                    </span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-pure-white">
                        {phase.title}
                      </h3>
                      <span className="text-sm text-electric-green font-mono mt-1 sm:mt-0">
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What Gets Migrated (and What Doesn't) ──────────────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              What Gets Migrated and What Does Not
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Full transparency on what moves to GymWyse and what stays behind,
              and the reasons behind each decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Migrated */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white">
                  What We Migrate
                </h3>
              </div>
              <div className="space-y-3">
                {migratedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                    <span className="text-sm text-cool-gray">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not Migrated */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sapphire-blue/10 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-sapphire-blue" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white">
                  What We Do Not Migrate and Why
                </h3>
              </div>
              <div className="space-y-5">
                {notMigratedItems.map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-pure-white mb-1">
                      {item.item}
                    </p>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Timelines by Software ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Migration Timelines by Software
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Every platform has different data export capabilities which affect
              the migration timeline. Here is what to expect based on where you
              are coming from, drawn from our experience across 200 completed
              migrations. See detailed comparisons on our{" "}
              <Link
                href="/vs/mindbody"
                className="text-electric-green hover:underline"
              >
                Mindbody
              </Link>
              ,{" "}
              <Link
                href="/vs/zenplanner"
                className="text-electric-green hover:underline"
              >
                Zen Planner
              </Link>
              , and{" "}
              <Link
                href="/vs/glofox"
                className="text-electric-green hover:underline"
              >
                Glofox
              </Link>{" "}
              comparison pages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {timelines.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-electric-green font-medium tracking-wider uppercase mb-2">
                  From {t.from}
                </p>
                <h3 className="text-2xl font-bold text-pure-white mb-3 font-mono">
                  {t.duration}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {t.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What Gyms Worry About ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              What Gyms Worry About
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              These are the four concerns we hear on virtually every migration
              discovery call. Here is how we address each one with concrete
              processes, not vague reassurances.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {worries.map((w, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-electric-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-electric-green" />
                  </div>
                  <h3 className="text-base font-semibold text-pure-white">
                    &ldquo;{w.question}&rdquo;
                  </h3>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {w.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Migration Success Stories ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Migration Success Stories
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Real gyms. Real migrations. Real results. Here is what the process
              looked like for two of our recent migrations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-pure-white mb-1">
                    {study.name}
                  </h3>
                  <p className="text-sm text-electric-green mb-4">
                    {study.location}
                  </p>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    <div className="bg-deep-space/60 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-electric-green font-mono">
                        {study.locations}
                      </p>
                      <p className="text-xs text-cool-gray">Locations</p>
                    </div>
                    <div className="bg-deep-space/60 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-electric-green font-mono">
                        {study.members.toLocaleString()}
                      </p>
                      <p className="text-xs text-cool-gray">Members</p>
                    </div>
                    <div className="bg-deep-space/60 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-pure-white font-mono">
                        {study.migratedFrom}
                      </p>
                      <p className="text-xs text-cool-gray">From</p>
                    </div>
                    <div className="bg-deep-space/60 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-electric-green font-mono">
                        {study.duration}
                      </p>
                      <p className="text-xs text-cool-gray">Duration</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="border-t border-glass-border pt-6">
                  <p className="text-sm text-soft-white italic leading-relaxed mb-2">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-xs text-electric-green font-medium">
                    {study.quoteAuthor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Migration Checklist ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Migration Checklist
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Preparing for your migration? Use this checklist to gather
              everything your migration specialist will need. The more you
              prepare ahead of time, the faster the process goes.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 border-2 border-electric-green/40 rounded flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-dim-gray font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. Pricing for Migration ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Migration Pricing
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Standard migration is completely free with every GymWyse plan.
              Need it faster or need on-site support? We have options for that
              too. All tiers include full data migration, team training, parallel
              running, and 30-day post-migration support. See our full{" "}
              <Link
                href="/pricing"
                className="text-electric-green hover:underline"
              >
                pricing page
              </Link>{" "}
              for subscription details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-electric-green font-mono mb-1">
                  {tier.price}
                </p>
                <p className="text-sm text-cool-gray mb-6">
                  {tier.priceDetail}
                </p>
                <div className="space-y-3 flex-1">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                      <span className="text-sm text-cool-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Everything you need to know about switching to GymWyse. If your
              question is not listed here, book a migration call and we will
              answer it directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card border border-glass-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-medium text-pure-white pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-glass-border pt-4">
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

      {/* ── 11. Final CTA ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-lg text-soft-white leading-relaxed mb-4">
              Join over 200 gyms that have already made the move to GymWyse.
              Whether you are running a single-location studio or a
              multi-location fitness chain, our migration team will handle
              everything so you can focus on what matters: your members and your
              business.
            </p>
            <p className="text-base text-cool-gray leading-relaxed mb-8">
              Book a free migration consultation or try our{" "}
              <Link
                href="/roi-calculator"
                className="text-electric-green hover:underline"
              >
                ROI calculator
              </Link>{" "}
              to see how much you could save. Start with a{" "}
              <Link
                href="/demo"
                className="text-electric-green hover:underline"
              >
                free demo
              </Link>{" "}
              and see GymWyse in action before you commit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Your Migration
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Free migration included with all plans. No contracts. No lock-in.
              14-day free trial available.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
