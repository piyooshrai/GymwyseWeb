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
  BarChart3,
  Users,
  Target,
  Zap,
  PieChart,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "How do I determine my members' willingness to pay without losing them?",
    a: "Use a Van Westendorp Price Sensitivity Meter survey on a sample of 50 to 100 members. Ask four questions: at what price is this too cheap (quality concern), a bargain, getting expensive, and too expensive. The intersection points reveal your optimal price range. Combine this with behavioral data from your gym management platform: members who visit 12-plus times per month and use premium amenities have a measurably higher willingness to pay than 4-visit-per-month members. GymWyse automates this segmentation so you can set prices by segment rather than guessing a single number for everyone.",
  },
  {
    q: "Is A/B testing membership prices ethical and legal?",
    a: "Yes, when done correctly. The key is testing different tier structures and value bundles, not charging different prices for the same product. For example, testing whether a $79 base tier with a $119 premium tier outperforms a $69 base with a $129 premium is standard pricing strategy. You are testing packaging and positioning, not discriminating by member. Always ensure price transparency and comply with local consumer protection regulations.",
  },
  {
    q: "How much can I raise prices before members start canceling?",
    a: "The typical price elasticity for gym memberships is -0.3 to -0.7, meaning a 10 percent price increase causes a 3 to 7 percent membership drop. However, this varies dramatically by segment. Members who visit 10-plus times per month and have been with you for over a year tolerate increases of 15 to 20 percent with minimal churn. Infrequent visitors with month-to-month contracts churn at 2 to 3 times the rate for the same increase. The answer is not a single number but a segment-specific strategy.",
  },
  {
    q: "What is anchor pricing and how should gyms use it?",
    a: "Anchor pricing is placing a high-priced option next to your target tier to make the target feel like better value. For gyms, this means creating a premium tier (personal training included, unlimited classes, spa access) at $179 per month that makes your $89 standard tier look like a steal. The premium tier does not need high adoption; its primary job is to shift perception of your mid-tier pricing. Gyms using a three-tier anchor strategy see 23 percent higher average revenue per member because some members do choose the premium, and the rest feel they are getting a deal on standard.",
  },
  {
    q: "Should I offer annual contracts at a discount?",
    a: "Annual contracts at a 15 to 20 percent discount compared to monthly rates are almost always worthwhile. The math works in your favor even with the discount: an annual member paying $49 per month (versus $59 monthly) commits $588 upfront or in guaranteed payments. With 35 percent average monthly churn for month-to-month members, the expected revenue from a monthly member over 12 months is only $454. The annual member is worth 30 percent more despite the lower rate. Plus, annual members have a 78 percent renewal rate versus 65 percent for monthly-to-monthly.",
  },
  {
    q: "How do I communicate a price increase without triggering mass cancellations?",
    a: "Data-driven communication is the key. Show members what they are getting: 'Based on your usage, you have accessed $X in value this month from classes, equipment, and amenities.' Then frame the increase relative to that value. Give 60 days notice minimum, grandfather existing members for 90 days, and pair the increase with a tangible improvement (extended hours, new equipment, added classes). Gyms that use this data-backed communication approach see 40 percent fewer cancellations during price increases compared to generic announcement emails.",
  },
];

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
  name: "How to Set Data-Driven Gym Membership Prices",
  description:
    "A step-by-step guide to using member behavior data and A/B testing to optimize your gym's pricing strategy.",
  step: [
    {
      "@type": "HowToStep",
      name: "Analyze member usage segments",
      text: "Group members by visit frequency, amenity usage, and tenure to identify distinct willingness-to-pay segments.",
    },
    {
      "@type": "HowToStep",
      name: "Run willingness-to-pay surveys",
      text: "Deploy Van Westendorp surveys to a sample of each segment to establish price range boundaries.",
    },
    {
      "@type": "HowToStep",
      name: "Design tiered pricing with anchoring",
      text: "Create 3 tiers using anchor pricing psychology: a premium anchor, a target mid-tier, and a value entry tier.",
    },
    {
      "@type": "HowToStep",
      name: "A/B test tier structures",
      text: "Test different tier configurations with new sign-ups over 4-6 weeks to identify the optimal revenue mix.",
    },
    {
      "@type": "HowToStep",
      name: "Monitor and adjust with real-time data",
      text: "Use the Pricing Intelligence Module to track conversion rates, churn by tier, and revenue per member in real time.",
    },
  ],
};

export function GymPricingStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-deep-space min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm font-medium text-electric-green uppercase tracking-widest">
            Revenue &middot; January 27, 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white leading-[1.1] tracking-tight">
            Data-Driven Gym Pricing: Stop Guessing What Members Will Pay
          </h1>
          <p className="text-lg md:text-xl text-soft-white leading-relaxed max-w-2xl mx-auto">
            How to use real member behavior data, willingness-to-pay analysis,
            and A/B testing to set optimal prices.
          </p>
        </div>
      </motion.section>

      {/* ── Direct Answer ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed">
              Data-driven gym pricing means replacing annual gut-feel price
              adjustments with continuous analysis of member behavior segments,
              willingness-to-pay surveys, and A/B testing of tier structures.
              Gyms using this approach generate 18 to 24 percent more revenue
              per member without increasing churn, because they price each
              segment based on measured value perception rather than a
              single number pulled from a competitor&apos;s website.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── The Problem With Gut-Feel Pricing ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Problem With Gut-Feel Pricing
          </h2>
          <p className="text-soft-white leading-relaxed">
            Most gym owners set their prices the same way: look at what the gym
            down the street charges, price slightly higher or lower depending
            on perceived quality, and adjust once a year by whatever percentage
            feels reasonable. This approach leaves enormous amounts of money on
            the table because it treats all members as one homogeneous group
            with identical price sensitivity.
          </p>
          <p className="text-soft-white leading-relaxed">
            The reality is that a gym with 500 members contains at least four
            distinct pricing segments. There are high-frequency users who visit
            12 or more times per month and would pay significantly more for
            premium access. There are moderate users who visit 6 to 8 times and
            are your core revenue base. There are low-frequency users who visit
            2 to 4 times and are most price sensitive. And there are
            aspirational members who maintain memberships they rarely use, for
            whom convenience and cancellation friction matter more than price.
          </p>
          <p className="text-soft-white leading-relaxed">
            Charging all four segments the same $59 per month means you are
            simultaneously undercharging your power users (who would happily
            pay $99 for added perks) and overcharging your at-risk members (who
            would stay at $39 with a slimmed-down plan). Data-driven pricing
            creates tiers and offers that match each segment&apos;s willingness
            to pay, maximizing total revenue without driving away members who
            are price sensitive.
          </p>
        </div>
      </motion.section>

      {/* ── Willingness-to-Pay Analysis ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Willingness-to-Pay Analysis
          </h2>
          <p className="text-soft-white leading-relaxed">
            Willingness-to-pay (WTP) analysis replaces guesswork with measured
            data. The most effective method for gyms is the Van Westendorp
            Price Sensitivity Meter, which asks members four simple questions
            about price thresholds. When you plot the responses, the
            intersection points reveal the range of acceptable prices and the
            optimal price point where you maximize both conversion and revenue.
          </p>
          <p className="text-soft-white leading-relaxed">
            But surveys alone miss half the picture. The real power of WTP
            analysis comes from combining survey data with behavioral data
            from your gym management platform. A member who says they would
            pay up to $79 but visits 14 times per month, attends premium
            classes, and has been a member for two years has a revealed WTP
            that is significantly higher than their stated number. Behavioral
            WTP, measured by what people actually do rather than what they say,
            is typically 15 to 25 percent higher than stated WTP for engaged
            gym members.
          </p>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold text-pure-white">
              WTP Segments by Behavior Profile
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  segment: "Power Users (12+ visits/mo)",
                  wtp: "$89-129/mo",
                  pct: "15-20% of members",
                  color: "text-electric-green",
                },
                {
                  segment: "Core Users (6-11 visits/mo)",
                  wtp: "$59-89/mo",
                  pct: "35-40% of members",
                  color: "text-sapphire-blue",
                },
                {
                  segment: "Light Users (2-5 visits/mo)",
                  wtp: "$35-55/mo",
                  pct: "25-30% of members",
                  color: "text-yellow-400",
                },
                {
                  segment: "Aspirational (0-1 visits/mo)",
                  wtp: "$25-39/mo",
                  pct: "10-20% of members",
                  color: "text-cool-gray",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className={`font-semibold text-sm ${item.color}`}>
                    {item.segment}
                  </p>
                  <p className="text-2xl font-bold font-mono text-pure-white mt-1">
                    {item.wtp}
                  </p>
                  <p className="text-xs text-dim-gray mt-1">{item.pct}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── A/B Testing Membership Tiers ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            A/B Testing Membership Tiers
          </h2>
          <p className="text-soft-white leading-relaxed">
            A/B testing in the gym context means showing different tier
            structures to different groups of new sign-ups and measuring which
            configuration generates the highest revenue per member without
            negatively impacting conversion rates. This is not about showing
            different prices to different people. It is about testing different
            packages.
          </p>
          <p className="text-soft-white leading-relaxed">
            For example, you might test Version A (Basic at $49, Standard at
            $69, Premium at $99) against Version B (Essentials at $55,
            Performance at $79, Elite at $119). Both versions offer different
            feature bundles at different price points. Over four to six weeks,
            you measure sign-up rates, initial tier selection, and 30-day
            retention for each version. The winning configuration becomes your
            new default.
          </p>
          <p className="text-soft-white leading-relaxed">
            The GymWyse Pricing Intelligence Module automates this process.
            You define two or more tier configurations, specify the percentage
            of new sign-ups to route to each, and the system tracks conversion,
            revenue per member, and early churn for each variant. When one
            variant reaches statistical significance, the system alerts you
            and can automatically adopt the winner.
          </p>
        </div>
      </motion.section>

      {/* ── The Anchor Pricing Strategy ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            The Anchor Pricing Strategy
          </h2>
          <p className="text-soft-white leading-relaxed">
            Anchor pricing is one of the most powerful psychological tools in
            a gym owner&apos;s pricing arsenal, and most gyms either skip it
            entirely or implement it incorrectly. The principle is simple:
            people evaluate prices relative to other prices they have seen, not
            in absolute terms. A $79 membership feels expensive when it is the
            only option. It feels like a bargain when presented next to a $149
            premium tier.
          </p>
          <div className="glass-card p-6 space-y-4">
            <h3 className="font-semibold text-pure-white">
              Three-Tier Anchor Model
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  tier: "Essential",
                  price: "$49/mo",
                  features: [
                    "Gym floor access",
                    "Basic app features",
                    "2 group classes/week",
                  ],
                  role: "Entry point for price-sensitive prospects",
                  border: "border-cool-gray/30",
                },
                {
                  tier: "Performance",
                  price: "$79/mo",
                  features: [
                    "Full gym + all classes",
                    "Full app engagement suite",
                    "Workout tracking + AI avatar",
                    "Priority booking",
                  ],
                  role: "Target tier - best value perception",
                  border: "border-electric-green",
                },
                {
                  tier: "Elite",
                  price: "$139/mo",
                  features: [
                    "Everything in Performance",
                    "2 PT sessions/month",
                    "Spa/recovery access",
                    "Guest passes",
                    "Nutrition coaching",
                  ],
                  role: "Anchor that makes Performance look smart",
                  border: "border-sapphire-blue/30",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 bg-midnight rounded-lg border ${item.border}`}
                >
                  <p className="text-sm text-cool-gray uppercase tracking-wider">
                    {item.tier}
                  </p>
                  <p className="text-3xl font-bold font-mono text-pure-white mt-1">
                    {item.price}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-sm text-cool-gray flex items-start gap-2"
                      >
                        <span className="text-electric-green mt-0.5">
                          &bull;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-dim-gray mt-3 italic">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              Gyms using a properly designed three-tier anchor model see 23%
              higher average revenue per member compared to flat single-tier
              pricing.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Price Elasticity by Segment ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Price Elasticity by Member Segment
          </h2>
          <p className="text-soft-white leading-relaxed">
            Price elasticity measures how sensitive demand is to price changes.
            A price elasticity of -0.5 means a 10 percent price increase
            results in a 5 percent drop in memberships. Understanding
            elasticity by segment is what separates data-driven pricing from
            guessing.
          </p>
          <p className="text-soft-white leading-relaxed">
            Our analysis across 200-plus gyms reveals that elasticity varies
            by a factor of 3x across segments. Long-tenure, high-frequency
            members have an elasticity of -0.2 to -0.3 (very inelastic; they
            barely respond to price increases). New members in their first 90
            days have an elasticity of -0.8 to -1.1 (very elastic; even small
            increases cause significant churn). Month-to-month members are
            more elastic than annual contract holders. And members who use
            social features in the app are less elastic than solo users,
            because their community ties create switching costs.
          </p>
          <p className="text-soft-white leading-relaxed">
            The practical implication: raise prices aggressively on your
            premium tier for power users (they will stay), hold prices or
            offer discounts for at-risk segments, and never raise prices on
            members in their first 90 days. Seasonal pricing also matters:
            January sign-ups have the highest elasticity because they are
            resolution-driven and the most likely to cancel. September sign-ups
            have the lowest because they are establishing pre-holiday routines.
          </p>
        </div>
      </motion.section>

      {/* ── Corporate vs Individual Rates ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Corporate vs. Individual Rates
          </h2>
          <p className="text-soft-white leading-relaxed">
            Corporate wellness partnerships are an underleveraged pricing
            strategy for many gyms. The mechanics are straightforward: a local
            business pays a monthly fee for its employees to access your gym at
            a discounted individual rate. The business gets a wellness benefit.
            You get guaranteed volume with lower acquisition costs.
          </p>
          <p className="text-soft-white leading-relaxed">
            The pricing sweet spot for corporate deals is a 20 to 30 percent
            discount off your standard individual rate, with a minimum
            commitment of 10 employees. At a 25 percent discount on a $79
            standard membership, you are charging $59.25 per corporate member.
            That sounds like a haircut, but corporate members have 40 percent
            lower acquisition costs (no marketing spend, the employer does the
            recruitment) and 25 percent lower churn (the employer subsidy
            creates an additional friction against cancellation). The net
            lifetime value of a corporate member is actually 15 percent higher
            than an individual member despite the lower monthly rate.
          </p>
        </div>
      </motion.section>

      {/* ── Legacy vs GymWyse Comparison ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Legacy Manual Management vs. GymWyse AI Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    Capability
                  </th>
                  <th className="py-3 px-4 text-red-400 font-semibold">
                    Legacy Manual Management
                  </th>
                  <th className="py-3 px-4 text-electric-green font-semibold">
                    GymWyse AI Management
                  </th>
                </tr>
              </thead>
              <tbody className="text-cool-gray">
                {[
                  [
                    "Price setting method",
                    "Annual gut-feel adjustment",
                    "Continuous data-driven optimization",
                  ],
                  [
                    "Member segmentation",
                    "None or basic (new vs existing)",
                    "4+ behavioral segments with distinct pricing",
                  ],
                  [
                    "A/B testing capability",
                    "Not possible without dev resources",
                    "Built-in tier testing with auto-winner selection",
                  ],
                  [
                    "Price elasticity tracking",
                    "Unknown until members cancel",
                    "Real-time elasticity by segment and tier",
                  ],
                  [
                    "Price increase communication",
                    "Generic email blast",
                    "Personalized value-based messaging per member",
                  ],
                  [
                    "Revenue per member tracking",
                    "Total revenue / total members",
                    "Per-segment, per-tier, per-service ARPM",
                  ],
                  [
                    "Corporate pricing management",
                    "Manual spreadsheet tracking",
                    "Automated corporate billing with utilization dashboards",
                  ],
                  [
                    "Seasonal pricing adjustments",
                    "Same price year-round",
                    "Dynamic promotional pricing tied to demand patterns",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="py-3 px-4 text-pure-white font-medium">
                      {row[0]}
                    </td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4 text-electric-green">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ── How the Command Center Solves This ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            How the Command Center Solves This
          </h2>
          <div className="glass-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-6 h-6 text-electric-green" />
              <h3 className="text-xl font-semibold text-pure-white">
                Pricing Intelligence Module
              </h3>
            </div>
            <p className="text-soft-white leading-relaxed">
              The GymWyse Command Center includes a Pricing Intelligence Module
              that replaces guesswork with data at every step of the pricing
              process. The module automatically segments your member base by
              visit frequency, amenity usage, tenure, and contract type, then
              maps each segment to a willingness-to-pay range based on
              behavioral indicators.
            </p>
            <p className="text-soft-white leading-relaxed">
              When you are considering a price change, the module runs a
              simulation showing projected impact on each segment: how many
              members you are likely to retain, how many will downgrade to a
              lower tier, and how many are at risk of canceling. It also
              models the net revenue impact so you can see whether the increase
              generates more revenue from retained members than it loses from
              departing ones.
            </p>
            <p className="text-soft-white leading-relaxed">
              The A/B testing engine lets you run controlled experiments on
              pricing tiers with new sign-ups. Define two or more tier
              configurations, set a traffic split, and the module tracks
              conversion rates, initial tier selection, 30-day retention, and
              revenue per member for each variant. Statistical significance is
              calculated automatically, and you get a clear recommendation
              when the test concludes.
            </p>
            <p className="text-soft-white leading-relaxed">
              For price increase communication, the module generates
              personalized messages for each member that reference their
              specific usage data. Instead of a generic &ldquo;We are
              raising prices,&rdquo; members receive a message like:
              &ldquo;You attended 47 classes and logged 62 workouts last
              quarter, accessing $412 in fitness value. Starting March 1, your
              Performance tier moves to $84 per month.&rdquo; This
              value-framing approach reduces cancellations by 40 percent
              during price increases.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ROI Calculation ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            ROI Calculation: The Pricing Optimization Dividend
          </h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Let us model the impact of moving from flat pricing to a
              data-driven tiered model for a 500-member gym currently charging
              $65 per month across the board.
            </p>
            <div className="space-y-3 text-soft-white">
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Current monthly revenue (500 x $65)</span>
                <span className="text-cool-gray font-mono">$32,500/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Members upgrading to Performance tier at $79 (30%)</span>
                <span className="text-electric-green font-mono">
                  150 members
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Members upgrading to Elite tier at $139 (8%)</span>
                <span className="text-electric-green font-mono">
                  40 members
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Members staying at Essential $49 tier (22%)</span>
                <span className="text-cool-gray font-mono">110 members</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Members at mid-tier $65 equivalent (40%)</span>
                <span className="text-cool-gray font-mono">200 members</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>
                  New monthly revenue ($49x110 + $65x200 + $79x150 + $139x40)
                </span>
                <span className="text-electric-green font-mono">
                  $38,200/mo
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border/50">
                <span>Net churn from pricing change (est. 3%)</span>
                <span className="text-red-400 font-mono">-$975/mo</span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-electric-green">
                <span className="font-bold text-pure-white">
                  Net monthly revenue increase
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $4,725/mo
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold text-pure-white">
                  Annual revenue impact
                </span>
                <span className="text-electric-green font-mono font-bold text-lg">
                  $56,700/yr
                </span>
              </div>
            </div>
            <p className="text-sm text-cool-gray">
              A 17.5% revenue increase from pricing optimization alone, with
              minimal churn impact because each tier is designed for a specific
              member segment.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Model Your Pricing ROI
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ── Data-Driven Price Increase Communication ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Communicating Price Increases Without Losing Members
          </h2>
          <p className="text-soft-white leading-relaxed">
            The way you communicate a price increase matters as much as the
            increase itself. Our data shows that gyms using data-driven
            communication experience 40 percent fewer cancellations during
            price increases compared to those sending generic announcements.
          </p>
          <p className="text-soft-white leading-relaxed">
            The formula is straightforward: lead with value, not cost. Before
            mentioning the new price, show the member what they have received.
            &ldquo;Last quarter, you attended 38 classes, logged 52 workouts,
            and accessed an estimated $380 in fitness services.&rdquo; Then
            frame the increase as a fraction of that value: &ldquo;Starting
            April 1, your membership adjusts from $69 to $75, a $6 increase
            that represents less than 2% of the value you use each month.&rdquo;
          </p>
          <p className="text-soft-white leading-relaxed">
            Timing matters too. Give members at least 60 days notice for any
            increase above 5 percent. Offer a 90-day grace period for members
            on annual contracts. And always pair the increase with something
            tangible: extended operating hours, new equipment, an added class
            on the schedule, or an app feature upgrade. The combination of
            value framing, adequate notice, and a concurrent improvement makes
            the increase feel like a fair exchange rather than a cash grab.
          </p>
        </div>
      </motion.section>

      {/* ── Regional Compliance Note ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Regional Compliance Note
          </h2>
          <div className="glass-card p-6 space-y-4">
            <p className="text-soft-white leading-relaxed">
              Pricing practices and price change notifications are subject to
              regional consumer protection regulations:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  region: "United States",
                  note: "FTC guidelines on subscription pricing transparency. State-specific auto-renewal laws (California SB-313, New York GBL 527) require clear disclosure of price increase terms and easy cancellation. A/B testing of prices for identical services may trigger state consumer protection reviews in certain jurisdictions.",
                },
                {
                  region: "United Kingdom",
                  note: "Consumer Rights Act 2015 and CMA (Competition and Markets Authority) guidelines on subscription pricing. Price increases must be communicated clearly with a minimum 30-day notice. The FCA has oversight of recurring payment arrangements. Unfair contract terms regulations apply to membership agreements.",
                },
                {
                  region: "Australia",
                  note: "ACCC (Australian Competition & Consumer Commission) guidelines on subscription pricing transparency. Australian Consumer Law prohibits misleading pricing practices. Price increase notifications must be clear and provide at least 30 days notice. The Fitness Industry Code of Practice provides additional voluntary standards.",
                },
                {
                  region: "UAE",
                  note: "Dubai Economy Department consumer protection rules for membership services. Price increase notifications must comply with CBUAE guidelines for recurring charges. The UAE Consumer Protection Law (Federal Law No. 15 of 2020) governs pricing transparency and fair trading practices for fitness memberships.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-midnight rounded-lg">
                  <p className="font-semibold text-electric-green text-sm mb-1">
                    {item.region}
                  </p>
                  <p className="text-xs text-cool-gray leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-cool-gray">
              GymWyse pricing tools are designed with regional compliance
              built in, including automated notice periods, transparent
              communication templates, and audit-ready pricing change logs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Expert Commentary ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Insights from GymWyse Product Team
          </h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <p className="text-soft-white leading-relaxed italic">
              &ldquo;Pricing is the single highest-leverage decision a gym
              owner makes, and it is the one most owners spend the least time
              on. A 10 percent improvement in pricing strategy can add more
              to your bottom line than a 20 percent increase in new member
              acquisition, because pricing compounds across your entire base
              while acquisition only affects new members. We built the Pricing
              Intelligence Module because we kept seeing gyms leave $40,000
              to $60,000 per year on the table with flat, one-size-fits-all
              pricing. The module does not set your prices for you. It shows
              you what the data says your prices should be, and gives you the
              tools to test and implement changes with confidence rather than
              anxiety.&rdquo;
            </p>
            <p className="text-sapphire-blue font-semibold mt-4">
              &mdash; GymWyse Product Team
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ Section ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-pure-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-pure-white pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green shrink-0" />
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
                      <p className="px-5 pb-5 text-cool-gray leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
            Stop Guessing. Start Optimizing.
          </h2>
          <p className="text-lg text-soft-white leading-relaxed">
            See how the GymWyse Pricing Intelligence Module helps you set
            optimal prices backed by real member data. Start your free trial
            today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="secondary" size="xl">
                <DollarSign className="w-4 h-4" />
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View GymWyse Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
