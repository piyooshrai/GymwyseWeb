"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  ArrowRight,
  Banknote,
  Sun,
  Users,
  Gift,
  TrendingUp,
  Settings,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-glass-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium text-pure-white pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dim-gray shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-cool-gray leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper – whileInView animation                            */
/* ------------------------------------------------------------------ */
function Section({
  bg,
  children,
}: {
  bg: "deep-space" | "midnight";
  children: React.ReactNode;
}) {
  return (
    <section className={`py-24 md:py-32 ${bg === "deep-space" ? "bg-deep-space" : "bg-midnight"}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const faqs: { q: string; a: string }[] = [
  {
    q: "Does GymWyse support BPAY?",
    a: "Yes. GymWyse sets up a dedicated BPAY biller code for your gym so members can pay their memberships through any Australian bank's BPAY system. Each member receives a unique BPAY reference number, and all payments are automatically matched and reconciled inside your GymWyse dashboard. BPAY is one of the most trusted payment methods in Australia, and offering it dramatically reduces failed payment rates compared to card-only billing.",
  },
  {
    q: "What is the pricing in AUD?",
    a: "All GymWyse pricing for Australian customers is quoted and billed in Australian Dollars. Your monthly subscription, member invoices, receipts, and all financial reporting are denominated in AUD. There are no hidden currency conversion fees and no USD-denominated charges. The Starter plan is AU$129 per location per month, the Growth plan is AU$99 per location per month for two to five locations, and Enterprise pricing is available on request for six or more locations.",
  },
  {
    q: "Can I manage outdoor sessions with GymWyse?",
    a: "Absolutely. GymWyse includes purpose-built outdoor class management tools designed for the Australian fitness market. You can set up outdoor venues such as beaches, parks, and outdoor courts with GPS coordinates. Members check in via GPS proximity when they arrive at the outdoor location. Weather integration with the Bureau of Meteorology triggers automatic cancellation alerts and backup venue notifications when conditions turn. You also get full attendance analytics across indoor and outdoor session types.",
  },
  {
    q: "Is there Australian support?",
    a: "GymWyse offers AEST-hours support for all Australian customers. Our support team understands the Australian fitness market, local payment methods like BPAY and Direct Debit, GST requirements, and the unique operational needs of outdoor fitness programming. Starter plan customers receive email support, Growth plan customers receive priority support, and Enterprise customers receive a dedicated account manager.",
  },
  {
    q: "How does GST handling work?",
    a: "GymWyse automatically applies 10% GST to all member invoices and receipts. You can generate BAS-compatible GST reports for your quarterly Business Activity Statement lodgement. GymWyse also integrates natively with Xero AU and MYOB so your accounting software always has accurate, GST-inclusive revenue data without manual reconciliation.",
  },
  {
    q: "Can I track comp memberships?",
    a: "Yes. Comp membership tracking is a core feature, built specifically for the Australian CrossFit and boutique fitness market where complimentary memberships for ambassadors, influencers, and competition winners are common. GymWyse tracks every comp member with a full audit trail, measures their referral impact on paid sign-ups, and can automatically prompt conversion to a paid plan when the comp period expires.",
  },
  {
    q: "Does GymWyse work for F45-style studios?",
    a: "GymWyse is built to handle the high-intensity, class-based scheduling model that F45 and similar functional training studios demand. Features include waitlist management, real-time class capacity displays, heart rate zone tracking, performance leaderboards, and session-based attendance analytics. The platform handles rapid class turnover, short booking windows, and high-volume check-ins that characterise the F45-style operating model.",
  },
  {
    q: "Is data hosted in Australia?",
    a: "GymWyse hosts all Australian customer data on AWS Asia-Pacific (Sydney) infrastructure. Your member data, payment records, and operational data never leave Australian data centres. This ensures compliance with the Australian Privacy Act and provides the lowest possible latency for Australian operators and their members.",
  },
];

const comparisonRows = [
  { feature: "Monthly Pricing", gymwyse: "AU$129/location", competitor: "AU$179/location" },
  { feature: "BPAY Support", gymwyse: "Native (included)", competitor: "Not supported" },
  { feature: "Direct Debit (AU)", gymwyse: "Native (included)", competitor: "Third-party add-on" },
  { feature: "Outdoor Class Management", gymwyse: "Weather alerts + GPS check-in", competitor: "Manual only" },
  { feature: "Comp Membership Tracking", gymwyse: "Full audit trail + referral tracking", competitor: "Not available" },
  { feature: "AUD Pricing", gymwyse: "Native AUD, no conversion", competitor: "USD converted to AUD" },
  { feature: "GST Handling", gymwyse: "Automatic 10% GST + BAS export", competitor: "Manual" },
  { feature: "Setup Fee", gymwyse: "AU$0", competitor: "AU$500+" },
];

const cities = [
  { name: "Sydney", href: "/gym-software-sydney", note: "Australia's largest fitness market with 1,800+ facilities" },
  { name: "Melbourne", href: "/gym-software-melbourne", note: "Fastest-growing boutique studio scene in the country" },
  { name: "Brisbane", href: "/gym-software-brisbane", note: "Subtropical climate driving year-round outdoor fitness" },
  { name: "Perth", href: "/gym-software-perth", note: "Strong independent gym culture and beach fitness community" },
  { name: "Adelaide", href: "/gym-software-adelaide", note: "Emerging functional fitness and wellness hub" },
  { name: "Gold Coast", href: "/gym-software-gold-coast", note: "Tourist-driven gym market with high seasonal variation" },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export function AUPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
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
            "@type": "Organization",
            name: "GymWyse Australia",
            url: "https://gymwyse.fit/au",
            description: "Gym management software for Australia. BPAY support, GST handling, Australian privacy compliance, and local payment processing.",
            areaServed: { "@type": "Country", name: "Australia" },
            parentOrganization: { "@type": "Organization", name: "GymWyse", url: "https://gymwyse.fit" },
          }),
        }}
      />
      {/* ============================================================ */}
      {/*  1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Gym Management Software for Australia
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              GymWyse is the leading gym software Australia trusts for membership management,
              payment collection, and member retention. Our gym management software is purpose-built
              for the Australian fitness industry — with native BPAY integration, Direct Debit
              support, AUD pricing on every plan, and outdoor class management tools designed for
              the way Australian gyms actually operate. From beachside bootcamps in Bondi to
              functional training studios in Fitzroy, GymWyse gives you the tools to grow revenue,
              reduce churn, and run your gym without the admin overhead.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. AUSTRALIAN FITNESS MARKET                                  */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-8">
            The Australian Fitness Market
          </h2>
          <div className="glass-card p-8 border-l-4 border-l-electric-green mb-8">
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              Australia is one of the most fitness-obsessed nations on earth. With over 6,800 gyms
              and fitness facilities generating more than $3.2 billion in annual revenue, Australia
              boasts the highest per-capita gym membership rate in the world. One in every seven
              Australians holds an active gym membership, and that ratio continues to climb as
              boutique fitness, functional training, and wellness services expand into suburban and
              regional markets.
            </p>
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              The Australian market is defined by a strong boutique culture. Brands like F45 were
              born here, and the model of community-driven, high-intensity group fitness has been
              exported worldwide. Alongside the franchise giants, thousands of independent operators
              run CrossFit boxes, yoga studios, Pilates reformer studios, and hybrid
              gym-plus-recovery spaces in every major city and many regional towns. Global brands
              like Barry&apos;s Bootcamp operate alongside fiercely local independents, and the
              competition for members is intense.
            </p>
            <p className="text-base text-cool-gray leading-relaxed">
              Regional diversity adds complexity. Coastal fitness — beach bootcamps, surf fitness
              programs, outdoor yoga on headlands — is a major segment in Sydney, the Gold Coast,
              and Perth. Urban gyms in Melbourne and Brisbane compete on amenity, programming, and
              community. Rural and regional operators face different challenges: smaller member
              bases, limited staff, and the need for software that works reliably on variable
              internet connections. GymWyse is designed for all of these contexts.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "6,800+", label: "Gyms & fitness facilities" },
              { value: "$3.2B", label: "Annual industry revenue" },
              { value: "1 in 7", label: "Australians with active memberships" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="glass-card p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-electric-green font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-dim-gray">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  3. BPAY & DIRECT DEBIT                                       */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <Banknote className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            BPAY &amp; Direct Debit Payments
          </h2>
          <p className="text-base text-soft-white text-center mb-10 max-w-3xl mx-auto">
            Collect payments the way Australians actually pay — via BPAY, Direct Debit, and card.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-pure-white mb-4">BPAY Integration</h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse sets up a dedicated BPAY biller code for your gym. Every member receives a
                unique BPAY reference number and can pay their membership through any Australian
                bank&apos;s BPAY system — the same way they pay their electricity bill or phone
                plan. Payments are automatically matched and reconciled in your dashboard with zero
                manual effort. BPAY is trusted by over 15 million Australians and has significantly
                lower failure rates than card-based recurring billing.
              </p>
              <ul className="space-y-2">
                {[
                  "Dedicated BPAY biller code included at no extra cost",
                  "Automatic payment matching via unique member reference numbers",
                  "Real-time reconciliation dashboard with BPAY status tracking",
                  "Lower failure rates than card-based billing methods",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-electric-green shrink-0 mt-0.5" />
                    <span className="text-xs text-dim-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-pure-white mb-4">
                Direct Debit &amp; Card Payments
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                For members who prefer Direct Debit, GymWyse integrates with Ezidebit and
                GoCardless AU for bank-to-bank collections. Members authorise a Direct Debit
                agreement at sign-up, and collections are fully automated on your chosen billing
                schedule. Automatic failed payment recovery retries declined transactions on
                configurable intervals, recovering revenue that would otherwise be lost to
                involuntary churn. Card payments via Visa, Mastercard, and Amex are also supported
                for members who prefer card-on-file billing.
              </p>
              <ul className="space-y-2">
                {[
                  "Ezidebit and GoCardless AU integration for Direct Debit",
                  "Automatic failed payment recovery with configurable retry logic",
                  "Card payments: Visa, Mastercard, Amex accepted",
                  "All plans priced and billed in AUD — no conversion fees",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-electric-green shrink-0 mt-0.5" />
                    <span className="text-xs text-dim-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  4. OUTDOOR FITNESS MANAGEMENT                                */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <Sun className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Outdoor Fitness Management
          </h2>
          <p className="text-base text-soft-white text-center mb-10 max-w-3xl mx-auto">
            Beach bootcamps, park sessions, outdoor yoga — managed professionally.
          </p>
          <div className="glass-card p-8 mb-8">
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              Australia&apos;s climate and outdoor culture mean that thousands of fitness sessions
              happen outside four walls every single day. Beach bootcamps on Bondi and Manly, park
              sessions in Melbourne&apos;s Royal Botanic Gardens, outdoor yoga on the Gold Coast
              foreshore — these are not fringe activities. They are a core part of the Australian
              fitness industry, and they demand software that treats outdoor programming as a
              first-class citizen, not an afterthought.
            </p>
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              GymWyse includes weather cancellation automation linked to the Bureau of Meteorology
              API. When a severe weather alert is issued for your outdoor venue&apos;s location,
              GymWyse can automatically cancel the affected session, notify all booked members via
              push notification and SMS, and suggest the backup indoor venue — all without a single
              manual intervention. Members receive a notification that says exactly where to go and
              when, eliminating the confusion that plagues outdoor fitness operators during
              unpredictable weather.
            </p>
            <p className="text-base text-cool-gray leading-relaxed">
              Council permit tracking is built into the venue management system so you always know
              when permits expire and need renewal. Multi-venue management lets you run a single gym
              business across an indoor facility and one or more outdoor locations, with unified
              scheduling, attendance tracking, and revenue reporting. Members are notified
              automatically when a venue changes for their booked session. Session capacity
              management for outdoor spaces ensures you never overbook a park permit that limits you
              to 20 participants, and GPS-based check-in confirms that members actually arrived at
              the correct outdoor location.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "BOM weather cancellation automation",
              "GPS proximity check-in for outdoor venues",
              "Council permit tracking and renewal alerts",
              "Multi-venue management (indoor + outdoor)",
              "Automatic member notifications for venue changes",
              "Session capacity limits for outdoor spaces",
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.05} className="glass-card p-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                  <span className="text-sm text-cool-gray">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  5. COMP MEMBERSHIP TRACKING                                  */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <Gift className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Comp Membership Tracking
          </h2>
          <p className="text-base text-soft-white text-center mb-10 max-w-3xl mx-auto">
            Track free memberships, measure their real value, and convert to paid.
          </p>
          <div className="glass-card p-8">
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              Complimentary memberships are deeply embedded in Australian CrossFit and boutique
              fitness culture. Gym owners routinely offer free memberships to brand ambassadors,
              social media influencers, competition winners, and community leaders. The problem is
              that most gym software treats comp members as invisible — they do not appear in
              revenue reporting, their attendance is not tracked separately, and there is no
              mechanism to measure whether a comp membership is actually generating referrals or
              simply giving away access for nothing in return.
            </p>
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              GymWyse tracks every comp membership with a full audit trail: who approved it, what
              the reason was, when it started, and when it expires. You can tag comp members by
              category — ambassador, influencer, competition winner, staff, community partner — and
              run reports showing the total cost of complimentary access alongside the referral
              revenue each comp member has generated. When a comp period expires, GymWyse
              automatically prompts the member with a conversion offer, turning free access into
              paid revenue with a frictionless upgrade flow.
            </p>
            <p className="text-base text-cool-gray leading-relaxed">
              The referral attribution system links every new member sign-up back to the comp member
              who referred them, giving you a clear ROI picture. If an influencer with a three-month
              comp membership refers eight paying members in that period, you will see exactly that
              in your dashboard — along with the total lifetime value of those referred members
              versus the cost of the comp access provided.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  6. COMMUNITY-FIRST RETENTION                                 */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <Users className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Community-First Retention
          </h2>
          <p className="text-base text-soft-white text-center mb-10 max-w-3xl mx-auto">
            Australian gym culture is community-driven. Retain members through belonging, not just penalty.
          </p>
          <div className="glass-card p-8 mb-8">
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              In Australia, the gyms that thrive long-term are the ones that build genuine
              community. Members stay because they have friends at the gym, because they are
              participating in a challenge, because the leaderboard motivates them, because they
              feel like they belong. GymWyse is built around this reality. Our retention engine does
              not just flag at-risk members based on declining attendance — it measures community
              engagement and uses that data to intervene before members disengage.
            </p>
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              GymWyse supports member challenges — six-week transformation challenges, eight-week
              strength programs, body composition challenges — with built-in progress tracking,
              photo uploads, leaderboards, and automatic results calculation. These challenges are
              the single most effective retention tool in the Australian boutique fitness market,
              and GymWyse makes them easy to create, manage, and measure.
            </p>
            <p className="text-base text-cool-gray leading-relaxed">
              Beyond challenges, GymWyse provides social features in the member app including
              workout sharing, class buddy tagging, and event RSVPs. Referral tracking rewards
              members who bring friends, and community events management lets you organise social
              events, charity workouts, and member appreciation nights directly from the platform.
              The result is retention driven by belonging and engagement — not by lock-in contracts
              and cancellation penalties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "6-week and 8-week member challenges",
              "Transformation and body composition tracking",
              "Performance leaderboards",
              "Social features in the member app",
              "Referral tracking with reward automation",
              "Community events management",
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.05} className="glass-card p-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                  <span className="text-sm text-cool-gray">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  7. AUSTRALIAN FITNESS TRENDS                                  */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Australian Fitness Trends GymWyse Supports
          </h2>
          <p className="text-base text-soft-white text-center mb-12 max-w-3xl mx-auto">
            The Australian fitness landscape evolves fast. GymWyse evolves with it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "F45-Style HIIT & Functional Training",
                description:
                  "Australia is the birthplace of F45, and functional training remains the fastest-growing segment. GymWyse handles high-intensity, class-based scheduling with waitlists, heart rate zone tracking, and performance leaderboards that drive engagement and retention in this demanding format.",
              },
              {
                title: "Outdoor & Beach Fitness",
                description:
                  "Year-round outdoor training is a defining characteristic of Australian fitness culture. GymWyse's outdoor class management module with BOM weather integration, GPS check-in, and multi-venue scheduling lets operators professionalise outdoor programming without drowning in admin.",
              },
              {
                title: "Recovery Services",
                description:
                  "Cold plunge pools, infrared saunas, and float tanks are booming in Sydney and Melbourne. GymWyse's amenity booking module lets you schedule, manage capacity, and monetise recovery services alongside your core fitness programming — all from one platform.",
              },
              {
                title: "Hybrid Digital + In-Gym",
                description:
                  "Australian members increasingly expect both in-gym access and on-demand digital content. GymWyse supports hybrid memberships that combine physical attendance with digital class access, workout library streaming, and remote coaching — enabling operators to serve members wherever they are.",
              },
              {
                title: "Women-Only Spaces",
                description:
                  "Women-only gyms and dedicated women's training areas are growing rapidly across Australia. GymWyse supports gender-specific scheduling, dedicated space management, and marketing segmentation to help operators serve this important and underserved market segment.",
              },
              {
                title: "Indigenous Fitness & Surf Fitness",
                description:
                  "Indigenous fitness programs and surf fitness training are emerging segments with strong community roots. GymWyse's flexible class types and community management tools let operators build programming that reflects the diversity of Australian fitness culture, from surf-specific conditioning to culturally led movement programs.",
              },
            ].map((trend, i) => (
              <FadeIn key={i} delay={i * 0.08} className="glass-card p-8">
                <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">{trend.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed">{trend.description}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  8. COMPLETE GYM OPERATIONS                                   */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <Settings className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Complete Gym Operations — Localised for Australia
          </h2>
          <p className="text-base text-soft-white text-center mb-10 max-w-3xl mx-auto">
            Every tool you need to run your gym, built for the Australian market.
          </p>
          <div className="glass-card p-8">
            <p className="text-base text-cool-gray leading-relaxed mb-4">
              Beyond the Australia-specific features, GymWyse delivers a complete gym management
              platform. Membership management with flexible plan types, freezes, and transfers.
              Check-in via QR code, NFC, or barcode. Class scheduling with waitlists and auto-fill.
              Integrated billing and invoicing in AUD. Personal training session booking and
              package management. Staff rostering and payroll export. Revenue analytics and churn
              prediction powered by machine learning.
            </p>
            <p className="text-base text-cool-gray leading-relaxed">
              Everything is localised for the Australian market. GST is handled automatically with
              10% applied to all invoices and BAS-compatible exports available for your accountant.
              All invoicing is in AUD with ABN and GST registration details included. Support is
              available during AEST business hours from a team that understands BPAY, Direct Debit,
              Australian employment law, and the operational realities of running a gym in
              Australia. Native integrations with Xero AU and MYOB keep your accounting in sync.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  9. TESTIMONIAL: SOUTHERN CROSS PERFORMANCE                   */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Australian Gyms Using GymWyse
          </h2>
        </FadeIn>

        {/* Southern Cross */}
        <FadeIn className="max-w-4xl mx-auto mb-12">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-pure-white mb-1">
              Southern Cross Performance
            </h3>
            <p className="text-sm text-dim-gray mb-6">
              Bondi &amp; Surry Hills, Sydney — 2 locations, 340 members — CrossFit + functional
              fitness
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs text-alert-red uppercase tracking-wider font-medium">
                  Challenge
                </span>
                <p className="text-sm text-cool-gray mt-1 leading-relaxed">
                  Southern Cross Performance operated two locations — a warehouse gym in Surry Hills
                  and outdoor bootcamp sessions on Bondi Beach. They were previously using Zen
                  Planner, which had no outdoor session management, no way to track comp memberships
                  given to CrossFit competition winners, and no churn prediction. Weather
                  cancellations were handled via a WhatsApp group, members regularly showed up to
                  cancelled sessions, and attendance data for outdoor classes was unreliable because
                  there was no check-in mechanism for beach locations.
                </p>
              </div>
              <div>
                <span className="text-xs text-electric-green uppercase tracking-wider font-medium">
                  Solution
                </span>
                <p className="text-sm text-cool-gray mt-1 leading-relaxed">
                  GymWyse replaced Zen Planner across both locations. Outdoor class management with
                  BOM weather alerts and GPS check-in was deployed for Bondi sessions. Comp
                  membership tracking was set up for their ambassador and competition winner
                  programs. The churn prediction engine was trained on their historical data within
                  the first 30 days.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: "22%", label: "Reduction in churn" },
                { value: "$1,200/mo", label: "Recovered payments" },
                { value: "100%", label: "Automated outdoor notifications" },
                { value: "6 hrs/wk", label: "Admin time saved" },
              ].map((r, i) => (
                <div key={i} className="bg-deep-space/60 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-electric-green font-mono">{r.value}</div>
                  <div className="text-[10px] text-dim-gray mt-1">{r.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-electric-green pl-4">
              <p className="text-sm text-cool-gray italic leading-relaxed">
                &ldquo;We run CrossFit, functional fitness, and outdoor bootcamps across two
                locations. Our Bondi sessions were a nightmare to manage — weather cancellations
                went out via WhatsApp, members showed up to empty beaches, and we had zero data on
                outdoor attendance. GymWyse automated all of that. Weather alerts from BOM trigger
                automatic cancellations, members get push notifications with the backup venue, and
                GPS check-in means we finally have real attendance numbers. Churn dropped 22% in
                four months, and we are recovering $1,200 a month in payments that were just slipping
                through the cracks with our old system.&rdquo;
              </p>
              <p className="text-xs text-dim-gray mt-2">
                — Tom Bradley, Owner &amp; Head Coach, Southern Cross Performance
              </p>
            </blockquote>
          </div>
        </FadeIn>

        {/* ============================================================ */}
        {/*  10. TWO MORE TESTIMONIALS                                    */}
        {/* ============================================================ */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-lg font-semibold text-pure-white mb-1">The Training Shed</h3>
              <p className="text-xs text-dim-gray mb-4">
                Newtown, Melbourne — Functional fitness studio, 180 members
              </p>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                The Training Shed was losing A$3,200 per month to failed card payments. Members
                wanted BPAY but their previous software did not support it. After switching to
                GymWyse, they enabled BPAY and Direct Debit collections. Failed payments dropped
                from 7.8% to 2.9%, recovering over A$3,200 per month. Six hours per week of manual
                payment follow-up was eliminated, and member retention improved by 19% in the first
                quarter.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { value: "7.8% → 2.9%", label: "Failed payment rate" },
                  { value: "A$3,200/mo", label: "Revenue recovered" },
                ].map((r, i) => (
                  <div key={i} className="bg-deep-space/60 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-electric-green font-mono">{r.value}</div>
                    <div className="text-[10px] text-dim-gray">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-electric-green pl-4">
                <p className="text-sm text-cool-gray italic">
                  &ldquo;Our members kept asking for BPAY. Once we switched to GymWyse, failed
                  payments dropped almost overnight. We are recovering over three grand a month that
                  was just leaking away.&rdquo;
                </p>
                <p className="text-xs text-dim-gray mt-2">
                  — Megan Cross, Owner, The Training Shed
                </p>
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-lg font-semibold text-pure-white mb-1">Fortitude Fitness</h3>
              <p className="text-xs text-dim-gray mb-4">
                Fortitude Valley, Brisbane — Boutique HIIT studio, 260 members
              </p>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Fortitude Fitness runs 35 HIIT classes per week with a strong community challenge
                culture. Their previous platform had no challenge management, no leaderboards, and
                no way to track comp memberships for their influencer partners. After switching to
                GymWyse, they launched their first six-week challenge and saw a 31% increase in
                class attendance during the challenge period. Comp membership tracking revealed that
                their three influencer partners generated 24 paid sign-ups over six months —
                delivering clear ROI on the free access provided.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { value: "+31%", label: "Class attendance during challenges" },
                  { value: "24", label: "Paid sign-ups from comp members" },
                ].map((r, i) => (
                  <div key={i} className="bg-deep-space/60 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-electric-green font-mono">{r.value}</div>
                    <div className="text-[10px] text-dim-gray">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-electric-green pl-4">
                <p className="text-sm text-cool-gray italic">
                  &ldquo;The challenge feature alone was worth switching for. Our six-week
                  challenges now run themselves, and we can finally prove that our influencer comps
                  are generating real revenue.&rdquo;
                </p>
                <p className="text-xs text-dim-gray mt-2">
                  — Jake Morrison, Co-Founder, Fortitude Fitness
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  11. COMPARISON TABLE                                         */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
            GymWyse vs Mindbody AU
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left text-sm text-dim-gray py-4 pr-4">Feature</th>
                  <th className="text-center text-sm text-electric-green py-4 px-4 font-semibold">
                    GymWyse
                  </th>
                  <th className="text-center text-sm text-dim-gray py-4 pl-4">Mindbody AU</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/50">
                    <td className="text-sm text-cool-gray py-4 pr-4 font-medium">
                      {row.feature}
                    </td>
                    <td className="text-center text-sm text-electric-green py-4 px-4">
                      {row.gymwyse}
                    </td>
                    <td className="text-center text-sm text-dim-gray py-4 pl-4">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-pure-white mb-4">
              Why Australian gyms switch to GymWyse:
            </h3>
            <ol className="space-y-2">
              {[
                "Save AU$600+ per year on subscription fees — AU$50 per month less per location compared to Mindbody.",
                "Native BPAY support reduces failed payments by up to 60%, recovering thousands in lost monthly revenue that card-only platforms miss.",
                "Outdoor class automation with BOM weather alerts, GPS check-in, and multi-venue management saves 4+ hours per week of manual admin.",
              ].map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-electric-green font-bold text-sm shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-sm text-cool-gray">{reason}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  12. AU CITY COVERAGE                                         */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn>
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-7 h-7 text-electric-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            GymWyse Across Australia
          </h2>
          <p className="text-base text-soft-white text-center mb-12 max-w-3xl mx-auto">
            Local market expertise for every major Australian city.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <Link href={city.href} className="block">
                  <div className="glass-card p-6 hover:border-electric-green/30 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-pure-white mb-2">
                      Gym Software {city.name}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">{city.note}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-electric-green mt-3">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  13. FAQ                                                      */}
      {/* ============================================================ */}
      <Section bg="midnight">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="glass-card p-8">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  14. PRICING IN AUD                                           */}
      {/* ============================================================ */}
      <Section bg="deep-space">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
            Australian Pricing
          </h2>
          <p className="text-base text-soft-white text-center mb-12 max-w-2xl mx-auto">
            No setup fees. No lock-in contracts. 14-day free trial. Cancel anytime. All prices in
            AUD.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: "Starter",
                price: "AU$129",
                cycle: "per location / month",
                desc: "Single location",
                features: [
                  "Full gym management platform",
                  "BPAY integration included",
                  "Direct Debit support",
                  "Outdoor class management",
                  "GST-ready invoicing",
                  "Email support (AEST hours)",
                ],
                highlighted: false,
              },
              {
                tier: "Growth",
                price: "AU$99",
                cycle: "per location / month",
                desc: "2-5 locations",
                features: [
                  "Everything in Starter",
                  "Multi-location dashboard",
                  "Comp membership tracking",
                  "Community challenge tools",
                  "Priority support (AEST hours)",
                  "Custom branding",
                ],
                highlighted: true,
              },
              {
                tier: "Enterprise",
                price: "Custom",
                cycle: "tailored pricing",
                desc: "6+ locations",
                features: [
                  "Everything in Growth",
                  "Dedicated account manager",
                  "API access and custom integrations",
                  "Advanced analytics and reporting",
                  "SLA-backed uptime guarantee",
                  "On-site onboarding available",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`glass-card p-8 flex flex-col h-full ${plan.highlighted ? "border-electric-green/30 bg-electric-green/5" : ""}`}
                >
                  {plan.highlighted && (
                    <span className="inline-block self-start px-3 py-1 text-xs font-semibold text-deep-space bg-electric-green rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-pure-white mb-1">{plan.tier}</h3>
                  <p className="text-sm text-dim-gray mb-4">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pure-white">{plan.price}</span>
                    <span className="text-sm text-dim-gray ml-2">{plan.cycle}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <span className="text-sm text-cool-gray">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.tier === "Enterprise" ? "/demo" : "/pricing"}>
                    <Button
                      variant={plan.highlighted ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                    >
                      {plan.tier === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ============================================================ */}
      {/*  15. FINAL CTA                                                */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Grow Your Aussie Gym?
            </h2>
            <p className="text-lg text-soft-white mb-8 leading-relaxed">
              Join hundreds of Australian gyms — from Bondi to Brisbane, Melbourne to Perth — that
              switched to gym management software built for the Australian market. Native BPAY, AUD
              pricing, outdoor class management, and community-first retention tools. Start your
              14-day free trial today, or book a personalised demo to see GymWyse in action for your
              specific operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/demo">
                <Button variant="primary" size="xl">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="xl">
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "BPAY & Direct Debit included",
                "AUD pricing, no conversion fees",
                "Outdoor class management",
                "14-day free trial",
                "No setup fees",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-electric-green" />
                  <span className="text-xs text-dim-gray">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-dim-gray">
              <Link
                href="/pricing"
                className="hover:text-electric-green transition-colors"
              >
                View full pricing
              </Link>
              <Link
                href="/migration"
                className="hover:text-electric-green transition-colors"
              >
                Migration from other platforms
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
