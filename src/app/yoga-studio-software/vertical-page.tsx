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
  CreditCard,
  BarChart3,
  Smartphone,
  ChevronDown,
  CheckCircle,
  Calculator,
  ExternalLink,
  Star,
  Clock,
  ShieldCheck,
  Heart,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── FAQ Data ─────────────────────── */
const faqItems = [
  {
    question: "Can GymWyse handle different pricing for different yoga class types?",
    answer:
      "Absolutely. GymWyse lets you configure distinct pricing tiers for every class format you offer, whether that is a standard Vinyasa drop-in, a premium Hot Yoga session, an intimate Aerial Yoga workshop, or a multi-week Prenatal Yoga series. You can create unlimited membership plans that bundle specific class types, offer class packs with expiry windows, set introductory pricing for new students, and even configure dynamic pricing that adjusts based on peak and off-peak time slots. Our flexible pricing engine ensures your revenue model matches the unique value each offering delivers.",
  },
  {
    question: "Does GymWyse track yoga teacher certifications and credentials?",
    answer:
      "Yes. GymWyse includes a comprehensive instructor credential management system purpose-built for yoga studios. You can track RYT-200, RYT-500, E-RYT, RPYT (Registered Prenatal Yoga Teacher), RCYT (Registered Children's Yoga Teacher), and any specialty certifications your teachers hold. The system sends automatic renewal reminders ninety days before expiration, stores digital copies of certificates, and can restrict scheduling so that only appropriately certified teachers are assigned to specialized classes like Prenatal or Kids Yoga.",
  },
  {
    question: "How does GymWyse help with yoga retail and merchandise sales?",
    answer:
      "GymWyse includes a fully integrated point-of-sale system that handles your entire retail operation. Track inventory for mats, blocks, straps, bolsters, essential oils, incense, apparel, water bottles, and any other merchandise you carry. The system supports barcode scanning, automatic reorder alerts when stock drops below configurable thresholds, supplier management, and detailed profitability reporting per product category. Studios using our retail module typically see retail grow to twelve to fifteen percent of total revenue within the first year.",
  },
  {
    question: "Can students book yoga classes through a mobile app?",
    answer:
      "Yes. Every GymWyse subscription includes a branded member app for both iOS and Android at no additional cost. Students can browse your full schedule, book and waitlist for classes, purchase memberships and class packs, check into classes via QR code, view their attendance history, and receive push notifications for schedule changes or promotions. The app is fully branded with your studio logo, colors, and imagery so it feels like a seamless extension of your studio experience.",
  },
  {
    question: "Does GymWyse support managing yoga workshops and retreats?",
    answer:
      "Absolutely. GymWyse goes beyond daily class scheduling to support your workshops, immersions, teacher training programs, and even multi-day retreats. You can create events with custom registration pages, set capacity limits, collect deposits with remaining balance auto-charges, manage accommodation assignments for retreats, and send automated event communications. The system tracks workshop revenue separately in your financial reports so you can measure the profitability of each special event.",
  },
  {
    question: "How does the waitlist system work for popular yoga classes?",
    answer:
      "Our intelligent waitlist system automatically manages overflow demand for your most popular classes. When a class reaches capacity, students can join the waitlist with a single tap. If a spot opens up due to a cancellation, the next person on the waitlist receives an instant push notification and has a configurable time window, typically fifteen to thirty minutes, to confirm their spot. If they do not confirm in time, the system automatically moves to the next person. This ensures maximum attendance and eliminates empty mats from last-minute cancellations.",
  },
  {
    question: "Can I manage multiple yoga studio locations with GymWyse?",
    answer:
      "Yes. GymWyse is built to scale with your studio business. Our multi-location management lets you oversee all your studios from a single dashboard while maintaining location-specific schedules, pricing, staff assignments, and inventory. Members can book across locations with a single membership, and your consolidated reporting gives you a complete picture of your business performance across every studio. Teachers can be shared across locations with schedule visibility that prevents double-booking.",
  },
  {
    question: "What kind of reporting and analytics does GymWyse provide for yoga studios?",
    answer:
      "GymWyse delivers over forty pre-built reports tailored to studio operations, plus a custom report builder for deeper analysis. Key reports include class attendance trends by type and time slot, instructor performance and popularity rankings, membership conversion and retention funnels, revenue breakdown by stream (memberships, drop-ins, retail, workshops), student lifetime value calculations, and churn risk scoring that identifies members likely to leave before they actually do. All reports can be exported to CSV or PDF and scheduled for automatic email delivery to your inbox.",
  },
];

/* ── Testimonials ─────────────────────── */
const testimonials = [
  {
    quote:
      "We switched from Mindbody to GymWyse eighteen months ago and it has completely transformed how we run our studio. The teacher certification tracking alone saved us from a compliance nightmare, and our retail sales have grown by thirty-one percent since we started using the integrated POS. The automated waitlist fills ninety-two percent of cancelled spots — revenue we were simply losing before.",
    author: "Priya Sharma",
    role: "Owner, Sattva Yoga Collective",
    location: "Austin, Texas",
    previousSoftware: "Previously on Mindbody",
  },
  {
    quote:
      "As a studio with both Hot Yoga and traditional Hatha classes, we needed software that understood our unique scheduling and capacity requirements. GymWyse lets us set different room capacities for heated versus non-heated classes, and the air quality integration reminders ensure our Hot Yoga room meets safety standards. Our student retention improved by twenty-seven percent in the first year.",
    author: "Marcus Chen",
    role: "Director, Ember & Flow Yoga",
    location: "Vancouver, Canada",
    previousSoftware: "Previously on WellnessLiving",
  },
  {
    quote:
      "Running a yoga studio with a strong retail component was always a headache with our old system. GymWyse unified everything — class bookings, teacher schedules, mat and prop sales, essential oil inventory, and our teacher training programs — into one platform. Our admin time dropped from twenty hours a week to about six. I finally have time to actually teach again.",
    author: "Elena Vasquez",
    role: "Founder, Luna Yoga Studio",
    location: "Barcelona, Spain",
    previousSoftware: "Previously on Momoyoga",
  },
];

/* ── Comparison Data ─────────────────────── */
const comparisonRows = [
  { feature: "Yoga-specific class type management", gymwyse: "Full support for 10+ types", competitor: "Basic categories only" },
  { feature: "Teacher certification tracking (RYT)", gymwyse: "Automated with renewal alerts", competitor: "Manual tracking" },
  { feature: "Integrated retail POS", gymwyse: "Built-in, no extra cost", competitor: "$50+/mo add-on" },
  { feature: "Branded member app", gymwyse: "Included", competitor: "$200+/mo premium tier" },
  { feature: "Workshop & retreat management", gymwyse: "Full event management", competitor: "Limited workshop tools" },
  { feature: "Multi-location management", gymwyse: "Unified dashboard", competitor: "Separate accounts per location" },
  { feature: "Starting price", gymwyse: "$99/mo", competitor: "$129+/mo" },
  { feature: "Contract requirement", gymwyse: "None — cancel anytime", competitor: "12-month minimum" },
];

/* ── Internal Links ─────────────────────── */
const internalLinks = [
  { href: "/reduce-gym-member-churn", label: "Reduce Gym Member Churn" },
  { href: "/increase-gym-revenue", label: "Increase Gym Revenue" },
  { href: "/gym-class-scheduling", label: "Gym Class Scheduling" },
  { href: "/gym-billing-software", label: "Gym Billing Software" },
  { href: "/gym-payment-processing", label: "Gym Payment Processing" },
  { href: "/personal-training-software", label: "Personal Training Software" },
];

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
      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for Yoga Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Yoga Studio Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              GymWyse is the all-in-one yoga management software that helps studio owners streamline operations, grow their community, and focus on what matters most — teaching transformative yoga. Our gym management software is purpose-built for the unique demands of yoga studios, from Vinyasa and Hot Yoga scheduling to teacher certification tracking, retail point-of-sale, and retreat management. Whether you run a single-room Hatha studio or a multi-location yoga empire, GymWyse gives you the tools to manage memberships, automate billing, fill every mat, and increase revenue without adding administrative overhead.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Trusted by studios like Lotus Flow Yoga, CorePower, and YogaWorks
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          GYM OPERATIONS BASICS
      ════════════════════════════════════════════════════════════════════ */}
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
              A Complete Operations Platform for Yoga Studios
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Running a yoga studio involves far more than teaching classes. Behind every peaceful savasana is a complex operation that demands seamless membership management, effortless class scheduling, accurate billing, reliable check-in systems, and thoughtful staff coordination. GymWyse brings every operational pillar into a single, intuitive platform so you can stop juggling spreadsheets, paper sign-in sheets, and disconnected software tools.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                Our membership management system supports unlimited plan types — monthly unlimited, class packs, drop-in passes, introductory offers, student and senior discounts, and family plans — all with automated recurring billing, failed payment recovery, and real-time revenue tracking. The class scheduling engine handles your entire weekly timetable across Vinyasa, Yin, Hot Yoga, Restorative, Prenatal, Aerial, Power, Hatha, Kundalini, and Ashtanga formats, with room-specific capacity limits, teacher assignments, and substitute management. Built-in check-in via QR code, key fob, or front desk scan gives you accurate attendance data that feeds directly into your analytics dashboard. Staff management covers everything from payroll calculation based on class count or hourly rates to credential tracking and performance reviews.
              </p>
              <p className="text-base text-cool-gray leading-relaxed">
                Every yoga studio is different, and GymWyse adapts to your workflow rather than forcing you into a rigid template. Configure your settings, customize your member communications, and build the operational backbone your studio needs to thrive in an increasingly competitive wellness market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PROBLEM STATEMENT — 3 PAIN POINTS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Yoga Studios Face Every Day
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Scheduling Chaos Across Class Formats",
                description:
                  "Managing a schedule that spans ten or more yoga styles — each with different room requirements, temperature settings, prop setups, and instructor qualifications — creates constant conflicts. A Hot Yoga class needs ninety minutes between sessions for room cool-down, while an Aerial class requires rigging checks. Without software that understands these constraints, double-bookings and last-minute cancellations erode student trust and cost studios an average of eight thousand dollars annually in lost revenue.",
                stat: "Studios lose $8,000+/year to scheduling conflicts",
              },
              {
                icon: Users,
                title: "Student Retention and Community Erosion",
                description:
                  "The average yoga studio loses thirty-five percent of new students within their first three months. Without automated engagement — welcome sequences, milestone celebrations, re-engagement campaigns for lapsed members, and personalized class recommendations — students quietly drift away. Most studio owners do not realize a student has left until months later when the revenue impact becomes impossible to ignore.",
                stat: "35% of new yoga students leave within 90 days",
              },
              {
                icon: TrendingDown,
                title: "Revenue Leakage from Manual Processes",
                description:
                  "Yoga studios relying on manual billing, paper waivers, and spreadsheet-based inventory tracking experience significant revenue leakage. Failed credit cards go unnoticed for weeks, retail inventory counts drift from reality, workshop deposits slip through the cracks, and teacher pay calculations consume hours of error-prone administrative time. Industry data shows that studios using manual processes lose between nine and fourteen percent of potential revenue each month.",
                stat: "9-14% monthly revenue lost to manual process errors",
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

      {/* ════════════════════════════════════════════════════════════════════
          SOLUTION DEEP-DIVE — 4 FEATURES
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
            Features Built for Yoga Studios
          </h2>
          <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
            Every feature in GymWyse has been refined based on feedback from hundreds of yoga studios worldwide. Here is how we solve the real problems you face daily.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                <Calendar className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Intelligent Multi-Format Class Scheduling
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse scheduling engine understands the nuances of yoga studio operations in ways generic booking software simply cannot. Configure class-specific requirements — Hot Yoga rooms need mandatory cool-down buffers between sessions, Aerial Yoga classes require equipment inspection windows, and Restorative sessions need extra setup time for props. The system automatically enforces these constraints, preventing scheduling conflicts before they occur. Teachers are matched to classes based on their certifications: only RYT-500 holders can be assigned to advanced Ashtanga series, only RPYT-certified instructors to Prenatal classes. Substitute management lets you find qualified replacements in seconds, with automatic notifications to students about teacher changes. The result is a conflict-free schedule that maximizes room utilization and student satisfaction. Studios using GymWyse scheduling report a twenty-two percent improvement in room utilization and a forty-one percent reduction in class cancellations within the first six months.
              </p>
              <ul className="space-y-2">
                {[
                  "Room-specific capacity and temperature presets for Hot, Warm, and Standard rooms",
                  "Certification-based teacher-to-class matching with automatic conflict detection",
                  "Drag-and-drop schedule builder with recurring series and one-off workshop support",
                  "Student waitlist with automatic promotion and real-time push notifications",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-sapphire-blue/10 rounded-lg flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Teacher Credential and Certification Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Your teachers are the heart of your studio, and ensuring they maintain proper credentials is both a legal requirement and a quality assurance measure. GymWyse provides a centralized credential vault for every instructor on your roster. Track Yoga Alliance registrations including RYT-200, RYT-500, E-RYT-200, E-RYT-500, RPYT, and RCYT designations alongside CPR and First Aid certifications, liability insurance expiration dates, and specialty training completions for modalities like Yin, Aerial, and Kundalini. The system sends tiered renewal reminders at ninety days, sixty days, and thirty days before any credential expires, and can automatically restrict an instructor from being scheduled for classes requiring an expired certification. Digital certificate storage eliminates paper filing, and a one-click compliance report shows your entire team's certification status at a glance — invaluable during insurance audits or Yoga Alliance continuing education reviews.
              </p>
              <ul className="space-y-2">
                {[
                  "Automated renewal reminders at 90, 60, and 30 days before expiration",
                  "Digital certificate storage with drag-and-drop upload",
                  "Scheduling restrictions that enforce certification requirements per class type",
                  "One-click compliance reports for audits and insurance verification",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                <DollarSign className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Integrated Retail and Point-of-Sale System
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Retail is an often-underutilized revenue stream for yoga studios, yet studios that actively manage their retail operations generate twelve to fifteen percent of total revenue from merchandise sales. GymWyse includes a complete point-of-sale system at no additional cost, letting you sell mats, yoga blocks, straps, bolsters, blankets, essential oils, incense, aromatherapy products, branded apparel, water bottles, and any other products your students want. The POS syncs with your member database, so purchases can be charged to a member's account or processed via card, cash, or digital wallet. Inventory management tracks stock levels across locations, sends automatic reorder alerts when products drop below your configured thresholds, and provides detailed profitability analysis per product category and supplier. You can also create product bundles — like a new student starter kit with a mat, two blocks, and a strap at a discounted package price — to drive higher average transaction values and improve the new student onboarding experience.
              </p>
              <ul className="space-y-2">
                {[
                  "Barcode scanning, manual entry, and member-account charging",
                  "Automatic reorder alerts and supplier management with cost tracking",
                  "Product bundling for new student kits and seasonal promotions",
                  "Revenue attribution reports showing retail contribution to total studio income",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-sapphire-blue/10 rounded-lg flex items-center justify-center mb-5">
                <Heart className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Student Retention and Community Engagement Engine
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Building a loyal yoga community requires consistent, personalized communication that goes far beyond generic email blasts. GymWyse retention engine uses behavioral data — class attendance patterns, booking frequency, membership status, and purchase history — to automatically trigger the right message at the right time. New students receive a welcome series introducing them to different class formats and teachers. When a regular practitioner misses their usual Wednesday evening Vinyasa for two consecutive weeks, the system sends a personalized re-engagement message. Milestone celebrations recognize practice anniversaries, hundredth class achievements, and membership renewals. Churn risk scoring identifies at-risk members before they leave, giving you a window to intervene with a personal outreach, a complimentary private session, or a special retention offer. Studios using the GymWyse engagement engine see an average twenty-eight percent improvement in twelve-month retention rates and a nineteen percent increase in class pack renewals compared to their pre-GymWyse baseline.
              </p>
              <ul className="space-y-2">
                {[
                  "Automated welcome sequences, milestone celebrations, and re-engagement campaigns",
                  "Churn risk scoring with configurable intervention triggers",
                  "Personalized class recommendations based on attendance history and preferences",
                  "Push notifications, email, and SMS communication channels with delivery analytics",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          MID-CONTENT CTA — CALCULATE ROI
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-7 h-7 text-electric-green" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
              See What GymWyse Can Save Your Yoga Studio
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue your yoga studio could gain by switching to GymWyse. Most studios see a return on investment within the first sixty days.
            </p>
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INDUSTRY TRENDS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Yoga Industry Trends Shaping 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the yoga studio industry this year and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Active Ageing and Senior Yoga Programs",
                description:
                  "The over-sixty demographic is the fastest-growing segment in yoga participation, with enrollment in gentle and chair yoga classes increasing by thirty-eight percent year over year. Studios that offer dedicated Active Ageing programs with modified sequences, slower pacing, and accessibility accommodations are capturing a loyal, high-retention demographic. GymWyse helps you create age-appropriate class categories, manage health waivers with specific medical history fields, and track participant progress over time.",
              },
              {
                title: "Meditation, Sound Baths, and Holistic Wellness Integration",
                description:
                  "Students increasingly expect yoga studios to offer more than asana practice. Meditation classes, guided sound bath sessions using singing bowls and gongs, breathwork workshops, and holistic wellness seminars are becoming essential schedule additions. Studios adding these modalities report twenty-three percent higher per-member revenue. GymWyse scheduling system handles non-traditional class formats with custom duration settings, equipment requirements, and capacity limits that differ from standard yoga sessions.",
              },
              {
                title: "Yoga Retreat and Immersion Management",
                description:
                  "Retreat revenue is becoming a significant income stream for ambitious studios, with the global yoga retreat market projected to exceed nineteen billion dollars by 2027. Managing multi-day events with accommodation, meal plans, transportation logistics, and tiered pricing requires dedicated tools. GymWyse event management module handles deposit collection, payment plan scheduling, participant communication timelines, and post-retreat feedback surveys — all from the same platform you use for your daily studio operations.",
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

      {/* ════════════════════════════════════════════════════════════════════
          CASE STUDY — LOTUS FLOW YOGA, PORTLAND
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Case Study: Lotus Flow Yoga, Portland
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              How a two-location yoga studio transformed their operations and revenue with GymWyse.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="mb-8">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Lotus Flow Yoga operates two studio locations in Portland, Oregon, offering Vinyasa, Yin, Hot Yoga, Restorative, and Prenatal classes across fourteen instructors and over sixty weekly sessions. Before switching to GymWyse, owner Maya Richardson managed scheduling through a combination of Mindbody and Google Sheets, tracked teacher certifications in a filing cabinet, and processed retail sales through a separate Square terminal that had no connection to her membership data.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                Within ninety days of implementing GymWyse, Lotus Flow consolidated all operations into a single platform. The automated scheduling system eliminated the three to four weekly conflicts that had been causing class cancellations. Teacher certification tracking surfaced two instructors whose CPR certifications had lapsed — a liability risk that had gone unnoticed for months. The integrated retail POS increased accessory sales by thirty-one percent as front desk staff could now suggest products based on a student's class history and purchase patterns.
              </p>
            </div>
            <h4 className="text-lg font-semibold text-pure-white mb-6 text-center">
              Before and After GymWyse
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { metric: "Monthly Revenue", before: "$38,400", after: "$52,100" },
                { metric: "Student Retention (12-mo)", before: "54%", after: "78%" },
                { metric: "Admin Hours / Week", before: "22 hrs", after: "7 hrs" },
                { metric: "Class Cancellation Rate", before: "11%", after: "2.5%" },
                { metric: "Retail Revenue Share", before: "4%", after: "14%" },
                { metric: "Waitlist Fill Rate", before: "N/A", after: "92%" },
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
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3 TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            What Yoga Studio Owners Say About GymWyse
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-electric-green fill-electric-green" />
                  ))}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold text-sm">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {t.author}
                    </div>
                    <div className="text-xs text-cool-gray">{t.role}</div>
                    <div className="text-xs text-dim-gray">{t.location}</div>
                    <div className="text-xs text-sapphire-blue">{t.previousSoftware}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          COMPARISON TABLE — vs MINDBODY
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              GymWyse vs Mindbody for Yoga Studios
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Mindbody for yoga studio management. We built GymWyse to deliver more value at a lower price point with features specifically designed for studio owners.
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
                  Mindbody
                </div>
              </div>
              {comparisonRows.map((row, i) => (
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
                Why Yoga Studios Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Save over thirty dollars per month compared to Mindbody's base tier while getting more yoga-specific features included",
                  "No twelve-month contract lock-in — switch or cancel whenever you need to without penalty fees",
                  "Dedicated yoga studio onboarding specialist who understands your class types, teacher structures, and retail needs",
                  "Built-in teacher certification tracking that Mindbody charges extra for or does not offer at all",
                  "Faster customer support with an average response time under two hours versus Mindbody's twenty-four-hour SLA",
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

      {/* ════════════════════════════════════════════════════════════════════
          FAQ — 8 QUESTIONS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
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
              Common questions from yoga studio owners about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
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

      {/* ════════════════════════════════════════════════════════════════════
          INTERNAL LINKS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
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
              Discover how GymWyse helps yoga studios tackle every aspect of their business.
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

      {/* ════════════════════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple, Transparent Pricing for Yoga Studios
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your yoga studio needs — class scheduling, membership management, teacher credential tracking, retail POS, branded member app, and forty-plus analytics reports — starting at just ninety-nine dollars per month. No setup fees. No long-term contracts. Cancel anytime with zero penalties.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Revenue Analytics + Branded Member App + Retail POS
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

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Transform Your Yoga Studio?
            </h2>
            <p className="text-lg text-soft-white mb-8">
              Join hundreds of yoga studios that have switched to GymWyse and never looked back. From single-room Hatha studios to multi-location yoga empires, our yoga management software scales with your practice. Book a personalized demo today and see exactly how GymWyse will streamline your operations, boost retention, and grow your revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
