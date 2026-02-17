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
  Settings,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── FAQ Data ─────────────────────── */
const faqItems = [
  {
    question: "How does GymWyse handle different pricing for private, group reformer, and mat Pilates classes?",
    answer:
      "GymWyse supports fully independent pricing structures for every class format in your studio. Private one-on-one reformer sessions can be priced at premium rates with their own package and membership options, while semi-private sessions for two to four clients, group reformer classes, and mat-based classes each have their own configurable pricing tiers. You can create membership plans that bundle specific class types — for example, an unlimited mat-plus-two-reformer-sessions-per-week plan — or offer standalone class packs with custom expiry windows. Introductory packages, such as three private sessions for a discounted rate, are simple to configure and track. The system also supports per-session billing for private clients who prefer not to commit to packages, with automatic invoicing and payment collection after each appointment.",
  },
  {
    question: "Can GymWyse track equipment capacity and Reformer availability?",
    answer:
      "Absolutely. GymWyse is one of the few studio management platforms that understands equipment-based capacity constraints. Instead of simply setting a room capacity number, you configure the exact equipment in each studio space — for example, eight Reformers, two Cadillacs, three Wunda Chairs, and one Ladder Barrel in Studio A. Class capacity is then automatically tied to available equipment count rather than arbitrary numbers. If a Reformer is taken out of service for maintenance, the system adjusts the class capacity for all affected sessions and can notify waitlisted clients of the change. Equipment utilization reports show you which apparatus are most and least used, helping you make informed decisions about future equipment purchases.",
  },
  {
    question: "Does GymWyse track Pilates instructor certifications and specializations?",
    answer:
      "Yes. Our instructor credential management system is built to handle the complexity of Pilates certifications. Track comprehensive certifications from bodies like BASI, Stott, Polestar, Balanced Body, and Peak Pilates, as well as apparatus-specific specializations such as Reformer, Cadillac, Chair, and Barrel qualifications. The system also manages continuing education credits, CPR and First Aid certifications, liability insurance expiration dates, and specialty training completions for modalities like pre and post-natal Pilates or clinical rehabilitation Pilates. Automated renewal reminders are sent at configurable intervals before any credential expires, and the scheduling engine can restrict instructors from teaching class types that require certifications they do not hold or that have expired.",
  },
  {
    question: "How does GymWyse support clinical Pilates and physiotherapy referral partnerships?",
    answer:
      "GymWyse includes dedicated features for studios operating clinical Pilates programs or working with physiotherapy referral networks. You can create referral source tracking to attribute new clients to specific physiotherapy practices, hospitals, or healthcare providers. Client profiles include fields for injury history, rehabilitation goals, physician notes, and progress tracking that instructors can reference before each session. Automated progress reports can be generated and shared with referring practitioners, strengthening your professional relationships and driving continued referrals. Revenue attribution reports show exactly how much income is generated through each referral source, helping you identify and nurture your most valuable clinical partnerships.",
  },
  {
    question: "Can clients book Pilates sessions through a mobile app?",
    answer:
      "Yes. Every GymWyse subscription includes a fully branded member app for iOS and Android at no additional cost. Clients can browse your complete schedule of mat classes, group reformer sessions, semi-private appointments, and private sessions; book and join waitlists; purchase memberships and session packs; check in via QR code; view their booking history and remaining session credits; and receive push notifications for schedule changes, instructor substitutions, or promotional offers. The app displays real-time equipment availability so clients can see exactly how many Reformer spots remain in any given class. For private clients, the app supports direct messaging with their instructor for scheduling coordination.",
  },
  {
    question: "How does equipment maintenance tracking work in GymWyse?",
    answer:
      "GymWyse includes a comprehensive equipment maintenance module that helps protect your significant investment in Pilates apparatus. Create maintenance schedules for each piece of equipment — quarterly spring replacements for Reformers, annual cable inspections for Cadillacs, monthly safety checks for Chairs — and the system automatically generates work orders and sends reminders to your maintenance team or designated staff member. When equipment is taken offline for repair, the system automatically reduces class capacity for affected sessions and notifies enrolled clients. Maintenance history is logged for each piece of apparatus, creating an audit trail for insurance purposes and helping you forecast replacement costs. Studios using our maintenance tracking report thirty percent fewer unexpected equipment failures and significantly reduced liability exposure.",
  },
  {
    question: "Can I manage multiple Pilates studio locations with GymWyse?",
    answer:
      "Yes. GymWyse multi-location management provides a unified dashboard across all your studios while respecting the unique configuration of each location. Every studio can have its own equipment inventory, room setup, class schedule, pricing structure, and staff assignments. Clients can book across locations with a single membership or session pack, and you can configure location-specific restrictions if needed. Consolidated financial reporting gives you a complete picture of your business performance, while location-level drill-downs let you compare revenue, utilization, and retention metrics across studios. Instructors can be shared between locations with schedule visibility that prevents double-booking and calculates travel time between venues.",
  },
  {
    question: "What reporting and analytics does GymWyse provide for Pilates studios?",
    answer:
      "GymWyse delivers over forty pre-built reports tailored to Pilates studio operations, plus a custom report builder for specialized analysis. Key reports include equipment utilization rates by apparatus type and time slot, class fill rates for private versus group versus mat sessions, instructor performance and client retention metrics, revenue breakdown by session type and pricing tier, client lifetime value calculations, and predictive churn scoring that identifies clients likely to discontinue before they actually do. Pilates-specific reports show reformer utilization efficiency — helping you determine if your current equipment count is optimal — and private session conversion rates that track how many group clients upgrade to private instruction. All reports export to CSV or PDF and can be scheduled for automatic delivery.",
  },
];

/* ── Testimonials ─────────────────────── */
const testimonials = [
  {
    quote:
      "Before GymWyse, managing twelve Reformers across two studios was a logistical nightmare. We used Mindbody but it treated our Reformer classes the same as any group fitness class — no understanding of equipment-based capacity. GymWyse ties capacity directly to equipment count, and when we take a Reformer offline for spring replacement, the class size adjusts automatically. Our equipment utilization went from sixty-one percent to eighty-nine percent, and no-shows dropped by thirty-four percent with the automated reminder system.",
    author: "Charlotte Hayes",
    role: "Owner, Reform Studio",
    location: "London, United Kingdom",
    previousSoftware: "Previously on Mindbody",
  },
  {
    quote:
      "Running a clinical Pilates studio with physiotherapy referrals requires a different level of client management. GymWyse lets us track referral sources, log injury histories, record session notes per client, and generate progress reports we can share with referring physiotherapists. No other software we evaluated could do all of this within a single platform. Our referral network has grown from four to seventeen practices in eighteen months because we can actually demonstrate client outcomes with data.",
    author: "Dr. James Whitfield",
    role: "Director, Core Align Clinical Pilates",
    location: "Melbourne, Australia",
    previousSoftware: "Previously on ClubReady",
  },
  {
    quote:
      "As a boutique Pilates studio offering everything from mat classes to private Cadillac sessions, pricing complexity was our biggest operational headache. GymWyse lets us price each format independently, create hybrid memberships that combine mat and reformer credits, and track per-session revenue with precision. Our average revenue per client increased by twenty-two percent simply because we could finally offer the flexible pricing our clients wanted. The instructor certification tracking is also exceptional.",
    author: "Maria Santos",
    role: "Founder, Equilibrium Pilates",
    location: "Lisbon, Portugal",
    previousSoftware: "Previously on Momoyoga",
  },
];

/* ── Comparison Data ─────────────────────── */
const comparisonRows = [
  { feature: "Equipment-based capacity management", gymwyse: "Per-apparatus tracking", competitor: "Room capacity only" },
  { feature: "Private vs group vs mat pricing", gymwyse: "Independent pricing tiers", competitor: "Limited class types" },
  { feature: "Instructor certification tracking", gymwyse: "Automated with apparatus specializations", competitor: "Manual tracking" },
  { feature: "Equipment maintenance scheduling", gymwyse: "Built-in with auto-capacity adjustment", competitor: "Not available" },
  { feature: "Clinical Pilates / referral tracking", gymwyse: "Full referral source management", competitor: "No clinical features" },
  { feature: "Branded member app", gymwyse: "Included", competitor: "$200+/mo premium tier" },
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
              Built for Pilates Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Pilates Studio Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              GymWyse is the all-in-one Pilates management software designed for the unique operational demands of equipment-based studios. Our gym management software understands that Pilates studios are fundamentally different from standard fitness facilities — your capacity is defined by Reformers, Cadillacs, Chairs, and Barrels rather than floor space, your pricing spans private sessions to group mat classes, and your instructors hold apparatus-specific certifications that must be tracked and enforced. Whether you operate a single boutique studio or a growing multi-location Pilates brand, GymWyse gives you the tools to manage equipment-based scheduling, flexible pricing, instructor credentials, client relationships, and every operational detail that makes your studio run smoothly.
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
              Trusted by studios like Reform Studio, Club Pilates, and Core Align
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
              A Complete Operations Platform for Pilates Studios
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Operating a Pilates studio requires managing a uniquely complex set of moving parts. Your Reformers, Cadillacs, Wunda Chairs, and Ladder Barrels represent significant capital investments that must be scheduled, maintained, and utilized efficiently. Your instructors hold diverse certifications spanning comprehensive training, apparatus specializations, and clinical rehabilitation qualifications. Your pricing model spans private one-on-one sessions, semi-private groups, full group Reformer classes, and open mat sessions — each with different economics. GymWyse brings all of these operational pillars into a single, unified platform purpose-built for Pilates.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                Our membership and billing system supports every pricing model Pilates studios use — unlimited monthly plans, session credit packs with configurable expiry windows, pay-per-session billing for private clients, introductory offer packages, and hybrid plans that combine mat class access with a set number of Reformer credits. Automated recurring billing, failed payment dunning sequences, and real-time revenue dashboards keep your finances accurate and transparent. The class scheduling engine ties capacity directly to equipment count rather than arbitrary room limits, so your eight-Reformer studio never accidentally books nine clients. Built-in check-in via QR code or front desk scan provides accurate attendance data that feeds your analytics. Staff management handles pay rate calculations across different session types — instructors often earn different rates for private versus group sessions — alongside credential tracking and performance reviews.
              </p>
              <p className="text-base text-cool-gray leading-relaxed">
                Every Pilates studio has its own way of operating, and GymWyse adapts to your specific workflow. Configure your equipment inventory, customize your booking rules, set your cancellation policies, and build the operational infrastructure your studio needs to deliver exceptional client experiences while growing your bottom line.
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
            Challenges Pilates Studios Face Every Day
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Settings,
                title: "Equipment-Based Scheduling Complexity",
                description:
                  "Unlike standard fitness studios where capacity equals floor space, Pilates studios are constrained by equipment count. A studio with ten Reformers cannot book an eleventh client, regardless of room size. Most booking software does not understand this distinction, leading to overbooking, manual capacity management, and constant schedule conflicts. When equipment goes offline for maintenance — spring replacements on Reformers, cable inspections on Cadillacs — capacity must adjust immediately across all affected sessions. Studios without equipment-aware scheduling lose an average of six thousand dollars per year to overbooking refunds and manual administrative workarounds.",
                stat: "Studios lose $6,000+/year to equipment scheduling errors",
              },
              {
                icon: DollarSign,
                title: "Pricing Complexity Across Session Types",
                description:
                  "Pilates studios operate multiple pricing models simultaneously: private sessions at premium rates of seventy-five to one hundred fifty dollars per hour, semi-private sessions for two to four clients at mid-tier pricing, group Reformer classes at a lower per-head rate, and mat classes at the most accessible price point. Managing memberships, session packs, and drop-in pricing across all these formats — while accurately calculating instructor compensation that varies by session type — creates accounting complexity that generic fitness software simply cannot handle well.",
                stat: "4+ pricing tiers creating billing complexity and revenue leakage",
              },
              {
                icon: TrendingDown,
                title: "Client Retention and Private Session Conversion",
                description:
                  "The average Pilates studio loses twenty-nine percent of new clients within their first sixty days, often because there is no systematic onboarding journey that introduces clients to the full range of offerings. Studios that fail to convert group class attendees into higher-value private or semi-private sessions leave significant revenue on the table. Without automated engagement sequences, progress tracking, and personalized upgrade recommendations, studios miss the window when clients are most receptive to deepening their Pilates practice and investment.",
                stat: "29% of new Pilates clients leave within 60 days",
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
            Features Built for Pilates Studios
          </h2>
          <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
            Every feature in GymWyse has been refined with input from Pilates studio owners worldwide. Here is how we solve the real problems equipment-based studios face daily.
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
                <Settings className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Equipment-Aware Scheduling and Capacity Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse is one of the very few studio management platforms that genuinely understands equipment-based capacity. Instead of setting an arbitrary room capacity number, you configure the exact apparatus inventory in each studio space — eight Reformers, two Cadillacs, three Wunda Chairs, one Ladder Barrel, and two Spine Correctors in Studio A, for example. Class capacity is then automatically calculated based on the equipment required for that session type. A group Reformer class in Studio A has a maximum of eight participants, while a mixed-apparatus class might accommodate six clients using different pieces of equipment simultaneously. When a Reformer needs to be taken offline for spring replacement or maintenance, the system automatically reduces capacity for all affected sessions and notifies enrolled clients of the change. Equipment utilization reports reveal which apparatus are underused — perhaps your Cadillacs only run at forty percent capacity — so you can create targeted class offerings to improve utilization. Studios implementing GymWyse equipment-aware scheduling see an average twenty-six percent improvement in apparatus utilization and a complete elimination of overbooking incidents.
              </p>
              <ul className="space-y-2">
                {[
                  "Per-apparatus inventory configuration with automatic capacity calculation per class type",
                  "Maintenance scheduling that auto-adjusts capacity and notifies affected clients",
                  "Equipment utilization dashboards showing usage rates by apparatus, time slot, and instructor",
                  "Mixed-apparatus class support for sessions using multiple equipment types simultaneously",
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
                <DollarSign className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Multi-Tier Pricing and Session Credit Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Pilates studios need pricing flexibility that generic fitness software cannot provide. GymWyse supports fully independent pricing for every session format: private one-on-one sessions, semi-private sessions for two to four clients, group Reformer classes, and open mat classes each operate with their own pricing structure, membership plans, and session packs. Create hybrid memberships that give clients unlimited mat access plus a fixed number of Reformer or private session credits per month. Offer introductory packages — such as three private sessions plus five group classes for a special new-client rate — with automatic conversion to standard pricing after the package is consumed. Session credit tracking shows clients exactly how many credits they have remaining and when they expire, reducing confusion and front desk inquiries. For private clients, the system supports per-session invoicing with automatic payment collection, recurring package billing, and the ability to charge different rates based on session duration (thirty minutes, fifty-five minutes, or eighty minutes). Instructor compensation is calculated automatically based on session type, with configurable pay rates for private, semi-private, group, and mat formats. Studios using GymWyse multi-tier pricing report a seventeen percent increase in average revenue per client as they can finally offer the pricing flexibility their clients demand.
              </p>
              <ul className="space-y-2">
                {[
                  "Independent pricing tiers for private, semi-private, group reformer, and mat classes",
                  "Hybrid membership plans combining unlimited mat access with reformer credits",
                  "Automatic instructor pay calculation with different rates per session type",
                  "Session credit tracking with expiry management and client-facing visibility",
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
                <ShieldCheck className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Instructor Certification and Apparatus Specialization Tracking
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Pilates instructor credentials are uniquely complex compared to other fitness modalities. A comprehensive certification from BASI, Stott, Polestar, Balanced Body, or Peak Pilates is just the starting point — instructors may hold additional apparatus-specific specializations for Reformer, Cadillac, Chair, and Barrel, along with specialty certifications for pre and post-natal Pilates, scoliosis management, osteoporosis protocols, or clinical rehabilitation. GymWyse credential management system handles this entire hierarchy. Store and track every certification with expiration dates, continuing education credit requirements, and renewal milestones. The scheduling engine enforces credential-based restrictions: an instructor without a Cadillac specialization cannot be assigned to a Cadillac class, and an instructor whose comprehensive certification has lapsed is automatically blocked from all teaching assignments until it is renewed. Tiered renewal reminders are sent at ninety, sixty, and thirty days before any credential expires. A one-click compliance dashboard shows the certification status of your entire teaching team, which is invaluable during insurance audits or when onboarding new instructors. Studios using GymWyse credential tracking report zero compliance incidents and a fifty percent reduction in administrative time spent managing instructor qualifications.
              </p>
              <ul className="space-y-2">
                {[
                  "Comprehensive certification tracking for BASI, Stott, Polestar, Balanced Body, and Peak Pilates",
                  "Apparatus-specific specialization management (Reformer, Cadillac, Chair, Barrel)",
                  "Scheduling restrictions enforcing credential requirements per class and apparatus type",
                  "Continuing education credit tracking with automated renewal reminders",
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
                <Users className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Client Journey Management and Private Session Conversion
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                The highest-value Pilates clients are those who engage in private and semi-private sessions, where per-client revenue is three to five times higher than group classes. GymWyse client journey engine is designed to systematically guide new clients from their introductory experience through group classes and into higher-value private instruction. Automated onboarding sequences introduce new clients to your studio, recommend appropriate class levels based on their intake assessment, and schedule follow-up touchpoints to check on their progress. After a client has attended a configurable number of group sessions, the system triggers a personalized upgrade recommendation — perhaps offering a discounted trial private session or highlighting the benefits of semi-private instruction for their specific goals. Progress tracking lets instructors log session notes, movement assessments, and client goals that inform future recommendations. Churn risk scoring analyzes attendance patterns, booking frequency, and engagement signals to identify clients likely to leave, giving you time to intervene with personalized outreach. Studios using the GymWyse client journey engine see a twenty-three percent increase in private session bookings and a thirty-one percent improvement in twelve-month client retention rates.
              </p>
              <ul className="space-y-2">
                {[
                  "Automated onboarding sequences with intake assessments and class-level recommendations",
                  "Intelligent upgrade triggers that recommend private sessions based on group class attendance",
                  "Per-client session notes, movement assessments, and progress tracking for instructors",
                  "Churn risk scoring with configurable intervention alerts and retention campaign automation",
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
              See What GymWyse Can Save Your Pilates Studio
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue your Pilates studio could gain by switching to GymWyse. Most studios recoup their subscription cost within the first thirty days through improved equipment utilization alone.
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
              Pilates Industry Trends Shaping 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the Pilates studio industry this year and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Clinical Pilates and Physiotherapy Referral Partnerships",
                description:
                  "The intersection of Pilates and healthcare is accelerating rapidly in 2026. Studios that establish formal referral partnerships with physiotherapy practices, orthopedic clinics, and rehabilitation centers are capturing a high-value client segment that commits to longer-term programs and has higher lifetime value. Clinical Pilates programs require enhanced client documentation, progress tracking, and outcome reporting capabilities. GymWyse supports this clinical workflow with referral source attribution, injury history logging, session-level progress notes, and automated outcome reports that can be shared with referring healthcare providers to strengthen professional relationships.",
              },
              {
                title: "Men's Pilates Growth and Demographic Expansion",
                description:
                  "Male participation in Pilates has increased by forty-two percent over the past two years, driven by professional athletes, CrossFit practitioners seeking mobility work, and corporate wellness programs. Studios that actively market to male demographics and create class environments that feel welcoming to men are tapping into a rapidly growing market segment. GymWyse helps you track demographic data across your client base, measure marketing campaign effectiveness by audience segment, and create targeted class offerings — like a Pilates for Athletes series — that appeal to underrepresented demographics in your studio.",
              },
              {
                title: "Prenatal and Postnatal Pilates Specialization",
                description:
                  "Demand for prenatal and postnatal Pilates programs continues to grow as more expectant and new mothers seek safe, expert-guided movement during and after pregnancy. Studios offering certified prenatal Pilates instructors with specialized equipment modifications are building loyal client relationships that often extend years beyond the postnatal period. GymWyse supports this specialization with prenatal certification tracking for instructors, trimester-based class categorization, health waiver fields specific to pregnancy, and automated program progression that guides clients through prenatal and postnatal phases with appropriate class recommendations.",
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
          CASE STUDY — REFORM STUDIO, LONDON
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
              Case Study: Reform Studio, London
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              How a premium London Pilates studio optimized equipment utilization and grew revenue with GymWyse.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="mb-8">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Reform Studio operates a premium Pilates facility in Central London with twelve Reformers, four Cadillacs, six Wunda Chairs, and three Ladder Barrels across two studio rooms. Owner Charlotte Hayes was managing scheduling through Mindbody, which treated every class as a simple room-capacity booking with no awareness of equipment constraints. The result was frequent overbookings, manual capacity adjustments when equipment needed maintenance, and a pricing structure that could not differentiate between private Cadillac sessions and group Reformer classes. Instructor credentials were tracked in a spreadsheet that no one consistently updated.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                After implementing GymWyse, Reform Studio configured every piece of apparatus in the system, linked class types to specific equipment requirements, and set up automatic maintenance schedules. Equipment utilization jumped from sixty-one percent to eighty-nine percent as the data revealed that Cadillac classes were consistently underbooked — Charlotte responded by creating a popular Cadillac Intensive series that filled the gap. Multi-tier pricing allowed the studio to offer hybrid memberships combining mat and Reformer credits, which increased average revenue per client by twenty-two percent. Instructor certification tracking caught two lapsed credentials within the first month of use, preventing potential insurance and liability issues.
              </p>
            </div>
            <h4 className="text-lg font-semibold text-pure-white mb-6 text-center">
              Before and After GymWyse
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { metric: "Monthly Revenue", before: "£28,500", after: "£41,200" },
                { metric: "Equipment Utilization", before: "61%", after: "89%" },
                { metric: "Client Retention (12-mo)", before: "48%", after: "74%" },
                { metric: "Overbooking Incidents / Mo", before: "8-12", after: "0" },
                { metric: "Admin Hours / Week", before: "18 hrs", after: "5 hrs" },
                { metric: "Revenue per Client", before: "£142/mo", after: "£173/mo" },
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
            What Pilates Studio Owners Say About GymWyse
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
              GymWyse vs Mindbody for Pilates Studios
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Mindbody for Pilates studio management. We built GymWyse to handle the equipment-based complexity that generic platforms ignore.
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
                Why Pilates Studios Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Equipment-aware scheduling that ties class capacity to actual apparatus count — something Mindbody cannot do",
                  "Independent pricing tiers for private, semi-private, group reformer, and mat sessions without workarounds",
                  "Built-in equipment maintenance tracking with automatic capacity adjustments when apparatus are offline",
                  "Apparatus-specific instructor certification enforcement that prevents unqualified teaching assignments",
                  "Thirty percent lower monthly cost with more Pilates-specific features included in the base plan",
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
              Common questions from Pilates studio owners about GymWyse.
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
              Discover how GymWyse helps Pilates studios tackle every aspect of their business.
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
            Simple, Transparent Pricing for Pilates Studios
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your Pilates studio needs — equipment-aware scheduling, multi-tier pricing, instructor credential tracking, client journey management, maintenance scheduling, branded member app, and forty-plus analytics reports — starting at just ninety-nine dollars per month. No setup fees. No long-term contracts. Cancel anytime with zero penalties.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Equipment Management + Revenue Analytics + Branded Member App
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
              Ready to Transform Your Pilates Studio?
            </h2>
            <p className="text-lg text-soft-white mb-8">
              Join hundreds of Pilates studios that have switched to GymWyse and never looked back. From boutique single-room reformer studios to multi-location Pilates brands with clinical programs, our Pilates management software scales with your business. Book a personalized demo today and see exactly how GymWyse will optimize your equipment utilization, streamline your operations, and grow your revenue.
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/platform/revenue-analytics"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Explore the Revenue Command Center
              </Link>
              <Link
                href="/blog"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                Read Our Latest Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
