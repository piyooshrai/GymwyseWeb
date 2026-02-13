"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function IndependentGymsPage() {
  return (
    <SolutionsPageTemplate
      headline="Gym Software for Independent Owners"
      tagline="You don't need enterprise software. You need tools that make you money without enterprise complexity or enterprise pricing."
      problemSolutions={[
        {
          problem: "You're losing members and don't know why",
          solution:
            "AI churn prediction catches at-risk members 30 days before they cancel. Automated re-engagement campaigns win them back.",
          stats: [
            { label: "Avg churn reduction", value: "32%" },
            { label: "Members saved/month", value: "18" },
          ],
        },
        {
          problem: "Failed payments are costing you thousands",
          solution:
            "Automated payment recovery gets you paid without awkward conversations. Smart retry logic and automated follow-ups.",
          stats: [
            { label: "Recovery rate", value: "40%" },
            { label: "Avg recovered/month", value: "$2,100" },
          ],
        },
        {
          problem: "You have no idea which services make money",
          solution:
            "Revenue breakdown by stream shows your most profitable offerings. Real-time P&L so you can make smart decisions today.",
          stats: [
            { label: "Margin visibility", value: "Real-time" },
            { label: "Profit optimization", value: "+15%" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Revenue & Finance",
          features: [
            "Real-time MRR tracking",
            "Churn prediction & prevention",
            "Failed payment recovery",
            "Revenue stream breakdown",
            "Profit margin analysis",
          ],
        },
        {
          title: "Member Experience",
          features: [
            "AI Avatar mobile app",
            "Booking & scheduling",
            "Digital contracts",
            "Automated communications",
            "Member portal",
          ],
        },
        {
          title: "Operations",
          features: [
            "Class management",
            "Trainer scheduling",
            "Equipment tracking (QR codes)",
            "Retail & POS",
            "Maintenance logs",
          ],
        },
        {
          title: "Growth Tools",
          features: [
            "Lead capture forms",
            "Trial management",
            "Referral tracking",
            "Marketing automation",
            "Member retention campaigns",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "$99/month. No setup fees. No contracts. Cancel anytime.",
        addOns:
          "Add modules as you grow: Retail POS (+$49), Equipment (+$39), Trainer Hub (+$59)",
      }}
    />
  );
}
