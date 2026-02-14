"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Smartphone,
  Users,
  Zap,
  Heart,
  Brain,
  Watch,
  CalendarCheck,
  TrendingUp,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const avatars = [
  { name: "Coach Max", personality: "High-energy motivator", style: "Intense HIIT focus" },
  { name: "Coach Serena", personality: "Calm & mindful", style: "Yoga & flexibility" },
  { name: "Coach Kai", personality: "Data-driven analyst", style: "Strength programming" },
  { name: "Coach Luna", personality: "Fun & social", style: "Group fitness" },
  { name: "Coach Atlas", personality: "Old-school discipline", style: "Powerlifting" },
  { name: "Coach Sage", personality: "Holistic wellness", style: "Recovery & nutrition" },
];

const featureDeepDive = [
  {
    icon: Brain,
    title: "AI Avatar Coaching",
    description:
      "Each of the six AI avatars adapts to the individual member's goals, fitness level, and training history. When a member selects Coach Kai for strength programming, the avatar does not just hand them a static plan. It tracks every logged set, monitors progressive overload, and adjusts workout recommendations week over week based on actual performance data. If a member stalls on bench press for two consecutive sessions, the avatar suggests a deload week or accessory variation. Members choose their preferred coaching style at onboarding and can switch avatars at any time. The result is a personal training experience at scale, without the cost of hiring additional coaches. Members who engage with an AI avatar complete 3.5 more workouts per month on average compared to members using a generic app with no coaching layer.",
  },
  {
    icon: Watch,
    title: "Wearable Sync",
    description:
      "The GymWyse member app integrates with Apple Health, WHOOP, Garmin, Fitbit, and Google Fit. During workouts, members see their real-time heart rate zones overlaid on the exercise they are performing, so they know whether they are in a fat-burning zone or pushing into anaerobic territory. Sleep tracking data feeds into the AI coach's recovery recommendations. If a member logged four hours of sleep, the avatar suggests a lighter session or active recovery day instead of a heavy deadlift workout. Recovery scores from WHOOP and Garmin sync automatically each morning, giving members a readiness score before they even arrive at the gym. All wearable data is aggregated into the member's progress dashboard, creating a single source of truth for their health and fitness journey.",
  },
  {
    icon: CalendarCheck,
    title: "Class Booking",
    description:
      "Members browse and book classes directly from the app with a single tap. When a class is full, they join the waitlist and receive a push notification the moment a spot opens. Cancellations and reschedules happen in-app with no need to call the front desk or send a message. The booking system enforces your cancellation policy automatically, applying late-cancel fees if configured. Members can view the instructor's profile, read class descriptions, and see historical attendance data before committing. For gym owners, in-app booking drives significantly higher class utilization because the friction of booking drops to near zero. Gyms using GymWyse see 3.2 times more class bookings through the app compared to front-desk-only booking.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Every workout is logged automatically when a member follows their AI-generated plan, or manually if they prefer to freestyle. The progress dashboard tracks workout volume over time, body measurements entered by the member, progress photos stored securely in the app, and personal records for every major lift. Members see their journey visualized in charts and timelines, making it easy to stay motivated. The AI avatar references this data when generating new workout plans, ensuring progressive overload is built into every program. Personal records are celebrated with in-app notifications, and members can optionally share milestones to the gym's social feed. For gym owners, engaged members who track progress are significantly less likely to cancel their membership.",
  },
  {
    icon: Trophy,
    title: "Challenges & Gamification",
    description:
      "Gym-wide challenges keep members engaged beyond their individual workouts. Owners can launch preset challenges like 30-day attendance streaks, most classes attended in a month, or total weight lifted competitions. Leaderboards update in real time and are visible to all participants. Members earn achievement badges for milestones such as their first 100 workouts, attending every class type, or hitting a personal record. The gamification layer taps into social motivation and friendly competition, which drives consistent attendance. Gyms running monthly challenges on GymWyse report measurably higher visit frequency during active challenge periods compared to months without challenges. You configure the rules, set the prizes, and the app handles the rest.",
  },
];

const engagementStats = [
  { value: "40%", label: "Higher Engagement", detail: "vs generic branded apps" },
  { value: "3.2\u00d7", label: "More Class Bookings", detail: "via app vs front desk" },
  { value: "68%", label: "Retention Increase", detail: "with AI coaching enabled" },
  { value: "12 min", label: "Avg Daily App Usage", detail: "per active member" },
];

const faqs = [
  {
    question: "Is the member app included in the subscription?",
    answer:
      "Yes. The branded member app for iOS and Android is included at no extra cost with every GymWyse plan. There are no per-member fees, no download limits, and no hidden charges. Your members get full access to AI coaching, class booking, progress tracking, and all other app features from day one.",
  },
  {
    question: "Can members choose their own AI coach?",
    answer:
      "Yes. During onboarding, members browse all six AI avatar personalities and select the one that matches their training style and goals. They can switch between avatars at any time from the app settings. Each avatar retains the member's workout history, so switching coaches does not reset their progress or program continuity.",
  },
  {
    question: "Does the app work offline?",
    answer:
      "Workout logging works fully offline. Members can log sets, reps, and weights without an internet connection, and the data syncs automatically when they reconnect. Class booking and social features require an active connection, but all core training functionality remains available even in basement gyms with poor signal.",
  },
  {
    question: "Can we customize the app branding?",
    answer:
      "Yes. Your gym's logo, primary colors, and gym name are displayed throughout the member app, so it feels like your own branded experience. Members see your branding on the home screen, in push notifications, and on all in-app communications. The customization is configured from the GymWyse dashboard and applies instantly.",
  },
  {
    question: "Which wearables are supported?",
    answer:
      "The app currently integrates with Apple Health, WHOOP, Garmin, Fitbit, and Google Fit. These integrations cover the vast majority of fitness wearables on the market. Heart rate, sleep, recovery, and activity data sync automatically. New integrations are added based on member demand, and the team ships updates on a regular cadence.",
  },
];

export function MemberAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero + Avatars + Quick Features + App Features List */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Member Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              AI Avatar Member App
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              6 personality-driven AI coaches. 40% higher engagement. Members
              actually love using this app.
            </p>
          </motion.div>

          {/* Avatar grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
            {avatars.map((avatar, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-sapphire-blue/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-sapphire-blue font-bold">{avatar.name.split(" ")[1][0]}</span>
                </div>
                <h3 className="text-base font-semibold text-pure-white mb-1">{avatar.name}</h3>
                <p className="text-sm text-electric-green mb-1">{avatar.personality}</p>
                <p className="text-xs text-dim-gray">{avatar.style}</p>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Smartphone, title: "Native iOS & Android", desc: "Smooth, responsive native apps" },
              { icon: Users, title: "Personalized Experience", desc: "Each member gets their own AI coach" },
              { icon: Zap, title: "+40% Engagement", desc: "Members use the app 3x more often" },
              { icon: Heart, title: "Included Free", desc: "No extra cost with your GymWyse plan" },
            ].map((f, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-sm font-semibold text-pure-white mb-1">{f.title}</h3>
                <p className="text-xs text-cool-gray">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* App features list */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-pure-white text-center mb-8">
              App Features
            </h2>
            <div className="glass-card p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "AI-powered workout plans",
                  "Class booking & waitlists",
                  "Progress photos & tracking",
                  "Nutrition guidance",
                  "Check-in via QR code",
                  "Equipment reporting (QR)",
                  "Payment & billing",
                  "Push notifications",
                  "Social challenges",
                  "Wearable device sync",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-electric-green shrink-0" />
                    <span className="text-sm text-cool-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Everything Your Members Need in One App
            </h2>
            <p className="text-soft-white leading-relaxed">
              Five core capabilities that turn a basic gym app into a retention
              engine. Each feature is designed to keep members engaged, progressing,
              and coming back.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {featureDeepDive.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Stats Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              The Numbers Speak for Themselves
            </h2>
            <p className="text-soft-white leading-relaxed">
              Measured across gyms using the GymWyse member app with AI coaching enabled.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {engagementStats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-electric-green mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-pure-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-dim-gray">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Case Study
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3">
                Venice Iron Collective, Venice Beach
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-6">
                Venice Iron Collective is a 280-member gym on Venice Beach that had been
                using a generic branded app from their previous management platform. Only
                15% of members had downloaded the app, and those who did used it primarily
                to check the class schedule. Engagement was minimal, and the app contributed
                nothing to retention. After switching to GymWyse and launching the AI avatar
                member app, adoption hit 62% within the first 30 days. Members gravitated
                toward the AI coaching feature immediately. Coach Max, the high-energy HIIT
                personality, became the most popular avatar, selected by 38% of active app
                users. Coach Kai, the data-driven strength analyst, was the second most
                chosen. Within 60 days, members using the AI coaching feature were completing
                3.5 more workouts per month on average compared to their pre-GymWyse
                baseline. Class bookings through the app tripled, and the gym reported a
                measurable drop in monthly cancellations.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "App Adoption", value: "62%", detail: "Up from 15%" },
                  { label: "Extra Workouts", value: "+3.5/mo", detail: "Per member avg" },
                  { label: "Most Popular Avatar", value: "Max", detail: "38% of users" },
                  { label: "Class Bookings", value: "3\u00d7", detail: "Via app vs before" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-electric-green mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-pure-white mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-dim-gray">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-soft-white leading-relaxed">
              Common questions about the GymWyse member app and AI coaching features.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-pure-white pr-4">
                    {faq.question}
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
                            {faq.answer}
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Give Your Members an App They Actually Use
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a 20-minute demo and see the AI avatar coaching in action. Or
              start a free 14-day trial and let your members experience it
              themselves. No credit card required. No contract. Cancel any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
