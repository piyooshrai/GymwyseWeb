import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import {
  ArrowRight,
  BookOpen,
  DollarSign,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Gym Management Insights & Best Practices | GymWyse",
  description:
    "Expert insights on gym revenue optimization, member retention, churn prevention, and multi-location management from the GymWyse team.",
};

const categoryColors: Record<string, string> = {
  Comparisons: "bg-sapphire-blue/20 text-sapphire-blue",
  Technology: "bg-purple-500/20 text-purple-400",
  Regional: "bg-amber-500/20 text-amber-400",
  Revenue: "bg-electric-green/20 text-electric-green",
  Retention: "bg-rose-500/20 text-rose-400",
  Operations: "bg-cyan-500/20 text-cyan-400",
  Migration: "bg-orange-500/20 text-orange-400",
  Analytics: "bg-indigo-500/20 text-indigo-400",
  Engagement: "bg-pink-500/20 text-pink-400",
  Verticals: "bg-teal-500/20 text-teal-400",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Sort posts by date descending (newest first)
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts.find(
  (p) => p.slug === "mindbody-vs-gymwyse-roi-comparison"
)!;
const remainingPosts = sortedPosts.filter(
  (p) => p.slug !== featuredPost.slug
);

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
                  {blogPosts.length}
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
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="glass-card p-8 md:p-12 border border-glass-border relative overflow-hidden block group"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-electric-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-dim-gray flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
                <span className="text-xs font-medium text-electric-green border border-electric-green/30 px-3 py-1 rounded-full">
                  Featured Guide
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-pure-white leading-tight mb-4 group-hover:text-electric-green transition-colors">
                {featuredPost.title}
              </h2>

              <p className="max-w-3xl text-soft-white leading-relaxed mb-6">
                {featuredPost.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-cool-gray">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(featuredPost.date)}
                </span>
                <span>By {featuredPost.author}</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="primary" size="lg">
                  Read the Full Guide
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Link>
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
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card p-6 flex flex-col group hover:border-electric-green/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-electric-green/20 text-electric-green"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-dim-gray flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-pure-white leading-snug group-hover:text-electric-green transition-colors duration-300 mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-cool-gray leading-relaxed flex-1">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-dim-gray">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </span>
                  <span>{post.author}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-glass-border flex items-center text-sm text-electric-green font-medium">
                  Read guide
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
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
