"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  QrCode,
  Wrench,
  Shield,
  BarChart3,
  AlertTriangle,
  DollarSign,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problems = [
  {
    icon: AlertTriangle,
    title: "Liability Risk",
    description:
      "A member gets injured on a piece of equipment that had a known issue, and your gym has no documentation showing the problem was reported, assessed, or addressed. Without a timestamped audit trail of equipment condition and maintenance actions, you are exposed to liability claims with no paper trail to defend yourself. One incident can cost tens of thousands in legal fees and settlements, not to mention the reputational damage that follows. Insurance companies increasingly ask for maintenance records during claims review, and gyms without them face higher premiums or denied coverage.",
  },
  {
    icon: DollarSign,
    title: "Lost Revenue",
    description:
      "Equipment sits out of service for days or weeks because no one logged the issue, no one assigned a technician, and no one tracked when the repair was completed. Members notice. They work around broken machines for a while, then they start looking at the gym down the street. Every day a popular machine is unavailable is a day your member experience degrades. For gyms without equipment tracking, the average time from equipment failure to resolution is significantly longer than for gyms with a structured reporting system. That gap costs you members, and replacing a lost member costs five to seven times more than retaining one.",
  },
  {
    icon: Clock,
    title: "Reactive Maintenance",
    description:
      "Most gyms operate on a fix-it-when-it-breaks model. A cable frays until it snaps. A treadmill belt wears until it stops. A pad tears until stuffing falls out. Reactive maintenance costs two to three times more than preventive maintenance because emergency repairs require expedited parts, after-hours technician rates, and often full equipment replacement instead of a simple part swap. Worse, reactive maintenance means your members encounter broken equipment regularly, creating a perception that the facility is poorly maintained even if everything else is spotless.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Print QR Code Stickers",
    description:
      "Generate unique QR codes for every piece of equipment directly from your GymWyse dashboard. Each code is tied to a specific machine with its make, model, serial number, and purchase date. Print the stickers on waterproof, adhesive-backed labels and apply them to each machine. The entire setup for a 100-machine gym takes under an hour.",
  },
  {
    step: "02",
    title: "Member Scans & Reports",
    description:
      "When a member notices an issue, they scan the QR code with their phone camera or the GymWyse app. A simple form appears where they select the issue type from a predefined list: unusual noise, worn pad, loose cable, display error, or other. They can attach a photo and add a text description. The report submits in under 30 seconds.",
  },
  {
    step: "03",
    title: "Staff Gets Instant Notification",
    description:
      "The moment a report is submitted, your maintenance staff and gym manager receive a push notification and email with the equipment name, location, issue type, photo, and member description. No report gets lost in a suggestion box or forgotten on a whiteboard. Critical issues can be flagged for immediate attention.",
  },
  {
    step: "04",
    title: "Maintenance Logged & Resolved",
    description:
      "Staff log the resolution directly in the dashboard with a timestamp, description of work performed, parts replaced, and cost. The full history of every piece of equipment is available at a glance: purchase date, every reported issue, every maintenance action, every dollar spent. This audit trail protects you legally and informs future purchasing decisions.",
  },
];

const featureDeepDive = [
  {
    icon: QrCode,
    title: "QR Code on Every Machine",
    description:
      "Generate unique QR codes for every piece of equipment in your facility. Each code links to that specific machine's profile, which stores make, model, serial number, warranty status, and purchase date. Members scan the code with any smartphone camera or the GymWyse app to instantly report issues. Staff scan the same code to view maintenance history, upcoming service dates, and lifetime cost of ownership. The QR codes are generated as high-resolution PDFs formatted for standard label printers, so you can print and apply them in bulk. If a sticker is damaged or a machine is replaced, regenerate the code from the dashboard in seconds.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description:
      "Every maintenance action is logged with a timestamp, staff member, work description, parts used, and cost. Schedule preventive maintenance on recurring intervals: weekly belt inspections, monthly cable checks, quarterly deep cleans. The dashboard shows overdue service items in red, upcoming items in yellow, and completed items in green. Set automated reminders so your maintenance staff never misses a service date. Compare maintenance costs across equipment types to identify which machines cost the most to maintain over their lifetime. Export the full maintenance log as CSV or PDF for insurance documentation or equipment vendor warranty claims.",
  },
  {
    icon: Shield,
    title: "Liability Prevention",
    description:
      "Every member report and staff action creates a timestamped, immutable record in the system. If a member reports a wobbly bench on Tuesday and a staff member inspects and repairs it on Wednesday, that sequence is documented with dates, times, photos, and resolution notes. In the event of an incident, you have a complete audit trail showing that your gym identified, assessed, and resolved equipment issues promptly. Insurance providers recognize proactive maintenance documentation as a risk-reduction measure. Gyms with structured equipment tracking programs report fewer claims and lower premiums over time.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description:
      "Track which equipment gets the most reports, the most maintenance, and the highest lifetime cost. Usage analytics reveal patterns that inform purchasing decisions: if your leg press generates three times more maintenance tickets than your squat rack, that data informs whether to repair, replace, or switch brands at the next refresh cycle. Compare equipment performance across multiple locations to standardize on the most reliable models. See seasonal trends in equipment issues, identify machines nearing end of life, and build a data-driven capital expenditure plan instead of guessing when to replace aging equipment.",
  },
];

const faqs = [
  {
    question: "How much does the Equipment QR system cost?",
    answer:
      "Equipment QR is available as an add-on for $39 per month per location. This includes unlimited QR codes, unlimited member reports, the full maintenance tracking dashboard, usage analytics, and all future updates. There is no per-machine fee and no limit on the number of equipment items you can track.",
  },
  {
    question: "Do members need the GymWyse app to scan QR codes?",
    answer:
      "No. Members can scan the QR code with their default phone camera, which opens a mobile-friendly web form in the browser. Members who already have the GymWyse app get a slightly richer experience with auto-filled profiles, but the reporting workflow works for any member with any smartphone. No download required.",
  },
  {
    question: "What types of issues can members report?",
    answer:
      "The default issue categories include unusual noise, worn or torn pad, loose cable or belt, display or electronic error, cleanliness concern, and a general other category with free-text description. You can customize these categories from the dashboard to match your specific equipment types and common issues. Members can attach a photo with every report.",
  },
  {
    question: "Can I track maintenance for equipment without QR codes?",
    answer:
      "Yes. You can manually add equipment to the dashboard and log maintenance actions without using QR codes. However, the QR codes enable the member-facing reporting workflow, which is the primary source of real-time issue detection. We recommend QR codes for all member-accessible equipment and manual tracking for back-of-house items like HVAC or plumbing.",
  },
  {
    question: "Does this integrate with the rest of the GymWyse platform?",
    answer:
      "Yes. Equipment reports filed by members are linked to their member profile, so you can see which members report issues most frequently. Maintenance costs feed into your revenue analytics dashboard, giving you a complete picture of operational expenses. Staff notifications use the same notification system as class bookings and member alerts, so your team does not need a separate app.",
  },
];

export function EquipmentQRPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Equipment Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Equipment QR Codes
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              Members scan. You track. Prevent liability. Smart equipment
              management with QR codes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {[
              { icon: QrCode, title: "QR Code on Every Machine", desc: "Generate unique QR codes for every piece of equipment. Members scan to report issues in seconds." },
              { icon: Wrench, title: "Maintenance Tracking", desc: "Track maintenance history, schedule preventive maintenance, and log repairs. Never miss a service date." },
              { icon: Shield, title: "Liability Prevention", desc: "Document equipment condition and member reports. Protect yourself with a complete audit trail." },
              { icon: BarChart3, title: "Usage Analytics", desc: "See which equipment gets used most. Make smart purchasing decisions based on real data." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-8">
              <div className="text-3xl font-bold text-electric-green mb-2">
                $39/mo
              </div>
              <div className="text-sm text-cool-gray">
                per location add-on
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              Why Equipment Management Matters
            </h2>
            <p className="text-soft-white leading-relaxed">
              Most gyms do not think about equipment management until something
              goes wrong. By then, it has already cost them money, members, or
              worse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mb-5">
                  <problem.icon className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              From Report to Resolution in Four Steps
            </h2>
            <p className="text-soft-white leading-relaxed">
              A simple, repeatable workflow that turns reactive maintenance into a
              proactive system. No training required for members, minimal setup for
              staff.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-electric-green font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
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
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Built for Real Gym Operations
            </h2>
            <p className="text-soft-white leading-relaxed">
              Every feature addresses a specific pain point that gym owners and
              facility managers deal with daily. No fluff, no features you will
              never use.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {featureDeepDive.map((feature, i) => (
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
                    <feature.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
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
                Apex Performance Lab, DTLA
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-6">
                Apex Performance Lab operates three locations across Downtown Los
                Angeles with over 120 pieces of equipment in total. Before GymWyse,
                they relied on paper maintenance logs taped to clipboards in the
                back office. Service dates were missed regularly, and equipment
                issues went unreported until they became serious enough for a member
                to complain at the front desk. The gym averaged two liability-related
                incidents per year, each requiring legal consultation and insurance
                claims. After implementing the GymWyse QR system across all three
                locations, the results were immediate. Members reported 94% of
                equipment issues through the QR system within the first 90 days.
                Staff response time dropped from days to hours. Over the following
                twelve months, Apex recorded zero liability incidents. Preventive
                maintenance replaced emergency repairs, saving the gym $8,400 per
                year in maintenance costs alone.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Issue Report Rate", value: "94%", detail: "Via QR system" },
                  { label: "Liability Incidents", value: "0", detail: "In 12 months" },
                  { label: "Annual Savings", value: "$8,400", detail: "Preventive vs reactive" },
                  { label: "Locations Covered", value: "3", detail: "120+ machines" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-electric-green mb-1">
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

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-midnight">
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
              Common questions about the GymWyse Equipment QR system and how it
              works for your facility.
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Stop Guessing. Start Tracking.
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a 20-minute demo and see the Equipment QR system in action with
              your own equipment list. Or start a free 14-day trial and print your
              first QR codes today. No credit card required. No contract. Cancel
              any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
    </div>
  );
}
