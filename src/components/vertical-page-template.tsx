"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurredDashboardHero } from "@/components/visuals/blurred-dashboard-hero";
import Link from "next/link";
import type { VerticalPageData } from "@/lib/vertical-data";

const painIcons = [Calendar, Users, TrendingDown];

export function VerticalPageTemplate({ data }: { data: VerticalPageData }) {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for {data.verticalName}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              {data.headline}
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              {data.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/pricing">
                <Button variant="primary" size="lg">
                  See Pricing for {data.verticalName}
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Join studios like {data.exampleGyms}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges {data.verticalName} Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.painPoints.map((pp, i) => {
              const Icon = painIcons[i % painIcons.length];
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {pp.description}
                  </p>
                  <span className="text-xs text-electric-green font-medium">
                    {pp.stat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Features Built for {data.verticalName}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-pure-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  {feature.description}
                </p>
                {i === 0 && (
                  <BlurredDashboardHero
                    metrics={[
                      {
                        label: "Active Classes",
                        value: "23",
                        trend: "+4 this month",
                        trendDirection: "up",
                      },
                      { label: "Weekly Bookings", value: "312" },
                      {
                        label: "Attendance",
                        value: "85%",
                        trendDirection: "up",
                        trend: "+3%",
                      },
                    ]}
                    chartType={i % 2 === 0 ? "area" : "bar"}
                  />
                )}
                {i > 0 && (
                  <div className="glass-card p-4">
                    <div className="bg-slate-surface/50 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-dim-gray text-sm">
                        Feature Preview
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-pure-white mb-6">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold">
                    {data.testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {data.testimonial.author}
                    </div>
                    <div className="text-xs text-cool-gray">
                      {data.testimonial.role}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {data.testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {data.testimonial.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-glass-border/50 last:border-0"
                  >
                    <span className="text-sm text-cool-gray">{stat.label}</span>
                    <span className="text-lg font-bold text-electric-green font-mono">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple Pricing for {data.verticalName}
          </h2>
          <p className="text-lg text-soft-white mb-12">
            $99/month. No setup fees. No contracts. Cancel anytime.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Revenue Analytics + Member App
            </div>
            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-dim-gray mt-6">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
