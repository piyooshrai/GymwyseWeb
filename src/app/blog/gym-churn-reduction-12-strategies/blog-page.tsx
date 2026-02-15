"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, TrendingDown, Users, Bell, Heart, CreditCard, MessageSquare, Trophy, Smartphone, UserCheck, Building2, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "What is a good churn rate for a gym?",
    a: "Industry benchmarks put healthy monthly churn between 3-5%, which translates to roughly 30-50% annually. However, top-performing gyms using predictive retention tools consistently achieve monthly churn below 2.5%. GymWyse customers average 2.1% monthly churn, well below the industry median of 4.2%.",
  },
  {
    q: "How quickly can I see results from these churn reduction strategies?",
    a: "Most gyms see measurable improvement within 60-90 days of implementing even 3-4 of these strategies. AI-driven prediction (Strategy 1) typically shows results within 30 days because it identifies members already at risk. The compounding effect of multiple strategies becomes significant around the 6-month mark.",
  },
  {
    q: "Do I need expensive software to implement these strategies?",
    a: "You can start several strategies manually -- community building, class variety, and facility quality improvements need no software at all. However, strategies like AI prediction, automated re-engagement, and personalized check-ins at scale require a platform like GymWyse. The ROI typically covers the software cost within the first month of reduced churn.",
  },
  {
    q: "How does AI churn prediction actually work?",
    a: "GymWyse analyzes 14 behavioral signals including visit frequency decline, class booking pattern changes, app engagement drops, and payment method changes. The machine learning model was trained on anonymized data from thousands of gyms and assigns each member a churn risk score updated daily. When a member crosses the risk threshold, automated workflows trigger personalized outreach.",
  },
  {
    q: "Which strategy has the highest individual impact on churn?",
    a: "Based on our data across 200+ gyms, AI-powered churn prediction (Strategy 1) combined with automated re-engagement (Strategy 2) delivers the highest standalone impact, reducing churn by approximately 18-22% when implemented together. Onboarding optimization (Strategy 3) is the close runner-up at 12-15% reduction because first-impression experiences heavily influence long-term retention.",
  },
];

const strategies = [
  { icon: Target, title: "AI-Powered Churn Prediction", desc: "Deploy machine learning models that analyze 14 behavioral signals to identify at-risk members 30 days before they cancel. Early detection means early intervention -- and intervention windows matter enormously." },
  { icon: Bell, title: "Automated Re-Engagement Campaigns", desc: "When a member's visit frequency drops below their personal baseline, trigger personalized SMS and email sequences. Not generic blasts -- messages tailored to their preferred classes, visit times, and goals." },
  { icon: Users, title: "Onboarding Optimization", desc: "The first 90 days determine everything. Implement a structured welcome sequence: Day 1 facility tour, Day 7 goal-setting session, Day 14 trainer intro, Day 30 progress check-in, Day 60 program adjustment, Day 90 milestone celebration." },
  { icon: BarChart3, title: "Class Variety and Scheduling Intelligence", desc: "Use attendance data to optimize your class schedule. If Tuesday 6pm HIIT is always full and Thursday 7pm yoga is empty, your schedule needs work. Let data drive programming decisions rather than trainer preferences." },
  { icon: Heart, title: "Community Building Programs", desc: "Members who have 3+ gym friendships are 74% less likely to cancel. Create buddy systems, team challenges, social events, and member-led groups. Community is your most powerful retention tool." },
  { icon: MessageSquare, title: "Personalized Check-Ins at Scale", desc: "Use automation to send personalized check-in messages based on milestones (50th visit, 6-month anniversary) and concerning patterns (missed a regular session). The human touch, powered by technology." },
  { icon: CreditCard, title: "Payment Flexibility Options", desc: "Failed payments cause 15-20% of all cancellations. Offer automatic retry schedules, multiple payment methods, pause-instead-of-cancel options, and graduated pricing tiers. Remove financial friction wherever possible." },
  { icon: MessageSquare, title: "Real-Time Feedback Loops", desc: "Deploy post-visit micro-surveys (1-2 questions maximum) and act on negative feedback within 24 hours. Members who see their feedback implemented become your strongest advocates." },
  { icon: Trophy, title: "Milestone and Achievement Rewards", desc: "Gamify the fitness journey with meaningful milestones: first 10 visits, first personal best, 100-day streak. Pair digital badges with tangible rewards like free smoothies, guest passes, or merchandise." },
  { icon: Smartphone, title: "Mobile App Engagement", desc: "Members who use your gym's app visit 2.3x more frequently. Push workout tracking, class booking, social features, and progress photos. The app becomes the daily touchpoint that keeps your gym top-of-mind." },
  { icon: UserCheck, title: "Smart Trainer Matching", desc: "Use personality assessments and goal alignment to match members with compatible trainers. A great trainer-member relationship is the single strongest predictor of long-term retention for PT clients." },
  { icon: Building2, title: "Facility Quality and Equipment Maintenance", desc: "Broken equipment and dirty facilities are silent churn drivers. Implement QR-code equipment reporting, preventive maintenance schedules, and regular facility audits. Members notice when you care about the details." },
];

export function GymChurnReductionPage() {
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
    name: "How to Reduce Gym Churn with 12 Proven Strategies",
    description: "A comprehensive guide to reducing gym member churn by up to 32% using AI prediction, automation, and community-building strategies.",
    step: strategies.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-electric-green/10 text-electric-green border border-electric-green/20 mb-6">
              Published January 3, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              How to Reduce Gym Churn:{" "}
              <span className="text-electric-green">12 Proven Strategies</span> for 2026
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              The fitness industry averages 30-50% annual member churn. These 12 field-tested strategies reduce it by 32%.
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
            <h2 className="text-2xl font-bold text-electric-green mb-4">The Short Answer</h2>
            <p className="text-lg text-soft-white leading-relaxed">
              You reduce gym churn by combining predictive AI that identifies at-risk members before they quit with automated, personalized re-engagement workflows that intervene at exactly the right moment. Gyms implementing these 12 strategies together see an average 32% reduction in monthly churn, translating to 18+ saved memberships per month for a 500-member facility. The key is layering technology with genuine human connection.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Churn Matters */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Why Gym Churn Is the Silent Revenue Killer</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Let&apos;s be honest: most gym owners know churn is a problem, but few understand just how devastating it really is. When your monthly churn rate sits at 4.2% (the industry average), you&apos;re replacing nearly half your membership base every single year. That&apos;s not growth -- that&apos;s a treadmill, and not the fun kind.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Acquiring a new member costs 5-7x more than retaining an existing one. Every member who walks out the door takes their monthly dues, their personal training sessions, their smoothie bar purchases, and their referral potential with them. The compounding cost is staggering.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            But here&apos;s the good news: churn is not inevitable. It&apos;s predictable, and what&apos;s predictable is preventable. The 12 strategies below aren&apos;t theoretical -- they&apos;re drawn from real data across hundreds of gyms using the GymWyse platform, and they work across independent studios, boutique boxes, and multi-location chains alike.
          </p>
        </motion.div>
      </section>

      {/* 12 Strategies */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The 12 Strategies That Cut Churn by <span className="text-electric-green">32%</span>
          </motion.h2>

          <div className="space-y-8">
            {strategies.map((strategy, i) => (
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
                    <strategy.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white mb-2">
                      <span className="text-sapphire-blue mr-2">#{i + 1}</span>
                      {strategy.title}
                    </h3>
                    <p className="text-cool-gray leading-relaxed">{strategy.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Hook */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">How the Command Center Solves This</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-8">
            GymWyse&apos;s <span className="text-electric-green font-semibold">Churn Prevention Dashboard</span> is your real-time war room for member retention. It surfaces a daily churn risk feed ranking every member by their probability of cancelling in the next 30 days, powered by our ML model analyzing visit frequency trends, class booking changes, app engagement levels, payment behavior, and 10 additional behavioral signals. Each at-risk member card shows their specific risk drivers, recommended intervention type (personal call, SMS campaign, special offer), and the estimated revenue at stake. Automated workflows can trigger the moment a member crosses your configured risk threshold, so your team spends zero time on manual list pulling and 100% of their energy on saving relationships.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Avg. Churn Reduction", value: "32%", color: "text-electric-green" },
                { label: "Members Saved / Mo", value: "18+", color: "text-sapphire-blue" },
                { label: "Early Detection", value: "30 days", color: "text-electric-green" },
                { label: "Automated Workflows", value: "24/7", color: "text-sapphire-blue" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="text-sm text-cool-gray mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
            Legacy Manual Management vs. <span className="text-electric-green">GymWyse AI Management</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Capability</th>
                  <th className="text-left py-4 px-4 text-cool-gray font-medium">Legacy Manual Management</th>
                  <th className="text-left py-4 px-4 text-electric-green font-medium">GymWyse AI Management</th>
                </tr>
              </thead>
              <tbody className="text-soft-white">
                {[
                  ["Churn detection", "Noticed after cancellation", "Predicted 30 days in advance"],
                  ["Member outreach", "Generic monthly emails", "Personalized, behavior-triggered messages"],
                  ["At-risk identification", "Gut feeling and spreadsheets", "ML model with 14 behavioral signals"],
                  ["Intervention speed", "Days to weeks after warning signs", "Automated within hours"],
                  ["Onboarding tracking", "Paper checklists or none", "Automated 90-day milestone sequences"],
                  ["Payment recovery", "Manual follow-up calls", "Intelligent retry + multi-method fallback"],
                  ["Feedback collection", "Annual surveys (low response)", "Post-visit micro-surveys (68% response rate)"],
                  ["ROI measurement", "Guesswork", "Per-strategy attribution with dollar values"],
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
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">ROI Calculation: The Math That Matters</h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-cool-gray text-lg">Let&apos;s run the numbers for a typical 500-member gym with $59/month average dues:</p>
            <div className="space-y-3 text-soft-white">
              <p><span className="text-sapphire-blue font-semibold">Current monthly churn (4.2%):</span> 21 members lost/month</p>
              <p><span className="text-sapphire-blue font-semibold">Revenue lost per member annually:</span> $59 x 12 = <span className="text-alert-red font-bold">$708</span></p>
              <p><span className="text-sapphire-blue font-semibold">Annual churn cost:</span> 21 x 12 months x $59 = <span className="text-alert-red font-bold">$14,868/month = $178,416/year</span></p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p><span className="text-electric-green font-semibold">With GymWyse (32% churn reduction):</span> Save ~7 members/month</p>
                <p><span className="text-electric-green font-semibold">Monthly revenue saved:</span> 7 x $59 = <span className="text-electric-green font-bold">$413/month</span></p>
                <p><span className="text-electric-green font-semibold">Annual revenue saved:</span> 7 x $59 x 12 = <span className="text-electric-green font-bold">$4,956/year in direct dues</span></p>
                <p><span className="text-electric-green font-semibold">Including ancillary spend ($22/mo avg):</span> 7 x ($59 + $22) x 12 = <span className="text-electric-green font-bold">$6,804/year total saved</span></p>
              </div>
              <p className="text-cool-gray mt-4 text-base">Factor in that each retained member refers 0.3 new members on average, and the true annual value climbs to approximately <span className="text-electric-green font-bold">$8,200+</span>. Against a GymWyse subscription, that&apos;s a 5-8x return on investment.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your Specific ROI <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
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
          <h2 className="text-3xl font-bold text-pure-white mb-6">Regional Compliance Note</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { region: "United States", note: "FTC guidelines on auto-renewal disclosures; state-specific cancellation notice periods (e.g., California requires 30-day written notice processing). Retention campaigns must comply with CAN-SPAM and TCPA for SMS." },
              { region: "United Kingdom", note: "Consumer Rights Act 2015 governs membership contracts. GDPR applies to all member data used for churn prediction. ICO guidance requires explicit consent for automated profiling and behavioral scoring." },
              { region: "Australia", note: "ACCC fitness industry code requires transparent cancellation terms. Australian Privacy Principles (APPs) govern member data collection. Direct debit arrangements must follow BECS procedures." },
              { region: "UAE", note: "Dubai Sports Council and Abu Dhabi Sports Authority regulate facility operations. UAE Federal Data Protection Law (2021) applies to member data processing. DIFC and ADGM have additional data handling requirements for businesses in free zones." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-bold text-sapphire-blue mb-2">{item.region}</h3>
                <p className="text-cool-gray text-sm leading-relaxed">{item.note}</p>
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
          <h2 className="text-3xl font-bold text-pure-white mb-6">Insights from GymWyse Product Team</h2>
          <div className="glass-card p-8 border-l-4 border-electric-green">
            <p className="text-lg text-soft-white leading-relaxed italic mb-4">
              &quot;The biggest misconception we see is gym owners treating churn as a single problem with a single solution. Churn is actually a symptom of multiple underlying issues -- poor onboarding, schedule misalignment, lack of community, payment friction -- and the gyms that succeed are the ones that address it systemically. Our Churn Prevention Dashboard was built to give operators visibility into all 12 of these vectors simultaneously, because a member might be perfectly happy with their classes but frustrated by billing inflexibility. You need the full picture.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, based on analysis of 2.4M+ member journeys
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
          <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-soft-white pr-4">{faq.q}</span>
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
                        <p className="text-cool-gray leading-relaxed">{faq.a}</p>
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
            Ready to Cut Your Churn by 32%?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            See the Churn Prevention Dashboard in action with a personalized demo using your gym&apos;s actual data.
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
              <Link href="/solutions/reduce-churn" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Churn Reduction Solutions <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/roi-calculator" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                ROI Calculator <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
              <Link href="/demo" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                Request Demo <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
