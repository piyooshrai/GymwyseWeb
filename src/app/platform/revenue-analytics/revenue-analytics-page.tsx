"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  TrendingUp,
  DollarSign,
  BarChart3,
  CreditCard,
  ShoppingCart,
  AlertTriangle,
  FileSpreadsheet,
  RefreshCcw,
  ChevronDown,
  ChevronUp,
  Users,
  Layers,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const problems = [
  {
    icon: Layers,
    title: "You Only Track Total Revenue",
    description:
      "Your accounting software tells you how much came in last month. It does not tell you that PT sessions generate 3.4x more profit per square foot than open gym access, or that your Saturday yoga class runs at a loss once you factor in instructor cost. Without stream-level breakdowns, you are flying blind on which services actually drive margin and which ones quietly drain it.",
  },
  {
    icon: PieChart,
    title: "No Visibility Into Profit Margins by Service",
    description:
      "Revenue is vanity; profit is sanity. Most gym owners can quote their total monthly take but cannot tell you the gross margin on a 10-pack PT bundle versus a monthly unlimited membership. When you cannot see margins at the service level, you end up subsidising loss-making offerings with profitable ones and never realise it until cash flow tightens.",
  },
  {
    icon: AlertTriangle,
    title: "Failed Payments Leak Undetected",
    description:
      "The average gym loses 4-8% of monthly recurring revenue to failed card payments. Expired cards, insufficient funds, bank declines. Most platforms retry once and move on. Without automated dunning sequences and real-time alerts, those members quietly slip into involuntary churn. Over twelve months, that silent leak can cost a 300-member gym upwards of $15,000 in lost revenue.",
  },
];

const dashboardMetrics = [
  { label: "Net MRR", value: "$68,400", change: "+4.2%", positive: true },
  { label: "New MRR", value: "$8,320", change: "+12 members", positive: true },
  { label: "Churned MRR", value: "$2,140", change: "-6 members", positive: false },
  { label: "Avg LTV", value: "$2,860", change: "+$140", positive: true },
];

const revenueStreams = [
  { name: "Memberships", percentage: 52, amount: "$35,568" },
  { name: "Personal Training", percentage: 24, amount: "$16,416" },
  { name: "Group Classes", percentage: 14, amount: "$9,576" },
  { name: "Retail & Supplements", percentage: 7, amount: "$4,788" },
  { name: "Other (Day Passes, Events)", percentage: 3, amount: "$2,052" },
];

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time MRR Dashboard",
    description:
      "Your monthly recurring revenue is calculated live, not at the end of the month when it is too late to act. The dashboard breaks MRR into four components: new MRR from sign-ups, expansion MRR from upgrades and add-ons, contraction MRR from downgrades, and churned MRR from cancellations. You see the net waterfall in real time, with daily and weekly trend lines overlaid against the previous period. Configurable alerts notify you when MRR growth dips below a threshold you set, when churn rate exceeds your target, or when a single day produces an unusual spike in cancellations. No more waiting for month-end reports to discover a problem that started three weeks ago.",
  },
  {
    icon: Users,
    title: "Revenue Per Member Analytics",
    description:
      "Knowing your total revenue is useful. Knowing your revenue per member is actionable. GymWyse calculates lifetime value for every member based on their full transaction history: membership fees, PT sessions, class bookings, retail purchases, and any add-ons. You can segment members by LTV tier, by join date cohort, or by primary activity type. The per-visit revenue metric shows you how much each gym visit is worth in real terms, helping you understand the relationship between attendance frequency and spend. Use these insights to identify your highest-value segments, target upsell campaigns precisely, and spot members whose spending is declining before they cancel.",
  },
  {
    icon: BarChart3,
    title: "PT & Class Revenue Tracking",
    description:
      "Personal training and group classes are your highest-margin services, but only if priced and staffed correctly. GymWyse tracks revenue per trainer, per class type, and per time slot. You see exactly which trainers generate the most revenue relative to their compensation, which classes fill consistently and which run below breakeven occupancy, and how seasonal trends affect booking patterns. The class profitability view factors in instructor cost, room allocation, and equipment usage to give you a true margin figure for every session on your timetable. Use this data to adjust pricing, restructure your schedule, or invest in the trainers who deliver the strongest return.",
  },
  {
    icon: CreditCard,
    title: "Failed Payment Recovery",
    description:
      "GymWyse does not just retry failed payments and hope for the best. The smart retry engine analyses historical payment data to determine the optimal retry window for each payment processor and card type. If the first retry fails, an automated dunning sequence begins: branded emails and optional SMS messages prompt the member to update their payment details through a self-service portal. The member updates their card, the payment processes, and you never had to make an awkward phone call. Gyms using GymWyse recover an average of 40% of initially failed payments, turning what would have been involuntary churn back into reliable recurring revenue.",
  },
  {
    icon: ShoppingCart,
    title: "Retail POS Integration",
    description:
      "If you sell supplements, merchandise, or snacks, GymWyse brings that revenue stream into the same dashboard as everything else. Barcode scanning at the point of sale logs every transaction against the purchasing member, building a complete spend profile. Inventory management tracks stock levels in real time with automated reorder alerts when items fall below your configured threshold. Margin tracking shows you the gross profit on every product line, so you can see at a glance whether that new protein brand is actually worth the shelf space. All retail data feeds into the member LTV calculation, giving you one unified view of total member value.",
  },
];

const comparisonRows = [
  { feature: "Real-Time MRR Tracking", gymwyse: true, mindbody: false, zenplanner: false },
  { feature: "Revenue Per Member / LTV", gymwyse: true, mindbody: false, zenplanner: true },
  { feature: "Profit Margins by Service", gymwyse: true, mindbody: false, zenplanner: false },
  { feature: "Churn Forecasting (AI)", gymwyse: true, mindbody: false, zenplanner: false },
  { feature: "Built-in Retail POS", gymwyse: true, mindbody: true, zenplanner: false },
  { feature: "Starting Price", gymwyse: "$149/mo", mindbody: "$279/mo", zenplanner: "$117/mo" },
];

const faqs = [
  {
    question: "How is MRR calculated?",
    answer:
      "MRR is calculated from the sum of all active recurring membership fees normalised to a monthly value. Annual memberships are divided by twelve, quarterly by three, and so on. The figure updates in real time as members join, upgrade, downgrade, or cancel. Non-recurring revenue such as PT session packs and retail purchases are tracked separately and do not inflate the MRR number.",
  },
  {
    question: "Does this work for small gyms with under 200 members?",
    answer:
      "Yes. Revenue analytics is included in every GymWyse plan, including the Starter tier. The dashboards scale to any size. In fact, smaller gyms often see the biggest impact because a single pricing adjustment or recovered payment represents a larger percentage of total revenue. You do not need a large dataset to get actionable insights.",
  },
  {
    question: "What data do I need to get started?",
    answer:
      "If you are migrating from another platform, GymWyse imports your member roster, billing history, and transaction records during onboarding. If you are starting fresh, the system begins tracking from day one. Revenue breakdowns become meaningful within the first billing cycle, and LTV calculations improve in accuracy with each subsequent month of data.",
  },
  {
    question: "How does churn prediction work?",
    answer:
      "GymWyse analyses engagement signals including visit frequency trends, class booking patterns, app usage, and payment history to assign each member a churn risk score. Members flagged as high risk appear in a dedicated dashboard where you can trigger retention outreach. The model improves over time as it learns which patterns precede cancellation at your specific facility.",
  },
  {
    question: "What export formats are available?",
    answer:
      "You can export any report as CSV or formatted PDF. For accounting integrations, GymWyse syncs directly with QuickBooks Online and Xero, pushing categorised revenue data on a daily or weekly schedule. UK gyms benefit from Making Tax Digital compliant VAT reporting. You can also schedule automated email reports to be delivered to your inbox or your accountant on any cadence you choose.",
  },
  {
    question: "Is revenue analytics a paid add-on?",
    answer:
      "No. Revenue analytics is included in every GymWyse plan at no extra cost. The Starter plan includes core MRR tracking and payment recovery. The Growth and Scale plans add advanced features like per-trainer profitability, AI churn forecasting, and retail POS integration. You can see the full comparison on our pricing page.",
  },
  {
    question: "Can I generate a profit-and-loss statement for my accountant?",
    answer:
      "Yes. The one-click P&L export produces a formatted profit-and-loss statement covering any date range you specify. Revenue is categorised by stream, and you can include or exclude cost inputs depending on what your accountant needs. The report exports as PDF or syncs directly to your connected accounting software.",
  },
];

export function RevenueAnalyticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
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
              Revenue Analytics
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Revenue Analytics That Actually Show You Where the Money Goes
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              Real-time MRR tracking, profit margins by service, per-member
              lifetime value, and revenue forecasting. Stop guessing where your
              gym makes money and where it leaks. GymWyse gives you the
              financial clarity to make decisions that grow your bottom line, not
              just your top line.
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
              What You&apos;re Missing Without Revenue Analytics
            </h2>
            <p className="text-soft-white leading-relaxed">
              Most gym management platforms show you total revenue and call it a
              day. Here is what falls through the cracks.
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

      {/* Dashboard Overview Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              What You See When You Log In
            </h2>
            <p className="text-soft-white leading-relaxed">
              The revenue dashboard gives you a complete financial picture of
              your gym in a single view. No digging through spreadsheets, no
              waiting for month-end reports.
            </p>
          </motion.div>

          {/* MRR Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {dashboardMetrics.map((metric, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-dim-gray mb-1">{metric.label}</p>
                <p className="text-3xl font-bold text-pure-white mb-1">
                  {metric.value}
                </p>
                <p
                  className={`text-sm font-medium ${
                    metric.positive ? "text-electric-green" : "text-red-400"
                  }`}
                >
                  {metric.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Revenue Streams Breakdown */}
          <motion.div
            className="glass-card p-8 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-pure-white mb-6">
              Revenue by Stream
            </h3>
            <div className="space-y-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm text-cool-gray w-48 shrink-0">
                    {stream.name}
                  </span>
                  <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-electric-green/80 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stream.percentage}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-pure-white font-medium w-20 text-right">
                    {stream.amount}
                  </span>
                  <span className="text-xs text-dim-gray w-10 text-right">
                    {stream.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard description */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-soft-white leading-relaxed mb-4">
              The net revenue waterfall chart at the top of your dashboard
              visualises how your MRR changes each period. New sign-ups add to
              the left, expansions push it higher, contractions and churn pull it
              down on the right. Below that, revenue is segmented by stream so
              you can see the exact contribution of memberships, personal
              training, group classes, retail, and any custom categories you
              define. Every member has a lifetime value score calculated from
              their complete purchase history, and the 12-month projection uses
              your current growth and churn rates to forecast where your revenue
              is heading.
            </p>
            <p className="text-cool-gray text-sm leading-relaxed">
              All figures update in real time as transactions process. No
              overnight batch jobs, no stale data.
            </p>
          </motion.div>
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
              Five Tools That Change How You See Revenue
            </h2>
            <p className="text-soft-white leading-relaxed">
              Each feature is designed to surface insights you cannot get from a
              standard payment processor or spreadsheet.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {features.map((feature, i) => (
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
                Ironworks Gym, Austin TX
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-6">
                Ironworks Gym had 340 members and was running on a combination
                of Mindbody for scheduling and a separate payment processor.
                Owner Marcus Torres knew his total monthly revenue but had no
                idea which services were profitable. Within the first month of
                switching to GymWyse, the revenue analytics dashboard revealed
                three critical insights: PT sessions were underpriced by 18%
                relative to local market rates, 340 members had never purchased
                a single add-on service beyond their base membership, and retail
                inventory shrinkage was costing $420 per month due to
                untracked stock.
              </p>
              <p className="text-soft-white leading-relaxed mb-8">
                Marcus adjusted PT pricing, launched a targeted upsell campaign
                to members identified by the LTV segmentation tool, and
                implemented barcode-based retail tracking. Within ninety days,
                the results were measurable and significant.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "MRR Growth", value: "+23%", detail: "$68K to $83.6K" },
                  { label: "PT Revenue", value: "+31%", detail: "After repricing" },
                  { label: "Add-on Adoption", value: "34%", detail: "Up from 12%" },
                  { label: "Retail Shrinkage", value: "-92%", detail: "$420 to $34/mo" },
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

      {/* Export & Integration Section */}
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
              Integrations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Export Everything, Integrate Everywhere
            </h2>
            <p className="text-soft-white leading-relaxed">
              Your revenue data should work with the tools you already use.
              GymWyse integrates directly with QuickBooks Online and Xero,
              pushing categorised income and expense data on a schedule you
              control. For UK-based gyms, Making Tax Digital compliant VAT
              reports are generated automatically each quarter.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FileSpreadsheet,
                title: "CSV & PDF Export",
                desc: "Export any report in CSV for spreadsheets or formatted PDF for stakeholders and investors.",
              },
              {
                icon: RefreshCcw,
                title: "QuickBooks & Xero Sync",
                desc: "Automated daily or weekly sync of categorised revenue data to your accounting platform.",
              },
              {
                icon: DollarSign,
                title: "One-Click P&L",
                desc: "Generate a formatted profit-and-loss statement for any date range. Send it straight to your accountant.",
              },
              {
                icon: BarChart3,
                title: "Scheduled Reports",
                desc: "Set up automated email reports delivered weekly or monthly to you, your partners, or your accountant.",
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
                <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-sm font-semibold text-pure-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-cool-gray">{item.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              How GymWyse Compares
            </h2>
            <p className="text-soft-white leading-relaxed">
              Most gym management platforms offer basic revenue reports.
              GymWyse delivers revenue intelligence. Here is how we stack up
              against the platforms you are probably evaluating.
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-sm font-semibold text-pure-white p-4">
                      Feature
                    </th>
                    <th className="text-center text-sm font-semibold text-electric-green p-4">
                      GymWyse
                    </th>
                    <th className="text-center text-sm font-semibold text-dim-gray p-4">
                      Mindbody
                    </th>
                    <th className="text-center text-sm font-semibold text-dim-gray p-4">
                      Zen Planner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/5 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <td className="text-sm text-cool-gray p-4">
                        {row.feature}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.gymwyse === "boolean" ? (
                          row.gymwyse ? (
                            <Check className="w-5 h-5 text-electric-green mx-auto" />
                          ) : (
                            <span className="text-dim-gray">--</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-electric-green">
                            {row.gymwyse}
                          </span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.mindbody === "boolean" ? (
                          row.mindbody ? (
                            <Check className="w-5 h-5 text-cool-gray mx-auto" />
                          ) : (
                            <span className="text-dim-gray">--</span>
                          )
                        ) : (
                          <span className="text-sm text-dim-gray">
                            {row.mindbody}
                          </span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.zenplanner === "boolean" ? (
                          row.zenplanner ? (
                            <Check className="w-5 h-5 text-cool-gray mx-auto" />
                          ) : (
                            <span className="text-dim-gray">--</span>
                          )
                        ) : (
                          <span className="text-sm text-dim-gray">
                            {row.zenplanner}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Common questions about GymWyse revenue analytics and how they work
              for your gym.
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
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-electric-green shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dim-gray shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
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
              See Your Revenue Data in Real Time
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a 20-minute demo and we will walk you through the revenue
              analytics dashboard using your own data. Or start a free 14-day
              trial and see every dollar, every margin, and every trend the
              moment your first transaction processes. No credit card required.
              No contract. Cancel any time.
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
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
