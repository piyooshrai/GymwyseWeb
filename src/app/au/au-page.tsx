"use client";

import { Banknote, Globe, Sun, Users } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function AUPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1E6}\u{1F1FA}"}
      region="Australia"
      tagline="Built for Australian gyms. BPAY & Direct Debit, AUD pricing, and AEST support."
      marketContext="The Australian fitness industry is worth A$3.2 billion, with over 6,800 facilities serving one of the highest per-capita gym membership rates globally. Australia's unique outdoor culture — from Bondi bootcamps to park-based PT sessions — demands software that goes beyond four walls. Community-driven retention, BPAY payment support, and weather-aware scheduling are not nice-to-haves; they are essentials for Australian operators. GymWyse is built for this market."
      features={[
        {
          icon: Banknote,
          title: "BPAY & Direct Debit",
          description:
            "Collect payments via BPAY and Direct Debit with Stripe AU integration. Local payment methods your members already trust.",
          details: [
            "Native Stripe AU integration for BPAY and Direct Debit — no third-party add-ons needed",
            "Automatic retry logic on failed Direct Debits with configurable retry intervals",
            "BPAY biller code setup included — members pay via their bank's BPAY system effortlessly",
            "Lower transaction fees than card-based billing — save on every recurring collection",
            "Real-time payment reconciliation dashboard with BPAY reference matching and DD status tracking",
          ],
        },
        {
          icon: Globe,
          title: "AUD Pricing",
          description:
            "All pricing in Australian Dollars. No hidden currency conversion fees, no USD surprises on your bank statement.",
          details: [
            "All-in AUD pricing — subscription, member billing, and reporting are all in Australian Dollars",
            "No currency conversion fees or exchange rate fluctuations on your monthly bill",
            "GST-ready invoicing with automatic 10% GST calculation and BAS-compatible exports",
            "Native Xero AU and MYOB integration for seamless Australian accounting workflows",
            "Multi-location financial reporting consolidated in AUD with per-site breakdowns",
          ],
        },
        {
          icon: Sun,
          title: "Outdoor Class Management",
          description:
            "Purpose-built tools for Australia's outdoor fitness culture. Manage beach bootcamps, park sessions, and hybrid indoor/outdoor programming.",
          details: [
            "Weather-based auto-cancellation with BOM integration — rain alerts trigger backup venue notifications",
            "GPS check-in for outdoor sessions — members check in when they arrive at the park or beach location",
            "Beach, park, and outdoor venue management with permit tracking and council compliance notes",
            "Hybrid indoor/outdoor class scheduling with automatic venue switching based on conditions",
            "Outdoor session attendance analytics showing weather impact, location preferences, and seasonal trends",
          ],
        },
        {
          icon: Users,
          title: "Community-First Retention",
          description:
            "Built for Australia's community-driven fitness culture. Track comp memberships, mate rates, and referral programs that Australian gyms rely on.",
          details: [
            "Comp membership tracking — common in AU CrossFit and boutique studios — with full audit trails",
            "Mate-rate management: create discounted tiers for referrals with automatic expiry and renewal",
            "Referral program builder with reward tracking, leaderboards, and automated member notifications",
            "Community engagement scoring based on attendance, social interactions, and event participation",
            "Churn prediction that factors in community engagement — isolated members flagged before they cancel",
          ],
        },
      ]}
      testimonials={[
        {
          gym: "Southern Cross Performance",
          location: "Bondi Junction, Sydney — 2 locations",
          challenge:
            "Southern Cross ran outdoor bootcamp sessions on Bondi Beach and in Centennial Park, but had no way to manage weather cancellations, outdoor check-ins, or track attendance across indoor and outdoor sessions. Members regularly showed up to cancelled sessions, and attendance data was unreliable.",
          solution:
            "GymWyse's outdoor class management module introduced weather-based auto-cancellation with BOM alerts, GPS check-in for beach and park locations, and unified attendance tracking across all session types.",
          results: [
            { metric: "Attendance increase", value: "+28%" },
            { metric: "No-show reduction", value: "-41%" },
            { metric: "Member satisfaction (NPS)", value: "+22 points" },
            { metric: "Admin hours saved weekly", value: "8 hours" },
          ],
          quote:
            "Our Bondi bootcamps are the heart of our business, but managing outdoor sessions was chaos. GymWyse gave us weather alerts, GPS check-in, and real attendance data for the first time. Attendance jumped 28% because members finally trust the schedule.",
          author: "Tom Bradley",
          role: "Head Coach, Southern Cross Performance",
        },
        {
          gym: "The Training Shed",
          location: "Newtown, Melbourne — functional fitness studio",
          challenge:
            "The Training Shed was losing A$3,200 per month to failed card payments. Members preferred BPAY but the previous software didn't support it. The 7.8% payment failure rate was driving involuntary churn and creating hours of manual follow-up each week.",
          solution:
            "GymWyse's Stripe AU integration enabled BPAY and Direct Debit collections. Members migrated to their preferred payment method, and automatic retry logic caught the remaining failures.",
          results: [
            { metric: "Failed payment reduction", value: "7.8% → 2.9%" },
            { metric: "Monthly revenue recovered", value: "A$3,200" },
            { metric: "Manual follow-up eliminated", value: "6 hrs/week" },
            { metric: "Member retention improvement", value: "+19%" },
          ],
          quote:
            "Our members kept asking for BPAY and we couldn't offer it. Once we switched to GymWyse, failed payments dropped from 7.8% to 2.9% almost overnight. We're recovering over three grand a month that was just leaking away.",
          author: "Megan Cross",
          role: "Owner, The Training Shed",
        },
      ]}
      comparison={{
        competitor: "Mindbody AU",
        rows: [
          {
            feature: "Monthly Pricing",
            gymwyse: "A$129/location",
            competitor: "A$179/location",
          },
          {
            feature: "BPAY Support",
            gymwyse: "Native (included)",
            competitor: "Not supported",
          },
          {
            feature: "Direct Debit",
            gymwyse: "Native (included)",
            competitor: "Add-on required",
          },
          {
            feature: "Outdoor Classes",
            gymwyse: "Weather alerts + GPS check-in",
            competitor: "Manual management only",
          },
          {
            feature: "AUD Pricing",
            gymwyse: "Native AUD",
            competitor: "USD converted to AUD",
          },
          {
            feature: "Setup Fee",
            gymwyse: "A$0",
            competitor: "A$500+",
          },
        ],
        switchReasons: [
          "Save A$600/year on subscription fees (A$50/month difference per location)",
          "BPAY support reduces failed payments by up to 60% — recovering thousands in lost monthly revenue",
          "Outdoor class automation (weather alerts, GPS check-in, venue management) saves 4+ hours per week of manual admin",
        ],
      }}
      trends={[
        {
          title: "Outdoor & Beach Fitness",
          description:
            "Year-round outdoor training is a defining feature of Australian fitness culture, from Bondi bootcamps to Brisbane park sessions. GymWyse's outdoor class management — with weather integration, GPS check-in, and venue tracking — lets operators run professional outdoor programming without the admin overhead that traditionally comes with it.",
        },
        {
          title: "F45 & Functional Training Growth",
          description:
            "Australia is the birthplace of F45, and functional training continues to be the fastest-growing franchise model in the country. GymWyse supports the high-intensity, class-based scheduling that functional training studios demand — including waitlists, heart rate zone tracking, and performance leaderboards that drive member engagement.",
        },
        {
          title: "Recovery & Wellness Integration",
          description:
            "Float tanks, infrared saunas, and ice baths are becoming standard amenities in Australian fitness facilities, not premium add-ons. GymWyse's amenity booking module lets operators schedule, manage capacity, and monetise recovery services alongside traditional fitness programming — all from one platform.",
        },
      ]}
      faq={[
        {
          question: "How does BPAY work with GymWyse?",
          answer:
            "GymWyse sets up a BPAY biller code for your gym. Members pay their memberships through their bank's BPAY system using your biller code and their unique reference number. Payments are automatically matched and reconciled in your GymWyse dashboard. BPAY is familiar to Australian members and has significantly lower failure rates than card-based billing.",
        },
        {
          question: "Does GymWyse support Australian Direct Debit?",
          answer:
            "Yes. GymWyse integrates with Stripe AU for native Direct Debit support. Members authorise a Direct Debit agreement at sign-up, and collections are automated on your chosen schedule. Automatic retry logic handles failed payments, and you get real-time status tracking in your dashboard. No third-party add-ons or extra fees.",
        },
        {
          question: "Is all pricing in AUD?",
          answer:
            "Absolutely. All GymWyse pricing for Australian customers is in Australian Dollars — your subscription, member billing, invoices, receipts, and all financial reporting. There are no hidden currency conversion fees or USD-denominated charges. What you see is what you pay.",
        },
        {
          question: "How do outdoor classes work in GymWyse?",
          answer:
            "GymWyse includes purpose-built outdoor class management. You set up outdoor venues (beaches, parks, outdoor courts) with GPS coordinates. Members check in via GPS when they arrive. Weather integration with BOM triggers automatic cancellation alerts and backup venue notifications when conditions deteriorate. You get full attendance analytics across indoor and outdoor sessions.",
        },
        {
          question: "Can GymWyse track comp memberships and mate rates?",
          answer:
            "Yes. Comp memberships and mate rates are common in Australian CrossFit and boutique fitness. GymWyse tracks comp memberships with full audit trails so you always know the financial impact. Mate-rate tiers let you create discounted memberships for referrals with automatic expiry, renewal, and reporting on referral program performance.",
        },
        {
          question: "Does GymWyse support multiple Australian locations?",
          answer:
            "Yes. Our Growth plan supports 2-5 locations at A$99/location/month with a unified dashboard showing revenue, attendance, and churn across all sites. Each location can have its own class schedule, outdoor venues, and pricing tiers while rolling up to consolidated reporting. For 6+ locations, contact us for Enterprise pricing.",
        },
        {
          question: "How do I migrate from Mindbody to GymWyse?",
          answer:
            "We provide a dedicated migration team for Australian gyms. We export your member data, payment methods, class schedules, and historical records from Mindbody. Most single-location migrations complete within 48 hours, and multi-location migrations within 5 business days. We run both systems in parallel during the transition to ensure zero payment disruption.",
        },
      ]}
      pricing={[
        {
          tier: "Starter",
          price: "A$129",
          billingCycle: "per location/month",
          features: [
            "Core platform",
            "Revenue Analytics",
            "BPAY integration",
            "Direct Debit support",
            "Email support",
          ],
        },
        {
          tier: "Growth",
          price: "A$99",
          billingCycle: "per location/month",
          description: "2-5 locations",
          features: [
            "Everything in Starter",
            "Multi-location dashboard",
            "Priority support",
            "Custom branding",
          ],
          highlighted: true,
        },
      ]}
      cities="Sydney, Melbourne, Brisbane, Perth, and across Australia"
    />
  );
}
