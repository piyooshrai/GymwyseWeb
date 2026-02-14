export interface ProblemSolutionStep {
  title: string;
  description: string;
}

export interface ProblemSolutionStat {
  label: string;
  value: string;
}

export interface ProblemSolutionFAQ {
  question: string;
  answer: string;
}

export interface ProblemSolutionCaseStudy {
  gym: string;
  location: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  quote: string;
  author: string;
  role: string;
}

export interface ProblemSolutionComparison {
  competitor: string;
  rows: { feature: string; gymwyse: string; competitor: string }[];
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
  features: { title: string; description: string; details?: string[] }[];
  caseStudy?: ProblemSolutionCaseStudy;
  comparison?: ProblemSolutionComparison;
  faq?: ProblemSolutionFAQ[];
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
        details: [
          "Color-coded risk tiers (low, medium, high, critical) updated daily based on 12+ behavioral signals",
          "One-click action buttons to send a personal message, offer a discount, or schedule a staff check-in",
          "Historical risk trend charts showing how each member's engagement has changed over the past 90 days",
          "Filterable by membership type, join date, trainer, and last visit date to prioritize outreach",
          "Exportable reports for weekly staff meetings and retention strategy planning",
        ],
      },
      {
        title: "Automated Win-Back Campaigns",
        description:
          "Pre-built email and SMS sequences triggered by behavior changes.",
        details: [
          "Library of 15+ pre-written campaign templates covering missed visits, failed payments, and engagement drops",
          "Multi-step sequences with configurable delays (e.g., Day 1 email, Day 3 SMS, Day 7 personal call reminder)",
          "Dynamic personalization tokens including member name, favorite classes, and last trainer interaction",
          "A/B testing support to compare subject lines, send times, and offer types across campaigns",
          "Campaign performance dashboard showing open rates, click-through rates, and members recovered",
        ],
      },
      {
        title: "Failed Payment Recovery",
        description:
          "Automated dunning with smart retry logic. Recover up to 70% of failed payments.",
        details: [
          "Intelligent retry scheduling that attempts charges at optimal times based on payroll and banking cycles",
          "Escalating dunning sequence: friendly reminder, payment update request, final notice before suspension",
          "Self-service payment update portal so members can fix expired cards without calling the front desk",
          "Real-time webhook notifications to staff when high-value members have recurring payment failures",
        ],
      },
      {
        title: "Engagement Tracking",
        description:
          "Track class attendance, app usage, check-ins, and purchase frequency.",
        details: [
          "Unified engagement score combining visit frequency, class bookings, app logins, and retail purchases",
          "Automated milestone notifications (e.g., 100th check-in, 1-year anniversary) to celebrate loyal members",
          "Inactivity alerts when a member's visit pattern drops below their personal average by 40% or more",
          "Cohort analysis showing retention rates by join month, membership type, and referral source",
          "Integration with access control systems for accurate, hands-free check-in tracking",
        ],
      },
    ],
    caseStudy: {
      gym: "Summit Strength & Fitness",
      location: "Denver, Colorado",
      challenge:
        "Summit Strength had 1,200 members but was losing an average of 54 members per month—a 4.5% monthly churn rate. The front desk team only found out about cancellations after they happened, and manual outreach efforts were sporadic and inconsistent. The gym was spending $18,000 per month on Facebook and Google ads to replace lost members.",
      solution:
        "After implementing GymWyse's churn prediction and automated re-engagement tools, Summit Strength set up behavioral triggers for attendance drops, failed payments, and engagement declines. Staff received daily at-risk member alerts and used the recommended actions to reach out proactively. Automated win-back campaigns handled members showing early warning signs.",
      results: [
        { metric: "Monthly churn rate", value: "4.5% to 2.1%" },
        { metric: "Members saved per month", value: "29 members" },
        { metric: "Annual revenue retained", value: "$208,800" },
        { metric: "Ad spend reduction", value: "35% decrease" },
        { metric: "Staff outreach time", value: "3 hrs/week saved" },
      ],
      quote:
        "We went from losing 54 members a month to losing 25. That's 29 extra members paying $600/year each. GymWyse paid for itself in the first week.",
      author: "Marcus Rivera",
      role: "Owner, Summit Strength & Fitness",
    },
    comparison: {
      competitor: "Mindbody",
      rows: [
        {
          feature: "AI churn prediction",
          gymwyse: "ML-powered risk scoring with 12+ behavioral signals",
          competitor: "No AI churn prediction; manual reporting only",
        },
        {
          feature: "At-risk member alerts",
          gymwyse: "Real-time automated alerts via dashboard, email, and push",
          competitor: "No proactive at-risk alerts",
        },
        {
          feature: "Automated win-back campaigns",
          gymwyse: "Pre-built multi-step SMS and email sequences with A/B testing",
          competitor: "Basic email marketing; no behavior-triggered automation",
        },
        {
          feature: "Failed payment recovery",
          gymwyse: "Smart retry logic with automated dunning and self-service portal",
          competitor: "Basic retry; manual follow-up required for dunning",
        },
        {
          feature: "Engagement scoring",
          gymwyse: "Unified score across visits, bookings, app usage, and purchases",
          competitor: "Basic attendance tracking; no composite engagement score",
        },
        {
          feature: "Retention reporting",
          gymwyse: "Cohort analysis, churn forecasting, and revenue impact reports",
          competitor: "Standard membership reports; limited retention-specific analytics",
        },
        {
          feature: "Pricing",
          gymwyse: "Starts at $99/mo with all retention tools included",
          competitor: "Starts at $139/mo; advanced features require higher tiers",
        },
      ],
    },
    faq: [
      {
        question: "How does GymWyse calculate member churn risk?",
        answer:
          "GymWyse analyzes 12+ behavioral signals including visit frequency changes, class booking patterns, app engagement, payment history, and historical comparisons against members who have previously cancelled. Each member receives a daily-updated risk score from 0-100, with scores above 70 flagged as high-risk.",
      },
      {
        question: "What triggers an at-risk member alert?",
        answer:
          "Alerts are triggered by several conditions: a member's visit frequency drops 40% or more below their personal average, a payment fails and isn't resolved within 48 hours, a member hasn't visited in 14+ days (configurable), or their overall engagement score drops below a threshold you set. You can customize all trigger thresholds from the settings panel.",
      },
      {
        question:
          "How quickly can I see results after setting up churn prevention?",
        answer:
          "Most gyms see measurable improvements within 30 days. The AI model begins scoring members immediately using your historical data. Automated campaigns start reaching at-risk members on day one. Gyms typically see a 15-25% reduction in churn within the first 60 days, growing to 30-40% after 90 days as the model learns your specific member patterns.",
      },
      {
        question: "Can I customize the automated win-back campaigns?",
        answer:
          "Yes. GymWyse provides 15+ pre-built campaign templates that you can use as-is or fully customize. You control the messaging, timing, channel (email, SMS, or both), and any offers included. You can also build campaigns from scratch using the drag-and-drop sequence builder and set your own behavioral triggers.",
      },
      {
        question:
          "Does the churn prediction work for small gyms with fewer members?",
        answer:
          "Yes. The AI model is pre-trained on aggregated patterns from thousands of gyms, so it works effectively even for gyms with 100-200 members. As your data accumulates, the model fine-tunes its predictions to your specific member base. Smaller gyms often see even faster results because staff can personally follow up with every at-risk member.",
      },
      {
        question:
          "What's the difference between churn rate and retention rate?",
        answer:
          "Churn rate is the percentage of members who cancel within a given period (monthly or annually). Retention rate is the inverse—the percentage who stay. If your monthly churn rate is 4%, your monthly retention rate is 96%. GymWyse tracks both metrics and reports them alongside industry benchmarks so you can see how your gym compares.",
      },
      {
        question:
          "Can I integrate GymWyse's churn tools with my existing CRM or email platform?",
        answer:
          "GymWyse includes built-in email and SMS tools for win-back campaigns, but it also integrates with popular platforms like Mailchimp, ActiveCampaign, and HubSpot via Zapier and native API connections. At-risk member data can be synced to your CRM for staff follow-up workflows.",
      },
      {
        question: "How does failed payment recovery reduce churn?",
        answer:
          "Failed payments are the leading cause of involuntary churn—members who leave not because they want to, but because their payment lapses and nobody follows up. GymWyse's smart retry logic attempts charges at optimal times, while automated dunning sequences prompt members to update their payment details. This recovers up to 70% of failed payments before they result in cancellation.",
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
        details: [
          "Live MRR calculation broken down by membership tier, add-ons, and PT packages with month-over-month trends",
          "Net revenue waterfall showing new MRR, expansion MRR, contraction MRR, and churned MRR in a single view",
          "12-month revenue projection based on current growth rate, seasonal trends, and planned price changes",
          "Configurable alerts when MRR drops below target thresholds or growth slows unexpectedly",
          "Shareable reports for business partners, investors, or accountants with one-click PDF export",
        ],
      },
      {
        title: "Revenue Per Member",
        description:
          "Track and optimize the lifetime value of every member across all revenue streams.",
        details: [
          "Per-member revenue breakdown across membership dues, PT sessions, class drop-ins, retail, and ancillary services",
          "Lifetime value (LTV) calculation factoring in membership duration, average monthly spend, and referral value",
          "Segment members by revenue tier to identify your top 20% of spenders and tailor offers accordingly",
          "Revenue-per-visit metric to understand which members are underutilizing and ripe for upsell opportunities",
        ],
      },
      {
        title: "PT & Class Revenue",
        description:
          "Separate tracking for personal training, group classes, and workshop revenue.",
        details: [
          "Per-trainer revenue tracking showing gross revenue, sessions delivered, and average revenue per session",
          "Class profitability analysis factoring in trainer cost, room utilization, and average attendance",
          "Workshop and event revenue tracking with ticket sales, attendance rates, and profit margins",
          "Seasonal trend analysis showing which class types and time slots generate the most revenue per quarter",
          "Automatic revenue attribution when members purchase PT packages or class packs through the app",
        ],
      },
      {
        title: "Retail POS Integration",
        description:
          "Built-in point of sale for supplements, apparel, and wellness products.",
        details: [
          "Barcode scanning and inventory management for supplements, drinks, apparel, and accessories",
          "Margin tracking per product category showing markup, cost of goods, and net profit in real-time",
          "Automated reorder alerts when stock levels drop below configurable minimum thresholds",
          "Member purchase history to power personalized product recommendations and bundle offers",
        ],
      },
    ],
    caseStudy: {
      gym: "Ironworks Gym",
      location: "Austin, Texas",
      challenge:
        "Ironworks Gym had 800 members and was generating $68,000/month in total revenue, but owner Sarah Chen suspected the gym was leaving money on the table. PT was underpriced compared to local competitors, retail inventory was poorly tracked, and there was no system to upsell existing members into higher-value services. Revenue reporting was done manually in spreadsheets once a month.",
      solution:
        "After deploying GymWyse's revenue analytics, Sarah discovered three immediate opportunities: PT sessions were priced 18% below market rate, 340 members had never purchased a single add-on service, and retail margins were being eroded by untracked shrinkage. She used GymWyse's pricing recommendations to adjust PT rates, set up automated upsell campaigns targeting underutilized members, and implemented the retail POS with inventory tracking.",
      results: [
        { metric: "Monthly revenue increase", value: "$68K to $83.6K (23%)" },
        { metric: "PT revenue growth", value: "31% increase" },
        { metric: "Members purchasing add-ons", value: "12% to 34%" },
        { metric: "Retail shrinkage reduction", value: "Eliminated $4,200/yr" },
        { metric: "Time saved on reporting", value: "6 hours/month" },
      ],
      quote:
        "I was running a profitable gym but had no idea how much revenue I was missing. GymWyse showed me exactly where the money was hiding. The 23% increase basically came from pricing correctly and asking existing members to buy more—no new ad spend required.",
      author: "Sarah Chen",
      role: "Owner, Ironworks Gym",
    },
    comparison: {
      competitor: "Zen Planner",
      rows: [
        {
          feature: "Real-time MRR tracking",
          gymwyse:
            "Live MRR dashboard with net revenue waterfall and 12-month projections",
          competitor:
            "Monthly revenue totals; no real-time MRR breakdown or projections",
        },
        {
          feature: "Revenue per member analytics",
          gymwyse:
            "Per-member LTV, revenue breakdown by stream, and segmentation tools",
          competitor:
            "Basic per-member revenue; no LTV calculation or segmentation",
        },
        {
          feature: "Automated upsell campaigns",
          gymwyse:
            "Behavior-triggered upsell offers via email, SMS, and in-app notifications",
          competitor:
            "No automated upsell functionality; manual outreach required",
        },
        {
          feature: "Pricing recommendations",
          gymwyse:
            "AI-powered suggestions based on market data, competitor pricing, and demand",
          competitor: "No pricing intelligence or recommendations",
        },
        {
          feature: "Retail POS",
          gymwyse:
            "Built-in POS with barcode scanning, inventory tracking, and margin analysis",
          competitor:
            "Third-party POS integration required; no native retail tools",
        },
        {
          feature: "Revenue reporting",
          gymwyse:
            "Real-time dashboards with exportable reports and scheduled email summaries",
          competitor:
            "Standard reports with basic filtering; limited export options",
        },
        {
          feature: "Pricing",
          gymwyse: "Starts at $99/mo with all revenue tools included",
          competitor:
            "Starts at $117/mo; advanced reporting requires higher tiers",
        },
      ],
    },
    faq: [
      {
        question: "How does GymWyse track Monthly Recurring Revenue (MRR)?",
        answer:
          "GymWyse calculates MRR in real-time by summing all active recurring membership fees, PT packages with recurring billing, and any subscription-based add-ons. The dashboard breaks MRR into categories: new MRR (from new sign-ups), expansion MRR (from upgrades and add-ons), contraction MRR (from downgrades), and churned MRR (from cancellations). This gives you a complete picture of revenue momentum, not just a total number.",
      },
      {
        question: "What types of revenue streams can GymWyse track?",
        answer:
          "GymWyse tracks every revenue stream in your gym: membership dues, personal training sessions and packages, group class drop-in fees, retail product sales, day passes, workshop and event fees, locker rentals, towel services, and any custom service you define. All streams roll up into a unified revenue dashboard so you see the complete picture.",
      },
      {
        question: "How do the automated upsell campaigns work?",
        answer:
          "Upsell campaigns are triggered by member behavior. For example, a member who attends 3+ group classes per week but has no PT sessions might receive an offer for an introductory PT package. A member who buys protein shakes at the front desk could get a discount on a monthly supplement subscription. You configure the triggers and offers, and GymWyse sends them automatically via email, SMS, or in-app notification.",
      },
      {
        question:
          "Can GymWyse help me figure out if my membership prices are too low?",
        answer:
          "Yes. GymWyse's pricing analysis tool compares your rates against anonymized data from gyms in similar markets, factoring in location, amenities, and membership type. It also analyzes your members' price sensitivity based on upgrade and downgrade patterns. If your pricing is significantly below market, you'll see a recommendation with suggested new rates and a projected revenue impact.",
      },
      {
        question:
          "How does GymWyse calculate member lifetime value (LTV)?",
        answer:
          "LTV is calculated by multiplying the average monthly revenue per member (across all streams) by the average membership duration in months. GymWyse also factors in referral value—if a member refers others who sign up, that attributed revenue is included. LTV is tracked at the individual and segment level, so you can compare LTV across membership types, join sources, and demographics.",
      },
      {
        question:
          "Does GymWyse integrate with my accounting software?",
        answer:
          "GymWyse integrates with QuickBooks Online, Xero, and FreshBooks for automated revenue syncing. Transactions are categorized and synced daily, so your books stay up to date without manual data entry. You can also export CSV and PDF reports for any date range to share with your accountant.",
      },
      {
        question:
          "What's the difference between GymWyse's revenue analytics and a regular spreadsheet?",
        answer:
          "Spreadsheets require manual data entry, are updated infrequently, and can't trigger actions. GymWyse pulls data automatically from your payment processor, POS, and booking system in real-time. It calculates metrics like MRR, LTV, and revenue per visit automatically, and can trigger upsell campaigns or alerts based on the data—something a spreadsheet can never do.",
      },
      {
        question:
          "Can I track revenue for multiple gym locations in one dashboard?",
        answer:
          "Yes. GymWyse supports multi-location revenue tracking with location-level and consolidated views. You can compare MRR, revenue per member, and growth rates across locations. Each location can have its own pricing, membership types, and revenue targets while rolling up into a single owner dashboard.",
      },
    ],
    ctaHeadline: "Unlock Hidden Revenue",
    ctaDescription:
      "Start your 14-day free trial and see where your revenue leaks are.",
    metaTitle:
      "Increase Gym Revenue - Revenue Analytics & Optimization | GymWyse",
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
        details: [
          "Transparent Stripe pricing at 2.9% + 30c for cards and 0.8% capped at $5 for ACH bank payments",
          "No hidden markup, gateway fees, or monthly minimums on top of Stripe's published rates",
          "Annual savings calculator in your dashboard showing exactly how much you save versus your previous processor",
          "Volume-based rate negotiations available for gyms processing over $50,000/month",
        ],
      },
      {
        title: "Failed Payment Recovery",
        description:
          "Smart retry + automated dunning recovers up to 70% of failed payments.",
        details: [
          "Intelligent retry engine that analyzes failure reason codes and schedules retries at optimal intervals",
          "Configurable retry schedule: default is Day 1, Day 3, Day 5, and Day 7 after initial failure",
          "Three-step dunning sequence via email and SMS with customizable messaging and escalation timing",
          "Self-service card update portal where members can fix expired or declined cards without calling staff",
          "Recovery dashboard showing total failed amount, recovered amount, and outstanding balance in real-time",
        ],
      },
      {
        title: "Multi-Currency Support",
        description:
          "USD, GBP, AUD, AED, SAR, EUR. Serve international members without friction.",
        details: [
          "Native support for 6 currencies with automatic exchange rate handling for cross-border payments",
          "Local payment methods per region: ACH in the US, Direct Debit (BACS) in the UK, BPAY in Australia",
          "Members see prices and pay in their local currency while you receive settlements in your preferred currency",
          "Tax-inclusive and tax-exclusive pricing options configurable per currency and region",
        ],
      },
      {
        title: "PCI Compliant",
        description:
          "Full PCI DSS compliance via Stripe. Never store sensitive card data on your systems.",
        details: [
          "All card data is tokenized and stored by Stripe—no sensitive payment information touches your servers",
          "PCI DSS Level 1 compliance inherited through Stripe's certified infrastructure",
          "Secure payment forms using Stripe Elements embedded directly in your member sign-up and billing pages",
          "Regular security audits and encryption for all payment-related API communications",
        ],
      },
    ],
    caseStudy: {
      gym: "Pacific Coast Athletic Club",
      location: "San Diego, California",
      challenge:
        "Pacific Coast had 950 members and was processing payments through a legacy gym software provider that charged 3.8% per transaction with a $0.50 gateway fee. Their failed payment rate averaged 11%, and each failure required a front desk staff member to manually call or email the member. The gym was losing an estimated $42,000/year to failed payments and high processing fees combined.",
      solution:
        "Pacific Coast switched to GymWyse's Stripe-powered payment processing, enabling smart retry logic, automated dunning sequences, and ACH payment options for members who preferred bank transfers. The self-service card update portal eliminated most manual follow-up calls. Staff set up a three-step dunning sequence: a friendly email on Day 1, an SMS reminder on Day 3, and a final notice with a direct link to update payment on Day 5.",
      results: [
        { metric: "Failed payments recovered", value: "$36,000/year" },
        { metric: "Processing fee savings", value: "$8,400/year" },
        { metric: "Failed payment rate", value: "11% down to 3.2%" },
        { metric: "Manual follow-up calls", value: "Reduced by 85%" },
        { metric: "Members switched to ACH", value: "22% of members" },
      ],
      quote:
        "Our old processor was quietly bleeding us dry. Between the high fees and failed payments nobody was following up on, we were losing over $40K a year. GymWyse recovered $36K in the first year just from the smart retry and dunning alone.",
      author: "David Okafor",
      role: "General Manager, Pacific Coast Athletic Club",
    },
    comparison: {
      competitor: "Legacy Gym Processors (ABC Fitness, Jonas, CSI)",
      rows: [
        {
          feature: "Processing fees",
          gymwyse:
            "Stripe rates: 2.9% + 30c cards, 0.8% ACH (capped at $5)",
          competitor:
            "3-5% per transaction plus gateway fees and monthly minimums",
        },
        {
          feature: "Smart retry logic",
          gymwyse:
            "AI-optimized retry timing based on failure codes and banking patterns",
          competitor:
            "Basic retry on fixed schedule; no intelligence on timing or failure type",
        },
        {
          feature: "Automated dunning",
          gymwyse:
            "Multi-step email and SMS sequences with self-service card update portal",
          competitor:
            "Manual follow-up required; no automated member communication",
        },
        {
          feature: "Payment methods",
          gymwyse:
            "Cards, ACH, Direct Debit, BPAY, and 20+ local methods via Stripe",
          competitor:
            "Cards and ACH only; limited international payment options",
        },
        {
          feature: "PCI compliance",
          gymwyse:
            "Level 1 PCI DSS via Stripe; zero card data on your systems",
          competitor:
            "Varies by provider; some require on-premise PCI compliance efforts",
        },
        {
          feature: "Setup time",
          gymwyse:
            "Connect Stripe account in under 10 minutes; start processing same day",
          competitor:
            "Multi-week onboarding; merchant account underwriting required",
        },
        {
          feature: "Contract terms",
          gymwyse: "Month-to-month; no long-term contract or cancellation fees",
          competitor:
            "Typically 2-3 year contracts with early termination fees",
        },
      ],
    },
    faq: [
      {
        question:
          "What payment methods does GymWyse support?",
        answer:
          "GymWyse supports all major credit and debit cards (Visa, Mastercard, American Express, Discover), ACH bank transfers in the US, BACS Direct Debit in the UK, BPAY in Australia, and SEPA Direct Debit in Europe. Through Stripe, additional local payment methods are available in 40+ countries. Members can also pay via Apple Pay and Google Pay where supported.",
      },
      {
        question: "What are GymWyse's payment processing fees?",
        answer:
          "GymWyse passes through Stripe's published rates with no additional markup. For US-based gyms, that's 2.9% + 30 cents per card transaction and 0.8% capped at $5 per ACH bank transfer. International card rates vary by country. There are no gateway fees, monthly minimums, or hidden charges. You can see a full fee breakdown in your GymWyse dashboard.",
      },
      {
        question: "How does the smart retry logic work for failed payments?",
        answer:
          "When a payment fails, GymWyse reads the failure reason code (e.g., insufficient funds, expired card, processor decline) and schedules retries accordingly. For insufficient funds, retries are timed around common payroll dates. For expired cards, the system sends an immediate update request instead of retrying. The default schedule retries on Day 1, Day 3, Day 5, and Day 7, but you can customize these intervals.",
      },
      {
        question:
          "Can members update their own payment information?",
        answer:
          "Yes. When a payment fails, the automated dunning sequence includes a secure link to GymWyse's self-service payment update portal. Members can update their card details, switch to ACH, or add a backup payment method—all without calling the front desk. The portal is mobile-friendly and uses Stripe's secure elements, so no card data passes through your systems.",
      },
      {
        question:
          "How long does it take to switch from my current payment processor to GymWyse?",
        answer:
          "Most gyms complete the switch in 1-2 business days. You connect your Stripe account (or create a new one) in under 10 minutes. GymWyse migrates your existing member payment methods via secure token transfer if your current processor supports it. If not, members are prompted to re-enter their payment details through a branded, secure flow during their next login.",
      },
      {
        question:
          "Is GymWyse PCI compliant? Do I need to worry about card data security?",
        answer:
          "Yes, GymWyse is fully PCI DSS compliant through Stripe. No sensitive card data ever touches your servers or GymWyse's servers. All payment information is tokenized and stored by Stripe, which is a PCI Level 1 certified service provider—the highest level of certification. You don't need to complete any PCI compliance questionnaires or audits on your end.",
      },
      {
        question:
          "What happens if a member's payment fails and the dunning sequence doesn't recover it?",
        answer:
          "After the automated dunning sequence completes (typically 7-14 days), you can configure what happens next: freeze the membership and restrict access until payment is resolved, downgrade to a limited plan, or flag for manual staff follow-up. You stay in control of the escalation policy. GymWyse never cancels a membership automatically without your explicit configuration.",
      },
      {
        question:
          "Can I offer members the option to pay via bank transfer instead of credit card?",
        answer:
          "Yes. ACH bank transfers (US), BACS Direct Debit (UK), and SEPA Direct Debit (EU) are all supported and can be offered as payment options during sign-up or anytime via the member portal. Bank transfers typically have lower failure rates and lower processing fees than cards, so many gyms actively encourage members to switch. GymWyse can send targeted campaigns to card-paying members promoting the bank transfer option.",
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
        details: [
          "Color-coded room view showing all spaces (studios, courts, pools, outdoor areas) in a single calendar",
          "Automatic conflict detection that prevents double-booking a room, trainer, or piece of shared equipment",
          "Room-specific capacity limits and equipment configurations that update available class types per space",
          "Side-by-side room comparison view to identify underutilized spaces and optimize room allocation",
          "Support for shared and split spaces (e.g., dividing a gym floor into two zones for concurrent classes)",
        ],
      },
      {
        title: "Trainer Assignment",
        description:
          "Assign trainers to classes with availability tracking and payroll integration.",
        details: [
          "Trainer availability calendar where instructors set their own weekly availability and block off time",
          "Qualification-based assignment ensuring only certified trainers can be assigned to specific class types",
          "Automatic substitute finder that alerts qualified, available trainers when someone calls out sick",
          "Per-class and per-hour pay rate tracking that feeds directly into payroll calculations",
        ],
      },
      {
        title: "Capacity Management",
        description:
          "Set class limits, track attendance, and optimize class sizes for revenue.",
        details: [
          "Configurable capacity limits per class type and room, with overbooking buffers to account for expected no-shows",
          "Real-time attendance tracking via check-in (QR code, app, or front desk) with live headcount display",
          "Utilization reports showing average fill rates per class, time slot, and trainer over configurable periods",
          "Automated recommendations to add, remove, or reschedule classes based on historical demand patterns",
          "Revenue-per-spot analytics showing which classes generate the most revenue relative to capacity",
        ],
      },
      {
        title: "Recurring Classes",
        description:
          "Set up recurring weekly schedules with exception handling for holidays.",
        details: [
          "Weekly recurring templates that auto-generate class instances with one-click schedule publishing",
          "Holiday and closure calendar with bulk cancellation of affected classes and automatic member notification",
          "Schedule versioning so you can plan and preview next month's schedule before publishing it",
          "Season and cycle support for gyms that run 6- or 12-week program blocks with registration periods",
        ],
      },
    ],
    caseStudy: {
      gym: "FitHub Studios",
      location: "Chicago, Illinois",
      challenge:
        "FitHub ran 45 classes per week across 3 studio rooms with 12 instructors. Scheduling was managed in Google Calendar with a shared spreadsheet for bookings. No-shows averaged 28%, costing an estimated $1,400/week in lost revenue from empty spots that could have gone to waitlisted members. Double-bookings happened 2-3 times per month, causing member complaints and instructor frustration. The front desk spent 5+ hours per week managing bookings manually.",
      solution:
        "FitHub migrated to GymWyse's scheduling system, enabling member self-booking via the app, automated waitlist management, and a no-show fee policy ($10 for no-shows, $5 for late cancellations within 2 hours). Trainers set their availability directly in the system, and the conflict detection engine eliminated double-bookings entirely. Automated reminders were sent 24 hours and 2 hours before each class.",
      results: [
        { metric: "No-show rate reduction", value: "28% down to 11% (60% decrease)" },
        { metric: "Weekly revenue recovered", value: "$840/week from filled spots" },
        { metric: "Double-bookings", value: "Eliminated completely" },
        { metric: "Front desk scheduling time", value: "5 hrs/week to 30 min/week" },
        { metric: "Waitlist conversion rate", value: "72% of waitlisted members attend" },
        { metric: "Member satisfaction (NPS)", value: "Increased 18 points" },
      ],
      quote:
        "The no-show fee alone changed everything. But the real win was the waitlist—when someone cancels, the next person gets notified instantly and 72% of them show up. We went from empty spots in full classes to actually full classes.",
      author: "Priya Sharma",
      role: "Co-founder, FitHub Studios",
    },
    comparison: {
      competitor: "Mindbody",
      rows: [
        {
          feature: "Multi-room scheduling",
          gymwyse:
            "Visual multi-room calendar with conflict detection and split-space support",
          competitor:
            "Multi-location support but limited room-level conflict detection",
        },
        {
          feature: "Waitlist management",
          gymwyse:
            "Automated waitlist with instant notification and one-tap booking when spots open",
          competitor:
            "Waitlist available but requires manual processing on some plans",
        },
        {
          feature: "No-show fees",
          gymwyse:
            "Configurable no-show and late cancellation fees charged automatically to member's card",
          competitor:
            "No-show tracking available; automated fee charging requires add-on integration",
        },
        {
          feature: "Trainer availability",
          gymwyse:
            "Self-service trainer availability with qualification-based assignment and sub finder",
          competitor:
            "Staff scheduling available; no automatic substitute finder",
        },
        {
          feature: "Class utilization analytics",
          gymwyse:
            "Fill rate, revenue per spot, and demand-based scheduling recommendations",
          competitor:
            "Basic attendance reports; no revenue-per-spot or demand optimization",
        },
        {
          feature: "Member self-booking",
          gymwyse:
            "Native mobile app with book, cancel, and waitlist join—no account linking required",
          competitor:
            "Member booking via Mindbody app (shared with competitors) or branded web widget",
        },
        {
          feature: "Pricing",
          gymwyse: "Starts at $99/mo with all scheduling features included",
          competitor:
            "Starts at $139/mo; class scheduling requires Essentials plan or higher",
        },
      ],
    },
    faq: [
      {
        question: "Can members book classes through a mobile app?",
        answer:
          "Yes. GymWyse provides a branded member app (iOS and Android) where members can browse the schedule, book classes, join waitlists, cancel bookings, and view their upcoming reservations. Push notifications remind them 24 hours and 2 hours before class. Members can also book via your website using an embedded scheduling widget.",
      },
      {
        question: "How do automated waitlists work?",
        answer:
          "When a class reaches capacity, additional members are added to a waitlist in order. When a spot opens (due to cancellation or no-show), the next person on the waitlist receives an instant push notification and has a configurable window (default: 30 minutes) to confirm their spot. If they don't confirm, the spot moves to the next person. This happens automatically with no staff intervention required.",
      },
      {
        question:
          "Can I charge members for no-shows and late cancellations?",
        answer:
          "Yes. You set your no-show fee (e.g., $10) and late cancellation fee (e.g., $5) per class or globally. You also define the cancellation window (e.g., 2 hours before class). Fees are charged automatically to the member's card on file. Members see the fee policy when booking and receive a warning when cancelling inside the window. You can waive fees on a case-by-case basis from the admin dashboard.",
      },
      {
        question:
          "How does GymWyse prevent double-bookings?",
        answer:
          "GymWyse's scheduling engine checks three dimensions before confirming any booking: room availability, trainer availability, and equipment availability. If any resource is already allocated for a time slot, the system prevents the conflict and suggests alternative times. This applies to both admin-created classes and member self-bookings, so double-bookings are structurally impossible.",
      },
      {
        question:
          "Can I manage different class types with different booking rules?",
        answer:
          "Yes. Each class type can have its own booking rules: capacity limit, advance booking window (e.g., bookings open 7 days before), cancellation window, no-show fee, waitlist size, and eligibility requirements (e.g., members-only, specific membership tiers, or prerequisite class completion). This lets you manage everything from open yoga classes to invite-only specialty workshops.",
      },
      {
        question:
          "How do I handle instructor substitutions when someone calls in sick?",
        answer:
          "When you mark an instructor as unavailable for a class, GymWyse automatically identifies qualified, available substitutes based on their certifications and availability calendar. It sends them a notification asking if they can cover. You can also manually assign a substitute. Either way, booked members receive an automatic notification about the instructor change.",
      },
      {
        question:
          "Can I set up recurring class schedules or do I have to create each class individually?",
        answer:
          "GymWyse supports recurring schedule templates. You build your weekly template once—assigning classes to rooms, times, and trainers—and the system auto-generates class instances for as many weeks as you specify. You can make one-off changes to individual instances (e.g., cancelling a class for a holiday) without affecting the recurring template.",
      },
      {
        question:
          "What reports does GymWyse provide for class scheduling?",
        answer:
          "GymWyse provides utilization reports (fill rate per class and time slot), attendance reports (check-in vs. booked), no-show reports (frequency by member and class type), trainer workload reports (hours and classes per week), revenue-per-spot analysis, and demand forecasting. All reports are filterable by date range, class type, trainer, and room, and can be exported as CSV or PDF.",
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
        details: [
          "Real-time trainer availability calendar showing open slots, with configurable booking windows (e.g., book up to 14 days in advance)",
          "Preferred trainer assignment so clients default to their trainer's calendar when opening the booking screen",
          "Automated booking confirmations and reminders sent via push notification, email, and SMS",
          "Late cancellation and no-show policies enforced automatically with configurable fees per trainer or globally",
          "Recurring session booking for clients who train at the same time each week (e.g., every Tuesday at 7am)",
        ],
      },
      {
        title: "Session Packages",
        description:
          "Flexible package types: session packs, monthly unlimited, pay-per-session.",
        details: [
          "Configurable package types: 5-packs, 10-packs, 20-packs, monthly unlimited, and pay-as-you-go sessions",
          "Automatic session deduction when a client checks in or a trainer marks a session complete",
          "Expiration rules per package (e.g., 10-pack expires after 90 days) with automated renewal reminders",
          "Package balance visible to both trainer and client in the app, with low-balance alerts at configurable thresholds",
          "Upgrade and downgrade paths so clients can switch packages mid-cycle with automatic proration",
        ],
      },
      {
        title: "Trainer Dashboard",
        description:
          "Each trainer gets their own dashboard with schedule, clients, and performance metrics.",
        details: [
          "Daily and weekly schedule view with client names, session types, and session notes from previous appointments",
          "Client roster with quick access to each client's package balance, attendance history, and progress data",
          "Performance metrics: sessions delivered, revenue generated, client retention rate, and average sessions per client",
          "Goal tracking per trainer (e.g., deliver 25 sessions/week, maintain 90% client retention) with progress indicators",
        ],
      },
      {
        title: "Payroll Integration",
        description:
          "Track trainer compensation per session, per client, or on commission basis.",
        details: [
          "Flexible pay models: flat rate per session, percentage of session revenue, tiered rates by client count, or hourly",
          "Automatic payroll calculation based on completed sessions, with adjustments for no-shows and late cancellations",
          "Commission tracking for trainers who sell their own packages, with split attribution for gym-referred clients",
          "Pay period reports exportable to your payroll provider or accounting software (CSV, PDF, or direct integration)",
          "Bonus tracking for trainers who hit session volume or revenue targets within a pay period",
        ],
      },
    ],
    caseStudy: {
      gym: "Elevate Performance Studio",
      location: "Nashville, Tennessee",
      challenge:
        "Elevate had 6 full-time personal trainers delivering approximately 180 sessions per week. Scheduling was done via a shared Google Calendar, and package tracking was managed in a spreadsheet that was frequently out of date. Trainers spent an average of 8 hours per week on admin tasks—texting clients to confirm, tracking sessions manually, and reconciling package balances. No-shows cost an estimated $600/week, and the studio had no way to measure individual trainer performance or identify revenue opportunities.",
      solution:
        "After implementing GymWyse's PT management tools, Elevate moved all scheduling to the client self-booking system with automated reminders. Session packages were digitized with automatic deduction and expiration tracking. Each trainer received their own dashboard with performance metrics, and payroll was calculated automatically based on completed sessions. A $15 no-show fee was introduced and enforced automatically.",
      results: [
        { metric: "Revenue per trainer", value: "22% increase ($1,100/mo per trainer)" },
        { metric: "No-show rate", value: "15% down to 5%" },
        { metric: "Trainer admin time", value: "8 hrs/week to 1.5 hrs/week" },
        { metric: "Package renewal rate", value: "64% to 81%" },
        { metric: "Total PT revenue growth", value: "$43,200 to $52,700/month" },
      ],
      quote:
        "Our trainers used to spend half a day each week on admin. Now they spend that time training clients and building relationships. The 22% revenue increase came from doing more sessions, not raising prices—because our trainers finally had time to actually train.",
      author: "Jason McCullough",
      role: "Owner, Elevate Performance Studio",
    },
    comparison: {
      competitor: "Trainerize",
      rows: [
        {
          feature: "Client scheduling",
          gymwyse:
            "Integrated self-booking within the gym member app with trainer availability and no-show enforcement",
          competitor:
            "Client scheduling available but separate from gym membership app; requires Trainerize app",
        },
        {
          feature: "Session packages",
          gymwyse:
            "Flexible packages with auto-deduction, expiration, proration, and renewal reminders",
          competitor:
            "Basic package tracking; limited automation for expirations and renewals",
        },
        {
          feature: "Progress tracking",
          gymwyse:
            "Workout logging, measurements, photos, and progress reports shared in-app",
          competitor:
            "Strong workout programming and tracking; good exercise library and program templates",
        },
        {
          feature: "Payroll integration",
          gymwyse:
            "Built-in payroll calculation with flexible pay models and exportable reports",
          competitor:
            "No built-in payroll; requires third-party integration for trainer compensation",
        },
        {
          feature: "Gym-wide integration",
          gymwyse:
            "PT fully integrated with membership, billing, scheduling, and revenue analytics",
          competitor:
            "Standalone PT platform; requires integration with separate gym management software",
        },
        {
          feature: "Revenue attribution",
          gymwyse:
            "Per-trainer, per-client, and per-package revenue tracking in real-time",
          competitor:
            "Limited revenue reporting; primarily focused on trainer-client interaction, not business analytics",
        },
        {
          feature: "Pricing",
          gymwyse:
            "Included in GymWyse subscription starting at $99/mo; no per-trainer fees",
          competitor:
            "Starts at $5/mo per trainer; costs scale with team size and can exceed $100/mo for larger teams",
        },
      ],
    },
    faq: [
      {
        question:
          "Can clients book personal training sessions through the app?",
        answer:
          "Yes. Clients open the GymWyse member app, select their trainer, and see available time slots based on the trainer's published availability. They can book a single session or set up recurring weekly appointments. Booking confirmations and reminders are sent automatically. If a trainer's schedule changes, affected clients are notified immediately.",
      },
      {
        question:
          "How does GymWyse handle PT session packages and tracking?",
        answer:
          "You create package types (e.g., 10-session pack for $500, monthly unlimited for $800) and assign them to clients. When a trainer marks a session as complete or a client checks in, one session is automatically deducted. Both trainer and client can see the remaining balance in the app. Low-balance alerts and renewal reminders are sent automatically based on thresholds you set.",
      },
      {
        question:
          "Can I track individual trainer revenue and performance?",
        answer:
          "Yes. Each trainer has a performance dashboard showing sessions delivered, revenue generated, client retention rate, average sessions per client per month, and no-show rate. As the gym owner, you see a consolidated view comparing all trainers side by side. This data helps you identify top performers, coach underperformers, and make informed hiring decisions.",
      },
      {
        question:
          "How does payroll work for personal trainers in GymWyse?",
        answer:
          "You configure each trainer's pay structure: flat rate per session (e.g., $35/session), percentage of session revenue (e.g., 50%), tiered rates based on client volume, or hourly. GymWyse automatically calculates pay based on completed sessions during each pay period, accounting for no-shows and cancellations per your policy. Pay reports can be exported as CSV or PDF for your payroll provider.",
      },
      {
        question:
          "Can trainers log workouts and track client progress?",
        answer:
          "Yes. Trainers can log exercises, sets, reps, and weights for each session directly in the app. They can also record client measurements (weight, body fat, circumferences), upload progress photos, and generate progress reports. Clients see their workout history and progress trends in their own app, which improves accountability and engagement.",
      },
      {
        question:
          "What happens when a PT client no-shows?",
        answer:
          "When a client doesn't check in within a configurable grace period (default: 15 minutes after session start), the session is marked as a no-show. If you've configured a no-show fee, it's charged automatically to the client's card on file. The session may or may not be deducted from their package depending on your policy settings. The trainer and client both receive notification, and the no-show is logged in the client's history.",
      },
      {
        question:
          "Can I sell PT packages online through my website?",
        answer:
          "Yes. GymWyse provides embeddable purchase widgets for your website where new or existing members can browse PT package options, select their preferred trainer, and purchase directly with a credit card or bank transfer. The package is instantly activated in the system, and the client can begin booking sessions immediately through the app.",
      },
      {
        question:
          "Does GymWyse support small group personal training?",
        answer:
          "Yes. In addition to 1-on-1 sessions, you can configure small group training (2-4 clients per session) with shared or split pricing. Each participant's package is debited independently. Trainers see all participants in their session view, and each client's workout can be logged individually. Small group sessions can also be offered as their own bookable class type through the scheduling system.",
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
        details: [
          "Scheduled billing engine processes all recurring charges overnight on each member's individual billing date",
          "Support for multiple billing anchors: sign-up date, 1st of month, or custom date per member or plan",
          "Automatic handling of weekends and bank holidays—charges are moved to the next business day",
          "Batch billing dashboard showing upcoming charges, processed charges, and failures for each billing cycle",
          "Configurable grace periods for new members (e.g., first charge 7 days after sign-up) to improve conversion",
        ],
      },
      {
        title: "Invoice Management",
        description:
          "Professional invoices with your branding. Sent automatically via email.",
        details: [
          "Customizable invoice templates with your gym logo, colors, contact information, and payment terms",
          "Itemized invoices showing membership dues, add-on services, PT packages, and any credits or discounts applied",
          "Automatic email delivery on charge date with PDF attachment and a secure link to view and pay online",
          "Full invoice history accessible to both staff and members, searchable by date range, status, and amount",
        ],
      },
      {
        title: "Tax Compliance",
        description:
          "Automatic tax calculation and reporting for US, UK, AU, and ME markets.",
        details: [
          "Configurable tax rates per service type and location (e.g., membership exempt, PT taxable at 8.25%)",
          "Support for US state and local sales tax, UK VAT (including zero-rated and exempt categories), Australian GST, and GCC VAT",
          "Automatic tax summary reports for monthly, quarterly, and annual filing periods",
          "Tax-inclusive and tax-exclusive pricing options so you can display prices the way your market expects",
          "Tax ID and registration number fields on invoices for compliance in markets that require them",
        ],
      },
      {
        title: "Financial Dashboard",
        description:
          "Real-time view of receivables, revenue, and outstanding payments.",
        details: [
          "Accounts receivable aging report showing outstanding balances by 30, 60, 90, and 90+ day buckets",
          "Cash flow dashboard with daily, weekly, and monthly views of money collected vs. expected",
          "Revenue recognition tracking that separates collected revenue from deferred revenue (for annual plans paid upfront)",
          "Automated end-of-month financial summary emailed to owners and accountants on the 1st of each month",
        ],
      },
    ],
    caseStudy: {
      gym: "Cornerstone Fitness",
      location: "Manchester, United Kingdom",
      challenge:
        "Cornerstone Fitness had 650 members across three membership tiers, each with different billing cycles and pricing. The gym's office manager, Lisa, spent 8+ hours every week generating invoices in Excel, reconciling payments in the bank account, chasing late payments via phone calls, and preparing VAT returns. Billing errors averaged 3-4 per month, resulting in member complaints and approximately £1,000/year in revenue lost to undercharges that were never corrected.",
      solution:
        "Cornerstone migrated to GymWyse's automated billing engine, which took over invoice generation, payment collection, and financial reporting. Each membership tier was configured with its own billing cycle, pricing, and VAT treatment. Automated dunning replaced manual late-payment phone calls. The financial dashboard gave Lisa real-time visibility into receivables and cash flow, while automated VAT reports eliminated the quarterly scramble.",
      results: [
        { metric: "Hours saved on billing", value: "8 hrs/week to 45 min/week" },
        { metric: "Billing errors", value: "3-4/month to zero" },
        { metric: "Late payment rate", value: "18% to 6%" },
        { metric: "Revenue recovered from errors", value: "£1,000/year" },
        { metric: "VAT reporting time", value: "Full day to 10 minutes" },
        { metric: "Annual labor cost savings", value: "£7,800/year" },
      ],
      quote:
        "I used to dread the first of the month. Now billing just happens. I went from spending every Monday doing invoices and chasing payments to spending 45 minutes reviewing a dashboard that tells me everything is already done. GymWyse gave me my Mondays back.",
      author: "Lisa Hargreaves",
      role: "Office Manager, Cornerstone Fitness",
    },
    comparison: {
      competitor: "Manual Billing (Spreadsheets & Bank Transfers)",
      rows: [
        {
          feature: "Invoice generation",
          gymwyse:
            "Automatic invoicing on each member's billing date with branded PDF delivery",
          competitor:
            "Manual creation in Excel or Word; copy-paste member details for each invoice",
        },
        {
          feature: "Payment collection",
          gymwyse:
            "Automatic charge to card or bank account on file; no member action required",
          competitor:
            "Members must manually transfer or pay; staff must verify each payment",
        },
        {
          feature: "Late payment follow-up",
          gymwyse:
            "Automated dunning via email and SMS with escalation and self-service payment link",
          competitor:
            "Manual phone calls and emails; inconsistent follow-up depending on staff availability",
        },
        {
          feature: "Proration",
          gymwyse:
            "Automatic proration for mid-cycle plan changes, upgrades, and downgrades",
          competitor:
            "Manual calculation required; high risk of errors and member disputes",
        },
        {
          feature: "Tax handling",
          gymwyse:
            "Automatic tax calculation, application, and reporting per jurisdiction",
          competitor:
            "Manual tax calculation per invoice; quarterly reporting compiled from spreadsheets",
        },
        {
          feature: "Financial reporting",
          gymwyse:
            "Real-time dashboard with receivables aging, cash flow, and revenue recognition",
          competitor:
            "Monthly reconciliation in spreadsheets; reports are always outdated by the time they're compiled",
        },
        {
          feature: "Error rate",
          gymwyse:
            "Near-zero billing errors; system-enforced pricing and tax rules",
          competitor:
            "3-5% error rate typical with manual entry; undercharges often go unnoticed",
        },
        {
          feature: "Time investment",
          gymwyse: "30-60 minutes/week for review and exception handling",
          competitor:
            "8-12 hours/week for a gym with 500+ members",
        },
      ],
    },
    faq: [
      {
        question:
          "How does automated billing work in GymWyse?",
        answer:
          "GymWyse's billing engine runs automatically on each member's billing date. It calculates the amount owed based on their membership type, add-ons, and any credits or prorations, generates an itemized invoice, charges their payment method on file, and sends the invoice via email—all without staff intervention. You review a daily billing summary dashboard showing what was processed, what succeeded, and what needs attention.",
      },
      {
        question:
          "Can I set up different billing cycles for different membership types?",
        answer:
          "Yes. Each membership type can have its own billing cycle: monthly, quarterly, semi-annual, or annual. Within each type, you can also choose the billing anchor—either the member's sign-up date (so everyone bills on their own anniversary) or a fixed date like the 1st of each month. You can even set custom cycles for individual members if needed.",
      },
      {
        question:
          "How does GymWyse handle proration when a member upgrades or downgrades?",
        answer:
          "When a member changes plans mid-cycle, GymWyse automatically calculates the prorated credit for unused days on their current plan and the prorated charge for remaining days on the new plan. The net difference is either charged immediately or credited to their next invoice, depending on your configuration. Members see a clear breakdown of the proration on their invoice.",
      },
      {
        question:
          "Does GymWyse generate invoices automatically?",
        answer:
          "Yes. Every charge generates a professional, itemized invoice that is emailed to the member as a PDF. Invoices include your gym branding, line items for all charges and credits, applicable taxes, and payment confirmation. Members can also access their full invoice history through the member app or portal at any time.",
      },
      {
        question:
          "How does GymWyse handle tax calculation and reporting?",
        answer:
          "You configure tax rates per service type and location in the settings. GymWyse automatically applies the correct tax to each line item on every invoice. At the end of each filing period (monthly, quarterly, or annually), the system generates a tax summary report showing total taxable revenue, tax collected, and tax owed—broken down by rate and category. This report is formatted for easy filing or handoff to your accountant.",
      },
      {
        question:
          "Can I offer discounts, promotions, or free trial periods?",
        answer:
          "Yes. GymWyse supports percentage and fixed-amount discounts, promotional pricing for a set number of billing cycles (e.g., 50% off for the first 3 months), free trial periods with automatic conversion to paid billing, and coupon codes for online sign-ups. All discounts are reflected on the member's invoice with clear line items showing the original price and discount applied.",
      },
      {
        question:
          "What financial reports does GymWyse provide?",
        answer:
          "GymWyse provides: accounts receivable aging (30/60/90+ days), daily and monthly cash collection reports, revenue by membership type and service category, MRR and growth trend reports, deferred revenue tracking for annual plans, tax summary reports, and failed payment and recovery reports. All reports are available in the dashboard and exportable as CSV or PDF. You can also schedule automated email delivery of key reports.",
      },
      {
        question:
          "Can I migrate my existing billing data into GymWyse?",
        answer:
          "Yes. GymWyse provides a guided import tool that accepts CSV files with member details, membership types, billing dates, and payment methods. For gyms switching from another software platform, GymWyse's onboarding team assists with data migration to ensure billing continuity—no member misses a charge or receives a duplicate. Payment method migration is handled securely through Stripe's token import process where supported.",
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
