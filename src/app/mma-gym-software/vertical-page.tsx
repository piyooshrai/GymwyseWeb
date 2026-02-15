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
  Award,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── Feature visuals ─────────────────────── */

function DisciplineScheduleVisual() {
  const disciplines = [
    { name: "BJJ Fundamentals", time: "6:00 AM", coach: "Prof. Silva", spots: "16/20" },
    { name: "Muay Thai", time: "7:30 AM", coach: "Kru Patel", spots: "12/18" },
    { name: "Boxing", time: "12:00 PM", coach: "Coach Williams", spots: "8/15" },
    { name: "Wrestling", time: "5:30 PM", coach: "Coach Novak", spots: "14/16" },
    { name: "MMA Sparring", time: "7:00 PM", coach: "Coach Reyes", spots: "10/12" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Today&apos;s Schedule
          </span>
        </div>
        <span className="text-[9px] text-electric-green">5 classes</span>
      </div>
      <div className="space-y-1.5">
        {disciplines.map((d, i) => (
          <motion.div
            key={d.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-pure-white">{d.name}</span>
              <span className="text-[7px] text-dim-gray">{d.coach}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-dim-gray">{d.time}</span>
              <span className="text-[8px] font-mono text-electric-green">
                {d.spots}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BeltProgressionVisual() {
  const students = [
    { name: "Alex M.", belt: "Purple", stripes: 3, discipline: "BJJ" },
    { name: "Jordan K.", belt: "Blue", stripes: 4, discipline: "BJJ" },
    { name: "Sam T.", belt: "Brown", stripes: 1, discipline: "BJJ" },
    { name: "Priya R.", belt: "Green", stripes: 2, discipline: "Muay Thai" },
  ];
  const beltColors: Record<string, string> = {
    Purple: "bg-purple-500",
    Blue: "bg-blue-500",
    Brown: "bg-amber-800",
    Green: "bg-green-500",
  };
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Award className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Belt Progression
          </span>
        </div>
        <span className="text-[9px] text-electric-green">2 promotions due</span>
      </div>
      <div className="space-y-1.5">
        {students.map((s, i) => (
          <motion.div
            key={s.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${beltColors[s.belt]}`} />
              <span className="text-[9px] text-pure-white">{s.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-dim-gray">{s.discipline}</span>
              <span className="text-[8px] text-cool-gray">
                {s.belt} ({s.stripes} stripes)
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FightCampVisual() {
  const fighters = [
    { name: "Carlos R.", fight: "Mar 15", camp: "Week 6/8", status: "On Track" },
    { name: "Aisha K.", fight: "Apr 2", camp: "Week 3/10", status: "On Track" },
    { name: "Tommy L.", fight: "Mar 22", camp: "Week 7/8", status: "Weight Cut" },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Target className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Active Fight Camps
          </span>
        </div>
        <span className="text-[9px] text-electric-green">3 fighters</span>
      </div>
      <div className="space-y-1.5">
        {fighters.map((f, i) => (
          <motion.div
            key={f.name}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-pure-white">{f.name}</span>
              <span className="text-[7px] text-dim-gray">Fight: {f.fight}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-cool-gray">{f.camp}</span>
              <span
                className={`text-[7px] px-1.5 py-0.5 rounded ${f.status === "On Track" ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}
              >
                {f.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WaiverTrackingVisual() {
  const waivers = [
    { member: "New Sign-up: Jake P.", type: "Liability Waiver", status: "Signed", ok: true },
    { member: "Renewal: Maria S.", type: "Sparring Consent", status: "Pending", ok: false },
    { member: "New Sign-up: Tom H.", type: "Liability Waiver", status: "Signed", ok: true },
    { member: "Injury: Lee W.", type: "Medical Clearance", status: "Awaiting", ok: false },
  ];
  return (
    <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <FileText className="w-3 h-3 text-sapphire-blue" />
          <span className="text-[10px] text-pure-white font-medium">
            Waivers & Compliance
          </span>
        </div>
        <span className="text-[9px] text-alert-red">2 pending</span>
      </div>
      <div className="space-y-1.5">
        {waivers.map((w, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between py-1.5 px-2 bg-[#0d1230] rounded border border-glass-border"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-pure-white">{w.member}</span>
              <span className="text-[7px] text-dim-gray">{w.type}</span>
            </div>
            <span
              className={`text-[8px] px-1.5 py-0.5 rounded ${w.ok ? "text-electric-green bg-electric-green/10" : "text-alert-red bg-alert-red/10"}`}
            >
              {w.status}
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
              Built for MMA Gyms and Combat Sports Academies
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              MMA Gym Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              GymWyse is the gym management software built specifically for MMA
              gyms, martial arts academies, and combat sports facilities. From
              multi-discipline scheduling across BJJ, Muay Thai, Boxing, and
              Wrestling to belt progression tracking, fight camp management, and
              liability waiver compliance, GymWyse gives academy owners the
              tools to run world-class training programs without the
              administrative chaos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for MMA Gyms
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join academies like Warrior Academy, Elite Combat Athletics, and
              Iron Fist MMA
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
              The Operational Reality of Running an MMA Academy
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              MMA gyms are among the most operationally complex fitness
              businesses in the industry. Unlike a single-discipline studio, a
              mixed martial arts academy must coordinate scheduling across four
              to six distinct combat disciplines: Brazilian Jiu-Jitsu with its
              gi and no-gi variations, Muay Thai kickboxing, Western boxing,
              freestyle and Greco-Roman wrestling, and combined MMA classes that
              blend everything together. Each discipline has its own instructor
              roster, equipment requirements, class capacity limits, and student
              progression systems. Membership management must accommodate
              students who train in a single discipline alongside those who
              cross-train in three or four, each paying different rates for
              different levels of access. Check-in systems must track not just
              attendance but which discipline a student trained in, enabling
              coaches to monitor training frequency across arts and identify
              students who may be overtraining or neglecting foundational work.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              Billing in an MMA academy is layered with complexity. A single-
              discipline membership costs less than an all-access pass. Private
              lessons with head instructors carry premium pricing. Fight camp
              fees for competitive fighters cover specialized training blocks.
              Testing fees for belt and rank promotions add periodic charges.
              Equipment rental programs for trial students, family discounts for
              parents training alongside their children, and youth program
              pricing all require flexible billing logic that most generic gym
              software cannot accommodate. Staff management extends beyond
              scheduling to credential tracking: BJJ black belt certifications
              under recognized federations, coaching licenses for combat sports,
              first aid and CPR certifications that must stay current, and
              background checks for instructors working with youth students.
            </p>
            <p className="text-soft-white leading-relaxed">
              The legal and compliance dimension sets MMA gyms apart from every
              other fitness vertical. Combat sports carry inherent injury risk,
              making liability waivers not just advisable but essential for
              business survival. Every new student must sign comprehensive
              liability releases before stepping on the mat. Sparring consent
              forms require separate signatures. Injury incident reports must be
              filed systematically for insurance purposes. Medical clearance
              documentation for students returning from injury needs tracking
              and verification. Without a centralized system managing this
              compliance documentation, academies expose themselves to
              significant legal and financial risk with every training session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges MMA Gyms Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Multi-Discipline Scheduling Nightmares",
                description:
                  "Coordinating five or more martial arts disciplines across shared mat space, with different instructors, equipment needs, and capacity limits for each class is a logistical puzzle that breaks generic scheduling tools. Double-bookings, instructor conflicts, and mat space allocation errors waste student time and erode trust in the academy. Most gyms resort to static paper schedules that cannot adapt when instructors call in sick or class demand shifts.",
                stat: "MMA gyms average 30+ classes per week across 4-6 disciplines",
              },
              {
                icon: Users,
                title: "Belt Progression and Student Retention",
                description:
                  "Martial arts students expect structured progression through belt and rank systems that can span years. Without systematic tracking of attendance minimums, technique assessments, and time-in-rank requirements, promotion decisions become inconsistent and subjective. Students who feel overlooked for promotion or unclear about their path forward leave for competing academies. Tracking progression across multiple disciplines for cross-training students compounds the difficulty exponentially.",
                stat: "65% of martial arts students who quit cite unclear progression",
              },
              {
                icon: TrendingDown,
                title: "Liability Exposure and Compliance Gaps",
                description:
                  "Combat sports carry the highest injury liability of any fitness vertical. A single missing waiver, an unsigned sparring consent form, or an undocumented injury incident can expose the academy to lawsuits that threaten the entire business. Many MMA gyms track waivers with paper files in filing cabinets, making it impossible to quickly verify compliance status when an incident occurs. Expired medical clearances for returning fighters create additional liability windows.",
                stat: "Average combat sports liability claim exceeds $45,000",
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
            Features Built for MMA Academies
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Multi-Discipline Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Multi-Discipline Scheduling Engine
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse was designed from the ground up to handle the scheduling
                complexity that defines MMA academies. Create and manage class
                schedules across BJJ gi, BJJ no-gi, Muay Thai, Boxing, Wrestling,
                MMA, and any additional disciplines your academy offers, all from
                a single calendar interface. Each class type carries its own
                capacity limits based on available mat space and equipment. The
                system automatically prevents double-booking of training areas
                and instructors, eliminating the scheduling conflicts that plague
                academies relying on Google Calendar or paper schedules. When an
                instructor calls in sick, the substitute assignment workflow
                notifies qualified replacement coaches and automatically updates
                the member-facing schedule. Students can filter the schedule by
                discipline, instructor, skill level, and time slot, booking
                their preferred classes directly from the mobile app. Waitlist
                management ensures that popular classes like Friday night
                sparring sessions fill every available spot without overbooking
                the mat space. Recurring schedule templates let you build your
                weekly class structure once and apply it across months, with easy
                overrides for holidays and special events.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Separate scheduling for BJJ, Muay Thai, Boxing, Wrestling,
                    and MMA classes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automatic conflict detection for mat space and instructor
                    availability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Instructor substitute assignment with automatic member
                    notifications
                  </span>
                </li>
              </ul>
              <DisciplineScheduleVisual />
            </motion.div>

            {/* Feature 2: Belt & Rank Progression */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Belt and Rank Progression Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Structured progression is the backbone of student retention in
                martial arts, and GymWyse provides the most comprehensive rank
                tracking system available for combat sports academies. Define
                custom belt and rank hierarchies for every discipline your
                academy teaches, from the traditional BJJ white-through-black
                belt system with stripe increments to Muay Thai armband
                progressions, boxing skill-level certifications, and wrestling
                ranking systems. Set minimum attendance requirements for each
                rank, specify required techniques that must be demonstrated
                before promotion eligibility, and configure minimum time-in-rank
                periods that align with your academy standards and federation
                guidelines. The system automatically tracks each student
                progress across every discipline they train in, alerting
                instructors when students reach promotion eligibility thresholds.
                Students see their progression dashboards in the mobile app,
                with clear visibility into what they need to achieve for their
                next rank, keeping them motivated and engaged for the long
                journey from beginner to advanced practitioner. Promotion
                ceremonies can be scheduled through the platform with
                automated invitations to eligible students and their families.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Custom belt hierarchies for BJJ, Muay Thai, Boxing, and
                    Wrestling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Automatic promotion eligibility alerts based on attendance
                    and time-in-rank
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Student-facing progression dashboard with technique
                    checklists
                  </span>
                </li>
              </ul>
              <BeltProgressionVisual />
            </motion.div>

            {/* Feature 3: Fight Camp Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Fight Camp Management for Competitive Fighters
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                For academies that produce competitive fighters, GymWyse
                provides a dedicated fight camp management module that handles
                every aspect of bout preparation. Create fight camp timelines
                with customizable training phases: base building, skill
                sharpening, sparring intensification, and taper periods leading
                into fight week. Track each fighter daily training load across
                all disciplines, monitoring volume and intensity to prevent
                overtraining during camp. Weight management dashboards let
                fighters and coaches track daily weigh-ins against target fight
                weight, with trend projections that flag potential issues weeks
                before the cut becomes dangerous. Sparring partner scheduling
                ensures competitive fighters get appropriate rounds with
                partners who match their opponent profile in size, style, and
                skill level. Medical clearance tracking verifies that every
                fighter has current physical examinations, blood work, and any
                commission-required documentation before stepping into the cage
                or ring. Post-fight analytics log results, review video
                timestamps, and track career records so coaches can identify
                patterns and adjust training strategies for each fighter long-
                term development plan.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Periodized fight camp timelines with phase management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Weight management dashboard with daily tracking and trend
                    projections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Career record tracking with post-fight analytics and video
                    review
                  </span>
                </li>
              </ul>
              <FightCampVisual />
            </motion.div>

            {/* Feature 4: Liability Waivers & Injury Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Liability Waivers, Injury Tracking, and Compliance Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Combat sports demand a level of legal compliance that generic
                gym software simply does not address. GymWyse provides a
                complete waiver and compliance management system purpose-built
                for the liability realities of MMA, BJJ, Muay Thai, and boxing
                training. Configure custom waiver templates for general
                liability, sparring consent, competition participation, and
                youth training authorization. Digital signatures are collected
                during the online sign-up process, ensuring that no student ever
                steps on the mat without a valid, signed waiver on file. The
                system automatically flags expired waivers and blocks class
                check-in until renewal is completed. Injury incident reporting
                provides structured forms that coaches complete immediately when
                an injury occurs during training, capturing the type of injury,
                mechanism, training activity, and witnesses. These reports feed
                into an incident database that your insurance provider can
                access during audits or claims. Medical clearance tracking
                ensures that students returning from injury have submitted
                doctor clearance documentation before rejoining sparring or
                contact classes. Equipment inspection logs for gloves, pads,
                mats, and cage components create an additional compliance layer
                that demonstrates your academy commitment to safety. This
                comprehensive compliance infrastructure protects your business
                from litigation while demonstrating professional standards that
                parents, students, and insurance companies expect from a
                reputable combat sports facility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Digital waiver collection with automatic expiration and
                    renewal enforcement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Structured injury incident reporting with insurance-ready
                    documentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-soft-white">
                    Medical clearance tracking for return-to-training after
                    injury
                  </span>
                </li>
              </ul>
              <WaiverTrackingVisual />
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
              MMA Industry Trends in 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the MMA and combat
              sports academy industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Women's MMA and Combat Sports Surge",
                description:
                  "Women's participation in MMA, BJJ, and Muay Thai has grown by over 40 percent in the past three years, driven by increased visibility from UFC and ONE Championship promotions and a cultural shift toward combat sports as empowerment and self-defense training. Academies that offer women-only classes, dedicated women's competition teams, and female instructor development programs are capturing this growing demographic and seeing significant membership increases. GymWyse supports gender-segmented class scheduling and marketing automation to help academies serve this expanding market.",
              },
              {
                title: "Youth Programs as the Growth Engine",
                description:
                  "Youth martial arts programs have become the primary membership growth driver for MMA academies, with parents increasingly choosing combat sports over traditional team sports for discipline, confidence building, and anti-bullying preparation. Academies offering structured kids programs in BJJ, Muay Thai, and wrestling are building enrollment pipelines that convert young students into adult members over years. GymWyse provides age-appropriate curriculum tracking, parent communication portals, and youth-specific waiver management to support these critical programs.",
              },
              {
                title: "Self-Defense Classes Broadening the Funnel",
                description:
                  "Self-defense workshops and short-format courses are emerging as the top-of-funnel acquisition channel for MMA academies. Six-week self-defense courses attract people who would never walk into a traditional MMA gym, but many convert to ongoing martial arts memberships after experiencing the training environment. Academies report 20 to 30 percent conversion rates from self-defense workshops to monthly memberships. GymWyse supports workshop registration, limited-run course management, and automated follow-up sequences designed to convert workshop attendees into long-term students.",
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
              Warrior Academy, Manchester, UK
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              Warrior Academy is a 340-member MMA gym in Manchester offering
              BJJ, Muay Thai, Boxing, Wrestling, and MMA classes across two
              training floors with a cage, a boxing ring, and 3,500 square feet
              of mat space. Founder Darren Whitfield built the academy from a
              small BJJ club into one of the largest combat sports facilities in
              Northern England. By 2024, the administrative burden had become
              unsustainable: scheduling across five disciplines with eleven
              instructors was managed through a shared Google Calendar that
              regularly produced double-bookings, belt progression for 200-plus
              BJJ students was tracked in a spreadsheet that coaches rarely
              updated, and liability waivers were stored in physical filing
              cabinets with no way to quickly verify compliance status.
            </p>
            <p className="text-soft-white leading-relaxed mb-6">
              After implementing GymWyse, Warrior Academy eliminated scheduling
              conflicts entirely within the first week. The belt progression
              tracking system identified 34 students who had met promotion
              requirements but had been overlooked, leading to a promotion event
              that generated massive student enthusiasm and social media
              engagement. Digital waiver management ensured 100 percent
              compliance across all active members within 30 days. The fight
              camp module helped their competition team prepare three fighters
              for regional MMA events with structured training phases, weight
              management tracking, and sparring partner scheduling. Monthly
              admin time dropped from 18 hours to under 5 hours, and student
              retention improved by 23 percent within four months as progression
              visibility and professional operations built stronger loyalty.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { metric: "Admin Time", before: "18 hrs/wk", after: "5 hrs/wk" },
                { metric: "Student Retention", before: "68%", after: "91%" },
                { metric: "Waiver Compliance", before: "~70%", after: "100%" },
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
            What MMA Academy Owners Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Managing five disciplines across eleven instructors and two training floors was a scheduling nightmare before GymWyse. Now everything runs from a single calendar with automatic conflict detection. Our instructors love it because they can see their schedules on their phones, and our students love it because they can book any class in any discipline with two taps. The belt progression tracking alone has transformed how we handle promotions and keep students engaged for the long haul.",
                author: "Darren Whitfield",
                role: "Founder, Warrior Academy",
                location: "Manchester, UK",
              },
              {
                quote:
                  "The liability waiver system was the reason we switched to GymWyse. In combat sports, one missing waiver can put your entire business at risk. Now every new student signs digitally before their first class, expired waivers automatically block check-in until renewed, and every injury incident is documented with timestamps and structured reports. Our insurance company was so impressed with the documentation system that they reduced our premium by fifteen percent at renewal.",
                author: "Natasha Okonkwo",
                role: "Owner, Apex Fight Academy",
                location: "Atlanta, GA",
              },
              {
                quote:
                  "We produce competitive MMA fighters and the fight camp module is a game changer. Tracking training loads across multiple disciplines, monitoring weight cuts, scheduling sparring partners, and keeping medical clearances current used to consume hours of my time every week. GymWyse centralized all of it. Our last three fighters went into their bouts better prepared than ever, and two of them won regional titles. The platform pays for itself many times over.",
                author: "Kenji Nakamura",
                role: "Head Coach, Rising Sun MMA",
                location: "Sydney, Australia",
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
              See how GymWyse stacks up against Zen Planner for MMA academies
              and combat sports gyms.
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
                { feature: "Multi-Discipline Scheduling", gymwyse: "Native support", competitor: "Single-type only" },
                { feature: "Belt/Rank Progression", gymwyse: "Full tracking", competitor: "Not available" },
                { feature: "Fight Camp Management", gymwyse: "Built-in", competitor: "Not available" },
                { feature: "Liability Waiver System", gymwyse: "Digital + enforcement", competitor: "Basic digital" },
                { feature: "Injury Incident Tracking", gymwyse: "Structured reports", competitor: "Not available" },
                { feature: "Medical Clearance Tracking", gymwyse: "Automated", competitor: "Manual" },
                { feature: "Equipment Inspection Logs", gymwyse: "Included", competitor: "Not available" },
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
                Why MMA Academies Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Multi-discipline scheduling eliminates the double-bookings and instructor conflicts that generic gym software cannot prevent in combat sports environments.",
                  "Belt progression tracking keeps students engaged for years by providing clear visibility into their martial arts journey across every discipline they train in.",
                  "Comprehensive liability waiver and injury tracking protects your academy from the legal exposure that is uniquely elevated in combat sports.",
                  "Fight camp management gives competitive teams the structured preparation tools that separate amateur programs from professional development pipelines.",
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
              Common questions from MMA academy owners about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Can GymWyse handle scheduling for five or more martial arts disciplines?",
                answer:
                  "Yes. GymWyse supports unlimited discipline types, each with independent scheduling, capacity limits, instructor assignments, and equipment requirements. Whether you offer BJJ gi, BJJ no-gi, Muay Thai, Boxing, Wrestling, MMA, Judo, Karate, or any other martial art, each discipline gets its own class type with automatic conflict detection for shared mat space and instructor availability. Students can filter the schedule by discipline and book classes across any art their membership covers.",
              },
              {
                question: "How does belt and rank progression tracking work across multiple disciplines?",
                answer:
                  "Each discipline has its own configurable rank hierarchy with custom belt levels, stripe or degree increments, minimum attendance requirements, time-in-rank rules, and technique assessment checklists. A student training in both BJJ and Muay Thai has separate progression tracks visible in their profile. Instructors receive automatic alerts when students reach promotion eligibility, and promotion events can be scheduled and managed through the platform. The student-facing app shows clear progression dashboards for each discipline.",
              },
              {
                question: "Does GymWyse handle liability waivers and sparring consent forms?",
                answer:
                  "Absolutely. GymWyse includes a complete legal compliance module with customizable waiver templates for general liability, sparring consent, competition participation, youth training authorization, and photography release. Digital signatures are collected during online registration, and the system blocks class check-in for any student with an expired or missing waiver. Renewal reminders are sent automatically. All signed waivers are stored with timestamps and are instantly accessible for insurance audits or incident review.",
              },
              {
                question: "Can we track injuries and manage medical clearances for return to training?",
                answer:
                  "Yes. The injury incident module provides structured reporting forms that coaches complete immediately when an injury occurs, capturing injury type, body part, mechanism, training activity, and witness information. Students flagged with an injury are automatically restricted from contact classes until medical clearance documentation is uploaded and verified. The incident database maintains a complete audit trail for insurance purposes, and aggregate injury data helps identify patterns that may indicate safety improvements needed in specific classes or activities.",
              },
              {
                question: "How does the fight camp management module work?",
                answer:
                  "Fight camp management lets you create structured preparation timelines for competitive fighters with customizable training phases, daily training load tracking across all disciplines, weight management dashboards with daily weigh-in logging and trend projections, sparring partner scheduling, and medical clearance verification. Coaches can monitor each fighter camp progress from a centralized dashboard, and fighters see their preparation status in the mobile app. Post-fight result logging and career record tracking build a comprehensive athlete development history.",
              },
              {
                question: "Can we manage equipment inventory and cleaning schedules for gloves, pads, and mats?",
                answer:
                  "Yes. GymWyse includes equipment asset management with inventory tracking for gloves, shin guards, focus pads, heavy bags, mats, and cage components. Automated cleaning schedule reminders ensure mats are sanitized between sessions, gloves are disinfected regularly, and equipment inspection logs are maintained for safety compliance. Coaches can flag damaged equipment during class, creating maintenance tickets that route to the responsible staff member. Utilization reports help you understand which gear needs replacement and budget accordingly.",
              },
              {
                question: "Does GymWyse support youth martial arts programs with parent communication?",
                answer:
                  "Yes. Youth program support includes age-appropriate class scheduling with separate capacity limits, parent or guardian contact management with communication portals, youth-specific waiver templates requiring parental signature, attendance tracking with parent notifications, belt progression visibility for families, and curriculum tracking aligned with your youth program structure. Parents can view their child progress, upcoming belt tests, and attendance history through their own app login, keeping families engaged and informed.",
              },
              {
                question: "What does migration look like, and is there a contract?",
                answer:
                  "There is no contract and no setup fee. GymWyse is $99 per month with a 14-day free trial, and you can cancel anytime. Migration from Zen Planner, Kicksite, Spark Membership, or any other platform typically takes three to five business days. Our onboarding team handles student data import, belt and rank history migration, billing migration with no payment interruption, waiver template setup, and instructor training sessions. Most academies are fully operational on GymWyse within one week. We also provide combat-sports-specific onboarding guides tailored to the unique needs of MMA facilities.",
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
              Discover how GymWyse helps MMA academies tackle every aspect of
              their business.
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
            Simple Pricing for MMA Academies
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your academy needs for $99 per month. No setup fees. No
            per-student charges. No long-term contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Multi-Discipline Scheduling + Belt Progression + Fight Camp +
              Waivers + Injury Tracking + Billing + Member App + Analytics
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
              Ready to Run Your Academy Like a Champion?
            </h2>
            <p className="text-lg text-soft-white mb-8 max-w-2xl mx-auto">
              Join hundreds of MMA academies and combat sports facilities that
              switched to GymWyse and eliminated administrative chaos while
              growing their student base and revenue. Your fighters and students
              deserve world-class training, and your academy deserves world-
              class management tools to match.
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
