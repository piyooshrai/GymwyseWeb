"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingDown,
  TrendingUp,
  ChevronDown,
  CheckCircle,
  ExternalLink,
  Star,
  Target,
  CloudRain,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function SessionScheduleVisual() {
  const sessions = [
    { name: "Sunrise Bootcamp", time: "5:30 AM", venue: "Riverside Park", spots: "28/35", type: "Outdoor" },
    { name: "Lunchtime HIIT", time: "12:00 PM", venue: "Studio A", spots: "18/25", type: "Indoor" },
    { name: "After-Work Burn", time: "5:30 PM", venue: "Central Park", spots: "32/40", type: "Outdoor" },
    { name: "Saturday Sweat", time: "8:00 AM", venue: "Studio A", spots: "22/30", type: "Indoor" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            This Week&apos;s Sessions
          </span>
        </div>
        <span className="text-[9px] text-electric-green">4 sessions today</span>
      </div>
      <div className="space-y-1.5">
        {sessions.map((s, i) => (
          <motion.div
            key={s.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-pure-white">{s.name}</span>
              <span className="text-[7px] text-dim-gray">{s.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[7px] px-1 py-0.5 rounded ${s.type === "Outdoor" ? "text-sapphire-blue bg-sapphire-blue/10" : "text-electric-green bg-electric-green/10"}`}
              >
                {s.type}
              </span>
              <span className="text-[8px] font-mono text-electric-green">
                {s.spots}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WeatherCancellationVisual() {
  const forecast = [
    { day: "Mon", temp: "72F", condition: "Sunny", status: "Outdoor" },
    { day: "Tue", temp: "68F", condition: "Cloudy", status: "Outdoor" },
    { day: "Wed", temp: "55F", condition: "Rain", status: "Moved Indoor" },
    { day: "Thu", temp: "60F", condition: "Partly Cloudy", status: "Outdoor" },
    { day: "Fri", temp: "45F", condition: "Storm", status: "Moved Indoor" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <CloudRain className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Weather & Venue Status
          </span>
        </div>
        <span className="text-[9px] text-alert-red">2 moves this week</span>
      </div>
      <div className="space-y-1.5">
        {forecast.map((f, i) => (
          <motion.div
            key={f.day}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-pure-white w-6">{f.day}</span>
              <span className="text-[8px] text-dim-gray">{f.temp}</span>
              <span className="text-[8px] text-cool-gray">{f.condition}</span>
            </div>
            <span
              className={`text-[7px] px-1.5 py-0.5 rounded ${f.status === "Outdoor" ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}
            >
              {f.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChallengeProgramVisual() {
  const challenges = [
    { name: "6-Week Transformation", enrolled: 24, week: "Week 4/6", completion: "88%" },
    { name: "12-Week Body Comp", enrolled: 18, week: "Week 9/12", completion: "92%" },
    { name: "30-Day Kickstart", enrolled: 31, week: "Day 18/30", completion: "76%" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Target className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Active Challenges
          </span>
        </div>
        <span className="text-[9px] text-electric-green">73 participants</span>
      </div>
      <div className="space-y-1.5">
        {challenges.map((c, i) => (
          <motion.div
            key={c.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-pure-white">{c.name}</span>
              <span className="text-[7px] text-dim-gray">
                {c.enrolled} enrolled
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-cool-gray">{c.week}</span>
              <span className="text-[8px] font-mono text-electric-green">
                {c.completion}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HeartRateMonitorVisual() {
  const zones = [
    { zone: "Zone 1 (50-60%)", label: "Warm-up", pct: 8, color: "bg-blue-400" },
    { zone: "Zone 2 (60-70%)", label: "Fat Burn", pct: 22, color: "bg-green-400" },
    { zone: "Zone 3 (70-80%)", label: "Cardio", pct: 35, color: "bg-yellow-400" },
    { zone: "Zone 4 (80-90%)", label: "Threshold", pct: 28, color: "bg-orange-400" },
    { zone: "Zone 5 (90-100%)", label: "Max Effort", pct: 7, color: "bg-red-400" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            HR Zone Distribution
          </span>
        </div>
        <span className="text-[9px] text-electric-green">Class Average</span>
      </div>
      <div className="space-y-1.5">
        {zones.map((z, i) => (
          <motion.div
            key={z.zone}
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <span className="text-[7px] text-dim-gray w-12">{z.label}</span>
            <div className="flex-1 bg-[#0d1230] rounded-full h-3 border border-glass-border overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${z.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${z.pct}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <span className="text-[8px] font-mono text-electric-green w-6 text-right">
              {z.pct}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── FAQ data ─────────────────────── */

const faqData = [
  {
    question: "How does the weather venue-switching feature work?",
    answer:
      "When weather threatens an outdoor session, you tap the venue switch button on the session in your dashboard. The system immediately moves the session to your pre-configured indoor backup location and sends simultaneous notifications via push notification, SMS, and email to every registered participant. The notifications include the new venue address, directions, and a link to GPS navigation. Members who check the app will also see the updated venue in real-time. The entire process takes under 30 seconds from decision to full participant notification. Weather forecast data is also displayed on your scheduling dashboard so you can make proactive decisions hours ahead of session time.",
  },
  {
    question: "Can GymWyse handle sessions with 30 to 40 participants?",
    answer:
      "Yes. GymWyse is optimized for high-volume sessions typical of bootcamp operations. You can set capacity limits of any size for each session, and the registration system handles large-class check-ins efficiently with rapid mobile scan or self-check-in options. Waitlist management ensures you fill every available spot, and automatic waitlist promotion notifies participants when a spot opens. For sessions with 30-plus participants, the system supports group warm-up timers, section-based workout tracking, and heart rate zone displays that accommodate large participant counts on a single screen.",
  },
  {
    question: "How does drop-in registration work for new clients who have never used GymWyse?",
    answer:
      "New drop-in clients can register and pay for a session directly from their mobile phone in under 60 seconds. They scan a QR code at the session location or click a booking link you share on social media, enter their name, email, and payment information, sign a digital waiver, and they are checked in and ready to train. No app download is required for the first visit. After their session, automated follow-up sequences offer class pack upgrades, invite them to upcoming challenge programs, and eventually present membership offers with social proof from challenge results. This frictionless entry point converts casual walk-ups into paying members without any manual effort from your team.",
  },
  {
    question: "Does GymWyse support challenge programs like 6-week transformations?",
    answer:
      "Absolutely. The challenge program module supports programs of any duration with configurable milestones, progress tracking metrics including weigh-ins, body measurements, and progress photos, automated engagement sequences that celebrate completion milestones, participant leaderboards, and before-and-after photo galleries. Payment handling supports upfront pricing, installment plans, and early-bird discounts. The system tracks completion rates, dropout points, and challenge-to-membership conversion rates so you can optimize your programs over time. Most operators see challenge completion rates improve by 15 to 20 percentage points after implementing the automated engagement features.",
  },
  {
    question: "Which heart rate monitoring systems integrate with GymWyse?",
    answer:
      "GymWyse integrates with MyZone, Polar, Wahoo, and Garmin heart rate monitoring systems. During live sessions, heart rate data streams to a coach dashboard that can be displayed on a shared screen for participant motivation and accountability. Post-session, each participant receives a personalized performance summary showing time in each heart rate zone, estimated calorie burn, average and peak heart rate, and effort points. Long-term trend reports track cardiovascular fitness improvements over weeks and months. The integration works with both chest strap and armband heart rate monitors from supported brands.",
  },
  {
    question: "Can we manage multiple outdoor locations plus an indoor studio?",
    answer:
      "Yes. GymWyse supports unlimited venue locations, each with its own GPS coordinates, capacity limits, equipment lists, parking instructions, and amenity information. You can schedule sessions across multiple parks, beaches, fields, and indoor studios on the same day. Each venue has a designated indoor backup location for weather switching. Location-based check-in verifies that participants are at the correct venue, preventing confusion when concurrent sessions run at different outdoor locations. The scheduling calendar provides a color-coded venue view so you can see your full multi-location operation at a glance.",
  },
  {
    question: "How does GymWyse handle corporate wellness partnerships?",
    answer:
      "GymWyse includes a corporate group management module that supports dedicated session scheduling for company teams, company-level billing with invoice generation, employee roster management with attendance tracking, and participation reporting formatted for HR departments. You can create branded landing pages for each corporate partner, set custom pricing tiers for group rates, and track individual employee attendance and performance. The system also manages the transition when corporate participants want to continue training individually with a personal membership, ensuring seamless billing changes and class access updates.",
  },
  {
    question: "Is there a contract, and how does migration work?",
    answer:
      "There is no contract and no setup fee. GymWyse is $99 per month with a 14-day free trial, and you can cancel anytime. Migration from Zen Planner, Mindbody, Glofox, or any other platform typically takes three to five business days. Our onboarding team handles member data import, billing migration with no payment interruption, venue configuration including GPS coordinates for all your outdoor locations, challenge program setup, and trainer training sessions. Most bootcamp operators are fully operational on GymWyse within one week. We provide bootcamp-specific onboarding guides that cover multi-venue setup, weather workflows, challenge program configuration, and heart rate monitor integration.",
  },
];

/* ── Internal links ─────────────────────── */

const internalLinks = [
  { href: "/reduce-gym-member-churn", label: "Reduce Gym Member Churn" },
  { href: "/increase-gym-revenue", label: "Increase Gym Revenue" },
  { href: "/gym-class-scheduling", label: "Gym Class Scheduling" },
  { href: "/gym-billing-software", label: "Gym Billing Software" },
  { href: "/gym-payment-processing", label: "Gym Payment Processing" },
  { href: "/personal-training-software", label: "Personal Training Software" },
];

/* ── Main Page Component ─────────────────── */

export function VerticalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
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
      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for Bootcamp Operators
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Bootcamp Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software purpose-built for bootcamp
              operators running high-energy group fitness programs. From indoor
              and outdoor session management with weather-adaptive venue
              switching to challenge program tracking, heart rate monitoring
              integration, and drop-in friendly pricing, GymWyse gives bootcamp
              owners the tools to scale their operations while keeping the
              community energy that makes boot camps thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for Bootcamps
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join operators like Grit Athletics, Basecamp Fitness Co., and
              Frontline Bootcamp
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ GYM OPERATIONS BASICS ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
              The Operational Engine Behind Every Successful Bootcamp
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              Bootcamp businesses operate in a space that blends the intensity
              of group fitness with the logistical complexity of multi-venue
              operations. Unlike traditional gyms with fixed locations and
              permanent equipment, bootcamp operators often split their
              programming between indoor studio spaces and outdoor parks,
              fields, beaches, or parking lots. This dual-venue model introduces
              unique operational challenges that generic gym management software
              was never designed to handle. Membership management must
              accommodate a wider spectrum of commitment levels than almost any
              other fitness format: unlimited monthly members who attend five
              sessions per week, punch-card holders who show up twice per week,
              challenge-program participants on fixed-term commitments, and
              casual drop-in clients who pay per session and may never return or
              may become regulars over time. Check-in systems need to work
              reliably in outdoor environments where Wi-Fi is unavailable and
              cellular reception is inconsistent, requiring offline capability
              with automatic sync when connectivity returns.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              Scheduling for bootcamp operations carries complexity that most
              fitness software ignores entirely. Sessions run at high-volume
              capacity, often accommodating twenty to forty participants per
              session, requiring different registration logic than a twelve-
              person yoga class. Outdoor sessions depend on weather conditions
              that can change hourly, demanding rapid venue-switching workflows
              that notify all registered participants of location changes with
              enough lead time to redirect their commute. Billing must handle
              the flexible pricing structures that bootcamp clients expect:
              monthly unlimited passes, class packs of ten or twenty sessions,
              single drop-in rates, challenge-program fees paid upfront or in
              installments, and corporate group rates for workplace wellness
              partnerships. Failed payment recovery needs to be aggressive
              enough to capture revenue without alienating casual clients who
              represent a significant portion of bootcamp income.
            </p>
            <p className="text-soft-white leading-relaxed">
              Staff management in a bootcamp environment means coordinating
              coaches who may lead sessions across multiple outdoor locations
              and an indoor studio on the same day. Tracking trainer
              certifications for outdoor first aid, group fitness instruction,
              heart rate monitoring system proficiency, and CPR ensures
              compliance with insurance requirements and local park permits.
              Payroll for bootcamp trainers often blends per-session rates with
              bonus incentives tied to attendance numbers and challenge-program
              sales, creating variable compensation structures that require
              flexible tracking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Bootcamp Operators Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Weather Disruptions and Venue Chaos",
                description:
                  "Outdoor bootcamps live and die by the weather. When rain, extreme heat, or storms hit, operators must rapidly switch venues from parks to indoor spaces, notify every registered participant, and update all scheduling systems before session start time. Most operators handle this through a frantic chain of text messages and social media posts that inevitably miss participants, leading to confused clients standing in empty parks and eroding trust in the business. Without automated venue-switching workflows, weather disruptions become retention-threatening events.",
                stat: "Outdoor bootcamps lose 15-20% of attendees per weather disruption",
              },
              {
                icon: Users,
                title: "High-Volume Sessions and Drop-In Complexity",
                description:
                  "Bootcamp sessions routinely accommodate twenty to forty participants, far more than most group fitness classes. This high volume amplifies every operational friction point: check-in bottlenecks at session start, capacity management across multiple concurrent sessions, and the constant flow of drop-in clients who have not pre-registered and may not be in the system at all. Drop-in clients are a significant revenue source for bootcamps but the hardest to convert to recurring memberships without structured follow-up systems.",
                stat: "Drop-in clients represent 25-35% of bootcamp revenue",
              },
              {
                icon: TrendingDown,
                title: "Challenge Program Attrition",
                description:
                  "Challenge programs like six-week transformations and twelve-week body composition programs are the highest-margin revenue stream for bootcamp businesses. However, participant completion rates average only 60 to 70 percent, with dropouts concentrated in weeks three through five when initial motivation fades. Without automated engagement sequences, progress tracking dashboards, and milestone celebrations, operators watch their most profitable programs leak participants and the associated referral revenue that challenge completers generate.",
                stat: "30-40% of challenge program participants drop out by week 4",
              },
            ].map((pp, i) => {
              const Icon = pp.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {pp.description}
                  </p>
                  <span className="text-xs text-electric-green font-medium">
                    {pp.stat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ SOLUTION DEEP-DIVE ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Features Built for Bootcamp Operators
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Indoor + Outdoor Session Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Indoor and Outdoor Session Management with Venue Switching
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse understands that bootcamp operations span multiple
                venues, and it provides a scheduling system designed for that
                reality. Create sessions at outdoor locations like parks,
                beaches, sports fields, and car parks alongside your indoor
                studio sessions, each with its own capacity limits, equipment
                lists, and location details including GPS coordinates and
                parking instructions. When weather threatens an outdoor session,
                the one-click venue switch workflow moves the session to your
                designated indoor backup location and immediately sends push
                notifications, SMS messages, and email alerts to every
                registered participant with the updated address and directions.
                The system integrates with weather API data to provide
                forecasts on your scheduling dashboard, allowing you to make
                proactive venue decisions hours before session time rather than
                scrambling at the last minute. Historical weather pattern
                analysis helps you plan seasonal schedule adjustments, shifting
                more sessions indoors during winter months and maximizing
                outdoor programming during favorable seasons. Participants can
                see real-time venue status in the mobile app, eliminating the
                confusion that drives attendance drops during weather
                disruptions. For operators with multiple outdoor locations,
                location-based check-in verifies that participants are at the
                correct venue, preventing mix-ups across concurrent sessions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    One-click venue switching with automatic participant
                    notifications via push, SMS, and email
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Weather API integration with forecast dashboard for
                    proactive planning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    GPS-enabled location check-in for multi-venue outdoor
                    operations
                  </span>
                </li>
              </ul>
              <SessionScheduleVisual />
            </motion.div>

            {/* Feature 2: Weather Cancellation & Venue Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Challenge Programs and Transformation Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Challenge programs are the revenue engine of bootcamp
                businesses, and GymWyse provides a complete challenge
                management system that maximizes participant completion rates
                and converts completers into long-term members. Build custom
                challenge programs of any duration: thirty-day kickstarts,
                six-week transformations, eight-week summer shreds, and
                twelve-week body composition programs are all supported with
                configurable milestones, progress metrics, and automated
                engagement sequences. Participants track their progress
                through weigh-ins, body measurements, progress photos, and
                workout performance metrics, all logged in the mobile app
                with trend visualization that shows their transformation
                journey. Automated milestone celebrations trigger at key
                completion percentages, sending personalized congratulations
                messages that reinforce commitment during the critical mid-
                challenge dropout window. Leaderboards create healthy
                competition among participants, driving attendance and effort.
                Before-and-after photo galleries showcase results with
                participant consent, providing social proof that fuels
                future challenge enrollment. The system tracks conversion
                rates from challenge completion to ongoing membership,
                giving you clear visibility into which programs generate the
                best long-term member value. Payment handling supports
                upfront lump-sum pricing, installment plans, and early-bird
                discounts with automatic enrollment closing at capacity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Custom challenge durations with milestone tracking and
                    automated engagement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Progress photos, body measurements, and performance metric
                    dashboards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Challenge-to-membership conversion tracking and automated
                    follow-up
                  </span>
                </li>
              </ul>
              <ChallengeProgramVisual />
            </motion.div>

            {/* Feature 3: Heart Rate Monitoring Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Heart Rate Monitoring Integration and Performance Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Bootcamp participants increasingly expect data-driven training
                experiences, and GymWyse integrates with leading heart rate
                monitoring systems including MyZone, Polar, Wahoo, and Garmin
                to deliver real-time performance visibility during sessions and
                long-term progress tracking between them. During live sessions,
                coaches can display participant heart rate zones on a shared
                screen, creating accountability and motivation as clients push
                through intervals and see their effort reflected in real-time
                color-coded zone displays. Post-session summaries deliver
                personalized performance reports to each participant through
                the mobile app, showing time spent in each heart rate zone,
                estimated calorie burn, average and peak heart rate, and effort
                points earned. These metrics accumulate over time, giving
                participants a data-backed narrative of their fitness
                improvement that keeps them engaged far longer than subjective
                feelings of progress alone. Monthly and quarterly performance
                trend reports show resting heart rate improvements, zone
                distribution shifts toward higher-intensity sustained effort,
                and recovery rate improvements. For challenge programs, heart
                rate data provides objective evidence of cardiovascular fitness
                improvement that complements body composition changes, giving
                participants multiple measures of transformation success.
                Coaches can use aggregate class heart rate data to evaluate
                workout design effectiveness and adjust programming to hit
                target zone distributions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    MyZone, Polar, Wahoo, and Garmin heart rate monitor
                    integration
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Real-time zone display during sessions with coach dashboard
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Long-term cardiovascular trend tracking with monthly
                    progress reports
                  </span>
                </li>
              </ul>
              <HeartRateMonitorVisual />
            </motion.div>

            {/* Feature 4: Drop-In Friendly Pricing & Billing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Drop-In Friendly Pricing and Flexible Billing
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Bootcamp businesses serve a uniquely diverse clientele that
                ranges from committed daily attendees to casual drop-in
                visitors who may only attend once per month. GymWyse supports
                the full spectrum of pricing structures that bootcamp operators
                need: unlimited monthly memberships for dedicated regulars,
                class packs of five, ten, or twenty sessions that expire after
                a configurable period, single-session drop-in pricing for
                casual participants, challenge program fees with upfront and
                installment payment options, and corporate group rates for
                workplace wellness partnerships. The system makes it effortless
                for new drop-in clients to register and pay on their phone in
                under sixty seconds, removing the friction that causes walk-ups
                to walk away. After a drop-in session, automated follow-up
                sequences offer class pack upgrades at a per-session discount,
                then membership offers with social proof from challenge program
                results, systematically converting casual visitors into
                committed members. Referral tracking credits existing members
                when their guests convert to paying clients, incentivizing the
                word-of-mouth marketing that drives bootcamp growth. Family and
                couple pricing bundles encourage household enrollment. The
                billing engine handles proration for mid-month sign-ups,
                automatic class pack expiration warnings, failed payment
                recovery with smart dunning sequences, and detailed revenue
                reporting segmented by pricing tier so you can see which
                membership types drive the most value for your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    60-second mobile drop-in registration and payment for
                    walk-up clients
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automated drop-in to class-pack to membership conversion
                    sequences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Corporate group rates, referral tracking, and family
                    pricing bundles
                  </span>
                </li>
              </ul>
              <WeatherCancellationVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRY TRENDS ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Bootcamp Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the bootcamp and
              group fitness industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "HIIT Evolution Beyond Military-Style Training",
                description:
                  "The military-style bootcamp format that dominated the 2010s has evolved significantly. The aggressive, punishment-oriented approach is giving way to science-backed HIIT programming that emphasizes progressive overload, heart rate zone training, and periodized intensity. Bootcamp operators who have transitioned to data-driven, inclusive formats are seeing 30 percent higher retention rates compared to those clinging to the old-school yelling-and-burpees model. GymWyse supports this evolution with heart rate integration, workout tracking, and progressive programming tools that help coaches deliver evidence-based sessions.",
              },
              {
                title: "Hybrid Indoor-Outdoor Models as Standard",
                description:
                  "The hybrid indoor-outdoor bootcamp model has become the industry standard in 2026, with operators maintaining dedicated studio space while running outdoor sessions in parks and public spaces. This dual-venue approach provides weather resilience while preserving the outdoor training experience that differentiates bootcamps from studio fitness. Operators report that the flexibility to choose venues based on weather, season, and workout type increases member satisfaction and reduces weather-related attendance drops. GymWyse dual-venue scheduling with automated weather switching makes this model operationally seamless.",
              },
              {
                title: "Corporate Wellness Partnerships Driving B2B Revenue",
                description:
                  "Bootcamp operators are increasingly generating significant revenue through corporate wellness partnerships, offering dedicated sessions for company teams during lunch hours or after work. These B2B relationships provide predictable recurring revenue, fill off-peak session times, and create a pipeline of individual memberships when corporate participants continue training independently. GymWyse supports corporate group management with company-level billing, employee roster tracking, attendance reporting for HR departments, and dedicated session scheduling with custom branding for corporate clients.",
              },
            ].map((trend, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {trend.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CASE STUDY ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-l-4 border-l-electric-green"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-electric-green" />
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Case Study
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-pure-white mb-6">
              Grit Athletics, Denver, CO
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              Grit Athletics is a bootcamp operation in Denver running twenty-
              four sessions per week across three outdoor park locations and one
              indoor studio. Founder Megan Torres built the business from a
              single sunrise session in City Park to a 280-member operation with
              six trainers. Their biggest operational pain point was weather
              management. Denver weather is notoriously unpredictable, with
              afternoon thunderstorms, sudden temperature drops, and early-
              season snowfall regularly disrupting outdoor sessions. Megan
              estimated she spent three to four hours per week managing weather-
              related venue changes through a combination of text message
              blasts, Instagram stories, and Facebook group posts. Despite the
              effort, fifteen to twenty percent of participants still missed
              sessions during weather events because they did not see the
              notifications in time.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              After implementing GymWyse, Grit Athletics reduced weather-
              related attendance drops from twenty percent to under five
              percent. The one-click venue switch sends push notifications,
              SMS, and email simultaneously, reaching every registered
              participant within seconds. Challenge program completion rates
              improved from 62 percent to 84 percent through automated
              milestone celebrations and progress tracking dashboards that
              keep participants accountable during the mid-program motivation
              dip. Drop-in to membership conversion rates increased from 8
              percent to 22 percent with automated follow-up sequences.
              Megan now spends zero hours per week on venue management and
              reallocated that time to building two new corporate wellness
              partnerships that generate an additional $4,800 per month in
              recurring B2B revenue.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { metric: "Weather Attendance Loss", before: "20%", after: "<5%" },
                { metric: "Challenge Completion", before: "62%", after: "84%" },
                { metric: "Drop-In Conversion", before: "8%", after: "22%" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-deep-space/60 rounded-lg p-5 border border-glass-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-3">
                    {item.metric}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm text-alert-red font-mono line-through">
                      {item.before}
                    </span>
                    <ArrowRight className="w-4 h-4 text-electric-green" />
                    <span className="text-lg font-bold text-electric-green font-mono">
                      {item.after}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            What Bootcamp Operators Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "The weather venue-switching feature alone justified the switch to GymWyse. In Denver, we deal with unpredictable weather at least twice a week. Before GymWyse, I would spend an hour on my phone sending texts and posting on social media every time we needed to move indoors. Now it is literally one button press and every registered participant gets notified instantly. Our weather-related attendance drops went from twenty percent to practically zero. That is real revenue we were leaving on the table every single week.",
                author: "Megan Torres",
                role: "Founder, Grit Athletics",
                location: "Denver, CO",
              },
              {
                quote:
                  "Challenge programs are the lifeblood of our business, and GymWyse transformed how we run them. The automated milestone celebrations and progress tracking dashboards keep participants engaged through the weeks three and four slump where we used to lose a third of enrollees. Our completion rates jumped from sixty-something percent to over eighty percent, and completers convert to memberships at three times the rate of regular trial members. The ROI on challenge programs has been extraordinary since we started using GymWyse.",
                author: "Ryan Osei",
                role: "Owner, Basecamp Fitness Co.",
                location: "London, UK",
              },
              {
                quote:
                  "We run thirty-five-person sessions across two parks and a studio, and the drop-in registration is incredible. New people can sign up and pay on their phone in under a minute, which means no more clipboard sign-ups and lost contact information. The automated follow-up sequences convert our drop-ins into regular members at a rate we never achieved before. Last quarter, twenty-two percent of our drop-in visitors converted to monthly memberships. That is revenue growth on autopilot from people who would have just disappeared after one session.",
                author: "Sophie Nguyen",
                role: "Co-founder, Frontline Bootcamp",
                location: "Melbourne, Australia",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-electric-green fill-electric-green"
                    />
                  ))}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold text-sm">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-cool-gray">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              GymWyse vs Zen Planner
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Zen Planner for bootcamp
              operators and group fitness businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray">
                  Feature
                </div>
                <div className="p-4 md:p-6 text-sm font-semibold text-electric-green text-center">
                  GymWyse
                </div>
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray text-center">
                  Zen Planner
                </div>
              </div>
              {[
                { feature: "Indoor + Outdoor Venues", gymwyse: "Multi-venue native", competitor: "Single location" },
                { feature: "Weather Venue Switching", gymwyse: "One-click + alerts", competitor: "Not available" },
                { feature: "Challenge Programs", gymwyse: "Full management", competitor: "Basic only" },
                { feature: "Heart Rate Integration", gymwyse: "MyZone, Polar, etc.", competitor: "Not available" },
                { feature: "Drop-In Registration", gymwyse: "60-second mobile", competitor: "Manual process" },
                { feature: "High-Volume Classes (40+)", gymwyse: "Optimized", competitor: "Limited" },
                { feature: "Corporate Group Rates", gymwyse: "Built-in", competitor: "Manual" },
                { feature: "Pricing", gymwyse: "$99/mo flat", competitor: "$117+/mo tiered" },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 border-b border-glass-border/50 last:border-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 md:p-6 text-sm text-pure-white font-medium">
                    {row.feature}
                  </div>
                  <div className="p-4 md:p-6 text-sm text-electric-green text-center">
                    {row.gymwyse}
                  </div>
                  <div className="p-4 md:p-6 text-sm text-cool-gray text-center">
                    {row.competitor}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-6 text-center">
                Why Bootcamp Operators Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Weather-adaptive venue switching eliminates the attendance drops that cost outdoor bootcamps thousands in revenue every month during bad weather seasons.",
                  "Challenge program management with automated engagement drives completion rates above 80 percent, maximizing your highest-margin revenue stream.",
                  "Heart rate monitoring integration delivers the data-driven training experience that modern bootcamp participants expect and that differentiates your sessions from competitors.",
                  "Drop-in friendly pricing with automated conversion sequences turns casual visitors into committed members without any manual follow-up effort.",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-soft-white">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Common questions from bootcamp operators about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaqIndex === i}
                >
                  <span className="text-base font-semibold text-pure-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-glass-border/50 pt-4">
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

      {/* ═══════════ INTERNAL LINKS ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Explore More Solutions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Discover how GymWyse helps bootcamp operators tackle every aspect
              of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {internalLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="glass-card p-6 flex items-center justify-between group hover:border-electric-green/30 transition-colors block"
                >
                  <span className="text-sm font-medium text-pure-white group-hover:text-electric-green transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-dim-gray group-hover:text-electric-green transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple Pricing for Bootcamp Operators
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your bootcamp needs for $99 per month. No setup fees. No
            per-participant charges. No long-term contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Multi-Venue Scheduling + Weather Switching + Challenge Programs +
              Heart Rate Integration + Drop-In Registration + Billing +
              Member App + Analytics
            </div>
            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-dim-gray mt-6">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Scale Your Bootcamp Without the Chaos?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join hundreds of bootcamp operators who switched to GymWyse and
              eliminated weather disruptions, maximized challenge program
              completions, and converted more drop-in visitors into loyal
              members. Your participants deserve the best training experience,
              and your business deserves the management platform built to
              deliver it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </>
  );
}
