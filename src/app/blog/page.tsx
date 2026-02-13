import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Gym Management Insights & Best Practices | GymWyse",
  description:
    "Expert insights on gym revenue optimization, member retention, churn prevention, and multi-location management from the GymWyse team.",
};

const posts = [
  {
    title: "How to Reduce Gym Churn: 12 Proven Strategies for 2026",
    excerpt:
      "The average gym loses 30% of members annually. Here are 12 data-backed strategies to keep your members engaged and paying.",
    category: "Retention",
    date: "Coming Soon",
  },
  {
    title: "Gym Revenue Analytics: Complete Guide for Owners",
    excerpt:
      "Everything you need to know about tracking MRR, reducing failed payments, and optimizing your revenue streams.",
    category: "Revenue",
    date: "Coming Soon",
  },
  {
    title: "Multi-Location Gym Management: Portfolio Strategy",
    excerpt:
      "How to manage multiple gym locations without losing your mind. Cross-location analytics and centralized operations.",
    category: "Operations",
    date: "Coming Soon",
  },
  {
    title: "Failed Payment Recovery: Get Paid Without Awkward Calls",
    excerpt:
      "Automated payment recovery can save you $2K+/month. Here's how smart retry logic and follow-ups work.",
    category: "Revenue",
    date: "Coming Soon",
  },
  {
    title: "Switching from Mindbody to GymWyse: Complete Guide",
    excerpt:
      "Step-by-step migration guide for gyms switching from Mindbody. What to expect, timeline, and zero-downtime tips.",
    category: "Migration",
    date: "Coming Soon",
  },
  {
    title: "The ROI of Gym Management Software: 2026 Benchmark Report",
    excerpt:
      "Data from 200+ gyms shows the average ROI of modern gym software is 1,708%. See how your gym compares.",
    category: "Revenue",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">
            Expert insights on gym revenue, member retention, and operational
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="glass-card p-6 flex flex-col">
              <span className="text-xs font-medium text-electric-green uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold text-pure-white mt-3 mb-3">
                {post.title}
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 pt-4 border-t border-glass-border">
                <span className="text-xs text-dim-gray">{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-base text-soft-white mb-6">
            Want to be notified when we publish new content?
          </p>
          <Link href="/demo">
            <Button variant="secondary" size="lg">
              Join Our Newsletter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
