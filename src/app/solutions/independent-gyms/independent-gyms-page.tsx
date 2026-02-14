"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function IndependentGymsPage() {
  return (
    <SolutionsPageTemplate
      headline="Gym Software for Independent Owners"
      tagline="You don't need enterprise software designed for 500-location chains. You need right-sized tools that drive revenue, cut churn, and run your single-location gym without the bloat, the complexity, or the enterprise price tag."
      problemSolutions={[
        {
          problem: "You're losing members and don't know why",
          solution:
            "AI churn prediction analyzes visit frequency, booking patterns, payment history, and engagement signals to flag at-risk members 30 days before they cancel. Once flagged, automated re-engagement campaigns trigger personalized outreach including check-in messages, special offers, and class recommendations tailored to each member's interests. Independent gym owners typically save 18 members per month, turning a silent exodus into a manageable retention workflow.",
          stats: [
            { label: "Avg churn reduction", value: "32%" },
            { label: "Members saved/month", value: "18" },
          ],
        },
        {
          problem: "Failed payments are costing you thousands",
          solution:
            "Every failed payment is revenue walking out the door. GymWyse automated payment recovery uses smart retry logic that learns the best day and time to reattempt charges for each member, boosting recovery rates without a single awkward conversation. When retries alone are not enough, automated follow-up sequences nudge members to update their card on file through a frictionless mobile flow. The average independent gym recovers over $2,100 per month in payments that would have otherwise been written off.",
          stats: [
            { label: "Recovery rate", value: "40%" },
            { label: "Avg recovered/month", value: "$2,100" },
          ],
        },
        {
          problem: "You have no idea which services actually make money",
          solution:
            "Most independent gym owners know their top-line revenue but have no visibility into which services contribute margin and which are quietly losing money. GymWyse breaks down revenue and costs by stream, including memberships, personal training, group classes, retail, and day passes, giving you a real-time P&L for every offering. With per-service profitability data at your fingertips, you can double down on what works, reprice what does not, and stop subsidizing unprofitable programs.",
          stats: [
            { label: "Margin visibility", value: "Real-time" },
            { label: "Profit optimization", value: "+15%" },
          ],
        },
        {
          problem: "Enterprise software is draining your budget and your patience",
          solution:
            "Platforms like Mindbody and ABC Fitness were built for large chains, and their pricing, complexity, and feature bloat reflect it. Independent owners end up paying for modules they never use, navigating dashboards designed for regional managers, and waiting on hold for support teams that prioritize enterprise clients. GymWyse is purpose-built for single-location gyms: every feature earns its place, the interface is clean enough to learn in an afternoon, and support actually picks up the phone. At $99 per month with no contracts, you keep more of what you earn.",
          stats: [
            { label: "Setup time", value: "< 1 day" },
            { label: "vs enterprise tools", value: "-60% cost" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Revenue & Finance",
          features: [
            "Real-time MRR dashboard tracking all recurring and one-time revenue in a single view",
            "AI-driven churn prediction with automated retention campaigns and win-back sequences",
            "Smart failed payment recovery with adaptive retry timing and member self-service card updates",
            "Revenue stream breakdown across memberships, personal training, classes, retail, and ancillary income",
            "Profit margin analysis per service line so you know exactly what earns and what drains",
            "Monthly financial summaries with tax-ready exports you can hand directly to your accountant",
          ],
        },
        {
          title: "Member Experience",
          features: [
            "Branded AI Avatar mobile app that lets members book classes, track workouts, and manage their account",
            "Frictionless online booking and scheduling with automated reminders to reduce no-shows",
            "Digital contracts and waivers with e-signature so new members can join from their phone in minutes",
            "Automated communications for birthdays, milestones, renewal reminders, and re-engagement nudges",
            "Self-service member portal for payment updates, freeze requests, and plan changes without calling the front desk",
            "Progress tracking and workout logging that keeps members engaged between visits",
          ],
        },
        {
          title: "Operations",
          features: [
            "Drag-and-drop class management with capacity limits, waitlists, and instructor assignment",
            "Trainer scheduling with availability management, session tracking, and pay-period summaries",
            "QR code equipment tracking for maintenance logs, usage data, and warranty management",
            "Integrated retail and POS for supplements, merchandise, and grab-and-go items at the front desk",
            "Facility maintenance logging with automated reminders for recurring tasks like equipment servicing",
            "Staff role management with permissions so front desk, trainers, and managers see only what they need",
          ],
        },
        {
          title: "Growth Tools",
          features: [
            "Embeddable lead capture forms for your website, social media, and landing pages",
            "Trial and guest pass management with automated follow-up sequences to convert visitors into members",
            "Referral tracking with incentive management so your best members become your best salespeople",
            "Email and SMS marketing automation with segmentation by membership type, visit frequency, and engagement level",
            "Member retention campaigns triggered by behavioral signals like declining visits or approaching contract end",
            "Performance reports that show which acquisition channels, promotions, and campaigns drive the highest lifetime value members",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "$99/month. No setup fees. No contracts. Cancel anytime. Every feature is included from day one so you never have to guess which tier you need.",
        addOns:
          "Add modules as you grow: Retail POS (+$49), Equipment Tracking (+$39), Trainer Hub (+$59). Only pay for what you actually use.",
      }}
    />
  );
}
