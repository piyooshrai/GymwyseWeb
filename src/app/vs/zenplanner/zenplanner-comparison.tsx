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
  Calendar,
  Shield,
  Zap,
  Clock,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickMetrics = [
  { label: "Monthly Pricing", gymwyse: "$99/mo flat", competitor: "$117-$248/mo (member count tiers)" },
  { label: "Setup Fee", gymwyse: "$0", competitor: "$300+ onboarding fee" },
  { label: "Contract Length", gymwyse: "Month-to-month", competitor: "Annual commitment required" },
  { label: "Revenue Analytics", gymwyse: "Full MRR suite with forecasting", competitor: "Basic financial reports only" },
  { label: "AI Churn Prediction", gymwyse: "30-day early warning system", competitor: "Not available on any plan" },
  { label: "Multi-Location Dashboard", gymwyse: "Unified cross-location view", competitor: "Per-location pricing, no unified view" },
  { label: "Failed Payment Recovery", gymwyse: "Automated smart recovery included", competitor: "Manual follow-up process" },
  { label: "Member Mobile App", gymwyse: "Included with AI coaching", competitor: "Add-on at $40/mo extra" },
  { label: "Wearable Integration", gymwyse: "Apple Health, WHOOP, Garmin", competitor: "Not available" },
  { label: "Customer Support", gymwyse: "Email + live chat, all hours", competitor: "Email + phone, business hours only" },
];

const yearOneCosts = {
  zenplanner: [
    { item: "Onboarding and setup fee", cost: "$300" },
    { item: "Monthly subscription (12 x $117 base)", cost: "$1,404" },
    { item: "Member app add-on (12 x $40)", cost: "$480" },
    { item: "Additional location fee (per location)", cost: "$117/ea" },
    { item: "Premium support tier upgrade", cost: "$240" },
    { item: "Year 1 Total (single location)", cost: "$2,424", highlight: true },
  ],
  gymwyse: [
    { item: "Onboarding and setup fee", cost: "$0" },
    { item: "Monthly subscription (12 x $99)", cost: "$1,188" },
    { item: "Member app with AI coaching", cost: "Included" },
    { item: "Additional location fee (per location)", cost: "$79/ea" },
    { item: "Priority support", cost: "Included" },
    { item: "Year 1 Total (single location)", cost: "$1,188", highlight: true },
  ],
};

const hiddenCosts = [
  {
    title: "The Mobile App Tax",
    description:
      "Zen Planner charges $40 per month for their branded member app add-on. That is $480 per year for basic scheduling and check-in functionality. GymWyse includes a full-featured member app with AI Avatar coaches, wearable sync, workout tracking, progress photos, and gamification challenges at no extra cost. You save $480 per year on the app alone, and your members get a vastly better experience that drives higher engagement and lower churn rates across your entire membership base.",
  },
  {
    title: "Tiered Pricing Escalation Based on Member Count",
    description:
      "Zen Planner uses member-count-based pricing tiers. You start at $117 per month, but as your gym grows past 100, 200, or 350 members, your monthly fee jumps to $172, $207, or $248 respectively. A successful CrossFit box with 400 members pays $248 per month just for the base platform. GymWyse charges a flat $99 per month regardless of member count, so your software costs never penalize growth. The more successful you become, the more you save compared to Zen Planner.",
  },
  {
    title: "Annual Contract Lock-In and Cancellation Penalties",
    description:
      "Zen Planner requires an annual commitment. If you want to leave mid-contract, you are on the hook for the remaining months. This means if you sign up in January and realize by March that the platform is not working for your gym, you still owe ten more months of payments. GymWyse operates on a month-to-month basis with 30 days notice to cancel. No penalty, no remaining balance, no cancellation fee. You stay because the product works, not because a contract forces you to.",
  },
  {
    title: "Multi-Location Price Multiplication",
    description:
      "Zen Planner charges full price per location with zero volume discounts. A three-location CrossFit affiliate pays $351 per month at the base tier, or $744 per month if each location has over 350 members. There is no unified dashboard to compare performance across locations. GymWyse offers volume pricing at $79 per additional location with a single unified dashboard. A three-location operation pays $257 per month maximum, with cross-location analytics built in from day one.",
  },
];

const featureComparisons = [
  {
    title: "Revenue Analytics and Financial Intelligence",
    icon: BarChart3,
    gymwyse: [
      "Real-time MRR dashboard with daily, weekly, and monthly growth trends automatically calculated",
      "Churn rate auto-calculated monthly with visual trend lines showing direction over the past 12 months",
      "Profit margin analysis broken down by service line including memberships, personal training, classes, and retail",
      "Revenue forecasting engine with 6-month projections based on current growth rate, churn patterns, and seasonal trends",
      "Failed payment recovery tracking showing attempt count, success rate, and total revenue recovered per month",
      "One-click profit and loss export formatted for your accountant with all revenue streams and expense categories",
    ],
    competitor: [
      "Basic financial reports showing revenue by plan type and total collected payments",
      "No MRR tracking capability — you must calculate monthly recurring revenue manually in a spreadsheet",
      "No churn rate visibility or historical trend data available in any report",
      "No profit margin analysis by service — everything is lumped into total revenue numbers",
      "CSV export only — you must build your own reports and dashboards in Excel or Google Sheets",
    ],
    winner: "GymWyse",
    impact:
      "Zen Planner gives you basic reporting but no real-time revenue intelligence. You cannot see MRR, churn trends, or profit margins without exporting data and building spreadsheets manually. For a CrossFit box owner running classes, coaching, and managing operations, spending hours on spreadsheet analytics is time stolen from growing the business.",
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
      "No churn prediction capability on any plan tier",
      "No at-risk member identification or early warning system",
      "Manual outreach only — you discover members are leaving when the cancellation notification arrives",
      "No engagement scoring, no member health metrics, no attendance trend analysis",
    ],
    winner: "GymWyse",
    impact:
      "For a 450-member CrossFit box: GymWyse catches 5 at-risk members per month that Zen Planner misses entirely. At $150 per month per CrossFit member, that is $750 per month or $9,000 per year in saved revenue. In a community-driven environment where losing one member often means losing their training partner, the cascade prevention alone is worth the switch.",
  },
  {
    title: "Multi-Location Management and Portfolio Analytics",
    icon: Building2,
    gymwyse: [
      "Single login with all locations visible on one unified dashboard showing total MRR, member count, and churn",
      "Cross-location analytics comparing performance metrics between Box A, Box B, and Box C side by side",
      "Unified member database allowing members to train at any location with a single account and payment method",
      "Volume pricing at $79 per additional location for two to five locations, dropping to $59 for six or more",
    ],
    competitor: [
      "Full price per location at $117 each with no volume discount regardless of how many locations you operate",
      "Limited multi-location overview tools with no cross-location benchmarking or performance comparison",
      "Separate billing and separate member databases per facility requiring manual consolidation",
      "No unified portfolio dashboard — owners must log into each location separately to check performance",
    ],
    winner: "GymWyse",
    impact:
      "A three-location CrossFit affiliate on Zen Planner pays $351 per month ($117 times 3) with no unified view. On GymWyse: $257 per month ($99 plus $79 plus $79) with a full portfolio dashboard. That is $94 per month or $1,128 per year saved, and you can finally see which location is thriving and which needs attention without juggling three separate logins.",
  },
  {
    title: "Member Mobile App and Digital Experience",
    icon: Smartphone,
    gymwyse: [
      "Full-featured member app included at no extra cost with iOS and Android support",
      "Six AI Avatar coaches with distinct personalities that provide personalized motivation and workout guidance",
      "Wearable device sync with Apple Health, WHOOP, Garmin, and Fitbit for automatic activity tracking",
      "Built-in workout tracking with progress photos, personal records, and benchmark history",
      "Community challenges and gamification features including leaderboards, badges, and streak tracking",
    ],
    competitor: [
      "Member app costs an additional $40 per month as a paid add-on to the base subscription",
      "Basic app features limited to schedule viewing, class check-in, and payment management",
      "No AI coaching, no personalized guidance, no motivational features beyond basic notifications",
      "No wearable device integration — members must manually log external workout data",
    ],
    winner: "GymWyse",
    impact:
      "GymWyse delivers a superior member app with AI coaching and wearable sync included for free, while Zen Planner charges $480 per year for a basic app with fewer features. Members who use AI coaching show 45 percent lower churn rates. Better app engagement means better retention across your entire membership.",
  },
  {
    title: "CrossFit and Functional Fitness Features",
    icon: Calendar,
    gymwyse: [
      "WOD programming interface with template library, scaling options, and automatic publishing to member app",
      "Performance logging with benchmark tracking for Fran, Murph, Fight Gone Bad, and custom workouts",
      "Leaderboard system with daily, weekly, and all-time rankings by workout, weight class, and age group",
      "Equipment QR code system for maintenance reporting — members scan a code to flag broken equipment instantly",
    ],
    competitor: [
      "WOD tracking available with basic logging but limited programming tools for coaches",
      "Benchmark tracking present but without the depth of cross-member comparison and analysis",
      "Basic leaderboards without advanced filtering by weight class, age group, or time period",
      "No equipment management or maintenance reporting system available on any tier",
    ],
    winner: "GymWyse",
    impact:
      "Zen Planner has respectable CrossFit features, but GymWyse adds the automation layer that saves coaches time. The equipment QR system alone eliminates the problem of broken equipment sitting unrepaired because nobody reported it. Combined with WOD template libraries, coaches save 20 to 30 minutes per day on programming and equipment management.",
  },
  {
    title: "Belt Rank and Martial Arts Progression Tracking",
    icon: Shield,
    gymwyse: [
      "Automated belt rank progression system with customizable requirements per rank level and discipline",
      "Skill checklist tracking with visual progress indicators showing completion percentage per student",
      "Time-in-rank tracking with automatic eligibility notifications sent to coaches when students qualify",
      "Promotion history log with certificates, photos, and notes for each rank advancement recorded",
    ],
    competitor: [
      "Belt rank tracking available but requires manual updates and spreadsheet management by coaches",
      "No automated eligibility checking or notification system for upcoming promotions",
      "No visual progress tracking for students to see their advancement journey",
      "Manual process that coaches report takes 20 to 30 minutes per day to maintain accurately",
    ],
    winner: "GymWyse",
    impact:
      "For martial arts and BJJ programs, automated belt rank tracking saves coaches 15 or more hours per month. Zen Planner offers the concept but not the automation. GymWyse handles attendance counting, skill checkoffs, time-in-rank calculations, and promotion eligibility notifications automatically, giving coaches their time back for what matters most: teaching.",
  },
  {
    title: "Automated Payment Recovery and Billing Intelligence",
    icon: CreditCard,
    gymwyse: [
      "Smart retry engine that analyzes optimal times to reattempt failed payments based on historical success patterns",
      "Automated dunning sequences with customizable email and SMS templates sent at configurable intervals",
      "Recovery rate dashboard showing attempts, successes, and total revenue recovered per billing cycle",
      "Card expiry pre-notification system that alerts members before their payment method expires",
    ],
    competitor: [
      "Standard billing with automatic retry on a fixed schedule regardless of historical patterns",
      "Manual follow-up required for failed payments — staff must contact members individually",
      "No recovery rate tracking or analytics on how much revenue is lost to failed payments",
      "No proactive card expiry notifications to prevent payment failures before they occur",
    ],
    winner: "GymWyse",
    impact:
      "The average gym loses 3 to 5 percent of monthly revenue to failed payments. GymWyse smart recovery recaptures 60 to 70 percent of failed payments automatically. For a 450-member CrossFit box at $150 per member, that is $2,025 to $3,375 in recovered revenue per year that Zen Planner lets slip through the cracks.",
  },
  {
    title: "Customer Support and Onboarding Experience",
    icon: Headphones,
    gymwyse: [
      "Email support with 12-hour average response time plus live chat with under 5-minute response during business hours",
      "Dedicated onboarding specialist assigned to guide your migration and initial setup process",
      "Video library with over 50 tutorials covering every feature, plus live weekly Q and A sessions",
      "No tiered support — every customer gets the same priority regardless of plan or location count",
    ],
    competitor: [
      "Email and phone support during US business hours only with no live chat option available",
      "Onboarding process included but often reported as rushed due to annual contract start pressure",
      "Knowledge base available but video tutorials are limited in scope and depth",
      "Support quality varies — larger accounts may receive faster responses than smaller affiliates",
    ],
    winner: "GymWyse",
    impact:
      "When your billing system goes down on a Saturday morning or a coach cannot figure out the scheduling tool at 7 AM before the first class, response time matters. GymWyse live chat gets you an answer in under 5 minutes. Zen Planner phone support operates during business hours only, leaving you stranded during peak gym times.",
  },
];

const switchReasons = [
  {
    title: "\"Our Churn Was Invisible Until Members Were Already Gone\"",
    problem:
      "Zen Planner does not predict churn or flag at-risk members. In a CrossFit box where community is everything, losing a member often means losing their training partner and sometimes their entire friend group. The cascade effect is devastating. You only find out when the cancellation email arrives, and by then it is too late to save them. The lack of engagement scoring means you have no idea which members are slowly disengaging until they are already out the door. For boxes with 300 or more members, it is physically impossible for coaches to track engagement manually across every individual.",
    solution:
      "GymWyse AI continuously monitors attendance patterns, payment behavior, class booking frequency, and engagement signals across every member in your gym. It flags members 30 days before they are likely to cancel, giving coaches a meaningful window to reach out personally. A simple message like \"Hey, we noticed you have not been in this week, everything okay?\" can save a member before they make the decision to leave. The system also identifies cascade risks by tracking members who train together, so if one partner starts disengaging, you can proactively check on the other. Automated win-back campaigns handle the outreach at scale for larger boxes where personal calls are not feasible for every at-risk member.",
    caseStudy:
      "Iron Republic CrossFit in Austin caught 8 at-risk members in their first month on GymWyse. Coaches reached out to all 8 with personal messages and calls. They saved 6 of them. At $150 per month per CrossFit member, that is $900 per month in retained revenue. Over a year, that single month of saves represents $10,800 in lifetime value protected.",
  },
  {
    title: "\"I Was Paying Full Price for Every Location With No Unified View\"",
    problem:
      "Zen Planner charges $117 per location with no volume discount regardless of how many facilities you operate. For affiliate owners expanding to 2 or 3 boxes, costs scale linearly with no reward for growth. A three-location operation pays $351 per month before any add-ons. Worse, there is no unified dashboard to compare performance across locations. You must log into each location separately, pull reports individually, and manually combine data in a spreadsheet to understand your portfolio performance. For owners running the business while also coaching classes, that manual reporting process steals 3 to 5 hours per week from revenue-generating activities.",
    solution:
      "GymWyse offers volume pricing at $99 for your first location and $79 each for locations 2 through 5. A three-location operation pays $257 per month total. You get a unified portfolio dashboard that shows total MRR, member count, churn rate, and class attendance across all locations in one view. Cross-location benchmarking lets you compare which box has the best retention, which programming drives the most attendance, and where to allocate marketing spend. Members can train at any location with a single account. Staff can be shared across locations with role-based permissions. One login, one dashboard, one bill, complete visibility.",
    caseStudy:
      "Warrior Academy in Manchester operated two martial arts locations on Zen Planner paying $234 per month ($117 times 2) with no cross-location visibility. After switching to GymWyse at $178 per month ($99 plus $79), they discovered their second location had significantly higher churn because evening class times did not match local demand. They adjusted the schedule and reduced churn by 31 percent within 6 weeks.",
  },
  {
    title: "\"Belt Rank Tracking Was Eating Up Our Coaches' Time Every Single Day\"",
    problem:
      "For martial arts and BJJ gyms on Zen Planner, belt rank and skill progression tracking is a manual process. Coaches spend 20 to 30 minutes per day updating records, checking requirements, and managing promotions across spreadsheets. With 120 or more students across 6 belt levels, the tracking burden is enormous. Mistakes are common because manual systems rely on coaches remembering to update records after every class. Students sometimes get overlooked for promotion because their eligibility was not tracked properly. The manual process also creates bottlenecks when the head coach is sick or on vacation and nobody else knows the spreadsheet system.",
    solution:
      "GymWyse automates belt rank progression end to end. Set requirements per rank level including minimum attendance count, specific skill checkoffs, and minimum time-in-rank. The system tracks everything automatically as students attend classes and complete assessments. Coaches receive notifications when a student becomes eligible for promotion. Students can see their own progress in the member app, which drives motivation and engagement. The entire promotion history is logged with dates, assessor names, and optional photos. Multiple coaches can manage the system because it is centralized, not trapped in one person's spreadsheet.",
    caseStudy:
      "Iron Republic's MMA program had 120 students across 6 belt levels. Their head coach was spending 30 minutes daily on rank tracking and promotion management. GymWyse automated the entire process, and that is 15 hours per month returned to actual coaching and student development. Two students who had been overlooked for promotion under the manual system were immediately flagged as eligible.",
  },
  {
    title: "\"The Annual Contract Trapped Us Even After We Knew It Wasn't Working\"",
    problem:
      "Zen Planner requires an annual contract commitment. Many gym owners sign the contract during the sales process when everything looks promising, then discover within the first 2 to 3 months that the reporting limitations, lack of churn visibility, and add-on costs are dealbreakers. But they are locked in for the remainder of the year. The sunk cost mentality keeps them paying for a platform that is not meeting their needs, and the frustration compounds monthly. For gym owners who bootstrapped their business and watch every dollar, paying for software that is not delivering value is especially painful.",
    solution:
      "GymWyse operates month-to-month with 30 days notice to cancel. No penalty, no remaining balance, no cancellation fee. You stay because the product delivers value, not because a contract forces compliance. This approach means the GymWyse team is accountable every single month to earn your continued business. If the platform is not working, you leave. This alignment of incentives means GymWyse invests heavily in onboarding, support, and continuous feature development because customer retention depends on customer satisfaction, not legal obligation.",
    caseStudy: null,
  },
];

const migrationSteps = [
  {
    step: "1",
    title: "Data Export from Zen Planner",
    duration: "Day 1-2",
    description:
      "Zen Planner supports CSV data export, which makes the initial extraction straightforward. We export your complete member database including contact information, membership plans, payment history, attendance records, class schedules, and belt rank data if applicable. Our migration team handles the export process and validates every record for completeness and accuracy before moving to the next step.",
  },
  {
    step: "2",
    title: "Data Import and Configuration",
    duration: "Day 3-7",
    description:
      "Your member data is imported into GymWyse with full validation. We configure your membership plans, pricing tiers, class schedules, and coach assignments. Payment methods are migrated to ensure continuous billing with no interruption. Custom settings like belt rank requirements, WOD templates, and equipment inventories are configured to match your current operations exactly.",
  },
  {
    step: "3",
    title: "Staff Training and Parallel Testing",
    duration: "Day 8-12",
    description:
      "Your coaching staff receives hands-on training with GymWyse. Most coaches pick up the system in 20 to 30 minutes because the interface is designed for gym operators, not accountants. We run the systems in parallel for 3 to 5 days so staff can compare and build confidence. Your members continue booking classes on Zen Planner during this period with zero disruption to their routine.",
  },
  {
    step: "4",
    title: "Go-Live and Member Communication",
    duration: "Day 13-15",
    description:
      "We provide pre-written email and SMS announcement templates to notify your members about the transition. Members download the GymWyse app and immediately gain access to AI coaching, wearable sync, and enhanced workout tracking. Our support team monitors the first 72 hours post-launch to resolve any issues in real time. Most gyms report the transition is seamless with zero member complaints.",
  },
];

const testimonials = [
  {
    initials: "JR",
    gym: "Iron Republic CrossFit",
    location: "Austin, TX",
    members: 450,
    type: "CrossFit box with MMA program",
    previousSoftware: "Zen Planner",
    before:
      "Paying $117 per month plus $40 per month for the app add-on. Locked into an annual contract. Zero churn visibility across 450 members. Belt rank tracking for their 120-student MMA program was entirely manual, with the head coach spending 30 minutes daily on spreadsheets. Failed payments were handled through manual follow-up calls that staff dreaded making.",
    after:
      "GymWyse at $99 per month, everything included. Monthly churn dropped from 3.8 percent to 2.6 percent within the first quarter. Automated belt rank tracking eliminated 15 hours of manual work per month. AI flagged 8 at-risk members in the first month and coaches saved 6 through personal outreach. Failed payment recovery captured an additional $340 per month automatically.",
    metrics: [
      { label: "Monthly savings", value: "$58/mo" },
      { label: "Churn reduction", value: "3.8% to 2.6%" },
      { label: "Coach time saved", value: "15 hrs/mo" },
    ],
    quote:
      "Zen Planner worked fine for scheduling, but we had zero visibility into who was about to leave. GymWyse flagged members we would have lost. The belt rank automation alone was worth the switch. Our head coach got 15 hours a month back for actual coaching. The AI churn prediction caught a group of 3 friends who were all disengaging, and we saved all of them with one conversation.",
    author: "Jake Rodriguez, Owner",
  },
  {
    initials: "SM",
    gym: "Warrior Academy",
    location: "Manchester, UK",
    members: 280,
    type: "Martial arts and BJJ academy, 2 locations",
    previousSoftware: "Zen Planner",
    before:
      "Two locations on Zen Planner at $117 each totaling $234 per month. No unified dashboard meant the owner had to log into each location separately and combine reports manually in Google Sheets every Monday morning. Belt rank tracking across 280 students and 8 belt levels was managed entirely through spreadsheets. Two students were accidentally overlooked for promotion because of record-keeping errors.",
    after:
      "GymWyse at $178 per month for both locations ($99 plus $79). Unified dashboard revealed that the second location had significantly higher churn due to mismatched evening class times. Adjusted schedule based on data and reduced churn by 31 percent within 6 weeks. Automated belt rank tracking immediately flagged 4 students who were eligible for promotion but had been missed under the manual system.",
    metrics: [
      { label: "Monthly savings", value: "$56/mo" },
      { label: "Churn reduction", value: "31%" },
      { label: "Overlooked promotions found", value: "4 students" },
    ],
    quote:
      "We were running two locations blind. I spent every Monday morning pulling separate reports from each Zen Planner account and combining them in a spreadsheet. GymWyse showed me instantly that our second location was losing members because evening classes started at the wrong time. That single insight saved us 12 members in the first month. The belt rank automation also caught students we had accidentally missed for promotion, which was embarrassing but important to fix.",
    author: "Sean Murphy, Head Instructor and Owner",
  },
  {
    initials: "LT",
    gym: "Pacific CrossFit",
    location: "San Diego, CA",
    members: 320,
    type: "CrossFit box with nutrition coaching",
    previousSoftware: "Zen Planner",
    before:
      "Zen Planner at $172 per month (200+ member tier) plus $40 per month app add-on. Total of $212 per month for basic features. Annual contract with 7 months remaining when they decided to switch. No revenue analytics beyond basic total revenue reports. Failed payments averaged $1,800 per month in lost revenue with no automated recovery system. The coaching team had no visibility into which members were disengaging.",
    after:
      "GymWyse at $99 per month, everything included. Paid out the remaining Zen Planner contract and still broke even within 4 months due to savings and recovered revenue. Failed payment recovery automated system captured $1,200 per month that was previously lost. AI churn prediction identified 6 at-risk members in the first month. The nutrition coaching program gained 15 percent more sign-ups after becoming visible in the GymWyse member app.",
    metrics: [
      { label: "Monthly savings", value: "$113/mo" },
      { label: "Payments recovered", value: "$1,200/mo" },
      { label: "Nutrition sign-ups", value: "+15%" },
    ],
    quote:
      "We were in the middle of our Zen Planner contract, but the math made switching a no-brainer. We saved $113 per month on the subscription, recovered $1,200 per month in failed payments, and our nutrition coaching program got a visibility boost through the app. Even after paying out the remaining contract, we were ahead within 4 months. The only regret is not switching sooner.",
    author: "Lisa Tran, Co-Owner",
  },
];

const gymOperationsBasics = [
  { feature: "Class scheduling and calendar management", included: true },
  { feature: "Online booking with waitlist support", included: true },
  { feature: "Automated billing and payment processing", included: true },
  { feature: "Member check-in via app, QR code, or kiosk", included: true },
  { feature: "Staff management with role-based permissions", included: true },
  { feature: "Email and SMS communication tools", included: true },
  { feature: "Attendance tracking and reporting", included: true },
  { feature: "Membership plan creation and management", included: true },
  { feature: "Prospect and lead management pipeline", included: true },
  { feature: "Retail point-of-sale with inventory tracking", included: true },
  { feature: "AI churn prediction and engagement scoring (advanced)", included: true },
  { feature: "Revenue forecasting and MRR dashboards (advanced)", included: true },
  { feature: "Multi-location unified analytics (advanced)", included: true },
  { feature: "Smart failed payment recovery (advanced)", included: true },
  { feature: "AI Avatar coaching in member app (advanced)", included: true },
  { feature: "Equipment QR code maintenance system (advanced)", included: true },
];

const faqItems = [
  {
    question: "How long does the complete migration from Zen Planner to GymWyse take?",
    answer:
      "The full migration process takes 2 to 3 weeks from start to finish, with zero downtime for your members. During the first week, we export your member data, payment methods, attendance history, and class schedules from Zen Planner using their CSV export feature. During the second week, we import and validate all data in GymWyse, configure your settings, and train your staff. The third week covers parallel testing and go-live. Your members continue booking classes throughout the entire process. Most coaching staff pick up GymWyse in under 30 minutes because the interface is designed for gym operators.",
  },
  {
    question: "What happens with my annual Zen Planner contract if I want to switch now?",
    answer:
      "If you are mid-contract with Zen Planner, you will need to pay out the remaining months to fulfill your obligation. Even with cancellation costs, most gyms break even within 4 to 5 months on GymWyse due to the combination of lower subscription cost, recovered revenue from AI churn prevention, eliminated mobile app add-on fees, and saved staff time from automated belt rank tracking and payment recovery. We can help you calculate your specific break-even timeline during a demo call using your actual member count and current Zen Planner pricing tier.",
  },
  {
    question: "Does GymWyse fully support CrossFit-specific features like WOD programming and benchmarks?",
    answer:
      "Yes, GymWyse has comprehensive CrossFit support. This includes WOD programming with template libraries and scaling options, performance logging for all major benchmarks like Fran, Murph, and Fight Gone Bad, leaderboard systems with filtering by weight class and age group, and custom workout creation. On top of the standard CrossFit features, you also get AI-powered analytics showing which class times have the highest retention rates, which WOD styles drive the most attendance, and which members are disengaging from specific class types. This intelligence layer is something Zen Planner cannot provide.",
  },
  {
    question: "Can GymWyse handle belt rank and martial arts progression tracking?",
    answer:
      "Yes, GymWyse has a fully automated belt rank progression system. You set requirements per rank including minimum attendance count, specific skill checkoffs, and minimum time-in-rank. The system tracks everything automatically as students attend classes. Coaches receive notifications when students become eligible for promotion. Students can view their own progress in the member app, which increases motivation and engagement. The entire promotion history is logged with dates and assessor information. This automation saves coaches 15 or more hours per month compared to the manual spreadsheet process used with Zen Planner.",
  },
  {
    question: "Will my members need to download a new app, and how do I communicate the change?",
    answer:
      "Yes, members will download the GymWyse member app available on iOS and Android. We provide pre-written announcement templates for email and SMS that you can customize with your gym branding and voice. The GymWyse app includes AI Avatar coaching, wearable device sync, workout tracking with progress photos, and community challenges. Most members find it a significant upgrade over Zen Planner's app. In our experience, member feedback is overwhelmingly positive within the first week, particularly around the AI coaching and wearable integration features.",
  },
  {
    question: "What if GymWyse does not work out for my gym after switching?",
    answer:
      "GymWyse operates on a month-to-month basis, which means you can cancel anytime with 30 days notice. There is no penalty, no remaining balance, and no cancellation fee. You can export your data and go back to Zen Planner or try another platform. This is zero risk compared to Zen Planner's annual contract. We are confident enough in the product to let results speak for themselves. The vast majority of gyms that switch from Zen Planner to GymWyse stay because the analytics, churn prevention, and cost savings deliver measurable value from the first month.",
  },
  {
    question: "How does GymWyse pricing work for gyms with high member counts?",
    answer:
      "GymWyse charges a flat $99 per month regardless of how many members you have. Whether your box has 50 members or 500 members, the price stays the same. This is a significant advantage over Zen Planner, which uses member-count-based pricing tiers that escalate from $117 per month to $248 per month as you grow. With GymWyse, your software costs never penalize success. A gym at 400 members saves $149 per month compared to Zen Planner's highest tier, which adds up to $1,788 per year in savings before counting any other benefits.",
  },
  {
    question: "Does GymWyse integrate with the payment processors and tools I already use?",
    answer:
      "GymWyse integrates natively with Stripe for payment processing, plus supports Zapier for connecting to hundreds of other tools. Direct integrations include Mailchimp for email marketing, QuickBooks for accounting, and major wearable platforms including Apple Health, WHOOP, Garmin, and Fitbit. The full REST API with comprehensive documentation allows custom integrations if you have specific tech stack requirements. Most CrossFit boxes and martial arts gyms find the built-in integrations cover all their needs without any custom development.",
  },
];

export function ZenPlannerComparison() {
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
              GymWyse vs Zen Planner: Gym Management Software Comparison
            </h1>
            <p className="text-lg text-soft-white max-w-3xl mx-auto">
              Choosing the right gym management software is one of the most
              important decisions a CrossFit box, martial arts studio, or
              functional fitness gym can make. GymWyse and Zen Planner both
              serve fitness businesses, but the differences in pricing,
              analytics, AI capabilities, and contract flexibility are
              substantial. This comprehensive comparison breaks down every
              aspect so you can make an informed decision about which platform
              will actually help your gym grow revenue, reduce member churn,
              and save your coaching staff hours of administrative work every
              single week.
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
              A snapshot of the key differences between GymWyse and Zen Planner
              across pricing, features, and support. Every metric listed for
              GymWyse is included in the base $99 per month plan with no add-ons
              or tier upgrades required.
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
                Zen Planner
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
              Zen Planner&apos;s advertised base price of $117 per month does
              not tell the full story. When you factor in the mobile app
              add-on, setup fees, premium support, and member-count-based tier
              escalation, the actual cost is significantly higher. Here is a
              transparent breakdown of what Year 1 actually costs for a single
              location gym on the base tier of each platform.
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
                Zen Planner Year 1
              </h3>
              <div className="space-y-4">
                {yearOneCosts.zenplanner.map((item, i) => (
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
              $1,236
            </div>
            <div className="text-xs text-dim-gray mt-1">
              Before counting recovered revenue from AI churn prevention,
              automated payment recovery, and eliminated staff time on manual
              reporting
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
              Hidden Costs Zen Planner Does Not Tell You About
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              The advertised price is just the starting point. These are the
              costs that add up over time and erode the value proposition that
              Zen Planner presents during the sales process.
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
              the real-world impact for your gym operations and bottom line.
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
                      Zen Planner
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
              Why Gyms Switch from Zen Planner to GymWyse
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real stories from CrossFit boxes, martial arts academies, and
              functional fitness gyms that made the switch and never looked
              back.
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
              Migration Process: Switching from Zen Planner in 2-3 Weeks
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Zen Planner supports CSV data export, which makes migration
              straightforward. Our dedicated migration team handles the entire
              process with zero downtime for your members. Here is exactly
              what happens at each stage.
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
              What Former Zen Planner Users Say
            </h2>
            <p className="text-base text-soft-white max-w-2xl mx-auto">
              Real results from gyms that switched from Zen Planner to
              GymWyse. Each testimonial includes before and after data,
              measurable outcomes, and direct quotes from gym owners.
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
              management, and communication tools. But it goes further by
              including advanced AI-powered features that Zen Planner does not
              offer at any price point. Everything listed below is included in
              the flat $99 per month subscription with no add-ons or tier
              upgrades required.
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
              switching from Zen Planner to GymWyse.
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
              Ready to Switch from Zen Planner to GymWyse?
            </h2>
            <p className="text-base text-soft-white max-w-xl mx-auto">
              Join hundreds of CrossFit boxes, martial arts academies, and
              functional fitness gyms that have already made the switch. Save
              money on day one, get AI-powered churn prediction from week one,
              and never sign another annual contract again. The migration takes
              2 to 3 weeks with zero downtime, and your team will be up and
              running in under 30 minutes.
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
              <span>Iron Republic (Austin, TX)</span>
              <span>&bull;</span>
              <span>Warrior Academy (Manchester, UK)</span>
              <span>&bull;</span>
              <span>Pacific CrossFit (San Diego, CA)</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
