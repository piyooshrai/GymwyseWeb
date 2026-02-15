"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Users,
  Calendar,
  Trophy,
  Heart,
  MessageSquare,
  Target,
  BarChart3,
  UserCheck,
  Clock,
  Sparkles,
  Bell,
  CheckCircle,
} from "lucide-react";

const faqs = [
  {
    q: "What is the ideal length for a gym onboarding program?",
    a: "Ninety days is the optimal window backed by behavioral science. The first week establishes an emotional connection, weeks two through four build the habit loop, month two deepens engagement through classes and social features, and month three integrates the member into the community. Shorter programs (30 days) miss the critical habit-formation phase, while longer programs (six months) lose momentum and feel like surveillance rather than support. GymWyse customers who run the full 90-day sequence see a 45% reduction in early cancellations compared to those who stop at 30 days.",
  },
  {
    q: "How many touchpoints should onboarding include?",
    a: "Our data shows the sweet spot is 12 to 16 touchpoints across the 90 days. That breaks down to roughly five in week one (welcome email, orientation call or visit, first-workout check-in, goal-setting session, app walkthrough), four in weeks two through four (weekly progress nudge, first-class invitation, 10th-visit milestone, trainer introduction), and four to seven in months two and three (monthly progress review, buddy match, community event invite, class streak reward, 60-day check-in, 90-day celebration). Too few touchpoints and the member feels abandoned; too many and they feel hounded. GymWyse lets you configure the cadence per member segment.",
  },
  {
    q: "Should onboarding be automated or handled by staff?",
    a: "Both -- and that is not a cop-out answer. The logistics (scheduling reminders, milestone triggers, progress emails, app notifications) should be fully automated because consistency at scale is impossible manually. The high-value moments (orientation tour, goal-setting conversation, trainer introduction, 90-day celebration) should be human-delivered because they build genuine relationships. GymWyse automates the sequencing so your staff shows up at the right moment without maintaining spreadsheets.",
  },
  {
    q: "How do you measure onboarding success?",
    a: "Track four key metrics: onboarding completion rate (percentage of new members who hit all milestones), visit frequency in weeks five through eight (the danger zone where habits either stick or break), first-class booking rate (members who try a group class within 30 days retain 38% better), and 90-day retention rate itself. GymWyse surfaces all four on the Member Onboarding Pipeline dashboard with cohort comparisons so you can see whether your latest onboarding tweaks actually moved the needle.",
  },
  {
    q: "What if a member falls off during onboarding?",
    a: "The system triggers an 'onboarding stall' alert when a member misses two consecutive expected touchpoints -- say they skip their Day 14 trainer intro and their Day 21 progress check-in. At that point, an automated but personal-feeling re-engagement message fires (for example, 'Hey Sarah, we noticed you have not booked your complimentary trainer session yet -- would Tuesday at 10 AM work?'). If the member does not respond within 48 hours, the system escalates to a staff task for a personal phone call. Catching stalls early is critical because every week of inactivity in the first 90 days doubles the churn probability.",
  },
  {
    q: "Does onboarding differ for different membership types?",
    a: "Absolutely. A premium all-access member gets a white-glove sequence with a dedicated onboarding specialist, complimentary PT session, and spa tour. A budget-tier member gets an efficient digital-first sequence with self-guided orientation video, app-based goal setting, and automated milestone rewards. Group fitness enthusiasts get class-focused onboarding with a curated first-week class schedule. GymWyse lets you build segment-specific onboarding flows so each member gets an experience matched to their membership level and stated goals.",
  },
];

const phases = [
  {
    icon: Sparkles,
    phase: "Week 1",
    title: "Welcome and Orientation",
    desc: "The first seven days set the emotional tone for the entire membership. This phase includes a personalized welcome email within one hour of sign-up, a facility orientation tour (ideally guided, or a high-quality video walkthrough for off-peak joiners), a first-workout check-in via app notification, a goal-setting session (in-person or digital questionnaire), and an app onboarding walkthrough. The goal is simple: make the member feel seen, supported, and confident they made the right choice. Gyms that execute week one well see 28% higher visit frequency in month one.",
  },
  {
    icon: Target,
    phase: "Weeks 2-4",
    title: "Habit Formation",
    desc: "This is where the behavioral science kicks in. Members need to visit at least eight times in the first 30 days to form a durable gym habit. The onboarding sequence here includes weekly visit-frequency nudges ('You are three visits away from your first streak badge!'), a trainer introduction session (even a 15-minute complimentary consult dramatically increases engagement), a first group class invitation personalized to their goals, and the 10th-visit milestone celebration. If visit frequency drops below twice per week, the system triggers a gentle re-engagement prompt. This phase is where you build the routine that carries the member through the inevitable motivation dips of months two and three.",
  },
  {
    icon: Heart,
    phase: "Month 2",
    title: "Deepening Engagement",
    desc: "By month two, the member has a routine -- now you deepen it. Introduce cross-selling opportunities: if they have been doing weights only, suggest a complementary yoga or mobility class. Send a 30-day progress summary showing visits completed, any tracked metrics improving, and classes tried. Offer a buddy match with another member who has similar goals and visit times. Invite them to an upcoming community event (social workout, nutrition workshop, member mixer). The month-two goal is to expand their gym identity from 'person who works out here' to 'person who belongs here.' Members with two or more social connections at the gym are 64% less likely to cancel.",
  },
  {
    icon: Users,
    phase: "Month 3",
    title: "Community Integration",
    desc: "The final onboarding phase cements the member into the gym's social fabric. Key actions: enroll them in a team challenge or accountability group, celebrate their 90-day milestone with a tangible reward (branded merchandise, free guest pass, smoothie credit), conduct a 90-day progress review comparing where they started to where they are now, and ask for their first referral. By the end of month three, the member should have attended at least one community event, tried at least three different class formats, and established at least one gym friendship. Members who complete all 90-day milestones have a 12-month retention rate of 89%, compared to 52% for those who skip onboarding entirely.",
  },
];

const milestones = [
  {
    icon: CheckCircle,
    trigger: "10th Visit",
    reward: "Digital badge + free smoothie",
    impact: "Reinforces early habit formation",
  },
  {
    icon: Calendar,
    trigger: "First Month Complete",
    reward: "Progress snapshot email + branded water bottle",
    impact: "Celebrates consistency, 23% boost in month-two visits",
  },
  {
    icon: UserCheck,
    trigger: "First Class Booked",
    reward: "Class explorer badge + 'next class' recommendation",
    impact: "Class attendees retain 38% better than gym-floor-only members",
  },
  {
    icon: Trophy,
    trigger: "First Personal Best",
    reward: "PR notification + social share option",
    impact: "Links achievement to the gym environment emotionally",
  },
  {
    icon: Users,
    trigger: "Buddy Match Accepted",
    reward: "Shared challenge unlock + dual guest pass",
    impact: "Social connections are the strongest churn predictor",
  },
  {
    icon: Sparkles,
    trigger: "90-Day Milestone",
    reward: "Branded merch + referral credit + progress report",
    impact: "89% 12-month retention for members who reach this point",
  },
];

export function GymMemberOnboardingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a 90-Day Gym Member Onboarding Framework",
    description:
      "A structured four-phase onboarding framework that reduces first-90-day cancellations by 45% through automated check-ins, milestone rewards, and community integration.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Set Up Week 1 Welcome Sequence",
        text: "Configure automated welcome email, orientation scheduling, first-workout check-in, goal-setting session, and app walkthrough within the first seven days.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Build Weeks 2-4 Habit Formation Triggers",
        text: "Create visit-frequency nudges, schedule trainer introduction sessions, send personalized class invitations, and configure the 10th-visit milestone celebration.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Configure Month 2 Deepening Engagement",
        text: "Set up 30-day progress summaries, buddy matching algorithm, cross-sell class recommendations, and community event invitations.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Activate Month 3 Community Integration",
        text: "Enable team challenge enrollment, 90-day milestone rewards, progress review generation, and first-referral prompts.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Configure Milestone Rewards",
        text: "Set up automated triggers for 10th visit, first month, first class, first personal best, buddy match, and 90-day milestones with corresponding rewards.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Monitor Pipeline Dashboard",
        text: "Track onboarding completion rate, visit frequency by cohort, stall alerts, and 90-day retention rate through the Member Onboarding Pipeline.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-deep-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-grid overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-electric-green/10 text-electric-green border border-electric-green/20 mb-6">
              Published January 31, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              The First 90 Days:{" "}
              <span className="text-electric-green">
                A Gym Member Onboarding Framework
              </span>{" "}
              That Prevents Early Churn
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              The structured onboarding sequence that reduces first-90-day
              cancellations by 45%.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Answer */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-electric-green mb-4">
              The Short Answer
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              A structured 90-day onboarding framework that guides new members
              through four distinct phases -- welcome orientation, habit
              formation, engagement deepening, and community integration --
              reduces first-quarter cancellations by 45%. The framework uses
              automated check-in sequences, milestone rewards at key behavioral
              triggers, and trainer introduction workflows to transform a
              first-time visitor into a committed, socially connected member who
              stays for years rather than weeks.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why the First 90 Days Matter */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Why the First 90 Days Determine Everything
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Here is a stat that should keep every gym owner up at night: 50% of
            all new member cancellations happen within the first 90 days. Not
            after six months of declining visits. Not after a gradual loss of
            interest. Half of your churn is concentrated in the very beginning
            of the member relationship, when you theoretically have the most
            influence over their experience.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The reason is simple but uncomfortable. Most gyms treat
            onboarding as a one-and-done event. The member signs up, maybe gets
            a quick facility tour if the front desk is not too busy, receives a
            generic welcome email, and then... silence. They are left to figure
            out the equipment, navigate the class schedule, and build a routine
            entirely on their own. For someone who is already nervous about
            joining a gym, that silence is deafening.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Compare that to the SaaS industry, where onboarding is treated as a
            science. Software companies obsess over time-to-first-value,
            activation milestones, and engagement loops because they know that
            the first experience predicts the entire customer lifecycle. Your
            gym is no different. A member who visits eight or more times in
            their first month is 74% more likely to still be a member at month
            twelve. A member who books their first group class within 14 days
            retains 38% better than one who sticks to the gym floor alone. The
            data is unambiguous: structured onboarding is the single highest-ROI
            retention investment you can make.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The framework below is not theoretical. It is built from behavioral
            data across thousands of gym members tracked through the GymWyse
            platform, and it works whether you run a 200-member boutique studio
            or a 3,000-member multi-location chain. Let us walk through each
            phase.
          </p>
        </motion.div>
      </section>

      {/* The 4-Phase Framework */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The 4-Phase Onboarding Framework That Cuts Churn by{" "}
            <span className="text-electric-green">45%</span>
          </motion.h2>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electric-green/10 flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white mb-1">
                      <span className="text-sapphire-blue mr-2">
                        {phase.phase}:
                      </span>
                      {phase.title}
                    </h3>
                    <p className="text-cool-gray leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Check-In Sequences */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Automated Check-In Sequences That Feel Personal
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Automation gets a bad reputation in the fitness industry because
            most gyms do it poorly. Nobody wants a robotic &quot;Hey
            [FIRST_NAME], you have not visited in 7 days!&quot; message that
            screams template. The trick is designing automated sequences that
            feel like they come from a human who genuinely cares.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Effective automated check-ins are triggered by behavior, not
            calendar dates. Instead of sending a generic Day 7 email to
            everyone, send a specific message when the member completes their
            third visit: &quot;Nice work hitting three sessions this week,
            Sarah. Most members who keep this pace in week one are still going
            strong at month six. Your goal-setting session with Coach Mike is
            confirmed for Thursday at 10 AM -- he is going to love hearing
            about your marathon training plan.&quot;
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The sequence should branch based on engagement level. A member who
            visits five times in week one needs different messaging than someone
            who visited once. The high-frequency visitor gets encouragement and
            class recommendations. The low-frequency visitor gets a gentle
            nudge with friction-removing offers: &quot;We noticed you have not
            had a chance to come back since Monday. Would a quick 20-minute
            express workout plan help fit gym time into your schedule? Tap here
            to get one sent to your app.&quot;
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            GymWyse&apos;s onboarding automation engine supports conditional
            branching with up to 12 decision nodes per sequence, meaning every
            member gets a truly personalized journey without your staff
            maintaining a single spreadsheet. And because each touchpoint is
            tracked, you can see exactly which messages drive visits and which
            get ignored, then optimize over time.
          </p>
        </motion.div>
      </section>

      {/* Milestone Rewards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Milestone Rewards That{" "}
            <span className="text-electric-green">Drive Behavior</span>
          </motion.h2>
          <motion.p
            className="text-cool-gray text-lg text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Each milestone is designed to reinforce a specific behavior that
            correlates with long-term retention. The rewards are modest in cost
            but enormous in psychological impact.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric-green/10 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-pure-white mb-1">
                      {m.trigger}
                    </h3>
                    <p className="text-sapphire-blue text-sm font-medium mb-1">
                      {m.reward}
                    </p>
                    <p className="text-cool-gray text-sm">{m.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Introduction Workflows */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Trainer Introduction Workflows
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            One of the most overlooked retention levers is the trainer
            introduction. Not a hard sell for personal training packages -- a
            genuine, no-pressure 15-minute session where a qualified trainer
            welcomes the new member, learns their goals, shows them a few
            exercises tailored to those goals, and makes themselves available as
            a resource. It is relationship building, not revenue extraction.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The data backs this up emphatically. Members who complete a trainer
            introduction within their first 21 days have a 90-day retention
            rate of 82%, compared to 61% for members who never interact with a
            trainer. The introduction creates a personal connection to the gym
            that extends beyond the facility itself. The member now has a
            familiar face, someone who knows their name and their goals, and
            that social bond is incredibly sticky.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The workflow is straightforward. When a new member signs up,
            GymWyse automatically schedules a trainer introduction within days
            seven through fourteen, matching based on the member&apos;s stated
            goals and the trainer&apos;s specialization. The member receives an
            app notification and SMS with booking options. If they do not book
            within 48 hours, a follow-up message fires with alternative times.
            If they book but do not show, the system reschedules automatically
            with a friendly message. The trainer receives a brief card showing
            the member&apos;s goals, experience level, and any health
            considerations.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            For gyms that offer this as a complimentary benefit, the conversion
            rate to paid personal training packages is 18-24% -- meaning the
            free session more than pays for itself while simultaneously boosting
            retention. It is one of the rare tactics that improves both revenue
            and retention simultaneously.
          </p>
        </motion.div>
      </section>

      {/* Buddy System Programs */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            The Buddy System: Your Secret Retention Weapon
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Remember the statistic from earlier: members with two or more gym
            friendships are 64% less likely to cancel. The buddy system
            operationalizes that insight by proactively matching new members
            with compatible existing members.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            GymWyse&apos;s buddy matching algorithm considers visit time
            preferences (morning people with morning people), fitness goals
            (weight loss with weight loss, strength with strength), experience
            level (beginners with slightly-more-experienced members, not
            advanced lifters), and class preferences. Around day 30 of
            onboarding, the system suggests a buddy match to both members via
            the app. If both accept, they unlock a shared challenge (for
            example, a combined 20-visit goal for the month) and receive dual
            guest passes as a reward for completing it.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The beauty of the buddy system is that it creates accountability
            without the cost of staff intervention. The matched members text
            each other, coordinate gym times, and hold each other accountable
            for showing up. Gyms running buddy programs report an average 22%
            increase in visit frequency among participants and a 31% improvement
            in 6-month retention compared to unmatched members. It is the
            closest thing to a free retention tool that exists.
          </p>
        </motion.div>
      </section>

      {/* Progress Tracking Dashboards */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Progress Tracking Dashboards for Members
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            One of the most common reasons members quit in the first 90 days is
            the perception that they are not making progress. They look in the
            mirror and do not see dramatic changes, so they conclude the gym is
            not working. A progress tracking dashboard combats this by
            surfacing the progress they cannot see in the mirror.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The member-facing dashboard in GymWyse shows total visits (with a
            streak counter), classes attended by type, workout volume trends (if
            they track lifts), cardio improvements, body measurements over time,
            and milestone badges earned. The key psychological trick is showing
            trajectory, not just snapshots. A member might not feel stronger,
            but seeing a graph that shows their squat weight increasing 15% over
            six weeks provides objective evidence of progress that overrides
            subjective doubt.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            Automated progress snapshots at days 30, 60, and 90 compile this
            data into a visual summary sent to the member. These snapshots are
            among the highest-engagement automated messages in the entire
            onboarding sequence, with a 78% open rate and a 34% share rate on
            social media. Members love sharing proof of progress, and every
            share is free marketing for your gym.
          </p>
        </motion.div>
      </section>

      {/* Command Center Hook */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            How the Command Center Solves This
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-8">
            GymWyse&apos;s{" "}
            <span className="text-electric-green font-semibold">
              Member Onboarding Pipeline
            </span>{" "}
            gives you a real-time Kanban-style view of every new member&apos;s
            onboarding journey. Each member card shows their current phase
            (Week 1, Weeks 2-4, Month 2, Month 3), milestones completed versus
            remaining, visit frequency trend, engagement score, and any stall
            alerts. You can filter by join date cohort to compare how this
            month&apos;s signups are progressing versus last month&apos;s. The
            pipeline flags members who are falling behind their expected
            milestone cadence in amber and members who have stalled completely
            in red, so your team knows exactly who needs a personal touchpoint
            today. Automated sequences handle the routine nurturing, while the
            dashboard ensures no member slips through the cracks during the
            critical first 90 days.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Early Churn Reduction",
                  value: "45%",
                  color: "text-electric-green",
                },
                {
                  label: "Avg. Milestones Hit",
                  value: "11/14",
                  color: "text-sapphire-blue",
                },
                {
                  label: "90-Day Retention",
                  value: "89%",
                  color: "text-electric-green",
                },
                {
                  label: "Stall Detection",
                  value: "<48hrs",
                  color: "text-sapphire-blue",
                },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                  <p className="text-sm text-cool-gray mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
            Legacy Manual Management vs.{" "}
            <span className="text-electric-green">GymWyse AI Management</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">
                    Capability
                  </th>
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">
                    Legacy Manual Management
                  </th>
                  <th className="text-left py-4 px-4 text-electric-green font-medium">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-soft-white">
                {[
                  [
                    "Onboarding sequence",
                    "Paper checklist or single welcome email",
                    "Automated 14-touchpoint, 90-day adaptive journey",
                  ],
                  [
                    "Milestone tracking",
                    "Staff memory or spreadsheet",
                    "Real-time pipeline with automated triggers",
                  ],
                  [
                    "Stall detection",
                    "Noticed weeks later (if at all)",
                    "Flagged within 48 hours with auto-re-engagement",
                  ],
                  [
                    "Trainer introductions",
                    "Ad hoc, depends on front desk initiative",
                    "Auto-scheduled with goal-based trainer matching",
                  ],
                  [
                    "Progress tracking",
                    "Member tracks on their own (or doesn't)",
                    "Automated 30/60/90-day visual progress snapshots",
                  ],
                  [
                    "Buddy matching",
                    "Not offered",
                    "Algorithm-matched by goals, schedule, and experience",
                  ],
                  [
                    "Personalization",
                    "Same sequence for every member",
                    "Segment-specific flows by membership tier and goals",
                  ],
                  [
                    "Retention measurement",
                    "Discovered at cancellation",
                    "Cohort-level 90-day retention tracked in real time",
                  ],
                ].map(([cap, legacy, gymwyse], i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-4 px-4 font-medium">{cap}</td>
                    <td className="py-4 px-4 text-cool-gray">{legacy}</td>
                    <td className="py-4 px-4 text-electric-green">{gymwyse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ROI Calculation */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            ROI Calculation: The Math That Matters
          </h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-cool-gray text-lg">
              Let&apos;s run the numbers for a gym signing up 40 new members
              per month with $65/month average dues:
            </p>
            <div className="space-y-3 text-soft-white">
              <p>
                <span className="text-sapphire-blue font-semibold">
                  Current 90-day churn (no onboarding):
                </span>{" "}
                50% of new members cancel = 20 lost/month
              </p>
              <p>
                <span className="text-sapphire-blue font-semibold">
                  Revenue lost per churned member (12-month LTV):
                </span>{" "}
                $65 x 12 ={" "}
                <span className="text-alert-red font-bold">$780</span>
              </p>
              <p>
                <span className="text-sapphire-blue font-semibold">
                  Annual cost of early churn:
                </span>{" "}
                20 members x 12 months x $780 LTV lost ={" "}
                <span className="text-alert-red font-bold">
                  $187,200/year in lost lifetime value
                </span>
              </p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p>
                  <span className="text-electric-green font-semibold">
                    With GymWyse onboarding (45% early churn reduction):
                  </span>{" "}
                  Save 9 members/month from cancelling
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Monthly revenue retained:
                  </span>{" "}
                  9 x $65 ={" "}
                  <span className="text-electric-green font-bold">
                    $585/month in immediate dues
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Annual revenue retained:
                  </span>{" "}
                  9 x $780 LTV x 12 cohorts ={" "}
                  <span className="text-electric-green font-bold">
                    $84,240/year in preserved lifetime value
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Including PT upsell from trainer intros (18% conversion):
                  </span>{" "}
                  ~7 new PT clients/month x $200/month avg ={" "}
                  <span className="text-electric-green font-bold">
                    additional $16,800/year
                  </span>
                </p>
              </div>
              <p className="text-cool-gray mt-4 text-base">
                Total annual impact:{" "}
                <span className="text-electric-green font-bold">$101,040</span>{" "}
                in retained and new revenue. Factor in that each retained member
                generates 0.3 referrals on average, and the true value climbs
                above{" "}
                <span className="text-electric-green font-bold">
                  $120,000/year
                </span>
                . Against a GymWyse subscription, that is a 10-15x return on
                investment.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Specific ROI{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Onboarding Completion and 12-Month Retention */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            The Correlation Between Onboarding Completion and 12-Month
            Retention
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            We analyzed onboarding completion data across thousands of members
            on the GymWyse platform and the correlation is striking. Members
            who complete zero to three milestones out of the standard fourteen
            have a 12-month retention rate of just 34%. Those who complete four
            to eight milestones jump to 58%. Members who hit nine to twelve
            milestones reach 76%. And those who complete all fourteen milestones
            -- the full 90-day framework -- retain at 89%.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The relationship is not just correlational, either. When gyms
            implement the framework and actively nudge members through stalled
            milestones, their cohort retention improves predictably. The
            milestones are not arbitrary checkboxes; each one represents a
            behavioral or social trigger that independently reduces churn risk.
            The 10th visit establishes a habit. The trainer introduction creates
            a personal connection. The buddy match builds accountability. The
            90-day celebration creates a psychological commitment point.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            This is why the Member Onboarding Pipeline dashboard is so
            powerful. It shows you not just who is on track and who is stalling,
            but which specific milestones are being missed most frequently
            across your membership base. If 60% of new members are skipping the
            trainer introduction, that tells you something about how the
            session is being presented or scheduled. If the buddy match
            acceptance rate is low, maybe the messaging needs work. The
            dashboard turns onboarding from a hope-for-the-best process into a
            measurable, improvable system.
          </p>
        </motion.div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Regional Compliance Note
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                region: "United States",
                note: "FTC auto-renewal disclosure rules apply to any membership with automatic billing. Onboarding communications must comply with CAN-SPAM (email) and TCPA (SMS) -- members must opt in to text messages during sign-up. California and New York have additional cancellation notice requirements that your onboarding sequence should reference transparently.",
              },
              {
                region: "United Kingdom",
                note: "GDPR governs all member data used in onboarding personalization, including behavioral tracking for milestone triggers. ICO guidance requires explicit consent for automated profiling. Consumer Rights Act 2015 mandates clear cancellation terms disclosed during onboarding. Buddy matching must comply with data sharing consent requirements.",
              },
              {
                region: "Australia",
                note: "Australian Consumer Law and the ACCC fitness industry code require transparent contract terms disclosed during onboarding. Australian Privacy Principles (APPs) govern collection and use of member data for personalization. Direct debit arrangements must follow BECS procedures and be clearly explained during the welcome sequence.",
              },
              {
                region: "UAE",
                note: "Dubai Sports Council and Abu Dhabi Sports Authority have facility-specific onboarding requirements including health screening questionnaires. UAE Federal Data Protection Law (2021) applies to member profiling and behavioral data. Free zone entities (DIFC, ADGM) have additional data handling obligations for cross-border data transfers in multi-location setups.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-bold text-sapphire-blue mb-2">
                  {item.region}
                </h3>
                <p className="text-cool-gray text-sm leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expert Commentary */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed italic mb-4">
              &quot;The single biggest mistake we see gyms make with onboarding
              is treating it as an orientation event rather than a 90-day
              relationship-building process. A facility tour on day one is
              necessary but nowhere near sufficient. The members who stay are
              the ones who form habits in weeks two through four, deepen their
              engagement in month two, and build community connections in month
              three. Our Member Onboarding Pipeline was designed to make this
              progression visible and measurable, because what gets measured
              gets managed. The gyms that treat their onboarding pipeline with
              the same rigor they apply to their sales pipeline consistently
              outperform on retention -- and it is not even close.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, based on analysis of 90-day
              retention data across 1,800+ gym cohorts
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-soft-white pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-cool-gray leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA + Internal Links */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Ready to Transform Your Onboarding?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            See the Member Onboarding Pipeline in action with a personalized
            demo showing how it works for your gym&apos;s sign-up volume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Live Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
          <div className="border-t border-glass-border pt-8">
            <p className="text-sm text-dim-gray mb-3">Related Resources</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/solutions/reduce-churn"
                className="text-sapphire-blue hover:text-electric-green transition-colors text-sm"
              >
                Churn Reduction Solutions{" "}
                <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link
                href="/roi-calculator"
                className="text-sapphire-blue hover:text-electric-green transition-colors text-sm"
              >
                ROI Calculator{" "}
                <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link
                href="/demo"
                className="text-sapphire-blue hover:text-electric-green transition-colors text-sm"
              >
                Request Demo{" "}
                <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
