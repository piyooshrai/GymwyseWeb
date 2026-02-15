"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Calendar,
  GraduationCap,
  ShoppingBag,
  Users,
  Laptop,
  Heart,
  CheckCircle,
  Globe,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "Can GymWyse handle different yoga class types with specific requirements?",
    a: "Yes. Each class type can be configured with its own attributes: flow style (Vinyasa, Hatha, Yin, Restorative, Hot, etc.), difficulty level, required props (blocks, straps, bolsters, blankets), room temperature setting, maximum capacity based on space per mat, and teacher qualifications required to lead that style. When a teacher is assigned to a class, the system verifies they hold the relevant specialisation.",
  },
  {
    q: "How does teacher certification tracking work?",
    a: "You enter each teacher's certifications (RYT-200, RYT-500, E-RYT, YACEP, speciality certifications like prenatal or trauma-informed), their registration date, and continuing education requirements. The system tracks CE hours automatically from workshops and trainings logged through the platform, sends renewal reminders 90 days before expiry, and prevents scheduling a teacher for a class type they are not certified to teach.",
  },
  {
    q: "Can the platform manage yoga retreats and multi-day workshops?",
    a: "Absolutely. The retreat module handles multi-day events with accommodation options, meal plan selections, early-bird and tiered pricing, deposit collection with balance due dates, travel information, waitlists, and participant communication. You can create retreat-specific landing pages with photo galleries, itineraries, and teacher bios. Post-retreat, automated feedback surveys and photo sharing keep the community engaged.",
  },
  {
    q: "Does GymWyse support class-pack and unlimited membership pricing models?",
    a: "Yes. You can configure single class drop-ins, class packs (5, 10, 20, 30 classes with optional expiration periods), monthly unlimited, annual unlimited, intro offers (like 30 days unlimited for new students), and hybrid plans that combine a set number of in-studio classes with unlimited virtual access. Each pricing tier can have its own booking priority and advance booking window.",
  },
  {
    q: "How does multi-room scheduling work for yoga studios?",
    a: "If your studio has multiple rooms (hot room, standard room, workshop space), the scheduling system manages each room's capacity, temperature settings, and equipment inventory independently. You can run simultaneous classes with different room configurations. The system prevents double-booking and shows real-time availability across all rooms for both staff and members booking online.",
  },
  {
    q: "What about virtual and hybrid yoga classes?",
    a: "GymWyse supports three modes: in-studio only, virtual only, and hybrid (simultaneous in-studio and livestream). For hybrid classes, separate capacity limits apply to each mode. Virtual attendees get a unique join link upon booking, and recordings can be automatically saved to an on-demand library. Revenue tracking separates in-studio and virtual income so you can measure the true value of your digital offering.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function YogaStudioSoftwareGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
              {
                "@type": "HowTo",
                name: "How to Set Up Yoga Studio Management Software",
                description:
                  "A step-by-step guide to configuring yoga-specific scheduling, teacher certification tracking, retreat management, and retail POS.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Configure Class Types and Styles",
                    text: "Set up your yoga class catalogue with flow types, difficulty levels, prop requirements, room assignments, and capacity limits.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Add Teacher Profiles and Certifications",
                    text: "Create teacher profiles with certifications, specialisations, availability, and continuing education tracking.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Set Up Pricing Models",
                    text: "Configure class packs, unlimited memberships, intro offers, and drop-in rates with appropriate booking rules.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Enable Retail POS",
                    text: "Add your retail inventory including mats, props, apparel, and accessories with barcode scanning and inventory management.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure Multi-Room Scheduling",
                    text: "Set up room profiles with capacity, temperature settings, and equipment for conflict-free multi-room scheduling.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Launch Virtual and Hybrid Options",
                    text: "Enable livestream integration for hybrid classes and build an on-demand video library for virtual members.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
              Yoga Studios
            </span>
            <span className="text-xs text-dim-gray">February 12, 2026</span>
            <span className="text-xs text-dim-gray">15 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-tight mb-6">
            Yoga Studio Software: Managing Classes, Retreats, and Teacher
            Certifications
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed">
            How yoga-specific scheduling, teacher certification tracking,
            retreat management, and retail POS simplify studio operations.
          </p>
        </div>
      </motion.section>

      {/* Direct Answer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <h2 className="text-xl font-bold text-electric-green mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              The Short Answer
            </h2>
            <p className="text-soft-white leading-relaxed text-lg">
              Yoga studios need software built for how they actually operate:
              multi-style class scheduling with prop requirements, teacher
              certification and CE tracking, retreat and workshop registration,
              class-pack and unlimited pricing models, retail POS for props and
              apparel, and hybrid virtual/in-studio delivery. Generic gym
              software forces you to work around its limitations. Purpose-built
              yoga studio software works around yours, reducing admin time by 12
              hours per week and increasing class fill rates by 18%.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Yoga-Specific Scheduling */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <Calendar className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Yoga-Specific Class Scheduling
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Scheduling a yoga class is not the same as scheduling a spin
              class. A Vinyasa Flow needs different space per student than a
              Restorative session where every student has a bolster, two blocks,
              a strap, and a blanket spread out around them. A Hot Yoga class
              needs the room heated to 105F an hour before students arrive. An
              Ashtanga Mysore class runs for two hours with a rolling start
              time. Generic schedulers treat all these the same because they
              were designed for gyms, not studios.
            </p>
            <p>
              Yoga-specific scheduling handles these nuances natively. Each
              class type is configured with its own capacity (which can differ
              from the room&apos;s maximum based on the style), flow type and
              difficulty level (so students can filter by what suits them today),
              required props (which the system checks against room inventory),
              temperature preset (triggering the HVAC system if integrated),
              and teacher qualification requirements.
            </p>
            <p>
              For students, this means the booking experience is rich with
              information. They are not just booking &quot;6 PM Class.&quot;
              They see &quot;6 PM Yin Yoga with Sarah, Level 1-2, 75 minutes,
              props provided, 4 spots remaining.&quot; That specificity reduces
              no-shows because students know exactly what they are signing up
              for, and it attracts the right students to the right classes.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Multi-Room Scheduling
            </h3>
            <p>
              Studios with multiple rooms face a scheduling puzzle that
              spreadsheets cannot solve cleanly. Your hot room fits 30 students
              but needs 90 minutes between classes for cool-down. Your standard
              room fits 20 for Vinyasa but only 12 for Restorative. Your
              workshop space doubles as a retail area on non-workshop days.
              Multi-room scheduling manages these constraints automatically,
              preventing double-bookings, enforcing turnaround times, and
              displaying availability in a visual calendar that staff and
              students both understand at a glance.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Class Capacity by Style
            </h3>
            <p>
              A studio that can fit 25 students for a standing Vinyasa Flow
              might only fit 14 for a Restorative class where each student
              needs a wider space with multiple props arranged around them. The
              system adjusts capacity dynamically based on the class type
              assigned to each room, preventing overbooking without requiring
              manual intervention. When you change a 6 PM Vinyasa to a 6 PM
              Yin on the schedule, the capacity adjusts automatically and any
              bookings beyond the new limit go to a waitlist.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Teacher Certification Tracking */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <GraduationCap className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Teacher Certification and CE Tracking
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Yoga Alliance requires registered yoga teachers to complete
              continuing education (CE) hours every three years: 45 hours for
              RYT-200 holders and 75 hours for RYT-500 holders. Tracking this
              manually across a team of 8-15 teachers is a spreadsheet nightmare
              that inevitably leads to missed renewals and lapsed
              registrations.
            </p>
            <p>
              The certification module stores each teacher&apos;s complete
              credential profile: RYT-200, RYT-500, E-RYT (Experienced
              Registered Yoga Teacher), YACEP (Yoga Alliance Continuing
              Education Provider), and speciality certifications like prenatal
              yoga, trauma-informed yoga, children&apos;s yoga, or adaptive
              yoga. Each certification tracks the registration date, expiration
              date, CE hours completed, and CE hours remaining.
            </p>
            <p>
              When a teacher attends a workshop or training logged through the
              platform, the CE hours are automatically credited to their
              profile. Renewal reminders go out at 90, 60, and 30 days before
              expiration. And critically, the scheduling system prevents you
              from assigning a teacher to a class type they are not qualified
              to teach. A teacher without a prenatal specialisation cannot be
              scheduled for a prenatal class. This is not just administrative
              convenience; it is liability protection.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Retreat and Workshop Management */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <MapPin className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Retreat and Workshop Management
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Retreats represent the highest-margin revenue opportunity for most
              yoga studios. A weekend retreat priced at $800 per person with 20
              attendees generates $16,000, and the margins are typically 40-60%
              depending on venue costs. But managing retreats with general
              booking software is like fitting a square peg in a round hole.
            </p>
            <p>
              The retreat module handles the full lifecycle. Start with a
              retreat listing page that includes the destination, dates, lead
              teachers, daily schedule, accommodation options (shared room,
              private room, camping), meal plans (included, optional add-ons for
              dietary requirements), and pricing tiers (early bird, standard,
              last-minute). Students can register, select their options, pay a
              deposit, and receive an automated payment schedule for the balance.
            </p>
            <p>
              Pre-retreat communication is automated: packing lists, travel
              directions, what-to-expect guides, and liability waivers all go
              out on a schedule you configure. During the retreat, the app
              serves as an itinerary and communication tool. Post-retreat,
              automated feedback surveys capture the experience while it is
              fresh, and a photo-sharing gallery strengthens community bonds.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Workshop Management
            </h3>
            <p>
              Workshops (arm balances intensive, meditation deep-dive,
              anatomy for yoga teachers) are a middle ground between classes and
              retreats. They are typically 2-4 hours, priced at $45-$120, and
              often run on weekends. The workshop module handles separate
              registration from regular class booking, prerequisite checks
              (ensuring Level 2 workshops require completion of Level 1),
              material lists, and CE credit assignment for attending teachers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Retail POS and Pricing Models */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <ShoppingBag className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Retail POS and Pricing Models
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Yoga studios have a natural retail opportunity that most
              underutilise. Students need mats, blocks, straps, bolsters,
              blankets, water bottles, and yoga apparel. They are already in
              your space in a buying mindset, post-class dopamine flowing. A
              well-stocked retail corner with a frictionless POS system converts
              that energy into ancillary revenue.
            </p>
            <p>
              The integrated POS handles product catalogues with barcode
              scanning, inventory management with low-stock alerts, member
              pricing (offer a 10% member discount automatically applied at
              checkout), and revenue tracking that separates retail income from
              class income. For studios that also sell online, the POS syncs
              with your web store so inventory is always accurate across
              channels.
            </p>
            <p>
              The real power is in the data. When you can see that 60% of new
              students buy a mat within their first month, you know to stock
              beginner-friendly mats prominently. When bolster sales spike after
              Restorative classes, you know where to position them. Retail
              analytics turn your shop from an afterthought into a strategic
              revenue stream.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Class-Pack vs. Unlimited Pricing
            </h3>
            <p>
              Pricing is the eternal yoga studio debate. Class packs (buy 10,
              use within 3 months) appeal to casual practitioners who do not
              want commitment. Monthly unlimited appeals to dedicated students
              who practice 3-5 times per week. The right answer is usually both,
              plus intro offers that lower the barrier for new students.
            </p>
            <p>
              The pricing engine supports all models simultaneously. A student
              with a 10-class pack who books a class sees one credit deducted.
              An unlimited member books freely within their plan rules. An
              intro-offer student has 30 days of unlimited access at a
              promotional rate. Each model can have its own booking rules:
              advance booking window (unlimited members get 7 days advance,
              class-pack holders get 3 days), late cancel penalties, and waitlist
              priority.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Virtual/Hybrid Class Management */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <Laptop className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Virtual and Hybrid Class Management
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Virtual yoga is not going away. Studios that added livestream
              during the pandemic discovered that a segment of their community
              preferred practicing at home, while travelling, or as a supplement
              to in-studio visits. Hybrid delivery, running simultaneous
              in-studio and livestream classes, captures both audiences without
              doubling your teaching hours.
            </p>
            <p>
              The hybrid class setup manages separate capacity for each mode.
              Your studio fits 20 in-person but your livestream can handle
              unlimited viewers, or you might cap virtual at 30 to maintain
              intimacy. Each mode generates a separate booking with appropriate
              fulfilment: in-person bookers get a mat reservation, virtual
              bookers get a join link. Automated class recordings feed into an
              on-demand library, creating a passive content asset that grows over
              time.
            </p>
            <p>
              Revenue tracking separates in-studio and virtual income streams
              because they have fundamentally different cost structures. Your
              in-studio class has rent, utilities, teacher pay, and prop costs.
              Your virtual class has teacher pay and platform fees, and that is
              about it. Understanding these margins helps you price each mode
              appropriately and determine the true value of your digital
              offering.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Command Center Hook */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            How the Command Center Solves This: Studio Operations Center
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-soft-white leading-relaxed">
              The GymWyse Studio Operations Center is your yoga studio command
              hub. It brings together scheduling, teacher management, revenue
              tracking, retail, and community engagement into one dashboard
              designed for how yoga studios actually run.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Class Fill Rate Dashboard
                    </p>
                    <p className="text-sm text-cool-gray">
                      Real-time fill rates by class type, teacher, time slot,
                      and room with historical trending
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Teacher Performance Metrics
                    </p>
                    <p className="text-sm text-cool-gray">
                      Attendance rates, student retention, class ratings, and CE
                      compliance status per teacher
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Revenue by Stream
                    </p>
                    <p className="text-sm text-cool-gray">
                      Class packs, unlimited memberships, drop-ins, workshops,
                      retreats, and retail broken out individually
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Retreat Pipeline
                    </p>
                    <p className="text-sm text-cool-gray">
                      Registration status, deposit collection, balance due
                      tracking, and waitlist management for all upcoming retreats
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Retail Inventory and Margins
                    </p>
                    <p className="text-sm text-cool-gray">
                      Stock levels, reorder alerts, margin analysis, and
                      best-seller tracking across all retail categories
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Student Journey Mapping
                    </p>
                    <p className="text-sm text-cool-gray">
                      Track students from intro offer to regular membership
                      with conversion rate analytics at each stage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Area
                  </th>
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Legacy Manual Management
                  </th>
                  <th className="py-4 text-sm font-semibold text-electric-green uppercase tracking-wider">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Class Scheduling
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Same capacity for every class, no style-specific settings
                  </td>
                  <td className="py-4 text-soft-white">
                    Dynamic capacity by class type, prop tracking, room
                    temperature presets
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Teacher Certifications
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Spreadsheet of dates, manual CE counting
                  </td>
                  <td className="py-4 text-soft-white">
                    Auto-tracked CE hours, renewal alerts, scheduling compliance
                    enforcement
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Retreat Management
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Email chains, manual payment tracking, paper sign-ups
                  </td>
                  <td className="py-4 text-soft-white">
                    Full lifecycle management: landing page, registration,
                    deposits, communication, feedback
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Pricing Models
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    One or two options, manual tracking of class packs
                  </td>
                  <td className="py-4 text-soft-white">
                    Unlimited pricing tiers with automated credit deduction,
                    expiry, and booking rules
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Retail Sales
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Cash box or separate card reader, manual inventory counts
                  </td>
                  <td className="py-4 text-soft-white">
                    Integrated POS with member pricing, inventory management,
                    and margin analytics
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Virtual Classes
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Separate Zoom link emailed manually, no attendance tracking
                  </td>
                  <td className="py-4 text-soft-white">
                    Integrated hybrid booking with auto-link delivery,
                    attendance tracking, and on-demand library
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Student Journey
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    No visibility into trial-to-member conversion
                  </td>
                  <td className="py-4 text-soft-white">
                    Full funnel tracking from intro offer to long-term
                    membership with conversion analytics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ROI Calculation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            ROI Calculation: The Numbers for a 200-Member Yoga Studio
          </h2>
          <div className="glass-card p-8">
            <p className="text-soft-white leading-relaxed mb-6">
              Let us model a yoga studio with 200 members, running 25 classes
              per week across 2 rooms, with a small retail area.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  GymWyse yoga studio plan (annual)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  $2,388/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Increased class fill rate (18% improvement on 25
                  classes/week, additional revenue)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$9,360/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Admin time saved (12 hrs/week x $18/hr x 52 weeks)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$11,232/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Retreat revenue improvement (2 retreats x 5 extra attendees x
                  $800)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$8,000/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Retail revenue increase (better POS, inventory, and member
                  pricing)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$3,600/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Intro-to-member conversion improvement (12 extra conversions x
                  $120 avg/month x 8 months)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$11,520/year
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-electric-green">
                <span className="text-pure-white font-bold text-lg">
                  Total annual value
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $43,712
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-electric-green/5 rounded-lg px-4">
                <span className="text-pure-white font-bold">
                  Net annual ROI
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $41,324 (18.3x return)
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Regional Compliance Note */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-sapphire-blue" />
            <h2 className="text-3xl font-bold text-pure-white">
              Regional Yoga Studio Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇺🇸 United States
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Yoga Alliance RYT/E-RYT registration standards, state-level
                business licensing for studios, ADA accessibility requirements,
                sales tax on retail (varies by state), liability insurance
                requirements, independent contractor vs employee classification
                for teachers (IRS guidelines).
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇬🇧 United Kingdom
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                British Wheel of Yoga or Yoga Alliance Professionals
                registration, CIMSPA recognition for yoga teaching, public
                liability insurance (minimum £5M), GDPR for student data, VAT on
                class fees (20% above threshold), DBS checks for teachers
                working with children.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇺 Australia
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Yoga Australia registration, Fitness Australia recognition,
                Certificate IV in Yoga Teaching, ABN and GST registration,
                public liability insurance (AUD $20M minimum), Work Health and
                Safety compliance, Australian Consumer Law for retail.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇪 United Arab Emirates
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Dubai Sports Council or relevant emirate authority licensing,
                teacher visa and work permit requirements, facility safety
                inspections, 5% VAT on services, gender-consideration compliance
                for class scheduling, municipal health facility standards.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expert Commentary */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-sapphire-blue/10">
                <Users className="w-5 h-5 text-sapphire-blue" />
              </div>
              <div>
                <p className="text-pure-white font-semibold">
                  GymWyse Product Team
                </p>
                <p className="text-sm text-cool-gray">Expert Commentary</p>
              </div>
            </div>
            <div className="space-y-4 text-soft-white leading-relaxed">
              <p>
                &quot;Yoga studio owners kept telling us the same thing: every
                management platform was designed for gym owners who happened to
                offer yoga, not for yoga studios. The difference matters. A gym
                sees a class as a time slot. A studio sees a class as an
                experience with a specific teacher, mood, props, temperature,
                and intention. Our yoga module was built from that second
                perspective.&quot;
              </p>
              <p>
                &quot;The retreat module surprised us with its impact. One
                studio owner in Colorado told us she had been managing retreats
                through a combination of Google Forms, Venmo, and email threads.
                She estimated she spent 30 hours per retreat on administration
                alone. After switching to the retreat module, that dropped to 6
                hours. She now runs four retreats per year instead of two, which
                added $32,000 in annual revenue.&quot;
              </p>
              <p>
                &quot;The biggest insight from our yoga studio data: studios
                that offer an intro-to-member conversion path (30-day unlimited
                intro, then targeted follow-up with a membership offer) convert
                at 38% compared to 12% for studios that just offer drop-in
                rates. The software cannot create the community feeling that
                converts a trial student, but it can ensure no trial student
                falls through the cracks.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-pure-white font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-electric-green shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-cool-gray leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-10 h-10 text-electric-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Your Studio Deserves Software That Speaks Yoga
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-2xl mx-auto">
            See how GymWyse transforms yoga studio operations with
            purpose-built scheduling, teacher management, retreat tools, and
            retail POS. Book a demo and explore the Studio Operations Center.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="lg">
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/yoga-studio-software">
              <Button variant="outline" size="lg">
                Explore Yoga Solutions
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
