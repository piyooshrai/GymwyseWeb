"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function BoutiqueFitnessPage() {
  return (
    <SolutionsPageTemplate
      headline="Software for Boutique Fitness Studios"
      tagline="Whether you run yoga, pilates, barre, or cycling classes - manage bookings, track revenue, and keep members engaged with one platform."
      problemSolutions={[
        {
          problem: "Class no-shows are killing your revenue",
          solution:
            "Automated reminders, waitlists, and late cancellation fees reduce no-shows by 40%. Fill every spot in every class.",
          stats: [
            { label: "No-show reduction", value: "40%" },
            { label: "Waitlist fill rate", value: "85%" },
          ],
        },
        {
          problem: "You can't tell which classes are profitable",
          solution:
            "Per-class profitability analysis shows instructor costs vs revenue. Know exactly which time slots and classes make money.",
          stats: [
            { label: "Class visibility", value: "Real-time" },
            { label: "Revenue optimization", value: "+20%" },
          ],
        },
        {
          problem: "Members drift away after their first package",
          solution:
            "AI-powered engagement tracking identifies members losing interest. Automated re-engagement before they leave.",
          stats: [
            { label: "Retention boost", value: "+35%" },
            { label: "Engagement increase", value: "40%" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Class Management",
          features: [
            "Smart class scheduling",
            "Waitlist management",
            "Instructor assignment & pay tracking",
            "Class capacity optimization",
            "Series & package management",
          ],
        },
        {
          title: "Member Engagement",
          features: [
            "AI Avatar mobile app",
            "Class booking & reminders",
            "Progress tracking",
            "Community features",
            "Automated milestone rewards",
          ],
        },
        {
          title: "Revenue & Finance",
          features: [
            "Package & membership tracking",
            "Per-class profitability",
            "Automated payment collection",
            "Failed payment recovery",
            "Revenue forecasting",
          ],
        },
        {
          title: "Studio Operations",
          features: [
            "Retail & merchandise POS",
            "Digital waivers & contracts",
            "Instructor management",
            "Studio utilization reports",
            "Marketing automation",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "$99/month. Built for studios of all sizes. No setup fees.",
        addOns:
          "Add Advanced Class Management (+$49/mo) for waitlists, instructor analytics, and booking automation",
      }}
    />
  );
}
