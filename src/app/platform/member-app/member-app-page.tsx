"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Smartphone,
  Users,
  Zap,
  Heart,
  Brain,
  Watch,
  CalendarCheck,
  TrendingUp,
  Trophy,
  ChevronDown,
  Star,
  Bell,
  Camera,
  Wifi,
  Palette,
  MessageCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const aiCoaches = [
  {
    name: "Coach Blaze",
    personality: "High-energy motivator",
    style: "Explosive HIIT & metabolic conditioning",
    description:
      "Coach Blaze is the voice in your ear that pushes you through the last three reps when your body wants to quit. Designed for members who thrive on intensity and need external energy to match their ambition, Blaze delivers high-tempo workout plans built around metabolic conditioning, plyometrics, and circuit-style training. Every session ends with a motivational debrief that highlights what the member crushed and sets the tone for the next visit. Blaze tracks workout intensity over time and progressively increases volume and complexity as the member adapts, ensuring they never plateau from doing the same routine twice.",
  },
  {
    name: "Coach Zen",
    personality: "Calm & mindful",
    style: "Mindfulness, breathwork & recovery",
    description:
      "Coach Zen approaches fitness as a practice rather than a punishment. Built for members who value mental clarity alongside physical gains, Zen integrates guided breathwork, mobility flows, and mindfulness prompts into every training session. After a heavy lifting day, Zen prescribes active recovery with foam rolling sequences and parasympathetic breathing exercises. Zen monitors stress indicators from wearable data, including elevated resting heart rate and poor sleep scores, and adjusts programming to prevent overtraining. Members who train with Coach Zen report feeling more balanced and consistent in their attendance over time.",
  },
  {
    name: "Coach Iron",
    personality: "Disciplined strength specialist",
    style: "Powerlifting & progressive overload",
    description:
      "Coach Iron is built for members who care about numbers on the bar. Specializing in compound lifts, periodization, and progressive overload, Iron tracks every set, every rep, and every kilogram across squat, bench, deadlift, and overhead press. When a member stalls on a lift for two consecutive sessions, Iron prescribes accessory work targeting the weak link in the chain. Iron programs in mesocycles with planned deload weeks, peaking phases, and testing days so members always know where they stand relative to their personal records. Detailed lift analytics show velocity trends, estimated one-rep maxes, and volume load over time.",
  },
  {
    name: "Coach Flow",
    personality: "Graceful movement expert",
    style: "Flexibility, yoga & functional mobility",
    description:
      "Coach Flow is designed for members who want to move better, not just lift heavier. Flow builds programs around functional mobility, dynamic stretching, yoga-inspired sequences, and movement patterns that improve range of motion across every joint. Each session starts with a movement assessment that identifies tight areas based on the member's logged activities and wearable data. Flow is particularly popular with older members and those recovering from injuries who need guidance on safe movement progressions. The avatar tracks flexibility benchmarks over time, celebrating improvements in hip mobility, shoulder range, and spinal extension.",
  },
  {
    name: "Coach Sprint",
    personality: "Speed-focused cardio specialist",
    style: "Running, rowing & cardiovascular endurance",
    description:
      "Coach Sprint owns everything related to cardiovascular fitness. Whether a member wants to run their first five-kilometer race, improve their rowing split time, or simply build a stronger aerobic base, Sprint designs interval programs, tempo sessions, and long steady-state workouts tailored to their current fitness level. Sprint pulls heart rate zone data from wearables to ensure members train in the right intensity band for their goal. Threshold runs, VO2 max intervals, and recovery jogs are all programmed with precision. Sprint also tracks resting heart rate trends over weeks and months, showing members their cardiovascular system improving in real time.",
  },
  {
    name: "Coach Balance",
    personality: "Holistic wellness guide",
    style: "Nutrition, sleep & total-body wellness",
    description:
      "Coach Balance takes a whole-person approach to fitness, connecting the dots between training, nutrition, sleep, and stress management. Balance reviews wearable data each morning and provides a daily readiness briefing that tells the member whether today is a push day or a pull-back day. Nutritional guidance includes meal timing suggestions around workouts, hydration reminders, and macro-level recommendations based on the member's stated goals. Balance also monitors sleep consistency and flags patterns like declining sleep quality during heavy training blocks. This coach is ideal for members who want a comprehensive wellness experience beyond just exercise programming.",
  },
];

const featureDeepDive = [
  {
    icon: Brain,
    title: "AI Personality-Driven Coaching at Scale",
    description:
      "The six AI coaches are not generic chatbots with different names. Each avatar operates from a distinct coaching philosophy that influences every recommendation it makes, from exercise selection to rest period duration to the tone of its motivational messages. When a member selects Coach Iron for strength programming, the avatar does not hand them a static twelve-week plan and walk away. It tracks every logged set, monitors progressive overload week over week, calculates estimated one-rep maxes from submaximal data, and adjusts the next session based on actual performance. If a member exceeds their projected numbers on squat day, Iron increases the working weight for the following session. If they fall short, Iron evaluates whether the issue is fatigue, sleep deficit, or a genuine strength plateau, and prescribes the appropriate corrective action. Members choose their preferred coaching style during onboarding, and they can switch avatars at any time without losing their workout history or progress data. The result is a personal training experience delivered at scale, without the cost of hiring additional human coaches. Gyms using the AI coaching feature report that members who engage with an avatar complete an average of 3.5 more workouts per month compared to members using a generic app with no coaching layer. That additional engagement translates directly into higher retention rates and increased lifetime member value for gym owners.",
  },
  {
    icon: Watch,
    title: "Deep Wearable Integration Across Four Major Platforms",
    description:
      "The GymWyse member app integrates natively with Apple Watch, WHOOP, Garmin, and Fitbit, covering the vast majority of fitness wearables on the market today. During workouts, members see their real-time heart rate zones overlaid on the exercise they are performing, so they know whether they are burning fat in zone two or pushing into anaerobic territory in zone five. Heart rate recovery metrics after high-intensity intervals give members immediate biofeedback on their cardiovascular fitness. Sleep tracking data from the previous night feeds into the AI coach's daily recommendations. If a member logged four hours of sleep and their WHOOP recovery score is in the red, Coach Zen might suggest a mobility session instead of the planned heavy deadlift workout. Recovery scores from WHOOP and Garmin sync automatically each morning, giving members a readiness assessment before they even arrive at the gym. Resting heart rate trends are plotted over weeks and months so members can see their cardiovascular health improving independently of weight or appearance changes. All wearable data is aggregated into a single unified progress dashboard within the GymWyse app, creating one source of truth for the member's entire health and fitness journey. Gym owners can view anonymized, aggregate wearable data across their membership to understand training intensity trends and recovery patterns at the facility level. For more details on supported devices and setup, visit our wearable integrations page.",
  },
  {
    icon: CalendarCheck,
    title: "Self-Service Booking, Scheduling, and Membership Management",
    description:
      "Members browse and book classes directly from the app with a single tap. The class schedule displays instructor names, class descriptions, difficulty levels, and real-time availability so members can make informed decisions before committing. When a class is full, members join the waitlist and receive a push notification the moment a spot opens, with a configurable window to confirm before the spot goes to the next person in line. Cancellations and reschedules happen entirely in-app with no need to call the front desk, send a text message, or fill out a form. The booking system enforces your cancellation policy automatically, applying late-cancel fees or no-show penalties if you have them configured. Beyond class booking, the app serves as a full self-service portal where members can view their membership details, update payment methods, purchase add-ons like personal training packages or locker rentals, freeze or cancel their membership, and download invoices. Every transaction and schedule change is logged and visible to both the member and the gym owner. For gym owners, in-app booking drives significantly higher class utilization because the friction of booking drops to near zero. Gyms using GymWyse report 3.2 times more class bookings through the app compared to facilities that rely on front-desk-only booking workflows.",
  },
  {
    icon: Trophy,
    title: "Gamification, Challenges, and Community Engagement",
    description:
      "The GymWyse member app transforms individual workouts into a shared social experience through challenges, leaderboards, badges, and a community feed. Gym owners launch preset challenges from the dashboard, including thirty-day attendance streaks, most classes attended in a month, total weight lifted competitions, and custom challenges built around any metric the platform tracks. Leaderboards update in real time and are visible to all participants, creating friendly competition that drives consistent attendance. Members earn achievement badges for milestones such as their first hundred workouts, attending every class type offered at the gym, logging a personal record on any major lift, maintaining a seven-day workout streak, and referring a new member. Progress photos are stored securely in the app with side-by-side comparison views that members can share to the gym's social feed if they choose. The social feed itself acts as an internal community hub where members celebrate wins, share workout recaps, and encourage each other. Referral tracking is built directly into the app, so when a member shares their unique referral link and a friend signs up, the referring member automatically receives whatever reward the gym has configured, whether that is a free month, a merchandise credit, or a personal training session. Gyms running monthly challenges on GymWyse report measurably higher visit frequency during active challenge periods compared to months without challenges, and the social feed keeps members connected to the gym even on rest days.",
  },
];

const engagementStats = [
  { value: "40%", label: "Higher Engagement", detail: "vs generic branded apps" },
  { value: "3.2\u00d7", label: "More Class Bookings", detail: "via app vs front desk" },
  { value: "68%", label: "Retention Increase", detail: "with AI coaching enabled" },
  { value: "12 min", label: "Avg Daily App Usage", detail: "per active member" },
];

const testimonials = [
  {
    quote:
      "We switched from a generic white-label app to GymWyse and the difference was night and day. Our members actually open the app every single day now. Coach Blaze became a running joke in the gym because members would quote its motivational messages to each other mid-workout. App adoption went from eighteen percent to over seventy percent in six weeks. The AI coaching feature alone justified the switch, and we have not even touched half the other features yet. Our retention numbers are the best they have been in three years of operating this facility.",
    name: "Marcus Delgado",
    role: "Owner, Ironworks Fitness",
    location: "Austin, TX",
  },
  {
    quote:
      "I manage two boutique studios in London and member engagement was always our biggest challenge. People would sign up, come for a month, and quietly disappear. Since launching the GymWyse member app, our thirty-day retention rate improved by twenty-two percent. The challenges and leaderboard features created a sense of community that we could never achieve with just classes alone. Members are tagging each other on the social feed, competing on the monthly leaderboard, and actually showing up consistently. The wearable sync with Apple Watch data also means our instructors can reference heart rate trends when coaching members in person.",
    name: "Sophie Chen",
    role: "Studio Manager, Pulse Studios",
    location: "London, UK",
  },
  {
    quote:
      "Our gym is in a rural area where members drive twenty or thirty minutes to train. We needed an app that kept them connected to the gym even when they were not physically here. The offline mode lets members follow their AI-generated workout plan at a local park or their garage gym, and everything syncs when they get back in range. Coach Balance has been the most popular avatar with our older demographic because it focuses on the whole wellness picture, not just the workout. We have members in their sixties using this app daily and loving it. That is something I never expected when we signed up.",
    name: "Jake Thornton",
    role: "Owner, Summit Strength Co.",
    location: "Bozeman, MT",
  },
];

const comparisonFeatures = [
  { feature: "AI personality-driven coaches", gymwyse: true, competitor: false },
  { feature: "Six distinct coaching avatars", gymwyse: true, competitor: false },
  { feature: "Wearable sync (Apple Watch, WHOOP, Garmin, Fitbit)", gymwyse: true, competitor: false },
  { feature: "Real-time heart rate zone overlay", gymwyse: true, competitor: false },
  { feature: "Class booking and waitlists", gymwyse: true, competitor: true },
  { feature: "Progress photos with side-by-side", gymwyse: true, competitor: false },
  { feature: "Workout logging and personal records", gymwyse: true, competitor: true },
  { feature: "Gym-wide challenges and leaderboards", gymwyse: true, competitor: false },
  { feature: "Achievement badges and streaks", gymwyse: true, competitor: false },
  { feature: "Community social feed", gymwyse: true, competitor: false },
  { feature: "Built-in referral tracking", gymwyse: true, competitor: false },
  { feature: "Offline workout mode", gymwyse: true, competitor: false },
  { feature: "Custom branding (logo and colors)", gymwyse: true, competitor: true },
  { feature: "Push notification campaigns", gymwyse: true, competitor: true },
  { feature: "Self-service membership management", gymwyse: true, competitor: true },
  { feature: "Included in base plan (no add-on fee)", gymwyse: true, competitor: false },
];

const faqs = [
  {
    question: "Is the member app included in the GymWyse subscription or is it an extra charge?",
    answer:
      "The branded member app for iOS and Android is included at no extra cost with every GymWyse plan starting at ninety-nine dollars per month. There are no per-member fees, no download limits, and no hidden charges for app access. Your members get full access to all six AI coaching avatars, class booking, progress tracking, workout logging, challenges, the social feed, wearable sync, and every other app feature from day one. Unlike competitors who charge per-member fees or require premium tiers for advanced features, GymWyse includes the complete member app experience in every single plan. This means a gym with fifty members and a gym with five thousand members pay the same platform fee with no scaling charges based on app usage or member count.",
  },
  {
    question: "How do the six AI coaching avatars actually work, and can members switch between them?",
    answer:
      "During onboarding, members browse all six AI avatar personalities and select the one that matches their training style and goals. Each avatar operates from a distinct coaching philosophy: Coach Blaze focuses on high-intensity motivation, Coach Zen on mindfulness and recovery, Coach Iron on strength and progressive overload, Coach Flow on flexibility and functional mobility, Coach Sprint on cardiovascular endurance, and Coach Balance on holistic wellness including nutrition and sleep. Once selected, the avatar begins learning from the member's logged workouts, wearable data, and stated goals to generate personalized training recommendations. Members can switch between avatars at any time from the app settings without losing any workout history or progress data. The new avatar picks up where the old one left off but applies its own coaching philosophy to future recommendations. This flexibility means a member might train with Coach Iron during a strength-focused training block and then switch to Coach Flow during a recovery or deload phase.",
  },
  {
    question: "Does the app work offline for members who train outside the gym?",
    answer:
      "Yes, the GymWyse member app includes a full offline mode designed for members who train in parks, garages, home gyms, or any location without reliable internet access. Workout plans generated by the AI coach are cached locally on the device, so members can view their prescribed exercises, log sets, reps, and weights, and track their session without any internet connection. Progress photos can also be captured offline and stored locally. When the member reconnects to wifi or cellular data, all offline activity syncs automatically to the cloud, updating their progress dashboard, personal records, and the AI coach's training model. Class booking, the social feed, and real-time leaderboard features do require an active connection, but all core training functionality remains fully available offline. This is especially valuable for gyms in areas with poor cellular reception or members who prefer outdoor training sessions.",
  },
  {
    question: "Can we customize the app with our gym's branding, logo, and colors?",
    answer:
      "Yes. Your gym's logo, brand colors, and facility name are displayed throughout the member app, creating a fully branded experience that feels like your own proprietary application rather than a third-party platform. Members see your branding on the app home screen, in push notifications, on all in-app communications, and throughout the class booking and workout interfaces. The color customization applies to buttons, headers, accent elements, and navigation, ensuring visual consistency with your gym's existing brand identity. The branding configuration is managed from the GymWyse owner dashboard and changes propagate to all member devices within minutes. There is no additional fee for branding customization. It is included in every plan because we believe your members should feel connected to your gym, not to our platform.",
  },
  {
    question: "What push notification capabilities does the app support for member communication?",
    answer:
      "The GymWyse member app supports a comprehensive push notification system that covers automated triggers, scheduled campaigns, and manual one-off messages. Automated notifications include class reminders sent at a configurable interval before the scheduled start time, waitlist spot availability alerts, payment confirmations, membership renewal reminders, and achievement celebrations when a member earns a badge or sets a personal record. Win-back notifications are triggered automatically when a member has not visited the gym in a configurable number of days, sending them a personalized message encouraging them to return. Gym owners can also create scheduled notification campaigns for promotions, events, or announcements, targeting specific member segments based on membership type, attendance frequency, or last visit date. All push notifications carry your gym's branding and can include deep links that take the member directly to the relevant screen in the app, whether that is the class schedule, their workout plan, or a challenge leaderboard.",
  },
  {
    question: "How does the referral tracking system work within the member app?",
    answer:
      "Every member has a unique referral link accessible from their app profile. When they share this link with a friend and that friend signs up for a membership at your gym, the system automatically attributes the referral to the originating member. The gym owner configures the referral reward from the dashboard, whether that is a free month of membership, a merchandise credit, a personal training session, or any other incentive that fits your business model. Both the referring member and the new member can optionally receive rewards, creating a two-sided incentive structure that encourages sharing. The referral dashboard shows gym owners exactly how many referrals each member has generated, the conversion rate from shared links to completed signups, and the total revenue attributed to the referral program. Members can track their own referral history in the app, see pending referrals that have not yet converted, and view their earned rewards. This built-in referral engine replaces the need for external referral marketing tools and keeps the entire acquisition funnel within the GymWyse ecosystem.",
  },
];

export function MemberAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GymWyse Member App",
            applicationCategory: "HealthApplication",
            operatingSystem: "iOS, Android",
            url: "https://gymwyse.fit/platform/member-app",
            description: "White-label branded gym member app with class booking, workout tracking, push notifications, and in-app payments.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Included with all GymWyse plans" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "200", bestRating: "5" },
            featureList: ["Class Booking & Waitlists", "Workout Tracking", "Push Notifications", "In-App Payments", "Progress Photos & Measurements"],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Member Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              AI-Powered Member App for Gym Management
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              The GymWyse member app is the centerpiece of our gym management software, putting six
              AI personality-driven coaches, wearable integration, class booking, workout logging, and
              community features into a single branded app that your members will actually use every day.
              Included free with every GymWyse plan starting at ninety-nine dollars per month.
            </p>
          </motion.div>

          {/* AI Coach Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {aiCoaches.map((coach, i) => (
              <motion.div
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-sapphire-blue/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-sapphire-blue font-bold">
                    {coach.name.split(" ")[1][0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-pure-white mb-1">
                  {coach.name}
                </h3>
                <p className="text-sm text-electric-green mb-1">{coach.personality}</p>
                <p className="text-xs text-dim-gray mb-3">{coach.style}</p>
                <p className="text-xs text-cool-gray leading-relaxed">
                  {coach.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {engagementStats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold font-mono text-electric-green mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-pure-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-dim-gray">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
                Why Most Gym Apps Fail Their Members
              </h2>
            </div>
            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-6">
                The fitness industry has a member engagement crisis. Most gyms offer a branded app
                that members download once, open twice, and never touch again. The typical gym app is
                little more than a digital class schedule with a logo slapped on top. It does not
                motivate members to train harder, does not adapt to their individual goals, and does
                not create any emotional connection to the gym community. The result is predictable:
                app adoption rates hover around fifteen to twenty percent, and even those who download
                the app use it less than once per week. Meanwhile, members drift away silently. They
                stop coming to classes, their visits taper from four times a week to once a week to
                once a month, and eventually they cancel. By the time most gym owners notice, the
                member is already gone. The root cause is not that members are lazy or disloyal. It
                is that the tools meant to keep them engaged offer nothing worth engaging with. A
                static class schedule is not a reason to open an app. A generic workout plan is not a
                reason to stay motivated. What members need is a personal coach in their pocket that
                knows their goals, adapts to their progress, celebrates their wins, and nudges them
                back when they start to drift. That is exactly what the GymWyse member app delivers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              Four Pillars That Drive Member Retention
            </h2>
            <p className="text-soft-white leading-relaxed">
              Each capability is engineered to solve a specific engagement problem that causes
              members to disengage, drift, and eventually cancel. Together, they create a member
              experience that no generic app can match.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {featureDeepDive.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-electric-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Operations Context Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Platform Integration
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
                How the Member App Fits Into the Complete GymWyse Platform
              </h2>
            </div>
            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed">
                The member app is not a standalone product bolted onto the side of your gym management
                system. It is the member-facing layer of the complete GymWyse platform, deeply
                integrated with every other module. When a member books a class through the app, that
                booking instantly appears in the owner dashboard, updates the class roster, and adjusts
                capacity counts in real time. When a member logs a workout, that activity data feeds
                into the retention analytics engine, helping gym owners identify at-risk members before
                they cancel. Payment processing, membership changes, and billing inquiries all flow
                through the same unified system, so there is no data duplication or sync lag between
                what the member sees and what the owner sees. The member app also connects directly to
                the{" "}
                <Link href="/platform/equipment-qr" className="text-electric-green hover:underline">
                  Equipment QR system
                </Link>
                , allowing members to scan machines and report issues without leaving the app. Push
                notifications triggered by the retention engine reach members through the app, closing
                the loop between back-office intelligence and front-line member communication. This
                tight integration means gym owners operate from a single platform where every member
                interaction, whether it is a class booking, a workout log, a payment, or an equipment
                report, is captured, connected, and actionable. Check our{" "}
                <Link href="/pricing" className="text-electric-green hover:underline">
                  pricing page
                </Link>{" "}
                to see how the member app is included with every plan, or visit the{" "}
                <Link href="/integrations/wearables" className="text-electric-green hover:underline">
                  wearable integrations
                </Link>{" "}
                page for detailed device compatibility information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
                Case Study
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3">
                Flow State Yoga, Brooklyn
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="text-soft-white leading-relaxed mb-4">
                Flow State Yoga is a 340-member yoga and functional fitness studio in Williamsburg,
                Brooklyn, that had been struggling with member engagement and retention for over a
                year before switching to GymWyse. Their previous platform offered a basic branded app
                that functioned as little more than a class schedule viewer. Only nineteen percent of
                members had downloaded the app, and usage analytics showed the average member opened
                it once every eleven days. The studio was losing an average of twenty-two members per
                month to cancellations, and their thirty-day retention rate for new members sat at a
                disappointing sixty-one percent.
              </p>
              <p className="text-soft-white leading-relaxed mb-4">
                After implementing GymWyse and launching the AI-powered member app, the studio saw
                immediate traction. App adoption reached fifty-eight percent within the first three
                weeks, driven largely by curiosity about the AI coaching avatars. Coach Zen became the
                most popular avatar, selected by forty-two percent of active users, which aligned
                perfectly with the studio's yoga-focused membership base. Coach Flow was the second
                most popular choice at twenty-seven percent. Within sixty days, members using the AI
                coaching features were attending an average of 1.8 more classes per week compared to
                their pre-GymWyse baseline, representing a thirty-five percent increase in overall
                engagement. Class bookings through the app tripled compared to the previous system,
                and the waitlist feature reduced no-show rates by over forty percent because members
                who could not attend released their spots knowing someone else would fill them.
              </p>
              <p className="text-soft-white leading-relaxed mb-6">
                The community features had an outsized impact. The studio launched a thirty-day yoga
                streak challenge through the app that attracted one hundred and fourteen participants.
                During the challenge month, average weekly visits per member increased from 2.4 to
                3.7. The social feed became an active community hub where members shared post-class
                reflections and progress photos. Monthly cancellations dropped from twenty-two to
                nine, and the thirty-day new member retention rate climbed from sixty-one percent to
                eighty-three percent. The studio owner attributed the turnaround entirely to the
                member app and AI coaching experience.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Engagement Increase", value: "35%", detail: "More classes attended" },
                  { label: "App Adoption", value: "58%", detail: "Up from 19%" },
                  { label: "Most Popular Coach", value: "Zen", detail: "42% of users" },
                  { label: "Cancellations", value: "-59%", detail: "22/mo down to 9/mo" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold font-mono text-electric-green mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-pure-white mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-dim-gray">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              What Gym Owners Are Saying
            </h2>
            <p className="text-soft-white leading-relaxed">
              Real feedback from facility owners and managers who switched their member experience
              to GymWyse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-electric-green fill-electric-green"
                    />
                  ))}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-pure-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-electric-green">{testimonial.role}</p>
                  <p className="text-xs text-dim-gray">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-4">
              GymWyse Member App vs Mindbody App
            </h2>
            <p className="text-soft-white leading-relaxed">
              Mindbody offers a functional booking app, but GymWyse delivers a complete member
              engagement platform with AI coaching, gamification, wearable sync, and community
              features that Mindbody simply does not provide. Here is a feature-by-feature breakdown
              showing where GymWyse leads and where the platforms overlap.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 gap-0 border-b border-glass-border p-4 md:p-6">
                <div className="text-sm font-semibold text-pure-white">Feature</div>
                <div className="text-sm font-semibold text-electric-green text-center">GymWyse</div>
                <div className="text-sm font-semibold text-dim-gray text-center">Mindbody</div>
              </div>
              {comparisonFeatures.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-0 p-4 md:px-6 md:py-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <div className="text-sm text-cool-gray">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.gymwyse ? (
                      <Check className="w-5 h-5 text-electric-green" />
                    ) : (
                      <X className="w-5 h-5 text-dim-gray" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.competitor ? (
                      <Check className="w-5 h-5 text-cool-gray" />
                    ) : (
                      <X className="w-5 h-5 text-dim-gray" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-soft-white leading-relaxed">
              Detailed answers to the most common questions about the GymWyse member app, AI
              coaching avatars, wearable integrations, and engagement features.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-pure-white pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-glass-border pt-4">
                          <p className="text-sm text-cool-gray leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mt-3 mb-6">
              Included in Every GymWyse Plan
            </h2>
            <div className="glass-card p-8 md:p-10">
              <p className="text-4xl font-bold font-mono text-electric-green mb-2">
                $99<span className="text-lg text-cool-gray">/mo</span>
              </p>
              <p className="text-soft-white leading-relaxed mb-6">
                The complete member app with all six AI coaching avatars, wearable sync, class booking,
                progress tracking, challenges, community feed, referral tracking, push notifications,
                custom branding, and offline mode is included in every GymWyse plan starting at
                ninety-nine dollars per month. There are no per-member fees, no feature gates, and no
                premium tiers required. Every member at your gym gets the full experience from day one.
              </p>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View All Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white">
              Give Your Members an App They Actually Use Every Day
            </h2>
            <p className="text-lg text-soft-white leading-relaxed">
              Book a twenty-minute demo and see the six AI coaching avatars in action with a live
              walkthrough of the member experience. Or start a free fourteen-day trial and let your
              members experience it themselves. No credit card required. No contract. Cancel any time.
              Use our{" "}
              <Link href="/roi-calculator" className="text-electric-green hover:underline">
                ROI calculator
              </Link>{" "}
              to estimate the retention impact for your specific gym.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
