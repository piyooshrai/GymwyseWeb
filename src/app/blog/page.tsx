import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  BarChart3,
  CreditCard,
  Building2,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Gym Management Insights & Best Practices | GymWyse",
  description:
    "Expert insights on gym revenue optimization, member retention, churn prevention, and multi-location management from the GymWyse team.",
};

const articles = [
  {
    title: "How to Reduce Gym Churn: 12 Proven Strategies for 2026",
    category: "Retention",
    readTime: "8 min read",
    icon: Users,
    href: "/solutions/reduce-churn",
    summary:
      "The fitness industry averages 30-50% annual member churn, costing the typical 1,000-member gym over $180,000 in lost revenue every year. This guide breaks down 12 field-tested strategies, from AI-driven churn prediction that flags at-risk members 30 days early, to automated re-engagement sequences that have reduced churn by 32% across our partner gyms.",
  },
  {
    title: "Gym Revenue Analytics: The Metrics That Actually Matter",
    category: "Revenue",
    readTime: "10 min read",
    icon: BarChart3,
    href: "/platform/revenue-analytics",
    summary:
      "Most gym owners track total revenue and member count. Neither tells you where money is actually made or lost. This guide covers per-service P&L analysis, true MRR calculation (not the vanity version), and why tracking failed payment recovery alone is worth $2,100/month for the average gym. Stop guessing. Start measuring what moves the needle.",
  },
  {
    title: "Multi-Location Gym Management: From Chaos to Control",
    category: "Operations",
    readTime: "9 min read",
    icon: Building2,
    href: "/solutions/multi-location",
    summary:
      "Our data shows multi-location owners waste an average of 4.2 hours per week on cross-location reporting and reconciliation. This guide covers how to build a unified dashboard across all locations, standardize KPIs without killing local autonomy, and spot underperforming locations before they become a cash drain. Includes a framework for portfolio-level decision making.",
  },
  {
    title:
      "Failed Payment Recovery: The $25,200 You're Leaving on the Table",
    category: "Revenue",
    readTime: "7 min read",
    icon: CreditCard,
    href: "/roi-calculator",
    summary:
      "The average gym loses $2,100 per month to failed payments, adding up to $25,200 per year in preventable revenue leakage. Smart retry logic, optimized billing windows, and automated member outreach recover up to 40% of those failures without a single awkward phone call. This guide shows you the exact recovery stack that works.",
  },
  {
    title: "Switching from Mindbody: The Complete Migration Playbook",
    category: "Migration",
    readTime: "11 min read",
    icon: Shield,
    href: "/migration",
    summary:
      "Gyms switching from Mindbody save an average of $2,060 per year in software costs alone, before accounting for revenue gained from better analytics and automation. This playbook covers the full migration timeline, data transfer protocols, staff training, and how to achieve zero downtime during the switch. Over 200 gyms have used this exact process.",
  },
  {
    title:
      "Per-Class Profitability: Why Your Busiest Class Might Be Your Least Profitable",
    category: "Analytics",
    readTime: "8 min read",
    icon: TrendingUp,
    href: "/solutions/boutique-fitness",
    summary:
      "A packed 6 AM spin class feels like a win, until you factor in instructor premiums, peak-hour energy costs, and equipment depreciation. This guide walks through per-class P&L modeling, including instructor cost allocation, room utilization rates, and the hidden margins most owners miss. The results will change how you build your schedule.",
  },
  {
    title:
      "AI Churn Prediction: How Machine Learning Saves 18 Members Per Month",
    category: "Technology",
    readTime: "9 min read",
    icon: Shield,
    href: "/solutions/reduce-churn",
    summary:
      "GymWyse's churn prediction model analyzes 14 behavioral signals, from visit frequency decay to class booking pattern shifts, to flag at-risk members 30 days before they cancel. On average, gyms using AI-driven retention workflows save 18 members per month through automated re-engagement sequences triggered by early warning scores.",
  },
  {
    title: "The Independent Gym Owner's Tech Stack for 2026",
    category: "Operations",
    readTime: "10 min read",
    icon: BookOpen,
    href: "/solutions/independent-gyms",
    summary:
      "Independent gym owners don't need enterprise-grade bloat, and they shouldn't pay for it. This guide maps the right-sized tech stack for single-location gyms: billing, scheduling, member management, and analytics, all starting at $99/month. We compare seven platforms across 22 criteria so you can stop overpaying for features you'll never use.",
  },
  {
    title: "Member App Engagement: From Download to Daily Habit",
    category: "Engagement",
    readTime: "7 min read",
    icon: Smartphone,
    href: "/platform/member-app",
    summary:
      "Most gym apps get downloaded and forgotten. Gyms using branded member apps with AI-powered workout avatars, smart push notifications, and in-app booking see a 40% increase in weekly engagement. This guide covers the engagement loop that turns a one-time download into a daily touchpoint, and why that translates directly to lower churn.",
  },
];

const categoryColors: Record<string, string> = {
  Retention: "text-electric-green",
  Revenue: "text-electric-green",
  Operations: "text-electric-green",
  Migration: "text-electric-green",
  Analytics: "text-electric-green",
  Technology: "text-electric-green",
  Engagement: "text-electric-green",
};

export default function BlogPage() {
  return (
    <main className="bg-deep-space">
      {/* ── Hero Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-sm font-medium text-electric-green uppercase tracking-widest">
              Resources &amp; Guides
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              The Gym Owner&apos;s Playbook
            </h1>
            <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-2xl mx-auto">
              Data-backed strategies for revenue growth, member retention, and
              operational excellence. Written by gym operators, for gym
              operators.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="glass-card p-6 grid grid-cols-3 divide-x divide-glass-border">
              <div className="text-center px-4">
                <p className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                  200+
                </p>
                <p className="text-xs md:text-sm text-cool-gray mt-1">
                  Gyms Contributing Data
                </p>
              </div>
              <div className="text-center px-4">
                <p className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                  12
                </p>
                <p className="text-xs md:text-sm text-cool-gray mt-1">
                  In-Depth Guides
                </p>
              </div>
              <div className="text-center px-4">
                <p className="text-2xl md:text-3xl font-bold text-electric-green font-mono">
                  $2.4M
                </p>
                <p className="text-xs md:text-sm text-cool-gray mt-1">
                  Revenue Recovered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Guide ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-8 md:p-12 border border-glass-border relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-electric-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
                  Revenue
                </span>
                <span className="text-xs text-dim-gray flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  12 min read
                </span>
                <span className="text-xs font-medium text-electric-green border border-electric-green/30 px-3 py-1 rounded-full">
                  Featured Guide
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-pure-white leading-tight mb-6">
                The Complete Guide to Gym Revenue Optimization in 2026
              </h2>

              <div className="max-w-3xl space-y-4 text-soft-white leading-relaxed">
                <p>
                  Our analysis of over 200 gym P&amp;L statements revealed a
                  startling finding: 73% of gym owners cannot identify their
                  per-service profit margins. They know total revenue. They know
                  total costs. But the gap between those two numbers is a black
                  box, and inside that black box, money is quietly disappearing
                  through mispriced memberships, underperforming classes, and
                  uncollected payments.
                </p>
                <p>
                  Revenue optimization for gyms rests on three fundamental
                  levers: pricing intelligence, member retention, and payment
                  recovery. Most owners focus exclusively on the first, adjusting
                  rates once a year based on gut feel. Meanwhile, the average gym
                  loses $2,100 per month to failed payments alone, and annual
                  churn rates between 30-50% mean you&apos;re refilling a leaky
                  bucket every single quarter. Fixing any one of these levers
                  adds five figures to your bottom line annually. Fixing all
                  three compounds the effect.
                </p>
                <p>
                  This guide walks through each lever with real numbers from real
                  gyms, including the exact dashboard setup that lets you see
                  per-service margins in real time, the automated recovery
                  sequences that recapture 40% of failed payments, and the
                  retention workflows that have reduced churn by 32% across our
                  partner network. Whether you run a single boutique studio or a
                  multi-location portfolio, the framework scales.
                </p>
                <p className="text-cool-gray">
                  Based on aggregated, anonymized data from 200+ gyms on the
                  GymWyse platform. Updated for 2026 market conditions including
                  rising operational costs and shifting consumer expectations
                  around digital fitness experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/blog/gym-revenue-optimization">
                  <Button variant="primary" size="lg">
                    Read the Full Guide
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button variant="secondary" size="lg">
                    <DollarSign className="w-4 h-4" />
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Grid ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                Latest Guides &amp; Research
              </h2>
              <p className="text-cool-gray mt-2">
                Actionable insights backed by data from 200+ gym operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              const Icon = article.icon;
              return (
                <Link
                  key={i}
                  href={article.href}
                  className="glass-card p-6 flex flex-col group hover:border-electric-green/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${categoryColors[article.category] ?? "text-electric-green"}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-dim-gray flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-electric-green/10 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-electric-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-pure-white leading-snug group-hover:text-electric-green transition-colors duration-300">
                      {article.title}
                    </h3>
                  </div>

                  <p className="text-sm text-cool-gray leading-relaxed flex-1">
                    {article.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-glass-border flex items-center text-sm text-electric-green font-medium">
                    Read guide
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-2 rounded-lg bg-electric-green/10 inline-flex mb-6">
            <BookOpen className="w-6 h-6 text-electric-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Get Smarter About Your Gym Business
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-xl mx-auto">
            Join 2,000+ gym owners who get weekly insights on revenue,
            retention, and growth. Practical strategies you can implement the
            same week you read them.
          </p>
          <Link href="/demo">
            <Button variant="primary" size="xl">
              Subscribe to Weekly Insights
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <p className="text-xs text-dim-gray mt-4">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
            Done Reading? Start Doing.
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-10 max-w-2xl mx-auto">
            See how GymWyse turns these strategies into automated revenue.
            Every guide on this page maps to a feature you can activate in
            your first week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="xl">
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
