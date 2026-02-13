import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - Real Results from Real Gyms | GymWyse",
  description:
    "See how gyms like yours are using GymWyse to reduce churn, recover revenue, and grow MRR. Real data from real gym owners.",
};

const caseStudies = [
  {
    gym: "FitHub Downtown",
    location: "Los Angeles, CA",
    type: "Independent Gym",
    headline: "From 3.5% to 2.3% churn in 90 days",
    metrics: [
      { label: "Annual Savings", value: "$76,800" },
      { label: "Churn Reduction", value: "32%" },
      { label: "MRR Growth", value: "+18.3%" },
    ],
    quote:
      "GymWyse caught 18 members who were about to churn this month. That's $3,600 in saved revenue.",
    author: "Sarah Chen",
    role: "Owner",
  },
  {
    gym: "Apex Fitness",
    location: "Dallas, TX",
    type: "Multi-Location (4 gyms)",
    headline: "Managing 4 locations with one dashboard",
    metrics: [
      { label: "Admin Time Saved", value: "60%" },
      { label: "Revenue Visibility", value: "Real-time" },
      { label: "Per-Location Savings", value: "$500/mo" },
    ],
    quote:
      "Before GymWyse, I had to log into 4 different dashboards. Now I see everything in 30 seconds.",
    author: "Marcus Johnson",
    role: "Regional Director",
  },
  {
    gym: "Zen Warrior Studio",
    location: "Portland, OR",
    type: "Boutique Fitness",
    headline: "40% boost in member app engagement",
    metrics: [
      { label: "App Engagement", value: "+40%" },
      { label: "Retention Boost", value: "+28%" },
      { label: "Revenue Growth", value: "+22%" },
    ],
    quote:
      "The member app is insane. Engagement is up 40%. Members actually love their AI avatar coaches.",
    author: "Priya Patel",
    role: "Owner",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Case Studies
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">
            Real results from real gyms. See how GymWyse is helping gym owners
            track revenue, reduce churn, and grow.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, i) => (
            <div key={i} className="glass-card p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium text-electric-green bg-electric-green/10 px-3 py-1 rounded-full">
                  {study.type}
                </span>
                <span className="text-xs text-dim-gray">{study.location}</span>
              </div>

              <h2 className="text-2xl font-bold text-pure-white mb-2">
                {study.gym}
              </h2>
              <h3 className="text-lg text-sapphire-blue mb-6">
                {study.headline}
              </h3>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {study.metrics.map((metric, j) => (
                  <div key={j}>
                    <div className="text-2xl font-bold text-electric-green font-mono">
                      {metric.value}
                    </div>
                    <div className="text-xs text-dim-gray">{metric.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="text-base text-soft-white italic border-l-2 border-electric-green/30 pl-4 mb-6">
                &ldquo;{study.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sapphire-blue/20 flex items-center justify-center text-sapphire-blue text-xs font-bold">
                  {study.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-pure-white">
                    {study.author}
                  </div>
                  <div className="text-xs text-dim-gray">
                    {study.role}, {study.gym}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-base text-soft-white mb-6">
            Ready to become our next success story?
          </p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Book Your Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
