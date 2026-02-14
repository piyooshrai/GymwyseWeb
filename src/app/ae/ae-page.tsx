"use client";

import { Languages, Banknote, Sparkles, Crown } from "lucide-react";
import { RegionalPageTemplate } from "@/components/regional-page-template";

export function AEPage() {
  return (
    <RegionalPageTemplate
      flag={"\u{1F1E6}\u{1F1EA}"}
      region="UAE & Middle East"
      tagline="Built for the Middle East. RTL Arabic support, AED pricing, and local data hosting."
      marketContext="The GCC fitness market is growing at 8.2% annually, fuelled by Vision 2030 initiatives across the region. The UAE alone has seen gym memberships surge from 450,000 to 680,000 in three years, with the premium segment growing at +15% year-over-year. Dubai and Abu Dhabi lead the region in luxury fitness concepts, where members expect world-class amenity management, multi-currency billing for a diverse expat population, and VIP tier experiences. GymWyse is built to serve this high-growth, high-expectation market."
      features={[
        {
          icon: Banknote,
          title: "Multi-Currency Billing",
          description:
            "Native support for AED, USD, EUR, and SAR with automatic conversion and transparent exchange rates for your diverse member base.",
          details: [
            "AED, USD, EUR, and SAR auto-conversion at daily interbank rates — no hidden markups",
            "Members choose their preferred billing currency at sign-up with seamless switching",
            "Consolidated revenue reporting in AED with per-currency breakdowns for reconciliation",
            "Stripe Connect integration supports local card networks and Apple Pay across GCC",
            "Automatic VAT (5%) calculation for UAE transactions with tax invoice generation",
          ],
        },
        {
          icon: Languages,
          title: "Arabic RTL Support",
          description:
            "Full right-to-left Arabic interface with culturally adapted UI. Serve your Arabic-speaking members natively.",
          details: [
            "Complete UI mirroring — navigation, forms, calendars, and reports all render RTL correctly",
            "Hijri and Gregorian date format support with automatic conversion where needed",
            "Full Arabic translation launching Q2 2026 — currently in beta with select UAE partners",
            "Bilingual member communications: emails, SMS, and push notifications in Arabic and English",
            "Arabic-first search and member name handling with proper diacritical mark support",
          ],
        },
        {
          icon: Sparkles,
          title: "Luxury Amenity Management",
          description:
            "Manage premium wellness amenities alongside traditional fitness offerings. Built for the UAE's luxury fitness market.",
          details: [
            "Cold plunge pool booking with temperature and duration tracking per session",
            "Infrared sauna suite management — time slots, capacity limits, and maintenance scheduling",
            "Cryotherapy session booking with waiver management and contraindication screening",
            "IV drip bar and wellness treatment booking integrated into the member app",
            "Amenity utilisation analytics showing revenue per square metre and peak demand patterns",
          ],
        },
        {
          icon: Crown,
          title: "VIP Tier Management",
          description:
            "Create unlimited membership tiers from Standard to Black Card with tier-specific access rules, pricing, and perks.",
          details: [
            "Unlimited custom tiers — Standard, Premium, VIP, Black Card, and any tier you define",
            "Tier-specific access rules: restrict amenities, classes, and time slots by membership level",
            "Automated tier upgrade/downgrade workflows with prorated billing adjustments",
            "VIP concierge features: priority booking windows, guest passes, and complimentary services",
            "Tier performance analytics showing revenue, retention, and upgrade conversion by level",
          ],
        },
      ]}
      testimonials={[
        {
          gym: "Pinnacle Performance",
          location: "Dubai — 4-location luxury fitness chain",
          challenge:
            "Pinnacle Performance was managing cold plunge, infrared sauna, and cryotherapy bookings manually across four luxury locations. Amenity utilisation sat at just 65%, and staff spent hours daily coordinating bookings by phone and WhatsApp.",
          solution:
            "GymWyse's amenity management module digitised all wellness bookings into the member app. Members book and manage sessions self-service, with automated capacity management and maintenance window scheduling.",
          results: [
            { metric: "Amenity revenue increase", value: "+AED 18K/mo" },
            { metric: "Utilisation improvement", value: "65% → 91%" },
            { metric: "Staff hours saved weekly", value: "32 hours" },
            { metric: "Member satisfaction (NPS)", value: "+18 points" },
          ],
          quote:
            "Our amenity revenue was leaving money on the table. GymWyse turned our cold plunge and sauna suites into profit centres overnight — bookings went from 65% to 91% utilisation without adding a single staff member.",
          author: "Ahmed Al-Rashid",
          role: "CEO, Pinnacle Performance",
        },
        {
          gym: "Elite Movement Center",
          location: "Abu Dhabi — premium boutique studio",
          challenge:
            "With 60% expat members billing in different currencies, Elite Movement Center was losing members to billing friction. AED-only invoicing confused USD and EUR earners, driving monthly churn to 4.2% — well above the regional average.",
          solution:
            "GymWyse's multi-currency billing let members choose their preferred currency at sign-up. Transparent interbank rates and automatic conversion eliminated billing complaints and simplified the sign-up process for expats.",
          results: [
            { metric: "Monthly churn reduction", value: "4.2% → 2.7%" },
            { metric: "Expat sign-up conversion", value: "+34%" },
            { metric: "Billing support tickets", value: "-68%" },
            { metric: "Revenue increase (monthly)", value: "+AED 12K" },
          ],
          quote:
            "Our members come from 40+ nationalities. Forcing everyone into AED billing was creating unnecessary friction. Multi-currency support resolved our biggest source of churn almost immediately.",
          author: "Fatima Hassan",
          role: "Operations Manager, Elite Movement Center",
        },
      ]}
      comparison={{
        competitor: "Glofox ME",
        rows: [
          {
            feature: "Monthly Pricing",
            gymwyse: "AED 365/location",
            competitor: "AED 485/location",
          },
          {
            feature: "Multi-Currency",
            gymwyse: "Native (AED/USD/EUR/SAR)",
            competitor: "AED only",
          },
          {
            feature: "Amenity Booking",
            gymwyse: "Native (included)",
            competitor: "Custom build required",
          },
          {
            feature: "Arabic Support",
            gymwyse: "RTL-ready (Q2 2026 full)",
            competitor: "Full Arabic",
          },
          {
            feature: "VIP Tiers",
            gymwyse: "Unlimited custom tiers",
            competitor: "5 tiers maximum",
          },
          {
            feature: "Scale",
            gymwyse: "Unlimited locations",
            competitor: "Unlimited locations",
          },
        ],
        switchReasons: [
          "Save AED 1,440/year per location on subscription costs (AED 120/month difference)",
          "Multi-currency billing unlocks the expat market — 60%+ of UAE gym members are expats billing in USD/EUR",
          "Native amenity booking adds +15% average revenue from cold plunge, sauna, and wellness services",
        ],
      }}
      trends={[
        {
          title: "Recovery as a Service",
          description:
            "Cold plunge demand in UAE fitness facilities is up +78% year-over-year, with infrared sauna and cryotherapy close behind. GymWyse's amenity management module lets operators add, schedule, and monetise recovery services as bookable add-ons — turning underutilised wellness spaces into high-margin revenue streams.",
        },
        {
          title: "Wearable Tech Integration",
          description:
            "UAE fitness consumers are early adopters of Apple Watch, WHOOP, and Garmin. GymWyse syncs with major wearable platforms to pull heart rate, recovery, and activity data into member profiles. Gyms using wearable integrations see +32% higher retention as members stay engaged through connected fitness experiences.",
        },
        {
          title: "Female-Only Facilities",
          description:
            "The expansion of female-only fitness facilities across the GCC — particularly in Saudi Arabia under Vision 2030 — represents one of the region's fastest-growing segments. GymWyse supports gender-specific scheduling, privacy-compliant class management, and separate reporting for operators running mixed and female-only locations.",
        },
      ]}
      faq={[
        {
          question: "Does GymWyse support AED, USD, and SAR billing?",
          answer:
            "Yes. GymWyse natively supports multi-currency billing in AED, USD, EUR, and SAR. Members choose their preferred billing currency at sign-up, and all conversions use daily interbank rates with no hidden markups. Your revenue reporting consolidates everything into AED with per-currency breakdowns.",
        },
        {
          question: "When is full Arabic translation launching?",
          answer:
            "Full Arabic RTL translation is launching in Q2 2026. The RTL interface framework is already live — all UI elements mirror correctly for Arabic readers. We are currently in beta with select UAE partners for the full Arabic language pack, including member-facing communications, class descriptions, and admin interface.",
        },
        {
          question: "Can GymWyse manage multiple GCC locations?",
          answer:
            "Absolutely. GymWyse supports unlimited locations across the GCC with a unified dashboard. Manage locations in Dubai, Abu Dhabi, Riyadh, Doha, and beyond from a single login. Each location can have its own currency, language preferences, and tier structure while rolling up to consolidated regional reporting.",
        },
        {
          question: "How does luxury amenity booking work?",
          answer:
            "GymWyse includes a dedicated amenity management module for cold plunge, infrared sauna, cryotherapy, IV drip bars, and any custom wellness service. Members book directly from the app with real-time availability. You set capacity, duration, pricing, and maintenance windows. Analytics show utilisation rates, revenue per session, and peak demand patterns.",
        },
        {
          question: "How do VIP tiers work in GymWyse?",
          answer:
            "You can create unlimited custom membership tiers — Standard, Premium, VIP, Black Card, or any custom tier. Each tier has its own access rules (which amenities, classes, and time slots members can book), pricing, and perks. Automated workflows handle tier upgrades and downgrades with prorated billing. VIP members can get priority booking windows and complimentary services.",
        },
        {
          question: "Does GymWyse integrate with Apple Watch and WHOOP?",
          answer:
            "Yes. GymWyse syncs with Apple Watch, WHOOP, Garmin, and other major wearable platforms via Apple Health and Google Health Connect. Member heart rate, recovery scores, and activity data flow into their GymWyse profile, giving trainers real-time insight and enabling automated workout recommendations based on readiness.",
        },
        {
          question: "What is GymWyse pricing for UAE gyms?",
          answer:
            "GymWyse starts at AED 365/location/month for the Starter plan, which includes the core platform, revenue analytics, Arabic RTL support, local payment methods, and email support. The Growth plan for 2-5 locations is AED 289/location/month with multi-location dashboards, priority support, and custom branding. No setup fees, monthly contracts, 14-day free trial.",
        },
      ]}
      pricing={[
        {
          tier: "Starter",
          price: "AED 365",
          billingCycle: "per location/month",
          features: [
            "Core platform",
            "Revenue Analytics",
            "Arabic RTL support",
            "Local payment methods",
            "Email support",
          ],
        },
        {
          tier: "Growth",
          price: "AED 289",
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
      cities="Dubai, Abu Dhabi, Riyadh, Doha, and across the Middle East"
    />
  );
}
