"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function BoutiqueFitnessPage() {
  return (
    <SolutionsPageTemplate
      headline="Software for Boutique Fitness Studios"
      tagline="Whether you run yoga, pilates, barre, cycling, or HIIT classes, your studio deserves software that matches the premium experience you deliver. Manage bookings, track per-class profitability, and keep members engaged with a platform designed for boutique, not bolted onto a big-box gym tool."
      problemSolutions={[
        {
          problem: "Class no-shows are killing your revenue",
          solution:
            "Empty spots in a boutique class are not just lost revenue, they are a missed experience for members on your waitlist. GymWyse automated reminders via push notification, SMS, and email reduce no-shows by 40 percent while real-time waitlist backfill ensures cancelled spots are offered to the next member within seconds. Late cancellation and no-show fees are enforced automatically with configurable policies per class type, so your prime-time reformer pilates class and your casual Saturday flow can have different rules. Studios using GymWyse fill 85 percent of waitlisted spots, turning empty mats into paying members.",
          stats: [
            { label: "No-show reduction", value: "40%" },
            { label: "Waitlist fill rate", value: "85%" },
          ],
        },
        {
          problem: "You can't tell which classes are actually profitable",
          solution:
            "Running a full class feels great, but if instructor costs, room overhead, and equipment depreciation eat the revenue, that packed class may be losing money. GymWyse per-class profitability analysis factors in instructor pay rates, average revenue per attendee across memberships and class packs, and allocated studio costs to show true margin per session. With this data you can identify your most profitable time slots, optimize your schedule around high-margin classes, and make informed decisions about instructor compensation and pricing tiers.",
          stats: [
            { label: "Class visibility", value: "Real-time" },
            { label: "Revenue optimization", value: "+20%" },
          ],
        },
        {
          problem: "Members drift away after their first package expires",
          solution:
            "Boutique studios live and die by retention, and the most dangerous moment is when a new member finishes their intro package. GymWyse AI-powered engagement tracking monitors booking frequency, class variety, social interactions, and payment patterns to identify members who are losing momentum before they consciously decide to leave. Automated re-engagement sequences trigger at precisely the right moment with personalized class recommendations, limited-time renewal offers, or a simple check-in message from their favorite instructor. Studios see a 35 percent boost in retention within the first 90 days of activation.",
          stats: [
            { label: "Retention boost", value: "+35%" },
            { label: "Engagement increase", value: "40%" },
          ],
        },
        {
          problem: "Your brand looks generic because your software is generic",
          solution:
            "Your studio's aesthetic is part of the product. Cookie-cutter booking pages and clunky member portals undermine the premium experience you have built. GymWyse gives you a fully branded member app and booking experience that matches your studio's visual identity, from color palette and typography to custom imagery and instructor bios. The booking flow feels like an extension of your studio rather than a third-party tool, and members can browse schedules, purchase packages, and check in from a single branded interface. First impressions matter, and your digital presence should be as polished as your physical space.",
          stats: [
            { label: "Brand consistency", value: "100%" },
            { label: "Booking conversion", value: "+28%" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Class Management",
          features: [
            "Smart class scheduling with recurring series, substitutions, and one-off workshops in a single calendar view",
            "Real-time waitlist management with automatic backfill when cancellations open a spot",
            "Instructor assignment with per-class pay tracking, revenue share calculations, and pay-period summaries",
            "Class capacity optimization with historical attendance data to right-size your room and schedule",
            "Flexible package and series management supporting class packs, unlimited memberships, drop-ins, and intro offers",
            "Late cancellation and no-show fee enforcement with configurable policies per class type and membership tier",
          ],
        },
        {
          title: "Member Engagement",
          features: [
            "Branded AI Avatar mobile app customized to your studio's look, feel, and voice",
            "One-tap class booking with push notification reminders, calendar sync, and Apple Wallet passes",
            "Personal progress tracking with workout history, attendance streaks, and milestone celebrations",
            "Community features including class shout-outs, challenge leaderboards, and instructor spotlights",
            "Automated milestone rewards like free classes or merchandise discounts at visit count thresholds",
            "New member onboarding sequences with welcome messages, class recommendations, and goal setting prompts",
          ],
        },
        {
          title: "Revenue & Finance",
          features: [
            "Package and membership revenue tracking with real-time MRR, deferred revenue recognition, and expiration alerts",
            "Per-class profitability reports factoring instructor costs, room allocation, and average attendee revenue",
            "Automated payment collection with support for class packs, recurring memberships, and drop-in purchases",
            "Smart failed payment recovery with adaptive retry timing and frictionless card-update flows for members",
            "Revenue forecasting based on current bookings, package expirations, and seasonal trends",
            "Instructor compensation reports with per-session pay, revenue share tracking, and exportable pay stubs",
          ],
        },
        {
          title: "Studio Operations",
          features: [
            "Integrated retail and merchandise POS for branded apparel, mats, props, and grab-and-go smoothies",
            "Digital waivers and contracts with e-signature, auto-renewal terms, and secure cloud storage",
            "Instructor management with availability calendars, sub requests, certification tracking, and bio pages",
            "Studio utilization reports showing peak hours, underperforming time slots, and room usage by class type",
            "Email and SMS marketing automation with audience segmentation by class preference, visit frequency, and spend level",
            "Lead capture and trial management with automated follow-up sequences to convert first-timers into regulars",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "$99/month. Built for studios of all sizes from a single-room yoga space to a multi-room boutique brand. No setup fees, no long-term contracts.",
        addOns:
          "Add Advanced Class Management (+$49/mo) for deep waitlist analytics, instructor performance scoring, and multi-room booking automation.",
      }}
    />
  );
}
