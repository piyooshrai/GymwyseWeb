"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Watch,
  Smartphone,
  Activity,
  Heart,
  Zap,
  Trophy,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const supportedDevices = [
  {
    name: "Apple Watch / Apple Health",
    icon: Watch,
    description:
      "Full integration with Apple HealthKit provides workouts, heart rate zones, active calories, resting heart rate, VO2 max estimates, sleep analysis, and step count. Apple Watch is the most popular wearable among gym members, and GymWyse pulls every relevant data point automatically. Members who use Apple Watch see their workout rings reflected directly in the GymWyse member app.",
  },
  {
    name: "WHOOP",
    icon: Activity,
    description:
      "WHOOP recovery scores, strain scores, sleep performance, heart rate variability, and respiratory rate sync into GymWyse each morning. The recovery score is surfaced prominently in the member app, and the AI coaching engine uses it to recommend training intensity for the day. Members with low recovery scores receive suggestions for lighter sessions or active recovery.",
  },
  {
    name: "Garmin",
    icon: Heart,
    description:
      "Garmin watches and fitness trackers send workout data, body battery scores, stress tracking, sleep stages, and advanced running dynamics to GymWyse. Garmin users tend to be endurance-focused athletes, and GymWyse preserves the granular data Garmin collects, including cadence, ground contact time, and training load.",
  },
  {
    name: "Fitbit",
    icon: Zap,
    description:
      "Fitbit devices sync daily activity summaries including steps, active minutes, calories burned, heart rate zones, and sleep scores. Fitbit has a large user base among general fitness enthusiasts, and GymWyse makes it easy for these members to see all their health data unified in one place alongside their gym activity.",
  },
  {
    name: "Samsung Health",
    icon: Smartphone,
    description:
      "Samsung Galaxy Watch and Samsung Health users get full support through Google Health Connect. Workout sessions, heart rate data, sleep tracking, blood oxygen, and body composition measurements from Samsung devices are imported into GymWyse automatically, ensuring no member is left out regardless of their device ecosystem.",
  },
];

const importedData = [
  { metric: "Workouts", detail: "Type, duration, calories burned, and intensity classification for every session" },
  { metric: "Heart Rate Zones", detail: "Real-time and historical heart rate data broken into fat burn, cardio, and peak zones" },
  { metric: "Recovery Scores", detail: "WHOOP recovery, Garmin body battery, and computed readiness scores from sleep and HRV data" },
  { metric: "Sleep Data", detail: "Total sleep duration, sleep stages (deep, light, REM), sleep quality scores, and time in bed" },
  { metric: "Step Count", detail: "Daily step totals, hourly breakdowns, and distance walked or run throughout the day" },
  { metric: "VO2 Max", detail: "Cardiorespiratory fitness estimates from Apple Watch and Garmin, tracked over time" },
  { metric: "Active Minutes", detail: "Minutes spent in moderate or vigorous activity zones, aligned with WHO activity guidelines" },
];

const memberUseCases = [
  {
    title: "Auto-Log Gym Workouts",
    description:
      "Members no longer need to manually enter every set and rep. When a member completes a workout wearing their Apple Watch or WHOOP, the session data flows into GymWyse automatically. The workout type, duration, calories burned, and heart rate profile are captured without the member lifting a finger beyond their wrist. This eliminates the friction that causes most members to abandon workout tracking within weeks.",
  },
  {
    title: "Track Progress Over Time",
    description:
      "The GymWyse member app displays rich progress charts that combine wearable data with in-gym activity. Members see their weekly workout volume, average heart rate trends, recovery trajectory, and sleep quality all in one dashboard. Progress photos and body measurements sit alongside objective wearable data, creating a comprehensive picture of their fitness journey.",
  },
  {
    title: "Compete on Leaderboards",
    description:
      "Gym-wide leaderboards rank members by steps taken, workouts completed, total calories burned, and active minutes logged. Leaderboards update in real time using wearable data, so members can check their standing throughout the day. Friendly competition drives consistency, and gyms using GymWyse leaderboards report measurably higher weekly visit frequency.",
  },
  {
    title: "Earn Badges and Rewards",
    description:
      "Members unlock achievement badges for milestones such as logging 10,000 steps every day for a week, completing five consecutive workout days, or reaching a new VO2 max personal best. Gym owners can attach real-world rewards to badges, such as a free smoothie or a discount on personal training sessions.",
  },
  {
    title: "Share Achievements with the Gym Community",
    description:
      "When a member hits a personal record or completes a challenge, they can share the accomplishment to the gym's social feed directly from the app. The social layer creates a sense of belonging and community, which is one of the strongest predictors of long-term gym membership retention.",
  },
  {
    title: "Recovery-Based Training Recommendations",
    description:
      "The AI coaching engine in GymWyse reads the member's recovery score, sleep quality, and recent training load from their wearable. If a member slept poorly and has a low recovery score, the coach suggests a lighter session or mobility work instead of a heavy lift day. This personalized guidance reduces injury risk and helps members train smarter.",
  },
];

const ownerBenefits = [
  {
    stat: "2.3x",
    label: "More Visits",
    description:
      "Members who connect a wearable device visit the gym 2.3 times more often per week than members without a wearable connection. The data feedback loop creates accountability. Members can see when they have been inactive, and the gentle nudge of a low activity score drives them back through the door. For gym owners, this means higher utilization of facilities and stronger per-member revenue.",
  },
  {
    stat: "40%",
    label: "Less Churn",
    description:
      "Wearable-connected members cancel their memberships at a rate 40% lower than non-connected members. The combination of progress tracking, leaderboard engagement, and AI-powered coaching creates multiple retention hooks. Members feel invested in their data history and are reluctant to lose access to their fitness timeline. This reduction in churn directly impacts your bottom line.",
  },
  {
    stat: "HR Zones",
    label: "Class Insights",
    description:
      "Track which classes generate the highest average heart rate engagement across participants. If your Tuesday evening spin class consistently pushes members into peak heart rate zones while your Thursday yoga class keeps them in restorative ranges, you have objective data to inform scheduling, marketing, and instructor feedback. Class popularity metrics go beyond attendance counts to measure actual physiological engagement.",
  },
  {
    stat: "PT Leads",
    label: "Upsell Engine",
    description:
      "Members with declining activity scores, reduced visit frequency, or consistently low workout intensity are automatically flagged as candidates for personal training outreach. Your PT team receives a list of members who could benefit from guided programming, along with the data that explains why. This turns wearable data into a revenue-generating upsell channel, converting at-risk members into personal training clients before they churn.",
  },
];

const technicalDetails = [
  {
    title: "API Connections",
    description:
      "GymWyse connects to Apple HealthKit on iOS and Google Health Connect on Android. These platform-level APIs provide access to data from hundreds of wearable devices without requiring individual manufacturer integrations. WHOOP data flows through their official API with OAuth2 authentication.",
  },
  {
    title: "OAuth2 Authentication",
    description:
      "All wearable connections use industry-standard OAuth2 authentication. Members authorize GymWyse to access their health data through a secure consent flow managed by the device manufacturer. No passwords are shared with GymWyse, and members can revoke access at any time from their device settings.",
  },
  {
    title: "Data Privacy Controls",
    description:
      "Members have full control over what data they share. During setup, they choose which data categories to sync, including workouts, heart rate, sleep, and steps. They can disable any category at any time. Gym owners see aggregated and anonymized data in reports unless the member explicitly opts into sharing individual metrics on leaderboards.",
  },
  {
    title: "Real-Time Sync",
    description:
      "Data syncs automatically every 15 minutes when the member's phone is connected to the internet. During active workouts, heart rate data can stream in near real time for supported devices. Members can also trigger a manual sync from the app at any time.",
  },
  {
    title: "Historical Data Import",
    description:
      "When a member first connects their wearable, GymWyse imports up to 12 months of historical data. This means members see their full fitness timeline from day one, rather than starting from a blank slate. Historical import works for workouts, heart rate, sleep, and activity data.",
  },
  {
    title: "No Additional Hardware",
    description:
      "There is no additional hardware to purchase or install. GymWyse wearable integration works entirely through software APIs and the member's existing smartphone and wearable device. There are no Bluetooth beacons, no proprietary sensors, and no infrastructure changes required at the gym.",
  },
];

const testimonials = [
  {
    quote:
      "We are a 500-member CrossFit box in Austin, and wearable integration changed everything for us. Our members are obsessed with the leaderboards. Weekly challenge participation went from maybe 30 people to over 200 once we connected WHOOP and Apple Watch data. The competitive culture was already there. GymWyse just gave it a scoreboard.",
    name: "Jake Moreno",
    role: "Owner, Ironside CrossFit",
    type: "CrossFit Box",
  },
  {
    quote:
      "I run a boutique Pilates studio and was skeptical that wearable tech would matter for our clientele. I was completely wrong. Our members love seeing their heart rate data after reformer classes. It validates the intensity of the workout in a way they can share with friends. Retention is up 25% since we launched it with GymWyse six months ago.",
    name: "Priya Sharma",
    role: "Founder, The Reformer Room",
    type: "Boutique Studio",
  },
  {
    quote:
      "Managing three gym locations, I needed a way to understand member engagement beyond just swipe-in data. GymWyse wearable analytics showed me that members at our downtown location train at higher intensity but visit less frequently, while suburban members visit more but train lighter. That insight helped me tailor programming at each site. The PT upsell feature alone has generated thousands in new revenue.",
    name: "David Chen",
    role: "Regional Manager, FitCore Gyms",
    type: "Multi-Location Gym",
  },
];

const faqs = [
  {
    question: "Does it work with my specific wearable device?",
    answer:
      "GymWyse integrates with Apple Health, WHOOP, Garmin, Fitbit, and Samsung Health via Google Health Connect. Because Apple Health and Google Health Connect act as aggregators, virtually any wearable that syncs with these platforms is supported. This includes devices from Polar, Suunto, Oura, Amazfit, Xiaomi, and many more. If your wearable writes data to Apple Health or Google Health Connect, GymWyse can read it.",
  },
  {
    question: "Is member data private and secure?",
    answer:
      "Yes. Member health data is encrypted in transit and at rest. Members control exactly which data categories they share with GymWyse, and they can revoke access at any time. Gym owners see aggregated analytics by default. Individual member data is only visible on leaderboards or in coach views when the member has explicitly opted in. GymWyse complies with GDPR and applicable health data privacy regulations.",
  },
  {
    question: "Do members need to install anything extra?",
    answer:
      "No. Wearable integration is built directly into the GymWyse member app that your members already use for class booking, workout tracking, and AI coaching. Members simply go to the settings screen, tap the wearable connection option, and authorize access through their device's standard permissions flow. The entire setup takes under two minutes.",
  },
  {
    question: "What if a member does not have a wearable device?",
    answer:
      "Members without wearables still get the full GymWyse experience, including AI coaching, class booking, progress tracking, and manual workout logging. Wearable integration is an enhancement, not a requirement. Non-wearable members can still participate in workout count and attendance-based challenges. They simply will not appear on heart rate or step-based leaderboards.",
  },
  {
    question: "How does the leaderboard work?",
    answer:
      "Leaderboards are configurable by the gym owner. You choose which metrics to rank, such as total steps, workouts completed, calories burned, or active minutes. Rankings update in real time as wearable data syncs. You can run weekly, monthly, or custom-duration leaderboards. Members opt in to appear on public leaderboards, and you can restrict leaderboards to specific member groups, classes, or challenge participants.",
  },
  {
    question: "Is there an additional cost for wearable integration?",
    answer:
      "No. Wearable integration is included in every GymWyse plan at no extra charge. There are no per-member fees for wearable connections, no API usage charges, and no premium tier required. Every gym on GymWyse gets full access to wearable sync, leaderboards, recovery-based coaching, and owner analytics dashboards from the day they sign up.",
  },
];

export function WearablesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Integrations
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Wearable Tech Integration for Gym Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              Wearable tech integration is the number one fitness trend in 2026.
              Members expect their gym software to sync with WHOOP, Apple Watch,
              Garmin, Fitbit, and Samsung Health. GymWyse makes it seamless.
              Connect member wearables to your gym management platform and unlock
              real-time workout tracking, recovery-based coaching, competitive
              leaderboards, and engagement analytics that keep members coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supported Devices Section */}
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
              Supported Devices
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Every Major Wearable Platform, One Integration
            </h2>
            <p className="text-soft-white leading-relaxed">
              GymWyse connects with the five wearable ecosystems that cover over
              95% of the fitness wearable market. No matter what your members
              wear on their wrist, their data flows into your gym platform.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {supportedDevices.map((device, i) => (
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
                    <device.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {device.name}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {device.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Data Is Imported Section */}
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
              Data Points
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              What Data Is Imported from Wearables
            </h2>
            <p className="text-soft-white leading-relaxed">
              GymWyse imports seven categories of health and fitness data from
              member wearables. Data syncs automatically every 15 minutes, and
              members can trigger a manual sync at any time from the app.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {importedData.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p className="text-base font-semibold text-electric-green mb-2 font-mono">
                  {item.metric}
                </p>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Members Use It Section */}
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
              Member Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              How Members Use Wearable Integration
            </h2>
            <p className="text-soft-white leading-relaxed">
              Wearable integration transforms the{" "}
              <Link
                href="/platform/member-app"
                className="text-sapphire-blue hover:underline"
              >
                GymWyse member app
              </Link>{" "}
              from a booking tool into a comprehensive fitness companion that
              members engage with daily.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {memberUseCases.map((useCase, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Gym Owners Benefit Section */}
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
              Owner Benefits
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              How Gym Owners Benefit from Wearable Data
            </h2>
            <p className="text-soft-white leading-relaxed">
              Wearable data is not just for members. It gives gym owners
              actionable insights into engagement, retention, class performance,
              and{" "}
              <Link
                href="/solutions/reduce-churn"
                className="text-sapphire-blue hover:underline"
              >
                churn reduction
              </Link>{" "}
              opportunities that were previously invisible.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ownerBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-electric-green mb-1 font-mono">
                  {benefit.stat}
                </p>
                <p className="text-sm font-medium text-pure-white mb-3">
                  {benefit.label}
                </p>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
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
              Technical Details
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Built on Open Standards, Designed for Privacy
            </h2>
            <p className="text-soft-white leading-relaxed">
              GymWyse wearable integration uses platform-level health APIs and
              industry-standard authentication. No proprietary hardware. No
              complicated setup. No compromises on member privacy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technicalDetails.map((detail, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-3">
                  {detail.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {detail.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-deep-space">
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
                Summit Fitness, Denver
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-6">
                Summit Fitness is a 420-member independent gym in Denver,
                Colorado, that had been struggling with flat engagement metrics
                and a monthly churn rate hovering around 8%. After implementing
                GymWyse wearable integration in March 2025, the owner launched a
                gym-wide 90-day fitness challenge that leveraged wearable data
                for leaderboards and progress tracking. Within the first month,
                68% of active members connected at least one wearable device. Apple
                Watch accounted for 45% of connections, WHOOP for 22%, Garmin for
                18%, and Fitbit and Samsung Health for the remaining 15%. The
                leaderboard feature drove immediate engagement. Members began
                checking the app multiple times per day to see their ranking on
                steps, active minutes, and workout count. By the end of the 90-day
                challenge, Summit Fitness recorded a 35% increase in average weekly
                visits per member. Members who connected a wearable completed 4.1
                workouts per week on average, compared to 2.8 for non-connected
                members. The monthly churn rate dropped from 8% to 6.4%,
                representing a 20% reduction in member cancellations. The owner
                credited wearable integration as the single most impactful feature
                change in the gym's five-year history.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Engagement Increase", value: "+35%", detail: "Weekly visits per member" },
                  { label: "Churn Reduction", value: "-20%", detail: "Monthly cancellations" },
                  { label: "Wearable Adoption", value: "68%", detail: "Members connected" },
                  { label: "Workouts Per Week", value: "4.1", detail: "Connected members avg" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-electric-green mb-1 font-mono">
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

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              What Gym Owners Are Saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-electric-green">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-dim-gray mt-1">
                    {testimonial.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Common questions about wearable integration with GymWyse gym
              management software.
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

      {/* Final CTA Section */}
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
              Turn Wearable Data into Member Retention
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Join hundreds of gyms already using GymWyse to connect member
              wearables, drive engagement, and reduce churn. Book a 20-minute
              demo to see wearable integration in action, or use the ROI
              calculator to estimate the impact on your gym. No credit card
              required. No contract. No additional hardware. Start connecting
              wearables on day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray pt-2">
              Explore more:{" "}
              <Link
                href="/platform/member-app"
                className="text-sapphire-blue hover:underline"
              >
                Member App
              </Link>
              {" | "}
              <Link
                href="/solutions/reduce-churn"
                className="text-sapphire-blue hover:underline"
              >
                Reduce Churn
              </Link>
              {" | "}
              <Link
                href="/pricing"
                className="text-sapphire-blue hover:underline"
              >
                Pricing
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
