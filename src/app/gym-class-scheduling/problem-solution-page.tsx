"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart3,
  TrendingUp,
  CreditCard,
  Calendar,
  Clock,
  Bell,
  ListChecks,
  Dumbbell,
  Settings,
  Zap,
  MapPin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const features = [
  {
    icon: Calendar,
    title: "Unlimited Class Scheduling and Instructor Management",
    description:
      "GymWyse lets you create and manage unlimited classes across any number of rooms, studios, and outdoor locations. Every class can be configured with a specific instructor, room assignment, capacity limit, booking window, and cancellation policy. Recurring schedules are set up once and repeat automatically — daily, weekly, fortnightly, or on a custom pattern. When you need to make changes, you can modify a single session or the entire recurring series. Instructor management is built directly into the scheduler. Each instructor has a profile with their certified class types, availability windows, hourly or per-class pay rates, and maximum weekly hours. The system prevents double-booking an instructor across overlapping time slots and alerts you when an instructor is approaching their contracted hour limit. Substitute instructor assignment is streamlined — when an instructor calls in sick, you select a replacement from the list of available and qualified instructors, and all booked members are automatically notified of the change.",
  },
  {
    icon: ListChecks,
    title: "Waitlist Management and Automatic Promotion",
    description:
      "When a class reaches capacity, members can join a waitlist directly through the GymWyse member app. If a booked member cancels, the first person on the waitlist is automatically promoted into the class and receives an instant notification via push, email, or SMS confirming their spot. This happens without any staff intervention. You control waitlist behaviour per class — you can set a maximum waitlist size, configure the promotion window (how long a waitlisted member has to confirm before the spot goes to the next person), and choose whether to allow waitlist promotion up to a certain time before the class starts. Waitlist analytics show which classes consistently have waitlists and how long they are, giving you data to decide whether to add more sessions of popular classes or increase capacity. For gyms running high-demand boutique classes, the waitlist system ensures every spot is filled and no revenue is lost to last-minute cancellations.",
  },
  {
    icon: Bell,
    title: "Automated Reminders and Member Self-Booking",
    description:
      "Members book classes through the GymWyse member app with two taps — browse the schedule, tap a class, confirm the booking. The app shows real-time availability, waitlist position if the class is full, instructor details, and class descriptions. Automated reminders are sent at configurable intervals before each class — typically 24 hours and 2 hours before the start time — via push notification, email, or SMS based on the member's notification preferences. Late cancellation policies are enforced automatically. If a member cancels after the cutoff window, the cancellation is recorded against their profile and any applicable fee is charged to their account. No-show tracking identifies members who book but do not attend, and you can configure automatic penalties for repeat no-shows such as a temporary booking restriction or a fee. These automated policies ensure your classes run at maximum capacity by discouraging frivolous bookings and last-minute cancellations.",
  },
  {
    icon: Clock,
    title: "Capacity Limits and Attendance Tracking",
    description:
      "Every class in GymWyse has a configurable capacity limit that is enforced at the point of booking. When a class is full, the booking button automatically switches to a waitlist join button. Capacity limits can differ between classes based on room size, equipment availability, and instructor preference. For example, a spin class might be limited to 20 bikes, while a yoga session in the same studio might accommodate 30 mats. Attendance is tracked automatically via QR code check-in at the studio door or manual check-in by staff. Attendance data feeds directly into your analytics dashboard, showing utilisation rates per class, per time slot, per instructor, and per day of the week. These insights reveal which classes are consistently full, which are underperforming, and where schedule gaps could be filled with new offerings. Attendance data also feeds into the churn prediction engine — a member who starts skipping their regular classes is flagged as at-risk before they consider cancelling.",
  },
];

const operationsOverview = [
  { icon: Users, label: "Membership Management" },
  { icon: Zap, label: "QR Check-Ins" },
  { icon: Calendar, label: "Class Scheduling" },
  { icon: CreditCard, label: "Billing & Invoicing" },
  { icon: Dumbbell, label: "PT Booking" },
  { icon: Settings, label: "Staff Management" },
  { icon: BarChart3, label: "Revenue Analytics" },
  { icon: TrendingUp, label: "Churn Prediction" },
];

const caseStudyResults = [
  { value: "94%", label: "Class utilisation (from 68%)" },
  { value: "0", label: "Manual scheduling hours per week" },
  { value: "32%", label: "Reduction in no-shows" },
  { value: "$2,800/mo", label: "Revenue from waitlist fills" },
];

const comparisonRows = [
  {
    feature: "Number of Classes",
    gymwyse: "Unlimited (all plans)",
    competitor: "Tiered limits based on plan",
  },
  {
    feature: "Waitlist Management",
    gymwyse: "Automatic promotion with notifications",
    competitor: "Manual waitlist (staff must promote)",
  },
  {
    feature: "Member Self-Booking",
    gymwyse: "Native app with 2-tap booking",
    competitor: "Web-only or third-party app",
  },
  {
    feature: "Instructor Management",
    gymwyse: "Built-in with availability and pay tracking",
    competitor: "Separate system or spreadsheet",
  },
  {
    feature: "Automated Reminders",
    gymwyse: "Push, email, SMS (configurable per class)",
    competitor: "Email only (limited customisation)",
  },
  {
    feature: "No-Show Tracking",
    gymwyse: "Automatic with configurable penalties",
    competitor: "Manual tracking (if done)",
  },
  {
    feature: "Attendance Analytics",
    gymwyse: "Real-time dashboard with utilisation rates",
    competitor: "Basic reports (delayed)",
  },
  {
    feature: "Pricing",
    gymwyse: "Included in platform (no per-class fees)",
    competitor: "$159-$399/mo + add-on fees",
  },
];

const testimonials = [
  {
    quote:
      "We run 45 classes per week across two studios and the scheduling was a nightmare on Mindbody. Double-bookings, manual waitlist management, instructors not knowing their schedule changes. GymWyse eliminated all of that. The waitlist auto-promotion alone fills 15-20 spots per week that would have gone empty under our old system. Our class utilisation went from 68% to 94% in three months.",
    name: "Jessica Kim",
    role: "Owner, Movement Lab",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "We switched from Mindbody after five years because the scheduling add-ons kept getting more expensive and the waitlist feature was essentially manual. GymWyse includes everything — unlimited classes, automated waitlists, instructor management, attendance tracking — in one flat price. No per-class fees, no premium tier required for basic scheduling functionality. The member app is also significantly better for class booking.",
    name: "Ryan Cooper",
    role: "Director, Basecamp Fitness",
    location: "Minneapolis, MN",
  },
  {
    quote:
      "The no-show tracking and automated late-cancellation penalties transformed our class attendance. We had a serious problem with members booking every class on the schedule and not showing up, blocking real attendees from getting spots. GymWyse's penalty system reduced our no-shows by 32% in the first month. Members take their bookings seriously now because there are consequences for wasting a spot.",
    name: "Alana Torres",
    role: "Co-owner, Pulse Studio",
    location: "Miami, FL",
  },
];

const faqItems = [
  {
    question: "How many classes can I schedule on GymWyse?",
    answer:
      "There is no limit on the number of classes you can schedule on any GymWyse plan. Whether you run 10 classes per week or 100, the scheduling system handles it without additional fees. Each class can have its own instructor, room, capacity limit, booking window, cancellation policy, and waitlist configuration. Recurring schedules can be set to repeat daily, weekly, fortnightly, or on custom patterns.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "When a class reaches capacity, members can join the waitlist through the member app. If a booked member cancels, the first person on the waitlist is automatically promoted into the class and notified via push notification, email, or SMS. You can configure the maximum waitlist size, the promotion confirmation window, and the cutoff time for waitlist promotions. The entire process is automated — no staff intervention is required. Waitlist analytics show which classes consistently have queues so you can make informed decisions about adding sessions.",
  },
  {
    question: "Can members book classes through the app?",
    answer:
      "Yes. The GymWyse member app provides full class scheduling visibility with real-time availability. Members browse the schedule by day, week, or class type, and book with two taps. The app shows available spots, waitlist position, instructor details, class descriptions, and location. Members also receive automated reminders before their booked classes. Late cancellations and no-shows are tracked automatically with configurable penalties. Visit our member app page for a full walkthrough of the booking experience.",
  },
  {
    question: "How does instructor management work?",
    answer:
      "Every instructor has a profile in GymWyse with their certified class types, availability windows, pay rates (hourly or per-class), and maximum weekly hours. The system prevents double-booking an instructor and alerts you when they approach their hour limit. When a substitution is needed, GymWyse shows available qualified instructors and handles member notifications automatically. Instructor performance metrics — attendance rates for their classes, member satisfaction, and utilisation — are tracked on the analytics dashboard.",
  },
  {
    question: "Does GymWyse track class attendance automatically?",
    answer:
      "Yes. Attendance is tracked via QR code check-in at the studio door using the member app, or through manual check-in by staff. The attendance data feeds into your analytics dashboard showing utilisation rates per class, time slot, instructor, and day of the week. This data also feeds into the AI churn prediction engine — members who start skipping their regular classes are flagged as at-risk. No-show tracking is automatic, and you can configure penalties for repeat no-shows including temporary booking restrictions or fees.",
  },
  {
    question: "How does GymWyse compare to Mindbody for class scheduling?",
    answer:
      "GymWyse offers unlimited classes on all plans with no per-class fees, automatic waitlist promotion, native instructor management, and attendance-driven churn prediction. Mindbody charges $159-$399 per month with tiered class limits, requires manual waitlist management on lower plans, and does not include churn prediction based on attendance patterns. GymWyse's member app provides a faster, more intuitive booking experience. For a detailed comparison, see the table above or contact our team for a personalised walkthrough.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function ProblemSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ─── Hero Section ─── */}
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
              Class Scheduling
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              Gym Class Scheduling Software with Waitlist Management
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              Fill every class to capacity with automated waitlists,
              self-service member booking, and real-time attendance tracking.
              GymWyse gym management software gives you unlimited class
              scheduling with instructor management, automated reminders,
              and no-show penalties — all included in one platform with no
              per-class fees.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/roi-calculator">
                <Button size="lg" variant="primary">
                  Calculate ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="secondary">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Problem Statement ─── */}
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
              Why Class Scheduling Breaks Without the Right Software
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Group fitness classes are the heartbeat of most gyms, driving
              member engagement, retention, and revenue. But poorly managed
              scheduling creates empty spots, frustrated members, and
              overwhelmed staff — all of which directly impact your bottom
              line.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: AlertTriangle,
                title: "Empty Spots from No-Shows and Cancellations",
                description:
                  "The average gym class has a 15-25% no-show rate. Members book spots and do not attend, blocking other members who would have come. Last-minute cancellations leave spots unfilled because there is no automated system to promote waitlisted members fast enough. Every empty spot in a full class is lost revenue — a spin class with 5 empty bikes out of 20 is running at 75% utilisation, and those 5 spots represent membership value that is going unrealised. Without automated waitlist promotion and no-show penalties, this problem persists week after week.",
              },
              {
                icon: Clock,
                title: "Manual Scheduling Consumes Staff Hours",
                description:
                  "Building and maintaining a class schedule manually — managing instructor availability, handling substitutions, processing waitlists, sending reminders, and tracking attendance — consumes 5-10 hours of staff time per week. Instructor changes require individual messages to every booked member. Waitlist management means phone calls and manual spot assignments. Schedule updates require re-sending the timetable across multiple channels. This administrative overhead takes staff away from member-facing work that drives retention and revenue.",
              },
              {
                icon: Users,
                title: "No Data to Optimise the Schedule",
                description:
                  "Without attendance analytics, you are scheduling classes based on tradition and assumption rather than demand data. You do not know which time slots have the highest demand, which instructors drive the best attendance, or which class types are declining in popularity. A Sunday morning class that was packed two years ago might now run at 40% capacity while members request a time slot you have never offered. Without utilisation data broken down by class type, instructor, time slot, and day, you cannot optimise your schedule for maximum engagement and revenue.",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
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
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-gray">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Solution Overview ─── */}
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
              How GymWyse Solves Class Scheduling
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              GymWyse replaces manual scheduling chaos with an automated
              system that handles everything — class creation, instructor
              assignment, member booking, waitlist management, reminders,
              attendance tracking, and no-show enforcement. Members book
              through the{" "}
              <Link
                href="/platform/member-app"
                className="text-electric-green underline underline-offset-2 hover:brightness-110"
              >
                GymWyse member app
              </Link>{" "}
              with two taps. Waitlisted members are promoted automatically
              when spots open. Instructors receive their schedules and
              substitution notifications instantly. Attendance data feeds
              into your analytics dashboard and the AI churn prediction
              engine. The result is higher class utilisation, fewer no-shows,
              zero administrative overhead, and data-driven schedule
              optimisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Feature Deep-Dive ─── */}
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
              Class Scheduling Features in Detail
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Four integrated tools that fill every class, eliminate manual
              work, and optimise your schedule with real data.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-green/10">
                    <Icon className="h-6 w-6 text-electric-green" />
                  </div>
                  <h3 className="text-lg font-bold text-pure-white">
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

      {/* ─── Gym Operations Basics ─── */}
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
              Complete Gym Operations Platform
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Class scheduling is one module of the complete GymWyse platform.
              Beyond scheduling, GymWyse manages every aspect of gym
              operations — membership management with flexible tiers and
              freeze options, QR-code check-ins at every door and studio,
              billing and invoicing with ACH, Direct Debit, and card payments,
              personal training booking with session packages and recurring
              appointments, staff management with role-based permissions and
              commission tracking, revenue analytics with real-time dashboards,
              and AI-powered churn prediction. Class attendance data connects
              directly to churn prediction — when a member stops attending
              their regular classes, the system flags them as at-risk
              automatically, enabling proactive retention before they cancel.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {operationsOverview.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card flex flex-col items-center gap-3 rounded-xl border border-glass-border p-6 text-center"
                >
                  <Icon className="h-6 w-6 text-electric-green" />
                  <span className="text-sm font-medium text-soft-white">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Case Study ─── */}
      <section className="bg-midnight py-24">
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
                Vibe Fitness, San Francisco, CA
              </h2>
              <p className="mt-2 text-sm text-dim-gray">
                Single location — 380 members — Boutique group fitness
                studio (spin, yoga, HIIT, barre)
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Vibe Fitness was running 35 classes per week on Mindbody
                    at $249 per month plus per-class add-on fees. The
                    waitlist was managed manually by the front desk — when
                    someone cancelled, staff had to call waitlisted members
                    one by one. No-shows averaged 22% across all classes,
                    and there was no automated penalty system. Popular
                    evening spin classes ran at capacity with 8-person
                    waitlists, while mid-morning yoga sessions sat at 40%
                    utilisation. The owner had no data to justify schedule
                    changes beyond anecdotal observation.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-green">
                    <CheckCircle className="h-4 w-4" />
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Vibe migrated to GymWyse and activated unlimited class
                    scheduling with automated waitlist promotion, no-show
                    tracking, and attendance analytics. The waitlist system
                    started filling cancelled spots within minutes instead
                    of hours. No-show penalties — a $10 fee after three
                    no-shows per month — reduced the no-show rate from 22%
                    to 15%. Attendance analytics revealed that the two
                    lowest-performing mid-morning classes could be replaced
                    with an additional evening spin and a Saturday bootcamp,
                    both of which now run at 90%+ utilisation. The studio
                    recovered an estimated $2,800 per month in previously
                    lost capacity.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudyResults.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-deep-space/50 p-4 text-center"
                  >
                    <div className="font-mono text-xl font-bold text-electric-green">
                      {result.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-deep-space py-16">
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
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-dim-gray">
                      {testimonial.role}
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

      {/* ─── Comparison Table ─── */}
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
              GymWyse vs Mindbody for Class Scheduling
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              See how GymWyse compares to Mindbody on the class scheduling
              features that matter most to gym owners and studio operators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-glass-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-electric-green">
                        GymWyse
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dim-gray">
                        Mindbody
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-glass-border last:border-0"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-soft-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-electric-green">
                          {row.gymwyse}
                        </td>
                        <td className="px-6 py-4 text-sm text-dim-gray">
                          {row.competitor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Everything you need to know about gym class scheduling
              with GymWyse.
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

      {/* ─── Final CTA ─── */}
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
              Fill Every Class. Eliminate Scheduling Chaos.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              Every empty spot in a full class is revenue you are losing.
              GymWyse gives you unlimited class scheduling, automated
              waitlist promotion, no-show tracking, and attendance analytics
              — all in one platform with no per-class fees. Start your
              14-day free trial today or book a personalised demo to see
              how GymWyse can transform your class schedule.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="xl" variant="primary">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="xl" variant="secondary">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dim-gray">
              <span>No credit card required</span>
              <span>14-day free trial</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
