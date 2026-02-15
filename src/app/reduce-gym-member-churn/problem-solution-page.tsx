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
  TrendingDown,
  Brain,
  Mail,
  Heart,
  Shield,
  Zap,
  Calendar,
  CreditCard,
  Dumbbell,
  Settings,
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
    icon: Brain,
    title: "AI-Powered Churn Risk Scoring",
    description:
      "GymWyse analyses 14 behavioural signals to assign every member a real-time churn risk score from 0 to 100. The algorithm evaluates visit frequency trends over rolling 30-, 60-, and 90-day windows, class booking patterns, payment history including failed and late payments, app engagement metrics, check-in time consistency, and length of membership tenure. When a member's score crosses a configurable threshold — typically set between 65 and 75 — the system flags them as at-risk and can trigger automated workflows or alert your staff. Unlike static spreadsheet analysis, GymWyse's scoring model learns from your gym's specific patterns. A CrossFit box where members train three times per week will have different baselines than a yoga studio with twice-weekly attendance. The AI adapts its thresholds to your facility's unique engagement profile, ensuring that risk scores are meaningful and actionable rather than generic.",
  },
  {
    icon: Mail,
    title: "Automated Re-Engagement Campaigns",
    description:
      "When a member is flagged as at-risk, GymWyse can automatically launch personalised re-engagement sequences designed to bring them back before they cancel. These campaigns are built using a drag-and-drop workflow builder that supports email, SMS, and in-app push notifications. A typical re-engagement sequence might start with a friendly check-in email on day one, followed by an SMS offering a complimentary personal training session on day three, a push notification highlighting a new class that matches their past booking history on day five, and a final email with a limited-time membership freeze option on day seven. Every touchpoint is personalised with the member's name, their preferred class types, their trainer's name if applicable, and their attendance history. Response tracking lets you see open rates, click-through rates, and — most importantly — whether the member returned to the gym within 14 days of the campaign starting.",
  },
  {
    icon: Heart,
    title: "Win-Back Sequences for Cancelled Members",
    description:
      "Not every at-risk member can be saved before they cancel, but that does not mean the relationship is over. GymWyse's win-back sequences target members who have already cancelled their membership, reaching out at strategically timed intervals — typically 30, 60, and 90 days post-cancellation. Win-back campaigns can include special re-join offers such as discounted first-month pricing, waived joining fees, or complimentary trial weeks. The system tracks which offers generate the highest re-join rates so you can optimise your win-back strategy over time. GymWyse gyms using automated win-back sequences recover an average of 8-12% of cancelled members within 90 days. For a gym with 500 members and 5% monthly churn, that translates to recovering 2-3 members per month — worth thousands in annual revenue that would otherwise be permanently lost.",
  },
  {
    icon: BarChart3,
    title: "Retention Analytics Dashboard",
    description:
      "Understanding why members leave is just as important as predicting who will leave. GymWyse's retention analytics dashboard provides a comprehensive view of your churn landscape. You can see monthly and annual churn rates broken down by membership type, join date cohort, age group, class attendance frequency, and payment method. The dashboard highlights churn correlations — for example, you might discover that members who attend fewer than two classes per week in their first 60 days have a 340% higher churn rate than those who attend three or more. Cancellation reason tracking captures why members leave, categorised into actionable buckets such as price sensitivity, facility dissatisfaction, relocation, and schedule conflicts. Trend analysis shows whether your retention efforts are improving over time, with month-over-month and year-over-year comparisons. Every metric can be exported to CSV or PDF for board reports and investor presentations.",
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
  { icon: TrendingDown, label: "Churn Prediction" },
];

const caseStudyResults = [
  { value: "2.1%", label: "Monthly churn (from 5.8%)" },
  { value: "23", label: "At-risk members saved in month 1" },
  { value: "11%", label: "Win-back rate on cancelled members" },
  { value: "$4,200/mo", label: "Revenue saved from retention" },
];

const comparisonRows = [
  {
    feature: "Churn Risk Detection",
    gymwyse: "AI-powered, 14-signal scoring",
    competitor: "Manual spreadsheet tracking",
  },
  {
    feature: "At-Risk Alerts",
    gymwyse: "Real-time, automated triggers",
    competitor: "Weekly manual review (if done)",
  },
  {
    feature: "Re-Engagement Campaigns",
    gymwyse: "Automated multi-channel workflows",
    competitor: "Manual email one-offs",
  },
  {
    feature: "Win-Back Sequences",
    gymwyse: "Timed post-cancellation automation",
    competitor: "No structured follow-up",
  },
  {
    feature: "Retention Analytics",
    gymwyse: "Real-time dashboard with cohort analysis",
    competitor: "Monthly spreadsheet reports",
  },
  {
    feature: "Cancellation Reason Tracking",
    gymwyse: "Categorised with trend analysis",
    competitor: "Unstructured notes (if captured)",
  },
  {
    feature: "Response Time to At-Risk Members",
    gymwyse: "Instant (automated)",
    competitor: "Days or weeks (manual process)",
  },
  {
    feature: "Cost of Retention Efforts",
    gymwyse: "Included in platform",
    competitor: "Staff hours + guesswork",
  },
];

const testimonials = [
  {
    quote:
      "We were losing 6% of our members every month and had no idea why. GymWyse's churn prediction flagged 31 at-risk members in the first two weeks. We saved 19 of them with automated re-engagement emails. Our monthly churn dropped to 2.4% within 90 days. We switched from a basic CRM and spreadsheets — the difference is night and day. The AI actually understands attendance patterns in a way that no manual tracking ever could.",
    name: "Rachel Simmons",
    role: "Owner, Peak Performance Gym",
    location: "Austin, TX",
  },
  {
    quote:
      "After two years on Mindbody, we moved to GymWyse specifically for the churn prediction feature. Mindbody had no way to identify at-risk members — we were always reacting after cancellations happened instead of preventing them. GymWyse's win-back sequences recovered 9 cancelled members in the first quarter alone. That is over $14,000 in annual revenue we would have lost permanently.",
    name: "David Okafor",
    role: "Director, Iron District Fitness",
    location: "Atlanta, GA",
  },
  {
    quote:
      "The retention analytics dashboard changed how I think about my business. I discovered that members who only did open gym without attending any classes had a 4x higher churn rate. We started offering free class trials to open-gym-only members and our 90-day retention rate jumped from 71% to 86%. GymWyse gave us the data to make smart decisions instead of guessing.",
    name: "Tanya Marchetti",
    role: "Co-owner, Elevate Studio",
    location: "Denver, CO",
  },
];

const faqItems = [
  {
    question: "How does GymWyse predict which members are at risk of churning?",
    answer:
      "GymWyse uses a machine learning model that analyses 14 behavioural signals for every active member. These include visit frequency trends over 30-, 60-, and 90-day rolling windows, class booking and cancellation patterns, payment history including failed and late payments, app engagement metrics such as login frequency and feature usage, check-in time consistency, and membership tenure. The model assigns a churn risk score from 0 to 100, updated daily. Members crossing your configured threshold are flagged as at-risk, triggering automated workflows or staff alerts. The model learns from your gym's specific data, so its predictions improve over time as it understands your facility's unique engagement patterns.",
  },
  {
    question: "Can I customise the re-engagement campaigns?",
    answer:
      "Yes, completely. GymWyse includes a drag-and-drop workflow builder that lets you design multi-step re-engagement sequences using email, SMS, and in-app push notifications. You control the timing, messaging, and offers at every step. Templates are provided for common scenarios — low attendance, missed classes, failed payments, and post-cancellation win-back — but you can modify every element or build campaigns from scratch. Personalisation tokens automatically insert member-specific data like their name, favourite class, and last visit date.",
  },
  {
    question: "What is the typical churn reduction gyms see with GymWyse?",
    answer:
      "On average, gyms using GymWyse's full churn prevention suite — AI risk scoring, automated re-engagement, and win-back sequences — reduce their monthly churn rate by 30-45% within the first 90 days. For a gym with 500 members and 5% monthly churn, that translates to retaining 7-11 additional members per month, worth approximately $3,500-$7,500 in monthly recurring revenue depending on your average membership price. Results vary based on your starting churn rate, the quality of your re-engagement offers, and how quickly your team responds to at-risk alerts.",
  },
  {
    question: "Does GymWyse integrate with my existing email marketing tools?",
    answer:
      "GymWyse has a built-in email and SMS campaign engine specifically designed for gym retention workflows. However, if you prefer to use an external platform, GymWyse integrates with Mailchimp, ActiveCampaign, and other major providers via Zapier. You can push at-risk member segments to your external tools and trigger campaigns there. Most gyms find that GymWyse's built-in tools are more effective because they are purpose-built for fitness retention scenarios and include pre-built templates for common gym situations.",
  },
  {
    question: "How quickly can I see results after enabling churn prediction?",
    answer:
      "The AI model begins scoring members immediately upon activation using your historical data. Within the first week, you will see your first batch of at-risk member alerts. Automated re-engagement campaigns can be launched within hours of setup using pre-built templates. Most gyms see measurable churn reduction within 30-60 days of activating the full suite. The model's accuracy improves over the first 90 days as it learns from your gym's specific engagement and cancellation patterns.",
  },
  {
    question: "Is churn prediction included in all GymWyse plans?",
    answer:
      "AI churn prediction with risk scoring is included in the Growth plan and above. The Starter plan includes basic retention reporting and manual member flagging. The Growth plan adds the full AI-powered churn prediction engine, automated re-engagement workflows, win-back sequences, and the retention analytics dashboard. For gyms serious about reducing member churn, the Growth plan provides the complete toolkit. Visit our pricing page for a full plan comparison and to start your 14-day free trial.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function ProblemSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
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
              Retention & Churn Prevention
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              How to Reduce Gym Member Churn with AI-Powered Software
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Member churn is the single biggest threat to gym profitability.
              GymWyse gym management software uses artificial intelligence to
              predict which members are about to cancel, automatically engage
              them with personalised retention campaigns, and recover cancelled
              members with timed win-back sequences. Stop reacting to
              cancellations and start preventing them.
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
              The Hidden Cost of Gym Member Churn
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              The average gym loses between 30% and 50% of its members every
              year. For a facility with 500 members paying $60 per month, a 40%
              annual churn rate means losing 200 members — $144,000 in annual
              recurring revenue walking out the door. Acquiring a new member
              costs 5-7 times more than retaining an existing one, yet most gyms
              spend far more on acquisition than retention.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: TrendingDown,
                title: "Invisible Disengagement",
                description:
                  "Members do not cancel overnight. They gradually disengage over weeks — attending fewer classes, skipping check-ins, ignoring app notifications. By the time they submit a cancellation request, they mentally left your gym 30-60 days ago. Without AI-powered monitoring, these early warning signs go completely undetected until it is too late to intervene.",
              },
              {
                icon: AlertTriangle,
                title: "Reactive Instead of Proactive",
                description:
                  "Most gyms only discover a member is unhappy when they receive the cancellation email or phone call. At that point, the member has already made their decision and is far harder to retain. Manual tracking through spreadsheets and gut instinct cannot scale. A front-desk manager overseeing 400+ members cannot possibly monitor individual engagement patterns across every touchpoint.",
              },
              {
                icon: Shield,
                title: "No Structured Win-Back Process",
                description:
                  "When a member cancels, most gyms do nothing. No follow-up email. No re-join offer at the 30-day mark. No check-in at 90 days. Every cancelled member who might have returned with a well-timed offer is permanently lost revenue. Industry data shows that 8-15% of cancelled gym members would re-join within 90 days if approached with the right offer at the right time.",
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
              How GymWyse Solves Gym Member Churn
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse replaces guesswork with data-driven retention. Our AI
              churn prediction engine continuously monitors every member across
              14 behavioural signals, automatically flags those at risk, and
              launches personalised re-engagement campaigns before they even
              think about cancelling. For members who do cancel, timed win-back
              sequences reach out at the optimal moments to bring them back.
              The result is a measurable, repeatable retention system that
              reduces churn by 30-45% within 90 days — without adding workload
              to your staff. Every intervention is automated, every result is
              tracked, and every dollar saved is visible in your retention
              dashboard. Read our comprehensive{" "}
              <Link
                href="/resources/churn-prevention-guide"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                churn prevention guide
              </Link>{" "}
              for detailed strategies and benchmarks.
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
              Churn Prevention Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four integrated tools that work together to identify, engage,
              and retain at-risk members automatically.
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
              Churn prediction is just one part of the GymWyse platform.
              Beyond retention tools, GymWyse covers every aspect of running a
              gym — membership management with flexible tiers and freeze
              options, QR-code check-ins via the member app, class scheduling
              with waitlists and automatic notifications, billing and invoicing
              with support for recurring payments and failed payment recovery,
              personal training booking with session packages, staff management
              with role-based permissions and commission tracking, and revenue
              analytics with real-time dashboards. Everything works together in
              one unified platform so your retention data is connected to your
              billing, scheduling, and engagement data — giving the AI the
              complete picture it needs to make accurate churn predictions.
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
                Summit Strength, Portland, OR
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                Single location — 620 members — Functional fitness &
                strength training
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Summit Strength was experiencing 5.8% monthly churn — well
                    above the industry average. The owner, Jake Torres, relied
                    on a spreadsheet to manually track member attendance and
                    flag disengaged members. By the time he identified someone
                    as at-risk, they had usually already submitted a
                    cancellation. The gym had no win-back process — once a
                    member cancelled, there was no structured follow-up.
                    Acquisition costs were climbing as more marketing spend was
                    needed to replace churned members, and net membership
                    growth had stalled despite strong new-member sign-ups.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Summit Strength migrated to GymWyse and activated the full
                    churn prevention suite. Within the first week, the AI
                    flagged 38 at-risk members based on declining attendance
                    patterns and missed class bookings. Automated
                    re-engagement campaigns launched immediately — personalised
                    emails and SMS messages with offers for free PT sessions
                    and class recommendations. Jake also set up a 30/60/90-day
                    win-back sequence for cancelled members with escalating
                    re-join incentives. Within 90 days, monthly churn dropped
                    from 5.8% to 2.1%, the gym recovered 7 cancelled members
                    through win-back campaigns, and net membership began
                    growing for the first time in eight months.
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
              GymWyse vs Manual Churn Tracking
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See why AI-powered churn prediction outperforms spreadsheets
              and manual monitoring at every stage of the retention lifecycle.
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
                        Manual Tracking
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
              Everything you need to know about reducing gym member churn
              with GymWyse.
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
              Stop Losing Members. Start Predicting Churn.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Every month you operate without churn prediction, you are losing
              members you could have saved. GymWyse gives you AI-powered risk
              scoring, automated re-engagement campaigns, and win-back
              sequences that work around the clock — no extra staff, no
              manual tracking. Start your 14-day free trial today and see
              which members are at risk right now. Or book a personalised
              demo to see how GymWyse can reduce churn at your specific
              facility.
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
