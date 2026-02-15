"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Thermometer,
  Snowflake,
  Clock,
  DollarSign,
  Calendar,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  CheckCircle,
  Quote,
  MapPin,
  Users,
  Wrench,
  Zap,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroMetrics = [
  {
    value: "$4,200/mo",
    label: "Average recovery revenue per gym",
  },
  {
    value: "89%",
    label: "Slot utilization with auto-booking",
  },
  {
    value: "3x",
    label: "Recovery bookings after PT sessions",
  },
];

const recoveryServices = [
  {
    icon: Snowflake,
    name: "Cold Plunge",
    description:
      "Manage cold water immersion sessions with precise temperature tracking, session duration limits, and automated slot rotation. Ideal for post-workout recovery and inflammation reduction. Most facilities run 10-15 minute sessions at 38-45 degrees Fahrenheit.",
    session: "10-15 min",
    price: "$15-30/session",
  },
  {
    icon: Thermometer,
    name: "Infrared Sauna",
    description:
      "Schedule infrared sauna sessions with heat zone management and capacity controls. Supports single and multi-person sauna pods. Standard sessions run 30-45 minutes with a 10-minute buffer for cooldown and cleaning between bookings.",
    session: "30-45 min",
    price: "$25-50/session",
  },
  {
    icon: Snowflake,
    name: "Cryotherapy",
    description:
      "Whole-body and localized cryotherapy session management. Built-in safety timers, waiver tracking, and contraindication screening. Sessions typically last 2-4 minutes at temperatures between negative 150 and negative 300 degrees Fahrenheit.",
    session: "2-4 min",
    price: "$40-75/session",
  },
  {
    icon: Zap,
    name: "IV Drip Therapy",
    description:
      "Manage IV vitamin infusion appointments with practitioner scheduling, formula tracking, and consent management. Sessions run 30-60 minutes and require dedicated staffing. Track inventory levels for saline, vitamins, and electrolyte formulations.",
    session: "30-60 min",
    price: "$100-250/session",
  },
  {
    icon: Clock,
    name: "Compression Boots",
    description:
      "Normatec and pneumatic compression session booking with device pairing, pressure level presets, and member preference memory. Sessions average 20-30 minutes and can run concurrently across multiple devices in a single recovery lounge area.",
    session: "20-30 min",
    price: "$15-25/session",
  },
  {
    icon: Thermometer,
    name: "Red Light Therapy",
    description:
      "Full-body and targeted red light therapy panel scheduling. Track wavelength settings, session duration, and member treatment protocols. Sessions run 10-20 minutes with minimal buffer time required, making these high-throughput revenue generators.",
    session: "10-20 min",
    price: "$10-25/session",
  },
];

const bookingFeatures = [
  {
    icon: Calendar,
    title: "Time Slot Management",
    description:
      "Configure 15-minute, 20-minute, or 30-minute session blocks for each recovery service. Set different slot durations for different services — a 3-minute cryotherapy session needs a different cadence than a 45-minute infrared sauna booking. Define operating hours per service, maximum sessions per day, and blackout periods for cleaning and maintenance. The system prevents overbooking and automatically enforces capacity limits across all recovery stations.",
  },
  {
    icon: Users,
    title: "Member Self-Booking via App",
    description:
      "Members browse available recovery slots, select their preferred service, and book directly through the GymWyse mobile app or member portal. Real-time availability updates prevent double-bookings. Members receive confirmation notifications with preparation instructions — hydration reminders before sauna, clothing guidelines for cryotherapy, and pre-session checklists for IV drip appointments. Cancellation and rescheduling happen in-app with configurable cancellation windows.",
  },
  {
    icon: Clock,
    title: "Waitlist and Back-to-Back Scheduling",
    description:
      "When popular slots fill up, members join an automated waitlist. If a cancellation opens a slot, the next person on the waitlist receives an instant notification and has a configurable window to confirm. Back-to-back scheduling maximizes throughput by calculating optimal buffer times between sessions — accounting for cleaning, temperature reset for plunges, and equipment sanitization. The system learns peak demand patterns and suggests adding capacity during high-demand windows.",
  },
];

const upsellStrategies = [
  {
    title: "Post-Session Recovery Prompts",
    description:
      "When a member completes a personal training session or group class, GymWyse automatically sends a push notification suggesting recovery services. The recommendation is personalized based on the workout type — high-intensity interval training triggers a cold plunge suggestion, heavy strength sessions prompt compression boot availability, and endurance workouts recommend infrared sauna. Members who book PT are 3x more likely to book a recovery session when prompted within 5 minutes of their workout ending.",
  },
  {
    title: "Bundle Pricing Engine",
    description:
      "Create recovery packages that pair with existing services. Offer a PT plus recovery bundle at a 15-20% discount compared to booking separately. Monthly recovery memberships give unlimited access to select services for a flat fee, increasing predictable recurring revenue. The system tracks bundle attachment rates and suggests optimal pricing based on actual member booking behavior and price sensitivity analysis. Bundles can be time-limited for promotional periods or permanent add-ons to membership tiers.",
  },
  {
    title: "Smart Push Notifications",
    description:
      "Automated notifications triggered by member behavior patterns. A member who checks in at 6 AM for a workout receives a recovery suggestion at 7:15 AM as they finish. Members who haven't booked recovery in 14 days receive a re-engagement prompt with a first-session discount. Post-workout message example: 'Great session! Book a cold plunge to optimize recovery — next available slot is 7:30 AM.' Open rates on recovery prompts average 62%, with a 28% conversion to booking.",
  },
];

const revenueMetrics = [
  {
    icon: DollarSign,
    label: "Recovery Revenue as Percentage of Total",
    description:
      "Track how much of your total gym revenue comes from recovery services. Industry leaders see 15-25% of total revenue from recovery, up from near zero three years ago. Monitor this ratio monthly to gauge growth and set targets for recovery revenue contribution.",
  },
  {
    icon: TrendingUp,
    label: "Per-Service Profitability",
    description:
      "Break down revenue and costs for each recovery service individually. Factor in equipment depreciation, consumables like IV supplies, energy costs for saunas and plunges, staffing for supervised services, and cleaning supplies. Know your true margin on every cold plunge session versus every cryotherapy appointment.",
  },
  {
    icon: Calendar,
    label: "Slot Utilization Rate",
    description:
      "Measure what percentage of available recovery slots are actually booked and attended. Track no-show rates by service type. Identify underperforming time slots and either reprice them for off-peak discounts or reallocate the capacity. Target 80% or higher utilization during operating hours.",
  },
  {
    icon: Clock,
    label: "Peak vs Off-Peak Revenue",
    description:
      "Compare revenue generated during peak hours (typically 6-9 AM and 5-8 PM) versus off-peak windows. Use dynamic pricing to balance demand — charge premium rates during high-demand periods and offer incentives during quiet hours. Most gyms find 65% of recovery revenue concentrates in just 6 hours of the day.",
  },
  {
    icon: Users,
    label: "Member Recovery Frequency",
    description:
      "Track how often individual members use recovery services. Identify your most engaged recovery members and your untapped potential — members who work out regularly but never book recovery. Segment members by recovery frequency to target marketing and upsell campaigns effectively.",
  },
  {
    icon: DollarSign,
    label: "Average Revenue per Recovery Session",
    description:
      "Monitor the average transaction value across all recovery bookings. Track trends over time as you introduce bundles, adjust pricing, and add new services. Compare average revenue per session across service types to identify which offerings deliver the highest per-session value. Link to your full revenue analytics dashboard for deeper analysis.",
  },
];

const maintenanceFeatures = [
  {
    title: "Sauna Max Sessions Per Day Tracking",
    description:
      "Set daily session limits for each sauna unit based on manufacturer recommendations and energy consumption targets. The system automatically blocks bookings once the daily maximum is reached, preventing equipment overuse and ensuring consistent heating performance throughout the day.",
  },
  {
    title: "Plunge Temperature Monitoring",
    description:
      "Connect to plunge temperature sensors for real-time monitoring. Receive alerts when water temperature drifts outside the target range. Log temperature readings automatically for health and safety compliance. Track chiller performance to predict maintenance needs before equipment fails.",
  },
  {
    title: "Maintenance Schedule Alerts and Cleaning Logs",
    description:
      "Automated maintenance reminders based on usage cycles, not just calendar dates. Staff log cleaning completions directly in the app with timestamps and photos. Track filter changes, water treatment schedules, UV sanitization cycles, and deep cleaning rotations. Equipment lifespan tracking shows total sessions, operating hours, and projected replacement dates so you can budget for capital expenditure well in advance.",
  },
];

const caseStudyResults = [
  { value: "18%", label: "Total revenue growth" },
  { value: "$8,400/mo", label: "New recovery revenue" },
  { value: "91%", label: "Peak slot utilization" },
  { value: "34%", label: "Members using recovery" },
];

const testimonials = [
  {
    quote:
      "We added cold plunge and infrared sauna six months ago and had no idea how to manage the bookings. We were using a paper sign-up sheet and it was chaos — double bookings, no-shows, no revenue tracking. GymWyse turned it into a real business within a month. Recovery now accounts for 22% of our total revenue and growing every quarter.",
    author: "Marcus Rivera",
    title: "Owner, Iron Republic Fitness",
    location: "Austin, TX",
  },
  {
    quote:
      "The upsell automation alone pays for the entire platform. After every PT session our members get a recovery suggestion and the conversion rate is incredible. We went from maybe 5 recovery bookings a day to over 20. The system handles everything — scheduling, reminders, waitlists, even the cleaning rotation alerts for staff.",
    author: "Priya Sharma",
    title: "Operations Director, Elevate Performance Centre",
    location: "Melbourne",
  },
  {
    quote:
      "What surprised us most was the maintenance tracking. Our infrared sauna was being overused and we had no idea until GymWyse flagged that we were running 30% more sessions than the manufacturer recommended daily maximum. It probably saved us from an expensive equipment failure and kept our members safe.",
    author: "Daniel Okafor",
    title: "Facility Manager, Apex Training Hub",
    location: "London",
  },
];

const comparisonRows = [
  {
    feature: "Real-time slot availability",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Member self-booking via app",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Automated waitlist management",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Post-workout upsell prompts",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Per-service revenue tracking",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Equipment maintenance alerts",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Temperature and usage monitoring",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Bundle pricing and packages",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "No-show tracking and penalties",
    gymwyse: true,
    manual: false,
  },
  {
    feature: "Dynamic peak pricing",
    gymwyse: true,
    manual: false,
  },
];

const faqItems = [
  {
    question:
      "What recovery services does GymWyse support for booking and management?",
    answer:
      "GymWyse supports cold plunge, infrared sauna, cryotherapy, IV drip therapy, compression boots, and red light therapy out of the box. Each service type has configurable session durations, pricing tiers, buffer times, and capacity limits. You can also add custom recovery services with your own parameters if you offer something unique like float tanks, hyperbaric chambers, or contrast therapy circuits.",
  },
  {
    question:
      "How does the software for cold plunge and infrared sauna booking handle scheduling conflicts?",
    answer:
      "The system enforces real-time availability checks so double-bookings are impossible. When a member selects a time slot, it is instantly reserved. Buffer times between sessions are automatically calculated based on your configuration — for example, 10 minutes between sauna sessions for cooldown and cleaning, or 5 minutes between cold plunge sessions for water temperature recovery. If two members attempt to book the same slot simultaneously, the first confirmed booking wins and the second member is offered the next available slot or added to the waitlist.",
  },
  {
    question:
      "Can members book recovery sessions directly from their phone?",
    answer:
      "Yes. Members browse available recovery slots through the GymWyse mobile app or web-based member portal. They see real-time availability, select their preferred service and time, and receive instant confirmation with preparation instructions. Members can also cancel or reschedule within your configurable cancellation window. Push notifications remind them of upcoming sessions and suggest recovery options after workouts.",
  },
  {
    question:
      "How does upsell automation work for recovery services?",
    answer:
      "GymWyse monitors member activity in real time. When a member completes a personal training session, group class, or open gym workout, the system can automatically send a push notification suggesting relevant recovery services with the next available time slot. The recommendation is personalized based on workout type and member history. You can also configure bundle offers that pair training with recovery at a discounted package rate, increasing both booking frequency and average transaction value.",
  },
  {
    question:
      "What kind of revenue reporting is available for recovery services?",
    answer:
      "The recovery analytics dashboard shows total recovery revenue, revenue by service type, slot utilization rates, peak versus off-peak revenue distribution, member recovery frequency, average revenue per session, and recovery revenue as a percentage of total gym revenue. All metrics are available in daily, weekly, monthly, and custom date range views. You can export reports and connect the data to your broader revenue analytics on the platform revenue analytics page.",
  },
  {
    question:
      "Does GymWyse integrate with wearable devices for recovery tracking?",
    answer:
      "Yes. GymWyse integrates with popular wearable platforms to pull recovery metrics like heart rate variability, sleep quality scores, and strain data. This data can inform personalized recovery recommendations — for example, suggesting a cold plunge session to a member whose wearable indicates elevated inflammation markers or high training load. Visit our wearables integration page for the full list of supported devices and data points.",
  },
];

export function RecoveryManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-deep-space py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-electric-green">
              Recovery Service Management
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Recovery Service Management for Gym Management Software
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Recovery as a Service is the fastest-growing revenue stream in
              2026. Cold plunge pools, infrared saunas, cryotherapy chambers,
              and IV drip stations are transforming gyms from workout spaces
              into full-spectrum wellness facilities. GymWyse gives you the
              software for cold plunge and infrared sauna booking, upsell
              automation, and revenue tracking to maximize every single time
              slot. Track every session, manage every piece of equipment, and
              turn recovery from an afterthought into your most profitable
              service category.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="secondary">
                  Calculate Recovery ROI
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 text-center"
              >
                <div className="text-3xl font-mono font-bold text-electric-green md:text-4xl">
                  {metric.value}
                </div>
                <p className="mt-3 text-sm text-cool-gray">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Services Supported Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Recovery Services We Support
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Six recovery modalities managed from a single platform. Configure
              session lengths, pricing, capacity, and buffer times for each
              service independently.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recoveryServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-xl font-bold text-pure-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="rounded-lg border border-glass-border bg-deep-space/50 px-3 py-1 font-mono text-xs text-electric-green">
                      {service.session}
                    </span>
                    <span className="rounded-lg border border-glass-border bg-deep-space/50 px-3 py-1 font-mono text-xs text-sapphire-blue">
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking System Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Booking System Built for Recovery Services
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Recovery services have unique scheduling requirements — short
              sessions, strict capacity limits, mandatory buffer times, and
              equipment-dependent availability. GymWyse handles all of it so
              your front desk staff can focus on member experience instead of
              managing a spreadsheet.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {bookingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-blue/10">
                    <Icon className="h-6 w-6 text-sapphire-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-pure-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upsell Automation Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Upsell Automation That Drives Recovery Revenue
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              The biggest opportunity in recovery services is not the members
              who already book — it is the hundreds of members who work out
              every week and never think to add recovery. GymWyse automates the
              suggestion at the perfect moment.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            {upsellStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8 md:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-electric-green/10">
                    <Bell className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white">
                      {strategy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-electric-green/20 bg-electric-green/5 p-6 text-center"
            >
              <p className="text-sm font-medium text-electric-green">
                &ldquo;Great session! Book a cold plunge to optimize your
                recovery — next available slot is 7:30 AM.&rdquo;
              </p>
              <p className="mt-2 text-xs text-cool-gray">
                Example push notification sent automatically after a member
                completes a morning workout
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Tracking Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Recovery Revenue Tracking and Analytics
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              You cannot grow what you cannot measure. GymWyse breaks down every
              dollar of recovery revenue so you know exactly which services are
              profitable, which slots are underperforming, and where your next
              growth opportunity lives. Connect to your{" "}
              <Link
                href="/platform/revenue-analytics"
                className="text-sapphire-blue underline hover:text-electric-green"
              >
                full revenue analytics dashboard
              </Link>{" "}
              for the complete picture.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revenueMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-glass-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-bold text-pure-white">
                    {metric.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {metric.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Maintenance Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Equipment Maintenance and Monitoring
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Recovery equipment is expensive and demands consistent
              maintenance. GymWyse tracks usage, monitors conditions, and
              alerts you before small issues become costly failures.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {maintenanceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                  <Wrench className="h-6 w-6 text-electric-green" />
                </div>
                <h3 className="text-lg font-bold text-pure-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-electric-green" />
                <span className="text-sm font-medium text-electric-green">
                  Case Study
                </span>
              </div>
              <h2 className="text-2xl font-bold text-pure-white md:text-3xl">
                Zenith Performance Club, Dubai
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                620-member premium fitness facility with dedicated recovery
                floor.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-alert-red">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Zenith invested $180,000 in a recovery floor featuring two
                    cold plunge pools, three infrared sauna pods, a cryotherapy
                    chamber, and four sets of compression boots. Six months after
                    launch, recovery revenue was stagnant at $3,200 per month —
                    far below projections. Bookings were managed through a shared
                    Google Calendar, leading to constant double-bookings and
                    member frustration. Staff had no visibility into which
                    services were popular, which slots were empty, or how to
                    price recovery competitively. Equipment maintenance was
                    reactive — they only addressed issues after members
                    complained about sauna temperatures or plunge water quality.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Zenith deployed GymWyse recovery management across all
                    services. Within two weeks, member self-booking eliminated
                    scheduling conflicts entirely. Upsell automation began
                    suggesting recovery sessions after every PT appointment and
                    group class. Bundle pricing — a monthly recovery pass at
                    $149 for unlimited access — converted 85 members in the
                    first month. Temperature monitoring flagged a failing chiller
                    unit before it impacted service. Within 90 days, recovery
                    revenue grew from $3,200 to $8,400 per month, representing
                    18% of total facility revenue.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="text-xl font-mono font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-glass-border bg-deep-space/30 p-6">
                <Quote className="mb-3 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;We spent $180,000 building a recovery floor and were
                  barely breaking even. GymWyse turned it into a profit center
                  within 90 days. The upsell automation alone generates 40% of
                  our recovery bookings. We went from managing chaos on a shared
                  calendar to running a real, data-driven recovery
                  operation.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      Fahad Al-Rashid
                    </p>
                    <p className="text-xs text-dim-gray">
                      General Manager, Zenith Performance Club
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-midnight py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-8"
              >
                <Quote className="mb-4 h-6 w-6 text-electric-green/40" />
                <blockquote className="text-base italic leading-relaxed text-soft-white">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-green/10">
                    <Users className="h-5 w-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-dim-gray">
                      {testimonial.title}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-dim-gray">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              GymWyse vs Manual Recovery Booking
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Spreadsheets and paper sign-up sheets cannot scale. See what you
              gain when you move recovery management to a purpose-built
              platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              <div className="grid grid-cols-3 border-b border-glass-border bg-deep-space/50 px-6 py-4">
                <span className="text-sm font-semibold text-soft-white">
                  Feature
                </span>
                <span className="text-center text-sm font-semibold text-electric-green">
                  GymWyse
                </span>
                <span className="text-center text-sm font-semibold text-dim-gray">
                  Spreadsheets / Paper
                </span>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 px-6 py-3 ${
                    index < comparisonRows.length - 1
                      ? "border-b border-glass-border"
                      : ""
                  }`}
                >
                  <span className="text-sm text-cool-gray">{row.feature}</span>
                  <div className="flex justify-center">
                    {row.gymwyse ? (
                      <Check className="h-5 w-5 text-electric-green" />
                    ) : (
                      <X className="h-5 w-5 text-alert-red" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.manual ? (
                      <Check className="h-5 w-5 text-electric-green" />
                    ) : (
                      <X className="h-5 w-5 text-alert-red" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Everything you need to know about managing recovery services with
              GymWyse.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card overflow-hidden rounded-xl border border-glass-border"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
                >
                  <span className="pr-4 text-sm font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-dim-gray transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-glass-border px-6 py-4">
                        <p className="text-sm leading-relaxed text-cool-gray">
                          {faq.answer}
                        </p>
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
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Turn Your Recovery Floor Into a Revenue Engine
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Every empty recovery slot is revenue left on the table. Every
              member who finishes a workout without a recovery suggestion is a
              missed upsell. GymWyse automates the booking, the upselling, the
              revenue tracking, and the equipment maintenance — so you can focus
              on delivering world-class recovery experiences. Join hundreds of
              facilities already using GymWyse to manage cold plunge, infrared
              sauna, cryotherapy, and IV drip bookings from a single platform.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="xl" variant="primary">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="secondary">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-dim-gray">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-dim-gray">
              <Link
                href="/ae"
                className="underline hover:text-soft-white"
              >
                Available in the UAE
              </Link>
              <span>&bull;</span>
              <Link
                href="/integrations/wearables"
                className="underline hover:text-soft-white"
              >
                Wearable Integrations
              </Link>
              <span>&bull;</span>
              <Link
                href="/platform/revenue-analytics"
                className="underline hover:text-soft-white"
              >
                Revenue Analytics
              </Link>
              <span>&bull;</span>
              <Link
                href="/roi-calculator"
                className="underline hover:text-soft-white"
              >
                ROI Calculator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
