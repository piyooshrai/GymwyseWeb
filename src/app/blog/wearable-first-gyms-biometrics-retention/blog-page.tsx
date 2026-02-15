"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Watch,
  Activity,
  Heart,
  ChevronDown,
  ArrowRight,
  BarChart3,
  Shield,
  Trophy,
  Zap,
  Users,
  TrendingUp,
  DollarSign,
  Globe,
  Quote,
  Smartphone,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const comparisonRows = [
  {
    category: "Data Tracking",
    legacy: "Paper logs and manual spreadsheets updated by front-desk staff after each class",
    gymwyse: "Real-time biometric sync from Apple Watch, WHOOP, Garmin, and Fitbit into a unified member profile",
  },
  {
    category: "Heart Rate Zones",
    legacy: "Generic heart rate posters on the wall with no individual tracking or zone analysis",
    gymwyse: "Live heart rate zone tracking during every class with per-member intensity profiles and historical trends",
  },
  {
    category: "Recovery Recommendations",
    legacy: "Trainers guess based on how the member looks or what they say about sleep quality",
    gymwyse: "AI-driven recovery scoring using HRV, sleep stages, and WHOOP/Garmin readiness data with auto-adjusted workout intensity",
  },
  {
    category: "Member Insights",
    legacy: "Anecdotal feedback from trainers who remember regulars but miss at-risk members",
    gymwyse: "Behavioral analytics combining wearable biometrics with visit patterns, class preferences, and engagement scores",
  },
  {
    category: "Progress Tracking",
    legacy: "Before-and-after photos and periodic weigh-ins with no longitudinal data visualization",
    gymwyse: "Continuous progress dashboards showing VO2 max trends, resting heart rate improvement, body composition, and workout volume over time",
  },
  {
    category: "Engagement Scoring",
    legacy: "Monthly check-in count is the only metric — no insight into quality or intensity of sessions",
    gymwyse: "Composite engagement score blending visit frequency, wearable activity data, class intensity, app usage, and social participation",
  },
];

const faqItems = [
  {
    question: "Which wearable devices does GymWyse integrate with?",
    answer:
      "GymWyse integrates natively with Apple Watch (via Apple HealthKit), WHOOP, Garmin Connect, Fitbit, and Samsung Health (via Google Health Connect). Members connect their devices through the GymWyse member app in under 60 seconds. Once connected, data syncs automatically after every workout and each morning for sleep and recovery metrics. We add new device support based on member demand, and our open API allows custom integrations for lesser-known wearables.",
  },
  {
    question: "How does wearable data actually reduce member churn?",
    answer:
      "Wearable data creates a continuous feedback loop that keeps members engaged between gym visits. When members see their heart rate trends improving, their recovery scores climbing, and their VO2 max increasing over months, they develop a tangible sense of progress that goes beyond the mirror. GymWyse also uses wearable data to flag disengagement early — if a connected member's weekly activity drops or their wearable goes dormant, the AI triggers a re-engagement sequence before the member mentally checks out. Our data shows wearable-connected members churn at 23% lower rates than non-connected members.",
  },
  {
    question: "Is biometric data safe and compliant with privacy regulations?",
    answer:
      "Absolutely. GymWyse treats biometric data as the most sensitive category in our system. All wearable data is encrypted at rest (AES-256) and in transit (TLS 1.3). In the United States, we follow HIPAA-aligned safeguards for health-related data. In the UK and EU, biometric data is classified as special category data under GDPR Article 9, and we obtain explicit consent before processing. In Australia, we comply with the Privacy Act 1988 and Australian Privacy Principles for health information. In the UAE, we adhere to the Dubai Health Authority data regulations. Members control their data and can disconnect their device or delete their biometric history at any time from the app.",
  },
  {
    question: "What if only some of my members use wearables?",
    answer:
      "That is completely normal and expected. Most gyms see 30-50% wearable adoption in the first six months, growing to 60-70% within a year as members see peers benefiting from connected features like leaderboards and progress dashboards. GymWyse works fully without wearable data — visit tracking, class booking, billing, and AI churn prediction all function independently. Wearable integration is an additive layer that enriches the member profile. You can also run wearable adoption campaigns through GymWyse to boost connection rates, including in-app prompts and challenges that reward device pairing.",
  },
  {
    question: "How long does it take to set up wearable integration?",
    answer:
      "The gym-side setup takes less than five minutes. You enable wearable integration in your GymWyse dashboard settings, choose which device ecosystems to support, and configure which data points you want to display in member profiles. From there, each member connects their own device through the GymWyse app — a process that takes about 60 seconds. There is no hardware to install, no middleware to configure, and no API keys to manage. Historical data from the member's wearable is backfilled automatically for up to 90 days, so they see their progress immediately.",
  },
  {
    question: "Can trainers access member biometric data for programming?",
    answer:
      "Yes, with member consent. When a member opts into trainer visibility, their assigned trainer sees a dedicated biometrics panel showing recent workouts, heart rate trends, recovery scores, sleep quality, and training load. Trainers use this data to personalize programming — for example, prescribing a deload week when HRV trends indicate accumulated fatigue, or increasing intensity when recovery scores have been consistently high. This data-driven approach replaces guesswork and builds member trust in their trainer's expertise.",
  },
];

const howToSteps = [
  {
    name: "Enable Wearable Integration",
    text: "Activate wearable sync in your GymWyse dashboard under Settings > Integrations > Wearable Devices. Choose which device ecosystems to support.",
  },
  {
    name: "Invite Members to Connect",
    text: "Launch an in-app connection campaign prompting members to pair their Apple Watch, WHOOP, Garmin, or Fitbit through the GymWyse member app.",
  },
  {
    name: "Configure Biometric Dashboard",
    text: "Customize which data points appear on member profiles and trainer views: heart rate zones, recovery scores, sleep data, VO2 max trends, and activity summaries.",
  },
  {
    name: "Activate Retention Triggers",
    text: "Set up automated re-engagement rules based on wearable signals: dormant device alerts, declining activity trends, and recovery-based workout recommendations.",
  },
  {
    name: "Monitor the Bio-Metric Integration Layer",
    text: "Use the Bio-Metric Integration Layer dashboard to track wearable adoption rates, biometric engagement scores, and the retention delta between connected and non-connected members.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export function WearableFirstGymsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── JSON-LD: FAQ Schema ── */}
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

      {/* ── JSON-LD: HowTo Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Set Up Wearable-First Gym Management with GymWyse",
            description:
              "A step-by-step guide to integrating Apple Watch, WHOOP, Garmin, and Fitbit data into your gym management platform for measurable retention gains.",
            step: howToSteps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.name,
              text: step.text,
            })),
          }),
        }}
      />

      {/* ── Hero Section ── */}
      <section className="bg-deep-space py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-electric-green">
                Wearable Integration
              </span>
              <span className="inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-cool-gray">
                December 14, 2025
              </span>
              <span className="inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-cool-gray">
                12 min read
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Wearable-First Gyms: Syncing Biometrics with Member Retention
            </h1>

            {/* ── Direct Answer (50-70 words) ── */}
            <p className="mt-8 text-lg leading-relaxed text-soft-white md:text-xl">
              Wearable integration improves gym retention by turning raw
              biometric data — heart rate zones, recovery scores, sleep quality,
              and VO2 max — into a continuous feedback loop that keeps members
              engaged between visits. When members see objective proof that their
              fitness is improving week over week, they stay longer. Gyms using
              wearable-connected platforms report 23% lower churn rates and
              measurably higher visit frequency.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/integrations/wearables">
                <Button size="lg" variant="secondary">
                  <Watch className="mr-2 h-4 w-4" />
                  Explore Wearable Integrations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Retention Problem ── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              The Retention Gap Most Gyms Don&apos;t See
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Here is the uncomfortable truth about gym retention: most members
                who cancel were already gone weeks before they submitted the
                form. Their visit frequency dropped. Their class bookings
                thinned. Their engagement with the app faded. But unless someone
                was manually watching every single member&apos;s behavior pattern
                — and nobody is — those signals slipped through the cracks.
              </p>
              <p>
                The fitness industry averages 30-50% annual member churn. For a
                gym with 500 members paying $95 per month, that means $142,500
                to $237,500 in annual revenue simply walking out the door. And
                the replacement cost is steep. Acquiring a new member costs 5-7x
                more than retaining one who is already paying you.
              </p>
              <p>
                Traditional gym management platforms track check-ins and
                payments. That is it. They tell you who showed up and who paid,
                but they cannot tell you who is gradually disengaging, who is
                training with declining intensity, or who stopped recovering
                properly and is one bad week away from quitting. Wearable data
                fills that gap. When your platform knows that a member&apos;s
                weekly activity dropped 40%, that their recovery scores have been
                declining for two weeks, or that their resting heart rate spiked
                — that is actionable intelligence you can use before the
                cancellation ever happens.
              </p>
            </div>
          </motion.div>

          {/* Key Stats */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { value: "30-50%", label: "Annual churn rate in the fitness industry" },
              { value: "5-7x", label: "Cost of acquiring vs retaining a member" },
              { value: "23%", label: "Lower churn for wearable-connected members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 text-center"
              >
                <div className="text-3xl font-mono font-bold text-electric-green md:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-cool-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How the Command Center Solves This ── */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              How the Command Center Solves This
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              At the core of GymWyse&apos;s wearable strategy is the{" "}
              <span className="font-semibold text-electric-green">
                Bio-Metric Integration Layer
              </span>{" "}
              — a dedicated dashboard metric that aggregates wearable data from
              every connected member and translates it into retention-relevant
              signals your team can act on. Think of it as the bridge between
              raw biometric streams and business outcomes.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Heart Rate Zone Analysis",
                description:
                  "Every class session is mapped against each member's personalized heart rate zones. The Bio-Metric Integration Layer shows trainers and owners which members are consistently training in optimal zones and which are under or overtraining. This data drives smarter class programming and individual coaching adjustments.",
              },
              {
                icon: Activity,
                title: "Recovery Score Aggregation",
                description:
                  "WHOOP recovery scores, Garmin Body Battery readings, and HRV-derived readiness scores are normalized into a single GymWyse recovery metric. The dashboard displays gym-wide recovery trends so you can see if your programming is running members into the ground or striking the right balance between intensity and recovery.",
              },
              {
                icon: TrendingUp,
                title: "Engagement Decay Detection",
                description:
                  "The Bio-Metric Integration Layer monitors each member's wearable activity pattern over rolling 30-day windows. When it detects a sustained decline — fewer workouts logged, lower average intensity, dormant device sync — the system flags the member as at-risk and queues a personalized re-engagement sequence automatically.",
              },
              {
                icon: Trophy,
                title: "Gamification Engine",
                description:
                  "Wearable data fuels gym-wide leaderboards, step challenges, heart rate zone competitions, and badge systems. Members compete on metrics that matter — active minutes, calories burned, consistency streaks — and the social accountability loop drives repeat visits. Gyms using GymWyse gamification report a 2.3x increase in weekly visit frequency among connected members.",
              },
              {
                icon: Target,
                title: "Personalized Workout Recommendations",
                description:
                  "The AI coaching engine reads a member's recovery score, recent training load, sleep quality, and heart rate variability before generating workout recommendations. A member with a low recovery score gets a mobility session or light cardio instead of a heavy lift day. This reduces injury risk and builds trust in the platform.",
              },
              {
                icon: BarChart3,
                title: "Trainer Insight Panels",
                description:
                  "Every trainer gets a biometrics panel for their assigned clients showing recent workouts, heart rate trends, recovery trajectory, and training load accumulation. This replaces the guesswork of asking 'how do you feel today?' with data-driven decisions about programming, load progression, and deload timing.",
              },
            ].map((feature, index) => {
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

      {/* ── The Retention Flywheel ── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              The Wearable Retention Flywheel
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Wearable integration does not improve retention through a single
                mechanism. It creates a flywheel with four reinforcing stages,
                and each stage feeds energy back into the next.
              </p>
              <p>
                <span className="font-semibold text-electric-green">
                  Stage 1 — Data Collection:
                </span>{" "}
                The member connects their Apple Watch, WHOOP, Garmin, or Fitbit
                to GymWyse. From that moment, every workout, recovery cycle,
                sleep session, and daily activity is captured automatically.
                There is zero friction for the member. No manual entry, no
                logging workouts after the fact, no forgetting to check in at
                the front desk.
              </p>
              <p>
                <span className="font-semibold text-electric-green">
                  Stage 2 — Insight Generation:
                </span>{" "}
                Raw data is meaningless without interpretation. GymWyse&apos;s AI
                engine processes biometric data into actionable insights: your
                cardio fitness improved 8% this month, your recovery has been
                trending upward since you started sleeping more, your heart rate
                zones during spin class show you are ready to increase
                resistance. These insights are delivered through the member app,
                trainer panels, and automated push notifications.
              </p>
              <p>
                <span className="font-semibold text-electric-green">
                  Stage 3 — Behavioral Response:
                </span>{" "}
                Members who receive personalized, data-backed feedback change
                their behavior. They train more consistently because they can see
                the impact. They follow recovery recommendations because the
                numbers validate the advice. They try new classes because the AI
                suggests formats that match their biometric profile. The result
                is higher visit frequency, deeper class engagement, and stronger
                emotional attachment to the gym.
              </p>
              <p>
                <span className="font-semibold text-electric-green">
                  Stage 4 — Retention Lock-In:
                </span>{" "}
                As months of biometric history accumulate in the member&apos;s
                GymWyse profile, switching costs increase. A member who has six
                months of heart rate trends, recovery data, and VO2 max
                progression charted in your platform is far less likely to cancel
                than one whose only tie to your gym is a monthly billing cycle.
                The data becomes a personal fitness record they do not want to
                lose. That is the retention lock-in effect that wearables create
                when integrated properly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
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
              Legacy Manual Management vs. GymWyse AI Management
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              A side-by-side look at how wearable-first gym management compares
              to the traditional approach across six critical dimensions.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-glass-border">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-glass">
              <div className="border-b border-r border-glass-border px-6 py-4 text-sm font-semibold text-cool-gray">
                Category
              </div>
              <div className="border-b border-r border-glass-border px-6 py-4 text-sm font-semibold text-alert-red">
                Legacy Manual Management
              </div>
              <div className="border-b border-glass-border px-6 py-4 text-sm font-semibold text-electric-green">
                GymWyse AI Management
              </div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-3"
              >
                <div className="border-b border-r border-glass-border px-6 py-4 text-sm font-medium text-pure-white">
                  {row.category}
                </div>
                <div className="border-b border-r border-glass-border px-6 py-4 text-sm text-cool-gray">
                  {row.legacy}
                </div>
                <div className="border-b border-glass-border px-6 py-4 text-sm text-soft-white">
                  {row.gymwyse}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI Calculation ── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="glass-card rounded-2xl border border-electric-green/20 p-8 md:p-12">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                <DollarSign className="h-6 w-6 text-electric-green" />
              </div>
              <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
                The ROI of Wearable Integration
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
                <p>
                  Let&apos;s run the numbers on a realistic scenario. Say you
                  have a 400-member gym and you successfully get 200 members
                  (50%) to connect a wearable device to GymWyse. Your average
                  membership is $95 per month.
                </p>
                <div className="rounded-xl border border-glass-border bg-deep-space p-6 font-mono text-sm">
                  <p className="text-soft-white">
                    <span className="text-electric-green">Connected members:</span>{" "}
                    200
                  </p>
                  <p className="text-soft-white">
                    <span className="text-electric-green">Average monthly fee:</span>{" "}
                    $95
                  </p>
                  <p className="text-soft-white">
                    <span className="text-electric-green">Baseline monthly churn (non-connected):</span>{" "}
                    8%
                  </p>
                  <p className="text-soft-white">
                    <span className="text-electric-green">Wearable-connected churn:</span>{" "}
                    6.16% (23% lower)
                  </p>
                  <p className="mt-3 text-soft-white">
                    <span className="text-electric-green">Cancellations avoided:</span>{" "}
                    200 x (8% - 6.16%) = <span className="font-bold text-electric-green">3.68 members/month</span>
                  </p>
                  <p className="text-soft-white">
                    <span className="text-electric-green">Monthly revenue saved:</span>{" "}
                    3.68 x $95 = <span className="font-bold text-electric-green">$349.60/month</span>
                  </p>
                  <p className="mt-3 border-t border-glass-border pt-3 text-soft-white">
                    <span className="text-electric-green">At scale (full 400-member gym, 50% connected):</span>
                  </p>
                  <p className="text-soft-white">
                    Annualized savings: $349.60 x 12 = <span className="font-bold text-electric-green">$4,195/year</span>
                  </p>
                  <p className="mt-3 border-t border-glass-border pt-3 text-soft-white">
                    <span className="text-electric-green">Compounding effect over 12 months:</span>
                  </p>
                  <p className="text-soft-white">
                    Those 3.68 saved members each month stay and pay $95/mo. Over
                    12 months, that is ~46 fewer cancellations total at $95 each
                    = <span className="font-bold text-electric-green">$4,370/month in retained recurring revenue</span>{" "}
                    by month 12.
                  </p>
                </div>
                <p>
                  And that only accounts for the direct churn reduction.
                  Wearable-connected members also visit more frequently (2.3x on
                  average), which increases secondary revenue from personal
                  training, class packages, retail, and nutrition coaching. The
                  true annual value of a wearable-first strategy for a
                  400-member gym is conservatively $50,000+ when you factor in
                  upsell opportunities and reduced acquisition spending.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/roi-calculator">
                    <Button variant="primary" size="lg">
                      Calculate Your ROI
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button variant="outline" size="lg">
                      See a Live Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Member Progress Dashboards ── */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Member Progress Dashboards That Drive Loyalty
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                The member-facing dashboard in GymWyse is where biometric data
                becomes emotionally powerful. Members open the app and see their
                fitness story told in numbers and charts they can actually
                understand — not raw heart rate data dumps, but meaningful
                visualizations like &quot;your cardio fitness improved 12% since
                you joined&quot; and &quot;your average recovery score is higher
                this month than last month.&quot;
              </p>
              <p>
                The dashboard combines wearable data with in-gym activity.
                Workout summaries include heart rate zone breakdowns, calories
                burned, and intensity comparisons against their personal average.
                Progress photos sit alongside objective biometric trends. Body
                composition measurements from smart scales integrate alongside
                VO2 max estimates from Apple Watch or Garmin.
              </p>
              <p>
                This comprehensive view creates what we call the{" "}
                <span className="font-semibold text-electric-green">
                  Progress Visibility Effect
                </span>
                . When a member can see, in plain numbers, that their health is
                improving — even on weeks when the scale has not moved — they
                stay motivated and they stay subscribed. Our data shows that
                members who actively view their progress dashboard at least once
                per week have a 41% higher 12-month retention rate than those who
                do not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Regional Compliance Note ── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-blue/10">
                <Globe className="h-6 w-6 text-sapphire-blue" />
              </div>
              <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
                Regional Compliance for Biometric Data
              </h2>
            </div>
            <p className="text-base leading-relaxed text-cool-gray mb-8">
              Wearable biometric data is among the most sensitive personal
              information your gym will handle. GymWyse is built to meet
              compliance requirements across every region we operate in.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Shield,
                  region: "United States — HIPAA",
                  description:
                    "Health data from wearables falls under HIPAA-adjacent safeguards. GymWyse encrypts all biometric data at rest (AES-256) and in transit (TLS 1.3), maintains audit logs for data access, and provides Business Associate Agreement support for gyms that require it. Members can request data deletion at any time through the app.",
                },
                {
                  icon: Shield,
                  region: "United Kingdom & EU — GDPR",
                  description:
                    "Under GDPR Article 9, biometric data is classified as special category data requiring explicit consent. GymWyse obtains granular consent for each data type before processing, supports Data Subject Access Requests (DSARs), and stores EU member data in EU-based data centers. Data Processing Agreements are available for all gym partners.",
                },
                {
                  icon: Shield,
                  region: "Australia — Privacy Act 1988",
                  description:
                    "Health information, including wearable biometric data, is classified as sensitive information under the Australian Privacy Principles (APPs). GymWyse obtains explicit consent before collecting health data, provides clear privacy notices, and supports data portability and deletion requests in compliance with APP 12 and APP 13.",
                },
                {
                  icon: Shield,
                  region: "UAE — Health Data Regulations",
                  description:
                    "The UAE regulates health data under the Dubai Health Authority (DHA) guidelines and DIFC Data Protection Law. GymWyse complies with local data residency requirements, obtains consent aligned with UAE federal data protection standards, and ensures biometric data is processed with appropriate safeguards for the region.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl border border-glass-border p-8"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sapphire-blue/10">
                      <Icon className="h-5 w-5 text-sapphire-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-pure-white">
                      {item.region}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Expert Commentary ── */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="glass-card rounded-2xl border border-electric-green/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-electric-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Quote className="h-6 w-6 text-electric-green" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-pure-white">
                      Insights from GymWyse Product Team
                    </h2>
                    <p className="text-sm text-electric-green">
                      Expert Commentary
                    </p>
                  </div>
                </div>
                <div className="space-y-5 text-base leading-relaxed text-soft-white">
                  <p>
                    &quot;We built the Bio-Metric Integration Layer after
                    watching dozens of gym owners struggle with the same
                    problem: they had members wearing $400 smartwatches that
                    generated incredible health data, but none of that data
                    flowed into the gym&apos;s management platform. The member
                    had their fitness data in one app, their class schedule in
                    another, and their billing in a third. There was no
                    unified view, and no way to act on the biometric signals
                    that predict retention.&quot;
                  </p>
                  <p>
                    &quot;What surprised us most during beta testing was the
                    gamification effect. We expected the retention improvement
                    to come from better data and smarter re-engagement
                    workflows. And it did. But the single biggest driver of
                    increased visit frequency was the social layer — wearable-
                    powered leaderboards, step challenges, and heart rate zone
                    competitions. Members who joined at least one challenge
                    visited 3.1x more often per week than those who did not.
                    The competitive and community elements turned wearable data
                    from a passive tracking tool into an active engagement
                    engine.&quot;
                  </p>
                  <p>
                    &quot;Our advice to gym owners considering a wearable-first
                    strategy: start with the devices your members already own.
                    Do not invest in proprietary gym wearables or heart rate
                    monitors mounted on walls. Meet members where they are —
                    on their wrist — and pull that data into a platform that
                    makes it actionable for both the member and your business.
                    The ROI is real, the setup is fast, and the retention
                    impact compounds every month as more members connect.&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How to Set Up ── */}
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
              How to Launch a Wearable-First Strategy
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Five steps to go from zero wearable integration to a fully
              connected, retention-optimized gym.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {howToSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-6 flex gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-green/10 text-lg font-bold font-mono text-electric-green">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-pure-white">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
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
              Everything gym owners ask about wearable integration and biometric
              data.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card overflow-hidden rounded-2xl border border-glass-border"
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

      {/* ── Bottom CTA ── */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-electric-green/10">
                <Zap className="h-7 w-7 text-electric-green" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-5xl">
              Ready to Turn Wearable Data into Retained Revenue?
            </h2>
            <p className="mt-6 text-lg text-soft-white leading-relaxed max-w-2xl mx-auto">
              GymWyse integrates with the wearables your members already own,
              turning passive biometric data into active retention signals. Set
              up in under five minutes. See the retention impact within 30 days.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="xl">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Calculate Your ROI
                </Button>
              </Link>
              <Link href="/integrations/wearables">
                <Button variant="ghost" size="xl">
                  <Smartphone className="mr-2 h-4 w-4" />
                  View All Integrations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
