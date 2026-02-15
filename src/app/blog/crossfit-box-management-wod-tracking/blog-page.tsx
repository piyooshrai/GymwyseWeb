"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Trophy,
  Timer,
  BarChart3,
  Users,
  Dumbbell,
  Calendar,
  TrendingUp,
  CheckCircle,
  Globe,
  Zap,
  Target,
} from "lucide-react";

const faqs = [
  {
    q: "Can GymWyse handle CrossFit-specific WOD formats like AMRAP, EMOM, and For Time?",
    a: "Yes. GymWyse supports all standard CrossFit WOD formats: AMRAP (As Many Rounds As Possible), EMOM (Every Minute On the Minute), For Time, Tabata, Chipper, and custom formats. Each format has its own scoring logic, so an AMRAP tracks rounds and reps while a For Time workout tracks completion time. You can also create hybrid WODs that combine multiple formats in a single session.",
  },
  {
    q: "How do leaderboards work for different skill levels?",
    a: "Leaderboards can be filtered by division (RX, Scaled, Foundations), gender, age group, and custom categories you define. Members only see their relevant division by default but can view other divisions for motivation. The system also tracks personal records separately, so newer athletes are not discouraged by comparing against advanced members. Percentile rankings show each member where they stand relative to their own division.",
  },
  {
    q: "Does the platform support inter-box competitions?",
    a: "Absolutely. You can create competitions that span multiple boxes, with each location submitting scores through the platform. The competition module handles heat scheduling, judge assignments, movement standards documentation, and real-time score display. We have supported inter-box throwdowns with up to 24 participating locations and 500+ athletes.",
  },
  {
    q: "How does GymWyse handle drop-in management for CrossFit?",
    a: "Drop-in management includes a public-facing booking page where visiting athletes can reserve a spot, sign the waiver digitally, provide their CrossFit experience level, and pay the drop-in fee, all before they walk through the door. The coach receives a notification with the visitor's profile so they can plan appropriate scaling. Drop-in revenue and frequency are tracked separately in your analytics.",
  },
  {
    q: "Can coaches program workout cycles and periodisation through the platform?",
    a: "Yes. The programming tool supports macro, meso, and micro cycle planning. Coaches can build strength cycles (like Wendler 5/3/1 or Smolov), gymnastics progressions, and metabolic conditioning blocks, then map them across weeks and months. The system tracks which movement patterns have been programmed recently to ensure balanced programming and prevent overuse injuries.",
  },
  {
    q: "What about CrossFit affiliate compliance requirements?",
    a: "GymWyse helps you maintain CrossFit affiliate compliance by tracking coach certifications (CF-L1 through CF-L4), ensuring at least one certified coach is scheduled per class, maintaining required insurance documentation, and managing your affiliate agreement renewal timeline. The compliance dashboard flags any issues 60 days before they become problems.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function CrossFitBoxManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
              {
                "@type": "HowTo",
                name: "How to Optimise CrossFit Box Management with GymWyse",
                description:
                  "A step-by-step guide to setting up WOD tracking, leaderboards, and competition management for your CrossFit box.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Set Up WOD Programming",
                    text: "Configure your programming calendar with workout types, movement library, and scaling options for RX, Scaled, and Foundations tracks.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Enable Athlete Profiles",
                    text: "Create athlete profiles with benchmark scores, personal records, movement competencies, and scaling preferences.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure Leaderboards",
                    text: "Set up divisional leaderboards with real-time scoring, personal record tracking, and community recognition features.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Plan Competition Management",
                    text: "Create in-house throwdowns or inter-box competitions with heat scheduling, judge assignments, and live score displays.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Track Coach Certifications",
                    text: "Enter all coach certifications with expiry dates and link them to class scheduling for affiliate compliance.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Activate Community Features",
                    text: "Enable social feeds, member achievements, milestone celebrations, and drop-in booking for visiting athletes.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-deep-space bg-electric-green px-3 py-1 rounded-full uppercase tracking-wider">
              CrossFit
            </span>
            <span className="text-xs text-dim-gray">February 10, 2026</span>
            <span className="text-xs text-dim-gray">16 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-tight mb-6">
            CrossFit Box Management: WOD Tracking, Competition, and Community
            Building
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed">
            Purpose-built gym management features for CrossFit boxes: WOD
            programming, leaderboards, competition management, and everything
            that makes a box more than just a gym.
          </p>
        </div>
      </motion.section>

      {/* Direct Answer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <h2 className="text-xl font-bold text-electric-green mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              The Short Answer
            </h2>
            <p className="text-soft-white leading-relaxed text-lg">
              CrossFit boxes need management software that understands WODs, not
              just classes. Generic gym platforms treat a Fran as the same thing
              as a yoga session. Purpose-built CrossFit tools track AMRAP
              rounds, For Time scores, and benchmark PRs while managing
              leaderboards, competitions, scaling recommendations, and community
              engagement. Boxes using CrossFit-specific software see 28% higher
              member retention because athletes feel their progress is tracked
              and celebrated in ways that matter to the sport.
            </p>
          </div>
        </div>
      </motion.section>

      {/* WOD Programming */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <Dumbbell className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              WOD Programming and Tracking
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Programming is the heartbeat of a CrossFit box. It determines
              member results, injury rates, athlete satisfaction, and ultimately
              whether people stay or leave. Yet most box owners still program on
              spreadsheets, whiteboards, or a notes app. The problem is not just
              disorganisation. It is the inability to see patterns over time.
            </p>
            <p>
              A proper WOD programming tool lets you build workouts using a
              movement library that includes every standard CrossFit movement
              and its variations. It tracks which movements you have programmed
              over the past week, month, and quarter so you can ensure balanced
              stimulus. If you programmed heavy squats on Monday, the system
              flags it when you try to add front squats on Tuesday. If you have
              not touched gymnastics pulling movements in two weeks, it nudges
              you.
            </p>
            <p>
              For each workout, you configure the format (AMRAP, EMOM, For
              Time, Tabata, Chipper, or custom), the time domain, the intended
              stimulus, and the scaling tracks. Most boxes run three tracks: RX
              for competition-level athletes, Scaled for intermediate athletes,
              and Foundations for newcomers. Each track needs appropriate loads,
              movement substitutions, and rep schemes that achieve the same
              intended stimulus at different ability levels.
            </p>
            <p>
              After the session, athletes log their scores directly through the
              member app. RX athletes enter their time or rounds/reps. Scaled
              athletes do the same for their track. The system validates scores
              against reasonable ranges since nobody completes Fran in 45
              seconds on their first attempt, and obvious data entry errors get
              flagged for coach review.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Benchmark Tracking
            </h3>
            <p>
              The Girls (Fran, Grace, Helen, etc.), Hero WODs (Murph, DT,
              Nate), and CrossFit Open workouts form the benchmark library that
              athletes use to measure progress over time. When you program a
              benchmark, the system automatically surfaces each athlete&apos;s
              last score so they know exactly what they are trying to beat.
              After the session, PR alerts fire off in the community feed,
              creating visible celebrations that reinforce the competitive,
              supportive culture that defines CrossFit.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Programming Periodisation
            </h3>
            <p>
              Elite CrossFit programming follows periodisation principles: macro
              cycles (12-16 weeks) that build toward peaks, meso cycles (3-4
              weeks) that focus on specific capacities, and micro cycles (weekly)
              that balance stimulus and recovery. The programming tool lets
              coaches map their entire macro cycle, assign focus areas to each
              meso cycle (strength, gymnastics, metabolic conditioning,
              competition prep), and auto-populate weekly templates that coaches
              then customise.
            </p>
            <p>
              This is not about removing the coach&apos;s creativity. It is
              about giving them a framework that ensures nothing gets
              neglected. The coach who &quot;just programmes what feels
              right&quot; inevitably ends up with members who are strong but
              cannot do muscle-ups, or gymnasts who cannot deadlift. Systematic
              periodisation fixes this without making programming feel
              formulaic.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Leaderboards and Competition */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <Trophy className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Real-Time Leaderboards and Competition Management
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              Competition is woven into CrossFit DNA. Leaderboards are not a
              nice-to-have; they are the engine that drives attendance,
              effort, and community bonds. But a whiteboard leaderboard
              disappears when someone wipes it clean for the next day. Digital
              leaderboards are permanent, filterable, and shareable.
            </p>
            <p>
              GymWyse leaderboards display in real time as athletes log scores.
              The 5:30 AM class can see their times, and the 7:00 AM class
              knows exactly what they need to beat. Divisions keep competition
              fair: RX, Scaled, and Foundations athletes compete within their
              own tracks. Age-group filtering lets masters athletes see how they
              stack up against peers. Gender-specific boards ensure everyone has
              meaningful competition.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              In-House Throwdowns
            </h3>
            <p>
              In-house competitions are the single most effective retention tool
              for CrossFit boxes. They give members a tangible goal, create a
              shared experience, and build the community bonds that make people
              stay. The competition module handles every aspect: event creation,
              heat scheduling based on athlete numbers and available equipment,
              judge assignment (with conflict-of-interest avoidance for
              coaches judging their own athletes), movement standard
              documentation, real-time score entry, and live leaderboard display
              on a TV or projector.
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Inter-Box Competitions
            </h3>
            <p>
              Inter-box throwdowns expand the competitive circle beyond your
              four walls. Each participating box runs the same workouts during
              a defined window, submits verified scores through the platform,
              and a combined leaderboard shows the overall rankings. This
              creates a community that extends across boxes, introduces your
              members to potential drop-in visitors, and positions your box as
              part of a larger competitive ecosystem.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Community Features and Drop-In */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-electric-green/10">
              <Users className="w-6 h-6 text-electric-green" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Community Features and Drop-In Management
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              CrossFit retention rates outperform traditional gyms (75% vs 50%
              annually) primarily because of community. Software should
              amplify this advantage, not ignore it. Community features include
              a social feed where members post WOD scores, celebrate PRs,
              share workout photos, and encourage each other. Milestone
              celebrations trigger automatically: first muscle-up, 100th class,
              one-year anniversary.
            </p>
            <p>
              The community feed is not just social. It is data-rich. When a
              member has not posted a score in two weeks, the system flags them
              as potentially at risk of churning. Coaches can then reach out
              with a personal message through the app, closing the gap between
              &quot;I haven&apos;t seen them in a while&quot; and &quot;they
              already cancelled.&quot;
            </p>

            <h3 className="text-2xl font-semibold text-pure-white pt-4">
              Drop-In Management
            </h3>
            <p>
              Drop-ins are a meaningful revenue stream for boxes in tourist
              areas, business districts, or near hotels. But managing them
              manually is a headache: waivers, payment, skill assessment,
              and class capacity all need to be sorted before the visitor touches
              a barbell. The drop-in module creates a public booking page where
              visiting athletes select a class, sign the digital waiver, answer
              a skill assessment questionnaire, and pay the drop-in fee. The
              coach gets a notification with the visitor&apos;s profile,
              experience level, and any noted limitations before the class
              starts.
            </p>
            <p>
              Smart boxes use drop-in data strategically. If you consistently
              get drop-ins from a particular hotel or coworking space, that is a
              partnership opportunity. If drop-in revenue spikes during certain
              months, adjust your pricing or promote it. GymWyse tracks
              drop-in revenue, frequency, and geographic patterns separately
              from membership revenue so you can see this opportunity clearly.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Scaling Recommendations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-sapphire-blue/10">
              <Target className="w-6 h-6 text-sapphire-blue" />
            </div>
            <h2 className="text-3xl font-bold text-pure-white">
              Intelligent Scaling Recommendations
            </h2>
          </div>

          <div className="space-y-6 text-soft-white leading-relaxed">
            <p>
              One of the biggest challenges for CrossFit coaches is helping each
              athlete choose the right scaling option. With classes of 15-20
              athletes at varying levels, a coach cannot individually consult
              with every person before the whiteboard brief. Intelligent scaling
              solves this.
            </p>
            <p>
              Based on each athlete&apos;s logged history including max lifts,
              benchmark scores, movement competencies, and recent training
              load, the system suggests a specific scaling option for each
              member before they walk in the door. An athlete whose max clean
              is 135 lbs gets a different recommendation for a workout with
              cleans at 155 RX than the athlete whose max is 225. The
              recommendation shows up in the member app alongside the WOD,
              giving athletes time to mentally prepare and coaches time to focus
              on technique rather than logistics.
            </p>
            <p>
              The system also tracks when athletes consistently scale below
              their capability, which may indicate fear, previous injury, or
              lack of confidence, and surfaces this data for coaches to address
              through conversation. Conversely, it flags athletes who
              consistently attempt RX weights beyond their tested capacity,
              which is an injury risk that coaches should monitor.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Command Center Hook */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            How the Command Center Solves This: WOD Performance Analytics
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-soft-white leading-relaxed">
              The GymWyse WOD Performance Analytics dashboard gives box owners
              and head coaches a bird&apos;s-eye view of programming
              effectiveness, athlete progression, and community engagement
              all in one place.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Movement Pattern Distribution
                    </p>
                    <p className="text-sm text-cool-gray">
                      Visual breakdown of programming balance across squat,
                      hinge, push, pull, and monostructural patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      PR Velocity Tracking
                    </p>
                    <p className="text-sm text-cool-gray">
                      Rate of personal records across your membership, showing
                      programming effectiveness over time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Class Attendance by WOD Type
                    </p>
                    <p className="text-sm text-cool-gray">
                      Which workout formats drive the highest and lowest
                      attendance, informing your programming decisions
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Athlete Progression Curves
                    </p>
                    <p className="text-sm text-cool-gray">
                      Individual and cohort-level progression across benchmarks,
                      identifying who is improving and who is plateauing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Competition Performance Tracker
                    </p>
                    <p className="text-sm text-cool-gray">
                      Historical competition results, athlete rankings, and
                      inter-box comparison analytics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-pure-white font-medium">
                      Community Engagement Score
                    </p>
                    <p className="text-sm text-cool-gray">
                      Composite metric tracking score logging, social feed
                      activity, competition participation, and milestone
                      achievements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Area
                  </th>
                  <th className="py-4 pr-6 text-sm font-semibold text-cool-gray uppercase tracking-wider">
                    Legacy Manual Management
                  </th>
                  <th className="py-4 text-sm font-semibold text-electric-green uppercase tracking-wider">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    WOD Programming
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Spreadsheet or notes app, no pattern tracking
                  </td>
                  <td className="py-4 text-soft-white">
                    Movement library with balance analytics and periodisation
                    tools
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Score Tracking
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Whiteboard, erased at end of day
                  </td>
                  <td className="py-4 text-soft-white">
                    Permanent digital records with PR detection and historical
                    comparison
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Leaderboards
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Single list, no divisions, gone by tomorrow
                  </td>
                  <td className="py-4 text-soft-white">
                    Multi-division, real-time, persistent, filterable by age,
                    gender, and level
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Competition Management
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Manual spreadsheets, paper scorecards, shouting across the
                    gym
                  </td>
                  <td className="py-4 text-soft-white">
                    End-to-end digital: registration, heats, judging, live
                    scoring, results
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Scaling Recommendations
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Coach memory and on-the-spot assessment
                  </td>
                  <td className="py-4 text-soft-white">
                    Data-driven recommendations based on athlete history and
                    tested maxes
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Drop-In Management
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Walk-in, paper waiver, cash or card at the desk
                  </td>
                  <td className="py-4 text-soft-white">
                    Pre-arrival booking, digital waiver, skill assessment,
                    online payment
                  </td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-4 pr-6 text-pure-white font-medium">
                    Affiliate Compliance
                  </td>
                  <td className="py-4 pr-6 text-cool-gray">
                    Hope the owner remembers to renew certifications
                  </td>
                  <td className="py-4 text-soft-white">
                    Automated tracking of all coach certs with 60-day advance
                    renewal alerts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ROI Calculation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            ROI Calculation: The Revenue Impact of CrossFit-Specific Tools
          </h2>
          <div className="glass-card p-8">
            <p className="text-soft-white leading-relaxed mb-6">
              Here is the math for a 150-member CrossFit box charging $175/month
              with 10 classes per day.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  GymWyse CrossFit plan (annual)
                </span>
                <span className="text-pure-white font-mono font-bold">
                  $2,988/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Retention improvement (28% reduction in churn, 8 fewer
                  cancellations x $175 x 12)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$16,800/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Drop-in revenue increase (systematic booking, 4 extra
                  drop-ins/month x $25)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$1,200/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  In-house competition revenue (4 events/year x 40 athletes x
                  $45)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$7,200/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Coach time saved on programming (5 hrs/week x $25/hr x 52)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$6,500/year
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-glass-border/50">
                <span className="text-cool-gray">
                  Reduced admin time (waivers, payments, scheduling, 3
                  hrs/week x $20/hr x 52)
                </span>
                <span className="text-electric-green font-mono font-bold">
                  +$3,120/year
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-electric-green">
                <span className="text-pure-white font-bold text-lg">
                  Total annual value
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $34,820
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-electric-green/5 rounded-lg px-4">
                <span className="text-pure-white font-bold">
                  Net annual ROI
                </span>
                <span className="text-electric-green font-mono font-bold text-xl">
                  $31,832 (11.7x return)
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Regional Compliance Note */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-sapphire-blue" />
            <h2 className="text-3xl font-bold text-pure-white">
              Regional CrossFit Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇺🇸 United States
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                CrossFit LLC affiliate requirements, NSCA-aligned coaching
                standards, state-level health club licensing, AED and CPR
                certification for all coaches, liability insurance minimums
                ($1M per occurrence typical).
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇬🇧 United Kingdom
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                CrossFit affiliate license, CIMSPA-recognised coaching
                qualifications alongside CF-L1+, HSE health and safety at work
                compliance, public liability insurance (minimum £5M recommended),
                GDPR for athlete data.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇺 Australia
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                CrossFit affiliate compliance, Fitness Australia registration,
                Certificate III/IV in Fitness for coaches, Work Health and Safety
                Act, public liability insurance (minimum AUD $20M), mandatory
                incident reporting.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-pure-white mb-3">
                🇦🇪 United Arab Emirates
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                CrossFit affiliate license, Dubai Sports Council or ADSC
                registration, coach licensing through municipality, facility
                safety inspections, gender-segregated class scheduling
                compliance where required.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expert Commentary */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-sapphire-blue/10">
                <Users className="w-5 h-5 text-sapphire-blue" />
              </div>
              <div>
                <p className="text-pure-white font-semibold">
                  GymWyse Product Team
                </p>
                <p className="text-sm text-cool-gray">Expert Commentary</p>
              </div>
            </div>
            <div className="space-y-4 text-soft-white leading-relaxed">
              <p>
                &quot;We spent three months embedded in CrossFit boxes before
                writing a single line of code for the WOD module. The biggest
                lesson: CrossFit athletes care about their data more than
                almost any other fitness demographic. They want to see their
                Fran time improving. They want to know their clean PR. They want
                to compare against last year. If your software does not make
                that data visible and celebratory, you are fighting against the
                culture.&quot;
              </p>
              <p>
                &quot;The competition module was born from frustration. We
                watched a box owner run an in-house throwdown with a stack of
                printed scorecards, three clipboards, and a laptop balanced on a
                plyo box. Scores were read out over a megaphone and typed into a
                spreadsheet between heats. Two scoring errors caused visible
                athlete frustration. That should never happen when the
                technology exists to make it seamless.&quot;
              </p>
              <p>
                &quot;The most underrated feature is the programming balance
                tracker. One head coach told us he did not realise he had not
                programmed overhead squats in 11 weeks until the dashboard
                showed him. His members would never have noticed, but their
                overhead stability would have. Good software makes good coaches
                better.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pure-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-pure-white font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-electric-green shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-cool-gray leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-electric-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
            Your Box Deserves Better Than a Whiteboard
          </h2>
          <p className="text-lg text-soft-white leading-relaxed mb-8 max-w-2xl mx-auto">
            See how GymWyse transforms WOD tracking, leaderboards, and
            community management for CrossFit boxes. Purpose-built, not
            retrofitted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="lg">
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/crossfit-gym-software">
              <Button variant="outline" size="lg">
                Explore CrossFit Solutions
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
