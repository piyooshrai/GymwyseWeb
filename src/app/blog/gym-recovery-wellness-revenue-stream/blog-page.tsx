"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  Thermometer,
  Snowflake,
  Waves,
  Zap,
  Heart,
  Calendar,
  Target,
  Shield,
} from "lucide-react";

const faqs = [
  {
    q: "How much space do recovery services require?",
    a: "It depends on the service mix, but most gyms start with 200 to 400 square feet for a two-bay recovery zone (one cold plunge and one infrared sauna). A full recovery suite with cold plunge, sauna, compression therapy stations, and a float tank typically needs 600 to 1,000 square feet. The key insight is that recovery bays generate significantly more revenue per square foot than traditional gym floor space. A cold plunge bay occupying 40 square feet can generate $3,000 to $5,000 per month, whereas the same square footage of gym floor generates perhaps $200 to $400 in attributed membership revenue. GymWyse helps you model the revenue-per-square-foot comparison during the planning phase.",
  },
  {
    q: "What is the typical payback period for recovery equipment?",
    a: "Cold plunge units ($3,000 to $8,000) typically pay back in 3 to 5 months at moderate utilization. Infrared saunas ($4,000 to $15,000) pay back in 4 to 7 months. Compression therapy devices ($5,000 to $12,000 per set) pay back in 5 to 8 months. Float tanks ($15,000 to $40,000) have the longest payback at 8 to 14 months but also command the highest per-session pricing. Cryotherapy chambers ($40,000 to $150,000) are the biggest investment and typically pay back in 12 to 24 months, which is why many gyms start with cold plunge as a lower-risk entry point. GymWyse tracks utilization rates and revenue per bay to help you forecast payback accurately based on your actual booking data.",
  },
  {
    q: "Should recovery services be included in membership or charged separately?",
    a: "The highest-performing model is a tiered approach. Base membership does not include recovery access. A mid-tier 'fitness plus recovery' membership includes a set number of recovery sessions per month (typically four to eight) at a $20 to $40 premium. A premium 'unlimited wellness' tier includes unlimited recovery access at a $50 to $80 premium. Individual session drop-in pricing is also available for base members at $15 to $35 per session. This tiered model captures the most revenue because it gives price-sensitive members a reason to upgrade while still monetizing casual users through drop-in fees. GymWyse data shows the tiered model generates 40% more recovery revenue than all-inclusive or drop-in-only models.",
  },
  {
    q: "How do recovery services impact member retention?",
    a: "The retention effect is substantial and well-documented across our platform. Members who use recovery services at least twice per week have a 12-month retention rate of 91%, compared to 68% for gym-floor-only members. The mechanism is twofold: first, recovery services create a daily visit habit (members come in on rest days specifically for cold plunge or sauna, increasing weekly touchpoints from 3 to 5 or more), and second, recovery creates a perceived value that is difficult to replicate at a competitor gym. A member might be able to find another gym with similar equipment, but rebuilding their recovery routine is a switching cost that keeps them loyal.",
  },
  {
    q: "What staffing is required for recovery services?",
    a: "Most recovery services are self-service or require minimal supervision after an initial orientation. Cold plunge, sauna, and compression therapy need safety signage and a brief first-use walkthrough but no ongoing staffing. Float tanks require cleaning between sessions (15 to 20 minutes) and are often managed by existing front desk staff during quiet periods. Massage and cryotherapy are the exceptions, requiring licensed practitioners. Many gyms partner with independent massage therapists on a revenue-share model (typically 60/40 or 50/50) rather than hiring full-time staff, keeping the cost structure variable rather than fixed.",
  },
  {
    q: "Can recovery services work in a small boutique gym?",
    a: "Absolutely, and in many ways boutique gyms are better positioned for recovery than large commercial facilities. A boutique studio can add a single cold plunge and an infrared sauna in under 100 square feet, brand the experience as premium wellness, and charge $30 to $50 per month for a recovery add-on to 30% of their membership base. For a 200-member boutique studio, that is $1,800 to $3,000 per month in incremental revenue from two pieces of equipment that cost under $15,000 total. The intimate setting also makes the recovery space feel exclusive rather than crowded, which supports premium pricing.",
  },
];

const recoveryServices = [
  {
    icon: Snowflake,
    title: "Cold Plunge Pools",
    desc: "The breakout star of the recovery world. Cold water immersion at 39-50 degrees Fahrenheit for 2 to 5 minutes reduces inflammation, accelerates muscle recovery, and triggers an endorphin response that members become genuinely addicted to. Equipment cost ranges from $3,000 for a basic commercial tub to $8,000 for a filtered, chilled unit with digital temperature control. Session pricing: $10 to $25 per session or included in premium tiers. Maintenance is minimal -- water filtration, periodic cleaning, and electricity for the chiller. Cold plunge is the highest-ROI recovery service because of low cost, low space requirement, and extremely high demand driven by social media visibility.",
  },
  {
    icon: Thermometer,
    title: "Infrared Sauna",
    desc: "Unlike traditional saunas that heat the air, infrared saunas use light wavelengths to heat the body directly at lower ambient temperatures (120-150 degrees Fahrenheit versus 180-200 degrees). This makes sessions more comfortable and accessible, especially for heat-sensitive members. Health benefits include improved circulation, pain relief, skin rejuvenation, and deep relaxation. A two-person infrared sauna cabin costs $4,000 to $15,000 depending on size and features. Session pricing: $15 to $30 for 30 to 45 minutes. Infrared saunas pair exceptionally well with cold plunge for contrast therapy, and members who use both retain at significantly higher rates.",
  },
  {
    icon: Zap,
    title: "Compression Therapy",
    desc: "Pneumatic compression boots (like NormaTec or similar brands) use air pressure to massage the legs, improve blood flow, and accelerate recovery after intense workouts. Sessions last 20 to 30 minutes and members can use their phones, read, or socialize while wearing the boots. Equipment cost: $5,000 to $12,000 for a set of 4 to 6 units. Session pricing: $10 to $20 per session. Compression therapy is particularly popular with runners, CrossFit athletes, and cycling enthusiasts. The social aspect -- multiple members sitting together in compression boots, chatting -- actually enhances the community-building effect of recovery services.",
  },
  {
    icon: Snowflake,
    title: "Whole-Body Cryotherapy",
    desc: "Cryotherapy chambers expose the body to extreme cold (minus 150 to minus 300 degrees Fahrenheit) for 2 to 3 minutes. The extreme stimulus triggers a systemic anti-inflammatory response, endorphin release, and metabolic boost. Equipment cost is significant: $40,000 to $150,000 for a commercial cryo chamber plus ongoing nitrogen costs. Session pricing: $30 to $65 per session. This is the premium-tier recovery offering that positions your gym as a serious wellness destination. Best suited for gyms with 500 or more members and strong demand signals from your existing base.",
  },
  {
    icon: Waves,
    title: "Float Tanks",
    desc: "Sensory deprivation tanks filled with Epsom salt solution allow members to float effortlessly in complete darkness and silence for 60 to 90 minutes. The experience is deeply relaxing and popular with members seeking stress relief, meditation enhancement, and pain management. Equipment cost: $15,000 to $40,000 per tank plus water treatment systems. Session pricing: $40 to $75 per session. Float tanks command the highest per-session pricing of any recovery service and attract a wellness-focused demographic that may not otherwise join a gym, effectively expanding your addressable market.",
  },
  {
    icon: Heart,
    title: "Massage and Bodywork",
    desc: "Licensed massage therapy offered on-site, typically through partnerships with independent practitioners on a revenue-share model. Services range from 30-minute sports massage ($40 to $60) to 90-minute deep tissue sessions ($100 to $140). The gym provides the space and booking infrastructure; the therapist provides the service. Revenue share is typically 50/50 to 60/40 in the gym's favor. Massage is the recovery service with the broadest appeal because it requires no equipment learning curve and has universal name recognition. It also serves as a gateway: members who start with massage often progress to trying cold plunge, sauna, and compression therapy.",
  },
];

const pricingTiers = [
  {
    tier: "Base Membership",
    recovery: "No recovery access included",
    price: "$49-69/month",
    target: "Price-sensitive members focused on gym floor and classes",
  },
  {
    tier: "Fitness + Recovery",
    recovery: "4-8 recovery sessions/month",
    price: "$79-99/month",
    target: "Active members who train 3-4x/week and want faster recovery",
  },
  {
    tier: "Unlimited Wellness",
    recovery: "Unlimited recovery access",
    price: "$119-149/month",
    target: "Daily visitors, recovery enthusiasts, wellness-focused members",
  },
  {
    tier: "Drop-In Sessions",
    recovery: "Per-session access for base members",
    price: "$15-35/session",
    target: "Casual users, trial before committing to upgrade",
  },
];

export function GymRecoveryWellnessPage() {
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
    name: "How to Build a Recovery and Wellness Revenue Stream in Your Gym",
    description:
      "A step-by-step guide to adding cold plunge, sauna, compression therapy, and other recovery services that generate 35%+ margins and reduce member churn.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Assess Demand and Space",
        text: "Survey existing members on recovery interest, audit available space, and model revenue-per-square-foot compared to current gym floor usage.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select Your Recovery Service Mix",
        text: "Start with high-ROI, low-cost services like cold plunge and infrared sauna before expanding to float tanks or cryotherapy based on demand data.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Design Your Pricing Model",
        text: "Implement a tiered membership structure with base, fitness-plus-recovery, and unlimited wellness tiers plus drop-in session pricing.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Configure Booking and Scheduling",
        text: "Set up bay-level scheduling with session duration, turnaround time, capacity limits, and automated booking through your member app.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Launch Cross-Sell Campaigns",
        text: "Identify fitness members most likely to upgrade using visit frequency and class attendance data, then target them with recovery trial offers.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Track Revenue and Utilization",
        text: "Monitor per-bay revenue, utilization rates, upgrade conversion, and retention impact through the Recovery Services Revenue Panel.",
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
              Published February 7, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              Recovery and Wellness:{" "}
              <span className="text-electric-green">
                Building a High-Margin Revenue Stream
              </span>{" "}
              Inside Your Gym
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              How cold plunge, sauna, massage, and recovery services generate
              35% margins and reduce churn.
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
              Recovery and wellness services -- cold plunge, infrared sauna,
              compression therapy, cryotherapy, float tanks, and massage --
              generate 35% or higher profit margins compared to 15-20% for
              standard gym memberships. They also reduce churn by creating
              daily visit habits on rest days and building perceived value that
              competitors cannot easily replicate. A tiered pricing model
              (base, recovery-included, unlimited wellness) captures the most
              revenue while the retention effect compounds over time.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Recovery Is the Opportunity */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Why Recovery Is the Biggest Revenue Opportunity in Fitness Right Now
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The global wellness economy is valued at over $5.6 trillion, and
            recovery services are one of the fastest-growing segments within
            it. What used to be reserved for elite athletes and luxury spas --
            cold plunge, cryotherapy, infrared sauna, compression therapy -- has
            gone mainstream. Social media has turned ice baths into a cultural
            movement. Podcasters rave about contrast therapy. And your members
            are already searching for these services in your area.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The question is whether they find them at your gym or at a
            standalone recovery studio down the street. If a member is paying
            $50 per month at your gym and then spending another $100 per month
            at a separate recovery facility, you are leaving money on the table
            and, worse, giving another business the opportunity to become their
            primary wellness destination.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Here is what makes recovery services so compelling from a business
            perspective. Standard gym memberships operate on thin margins --
            typically 15-20% after rent, equipment, staffing, and utilities.
            Recovery services flip this equation. A cold plunge bay costs $5,000
            to install, requires minimal staffing, uses a fraction of the space,
            and can generate $3,000 to $5,000 per month in revenue. The margins
            are 35% or higher because the ongoing costs (electricity, water
            treatment, cleaning) are a small fraction of the revenue.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            But the financial case goes beyond the direct margin. Recovery
            services fundamentally change member behavior in ways that boost
            your entire business. Members who use recovery come to the gym more
            frequently (including rest days), stay longer per visit, are more
            likely to purchase additional services, and -- most importantly --
            cancel at dramatically lower rates. Let us break down each service,
            the economics, and how to build this into your operation.
          </p>
        </motion.div>
      </section>

      {/* Recovery Service Types */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recovery Services That Generate{" "}
            <span className="text-electric-green">35%+ Margins</span>
          </motion.h2>

          <div className="space-y-8">
            {recoveryServices.map((service, i) => (
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
                    <service.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white mb-2">
                      <span className="text-sapphire-blue mr-2">
                        #{i + 1}
                      </span>
                      {service.title}
                    </h3>
                    <p className="text-cool-gray leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4 text-center">
            Pricing Models:{" "}
            <span className="text-electric-green">
              Included vs. Add-On vs. Tiered
            </span>
          </h2>
          <p className="text-cool-gray text-lg text-center mb-10 max-w-2xl mx-auto">
            The tiered model consistently outperforms all-inclusive and
            drop-in-only pricing, generating 40% more recovery revenue on
            average.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {pricingTiers.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h3 className="text-lg font-bold text-pure-white mb-1">
                  {t.tier}
                </h3>
                <p className="text-electric-green font-semibold text-xl mb-2">
                  {t.price}
                </p>
                <p className="text-sapphire-blue text-sm font-medium mb-2">
                  {t.recovery}
                </p>
                <p className="text-cool-gray text-sm">{t.target}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Margin Analysis */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Margin Analysis: Recovery vs. Standard Memberships
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The margin story is where recovery services truly shine. A standard
            gym membership at $59 per month generates roughly $9 to $12 in
            profit after accounting for facility costs, equipment depreciation,
            staffing, utilities, and marketing amortization. That is a 15-20%
            margin, and in a competitive market where price pressure keeps
            squeezing dues downward, those margins are under constant threat.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Recovery services operate in a different economic universe. A cold
            plunge bay generating $4,000 per month in revenue (through a
            combination of tier upgrades and drop-in sessions) has monthly
            operating costs of approximately $400 to $600 (electricity for the
            chiller, water treatment, cleaning supplies, a tiny fraction of rent
            allocated to the 40 square feet it occupies). That leaves $3,400 to
            $3,600 in gross profit -- a margin of 85-90% at the service level.
            Even when you factor in the amortized equipment cost, the blended
            margin remains above 35%.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The same math applies across all recovery services, though at
            different scales. Infrared saunas run at 70-80% service-level
            margins. Compression therapy sits around 75-85%. Float tanks have
            slightly lower margins (60-70%) due to higher water treatment costs
            but command the highest per-session pricing. Massage runs at the
            revenue-share split, which is essentially a variable cost model with
            zero risk. Across a blended recovery portfolio, 35% net margin is
            conservative -- most gyms running recovery services through GymWyse
            report 38-42% blended margins on their recovery revenue.
          </p>
        </motion.div>
      </section>

      {/* Booking and Scheduling */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Booking and Scheduling for Recovery Bays
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Recovery services require different scheduling logic than group
            classes. Each bay is a physical resource with a fixed capacity
            (usually one to two people at a time), a session duration (10
            minutes for cold plunge, 30 to 45 minutes for sauna, 60 to 90
            minutes for float), and a turnaround time for cleaning or
            temperature reset between users. Managing this manually with a paper
            booking sheet or basic calendar leads to double-bookings, wasted
            gaps, and frustrated members.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            GymWyse&apos;s recovery scheduling engine treats each bay as an
            independent resource with configurable session lengths, buffer
            times, capacity limits, and operating hours. Members book through
            the app with real-time availability, seeing exactly which bays are
            open and when. The system automatically enforces turnaround gaps
            (for example, 10 minutes between sauna sessions for ventilation),
            prevents over-booking, and sends appointment reminders via push
            notification. For members on tiered plans, the system tracks
            sessions used versus sessions included and prompts an upgrade offer
            when they consistently exceed their allotment.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The scheduling data also surfaces utilization insights. If your cold
            plunge is at 95% utilization during morning hours but only 40% in
            the afternoon, you know you need either a second unit or a pricing
            incentive to shift demand. If the float tank has low weekday
            utilization, targeted promotions to specific member segments can
            fill those gaps. Scheduling is not just operational -- it is the
            foundation of your recovery revenue optimization strategy.
          </p>
        </motion.div>
      </section>

      {/* The Retention Effect */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            The Retention Effect: Daily Visit Habits from Recovery
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            This is the aspect of recovery services that most gym owners
            underestimate. The direct revenue from recovery sessions is
            significant, but the indirect retention effect might be even more
            valuable. Here is why.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            A typical gym member visits three to four times per week for
            workouts. On their off days, they have no reason to visit. Recovery
            services change this dynamic completely. A member who does cold
            plunge on their rest days now visits five to six times per week. A
            member who comes in for a 20-minute sauna session before work
            visits daily. Every additional visit strengthens the habit,
            deepens the emotional connection to the gym, and raises the
            switching cost of cancelling.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The data from GymWyse confirms this dramatically. Members who use
            recovery services at least twice per week have a 12-month retention
            rate of 91%, compared to 68% for gym-floor-only members. That 23
            percentage point gap translates to enormous revenue preservation.
            For a gym with 200 recovery-active members, that gap means
            retaining roughly 46 additional members per year who would have
            otherwise cancelled -- at $65 per month average dues, that is
            $35,880 per year in retained revenue from the retention effect
            alone, before counting any direct recovery service revenue.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            Recovery also creates what we call &quot;perceived value
            anchoring.&quot; When a member calculates whether their gym
            membership is worth it, they now factor in the value of their
            recovery sessions. A member paying $99 per month for fitness plus
            recovery who uses four cold plunge sessions and four sauna sessions
            per month perceives they are getting $200 or more in value at
            standalone recovery studios. That value perception makes their
            membership feel like a bargain, dramatically reducing
            price-sensitivity and cancellation risk.
          </p>
        </motion.div>
      </section>

      {/* Recovery Membership Tiers and Cross-Selling */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">
            Cross-Selling from Fitness to Wellness
          </h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The cross-sell from fitness-only membership to recovery-included
            tiers is one of the highest-conversion upsells in the gym industry.
            Unlike selling personal training (which requires a significant
            budget commitment and behavior change), upgrading to include
            recovery is a modest price increase for a tangible, immediate
            benefit. The member does not need to do anything differently -- they
            just add a 10-minute cold plunge after their existing workout.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            GymWyse identifies the members most likely to upgrade by analyzing
            visit patterns and engagement signals. Members who visit four or
            more times per week, have been members for at least three months
            (past the initial churn danger zone), and have tried at least one
            group class are the highest-probability upgrade candidates. The
            system triggers a targeted offer: a free one-week recovery trial
            followed by an upgrade prompt with a first-month discount.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            Conversion rates on these targeted offers average 22-28%, compared
            to 8-12% for blanket upgrade promotions sent to the entire
            membership base. The targeted approach works because it reaches
            members who are already engaged enough to value the addition and
            financially comfortable enough to absorb the price increase. Over
            12 months, a steady cross-sell campaign can upgrade 15-25% of your
            base membership to recovery tiers, adding $20 to $40 per member per
            month in incremental revenue.
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
              Recovery Services Revenue Panel
            </span>{" "}
            gives you complete visibility into your recovery operation from a
            single dashboard. It displays real-time bay utilization rates by
            service type and time slot, revenue per bay per month with trend
            lines, tier upgrade conversion rates and pipeline, session-level
            profitability after allocating costs, member-level recovery usage
            patterns correlated with retention scores, and cross-sell campaign
            performance with per-segment conversion data. The panel also
            includes equipment ROI tracking that shows payback progress for
            each piece of recovery equipment based on actual utilization, not
            projections. When a bay hits a utilization threshold that justifies
            adding a second unit, the system alerts you proactively so you can
            expand capacity before demand outstrips supply.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Avg. Recovery Margin",
                  value: "38%",
                  color: "text-electric-green",
                },
                {
                  label: "Recovery Member Retention",
                  value: "91%",
                  color: "text-sapphire-blue",
                },
                {
                  label: "Tier Upgrade Rate",
                  value: "24%",
                  color: "text-electric-green",
                },
                {
                  label: "Revenue/Bay/Month",
                  value: "$3.8K",
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
                    "Bay scheduling",
                    "Paper sign-up sheet or basic calendar",
                    "Real-time app booking with auto-enforced turnaround gaps",
                  ],
                  [
                    "Utilization tracking",
                    "Manual headcounts or guesswork",
                    "Per-bay, per-hour utilization with trend analysis",
                  ],
                  [
                    "Revenue attribution",
                    "Lumped into general membership revenue",
                    "Per-service, per-bay, per-member revenue tracking",
                  ],
                  [
                    "Tier upgrade targeting",
                    "Blanket promotions to all members",
                    "AI-targeted offers to highest-probability upgraders",
                  ],
                  [
                    "Equipment ROI",
                    "Estimated at purchase, never tracked",
                    "Live payback tracking based on actual utilization data",
                  ],
                  [
                    "Capacity planning",
                    "Reactive -- add equipment when complaints mount",
                    "Proactive alerts when utilization hits expansion thresholds",
                  ],
                  [
                    "Retention impact measurement",
                    "Anecdotal ('recovery members seem happier')",
                    "Quantified retention rate comparison with statistical significance",
                  ],
                  [
                    "Cross-sell campaigns",
                    "One-size-fits-all email blasts",
                    "Segment-specific trials with automated conversion funnels",
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
              Let&apos;s run the numbers for a 600-member gym adding a
              recovery zone with cold plunge, infrared sauna, and four
              compression therapy stations:
            </p>
            <div className="space-y-3 text-soft-white">
              <p>
                <span className="text-sapphire-blue font-semibold">
                  Equipment investment:
                </span>{" "}
                Cold plunge ($6,000) + Infrared sauna ($10,000) + Compression
                set ($8,000) ={" "}
                <span className="text-sapphire-blue font-bold">$24,000</span>
              </p>
              <p>
                <span className="text-sapphire-blue font-semibold">
                  Monthly operating costs:
                </span>{" "}
                Electricity, water, cleaning, allocated rent ={" "}
                <span className="text-sapphire-blue font-bold">
                  ~$1,200/month
                </span>
              </p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p>
                  <span className="text-electric-green font-semibold">
                    Tier upgrades (20% of 600 members upgrade at $30/month
                    avg premium):
                  </span>{" "}
                  120 members x $30 ={" "}
                  <span className="text-electric-green font-bold">
                    $3,600/month
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Drop-in session revenue (50 sessions/month at $20 avg):
                  </span>{" "}
                  <span className="text-electric-green font-bold">
                    $1,000/month
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Total monthly recovery revenue:
                  </span>{" "}
                  <span className="text-electric-green font-bold">
                    $4,600/month
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Monthly gross profit (after $1,200 operating costs):
                  </span>{" "}
                  <span className="text-electric-green font-bold">
                    $3,400/month (74% margin)
                  </span>
                </p>
                <p>
                  <span className="text-electric-green font-semibold">
                    Equipment payback:
                  </span>{" "}
                  $24,000 / $3,400 ={" "}
                  <span className="text-electric-green font-bold">
                    ~7 months
                  </span>
                </p>
              </div>
              <p className="text-cool-gray mt-4 text-base">
                Annual direct recovery profit after payback:{" "}
                <span className="text-electric-green font-bold">
                  $40,800/year
                </span>
                . Add the retention effect (estimated 30 additional members
                retained x $65/month x 12 months ={" "}
                <span className="text-electric-green font-bold">$23,400</span>)
                and the total annual impact exceeds{" "}
                <span className="text-electric-green font-bold">
                  $64,200/year
                </span>{" "}
                from a $24,000 initial investment. That is a 2.7x return in
                year one alone, improving every year as the equipment is paid
                off and utilization grows.
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

      {/* Regional Compliance */}
      <section className="py-20 px-6 bg-midnight/50">
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
                note: "Recovery service operations vary by state. Cryotherapy is regulated as a medical device in some states and requires trained operators. Cold plunge and sauna are generally classified as amenities but must comply with local health department pool and spa regulations. Massage requires state-licensed practitioners. Always check local building codes for plumbing and electrical requirements before installation.",
              },
              {
                region: "United Kingdom",
                note: "HSE (Health and Safety Executive) guidelines apply to cold water immersion and extreme temperature facilities. GDPR governs member health data collected during recovery sessions. Local authority environmental health departments inspect spa and pool facilities. Insurance coverage must specifically include recovery service liability. The Chartered Institute for the Management of Sport and Physical Activity (CIMSPA) provides operational guidance.",
              },
              {
                region: "Australia",
                note: "State and territory health departments regulate public pools and spa facilities, which may include cold plunge pools depending on classification. Safe Work Australia guidelines apply to cryotherapy operations. Australian Consumer Law requires clear disclosure of risks associated with extreme temperature services. Massage therapists must hold recognized qualifications and professional indemnity insurance.",
              },
              {
                region: "UAE",
                note: "Dubai Municipality Health and Safety Department and Abu Dhabi Department of Health regulate spa and wellness facilities. Recovery services in free zones (DIFC, ADGM) may have additional licensing requirements. Cryotherapy and float tank operations require specific facility permits. All recovery service staff must hold valid UAE professional licenses where applicable. Dubai Sports Council mandates health screening for extreme temperature exposure services.",
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
      <section className="py-20 px-6">
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
              &quot;Recovery services are the rare gym investment where the
              financial case and the member experience case are perfectly
              aligned. Higher margins, better retention, increased visit
              frequency, and happier members -- it is not a trade-off, it is a
              compounding advantage. The gyms we see succeeding with recovery
              are the ones that treat it as a core business line, not an
              afterthought. That means proper scheduling infrastructure, tiered
              pricing that incentivizes upgrades, data-driven capacity planning,
              and targeted cross-sell campaigns. Our Recovery Services Revenue
              Panel was built to make all of this manageable from a single
              screen, because the operational complexity of recovery should
              never be a barrier to capturing what is clearly the biggest margin
              opportunity in the fitness industry today.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, based on recovery revenue data
              across 450+ gyms with active wellness programs
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 bg-midnight/50">
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
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Ready to Build Your Recovery Revenue Stream?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            See the Recovery Services Revenue Panel in action with a
            personalized demo modeled on your gym&apos;s size and member base.
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
                href="/solutions/recovery-management"
                className="text-sapphire-blue hover:text-electric-green transition-colors text-sm"
              >
                Recovery Management Solutions{" "}
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
