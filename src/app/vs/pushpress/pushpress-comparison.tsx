"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Users,
  BarChart3,
  Smartphone,
  CreditCard,
  Building2,
  Headphones,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Monthly Pricing", gymwyse: "$99/mo flat, all features", competitor: "Free (limited) / $159 Pro / $249 Max" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$0" },
  { label: "Contract Length", gymwyse: "Month-to-month", competitor: "Month-to-month" },
  { label: "Revenue Analytics", gymwyse: "Full MRR suite with forecasting", competitor: "Basic on Pro, limited on Max" },
  { label: "AI Churn Prediction", gymwyse: "30-day early warning system", competitor: "Not available on any tier" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified cross-location view", competitor: "Max tier only ($249/mo)" },
  { label: "Failed Payment Recovery", gymwyse: "AI-optimized smart recovery", competitor: "Pro+ only, standard retry" },
  { label: "Member Mobile App", gymwyse: "Included with AI coaching", competitor: "Included on all tiers" },
  { label: "Retail Analytics", gymwyse: "Full POS with shrinkage detection", competitor: "Basic POS, no analytics" },
  { label: "Customer Support", gymwyse: "Email + live chat for all", competitor: "Tiered: email / priority / dedicated" },
];

const yearOneCosts = {
  pushpress: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 \u00D7 $159 Pro)", cost: "$1,908" },
    { item: "Member app", cost: "Included" },
    { item: "Advanced reporting (requires Max upgrade)", cost: "+$90/mo ($1,080/yr)" },
    { item: "Multi-location (requires Max upgrade)", cost: "+$90/mo ($1,080/yr)" },
    { item: "Year 1 Total (Pro tier, single location)", cost: "$1,908", highlight: true },
  ],
  gymwyse: [
    { item: "Setup fee", cost: "$0" },
    { item: "Monthly subscription (12 \u00D7 $99)", cost: "$1,188" },
    { item: "Member app with AI coaching", cost: "Included" },
    { item: "Advanced reporting and analytics", cost: "Included" },
    { item: "Multi-location dashboard", cost: "Included ($79/ea)" },
    { item: "Year 1 Total (single location)", cost: "$1,188", highlight: true },
  ],
};

const hiddenCosts = [
  {
    title: "The Tier Upgrade Trap: Free to $159 to $249",
    description:
      "PushPress Core (free) is attractive for brand-new gyms with fewer than 50 members, but it is severely limited: basic scheduling, no analytics, no automations, no payment recovery, and email-only support. Most gyms outgrow it within 3 to 6 months and upgrade to Pro at $159 per month. But Pro still lacks advanced analytics and multi-location features. To get those, you need Max at $249 per month. GymWyse charges a flat $99 per month with every feature included from day one. No tier upgrades, no feature gating, no surprise costs. Whether you have 30 members or 500 members, you get the same complete platform.",
  },
  {
    title: "Feature Gating Creates Constant Upgrade Pressure",
    description:
      "PushPress uses a tiered pricing model where critical features are locked behind higher-priced plans. Need automated payment recovery? That requires Pro at $159 per month. Need advanced reporting and multi-location management? That requires Max at $249 per month. This creates a constant drip of upgrade pressure as your gym grows and you discover you need features that are not included in your current tier. GymWyse eliminates this entirely. Every feature — analytics, churn prediction, payment recovery, retail tracking, multi-location dashboard, AI coaching — is included at $99 per month. You never hit a paywall for a feature you need.",
  },
  {
    title: "No AI Features on Any Tier at Any Price",
    description:
      "PushPress does not offer AI-powered churn prediction, engagement scoring, or AI coaching on any tier, including the Max plan at $249 per month. This means even at their highest price point, you cannot access the predictive analytics and automation capabilities that prevent member churn before it happens. For functional fitness gyms where losing one member often triggers a cascade of departures among training partners and friend groups, this is a critical gap. GymWyse includes AI churn prediction, engagement scoring, and AI Avatar coaches in the member app at $99 per month — $150 per month less than PushPress Max, with features PushPress cannot match at any price.",
  },
  {
    title: "Retail Analytics Gap Costs Real Revenue",
    description:
      "PushPress offers basic point-of-sale for retail transactions but no inventory analytics, shrinkage detection, or profit margin tracking per product category. The average functional fitness gym selling supplements, apparel, and equipment accessories loses 3 to 5 percent of retail revenue to shrinkage annually without detection tools. For a gym doing $7,000 per month in retail sales, that is $2,520 to $4,200 per year in invisible losses. GymWyse retail analytics track every product including cost, margin, shrinkage rate, and automated reorder points, making those hidden losses visible and recoverable.",
  },
];

const featureComparisons = [
  {
    title: "Revenue Analytics and Financial Intelligence",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with daily, weekly, and monthly growth trends calculated automatically for your gym",
      "Churn rate auto-calculated monthly with visual trend lines showing the direction over the past 12 months",
      "Profit margin analysis broken down by service line including memberships, personal training, classes, and retail sales",
      "Revenue forecasting engine with 6-month projections based on current growth rate, churn patterns, and seasonal trends",
      "Failed payment recovery tracking showing attempt count, success rate per method, and total revenue recovered per cycle",
      "One-click profit and loss export formatted for your accountant with all revenue streams and expense categories included",
    ],
    competitor: [
      "Basic revenue reports on Pro tier showing total collected revenue and active membership counts",
      "No MRR tracking or recurring revenue trend analysis available on Pro or Max tiers",
      "No churn rate calculation or historical churn trend data — you discover churn through manual counting",
      "No profit margin analysis by service — revenue from all sources is combined into aggregate totals",
      "CSV export available — you must build your own analytics dashboards in Excel or Google Sheets",
    ],
    winner: "GymWyse",
    impact:
      "PushPress Pro gives you basic revenue numbers but no intelligence layer. To access better reporting features, you need the Max tier at $249 per month — and even then, there is no MRR tracking, churn rate calculation, or profit margin analysis. GymWyse provides all of this at $99 per month, giving you enterprise-grade financial intelligence at less than half the cost of PushPress Max.",
  },
  {
    title: "AI-Powered Churn Prevention System",
    icon: Users,
    gymwyse: [
      "Machine learning model predicts member churn 30 days before cancellation with 85 percent accuracy",
      "Automatically flags at-risk members based on declining attendance frequency, missed payments, and reduced class bookings",
      "Automated win-back campaign system triggers personalized email and SMS sequences when risk score exceeds threshold",
      "Engagement scoring per member with weekly trend tracking showing whether each person is becoming more or less active",
    ],
    competitor: [
      "No churn prediction capability available on any tier including Core, Pro, and Max plans",
      "No at-risk member identification or early warning system for declining member engagement",
      "Manual outreach only — you discover members are leaving when the cancellation notification arrives in your inbox",
      "No engagement scoring, no member health metrics, no attendance trend analysis on any plan",
    ],
    winner: "GymWyse",
    impact:
      "For a 340-member functional fitness gym: GymWyse catches 4 at-risk members per month that PushPress misses on any tier. At $130 per month per member, that is $520 per month or $6,240 per year in saved revenue. In functional fitness environments where members train in groups and losing one often triggers a cascade of departures, early churn detection is the most valuable feature a gym management platform can offer.",
  },
  {
    title: "Retail Point-of-Sale and Inventory Analytics",
    icon: ShoppingCart,
    gymwyse: [
      "Full retail POS integrated into the gym management platform with barcode scanning and quick-sale shortcuts",
      "Shrinkage detection with automated variance alerts when physical inventory does not match recorded sales",
      "Profit margin tracking per product category showing which items generate the most revenue relative to cost",
      "Automated reorder notifications triggered when stock levels fall below configurable minimum thresholds",
    ],
    competitor: [
      "Basic POS for processing retail sales transactions with simple product catalog management",
      "No shrinkage or inventory variance detection — losses from theft, miscounts, and expiry go unnoticed",
      "No product-level profit margin analysis or category performance comparison available",
      "Manual inventory management requiring staff to physically count and update stock levels periodically",
    ],
    winner: "GymWyse",
    impact:
      "The average functional fitness gym loses 3 to 5 percent of retail revenue to shrinkage from theft, miscounts, and expired products. For a gym doing $7,000 per month in retail sales, GymWyse shrinkage detection recovers $2,520 to $4,200 per year in revenue that PushPress lets disappear. Automated reorder alerts prevent stock-outs that frustrate members and cost sales.",
  },
  {
    title: "Member Mobile App and Digital Experience",
    icon: Smartphone,
    gymwyse: [
      "Full-featured member app included at no extra cost with iOS and Android support and modern interface design",
      "Six AI Avatar coaches with distinct personalities that provide personalized motivation and workout guidance",
      "Wearable device sync with Apple Health, WHOOP, Garmin, and Fitbit for automatic activity and recovery tracking",
      "Built-in workout tracking with progress photos, personal records, body measurements, and benchmark history",
      "Community challenges and gamification features including leaderboards, achievement badges, and streak tracking",
    ],
    competitor: [
      "Member app included on all tiers with class booking, check-in, and basic account management features",
      "Basic workout logging functionality available for members to record their training sessions",
      "No AI coaching, no personalized guidance, no motivational features beyond standard push notifications",
      "No wearable device integration — members cannot sync Apple Health, WHOOP, or Garmin data automatically",
      "No gamification features, no community challenges, no leaderboards beyond basic workout tracking",
    ],
    winner: "GymWyse",
    impact:
      "Both platforms include a member app, but GymWyse adds AI coaching, wearable sync, and gamification that drive 40 percent higher engagement rates. Members who engage with AI Avatar coaches show 45 percent lower churn than those who do not. For functional fitness gyms where community and accountability drive retention, the app experience is a critical differentiator that directly impacts monthly recurring revenue.",
  },
  {
    title: "Pricing Transparency and Value Per Dollar",
    icon: CreditCard,
    gymwyse: [
      "One plan at $99 per month with every feature included regardless of gym size or member count",
      "No feature gating behind higher tiers — analytics, churn prediction, payment recovery all included from day one",
      "Volume pricing for multi-location gyms at $79 per additional location for two to five sites",
      "Month-to-month billing with 30 days notice to cancel and no penalties or remaining balance obligations",
    ],
    competitor: [
      "Free Core tier is very limited — basic scheduling only, no analytics, no automations, email-only support",
      "Pro tier at $159 per month unlocks most features but lacks advanced analytics and multi-location tools",
      "Max tier at $249 per month required for advanced features, still missing AI capabilities entirely",
      "Feature-gated tiers create constant upgrade pressure as your gym grows and needs become more sophisticated",
    ],
    winner: "GymWyse",
    impact:
      "PushPress Core gets you started for free, but growing gyms quickly need Pro at $159 per month or Max at $249 per month. GymWyse includes everything for $99 per month — analytics, churn prediction, payment recovery, retail tracking, AI coaching. That means GymWyse at $99 delivers more than PushPress Max at $249, saving you $150 per month while providing features PushPress does not offer at any price point on any tier.",
  },
  {
    title: "Multi-Location Management and Portfolio Analytics",
    icon: Building2,
    gymwyse: [
      "Single login with all locations visible on one unified dashboard showing total MRR, member count, and churn rate",
      "Cross-location analytics comparing revenue per member, class fill rates, churn, and retention between sites",
      "Unified member database allowing members to train at any location with a single account and payment method",
      "Volume pricing at $79 per additional location for two to five locations, dropping to $59 for six or more sites",
    ],
    competitor: [
      "Multi-location management available only on Max tier at $249 per month, not accessible on Core or Pro",
      "Limited cross-location comparison tools even on Max — no side-by-side performance benchmarking",
      "Separate operational views per location requiring manual consolidation for portfolio-level insights",
      "No volume discount for additional locations — each site requires its own Max-tier subscription",
    ],
    winner: "GymWyse",
    impact:
      "A 3-location functional fitness operation on PushPress Max pays $747 per month ($249 times 3) with limited cross-location analytics. On GymWyse: $257 per month ($99 plus $79 plus $79) with a full portfolio dashboard. That is $490 per month or $5,880 per year saved — with better analytics that help you identify which location needs attention and where to allocate marketing spend.",
  },
  {
    title: "Automated Payment Recovery and Billing Intelligence",
    icon: DollarSign,
    gymwyse: [
      "AI-optimized retry engine that analyzes the best times to reattempt failed payments based on historical success data",
      "Automated dunning sequences with customizable email and SMS templates sent at configurable intervals and escalation",
      "Recovery rate dashboard showing attempts, successes, and total revenue recovered per billing cycle with trend tracking",
      "Card expiry pre-notification system that alerts members 14 days before their payment method expires",
    ],
    competitor: [
      "Payment recovery available on Pro tier and above — not included in the free Core plan",
      "Standard retry schedules on fixed intervals without optimization based on historical payment patterns",
      "No recovery rate analytics showing how much revenue is lost versus recovered through the retry process",
      "No proactive card expiry notifications to prevent payment failures before they occur",
    ],
    winner: "GymWyse",
    impact:
      "The average gym loses 3 to 5 percent of monthly revenue to failed payments. GymWyse AI-powered recovery recaptures 60 to 70 percent of failed payments automatically by optimizing retry timing. For a 340-member gym at $130 per member, that is $1,593 to $2,655 per year in recovered revenue. PushPress standard retry recovers approximately 40 percent on fixed schedules — that 20 to 30 percent difference in recovery rate translates directly to your bottom line.",
  },
  {
    title: "Scalability for Growing Gyms",
    icon: TrendingUp,
    gymwyse: [
      "Flat $99 per month regardless of member count — your software cost never increases as your gym grows",
      "All features available from day one so you never need to upgrade tiers as your needs become more sophisticated",
      "Multi-location support built into the base plan with volume pricing for expansion",
      "Enterprise-grade analytics and AI features available to gyms of all sizes without enterprise pricing",
    ],
    competitor: [
      "Free tier works for very small gyms under 50 members with basic needs only",
      "Pro tier at $159 per month needed once you outgrow Core but still lacks many advanced features",
      "Max tier at $249 per month required for full feature access as your gym matures and scales",
      "Cost escalates from $0 to $249 per month as you grow, with each tier transition adding friction",
    ],
    winner: "GymWyse",
    impact:
      "PushPress pricing rewards you for being small and penalizes you for growing. At 30 members the free tier works. At 100 members you need Pro at $159. At 200+ members with multiple coaches and complex operations, you need Max at $249. GymWyse costs $99 at every stage — from startup to established multi-location operation. Your software investment stays predictable while your business scales without friction.",
  },
];

const switchReasons = [
  {
    title: "\"The Free Tier Got Us In, But We Outgrew It in 4 Months\"",
    problem:
      "PushPress Core is attractive for brand-new gyms because it is free. But it is severely limited: basic scheduling, no analytics, no automations, no payment recovery, and email-only support with longer response times. Most gyms outgrow the free tier within 3 to 6 months and face a jump to Pro at $159 per month. That is a significant cost jump for a gym that is still building its member base. And Pro still lacks advanced analytics, multi-location tools, and AI features. Many gym owners report feeling caught in a cycle of paying more while still not getting what they need, because the next tier (Max at $249 per month) still does not include AI capabilities.",
    solution:
      "GymWyse starts at $99 per month with every feature included from day one. No feature gating, no tier upgrades, no surprise costs as you grow. You get the same analytics, churn prediction, payment recovery, retail tracking, and AI coaching whether you have 50 members or 500. The flat pricing means your software budget is predictable and your per-member software cost decreases as you grow. For gyms coming from PushPress Core, GymWyse is the platform they wished they had started on — powerful enough for scale, priced fairly for startups.",
    caseStudy:
      "Summit Fitness in Denver started on PushPress Core and upgraded to Pro at $159 per month within 4 months when they needed payment recovery and better scheduling automation. They quickly realized Pro still did not have the analytics or churn prediction they needed. After evaluating Max at $249 per month and finding it still lacked AI features, they switched to GymWyse at $99 per month. They saved $60 per month compared to Pro and got features that PushPress does not offer at any tier, including churn prediction that identified 5 at-risk members in the first month.",
  },
  {
    title: "\"We Had No Idea We Were Losing $4,200 a Year in Retail Shrinkage\"",
    problem:
      "PushPress offers basic POS for retail sales but no inventory analytics or shrinkage detection. Functional fitness gyms selling supplements, apparel, protein bars, and equipment accessories had no way to track losses from theft, expired products, or inventory miscounts. Revenue from retail looked fine on the surface because total sales appeared healthy. But underneath, money was disappearing through expired protein powder that was never pulled from shelves, apparel miscounts during busy hours, and supplement samples that were never charged. Without detection tools, these losses compound silently month after month.",
    solution:
      "GymWyse retail analytics track every product with full cost, margin, shrinkage rate, and reorder point data. Variance alerts fire automatically when physical inventory counts do not match sales records. You see exactly where retail revenue is leaking and can fix it immediately. Automated reorder notifications prevent stock-outs for popular items, ensuring you never lose a sale because shelves are empty. Expiry tracking flags products approaching their sell-by date so staff can discount or remove them before they become a loss.",
    caseStudy:
      "Summit Fitness ran GymWyse retail analytics against their supplement and apparel inventory during the first month. They discovered $4,200 per year in shrinkage — mostly expired protein powder that sat on shelves past its date and apparel miscounts during busy Saturday mornings. Automated reorder alerts and expiry tracking eliminated 90 percent of the loss within the first quarter. The retail analytics alone saved more than the annual cost of the GymWyse subscription.",
  },
  {
    title: "\"Churn Was Our Biggest Problem and PushPress Couldn't Help at Any Price\"",
    problem:
      "PushPress has no churn prediction on any tier — not Core, not Pro, not Max. In functional fitness gyms where members train in groups and build deep social connections, losing one member often triggers a cascade. Their training partner stops showing up, then their friend, then the friend's spouse. By the time you notice the original cancellation, you have lost 2 to 3 members in a chain reaction. For a 340-member gym losing 4 preventable members per month, that is $520 per month or $6,240 per year in revenue that walks out the door without warning. PushPress offers no tools to detect, predict, or prevent this cascade before it starts.",
    solution:
      "GymWyse AI continuously monitors attendance patterns, payment behavior, class booking frequency, and engagement signals across every member. The system flags at-risk members 30 days before they are likely to cancel, giving coaches a meaningful window to intervene. It also tracks members who frequently train together, so when one partner starts disengaging, you can proactively reach out to both. Automated win-back campaigns handle the outreach at scale, while personal touch-point recommendations help coaches prioritize the members most likely to be saved through a direct conversation.",
    caseStudy:
      "Grit Athletics in Portland saw churn drop 22 percent in the first 3 months on GymWyse after switching from PushPress Pro. The AI system flagged 12 at-risk members that coaches would have missed completely. Through a combination of personal outreach and automated win-back campaigns, they saved 9 of the 12. At $130 per month per member, that is $1,170 per month in retained revenue. Two of the saved members were training partners who were both disengaging — the system caught the pattern before either cancelled.",
  },
  {
    title: "\"We Needed Enterprise Analytics Without Enterprise Pricing\"",
    problem:
      "Growing functional fitness gyms with 200 or more members need sophisticated analytics to manage revenue, track KPIs, and make data-driven decisions. PushPress Pro provides basic reporting, and even Max at $249 per month offers limited analytics without MRR dashboards, churn rate tracking, or revenue forecasting. For gym owners who want to run their business like a real business — with financial projections, unit economics per member, and profitability analysis per service line — PushPress leaves a significant gap that forces them to build manual spreadsheet systems alongside the platform.",
    solution:
      "GymWyse was built for gym owners who think like business operators. The analytics suite includes real-time MRR with growth trends, churn rate tracking with 12-month history, profit margin analysis by service line, revenue forecasting with 6-month projections, and one-click P&L exports. All of this is available at $99 per month — $150 less than PushPress Max, with analytics capabilities that PushPress does not offer at any price. For owners who previously spent Sunday evenings building spreadsheet dashboards to understand their business, GymWyse eliminates that manual work entirely.",
    caseStudy:
      "IronClad in Houston was spending 4 to 5 hours per week building financial reports in Google Sheets because PushPress Pro did not offer the analytics they needed. After switching to GymWyse, the owner reclaimed those hours and discovered insights the spreadsheets had missed: their 6 AM class had 15 percent higher retention than the 5 PM class, their nutrition coaching program had the highest profit margin of any service, and 3 members were at risk of cancelling despite attending regularly because they had reduced from 5 visits per week to 2.",
  },
];

const migrationSteps = [
  {
    step: "1",
    title: "Data Export from PushPress",
    duration: "Day 1-2",
    description:
      "PushPress provides data export capabilities that make the initial extraction process straightforward. We export your complete member database including contact information, membership plans, payment methods, attendance history, class schedules, workout logs, and retail product inventory. Our migration team handles the entire export process and validates every record for completeness and accuracy before moving to the import phase. If you are on PushPress Core, the export is simpler due to fewer data types. Pro and Max migrations include additional data layers.",
  },
  {
    step: "2",
    title: "Data Import and Gym Configuration",
    duration: "Day 3-7",
    description:
      "Your member data is imported into GymWyse with full validation and deduplication checks. We configure your membership plans, pricing tiers, class schedules, coach assignments, retail product catalog, and gym-specific settings. Payment methods are migrated to ensure continuous billing with no interruption to member accounts. WOD templates, benchmark data, and workout history are imported so members retain their training records. Retail inventory is cataloged with cost, margin, and reorder point data configured for immediate shrinkage tracking.",
  },
  {
    step: "3",
    title: "Staff Training and Parallel Testing",
    duration: "Day 8-12",
    description:
      "Your coaching and front desk staff receives hands-on training with GymWyse tailored to their daily workflow. Most gym staff pick up the system in 20 to 30 minutes because the interface is designed for fitness professionals running a gym, not accountants managing a ledger. We run PushPress and GymWyse in parallel for 3 to 5 days so your team can compare experiences and build confidence before the full switch. Members continue booking classes and checking in through PushPress during this period with zero disruption to their training routine.",
  },
  {
    step: "4",
    title: "Go-Live and Member Communication",
    duration: "Day 13-15",
    description:
      "We provide pre-written email and SMS announcement templates to notify your members about the app transition. The messaging emphasizes the upgrade: AI coaching, wearable device sync, workout tracking with progress photos, and community challenges. Members download the GymWyse app and immediately gain access to all features. Our support team monitors the first 72 hours post-launch to resolve any issues in real time. Most gyms report the transition is seamless with positive member feedback about the enhanced app experience, particularly the AI coaching and wearable integration features.",
  },
];

const testimonials = [
  {
    initials: "TM",
    gym: "Summit Fitness",
    location: "Denver, CO",
    members: 340,
    type: "Functional fitness and strength training",
    previousSoftware: "PushPress Pro",
    before:
      "Started on PushPress Core (free) and upgraded to Pro at $159 per month within 4 months. Basic reporting only with no churn visibility, no retail analytics, and no AI features. Supplement and apparel inventory was managed on a Google Sheet that was rarely updated. Staff had no idea they were losing $4,200 per year in retail shrinkage from expired products and inventory miscounts. Failed payments averaged $800 per month with standard retry only. Evaluated PushPress Max at $249 per month but found it still lacked AI features.",
    after:
      "GymWyse at $99 per month, everything included. Retail analytics immediately uncovered $4,200 per year in shrinkage and automated reorder alerts eliminated 90 percent of the loss. Monthly churn dropped 22 percent in the first quarter. AI churn prediction flagged 12 at-risk members in the first 3 months and coaches saved 9 through targeted outreach. Failed payment smart recovery captured an additional $520 per month automatically. The owner reclaimed 4 hours per week previously spent building manual spreadsheet reports.",
    metrics: [
      { label: "Monthly savings", value: "$60/mo" },
      { label: "Churn reduction", value: "22%" },
      { label: "Retail shrinkage found", value: "$4,200/yr" },
    ],
    quote:
      "PushPress was solid for basic gym management, but we were flying blind on analytics. GymWyse showed us things we never knew — $4,200 in retail shrinkage, 12 members about to leave, and which class times were actually profitable. The switch paid for itself in the first month. I stopped spending Sunday evenings in spreadsheets and started actually running my business with real data. The AI churn prediction caught a pair of training partners who were both about to quit — we saved both of them with one conversation.",
    author: "Tyler Morrison, Owner",
  },
  {
    initials: "KW",
    gym: "Grit Athletics",
    location: "Portland, OR",
    members: 410,
    type: "CrossFit and functional fitness, 2 locations",
    previousSoftware: "PushPress Pro",
    before:
      "Two locations on PushPress Pro at $159 per month each totaling $318 per month. Evaluated Max at $249 each ($498 per month total) for multi-location features but the cost was prohibitive for features that still lacked AI analytics. No unified dashboard meant the owner had to check each location separately and combine reports manually. Monthly churn was averaging 4.2 percent across both locations with zero visibility into which members were at risk. No retail analytics despite doing $8,000 per month in combined supplement and apparel sales across both gyms.",
    after:
      "GymWyse at $178 per month total for both locations ($99 plus $79). Unified dashboard immediately revealed the second location had 5.1 percent churn versus 3.3 percent at the original location — the evening class schedule at location 2 was misaligned with member demand. After schedule adjustment, overall churn dropped to 3.1 percent within 8 weeks. AI churn prediction flagged 8 at-risk members in the first month and coaches saved 6. Retail analytics uncovered $3,100 per year in shrinkage across both locations.",
    metrics: [
      { label: "Monthly savings", value: "$140/mo" },
      { label: "Churn reduction", value: "4.2% to 3.1%" },
      { label: "Retail shrinkage found", value: "$3,100/yr" },
    ],
    quote:
      "We were paying $318 per month for PushPress Pro across two locations and still had to build our own analytics in spreadsheets. GymWyse costs $178 for both locations and gave us a unified dashboard we never had. The very first week, we saw that our second location had dramatically higher churn because we scheduled evening classes at the wrong times. That insight alone saved us 8 members in the first month. The retail analytics found $3,100 in annual shrinkage we had no idea existed.",
    author: "Kate Williams, Co-Owner",
  },
  {
    initials: "DR",
    gym: "IronClad",
    location: "Houston, TX",
    members: 520,
    type: "Strength and conditioning with nutrition coaching",
    previousSoftware: "PushPress Pro",
    before:
      "Single location on PushPress Pro at $159 per month with 520 members. The owner was spending 4 to 5 hours per week building financial reports in Google Sheets because PushPress Pro did not provide MRR tracking, churn rate analysis, or profit margin breakdowns by service line. Nutrition coaching program had strong enrollment but profitability was unknown. Three members were at risk of cancelling despite regular attendance because their visit frequency had dropped from 5 times per week to 2 — a pattern invisible without engagement scoring. Failed payments averaged $1,400 per month with $600 recovered through standard retry.",
    after:
      "GymWyse at $99 per month, saving $60 per month immediately. Analytics dashboard revealed nutrition coaching was the highest-margin service at 72 percent profitability, leading to increased investment in the program. AI engagement scoring caught 3 members whose attendance had dropped despite still showing up — coaches reached out and discovered personal circumstances, offered schedule adjustments, and retained all 3. Failed payment smart recovery improved from $600 to $980 per month recovered. The owner eliminated 4 to 5 hours per week of manual reporting entirely.",
    metrics: [
      { label: "Monthly savings", value: "$60/mo" },
      { label: "Payments recovered", value: "+$380/mo" },
      { label: "Reporting time saved", value: "4-5 hrs/wk" },
    ],
    quote:
      "I was building spreadsheet dashboards every Sunday night because PushPress could not tell me what I needed to know about my own business. GymWyse eliminated that entirely. The analytics showed me that our nutrition coaching program was our highest-margin service — I had no idea. The engagement scoring caught members who were still attending but disengaging, which is something no basic attendance report would show. And the payment recovery improvement alone covers half the subscription cost. The switch was a no-brainer.",
    author: "Daniel Reyes, Founder",
  },
];

const gymOperationsBasics = [
  { feature: "Class scheduling and calendar management with coach assignments", included: true },
  { feature: "Online booking with waitlist and automatic capacity management", included: true },
  { feature: "Automated billing and payment processing with Stripe integration", included: true },
  { feature: "Member check-in via app, QR code, or front desk kiosk", included: true },
  { feature: "Staff management with role-based permissions and schedule visibility", included: true },
  { feature: "Email and SMS communication tools with template library and automation", included: true },
  { feature: "Attendance tracking with class fill rate and peak hour reporting", included: true },
  { feature: "Membership plan creation with trials, promos, and family pricing", included: true },
  { feature: "Prospect and lead management with conversion pipeline and follow-up automation", included: true },
  { feature: "Retail POS with inventory tracking, margin analysis, and shrinkage detection", included: true },
  { feature: "AI churn prediction and engagement scoring per member (advanced)", included: true },
  { feature: "Revenue forecasting with MRR dashboards and 6-month projections (advanced)", included: true },
  { feature: "Multi-location unified analytics with cross-site benchmarking (advanced)", included: true },
  { feature: "AI-optimized failed payment recovery with smart retry timing (advanced)", included: true },
  { feature: "AI Avatar coaching in member app with 6 distinct personalities (advanced)", included: true },
  { feature: "WOD programming with benchmark tracking and community leaderboards (advanced)", included: true },
];

const faqItems = [
  {
    question: "How long does the complete migration from PushPress to GymWyse take?",
    answer:
      "The full migration process takes approximately 2 weeks from start to finish, with zero downtime for your members. During the first week, we export your member data, payment methods, attendance history, workout logs, and class schedules from PushPress. The second week covers data import, gym configuration, staff training, and go-live. Members continue booking classes through PushPress during the entire migration period. Most coaching staff pick up GymWyse in under 30 minutes because the interface is designed for gym operators. If you are on PushPress Core with less data, migration can be completed in 7 to 10 days.",
  },
  {
    question: "PushPress is also month-to-month. Why should I switch?",
    answer:
      "Both platforms offer month-to-month billing, which is great for flexibility. The difference is what you get for the price. PushPress Pro at $159 per month lacks churn prediction, advanced analytics, retail shrinkage tracking, and AI coaching. GymWyse at $99 per month includes all of those features and more. You save $60 per month and get capabilities that PushPress does not offer at any tier, including the Max plan at $249 per month. The question is not whether you can leave — it is whether you are getting full value for what you pay today.",
  },
  {
    question: "What if I am currently on PushPress Core (free)?",
    answer:
      "PushPress Core works for very basic scheduling needs, but it lacks analytics, automations, payment recovery, retail tracking, and priority support. If your gym is growing and you are starting to feel the limitations, GymWyse at $99 per month gives you everything PushPress Max offers at $249 per month and significantly more, including AI churn prediction and retail analytics that PushPress does not have on any tier. The investment of $99 per month typically pays for itself through recovered revenue from churn prevention and payment recovery within the first 30 days.",
  },
  {
    question: "Does GymWyse support functional fitness and CrossFit programming?",
    answer:
      "Yes, GymWyse has comprehensive support for functional fitness and CrossFit operations. This includes WOD programming with template libraries and scaling options, performance logging for major benchmarks like Fran, Murph, and Fight Gone Bad, leaderboard systems with filtering by weight class and age group, and custom workout creation. On top of standard programming features, you get AI-powered analytics showing which class times have the highest retention rates, which WOD styles drive the most attendance, and which members are disengaging from specific class types or time slots.",
  },
  {
    question: "How does GymWyse compare to PushPress Max for analytics?",
    answer:
      "GymWyse at $99 per month provides significantly more analytical depth than PushPress Max at $249 per month. GymWyse includes real-time MRR tracking with growth trends, automatic churn rate calculation with 12-month history, profit margin analysis by service line, revenue forecasting with 6-month projections, AI-powered churn prediction, engagement scoring per member, and retail shrinkage detection. PushPress Max offers improved reporting over Pro but does not include MRR tracking, churn rate calculation, revenue forecasting, AI features, or retail analytics. You get more for $150 less per month.",
  },
  {
    question: "Will my members need to download a new app?",
    answer:
      "Yes, members will download the GymWyse member app available on iOS and Android. We provide pre-written announcement templates for email and SMS that you can customize with your gym branding. The messaging emphasizes the significant upgrade: AI coaching, wearable device sync, workout tracking with progress photos, and community challenges with gamification. Most members find the GymWyse app a substantial improvement over the PushPress member experience. In our experience, member feedback becomes overwhelmingly positive within the first week, particularly around the AI coaching and wearable integration features.",
  },
  {
    question: "What if GymWyse does not work out for my gym?",
    answer:
      "GymWyse is month-to-month, just like PushPress. You can cancel anytime with 30 days notice. No penalty, no remaining balance, no cancellation fee. Export your data and go back to PushPress or try something else. The flexibility is identical to what you have today. The difference is that GymWyse delivers AI-powered churn prediction, enterprise-grade analytics, and retail shrinkage detection for $60 less per month than PushPress Pro and $150 less than PushPress Max. We are confident the results will speak for themselves from the first month.",
  },
  {
    question: "Does GymWyse work for gyms that are still small and growing?",
    answer:
      "Absolutely. GymWyse is designed for gyms at every stage, from startup to multi-location operation. At $99 per month, it is accessible for new gyms that PushPress Core serves today. The difference is that instead of starting with a limited free tier and upgrading as you grow, you start with the complete platform. This means AI churn prediction is working from your first month, analytics are tracking from your first member, and payment recovery is optimized from your first billing cycle. You never hit a feature wall that forces an expensive tier upgrade at the worst possible time in your growth curve.",
  },
];

export function PushPressComparison() {
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
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Honest Comparison
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              GymWyse vs PushPress: Gym Management Software Comparison
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Choosing the right gym management software determines how
              effectively you can grow revenue, retain members, and scale
              operations. PushPress and GymWyse both serve functional fitness
              gyms, CrossFit boxes, and strength training facilities, but the
              differences in pricing structure, analytics depth, AI
              capabilities, and feature accessibility are substantial. This
              comprehensive comparison examines every critical factor so you
              can determine which platform delivers the most value for your
              gym, whether you are outgrowing the free tier or looking for a
              more capable alternative to PushPress Pro or Max.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Switch to GymWyse
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Comparison Table */}
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
              Quick Side-by-Side Comparison
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              A snapshot of the key differences between GymWyse and PushPress
              across pricing, features, and support. Every metric listed for
              GymWyse is included in the single $99 per month plan. PushPress
              features vary significantly depending on which tier you are
              comparing: Core (free), Pro ($159), or Max ($249).
            </p>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
              <div className="p-5 text-sm font-semibold text-dim-gray">
                Feature
              </div>
              <div className="p-5 text-sm font-semibold text-electric-green text-center">
                GymWyse
              </div>
              <div className="p-5 text-sm font-semibold text-dim-gray text-center">
                PushPress
              </div>
            </div>
            {quickMetrics.map((m, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-glass-border/50 last:border-0 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                }`}
              >
                <div className="p-4 text-sm text-pure-white font-medium">
                  {m.label}
                </div>
                <div className="p-4 text-sm text-electric-green text-center flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {m.gymwyse}
                </div>
                <div className="p-4 text-sm text-cool-gray text-center">
                  {m.competitor}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real Cost Comparison */}
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
              The Real Cost Comparison: Year 1 Total
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              PushPress Core is free but extremely limited. Most growing gyms
              need Pro at $159 per month, and gyms wanting advanced features
              need Max at $249 per month. Here is what Year 1 actually costs
              on PushPress Pro versus GymWyse for a single location gym that
              needs real analytics and operational tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
                PushPress Pro Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.pushpress.map((item, i) => (
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
                      className={`text-sm font-medium ${
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

            <motion.div
              className="glass-card p-8 border-electric-green/20 bg-electric-green/[0.03]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pure-white mb-6">
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
                      className={`text-sm font-medium ${
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
              You save in Year 1 (vs PushPress Pro):
            </div>
            <div className="text-4xl font-bold text-electric-green font-mono">
              $720
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from AI churn prevention,
              retail shrinkage detection, and optimized payment recovery
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden Costs */}
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
              Hidden Costs PushPress Does Not Tell You About
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The free tier looks great on paper, but the real cost of
              PushPress becomes apparent as your gym grows and you hit the
              feature walls built into their tiered pricing model.
            </p>
          </motion.div>

          <div className="space-y-6">
            {hiddenCosts.map((cost, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-alert-red/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white">
                    {cost.title}
                  </h3>
                </div>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {cost.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature-by-Feature Breakdown */}
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
              A detailed comparison across 8 critical feature categories.
              Each section includes specific capabilities, the winner, and
              the real-world financial impact for your gym operations.
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
                    Winner: {feature.winner}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-electric-green uppercase tracking-wider mb-4">
                      GymWyse
                    </h4>
                    <div className="space-y-2">
                      {feature.gymwyse.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-electric-green mt-0.5 shrink-0" />
                          <span className="text-sm text-cool-gray">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-alert-red uppercase tracking-wider mb-4">
                      PushPress
                    </h4>
                    <div className="space-y-2">
                      {feature.competitor.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-alert-red mt-0.5 shrink-0" />
                          <span className="text-sm text-cool-gray">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border">
                  <p className="text-sm text-soft-white italic">
                    {feature.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gyms Switch */}
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
              Why Gyms Switch from PushPress to GymWyse
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real stories from functional fitness gyms, CrossFit boxes, and
              strength training facilities that outgrew PushPress and found
              better value with GymWyse.
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
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  {reason.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-alert-red" />
                      <span className="text-xs text-alert-red uppercase font-medium tracking-wider">
                        The Problem
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {reason.problem}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-electric-green" />
                      <span className="text-xs text-electric-green uppercase font-medium tracking-wider">
                        The Solution
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {reason.solution}
                    </p>
                  </div>
                </div>
                {reason.caseStudy && (
                  <div className="bg-deep-space/60 rounded-lg p-4 border border-glass-border mt-4">
                    <p className="text-sm text-soft-white italic">
                      {reason.caseStudy}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
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
              Migration Process: Switching from PushPress in 2 Weeks
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              PushPress supports data export, making migration straightforward.
              Our dedicated migration team handles the entire process with zero
              downtime for your members. Both platforms are month-to-month, so
              there are no contract penalties to navigate. Here is exactly what
              happens at each stage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {migrationSteps.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-electric-green font-bold text-lg font-mono">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-pure-white">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium bg-sapphire-blue/20 text-sapphire-blue rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {step.description}
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/migration">
                <Button variant="secondary" size="lg">
                  See Full Migration Details
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Start Your Migration
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Former PushPress Users Say
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real results from gyms in Denver, Portland, and Houston that
              switched from PushPress to GymWyse. Each testimonial includes
              measurable outcomes and direct quotes from gym owners.
            </p>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-electric-green/10 flex items-center justify-center text-electric-green font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-pure-white">
                      {t.gym}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {t.location} &mdash; {t.type}, {t.members} members
                      &mdash; Previously on {t.previousSoftware}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs text-dim-gray uppercase mb-1">
                      Before
                    </div>
                    <p className="text-sm text-cool-gray">{t.before}</p>
                  </div>
                  <div>
                    <div className="text-xs text-electric-green uppercase mb-1">
                      After
                    </div>
                    <p className="text-sm text-soft-white">{t.after}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {t.metrics.map((r, j) => (
                    <div key={j} className="text-center py-2">
                      <div className="text-lg font-bold text-electric-green font-mono">
                        {r.value}
                      </div>
                      <div className="text-xs text-dim-gray">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 border-electric-green/30 pl-4">
                  <p className="text-sm text-soft-white italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="text-xs text-dim-gray mt-2">
                    &mdash; {t.author}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Operations Basics */}
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
              Every Gym Operations Essential, Plus Advanced Intelligence
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              GymWyse covers every fundamental gym management feature you
              expect from any platform, including scheduling, billing, member
              management, and communication tools. Unlike PushPress where
              advanced features require tier upgrades from $159 to $249 per
              month, GymWyse includes everything in the flat $99 per month
              plan. No feature gating, no tier upgrades, no surprise costs as
              your gym grows.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-3">
              {gymOperationsBasics.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <Check className="w-4 h-4 text-electric-green shrink-0" />
                  <span className="text-sm text-cool-gray">
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-midnight">
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
              switching from PushPress to GymWyse.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-card overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
              Ready to Switch from PushPress to GymWyse?
            </h2>
            <p className="text-base text-soft-white max-w-xl mx-auto">
              Join functional fitness gyms, CrossFit boxes, and strength
              training facilities nationwide that have outgrown PushPress and
              found better value with GymWyse. Get more features for less
              money from day one, AI-powered churn prediction from week one,
              and enterprise-grade analytics without enterprise pricing. Both
              platforms are month-to-month, so switching is zero risk. The
              migration takes 2 weeks with zero downtime, and your coaching
              staff will be up and running in under 30 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              14-day free trial. No credit card required. No contract. Cancel
              anytime with 30 days notice.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-6 text-xs text-cool-gray">
              <Link href="/pricing" className="hover:text-electric-green transition-colors">
                View Pricing
              </Link>
              <span>&bull;</span>
              <Link href="/migration" className="hover:text-electric-green transition-colors">
                Migration Guide
              </Link>
              <span>&bull;</span>
              <Link href="/roi-calculator" className="hover:text-electric-green transition-colors">
                ROI Calculator
              </Link>
              <span>&bull;</span>
              <Link href="/demo" className="hover:text-electric-green transition-colors">
                Book a Demo
              </Link>
            </div>
            <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-cool-gray">
              <span>Summit Fitness (Denver, CO)</span>
              <span>&bull;</span>
              <span>Grit Athletics (Portland, OR)</span>
              <span>&bull;</span>
              <span>IronClad (Houston, TX)</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
