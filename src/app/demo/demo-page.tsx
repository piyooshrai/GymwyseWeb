"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  ChevronDown,
  BarChart3,
  ShieldAlert,
  LayoutDashboard,
  Smartphone,
  MessageCircleQuestion,
  Calendar,
  Users,
  Clock,
  HeartHandshake,
  Calculator,
  ArrowRightLeft,
  Quote,
} from "lucide-react";
import Link from "next/link";

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

        {/* ── What to Expect in Your Demo ── */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center space-y-4 mb-14">
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Demo Agenda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              What to Expect in Your Demo
            </h2>
            <p className="text-lg text-soft-white max-w-2xl mx-auto">
              Every demo is tailored to your gym, but here is the typical
              structure so you know exactly what you are walking into.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Revenue Dashboard",
                time: "5 min",
                desc: "See real-time MRR, profit margins, and revenue forecasting in action.",
              },
              {
                icon: ShieldAlert,
                title: "Churn Prevention",
                time: "5 min",
                desc: "Watch AI identify at-risk members and trigger automated win-back campaigns.",
              },
              {
                icon: LayoutDashboard,
                title: "Multi-Location View",
                time: "5 min",
                desc: "See how the unified portfolio dashboard compares locations side-by-side.",
              },
              {
                icon: Smartphone,
                title: "Member App",
                time: "5 min",
                desc: "Experience the AI coaching avatars, wearable sync, and booking flow.",
              },
              {
                icon: MessageCircleQuestion,
                title: "Q&A",
                time: "10 min",
                desc: "Ask anything. Pricing, migration, features, integrations — no topic off limits.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-base font-semibold text-pure-white mb-1">
                  {item.title}
                </h3>
                <span className="text-xs text-electric-green font-medium">
                  {item.time}
                </span>
                <p className="text-sm text-cool-gray mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Social Proof Stats ── */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, value: "200+", label: "demos booked" },
              { icon: Users, value: "92%", label: "book a trial after demo" },
              { icon: Clock, value: "30 min", label: "average duration" },
              {
                icon: HeartHandshake,
                value: "Zero",
                label: "sales pressure",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-sapphire-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-sapphire-blue" />
                </div>
                <div className="text-3xl font-bold text-pure-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cool-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Testimonials from Demo Attendees ── */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center space-y-4 mb-14">
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Real Feedback
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
              What Previous Demo Attendees Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I expected a sales pitch. Instead, they loaded our actual data and showed us exactly where we were losing money.",
                author: "Marcus Chen",
                gym: "Apex Performance Lab",
                location: "LA",
              },
              {
                quote:
                  "The churn prediction demo was eye-opening. They identified 12 at-risk members in our data that we had no idea about.",
                author: "Sarah Patel",
                gym: "The Foundry",
                location: "London",
              },
              {
                quote:
                  "Shortest demo I've ever sat through — because they cut the fluff and just showed the product.",
                author: "Tom Bradley",
                gym: "Southern Cross",
                location: "Sydney",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote className="w-8 h-8 text-electric-green/30 mb-4" />
                <blockquote className="text-soft-white leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-glass-border">
                  <div className="w-10 h-10 rounded-full bg-sapphire-blue/20 flex items-center justify-center text-sapphire-blue font-semibold text-sm">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {t.author}
                    </div>
                    <div className="text-xs text-dim-gray">
                      {t.gym} ({t.location})
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ Section ── */}
        <DemoFAQ />

        {/* ── Alternative CTA ── */}
        <motion.div
          className="mt-32 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Not Ready for a Demo?
            </h2>
            <p className="text-base text-soft-white mb-8 max-w-xl mx-auto leading-relaxed">
              No problem. Explore at your own pace. Use the ROI Calculator to
              see your potential savings, or learn about our zero-downtime
              migration process first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  <Calculator className="mr-2 w-4 h-4" />
                  ROI Calculator
                </Button>
              </Link>
              <Link href="/migration">
                <Button variant="secondary" size="lg">
                  <ArrowRightLeft className="mr-2 w-4 h-4" />
                  Migration Guide
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── FAQ Accordion (local component) ── */

const faqItems = [
  {
    question: "How long is the demo?",
    answer:
      "30 minutes. We respect your time — no filler, no rambling slide decks, just a focused walkthrough of the platform tailored to your gym.",
  },
  {
    question: "Will I see my actual data?",
    answer:
      "If you provide read-only access to your current software before the call, yes. Otherwise we use sample data that matches your gym size so the demo still feels relevant.",
  },
  {
    question: "Is there a sales pitch?",
    answer:
      "No. We show the product. If it fits, great. If not, we'll tell you. Our goal is to help you make the right decision, not to close a deal.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Just know your approximate member count, number of locations, and current software. That's it. We handle everything else.",
  },
  {
    question: "What happens after the demo?",
    answer:
      "If you're interested, we set up a 14-day free trial with your data imported. No credit card required. If you're not interested, no follow-up pressure.",
  },
];

function DemoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="mt-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="text-center space-y-4 mb-14">
        <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
          Common Questions
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, index) => (
          <div key={index} className="glass-card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              <span className="text-base font-medium text-pure-white pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-cool-gray shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 text-cool-gray leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
