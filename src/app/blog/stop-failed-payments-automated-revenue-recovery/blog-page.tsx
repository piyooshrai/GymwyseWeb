"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CreditCard,
  AlertTriangle,
  Clock,
  Mail,
  Bell,
  ShieldAlert,
  UserX,
  ArrowRight,
  DollarSign,
  CheckCircle2,
  XCircle,
  Globe,
  BarChart3,
  RefreshCw,
  Lightbulb,
  CalendarClock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ────────────────────────────────────────────
   FAQ Data
   ──────────────────────────────────────────── */
const faqItems = [
  {
    question: "What is a dunning sequence and why does my gym need one?",
    answer:
      "A dunning sequence is a structured series of automated actions — retries, notifications, escalations — that fire when a member's payment fails. Without one, your staff is manually chasing declined cards, which is awkward, inconsistent, and wildly inefficient. A well-built dunning sequence recovers up to 40% of failed payments automatically, meaning you recoup thousands in revenue each month without a single phone call. If your gym processes recurring billing, you need a dunning sequence. Period.",
  },
  {
    question: "How does smart retry timing work?",
    answer:
      "Smart retry timing analyzes payment failure patterns and aligns retry attempts with periods when member accounts are most likely to have funds — typically right after common payroll deposit dates. Instead of blindly retrying every 24 hours, the system identifies whether a member is paid weekly, bi-weekly, or monthly and schedules retries accordingly. This alone increases first-retry success rates by 15-22% compared to fixed-interval retries.",
  },
  {
    question: "Will automated dunning messages upset my members?",
    answer:
      "Quite the opposite. Members actually prefer automated, non-judgmental notifications over getting a call from the front desk about a declined card. The messages are framed as helpful reminders ('Your card ending in 4521 needs updating — tap here to fix it in 30 seconds') rather than collection notices. In our data, gyms using automated dunning see fewer member complaints about billing than gyms using manual follow-up. The tone is friendly, the process is frictionless, and the member stays in control.",
  },
  {
    question: "What payment methods does the recovery system support?",
    answer:
      "GymWyse handles credit cards, debit cards, ACH bank transfers, BACS Direct Debit (UK), BPAY (Australia), and region-specific payment rails. The system automatically adapts the retry logic and compliance requirements based on the payment method — for example, ACH retries follow NACHA rules, while BACS retries respect the Direct Debit Guarantee timeline. You configure it once, and the system handles the rest regardless of how your members pay.",
  },
  {
    question: "How quickly can I set up automated revenue recovery?",
    answer:
      "Most gyms are fully configured within 48 hours. The setup involves connecting your payment processor, customizing your dunning message templates (or using our proven defaults), and setting your escalation thresholds. There is no code to write and no IT team required. The system starts monitoring and recovering failed payments immediately after activation. Gyms typically see their first recovered payment within the first week.",
  },
  {
    question: "What happens if the automated sequence doesn't recover the payment?",
    answer:
      "If all automated retries and member outreach fail, the system escalates to your staff with a detailed case file — every retry attempt, every notification sent, every response received. Your team can then make an informed decision about whether to offer a payment plan, pause the membership, or proceed with account suspension. The point is that automation handles the 40% that can be recovered silently, so your staff only deals with the genuinely problematic 60%.",
  },
];

/* ────────────────────────────────────────────
   Dunning Timeline Steps
   ──────────────────────────────────────────── */
const dunningSteps = [
  {
    day: "Day 0",
    title: "Smart Retry",
    icon: RefreshCw,
    color: "text-electric-green",
    border: "border-electric-green/30",
    bg: "bg-electric-green/10",
    description:
      "Payment fails. The system immediately evaluates the failure code — insufficient funds, expired card, processor timeout — and selects the optimal retry strategy. For soft declines, an instant retry fires. For insufficient funds, the retry is queued to align with the member's predicted payday.",
  },
  {
    day: "Day 1",
    title: "Member Notification",
    icon: Mail,
    color: "text-sapphire-blue",
    border: "border-sapphire-blue/30",
    bg: "bg-sapphire-blue/10",
    description:
      "A friendly, branded email and optional SMS reach the member with a one-tap link to update their payment method. No guilt. No pressure. Just a clear message: 'Your card needs a quick update.' Members who update within 24 hours never even see a retry.",
  },
  {
    day: "Day 3",
    title: "Second Retry",
    icon: RefreshCw,
    color: "text-electric-green",
    border: "border-electric-green/30",
    bg: "bg-electric-green/10",
    description:
      "The system runs a second retry using smart timing aligned with common payroll cycles (1st/15th of month, Fridays for weekly pay). If the member updated their card via the Day 1 link, this retry uses the new method automatically. This single retry recovers an additional 12-18% of remaining failures.",
  },
  {
    day: "Day 7",
    title: "Late Fee + Staff Alert",
    icon: Bell,
    color: "text-sunset-orange",
    border: "border-sunset-orange/30",
    bg: "bg-sunset-orange/10",
    description:
      "If configured, a late fee is applied to the member's account. Simultaneously, staff receive a dashboard alert with the member's payment history, contact info, and a summary of all automated actions taken so far. The member receives a second notification emphasizing urgency.",
  },
  {
    day: "Day 14",
    title: "Escalation",
    icon: ShieldAlert,
    color: "text-alert-red",
    border: "border-alert-red/30",
    bg: "bg-alert-red/10",
    description:
      "The system sends a final outreach to the member — email, SMS, and optional push notification — warning that their membership will be affected. A third retry fires. Staff are flagged with an escalation priority marker on the Command Center dashboard. At this point, the system has given the member every possible chance to resolve silently.",
  },
  {
    day: "Day 21",
    title: "Suspension Workflow",
    icon: UserX,
    color: "text-alert-red",
    border: "border-alert-red/30",
    bg: "bg-alert-red/10",
    description:
      "Membership access is automatically suspended (or flagged for manual suspension, depending on your settings). The member is notified with clear instructions on how to reactivate. All actions, timestamps, and communications are logged for compliance. Your team has a complete audit trail if disputes arise.",
  },
];

/* ────────────────────────────────────────────
   Comparison Table Data
   ──────────────────────────────────────────── */
const comparisonRows = [
  {
    metric: "Payment Retry Timing",
    legacy: "Manual retry, random timing, staff-dependent",
    gymwyse: "AI-optimized retry aligned with payroll cycles",
  },
  {
    metric: "Member Communication",
    legacy: "Awkward phone calls or no contact at all",
    gymwyse: "Branded email + SMS with one-tap card update links",
  },
  {
    metric: "Late Fee Application",
    legacy: "Inconsistent — depends on who is working",
    gymwyse: "Automatic, rule-based, applied at configurable thresholds",
  },
  {
    metric: "Account Suspension",
    legacy: "Delayed weeks or forgotten entirely",
    gymwyse: "Triggered automatically at Day 21 with full audit trail",
  },
  {
    metric: "Reporting & Visibility",
    legacy: "Spreadsheets, guesswork, no real-time data",
    gymwyse: "Real-time Command Center dashboard with recovery metrics",
  },
  {
    metric: "Recovery Rate",
    legacy: "10-15% of failed payments recovered",
    gymwyse: "38-42% of failed payments recovered automatically",
  },
  {
    metric: "Staff Time Required",
    legacy: "4-6 hours/week chasing failed payments",
    gymwyse: "Under 30 minutes/week reviewing escalations only",
  },
  {
    metric: "Compliance & Audit Trail",
    legacy: "No documentation, liability risk",
    gymwyse: "Full log of every action, retry, and communication",
  },
];

/* ────────────────────────────────────────────
   FAQ Accordion Component
   ──────────────────────────────────────────── */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="glass-card overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
          >
            <span className="text-pure-white font-medium pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-electric-green" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 text-cool-gray leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────
   JSON-LD Schemas
   ──────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Failed Gym Payments with Automated Dunning",
  description:
    "A step-by-step automated dunning sequence that recovers 40% of failed gym membership payments without manual intervention.",
  step: dunningSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: `${step.day}: ${step.title}`,
    text: step.description,
  })),
};

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export function StopFailedPaymentsPage() {
  return (
    <main className="bg-deep-space">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* ── Hero Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
              Revenue Recovery
            </span>
            <span className="text-xs text-dim-gray flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              12 min read
            </span>
            <span className="text-xs text-dim-gray">
              December 18, 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight mb-8">
            Stop Failed Payments: The Automated Revenue Recovery Blueprint
          </h1>

          {/* Direct Answer — First 50-70 words */}
          <div className="glass-card p-6 md:p-8 border-l-4 border-electric-green">
            <p className="text-lg md:text-xl text-soft-white leading-relaxed">
              <strong className="text-electric-green">Here is the short answer:</strong>{" "}
              You recover failed gym payments by deploying an automated dunning sequence that retries charges
              at intelligent intervals aligned with payroll cycles, sends branded member notifications with
              one-tap card update links, and escalates unresolved failures to your staff only after every
              automated option is exhausted. This approach recovers 38-42% of failed payments without a
              single awkward phone call from your front desk.
            </p>
          </div>

          <p className="text-lg text-cool-gray leading-relaxed mt-8">
            Now let&apos;s get into exactly how it works, step by step, with real numbers from
            real gyms.
          </p>
        </div>
      </section>

      {/* ── The Problem: What Failed Payments Actually Cost You ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            What Failed Payments Are Actually Costing You
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed">
            <p>
              Every gym owner knows failed payments happen. What most don&apos;t know is the scale.
              Across our network of 200+ gyms, we see an average monthly payment failure rate of
              4.2%. That sounds small until you do the math on your own roster.
            </p>
            <p>
              Here is what makes failed payments particularly insidious: they are invisible revenue loss.
              Nobody walks into your gym and cancels. No exit survey gets filled out. The money just
              quietly stops arriving, and unless you have a system actively watching for it, weeks can pass
              before anyone notices. By then, the member has mentally disengaged, and recovering both the
              payment and the relationship becomes exponentially harder.
            </p>
            <p>
              The traditional approach — having your front desk staff call or email members with declined
              cards — creates three problems. First, it is embarrassing for the member. Nobody wants a
              phone call about their finances. Second, it is inconsistent. Staff turnover, busy mornings,
              and human forgetfulness mean many failed payments simply never get followed up on. Third,
              it is expensive. Your team&apos;s time has a cost, and chasing $95 payments for hours is
              not where you want that cost allocated.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI Calculation ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-8">
            The ROI Math: What Automated Recovery Is Worth
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-electric-green/10">
                <DollarSign className="w-6 h-6 text-electric-green" />
              </div>
              <h3 className="text-xl font-bold text-pure-white">
                Revenue Recovery Calculator
              </h3>
            </div>

            <div className="space-y-4 text-soft-white leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-midnight border border-glass-border">
                  <p className="text-sm text-cool-gray mb-1">Active Members</p>
                  <p className="text-2xl font-bold text-pure-white font-mono">1,000</p>
                </div>
                <div className="p-4 rounded-xl bg-midnight border border-glass-border">
                  <p className="text-sm text-cool-gray mb-1">Monthly Failure Rate</p>
                  <p className="text-2xl font-bold text-pure-white font-mono">4.2%</p>
                </div>
                <div className="p-4 rounded-xl bg-midnight border border-glass-border">
                  <p className="text-sm text-cool-gray mb-1">Failed Payments/Month</p>
                  <p className="text-2xl font-bold text-sunset-orange font-mono">42</p>
                </div>
                <div className="p-4 rounded-xl bg-midnight border border-glass-border">
                  <p className="text-sm text-cool-gray mb-1">Avg. Membership Price</p>
                  <p className="text-2xl font-bold text-pure-white font-mono">$95/mo</p>
                </div>
              </div>

              <div className="border-t border-glass-border pt-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-alert-red/10 border border-alert-red/20">
                    <p className="text-sm text-cool-gray mb-1">Monthly Revenue at Risk</p>
                    <p className="text-2xl font-bold text-alert-red font-mono">$3,990</p>
                    <p className="text-xs text-dim-gray mt-1">42 failures x $95</p>
                  </div>
                  <div className="p-4 rounded-xl bg-electric-green/10 border border-electric-green/20">
                    <p className="text-sm text-cool-gray mb-1">Recovered Monthly (40%)</p>
                    <p className="text-2xl font-bold text-electric-green font-mono">$1,596</p>
                    <p className="text-xs text-dim-gray mt-1">16.8 payments recovered</p>
                  </div>
                  <div className="p-4 rounded-xl bg-electric-green/10 border border-electric-green/20">
                    <p className="text-sm text-cool-gray mb-1">Annual Recovery</p>
                    <p className="text-2xl font-bold text-electric-green font-mono">$19,152</p>
                    <p className="text-xs text-dim-gray mt-1">$1,596 x 12 months</p>
                  </div>
                </div>
              </div>

              <p className="text-cool-gray text-sm pt-2">
                These figures are based on aggregated data from 200+ gyms on the GymWyse platform.
                Your actual recovery will depend on your member demographics, payment method mix,
                and dunning configuration.{" "}
                <Link href="/roi-calculator" className="text-electric-green underline underline-offset-2 hover:brightness-110">
                  Run the numbers for your gym
                </Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How the Command Center Solves This ── */}
      <section className="pb-20 md:pb-28 bg-midnight py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            How the Command Center Solves This
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed mb-10">
            <p>
              The GymWyse Command Center includes a dedicated{" "}
              <strong className="text-electric-green">Failed Payment Terminal</strong>{" "}
              — a real-time dashboard metric that gives you instant visibility into every declined
              transaction across your entire operation. No spreadsheets. No digging through payment
              processor logs. One glance tells you exactly where you stand.
            </p>
            <p>
              The Failed Payment Terminal surfaces four critical data points: the number of currently
              unresolved failed payments, the total dollar amount at risk, the current automated
              recovery rate (as a percentage), and the trend line showing whether failures are
              increasing or decreasing month over month. Each failed payment is clickable, showing
              the full dunning timeline — what has been tried, what is scheduled next, and what the
              member&apos;s response has been.
            </p>
            <p>
              For multi-location operators, the Command Center aggregates failed payment data across
              all sites, letting you compare recovery rates between locations and identify systemic
              issues — like a specific payment processor underperforming or a location with an
              unusually high failure rate that might indicate a demographic-specific billing timing
              problem.
            </p>
          </div>

          <div className="glass-card p-6 border border-electric-green/20">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-electric-green" />
              <h3 className="text-lg font-semibold text-pure-white">
                Failed Payment Terminal — Live Metrics
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-lg bg-deep-space">
                <p className="text-2xl font-bold text-alert-red font-mono">17</p>
                <p className="text-xs text-cool-gray mt-1">Unresolved</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-deep-space">
                <p className="text-2xl font-bold text-sunset-orange font-mono">$1,615</p>
                <p className="text-xs text-cool-gray mt-1">At Risk</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-deep-space">
                <p className="text-2xl font-bold text-electric-green font-mono">41.2%</p>
                <p className="text-xs text-cool-gray mt-1">Recovery Rate</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-deep-space">
                <p className="text-2xl font-bold text-electric-green font-mono">-8.3%</p>
                <p className="text-xs text-cool-gray mt-1">Trend (MoM)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Full Dunning Sequence ── */}
      <section className="pb-20 md:pb-28 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            The Full Dunning Sequence: Day 0 to Day 21
          </h2>
          <p className="text-soft-white leading-relaxed mb-10">
            This is the exact automated sequence that runs every time a payment fails in GymWyse.
            Every step is configurable — you set the timing, the tone, and the escalation thresholds.
            But this is the default configuration that our highest-performing gyms use, and the one
            we recommend as your starting point.
          </p>

          <div className="space-y-4">
            {dunningSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass-card p-6 border-l-4 ${step.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${step.bg} shrink-0 mt-0.5`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold font-mono ${step.color}`}>
                          {step.day}
                        </span>
                        <h3 className="text-lg font-semibold text-pure-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-cool-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Smart Retry Timing & Pre-Dunning ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Smart Retry Timing: Why When You Retry Matters More Than How Often
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed">
            <p>
              Most gym billing systems retry failed payments on a fixed schedule — every 3 days,
              every 5 days, whatever the default happens to be. The problem is that payment failures
              are not random. The majority of declined payments fail because of insufficient funds,
              and insufficient funds are a timing problem, not a permanent one.
            </p>
            <p>
              GymWyse&apos;s smart retry engine tracks payment success patterns at the individual
              member level and correlates them with common payroll deposit schedules. If a member&apos;s
              payments consistently succeed on the 2nd of the month (suggesting a monthly paycheck
              deposited on the 1st), the system will schedule retries to align with that window. For
              members whose payments succeed mid-month, retries shift to the 16th or 17th.
            </p>
            <p>
              This is not a gimmick. Payroll-aligned retries increase first-attempt recovery rates
              by 15-22% compared to fixed-interval retries. That is the difference between recovering
              6 payments and recovering 9 out of every batch of 42 failures. Over a year, that
              difference alone is worth thousands.
            </p>

            <div className="glass-card p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-sapphire-blue/10">
                  <CalendarClock className="w-5 h-5 text-sapphire-blue" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white">
                  Pre-Dunning: Card Update Reminders
                </h3>
              </div>
              <p className="text-cool-gray leading-relaxed">
                The best failed payment is the one that never happens. GymWyse monitors card
                expiration dates and sends proactive reminders 30, 14, and 7 days before a card
                expires. Each reminder includes a branded, mobile-friendly link where the member can
                update their payment method in under 30 seconds. Gyms using pre-dunning reminders
                see 28% fewer payment failures from expired cards — which is the second most common
                failure reason after insufficient funds. Combined with smart retry timing, pre-dunning
                turns your payment recovery from reactive firefighting into proactive revenue
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Psychology of Automated vs Manual ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            The Psychology of Automated vs. Manual Collection
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed">
            <p>
              There is a reason automated dunning recovers 3-4x more revenue than manual follow-up,
              and it is not just about consistency. It is about psychology.
            </p>
            <p>
              When a staff member calls a gym member about a declined payment, both parties feel
              uncomfortable. The staff member is put in the role of debt collector — a role they
              did not sign up for and have no training in. The member feels embarrassed, possibly
              defensive, and now associates your gym with a negative emotional experience. Even if
              the payment gets resolved, the relationship takes a hit.
            </p>
            <p>
              Automated notifications remove the human awkwardness entirely. A well-crafted email
              that says &quot;Hey, your card ending in 4521 was declined — tap here to update it&quot;
              feels like a helpful system notification, not a collections call. The member handles it
              on their own time, in private, without anyone watching. There is no shame, no
              confrontation, no damage to the member-gym relationship.
            </p>
            <p>
              The payment method update link is critical here. Do not just tell the member their
              payment failed — give them a frictionless way to fix it. One tap, mobile-optimized,
              takes 30 seconds. The easier you make it, the faster they act. Our data shows that
              members who receive a notification with an embedded update link resolve the issue 3.2x
              faster than members who are simply told to &quot;call the front desk.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="pb-20 md:pb-28 bg-midnight py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-8">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left text-sm font-semibold text-cool-gray py-4 pr-4 w-1/4">
                    Metric
                  </th>
                  <th className="text-left text-sm font-semibold text-alert-red py-4 px-4 w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Legacy Manual Management
                    </div>
                  </th>
                  <th className="text-left text-sm font-semibold text-electric-green py-4 pl-4 w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      GymWyse AI Management
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-glass-border/50"
                  >
                    <td className="py-4 pr-4 text-sm font-medium text-pure-white">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 text-sm text-cool-gray">
                      {row.legacy}
                    </td>
                    <td className="py-4 pl-4 text-sm text-soft-white">
                      {row.gymwyse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Integration with Billing Systems ── */}
      <section className="pb-20 md:pb-28 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Integration with Your Billing Systems
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed">
            <p>
              Automated dunning only works if it is plugged directly into your billing infrastructure.
              GymWyse integrates natively with major{" "}
              <Link href="/gym-payment-processing" className="text-electric-green underline underline-offset-2 hover:brightness-110">
                gym payment processors
              </Link>{" "}
              including Stripe, GoCardless, Square, and ABC Financial. The integration is
              bidirectional — GymWyse reads payment events in real time and writes retry
              instructions back to the processor, so there is no sync lag and no manual data entry.
            </p>
            <p>
              For gyms using embedded billing through their existing management software, GymWyse&apos;s
              API layer sits on top of your current stack. You do not need to rip out your payment
              processor to use automated recovery. The system reads webhook events from your
              processor, manages the dunning logic, and triggers retries through the same processor
              you already use. Setup takes less than an hour for supported processors.
            </p>
            <p>
              Every transaction, retry, notification, and status change is logged and available through
              the Command Center. If a member disputes a charge, you have a complete timeline of
              every action taken — when the original charge failed, when retries were attempted, what
              notifications the member received, and whether they interacted with any update links.
              This audit trail is not just operationally useful — it is essential for compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Regional Compliance ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-8">
            Regional Compliance: Payment Regulations by Market
          </h2>

          <p className="text-soft-white leading-relaxed mb-8">
            Failed payment recovery is not one-size-fits-all. Different markets have different
            payment rails, different consumer protection rules, and different retry limits. GymWyse
            automatically adapts its dunning behavior based on your operating region and payment
            method mix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-sapphire-blue" />
                <h3 className="text-lg font-semibold text-pure-white">
                  United States
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                ACH transactions follow NACHA operating rules with specific retry windows and
                return code handling (R01 insufficient funds vs. R03 account not found require
                different responses). Card network rules from Visa and Mastercard cap the number
                of retry attempts on hard declines. GymWyse respects all network-mandated retry
                limits and automatically classifies decline codes to avoid compliance violations
                that could result in processor fines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-sapphire-blue" />
                <h3 className="text-lg font-semibold text-pure-white">
                  United Kingdom
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                BACS Direct Debit operates under the Direct Debit Guarantee, which gives consumers
                the right to an immediate refund for any disputed payment. GymWyse&apos;s UK
                dunning sequences account for BACS processing timelines (3-day clearing cycle),
                indemnity claim risks, and Advance Notice requirements. Retry scheduling respects
                BACS submission windows to maximize first-attempt success rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-sapphire-blue" />
                <h3 className="text-lg font-semibold text-pure-white">
                  Australia
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                Australian gyms using BPAY or direct debit through the Bulk Electronic Clearing
                System (BECS) face unique reconciliation requirements. GymWyse automates BPAY
                reference matching and handles BECS dishonour codes with appropriate retry logic.
                The system also respects ASIC guidelines on recurring payment notifications,
                ensuring members receive compliant advance notice before each billing cycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-sapphire-blue" />
                <h3 className="text-lg font-semibold text-pure-white">
                  UAE
                </h3>
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                Payment regulations in the UAE are governed by the Central Bank and require
                compliance with the UAE Payment Systems framework. GymWyse supports recurring
                card payments through UAE-licensed processors and respects local regulations on
                auto-debit mandates, standing instructions, and consumer notification requirements.
                Multi-currency handling ensures accurate billing for international members.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Real Recovery Rate Data ── */}
      <section className="pb-20 md:pb-28 bg-midnight py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Real Recovery Rate Data
          </h2>

          <div className="space-y-5 text-soft-white leading-relaxed mb-10">
            <p>
              Let&apos;s talk real numbers, because theoretical recovery rates are meaningless
              without proof. Here is what we see across the GymWyse network:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-electric-green font-mono">41.2%</p>
              <p className="text-sm text-cool-gray mt-2">Average Automated Recovery Rate</p>
              <p className="text-xs text-dim-gray mt-1">Across 200+ gyms</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-sapphire-blue font-mono">62%</p>
              <p className="text-sm text-cool-gray mt-2">Recovered Within 3 Days</p>
              <p className="text-xs text-dim-gray mt-1">Of all successfully recovered payments</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-sunset-orange font-mono">23%</p>
              <p className="text-sm text-cool-gray mt-2">Via Card Update Link</p>
              <p className="text-xs text-dim-gray mt-1">Member self-service resolution</p>
            </div>
          </div>

          <div className="space-y-5 text-soft-white leading-relaxed">
            <p>
              The 41.2% average breaks down further: 62% of recovered payments come back within the
              first 3 days (Day 0 smart retry + Day 1 member notification + Day 3 second retry).
              Another 23% recover between Day 7 and Day 14 after the escalation notices go out.
              The remaining 15% come in during the final window before suspension.
            </p>
            <p>
              Of the payments that are recovered, roughly 23% are resolved by members clicking the
              card update link and entering a new payment method — meaning the original card was
              genuinely dead (expired, reported lost, etc.) but the member was still willing to pay.
              Without that self-service link, those payments would have been lost entirely because
              no amount of retrying the old card would have worked.
            </p>
            <p>
              Gyms that enable all features — smart retry timing, pre-dunning card expiry reminders,
              automated member notifications with update links, and the full 21-day escalation
              sequence — see recovery rates at the top of the range (38-42%). Gyms that use only
              basic retry logic without member notifications typically land around 18-22%.
              The notifications and update links roughly double your recovery rate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Expert Commentary ── */}
      <section className="pb-20 md:pb-28 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10 border border-sapphire-blue/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-sapphire-blue/10">
                <Lightbulb className="w-6 h-6 text-sapphire-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pure-white">
                  Insights from GymWyse Product Team
                </h3>
                <p className="text-sm text-dim-gray">Product &amp; Engineering</p>
              </div>
            </div>

            <div className="space-y-4 text-soft-white leading-relaxed">
              <p>
                &quot;The biggest misconception we encounter is that failed payment recovery is a
                billing problem. It is not. It is a member experience problem disguised as a billing
                problem. When we reframed the dunning sequence as a member communication flow rather
                than a collections process, recovery rates jumped by 18 percentage points across our
                beta cohort.&quot;
              </p>
              <p>
                &quot;The key insight was the self-service update link. Before we added it, members
                who received a &apos;your payment failed&apos; email had to call the gym, visit in
                person, or log into a clunky portal to update their card. Friction kills conversion,
                and that applies to payment recovery just as much as it applies to sign-ups. One tap
                to a mobile-optimized card update form changed everything.&quot;
              </p>
              <p>
                &quot;We also learned that timing the first retry is far more impactful than adding
                more retries. Three well-timed retries outperform seven poorly-timed ones. The system
                now factors in day of week, time of day, payroll cycle alignment, and even historical
                success patterns for each individual member. The difference between a Monday morning
                retry and a Friday afternoon retry can be a 20% swing in success rate.&quot;
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-glass-border">
              <p className="text-sm text-cool-gray">
                The GymWyse Product Team has analyzed over 2.4 million payment transactions to
                build the recovery algorithms that power the dunning engine. These insights are
                derived from real transaction data across multiple markets and payment methods.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="pb-20 md:pb-28 bg-midnight py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-cool-gray">
              Everything gym owners ask us about automated payment recovery.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-3 rounded-lg bg-electric-green/10 inline-flex mb-6">
            <CreditCard className="w-7 h-7 text-electric-green" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
            Stop Losing Revenue to Failed Payments
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-10 max-w-2xl mx-auto">
            The average gym on GymWyse recovers $1,596 per month in previously lost revenue.
            See what your gym could recover — or start your free trial and activate automated
            dunning in under 48 hours.
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
          </div>
          <p className="text-sm text-dim-gray mt-6">
            No credit card required. Full dunning automation included in all plans.
          </p>
        </div>
      </section>
    </main>
  );
}
