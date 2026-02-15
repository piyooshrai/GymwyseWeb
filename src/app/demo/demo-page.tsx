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
  Calendar,
  Users,
  Clock,
  HeartHandshake,
  Calculator,
  ArrowRightLeft,
  Quote,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

/* ─────────────── Demo Agenda Steps ─────────────── */

const agendaSteps = [
  {
    time: "Minutes 1-3",
    title: "Understanding Your Gym",
    desc: "We start by learning about your business — your gym size, membership type, number of locations, current software, and biggest operational pain points. This lets us customize the entire demo to show you exactly what matters most to your daily workflow.",
  },
  {
    time: "Minutes 4-10",
    title: "Live Platform Walkthrough",
    desc: "A hands-on tour of the GymWyse platform tailored to your needs. We walk through the revenue analytics dashboard, churn prediction engine, class scheduling, member check-in, payment processing, and the branded member app — all using data that mirrors your gym.",
  },
  {
    time: "Minutes 11-13",
    title: "ROI Calculation with Your Numbers",
    desc: "We plug your actual member count, monthly revenue, and churn rate into our ROI model and show you exactly how much GymWyse could save you per month. Most gyms discover $1,500 to $3,000 in recoverable revenue they did not know they were losing.",
  },
  {
    time: "Minutes 14-15",
    title: "Q&A and Next Steps",
    desc: "Ask anything — pricing, migration timelines, integrations, or feature requests. If GymWyse is a fit, we help you start a 14-day free trial with your data imported. If not, no pressure and no follow-up spam.",
  },
];

/* ─────────────── What Happens After ─────────────── */

const journeySteps = [
  {
    icon: Calendar,
    step: "1",
    title: "Book Your Demo",
    desc: "Pick a time that works for you. Takes 15 minutes.",
  },
  {
    icon: BarChart3,
    step: "2",
    title: "Personalized Walkthrough",
    desc: "See the platform with your gym data and use case.",
  },
  {
    icon: Zap,
    step: "3",
    title: "Start 14-Day Trial",
    desc: "Full access, no credit card, real data imported.",
  },
  {
    icon: Target,
    step: "4",
    title: "Full Onboarding in 2 Weeks",
    desc: "Our team migrates your data and trains your staff.",
  },
  {
    icon: TrendingUp,
    step: "5",
    title: "See ROI in 30 Days",
    desc: "Track recovered revenue and reduced churn from day one.",
  },
];

/* ─────────────── Testimonials ─────────────── */

const testimonials = [
  {
    quote:
      "I expected a generic sales pitch. Instead, they loaded our actual data and showed us exactly where we were losing $2,400 a month in failed payments. I signed up before the demo was even over.",
    author: "Marcus Chen",
    gym: "Apex Performance Lab",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "The churn prediction demo was eye-opening. They identified 12 at-risk members in our data that we had no idea about. Within two weeks of switching, we had already saved three of them.",
    author: "Sarah Patel",
    gym: "The Foundry",
    location: "London, UK",
  },
  {
    quote:
      "Shortest, most useful software demo I have ever sat through. No filler slides, no corporate jargon — just a focused walkthrough that showed me exactly how GymWyse would work for my two locations.",
    author: "Tom Bradley",
    gym: "Southern Cross Fitness",
    location: "Sydney, AU",
  },
];

/* ─────────────── FAQ Data ─────────────── */

const faqItems = [
  {
    question: "How long is the demo?",
    answer:
      "The demo takes approximately 15 minutes. We respect your time and keep it focused — no filler slides, no rambling pitch decks. Just a concise, personalized walkthrough of the GymWyse platform tailored to your gym type and size.",
  },
  {
    question: "Is there a free trial after the demo?",
    answer:
      "Yes. After the demo, you can start a 14-day free trial with full access to every feature. No credit card required. We will even import your existing data so you can test with real member records, class schedules, and payment history.",
  },
  {
    question: "Do I need to prepare anything before the demo?",
    answer:
      "Just know your approximate member count, number of locations, and the name of your current software (if any). That is all we need to personalize the walkthrough. If you want us to use your real data, you can grant read-only access to your current platform beforehand.",
  },
  {
    question: "Can I bring my team to the demo?",
    answer:
      "Absolutely. We encourage it. Bring your operations manager, front desk staff, trainers, or business partner — anyone who will use the platform. We will send a calendar invite with a video link that supports unlimited attendees.",
  },
];

/* ─────────────── Component ─────────────── */

export function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* ── Thank-You State ── */
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
              We&apos;ve received your demo request. A member of our team will
              reach out within 24 hours to schedule your personalized
              walkthrough.
            </p>
            <p className="text-sm text-cool-gray">
              In the meantime, try our{" "}
              <Link
                href="/roi-calculator"
                className="text-electric-green hover:underline"
              >
                ROI Calculator
              </Link>{" "}
              to see your potential savings, or check out our{" "}
              <Link
                href="/pricing"
                className="text-electric-green hover:underline"
              >
                pricing plans
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero + Form Section ── */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                See It in Action
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-6 leading-[1.1] tracking-tight">
                Book a Demo of GymWyse Gym Management Software
              </h1>
              <p className="text-lg text-soft-white mt-6 leading-relaxed">
                See how GymWyse can save your gym $2,000+ per month in just 15
                minutes. Get a personalized walkthrough of our revenue analytics,
                churn prediction, automated payment recovery, and multi-location
                management — all customized to your specific gym.
              </p>

              {/* What to Expect */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-pure-white mb-4">
                  What to Expect
                </h2>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  Every demo is a 15-minute personalized session, not a generic
                  slide deck. Our product specialist will tailor the
                  walkthrough to your gym type, size, and goals. We will show
                  you the features that matter most to your business and skip
                  everything that does not apply.
                </p>
                <div className="space-y-3">
                  {[
                    "Revenue analytics dashboard with YOUR gym's numbers",
                    "Churn prediction engine identifying at-risk members in real time",
                    "Automated payment recovery that recaptures failed transactions",
                    "Branded member app experience your members will actually use",
                    "Multi-location dashboard for portfolio-wide visibility",
                    "Custom ROI projection based on your actual revenue and churn",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                      <span className="text-sm text-cool-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA Card */}
              <div className="glass-card p-6 mt-10">
                <div className="text-sm text-dim-gray mb-2">
                  Prefer to explore on your own?
                </div>
                <div className="text-2xl font-bold text-pure-white mb-1">
                  14-Day Free Trial
                </div>
                <p className="text-sm text-cool-gray mb-4">
                  Full access to every feature. No credit card required. Start
                  building your dashboard today.
                </p>
                <Link href="/pricing">
                  <Button variant="secondary" size="md">
                    View Pricing Plans
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Demo Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-pure-white mb-2">
                  Request Your Demo
                </h2>
                <p className="text-sm text-cool-gray mb-8">
                  Fill out the form below and we will schedule a personalized
                  15-minute walkthrough within 24 hours.
                </p>
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
                    label="Gym Name"
                    placeholder="FitHub Downtown"
                    required
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-cool-gray">
                        Number of Members
                      </label>
                      <select className="w-full h-12 bg-deep-space border border-glass-border rounded-lg px-4 text-soft-white focus:outline-none focus:ring-2 focus:ring-electric-green/50 focus:border-electric-green/50 transition-colors">
                        <option value="">Select range</option>
                        <option value="1-100">1 - 100</option>
                        <option value="101-300">101 - 300</option>
                        <option value="301-500">301 - 500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <Input
                      label="Number of Locations"
                      type="number"
                      placeholder="1"
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
                    We&apos;ll respond within 24 hours. No spam, no obligation,
                    ever.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ── Demo Agenda ── */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white leading-tight">
                Your 15-Minute Demo, Minute by Minute
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto leading-relaxed">
                Every demo is tailored to your gym, but here is the typical
                structure so you know exactly what you are walking into. No
                surprises, no wasted time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {agendaSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-semibold text-electric-green tracking-wider uppercase">
                    {step.time}
                  </span>
                  <h3 className="text-lg font-semibold text-pure-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── What Happens After ── */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center space-y-4 mb-14">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white leading-tight">
                What Happens After the Demo
              </h2>
              <p className="text-base text-soft-white max-w-2xl mx-auto leading-relaxed">
                From booking your demo to seeing real ROI, here is the full
                timeline. Most gyms are fully onboarded and tracking results
                within 30 days.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div className="text-xs font-bold text-sapphire-blue font-mono mb-1">
                    Step {step.step}
                  </div>
                  <h3 className="text-base font-semibold text-pure-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Trust Signals ── */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  value: "200+",
                  label: "Gyms Trust GymWyse",
                },
                {
                  icon: TrendingUp,
                  value: "72%",
                  label: "Demo-to-Signup Rate",
                },
                {
                  icon: Clock,
                  value: "15 min",
                  label: "Average Demo Duration",
                },
                {
                  icon: HeartHandshake,
                  value: "Zero",
                  label: "Pressure or Obligation",
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
                  <div className="text-3xl font-bold text-pure-white font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-cool-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-dim-gray mt-6 max-w-xl mx-auto leading-relaxed">
              Trusted by 200+ gyms across the United States, United Kingdom,
              Australia, and the UAE. Our average demo-to-signup conversion
              rate is 72 percent because gym owners see real value in 15
              minutes. No pressure, no obligation — just an honest look at the
              platform.
            </p>
          </motion.div>

          {/* ── Testimonials ── */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white leading-tight">
                What Previous Demo Attendees Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
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
                        {t.gym} — {t.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── FAQ Section ── */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="glass-card overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="text-base font-medium text-pure-white pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cool-gray shrink-0 transition-transform duration-200 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
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
                see your potential savings, browse our transparent pricing, or
                learn about our zero-downtime migration process first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roi-calculator">
                  <Button variant="primary" size="lg">
                    <Calculator className="mr-2 w-4 h-4" />
                    ROI Calculator
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    View Pricing
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
    </>
  );
}
