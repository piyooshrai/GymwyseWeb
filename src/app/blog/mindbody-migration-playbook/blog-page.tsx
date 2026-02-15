"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Search, Database, PlayCircle, GraduationCap, Zap, HeadphonesIcon, CheckCircle2, AlertTriangle, Clock, DollarSign, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "Will I lose any member data during the migration from Mindbody?",
    a: "No. Our migration process includes a comprehensive data audit (Phase 2) that maps every Mindbody data field to its GymWyse equivalent before any transfer begins. We migrate member profiles, billing history, visit logs, class bookings, contract terms, payment methods (tokenized), notes, and communication preferences. A reconciliation report is generated after transfer showing field-by-field match rates, and any exceptions are flagged for manual review before cutover.",
  },
  {
    q: "How long does the full migration take?",
    a: "The standard timeline is 4-6 weeks from kickoff to full cutover. Discovery takes 3-5 days, Data Audit takes 5-7 days, Parallel Run takes 10-14 days, Staff Training takes 3-5 days, Cutover happens over a single weekend, and Post-Migration Support runs 30 days. For larger operations (5+ locations or 5,000+ members), add 1-2 weeks for additional data validation and phased location rollout.",
  },
  {
    q: "Can I run Mindbody and GymWyse simultaneously during migration?",
    a: "Yes -- that is exactly what Phase 3 (Parallel Run) is designed for. Both systems run side-by-side for 10-14 days. All new transactions are recorded in both platforms, and automated reconciliation scripts compare results daily. This catches any discrepancies before you fully cut over, and it gives your staff time to learn GymWyse while Mindbody still serves as the safety net.",
  },
  {
    q: "What about my Mindbody API integrations with third-party tools?",
    a: "During Discovery (Phase 1), we catalog every third-party integration connected to your Mindbody account -- payment processors, email marketing tools, door access systems, accounting software, etc. GymWyse has native integrations with most popular fitness industry tools, and our open API covers everything else. We handle the integration cutover as part of the migration, so nothing breaks on switch day.",
  },
  {
    q: "What if my staff is resistant to switching from Mindbody?",
    a: "Staff resistance is the number-one migration risk, which is why we dedicate an entire phase to training (Phase 4). We use a train-the-trainer model where we certify 2-3 power users at each location who then support their colleagues. Role-specific training means front desk staff, trainers, and managers each get curriculum tailored to their daily workflows. We also provide a 30-day post-migration support period where our team is available for real-time questions.",
  },
  {
    q: "How much will I save by switching from Mindbody to GymWyse?",
    a: "The average gym saves $2,060 per year after switching, based on data from 200+ migrations. This comes from lower base subscription costs (GymWyse pricing is typically 25-35% less than equivalent Mindbody tiers), elimination of per-transaction fees that Mindbody charges on some plans, and reduced need for third-party add-ons because GymWyse includes features like churn prediction and revenue analytics natively.",
  },
];

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discovery & Assessment",
    timeline: "Days 1-5",
    desc: "We start by understanding exactly what you have. Your dedicated migration specialist conducts a full audit of your Mindbody setup: membership types, pricing tiers, class structures, staff permissions, third-party integrations, custom fields, and reporting workflows. We document every configuration detail and map it to the GymWyse equivalent. The output is a Migration Blueprint -- a detailed document showing what moves where, what changes, and what improves.",
    deliverables: ["Migration Blueprint document", "Integration dependency map", "Timeline confirmation", "Risk assessment matrix"],
  },
  {
    icon: Database,
    phase: "Phase 2",
    title: "Data Audit & Mapping",
    timeline: "Days 6-12",
    desc: "This is where precision matters most. We extract a snapshot of your Mindbody data and run it through our validation engine. Every member record, billing history entry, visit log, contract term, and communication preference is checked for completeness and mapped to the GymWyse data model. We flag any data quality issues (duplicate records, orphaned payments, inconsistent naming) and clean them before import -- meaning your GymWyse database starts cleaner than your Mindbody one ever was.",
    deliverables: ["Data mapping specification", "Quality assessment report", "Cleanup recommendations", "Test import results"],
  },
  {
    icon: PlayCircle,
    phase: "Phase 3",
    title: "Parallel Run",
    timeline: "Days 13-26",
    desc: "Both systems run simultaneously. All new member sign-ups, class bookings, payments, and check-ins are recorded in both Mindbody and GymWyse. Automated reconciliation scripts run nightly, comparing every transaction across both platforms and flagging any discrepancies. This is your safety net -- it proves that GymWyse handles your operations correctly before you commit to the switch. Your daily operations continue completely uninterrupted during this phase.",
    deliverables: ["Daily reconciliation reports", "Discrepancy resolution log", "Performance benchmarks", "Go/no-go readiness checklist"],
  },
  {
    icon: GraduationCap,
    phase: "Phase 4",
    title: "Staff Training",
    timeline: "Days 20-25 (overlaps with Parallel Run)",
    desc: "We use a train-the-trainer model. Two to three power users at each location receive intensive GymWyse certification covering every workflow they will encounter: check-ins, class management, billing, reporting, member communications, and troubleshooting. These certified users then train their teams with our support materials. Training is role-specific -- front desk staff learn check-in flows, trainers learn client management, and managers learn reporting and analytics. We provide video tutorials, quick-reference cards, and a searchable knowledge base.",
    deliverables: ["Role-specific training curriculum", "Certified power users at each location", "Quick-reference cards and video library", "Staff competency sign-off sheets"],
  },
  {
    icon: Zap,
    phase: "Phase 5",
    title: "Cutover Weekend",
    timeline: "Day 27-28 (single weekend)",
    desc: "The big switch happens over a weekend to minimize operational impact. Friday evening, the final Mindbody data sync runs. Saturday, all integrations are pointed to GymWyse. Sunday, comprehensive testing confirms everything is working: door access, payment processing, class scheduling, member app, email systems, and reporting. By Monday morning, your team opens GymWyse as their primary system. Mindbody is kept in read-only mode for 30 days as a reference archive.",
    deliverables: ["Final data sync confirmation", "Integration cutover verification", "End-to-end system test results", "Monday morning readiness sign-off"],
  },
  {
    icon: HeadphonesIcon,
    phase: "Phase 6",
    title: "Post-Migration Support",
    timeline: "Days 29-58 (30-day period)",
    desc: "Migration does not end at cutover. For 30 days, your dedicated migration specialist remains available for real-time support. We monitor system performance, track staff adoption metrics, resolve any edge cases that surface during live operation, and optimize configurations based on how your team actually uses the platform. A formal post-migration review at Day 30 compares key metrics (processing times, error rates, staff efficiency) against your Mindbody baseline to quantify improvements.",
    deliverables: ["Dedicated support channel access", "Weekly performance reviews", "Configuration optimization", "30-day comparison report vs. Mindbody baseline"],
  },
];

export function MindbodyMigrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Mindbody to GymWyse",
    description: "The zero-downtime, 6-phase migration process used by 200+ gyms to switch from Mindbody to GymWyse.",
    totalTime: "P42D",
    step: phases.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `${p.phase}: ${p.title}`,
      text: p.desc,
    })),
  };

  return (
    <main className="min-h-screen bg-deep-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-grid overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-electric-green/10 text-electric-green border border-electric-green/20 mb-6">
              Published January 11, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              Switching from Mindbody:{" "}
              <span className="text-electric-green">The Complete Migration Playbook</span>
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              The zero-downtime migration process used by 200+ gyms to switch from Mindbody.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Answer */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-electric-green mb-4">The Short Answer</h2>
            <p className="text-lg text-soft-white leading-relaxed">
              You switch from Mindbody to GymWyse through a structured 6-phase migration that takes 4-6 weeks and involves zero downtime for your members or staff. The process includes a parallel run period where both systems operate simultaneously, automated data reconciliation to ensure nothing is lost, role-specific staff training, and a single-weekend cutover followed by 30 days of dedicated support. Over 200 gyms have completed this exact process, saving an average of $2,060 per year.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Gyms Switch */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Why Gyms Are Leaving Mindbody in 2026</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Let&apos;s acknowledge something upfront: Mindbody is a well-known platform, and switching away from any system you have invested time in feels daunting. Nobody changes software for fun. The gyms that come to us do so because they have hit real ceilings -- and those ceilings are costing them real money.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The most common triggers we hear: escalating costs as Mindbody moves upmarket with aggressive per-transaction fees, lack of meaningful AI-driven insights (churn prediction, revenue forecasting), poor multi-location support without expensive enterprise tiers, limited customization that forces workarounds, and a growing sense that the platform serves Mindbody&apos;s marketplace more than it serves the individual gym&apos;s interests.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            If any of that resonates, you are not alone. Over 200 gyms have made this exact move, and the playbook below is drawn from every lesson learned along the way. No surprises, no guesswork -- just a tested process that works.
          </p>
        </motion.div>
      </section>

      {/* 6 Phases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The 6-Phase <span className="text-electric-green">Zero-Downtime Migration</span>
          </motion.h2>
          <motion.p
            className="text-cool-gray text-lg text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Each phase has clear deliverables, timelines, and go/no-go gates. Nothing moves forward until the previous phase passes quality checks.
          </motion.p>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electric-green/10 flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-sapphire-blue bg-sapphire-blue/10 px-3 py-1 rounded-full">{phase.phase}</span>
                      <span className="text-sm text-cool-gray flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {phase.timeline}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-pure-white mb-3">{phase.title}</h3>
                    <p className="text-cool-gray leading-relaxed mb-4">{phase.desc}</p>
                    <div>
                      <p className="text-sm font-semibold text-electric-green mb-2">Deliverables:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.deliverables.map((d, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-cool-gray">
                            <CheckCircle2 className="w-4 h-4 text-electric-green flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8">Common Pitfalls (and How We Avoid Them)</h2>
          <div className="space-y-4">
            {[
              { pitfall: "Skipping the parallel run to save time", solution: "The parallel run is non-negotiable. It is the only way to guarantee data integrity before cutover. Rushing past it is how migrations fail." },
              { pitfall: "Training only managers, not front-line staff", solution: "The people who use the system 8 hours a day are your front desk team. Role-specific training ensures every person is confident on Day 1." },
              { pitfall: "Migrating dirty data as-is", solution: "Phase 2 includes data cleanup. Duplicate records, orphaned accounts, and inconsistent naming conventions get resolved before they enter your new system." },
              { pitfall: "Not communicating the switch to members", solution: "We provide member communication templates (email, SMS, in-app) for pre-migration, cutover weekend, and post-migration. Members should feel informed, not surprised." },
              { pitfall: "Cutting off Mindbody access immediately after switch", solution: "Mindbody stays in read-only mode for 30 days post-cutover. Staff can reference historical data while they build familiarity with GymWyse." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-soft-white mb-1">{item.pitfall}</p>
                    <p className="text-cool-gray text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Command Center Hook */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">How the Command Center Solves This</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-8">
            GymWyse&apos;s <span className="text-electric-green font-semibold">Migration Progress Tracker</span> gives you and your migration specialist a shared real-time view of every phase, task, and milestone. Think of it as a project management dashboard built specifically for gym platform migrations. Each phase displays its status (not started, in progress, completed), with percentage-based progress bars for data transfer, reconciliation pass rates, staff training completion, and integration cutover checks. Automated alerts notify stakeholders when phase gates are met, when discrepancies surface during parallel run, or when any task falls behind schedule. You always know exactly where you stand.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Migrations Completed", value: "200+", color: "text-electric-green" },
                { label: "Avg. Timeline", value: "4-6 wks", color: "text-sapphire-blue" },
                { label: "Data Integrity", value: "99.97%", color: "text-electric-green" },
                { label: "Downtime", value: "Zero", color: "text-sapphire-blue" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="text-sm text-cool-gray mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
            Legacy Manual Management vs. <span className="text-electric-green">GymWyse AI Management</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Capability</th>
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Legacy Manual Management</th>
                  <th className="text-left py-4 px-4 text-electric-green font-medium">GymWyse AI Management</th>
                </tr>
              </thead>
              <tbody className="text-soft-white">
                {[
                  ["Migration process", "DIY with CSV exports and manual re-entry", "Dedicated specialist with 6-phase proven playbook"],
                  ["Data validation", "Manual spot-checking", "Automated reconciliation with 99.97% integrity"],
                  ["Staff training", "Watch YouTube videos and figure it out", "Role-specific curriculum with certified power users"],
                  ["Downtime risk", "Hours to days of disruption", "Zero downtime with parallel run safety net"],
                  ["Integration cutover", "Hope third-party tools reconnect", "Catalog, plan, and verify every integration"],
                  ["Cost impact", "Hidden migration costs + consultant fees", "Migration included in onboarding, $2,060/yr avg savings"],
                  ["Post-migration support", "Submit a ticket and wait", "30 days of dedicated specialist availability"],
                  ["Member communication", "Write your own emails", "Pre-built templates for every migration touchpoint"],
                ].map(([cap, legacy, gymwyse], i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-4 px-4 font-medium">{cap}</td>
                    <td className="py-4 px-4 text-cool-gray">{legacy}</td>
                    <td className="py-4 px-4 text-electric-green">{gymwyse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ROI Calculation */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">ROI Calculation: The Math That Matters</h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-cool-gray text-lg">For a typical 400-member gym switching from Mindbody Pro:</p>
            <div className="space-y-3 text-soft-white">
              <p><span className="text-sapphire-blue font-semibold">Mindbody Pro subscription:</span> ~$349/month = <span className="text-alert-red font-bold">$4,188/year</span></p>
              <p><span className="text-sapphire-blue font-semibold">Mindbody per-transaction fees (avg):</span> ~$85/month = <span className="text-alert-red font-bold">$1,020/year</span></p>
              <p><span className="text-sapphire-blue font-semibold">Third-party add-ons (churn tools, analytics):</span> ~$120/month = <span className="text-alert-red font-bold">$1,440/year</span></p>
              <p><span className="text-sapphire-blue font-semibold">Total Mindbody cost:</span> <span className="text-alert-red font-bold">$6,648/year</span></p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p><span className="text-electric-green font-semibold">GymWyse equivalent (all features included):</span> <span className="text-electric-green font-bold">$4,588/year</span></p>
                <p><span className="text-electric-green font-semibold">Direct annual savings:</span> $6,648 - $4,588 = <span className="text-electric-green font-bold">$2,060/year</span></p>
                <p className="text-cool-gray mt-2 text-base">This is the baseline software savings alone. Factor in GymWyse&apos;s native churn prediction saving an average of 7 additional members/month ($59 avg dues x 7 x 12 = <span className="text-electric-green font-bold">$4,956/year</span> in retained revenue), and the true annual value impact rises to <span className="text-electric-green font-bold">$7,016+</span>.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Migration Savings <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Regional Compliance Note</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { region: "United States", note: "Data portability rights vary by state. California's CCPA and several state privacy laws give consumers rights over their data. GymWyse's migration process ensures compliance with data transfer requirements and maintains PCI DSS Level 1 certification for payment data migration." },
              { region: "United Kingdom", note: "GDPR Article 20 establishes the right to data portability, supporting your right to move member data between platforms. GymWyse handles all data transfers in compliance with UK GDPR, including appropriate data processing agreements and lawful basis documentation." },
              { region: "Australia", note: "The Australian Privacy Principles (APP 12) govern access to personal information. Migration data handling must comply with the Notifiable Data Breaches scheme. GymWyse maintains data within Australian data centers when required by client preference." },
              { region: "UAE", note: "UAE Federal Data Protection Law requires data controller registration and cross-border transfer safeguards. For gyms in DIFC or ADGM, additional data protection regulations apply. GymWyse offers UAE-hosted data options and ensures compliance with local licensing transfer requirements." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-bold text-sapphire-blue mb-2">{item.region}</h3>
                <p className="text-cool-gray text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expert Commentary */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Insights from GymWyse Product Team</h2>
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed italic mb-4">
              &quot;The biggest fear gym owners have about migration is data loss. It keeps them on platforms they have outgrown for months or even years longer than they should stay. That is why we built the parallel run phase -- it is the single most important part of our process. When you can see every transaction reconciled across both systems for two weeks, fear disappears and confidence takes over. Of our 200+ Mindbody migrations, we have achieved 99.97% data integrity, and the remaining 0.03% were edge cases caught and resolved during the parallel run before cutover.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, Migration Engineering Division
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-soft-white pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-cool-gray leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA + Internal Links */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            Talk to our migration team about your specific Mindbody setup and get a custom timeline and savings estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Start Your Migration <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg">
                Calculate Your Savings
              </Button>
            </Link>
          </div>
          <div className="border-t border-glass-border pt-8">
            <p className="text-sm text-dim-gray mb-3">Related Resources</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/migration" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Migration Hub <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/roi-calculator" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                ROI Calculator <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/demo" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Request Demo <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
