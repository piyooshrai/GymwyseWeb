"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  User,
  Calendar,
  CreditCard,
  Dumbbell,
  Smartphone,
  TrendingUp,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroMetrics = [
  { value: "2,400+", label: "Independent PTs on GymWyse" },
  { value: "35", label: "Average clients per trainer" },
  { value: "$49/mo", label: "Starting price, all features" },
  { value: "0", label: "Gym or facility required" },
];

const features = [
  {
    icon: User,
    title: "Client Management",
    description:
      "Every client relationship starts with knowing who you are training and what they need. GymWyse gives you a centralized client database that stores far more than a name and phone number. Each client profile holds contact information, fitness goals, progress photos with side-by-side comparisons over time, body measurements recorded at every check-in, detailed injury and health notes that flag contraindications during program design, complete training history across every session you have delivered, and session-by-session notes so you never forget what you covered last Tuesday. Your clients also get their own portal where they can view their current program, track their own progress between sessions, and book upcoming sessions directly without texting you back and forth. This is how serious trainers manage relationships at scale without letting anyone fall through the cracks.",
    bullets: [
      "Centralized contact info, goals, and preferences for every client",
      "Progress photos with side-by-side visual comparisons over time",
      "Body measurements tracked at every check-in with trend charts",
      "Injury history and health notes that flag exercise contraindications",
      "Complete training history and session-by-session notes",
      "Client portal for viewing programs, tracking progress, and booking sessions",
    ],
  },
  {
    icon: Calendar,
    title: "Session Scheduling",
    description:
      "Your calendar is your business. GymWyse session scheduling handles the complexity of an independent trainer who might run a one-on-one at a home studio at 6am, a small group of three in the park at 7:30am, and another private client at a commercial gym at 9am. Book one-on-one sessions and small group sessions for two to four clients with separate pricing. Set up recurring sessions so your regulars are automatically locked in every Tuesday and Thursday at 7am without rebooking each week. Clients can self-book available slots through the app so you stop fielding scheduling texts at 10pm. Sync everything to Google Calendar and Apple Calendar so your personal and professional schedules never collide. Configure buffer time between sessions for travel, setup, or rest, and set specific travel time allowances for mobile trainers who drive between client locations. Enforce cancellation policies automatically with configurable notice periods such as a 24-hour cancellation window that charges a late-cancel fee if violated.",
    bullets: [
      "1-on-1 and small group (2-4 clients) session booking",
      "Recurring sessions locked in weekly without manual rebooking",
      "Client self-booking through the app with real-time availability",
      "Google Calendar and Apple Calendar sync for conflict-free scheduling",
      "Buffer time and travel time settings for mobile trainers",
      "Automated cancellation policy enforcement with 24-hour notice rules",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Getting paid should not be the hardest part of personal training. GymWyse supports every payment model independent trainers use. Charge per session for casual clients. Sell session packages like a 10-pack or 20-pack at a discount to incentivize commitment and improve cash flow predictability. Set up monthly retainers for clients who want ongoing access to programming and a fixed number of sessions per month. Automatic invoicing fires after each completed session so you never have to chase a payment or remember who owes what. When a card declines, the failed payment recovery system retries at optimal intervals and sends the client a self-service link to update their payment method. For small group sessions, split payments divide the cost evenly or by custom ratios among participants. Everything integrates with Stripe and Square for secure processing, and professional receipts are generated automatically for every transaction.",
    bullets: [
      "Per-session, session package (10-pack, 20-pack), and monthly retainer billing",
      "Automatic invoicing after every completed session",
      "Failed payment recovery with smart retry and self-service card updates",
      "Split payments for small group sessions with custom ratios",
      "Stripe and Square integration for secure payment processing",
      "Professional receipt generation for every transaction",
    ],
  },
  {
    icon: Dumbbell,
    title: "Workout Plan Builder",
    description:
      "Programming is where you deliver value, and GymWyse gives you tools that match your expertise. Access an exercise library with over 500 exercises, each with HD video demonstrations your clients can reference during or between sessions. Build custom programs using a drag-and-drop interface that lets you structure workouts by day, week, and training block. Track progressive overload automatically so you can see exactly when a client last increased weight, reps, or volume on any given exercise. Use periodization templates for structured programming across mesocycles whether you follow linear progression, undulating periodization, or block periodization models. Generate print-friendly workout cards for clients who prefer a physical sheet during their session. Every program you build is delivered directly to the client through the app, where they can follow along and log sets, reps, and weight for every exercise in every session, giving you complete visibility into their training even when you are not standing next to them.",
    bullets: [
      "500+ exercise library with HD video demonstrations",
      "Drag-and-drop custom program creation by day, week, and block",
      "Automatic progressive overload tracking across all exercises",
      "Periodization templates for linear, undulating, and block models",
      "Print-friendly workout cards for in-session reference",
      "Clients log sets, reps, and weight in-app for full training visibility",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App for Clients",
    description:
      "Your clients live on their phones, and the GymWyse client app puts your entire service in their pocket. Clients can view all upcoming sessions with date, time, and location details. They access their current workout program and follow along during sessions, logging every set with weight, reps, and RPE. The progress tracking module lets clients record bodyweight, body measurements, and progress photos on their own schedule so you get continuous data between sessions, not just what you measure during check-ins. Built-in messaging keeps all trainer-client communication in one place instead of scattered across text threads, WhatsApp, and email. Clients can book new sessions, reschedule existing ones within your policy rules, and view invoices and make payments directly in the app. Critically for independent trainers who work outdoors, the app works offline for park and outdoor sessions, syncing data automatically when connectivity returns, so a session in the park never means lost tracking data.",
    bullets: [
      "View upcoming sessions with date, time, and location details",
      "Follow workout programs and log sets, reps, weight, and RPE",
      "Track bodyweight, measurements, and progress photos independently",
      "In-app messaging for centralized trainer-client communication",
      "Book, reschedule, view invoices, and make payments in one place",
      "Full offline mode for park and outdoor sessions with auto-sync",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Growth Tools",
    description:
      "Growing from a side hustle to a full-time training business requires more than just being a good trainer. GymWyse gives you the business intelligence that most independent PTs never have access to. Track client referrals to see which of your existing clients are sending new business your way and reward them accordingly. Retention analytics show you which clients are at risk of dropping off based on booking frequency, session attendance, and engagement patterns. Revenue per client reporting reveals your most and least profitable relationships so you can make informed decisions about pricing and packaging. Session utilization rate tells you how much of your available schedule is actually booked, helping you identify dead time and optimize your weekly structure. Package expiry notifications alert both you and the client when a session pack is running low, prompting timely renewals. Client reactivation campaigns help you reach out to former clients who have gone quiet with personalized re-engagement messages.",
    bullets: [
      "Client referral tracking with reward and attribution reporting",
      "Retention analytics with at-risk client identification",
      "Revenue per client and per session profitability analysis",
      "Session utilization rate to identify and eliminate dead time",
      "Package expiry notifications for timely renewals",
      "Client reactivation campaigns for former clients",
    ],
  },
];

const caseStudyResults = [
  { value: "12 to 35", label: "Client growth in 8 months" },
  { value: "3x", label: "Monthly revenue increase" },
  { value: "92%", label: "Client retention rate" },
  { value: "8 hrs/wk", label: "Admin time saved" },
];

const testimonials = [
  {
    quote:
      "I converted my garage into a home studio and train 28 clients a week. Before GymWyse I was using Google Sheets for programming, Venmo for payments, and iCal for scheduling. It was a mess. Now everything is in one place and my clients think I hired an assistant.",
    author: "Mike Torrance",
    role: "Home Studio PT, Portland",
    initials: "MT",
  },
  {
    quote:
      "I am a fully mobile trainer — I drive to clients houses, parks, and apartment gyms. The travel time buffer feature alone saves me from double-booking. My clients book themselves through the app and I just show up and train. Revenue is up 40% since switching.",
    author: "Rachel Simmons",
    role: "Mobile Personal Trainer, Austin",
    initials: "RS",
  },
  {
    quote:
      "I run outdoor bootcamps in Prospect Park with groups of 3-4 and private sessions on the side. The offline mode is a game changer because cell service is terrible in parts of the park. Split payments for group sessions used to be a nightmare and now it just works.",
    author: "Darnell Washington",
    role: "Park Trainer & Bootcamp Coach, Brooklyn",
    initials: "DW",
  },
];

const comparisonRows = [
  { feature: "Monthly Price (Solo)", gymwyse: "$49/mo", competitor: "$19-99/mo" },
  { feature: "Client Portal & App", gymwyse: "Included", competitor: "+$20/mo add-on" },
  { feature: "Payment Processing", gymwyse: "Included (Stripe/Square)", competitor: "Limited or manual" },
  { feature: "Session Scheduling", gymwyse: "Full scheduling + self-booking", competitor: "Basic calendar only" },
  { feature: "Offline Mode", gymwyse: "Full offline support", competitor: "Not available" },
  { feature: "Group Session Billing", gymwyse: "Split payments included", competitor: "Not available" },
  { feature: "Workout Plan Builder", gymwyse: "500+ exercises, video demos", competitor: "Exercise library varies" },
  { feature: "Business Analytics", gymwyse: "Revenue, retention, utilization", competitor: "Basic reporting" },
  { feature: "Contract Required", gymwyse: "No contract, cancel anytime", competitor: "Annual contract" },
];

const faqItems = [
  {
    question: "Do I need a gym or physical facility to use GymWyse?",
    answer:
      "No. GymWyse is designed specifically for independent personal trainers who operate without a traditional gym. Whether you train clients in their homes, at parks, in apartment complex gyms, at your garage studio, or any combination of locations, the platform works for you. There is no facility setup required, no access control hardware, and no front-desk module cluttering your interface. You just need clients.",
  },
  {
    question: "How many clients can I manage on GymWyse?",
    answer:
      "The Solo plan at $49/month supports up to 50 active clients, which covers the vast majority of independent trainers. If you grow beyond 50 clients or start running regular group sessions, the Professional plan at $99/month gives you unlimited clients plus advanced group session management. There are no per-client fees on either plan.",
  },
  {
    question: "Can my clients book sessions themselves?",
    answer:
      "Yes. You set your available hours and session types, and clients can book, reschedule, or cancel directly through the mobile app. You control the rules — minimum booking notice, cancellation windows, buffer time between sessions, and whether specific time slots require manual approval. Most trainers find that client self-booking eliminates 80% of their scheduling-related messages.",
  },
  {
    question: "Does GymWyse work for outdoor and park training sessions?",
    answer:
      "Yes, and this is a major differentiator. The client app has full offline functionality, so workout logging, program viewing, and session tracking all work without cell service. Data syncs automatically when connectivity returns. This was built specifically because so many independent trainers work in parks, beaches, and outdoor spaces where reliable internet is not guaranteed.",
  },
  {
    question: "What payment methods does GymWyse support?",
    answer:
      "GymWyse integrates with Stripe and Square for payment processing. Your clients can pay via credit card, debit card, or ACH bank transfer. You can set up per-session charges, session packages with volume discounts, or monthly retainers. All invoicing is automatic and receipts are generated for every transaction. Failed payments are retried automatically with smart timing logic.",
  },
  {
    question: "Can I upgrade if I eventually open my own gym or studio?",
    answer:
      "Absolutely. GymWyse scales with your business. If you grow from independent training into opening a physical studio or gym, you can upgrade to our full facility management plan which adds access control, class scheduling for larger groups, front-desk check-in, and multi-staff management. All your existing client data, training history, and payment records carry over seamlessly. Many of our gym owners started as independent trainers on the Solo plan.",
  },
];

export function PersonalTrainersPage() {
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
      {/* Hero Section */}
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
              Software for Independent Personal Trainers
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Gym Management Software for Independent Personal Trainers
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              You don&apos;t need a gym to use GymWyse. You just need clients.
              Whether you train people in their living rooms, at the park, in a
              garage studio, or across multiple locations as a mobile trainer,
              GymWyse gives you a complete platform to manage clients, schedule
              sessions, process payments, and deliver professional workout
              programs — all from your phone.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="secondary">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-6 text-center"
              >
                <div className="text-3xl font-mono font-bold text-electric-green">
                  {metric.value}
                </div>
                <p className="mt-2 text-sm text-cool-gray">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Sections */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className={isEven ? "bg-midnight py-24" : "bg-deep-space py-24"}
          >
            <div className="mx-auto max-w-7xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl border border-glass-border p-8 md:p-12"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h2 className="text-2xl font-bold text-pure-white md:text-3xl">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-cool-gray">
                  {feature.description}
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-3 text-sm text-soft-white"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-green" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Case Study Section */}
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
                <TrendingUp className="h-5 w-5 text-electric-green" />
                <span className="text-sm font-medium tracking-wider uppercase text-electric-green">
                  Case Study
                </span>
              </div>
              <h2 className="text-2xl font-bold text-pure-white md:text-3xl">
                From Spreadsheets to 35 Clients in 8 Months
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                Jake Moreno, Independent PT, San Diego — Home studio + mobile training
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-alert-red">
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Jake had been training clients independently for two years,
                    managing everything through a patchwork of Google Sheets for
                    programming, Venmo and Zelle for payments, Google Calendar for
                    scheduling, and text messages for all client communication. At
                    12 clients it was manageable but chaotic. He was spending
                    roughly 10 hours per week on admin tasks alone — building
                    spreadsheet programs, chasing payments, confirming
                    appointments, and updating notes after sessions. He knew he
                    could not grow beyond 15 clients without either hiring help or
                    finding a better system. Worse, he had no visibility into
                    which clients were actually profitable after accounting for
                    travel time and session prep.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Jake switched to GymWyse on the Solo plan at $49/month.
                    Within the first week he had migrated all 12 client profiles,
                    built out their training programs in the workout builder, and
                    set up automated recurring session scheduling and payment
                    processing through Stripe. His clients downloaded the app and
                    started self-booking sessions, logging their own workouts, and
                    paying invoices without any manual follow-up. Over the
                    following eight months, Jake scaled from 12 to 35 active
                    clients. The admin time he saved — roughly 8 hours per week —
                    was redirected into actually training clients. His revenue
                    tripled, his client retention rate sits at 92%, and he has a
                    waitlist for new clients for the first time in his career.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="text-xl font-mono font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-glass-border bg-deep-space/30 p-6">
                <Quote className="mb-3 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;I went from drowning in spreadsheets to running a real
                  business. My clients get a professional experience now — they
                  have an app, they book themselves, they pay automatically. I
                  just focus on training. GymWyse gave me my time back and
                  tripled my income in eight months.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10 text-electric-green font-bold text-sm">
                    JM
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      Jake Moreno
                    </p>
                    <p className="text-xs text-dim-gray">
                      Independent PT, San Diego
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-deep-space py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Independent Trainers Say
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10 text-electric-green font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-dim-gray">{t.role}</p>
                  </div>
                </div>
                <div className="border-l-2 border-electric-green/30 pl-4">
                  <p className="text-sm text-soft-white italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing for PTs Section */}
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
              Simple Pricing for Personal Trainers
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              No setup fees. No contracts. No per-client charges. Choose the
              plan that fits your business today and upgrade as you grow.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl border border-glass-border p-8 text-center"
            >
              <h3 className="text-lg font-semibold text-pure-white">Solo</h3>
              <div className="mt-4 text-5xl font-mono font-bold text-electric-green">
                $49<span className="text-lg text-cool-gray">/mo</span>
              </div>
              <p className="mt-3 text-sm text-cool-gray">
                Up to 50 clients. Full scheduling, payments, workout builder,
                and client app. Everything you need as an independent trainer.
              </p>
              <Link href="/demo" className="mt-6 block">
                <Button size="lg" variant="primary" className="w-full">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl border border-electric-green/30 bg-electric-green/[0.03] p-8 text-center"
            >
              <h3 className="text-lg font-semibold text-pure-white">
                Professional
              </h3>
              <div className="mt-4 text-5xl font-mono font-bold text-electric-green">
                $99<span className="text-lg text-cool-gray">/mo</span>
              </div>
              <p className="mt-3 text-sm text-cool-gray">
                Unlimited clients. Advanced group session management, business
                analytics, referral tracking, and client reactivation campaigns.
              </p>
              <Link href="/demo" className="mt-6 block">
                <Button size="lg" variant="primary" className="w-full">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <p className="mt-8 text-center text-sm text-dim-gray">
            Both plans include a 14-day free trial &bull; No credit card
            required &bull;{" "}
            <Link
              href="/pricing"
              className="text-electric-green hover:underline"
            >
              See full pricing details
            </Link>
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
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
              GymWyse vs TrueCoach &amp; TrainerPro
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Most PT software gives you a workout builder and calls it a day.
              GymWyse is a complete business platform for independent trainers
              who need scheduling, payments, client management, and analytics
              in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              <div className="grid grid-cols-3 border-b border-glass-border bg-deep-space/50 px-6 py-4">
                <div className="text-sm font-semibold text-dim-gray">
                  Feature
                </div>
                <div className="text-center text-sm font-semibold text-electric-green">
                  GymWyse
                </div>
                <div className="text-center text-sm font-semibold text-dim-gray">
                  TrueCoach / TrainerPro
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 items-center px-6 py-4 ${
                    i < comparisonRows.length - 1
                      ? "border-b border-glass-border"
                      : ""
                  }`}
                >
                  <div className="text-sm font-medium text-soft-white">
                    {row.feature}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-electric-green" />
                    <span className="text-electric-green">{row.gymwyse}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    {row.competitor.includes("Not available") ? (
                      <X className="h-4 w-4 flex-shrink-0 text-alert-red" />
                    ) : null}
                    <span className="text-cool-gray">{row.competitor}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Common questions from independent personal trainers considering
              GymWyse.
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
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <span className="pr-4 text-sm font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-electric-green" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
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

      {/* Final CTA Section */}
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
              You Built Your Training Business From Nothing. Now Give It the
              Software It Deserves.
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Stop stitching together spreadsheets, payment apps, and calendar
              tools. GymWyse gives independent personal trainers a single
              platform for clients, scheduling, payments, programming, and
              growth — starting at $49/month with no contracts and no setup
              fees. Your clients get a professional app experience. You get
              your time back.
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <div className="glass-card rounded-2xl border border-electric-green/20 bg-electric-green/[0.03] p-8 text-center">
                <div className="text-5xl font-mono font-bold text-electric-green">
                  $49/mo
                </div>
                <p className="mt-3 text-sm text-cool-gray">
                  Everything you need. Up to 50 clients. No contracts.
                </p>
                <Link href="/demo" className="mt-6 block">
                  <Button size="xl" variant="primary" className="w-full">
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-xs text-dim-gray">
                  No credit card required &bull; Full access &bull; Cancel
                  anytime
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-dim-gray">
              <Link
                href="/personal-training-software"
                className="hover:text-electric-green transition-colors"
              >
                Personal Training Software
              </Link>
              <Link
                href="/platform/member-app"
                className="hover:text-electric-green transition-colors"
              >
                Client App
              </Link>
              <Link
                href="/pricing"
                className="hover:text-electric-green transition-colors"
              >
                Full Pricing
              </Link>
              <Link
                href="/demo"
                className="hover:text-electric-green transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
