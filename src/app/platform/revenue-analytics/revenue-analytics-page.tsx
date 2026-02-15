"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Calendar,
  CreditCard,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Inline mini-visual: sparkline-style SVG revenue chart              */
/* ------------------------------------------------------------------ */
function RevenueChartSVG() {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 L30 92 L60 88 L90 78 L120 82 L150 65 L180 58 L210 52 L240 48 L270 35 L300 30 L330 22 L360 18 L400 10"
        stroke="#00FF88"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M0 100 L30 92 L60 88 L90 78 L120 82 L150 65 L180 58 L210 52 L240 48 L270 35 L300 30 L330 22 L360 18 L400 10 L400 120 L0 120Z"
        fill="url(#chartGrad)"
      />
      {/* data points */}
      {[
        [0, 100],
        [90, 78],
        [180, 58],
        [270, 35],
        [360, 18],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#00FF88" />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline mini-visual: metric card                                    */
/* ------------------------------------------------------------------ */
function MetricCard({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="glass-card p-6 text-center">
      <p className="text-sm text-dim-gray mb-1">{label}</p>
      <p className="text-3xl font-bold font-mono text-pure-white mb-1">
        {value}
      </p>
      <p
        className={`text-sm font-medium flex items-center justify-center gap-1 ${
          positive ? "text-electric-green" : "text-red-400"
        }`}
      >
        {positive ? (
          <TrendingUp className="w-3.5 h-3.5" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5" />
        )}
        {change}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data: FAQ items                                                    */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    question: "What metrics does GymWyse track?",
    answer:
      "GymWyse tracks over thirty financial and operational metrics out of the box. Core revenue metrics include monthly recurring revenue, annual recurring revenue, average revenue per member, lifetime value per member, churn rate, expansion revenue, contraction revenue, and net revenue retention. You also get per-service breakdowns covering memberships, personal training, group classes, retail, recovery services, and day passes. Operational metrics such as cost per lead, member acquisition cost, and payback period round out the picture. Every metric updates in real time as transactions process through the system.",
  },
  {
    question: "How is MRR calculated?",
    answer:
      "MRR is the sum of all active recurring membership fees normalised to a monthly value. Annual memberships are divided by twelve, quarterly by three, weekly multiplied by 4.33, and so on. Non-recurring revenue such as personal training session packs, retail purchases, and one-time fees are tracked separately and do not inflate the MRR number. The dashboard breaks MRR into four components: new MRR from first-time sign-ups, expansion MRR from upgrades and add-ons, contraction MRR from downgrades, and churned MRR from cancellations. You see the net waterfall in real time so you always know the direction your recurring revenue is heading.",
  },
  {
    question: "Can I see revenue by location?",
    answer:
      "Yes. If you operate multiple locations, GymWyse provides a consolidated multi-site dashboard as well as individual location views. You can compare MRR, churn rate, average revenue per member, and profit margins across all your sites in a single table. Drill down into any location to see its full revenue breakdown, class-level profitability, and staff performance. Location-level data can be exported independently or rolled up into a single P&L for your entire portfolio.",
  },
  {
    question: "How does payment recovery work?",
    answer:
      "When a recurring payment fails, GymWyse initiates a smart retry sequence. The system analyses historical payment data to determine the optimal retry window for each processor and card type, typically retrying at intervals of two days, five days, and ten days. If retries fail, an automated dunning sequence begins: the member receives a branded email explaining the issue and providing a one-click link to update their payment method. If no action is taken within 48 hours, a follow-up SMS is sent. The member updates their card through a self-service portal, the payment processes automatically, and you never need to make an awkward phone call. The entire sequence is fully customisable.",
  },
  {
    question: "What is the average ROI from revenue analytics?",
    answer:
      "Gyms using GymWyse revenue analytics report an average monthly revenue increase of $2,800 to $4,500 within the first 90 days. This comes from three primary sources: recovered failed payments averaging $1,200 to $1,600 per month, cost savings from identifying and eliminating unprofitable class times or services averaging $800 to $1,400 per month, and revenue growth from data-driven pricing adjustments and targeted upsell campaigns averaging $800 to $1,500 per month. For a gym paying $149 per month for GymWyse, that represents a 19x to 30x return on investment.",
  },
  {
    question: "Can I export financial reports?",
    answer:
      "You can export any report as CSV for spreadsheet analysis or as a formatted PDF for stakeholders, investors, and lenders. The one-click profit-and-loss export produces a fully categorised P&L statement for any date range you specify. Revenue is broken down by stream, and you can include or exclude cost inputs depending on what your accountant needs. Scheduled email reports can be delivered weekly or monthly to any number of recipients. For more advanced needs, the GymWyse API provides programmatic access to all financial data.",
  },
  {
    question: "Does it integrate with accounting software?",
    answer:
      "GymWyse integrates directly with QuickBooks Online and Xero. Revenue data is automatically categorised and pushed to your accounting platform on a daily or weekly schedule that you configure. Income categories map to your existing chart of accounts, so your accountant sees clean, organised data without manual entry. For UK-based gyms, Making Tax Digital compliant VAT reports are generated automatically each quarter. If you use a different accounting platform, the CSV export and API provide flexible alternatives for getting data into your system of choice.",
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Comparison table rows                                        */
/* ------------------------------------------------------------------ */
const comparisonRows = [
  { feature: "Real-Time MRR Dashboard", gymwyse: true, mindbody: false },
  { feature: "Per-Service Profit & Loss", gymwyse: true, mindbody: false },
  { feature: "Churn Rate Prediction", gymwyse: true, mindbody: false },
  {
    feature: "Automated Payment Recovery",
    gymwyse: true,
    mindbody: false,
  },
  { feature: "Revenue Forecasting (90-day)", gymwyse: true, mindbody: false },
  { feature: "Per-Class Profitability", gymwyse: true, mindbody: false },
  { feature: "Multi-Location Roll-Up", gymwyse: true, mindbody: true },
  {
    feature: "Monthly Revenue Reports",
    gymwyse: true,
    mindbody: true,
  },
  {
    feature: "Accounting Integration",
    gymwyse: true,
    mindbody: true,
  },
  {
    feature: "Starting Price",
    gymwyse: "$99/mo",
    mindbody: "$279/mo",
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Revenue streams                                              */
/* ------------------------------------------------------------------ */
const revenueStreams = [
  { name: "Memberships", pct: 48, amount: "$32,640", margin: "82%" },
  { name: "Personal Training", pct: 22, amount: "$14,960", margin: "68%" },
  { name: "Group Classes", pct: 14, amount: "$9,520", margin: "54%" },
  { name: "Retail & Supplements", pct: 8, amount: "$5,440", margin: "41%" },
  { name: "Recovery Services", pct: 5, amount: "$3,400", margin: "72%" },
  { name: "Drop-Ins / Day Passes", pct: 3, amount: "$2,040", margin: "91%" },
];

/* ------------------------------------------------------------------ */
/*  Data: Testimonials                                                 */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    quote:
      "We had no idea our evening spin classes were running at a loss until GymWyse showed us the per-class P&L. We restructured the schedule, cut two unprofitable time slots, and added a Saturday morning session that now fills to capacity. Net result: $2,100 more per month in class revenue with lower instructor costs.",
    name: "Rachel Kim",
    title: "Owner, Velo Cycling Studio",
    location: "Portland, OR",
    metric: "+$2,100/mo class revenue",
  },
  {
    quote:
      "The failed payment recovery alone paid for GymWyse in the first week. We were losing over $1,800 a month to expired cards and declined transactions. The automated dunning sequences recovered 43% of those payments without our staff making a single phone call. Our involuntary churn dropped from 4.6% to 1.9%.",
    name: "David Okonkwo",
    title: "General Manager, Peak Performance Gym",
    location: "Atlanta, GA",
    metric: "Churn: 4.6% to 1.9%",
  },
  {
    quote:
      "Before GymWyse, I was spending four hours every month pulling data from three different systems to build a revenue report for my business partner. Now we both log in and see everything in real time. MRR, churn, LTV by segment, class profitability. It has completely changed how we make decisions about pricing, staffing, and expansion.",
    name: "Marco Rossi",
    title: "Co-Owner, Ironside Fitness",
    location: "Chicago, IL",
    metric: "4 hrs/mo saved on reporting",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function RevenueAnalyticsPage() {
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
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
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
              Revenue Analytics for Gym Management
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              Most gym management software gives you a total revenue number and
              calls it a day. GymWyse is a gym management platform that goes
              deeper, breaking every dollar into actionable insight so you know
              exactly which services drive profit, which ones drain it, and what
              to do about it. Real-time MRR tracking, per-service profit margins,
              churn cost analysis, failed payment recovery, and 90-day revenue
              forecasting are all included in every plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PROBLEM STATEMENT                                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              You Have No Idea If You&apos;re Profitable
            </h2>
            <p className="text-soft-white leading-relaxed mb-6">
              That is not an insult. It is a reality for most gym owners. You
              know how much money came in last month, but you cannot answer the
              questions that actually determine whether your business is healthy
              or slowly bleeding out. Most gym owners run their entire financial
              strategy on a single number: total monthly revenue. That number
              hides more than it reveals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                question: "What is your MRR right now?",
                detail:
                  "Not last month. Right now. If three members cancelled yesterday and two upgraded, do you know your current monthly recurring revenue without opening a spreadsheet? Most owners cannot answer this within $5,000 of the actual number.",
              },
              {
                icon: PieChart,
                question: "Which classes are actually profitable?",
                detail:
                  "Your Tuesday evening HIIT class might fill 30 spots, but once you factor in instructor cost, equipment wear, and the opportunity cost of that room, is it generating margin or just generating activity? Without per-class P&L data, you are guessing.",
              },
              {
                icon: CreditCard,
                question:
                  "How much revenue are you losing to failed payments?",
                detail:
                  "The average gym loses 4 to 8 percent of monthly recurring revenue to declined cards, expired payment methods, and insufficient funds. Over a year, a 400-member gym can silently lose $18,000 or more to failed payments that nobody follows up on.",
              },
              {
                icon: TrendingDown,
                question: "What is your churn rate costing you monthly?",
                detail:
                  "If your monthly churn rate is 6% and your average member lifetime value is $2,400, you are losing $14,400 in future revenue every single month. Knowing the churn number is step one. Knowing the dollar cost of that churn is where real decisions start.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pure-white mb-2">
                      {item.question}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. REAL-TIME MRR TRACKING                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                MRR Dashboard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-6">
                Real-Time MRR Tracking
              </h2>
              <p className="text-soft-white leading-relaxed mb-4">
                Your monthly recurring revenue is calculated live, not at the end
                of the month when it is too late to act. The GymWyse MRR dashboard
                breaks your recurring revenue into four components: new MRR from
                first-time sign-ups, expansion MRR from upgrades and add-on
                purchases, contraction MRR from membership downgrades, and churned
                MRR from cancellations. You see the net waterfall update in real
                time as each transaction processes.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                Daily, weekly, and monthly trend lines are overlaid against
                previous periods so you can spot momentum shifts before they
                become problems. MRR is broken down by source: memberships,
                personal training packages, class passes, and retail
                subscriptions each get their own line, so you know exactly where
                growth is coming from and where it is stalling.
              </p>
              <p className="text-cool-gray text-sm leading-relaxed">
                Growth rate calculations compare your month-over-month and
                quarter-over-quarter performance against industry benchmarks for
                your gym size and type. Configurable alerts notify you when MRR
                growth dips below a threshold you set, when churn rate exceeds
                your target, or when a single day produces an unusual spike in
                cancellations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Mini dashboard visual */}
              <div className="glass-card p-6 space-y-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-pure-white">
                    MRR Overview
                  </h3>
                  <span className="text-xs text-dim-gray font-mono">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard
                    label="Net MRR"
                    value="$68,400"
                    change="+4.2%"
                    positive
                  />
                  <MetricCard
                    label="New MRR"
                    value="$8,320"
                    change="+12 members"
                    positive
                  />
                  <MetricCard
                    label="Churned MRR"
                    value="$2,140"
                    change="-6 members"
                    positive={false}
                  />
                  <MetricCard
                    label="Avg LTV"
                    value="$2,860"
                    change="+$140"
                    positive
                  />
                </div>
                <RevenueChartSVG />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CHURN RATE CALCULATION                                    */}
      {/* ============================================================ */}
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
                Churn Intelligence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
                Churn Rate Calculation That Goes Beyond a Percentage
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10 mb-8">
              <p className="text-soft-white leading-relaxed mb-4">
                GymWyse automatically calculates your monthly churn rate by
                tracking every cancellation, freeze, and lapsed membership
                against your active member base. But a raw churn percentage only
                tells part of the story. The churn analytics module breaks it
                down by membership type, showing you whether your premium
                all-access members churn at the same rate as your basic
                gym-only subscribers. It also segments churn by member tenure,
                revealing whether you have a first-90-days retention problem or
                a long-term engagement issue.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                The cost-of-churn calculator translates percentages into dollars.
                It multiplies members lost by their average remaining lifetime
                value to show you the actual revenue impact of each month&apos;s
                churn. If you lose 18 members in a month and their average
                remaining LTV is $1,600, that is $28,800 in future revenue
                walking out the door. Seeing that number changes the way you
                invest in retention.
              </p>
              <p className="text-cool-gray text-sm leading-relaxed">
                Churn trend analysis shows your rolling three-month, six-month,
                and twelve-month churn rates so you can distinguish between
                seasonal fluctuations and structural problems. Members flagged
                as high churn risk by the predictive model appear in a dedicated
                retention dashboard where you can trigger automated outreach
                sequences or assign them to a staff member for personal
                follow-up.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Avg Monthly Churn",
                  value: "5.2%",
                  sub: "Industry avg: 6.8%",
                },
                {
                  label: "Cost of Churn",
                  value: "$12,480",
                  sub: "Lost LTV this month",
                },
                {
                  label: "At-Risk Members",
                  value: "23",
                  sub: "Flagged for outreach",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold font-mono text-electric-green mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-pure-white">
                    {stat.label}
                  </p>
                  <p className="text-xs text-dim-gray mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. REVENUE BY STREAM                                         */}
      {/* ============================================================ */}
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
                Revenue Breakdown
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
                Revenue by Stream with Per-Service Profitability
              </h2>
              <p className="text-soft-white leading-relaxed max-w-2xl mx-auto">
                Stop treating revenue as a single number. GymWyse breaks down
                every dollar into its source so you can see which services are
                carrying the business and which ones are costing you more than
                they bring in.
              </p>
            </div>

            <div className="glass-card p-8 md:p-10 mb-8">
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                Monthly Revenue Breakdown
              </h3>
              <div className="space-y-4">
                {revenueStreams.map((stream, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-cool-gray w-48 shrink-0">
                      {stream.name}
                    </span>
                    <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-electric-green/80 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stream.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-pure-white font-mono font-medium w-20 text-right">
                      {stream.amount}
                    </span>
                    <span className="text-xs text-dim-gray w-10 text-right">
                      {stream.pct}%
                    </span>
                    <span className="text-xs text-electric-green w-16 text-right">
                      {stream.margin} margin
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-soft-white leading-relaxed text-center max-w-3xl mx-auto">
              Each revenue stream includes a per-service profitability
              calculation that subtracts direct costs such as instructor
              salaries, equipment depreciation, product cost of goods sold, and
              allocated overhead from revenue. Memberships might generate the
              most gross revenue, but personal training and recovery services
              often deliver higher profit margins per dollar earned. The
              breakdown helps you decide where to invest in growth, where to
              raise prices, and where to cut services that are not pulling
              their weight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FAILED PAYMENT RECOVERY                                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Payment Recovery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-6">
                Failed Payment Recovery That Works While You Sleep
              </h2>
              <p className="text-soft-white leading-relaxed mb-4">
                Expired cards, insufficient funds, processor declines. Failed
                payments are the largest source of involuntary churn in the gym
                industry, and most platforms handle them with a single retry and
                a shrug. GymWyse takes a different approach. The smart retry
                engine analyses historical payment data across thousands of
                transactions to determine the optimal retry window for each
                payment processor and card type. The system achieves a 40%
                automatic recovery rate on initially failed payments.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                When smart retries are not enough, automated dunning sequences
                take over. The member receives a branded email explaining the
                issue with a one-click link to update their payment method. If
                no action is taken within 48 hours, a follow-up SMS is sent. An
                in-app notification appears the next time they open the GymWyse
                member app. The payment method update happens through a
                self-service portal, the overdue payment processes
                automatically, and your staff never had to pick up the phone.
              </p>
              <p className="text-cool-gray text-sm leading-relaxed">
                For a 500-member gym, the average monthly recovery is $1,267 in
                payments that would otherwise have been written off as lost
                revenue. Over a year, that adds up to more than $15,000
                recovered without a single manual follow-up.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  icon: Zap,
                  label: "Smart Retry Engine",
                  detail: "Processor-specific timing for maximum recovery",
                },
                {
                  icon: AlertTriangle,
                  label: "Email Dunning",
                  detail: "Branded emails with one-click payment update link",
                },
                {
                  icon: Shield,
                  label: "SMS Follow-Up",
                  detail: "48-hour escalation to SMS if email is not actioned",
                },
                {
                  icon: CheckCircle,
                  label: "Self-Service Portal",
                  detail: "Member updates card, payment processes automatically",
                },
              ].map((step, i) => (
                <div key={i} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {step.label}
                    </p>
                    <p className="text-xs text-cool-gray">{step.detail}</p>
                  </div>
                </div>
              ))}
              <div className="glass-card p-5 text-center">
                <p className="text-xs text-dim-gray mb-1">
                  Avg Recovery (500 members)
                </p>
                <p className="text-3xl font-bold font-mono text-electric-green">
                  $1,267
                  <span className="text-sm text-dim-gray font-normal">
                    /month
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PROFIT MARGIN ANALYSIS                                    */}
      {/* ============================================================ */}
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
                Profit Analysis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
                Profit Margin Analysis Down to the Time Slot
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10 mb-8">
              <p className="text-soft-white leading-relaxed mb-4">
                Revenue tells you how much came in. Profit margin analysis tells
                you how much you actually kept. GymWyse provides per-class
                profit-and-loss calculations that factor in instructor
                compensation, room and equipment allocation, energy costs, and
                cleaning overhead. You see the true margin for every class on
                your timetable, not just the revenue it generated.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                Per-service margin tracking extends beyond classes to cover
                personal training, retail, recovery services, and any custom
                revenue stream you define. Overhead allocation can be
                distributed evenly, by square footage, or by utilisation hours
                so the numbers reflect reality at your specific facility.
                Instructor cost versus revenue analysis shows you which trainers
                generate the highest margin relative to their compensation, and
                which ones cost more than they bring in.
              </p>
              <p className="text-cool-gray text-sm leading-relaxed">
                Time-slot profitability analysis compares morning, afternoon,
                evening, and weekend sessions so you can optimise your schedule
                around when your gym actually makes money. If your 6 AM boot
                camp fills 35 spots at $15 each but your 7 PM yoga fills 12
                spots at $20 each, the per-slot margin tells you which one
                deserves more investment and which one might be better replaced.
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { slot: "Morning", margin: "62%", trend: "up" },
                { slot: "Afternoon", margin: "41%", trend: "down" },
                { slot: "Evening", margin: "58%", trend: "up" },
                { slot: "Weekend", margin: "71%", trend: "up" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs text-dim-gray mb-1">{s.slot}</p>
                  <p className="text-2xl font-bold font-mono text-pure-white">
                    {s.margin}
                  </p>
                  <p
                    className={`text-xs font-medium flex items-center justify-center gap-1 mt-1 ${
                      s.trend === "up" ? "text-electric-green" : "text-red-400"
                    }`}
                  >
                    {s.trend === "up" ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {s.trend === "up" ? "Trending up" : "Trending down"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. REVENUE FORECASTING                                       */}
      {/* ============================================================ */}
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
                Forecasting
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-4">
                Revenue Forecasting You Can Actually Trust
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10 mb-8">
              <p className="text-soft-white leading-relaxed mb-4">
                GymWyse generates 90-day revenue projections based on your
                current growth rate, churn rate, and historical seasonality
                patterns. The forecast model uses your actual data, not
                industry averages, so the projections reflect the specific
                dynamics of your gym. If your January sign-up rate is
                historically 40% higher than July, the model accounts for that
                swing and adjusts accordingly.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                Churn-adjusted forecasts show you the difference between gross
                projected revenue and the net number after expected
                cancellations. This is the figure you should use for budgeting,
                hiring, and equipment investment decisions. If your gross
                projection says $75,000 but churn-adjusted projection says
                $68,000, that $7,000 gap is what you need to close through
                retention efforts.
              </p>
              <p className="text-cool-gray text-sm leading-relaxed">
                The what-if scenario modelling tool lets you adjust input
                variables and see how they affect your 90-day projection. What
                happens to revenue if you increase membership prices by 8%? What
                if churn drops by 1.5 percentage points? What if you add a
                second location? Plug in the numbers and see the projected
                impact before making any commitments. Scenario results can be
                saved and compared side by side.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  label: "30-Day Projection",
                  value: "$71,200",
                  sub: "Based on current trends",
                },
                {
                  icon: Calendar,
                  label: "60-Day Projection",
                  value: "$74,800",
                  sub: "Seasonality adjusted",
                },
                {
                  icon: Target,
                  label: "90-Day Projection",
                  value: "$78,400",
                  sub: "Churn-adjusted net",
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
                  <p className="text-2xl font-bold font-mono text-pure-white mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm font-medium text-pure-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-dim-gray mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CASE STUDY                                                */}
      {/* ============================================================ */}
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
                Summit Fitness, Denver CO
              </h2>
              <p className="text-dim-gray mt-2">380 members | Opened 2019</p>
            </div>

            <div className="glass-card p-8 md:p-10">
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                The Problem
              </h3>
              <p className="text-soft-white leading-relaxed mb-6">
                Summit Fitness owner Laura Chen was running her 380-member gym
                on a patchwork of spreadsheets and a basic payment processor.
                She knew her total monthly revenue but had no visibility into
                which revenue streams were profitable and which were subsidised
                by other services. Failed payments were being manually tracked
                on a whiteboard at the front desk, and the staff followed up
                when they remembered. Laura estimated she was losing at least
                $2,000 per month to declined payments, but the actual number
                turned out to be significantly higher.
              </p>

              <h3 className="text-lg font-semibold text-pure-white mb-4">
                The Solution
              </h3>
              <p className="text-soft-white leading-relaxed mb-6">
                Within the first two weeks of switching to GymWyse, the
                real-time MRR dashboard revealed that three class time slots
                were running at a net loss once instructor costs were factored
                in: a Tuesday 2 PM Pilates session averaging 4 attendees, a
                Wednesday 3 PM strength class averaging 6 attendees, and a
                Friday 11 AM yoga session averaging 5 attendees. Laura
                cancelled all three and redirected members to better-attended
                sessions, saving $1,800 per month in instructor costs. The
                automated payment recovery system identified $2,340 in monthly
                failed payments and recovered $1,450 of that through smart
                retries and dunning sequences.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    label: "Instructor Savings",
                    value: "$1,800",
                    detail: "/month from cut classes",
                  },
                  {
                    label: "Payment Recovery",
                    value: "$1,450",
                    detail: "/month automated",
                  },
                  {
                    label: "Total Impact",
                    value: "+$3,250",
                    detail: "/month additional revenue",
                  },
                  {
                    label: "Annual Impact",
                    value: "+$39,000",
                    detail: "projected yearly gain",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-2xl font-bold font-mono text-electric-green mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-pure-white">
                      {stat.label}
                    </p>
                    <p className="text-xs text-dim-gray mt-1">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-electric-green pl-6">
                <p className="text-soft-white leading-relaxed italic">
                  &ldquo;I thought I knew my numbers. Turns out I was flying
                  blind. GymWyse showed me I was paying three instructors to
                  teach classes that were losing money every single week. The
                  failed payment recovery alone covers the cost of the software
                  ten times over. I wish I had switched two years ago.&rdquo;
                </p>
                <p className="text-sm text-electric-green mt-3 font-medium">
                  Laura Chen, Owner, Summit Fitness
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. COMPARISON vs MINDBODY                                   */}
      {/* ============================================================ */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
                GymWyse vs Mindbody: Revenue Analytics Compared
              </h2>
              <p className="text-soft-white leading-relaxed max-w-2xl mx-auto">
                Mindbody offers basic monthly revenue reports and transaction
                logs. GymWyse delivers real-time revenue intelligence with
                per-service profit-and-loss analysis, churn prediction, and
                automated payment recovery. Here is a direct feature comparison
                so you can see exactly where the platforms differ on financial
                analytics capabilities.
              </p>
            </div>

            <div className="glass-card overflow-hidden">
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
                              <CheckCircle className="w-5 h-5 text-electric-green mx-auto" />
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
                              <CheckCircle className="w-5 h-5 text-cool-gray mx-auto" />
                            ) : (
                              <span className="text-dim-gray">--</span>
                            )
                          ) : (
                            <span className="text-sm text-dim-gray">
                              {row.mindbody}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center mt-6">
              <Link
                href="/vs/mindbody"
                className="text-sapphire-blue text-sm hover:underline"
              >
                Read the full GymWyse vs Mindbody comparison{" "}
                <ArrowRight className="inline w-3.5 h-3.5" />
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. GYM OPERATIONS BASICS                                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Complete Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mt-3 mb-6">
              Revenue Analytics Built on Complete Gym Operations
            </h2>
            <p className="text-soft-white leading-relaxed mb-4 max-w-3xl mx-auto">
              Revenue analytics does not exist in a vacuum. GymWyse revenue
              tracking sits on top of a complete gym management platform that
              handles every operational layer of your business. Member check-ins,
              class scheduling, recurring billing, staff management, and
              automated communications are all built into the same system that
              powers your financial dashboards. That means every check-in, every
              booking, and every transaction feeds directly into your revenue
              data without manual entry, CSV imports, or third-party
              integrations.
            </p>
            <p className="text-cool-gray text-sm leading-relaxed max-w-3xl mx-auto">
              When a member checks in, books a PT session, or buys a protein
              shake, that activity flows into your revenue analytics in real
              time. One platform, one source of truth, zero data silos.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { label: "Check-Ins", icon: Users },
                { label: "Scheduling", icon: Calendar },
                { label: "Billing", icon: CreditCard },
                { label: "Staff Management", icon: Shield },
                { label: "Member App", icon: Clock },
              ].map((op, i) => (
                <div
                  key={i}
                  className="glass-card px-4 py-2.5 flex items-center gap-2"
                >
                  <op.icon className="w-4 h-4 text-electric-green" />
                  <span className="text-sm text-pure-white">{op.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/platform/member-app"
                className="text-sapphire-blue text-sm hover:underline"
              >
                Explore the member app{" "}
                <ArrowRight className="inline w-3.5 h-3.5" />
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. TESTIMONIALS                                             */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              What Gym Owners Say About Revenue Analytics
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-cool-gray leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-dim-gray">
                    {t.title} &middot; {t.location}
                  </p>
                  <p className="text-xs text-electric-green font-medium mt-2">
                    {t.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. FAQ                                                      */}
      {/* ============================================================ */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-soft-white leading-relaxed">
              Common questions about GymWyse revenue analytics and how they
              work for your gym.
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
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openFaq === i ? "text-electric-green" : "text-dim-gray"
                      }`}
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-cool-gray leading-relaxed">
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

      {/* ============================================================ */}
      {/* 14. PRICING MENTION                                          */}
      {/* ============================================================ */}
      <section className="py-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-10 h-10 text-electric-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-pure-white mb-3">
              Revenue Analytics Included in All Plans
            </h3>
            <p className="text-soft-white leading-relaxed mb-4">
              Revenue analytics is not a paid add-on. Every GymWyse plan,
              starting at $99 per month, includes the full MRR dashboard, churn
              tracking, revenue-by-stream breakdowns, failed payment recovery
              automation, and financial report exports. No hidden fees, no
              feature gating, no surprise charges. Higher-tier plans add
              advanced features like AI churn prediction, what-if scenario
              modelling, and multi-location roll-up reporting.
            </p>
            <Link href="/pricing">
              <Button variant="secondary" size="md">
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. FINAL CTA                                                */}
      {/* ============================================================ */}
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
              Ready to See Your Revenue Clearly?
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a 20-minute demo and we will walk you through the revenue
              analytics dashboard using your own data. Or use the ROI calculator
              to see how much revenue you could recover and how much you could
              save by identifying unprofitable services. No credit card
              required. No contract. Cancel any time.
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
              Or explore{" "}
              <Link
                href="/solutions/revenue-tracking"
                className="text-sapphire-blue hover:underline"
              >
                revenue tracking solutions
              </Link>{" "}
              and{" "}
              <Link
                href="/pricing"
                className="text-sapphire-blue hover:underline"
              >
                pricing plans
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
