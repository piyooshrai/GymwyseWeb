"use client";

import { InfiniteLogoCarousel } from "@/components/infinite-logo-carousel";
import { AnimatedMetric } from "@/components/animated-metric";

export function SocialProofStrip() {
  return (
    <section className="py-12 border-y border-glass-border bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-dim-gray text-xs font-medium tracking-wider uppercase mb-8">
          Trusted by Independent Gyms and Multi-Location Operators
        </p>

        <InfiniteLogoCarousel className="mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pure-white">
              <AnimatedMetric value={200} suffix="+" />
            </div>
            <div className="text-sm text-cool-gray mt-1">Active Gyms</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pure-white">
              <AnimatedMetric value={12} />
            </div>
            <div className="text-sm text-cool-gray mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pure-white">
              $<AnimatedMetric value={45} suffix="M+" />
            </div>
            <div className="text-sm text-cool-gray mt-1">Revenue Tracked</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pure-white">
              <AnimatedMetric value={98} suffix="%" />
            </div>
            <div className="text-sm text-cool-gray mt-1">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
