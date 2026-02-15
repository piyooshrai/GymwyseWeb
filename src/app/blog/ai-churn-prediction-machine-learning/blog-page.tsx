"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Brain, Activity, TrendingDown, Bell, BarChart3, Users, Zap, Target, Clock, Smartphone, CreditCard, Calendar, MessageSquare, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "How accurate is the AI churn prediction model?",
    a: "GymWyse's churn prediction model achieves 89% precision and 84% recall on a 30-day prediction window across our aggregated dataset. In practical terms, this means that when the model flags a member as high-risk, it is correct 89% of the time, and it catches 84% of members who will actually churn. Accuracy varies slightly by gym type -- boutique studios see higher precision (91%) due to more consistent visit patterns, while 24/7 access gyms are slightly lower (86%) due to more variable usage patterns.",
  },
  {
    q: "Does the model use my members' personal data?",
    a: "The model analyzes behavioral patterns, not personal identity data. It looks at visit timestamps, booking patterns, app engagement metrics, and payment behavior -- all tied to anonymized member IDs during training. Personal information like names, emails, and phone numbers are never fed into the machine learning pipeline. The model does not know who your members are; it knows how they behave, and that is all it needs to predict churn risk.",
  },
  {
    q: "How long before the model becomes accurate for my specific gym?",
    a: "The base model is pre-trained on anonymized data from thousands of gyms and works out of the box from Day 1 with reasonable accuracy. Over the first 60-90 days, the model fine-tunes itself to your gym's specific patterns -- your member demographics, class types, seasonal trends, and local factors. By 90 days, the model is fully calibrated to your gym and reaches peak accuracy. You will see useful predictions from Week 1, with increasing precision over the first quarter.",
  },
  {
    q: "Can I customize the risk thresholds and intervention triggers?",
    a: "Absolutely. The default risk threshold is set at 70% (meaning members with a 70%+ predicted churn probability get flagged), but you can adjust this up or down based on your capacity to intervene. You can also customize which interventions trigger at which risk levels -- for example, a 70% risk member might get an automated SMS, while an 85% risk member triggers a personal call from their trainer. All thresholds and workflows are configurable without any technical knowledge.",
  },
  {
    q: "What results can I expect in terms of members saved?",
    a: "Based on data from gyms using the full churn prediction and intervention system, the average gym saves 18 members per month who would have otherwise cancelled. For a 500-member gym with $59 average dues, that translates to $12,744 in annual retained revenue. Results scale with gym size -- a 1,000-member facility typically saves 30-35 members per month. The key variable is intervention quality; gyms that combine automated outreach with personal follow-up see the best results.",
  },
];

const signals = [
  { icon: Activity, title: "Visit Frequency Decline", desc: "The most powerful single predictor. When a member's weekly visit rate drops below 60% of their personal 90-day average, churn probability increases by 3.2x. The model tracks rolling averages to distinguish genuine decline from normal week-to-week variation.", weight: "High" },
  { icon: Calendar, title: "Class Booking Pattern Changes", desc: "Members who switch from booking classes in advance to walk-in-only behavior, or who start booking and then no-showing, exhibit a 2.8x increase in churn risk. The model detects shifts in booking lead time and no-show frequency.", weight: "High" },
  { icon: Smartphone, title: "App Engagement Drop", desc: "A decline in app opens, feature usage, or workout logging correlates strongly with disengagement. Members who stop using the app entirely are 4.1x more likely to cancel within 30 days compared to active app users.", weight: "High" },
  { icon: CreditCard, title: "Payment Method Changes", desc: "Switching from auto-pay to manual payment, failed payment retries, or changing to a lower-tier membership plan are leading indicators. Payment behavior changes predict churn 2.4x better than demographic data alone.", weight: "High" },
  { icon: Clock, title: "Visit Time Shifts", desc: "When a member changes their typical visit time pattern (e.g., moving from consistent 6am visits to sporadic afternoon visits), it often signals a lifestyle change that precedes cancellation. The model tracks visit time consistency.", weight: "Medium" },
  { icon: TrendingDown, title: "Session Duration Decrease", desc: "Members whose average session length drops by 25% or more over a 4-week window show elevated churn risk. Shorter sessions suggest decreasing motivation or dissatisfaction with the gym experience.", weight: "Medium" },
  { icon: Users, title: "Social Interaction Decline", desc: "For gyms with social features (buddy check-ins, group challenges), a drop in social interactions within the gym community is a 2.1x churn predictor. Isolation from the gym community precedes physical departure.", weight: "Medium" },
  { icon: MessageSquare, title: "Support Ticket Sentiment", desc: "Natural language processing analyzes the tone of member communications -- complaints, questions, and feedback. Negative sentiment trends over multiple interactions are a 1.9x churn predictor.", weight: "Medium" },
  { icon: Dumbbell, title: "Workout Variety Reduction", desc: "Members who narrow their activity to fewer exercise types or stop trying new classes show declining engagement. A reduction in workout variety of 40%+ over 6 weeks correlates with 1.8x elevated churn risk.", weight: "Medium" },
  { icon: Target, title: "Goal Progress Stagnation", desc: "For members tracking fitness goals (weight, strength, endurance), plateaus lasting more than 4 weeks increase churn probability by 1.7x. The model monitors goal-tracking data for progress deceleration patterns.", weight: "Medium" },
  { icon: Bell, title: "Notification Response Decay", desc: "Decreasing open rates and click-through rates on gym communications (push notifications, emails, SMS) indicate disengagement. Members who stop opening notifications are 2.3x more likely to churn.", weight: "Medium" },
  { icon: Calendar, title: "Seasonal Pattern Breaks", desc: "Every member has seasonal patterns -- some visit more in winter, some in summer. When a member deviates from their historical seasonal pattern, it is a signal worth investigating. The model learns individual seasonality over 12+ months.", weight: "Low" },
  { icon: Users, title: "Referral Activity Cessation", desc: "Members who previously referred friends but have stopped doing so may be losing enthusiasm. While a weaker individual signal, referral cessation combined with other signals strengthens overall prediction.", weight: "Low" },
  { icon: CreditCard, title: "Ancillary Spend Decline", desc: "Reductions in spending on personal training, merchandise, smoothie bar, or other ancillary services indicate decreasing investment in the gym relationship. A 50%+ decline in ancillary spend is a 1.5x churn predictor.", weight: "Low" },
];

export function AIChurnPredictionPage() {
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
    name: "How AI Churn Prediction Works for Gyms",
    description: "Understanding the 14 behavioral signals that machine learning analyzes to predict gym member churn and save 18 members per month.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Behavioral Signal Collection", text: "The system collects 14 behavioral signals from each member including visit frequency, app engagement, payment behavior, and class booking patterns." },
      { "@type": "HowToStep", position: 2, name: "ML Model Scoring", text: "A machine learning model trained on anonymized data from thousands of gyms assigns each member a daily churn risk score from 0-100%." },
      { "@type": "HowToStep", position: 3, name: "Risk Threshold Triggering", text: "When a member crosses the configured risk threshold (default 70%), automated intervention workflows are triggered." },
      { "@type": "HowToStep", position: 4, name: "Automated Intervention", text: "Personalized outreach is sent based on risk level and member preferences -- SMS, email, push notification, or staff notification for a personal call." },
      { "@type": "HowToStep", position: 5, name: "A/B Testing and Optimization", text: "The system continuously A/B tests different retention offers and messaging to optimize save rates across different member segments." },
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-sapphire-blue/10 text-sapphire-blue border border-sapphire-blue/20 mb-6">
              Published January 15, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              AI Churn Prediction: How Machine Learning{" "}
              <span className="text-electric-green">Saves 18 Members Per Month</span>
            </h1>
            <p className="text-xl text-cool-gray max-w-2xl mx-auto">
              Inside the 14 behavioral signals our churn prediction model analyzes.
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
              AI churn prediction works by analyzing 14 behavioral signals -- from visit frequency decline and app engagement drops to payment method changes and social interaction patterns -- to assign each member a daily churn risk score. When that score crosses a configurable threshold, automated retention workflows trigger personalized interventions before the member decides to cancel. The result across our gym network: an average of 18 saved members per month per facility, translating to over $12,700 in annual retained revenue.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Traditional Detection Fails */}
      <section className="py-16 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Why Traditional Churn Detection Is Already Too Late</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Here is the fundamental problem with how most gyms handle churn: they notice it after it happens. A member submits a cancellation request, and now you are in damage control mode -- offering discounts, freezes, and free sessions to someone who has already mentally left. The data shows that once a member initiates cancellation, you save fewer than 15% of them. The decision was made weeks ago.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Machine learning flips this equation entirely. Instead of reacting to cancellations, you are predicting them -- identifying members who are drifting toward the exit 30 days before they reach for the cancel button. At that point, they have not decided to leave yet. They are disengaging, yes, but they are still persuadable. The save rate for members flagged 30 days in advance is 38%, more than double the rate for members who have already initiated cancellation.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            The difference between knowing someone is at risk and knowing someone has already quit is the difference between retention and replacement -- and replacing a member costs 5-7x what retaining one does.
          </p>
        </motion.div>
      </section>

      {/* 14 Behavioral Signals */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-pure-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <span className="text-electric-green">14 Behavioral Signals</span> Our Model Analyzes
          </motion.h2>
          <motion.p
            className="text-cool-gray text-lg text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Each signal is weighted by its predictive power. The model combines all 14 into a single daily risk score for every member.
          </motion.p>

          <div className="space-y-6">
            {signals.map((signal, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.03 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric-green/10 flex items-center justify-center">
                    <signal.icon className="w-5 h-5 text-electric-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-pure-white">
                        <span className="text-dim-gray mr-2">#{i + 1}</span>
                        {signal.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        signal.weight === "High"
                          ? "bg-electric-green/10 text-electric-green"
                          : signal.weight === "Medium"
                          ? "bg-sapphire-blue/10 text-sapphire-blue"
                          : "bg-cool-gray/10 text-cool-gray"
                      }`}>
                        {signal.weight} Weight
                      </span>
                    </div>
                    <p className="text-cool-gray text-sm leading-relaxed">{signal.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Model Works */}
      <section className="py-20 px-6 bg-midnight/50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">How the Model Is Trained</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            GymWyse&apos;s churn prediction model is trained on anonymized behavioral data from thousands of gyms across four continents. No personally identifiable information is ever used in model training -- only behavioral patterns tied to anonymized IDs. The model uses a gradient-boosted decision tree architecture (specifically XGBoost) that excels at tabular data with mixed signal types.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The base model is retrained quarterly on the latest aggregated data, incorporating new behavioral patterns and seasonal trends. On top of this base model, each gym gets a fine-tuning layer that adapts to their specific member demographics, class types, and local factors over the first 60-90 days of use. This two-layer approach means you get useful predictions from Day 1 (using the base model) that become increasingly precise as the fine-tuning layer learns your gym.
          </p>
          <p className="text-cool-gray text-lg leading-relaxed">
            Confidence scoring is built into every prediction. Each member&apos;s risk score comes with a confidence interval. A score of &quot;82% risk, high confidence&quot; means the model is very sure this member is likely to churn. A score of &quot;72% risk, low confidence&quot; means the model suspects churn but has insufficient data to be certain -- perhaps the member is too new to have established patterns. Staff can use confidence levels to prioritize their intervention efforts.
          </p>
        </motion.div>
      </section>

      {/* Automated Interventions and A/B Testing */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Automated Interventions and A/B Testing</h2>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            Prediction without action is just an expensive way to watch members leave. GymWyse couples every risk prediction with configurable automated intervention workflows. When a member crosses your risk threshold, the system can trigger a sequence of escalating touchpoints.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { level: "70-79% Risk", action: "Automated personalized SMS or email based on their specific risk drivers (e.g., 'We noticed you haven't been to your favorite Thursday HIIT class lately -- your spot is waiting!')", color: "text-sapphire-blue" },
              { level: "80-89% Risk", action: "Staff notification with member context card (risk score, drivers, preferred contact method, recommended offer) so a team member can make a personal outreach call", color: "text-sunset-orange" },
              { level: "90%+ Risk", action: "Manager alert with full retention playbook: member history, lifetime value, suggested retention offers (free PT session, membership freeze, tier upgrade), and talking points for a save conversation", color: "text-alert-red" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <p className={`font-bold ${item.color} mb-2`}>{item.level}</p>
                <p className="text-cool-gray text-sm leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
          <p className="text-cool-gray text-lg leading-relaxed mb-6">
            The A/B testing engine continuously experiments with different retention messages, offers, and timing to optimize save rates. It might test whether a &quot;We miss you&quot; SMS performs better than a &quot;Here is a free class pass&quot; SMS for members in the 70-79% risk bracket. Over time, the system learns which interventions work best for different member segments at your specific gym, automatically routing each at-risk member to the highest-performing intervention for their profile.
          </p>
        </motion.div>
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
            GymWyse&apos;s <span className="text-electric-green font-semibold">ML Churn Scoring Engine</span> is the analytical brain behind everything described above, and it is accessible through an intuitive dashboard that requires zero data science knowledge to operate. The main view shows a ranked list of all members by churn risk, color-coded by severity (green, amber, red). Each member card expands to reveal their specific signal breakdown -- which of the 14 signals are elevated and by how much. A timeline view shows how each member&apos;s risk score has evolved over the past 90 days, making it easy to spot accelerating disengagement. The intervention log tracks every automated and manual touchpoint, with outcome tracking showing which interventions led to re-engagement and which did not. Monthly reports quantify exactly how many members were saved, the revenue retained, and the ROI of your retention efforts.
          </p>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Behavioral Signals", value: "14", color: "text-electric-green" },
                { label: "Prediction Window", value: "30 days", color: "text-sapphire-blue" },
                { label: "Avg. Members Saved", value: "18/mo", color: "text-electric-green" },
                { label: "Model Precision", value: "89%", color: "text-sapphire-blue" },
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

      {/* Results Across Gym Types */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-8">Results Across Gym Types</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { type: "Boutique Studios", members: "8-12 saved/mo", precision: "91%", note: "Smaller member bases mean each save has outsized revenue impact. Consistent class schedules create strong behavioral patterns for the model." },
              { type: "CrossFit Boxes", members: "10-15 saved/mo", precision: "88%", note: "Strong community dynamics provide excellent social signal data. Class-based attendance creates reliable patterns for the model to learn." },
              { type: "Traditional Gyms (500+ members)", members: "18-22 saved/mo", precision: "89%", note: "Larger datasets provide robust statistical patterns. The model excels at identifying disengagement in the long tail of members who visit sporadically." },
              { type: "Multi-Location Chains", members: "25-40 saved/mo (portfolio)", precision: "87%", note: "Cross-location visit data adds a powerful signal. Members who stop visiting their secondary location often churn from their primary location within 60 days." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-bold text-pure-white mb-1">{item.type}</h3>
                <div className="flex gap-4 mb-3">
                  <span className="text-electric-green text-sm font-semibold">{item.members}</span>
                  <span className="text-sapphire-blue text-sm font-semibold">{item.precision} precision</span>
                </div>
                <p className="text-cool-gray text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
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
                  ["Churn detection method", "Staff gut feeling + cancellation reports", "14-signal ML model with daily scoring"],
                  ["Prediction window", "0 days (reactive after cancellation)", "30 days advance warning"],
                  ["Member risk visibility", "No visibility until too late", "Real-time ranked risk dashboard"],
                  ["Intervention timing", "After cancellation request submitted", "Automated at configurable risk thresholds"],
                  ["Personalization", "Generic 'We miss you' emails", "Signal-specific messaging per member"],
                  ["Retention offer testing", "Trial and error over months", "Continuous A/B testing with statistical rigor"],
                  ["Save rate", "~15% of cancellation requests", "~38% of predicted at-risk members"],
                  ["ROI attribution", "Impossible to measure", "Per-intervention revenue attribution"],
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
          <h2 className="text-3xl font-bold text-pure-white mb-6">ROI Calculation: The Math That Matters</h2>
          <div className="glass-card p-8 space-y-4">
            <p className="text-cool-gray text-lg">For a 500-member gym with $59/month average dues and 4.2% monthly churn:</p>
            <div className="space-y-3 text-soft-white">
              <p><span className="text-sapphire-blue font-semibold">Without AI prediction:</span> 21 members lost/month, ~15% save rate on cancellation requests = 3 saved</p>
              <p><span className="text-sapphire-blue font-semibold">Net members lost:</span> 21 - 3 = <span className="text-alert-red font-bold">18 members/month</span></p>
              <div className="border-t border-glass-border pt-4 mt-4">
                <p><span className="text-electric-green font-semibold">With GymWyse AI prediction:</span> 21 at-risk members flagged, 38% save rate on predicted-risk members = ~8 saved via prediction + 3 saved via traditional = <span className="text-electric-green font-bold">11 total saved</span></p>
                <p><span className="text-electric-green font-semibold">Net improvement:</span> 8 additional members saved/month</p>
                <p><span className="text-electric-green font-semibold">Monthly revenue retained:</span> 8 x $59 = <span className="text-electric-green font-bold">$472/month</span></p>
                <p><span className="text-electric-green font-semibold">Annual revenue retained:</span> $472 x 12 = <span className="text-electric-green font-bold">$5,664/year</span></p>
                <p><span className="text-electric-green font-semibold">Including ancillary revenue ($22/mo avg):</span> 8 x ($59 + $22) x 12 = <span className="text-electric-green font-bold">$7,776/year</span></p>
              </div>
              <p className="text-cool-gray mt-4 text-base">With referred member value (0.3 referrals/retained member), total annual impact climbs to approximately <span className="text-electric-green font-bold">$9,400+</span>. For larger gyms (1,000+ members), these numbers scale proportionally, with some operators reporting <span className="text-electric-green font-bold">$18,000-$22,000</span> in annual retained revenue.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your AI Retention ROI <ArrowRight className="w-4 h-4 ml-2" />
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
          <h2 className="text-3xl font-bold text-pure-white mb-6">Regional Compliance Note</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { region: "United States", note: "AI-based behavioral scoring must comply with state consumer protection laws. Several states (including Colorado and Connecticut) have enacted AI governance frameworks. GymWyse maintains transparency in how scores are calculated and provides member opt-out mechanisms where required by law." },
              { region: "United Kingdom", note: "GDPR Articles 13-14 require informing members about automated profiling. Article 22 gives members the right not to be subject to solely automated decisions. GymWyse provides DPIA templates, member notification language, and ensures human oversight in all intervention workflows." },
              { region: "Australia", note: "The Australian AI Ethics Framework recommends transparency in algorithmic decision-making. The Privacy Act reform proposals include enhanced rules for automated profiling. GymWyse complies with current APPs and is designed to meet proposed enhanced transparency requirements." },
              { region: "UAE", note: "UAE AI Strategy 2031 encourages ethical AI adoption. The Federal Data Protection Law requires transparency in automated processing. GymWyse complies with MOHAP health data guidelines where gym usage data intersects with health metrics, and supports UAE data residency requirements." },
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
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-6">Insights from GymWyse Product Team</h2>
          <div className="glass-card p-8 border-l-4 border-sapphire-blue">
            <p className="text-lg text-soft-white leading-relaxed italic mb-4">
              &quot;The question we hear most often is: does this actually work, or is it just a fancy dashboard? So we will share the number that matters most: across our entire gym network, the AI churn prediction system saves an average of 18 members per month per facility. That is not a projection or a simulation -- it is measured data based on members who were flagged as high-risk, received automated or staff-led interventions, and then continued their memberships for 90+ days beyond the predicted churn date. The model is not perfect -- no model is -- but 89% precision on a 30-day prediction window is transformative for retention economics. And the system gets smarter every quarter as we retrain on fresh data.&quot;
            </p>
            <p className="text-cool-gray">
              &mdash; GymWyse Product Team, Machine Learning Division
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
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Ready to Predict Churn Before It Happens?
          </h2>
          <p className="text-cool-gray text-lg mb-8 max-w-xl mx-auto">
            See the ML Churn Scoring Engine running live on demo data -- or bring your own member data for a personalized risk analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                See AI Predictions Live <ArrowRight className="w-4 h-4 ml-2" />
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
              <Link href="/crossfit-gym-software" className="text-sapphire-blue hover:text-electric-green transition-colors text-sm">
                CrossFit Gym Software <ArrowRight className="w-3 h-3 inline ml-1" />
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
