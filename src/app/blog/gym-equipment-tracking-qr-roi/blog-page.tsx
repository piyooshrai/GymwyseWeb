"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  QrCode,
  Wrench,
  TrendingUp,
  DollarSign,
  BarChart3,
  Clock,
  AlertTriangle,
  CheckCircle,
  Globe,
  Users,
  Shield,
} from "lucide-react";

const faqs = [
  {
    q: "How do QR codes work for gym equipment tracking?",
    a: "Each piece of equipment gets a weatherproof QR sticker with a unique ID. Staff scan the code with any smartphone camera to open the equipment's full profile: maintenance history, usage stats, warranty info, and a one-tap maintenance request form. Members can also scan to report issues or leave feedback. No special app download required since it works through the mobile browser.",
  },
  {
    q: "What is the cost of implementing QR-based equipment tracking?",
    a: "The hardware cost is negligible: industrial-grade QR stickers cost approximately $0.15-0.50 each and last 3-5 years even in high-humidity environments. The real investment is in the software platform that powers the tracking. GymWyse includes equipment tracking in all plans. For a 100-piece equipment gym, the total sticker cost is under $50.",
  },
  {
    q: "How does preventive maintenance actually save money compared to reactive repairs?",
    a: "Preventive maintenance costs 30-40% less than reactive repairs because you catch issues when they are small (a worn belt vs a burned motor). You also avoid the hidden costs of reactive maintenance: emergency call-out premiums (typically 50-100% above standard rates), expedited parts shipping, member complaints, and lost revenue from out-of-service equipment during peak hours.",
  },
  {
    q: "Can QR tracking help with insurance claims and liability?",
    a: "Absolutely. QR-based tracking creates a timestamped maintenance log that serves as evidence of due diligence. If a member is injured on equipment, your maintenance records show that you followed manufacturer-recommended service intervals. Insurance companies increasingly offer premium discounts (5-15%) for gyms with documented preventive maintenance programs.",
  },
  {
    q: "How does usage data from QR tracking inform purchasing decisions?",
    a: "Usage analytics show you exactly which equipment gets the most and least use, broken down by time of day, day of week, and member demographic. When it comes time to buy new equipment, you replace the machines members actually use rather than guessing. One GymWyse partner discovered their second rowing machine had 80% less usage than the first, so they replaced it with a stair climber that members had been requesting.",
  },
  {
    q: "What about warranty management through QR tracking?",
    a: "Every QR-linked equipment profile stores purchase date, warranty terms, warranty expiration, and service provider contact details. The system sends automatic alerts 90 days before warranty expiration so you can schedule any final covered inspections. It also flags when a repair might be warranty-covered, preventing you from paying for service that should be free.",
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

export function EquipmentTrackingQRPage() {
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
                name: "How to Implement QR-Based Equipment Tracking in Your Gym",
                description:
                  "Step-by-step guide to setting up QR code equipment management for preventive maintenance and asset lifecycle tracking.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Inventory All Equipment",
                    text: "Create a complete inventory of every piece of equipment including make, model, serial number, purchase date, and warranty details.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Generate and Apply QR Codes",
                    text: "Generate unique QR codes for each equipment item and apply weatherproof stickers in a visible, scannable location.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Set Maintenance Schedules",
                    text: "Configure preventive maintenance schedules based on manufacturer recommendations and usage patterns.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Train Staff on Scanning Workflow",
                    text: "Train all staff on how to scan codes, log maintenance activities, and report issues through the mobile interface.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Enable Member Feedback",
                    text: "Allow members to scan codes and submit equipment feedback or issue reports directly from the gym floor.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Review Analytics Monthly",
                    text: "Review equipment usage data, maintenance costs, and lifecycle projections to inform capital expenditure decisions.",
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
              Equipment
            </span>
            <span className="text-xs text-dim-gray">February 8, 2026</span>
            <span className="text-xs text-dim-gray">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-tight mb-6">
            QR-Based Equipment Tracking: The ROI of Knowing What Breaks Before
            It Does
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed">
            How QR code equipment management prevents downtime, extends asset
            life by 25%, and provides usage data for purchasing decisions.
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
              QR-based equipment tracking pays for itself within the first
              prevented breakdown. A single treadmill motor failure costs $2,800
              in emergency repair and lost revenue, while monthly QR tracking
              costs $15 per piece of equipment. By shifting from reactive to
              preventive maintenance, gyms extend equipment lifespan by 25%,
              reduce repair costs by 35%, and eliminate the member-facing
              &quot;Out of Order&quot; signs that quietly drive cancellations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* QR Code Scanning Workflow */}
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
              <QrCode className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              The QR Code Scanning Workflow
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              The beauty of QR-based tracking is its simplicity. There is no
              app to download, no hardware to install, and no technical training
              required. Your staff already have the only tool they need: a
              smartphone with a camera.
            </p>
            <p>
              Here is how it works in practice. Every piece of equipment in your
              gym gets a unique, weatherproof QR sticker applied to a visible
              location. When a staff member scans the code during their morning
              walkaround, they instantly see the equipment&apos;s complete
              profile: last service date, upcoming maintenance schedule, total
              usage hours, any open issue reports from members, warranty status,
              and depreciation tracking.
            </p>
            <p>
              If they spot an issue, one tap opens a maintenance request form
              pre-populated with the equipment details. No more scribbling
              &quot;treadmill 3 is making a noise&quot; on a Post-it note that
              gets lost behind the reception desk. The request is timestamped,
              categorised by severity, and routed to the right person
              automatically.
            </p>
            <p>
              Members can scan the codes too. Instead of approaching the front
              desk mid-workout to report that a cable machine is fraying, they
              scan the QR code and submit a quick report. This crowdsources your
              equipment monitoring. You have hundreds of eyes on your gym floor
              every day. Let them help.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Preventive vs Reactive */}
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
              <Wrench className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Preventive vs. Reactive Maintenance Costs
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Most gyms operate in reactive mode. Something breaks, you call a
              technician, pay emergency rates, and put an &quot;Out of
              Order&quot; sign on the machine while you wait for parts. This
              approach costs 3-5x more than preventive maintenance, and the
              real costs go far beyond the repair bill.
            </p>
            <p>
              Consider a commercial treadmill. The manufacturer recommends belt
              lubrication every 3 months, belt replacement every 12 months, and
              a full service annually. The preventive maintenance cost for this
              schedule is approximately $180 per year. Now consider what happens
              when you skip it. The belt dries out, friction increases, the
              motor compensates by drawing more current, the motor controller
              overheats, and eventually the whole drive system fails. Emergency
              motor replacement: $1,800. Emergency service call: $350.
              Expedited shipping for the motor: $250. Lost member sessions while
              the treadmill is out for 5-7 days: approximately $400 in attributed
              value. Total: $2,800 versus $180.
            </p>
            <p>
              But the hidden cost is even larger. When members see equipment
              consistently out of service, they start questioning the value of
              their membership. Our data shows that gyms with more than three
              out-of-service machines at any given time see a 12% increase in
              cancellation rates over the following quarter. That is not a
              coincidence. Nobody wants to pay $50 a month for a gym where they
              cannot use the equipment they want.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Asset Lifecycle and Usage Analytics */}
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
              <TrendingUp className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Asset Lifecycle Tracking and Usage Analytics
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Every piece of gym equipment follows a lifecycle: purchase,
              deployment, peak performance, gradual degradation, and eventual
              replacement. QR tracking gives you visibility into exactly where
              each asset sits on this curve, so you can make capital expenditure
              decisions based on data rather than gut feeling.
            </p>
            <p>
              Usage analytics reveal patterns you would never see otherwise.
              Which machines get the most use during which hours? Which
              equipment sits idle for long stretches? Is your second elliptical
              actually necessary, or would a stair climber serve members better?
              One GymWyse partner discovered that their three rowing machines
              had wildly different usage rates: Machine 1 logged 6.2 hours
              daily, Machine 2 logged 1.4 hours, and Machine 3 logged 0.8
              hours. The difference was location. Machine 1 was by the window
              with a view, Machine 3 was facing a wall near the toilets. They
              relocated Machine 3 and saw its usage jump to 4.1 hours daily.
            </p>
            <p>
              Depreciation tracking through QR codes lets your accountant
              calculate accurate book values for insurance and tax purposes. When
              equipment is stolen, damaged by water, or destroyed in a fire,
              having a precise, up-to-date asset register with purchase dates,
              current values, and maintenance histories makes insurance claims
              straightforward rather than contentious.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Warranty Management
            </h3>
            <p>
              Commercial gym equipment typically comes with 1-5 year warranties
              that cover different components at different levels. Frame
              warranties might be lifetime while electronics are covered for 2
              years. Keeping track of which components are still under warranty
              for 50+ pieces of equipment is practically impossible without a
              system.
            </p>
            <p>
              QR tracking stores all warranty information at the equipment
              level. When a staff member logs a maintenance issue, the system
              automatically checks whether the affected component is still under
              warranty and notifies you before you pay for a repair that the
              manufacturer should cover. We estimate that gyms with systematic
              warranty tracking save an average of $1,200 per year on repairs
              that should have been covered.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Member Equipment Feedback
            </h3>
            <p>
              Traditionally, equipment feedback from members arrives in one of
              three ways: they tell the front desk (and it gets forgotten), they
              post on social media (and everyone sees it), or they say nothing
              and just leave when their frustration reaches a tipping point. QR
              codes create a fourth, better option: instant, private, actionable
              feedback directly linked to the specific piece of equipment.
            </p>
            <p>
              Members can rate equipment condition, report issues, and even
              request specific machines they would like to see added. This
              feedback loop turns your members into a quality assurance team.
              Aggregated feedback data shows you which equipment categories
              matter most to your membership, directly informing your next
              purchasing cycle.
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
            How the Command Center Solves This: Equipment Health Dashboard
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-soft-white leading-relaxed">
              The GymWyse Equipment Health Dashboard transforms equipment
              management from a chore into a strategic advantage. Every scan,
              service, and member report feeds into a live overview that tells
              you exactly what is working, what needs attention, and what should
              be replaced.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Live Equipment Status Map
                    </p>
                    <p className="text-sm text-cool-gray">
                      Visual floor plan showing green/yellow/red status for
                      every piece of equipment in real time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Predictive Maintenance Alerts
                    </p>
                    <p className="text-sm text-cool-gray">
                      AI-driven predictions based on usage patterns, age, and
                      historical failure data across the GymWyse network
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Usage Heat Maps
                    </p>
                    <p className="text-sm text-cool-gray">
                      Hour-by-hour usage data for every machine to optimise
                      floor layout and purchasing
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Warranty Expiration Timeline
                    </p>
                    <p className="text-sm text-cool-gray">
                      Visual timeline of all warranty expirations with
                      auto-scheduled end-of-warranty inspections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Total Cost of Ownership Reports
                    </p>
                    <p className="text-sm text-cool-gray">
                      Per-equipment TCO including purchase, maintenance, energy,
                      and depreciation for informed replacement decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Member Feedback Aggregation
                    </p>
                    <p className="text-sm text-cool-gray">
                      Equipment satisfaction scores from member scans, ranked
                      and trended over time
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
                    Issue Reporting
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Post-it notes, verbal reports, logbook entries nobody reads
                  </td>
                  <td className="py-4 text-soft-white">
                    QR scan, instant digital report with photo, auto-routed to
                    maintenance
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Maintenance Scheduling
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Calendar reminders that get snoozed, reactive fixes
                  </td>
                  <td className="py-4 text-soft-white">
                    AI-predicted schedules based on usage, age, and network-wide
                    failure patterns
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Warranty Tracking
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Folder of receipts, warranty cards in a drawer somewhere
                  </td>
                  <td className="py-4 text-soft-white">
                    Digital warranty profiles with auto-alerts before expiry and
                    coverage checks on repairs
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Usage Data
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Guesswork based on which machines &quot;look busy&quot;
                  </td>
                  <td className="py-4 text-soft-white">
                    Precise hourly usage metrics per machine with trend analysis
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Purchasing Decisions
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Sales rep recommendations, what the gym down the street
                    bought
                  </td>
                  <td className="py-4 text-soft-white">
                    Data-driven decisions based on usage, TCO, and member
                    feedback analytics
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Insurance Documentation
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Scramble to find records after an incident
                  </td>
                  <td className="py-4 text-soft-white">
                    Complete timestamped maintenance logs exportable in one click
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Member Feedback
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Suggestion box, social media complaints
                  </td>
                  <td className="py-4 text-soft-white">
                    QR-linked equipment-specific feedback with satisfaction
                    scores
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
            ROI Calculation: One Prevented Breakdown Pays for Everything
          </h2>
          <div className="glass-card p-8">
            <p className="text-soft-white leading-relaxed mb-6">
              Here are the numbers for a mid-size gym with 75 pieces of
              equipment. We will be conservative.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Annual QR tracking cost (75 machines x $15/month)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  $13,500/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Emergency repairs avoided (4 breakdowns x $2,800 avg)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$11,200 saved
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Equipment lifespan extension (25% on $150K fleet, 7yr
                  depreciation)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$5,357 saved
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Warranty-covered repairs caught (avg 3 per year x $400)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$1,200 saved
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Reduced churn from better equipment (6 members retained x
                  $600/yr)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$3,600 saved
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Insurance premium reduction (8% on $4,500 annual premium)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$360 saved
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-electric-green">
                <span className="text-pure-white font-bold text-lg">
                  Total annual savings
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $21,717
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-electric-green/5 rounded-lg px-4">
                <span className="text-pure-white font-bold">
                  Net annual benefit
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $8,217 (1.6x ROI)
                </span>
              </div>
              <p className="text-electric-green font-semibold text-center text-lg pt-4">
                Payback period: 7.5 months
              </p>
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
              Regional Equipment Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇺🇸 United States
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                ASTM F2276 for fitness equipment maintenance, ADA accessibility
                requirements for equipment layout, OSHA workplace safety for
                staff-operated equipment, state-level health club licensing with
                equipment inspection mandates.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇬🇧 United Kingdom
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                BS EN ISO 20957 for stationary fitness equipment, CIMSPA
                facility management guidelines, HSE workplace equipment
                regulations (PUWER), Equality Act 2010 for accessible equipment
                provision.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇺 Australia
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                AS 4092 for fitness equipment safety, Fitness Australia facility
                standards, Work Health and Safety Act for equipment maintenance
                records, Australian Consumer Law for equipment warranties.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇪 United Arab Emirates
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Dubai Municipality health club regulations, Abu Dhabi DOH
                facility licensing, equipment import standards (ESMA
                certification), mandatory maintenance documentation for
                municipality inspections.
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
                &quot;Equipment tracking was one of those features we did not
                plan to build. It came from a gym owner in Texas who called us
                frustrated because he had just paid $4,200 for an emergency
                repair on a cable machine that was still under warranty. He did
                not know it was under warranty because the paperwork was in a
                box somewhere in his storage closet.&quot;
              </p>
              <p>
                &quot;That conversation led us to build the QR system. We wanted
                something that required zero behaviour change. Staff already
                have phones. Members already have phones. We just needed to put
                a scannable link on every machine. The adoption rate was
                remarkable: 85% of gyms that enable QR tracking see staff
                scanning within the first week without any formal training
                session.&quot;
              </p>
              <p>
                &quot;The biggest surprise was the member feedback data. Gyms
                that enabled member scanning got 3x more equipment issue reports
                than before, and the reports came faster and with more detail.
                One gym caught a cracked weld on a squat rack frame because a
                member scanned and reported it. That is a potential injury
                prevention, which is worth more than any dollar figure.&quot;
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
          <Shield className="w-10 h-10 text-electric-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Stop Guessing. Start Scanning.
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-2xl mx-auto">
            See how QR-based equipment tracking can prevent your next expensive
            breakdown. The Equipment Health Dashboard is included in every
            GymWyse plan.
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
            <Link href="/platform/equipment-qr">
              <Button variant="outline" size="lg">
                Explore Equipment Tracking
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
