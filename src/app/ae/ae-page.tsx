"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Banknote,
  Languages,
  Sparkles,
  Crown,
  TrendingUp,
  Watch,
  Shield,
  Dumbbell,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    question: "Does GymWyse support Arabic?",
    answer:
      "GymWyse is building full Arabic language support with a right-to-left interface launching in Q3 2026. The RTL layout framework is already live, meaning all UI elements, navigation menus, calendars, and forms mirror correctly for Arabic readers today. The full Arabic language pack, which includes member-facing communications, class descriptions, invoices, receipts, and the complete admin interface, is currently in beta with select UAE partners. Bilingual member communications in Arabic and English are available now for emails, SMS, and push notifications.",
  },
  {
    question: "What currencies are supported?",
    answer:
      "GymWyse natively supports AED, USD, EUR, SAR, QAR, and KWD billing. Members choose their preferred billing currency at sign-up, and all conversions use daily interbank rates with zero hidden markups. Your revenue reporting consolidates everything into your base currency — typically AED — with per-currency breakdowns for full reconciliation. You can also generate financial reports in any supported currency for regional stakeholders or investors.",
  },
  {
    question: "Can I manage recovery services like cold plunge and sauna?",
    answer:
      "Yes. GymWyse includes a dedicated amenity management module for cold plunge pools, infrared saunas, cryotherapy chambers, IV drip bars, compression therapy stations, and any custom wellness service you define. Members book directly from the app with real-time availability. You set capacity limits, session durations, pricing tiers, and maintenance windows. The system tracks utilisation rates, revenue per session, peak demand patterns, and upsell conversion from personal training to recovery services.",
  },
  {
    question: "Is data hosted locally in the UAE?",
    answer:
      "GymWyse hosts data on AWS infrastructure with regional options available for UAE and Middle East operators. For enterprise clients requiring UAE-based data residency, we offer hosting on AWS Middle East (Bahrain) region (me-south-1). All data is encrypted at rest with AES-256 and in transit with TLS 1.3. We maintain SOC 2 Type II compliance and provide a Data Processing Agreement with every subscription at no additional cost.",
  },
  {
    question: "Does GymWyse comply with Vision 2030 fitness mandates?",
    answer:
      "GymWyse supports Saudi Vision 2030 compliance through several purpose-built features. These include fitness participation tracking and reporting that aligns with government KPIs, female-only session management with privacy-compliant scheduling, prayer time integration that automatically adjusts class schedules, Ramadan schedule management with extended evening hours configuration, and exportable reports formatted for government submissions. We work directly with Saudi operators to ensure our reporting meets evolving regulatory requirements.",
  },
  {
    question: "Can I manage VIP membership tiers?",
    answer:
      "Absolutely. GymWyse supports unlimited custom membership tiers including Standard, Premium, VIP, and Black Card, plus any custom tier you define. Each tier has its own access rules governing which amenities, classes, and time slots members can book. Tier-specific pricing, perks, and guest pass allocations are fully configurable. Automated workflows handle tier upgrades and downgrades with prorated billing adjustments, and VIP members can receive priority booking windows and complimentary services.",
  },
  {
    question: "What is GymWyse pricing in AED?",
    answer:
      "GymWyse starts at AED 365 per location per month for the Starter plan, which includes the core platform, revenue analytics, Arabic RTL support, local payment methods, and email support. The Growth plan for two to five locations is AED 290 per location per month, adding multi-location dashboards, priority support, and custom branding. Enterprise pricing is available for six or more locations with volume discounts, a dedicated account manager, and custom integrations. All plans include zero setup fees, monthly contracts with no lock-in, and a 14-day free trial.",
  },
  {
    question: "How do I switch from Glofox to GymWyse?",
    answer:
      "Switching from Glofox takes 10 to 14 days with our dedicated migration team handling the entire process. We export all member profiles, payment histories, contracts, class schedules, and staff records from Glofox. Due to Glofox API limitations, some data may require manual CSV exports, which our team handles for you. We run a parallel period where both systems stay live so you can verify data accuracy before the full switch. Migration is included free with your subscription. Book a migration call at gymwyse.com/demo to get started.",
  },
];

/* ------------------------------------------------------------------ */
/*  Comparison table data                                             */
/* ------------------------------------------------------------------ */
const comparisonRows = [
  {
    feature: "Monthly Pricing",
    gymwyse: "AED 365/location",
    glofox: "AED 485/location",
  },
  {
    feature: "Multi-Currency Billing",
    gymwyse: "Native (AED, USD, EUR, SAR, QAR, KWD)",
    glofox: "AED only",
  },
  {
    feature: "Arabic RTL Support",
    gymwyse: "RTL-ready (full Arabic Q3 2026)",
    glofox: "Full Arabic",
  },
  {
    feature: "Recovery / Amenity Management",
    gymwyse: "Native (included in all plans)",
    glofox: "Custom build required",
  },
  {
    feature: "VIP Membership Tiers",
    gymwyse: "Unlimited custom tiers",
    glofox: "5 tiers maximum",
  },
  {
    feature: "Wearable Integration",
    gymwyse: "Apple Watch, WHOOP, Garmin, Fitbit",
    glofox: "Apple Watch only",
  },
  {
    feature: "Prayer Time Scheduling",
    gymwyse: "Built-in integration",
    glofox: "Not available",
  },
  {
    feature: "Setup Fee",
    gymwyse: "AED 0",
    glofox: "AED 1,800+",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export function AEPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-green/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              UAE &amp; Middle East
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Gym Management Software for UAE &amp; Middle East
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              GymWyse is a gym management software platform engineered for the unique
              demands of the GCC fitness market. From multi-currency billing for a
              diverse expat population to luxury amenity scheduling and VIP tier
              management, GymWyse gives operators across Dubai, Abu Dhabi, Riyadh, Doha,
              and Kuwait City the tools they need to run world-class facilities.
            </p>
            <p className="text-base text-cool-gray leading-relaxed max-w-3xl mx-auto">
              The GCC fitness boom is accelerating. Saudi Vision 2030 is driving
              unprecedented investment in health and wellness infrastructure. The UAE
              leads the region in premium fitness concepts, and Qatar is converting
              World Cup venues into community wellness hubs. GymWyse is the gym
              management platform built specifically for this high-growth, high-expectation
              market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE OPPORTUNITY: VISION 2030 & GCC MARKET GROWTH             */}
      {/* ============================================================ */}
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
              Market Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
              Vision 2030 &amp; GCC Market Growth
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              The GCC fitness market is valued at $4.5 billion and growing at
              approximately 8% annually. This expansion is driven by government-backed
              health mandates, a young and affluent population, and rapid urbanisation
              across the Gulf states. Understanding the forces behind this growth is
              essential for operators positioning themselves for the next decade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                country: "Saudi Arabia",
                detail:
                  "Vision 2030 includes a national fitness mandate targeting 40% population participation in regular physical activity by 2030, up from 13% in 2019. The Saudi government has allocated billions in sports infrastructure investment, opened the market to foreign gym operators, and removed restrictions on female fitness participation. This has created the fastest-growing gym market in the Middle East, with new facility openings outpacing every other GCC country.",
              },
              {
                country: "United Arab Emirates",
                detail:
                  "The UAE positions itself as the regional wellness tourism capital, with Dubai and Abu Dhabi leading in premium fitness concepts. UAE gym memberships have surged from 450,000 to 680,000 in three years, and the premium segment is growing at 15% year-over-year. Operators here serve a highly international membership base where 80% of residents are expatriates, making multi-currency billing and multilingual support non-negotiable requirements.",
              },
              {
                country: "Qatar",
                detail:
                  "Post-World Cup infrastructure is being converted into community wellness and fitness facilities across Doha and Lusail. Qatar has invested heavily in sports science and recovery technology, creating demand for gyms that integrate advanced wellness services like cryotherapy, IV drip therapy, and performance analytics. The Qatari market favours technology-forward operators who offer connected fitness experiences.",
              },
              {
                country: "Kuwait",
                detail:
                  "Kuwait has launched national health initiatives to combat one of the highest obesity rates in the region. Government subsidies for fitness facilities, corporate wellness mandates, and a growing youth population are driving gym membership growth. Kuwait City is seeing a wave of boutique fitness concepts and luxury wellness centres targeting health-conscious professionals and families.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {item.country}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 glass-card p-8 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$4.5B", label: "GCC Fitness Market" },
                { value: "8%", label: "Annual Growth Rate" },
                { value: "680K+", label: "UAE Gym Members" },
                { value: "+15%", label: "Premium Segment Growth" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                    {stat.value}
                  </p>
                  <p className="text-sm text-cool-gray mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MULTI-CURRENCY PRICING                                       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Banknote className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Multi-Currency Pricing
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              The UAE and broader GCC region host one of the most internationally diverse
              populations on earth. Over 80% of UAE residents are expatriates, billing in
              their home currencies from US dollars and euros to British pounds and Indian
              rupees. GymWyse supports native billing in AED, USD, EUR, SAR, QAR, and KWD
              with automatic currency conversion at daily interbank rates and zero hidden
              markups on any transaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Member-Facing Currency Choice",
                description:
                  "Members select their preferred billing currency during sign-up. Whether a member earns in US dollars, euros, or Saudi riyals, they see prices and invoices in their chosen currency. Seamless switching is available anytime through the member app, with prorated adjustments calculated automatically.",
              },
              {
                title: "Operator Reporting in Any Currency",
                description:
                  "While members pay in their preferred currency, your revenue dashboards and financial reports consolidate everything into your base operating currency, typically AED. You can also generate reports in any supported currency for regional stakeholders, investors, or franchise headquarters outside the GCC.",
              },
              {
                title: "Full Payment Method Coverage",
                description:
                  "GymWyse integrates with Stripe Connect and local payment gateways to support credit cards, debit cards, and bank transfers across all GCC countries. Apple Pay and Google Pay are supported for in-app purchases. For operators in Saudi Arabia, mada card support ensures local debit card acceptance alongside international Visa and Mastercard.",
              },
              {
                title: "Automatic VAT Handling",
                description:
                  "UAE VAT at 5% is calculated automatically on every transaction with compliant tax invoice generation. For operators spanning multiple GCC jurisdictions, the system handles varying VAT rates by country. All invoices meet local tax authority requirements and can be exported in formats compatible with major accounting software.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LUXURY AMENITY MANAGEMENT                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Luxury Amenity Management
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Premium fitness facilities across the UAE and Middle East have moved far
              beyond traditional gym floors. Cold plunge pools, infrared saunas,
              cryotherapy chambers, IV drip bars, and compression therapy stations are now
              standard offerings at high-end facilities in Dubai, Abu Dhabi, and Riyadh.
              GymWyse provides a complete amenity management module purpose-built for
              these luxury recovery and wellness services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Cold Plunge Booking",
                description:
                  "Schedule cold plunge sessions with configurable duration limits, temperature tracking, and capacity management. Members book directly from the app with real-time availability. Operators set minimum intervals between sessions for water temperature recovery.",
              },
              {
                title: "Infrared Sauna Scheduling",
                description:
                  "Manage infrared sauna suites with time-slot booking, capacity limits per suite, and automated maintenance window scheduling. The system tracks sauna temperature logs to ensure consistent service quality and flags maintenance needs proactively.",
              },
              {
                title: "Cryotherapy Sessions",
                description:
                  "Book cryotherapy chamber sessions with integrated waiver management and contraindication screening. Members complete health questionnaires before their first session, and the system flags any medical conditions that require staff review before approval.",
              },
              {
                title: "IV Drip Appointments",
                description:
                  "Schedule IV drip therapy and vitamin infusion appointments with practitioner assignment, treatment type selection, and duration management. Ideal for facilities partnering with medical wellness providers to offer premium health services alongside fitness.",
              },
              {
                title: "Compression Therapy",
                description:
                  "Manage Normatec and similar compression therapy stations with session booking, equipment assignment, and usage tracking. Popular as a post-workout recovery add-on, compression therapy booking integrates with the class schedule for seamless member flow.",
              },
              {
                title: "Upsell Automation",
                description:
                  "GymWyse automatically suggests relevant recovery services after personal training sessions and group classes. When a member finishes a high-intensity workout, the app prompts a cold plunge or compression session booking. This automated upsell drives 15 to 20 percent of total recovery revenue at facilities using the feature.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass-card p-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-pure-white mb-4">
              Equipment Monitoring &amp; Maintenance
            </h3>
            <p className="text-sm text-cool-gray leading-relaxed">
              Beyond booking, GymWyse tracks equipment health for premium amenities.
              Sauna temperature logs, cold plunge water temperature monitoring, cryotherapy
              chamber calibration records, and compression device maintenance schedules
              are all tracked within the platform. Automated alerts notify staff when
              equipment readings fall outside acceptable ranges, when maintenance is due,
              or when consumables like IV supplies need reordering. This proactive
              monitoring ensures consistent service quality that luxury members expect and
              reduces the risk of equipment-related service interruptions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VIP TIER MANAGEMENT                                          */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Crown className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              VIP Tier Management
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Middle East fitness consumers expect tiered experiences. From standard gym
              access to exclusive Black Card privileges, GymWyse lets you create unlimited
              membership tiers with granular access controls, pricing rules, and perks
              that match the luxury positioning of your facility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Standard, Premium, VIP, Black Card",
                description:
                  "Define unlimited custom membership tiers with distinct branding, pricing, and access levels. Each tier can have its own colour scheme in the member app, dedicated check-in experience, and exclusive content. Popular configurations include Standard for gym-floor-only access, Premium adding group classes, VIP adding recovery amenities, and Black Card providing unlimited everything plus guest passes and concierge services.",
              },
              {
                title: "Tiered Amenity Access",
                description:
                  "VIP and Black Card members get priority booking windows for recovery services, meaning they can book cold plunge and sauna sessions 48 hours before lower tiers. You control which amenities each tier can access, which time slots are available, and how many bookings per week each tier receives. This creates tangible upgrade incentives that drive tier migration revenue.",
              },
              {
                title: "Guest Pass Management",
                description:
                  "Allocate guest passes by membership tier for hotel partnerships and corporate accounts. Black Card members might receive four guest passes per month, while VIP members receive two. Guest passes are tracked digitally with QR code check-in, and expired or unused passes are reported for follow-up. This is especially valuable for facilities partnered with five-star hotels across Dubai and Abu Dhabi.",
              },
              {
                title: "Corporate Membership Programs",
                description:
                  "Build corporate packages for the large expat employer market. Companies like ADNOC, Emirates, and SABIC purchase bulk memberships for employees at negotiated rates. GymWyse manages corporate billing, employee onboarding, utilisation reporting back to HR departments, and automatic membership activation and deactivation tied to employment status.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ARABIC RTL SUPPORT ROADMAP                                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Languages className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Arabic RTL Support Roadmap
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              GymWyse is committed to delivering a fully native Arabic experience for
              operators and members across the Middle East. Our RTL layout framework is
              already live, ensuring that all interface elements render correctly for
              Arabic readers. The full Arabic language pack is on track for Q3 2026
              delivery, with the following capabilities included in the rollout.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Arabic Language Interface (Q3 2026)",
                description:
                  "Complete Arabic translation of the admin dashboard, member app, and all system-generated content. Every menu, label, tooltip, error message, and help article will be available in Arabic. The translation is being handled by native Arabic speakers with fitness industry expertise to ensure terminology accuracy.",
              },
              {
                title: "RTL Layout Support",
                description:
                  "Full right-to-left interface mirroring is live today. Navigation flows from right to left, forms align correctly, calendars read in the proper direction, and all data tables, charts, and reports render in RTL format. This is not a CSS flip — it is a purpose-built RTL implementation that handles complex layout scenarios like mixed Arabic and English content.",
              },
              {
                title: "Bilingual Member Communications",
                description:
                  "Send emails, SMS messages, and push notifications in both Arabic and English simultaneously. Members set their language preference, and all automated communications including booking confirmations, payment receipts, class reminders, and promotional messages are delivered in their chosen language.",
              },
              {
                title: "Arabic Receipts &amp; Invoice Generation",
                description:
                  "Generate invoices, receipts, and financial documents in Arabic with proper formatting for local tax authority requirements. Arabic invoices include VAT breakdowns, business registration numbers, and bilingual headers for operators who need both Arabic and English on the same document.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VISION 2030 COMPLIANCE                                       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Vision 2030 Compliance
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Saudi Arabia&apos;s Vision 2030 has transformed the fitness landscape, introducing
              mandates for physical activity participation and opening the market to
              operators who can demonstrate compliance with evolving regulatory
              requirements. GymWyse provides purpose-built tools to help operators meet
              these mandates and report on their contribution to national health goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Fitness Mandate Tracking",
                description:
                  "Track member participation rates, visit frequency, and activity levels against Vision 2030 benchmarks. Generate reports that demonstrate your facility's contribution to national fitness participation targets, formatted for government submission.",
              },
              {
                title: "Female-Only Session Management",
                description:
                  "Manage female-only hours, classes, and facilities with privacy-compliant scheduling that ensures complete separation of sessions. Staff assignment rules prevent scheduling conflicts, and the member app only shows relevant sessions based on the member's profile.",
              },
              {
                title: "Prayer Time Integration",
                description:
                  "GymWyse integrates with prayer time APIs to automatically adjust class schedules, facility access windows, and staff shifts around the five daily prayer times. Schedules update dynamically as prayer times shift throughout the year, and buffer periods are configurable by the operator.",
              },
              {
                title: "Ramadan Schedule Adjustments",
                description:
                  "Configure Ramadan-specific operating schedules with extended evening hours, modified class timetables, and adjusted staffing. The system automatically switches to Ramadan mode based on the Hijri calendar date and reverts to normal scheduling when the holy month concludes.",
              },
              {
                title: "Government Reporting",
                description:
                  "Export compliance reports formatted for Saudi General Authority for Sport submissions, including facility utilisation data, membership demographics, participation rates by gender and age group, and safety incident logs. Reports are available in both Arabic and English formats.",
              },
              {
                title: "Hijri Calendar Support",
                description:
                  "Display dates in both Hijri and Gregorian calendar formats throughout the platform. Members and staff can toggle between calendars based on preference. All booking confirmations, invoices, and reports support dual-calendar display for operators who need both systems.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RECOVERY AS A SERVICE                                        */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Recovery as a Service
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Recovery services are the fastest-growing revenue stream in Middle East
              premium fitness facilities. Cold plunge demand in UAE gyms is up 78%
              year-over-year, with infrared sauna and cryotherapy close behind. For luxury
              operators, recovery services now represent 15 to 20 percent of total
              facility revenue, and this share is growing as members prioritise longevity
              and wellness alongside traditional fitness.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                What GymWyse Tracks for Recovery Revenue
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    metric: "Booking Utilisation Rate",
                    detail:
                      "Track what percentage of available recovery slots are booked versus idle. Identify underperforming time slots and optimize scheduling to maximize utilisation. Top-performing facilities using GymWyse achieve 85 to 95 percent utilisation on premium recovery services.",
                  },
                  {
                    metric: "Revenue per Recovery Slot",
                    detail:
                      "Measure the revenue generated per available booking slot across cold plunge, sauna, cryotherapy, and other services. Compare revenue density between different recovery offerings to inform investment decisions on new equipment or expanded capacity.",
                  },
                  {
                    metric: "Member Recovery Frequency",
                    detail:
                      "Track how often individual members book recovery services and identify trends in adoption. Members who use recovery services three or more times per month have 40 percent lower churn rates, making recovery a powerful retention lever.",
                  },
                  {
                    metric: "Upsell Conversion Rate",
                    detail:
                      "Measure the conversion rate from personal training sessions and group classes to recovery bookings. GymWyse's automated upsell prompts, delivered at the end of high-intensity sessions, drive an average 12 percent conversion rate to recovery services at facilities using the feature.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-base font-semibold text-electric-green mb-2">
                      {item.metric}
                    </p>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="text-sm text-soft-white leading-relaxed mt-8 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GymWyse turns recovery from an untracked amenity into a data-driven profit
              centre. Operators using the recovery analytics module report an average 22%
              increase in recovery revenue within the first 90 days.{" "}
              <Link
                href="/solutions/recovery-management"
                className="text-electric-green hover:underline"
              >
                Learn more about recovery management
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WEARABLE TECH INTEGRATION                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Watch className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Wearable Tech Integration
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Middle East fitness consumers are early adopters of wearable technology.
              Apple Watch, WHOOP, Garmin, and Fitbit penetration among UAE gym members is
              among the highest globally, driven by a tech-savvy, affluent population that
              expects connected fitness experiences. GymWyse syncs with all major wearable
              platforms to bring this data into the gym ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Auto-Log Workouts",
                description:
                  "Workouts detected by Apple Watch, WHOOP, or Garmin are automatically logged to the member's GymWyse profile. This includes gym sessions, outdoor runs, cycling, swimming, and other activities. Members no longer need to manually log workouts, and trainers get a complete picture of member activity both inside and outside the gym.",
              },
              {
                title: "Recovery Score Tracking",
                description:
                  "Import WHOOP recovery scores, Garmin Body Battery, and Apple Watch readiness metrics into GymWyse. Trainers can use this data to adjust workout intensity recommendations. Members with low recovery scores might receive a prompt to book a recovery service instead of their scheduled high-intensity class.",
              },
              {
                title: "Leaderboard Competitions",
                description:
                  "Create gym-wide leaderboards based on wearable data including steps, calories burned, workout minutes, and heart rate zone minutes. Competitions drive engagement and are particularly popular with Middle East fitness enthusiasts who thrive on community challenges. Leaderboards display in the member app and on in-gym screens.",
              },
              {
                title: "Health Data Import",
                description:
                  "Import heart rate data, calorie expenditure, sleep quality, workout duration, and activity data through Apple Health and Google Health Connect APIs. This data enriches member profiles and enables trainers to deliver personalised programming based on objective biometric data rather than subjective self-reporting.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-sm text-soft-white leading-relaxed mt-8 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Gyms using wearable integrations see 32% higher retention as members stay
            engaged through connected fitness experiences.{" "}
            <Link
              href="/integrations/wearables"
              className="text-electric-green hover:underline"
            >
              Explore wearable integrations
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPLETE GYM OPERATIONS                                      */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="w-7 h-7 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Complete Gym Operations
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Beyond the Middle East-specific features, GymWyse provides a full-stack
              gym management platform covering every operational need. All core features
              are localised for the ME market with regional date formats, currency
              handling, and a multi-language staff interface that supports teams operating
              in Arabic, English, Hindi, Tagalog, and other languages common in GCC
              fitness facilities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Memberships & Check-ins",
                description:
                  "QR code and NFC check-in, automated membership renewals, freeze and cancellation workflows, and real-time occupancy tracking across all locations. Members manage everything from the app.",
              },
              {
                title: "Class Scheduling",
                description:
                  "Drag-and-drop class builder, instructor assignment, waitlist management, and automated reminders. Support for recurring classes, workshops, outdoor sessions, and virtual live-stream classes.",
              },
              {
                title: "Billing & Payments",
                description:
                  "Automated recurring billing, failed payment recovery with smart retry logic, refund management, and detailed financial reporting. Multi-currency and multi-gateway support included in all plans.",
              },
              {
                title: "Staff Management",
                description:
                  "Shift scheduling, payroll tracking, commission calculation for personal trainers, performance dashboards, and role-based access controls. Multi-language staff interface ensures every team member can work in their preferred language.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIAL: PINNACLE PERFORMANCE DUBAI                      */}
      {/* ============================================================ */}
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
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
              Pinnacle Performance, Dubai
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              4 locations across JBR, DIFC, Business Bay, and Dubai Marina. 600+ members.
              Previously using Glofox.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Pinnacle Performance was managing cold plunge, infrared sauna, and
                cryotherapy bookings manually across four luxury locations using a
                combination of WhatsApp groups and paper logbooks. VIP tier management was
                handled through spreadsheets, with staff manually checking membership
                levels before granting amenity access. Multi-currency billing for their
                diverse expat member base was not supported by Glofox, forcing all members
                to pay in AED regardless of their home currency. Recovery service amenity
                utilisation sat at just 62%, and the team estimated they were losing AED
                25,000 per month in unbilled or underutilised recovery slots.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                The Solution
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                GymWyse replaced Glofox across all four Pinnacle Performance locations
                with a unified dashboard. The amenity management module digitised all
                wellness bookings into the member app, eliminating WhatsApp coordination
                entirely. VIP tier rules were configured so Black Card members received
                48-hour priority booking for recovery services, while Standard members
                could only book same-day. Multi-currency billing was activated for AED,
                USD, EUR, and GBP, and automated upsell prompts were enabled to suggest
                recovery sessions after personal training and group classes.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                Results
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {[
                  { value: "+28%", label: "Recovery Revenue Increase" },
                  { value: "-15%", label: "Member Churn Reduction" },
                  { value: "62% to 91%", label: "Amenity Utilisation" },
                  { value: "4 Locations", label: "Unified Dashboard" },
                ].map((stat, i) => (
                  <div key={i} className="bg-deep-space/60 rounded-lg p-4 text-center">
                    <p className="text-xl font-bold text-electric-green font-mono mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-cool-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-cool-gray leading-relaxed">
                Within 90 days of switching, Pinnacle Performance saw a 28% increase in
                recovery service revenue driven by higher utilisation and automated
                upselling. Member churn dropped by 15% as the multi-currency billing
                eliminated friction for expat members and VIP tier perks increased
                perceived value. The unified dashboard across four locations gave the
                ownership team real-time visibility into performance metrics they
                previously compiled manually each week.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 border-l-4 border-electric-green"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-electric-green/30 mb-4" />
              <p className="text-base text-soft-white leading-relaxed italic mb-4">
                &ldquo;We were running a luxury operation with spreadsheet-level
                management tools. GymWyse transformed our recovery services from an
                afterthought into our fastest-growing revenue stream. The multi-currency
                billing alone stopped us from losing expat members who were frustrated
                with AED-only invoicing. Across four locations, the unified dashboard
                gives me the real-time visibility I need to make decisions without
                waiting for weekly reports.&rdquo;
              </p>
              <p className="text-sm font-semibold text-pure-white">
                Ahmed Al-Rashid
              </p>
              <p className="text-sm text-cool-gray">
                CEO, Pinnacle Performance Dubai
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON VS GLOFOX                                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              GymWyse vs Glofox for the Middle East
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Many Middle East operators currently use Glofox. Here is a direct
              feature-by-feature comparison for the GCC market, covering pricing,
              regional capabilities, and specialist features that matter most to
              operators in this region.
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left p-4 text-cool-gray font-medium">
                      Feature
                    </th>
                    <th className="text-left p-4 text-electric-green font-medium">
                      GymWyse
                    </th>
                    <th className="text-left p-4 text-cool-gray font-medium">
                      Glofox
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-glass-border last:border-b-0"
                    >
                      <td className="p-4 text-pure-white font-medium">
                        {row.feature}
                      </td>
                      <td className="p-4 text-soft-white">{row.gymwyse}</td>
                      <td className="p-4 text-dim-gray">{row.glofox}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/vs/glofox"
              className="text-electric-green hover:underline text-sm"
            >
              See the full GymWyse vs Glofox comparison
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 ADDITIONAL TESTIMONIALS                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Trusted Across the GCC
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Gym operators across the Gulf region are switching to GymWyse to manage
              their facilities, grow recovery revenue, and serve their international
              membership base.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                gym: "Iron District",
                location: "Riyadh, Saudi Arabia",
                description:
                  "Iron District operates a 2,000-square-metre performance training facility in Riyadh serving 450 members. After switching from a legacy local system to GymWyse, they implemented automated Ramadan scheduling that eliminated the manual timetable adjustments consuming 6 hours of staff time each year during the holy month. Prayer time integration ensures classes never conflict with salah, and the female-only session management module allowed them to expand women's programming from 4 sessions per week to 12 without scheduling conflicts.",
                quote:
                  "GymWyse understands the Saudi market in a way that international software simply does not. Prayer time integration and Ramadan scheduling are not nice-to-have features here — they are essential.",
                author: "Khalid Al-Otaibi",
                role: "Founder, Iron District Riyadh",
              },
              {
                gym: "Elite Movement Center",
                location: "Abu Dhabi, UAE",
                description:
                  "Elite Movement Center is a premium boutique studio in Abu Dhabi with 60% expat members billing in different currencies. Before GymWyse, AED-only invoicing through their previous provider was driving monthly churn to 4.2% as USD and EUR earners encountered billing friction. After activating multi-currency billing, expat sign-up conversion increased by 34% and monthly churn dropped to 2.7%. Billing support tickets decreased by 68%, freeing the front desk team to focus on member experience rather than payment troubleshooting.",
                quote:
                  "Our members come from over 40 nationalities. Forcing everyone into AED billing was creating unnecessary friction. Multi-currency support resolved our biggest source of churn almost immediately.",
                author: "Fatima Hassan",
                role: "Operations Manager, Elite Movement Center",
              },
              {
                gym: "Aspire Fitness Club",
                location: "Doha, Qatar",
                description:
                  "Aspire Fitness Club added cold plunge and cryotherapy services to their Doha facility but struggled to monetise them effectively. Bookings were managed through a standalone scheduling tool that did not integrate with their membership system, so staff could not enforce tier-based access or track recovery revenue against member profiles. After migrating to GymWyse, Aspire integrated recovery bookings into their member app and activated the upsell automation feature. Recovery service revenue increased by AED 14,000 per month, and the VIP tier upgrade rate doubled as members saw tangible value in premium access to recovery amenities.",
                quote:
                  "We invested heavily in recovery equipment but were not capturing the revenue opportunity. GymWyse turned our recovery suite from a cost centre into a genuine profit driver within 60 days.",
                author: "Nasser Al-Thani",
                role: "General Manager, Aspire Fitness Club",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-pure-white">
                    {testimonial.gym}
                  </h3>
                  <p className="text-sm text-electric-green">
                    {testimonial.location}
                  </p>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-4 flex-1">
                  {testimonial.description}
                </p>
                <div className="border-t border-glass-border pt-4">
                  <p className="text-sm text-soft-white italic mb-2">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-pure-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-cool-gray">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Everything you need to know about using GymWyse in the UAE and Middle East.
              If your question is not listed here, book a demo call and our team will
              answer it directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card border border-glass-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-medium text-pure-white pr-4">
                    {item.question}
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

      {/* ============================================================ */}
      {/* PRICING IN AED                                               */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Pricing in AED
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Transparent pricing with no setup fees, no lock-in contracts, and a 14-day
              free trial on all plans. Every plan includes multi-currency billing,
              Arabic RTL support, recovery amenity management, and VIP tier configuration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: "Starter",
                price: "AED 365",
                period: "per location / month",
                description: "For single-location gyms and studios",
                features: [
                  "Core gym management platform",
                  "Revenue analytics dashboard",
                  "Arabic RTL support",
                  "Multi-currency billing (AED, USD, EUR, SAR, QAR, KWD)",
                  "Recovery amenity management",
                  "VIP tier configuration",
                  "Local payment method support",
                  "Email support",
                ],
                highlighted: false,
              },
              {
                tier: "Growth",
                price: "AED 290",
                period: "per location / month",
                description: "For 2-5 locations",
                features: [
                  "Everything in Starter",
                  "Multi-location unified dashboard",
                  "Priority support",
                  "Custom branding",
                  "Advanced reporting and analytics",
                  "Staff performance dashboards",
                  "Corporate membership tools",
                  "Dedicated onboarding specialist",
                ],
                highlighted: true,
              },
              {
                tier: "Enterprise",
                price: "Custom",
                period: "volume pricing",
                description: "For 6+ locations",
                features: [
                  "Everything in Growth",
                  "Volume discounts",
                  "Dedicated account manager",
                  "Custom API integrations",
                  "White-label member app",
                  "UAE data residency option",
                  "SLA guarantees",
                  "On-site training available",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`glass-card p-8 flex flex-col ${
                  plan.highlighted
                    ? "ring-2 ring-electric-green/50"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.highlighted && (
                  <span className="text-electric-green text-xs font-medium tracking-wider uppercase mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-pure-white mb-1">
                  {plan.tier}
                </h3>
                <p className="text-3xl font-bold text-electric-green font-mono mb-0">
                  {plan.price}
                </p>
                <p className="text-sm text-cool-gray mb-2">{plan.period}</p>
                <p className="text-sm text-soft-white mb-6">{plan.description}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                      <span className="text-sm text-cool-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.tier === "Enterprise" ? "/demo" : "/pricing"}>
                  <Button
                    variant={plan.highlighted ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.tier === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-sm text-cool-gray text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            All plans include $0 setup fees and monthly contracts with no lock-in.
            Cancel anytime.{" "}
            <Link
              href="/pricing"
              className="text-electric-green hover:underline"
            >
              See full pricing details
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-electric-green/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Grow Your GCC Fitness Business?
            </h2>
            <p className="text-lg text-soft-white leading-relaxed mb-8">
              Join gym operators across Dubai, Abu Dhabi, Riyadh, Doha, and Kuwait City
              who are using GymWyse to manage memberships, grow recovery revenue, and
              serve their international member base. Start your 14-day free trial today
              or book a personalised demo to see how GymWyse fits your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-cool-gray">
              <Link
                href="/gym-software-dubai"
                className="hover:text-electric-green transition-colors"
              >
                Dubai
              </Link>
              <span className="text-dim-gray">|</span>
              <Link
                href="/gym-software-abu-dhabi"
                className="hover:text-electric-green transition-colors"
              >
                Abu Dhabi
              </Link>
              <span className="text-dim-gray">|</span>
              <Link
                href="/gym-software-riyadh"
                className="hover:text-electric-green transition-colors"
              >
                Riyadh
              </Link>
              <span className="text-dim-gray">|</span>
              <Link
                href="/gym-software-doha"
                className="hover:text-electric-green transition-colors"
              >
                Doha
              </Link>
              <span className="text-dim-gray">|</span>
              <Link
                href="/gym-software-kuwait-city"
                className="hover:text-electric-green transition-colors"
              >
                Kuwait City
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
