import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  MapPin,
  Building2,
  CheckCircle,
  Quote,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Gym Software Case Studies — Real Results from Real Gyms | GymWyse",
  description:
    "See proven gym management software results: 32% average churn reduction, $2.1M+ revenue recovered, and 200+ gyms transformed. Read detailed case studies from independent gyms, boutique studios, and multi-location chains.",

  openGraph: {
    title: "Gym Software Case Studies — Real Results from Real Gyms | GymWyse",
    description:
      "See proven gym management software results: 32% average churn reduction, $2.1M+ revenue recovered, and 200+ gyms transformed. Read detailed case studies from independent gyms, boutique studios, and multi-location chains.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

const caseStudies = [
  {
    gym: "Apex Performance Lab",
    type: "Independent Gym",
    location: "Los Angeles, CA",
    members: "220",
    challenge:
      "Apex Performance Lab was paying Mindbody $389 per month for a platform built for franchise chains — loaded with features they never touched and missing the ones they actually needed. Owner Marcus Chen had no way to see per-service profitability, so every pricing decision was a gut call. Worst of all, the gym was quietly losing 16 members every month with zero early warning, and each lost member represented roughly $112 in monthly recurring revenue walking out the door.",
    solution:
      "Marcus migrated to GymWyse over a single weekend with zero downtime. The per-service P&L dashboard immediately revealed that the smoothie bar — long assumed to be a member perk that paid for itself — was actually operating at a net loss once ingredient waste and labor were factored in, while personal training carried 60% margins. The AI churn prediction engine began flagging at-risk members based on visit frequency decline, missed payments, and engagement drop-off, giving the front desk a daily action list for proactive outreach.",
    results: [
      { value: "$3,480/yr", label: "Saved on software" },
      { value: "5.1%", label: "Churn (from 8.2%)" },
      { value: "$1,800/mo", label: "Recovered payments" },
      { value: "+22%", label: "Revenue in 6 months" },
    ],
    quote:
      "Within a week of switching, we discovered our smoothie bar was losing money and PT was our biggest margin driver. The cost savings alone paid for the switch.",
    author: "Marcus Chen",
    role: "Owner",
  },
  {
    gym: "Flow State Yoga",
    type: "Boutique Studio",
    location: "Brooklyn, NY",
    members: "180",
    challenge:
      "Flow State Yoga had a 30% no-show rate that was silently draining revenue — empty mats in sold-out classes while waitlisted members went elsewhere. Even more concerning, 45% of intro-package members never converted to a regular membership, disappearing after their fifth class without anyone following up. When Priya finally dug into the numbers, she discovered her most popular class — heated vinyasa — was actually the lowest-margin offering on the schedule because of the premium instructor rate she was paying.",
    solution:
      "GymWyse replaced their patchwork of scheduling tools with a branded booking app featuring automated waitlist management and smart no-show penalties. The AI retention engine began tracking intro-package members from day one, triggering personalized outreach sequences when engagement patterns suggested they were fading. Per-class P&L reporting gave Priya true profitability data for every session on the schedule, factoring in instructor cost, room overhead, and average attendance.",
    results: [
      { value: "12%", label: "No-shows (from 30%)" },
      { value: "+38%", label: "Intro-to-regular conversion" },
      { value: "+24%", label: "Revenue per class" },
      { value: "$26K", label: "MRR (from $18K)" },
    ],
    quote:
      "GymWyse showed us our heated vinyasa was our lowest-margin class because of the premium instructor rate. We restructured and MRR jumped from $18K to $26K.",
    author: "Priya Sharma",
    role: "Founder",
  },
  {
    gym: "IronClad Fitness",
    type: "Multi-Location (5 gyms)",
    location: "Houston & Dallas, TX",
    members: "2,100",
    challenge:
      "IronClad Fitness was running five locations across Houston and Dallas, each on its own Mindbody login with its own reporting silo. Regional manager Laura spent more than six hours every week copying numbers into spreadsheets just to compile a basic cross-location performance report. The real cost of this fragmentation became painfully clear when an audit revealed that the Dallas Uptown location had been silently losing $4,200 per month in failed recurring payments for three consecutive months — and nobody had noticed because the data lived in a dashboard no one was checking.",
    solution:
      "GymWyse unified all five locations under a single dashboard with role-based access for site managers, regional leadership, and the executive team. Real-time cross-location comparisons replaced the weekly spreadsheet ritual entirely. The AI anomaly detection system was configured to flag any location-level metric that deviated more than one standard deviation from the network average, surfacing issues within 24 hours instead of letting them compound for months.",
    results: [
      { value: "$4,200/mo", label: "Recovered payments" },
      { value: "6 hrs/wk", label: "Saved on reporting" },
      { value: "+18%", label: "Network revenue" },
      { value: "2.1%", label: "Churn variance (from 6.8%)" },
    ],
    quote:
      "We had no idea our Dallas location was hemorrhaging $4,200 a month. With separate logins per site, it just fell through the cracks. GymWyse caught it on day one.",
    author: "David Torres",
    role: "CEO",
  },
  {
    gym: "The Foundry",
    type: "CrossFit Box",
    location: "London, UK",
    members: "450",
    challenge:
      "The Foundry was trapped in a vicious cycle that Jack Morrison calls the \"acquisition treadmill.\" Monthly churn sat at 9.4%, meaning the box was losing roughly 40 members every month. To keep headcount stable, Jack was spending over two thousand pounds a month on Facebook and Instagram ads to acquire replacements — members who themselves would churn within a few months, perpetuating the cycle. The team had no visibility into who was likely to leave until the cancellation email landed.",
    solution:
      "Within 48 hours of going live, GymWyse's AI churn prediction engine flagged 67 members as at-risk based on declining visit frequency, reduced class variety, and payment friction signals. The system automatically launched re-engagement campaigns tailored to each member's specific risk profile — a lapsed CrossFitter received a different message than a member whose card had failed twice. The coaching staff received a prioritized outreach list each morning, turning retention from a reactive scramble into a proactive daily workflow.",
    results: [
      { value: "5.1%", label: "Churn (from 9.4%)" },
      { value: "22", label: "Members/mo saved" },
      { value: "£1,400/mo", label: "Reduced ad spend" },
      { value: "£38K/yr", label: "Net revenue impact" },
    ],
    quote:
      "We were on a treadmill — losing 40 members a month and spending thousands to replace them. GymWyse flagged 67 at-risk members in the first 48 hours.",
    author: "Jack Morrison",
    role: "Owner",
  },
  {
    gym: "Summit Fitness",
    type: "Full-Service Gym",
    location: "Denver, CO",
    members: "380",
    challenge:
      "Summit Fitness had a revenue problem hiding behind good top-line numbers. Total revenue was growing quarter over quarter, but margins were quietly shrinking and owner Amanda Fischer could not figure out why. The gym had no per-service profitability visibility — personal training, group classes, and membership dues all landed in one bucket. Failed recurring payments totaling $2,400 per month were being written off as a cost of doing business. And every month-end close took Amanda and her bookkeeper two full days of reconciliation.",
    solution:
      "GymWyse's revenue analytics suite broke every dollar into its source service line, revealing that personal training margins had eroded from 45% to just 22% over the previous year because trainer pay had been increased twice without a corresponding price adjustment. Automated payment recovery — including smart retry logic and member-friendly dunning sequences — began recapturing the failed payments that had been written off. The real-time financial dashboard replaced the two-day monthly close with a ten-minute review.",
    results: [
      { value: "$2,400/mo", label: "Recovered payments" },
      { value: "+8%", label: "Margin improvement" },
      { value: "10 min", label: "Close time (from 2 days)" },
      { value: "+$4,200/mo", label: "From pricing corrections" },
    ],
    quote:
      "Our PT revenue looked great on paper, but margins had eroded to 22% because we hadn't adjusted pricing when we raised trainer pay. That single insight was worth $4,200 a month.",
    author: "Amanda Fischer",
    role: "Owner",
  },
  {
    gym: "Desert Strength",
    type: "Premium Fitness Club",
    location: "Dubai, UAE",
    members: "600",
    challenge:
      "Desert Strength is a premium facility with over AED 4 million in equipment on the floor, and maintenance was entirely reactive. Machines broke down during peak hours, frustrating high-paying members and triggering emergency repair callouts at premium rates. Operations Director Khalid Al-Rashid had no visibility into equipment lifecycle costs or utilization patterns, making replacement budgeting guesswork. When an insurance claim required historical maintenance records for a failed cable machine, the team spent three days hunting through paper logs and email threads.",
    solution:
      "GymWyse's QR-based equipment tracking system gave every machine in the facility a digital identity and a complete maintenance history. Staff scan a QR code to log inspections, flag issues, or record repairs — all timestamped and geo-tagged. Preventive maintenance schedules trigger automated work orders before problems surface. Usage data from check-in patterns now drives replacement planning, so high-utilization machines get serviced more frequently and end-of-life equipment gets flagged before it fails catastrophically.",
    results: [
      { value: "94%", label: "Uptime (from 81%)" },
      { value: "AED 12K/mo", label: "Saved on emergency repairs" },
      { value: "100%", label: "Maintenance compliance" },
      { value: "-15%", label: "Insurance premiums" },
    ],
    quote:
      "When a Technogym treadmill went down during Ramadan evening rush, we realized we needed to stop being reactive. GymWyse equipment tracking means we catch issues before members notice.",
    author: "Khalid Al-Rashid",
    role: "Operations Director",
  },
];

const aggregateStats = [
  { value: "200+", label: "Gyms" },
  { value: "32%", label: "Avg Churn Reduction" },
  { value: "$2.1M+", label: "Revenue Recovered" },
  { value: "4", label: "Continents" },
];

const networkMetrics = [
  { value: "32%", label: "Average churn reduction" },
  { value: "$2,100/mo", label: "Average payment recovery" },
  { value: "40%", label: "Failed payment recovery rate" },
  { value: "6 hrs/wk", label: "Time saved on admin" },
  { value: "18 members/mo", label: "Saved via AI prediction" },
  { value: "< 1 day", label: "Average setup time" },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-deep-space">
      {/* ── Hero Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Real Results from Real Gyms
            </h1>
            <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-3xl mx-auto">
              Every number on this page comes from a gym that was in your shoes
              — struggling with churn, leaving money on the table, or drowning
              in spreadsheets. Here&apos;s what changed when they switched to
              GymWyse.
            </p>
          </div>

          {/* Aggregate Stats Bar */}
          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {aggregateStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-electric-green font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-cool-gray mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {caseStudies.map((study, i) => (
            <article key={i} className="glass-card p-8 md:p-10 space-y-8">
              {/* Header: tags + gym name */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-electric-green bg-electric-green/10 px-3 py-1 rounded-full">
                    <Building2 className="w-3 h-3" />
                    {study.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-cool-gray bg-white/5 px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {study.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-cool-gray bg-white/5 px-3 py-1 rounded-full">
                    <Users className="w-3 h-3" />
                    {study.members} members
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-pure-white">
                  {study.gym}
                </h2>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-alert-red uppercase tracking-wider mb-3">
                  <TrendingUp className="w-4 h-4 rotate-180" />
                  The Challenge
                </h3>
                <p className="text-soft-white leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-sapphire-blue uppercase tracking-wider mb-3">
                  <CheckCircle className="w-4 h-4" />
                  The Solution
                </h3>
                <p className="text-soft-white leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results Grid */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-electric-green uppercase tracking-wider mb-4">
                  <BarChart3 className="w-4 h-4" />
                  The Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white/5 border border-glass-border rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs text-dim-gray mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative border-l-2 border-electric-green/30 pl-6 py-2">
                <Quote className="absolute -left-3 -top-1 w-5 h-5 text-electric-green/40 fill-electric-green/20" />
                <p className="text-base md:text-lg text-soft-white italic leading-relaxed">
                  &ldquo;{study.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sapphire-blue/20 border border-sapphire-blue/30 flex items-center justify-center text-sapphire-blue text-xs font-bold">
                    {study.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {study.author}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {study.role}, {study.gym}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* ── Aggregate Results Section ── */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              The Numbers Across All GymWyse Customers
            </h2>
            <p className="text-soft-white leading-relaxed">
              Aggregated data from 200+ gyms, studios, and fitness clubs across
              four continents. These are median results — not cherry-picked
              outliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {networkMetrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card p-8 text-center border border-glass-border"
              >
                <div className="text-4xl md:text-5xl font-bold text-electric-green font-mono mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-cool-gray">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
            Your Gym Could Be Next
          </h2>
          <p className="text-lg text-soft-white leading-relaxed">
            Every case study on this page started with a 14-day free trial. No
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg">
                <DollarSign className="w-4 h-4" />
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
