export interface ProblemSolutionStep {
  title: string;
  description: string;
}

export interface ProblemSolutionStat {
  label: string;
  value: string;
}

export interface ProblemSolutionPageData {
  slug: string;
  headline: string;
  subheadline: string;
  problemTitle: string;
  problemDescription: string;
  problemStats: ProblemSolutionStat[];
  solutionTitle: string;
  solutionDescription: string;
  steps: ProblemSolutionStep[];
  features: { title: string; description: string }[];
  ctaHeadline: string;
  ctaDescription: string;
  metaTitle: string;
  metaDescription: string;
}

export const problemSolutionPages: ProblemSolutionPageData[] = [
  {
    slug: "reduce-gym-member-churn",
    headline: "Reduce Gym Member Churn by 40%",
    subheadline:
      "AI-powered retention tools that identify at-risk members before they cancel. Stop losing revenue to preventable churn.",
    problemTitle: "The Churn Problem",
    problemDescription:
      "The average gym loses 30-50% of its members every year. Most gym owners don't know a member is leaving until it's too late. Failed payments, declining attendance, and engagement drops are all warning signs—but without the right tools, they go unnoticed.",
    problemStats: [
      { label: "Average annual churn rate", value: "30-50%" },
      { label: "Revenue lost per churned member", value: "$600+" },
      { label: "Cost to acquire vs retain", value: "5x more" },
    ],
    solutionTitle: "AI-Powered Churn Prevention",
    solutionDescription:
      "GymWyse uses machine learning to analyze member behavior patterns and flag at-risk members before they cancel. Automated re-engagement campaigns bring members back before it's too late.",
    steps: [
      {
        title: "Behavioral Analysis",
        description:
          "AI monitors attendance frequency, booking patterns, and engagement metrics for every member.",
      },
      {
        title: "Risk Scoring",
        description:
          "Each member gets a real-time churn risk score. High-risk members trigger automated alerts.",
      },
      {
        title: "Automated Re-engagement",
        description:
          "Personalized win-back campaigns launch automatically. SMS, email, and in-app notifications.",
      },
      {
        title: "Staff Intervention",
        description:
          "Your team gets actionable alerts with specific member insights to have meaningful conversations.",
      },
    ],
    features: [
      {
        title: "At-Risk Member Dashboard",
        description:
          "Real-time view of every member's churn risk score with recommended actions.",
      },
      {
        title: "Automated Win-Back Campaigns",
        description:
          "Pre-built email and SMS sequences triggered by behavior changes.",
      },
      {
        title: "Failed Payment Recovery",
        description:
          "Automated dunning with smart retry logic. Recover up to 70% of failed payments.",
      },
      {
        title: "Engagement Tracking",
        description:
          "Track class attendance, app usage, check-ins, and purchase frequency.",
      },
    ],
    ctaHeadline: "Stop Losing Members",
    ctaDescription:
      "Start your 14-day free trial and see which members are at risk today.",
    metaTitle:
      "Reduce Gym Member Churn - AI-Powered Retention Tools | GymWyse",
    metaDescription:
      "Reduce gym member churn by up to 40% with AI-powered retention. Identify at-risk members, automate win-back campaigns. $99/mo. Free trial.",
  },
  {
    slug: "increase-gym-revenue",
    headline: "Increase Gym Revenue by 23%",
    subheadline:
      "Revenue analytics, automated upsells, and smart pricing tools that unlock hidden revenue in your gym.",
    problemTitle: "The Revenue Problem",
    problemDescription:
      "Most gym owners only track total revenue. They miss secondary revenue streams, undercharge for services, and leave money on the table. Without real-time analytics, revenue leaks go undetected for months.",
    problemStats: [
      { label: "Revenue lost to failed payments", value: "$2,400/yr" },
      { label: "Untapped secondary revenue", value: "15-25%" },
      { label: "Average underpricing", value: "20%" },
    ],
    solutionTitle: "Complete Revenue Intelligence",
    solutionDescription:
      "GymWyse provides real-time revenue analytics across every stream—memberships, PT, retail, classes, and more. Smart pricing recommendations and automated upsells maximize every member's lifetime value.",
    steps: [
      {
        title: "Revenue Stream Mapping",
        description:
          "See every revenue stream in one dashboard. Memberships, PT, retail, classes, day passes.",
      },
      {
        title: "Smart Pricing",
        description:
          "AI-powered pricing recommendations based on your market, competition, and member willingness to pay.",
      },
      {
        title: "Automated Upsells",
        description:
          "Trigger contextual upsell offers based on member behavior and purchase history.",
      },
      {
        title: "Payment Recovery",
        description:
          "Automated dunning and smart retry logic recovers failed payments before they become churn.",
      },
    ],
    features: [
      {
        title: "Real-Time MRR Dashboard",
        description:
          "Monthly Recurring Revenue tracked in real-time with growth trends and projections.",
      },
      {
        title: "Revenue Per Member",
        description:
          "Track and optimize the lifetime value of every member across all revenue streams.",
      },
      {
        title: "PT & Class Revenue",
        description:
          "Separate tracking for personal training, group classes, and workshop revenue.",
      },
      {
        title: "Retail POS Integration",
        description:
          "Built-in point of sale for supplements, apparel, and wellness products.",
      },
    ],
    ctaHeadline: "Unlock Hidden Revenue",
    ctaDescription:
      "Start your 14-day free trial and see where your revenue leaks are.",
    metaTitle: "Increase Gym Revenue - Revenue Analytics & Optimization | GymWyse",
    metaDescription:
      "Increase gym revenue by up to 23% with real-time analytics, automated upsells, and smart pricing. $99/mo. Free trial.",
  },
  {
    slug: "gym-payment-processing",
    headline: "Gym Payment Processing That Actually Works",
    subheadline:
      "Lower fees, fewer failed payments, and automated recovery. Stop losing money to broken payment systems.",
    problemTitle: "The Payment Problem",
    problemDescription:
      "Gym owners lose thousands every year to failed payments, high processing fees, and manual follow-ups. Legacy systems charge 3-5% per transaction and have no smart retry logic, meaning every failed payment requires manual intervention.",
    problemStats: [
      { label: "Average failed payment rate", value: "8-12%" },
      { label: "Processing fees (legacy)", value: "3-5%" },
      { label: "Revenue lost annually", value: "$5,000+" },
    ],
    solutionTitle: "Smart Payment Infrastructure",
    solutionDescription:
      "GymWyse's payment system is built on Stripe with smart retry logic, automated dunning, and support for ACH, Direct Debit, BPAY, and cards. Lower your processing costs and recover more failed payments automatically.",
    steps: [
      {
        title: "Stripe-Powered Processing",
        description:
          "Industry-leading payment infrastructure with lower fees than legacy gym software.",
      },
      {
        title: "Smart Retry Logic",
        description:
          "Failed payments are automatically retried at optimal times based on banking patterns.",
      },
      {
        title: "Automated Dunning",
        description:
          "Multi-step dunning sequences via SMS and email. Recover payments without awkward conversations.",
      },
      {
        title: "Multi-Method Support",
        description:
          "Accept cards, ACH (US), Direct Debit (UK), BPAY (AU), and local methods worldwide.",
      },
    ],
    features: [
      {
        title: "Lower Processing Fees",
        description:
          "Stripe-powered processing at competitive rates. Save thousands per year.",
      },
      {
        title: "Failed Payment Recovery",
        description:
          "Smart retry + automated dunning recovers up to 70% of failed payments.",
      },
      {
        title: "Multi-Currency Support",
        description:
          "USD, GBP, AUD, AED, SAR, EUR. Serve international members without friction.",
      },
      {
        title: "PCI Compliant",
        description:
          "Full PCI DSS compliance via Stripe. Never store sensitive card data on your systems.",
      },
    ],
    ctaHeadline: "Fix Your Payments",
    ctaDescription:
      "Start your 14-day free trial and see how much you can save on payment processing.",
    metaTitle:
      "Gym Payment Processing - Lower Fees, Fewer Failed Payments | GymWyse",
    metaDescription:
      "Gym payment processing with lower fees, smart retry, and automated dunning. ACH, Direct Debit, BPAY. $99/mo. Free trial.",
  },
  {
    slug: "gym-class-scheduling",
    headline: "Gym Class Scheduling Made Simple",
    subheadline:
      "Automated scheduling, waitlists, and capacity management. No more spreadsheets, no more double-bookings.",
    problemTitle: "The Scheduling Problem",
    problemDescription:
      "Manual scheduling is a nightmare. Double-bookings, no-shows, underbooked classes, and unhappy members. Most gyms still use spreadsheets or basic calendars that can't handle complex schedules across multiple rooms, trainers, and class types.",
    problemStats: [
      { label: "Average no-show rate", value: "20-30%" },
      { label: "Revenue lost to no-shows", value: "$300/week" },
      { label: "Hours spent on scheduling", value: "5+ hrs/week" },
    ],
    solutionTitle: "Intelligent Class Scheduling",
    solutionDescription:
      "GymWyse's scheduling engine handles complex multi-room, multi-trainer schedules with automated waitlists, no-show fees, and capacity optimization. Members book via the app, and your calendar updates in real-time.",
    steps: [
      {
        title: "Visual Schedule Builder",
        description:
          "Drag-and-drop calendar with room, trainer, and equipment assignment.",
      },
      {
        title: "Automated Waitlists",
        description:
          "When classes fill up, waitlisted members are automatically moved in when spots open.",
      },
      {
        title: "No-Show Management",
        description:
          "Late cancel and no-show fees charged automatically. Reduce no-shows by 60%.",
      },
      {
        title: "Member Self-Booking",
        description:
          "Members book, cancel, and join waitlists through the mobile app 24/7.",
      },
    ],
    features: [
      {
        title: "Multi-Room Scheduling",
        description:
          "Manage multiple rooms, courts, and spaces with conflict-free scheduling.",
      },
      {
        title: "Trainer Assignment",
        description:
          "Assign trainers to classes with availability tracking and payroll integration.",
      },
      {
        title: "Capacity Management",
        description:
          "Set class limits, track attendance, and optimize class sizes for revenue.",
      },
      {
        title: "Recurring Classes",
        description:
          "Set up recurring weekly schedules with exception handling for holidays.",
      },
    ],
    ctaHeadline: "Fix Your Scheduling",
    ctaDescription:
      "Start your 14-day free trial and simplify your class scheduling today.",
    metaTitle:
      "Gym Class Scheduling Software - Automated Booking & Waitlists | GymWyse",
    metaDescription:
      "Gym class scheduling with automated waitlists, no-show fees, and member self-booking. Multi-room, multi-trainer. $99/mo. Free trial.",
  },
  {
    slug: "personal-training-software",
    headline: "Personal Training Software for Modern Gyms",
    subheadline:
      "Manage PT sessions, track client progress, and grow your training revenue with purpose-built tools.",
    problemTitle: "The PT Management Problem",
    problemDescription:
      "Personal training is often the highest-margin revenue stream, but it's the hardest to manage. Scheduling conflicts, no-shows, unpaid sessions, and disconnected client tracking make PT operations a constant headache.",
    problemStats: [
      { label: "PT revenue as % of total", value: "25-40%" },
      { label: "Sessions lost to no-shows", value: "15%" },
      { label: "Trainer admin time", value: "8+ hrs/week" },
    ],
    solutionTitle: "Complete PT Management",
    solutionDescription:
      "GymWyse gives trainers and gym owners tools to manage every aspect of personal training—from scheduling and payments to progress tracking and client communication.",
    steps: [
      {
        title: "PT Scheduling",
        description:
          "Clients book directly with their trainer via the app. Automated reminders reduce no-shows.",
      },
      {
        title: "Package Management",
        description:
          "Sell PT packages (10-packs, monthly unlimited, etc.) with automatic session tracking.",
      },
      {
        title: "Progress Tracking",
        description:
          "Trainers log workouts, track measurements, and share progress reports with clients.",
      },
      {
        title: "Revenue Attribution",
        description:
          "Track PT revenue per trainer, per client, and per package type.",
      },
    ],
    features: [
      {
        title: "Client Self-Booking",
        description:
          "Clients book 1-on-1 sessions through the member app with trainer availability.",
      },
      {
        title: "Session Packages",
        description:
          "Flexible package types: session packs, monthly unlimited, pay-per-session.",
      },
      {
        title: "Trainer Dashboard",
        description:
          "Each trainer gets their own dashboard with schedule, clients, and performance metrics.",
      },
      {
        title: "Payroll Integration",
        description:
          "Track trainer compensation per session, per client, or on commission basis.",
      },
    ],
    ctaHeadline: "Grow Your PT Revenue",
    ctaDescription:
      "Start your 14-day free trial and streamline your personal training operations.",
    metaTitle:
      "Personal Training Software - PT Management for Gyms | GymWyse",
    metaDescription:
      "Personal training software with scheduling, packages, progress tracking, and revenue analytics. $99/mo. Free trial.",
  },
  {
    slug: "gym-billing-software",
    headline: "Gym Billing Software That Saves You Hours",
    subheadline:
      "Automated billing, invoicing, and financial reporting. Stop chasing payments and start growing your gym.",
    problemTitle: "The Billing Problem",
    problemDescription:
      "Manual billing eats hours every week. Chasing late payments, generating invoices, reconciling accounts, and managing different billing cycles for different members. Most gym software treats billing as an afterthought.",
    problemStats: [
      { label: "Hours spent on billing", value: "8+ hrs/week" },
      { label: "Late payments per month", value: "15-20%" },
      { label: "Revenue lost to billing errors", value: "$1,200/yr" },
    ],
    solutionTitle: "Automated Billing Engine",
    solutionDescription:
      "GymWyse automates the entire billing lifecycle—from sign-up to renewal. Automated invoicing, proration, billing cycle management, and financial reporting save you hours every week.",
    steps: [
      {
        title: "Automated Invoicing",
        description:
          "Invoices generated and sent automatically based on billing cycle and membership type.",
      },
      {
        title: "Flexible Billing Cycles",
        description:
          "Monthly, quarterly, annual, or custom billing cycles per member or membership type.",
      },
      {
        title: "Proration & Credits",
        description:
          "Automatic proration for mid-cycle upgrades, downgrades, and plan changes.",
      },
      {
        title: "Financial Reporting",
        description:
          "Revenue reports, aging reports, and tax summaries generated automatically.",
      },
    ],
    features: [
      {
        title: "Automated Billing",
        description:
          "Set it and forget it. Billing runs automatically on each member's cycle date.",
      },
      {
        title: "Invoice Management",
        description:
          "Professional invoices with your branding. Sent automatically via email.",
      },
      {
        title: "Tax Compliance",
        description:
          "Automatic tax calculation and reporting for US, UK, AU, and ME markets.",
      },
      {
        title: "Financial Dashboard",
        description:
          "Real-time view of receivables, revenue, and outstanding payments.",
      },
    ],
    ctaHeadline: "Automate Your Billing",
    ctaDescription:
      "Start your 14-day free trial and stop spending hours on manual billing.",
    metaTitle:
      "Gym Billing Software - Automated Invoicing & Payments | GymWyse",
    metaDescription:
      "Gym billing software with automated invoicing, flexible cycles, and financial reporting. $99/mo. Free trial.",
  },
];
