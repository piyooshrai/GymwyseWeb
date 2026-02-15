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
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Monthly Pricing", gymwyse: "$99/mo flat (approx. \u00A379)", competitor: "\u00A3110-\u00A3220/mo (tiered by features)" },
  { label: "Setup Fee", gymwyse: "\u00A30", competitor: "\u00A3200+ onboarding fee" },
  { label: "Contract Length", gymwyse: "Month-to-month", competitor: "12-month minimum commitment" },
  { label: "Revenue Analytics", gymwyse: "Full MRR suite with forecasting", competitor: "Limited revenue reports" },
  { label: "AI Churn Prediction", gymwyse: "30-day early warning system", competitor: "Not available on any plan" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified cross-location view", competitor: "Basic overview, no benchmarking" },
  { label: "Failed Payment Recovery", gymwyse: "Automated smart recovery included", competitor: "Manual follow-up process" },
  { label: "Member Mobile App", gymwyse: "Included with AI coaching", competitor: "Included (branded app)" },
  { label: "Wearable Integration", gymwyse: "Apple Health, WHOOP, Garmin", competitor: "Not available" },
  { label: "US/UK/UAE Support", gymwyse: "Email + live chat, all regions", competitor: "UK-based team, limited US/UAE hours" },
];

const yearOneCosts = {
  glofox: [
    { item: "Onboarding and setup fee", cost: "\u00A3200" },
    { item: "Monthly subscription (12 \u00D7 \u00A3165 mid-tier)", cost: "\u00A31,980" },
    { item: "Additional location fees (per location)", cost: "\u00A3165/ea" },
    { item: "Premium support add-on", cost: "\u00A3360" },
    { item: "API access upgrade", cost: "\u00A3240" },
    { item: "Year 1 Total (single location)", cost: "\u00A32,780", highlight: true },
  ],
  gymwyse: [
    { item: "Onboarding and setup fee", cost: "\u00A30" },
    { item: "Monthly subscription (12 \u00D7 \u00A379)", cost: "\u00A3948" },
    { item: "Additional location fees (per location)", cost: "\u00A363/ea" },
    { item: "Premium support", cost: "Included" },
    { item: "Full API access", cost: "Included" },
    { item: "Year 1 Total (single location)", cost: "\u00A3948", highlight: true },
  ],
};

const hiddenCosts = [
  {
    title: "The 12-Month Contract Lock-In",
    description:
      "Glofox requires a 12-month minimum commitment on all paid plans. If your boutique studio discovers within the first 3 months that the platform lacks the analytics or multi-location tools you need, you are still obligated to pay for the remaining 9 months. For a studio on the mid-tier plan at \u00A3165 per month, that is \u00A31,485 in remaining payments you cannot escape. GymWyse operates entirely month-to-month with 30 days notice to cancel. You stay because the software delivers value, not because a contract compels you. This alignment of incentives means every feature improvement and support interaction is motivated by keeping you satisfied, not keeping you locked in.",
  },
  {
    title: "Setup Fees and Premium Support Charges",
    description:
      "Glofox charges a \u00A3200 onboarding fee to get started, plus \u00A330 per month for their premium support tier. That adds \u00A3560 to your first year costs on top of the subscription. If you need priority support for your multi-location operation, the cost increases further. GymWyse charges zero for onboarding and includes priority support for every customer regardless of plan size or location count. Your dedicated onboarding specialist is assigned from day one and stays with you through the full migration and go-live process at no additional cost.",
  },
  {
    title: "Multi-Location Pricing Without Volume Discounts",
    description:
      "Glofox charges full price per additional location with no meaningful volume discounts. A 3-location boutique studio in London pays approximately \u00A3495 per month (\u00A3165 times 3). There is no unified dashboard that lets you compare revenue, churn, and class attendance across locations side by side. You must pull reports from each location separately and combine them manually. GymWyse charges \u00A363 per additional location (locations 2 through 5) with a single unified dashboard. A 3-location studio pays \u00A3205 per month total with cross-location analytics built in, saving \u00A3290 per month or \u00A33,480 per year.",
  },
  {
    title: "Limited API Access on Lower Tiers",
    description:
      "Glofox restricts full API access to higher-tier plans or charges extra for it. For boutique studios that integrate with third-party marketing tools, accounting software, or custom booking widgets, this creates an unexpected cost that is not apparent during the initial sales conversation. GymWyse provides full REST API access with comprehensive documentation to every customer on every plan. Webhook support, Zapier integration, and native connections to Stripe, Mailchimp, and QuickBooks are all included at no extra cost, regardless of your subscription tier or location count.",
  },
];

const featureComparisons = [
  {
    title: "Revenue Analytics and Financial Intelligence",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with daily, weekly, and monthly growth trends calculated automatically across all locations",
      "Churn rate auto-calculated monthly with visual trend lines showing direction and velocity over the past 12 months",
      "Profit margin analysis broken down by service line including memberships, personal training, classes, and retail",
      "Revenue forecasting engine with 6-month projections based on current growth rate, churn patterns, and seasonal trends",
      "Failed payment recovery tracking showing attempt count, success rate, and total revenue recovered per billing cycle",
      "One-click profit and loss export formatted for your accountant with all revenue streams and expense categories included",
    ],
    competitor: [
      "Basic revenue reports showing total revenue collected and membership count totals per location",
      "No MRR tracking or recurring revenue trend analysis available in any report or dashboard",
      "No churn rate calculation or historical churn trend data accessible without manual spreadsheet work",
      "No profit margin analysis by service type — revenue is aggregated into total numbers only",
      "CSV export required for any advanced analysis — you build your own dashboards externally",
    ],
    winner: "GymWyse",
    impact:
      "Glofox provides basic revenue totals but no real-time financial intelligence. You cannot see MRR trends, churn rates, or profit margins without exporting data to spreadsheets and building reports manually. For studio owners managing multiple locations across London, Manchester, or Dubai, spending hours weekly on manual reporting is time that should be spent on growing the business.",
  },
  {
    title: "AI-Powered Churn Prevention System",
    icon: Users,
    gymwyse: [
      "Machine learning model predicts member churn 30 days before cancellation with 85 percent accuracy",
      "Automatically flags at-risk members based on declining attendance frequency, missed payments, and reduced bookings",
      "Automated win-back campaign system triggers personalized email and SMS sequences when member risk score exceeds threshold",
      "Engagement scoring per member with weekly trend tracking showing whether each person is becoming more or less active",
    ],
    competitor: [
      "No churn prediction capability available on any plan tier or as an add-on feature",
      "No at-risk member identification or early warning system for declining engagement",
      "Manual outreach only — staff discover members are leaving when the cancellation notification arrives",
      "No engagement scoring, no member health metrics, no attendance trend analysis available",
    ],
    winner: "GymWyse",
    impact:
      "For a 3-location boutique studio with 800 total members: GymWyse catches 10 at-risk members per month that Glofox misses entirely. At \u00A380 per month per member, that is \u00A3800 per month or \u00A39,600 per year in saved revenue. In the competitive UK boutique fitness market where ClassPass and Peloton pull members away, early churn detection is the difference between growth and decline.",
  },
  {
    title: "Multi-Location Management and Portfolio Analytics",
    icon: Building2,
    gymwyse: [
      "Single login with all locations visible on one unified dashboard showing total MRR, member count, and churn rate",
      "Cross-location analytics comparing revenue per member, class fill rates, churn, and retention between sites side by side",
      "Unified member database allowing members to book and train at any location with a single account and payment method",
      "Volume pricing at \u00A363 per additional location for two to five locations, dropping to \u00A349 for six or more sites",
    ],
    competitor: [
      "Basic multi-location overview available but lacks cross-location benchmarking and comparison tools",
      "Limited ability to compare performance metrics across different studio locations simultaneously",
      "Separate member management workflows per location requiring manual consolidation for portfolio views",
      "Full subscription price charged per additional location with no volume discount structure available",
    ],
    winner: "GymWyse",
    impact:
      "A 3-location boutique studio on Glofox pays approximately \u00A3495 per month (\u00A3165 times 3) with no unified analytics. On GymWyse: \u00A3205 per month (\u00A379 plus \u00A363 plus \u00A363) with a full portfolio dashboard. That is \u00A3290 per month or \u00A33,480 per year saved — with better cross-location intelligence that helps you identify which studio is thriving and which needs operational changes.",
  },
  {
    title: "Member Mobile App and Digital Experience",
    icon: Smartphone,
    gymwyse: [
      "Full-featured member app included at no extra cost with iOS and Android support and modern interface design",
      "Six AI Avatar coaches with distinct personalities that provide personalized motivation and workout guidance daily",
      "Wearable device sync with Apple Health, WHOOP, Garmin, and Fitbit for automatic activity and recovery tracking",
      "Built-in workout tracking with progress photos, personal records, body measurements, and benchmark history",
      "Community challenges and gamification features including leaderboards, achievement badges, and streak tracking",
    ],
    competitor: [
      "Branded member app included on all plans — this is one of Glofox's genuine strengths in the market",
      "Solid booking and scheduling experience with a clean interface for class reservations and check-ins",
      "Basic features focused on schedule viewing, class booking, account management, and payment processing",
      "No AI coaching, no personalized guidance, no motivational features beyond standard push notifications",
      "No wearable device integration or automated activity tracking from external fitness platforms",
    ],
    winner: "GymWyse",
    impact:
      "Both platforms include a member app, but GymWyse adds AI coaching, wearable sync, and gamification that drive 40 percent higher engagement rates. Members who engage with AI Avatar coaches show 45 percent lower churn. In the boutique studio market where member experience is the product, the app quality directly impacts retention and lifetime value.",
  },
  {
    title: "API, Integrations, and Technical Flexibility",
    icon: Globe,
    gymwyse: [
      "Full REST API with comprehensive documentation available to every customer regardless of plan tier or size",
      "Webhook support for real-time event notifications enabling custom automation workflows and third-party triggers",
      "Native integrations with Zapier, Mailchimp, Stripe, QuickBooks, and major wearable platforms out of the box",
      "Wearable sync ecosystem including Apple Health, WHOOP, Garmin, and Fitbit for holistic member data collection",
    ],
    competitor: [
      "API access available but restricted on lower tiers and may require an upgrade or additional monthly fee",
      "Fewer third-party integration options compared to platforms with open API architectures",
      "Basic Zapier support available but webhook capabilities and custom integrations are more limited in scope",
      "No wearable device integration available on any plan — limited to Glofox ecosystem data only",
    ],
    winner: "GymWyse",
    impact:
      "If your studio relies on a custom tech stack with marketing automation, accounting software, and third-party booking tools, GymWyse provides the integration depth you need without extra charges. For multi-location operations in the UK and UAE where studios often use local payment processors and regional marketing tools, API flexibility is essential.",
  },
  {
    title: "International Payment Processing and Currency Support",
    icon: CreditCard,
    gymwyse: [
      "BACS Direct Debit support for UK studios with automated collection and reconciliation built in",
      "SEPA support for European studios expanding across EU markets with local payment compliance",
      "Multi-currency billing with localized pricing in GBP, EUR, AED, USD, and AUD for international operations",
      "Smart failed payment recovery with optimized retry timing based on regional payment behavior patterns",
    ],
    competitor: [
      "Strong UK payment processing through GoCardless and Stripe integration for Direct Debit collection",
      "European payment support available through standard payment gateway integrations",
      "Multi-currency support present but limited compared to purpose-built international payment infrastructure",
      "Standard payment retry schedules without AI-optimized timing or regional behavior pattern analysis",
    ],
    winner: "GymWyse",
    impact:
      "For studios operating across the UK and UAE or expanding into European markets, payment infrastructure matters enormously. GymWyse smart recovery analyzes optimal retry times based on regional payment patterns, recovering 60 to 70 percent of failed payments automatically. The average studio loses 3 to 5 percent of revenue to payment failures — for an 800-member operation at \u00A380 per member, that is \u00A31,920 to \u00A33,200 per year in recoverable revenue.",
  },
  {
    title: "Branded Experience and White-Label Options",
    icon: Shield,
    gymwyse: [
      "Customizable member app with your studio branding, colors, logo, and custom welcome messaging",
      "Branded email templates with your studio identity for all automated communications and campaigns",
      "Custom domain support for member-facing booking pages and self-service portals",
      "AI Avatar coaches can be configured with your studio's voice and terminology for brand consistency",
    ],
    competitor: [
      "Strong branded app offering — this is historically one of Glofox's key differentiators in the market",
      "Custom app store listing with your studio name, icon, and branding for a professional member experience",
      "Branded booking widget and website integration tools for embedding scheduling on your existing site",
      "Professional presentation that works well for boutique studios focused on brand identity and image",
    ],
    winner: "Tie",
    impact:
      "Glofox has a strong reputation for branded apps, and credit where it is due — their white-label app experience is polished. GymWyse matches this with customizable branding plus adds AI coaching and wearable sync. For studios where brand image is paramount, both platforms deliver. The difference is that GymWyse includes the branding at no extra cost alongside features Glofox does not offer at any price.",
  },
  {
    title: "Customer Support and Regional Availability",
    icon: Headphones,
    gymwyse: [
      "Email support with 12-hour average response time plus live chat with under 5-minute response during business hours",
      "Support coverage spanning US, UK, and UAE business hours for international studio operations",
      "Dedicated onboarding specialist assigned to every customer regardless of plan size or location count",
      "No tiered support pricing — priority access included for all customers at no additional monthly cost",
    ],
    competitor: [
      "Support team headquartered in Dublin, Ireland with primary coverage during UK and Irish business hours",
      "US and UAE studio owners frequently report delayed response times due to timezone misalignment",
      "Premium support available as a paid add-on at \u00A330 per month for faster response commitments",
      "Onboarding process included but support quality may vary depending on account size and plan tier",
    ],
    winner: "GymWyse",
    impact:
      "When your booking system crashes on a Saturday morning before your busiest classes, or a payment issue affects member access at your Dubai studio during evening hours, timezone-aligned support matters. GymWyse provides live chat coverage across US, UK, and UAE business hours at no extra cost. Glofox's Dublin-based team provides excellent support during GMT hours but leaves gaps for international operations.",
  },
];

const switchReasons = [
  {
    title: "\"We Had Three Locations and No Unified View of Our Business\"",
    problem:
      "Glofox offers basic multi-location support, but comparing performance across sites is genuinely difficult. For boutique studios expanding across London boroughs, multiple UK cities, or international markets like Dubai, there is no easy way to see which location is thriving and which is struggling without pulling separate reports from each site and combining them manually in a spreadsheet. Studio owners report spending 2 to 3 hours every Monday morning building cross-location reports that should be available with a single click. When you are running a growing boutique fitness business and also teaching classes, those hours are incredibly expensive.",
    solution:
      "GymWyse provides a single unified dashboard across all locations with real-time data. Compare churn rates, MRR, class fill rates, revenue per member, and attendance patterns across sites in one view. Spot underperforming locations instantly and shift resources, marketing spend, or scheduling strategies where they are needed. Members can book and attend classes at any location with one account. Staff can be shared across sites with role-based permissions. The portfolio view gives you the operational intelligence that a growing multi-location brand needs to make data-driven decisions every day.",
    caseStudy:
      "The Foundry in London unified their 3 studio locations on GymWyse and immediately discovered their East London site had 4.1 percent monthly churn compared to 2.3 percent at their Shoreditch location. Investigation revealed inconsistent class scheduling at the East London site. They restructured the timetable based on member attendance data from GymWyse analytics. Within 8 weeks, East London churn dropped to 2.5 percent, saving approximately 15 members and \u00A31,200 per month in retained revenue.",
  },
  {
    title: "\"We Needed AI Features That Glofox Simply Does Not Offer\"",
    problem:
      "Glofox is a solid scheduling and booking platform with a strong branded app, but it has no AI-powered features on any plan tier. No churn prediction, no engagement scoring, no smart recommendations, no AI coaching in the member app. For boutique studios competing against Peloton, ClassPass, and the growing wave of AI-powered fitness apps, that technology gap is a strategic problem. Members increasingly expect personalized digital experiences, and studios that cannot deliver them risk losing members to platforms that can. The market is moving toward AI-driven fitness experiences, and Glofox has not signaled any roadmap to close this gap.",
    solution:
      "GymWyse includes AI churn prediction, engagement scoring, AI Avatar coaches in the member app, and smart analytics — all included in the base price with no add-ons or tier upgrades required. Your studio gets enterprise-level intelligence at a fraction of what competitors charge for basic features. The AI coaching feature alone drives 38 percent higher app engagement and 45 percent lower churn among members who use it. In the competitive UK boutique market, this technology differentiator helps independent studios compete with venture-backed chains and digital-first fitness platforms.",
    caseStudy:
      "The Foundry deployed AI Avatar coaches through the GymWyse member app across all 3 locations. Member engagement with the app increased 38 percent within the first month. Members who interacted with the AI coach at least twice per week showed 45 percent lower churn than those who did not. The coaching feature became a marketing differentiator — The Foundry promotes their AI-powered member experience in all new member acquisition campaigns.",
  },
  {
    title: "\"Getting Support Outside UK Business Hours Was Nearly Impossible\"",
    problem:
      "Glofox is headquartered in Dublin, Ireland. Their support team is primarily UK and Ireland-based, which works well for studios operating in those timezones. However, US studio owners on the East and West coasts frequently report delayed responses due to timezone differences. UAE-based gyms face similar issues with response times during their local business hours. For multi-national studio brands operating across the UK, US, and Middle East, this timezone gap creates frustrating delays when urgent issues arise during peak operating hours in non-European markets.",
    solution:
      "GymWyse offers email and live chat support with coverage spanning US, UK, and UAE business hours at no additional cost. Average response time is 12 hours for email and under 5 minutes for live chat during supported hours. No premium support tier required — every customer gets the same priority level regardless of plan size or location count. The dedicated onboarding specialist assigned to your account understands multi-timezone operations and ensures your staff across all regions are fully trained and supported throughout the transition.",
    caseStudy: null,
  },
  {
    title: "\"The 12-Month Contract Made Us Stay Longer Than We Should Have\"",
    problem:
      "Glofox requires a 12-month minimum contract on all paid plans. Many studio owners sign during the sales process when the platform looks promising, then discover within the first few months that the analytics limitations, lack of AI features, and multi-location gaps are significant problems. But the contract keeps them locked in, paying monthly for a platform that is not meeting their evolving needs. The sunk cost mentality prevents them from evaluating alternatives, and each month of frustration adds to the total cost of the wrong decision. For bootstrapped boutique studios watching every pound, this contract lock-in feels particularly burdensome.",
    solution:
      "GymWyse operates entirely month-to-month with 30 days notice to cancel. No penalty, no remaining balance, no early termination fee. You continue using GymWyse because it delivers measurable value — lower churn, better analytics, and real cost savings — not because a legal agreement forces you to stay. This model ensures the GymWyse team earns your business every single month through product quality, feature development, and responsive support. If the platform ever stops delivering value, you are free to leave. That accountability drives a fundamentally different relationship between vendor and customer.",
    caseStudy:
      "Flow State in Brooklyn was locked into a 12-month Glofox contract and spent the final 5 months knowing they would switch as soon as the contract expired. They calculated that those 5 months cost them approximately $825 in subscription fees for a platform they were no longer satisfied with, plus the opportunity cost of not having AI churn prediction during that period. When they switched to GymWyse, they identified 7 at-risk members in the first month and saved 5 of them — recovering $750 per month in revenue that Glofox could not have predicted or prevented.",
  },
];

const migrationSteps = [
  {
    step: "1",
    title: "Data Export from Glofox",
    duration: "Day 1-3",
    description:
      "Glofox supports data export, and our migration team coordinates with their system to extract your complete member database including contact details, membership plans, payment history, attendance records, class schedules, and booking data. For UK studios, BACS Direct Debit mandates are handled carefully to ensure continuous payment collection. We validate every record for completeness and accuracy before proceeding, and flag any data discrepancies for your review.",
  },
  {
    step: "2",
    title: "Data Import and Studio Configuration",
    duration: "Day 4-8",
    description:
      "Your member data is imported into GymWyse with full validation and deduplication. We configure your membership plans, pricing tiers, class schedules, instructor assignments, and studio-specific settings. Payment methods are migrated to ensure continuous billing with no interruption. For multi-location studios, we set up the unified dashboard and configure cross-location analytics, staff permissions, and member access across all sites simultaneously.",
  },
  {
    step: "3",
    title: "Staff Training and Parallel Testing",
    duration: "Day 9-14",
    description:
      "Your studio staff receives hands-on training with GymWyse tailored to their role — front desk, instructors, and management each get focused sessions. Most staff pick up the system in 20 to 30 minutes because the interface is designed for fitness professionals, not software engineers. We run the systems in parallel for 3 to 5 days so your team can compare the experience and build confidence. Your members continue booking classes through Glofox during this period with zero disruption.",
  },
  {
    step: "4",
    title: "Go-Live and Member Communication",
    duration: "Day 15-18",
    description:
      "We provide pre-written email and SMS announcement templates customized for your brand voice to notify members about the app transition. Members download the GymWyse app and immediately gain access to AI Avatar coaching, wearable sync, and enhanced workout tracking features. For branded app studios transitioning from Glofox, we ensure your GymWyse app carries your studio branding, colors, and logo. Our support team monitors the first 72 hours post-launch to resolve any issues immediately.",
  },
];

const testimonials = [
  {
    initials: "ER",
    gym: "The Foundry",
    location: "London, UK",
    members: 720,
    type: "Boutique fitness studios, 3 locations",
    previousSoftware: "Glofox",
    before:
      "Three locations on Glofox at \u00A3165 per month each totaling \u00A3495 per month. Locked into a 12-month contract. No unified dashboard across the 3 London boroughs. The owner spent every Monday morning pulling separate reports from each Glofox account and combining them in a Google Sheet. Churn was invisible until the cancellation notification arrived. No AI features, no engagement scoring, no predictive analytics. Failed payments averaged \u00A31,400 per month in lost revenue with manual follow-up only.",
    after:
      "GymWyse at \u00A3205 per month total for all 3 locations (\u00A379 plus \u00A363 plus \u00A363). Unified dashboard immediately revealed East London location had 4.1 percent churn versus 2.3 percent elsewhere. Fixed class scheduling based on data and reduced overall churn by 28 percent within 8 weeks. AI Avatar coaches drove 38 percent higher app engagement. Failed payment smart recovery captured \u00A3950 per month that was previously lost.",
    metrics: [
      { label: "Monthly savings", value: "\u00A3290/mo" },
      { label: "Churn reduction", value: "28%" },
      { label: "App engagement", value: "+38%" },
    ],
    quote:
      "Glofox was fine for booking and scheduling, but we were completely blind on churn across our 3 studios. GymWyse showed us exactly which location was bleeding members and why. The unified dashboard alone was worth the switch — we stopped spending 2 hours every Monday morning building cross-location reports in spreadsheets. The AI coaching in the member app has become a genuine selling point for new member acquisition.",
    author: "Emma Richardson, Co-founder",
  },
  {
    initials: "MC",
    gym: "Flow State",
    location: "Brooklyn, NY",
    members: 390,
    type: "Yoga and HIIT boutique studio",
    previousSoftware: "Glofox",
    before:
      "Single location on Glofox mid-tier plan at $175 per month with a 12-month contract. Branded app was the main reason they chose Glofox. However, zero churn visibility meant they were blindsided by a wave of 14 cancellations in a single month. No revenue analytics beyond basic totals. Failed payments averaged $900 per month with no automated recovery. Staff spent 3 hours per week manually following up on failed payments by phone and email.",
    after:
      "GymWyse at $99 per month, saving $76 per month immediately. AI churn prediction identified 7 at-risk members in the first month and coaches saved 5 through personal outreach before they cancelled. Failed payment smart recovery automated the entire process, capturing $620 per month that was previously lost. The AI coaching feature became the most-discussed feature among members within the first two weeks.",
    metrics: [
      { label: "Monthly savings", value: "$76/mo" },
      { label: "Members saved (month 1)", value: "5 of 7" },
      { label: "Payments recovered", value: "$620/mo" },
    ],
    quote:
      "We chose Glofox originally for the branded app, and it was good for booking. But when we lost 14 members in one month with zero warning, we realized the platform had a massive blind spot. GymWyse caught 7 at-risk members in our first month and we saved 5 of them. That is $750 per month in retained revenue that we would have lost. The branded app from GymWyse is just as polished, and the AI coaching features are something our members actually talk about.",
    author: "Maria Chen, Owner and Lead Instructor",
  },
  {
    initials: "AK",
    gym: "Desert Strength",
    location: "Dubai, UAE",
    members: 510,
    type: "Strength and conditioning gym, 2 locations",
    previousSoftware: "Glofox",
    before:
      "Two locations on Glofox at \u00A3165 per month each totaling \u00A3330 per month. Premium support add-on at \u00A330 per month for faster response times. Support response from Glofox Dublin team was consistently slow during UAE business hours due to timezone gap. No multi-currency analytics — revenue across AED and GBP billing was difficult to compare. No AI features or churn prediction. Annual contract prevented them from switching for 8 months after deciding Glofox was not meeting their needs.",
    after:
      "GymWyse at \u00A3142 per month for both locations (\u00A379 plus \u00A363) with premium support included. Multi-currency dashboard showing AED and GBP revenue side by side with automatic conversion. Live chat support available during UAE business hours at no extra cost. AI churn prediction identified 9 at-risk members in the first month across both locations. Coaches saved 7 through targeted outreach, retaining approximately 4,200 AED per month in revenue.",
    metrics: [
      { label: "Monthly savings", value: "\u00A3218/mo" },
      { label: "Members saved (month 1)", value: "7 of 9" },
      { label: "Support response", value: "<5 min chat" },
    ],
    quote:
      "The timezone issue with Glofox support was a constant frustration. When our booking system had an issue at 6 PM Dubai time, we could not get help until the next morning in Dublin. GymWyse live chat gets us answers in under 5 minutes during our operating hours. The multi-currency dashboard is something we did not even know we needed until we saw it — comparing our two locations across AED and GBP finally makes sense. And the AI churn prediction saved us 7 members in our first month.",
    author: "Ahmed Khan, Managing Director",
  },
];

const gymOperationsBasics = [
  { feature: "Class and session scheduling with calendar management", included: true },
  { feature: "Online booking with waitlist and capacity management", included: true },
  { feature: "Automated billing with BACS, SEPA, and card processing", included: true },
  { feature: "Member check-in via app, QR code, or front desk kiosk", included: true },
  { feature: "Staff and instructor management with role-based permissions", included: true },
  { feature: "Email and SMS communication tools with template library", included: true },
  { feature: "Attendance tracking with class fill rate reporting", included: true },
  { feature: "Membership plan creation with trial and promo pricing", included: true },
  { feature: "Prospect and lead management with conversion pipeline", included: true },
  { feature: "Branded member app with custom colors, logo, and welcome screen", included: true },
  { feature: "AI churn prediction and engagement scoring (advanced)", included: true },
  { feature: "Revenue forecasting and MRR dashboards (advanced)", included: true },
  { feature: "Multi-location unified analytics with benchmarking (advanced)", included: true },
  { feature: "Smart failed payment recovery with regional optimization (advanced)", included: true },
  { feature: "AI Avatar coaching in member app with 6 personalities (advanced)", included: true },
  { feature: "Multi-currency billing and reporting across GBP, EUR, AED, USD (advanced)", included: true },
];

const faqItems = [
  {
    question: "How long does migration from Glofox to GymWyse take?",
    answer:
      "The full migration process takes approximately 2 to 3 weeks from start to finish, with zero downtime for your members. During the first week, we coordinate data export from Glofox including member records, payment methods, attendance history, and class schedules. The second week covers data import, studio configuration, and staff training. The third week handles parallel testing and go-live. Your members continue booking classes through Glofox during the entire migration period. For multi-location studios, all sites are migrated simultaneously so you launch on GymWyse across your entire portfolio at once.",
  },
  {
    question: "What happens with my 12-month Glofox contract if I want to switch before it expires?",
    answer:
      "If you are mid-contract with Glofox, you will need to pay out the remaining months to fulfill your commitment. Even with early termination costs, most studios break even within 4 to 5 months on GymWyse. This is due to the combination of lower monthly subscription cost, saved multi-location fees, recovered revenue from AI churn prevention, eliminated premium support charges, and automated payment recovery capturing revenue that was previously lost. We offer a detailed break-even calculator during the demo call that uses your actual Glofox pricing, member count, and remaining contract months to show exactly when GymWyse becomes cash-flow positive.",
  },
  {
    question: "Does GymWyse support BACS Direct Debit and UK payment processing?",
    answer:
      "Yes, GymWyse fully supports BACS Direct Debit for UK studios, SEPA for European operations, and multi-currency billing across GBP, EUR, AED, USD, and AUD. Pricing is localized in your preferred currency. For UK studios migrating from Glofox, we handle the Direct Debit mandate migration carefully to ensure no interruption to member payment collection. Our smart payment recovery system is optimized for regional payment behavior patterns, which means retry timing is tuned specifically for UK payment infrastructure to maximize success rates.",
  },
  {
    question: "Is GymWyse a good fit for boutique fitness studios?",
    answer:
      "Yes, GymWyse is designed for independent gyms and boutique studios of all sizes and disciplines. Features like class scheduling, membership management, branded member app, and online booking work beautifully for everything from a single yoga studio to a 5-location boutique fitness chain. The AI features give boutique studios enterprise-level intelligence at a fraction of the cost. Whether you run HIIT classes, yoga sessions, Pilates, spin, or mixed-format programming, GymWyse adapts to your specific studio model and operational workflow.",
  },
  {
    question: "How does the branded member app compare to Glofox's app offering?",
    answer:
      "Glofox has a strong reputation for branded apps, and the GymWyse member app matches that quality with full custom branding including your studio name, logo, colors, and welcome messaging. The key difference is what the app does beyond booking. GymWyse adds AI Avatar coaching with 6 distinct personalities, wearable device sync with Apple Health, WHOOP, and Garmin, workout tracking with progress photos, and community challenges with gamification features. These additions drive 40 percent higher engagement than booking-only apps, and members who use AI coaching show 45 percent lower churn.",
  },
  {
    question: "Will my members need to download a new app when we switch?",
    answer:
      "Yes, members will download the GymWyse member app available on iOS and Android. We provide pre-written announcement templates for email and SMS customized to your studio brand voice. The messaging emphasizes the upgrade — AI coaching, wearable sync, workout tracking, and community challenges — which helps frame the transition positively. In our experience, member feedback is overwhelmingly positive within the first week. Studios report that the AI coaching feature in particular generates excitement and becomes a talking point among members.",
  },
  {
    question: "What if GymWyse does not work out for our studio?",
    answer:
      "GymWyse operates on a month-to-month contract with 30 days notice to cancel. No penalty, no remaining balance, no early termination fee. You can export your data and switch to another provider at any time. This is zero risk compared to Glofox's 12-month commitment. We are confident enough in the product to let results speak for themselves. Studios that switch from Glofox to GymWyse stay because the analytics, churn prevention, cost savings, and AI features deliver measurable value from the first month of use.",
  },
  {
    question: "Can GymWyse handle international operations across UK, US, and UAE?",
    answer:
      "Yes, GymWyse is built for international studio operations. Multi-currency billing supports GBP, EUR, AED, USD, and AUD with automatic conversion in the analytics dashboard. Payment processing supports BACS Direct Debit for UK, SEPA for Europe, and standard card processing globally. Support coverage spans US, UK, and UAE business hours with email and live chat. For studios operating across multiple countries, the unified dashboard shows all locations regardless of currency or timezone, with revenue normalized for accurate cross-location comparison.",
  },
];

export function GlofoxComparison() {
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
              GymWyse vs Glofox: Gym Management Software Comparison
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Choosing the right gym management software for your boutique
              studio or international fitness business is a decision that
              directly impacts revenue, member retention, and daily
              operations. GymWyse and Glofox both serve the fitness industry,
              but the differences in analytics depth, AI capabilities,
              multi-location management, contract flexibility, and
              international support coverage are significant. This
              comprehensive comparison examines every critical factor so you
              can determine which platform will actually help your studio
              grow, retain more members, and operate more efficiently across
              the UK, US, UAE, and beyond.
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
              A snapshot of the key differences between GymWyse and Glofox
              across pricing, features, and support. Every metric listed for
              GymWyse is included in the base plan with no add-ons, tier
              upgrades, or premium support charges required.
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
                Glofox
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
              Glofox&apos;s tiered pricing means most growing studios end up
              on the mid or top tier. When you factor in setup fees, premium
              support, API access, and multi-location charges, the actual
              cost is significantly higher than the advertised starting
              price. Here is a transparent Year 1 breakdown for a single
              location studio on Glofox&apos;s mid-tier plan versus GymWyse.
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
                Glofox Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.glofox.map((item, i) => (
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
              You save in Year 1:
            </div>
            <div className="text-4xl font-bold text-electric-green font-mono">
              &pound;1,832
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from AI churn prevention,
              automated payment recovery, and eliminated manual reporting
              hours
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
              Hidden Costs Glofox Does Not Tell You About
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The advertised price is the starting point, not the finish
              line. These costs accumulate over time and significantly
              increase the true cost of running your studio on Glofox.
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
              the real-world impact for your studio operations and bottom
              line.
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
                  <span className={`ml-auto px-3 py-1 text-xs font-medium rounded-full ${
                    feature.winner === "Tie"
                      ? "bg-sapphire-blue/20 text-sapphire-blue"
                      : "bg-electric-green/20 text-electric-green"
                  }`}>
                    {feature.winner === "Tie" ? "Tie" : `Winner: ${feature.winner}`}
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
                      Glofox
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

      {/* Why Studios Switch */}
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
              Why Studios Switch from Glofox to GymWyse
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real stories from boutique studios and international gyms that
              made the switch and experienced measurable improvements in
              revenue, retention, and operational efficiency.
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
              Migration Process: Switching from Glofox in 2-3 Weeks
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Our dedicated migration team handles the entire transition with
              zero downtime for your members. For UK studios with BACS Direct
              Debit mandates, we ensure continuous payment collection
              throughout the process. Here is exactly what happens at each
              stage.
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
              What Former Glofox Users Say
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real results from studios across London, Brooklyn, and Dubai
              that switched from Glofox to GymWyse. Each testimonial includes
              measurable outcomes and direct quotes from studio owners.
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
              Every Studio Operations Essential, Plus Advanced Intelligence
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              GymWyse covers every fundamental studio management feature you
              expect from any platform, including scheduling, billing, member
              management, and branded app experience. But it goes further by
              including advanced AI-powered features and international
              capabilities that Glofox does not offer at any price point.
              Everything listed below is included in the standard subscription
              with no add-ons or tier upgrades required.
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
              Answers to the most common questions from studio owners
              considering switching from Glofox to GymWyse.
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
              Ready to Switch from Glofox to GymWyse?
            </h2>
            <p className="text-base text-soft-white max-w-xl mx-auto">
              Join boutique studios across London, Brooklyn, Dubai, and
              beyond that have already made the switch. Save money from day
              one, get AI-powered churn prediction from week one, unify your
              multi-location operations on a single dashboard, and never sign
              another 12-month contract again. The migration takes 2 to 3
              weeks with zero downtime, and your staff will be up and running
              in under 30 minutes.
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
              <span>The Foundry (London, UK)</span>
              <span>&bull;</span>
              <span>Flow State (Brooklyn, NY)</span>
              <span>&bull;</span>
              <span>Desert Strength (Dubai, UAE)</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
