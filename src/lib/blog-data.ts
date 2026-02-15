// Blog post metadata — 22 posts spread across Dec 2025 - Feb 2026

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
}

export const blogPosts: BlogPost[] = [
  // ── December 2025 (7 posts) ──
  {
    slug: "mindbody-vs-gymwyse-roi-comparison",
    title: "Mindbody vs. GymWyse: Why ROI-First Tech Wins in 2026",
    description: "A head-to-head comparison of Mindbody and GymWyse across pricing, features, and measurable ROI for independent gyms and multi-location operators.",
    date: "2025-12-02",
    category: "Comparisons",
    readTime: "12 min read",
    author: "GymWyse Product Team",
    authorRole: "Product & Engineering",
  },
  {
    slug: "predicting-gym-churn-ai-behavior-patterns",
    title: "Beyond Attendance: Predicting Gym Churn with AI Behavior Patterns",
    description: "How AI-driven behavioral analysis identifies at-risk members 30 days before cancellation, and the automated retention workflows that save 18 members per month.",
    date: "2025-12-06",
    category: "Technology",
    readTime: "11 min read",
    author: "GymWyse Product Team",
    authorRole: "Data Science & Product",
  },
  {
    slug: "uae-fitness-boom-multi-location-scaling",
    title: "The UAE Fitness Boom: Multi-Location Scaling Strategy for 2026",
    description: "Navigating Dubai, Abu Dhabi, and Riyadh expansion with multi-currency billing, local data hosting, and portfolio-wide P&L management.",
    date: "2025-12-10",
    category: "Regional",
    readTime: "13 min read",
    author: "GymWyse Product Team",
    authorRole: "Regional Strategy",
  },
  {
    slug: "wearable-first-gyms-biometrics-retention",
    title: "Wearable-First Gyms: Syncing Biometrics with Member Retention",
    description: "How integrating Apple Watch, Whoop, and Garmin data into your gym management platform creates measurable retention advantages.",
    date: "2025-12-14",
    category: "Technology",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Integrations & Product",
  },
  {
    slug: "stop-failed-payments-automated-revenue-recovery",
    title: "Stop Failed Payments: The Automated Revenue Recovery Blueprint",
    description: "The exact automated dunning sequence that recovers 40% of failed gym payments without a single awkward phone call. Real numbers from real gyms.",
    date: "2025-12-18",
    category: "Revenue",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Revenue Operations",
  },
  {
    slug: "gym-revenue-optimization-guide-2026",
    title: "The Complete Guide to Gym Revenue Optimization in 2026",
    description: "Three revenue levers every gym owner must master: pricing intelligence, member retention, and payment recovery. Backed by data from 200+ gyms.",
    date: "2025-12-22",
    category: "Revenue",
    readTime: "14 min read",
    author: "GymWyse Product Team",
    authorRole: "Product & Analytics",
  },
  {
    slug: "per-class-profitability-analysis",
    title: "Per-Class Profitability: Why Your Busiest Class Might Be Your Least Profitable",
    description: "How to run true per-class P&L analysis including instructor costs, energy, equipment depreciation, and room utilization to find your real money-makers.",
    date: "2025-12-28",
    category: "Analytics",
    readTime: "9 min read",
    author: "GymWyse Product Team",
    authorRole: "Financial Analytics",
  },

  // ── January 2026 (8 posts) ──
  {
    slug: "gym-churn-reduction-12-strategies",
    title: "How to Reduce Gym Churn: 12 Proven Strategies for 2026",
    description: "The fitness industry averages 30-50% annual member churn. These 12 field-tested strategies, from AI prediction to automated re-engagement, reduce it by 32%.",
    date: "2026-01-03",
    category: "Retention",
    readTime: "11 min read",
    author: "GymWyse Product Team",
    authorRole: "Retention Strategy",
  },
  {
    slug: "multi-location-gym-management-guide",
    title: "Multi-Location Gym Management: From Chaos to Control",
    description: "How to eliminate 4.2 hours of weekly cross-location reporting with unified dashboards, standardized KPIs, and portfolio-level decision making.",
    date: "2026-01-07",
    category: "Operations",
    readTime: "12 min read",
    author: "GymWyse Product Team",
    authorRole: "Operations & Strategy",
  },
  {
    slug: "mindbody-migration-playbook",
    title: "Switching from Mindbody: The Complete Migration Playbook",
    description: "The zero-downtime migration process used by 200+ gyms to switch from Mindbody, including data transfer protocols, staff training timelines, and cost savings.",
    date: "2026-01-11",
    category: "Migration",
    readTime: "13 min read",
    author: "GymWyse Product Team",
    authorRole: "Migration & Onboarding",
  },
  {
    slug: "ai-churn-prediction-machine-learning",
    title: "AI Churn Prediction: How Machine Learning Saves 18 Members Per Month",
    description: "Inside the 14 behavioral signals our churn prediction model analyzes, from visit frequency decay to class booking pattern shifts.",
    date: "2026-01-15",
    category: "Technology",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Data Science",
  },
  {
    slug: "independent-gym-tech-stack-2026",
    title: "The Independent Gym Owner's Tech Stack for 2026",
    description: "The right-sized tech stack for single-location gyms: billing, scheduling, analytics, and member management starting at $99/month. Seven platforms compared.",
    date: "2026-01-19",
    category: "Operations",
    readTime: "11 min read",
    author: "GymWyse Product Team",
    authorRole: "Product Strategy",
  },
  {
    slug: "member-app-engagement-download-to-habit",
    title: "Member App Engagement: From Download to Daily Habit",
    description: "The engagement loop that turns a one-time app download into a daily touchpoint, driving 40% higher weekly engagement and directly lowering churn.",
    date: "2026-01-23",
    category: "Engagement",
    readTime: "9 min read",
    author: "GymWyse Product Team",
    authorRole: "Product & UX",
  },
  {
    slug: "gym-pricing-strategy-data-driven",
    title: "Data-Driven Gym Pricing: Stop Guessing What Members Will Pay",
    description: "How to use real member behavior data, willingness-to-pay analysis, and A/B testing to set prices that maximize both revenue and retention.",
    date: "2026-01-27",
    category: "Revenue",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Revenue Strategy",
  },

  // ── February 2026 (7 posts) ──
  {
    slug: "gym-staff-scheduling-labor-cost-optimization",
    title: "Gym Staff Scheduling: Cut Labor Costs Without Cutting Corners",
    description: "How demand-based staff scheduling, automated shift management, and labor-to-revenue ratios help gyms save 15-20% on their biggest expense.",
    date: "2026-02-01",
    category: "Operations",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Operations",
  },
  {
    slug: "uk-gym-management-gdpr-bacs-compliance",
    title: "UK Gym Management: Navigating GDPR, BACS, and FCA Compliance",
    description: "The complete compliance guide for UK gym owners covering GDPR data handling, BACS Direct Debit setup, FCA regulations, and VAT on fitness services.",
    date: "2026-02-05",
    category: "Regional",
    readTime: "12 min read",
    author: "GymWyse Product Team",
    authorRole: "Compliance & Regional",
  },
  {
    slug: "gym-equipment-tracking-qr-roi",
    title: "QR-Based Equipment Tracking: The ROI of Knowing What Breaks Before It Does",
    description: "How QR code equipment management prevents downtime, extends asset life by 25%, and provides usage data that informs purchasing decisions.",
    date: "2026-02-08",
    category: "Operations",
    readTime: "9 min read",
    author: "GymWyse Product Team",
    authorRole: "Product & Operations",
  },
  {
    slug: "crossfit-box-management-wod-tracking",
    title: "CrossFit Box Management: WOD Tracking, Competition, and Community Building",
    description: "Purpose-built gym management features for CrossFit boxes: WOD programming, leaderboards, competition management, and community engagement tools.",
    date: "2026-02-10",
    category: "Verticals",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Vertical Strategy",
  },
  {
    slug: "yoga-studio-software-guide",
    title: "Yoga Studio Software: Managing Classes, Retreats, and Teacher Certifications",
    description: "How yoga-specific scheduling, teacher certification tracking, retreat management, and retail POS integration simplify studio operations.",
    date: "2026-02-12",
    category: "Verticals",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Vertical Strategy",
  },
  {
    slug: "personal-trainer-client-management",
    title: "Personal Trainer Client Management: From Spreadsheets to Scalable Systems",
    description: "How independent PTs and multi-trainer studios replace spreadsheets with automated scheduling, commission tracking, and client progress dashboards.",
    date: "2026-02-14",
    category: "Verticals",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Vertical Strategy",
  },
  {
    slug: "gym-member-onboarding-first-90-days",
    title: "The First 90 Days: A Gym Member Onboarding Framework That Prevents Early Churn",
    description: "The structured onboarding sequence that reduces first-90-day cancellations by 45%. Automated check-ins, milestone rewards, and trainer introductions.",
    date: "2026-01-31",
    category: "Retention",
    readTime: "11 min read",
    author: "GymWyse Product Team",
    authorRole: "Retention Strategy",
  },
  {
    slug: "gym-recovery-wellness-revenue-stream",
    title: "Recovery and Wellness: Building a High-Margin Revenue Stream Inside Your Gym",
    description: "How cold plunge, sauna, massage, and recovery services generate 35% margins and reduce member churn by creating daily visit habits.",
    date: "2026-02-07",
    category: "Revenue",
    readTime: "10 min read",
    author: "GymWyse Product Team",
    authorRole: "Revenue Strategy",
  },
];

// Helper to get posts by month
export function getPostsByMonth(year: number, month: number) {
  return blogPosts.filter((p) => {
    const d = new Date(p.date);
    return d.getFullYear() === year && d.getMonth() + 1 === month;
  });
}
