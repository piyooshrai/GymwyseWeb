"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingDown,
  DollarSign,
  TrendingUp,
  ChevronDown,
  CheckCircle,
  ExternalLink,
  Trophy,
  ClipboardList,
  Wrench,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function WODWhiteboardVisual() {
  const wod = [
    { movement: "Thrusters (95/65)", reps: "21-15-9" },
    { movement: "Pull-ups", reps: "21-15-9" },
  ];
  const leaderboard = [
    { name: "Mike R.", time: "3:42", rx: true },
    { name: "Sarah K.", time: "4:18", rx: true },
    { name: "Jake T.", time: "4:55", rx: false },
    { name: "Anna L.", time: "5:11", rx: true },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <ClipboardList className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            WOD: Fran
          </span>
        </div>
        <span className="text-[9px] text-electric-green">Benchmark</span>
      </div>
      <div className="space-y-1 mb-3">
        {wod.map((w, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-1 px-2 bg-[#0d1230] rounded border border-glass-border"
          >
            <span className="text-[9px] text-pure-white">{w.movement}</span>
            <span className="text-[9px] font-mono text-electric-green">
              {w.reps}
            </span>
          </div>
        ))}
      </div>
      <div className="text-[8px] text-dim-gray mb-2">Leaderboard</div>
      <div className="space-y-1">
        {leaderboard.map((l, i) => (
          <motion.div
            key={l.name}
            className="flex items-center justify-between py-1 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1">
              <span className="text-[9px] text-dim-gray">#{i + 1}</span>
              <span className="text-[9px] text-pure-white">{l.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-electric-green">
                {l.time}
              </span>
              <span
                className={`text-[7px] px-1 py-0.5 rounded ${l.rx ? "text-electric-green bg-electric-green/10" : "text-cool-gray bg-cool-gray/10"}`}
              >
                {l.rx ? "Rx" : "Scaled"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CompetitionTrackerVisual() {
  const events = [
    { event: "Back Squat 1RM", result: "315 lb", pr: true },
    { event: "Fran", result: "3:42", pr: true },
    { event: "Murph", result: "38:22", pr: false },
    { event: "Clean & Jerk", result: "225 lb", pr: false },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Trophy className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            PR Tracking
          </span>
        </div>
        <span className="text-[9px] text-electric-green">2 new PRs</span>
      </div>
      <div className="space-y-1.5">
        {events.map((e, i) => (
          <motion.div
            key={e.event}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <span className="text-[9px] text-pure-white">{e.event}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-electric-green">
                {e.result}
              </span>
              {e.pr && (
                <span className="text-[7px] px-1 py-0.5 rounded bg-electric-green/10 text-electric-green">
                  PR
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EquipmentMaintenanceVisual() {
  const equipment = [
    { name: "Rogue Barbells (20)", status: "Good", due: "Mar 15" },
    { name: "Concept2 Rowers (8)", status: "Service Due", due: "Feb 28" },
    { name: "Assault Bikes (6)", status: "Good", due: "Apr 1" },
    { name: "Pull-up Rig", status: "Inspection", due: "Mar 5" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Wrench className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Equipment Status
          </span>
        </div>
        <span className="text-[9px] text-alert-red">1 service due</span>
      </div>
      <div className="space-y-1.5">
        {equipment.map((eq, i) => (
          <motion.div
            key={eq.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <span className="text-[9px] text-pure-white">{eq.name}</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-[8px] px-1.5 py-0.5 rounded ${eq.status === "Good" ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}
              >
                {eq.status}
              </span>
              <span className="text-[8px] text-dim-gray">{eq.due}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MembershipTiersVisual() {
  const tiers = [
    { tier: "Barbell Club", members: 34, revenue: "$3,400" },
    { tier: "Unlimited", members: 128, revenue: "$19,200" },
    { tier: "Open Gym", members: 52, revenue: "$3,640" },
    { tier: "Drop-In", members: 18, revenue: "$360" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Membership Tiers
          </span>
        </div>
        <span className="text-[9px] text-electric-green">$26,600/mo</span>
      </div>
      <div className="space-y-1.5">
        {tiers.map((t, i) => (
          <motion.div
            key={t.tier}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-pure-white">{t.tier}</span>
              <span className="text-[8px] text-dim-gray">
                {t.members} members
              </span>
            </div>
            <span className="text-[10px] font-mono text-electric-green">
              {t.revenue}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
              Built for CrossFit Affiliates
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              CrossFit Gym Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software purpose-built for CrossFit
              affiliates. From WOD programming and whiteboard leaderboards to
              competition tracking and barbell club memberships, GymWyse gives
              box owners the tools to run high-performance communities without
              drowning in spreadsheets or duct-taped tech stacks.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for CrossFit Boxes
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join affiliates like Iron Republic CrossFit, CrossFit Progression,
              and Summit Athletics
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
              The Operational Backbone of Every CrossFit Box
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              Running a CrossFit affiliate demands more than coaching chops and a
              love of barbell complexes. Behind every thriving box is a web of
              operational systems that must work seamlessly: membership management
              that handles the unique tier structures CrossFit demands, from
              unlimited class passes and barbell-club-only memberships to open gym
              access and punch cards for drop-in athletes visiting from other
              affiliates. Check-in systems need to be fast, reliable, and capable
              of handling the rush when thirty athletes show up at 5:30 AM for the
              first class of the day. Self-service kiosks, app-based check-ins,
              and RFID wristband scans all need to funnel data back into a single
              source of truth.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              Scheduling in a CrossFit environment is uniquely complex. You are
              not just booking yoga mats in a heated room. You are managing
              capacity-limited classes that rotate through Olympic lifting,
              gymnastics, metabolic conditioning, and specialty sessions like
              engine-builder or competitor tracks. Each class might require
              specific equipment allocations: enough barbells, enough rowers,
              enough pull-up stations. Billing must accommodate annual
              commitments, monthly autopay, family plans, military discounts, and
              the inevitable freeze requests when members deploy, travel, or
              recover from injury. Failed payment recovery, dunning sequences, and
              proration logic need to run automatically so coaches can focus on
              coaching instead of chasing down credit card updates.
            </p>
            <p className="text-soft-white leading-relaxed">
              Staff management rounds out the operational picture. CrossFit boxes
              rely on a mix of full-time head coaches, part-time class coaches,
              and specialty instructors for Olympic lifting clinics or nutrition
              seminars. Tracking coach certifications, ensuring CF-L1 and CF-L2
              credentials stay current, scheduling coach coverage across morning,
              noon, and evening slots, and managing payroll for a blend of
              salaried and hourly team members are all tasks that consume
              significant owner bandwidth when handled manually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges CrossFit Affiliates Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "WOD Programming Chaos",
                description:
                  "Most box owners still program WODs in spreadsheets, Instagram posts, or whiteboard photos. There is no centralized system connecting the workout of the day to athlete performance data, scaling options, or historical benchmarks. Coaches waste hours each week re-entering data that should flow automatically from programming to athlete tracking to the digital whiteboard.",
                stat: "Average box owner spends 6+ hours/week on programming admin",
              },
              {
                icon: Users,
                title: "Member Retention in a High-Churn Sport",
                description:
                  "CrossFit has an intensity barrier that drives new-member dropout within the first 90 days. Without structured onboarding sequences, automated check-in milestone celebrations, and early-warning churn detection, affiliates lose members before they ever experience the community that keeps long-term athletes loyal for years.",
                stat: "42% of new CrossFit members quit within 90 days",
              },
              {
                icon: TrendingDown,
                title: "Revenue Leakage from Complex Pricing",
                description:
                  "CrossFit boxes juggle more pricing tiers than most fitness businesses: unlimited memberships, limited punch cards, barbell club add-ons, open gym passes, drop-in fees, competition team dues, and retail merchandise. Manual tracking means missed payments, incorrect proration, and revenue that slips through the cracks every single month.",
                stat: "Affiliates lose an average of $800/month to billing errors",
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
            Features Built for CrossFit Affiliates
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: WOD Programming & Whiteboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                WOD Programming and Digital Whiteboard
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse transforms how you program and deliver workouts to your
                athletes. Build entire training cycles with our drag-and-drop
                programming interface, then publish WODs directly to the member
                app and the in-gym digital whiteboard. Athletes see the workout
                of the day with full movement descriptions, scaling options for
                Rx, Rx+, and scaled tracks, and embedded video demos for complex
                movements like kipping muscle-ups or squat snatches. Benchmark
                WODs like Fran, Murph, Grace, Diane, and Isabel are pre-loaded
                with historical tracking so athletes can see their progress over
                months and years. The leaderboard updates in real time as
                coaches enter scores, creating the competitive energy that makes
                CrossFit communities thrive. Program strength cycles, accessory
                work, and skill progressions alongside your daily metcons, all
                from a single calendar view that your coaching staff can
                collaborate on in real time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Pre-loaded benchmark WODs with historical PR tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Real-time leaderboard with Rx/Scaled/Rx+ designations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Multi-coach programming collaboration with approval workflows
                  </span>
                </li>
              </ul>
              <WODWhiteboardVisual />
            </motion.div>

            {/* Feature 2: Competition & PR Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Competition Tracking and Athlete Performance
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Whether your athletes compete in local throwdowns, Sanctional
                events, or the CrossFit Games Quarterfinals and Semifinals,
                GymWyse provides a complete competition management suite.
                Register athletes for upcoming events, track their preparation
                with dedicated competition programming tracks, and log results
                across every competition they enter. The athlete profile
                dashboard centralizes every PR, every benchmark score, every
                competition placement, and every body composition measurement in
                one place. Athletes can set goals, track their one-rep maxes for
                every major lift, monitor their gymnastics progression from
                strict pull-ups through butterfly muscle-ups, and compare their
                performance against box averages and global percentiles. For
                in-house throwdowns, GymWyse handles event creation, heat
                scheduling, scoring, and real-time results broadcasting to
                spectators via a public leaderboard link that you can share on
                social media and display on gym screens.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    In-house throwdown event management with heat scheduling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    One-rep max tracking for all major lifts with progress graphs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Quarterfinals and Semifinals prep programming templates
                  </span>
                </li>
              </ul>
              <CompetitionTrackerVisual />
            </motion.div>

            {/* Feature 3: Equipment Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Equipment Maintenance and Inventory Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                CrossFit affiliates invest tens of thousands of dollars in
                specialized equipment: competition barbells, bumper plate sets,
                Concept2 rowers, SkiErgs, Assault Bikes, GHDs, plyo boxes, and
                elaborate pull-up rigs. Protecting that investment requires
                systematic maintenance tracking that most box owners handle with
                sticky notes and good intentions. GymWyse provides a complete
                equipment asset register with serial numbers, purchase dates,
                warranty information, and automated maintenance schedules.
                Receive alerts when rowers need their chain lubricated, when
                barbells need bearing maintenance, when resistance bands should
                be inspected for wear, and when pull-up rig bolts need
                retorquing. Coaches can flag equipment issues directly from the
                app during class, creating a maintenance ticket that routes to
                the appropriate staff member. Track equipment utilization
                patterns to inform purchasing decisions, understand which pieces
                need replacement, and budget for capital expenditures with
                data-driven confidence instead of guesswork.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automated maintenance schedules for barbells, rowers, and
                    bikes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    In-class equipment issue flagging with maintenance ticketing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Equipment utilization analytics for smarter purchasing
                  </span>
                </li>
              </ul>
              <EquipmentMaintenanceVisual />
            </motion.div>

            {/* Feature 4: Membership Tiers & Billing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                CrossFit-Specific Membership Tiers and Automated Billing
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                CrossFit affiliates need membership structures that mirror how
                their communities actually operate. GymWyse supports unlimited
                class memberships for your core athletes, limited punch cards
                for members who attend two or three times per week, barbell
                club memberships for Olympic lifting enthusiasts who want
                dedicated platform time, open gym passes for experienced
                athletes who prefer self-directed training, and drop-in day
                passes for visiting CrossFitters from other affiliates.
                Competition team memberships can include extra programming
                access and dedicated competitor-track class reservations.
                Family plans with automatic sibling discounts, military and
                first-responder pricing, and student rates are all configurable
                without custom coding. The billing engine handles proration
                when members upgrade or downgrade mid-cycle, automatic failed
                payment retry sequences with customizable dunning emails,
                annual commitment discounts with early termination fee
                calculations, and detailed revenue reporting broken down by
                membership tier so you can see exactly which programs drive
                your bottom line.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Unlimited, punch card, barbell club, open gym, and drop-in
                    tiers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automatic proration, dunning emails, and failed payment
                    recovery
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Revenue analytics by membership tier, coach, and time period
                  </span>
                </li>
              </ul>
              <MembershipTiersVisual />
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
              CrossFit Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the CrossFit
              affiliate industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Masters Divisions Driving Growth",
                description:
                  "The fastest-growing demographic in CrossFit is the 35-plus Masters athlete. Affiliates that offer Masters-specific programming, scaled progressions for aging bodies, and community events targeting this demographic are seeing 25 percent higher retention rates than boxes that treat all athletes identically. GymWyse supports age-group segmentation in programming, allowing coaches to deliver modified stimulus targets for Masters athletes within the same class structure.",
              },
              {
                title: "Adaptive CrossFit Expanding Access",
                description:
                  "Adaptive CrossFit has grown from a niche program into a mainstream movement, with more affiliates than ever offering seated, upper-extremity, lower-extremity, and intellectual adaptive divisions. The community is pushing for inclusivity, and boxes that embrace adaptive programming are attracting new member demographics and positive community visibility. GymWyse supports adaptive scaling tracks in WOD programming so coaches can serve every athlete from a single platform.",
              },
              {
                title: "Hybrid Programming and Remote Coaching",
                description:
                  "The post-pandemic CrossFit landscape has permanently shifted toward hybrid models. Athletes expect access to programming whether they train at the affiliate or in a garage gym while traveling. Boxes that offer remote programming as a membership tier are generating incremental revenue from members who relocate, travel frequently, or supplement in-gym training with home workouts. GymWyse delivers remote programming through the member app with video logging and coach feedback loops.",
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
              Iron Republic CrossFit, Austin, TX
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              Iron Republic CrossFit opened in 2019 with 45 founding members and
              a single coach. By 2024 they had grown to 210 members across four
              coaches, but their tech stack was falling apart. WODs were
              programmed in Google Sheets, scores tracked on SugarWOD, billing
              handled through Zen Planner, and communication scattered across
              Instagram DMs, a private Facebook group, and email. Owner Marcus
              Delgado spent twelve hours per week on administrative tasks that
              had nothing to do with coaching or community building.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              After migrating to GymWyse, Iron Republic consolidated all
              operations into a single platform. WOD programming now flows
              directly from the coach planning calendar to the member app and
              in-gym whiteboard display. The leaderboard drives daily engagement,
              with members logging scores directly from their phones. Automated
              billing recovered $1,200 per month in previously failed payments
              through smart dunning sequences. The competition tracking module
              helped them run three in-house throwdowns in one year, generating
              $8,400 in event revenue. Marcus now spends three hours per week on
              admin instead of twelve, and member retention improved from 71
              percent to 89 percent within six months.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { metric: "Admin Time", before: "12 hrs/wk", after: "3 hrs/wk" },
                { metric: "Member Retention", before: "71%", after: "89%" },
                { metric: "Revenue Recovery", before: "$0", after: "$1,200/mo" },
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
            What CrossFit Owners Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "GymWyse replaced three separate tools we were using for programming, billing, and member communication. The WOD whiteboard feature alone saves our coaches forty-five minutes every single day. Our athletes love the leaderboard and PR tracking in the app, and our retention numbers have never been better. Switching was the best business decision we made all year.",
                author: "Marcus Delgado",
                role: "Owner, Iron Republic CrossFit",
                location: "Austin, TX",
              },
              {
                quote:
                  "We run a competition team of twenty-two athletes who qualified for Quarterfinals this year. GymWyse lets us deliver separate competitor programming alongside our general classes without any confusion. The performance tracking dashboard gives our athletes the data they need to peak at the right time. We could not manage this level of athlete development without it.",
                author: "Fiona Chambers",
                role: "Head Coach, CrossFit Tidewater",
                location: "Norfolk, VA",
              },
              {
                quote:
                  "As a box with 180 members and six coaches, keeping everyone on the same page was a nightmare before GymWyse. Now our programming calendar syncs across all coaches, equipment maintenance alerts keep our gear in top shape, and the billing automation recovered over nine hundred dollars in our first month from failed payments we would have just written off. I genuinely do not know how we operated without it.",
                author: "Liam Hartley",
                role: "Owner, CrossFit Southern Grit",
                location: "Brisbane, Australia",
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
              See how GymWyse stacks up against Zen Planner for CrossFit
              affiliates.
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
                { feature: "WOD Programming & Whiteboard", gymwyse: "Built-in", competitor: "Third-party required" },
                { feature: "Benchmark WOD Tracking", gymwyse: "50+ pre-loaded", competitor: "Manual entry only" },
                { feature: "Real-time Leaderboard", gymwyse: "Included", competitor: "Not available" },
                { feature: "Competition Management", gymwyse: "Full suite", competitor: "Basic only" },
                { feature: "Equipment Maintenance", gymwyse: "Automated alerts", competitor: "Not available" },
                { feature: "PR Tracking & Analytics", gymwyse: "Advanced graphs", competitor: "Basic logging" },
                { feature: "Multi-tier Memberships", gymwyse: "Unlimited tiers", competitor: "Limited" },
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
                Why CrossFit Affiliates Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Consolidated WOD programming eliminates the need for SugarWOD or BTWB subscriptions, saving $50 or more per month on top of the switch.",
                  "Real-time leaderboards and PR tracking drive the competitive community engagement that keeps CrossFit athletes loyal for years.",
                  "Equipment maintenance automation protects your five-figure equipment investment and reduces unexpected breakdown costs.",
                  "Flat $99 per month pricing with no per-member fees means your costs stay predictable even as your affiliate grows to 200-plus members.",
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
              Common questions from CrossFit affiliate owners about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Can GymWyse replace SugarWOD or Beyond the Whiteboard for WOD tracking?",
                answer:
                  "Yes. GymWyse includes a complete WOD programming and tracking system with a digital whiteboard, real-time leaderboards, benchmark WOD tracking for over 50 named workouts, and athlete PR logging. Most affiliates eliminate their SugarWOD or BTWB subscription entirely after switching, saving an additional $50 to $75 per month. Athletes can log scores from their phones, view historical performance data, and track progress across every benchmark and custom workout you program.",
              },
              {
                question: "How does GymWyse handle CrossFit-specific membership tiers like barbell club and open gym?",
                answer:
                  "GymWyse supports unlimited custom membership tiers with independent pricing, access rules, and class reservation permissions. You can configure unlimited class memberships, limited punch cards, barbell-club-only memberships that grant access to specific open platform hours, open gym passes, drop-in day passes, and competition team add-ons. Each tier can have its own billing cycle, cancellation policy, and automatic upgrade or downgrade paths. Family plans with percentage-based sibling discounts are also built in.",
              },
              {
                question: "Can we track equipment maintenance for barbells, rowers, and assault bikes?",
                answer:
                  "Absolutely. GymWyse includes a full equipment asset management system where you register every piece of gear with purchase dates, warranty information, and serial numbers. Set automated maintenance schedules for rower chain lubrication, barbell bearing service, assault bike calibration, and pull-up rig bolt inspections. Coaches can flag equipment issues during class, creating maintenance tickets that route to the responsible staff member. You will also get utilization analytics to inform future purchasing decisions.",
              },
              {
                question: "Does GymWyse support in-house competition and throwdown management?",
                answer:
                  "Yes. The competition module lets you create multi-event throwdowns with customizable scoring systems, heat scheduling based on athlete registration, real-time score entry by judges, and automatic leaderboard calculations. You can generate a public leaderboard link to share on social media and display on gym TVs during the event. Athlete registration and payment collection are handled within the platform, making it easy to run quarterly throwdowns as both community events and revenue generators.",
              },
              {
                question: "How does the system handle the CrossFit Open and Quarterfinals prep?",
                answer:
                  "GymWyse allows you to create dedicated competition prep programming tracks that run alongside your regular class programming. Athletes enrolled in the competitor track see their additional workouts in the app alongside the daily WOD. During the Open season, you can set up weekly Open workout logging with automatic ranking against your box members. For Quarterfinals prep, the system supports periodized programming blocks with progressive overload tracking to help athletes peak at the right time.",
              },
              {
                question: "What reporting and analytics does GymWyse provide for CrossFit boxes?",
                answer:
                  "GymWyse provides comprehensive analytics including revenue breakdown by membership tier, attendance patterns by class time and day of week, member retention curves with early-warning churn indicators, coach utilization metrics, equipment usage reports, and new member conversion funnel tracking. The dashboard gives you at-a-glance visibility into your box health with key metrics like monthly recurring revenue, average revenue per member, class attendance rates, and member lifetime value calculations.",
              },
              {
                question: "Can members book classes and log scores from their phones?",
                answer:
                  "Yes. The GymWyse member app is available for iOS and Android and gives athletes everything they need: class schedule browsing and booking with waitlist support, WOD previews with scaling options, score logging with Rx, scaled, and Rx-plus designations, PR tracking across all benchmarks and lifts, leaderboard viewing, and account management including payment method updates and membership freezes. Push notifications alert members to WOD postings, class reminders, PR celebrations, and billing updates.",
              },
              {
                question: "Is there a contract or setup fee, and how long does migration take?",
                answer:
                  "There is no contract and no setup fee. GymWyse is $99 per month with a 14-day free trial, and you can cancel anytime. Migration from Zen Planner, Wodify, PushPress, or any other platform typically takes three to five business days. Our onboarding team handles member data import, billing migration with no payment interruption, WOD history transfer where available, and coach training sessions. Most affiliates are fully operational on GymWyse within one week of starting the migration process.",
              },
            ].map((item, i) => (
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
              Discover how GymWyse helps CrossFit affiliates tackle every aspect
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
            Simple Pricing for CrossFit Affiliates
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your box needs for $99 per month. No setup fees. No
            per-member charges. No long-term contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              WOD Programming + Whiteboard + PR Tracking + Billing + Member App
              + Equipment Management + Competition Tools + Revenue Analytics
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
              Ready to Run Your Box Like a Business?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join hundreds of CrossFit affiliates who switched to GymWyse and
              reclaimed hours every week while growing their membership and
              revenue. Your athletes deserve the best community experience, and
              your business deserves the best management platform.
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
