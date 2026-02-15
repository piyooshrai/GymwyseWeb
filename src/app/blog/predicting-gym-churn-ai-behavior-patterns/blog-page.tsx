"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Users,
  Brain,
  ShieldCheck,
  BarChart3,
  Mail,
  MessageSquare,
  BellRing,
  DollarSign,
  Clock,
  Activity,
  Smartphone,
  CalendarX,
  Globe,
} from "lucide-react";

/* ───────────────────────── JSON-LD Schemas ───────────────────────── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does AI predict gym member churn before it happens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI churn prediction analyzes 14 behavioral signals including visit frequency decay, class booking pattern shifts, check-in time changes, social interaction drops, payment delays, and app engagement decline. By weighting these signals together, the model identifies at-risk members an average of 30 days before they cancel, giving staff time to intervene with targeted re-engagement workflows.",
      },
    },
    {
      "@type": "Question",
      name: "What behavioral signals indicate a gym member is about to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strongest churn predictors are visit frequency decay (dropping from 3x to 1x per week), class booking pattern shifts (switching from pre-booked to walk-in only), check-in time volatility, reduced social interactions like buddy workouts, payment method changes or delays, declining app engagement, shortened session duration, and decreased retail or supplement purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How many members can AI retention workflows save per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gyms using GymWyse AI-driven retention workflows save an average of 18 members per month. At an average membership value of $85/month, that translates to $1,530 in preserved monthly recurring revenue, or $18,360 annually. Results vary based on gym size and current churn rate, but most gyms see measurable impact within the first 30 days.",
      },
    },
    {
      "@type": "Question",
      name: "Why is attendance tracking alone not enough to prevent gym churn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attendance-only tracking misses approximately 60% of churn signals. A member can maintain visit frequency while exhibiting other warning signs like shorter sessions, dropping group classes, avoiding social areas, or letting payment issues linger. Multi-signal behavioral analysis catches these patterns that a simple headcount never will.",
      },
    },
    {
      "@type": "Question",
      name: "Is behavioral member data compliant with HIPAA, GDPR, and other privacy regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GymWyse processes behavioral data in compliance with HIPAA (US), GDPR (EU/UK), the Australian Privacy Act, and UAE data hosting requirements. All behavioral signals are derived from facility usage and engagement metadata, not health records. Data is encrypted at rest and in transit, and members can request data export or deletion at any time.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Predict and Prevent Gym Member Churn with AI",
  description:
    "A step-by-step guide to implementing AI-driven churn prediction and automated retention workflows in your gym.",
  step: [
    {
      "@type": "HowToStep",
      name: "Connect your member data sources",
      text: "Integrate your access control system, booking platform, payment processor, and member app with GymWyse to feed the churn prediction model with real-time behavioral data across all 14 signal categories.",
    },
    {
      "@type": "HowToStep",
      name: "Configure churn risk thresholds",
      text: "Set risk score thresholds in the Command Center. Members scoring above 70 are flagged as high risk, 40-70 as moderate risk. Customize these thresholds based on your gym's historical churn patterns.",
    },
    {
      "@type": "HowToStep",
      name: "Build automated re-engagement workflows",
      text: "Create multi-channel retention sequences triggered by risk score changes. Configure email offers, SMS check-ins, and staff task alerts to activate automatically when a member crosses a risk threshold.",
    },
    {
      "@type": "HowToStep",
      name: "Train staff on intervention protocols",
      text: "Equip your front-desk and coaching staff with the member risk context they need. When a staff alert fires, they see the specific behavioral changes driving the score so conversations feel personal, not scripted.",
    },
    {
      "@type": "HowToStep",
      name: "Monitor retention dashboard and iterate",
      text: "Track saved members, intervention success rates, and churn rate trends on the Churn Risk Alerts Dashboard. Review weekly and adjust workflow triggers based on what is working.",
    },
  ],
};

/* ───────────────────────── FAQ Data ───────────────────────── */

const faqItems = [
  {
    question: "How does AI predict gym member churn before it happens?",
    answer:
      "AI churn prediction analyzes 14 behavioral signals including visit frequency decay, class booking pattern shifts, check-in time changes, social interaction drops, payment delays, and app engagement decline. By weighting these signals together, the model identifies at-risk members an average of 30 days before they cancel, giving staff time to intervene with targeted re-engagement workflows.",
  },
  {
    question:
      "What behavioral signals indicate a gym member is about to cancel?",
    answer:
      "The strongest churn predictors are visit frequency decay (dropping from 3x to 1x per week), class booking pattern shifts (switching from pre-booked to walk-in only), check-in time volatility, reduced social interactions like buddy workouts, payment method changes or delays, declining app engagement, shortened session duration, and decreased retail or supplement purchases. No single signal is definitive on its own, but the combination creates a highly accurate risk profile.",
  },
  {
    question: "How many members can AI retention workflows save per month?",
    answer:
      "Gyms using GymWyse AI-driven retention workflows save an average of 18 members per month. At an average membership value of $85/month, that translates to $1,530 in preserved monthly recurring revenue, or $18,360 annually. Results vary based on gym size and current churn rate, but most gyms see measurable impact within the first 30 days of activation.",
  },
  {
    question:
      "Why is attendance tracking alone not enough to prevent gym churn?",
    answer:
      "Attendance-only tracking misses approximately 60% of churn signals. A member can maintain visit frequency while exhibiting other warning signs like shorter sessions, dropping group classes, avoiding social areas, or letting payment issues linger. By the time attendance actually drops, you are typically 7-10 days from cancellation with almost no runway to intervene. Multi-signal behavioral analysis catches these patterns weeks earlier.",
  },
  {
    question:
      "Is behavioral member data compliant with HIPAA, GDPR, and other privacy regulations?",
    answer:
      "Yes. GymWyse processes behavioral data in compliance with HIPAA (US), GDPR (EU/UK), the Australian Privacy Act, and UAE data hosting requirements. All behavioral signals are derived from facility usage and engagement metadata, not protected health information. Data is encrypted at rest (AES-256) and in transit (TLS 1.3), and members can request full data export or deletion at any time through the member app or by contacting gym staff.",
  },
  {
    question:
      "How long does it take to see results from AI churn prediction?",
    answer:
      "Most gyms see the first at-risk member flags within 48 hours of connecting their data sources. The model reaches full calibration after 14-21 days of observing your specific member base patterns. Measurable churn reduction typically shows up in the first monthly report, with the full impact visible by month two as automated workflows have time to complete their sequences.",
  },
];

/* ───────────────────────── Comparison Table Data ───────────────────────── */

const comparisonRows = [
  {
    metric: "Churn detection timing",
    legacy: "After cancellation request",
    gymwyse: "30 days before cancellation",
  },
  {
    metric: "Behavioral signals tracked",
    legacy: "1 (attendance only)",
    gymwyse: "14 signals analyzed in real time",
  },
  {
    metric: "Re-engagement method",
    legacy: "Manual phone calls by staff",
    gymwyse: "Automated email + SMS + staff alerts",
  },
  {
    metric: "Monthly members saved",
    legacy: "2-4 (reactive saves)",
    gymwyse: "18 avg (proactive intervention)",
  },
  {
    metric: "Staff time per at-risk member",
    legacy: "25-40 minutes research + outreach",
    gymwyse: "5 minutes (context pre-loaded)",
  },
  {
    metric: "Revenue impact per month",
    legacy: "$170-$340 saved",
    gymwyse: "$1,530 in preserved MRR",
  },
  {
    metric: "Churn rate reduction",
    legacy: "Minimal (0.5% improvement)",
    gymwyse: "Up to 47% reduction (8% to 4.2%)",
  },
];

/* ───────────────────────── Behavioral Signals ───────────────────────── */

const behavioralSignals = [
  { icon: TrendingDown, label: "Visit frequency decay", weight: "High" },
  { icon: CalendarX, label: "Class booking pattern shifts", weight: "High" },
  { icon: Clock, label: "Check-in time volatility", weight: "Medium" },
  { icon: Users, label: "Social interaction drops", weight: "High" },
  { icon: DollarSign, label: "Payment delays or method changes", weight: "High" },
  { icon: Smartphone, label: "App engagement decline", weight: "Medium" },
  { icon: Activity, label: "Session duration shortening", weight: "Medium" },
  { icon: BarChart3, label: "Workout variety reduction", weight: "Low" },
  { icon: MessageSquare, label: "Staff interaction decrease", weight: "Medium" },
  { icon: ShieldCheck, label: "Freeze/hold inquiries", weight: "High" },
  { icon: Globe, label: "Referral activity cessation", weight: "Low" },
  { icon: Mail, label: "Email open rate decline", weight: "Medium" },
  { icon: BellRing, label: "Push notification dismissals", weight: "Low" },
  { icon: DollarSign, label: "Retail/supplement purchase drops", weight: "Low" },
];

/* ───────────────────────── Component ───────────────────────── */

export function PredictingChurnPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="bg-deep-space min-h-screen">
        {/* ── Hero ── */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-green/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
                Churn Prevention
              </span>
              <span className="text-xs text-dim-gray">December 6, 2025</span>
              <span className="text-xs text-dim-gray">12 min read</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight mb-8">
              Beyond Attendance: Predicting Gym Churn with AI Behavior Patterns
            </h1>

            {/* Direct Answer Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 md:p-8 border-l-4 border-electric-green"
            >
              <p className="text-lg md:text-xl text-soft-white leading-relaxed">
                AI predicts gym churn by analyzing 14 behavioral signals simultaneously, not just whether a member
                walks through the door. Visit frequency decay, class booking shifts, check-in time changes,
                social interaction drops, payment delays, and app engagement decline are all weighted and scored
                to flag at-risk members a full 30 days before they cancel. The result: automated re-engagement
                workflows that save an average of 18 members per month.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── The Problem: Attendance-Only Tracking ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Why Attendance-Only Tracking Misses 60% of Churn Signals
              </h2>
              <div className="space-y-5 text-soft-white leading-relaxed">
                <p>
                  If you are running a gym right now, you probably track check-ins. Most owners do. A member
                  swipes in, the counter ticks up, and you feel like you have a handle on engagement. But here
                  is the uncomfortable truth that attendance data alone hides from you: by the time a member
                  stops showing up, the decision to cancel was made weeks ago.
                </p>
                <p>
                  Our analysis across 200+ gyms on the GymWyse platform revealed that attendance-only tracking
                  misses approximately 60% of the behavioral signals that precede cancellation. A member who
                  drops from four visits per week to two still &quot;shows up,&quot; but their behavior is
                  screaming that something is wrong. They stopped booking their favorite Tuesday spin class.
                  Their sessions shortened from 75 minutes to 35. They switched from morning check-ins to erratic
                  evening drop-ins. They haven&apos;t opened your app in three weeks. None of that shows up in a
                  check-in count.
                </p>
                <p>
                  The average gym operating on attendance data alone detects churn risk only 7-10 days before
                  cancellation. At that point, your intervention window is essentially zero. The member has already
                  mentally checked out, researched alternatives, or simply decided that the monthly charge is not
                  worth it. You are not preventing churn at that stage; you are reacting to it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── The 14 Behavioral Signals ── */}
        <section className="pb-20 md:pb-28 bg-midnight py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
                14 Behavioral Signals the AI Analyzes in Real Time
              </h2>
              <p className="text-lg text-cool-gray max-w-2xl mx-auto">
                Each signal is weighted by its predictive power for churn. The composite score updates
                daily for every active member.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {behavioralSignals.map((signal, i) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="glass-card p-4 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-electric-green/10 shrink-0">
                      <Icon className="w-4 h-4 text-electric-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-pure-white">{signal.label}</p>
                      <p
                        className={`text-xs mt-1 font-semibold ${
                          signal.weight === "High"
                            ? "text-alert-red"
                            : signal.weight === "Medium"
                              ? "text-sunset-orange"
                              : "text-cool-gray"
                        }`}
                      >
                        {signal.weight} weight
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 max-w-4xl mx-auto space-y-5 text-soft-white leading-relaxed">
              <p>
                Let me walk you through why multi-signal analysis matters. Consider a member named Sarah. She
                has held a $95/month premium membership for 14 months. Her attendance is still twice per week,
                right in line with her average. But underneath that headline number, the signals tell a different
                story. Sarah stopped booking her regular Thursday yoga class three weeks ago. Her check-in time
                shifted from a consistent 6:30 AM to random afternoon slots. She used to tag her gym buddy in
                the app after paired workouts; that stopped entirely. She also let a payment retry sit for six
                days before it cleared, after 13 months of zero payment issues.
              </p>
              <p>
                An attendance-only system sees Sarah as a &quot;healthy&quot; member. GymWyse&apos;s churn model
                sees five concurrent warning signals and assigns her a risk score of 78 out of 100. That score
                triggers an automated retention workflow 30 days before her next renewal date, giving your staff
                a real chance to re-engage her while she is still persuadable.
              </p>
            </div>
          </div>
        </section>

        {/* ── The 30-Day Early Warning System ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                The 30-Day Early Warning System
              </h2>
              <div className="space-y-5 text-soft-white leading-relaxed">
                <p>
                  Timing is everything in churn prevention. Reach out too early and you spook a perfectly
                  happy member. Reach out too late and the decision is already made. The 30-day window exists
                  because our data shows it is the sweet spot where members are experiencing friction but
                  have not yet committed to leaving.
                </p>
                <p>
                  Here is how the early warning timeline works. When a member&apos;s composite risk score crosses
                  the 40-point threshold, they enter the &quot;watch&quot; tier. The system starts monitoring
                  more aggressively, checking for signal acceleration. If the score climbs above 70 within the
                  next seven days, the member is escalated to &quot;high risk&quot; and automated interventions
                  activate immediately.
                </p>
                <p>
                  The beauty of a 30-day window is the range of interventions available. You are not limited to
                  a desperate &quot;please don&apos;t leave&quot; email. You have time to offer a complimentary
                  personal training session, invite them to a new class format, address a billing concern before
                  it festers, or simply have a coach check in authentically. The earlier you detect the shift,
                  the more natural and non-salesy the save feels to the member.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Automated Re-Engagement Workflows ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Automated Re-Engagement Workflows That Actually Work
              </h2>
              <div className="space-y-5 text-soft-white leading-relaxed">
                <p>
                  Detection without action is just a fancier way of watching members leave. The real value of
                  AI churn prediction is what happens after a risk score fires. GymWyse triggers a multi-channel
                  re-engagement sequence that combines email, SMS, and staff task alerts into a coordinated
                  intervention.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Sequences",
                    desc: "Personalized emails referencing the member's specific usage patterns. Not generic 'We miss you' templates, but targeted content like 'We noticed you haven't tried our new HIIT format yet' based on their class history.",
                  },
                  {
                    icon: MessageSquare,
                    title: "SMS Check-Ins",
                    desc: "Short, conversational text messages from the gym (or a specific coach) that feel human. Triggered 48 hours after email if no engagement is detected. Open rates on these average 94%.",
                  },
                  {
                    icon: BellRing,
                    title: "Staff Task Alerts",
                    desc: "When email and SMS don't generate engagement within 5 days, a task lands on your front-desk or coaching staff's dashboard with full context: the member's risk score, the specific behavioral changes, and suggested talking points.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="p-2 rounded-lg bg-electric-green/10 inline-flex mb-4">
                        <Icon className="w-5 h-5 text-electric-green" />
                      </div>
                      <h3 className="text-lg font-semibold text-pure-white mb-2">{item.title}</h3>
                      <p className="text-sm text-cool-gray leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 space-y-5 text-soft-white leading-relaxed">
                <p>
                  This three-tier escalation ensures that you are never relying on a single channel.
                  Some members respond to a well-timed email offer. Others need that personal text from their
                  coach. And some genuinely need a face-to-face conversation where a staff member says,
                  &quot;Hey, we noticed things have changed a bit. Is there anything we can do to make your
                  experience better?&quot; The key is that your staff is not guessing who to talk to. The AI
                  tells them exactly who, exactly when, and exactly why.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── How the Command Center Solves This ── */}
        <section className="py-20 md:py-28 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                How the Command Center Solves This
              </h2>
              <div className="space-y-5 text-soft-white leading-relaxed">
                <p>
                  The <strong className="text-electric-green">Churn Risk Alerts Dashboard</strong> inside the
                  GymWyse Command Center is the operational nerve center for member retention. When you open it,
                  you see three things immediately: the total number of members currently flagged as at-risk,
                  the distribution across risk tiers (watch, moderate, and high), and the week-over-week trend
                  showing whether your at-risk pool is growing or shrinking.
                </p>
                <p>
                  Each flagged member gets a dedicated risk card showing their composite score, the specific
                  signals driving that score (color-coded by severity), their membership value, tenure, and
                  the currently active re-engagement workflow stage. You can click into any member to see the
                  full behavioral timeline: when their visit pattern shifted, which classes they dropped, how
                  their app engagement trended over the last 90 days.
                </p>
                <p>
                  The dashboard also surfaces aggregate metrics that matter for strategic planning. You can see
                  your monthly save rate (how many flagged members were retained), the average intervention cost
                  per save, and the net revenue preserved. These numbers feed directly into the{" "}
                  <Link href="/roi-calculator" className="text-electric-green underline underline-offset-2 hover:brightness-110">
                    ROI calculator
                  </Link>{" "}
                  so you can quantify exactly what churn prevention is worth to your bottom line.
                </p>
                <p>
                  For multi-location operators, the Command Center aggregates risk data across all sites,
                  letting you compare churn risk profiles between locations. If your downtown location is
                  generating twice the high-risk flags as your suburban site, that insight drives operational
                  decisions around staffing, programming, and facility investment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
                Legacy Manual Management vs. GymWyse AI Management
              </h2>
              <p className="text-lg text-cool-gray max-w-2xl mx-auto">
                A side-by-side look at what changes when you move from reactive to predictive
                churn management.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="py-4 px-4 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-alert-red uppercase tracking-wider">
                      Legacy Manual Management
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-electric-green uppercase tracking-wider">
                      GymWyse AI Management
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="border-b border-glass-border/50 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-4 text-sm font-medium text-pure-white">{row.metric}</td>
                      <td className="py-4 px-4 text-sm text-cool-gray">{row.legacy}</td>
                      <td className="py-4 px-4 text-sm text-electric-green font-medium">{row.gymwyse}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Case Study ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Case Study: From 8% Monthly Churn to 4.2%
              </h2>
              <div className="glass-card p-6 md:p-8 space-y-5 text-soft-white leading-relaxed">
                <p>
                  A 650-member independent gym in the southeastern US was losing an average of 52 members per
                  month, an 8% monthly churn rate. The owner tracked attendance and ran a quarterly
                  &quot;win-back&quot; email campaign. Those campaigns recovered about 3-5 members per cycle.
                  The rest were gone.
                </p>
                <p>
                  After deploying GymWyse&apos;s AI churn prediction, the gym connected its access control
                  system, booking platform, Stripe billing, and branded member app. Within 21 days, the model
                  had calibrated to the gym&apos;s specific patterns and began flagging at-risk members.
                </p>
                <p>
                  In the first full month, the system flagged 38 members as high risk. Automated workflows
                  activated for all 38. Of those, 14 re-engaged after the email sequence alone, 5 responded
                  to SMS outreach, and 3 were saved by staff interventions after face-to-face conversations.
                  That is 22 members retained in month one who would have churned under the old system.
                </p>
                <p>
                  By month three, the gym&apos;s rolling monthly churn rate had dropped from 8% to 4.2%. The
                  owner estimates this preserved $4,590 in monthly recurring revenue and fundamentally changed
                  how staff spend their time. Instead of scrambling to react after a cancellation, they
                  proactively engage members who still want to be convinced to stay.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ROI Calculation ── */}
        <section className="py-20 md:py-28 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
                The ROI Math: What 18 Saved Members Actually Means
              </h2>
              <div className="space-y-5 text-soft-white leading-relaxed mb-10">
                <p>
                  Gym owners are numbers people, so let me lay this out plainly. Here is the financial
                  impact of AI churn prediction based on the average results across our partner network.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8 border border-electric-green/20">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-cool-gray mb-1">Members saved per month (avg)</p>
                      <p className="text-3xl font-bold text-electric-green font-mono">18</p>
                    </div>
                    <div>
                      <p className="text-sm text-cool-gray mb-1">Average membership value</p>
                      <p className="text-3xl font-bold text-electric-green font-mono">$85/mo</p>
                    </div>
                    <div>
                      <p className="text-sm text-cool-gray mb-1">Monthly revenue preserved</p>
                      <p className="text-3xl font-bold text-electric-green font-mono">$1,530</p>
                    </div>
                    <div>
                      <p className="text-sm text-cool-gray mb-1">Annual revenue preserved</p>
                      <p className="text-3xl font-bold text-electric-green font-mono">$18,360</p>
                    </div>
                  </div>
                  <div className="border-t border-glass-border pt-6">
                    <p className="text-soft-white leading-relaxed">
                      <strong className="text-pure-white">The calculation:</strong> Saving 18 members at
                      $85/mo average = <span className="text-electric-green font-semibold">$1,530/month</span> in
                      preserved recurring revenue. Annualized, that is{" "}
                      <span className="text-electric-green font-semibold">$18,360/year</span> in revenue that would
                      have walked out the door. Factor in the lifetime value of those members (average gym member
                      tenure is 14 months), and the true impact climbs to{" "}
                      <span className="text-electric-green font-semibold">$21,420 per cohort</span> of retained
                      members. When your GymWyse subscription costs a fraction of one saved membership, the ROI
                      speaks for itself.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/roi-calculator">
                      <Button variant="primary" size="lg">
                        Calculate Your Specific ROI
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button variant="secondary" size="lg">
                        See It in Action
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Regional Compliance Note ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-sapphire-blue/10">
                  <ShieldCheck className="w-6 h-6 text-sapphire-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                  Regional Compliance for Behavioral Data
                </h2>
              </div>
              <div className="glass-card p-6 md:p-8 space-y-5 text-soft-white leading-relaxed">
                <p>
                  Collecting and analyzing member behavior data comes with regulatory obligations that vary
                  by region. Here is how GymWyse handles compliance across major markets.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  {[
                    {
                      region: "United States (HIPAA)",
                      detail:
                        "While gym behavioral data is generally not classified as Protected Health Information, GymWyse applies HIPAA-grade safeguards as a best practice. All behavioral data is encrypted at rest (AES-256), access is role-based, and audit logs track every data access event. If your gym operates alongside healthcare services or wellness programs, these controls satisfy compliance requirements.",
                    },
                    {
                      region: "European Union & UK (GDPR)",
                      detail:
                        "Behavioral analysis is processed under the legitimate interest legal basis with full transparency to members. Members receive clear disclosure about what data is analyzed, can opt out of automated decision-making, and can request complete data export or erasure. Data processing agreements are in place for all sub-processors.",
                    },
                    {
                      region: "Australia (Privacy Act 1988)",
                      detail:
                        "GymWyse complies with the Australian Privacy Principles (APPs) including purpose limitation, data minimization, and cross-border data transfer protections. Behavioral data collected from Australian members is processed within approved jurisdictions, and members are notified of collection purposes at signup.",
                    },
                    {
                      region: "UAE (Data Hosting Requirements)",
                      detail:
                        "For UAE-based gyms, GymWyse supports in-region data hosting through our Middle East infrastructure partner. Behavioral data for UAE members does not leave the region, satisfying local data residency requirements. Arabic-language member disclosures are available for compliance documentation.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-base font-semibold text-sapphire-blue">{item.region}</h3>
                      <p className="text-sm text-cool-gray leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Expert Commentary ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 md:p-8 border border-sapphire-blue/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-sapphire-blue/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-sapphire-blue/10">
                    <Brain className="w-5 h-5 text-sapphire-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sapphire-blue uppercase tracking-wider">
                      Insights from GymWyse Product Team
                    </p>
                  </div>
                </div>
                <div className="space-y-5 text-soft-white leading-relaxed">
                  <p>
                    &quot;When we first built the churn prediction model, we expected visit frequency to be
                    the dominant signal. It was not. The single strongest predictor turned out to be what we
                    call &apos;pattern disruption velocity,&apos; how quickly a member&apos;s established
                    routines break down across multiple dimensions simultaneously. A member who slowly reduces
                    visits over three months is actually lower risk than one whose class bookings, check-in
                    times, and app usage all shift within the same two-week window.&quot;
                  </p>
                  <p>
                    &quot;This insight shaped everything about how we designed the alert system. We do not
                    just look at absolute levels. We look at the rate of change across correlated signals.
                    That is why the model catches members that attendance-only systems miss entirely. The
                    member is still coming in, but the velocity of behavioral change tells us they are on
                    their way out.&quot;
                  </p>
                  <p>
                    &quot;The other thing gym owners consistently underestimate is the importance of the
                    intervention channel. We tested dozens of workflow configurations before landing on the
                    email-then-SMS-then-staff escalation model. The biggest surprise was that staff
                    interventions, the most expensive channel, had the highest save rate for high-risk
                    members, but only when the staff member had the full behavioral context in front of
                    them. A generic &apos;check in on this member&apos; task barely outperformed doing
                    nothing. Context is the multiplier.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MMA Gym Software Callout ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="p-3 rounded-lg bg-electric-green/10 shrink-0">
                  <AlertTriangle className="w-6 h-6 text-electric-green" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-pure-white">
                    Running a Combat Sports or MMA Gym?
                  </h3>
                  <p className="text-soft-white leading-relaxed">
                    Churn patterns in combat sports facilities differ from traditional gyms. Fighter members
                    cycle through intense training camps followed by recovery periods, which standard churn
                    models misread as disengagement. GymWyse&apos;s{" "}
                    <Link
                      href="/mma-gym-software"
                      className="text-electric-green underline underline-offset-2 hover:brightness-110"
                    >
                      MMA gym software
                    </Link>{" "}
                    includes sport-specific behavioral models that account for fight camp seasonality,
                    belt progression milestones, and sparring partner network dynamics so your churn
                    predictions reflect reality, not a misread of normal training cycles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="py-20 md:py-28 bg-midnight">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-cool-gray">
                Common questions about AI churn prediction for gyms.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="text-base font-medium text-pure-white pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-electric-green" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 text-sm text-cool-gray leading-relaxed border-t border-glass-border pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
                Stop Guessing. Start Predicting.
              </h2>
              <p className="text-lg text-soft-white leading-relaxed mb-10 max-w-2xl mx-auto">
                Every month without AI churn prediction is another 18 members walking out the door undetected.
                GymWyse gives you the 30-day head start to keep them.
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
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
