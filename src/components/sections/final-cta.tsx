"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-t from-deep-space via-midnight to-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Ready to See Your ROI?
          </h2>
          <p className="text-lg text-soft-white">
            Join 200+ gyms that switched to software that actually makes them
            money.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="xl">
                Book a Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-dim-gray">
            No credit card required &bull; 14-day free trial &bull; Cancel
            anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
