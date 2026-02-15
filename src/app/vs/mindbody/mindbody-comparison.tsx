"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Users,
  BarChart3,
  Smartphone,
  CreditCard,
  Building2,
  Calendar,
  Shield,
  Wrench,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ─────────────────────────── DATA ─────────────────────────── */

const quickMetrics = [
  { label: "Monthly Cost", gymwyse: "$99/mo", competitor: "$129/mo" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$500+" },
  { label: "Contract Length", gymwyse: "Month-to-month", competitor: "12-month lock-in" },
  { label: "Revenue Analytics", gymwyse: "Real-time MRR, P&L", competitor: "Basic reports only" },
  { label: "Churn Prediction", gymwyse: "AI-powered risk scoring", competitor: "Not available" },
  { label: "Payment Recovery", gymwyse: "40% auto-recovery included", competitor: "Manual follow-up" },
  { label: "Multi-Location", gymwyse: "Unified dashboard", competitor: "Separate per location" },
  { label: "Member App", gymwyse: "AI avatars, wearable sync", competitor: "+$200/mo add-on" },
  { label: "Equipment Tracking", gymwyse: "QR codes included", competitor: "Not available" },
];

const yearOneCosts = {
  mindbody: [
    { item: "Setup & onboarding fee", cost: "$500" },
    { item: "Monthly subscription (12 x $129)", cost: "$1,548" },
    { item: "Branded app add-on (12 x $200)", cost: "$2,400" },
    { item: "Payment processing markup", cost: "$600" },
    { item: "Priority support upgrade", cost: "$0" },
    { item: "Year 1 Total", cost: "$5,048", highlight: true },
  ],
  gymwyse: [
    { item: "Setup & onboarding fee", cost: "$0" },
    { item: "Monthly subscription (12 x $99)", cost: "$1,188" },
    { item: "Member app with AI coaches", cost: "Included" },
    { item: "Payment processing (standard rates)", cost: "Included" },
    { item: "Email + live chat support", cost: "Included" },
    { item: "Year 1 Total", cost: "$1,188", highlight: true },
  ],
};

const hiddenCosts = [
  {
    title: "Branded App Add-On: $200/month",
    description:
      "Mindbody charges $200 per month for a branded mobile app with your gym logo and colors. That is $2,400 per year for something GymWyse includes at no extra cost. Without it, your members use the generic Mindbody app alongside thousands of other businesses, making your brand invisible.",
  },
  {
    title: "Payment Processing Markup",
    description:
      "Mindbody adds a markup on top of standard payment processing fees. While standard credit card processing runs 2.6% plus 10 cents per transaction, Mindbody charges 2.75% plus 25 cents. For a gym processing $30,000 per month in payments, that markup costs an extra $600 per year compared to standard rates.",
  },
  {
    title: "Data Export Fees and Restrictions",
    description:
      "Need to export your own member data? Mindbody restricts bulk data exports on lower-tier plans and charges for API access. Your member data should belong to you. GymWyse provides unlimited data exports in CSV and PDF formats at no additional charge, because your data is your data.",
  },
  {
    title: "Contract Lock-In Penalties",
    description:
      "Mindbody requires a 12-month contract. If you want to leave at month six, you pay the remaining six months as an early termination fee. That can be $774 or more just to switch to a better platform. GymWyse operates month-to-month with no cancellation penalties whatsoever.",
  },
  {
    title: "Annual Price Increases",
    description:
      "Mindbody has raised prices multiple times in recent years. Users report 10 to 20 percent annual increases with little notice. Your $129 per month plan today could be $155 per month next year. GymWyse locks in your rate and provides 90 days advance notice before any pricing changes.",
  },
];

const featureComparisons = [
  {
    title: "Revenue Analytics",
    icon: BarChart3,
    gymwyse:
      "GymWyse provides a real-time MRR dashboard that updates every hour with growth trends, churn rate calculations, and revenue forecasting up to six months out. You see profit and loss per service line instantly, whether that is memberships, personal training, group classes, or retail. One-click P&L export sends a formatted report directly to your accountant. No spreadsheets, no manual calculations, no guessing.",
    competitor:
      "Mindbody offers basic revenue reports showing income by service type and by staff member. There is no MRR tracking, no churn rate visibility, and no profit margin analysis. You export raw data to CSV and build your own reports in Excel. Most gym owners give up and fly blind on their actual financial health.",
    verdict: "GymWyse",
  },
  {
    title: "Churn Prediction",
    icon: Users,
    gymwyse:
      "GymWyse uses AI-powered risk scoring to predict member churn up to 30 days before it happens. The system monitors attendance patterns, payment history, booking frequency, and engagement signals to flag at-risk members automatically. Each member gets a risk score from 0 to 100. Members scoring above 70 trigger automated win-back campaigns via email and SMS. Gym owners who use churn prediction save an average of 6 members per month who would otherwise cancel silently.",
    competitor:
      "Mindbody has no churn prediction capability. There is no at-risk member identification, no engagement scoring, and no automated retention workflows. You find out a member has churned after they cancel their membership. By that point, they have already signed up at a competitor gym or stopped training entirely. Recovery at that stage is nearly impossible.",
    verdict: "GymWyse",
  },
  {
    title: "Payment Recovery",
    icon: CreditCard,
    gymwyse:
      "GymWyse automatically retries failed payments three times over seven days at optimal times determined by machine learning. Members receive friendly email and SMS notifications with a self-service recovery portal where they can update their payment method in seconds. The system achieves a 40 percent auto-recovery rate on average, meaning four out of every ten failed payments are recovered without any manual intervention from staff.",
    competitor:
      "Mindbody retries failed payments automatically but only twice. After that, staff must manually follow up with members by phone or email. There is no self-service portal for members to update payment details. The typical recovery rate with manual follow-up is 10 to 15 percent. For a gym losing $5,000 per month to failed payments, that is the difference between recovering $2,000 or recovering just $500.",
    verdict: "GymWyse",
  },
  {
    title: "Member App",
    icon: Smartphone,
    gymwyse:
      "GymWyse includes a fully branded member app at no extra cost with six AI Avatar coaches that provide personalized guidance and motivation. Members sync wearable data from Apple Health, WHOOP, Garmin, and Fitbit to track their progress holistically. The app features workout logging, progress photos, challenges, gamification badges, and social features that keep members engaged between visits. Average engagement increase after deployment is 35 percent.",
    competitor:
      "Mindbody offers a basic booking app that allows members to view the schedule and book classes. For a branded app with your gym logo and custom colors, Mindbody charges $200 per month as an add-on. Even the branded version lacks AI coaching, wearable sync, workout tracking, and gamification features. Members use it to book and then close it. There is no engagement between visits.",
    verdict: "GymWyse",
  },
  {
    title: "Multi-Location Management",
    icon: Building2,
    gymwyse:
      "GymWyse provides a single unified dashboard across all locations. Log in once and see total MRR, aggregate member count, and portfolio-wide churn rate. Compare Location A churn at 1.8 percent versus Location B at 3.2 percent side by side. Identify which location is profitable and which needs attention in seconds, not hours. Cross-location reporting and staff management are built in.",
    competitor:
      "Mindbody requires a separate login for each location. Managing five locations means logging into five different dashboards every morning. There is no unified view, no cross-location comparison, and no portfolio-level analytics. Owners manually export CSV files from each location and combine them in Excel to get a total picture. That process takes 30 minutes daily and is error-prone.",
    verdict: "GymWyse",
  },
  {
    title: "Class Scheduling",
    icon: Calendar,
    gymwyse:
      "Both platforms handle class scheduling well. GymWyse includes drag-and-drop scheduling, recurring class templates, instructor assignment, and capacity management. Where GymWyse pulls ahead is automated waitlist management. When a member cancels, the next person on the waitlist is automatically notified and enrolled. No staff intervention needed. GymWyse also tracks class utilization rates to help you optimize your schedule for maximum revenue.",
    competitor:
      "Mindbody offers solid class scheduling with recurring templates and instructor management. Waitlist management exists but requires more manual oversight. Class utilization analytics are basic. Overall scheduling is one area where Mindbody performs adequately, though GymWyse still edges ahead with automation and analytics depth.",
    verdict: "GymWyse (edge)",
  },
  {
    title: "Billing and Payments",
    icon: DollarSign,
    gymwyse:
      "GymWyse includes ACH direct debit, BACS Direct Debit for UK gyms, and BPAY for Australian gyms at standard processing rates with no markup. Multi-currency billing supports USD, GBP, AUD, AED, and EUR. Automated invoicing, proration for mid-cycle changes, and family billing with linked accounts are all included. There are no hidden transaction fees and no per-member charges.",
    competitor:
      "Mindbody processes payments with a markup over standard rates. International payment methods like BACS and BPAY require third-party integrations that add complexity and cost. Multi-currency support is limited. Billing features are adequate for basic subscription management but lack the flexibility and transparency that growing gyms need.",
    verdict: "GymWyse",
  },
  {
    title: "Equipment Management",
    icon: Wrench,
    gymwyse:
      "GymWyse includes QR code-based equipment tracking at no extra cost. Staff scan a QR code on any piece of equipment to log maintenance, report issues, or check service history. Automated maintenance reminders prevent equipment failures before they happen. Members can scan QR codes to access exercise tutorials for that specific machine. This feature alone prevents costly equipment breakdowns and reduces liability risk.",
    competitor:
      "Mindbody does not offer equipment management or tracking features. Gyms using Mindbody typically track equipment maintenance in spreadsheets or paper logs, which are easily forgotten or lost. There is no automated maintenance scheduling and no way for members to access equipment-specific content. This is a gap that becomes more significant as your gym grows and equipment investment increases.",
    verdict: "GymWyse",
  },
];

const switchReasons = [
  {
    title: "Immediate Cost Savings of $100+ Per Month",
    description:
      "The most straightforward reason gyms switch from Mindbody to GymWyse is the immediate reduction in monthly software costs. Mindbody base pricing starts at $129 per month, but most gyms end up paying $200 to $350 per month once they add the branded app, payment recovery tools, and marketing features. GymWyse includes all of these capabilities in a single $99 per month subscription. That is a minimum savings of $30 per month on the base plan alone, and typically $100 to $250 per month when you factor in eliminated add-on costs. Over a year, that savings compounds to $1,200 to $3,000 returned directly to your bottom line. For independent gym owners operating on tight margins, that money funds new equipment, marketing campaigns, or staff bonuses instead of software overhead.",
  },
  {
    title: "Real-Time Revenue Visibility Instead of Monthly Guesswork",
    description:
      "Gym owners who switch from Mindbody consistently cite revenue visibility as their second biggest motivation. Mindbody provides end-of-month reports that show revenue totals by service category. But it does not calculate MRR, does not track churn rate, and does not show profit margins per service line. You see that personal training generated $12,000 last month, but you have no idea whether that was profitable after paying trainers and accounting for no-shows. GymWyse calculates all of this automatically and in real time. You open the dashboard at any moment and see current MRR, month-over-month growth rate, churn percentage, and profit margin for every service you offer. Gym owners describe the difference as going from driving with a fogged windshield to having a clear view of the road ahead. Decisions that used to take days of spreadsheet analysis now take seconds.",
  },
  {
    title: "Churn Prevention Before Cancellation, Not After",
    description:
      "The third major driver for switching is churn prevention. With Mindbody, you learn that a member has churned when they submit a cancellation request or when their payment fails and they do not return your calls. By that point, the member has mentally moved on. They have either joined another gym or decided to stop training altogether. Re-engaging them requires significant effort and usually fails. GymWyse flips this dynamic entirely. The AI churn prediction system monitors attendance patterns, payment consistency, booking behavior, and engagement signals continuously. When a member starts showing early warning signs, they are flagged before they make the decision to leave. Your staff receives an alert with the member name, their risk score, and specific signals triggering the warning. A personal check-in call or targeted offer at this stage saves the membership 60 to 70 percent of the time. For a 300-member gym with average dues of $85 per month, saving just four members per month means an additional $4,080 per year in retained revenue.",
  },
  {
    title: "Modern Member Experience with AI Coaches and Wearable Sync",
    description:
      "Members today expect more from their gym experience than a booking app and a check-in kiosk. Mindbody member-facing tools are functional but basic. Members can book classes and view the schedule. That is essentially where the experience ends. GymWyse delivers a fundamentally different member experience. Six AI Avatar coaches provide personalized workout suggestions, form tips, and motivational support. Wearable sync pulls data from Apple Health, WHOOP, Garmin, and Fitbit so members see their fitness journey in one place. Gamification features like achievement badges, streak tracking, and gym-wide challenges create community and friendly competition. Progress photo tracking with side-by-side comparisons gives members visual proof of their results. Gyms that deploy the full GymWyse member experience report a 35 percent increase in app engagement and a measurable reduction in churn. Members who are engaged between visits are members who keep coming back and keep paying.",
  },
];

const migrationPhases = [
  {
    phase: "Phase 1",
    title: "Data Audit and Export",
    timeline: "Week 1",
    description:
      "We begin by auditing your current Mindbody setup. Our migration team reviews your member database, class schedules, billing configurations, and staff permissions. We then guide you through exporting your complete dataset from Mindbody, including member profiles, attendance history, payment records, and active subscriptions. This export captures everything needed for a clean transition with zero data loss.",
  },
  {
    phase: "Phase 2",
    title: "Data Migration and Validation",
    timeline: "Week 2",
    description:
      "Your exported data is imported into GymWyse with field-by-field mapping to ensure accuracy. Member join dates, billing cycles, attendance records, and payment methods are all transferred. Our team runs validation checks to confirm every record matches the source data. You receive a migration report showing total records imported, any flagged discrepancies, and confirmation of data integrity across all categories.",
  },
  {
    phase: "Phase 3",
    title: "Team Training",
    timeline: "Week 3",
    description:
      "Your staff receives hands-on training with the GymWyse platform. Front desk staff learn check-in procedures, class booking management, and member inquiries. Managers learn the revenue dashboard, churn prediction alerts, and reporting tools. Trainers learn how to manage their schedules and track client progress. Training sessions are conducted via video call and typically take two to three hours total. Most staff are comfortable within a single session.",
  },
  {
    phase: "Phase 4",
    title: "Go Live with Parallel Running",
    timeline: "Week 4",
    description:
      "GymWyse goes live alongside your existing Mindbody setup. Both systems run simultaneously for one week so your team can verify that everything works correctly in a live environment. Members can book classes, check in, and make payments through GymWyse while Mindbody remains available as a safety net. This parallel period builds confidence and catches any edge cases before full cutover.",
  },
  {
    phase: "Phase 5",
    title: "Full Cutover and Mindbody Cancellation",
    timeline: "Week 5",
    description:
      "Once parallel running confirms everything works as expected, you switch fully to GymWyse. Members receive a pre-written announcement email and SMS guiding them to download the GymWyse member app. Your team decommissions Mindbody and submits the cancellation request. We handle the logistics of ensuring no billing gaps during the transition so every member payment continues uninterrupted.",
  },
  {
    phase: "Phase 6",
    title: "Optimization and Review",
    timeline: "Week 6",
    description:
      "Two weeks after full cutover, our team conducts a post-migration review. We analyze your first two weeks of data on GymWyse, configure churn prediction thresholds specific to your gym, optimize your revenue dashboard views, and address any questions from staff. This session ensures you are getting maximum value from every GymWyse feature from day one, not just using it as a Mindbody replacement.",
  },
];

const testimonials = [
  {
    gym: "Apex Performance Lab",
    location: "Los Angeles, CA",
    members: "220 members",
    type: "Independent Gym",
    initials: "JR",
    author: "Jake Rodriguez",
    role: "Owner & Head Coach",
    quote:
      "We were paying $189 per month for Mindbody plus their branded app add-on and payment recovery tool. When I added it all up, we were spending over $350 per month on software alone. GymWyse is $99 per month and does everything Mindbody did plus features I did not even know existed. The revenue analytics dashboard showed me that our Saturday morning boot camp was our highest-margin class by far, so we added a second session. That single insight paid for a full year of GymWyse in two months.",
    savings: "$1,080/yr",
    savingsLabel: "Software savings",
    impact: "$15,000",
    impactLabel: "Recovered in Q1 from failed payments",
    detail:
      "Switched from Mindbody after 3 years. Migration completed in 8 days with zero downtime. Staff fully trained in a single 2-hour session. Members transitioned to the GymWyse app within 48 hours of the announcement email.",
  },
  {
    gym: "Flow State Yoga",
    location: "Brooklyn, NY",
    members: "180 members",
    type: "Boutique Studio",
    initials: "AW",
    author: "Alicia Whitmore",
    role: "Studio Director",
    quote:
      "Mindbody app was clunky and our members complained about it constantly. It crashed during peak booking times and the interface felt like it was designed in 2010. GymWyse member app with AI coaches completely transformed our engagement. Members love the guided meditation suggestions from the AI avatars, and the wearable sync lets them see how their heart rate variability improves with consistent yoga practice. Our class attendance increased by 28 percent and monthly engagement went up 35 percent within the first two months.",
    savings: "$2,400/yr",
    savingsLabel: "Eliminated branded app fee",
    impact: "35%",
    impactLabel: "Increase in member engagement",
    detail:
      "The AI Avatar coaches were the surprise hit. Our members interact with them between classes for breathing exercises and stretching routines. It keeps them connected to the studio even when they are not physically there. Three members who were about to cancel stayed because the churn prediction system flagged them and we reached out personally.",
  },
  {
    gym: "IronClad Fitness",
    location: "Houston, TX",
    members: "2,100 members across 5 locations",
    type: "Multi-Location Chain",
    initials: "DM",
    author: "Derek Mitchell",
    role: "CEO",
    quote:
      "Managing five locations on Mindbody meant logging into five separate dashboards every single morning. I spent 30 minutes just trying to see our aggregate numbers. Then I would export five CSV files and combine them in Excel to get a total view. It was insane. GymWyse gave us one unified dashboard where I can see all five locations, compare performance side by side, and identify which location needs attention in literally 30 seconds. We discovered our Katy location had a 4.1 percent churn rate compared to 1.9 percent average across the others. That insight alone justified the switch.",
    savings: "$18,000/yr",
    savingsLabel: "Total savings across 5 locations",
    impact: "4.1% to 2.3%",
    impactLabel: "Katy location churn reduction",
    detail:
      "With five locations, the cost savings were massive. Five Mindbody subscriptions with add-ons totaled over $1,800 per month. GymWyse multi-location pricing brought that down to $395 per month. The unified dashboard eliminated 2.5 hours of daily manual reporting across the management team.",
  },
];

const faqItems = [
  {
    question: "Can I import my Mindbody data?",
    answer:
      "Yes, absolutely. GymWyse supports full data migration from Mindbody including member profiles, contact information, join dates, attendance history, payment records, active subscriptions, class schedules, and staff records. Our migration team handles the entire import process and validates every record to ensure nothing is lost. You receive a detailed migration report confirming data integrity before going live.",
  },
  {
    question: "How long does migration take?",
    answer:
      "The complete migration from Mindbody to GymWyse takes approximately six weeks from start to finish, including a one-week parallel running period. The actual data migration happens in week two and is completed within five business days. Your gym operations continue uninterrupted throughout the entire process. Members can book classes and check in normally during migration.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. GymWyse operates on a month-to-month basis with no long-term contract. You can cancel anytime with 30 days notice. There is no early termination fee, no cancellation penalty, and no remaining balance to pay. If GymWyse is not delivering value, you should not be locked into paying for it. We earn your business every single month.",
  },
  {
    question: "What about my Mindbody contract?",
    answer:
      "If you are in the middle of a Mindbody contract, you will need to pay out the remaining months or negotiate an early exit with Mindbody directly. Even accounting for those exit costs, most gyms recoup the expense within three to six months on GymWyse through lower monthly fees, recovered failed payments, and retained members from churn prediction. We can help you calculate your specific break-even timeline using our ROI calculator.",
  },
  {
    question: "Will my members notice the switch?",
    answer:
      "Members will need to download the GymWyse member app, which is available on both iOS and Android. We provide pre-written announcement email and SMS templates that you send to your member base. The actual booking and check-in experience is intuitive and most members adapt immediately. Many gym owners report that members prefer the GymWyse app because of the AI coaches, wearable sync, and progress tracking features that Mindbody does not offer.",
  },
  {
    question: "Is GymWyse really cheaper?",
    answer:
      "Yes, and it is not close. GymWyse at $99 per month includes everything: member app, payment recovery, revenue analytics, churn prediction, equipment tracking, and multi-location support. Mindbody starts at $129 per month but quickly escalates to $300 or more per month once you add the branded app, payment recovery, marketing tools, and priority support. Over a year, the typical gym saves $1,200 to $3,000 on software costs alone, before counting the revenue impact of churn prevention and payment recovery.",
  },
  {
    question: "What features does GymWyse have that Mindbody does not?",
    answer:
      "GymWyse includes several capabilities that Mindbody does not offer at any price: AI-powered churn prediction with member risk scoring, real-time MRR and profit margin dashboards, AI Avatar coaches in the member app, wearable device sync with Apple Health, WHOOP, Garmin, and Fitbit, QR code-based equipment management and maintenance tracking, automated failed payment recovery with a 40 percent success rate, and a unified multi-location dashboard. These are not premium add-ons. They are included in the standard $99 per month plan.",
  },
  {
    question: "Can I try before I commit?",
    answer:
      "Yes. GymWyse offers a full 14-day free trial with access to every feature. No credit card is required to start. You can import a sample of your data, explore the revenue dashboard, test the member app, and let your staff try the scheduling tools. If you decide GymWyse is not right for you, simply do not subscribe. There is zero obligation and zero pressure.",
  },
];

const gymBasics = [
  { feature: "Member check-in (kiosk, app, barcode)", included: true },
  { feature: "Class and appointment scheduling", included: true },
  { feature: "Recurring billing and invoicing", included: true },
  { feature: "Staff management and permissions", included: true },
  { feature: "Attendance tracking and reporting", included: true },
  { feature: "Email and SMS communications", included: true },
  { feature: "Point-of-sale for retail and services", included: true },
  { feature: "Membership plan management", included: true },
  { feature: "Waiver and document signing", included: true },
  { feature: "Basic reporting and analytics", included: true },
];

const advancedFeatures = [
  "AI-powered churn prediction and risk scoring",
  "Real-time MRR and profit margin dashboards",
  "AI Avatar coaches in the member app",
  "Wearable sync (Apple Health, WHOOP, Garmin, Fitbit)",
  "QR code equipment management and maintenance tracking",
  "Automated 40% failed payment recovery",
  "Unified multi-location dashboard",
  "Revenue forecasting with 6-month projections",
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export function MindbodyComparison() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      {/* ───────── 1. Hero ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Honest Comparison — No Spin, Just Facts
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              GymWyse vs Mindbody: Gym Management Software Comparison
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto leading-relaxed">
              Choosing the right gym management software determines whether your
              gym thrives or merely survives. This page provides an honest,
              feature-by-feature comparison of GymWyse and Mindbody so you can
              make an informed decision based on real costs, real features, and
              real results from gyms that have already made the switch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── 2. Quick Comparison Table ───────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Quick Comparison at a Glance
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Before diving into the details, here is a high-level side-by-side
              look at how GymWyse and Mindbody stack up across the metrics that
              matter most to gym owners.
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-deep-space/80 border-b border-glass-border">
                  <th className="p-5 text-left text-sm font-semibold text-dim-gray">
                    Feature
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-electric-green">
                    GymWyse
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-dim-gray">
                    Mindbody
                  </th>
                </tr>
              </thead>
              <tbody>
                {quickMetrics.map((m, i) => (
                  <tr
                    key={i}
                    className={`border-b border-glass-border/50 last:border-0 ${
                      i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="p-4 text-sm text-pure-white font-medium">
                      {m.label}
                    </td>
                    <td className="p-4 text-sm text-electric-green text-center">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        {m.gymwyse}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-cool-gray text-center">
                      {m.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ───────── 3. Real Cost Comparison ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              The Real Cost Comparison
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Mindbody&apos;s base price looks reasonable at $129 per month. But
              once you add the branded app, payment processing markup, and other
              extras that most gyms need, the real Year 1 cost tells a very
              different story. Here is an honest breakdown of what you actually
              pay for each platform in your first year.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mindbody */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-alert-red" />
                Mindbody Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.mindbody.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      item.highlight
                        ? "pt-4 border-t border-glass-border"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-semibold text-pure-white"
                          : "text-cool-gray"
                      }`}
                    >
                      {item.item}
                    </span>
                    <span
                      className={`text-sm font-medium font-mono ${
                        item.highlight
                          ? "text-alert-red text-xl"
                          : "text-alert-red"
                      }`}
                    >
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GymWyse */}
            <motion.div
              className="glass-card p-8 border-electric-green/20 bg-electric-green/[0.03]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-electric-green" />
                GymWyse Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.gymwyse.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      item.highlight
                        ? "pt-4 border-t border-glass-border"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-semibold text-pure-white"
                          : "text-cool-gray"
                      }`}
                    >
                      {item.item}
                    </span>
                    <span
                      className={`text-sm font-medium font-mono ${
                        item.highlight
                          ? "text-electric-green text-xl"
                          : "text-electric-green"
                      }`}
                    >
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto mt-8 glass-card p-6 bg-electric-green/[0.05] border-electric-green/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-soft-white mb-1">
              Your Year 1 savings with GymWyse:
            </div>
            <div className="text-4xl font-bold text-electric-green font-mono">
              $3,860
            </div>
            <div className="text-xs text-dim-gray mt-1">
              That is $3,860 back in your pocket before counting recovered
              revenue from churn prevention and failed payment recovery
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── 4. What Mindbody Doesn't Tell You ───────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              What Mindbody Doesn&apos;t Tell You
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The advertised price is only the beginning. Here are the hidden
              costs and restrictions that Mindbody customers discover after they
              have already signed the 12-month contract.
            </p>
          </motion.div>

          <div className="space-y-6">
            {hiddenCosts.map((cost, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-sunset-orange mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-sunset-orange mb-2">
                      {cost.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {cost.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 5. Feature-by-Feature Breakdown ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              A detailed look at how each platform handles the eight most
              important capabilities for running a modern gym. No marketing
              fluff, just an honest assessment of what each platform delivers.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featureComparisons.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white">
                    {feature.title}
                  </h3>
                  <span className="ml-auto px-3 py-1 text-xs font-medium bg-electric-green/20 text-electric-green rounded-full">
                    Winner: {feature.verdict}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-medium text-electric-green uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      GymWyse
                    </h4>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {feature.gymwyse}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-alert-red uppercase tracking-wider mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Mindbody
                    </h4>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {feature.competitor}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. Why Gyms Switch ───────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Why Gyms Switch from Mindbody to GymWyse
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              We asked gym owners who switched from Mindbody what motivated
              their decision. Four reasons come up consistently. Here they are,
              in their own words and with real numbers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {switchReasons.map((reason, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-sapphire-blue/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sapphire-blue font-bold text-sm font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed ml-11">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 7. Migration Process ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              How to Switch from Mindbody to GymWyse
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Migration is the number one concern for gym owners considering a
              switch. We have refined our process over hundreds of migrations to
              minimize disruption. The entire transition takes six weeks with
              zero downtime for your members. Here is exactly what happens at
              each stage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {migrationPhases.map((phase, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-electric-green text-xs font-bold font-mono">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-pure-white">
                        {phase.title}
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-medium bg-sapphire-blue/20 text-sapphire-blue rounded-full font-mono">
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/migration">
              <Button variant="secondary" size="lg">
                See Full Migration Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── 8. Testimonials ───────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              What Former Mindbody Users Say
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              These are real gyms that switched from Mindbody to GymWyse. Their
              results speak louder than any marketing claim we could make.
            </p>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-pure-white">
                      {t.gym}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {t.location} &bull; {t.members} &bull; {t.type}
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-electric-green/30 pl-4 mb-6">
                  <p className="text-sm text-soft-white italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="text-xs text-dim-gray mt-2">
                    — {t.author}, {t.role}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center py-3 bg-deep-space/40 rounded-lg">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {t.savings}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">
                      {t.savingsLabel}
                    </div>
                  </div>
                  <div className="text-center py-3 bg-deep-space/40 rounded-lg">
                    <div className="text-xl font-bold text-electric-green font-mono">
                      {t.impact}
                    </div>
                    <div className="text-xs text-dim-gray mt-1">
                      {t.impactLabel}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-cool-gray leading-relaxed">
                  {t.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 9. FAQ ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Answers to the most common questions from gym owners considering
              the switch from Mindbody to GymWyse.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
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

      {/* ───────── 10. Gym Operations Basics ───────── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Every Essential Feature, Plus More
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Some gym owners worry that switching platforms means losing basic
              functionality they rely on every day. GymWyse covers every
              operational essential that Mindbody offers, from member check-ins
              and class scheduling to billing and staff management. You lose
              nothing in the transition. But you gain a suite of advanced
              capabilities that Mindbody simply does not provide at any price
              tier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-sapphire-blue" />
                Core Operations (Both Platforms)
              </h3>
              <div className="space-y-3">
                {gymBasics.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-electric-green shrink-0" />
                    <span className="text-sm text-cool-gray">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8 border-electric-green/20 bg-electric-green/[0.03]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-electric-green" />
                GymWyse Advanced (Mindbody Does Not Offer)
              </h3>
              <div className="space-y-3">
                {advancedFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-electric-green shrink-0" />
                    <span className="text-sm text-soft-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── 11. Final CTA ───────── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Ready to Switch from Mindbody?
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto leading-relaxed">
              Join hundreds of gyms that have already made the switch. Start
              saving money, gain real-time revenue visibility, prevent churn
              before it happens, and give your members a modern fitness
              experience they will love. Your migration is handled by our
              dedicated team from start to finish.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
            <p className="text-sm text-dim-gray">
              No credit card required &bull; 14-day free trial &bull; Cancel
              anytime
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-cool-gray">
              <Link
                href="/platform/revenue-analytics"
                className="hover:text-electric-green transition-colors"
              >
                Revenue Analytics
              </Link>
              <span className="text-dim-gray">&bull;</span>
              <Link
                href="/solutions/reduce-churn"
                className="hover:text-electric-green transition-colors"
              >
                Reduce Churn
              </Link>
              <span className="text-dim-gray">&bull;</span>
              <Link
                href="/pricing"
                className="hover:text-electric-green transition-colors"
              >
                Pricing
              </Link>
              <span className="text-dim-gray">&bull;</span>
              <Link
                href="/migration"
                className="hover:text-electric-green transition-colors"
              >
                Migration Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
