"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-24 md:py-32 bg-deep-space min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-electric-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white">
              Thank You!
            </h1>
            <p className="text-lg text-soft-white leading-relaxed">
              We&apos;ve received your request. A member of our team will reach
              out within 24 hours to schedule your personalized demo.
            </p>
            <p className="text-sm text-cool-gray">
              In the meantime, try our{" "}
              <a
                href="/roi-calculator"
                className="text-electric-green hover:underline"
              >
                ROI Calculator
              </a>{" "}
              to see your potential savings.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              See it in Action
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-pure-white mt-6 leading-[1.1] tracking-tight">
              Book Your Demo
            </h1>
            <p className="text-lg text-soft-white mt-6 leading-relaxed">
              Get a personalized walkthrough of GymWyse. See how revenue
              analytics, churn prediction, and multi-location management work
              for your specific gym.
            </p>

            <div className="space-y-4 mt-10">
              {[
                "30-minute personalized walkthrough",
                "See your data mapped into GymWyse",
                "Get a custom ROI projection",
                "Learn about migration from your current software",
                "No pressure, no obligations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-electric-green shrink-0" />
                  <span className="text-sm text-cool-gray">{item}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 mt-10">
              <div className="text-sm text-dim-gray mb-2">Or start now</div>
              <div className="text-2xl font-bold text-pure-white mb-1">
                14-Day Free Trial
              </div>
              <p className="text-sm text-cool-gray">
                Full access. No credit card required.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h2 className="text-2xl font-bold text-pure-white mb-8">
                Request a Demo
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="First Name"
                    placeholder="Sarah"
                    required
                  />
                  <Input
                    label="Last Name"
                    placeholder="Chen"
                    required
                  />
                </div>
                <Input
                  label="Work Email"
                  type="email"
                  placeholder="sarah@fithub.com"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
                <Input
                  label="Gym Name"
                  placeholder="FitHub Downtown"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Number of Locations"
                    type="number"
                    placeholder="1"
                  />
                  <Input
                    label="Number of Members"
                    type="number"
                    placeholder="500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-cool-gray">
                    Current Software
                  </label>
                  <select className="w-full h-12 bg-deep-space border border-glass-border rounded-lg px-4 text-soft-white focus:outline-none focus:ring-2 focus:ring-electric-green/50 focus:border-electric-green/50 transition-colors">
                    <option value="">Select current software</option>
                    <option value="mindbody">Mindbody</option>
                    <option value="zenplanner">Zen Planner</option>
                    <option value="glofox">Glofox</option>
                    <option value="pushpress">PushPress</option>
                    <option value="other">Other</option>
                    <option value="none">None / Spreadsheets</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-4"
                >
                  Book My Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-dim-gray text-center mt-4">
                  We&apos;ll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
