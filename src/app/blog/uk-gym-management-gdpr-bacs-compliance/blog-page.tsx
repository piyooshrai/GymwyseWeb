"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Shield,
  FileCheck,
  CreditCard,
  Scale,
  Users,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Globe,
} from "lucide-react";

const faqs = [
  {
    q: "Do I need to register with the ICO as a gym owner?",
    a: "Yes. If you process personal data in the UK, you must register with the Information Commissioner's Office (ICO) and pay the annual data protection fee. For most gyms, that is the Tier 1 fee of £40 per year. Failing to register can result in fines up to £4,350. GymWyse auto-generates your processing activities register so your ICO submission takes minutes, not hours.",
  },
  {
    q: "What happens if a member invokes their right to erasure under GDPR?",
    a: "You must delete all personal data unless you have a lawful basis to retain it (such as financial records for HMRC which must be kept for six years). GymWyse flags which data can be erased and which must be retained, then executes the deletion across all connected systems within the 30-day window required by law.",
  },
  {
    q: "Is my gym subject to FCA regulation for taking Direct Debit payments?",
    a: "Generally no, provided you are collecting payments for your own services and not acting as a payment intermediary for third parties. However, if you use a third-party billing company, they must be FCA-authorised or exempt. GymWyse partners with FCA-authorised payment processors so you never have to worry about intermediary compliance.",
  },
  {
    q: "How does the BACS Direct Debit Guarantee protect my members?",
    a: "The Guarantee gives your members an immediate right to a full refund from their bank if a Direct Debit is taken in error. You must display the Direct Debit Guarantee to members before they sign up, provide advance notice of changes to amounts or dates, and honour refund requests promptly. GymWyse automatically includes the Guarantee text in digital sign-up flows.",
  },
  {
    q: "What VAT rate applies to gym memberships in the UK?",
    a: "Standard gym memberships are subject to 20% VAT. However, certain activities may qualify for exemptions. Non-profit community sports clubs can apply for Community Amateur Sports Club (CASC) status, which exempts them from VAT on membership income under certain thresholds. GymWyse automatically applies the correct VAT treatment based on your club structure and service types.",
  },
  {
    q: "How often should I train staff on GDPR compliance?",
    a: "The ICO recommends regular, ongoing training rather than a one-time session. Best practice is initial training during onboarding plus annual refresher courses. GymWyse includes a built-in staff training module with completion tracking, automatic reminders for annual refreshers, and a compliance quiz that staff must pass before accessing member data.",
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

export function UKGymCompliancePage() {
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
                name: "How to Achieve GDPR, BACS, and FCA Compliance for Your UK Gym",
                description:
                  "A step-by-step guide to making your UK gym fully compliant with data protection, payment, and financial regulations.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Register with the ICO",
                    text: "Register your gym with the Information Commissioner's Office and pay the annual data protection fee.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Implement GDPR Consent Flows",
                    text: "Set up explicit consent collection for marketing, ensure lawful bases for processing, and enable data portability and right to erasure.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Set Up BACS Direct Debit",
                    text: "Establish a BACS-compliant Direct Debit collection process with proper advance notices and the Direct Debit Guarantee.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Verify FCA Compliance for Payments",
                    text: "Ensure your payment processor is FCA-authorised and your recurring billing processes meet regulatory requirements.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure VAT Treatment",
                    text: "Apply the correct VAT rate to memberships, classes, and retail, and register for VAT if turnover exceeds the threshold.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Train Staff and Automate Reporting",
                    text: "Deliver GDPR training, set up automated compliance dashboards, and schedule annual audits.",
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
              Compliance
            </span>
            <span className="text-xs text-dim-gray">February 5, 2026</span>
            <span className="text-xs text-dim-gray">15 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-tight mb-6">
            UK Gym Management: Navigating GDPR, BACS, and FCA Compliance
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed">
            The complete compliance guide for UK gym owners covering GDPR data
            handling, BACS Direct Debit, FCA regulations, and VAT.
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
              UK gym owners must comply with GDPR for member data handling, BACS
              rules for Direct Debit collection, FCA regulations when using
              third-party payment processors, and HMRC VAT requirements on
              fitness services. Non-compliance penalties start at £4,350 for
              missing ICO registration and escalate to £17.5 million or 4% of
              annual turnover for serious GDPR breaches. This guide walks you
              through every requirement and shows you how to automate compliance
              so you can focus on running your gym.
            </p>
          </div>
        </div>
      </motion.section>

      {/* GDPR Section */}
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
              <Shield className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              GDPR Data Handling for Gyms
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              The General Data Protection Regulation shapes every aspect of how
              you collect, store, and process member information. For gyms, this
              is not theoretical. You handle names, email addresses, phone
              numbers, payment details, health questionnaires, biometric data
              from access systems, and potentially even medical information for
              members with specific conditions. Every single piece of that data
              falls under GDPR.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Consent and Lawful Basis
            </h3>
            <p>
              You need a lawful basis for every type of data you process. For
              membership contracts, the lawful basis is &quot;contractual
              necessity&quot; since you need their details to provide the
              service. For marketing emails, the lawful basis is
              &quot;consent,&quot; and that consent must be freely given,
              specific, informed, and unambiguous. Pre-ticked boxes do not count.
              Bundling marketing consent into a membership agreement does not
              count either. You need a separate, clear opt-in.
            </p>
            <p>
              For health questionnaires and PAR-Q forms, you are processing
              special category data. This requires explicit consent with a clear
              explanation of why you need the information and how it will be
              used. Store these separately from general membership data, and
              restrict access to only the staff members who genuinely need it.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Right to Erasure and Data Portability
            </h3>
            <p>
              When a member cancels and requests their data be deleted, you have
              30 calendar days to comply. But there is a catch: HMRC requires
              you to retain financial records for six years. So you must delete
              personal data from your CRM, access logs, marketing lists, and
              health records, but you can retain anonymised financial transaction
              records. Getting this balance right manually is a nightmare. One
              wrong deletion or one missed record can land you in trouble from
              either the ICO or HMRC.
            </p>
            <p>
              Data portability means members can request all the data you hold
              about them in a commonly used, machine-readable format. Think CSV
              or JSON. If a member switches to a competitor and wants their
              workout history, attendance records, and personal details
              transferred, you must provide it.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              ICO Registration
            </h3>
            <p>
              Every gym processing personal data must register with the ICO. The
              process itself is straightforward: complete the online form,
              describe your processing activities, and pay the fee. But
              maintaining the registration means keeping your processing records
              up to date and being prepared for ICO inquiries. About 60% of UK
              gyms we have spoken to either forgot to renew or never registered
              in the first place. That is a £4,350 fixed penalty notice waiting
              to happen.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Staff Data Training
            </h3>
            <p>
              Your front desk team handles member data every day. Your personal
              trainers see health information. Your cleaners might encounter
              unattended screens with member lists. Everyone who could
              potentially access personal data needs to understand their
              obligations. The ICO does not accept &quot;my staff did not
              know&quot; as a defence. Document your training, test
              comprehension, and refresh annually.
            </p>
          </div>
        </div>
      </motion.section>

      {/* BACS Direct Debit */}
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
              <CreditCard className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              BACS Direct Debit: Setup and Compliance
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Direct Debit is the backbone of recurring gym revenue in the UK.
              Roughly 82% of UK gym members pay via Direct Debit, and it
              consistently delivers the lowest failure rates of any payment
              method. But the BACS scheme comes with strict rules that many gym
              owners overlook.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              The Direct Debit Guarantee
            </h3>
            <p>
              Every member paying by Direct Debit is protected by the Direct
              Debit Guarantee. This means their bank will immediately refund any
              payment taken in error, and then come to you for the money. You
              must display the full Guarantee wording during sign-up, whether
              that is on paper or on screen. You must provide advance notice
              before the first collection, and advance notice of any change to
              the amount, frequency, or date. The standard notice period is 10
              working days, although some schemes allow three days for variable
              amounts.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Setting Up BACS Collection
            </h3>
            <p>
              You have two routes: become a Direct Debit originator yourself
              through BACS, or use a bureau or facility management service.
              Becoming an originator gives you more control but requires a
              sponsoring bank, a Service User Number (SUN), and passing a BACS
              assessment. Most independent gyms use a bureau because the setup
              cost is lower and the compliance burden shifts to the bureau. Just
              ensure your bureau is BACS-approved.
            </p>
            <p>
              Collection timing matters too. BACS operates on a three-day cycle:
              you submit files on Day 1, the bank processes on Day 2, and funds
              arrive on Day 3. Plan your cash flow around this cycle.
              Collections submitted on a Friday do not settle until Wednesday
              because weekends and bank holidays are excluded.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Handling Failures and Indemnity Claims
            </h3>
            <p>
              Direct Debit failures typically fall into three categories:
              insufficient funds, account closed, or mandate cancelled. For
              insufficient funds, the BACS system allows automatic retry, but
              you must handle this sensitively to avoid member complaints. For
              indemnity claims (where a member tells their bank they did not
              authorise a payment), you have 14 days to challenge the claim with
              evidence. Keeping robust digital records of consent is critical.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FCA Regulations */}
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
              <Scale className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              FCA Regulations for Recurring Payments
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              The Financial Conduct Authority regulates financial services in the
              UK, and recurring payment collection falls within their oversight.
              As a gym owner, you are not directly regulated by the FCA in most
              cases. However, if you use a third-party payment processor or
              billing company, they must be FCA-authorised or registered as a
              payment institution.
            </p>
            <p>
              This matters because if your billing provider is not properly
              regulated and something goes wrong, your members have no recourse
              through the Financial Ombudsman Service, and you could face
              reputational damage. Always verify your payment partner&apos;s FCA
              status on the FCA Register before signing a contract.
            </p>
            <p>
              If you offer credit agreements, such as spreading the cost of a
              personal training package over several months, you may be entering
              consumer credit territory. This requires FCA authorisation or
              working through an FCA-authorised credit broker. The penalties for
              offering unregulated credit are severe: unlimited fines and
              potential criminal prosecution.
            </p>
          </div>
        </div>
      </motion.section>

      {/* VAT Section */}
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
              <FileCheck className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              VAT on Fitness Services
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Standard gym memberships attract VAT at 20%. This applies to
              monthly memberships, day passes, class-only packages, and personal
              training sessions. You must register for VAT once your taxable
              turnover exceeds £90,000 in a rolling 12-month period (the 2026
              threshold).
            </p>
            <p>
              There are exceptions worth knowing about. If your gym is a
              Community Amateur Sports Club (CASC), you may be exempt from
              corporation tax and eligible for Gift Aid on donations. Certain
              welfare-related services, such as exercise referral schemes
              prescribed by a GP, may attract the reduced rate or exemption. And
              if you supply education or vocational training (for instance,
              running accredited fitness instructor courses), that can be exempt
              from VAT.
            </p>
            <p>
              The VAT Flat Rate Scheme can simplify your administration if your
              VAT-exclusive turnover is below £150,000. Under the scheme, you
              pay a fixed percentage of your gross turnover rather than
              calculating input and output VAT on every transaction. For sport
              and recreation services, the flat rate is typically 8.5%. Run the
              numbers both ways to see which approach saves you more.
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
            How the Command Center Solves This: UK Compliance Dashboard
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-soft-white leading-relaxed">
              The GymWyse UK Compliance Dashboard gives you a single screen that
              tracks every regulatory obligation in real time. Instead of
              juggling spreadsheets, ICO renewal reminders, BACS submission
              deadlines, and VAT return dates, you get a unified compliance
              scorecard.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      GDPR Compliance Score
                    </p>
                    <p className="text-sm text-cool-gray">
                      Real-time percentage based on consent records, data
                      retention policies, and erasure request response times
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      BACS Collection Tracker
                    </p>
                    <p className="text-sm text-cool-gray">
                      Submission timeline, settlement dates, failure rates, and
                      indemnity claim status all in one view
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      ICO Registration Monitor
                    </p>
                    <p className="text-sm text-cool-gray">
                      Automated renewal reminders 90, 60, and 30 days before
                      expiry with one-click re-registration
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      VAT Return Preparation
                    </p>
                    <p className="text-sm text-cool-gray">
                      Auto-calculated output VAT by service type with
                      Making Tax Digital-ready exports
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Staff Training Tracker
                    </p>
                    <p className="text-sm text-cool-gray">
                      GDPR training completion rates, upcoming refresher dates,
                      and quiz pass rates for every team member
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Automated Compliance Reports
                    </p>
                    <p className="text-sm text-cool-gray">
                      Monthly compliance summaries emailed to your inbox with
                      action items and risk flags
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
                    GDPR Consent Tracking
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Paper forms in filing cabinets, no audit trail
                  </td>
                  <td className="py-4 text-soft-white">
                    Digital consent with timestamps, automated audit logs
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Data Erasure Requests
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Manual search across 5+ systems, 2-3 hours per request
                  </td>
                  <td className="py-4 text-soft-white">
                    One-click erasure across all systems in under 60 seconds
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    BACS Submission
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Export CSV, upload to bureau portal, manually reconcile
                  </td>
                  <td className="py-4 text-soft-white">
                    Automated submission with real-time settlement tracking
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    ICO Renewal
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Calendar reminder, hope someone remembers
                  </td>
                  <td className="py-4 text-soft-white">
                    Triple-reminder system at 90, 60, and 30 days with
                    auto-renewal option
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    VAT Calculation
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Quarterly spreadsheet panic, manual categorisation
                  </td>
                  <td className="py-4 text-soft-white">
                    Real-time VAT tracking by service type with MTD-ready
                    exports
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Staff GDPR Training
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    One-off session, no records of who attended
                  </td>
                  <td className="py-4 text-soft-white">
                    Built-in training modules with completion tracking and annual
                    refresher scheduling
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Compliance Reporting
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Assembled ad-hoc if an issue arises
                  </td>
                  <td className="py-4 text-soft-white">
                    Automated monthly compliance scorecard with trend analysis
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
            ROI Calculation: The Cost of Non-Compliance
          </h2>
          <div className="glass-card p-8">
            <p className="text-soft-white leading-relaxed mb-6">
              Let us run the numbers for a 500-member gym in the UK. Here is
              what compliance failures actually cost.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  ICO non-registration fine
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £4,350
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Average GDPR breach fine for SMEs (2025 data)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £8,500
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  BACS indemnity claims (3 per year at £45 avg)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £135
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Staff time on manual compliance (8 hrs/month x £15/hr x 12)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £1,440
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  VAT penalties for late/incorrect filing
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £750
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Reputational cost (estimated member loss from data breach)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  £6,000
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-electric-green">
                <span className="text-pure-white font-bold text-lg">
                  Total annual risk exposure
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  £21,175
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-electric-green/5 rounded-lg px-4">
                <span className="text-pure-white font-bold">
                  GymWyse compliance automation cost
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  £149/month (£1,788/year)
                </span>
              </div>
              <p className="text-electric-green font-semibold text-center text-lg pt-4">
                Net annual savings: £19,387 (10.8x ROI)
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
              Regional Compliance Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇬🇧 United Kingdom
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                GDPR (UK version), ICO registration, BACS Direct Debit rules,
                FCA for payment intermediaries, VAT at 20%, Making Tax Digital
                compliance, CASC exemptions for community clubs.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇺🇸 United States
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                No federal GDPR equivalent; state-level CCPA/CPRA in
                California, ACH/NACHA rules for recurring payments, FTC Act
                Section 5 for consumer protection, PCI DSS for card data, ADA
                accessibility compliance.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇺 Australia
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Privacy Act 1988 and Australian Privacy Principles (APPs),
                Direct Debit through BECS, ASIC for financial services, GST at
                10%, ACCC consumer guarantee protections.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇪 United Arab Emirates
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Federal Data Protection Law (2021), DIFC Data Protection Law,
                Central Bank regulations for payment services, 5% VAT, MOHAP
                health facility licensing for gyms offering medical/physio
                services.
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
                &quot;We built the UK Compliance Dashboard after watching gym
                owners spend entire weekends preparing for ICO audits. One owner
                in Manchester told us he kept a physical binder labelled
                &lsquo;GDPR Stuff&rsquo; and hoped for the best. That is not a
                compliance strategy; that is a liability.&quot;
              </p>
              <p>
                &quot;The real insight was that compliance is not just about
                avoiding fines. It is about member trust. When we surveyed gym
                members, 67% said they would leave a gym that suffered a data
                breach. In a world where members have more choices than ever,
                demonstrating that you take data protection seriously is a
                competitive advantage.&quot;
              </p>
              <p>
                &quot;We have also seen a shift in how banks view gyms applying
                for BACS originator status. Banks now check your data protection
                practices during the application process. A clean compliance
                record speeds up your approval and can improve your terms.
                Compliance is not a cost centre; it is an enabler.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Automated Compliance Reporting */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <BookOpen className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Automated Compliance Reporting
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Manual compliance reporting is reactive by nature. You pull
              together information when something goes wrong or when an
              authority asks for it. Automated compliance reporting flips this to
              proactive: your system continuously monitors, records, and flags
              issues before they become problems.
            </p>
            <p>
              GymWyse generates a monthly UK Compliance Report that covers GDPR
              consent status across all active members, data subject access
              requests and erasure requests with response times, BACS collection
              success rates and failure analysis, VAT collected by service
              category, staff training completion percentages, and any
              regulatory deadline approaching in the next 60 days.
            </p>
            <p>
              The report is not just for your filing cabinet. Use it in board
              meetings to demonstrate governance. Share the summary with your
              accountant to streamline tax preparation. Present it to your bank
              if applying for credit facilities. A gym that can demonstrate
              systematic compliance is a gym that looks well managed from every
              angle.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
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
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertTriangle className="w-10 h-10 text-electric-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Stop Worrying About Compliance. Start Automating It.
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-2xl mx-auto">
            GymWyse handles GDPR, BACS, FCA, and VAT compliance so you can
            focus on growing your gym. See the UK Compliance Dashboard in
            action.
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
            <Link href="/uk">
              <Button variant="outline" size="lg">
                Explore UK Solutions
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
