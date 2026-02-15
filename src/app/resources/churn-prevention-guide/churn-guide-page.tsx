"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  Brain,
  Mail,
  MessageSquare,
  Phone,
  ChevronDown,
  ArrowRight,
  Check,
  BookOpen,
  Calculator,
  Target,
  Shield,
  Clock,
  Heart,
  Star,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ---------------------------------------------------------------------------
   DATA
   --------------------------------------------------------------------------- */

const warningSignals = [
  {
    number: 1,
    title: "Declining visit frequency",
    description:
      "A member who was training three times per week gradually drops to once per week, or less. This is the single strongest predictor of cancellation. Research consistently shows that members who visit fewer than four times per month are at high risk of cancelling within 90 days.",
  },
  {
    number: 2,
    title: "Missed scheduled classes",
    description:
      "The member books classes but fails to show up two or more times within a 30-day window. No-shows indicate waning commitment even when the intent to attend still exists. The gap between intention and action is where churn begins.",
  },
  {
    number: 3,
    title: "Failed payment",
    description:
      "A declined card or missed direct debit that goes unresolved for more than seven days. Involuntary churn from payment failures accounts for 15-20% of all cancellations, and many of these members would have stayed if the issue was resolved quickly.",
  },
  {
    number: 4,
    title: "No app engagement for 14+ days",
    description:
      "Members who stop opening the gym app, checking class schedules, or logging workouts have mentally disengaged. App inactivity for two weeks or longer correlates with a 3x higher cancellation rate in the following 60 days.",
  },
  {
    number: 5,
    title: "Downgraded membership tier",
    description:
      "Moving from a premium to a basic membership is often a precursor to full cancellation. The member is already reducing their financial commitment and may be testing whether they can live without the gym entirely.",
  },
  {
    number: 6,
    title: "Stopped booking personal training",
    description:
      "A member who previously booked regular PT sessions and then stops is signaling reduced engagement. Personal training creates strong retention bonds, so the loss of that connection removes a key anchor.",
  },
  {
    number: 7,
    title: "Complained on social media or reviews",
    description:
      "Public complaints on Google Reviews, social media, or community forums are a strong signal. Members who voice dissatisfaction publicly are often already past the point of quiet resolution and need immediate personal outreach.",
  },
  {
    number: 8,
    title: "Asked about contract cancellation terms",
    description:
      "Any inquiry about cancellation policies, notice periods, or contract end dates is a direct signal. Many gyms only track formal cancellation requests, missing these earlier exploratory questions that reveal intent.",
  },
  {
    number: 9,
    title: "Stopped referring friends",
    description:
      "A member who was previously an active referrer and then stops referring is no longer advocating for your gym. Referral behavior is a proxy for satisfaction — when it disappears, satisfaction has likely declined.",
  },
  {
    number: 10,
    title: "Visits only at off-peak times",
    description:
      "Shifting from peak hours to very early morning or late evening visits can indicate the member is avoiding the community aspect of the gym. Social connection is a key retention driver, and its absence increases churn risk.",
  },
  {
    number: 11,
    title: "No interaction with AI coach for 21+ days",
    description:
      "For gyms using in-app AI coaching or workout tracking, a three-week gap in interaction means the member has stopped using the tool that was keeping them accountable and progressing toward their goals.",
  },
  {
    number: 12,
    title: "Membership approaching anniversary date",
    description:
      "The 11-to-13-month window is a critical churn point. Members re-evaluate their commitment around the anniversary of joining. Annual contracts see a spike in cancellations at renewal, and month-to-month members often decide to leave after about a year.",
  },
];

const interventionTimeline = [
  {
    day: "Day 1",
    label: "Risk Detected",
    icon: Mail,
    action: "Personalized email",
    description:
      "As soon as the AI flags a member as at-risk, an automated but personalized email is sent. The tone is warm and non-salesy: \"We noticed you haven't been in this week, [Name]. Here's what's happening at the gym this weekend — your favorite HIIT class has a new playlist, and Coach Sarah is running a mobility workshop on Saturday.\" The email references the member's actual preferences and history, making it feel genuine rather than templated.",
  },
  {
    day: "Day 3",
    label: "Targeted Offer",
    icon: MessageSquare,
    action: "SMS with specific offer",
    description:
      "If the member has not re-engaged after the initial email, an SMS goes out with a concrete, low-commitment offer. Examples include a complimentary personal training session, a bring-a-friend pass for the weekend, or a recommendation for a new class based on their training history. SMS has a 98% open rate compared to 20% for email, making it a high-impact touchpoint.",
  },
  {
    day: "Day 7",
    label: "In-App Engagement",
    icon: Brain,
    action: "AI coach message with workout plan",
    description:
      "The in-app AI coach sends a personalized message with encouragement and a fresh workout plan designed to reignite motivation. This might include a new program aligned with the member's stated goals, a challenge to complete three workouts in the next ten days, or progress data showing how close they are to a milestone.",
  },
  {
    day: "Day 14",
    label: "Human Touchpoint",
    icon: Phone,
    action: "Staff phone call with talking points",
    description:
      "The system generates a call task for front desk staff or the member's assigned trainer, complete with talking points based on the member's specific risk signals. The staff member knows exactly why this person is at risk and what to say. This personal outreach is often the intervention that saves the membership because it demonstrates genuine care.",
  },
  {
    day: "Day 21",
    label: "Win-Back Offer",
    icon: Shield,
    action: "Flexible retention options",
    description:
      "If previous interventions have not re-engaged the member, a more substantial offer is deployed. Options include a membership freeze for one to three months with no penalty, a reduced rate for the next three months, or a complimentary month added to their membership. The goal is to remove the barrier to staying — whether financial, motivational, or logistical.",
  },
  {
    day: "Day 30",
    label: "Final Retention Attempt",
    icon: Heart,
    action: "Owner or manager personal outreach",
    description:
      "The gym owner or general manager makes direct, personal contact. This is the highest-impact touchpoint because it signals that the member matters to the business at the highest level. The outreach is candid: \"I noticed you haven't been in recently, and I wanted to reach out personally. Is there anything we can do better? I'd love to find a way to make this work for you.\"",
  },
];

const winBackTemplates = [
  {
    type: "Email",
    timing: "7 days after last visit",
    subject: "[Name], we saved your favorite 6am class spot",
    body: "Hi [Name], we noticed you haven't been to your usual Tuesday and Thursday 6am HIIT classes this week. Coach Marcus asked about you — he's been working on a new strength-endurance circuit he thinks you'd crush. Your spot is reserved for Thursday. Just show up and we'll handle the rest. See you there?",
  },
  {
    type: "Email",
    timing: "14 days after last visit",
    subject: "Your progress report is ready, [Name]",
    body: "Hi [Name], we put together a quick snapshot of your training over the past 3 months. You've logged 34 sessions, increased your average weekly volume by 18%, and attended 12 different class types. That kind of consistency is rare — and we don't want to see it stop. Here's a complimentary PT session to help you set your next 90-day goals. Book your slot here.",
  },
  {
    type: "Email",
    timing: "30 days after last visit",
    subject: "We miss you at [Gym Name], [Name]",
    body: "Hi [Name], it's been a month since your last visit and we wanted to check in. We know life gets busy and priorities shift. If cost is a factor, we'd like to offer you a reduced rate of $49/month for the next 3 months — no commitment beyond that. If it's something else, just reply to this email and let us know. We'd love to help.",
  },
  {
    type: "SMS",
    timing: "5 days after last visit",
    subject: "",
    body: "Hey [Name]! Coach Sarah has a spot open for a free 1-on-1 session this Saturday at 10am. Want me to book you in? Reply YES and it's done.",
  },
  {
    type: "SMS",
    timing: "21 days after last visit",
    subject: "",
    body: "[Name], you've got a free guest pass waiting at the front desk. Grab a friend and come try the new functional training zone this weekend. Valid through Sunday. See you there?",
  },
];

const faqItems = [
  {
    question: "What is a good churn rate for a gym?",
    answer:
      "Industry benchmarks suggest that a monthly churn rate below 3% is considered good, while anything under 2% is excellent. The average gym operates at 3-5% monthly churn, which translates to 30-50% annual member turnover. Boutique fitness studios tend to have lower churn (2-3%) because of stronger community bonds and higher perceived value. Large-format gyms with lower price points often see higher churn (4-6%) because the switching cost for members is lower. The goal should be to get your churn rate below 2.5% monthly, which is achievable with the right combination of engagement, prediction, and intervention.",
  },
  {
    question: "How does AI predict which members will cancel?",
    answer:
      "AI churn prediction works by analyzing dozens of behavioral signals for every member on a daily basis. These signals include visit frequency trends, class booking patterns, payment reliability, app engagement, check-in timing, social interactions, and more. The machine learning model is trained on historical data from thousands of gym members, learning which combinations of behavioral changes precede cancellation. When a current member starts exhibiting those same patterns, the system flags them as at-risk and assigns a probability score. The model continuously improves as it processes more data from your specific gym, learning the unique patterns that apply to your member base.",
  },
  {
    question: "How quickly can I see results from a churn prevention program?",
    answer:
      "Most gyms see measurable churn reduction within 30 to 60 days of implementing an AI-driven churn prevention system. The system begins identifying at-risk members within 48 hours of activation using your existing member data. Initial results come from the immediate interventions — personalized outreach to members who are already showing warning signs. The full impact builds over three to six months as the AI model calibrates to your gym's specific patterns, automated campaigns are refined based on performance data, and staff become more skilled at retention conversations. Expect a 20-30% reduction in churn within the first quarter.",
  },
  {
    question: "Does churn prevention work for small gyms with fewer than 200 members?",
    answer:
      "Yes, and in some ways it works even better for small gyms. With a smaller member base, every single cancellation has a larger proportional impact on revenue. Losing 5 members from a 150-member gym is a 3.3% hit — the equivalent of losing 17 members from a 500-member gym. AI prediction is effective at any scale because it analyzes individual behavioral patterns rather than relying on large statistical samples. Small gyms also benefit from the personal touch: when the system flags an at-risk member, the owner or staff can follow up personally, which has a higher save rate than automated outreach alone.",
  },
  {
    question: "What about involuntary churn from failed payments?",
    answer:
      "Involuntary churn — cancellations caused by payment failures rather than deliberate decisions — accounts for 15-20% of total churn at most gyms. This is actually the easiest type of churn to prevent. Automated dunning sequences (payment retry and notification workflows) can recover 40-60% of failed payments without any manual effort. The key is speed: contacting the member within 24 hours of a failed payment dramatically increases the recovery rate. AI systems can also predict payment failures before they happen by analyzing patterns like card expiration dates, previous payment delays, and seasonal spending trends.",
  },
  {
    question: "How much does churn prevention software cost, and what is the ROI?",
    answer:
      "Dedicated churn prevention tools typically cost between $79 and $199 per month depending on the number of members and features included. GymWyse includes AI churn prediction as part of its core platform starting at $99 per month. The ROI calculation is straightforward: if the system saves just two additional members per month at an average membership of $80, that is $160 per month in retained revenue — already exceeding the cost of the platform. Most gyms save 7-15 additional members per month, generating $560 to $1,200 in retained revenue against a $99 platform cost. The ROI is typically 5x to 12x within the first three months.",
  },
  {
    question: "Can I use these strategies without software?",
    answer:
      "You can implement many churn prevention strategies manually, and we encourage it regardless of whether you use software. Staff can monitor visit frequency by reviewing check-in logs weekly. Front desk teams can be trained to flag members who haven't visited in two weeks. Trainers can reach out to clients who cancel sessions. The limitation of manual approaches is scale and consistency. As your gym grows beyond 100-150 members, it becomes impossible for staff to track every member's behavioral patterns manually. Software automates the monitoring, scoring, and initial outreach so your team can focus their energy on the highest-impact personal interactions.",
  },
  {
    question: "How do I measure whether my churn prevention efforts are working?",
    answer:
      "Track three core metrics monthly: gross churn rate (total cancellations divided by starting member count), net churn rate (cancellations minus new joins divided by starting member count), and save rate (number of at-risk members who were retained after intervention divided by total at-risk members flagged). Compare these metrics month-over-month and against your baseline from before implementing churn prevention. Also track average member tenure, lifetime value, and revenue per member. A successful program should show a declining churn rate trend, an increasing save rate, and growing average member tenure over a six-month period.",
  },
];

/* ---------------------------------------------------------------------------
   COMPONENT
   --------------------------------------------------------------------------- */

export function ChurnGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section className="bg-deep-space py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-sm text-electric-green">
              <BookOpen className="mr-1.5 inline-block h-3.5 w-3.5" />
              Educational Guide
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-pure-white md:text-5xl lg:text-6xl">
              The Complete Guide to Gym Churn Prevention in 2026
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray md:text-xl">
              How modern gym management software uses AI to predict
              cancellations 30 days before they happen — and what you can do
              today to keep more members, protect your revenue, and build a
              gym that people never want to leave. This guide covers
              everything from calculating your churn rate to deploying
              automated win-back campaigns that recover members on autopilot.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button size="lg" variant="primary">
                  Try GymWyse&apos;s churn prediction free for 14 days
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-dim-gray">
              Reading time: approximately 15 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — WHAT IS CHURN?
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <TrendingDown className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 1
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              What Is Member Churn, and Why Should You Care?
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Member churn is the rate at which members leave your gym over a
                given period. It is the single most important metric that
                determines whether your gym grows, stagnates, or slowly bleeds
                out. Every gym acquires new members — but if you are losing
                members faster than you are gaining them, no amount of
                marketing spend will save you.
              </p>
              <p>
                The fitness industry has some of the highest churn rates of any
                subscription business. The average gym loses between 3% and 5%
                of its members every single month. Over the course of a year,
                that compounds to 30-50% annual member turnover. In practical
                terms, if you start January with 500 members and experience 4%
                monthly churn, you will lose approximately 20 members every
                month. By December, you will have lost 240 members — nearly
                half of your starting base — and you will need to acquire 240
                new members just to break even, let alone grow.
              </p>
              <p>
                The financial cost of churn is staggering when you work through
                the numbers. Consider a gym with 500 members at an average
                monthly membership of $80. At a 4% monthly churn rate, you
                lose 20 members per month. That is $1,600 in monthly recurring
                revenue lost every single month, totaling $19,200 per year in
                revenue that walks out the door. And that number compounds:
                each month you are losing revenue from the members who left
                this month plus all the months before.
              </p>
            </div>
          </motion.div>

          {/* Pull-quote callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-400" />
                <div>
                  <p className="text-lg font-semibold text-pure-white">
                    The True Cost of Churn
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    Acquiring a new gym member costs 5-7x more than retaining
                    an existing one. Industry data shows that the average cost
                    to acquire a new gym member through advertising, promotions,
                    and sales effort ranges from $150 to $300. Retaining an
                    existing member through proactive engagement costs $20-$50.
                    Every member you lose is not just lost revenue — it is a
                    future acquisition cost you will have to pay to replace
                    them.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Churn impact metrics */}
          <div className="mx-auto mt-10 max-w-3xl grid gap-4 sm:grid-cols-3">
            {[
              { value: "3-5%", label: "Average monthly gym churn rate" },
              { value: "$19,200", label: "Annual revenue lost (500 members, 4% churn)" },
              { value: "5-7x", label: "Cost of acquisition vs. retention" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-glass-border p-6 text-center"
              >
                <div className="text-2xl font-mono font-bold text-electric-green md:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs text-cool-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — HOW TO CALCULATE YOUR CHURN RATE
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Calculator className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 2
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              How to Calculate Your Churn Rate
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Before you can improve your churn rate, you need to measure it
                accurately. The basic formula for monthly churn rate is
                straightforward:
              </p>
            </div>

            {/* Formula callout */}
            <div className="mt-8 glass-card rounded-2xl border border-glass-border p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-green mb-4">
                Monthly Churn Rate Formula
              </p>
              <p className="text-xl font-mono text-pure-white md:text-2xl">
                (Members who cancelled in period &divide; Total members at
                start of period) &times; 100
              </p>
              <p className="mt-4 text-sm text-cool-gray">
                Example: If you started the month with 500 members and 20
                cancelled, your monthly churn rate is (20 &divide; 500)
                &times; 100 = 4.0%
              </p>
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                There are several important distinctions to understand when
                calculating churn. <strong className="text-soft-white">Monthly
                vs. annual churn</strong> is the most common source of
                confusion. A 4% monthly churn rate does not mean 48% annual
                churn — it compounds, resulting in approximately 39% annual
                churn. To convert monthly to annual, use: 1 - (1 - monthly
                rate)^12.
              </p>
              <p>
                <strong className="text-soft-white">Voluntary vs. involuntary
                churn</strong> is another critical distinction. Voluntary churn
                occurs when a member actively decides to cancel — they submit a
                cancellation request, they call to end their membership, or they
                simply stop coming. Involuntary churn occurs when a payment
                fails (expired card, insufficient funds) and the membership
                lapses without the member necessarily intending to leave. These
                two types require different prevention strategies.
              </p>
              <p>
                Finally, understand the difference between <strong className="text-soft-white">gross
                churn and net churn</strong>. Gross churn counts only the
                members who left. Net churn subtracts new members gained during
                the same period. A gym might have 4% gross churn but only 1%
                net churn if they acquired enough new members to offset most of
                the losses. Both metrics matter: gross churn tells you how leaky
                your bucket is, while net churn tells you whether the bucket is
                actually emptying.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-2 text-sm font-medium text-electric-green hover:underline"
              >
                <Calculator className="h-4 w-4" />
                Use our free ROI calculator to see your churn cost
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — THE 12 WARNING SIGNS
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <AlertTriangle className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 3
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              The 12 Warning Signs a Member Will Cancel
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Churn rarely happens overnight. Members send behavioral signals
              for weeks before they cancel. If you know what to look for — or
              if your software knows what to look for — you can intervene
              before the decision is final. Here are the twelve most reliable
              indicators that a member is on the path to cancellation.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {warningSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl border border-glass-border p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-electric-green/10">
                    <span className="font-mono text-sm font-bold text-electric-green">
                      {signal.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-pure-white">
                      {signal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — HOW AI PREDICTS CHURN
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Brain className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 4
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              How AI Predicts Churn Before It Happens
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Understanding how to use AI to stop gym cancellations starts
                with understanding how prediction models work. Modern machine
                learning models do not rely on a single metric. They analyze
                47 distinct behavioral signals simultaneously for every member,
                every day. These signals span visit patterns, financial
                behavior, digital engagement, social interactions, and
                programmatic participation.
              </p>
              <p>
                The AI assigns a risk score between 0 and 100 to each member
                on a daily basis. This score represents the probability that
                the member will cancel within the next 30 days, based on the
                combined weight of all behavioral signals. A score of 85 does
                not mean the member will definitely cancel — it means the
                member is exhibiting behavioral patterns that, historically,
                have led to cancellation 85% of the time.
              </p>
            </div>

            {/* Risk tier breakdown */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  tier: "High Risk",
                  range: "80-100",
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  borderColor: "border-red-400/20",
                  action:
                    "Automated intervention triggers within 24 hours. The system immediately deploys personalized outreach and flags the member for staff follow-up. At this level, speed matters — every day of delay reduces the probability of retention.",
                },
                {
                  tier: "Medium Risk",
                  range: "50-79",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  borderColor: "border-yellow-400/20",
                  action:
                    "Flagged for staff review and monitoring. These members are showing early warning signs but have not yet reached critical status. Proactive engagement at this stage — a check-in message, a class recommendation — can prevent escalation to high risk.",
                },
                {
                  tier: "Low Risk",
                  range: "0-49",
                  color: "text-electric-green",
                  bgColor: "bg-electric-green/10",
                  borderColor: "border-electric-green/20",
                  action:
                    "Continue standard engagement programs. These members are active, engaged, and showing no signs of disengagement. The focus here is maintaining satisfaction through consistent experience and community connection.",
                },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card rounded-2xl border ${tier.borderColor} p-6`}
                >
                  <div className={`${tier.bgColor} inline-block rounded-lg px-3 py-1`}>
                    <span className={`font-mono text-sm font-bold ${tier.color}`}>
                      {tier.range}
                    </span>
                  </div>
                  <h3 className={`mt-3 text-lg font-bold ${tier.color}`}>
                    {tier.tier}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                    {tier.action}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                The model improves over time as it learns your gym&apos;s
                specific patterns. A gym in central London with primarily
                corporate members will have different churn signals than a
                CrossFit box in suburban Denver. The AI adapts to these
                differences, achieving an average prediction accuracy of 87%
                at the 30-day horizon after three months of calibration.
                This means that for every 100 members the system flags as
                high risk, approximately 87 would have actually cancelled
                without intervention.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — AUTOMATED INTERVENTION STRATEGIES
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Zap className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 5
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Automated Intervention Strategies
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Predicting churn is only valuable if you act on the predictions.
              The following six-stage intervention timeline is designed to
              escalate engagement progressively, starting with low-touch
              automated outreach and building to high-touch personal contact.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-glass-border md:block" />
              <div className="space-y-6">
                {interventionTimeline.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="relative flex gap-6"
                    >
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-glass-border bg-deep-space">
                        <Icon className="h-5 w-5 text-electric-green" />
                      </div>
                      <div className="glass-card flex-1 rounded-2xl border border-glass-border p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm font-bold text-electric-green">
                            {step.day}
                          </span>
                          <span className="text-xs text-dim-gray">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-pure-white">
                          {step.action}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7 — WIN-BACK CAMPAIGN TEMPLATES
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Mail className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 6
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Win-Back Campaign Templates You Can Use Today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cool-gray">
              Below are five proven win-back templates — three emails and two
              SMS messages — that you can adapt for your gym immediately.
              Each template is designed around a specific timing window and
              uses personalization to make the member feel valued rather than
              marketed to. The key principle: reference something specific to
              the member (their favorite class, their trainer, their progress)
              rather than sending generic &ldquo;we miss you&rdquo; messages.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {winBackTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl border border-glass-border p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      template.type === "Email"
                        ? "bg-sapphire-blue/10 text-sapphire-blue"
                        : "bg-electric-green/10 text-electric-green"
                    }`}
                  >
                    {template.type === "Email" ? (
                      <Mail className="h-3 w-3" />
                    ) : (
                      <MessageSquare className="h-3 w-3" />
                    )}
                    {template.type}
                  </span>
                  <span className="text-xs text-dim-gray">
                    <Clock className="mr-1 inline-block h-3 w-3" />
                    {template.timing}
                  </span>
                </div>
                {template.subject && (
                  <p className="text-sm font-semibold text-pure-white mb-2">
                    Subject: {template.subject}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-cool-gray italic">
                  &ldquo;{template.body}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — THE ECONOMICS OF RETENTION
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <BarChart3 className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 7
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              The Economics of Retention: A Detailed Breakdown
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Let us walk through the numbers for a 500-member gym with an
                average monthly membership of $80. This is a realistic
                scenario for an independent gym or boutique fitness studio in
                a mid-size market.
              </p>
              <p>
                At a 4% monthly churn rate, you lose 20 members every month.
                At a 2.5% monthly churn rate, you lose 12.5 members per
                month. The difference — 7.5 members saved per month — may
                sound small, but the financial impact is significant.
              </p>
            </div>

            {/* Economics breakdown */}
            <div className="mt-8 glass-card rounded-2xl border border-glass-border p-8">
              <h3 className="text-lg font-bold text-pure-white mb-6">
                Reducing Churn from 4% to 2.5%: The Revenue Impact
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Members saved per month",
                    value: "7.5",
                    detail: "20 lost at 4% minus 12.5 lost at 2.5%",
                  },
                  {
                    label: "Monthly revenue retained",
                    value: "$600",
                    detail: "7.5 members x $80 average membership",
                  },
                  {
                    label: "Annual revenue retained",
                    value: "$7,200",
                    detail: "$600 per month x 12 months",
                  },
                  {
                    label: "Acquisition cost avoided",
                    value: "$1,125-$2,250/mo",
                    detail:
                      "7.5 members x $150-$300 per new member you no longer need to acquire",
                  },
                  {
                    label: "Increased lifetime value",
                    value: "+6-12 months",
                    detail:
                      "Retained members stay longer, increasing average LTV by $480-$960 per member",
                  },
                  {
                    label: "Referral revenue uplift",
                    value: "$2,400-$4,800/yr",
                    detail:
                      "Loyal members refer 2-3 friends per year on average — retained members generate more referrals",
                  },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 border-b border-glass-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-soft-white">
                        {row.label}
                      </p>
                      <p className="text-xs text-dim-gray mt-0.5">
                        {row.detail}
                      </p>
                    </div>
                    <span className="font-mono text-lg font-bold text-electric-green whitespace-nowrap">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-base leading-relaxed text-cool-gray">
              <p>
                When you combine the direct revenue retained ($7,200/year),
                the acquisition costs avoided ($13,500-$27,000/year), and the
                additional lifetime value from longer-tenured members, the
                total economic impact of reducing churn from 4% to 2.5% for a
                500-member gym is conservatively $20,000-$35,000 per year.
                That is the equivalent of adding 20-35 new members at no
                acquisition cost — simply by keeping the members you already
                have.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-2 text-sm font-medium text-electric-green hover:underline"
              >
                <Calculator className="h-4 w-4" />
                Calculate your gym&apos;s specific savings with our ROI
                calculator
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9 — CASE STUDIES
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Star className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 8
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Case Studies: Real Gyms, Real Results
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              These two case studies illustrate how different types of gyms
              implemented AI-driven churn prevention and the measurable
              results they achieved within six months.
            </p>
          </motion.div>

          {/* Case Study 1: The Foundry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-10">
              <span className="inline-block rounded-full bg-sapphire-blue/10 px-3 py-1 text-xs font-semibold text-sapphire-blue mb-4">
                Case Study 1
              </span>
              <h3 className="text-2xl font-bold text-pure-white">
                The Foundry, London
              </h3>
              <p className="mt-1 text-sm text-dim-gray">
                450-member CrossFit and functional fitness facility in East
                London
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-cool-gray">
                <p>
                  <strong className="text-soft-white">The Challenge:</strong>{" "}
                  The Foundry was experiencing a 4.2% monthly churn rate,
                  losing approximately 19 members every month. The owner, Jack
                  Morrison, estimated that he was spending over &pound;2,400
                  per month on Facebook and Instagram advertising to replace
                  departing members — creating an expensive acquisition
                  treadmill that consumed profit without growing the business.
                  The team had no systematic way to identify which members were
                  at risk of cancelling.
                </p>
                <p>
                  <strong className="text-soft-white">The Solution:</strong>{" "}
                  The Foundry deployed GymWyse with AI churn prediction
                  enabled across their full membership base. Within 48 hours,
                  the system identified 52 members in the medium-to-high risk
                  range. Staff were trained on the intervention protocol, and
                  automated email and SMS campaigns were configured for each
                  risk tier. The gym also implemented a &ldquo;First 30
                  Days&rdquo; onboarding enhancement based on data showing
                  that members who did not attend at least six sessions in
                  their first month had a 3x higher churn rate.
                </p>
                <p>
                  <strong className="text-soft-white">The Results:</strong>{" "}
                  Over six months, The Foundry reduced monthly churn from
                  4.2% to 2.3%. They saved an average of 8-9 members per
                  month who would have otherwise cancelled, retaining
                  approximately &pound;6,800 in annual revenue. Ad spend on
                  member replacement dropped by &pound;1,200 per month because
                  fewer new members were needed to maintain headcount.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "4.2% → 2.3%", label: "Monthly churn reduction" },
                  { value: "8-9/mo", label: "Members saved per month" },
                  { value: "£6,800/yr", label: "Revenue retained annually" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-midnight/50 p-4 text-center"
                  >
                    <div className="text-lg font-mono font-bold text-electric-green">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Case Study 2: Summit Fitness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <div className="glass-card rounded-2xl border border-glass-border p-8 md:p-10">
              <span className="inline-block rounded-full bg-sapphire-blue/10 px-3 py-1 text-xs font-semibold text-sapphire-blue mb-4">
                Case Study 2
              </span>
              <h3 className="text-2xl font-bold text-pure-white">
                Summit Fitness, Denver
              </h3>
              <p className="mt-1 text-sm text-dim-gray">
                380-member boutique gym and personal training studio in the
                RiNo district
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-cool-gray">
                <p>
                  <strong className="text-soft-white">The Challenge:</strong>{" "}
                  Summit Fitness had a 3.8% monthly churn rate — better than
                  the industry average, but still resulting in 14-15 lost
                  members per month. Owner Maria Gonzalez suspected that new
                  member onboarding was a weak point but had no data to
                  confirm it. She was spending $180 per new member acquisition
                  through referral bonuses and local advertising.
                </p>
                <p>
                  <strong className="text-soft-white">The Solution:</strong>{" "}
                  After deploying AI churn prediction, Summit Fitness
                  discovered a critical insight: members who did not attend
                  the gym at least three times within their first 14 days had
                  a 78% churn rate within 90 days. This data point transformed
                  their onboarding strategy. They created a &ldquo;First 14
                  Days&rdquo; program that included a complimentary
                  orientation session, a personalized workout plan, a trainer
                  check-in call on day 7, and a group class invitation on day
                  10. The AI system also flagged existing members showing
                  early warning signs for proactive staff outreach.
                </p>
                <p>
                  <strong className="text-soft-white">The Results:</strong>{" "}
                  Within four months, Summit Fitness reduced monthly churn
                  from 3.8% to 2.1%. New member 90-day retention jumped from
                  62% to 84%. The &ldquo;First 14 Days&rdquo; program became
                  the foundation of their member experience, and Maria credits
                  the data-driven insight — rather than just the software — as
                  the key to the turnaround. Total annual revenue impact
                  exceeded $12,000 in retained memberships and reduced
                  acquisition costs.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "3.8% → 2.1%", label: "Monthly churn reduction" },
                  { value: "78%", label: "Churn rate without early engagement" },
                  { value: "62% → 84%", label: "90-day new member retention" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-glass-border bg-midnight/50 p-4 text-center"
                  >
                    <div className="text-lg font-mono font-bold text-electric-green">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-xs text-cool-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-electric-green hover:underline"
            >
              Read more case studies
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 10 — BUILDING A RETENTION CULTURE
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Users className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 9
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Building a Retention Culture Beyond Software
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cool-gray">
              <p>
                Churn prevention is not just a software problem — it is a
                culture problem. The most effective retention programs combine
                AI-driven prediction and automation with a gym culture that
                genuinely prioritizes member experience at every touchpoint.
                No tool can compensate for a front desk that ignores members,
                dirty facilities, or instructors who phone it in.
              </p>
              <p>
                Here are the cultural pillars that the lowest-churn gyms
                consistently implement:
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Staff Training on Member Engagement",
                  description:
                    "Every staff member — from front desk to cleaners — should be trained to greet members by name, notice when regulars miss their usual sessions, and report observations to management. The front desk is not just a check-in point; it is the first and last impression of every visit.",
                },
                {
                  title: "First-Visit Experience Design",
                  description:
                    "The first visit sets the tone for the entire membership. The best gyms assign a staff member to personally welcome new members, give them a facility tour, introduce them to at least one other member or coach, and ensure they leave feeling confident they will return. A structured onboarding process in the first 14-30 days is the single highest-ROI retention investment you can make.",
                },
                {
                  title: "Community Building",
                  description:
                    "Members who have social connections at the gym — friends they train with, coaches who know their name, a class group they belong to — are dramatically less likely to cancel. Organize social events, team challenges, workout partnerships, and community boards. Make the gym a place people belong to, not just a place they go.",
                },
                {
                  title: "Regular Check-Ins and Progress Reviews",
                  description:
                    "Schedule quarterly check-ins with every member to review their goals, celebrate progress, and adjust their program. This can be a five-minute conversation or a formal sit-down with a trainer. The act of checking in communicates that you care about their results, which is a powerful retention driver.",
                },
                {
                  title: "Celebration of Milestones",
                  description:
                    "Acknowledge member milestones publicly: 100th visit, one-year anniversary, personal records, weight loss goals achieved. A simple shout-out on social media, a card at the front desk, or a small gift creates emotional attachment to the gym and reinforces the member's identity as someone who belongs there.",
                },
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-electric-green" />
                  <div>
                    <h3 className="text-base font-semibold text-pure-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-cool-gray">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-base leading-relaxed text-cool-gray">
              <p>
                The gyms that achieve and sustain churn rates below 2% are the
                ones where retention is not a department or a dashboard — it is
                embedded in every interaction, every decision, and every hire.
                Software gives you the data and automation to act at scale.
                Culture ensures the actions are genuine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 11 — FAQ
          ================================================================ */}
      <section className="bg-deep-space py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-green/10">
                <Target className="h-5 w-5 text-electric-green" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-green">
                Chapter 10
              </span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-cool-gray">
              Common questions about gym churn prevention, AI prediction, and
              retention strategy.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card overflow-hidden rounded-xl border border-glass-border"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="pr-4 text-base font-medium text-soft-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-dim-gray transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-glass-border px-6 py-5">
                        <p className="text-sm leading-relaxed text-cool-gray">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 12 — FINAL CTA
          ================================================================ */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-pure-white md:text-4xl">
              Try GymWyse&apos;s Churn Prediction Free for 14 Days
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cool-gray">
              You have read the guide. You understand the cost of churn, the
              warning signs to watch for, and the strategies that work. Now
              put it into practice. GymWyse&apos;s AI churn prediction starts
              identifying at-risk members within 48 hours of activation —
              using the member data you already have. No lengthy setup, no
              contracts, and no credit card required for the trial.
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <div className="glass-card rounded-2xl border border-glass-border p-8 text-center">
                <div className="text-4xl font-mono font-bold text-electric-green">
                  14 days free
                </div>
                <p className="mt-3 text-sm text-cool-gray">
                  Full access to AI churn prediction, automated interventions,
                  win-back campaigns, and retention analytics. Start seeing
                  results this week.
                </p>
                <Link href="/demo" className="mt-6 block">
                  <Button size="xl" variant="primary" className="w-full">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-xs text-dim-gray">
                  No credit card required &bull; Cancel anytime &bull; Setup
                  in under 10 minutes
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-2 text-sm font-medium text-electric-green hover:underline"
              >
                <Calculator className="h-4 w-4" />
                Calculate your ROI
              </Link>
              <Link
                href="/solutions/reduce-churn"
                className="inline-flex items-center gap-2 text-sm font-medium text-sapphire-blue hover:underline"
              >
                <Shield className="h-4 w-4" />
                Explore churn prevention features
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-medium text-cool-gray hover:underline hover:text-soft-white"
              >
                View pricing
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-dim-gray">
              <Link
                href="/reduce-gym-member-churn"
                className="hover:text-cool-gray hover:underline"
              >
                Reduce Gym Member Churn
              </Link>
              <span>&bull;</span>
              <Link
                href="/platform/revenue-analytics"
                className="hover:text-cool-gray hover:underline"
              >
                Revenue Analytics
              </Link>
              <span>&bull;</span>
              <Link
                href="/demo"
                className="hover:text-cool-gray hover:underline"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
