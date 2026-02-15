"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  QrCode,
  Wrench,
  Shield,
  BarChart3,
  AlertTriangle,
  DollarSign,
  Clock,
  ChevronDown,
  Star,
  X,
  Scan,
  ClipboardCheck,
  Calculator,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featureDeepDive = [
  {
    icon: QrCode,
    title: "QR Codes on Every Piece of Equipment",
    description:
      "Generate unique QR codes for every piece of equipment in your facility directly from the GymWyse dashboard. Each code links to that specific machine's comprehensive digital profile, which stores the make, model, serial number, purchase date, purchase price, warranty status, warranty expiration date, and a photo of the equipment in its original condition. Members scan the code with any smartphone camera or the GymWyse member app to instantly report issues, view exercise demonstration videos for that specific machine, and log their usage for personal tracking purposes. Staff scan the same code to access the complete maintenance history, view upcoming scheduled service dates, check the lifetime cost of ownership, and update equipment status. The QR codes are generated as high-resolution PDFs formatted for standard label printers, so you can print and apply them in bulk across your entire facility. Each sticker uses a waterproof, adhesive-backed material designed to withstand sweat, cleaning chemicals, and heavy use. If a sticker becomes damaged or a machine is replaced, you regenerate the code from the dashboard in seconds and print a replacement. For a typical hundred-machine gym, the entire setup process from generating codes to applying stickers takes under sixty minutes. Every scan by a member or staff member is logged with a timestamp, creating a passive usage tracking layer that requires no behavioral change from your members.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance Tracking and Automated Scheduling",
    description:
      "Every maintenance action performed on any piece of equipment is logged with a timestamp, the staff member who performed the work, a detailed description of what was done, the specific parts that were used or replaced, and the cost of the service. You schedule preventive maintenance on recurring intervals tailored to each equipment type: weekly belt inspections for treadmills, monthly cable tension checks for cable machines, quarterly deep cleans and lubrication for all moving parts, and annual comprehensive safety inspections for every machine on the floor. The dashboard displays overdue service items highlighted in red, upcoming items in yellow, and recently completed items in green, giving your maintenance team an at-a-glance view of facility health. Automated email and push notification reminders ensure your maintenance staff never misses a scheduled service date, even during busy periods or staff transitions. Cleaning logs are tracked separately from mechanical maintenance, so you can verify that each machine is being wiped down and sanitized on schedule. Warranty tracking is built into each equipment profile, alerting you sixty days before a warranty expires so you can plan accordingly. You can compare maintenance costs across equipment types and brands to identify which machines cost the most to maintain over their lifetime, informing future purchasing decisions. The full maintenance log exports as CSV or PDF for insurance documentation, equipment vendor warranty claims, or regulatory compliance audits.",
  },
  {
    icon: Shield,
    title: "Liability Protection and Safety Compliance Documentation",
    description:
      "Every member report and every staff action creates a timestamped, immutable record in the GymWyse system. If a member reports a wobbly bench on Tuesday at two fourteen in the afternoon and a staff member inspects and repairs it on Wednesday at nine thirty in the morning, that entire sequence is documented with exact dates, times, the reporting member's identity, photos submitted with the report, the staff member who responded, and detailed resolution notes describing what was found and what was fixed. In the event of an incident or injury, you have a complete, defensible audit trail showing that your gym identified, assessed, and resolved equipment issues promptly and thoroughly. Insurance providers increasingly recognize proactive maintenance documentation as a meaningful risk-reduction measure, and gyms with structured equipment tracking programs consistently report fewer claims and lower premiums over time. The GymWyse QR system also supports a safety acknowledgment workflow where members must scan the QR code on a piece of equipment and digitally acknowledge the safety guidelines and proper usage instructions before their first use of that machine. This acknowledgment is recorded with a timestamp and the member's digital signature, creating a documented record that the member was informed of safe operating procedures. This layer of documentation is particularly valuable for high-risk equipment like squat racks, cable machines, and heavy plate-loaded equipment where improper use is the leading cause of gym injuries.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics, Depreciation Tracking, and Cost Per Use",
    description:
      "The GymWyse Equipment QR system transforms every scan into a data point that informs your operational and capital expenditure decisions. Usage analytics reveal which equipment gets the most member interactions, the most maintenance tickets, and the highest lifetime cost. You can identify the most popular machines on your floor by scan volume and the least used equipment that may be taking up valuable space without delivering value to your membership. Peak usage times for specific equipment types help you optimize floor layouts and schedule maintenance windows during low-traffic periods. Cost per use tracking divides the total investment in each piece of equipment, including purchase price plus all maintenance costs, by the total number of member scans, giving you a precise dollar figure for what each member interaction with that machine costs your business. A treadmill that cost six thousand dollars and has been scanned eight thousand times has a cost per use of seventy-five cents. A specialty machine that cost four thousand dollars but has only been scanned two hundred times has a cost per use of twenty dollars, a clear signal that the investment is not delivering returns. Depreciation tracking calculates the remaining book value of each piece of equipment based on its purchase date and your configured depreciation schedule, so you always know the current asset value of your equipment fleet. Replacement planning tools flag equipment that has exceeded its expected useful life or crossed a maintenance cost threshold, so you can build a data-driven capital expenditure plan instead of waiting for machines to fail before replacing them.",
  },
];

const testimonials = [
  {
    quote:
      "Before GymWyse, our maintenance system was a whiteboard in the back office that nobody checked. Equipment issues went unreported for days, sometimes weeks. We had a cable snap on a lat pulldown machine that could have seriously injured someone. Since implementing the QR system, our members report issues within minutes of noticing them, and our staff resolves them the same day. We have gone fourteen months without a single equipment-related incident. The liability protection alone is worth ten times what we pay for the platform. I sleep better at night knowing every machine on our floor has a documented maintenance history.",
    name: "Derek Washington",
    role: "Owner, Titan Fitness Center",
    location: "Atlanta, GA",
  },
  {
    quote:
      "We run three CrossBox locations across Melbourne and managing equipment across all three sites was a logistical nightmare. Different spreadsheets for each location, no consistency in maintenance schedules, and zero visibility into which equipment was costing us the most to maintain. The GymWyse QR system gave us a single dashboard across all three locations with real-time status on every piece of equipment. The cost per use analytics were eye-opening. We discovered that two rowers we had been repairing repeatedly actually cost more in maintenance over eighteen months than it would have cost to replace them outright. The data made the decision obvious and we replaced them immediately.",
    name: "Liam Foster",
    role: "Operations Director, CrossBox Fitness",
    location: "Melbourne, Australia",
  },
  {
    quote:
      "I was skeptical that members would actually scan QR codes to report issues. I figured they would just walk past broken equipment and complain at the front desk like they always did. I was completely wrong. Within the first month, we received over sixty equipment reports through the QR system, most of them for minor issues like torn pads, squeaky bearings, and loose bolts that we never would have caught during our weekly walkthrough. Members actually enjoy being part of the maintenance process because scanning takes five seconds and they see the resolution logged on the same equipment profile. It makes them feel like we listen and that we care about the facility.",
    name: "Priya Kapoor",
    role: "Facility Manager, Urban Gym Collective",
    location: "Toronto, Canada",
  },
];

const comparisonFeatures = [
  { feature: "QR code on every machine", gymwyse: true, competitor: false },
  { feature: "Member-initiated issue reporting", gymwyse: true, competitor: false },
  { feature: "Photo attachments with reports", gymwyse: true, competitor: false },
  { feature: "Instant staff push notifications", gymwyse: true, competitor: false },
  { feature: "Preventive maintenance scheduling", gymwyse: true, competitor: false },
  { feature: "Automated service reminders", gymwyse: true, competitor: false },
  { feature: "Equipment warranty tracking", gymwyse: true, competitor: false },
  { feature: "Cleaning log documentation", gymwyse: true, competitor: false },
  { feature: "Safety acknowledgment workflow", gymwyse: true, competitor: false },
  { feature: "Usage analytics per machine", gymwyse: true, competitor: false },
  { feature: "Cost per use calculation", gymwyse: true, competitor: false },
  { feature: "Depreciation tracking", gymwyse: true, competitor: false },
  { feature: "Multi-location equipment view", gymwyse: true, competitor: false },
  { feature: "Timestamped audit trail", gymwyse: true, competitor: false },
  { feature: "Exercise demo videos via QR scan", gymwyse: true, competitor: false },
  { feature: "Exportable maintenance reports (CSV/PDF)", gymwyse: true, competitor: false },
];

const faqs = [
  {
    question: "How does the Equipment QR system pricing work, and is it included in all GymWyse plans?",
    answer:
      "The Equipment QR system is included in every GymWyse plan starting at ninety-nine dollars per month. There is no separate add-on fee, no per-machine charge, and no limit on the number of equipment items you can track. Whether your gym has twenty machines or two hundred machines, the full QR system with unlimited codes, unlimited member reports, the complete maintenance tracking dashboard, usage analytics, cost per use calculations, depreciation tracking, and all future feature updates is included. This pricing structure means you get the full equipment management capability from day one without needing to budget for a separate maintenance tracking tool or worry about per-unit costs scaling as your facility grows.",
  },
  {
    question: "Do members need the GymWyse app installed to scan equipment QR codes and report issues?",
    answer:
      "No. Members can scan the QR code with their default phone camera, which opens a mobile-friendly web form in their browser. The web form allows them to select the issue type from a predefined list, attach a photo, add a text description, and submit the report in under thirty seconds. Members who already have the GymWyse member app installed get a slightly richer experience with auto-filled profile information, the ability to view exercise demonstration videos for that specific machine, and access to their personal usage history for the equipment. But the core reporting workflow works for any member with any smartphone, regardless of whether they have downloaded the app. This means even guest pass holders, trial members, and day-pass visitors can report equipment issues without any friction or app installation requirement.",
  },
  {
    question: "What types of issues can members report, and can we customize the report categories?",
    answer:
      "The default issue categories include unusual noise or vibration, worn or torn pad or upholstery, loose cable or fraying belt, display or electronic malfunction, structural instability or wobble, cleanliness concern, missing or broken accessory such as a pin or handle, and a general other category with free-text description. You can fully customize these categories from the GymWyse dashboard to match your specific equipment types and the most common issues at your facility. For example, a gym with a large free-weight area might add categories like chipped dumbbell coating or bent barbell, while a studio with rowing machines might add categories specific to rowing ergometer components. Members can attach a photo with every report, and they have a free-text field to provide additional context beyond the category selection. Reports are tagged with the equipment name, location on the floor, and the reporting member's profile, giving your staff everything they need to assess and resolve the issue efficiently.",
  },
  {
    question: "How does the safety acknowledgment and liability protection workflow function?",
    answer:
      "The safety acknowledgment feature adds a protective documentation layer to your equipment usage process. When you enable this feature for a specific piece of equipment, the first time a member scans that machine's QR code, they are presented with the safety guidelines and proper usage instructions that you have configured for that equipment type. The member must read and digitally acknowledge these guidelines before they can proceed to log usage or report issues. This acknowledgment is recorded with a precise timestamp, the member's identity, and a digital signature, creating a documented record that the member was informed of the correct and safe operating procedures for that specific machine. This documentation is particularly valuable for high-risk equipment where improper use is the primary cause of injuries, including squat racks, cable crossover machines, leg press machines, and heavy plate-loaded equipment. In the event of an incident, you have timestamped proof that the member was shown and acknowledged the safety protocols before using the equipment. The acknowledgment only needs to happen once per member per machine, so it does not create ongoing friction for regular users.",
  },
  {
    question: "Can the QR system track equipment across multiple gym locations from a single dashboard?",
    answer:
      "Yes. The GymWyse Equipment QR system is built for multi-location operators from the ground up. Every piece of equipment is tagged with its location, and the dashboard provides both a consolidated view across all locations and individual location-specific views. You can compare equipment performance, maintenance costs, and usage patterns across locations to identify site-specific issues or standardize on the most reliable equipment brands and models. If one location's treadmills generate three times more maintenance tickets than the same model at another location, that data helps you investigate whether the issue is environmental, usage-based, or maintenance-related. Staff at each location only see the equipment and reports relevant to their site, while operations managers and owners see everything. Maintenance schedules can be configured independently per location to account for differences in operating hours, traffic volume, and staffing levels. The multi-location view also aggregates depreciation and cost per use data, giving you a fleet-level perspective on your total equipment investment across all sites.",
  },
  {
    question: "How does cost per use tracking work and what decisions does it inform?",
    answer:
      "Cost per use is calculated by dividing the total investment in a piece of equipment by the total number of member scans recorded for that machine. The total investment includes the original purchase price plus every documented maintenance cost over the equipment's lifetime. For example, a treadmill purchased for six thousand dollars that has accumulated one thousand two hundred dollars in maintenance costs over three years and has been scanned nine thousand times has a total investment of seven thousand two hundred dollars and a cost per use of eighty cents. A specialty abductor machine purchased for three thousand five hundred dollars with four hundred dollars in maintenance costs and only three hundred scans has a cost per use of thirteen dollars. This metric immediately reveals which equipment delivers strong return on investment and which machines are underperforming relative to their cost. High cost per use signals either low member interest, poor placement on the floor, or an equipment type that does not align with your membership's training preferences. These insights directly inform replacement planning, floor layout optimization, and future purchasing decisions. Gym owners who use cost per use data report making more confident capital expenditure decisions and avoiding repeat purchases of equipment types that historically underperform at their facility.",
  },
];

export function EquipmentQRPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Equipment Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Equipment QR Codes for Gym Management
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              The GymWyse Equipment QR system is an essential module of our gym management software
              that places a scannable QR code on every piece of equipment in your facility. Members
              scan to report issues, view exercise demos, and log usage. Owners get real-time
              maintenance tracking, usage analytics, depreciation data, and a complete liability
              protection audit trail. Included in all GymWyse plans starting at ninety-nine dollars
              per month.
            </p>
          </motion.div>

          {/* Quick Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: QrCode, title: "QR on Every Machine", desc: "Unique codes for every piece of equipment, generated and printed in minutes" },
              { icon: Wrench, title: "Maintenance Tracking", desc: "Preventive schedules, cleaning logs, warranty alerts, and cost tracking" },
              { icon: Shield, title: "Liability Protection", desc: "Timestamped audit trails and safety acknowledgment workflows" },
              { icon: BarChart3, title: "Usage Analytics", desc: "Cost per use, depreciation tracking, and replacement planning" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-sm font-semibold text-pure-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-cool-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 md:py-32 bg-midnight">
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
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
                Why Equipment Management Cannot Be an Afterthought
              </h2>
            </div>
            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-4">
                Most gyms operate equipment management on a fix-it-when-it-breaks model, and the
                consequences are expensive, dangerous, and entirely preventable. A cable frays until
                it snaps mid-set. A treadmill belt wears until it stops dead under a runner's feet. A
                bench pad tears until the stuffing falls out and a member's skin contacts exposed foam
                and metal. Reactive maintenance costs two to three times more than preventive
                maintenance because emergency repairs require expedited parts shipping, after-hours
                technician callout rates, and often complete equipment replacement instead of a simple
                part swap that would have cost a fraction of the price if caught early.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                Beyond the direct repair costs, broken equipment erodes member experience every single
                day it sits out of service. Members work around malfunctioning machines for a while,
                adjusting their routines and lowering their expectations. Then they start noticing the
                gym down the street. Every day a popular machine is unavailable is a day your member
                experience degrades incrementally, and that degradation compounds. For gyms without a
                structured equipment tracking system, the average time from equipment failure to
                complete resolution is measured in days or weeks, not hours. That gap costs you
                members, and replacing a lost member costs five to seven times more than retaining one.
              </p>
              <p className="text-soft-white leading-relaxed">
                The liability exposure is the most dangerous aspect of neglected equipment management.
                A member gets injured on a machine that had a known issue, and your gym has no
                documentation showing the problem was reported, assessed, or resolved. Without a
                timestamped audit trail of equipment condition and maintenance actions, you are exposed
                to negligence claims with no evidence to defend yourself. One incident can cost tens of
                thousands in legal fees, settlements, and increased insurance premiums. Insurance
                companies now routinely ask for maintenance records during claims review, and gyms
                without them face denied coverage or dramatically higher rates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
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
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Four Capabilities Built for Real Gym Operations
            </h2>
            <p className="text-soft-white leading-relaxed">
              Every feature addresses a specific operational pain point that gym owners and facility
              managers deal with daily. No theoretical features you will never use. Every capability
              solves a problem that costs you money, members, or legal exposure right now.
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

      {/* Gym Operations Context Section */}
      <section className="py-24 md:py-32 bg-midnight">
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
                Platform Integration
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
                How Equipment QR Fits Into the Complete GymWyse Platform
              </h2>
            </div>
            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed">
                The Equipment QR system is not a standalone maintenance tool operating in isolation
                from the rest of your gym management stack. It is deeply integrated into the complete
                GymWyse platform, connecting equipment data with member profiles, financial reporting,
                staff management, and operational analytics. When a member scans a QR code and submits
                an issue report, that report is linked to their member profile, so you can see which
                members are your most active facility reporters and recognize them for contributing to
                gym upkeep. Maintenance costs logged against each piece of equipment feed directly into
                your revenue and expense analytics dashboard, giving you a complete picture of
                operational costs alongside membership revenue and class income. Staff notifications
                for equipment issues use the same notification infrastructure as class bookings and
                member communications, so your team operates from a single app rather than juggling
                separate systems. The QR system also integrates with the{" "}
                <Link href="/platform/member-app" className="text-electric-green hover:underline">
                  GymWyse member app
                </Link>
                , allowing members to scan equipment codes directly within the app for a seamless
                experience that includes exercise demonstration videos alongside the reporting workflow.
                This unified approach means every data point in your gym, from member attendance to
                equipment condition to financial performance, lives in one platform and connects to
                everything else. Visit our{" "}
                <Link href="/pricing" className="text-electric-green hover:underline">
                  pricing page
                </Link>{" "}
                to see how the Equipment QR system is included in every plan, or explore the{" "}
                <Link href="/integrations/wearables" className="text-electric-green hover:underline">
                  integrations page
                </Link>{" "}
                to understand how the broader ecosystem connects.
              </p>
            </div>
          </motion.div>
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
                Apex Performance Lab, Los Angeles
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-4">
                Apex Performance Lab operates two locations across Los Angeles with over one hundred
                and forty pieces of equipment in total, including commercial treadmills, rowing
                ergometers, cable machines, squat racks, benches, plate-loaded leg presses, and a full
                set of functional training rigs. Before implementing GymWyse, the gym relied on paper
                maintenance logs stored on clipboards in the back office of each location. Service
                dates were missed regularly because the logs were only checked when someone remembered
                to look at them. Equipment issues went unreported until they became serious enough for
                a member to complain at the front desk, and even then, the complaint was often written
                on a sticky note that got lost in the shuffle of daily operations.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                The gym averaged two liability-related incidents per year, each requiring legal
                consultation, insurance claims processing, and significant management time. Annual
                maintenance costs were unpredictable because the reactive, break-fix approach meant
                emergency repairs at premium rates. The operations manager had no visibility into which
                equipment was costing the most to maintain or which machines were underutilized
                relative to the floor space they occupied.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                After implementing the GymWyse Equipment QR system across both locations, the results
                were immediate and measurable. Members submitted over two hundred equipment reports
                through the QR system within the first ninety days, identifying dozens of minor issues
                that the staff walkthrough had been missing, including fraying cables, squeaky bearings,
                cracked display screens, and worn seat pads. Staff response time dropped from an
                average of four to five days down to under six hours. Over the following twelve months,
                Apex recorded zero liability incidents, the first clean year in the gym's history.
                Preventive maintenance replaced emergency repairs as the dominant maintenance model,
                saving the gym an estimated eleven thousand two hundred dollars per year in maintenance
                costs. The usage analytics revealed that three pieces of specialty equipment, an
                abductor machine, an adductor machine, and a seated calf raise, were scanned fewer
                than fifty times combined over six months while occupying valuable floor space. Apex
                replaced all three with additional squat rack stations and a second cable crossover
                machine, which became the two most-scanned equipment types within weeks. Floor
                utilization increased by twenty-two percent based on scan density per square foot.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Liability Incidents", value: "0", detail: "Down from 2/year" },
                  { label: "Annual Savings", value: "$11.2K", detail: "Preventive vs reactive" },
                  { label: "Floor Utilization", value: "+22%", detail: "After equipment swap" },
                  { label: "Underused Machines", value: "3", detail: "Identified and replaced" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold font-mono text-electric-green mb-1">
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

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              What Gym Owners Are Saying
            </h2>
            <p className="text-soft-white leading-relaxed">
              Real feedback from facility owners and operations managers who implemented the GymWyse
              Equipment QR system at their gyms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
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
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-electric-green">{testimonial.role}</p>
                  <p className="text-xs text-dim-gray">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              GymWyse Equipment QR vs Manual Maintenance Logs
            </h2>
            <p className="text-soft-white leading-relaxed">
              Most gyms still rely on paper clipboards, shared spreadsheets, or nothing at all to
              track equipment condition and maintenance history. The GymWyse Equipment QR system
              replaces every manual process with a digital, automated, and member-powered workflow
              that captures more data, responds faster, and creates the documentation you need for
              liability protection and insurance compliance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 gap-0 border-b border-glass-border p-4 md:p-6">
                <div className="text-sm font-semibold text-pure-white">Capability</div>
                <div className="text-sm font-semibold text-electric-green text-center">GymWyse QR</div>
                <div className="text-sm font-semibold text-dim-gray text-center">Manual Logs</div>
              </div>
              {comparisonFeatures.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-0 p-4 md:px-6 md:py-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <div className="text-sm text-cool-gray">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.gymwyse ? (
                      <Check className="w-5 h-5 text-electric-green" />
                    ) : (
                      <X className="w-5 h-5 text-dim-gray" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.competitor ? (
                      <Check className="w-5 h-5 text-cool-gray" />
                    ) : (
                      <X className="w-5 h-5 text-dim-gray" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Detailed answers to the most common questions about the GymWyse Equipment QR system,
              maintenance tracking, liability protection, and usage analytics.
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

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
              Included in Every GymWyse Plan
            </h2>
            <div className="glass-card p-8 md:p-10">
              <p className="text-4xl font-bold font-mono text-electric-green mb-2">
                $99<span className="text-lg text-cool-gray">/mo</span>
              </p>
              <p className="text-soft-white leading-relaxed mb-6">
                The complete Equipment QR system with unlimited QR codes, unlimited member reports,
                preventive maintenance scheduling, automated service reminders, cleaning logs, warranty
                tracking, safety acknowledgment workflows, usage analytics, cost per use calculations,
                depreciation tracking, multi-location support, and exportable maintenance reports is
                included in every GymWyse plan starting at ninety-nine dollars per month. There is no
                per-machine fee, no scan limit, and no cap on the number of equipment items you track.
              </p>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View All Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Stop Guessing About Your Equipment. Start Tracking Everything.
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a twenty-minute demo and see the Equipment QR system in action with your own
              equipment list. Or start a free fourteen-day trial and print your first QR codes today.
              No credit card required. No contract. Cancel any time. Use our{" "}
              <Link href="/roi-calculator" className="text-electric-green hover:underline">
                ROI calculator
              </Link>{" "}
              to estimate the maintenance savings and liability reduction for your specific facility.
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
