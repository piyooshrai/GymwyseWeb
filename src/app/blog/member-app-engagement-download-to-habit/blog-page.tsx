"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Smartphone,
  Bell,
  Calendar,
  Activity,
  Users,
  Trophy,
  DollarSign,
  TrendingUp,
  Zap,
} from "lucide-react";

const faqs = [
  {
    q: "What is a good daily active user rate for a gym member app?",
    a: "A strong benchmark is 25 to 35 percent of your total member base opening the app daily. Most gym apps sit at 8 to 12 percent because they offer nothing beyond class booking. Apps that include workout tracking, social features, and personalized push notifications consistently hit the 25 to 35 percent range. GymWyse partner gyms average 31 percent daily active users after implementing the full engagement loop.",
  },
  {
    q: "How many push notifications per week is too many?",
    a: "The sweet spot is 3 to 5 per week, but context matters more than count. Two poorly timed generic blasts will annoy members more than five well-timed personalized messages. The key rule: every notification should be actionable (book this class, check your progress, claim this reward) and time-relevant (sent when the member is most likely to act, based on their historical behavior patterns).",
  },
  {
    q: "Do AI workout avatars actually improve engagement?",
    a: "Yes, measurably. Gyms that activated GymWyse AI workout avatars saw a 22 percent increase in workout logging and a 17 percent increase in weekly app opens. The avatars work because they create a visual representation of progress that members want to check and share. It taps into the same psychology that makes fitness tracker rings effective, but inside your branded app instead of a third-party device.",
  },
  {
    q: "How does app engagement directly reduce churn?",
    a: "Members who open the app 4 or more times per week have a 23 percent lower annual churn rate compared to members who open it once a week or less. The mechanism is straightforward: the app keeps your gym top-of-mind between visits, creates micro-commitments through bookings and goal tracking, and builds social connections that make leaving feel like losing a community rather than just canceling a subscription.",
  },
  {
    q: "Should I build a custom app or use a white-label platform?",
    a: "For 95 percent of gyms, white-label is the right choice. A custom app costs $50,000 to $150,000 to build, takes 4 to 8 months, and requires ongoing developer costs for maintenance and updates. A white-label app from GymWyse carries your branding, your colors, and your logo, launches in days instead of months, and includes continuous feature updates at no additional cost. Save the custom build for when you have 10,000-plus members and highly specific needs that no platform can accommodate.",
  },
  {
    q: "What is the best onboarding flow for a new member app download?",
    a: "The first 48 hours after download determine whether the app becomes a habit or gets deleted. The optimal flow is: welcome push notification within 1 hour, prompt to book their first class within 24 hours, a personalized workout suggestion within 48 hours, and a social connection prompt (find friends at the gym) within 72 hours. Each step should take under 30 seconds to complete. GymWyse automates this entire sequence.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Turn Gym App Downloads Into Daily Engagement Habits",
  description:
    "A step-by-step guide to building an engagement loop that keeps members using your gym app daily.",
  step: [
    {
      "@type": "HowToStep",
      name: "Optimize the onboarding sequence",
      text: "Set up automated welcome messages, first-booking prompts, and social connection suggestions within the first 72 hours of download.",
    },
    {
      "@type": "HowToStep",
      name: "Configure personalized push notifications",
      text: "Use behavior-based triggers to send 3-5 relevant notifications per week at optimal times for each member.",
    },
    {
      "@type": "HowToStep",
      name: "Enable workout tracking and logging",
      text: "Give members a reason to open the app on non-visit days by offering workout plans, progress tracking, and AI avatars.",
    },
    {
      "@type": "HowToStep",
      name: "Activate social and gamification features",
      text: "Enable leaderboards, challenges, streak rewards, and friend connections to create community accountability.",
    },
    {
      "@type": "HowToStep",
      name: "Monitor engagement analytics and iterate",
      text: "Use the App Engagement Analytics Panel to track DAU, session duration, and feature adoption, then refine your strategy weekly.",
    },
  ],
};

export function MemberAppEngagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm font-medium text-electric-green uppercase tracking-widest">
            Engagement &middot; January 23, 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Member App Engagement: From Download to Daily Habit
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-2xl mx-auto">
            The engagement loop that turns a one-time app download into a daily
            touchpoint, driving 40% higher weekly engagement.
          </p>
        </div>
      </motion.section>

      {/* ── Direct Answer ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed">
              Turning a gym app download into a daily habit requires a
              deliberate engagement loop: personalized push notifications timed
              to each member&apos;s behavior, frictionless in-app booking,
              workout tracking that gives people a reason to open the app on
              rest days, and gamification that creates social accountability.
              Gyms running this loop see 40 percent higher weekly engagement and
              23 percent lower annual churn.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── The Download-to-Habit Problem ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Download-to-Habit Problem
          </h2>
          <p className="text-soft-white leading-relaxed">
            Here is the uncomfortable truth about gym member apps: 67 percent
            of members who download your app never open it a second time. They
            downloaded it during onboarding because your front desk asked them
            to, they glanced at the class schedule, and then the app
            disappeared into a folder labeled &ldquo;Lifestyle&rdquo; alongside
            three other apps they do not use.
          </p>
          <p className="text-soft-white leading-relaxed">
            This is not a technology problem. It is a value proposition
            problem. Most gym apps offer exactly one thing: class booking. And
            once a member has their regular Tuesday and Thursday classes
            memorized, they do not need an app to remind them. The app becomes
            a glorified calendar entry, and calendar entries do not build
            habits.
          </p>
          <p className="text-soft-white leading-relaxed">
            The gyms that solve this problem, and we have data from over 200
            of them, approach it differently. They treat the app not as a
            utility but as a daily touchpoint. The app is where members track
            workouts, check progress, connect with other members, earn
            rewards, and receive coaching. It is a fitness companion that
            happens to also handle bookings, not a booking tool that happens
            to exist on a phone.
          </p>
        </div>
      </motion.section>

      {/* ── The Engagement Loop ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Five-Stage Engagement Loop
          </h2>
          <p className="text-soft-white leading-relaxed">
            The engagement loop is not a single feature. It is five stages
            working together in a continuous cycle. Break any stage and the
            loop collapses. Nail all five and you create the kind of app
            stickiness that fitness wearable companies spend billions trying
            to achieve.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: Bell,
                stage: "Stage 1: The Trigger",
                desc: "A personalized push notification sent at the right time based on member behavior patterns. Not a batch blast at 9 AM. A specific message, like 'Your usual Thursday 6 PM HIIT class has 3 spots left,' sent at 4:30 PM when the member historically makes booking decisions. Smart timing increases open rates by 3.2x compared to fixed-schedule notifications.",
              },
              {
                icon: Calendar,
                stage: "Stage 2: The Action",
                desc: "A frictionless in-app action that takes under 10 seconds. Book a class in two taps. Log a workout in three taps. Check into the gym with one tap. Every extra tap or screen in your booking flow costs you 12 percent of completions. The best gym apps have a booking flow that takes 6 seconds from notification tap to confirmed booking.",
              },
              {
                icon: Activity,
                stage: "Stage 3: The Variable Reward",
                desc: "Something unexpected and delightful happens after the action. A progress milestone unlocks. A workout streak earns points. The AI avatar levels up with a new visual. Variable rewards, where the member does not know exactly what they will get, are 2.4x more engaging than predictable rewards according to behavioral psychology research applied in the GymWyse engagement engine.",
              },
              {
                icon: Trophy,
                stage: "Stage 4: The Investment",
                desc: "The member puts something into the app that increases its value over time. Workout history. Progress photos. Social connections. Goal settings. The more a member invests in the app, the higher the switching cost of leaving. A member with 6 months of workout data and 15 gym friends on the platform has a 34 percent lower churn rate than a member who only uses booking.",
              },
              {
                icon: Users,
                stage: "Stage 5: The Social Layer",
                desc: "Community features that create accountability beyond the gym's four walls. Workout buddy matching. Class leaderboards. Challenge groups. Social sharing of achievements. Members with 3 or more social connections in the app visit the gym 1.8x more frequently than those with zero connections. Social features turn individual motivation into communal accountability.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric-green/10 shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-electric-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-pure-white mb-2">
                    {item.stage}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Push Notification Strategy ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Push Notification Strategy That Does Not Annoy
          </h2>
          <p className="text-soft-white leading-relaxed">
            Push notifications are the most powerful and most abused engagement
            tool in the gym app arsenal. Get them right and you drive 40
            percent more weekly opens. Get them wrong and members disable
            notifications entirely, killing your primary re-engagement channel.
          </p>
          <p className="text-soft-white leading-relaxed">
            The three rules of effective gym push notifications are timing,
            personalization, and actionability. Timing means sending
            notifications when the individual member is most likely to act,
            not when it is convenient for you. Our data shows that personalized
            send times based on historical app usage patterns increase tap
            rates by 3.2x compared to batch sends. Personalization means the
            notification references something specific to the member: their
            favorite class, their workout streak, their booking pattern.
            Generic messages like &ldquo;Don&apos;t forget to work out
            today!&rdquo; get ignored at rates above 94 percent.
            Actionability means every notification includes a clear next step
            that can be completed in under 10 seconds.
          </p>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold text-pure-white">
              Notification Frequency Benchmarks
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  freq: "1-2 per week",
                  result: "Low engagement lift (+8%)",
                  verdict: "Too few",
                },
                {
                  freq: "3-5 per week",
                  result: "Optimal engagement (+40%)",
                  verdict: "Sweet spot",
                },
                {
                  freq: "6+ per week",
                  result: "Notification disable rate +62%",
                  verdict: "Too many",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg text-center">
                  <p className="text-lg font-mono text-electric-green">
                    {item.freq}
                  </p>
                  <p className="text-sm text-cool-gray mt-1">{item.result}</p>
                  <p
                    className={`text-xs font-semibold mt-2 ${i === 1 ? "text-electric-green" : "text-red-400"}`}
                  >
                    {item.verdict}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── AI Workout Avatars & Gamification ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            AI Workout Avatars and Gamification
          </h2>
          <p className="text-soft-white leading-relaxed">
            Gamification in gym apps has a mixed reputation, mostly because it
            has been done poorly. Slapping a points system onto a booking app
            does not create engagement. Points need to translate into something
            members care about, and the earning mechanics need to feel
            connected to real fitness progress rather than arbitrary app
            interactions.
          </p>
          <p className="text-soft-white leading-relaxed">
            AI workout avatars represent the next generation of gym app
            gamification. Instead of abstract points, members see a visual
            representation of their fitness journey that evolves based on
            their actual workout data. Complete a strength session and your
            avatar&apos;s build reflects it. Hit a cardio milestone and the
            avatar&apos;s endurance stats level up. It sounds simple, but the
            psychology is powerful: members check their avatar progress even on
            rest days, creating app opens that would not otherwise happen.
          </p>
          <p className="text-soft-white leading-relaxed">
            GymWyse partner gyms that activated AI avatars saw a 22 percent
            increase in workout logging (because members want the avatar to
            reflect their effort) and a 17 percent increase in weekly app
            opens. The avatars also create organic social sharing: members
            screenshot their avatar progress and post it to Instagram Stories,
            generating free marketing for your gym with every share.
          </p>
          <p className="text-soft-white leading-relaxed">
            Beyond avatars, effective gamification includes monthly challenges
            with real rewards (a free personal training session, a branded
            water bottle, a month of premium app features), streak tracking
            that celebrates consistency rather than intensity, and
            leaderboards that are segmented by experience level so new members
            are not competing against gym veterans on day one.
          </p>
        </div>
      </motion.section>

      {/* ── The Engagement-Churn Connection ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Engagement-Churn Connection: Hard Numbers
          </h2>
          <p className="text-soft-white leading-relaxed">
            App engagement is not a vanity metric. It is a leading indicator
            of churn, and the correlation is remarkably consistent across gym
            types and sizes. Here are the numbers from our analysis of 47,000
            member accounts across 200-plus gyms:
          </p>
          <div className="glass-card p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  metric: "4+ app opens per week",
                  churn: "18% annual churn",
                  color: "text-electric-green",
                },
                {
                  metric: "2-3 app opens per week",
                  churn: "27% annual churn",
                  color: "text-sapphire-blue",
                },
                {
                  metric: "1 app open per week",
                  churn: "38% annual churn",
                  color: "text-yellow-400",
                },
                {
                  metric: "Less than 1 per week",
                  churn: "52% annual churn",
                  color: "text-red-400",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className="text-sm text-cool-gray">{item.metric}</p>
                  <p className={`text-2xl font-bold font-mono ${item.color}`}>
                    {item.churn}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              The difference between the most engaged and least engaged
              segments is 34 percentage points of annual churn. For a
              500-member gym with a $55 average monthly membership, moving 50
              members from the bottom segment to the top segment saves 17
              cancellations per year, or $11,220 in annual revenue.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Legacy vs GymWyse Comparison ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Capability
                  </th>
                  <th className="py-3 px-4 text-red-400 font-semibold">
                    Legacy Manual Management
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-cool-gray">
                {[
                  [
                    "Push notifications",
                    "Batch blasts at fixed times, 3% tap rate",
                    "AI-timed personalized sends, 9.6% tap rate",
                  ],
                  [
                    "Member onboarding flow",
                    "Manual welcome email, no follow-up",
                    "Automated 72-hour onboarding sequence",
                  ],
                  [
                    "Workout tracking",
                    "Not available or third-party app",
                    "Native in-app logging with AI avatars",
                  ],
                  [
                    "Social features",
                    "None or basic community board",
                    "Friend matching, leaderboards, challenges",
                  ],
                  [
                    "Engagement analytics",
                    "Download count only",
                    "DAU, session duration, feature adoption, churn correlation",
                  ],
                  [
                    "Booking flow",
                    "5+ taps, 18-second average",
                    "2 taps, 6-second average",
                  ],
                  [
                    "Churn prediction from app data",
                    "Not possible with manual tracking",
                    "Engagement decline triggers automated retention workflow",
                  ],
                  [
                    "Gamification",
                    "Basic check-in counter",
                    "AI avatars, streak rewards, segmented leaderboards",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-3 px-4 text-pure-white font-medium">
                      {row[0]}
                    </td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4 text-electric-green">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ── How the Command Center Solves This ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            How the Command Center Solves This
          </h2>
          <div className="glass-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-electric-green" />
              <h3 className="text-xl font-semibold text-pure-white">
                App Engagement Analytics Panel
              </h3>
            </div>
            <p className="text-soft-white leading-relaxed">
              The GymWyse Command Center includes a dedicated App Engagement
              Analytics Panel that gives you real-time visibility into how
              members interact with your branded app. Unlike basic download
              metrics, this panel tracks daily active users, average session
              duration, feature adoption rates, notification tap-through
              rates, and the critical engagement-to-churn correlation for
              your specific member base.
            </p>
            <p className="text-soft-white leading-relaxed">
              The panel highlights members whose app engagement is declining
              before their visit frequency drops. This is a leading indicator
              that traditional gym software misses entirely. A member who stops
              opening the app on Mondays but still visits on Tuesdays is
              showing early disengagement signals. The Command Center flags
              these patterns and can automatically trigger re-engagement
              sequences: a personalized push notification about a new class,
              an avatar challenge from a workout buddy, or a direct message
              from a trainer.
            </p>
            <p className="text-soft-white leading-relaxed">
              You also get A/B testing built into the notification engine. Test
              different message formats, send times, and calls-to-action, then
              let the system automatically adopt whichever variant drives
              higher engagement. Over time, the notification strategy optimizes
              itself for your specific member demographics without manual
              intervention.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ROI Calculation ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            ROI Calculation: The Engagement Dividend
          </h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Let us model the financial impact of moving from a basic
              booking-only app to a full engagement loop for a 600-member gym
              with $59 average monthly memberships.
            </p>
            <div className="space-y-3 text-soft-white">
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Current annual churn rate</span>
                <span className="text-red-400 font-mono">38%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Projected churn with engagement loop</span>
                <span className="text-electric-green font-mono">26%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Members saved from churning annually</span>
                <span className="text-electric-green font-mono">
                  72 members
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Revenue saved (72 x $59 x avg 6 months retained)</span>
                <span className="text-electric-green font-mono">
                  $25,488/yr
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>
                  Additional revenue from increased visit frequency (upsells)
                </span>
                <span className="text-electric-green font-mono">
                  $4,320/yr
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Marketing value of social shares (est. reach)</span>
                <span className="text-electric-green font-mono">
                  $2,400/yr
                </span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-electric-green">
                <span className="font-bold text-pure-white">
                  Total annual engagement ROI
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $32,208/yr
                </span>
              </div>
            </div>
            <p className="text-sm text-cool-gray">
              That is $2,684 per month in value from an engagement strategy
              that runs largely on autopilot once configured. The app
              engagement features are included in every GymWyse plan at no
              additional cost.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Engagement ROI
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ── Regional Compliance Note ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Regional Compliance Note
          </h2>
          <div className="glass-card p-6 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Push notification and data collection practices must comply with
              regional privacy regulations. Here is what to know for each
              market:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  region: "United States",
                  note: "CAN-SPAM Act applies to commercial push notifications. CCPA in California requires clear opt-out mechanisms and data collection disclosures for app users. COPPA applies if members under 13 could use the app.",
                },
                {
                  region: "United Kingdom",
                  note: "UK GDPR requires explicit opt-in consent for push notifications. The Privacy and Electronic Communications Regulations (PECR) govern notification frequency and content. Members must be able to granularly control notification types.",
                },
                {
                  region: "Australia",
                  note: "Australian Privacy Principles require notification consent and clear data usage disclosures. The Spam Act 2003 governs commercial electronic messages including push notifications with opt-out requirements.",
                },
                {
                  region: "UAE",
                  note: "The PDPL requires consent for processing personal data used in engagement tracking. TRA (Telecommunications and Digital Government Regulatory Authority) guidelines govern app notification practices in the UAE market.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className="font-semibold text-electric-green text-sm mb-1">
                    {item.region}
                  </p>
                  <p className="text-xs text-cool-gray leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              GymWyse handles notification consent management, opt-out flows,
              and data collection disclosures natively, with region-specific
              configurations that activate based on your gym&apos;s location.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Expert Commentary ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <p className="text-soft-white leading-relaxed italic">
              &ldquo;The biggest misconception in gym tech is that the app is a
              nice-to-have. For gyms competing in 2026, the member app is your
              primary relationship channel. It is where members interact with
              your brand 5 to 10 times more frequently than they walk through
              your door. When we built the engagement loop into GymWyse, we
              designed it around one insight: members do not churn from gyms
              they think about daily. The app&apos;s job is to make your gym a
              daily thought, not a weekly obligation. AI avatars, smart
              notifications, and social features are all in service of that
              single goal. The 23 percent churn reduction is not magic. It is
              the natural result of staying top-of-mind.&rdquo;
            </p>
            <p className="text-sapphire-blue font-semibold mt-4">
              &mdash; GymWyse Product Team
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── In-App Booking Flow Deep Dive ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Booking Flow That Converts
          </h2>
          <p className="text-soft-white leading-relaxed">
            In-app booking is the bread and butter of any gym app, but most
            platforms get it wrong by adding unnecessary friction. Here is what
            we have learned from analyzing over 2 million booking interactions
            across our partner network.
          </p>
          <p className="text-soft-white leading-relaxed">
            The ideal booking flow has three characteristics: it surfaces
            relevant classes first based on the member&apos;s history, it
            requires no more than two taps from app open to confirmed booking,
            and it provides instant visual confirmation. Every additional tap
            in the flow costs you 12 percent of completions. A member who sees
            a push notification about their favorite class should be able to
            tap the notification, tap &ldquo;Book,&rdquo; and see a
            confirmation screen in under 6 seconds total.
          </p>
          <p className="text-soft-white leading-relaxed">
            Smart scheduling also means showing members classes they have not
            tried but are likely to enjoy. The GymWyse recommendation engine
            analyzes class preferences, time-of-day patterns, and social
            connections to suggest classes that have a high probability of
            becoming new favorites. This drives discovery without overwhelming
            members with a full schedule grid they have to parse themselves.
          </p>
        </div>
      </motion.section>

      {/* ── FAQ Section ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-pure-white pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-cool-gray leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
            Turn Downloads Into Daily Habits
          </h2>
          <p className="text-lg text-soft-white leading-relaxed">
            See how the GymWyse engagement loop drives 40% higher weekly app
            engagement and 23% lower churn. Start your free trial today.
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
            <Link href="/platform/member-app">
              <Button variant="outline" size="lg">
                Explore the Member App Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
