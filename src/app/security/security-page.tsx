"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Server,
  Globe,
  FileCheck,
  Key,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const encryptionFeatures = [
  {
    title: "AES-256 at Rest",
    description:
      "All member data, payment records, and health information stored in our databases is encrypted using AES-256, the same encryption standard used by governments and financial institutions worldwide. This applies to every data field, not just sensitive ones.",
  },
  {
    title: "TLS 1.3 in Transit",
    description:
      "Every connection between your browser, the GymWyse mobile app, and our servers is secured with TLS 1.3, the latest transport layer security protocol. Older protocols like TLS 1.0 and 1.1 are disabled entirely.",
  },
  {
    title: "End-to-End Payment Encryption",
    description:
      "Credit card numbers and bank account details are encrypted end-to-end and never stored in plaintext. Payment data flows through a PCI DSS Level 1 compliant pipeline, the highest level of payment security certification available.",
  },
  {
    title: "Customer-Managed Keys",
    description:
      "Enterprise plan customers can bring their own encryption keys (BYOK) for database-level encryption. You control the keys, and you can revoke access at any time. This gives you full sovereignty over your data encryption lifecycle.",
  },
];

const dataRegions = [
  {
    region: "United States",
    location: "AWS us-east-1, Virginia",
    flag: "US",
    description:
      "Primary data center for North American customers. SOC 2 audited facility with multi-availability-zone redundancy. Data never leaves the US region.",
  },
  {
    region: "United Kingdom / EU",
    location: "AWS eu-west-2, London",
    flag: "UK/EU",
    description:
      "Dedicated hosting for UK and European Union customers. Fully GDPR compliant. Data is processed and stored exclusively within the UK, satisfying EU adequacy requirements.",
  },
  {
    region: "Australia",
    location: "AWS ap-southeast-2, Sydney",
    flag: "AU",
    description:
      "Australian data residency for gyms in Australia and New Zealand. Compliant with the Australian Privacy Act 1988. Data stays within the Australian region at all times.",
  },
  {
    region: "United Arab Emirates",
    location: "AWS me-south-1, Bahrain",
    flag: "UAE",
    description:
      "Middle East hosting for customers in the UAE, Saudi Arabia, and surrounding region. Data remains within the Middle East region, meeting local data sovereignty requirements.",
  },
];

const gdprRights = [
  {
    title: "Data Processing Agreement",
    description:
      "Every UK and EU customer receives a signed Data Processing Agreement (DPA) that defines exactly how we process personal data, the legal basis for processing, and the safeguards in place. Our DPA is available for review before you sign up.",
  },
  {
    title: "Right to Erasure",
    description:
      "One-click member deletion. When a member requests to be forgotten, gym owners can permanently erase all personal data with a single action. This removes the member profile, contact details, attendance history, and payment records from our systems within 30 days.",
  },
  {
    title: "Data Portability",
    description:
      "Export all member data at any time in CSV or JSON format. This includes profiles, attendance records, payment history, contracts, and consent logs. Members can also export their own data directly from the GymWyse member app.",
  },
  {
    title: "Consent Management",
    description:
      "Built-in consent management for marketing communications. Members explicitly opt in to email and SMS marketing during signup. Consent records are timestamped and auditable. Members can withdraw consent at any time from their app settings.",
  },
  {
    title: "Breach Notification",
    description:
      "In the unlikely event of a data breach, we notify affected customers within 72 hours as required by GDPR Article 33. Our incident response team follows a documented playbook that includes containment, assessment, notification, and remediation steps.",
  },
  {
    title: "Data Protection Officer",
    description:
      "Our Data Protection Officer (DPO) is contactable at dpo@gymwyse.com. The DPO oversees all data processing activities, conducts regular impact assessments, and serves as the liaison with supervisory authorities.",
  },
];

const hipaaFeatures = [
  {
    title: "Business Associate Agreement",
    description:
      "A signed BAA (Business Associate Agreement) is available for Enterprise plan customers. This legally binds GymWyse to HIPAA-compliant handling of Protected Health Information (PHI) collected through body measurements, injury logs, and health questionnaires.",
  },
  {
    title: "PHI Encryption & Access Control",
    description:
      "All Protected Health Information is stored in an encrypted, access-controlled environment with role-based permissions. Only authorized staff with explicit need-to-access can view health-related member data.",
  },
  {
    title: "Comprehensive Audit Logs",
    description:
      "Every access, modification, and export of health data is logged with timestamps, user identity, and action type. These audit logs are retained for six years and are available for compliance reviews and HIPAA audits.",
  },
];

const memberRights = [
  "View all data stored about them in the GymWyse platform, including profile information, attendance records, payment history, and any health data",
  "Request complete data deletion, which permanently removes their personal information from our systems within 30 days of the request",
  "Export their personal data in a machine-readable format (JSON) directly from the member app settings, no gym staff involvement required",
  "Control marketing consent preferences, choosing exactly which communication channels they want to receive messages on",
  "Revoke wearable data sharing at any time, immediately stopping the sync of fitness tracker data from Apple Health, Google Fit, or Garmin Connect",
  "View a log of who has accessed their data and when, providing full transparency into how their information is being used",
];

const accessControls = [
  {
    role: "Admin",
    description:
      "Full platform access including billing, analytics, staff management, and system configuration. Reserved for gym owners and operations directors.",
  },
  {
    role: "Manager",
    description:
      "Access to member management, scheduling, reporting, and day-to-day operations. Cannot modify billing settings or manage other staff accounts.",
  },
  {
    role: "Front Desk",
    description:
      "Member check-in, class booking, basic member lookup, and point-of-sale. Cannot view financial reports or modify member contracts.",
  },
  {
    role: "Trainer",
    description:
      "Access to assigned client profiles, workout programming, and session scheduling. Cannot view payment information or other trainers' clients.",
  },
];

const faqs = [
  {
    question: "Is GymWyse GDPR compliant?",
    answer:
      "Yes. GymWyse is fully GDPR compliant for all UK and EU customers. We provide a signed Data Processing Agreement (DPA), support the right to erasure with one-click member deletion, offer full data portability in CSV and JSON formats, and maintain a dedicated Data Protection Officer. Our UK/EU customer data is hosted exclusively in AWS eu-west-2 (London) and never leaves that region. We also maintain detailed consent records for all marketing communications and notify customers within 72 hours in the event of any data breach.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is stored in the region you select at signup. US customers are hosted in AWS us-east-1 (Virginia), UK and EU customers in AWS eu-west-2 (London), Australian customers in AWS ap-southeast-2 (Sydney), and Middle East customers in AWS me-south-1 (Bahrain). Data never leaves your selected region. Each region operates independently with its own database clusters, backups, and encryption keys. You can verify your hosting region at any time from your GymWyse admin dashboard under Settings.",
  },
  {
    question: "Is GymWyse PCI compliant?",
    answer:
      "Yes. GymWyse is PCI DSS Level 1 compliant, which is the highest level of payment security certification. Credit card numbers are never stored on our servers. Payment data is tokenized and processed through our PCI-certified payment partners. We undergo annual PCI audits and quarterly vulnerability scans by an Approved Scanning Vendor (ASV). This means your members' payment information is protected to the same standard as major banks and financial institutions.",
  },
  {
    question: "Can members delete their data?",
    answer:
      "Yes. Members can request data deletion directly from their GymWyse app settings, or gym owners can initiate deletion on behalf of a member from the admin dashboard. Deletion is permanent and removes all personal data including profile information, attendance records, payment history, and any stored health data. The deletion process completes within 30 days. Anonymized, aggregated data that cannot identify any individual may be retained for analytics purposes, in compliance with GDPR Article 17.",
  },
  {
    question: "Do you offer a BAA for HIPAA?",
    answer:
      "Yes. A Business Associate Agreement (BAA) is available for customers on our Enterprise plan. The BAA covers all Protected Health Information (PHI) collected through GymWyse, including body measurements, injury logs, health questionnaires, and any health-related notes added by trainers. PHI is stored in an encrypted, access-controlled environment with comprehensive audit logging. Contact our sales team at sales@gymwyse.com to request a BAA as part of your Enterprise plan setup.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "If you discover a security vulnerability, please report it to security@gymwyse.com. We operate a responsible disclosure policy and ask that you give us 90 days to investigate and remediate before public disclosure. We also run a bug bounty program that rewards valid security reports. Critical vulnerabilities are triaged within 4 hours and patched within 24 hours. You can also reach our security team through the in-app support chat by selecting the Security category.",
  },
];

export function SecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Security & Compliance
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Security &amp; Compliance for Your Gym Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              Your members trust you with their credit cards, health data, and
              personal information. We take that seriously. GymWyse is built from
              the ground up with enterprise-grade security, regional data
              hosting, and full regulatory compliance so you can focus on running
              your gym, not worrying about data breaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Security Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Plans & Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { metric: "AES-256", label: "Encryption at Rest" },
              { metric: "TLS 1.3", label: "Encryption in Transit" },
              { metric: "SOC 2", label: "Type II Certified" },
              { metric: "99.9%", label: "Uptime SLA" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold font-mono text-electric-green mb-1">
                  {item.metric}
                </p>
                <p className="text-xs text-cool-gray">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Encryption Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Data Encryption
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Every byte of data in GymWyse is encrypted, whether it is sitting
              in a database or traveling across the internet. We use
              industry-leading encryption standards to ensure your members&apos;
              information is protected at every stage of its lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {encryptionFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Data Hosting Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Server className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Regional Data Hosting
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Your data stays in your region. GymWyse operates dedicated
              infrastructure in four global regions. Customers choose their
              hosting region at signup, and data never leaves that region. No
              exceptions, no cross-border transfers, no surprises.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataRegions.map((region, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-electric-green font-medium tracking-wider uppercase">
                  {region.flag}
                </span>
                <h3 className="text-lg font-semibold text-pure-white mt-2 mb-1">
                  {region.region}
                </h3>
                <p className="text-xs font-mono text-sapphire-blue mb-3">
                  {region.location}
                </p>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {region.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-dim-gray">
              Operating in the{" "}
              <Link
                href="/uk"
                className="text-sapphire-blue hover:underline"
              >
                United Kingdom
              </Link>
              ,{" "}
              <Link
                href="/au"
                className="text-sapphire-blue hover:underline"
              >
                Australia
              </Link>
              , or the{" "}
              <Link
                href="/ae"
                className="text-sapphire-blue hover:underline"
              >
                UAE
              </Link>
              ? Visit your regional page for localized details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GDPR Compliance Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              GDPR Compliance
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Is GymWyse HIPAA GDPR compliant? Yes. GymWyse provides full GDPR
              compliance for UK and EU customers. We have implemented every
              requirement of the General Data Protection Regulation, from data
              subject rights to breach notification procedures, so your gym
              meets its legal obligations without any extra work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gdprRights.map((right, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-3">
                  {right.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {right.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Considerations Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              HIPAA Considerations
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              For US gyms that collect health data such as body measurements,
              injury logs, and health questionnaires, HIPAA compliance matters.
              GymWyse provides the technical safeguards and legal agreements
              needed to handle Protected Health Information (PHI) responsibly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hipaaFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC 2 Type II Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              SOC 2 Type II Certification
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              GymWyse has completed SOC 2 Type II certification, which means an
              independent third-party auditor has verified that our security
              controls are not only designed properly but are operating
              effectively over time. This is the gold standard for SaaS security
              assurance.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-semibold text-pure-white mb-3">
                    What Is Audited
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Security controls and access management",
                      "System availability and uptime monitoring",
                      "Data confidentiality and encryption",
                      "Processing integrity and accuracy",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-cool-gray"
                      >
                        <Shield className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-pure-white mb-3">
                    Audit Details
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Annual third-party audits by an independent firm",
                      "Continuous monitoring between audit cycles",
                      "Audit report available under NDA for Enterprise customers",
                      "Covers all four regional data centers",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-cool-gray"
                      >
                        <FileCheck className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Member Data Rights Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Member Data Rights
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Your members have full control over their personal data. Every
              right listed below is accessible directly from the GymWyse member
              app settings screen. No support tickets, no waiting, no friction.
              Transparency builds trust, and trust retains members.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Members Can
              </h3>
              <div className="space-y-4">
                {memberRights.map((right, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-electric-green/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-electric-green">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {right}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Penetration Testing Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Key className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Penetration Testing &amp; Vulnerability Management
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              We do not just build secure software and hope for the best. We
              actively test our defenses with the same techniques attackers use.
              Our security posture is validated quarterly by an independent
              security firm, and we maintain a public commitment to rapid
              vulnerability remediation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                metric: "Quarterly",
                label: "Penetration Testing",
                description:
                  "Independent security firm conducts full-scope penetration testing every quarter, covering web application, API, and infrastructure layers.",
              },
              {
                metric: "24 hrs",
                label: "Critical Patch SLA",
                description:
                  "Critical vulnerabilities are patched within 24 hours of discovery. High-severity issues are remediated within 72 hours. All patches are verified by re-testing.",
              },
              {
                metric: "Active",
                label: "Bug Bounty Program",
                description:
                  "We run a bug bounty program that rewards security researchers for responsibly disclosing vulnerabilities. Valid reports are acknowledged within 24 hours.",
              },
              {
                metric: "99.9%",
                label: "Uptime SLA",
                description:
                  "Our infrastructure is designed for high availability with multi-region failover. We maintain a 99.9% uptime SLA backed by service credits for any downtime.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold font-mono text-electric-green mb-1">
                  {item.metric}
                </p>
                <p className="text-sm font-semibold text-pure-white mb-3">
                  {item.label}
                </p>
                <p className="text-xs text-cool-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Controls Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Key className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Access Controls
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Not everyone in your gym needs access to everything. GymWyse uses
              role-based access control (RBAC) to ensure each staff member sees
              only the data and features relevant to their role. Combined with
              two-factor authentication and comprehensive audit logging, you
              always know who accessed what and when.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {accessControls.map((control, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-pure-white mb-2">
                  {control.role}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {control.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                Additional Security Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Two-factor authentication (2FA) for all staff accounts",
                  "Automatic session timeout after 30 minutes of inactivity",
                  "IP allowlisting available for Enterprise plan customers",
                  "Full audit trail logging every action taken in the platform",
                  "Password complexity requirements and rotation policies",
                  "Single sign-on (SSO) integration for Enterprise plans",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                    <span className="text-sm text-cool-gray">{item}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Security &amp; Compliance FAQ
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Common questions about how GymWyse protects your data, handles
              compliance requirements, and keeps your members&apos; information
              safe. Is GymWyse HIPAA GDPR compliant? Find the answers below.
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

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Your Members&apos; Data Deserves the Best Protection
            </h2>
            <p className="text-base text-soft-white leading-relaxed">
              Security is not a feature you bolt on later. It is the foundation
              everything else is built on. GymWyse gives you enterprise-grade
              encryption, regional data hosting, GDPR compliance, and SOC 2
              certification out of the box, so you never have to worry about
              whether your members&apos; data is safe. See how much you could
              save while upgrading your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray pt-2">
              Have a security question? Contact our team at{" "}
              <span className="text-sapphire-blue">security@gymwyse.com</span>{" "}
              or review our{" "}
              <Link
                href="/pricing"
                className="text-sapphire-blue hover:underline"
              >
                pricing plans
              </Link>{" "}
              to find the right security tier for your gym.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
