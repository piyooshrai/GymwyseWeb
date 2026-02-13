"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function ReduceChurnPage() {
  return (
    <SolutionsPageTemplate
      headline="Stop Losing Members"
      tagline="AI-powered churn prediction catches at-risk members 30 days before they cancel. Automated retention campaigns bring them back."
      problemSolutions={[
        {
          problem: "You find out members left after they're already gone",
          solution:
            "AI analyzes 40+ behavioral signals to identify at-risk members 30 days before cancellation. You get alerts while there's still time to act.",
          stats: [
            { label: "Early warning", value: "30 days" },
            { label: "Prediction accuracy", value: "87%" },
          ],
        },
        {
          problem: "Manual outreach doesn't scale",
          solution:
            "Automated re-engagement campaigns trigger based on risk score. Personalized offers, check-in messages, and win-back sequences.",
          stats: [
            { label: "Win-back rate", value: "42%" },
            { label: "Time saved/week", value: "8 hours" },
          ],
        },
        {
          problem: "You don't know what's causing churn",
          solution:
            "Churn analytics dashboard shows the top reasons members leave. Price sensitivity, class dissatisfaction, low usage - see it all.",
          stats: [
            { label: "Churn reduction", value: "32%" },
            { label: "Revenue saved/mo", value: "$3,600" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Churn Prediction",
          features: [
            "AI risk scoring for every member",
            "30-day advance warning",
            "Behavioral signal analysis",
            "Risk trend tracking",
            "Custom risk thresholds",
          ],
        },
        {
          title: "Automated Retention",
          features: [
            "Automated re-engagement campaigns",
            "Personalized win-back offers",
            "Check-in message sequences",
            "Milestone celebrations",
            "Inactivity alerts",
          ],
        },
        {
          title: "Churn Analytics",
          features: [
            "Churn reason categorization",
            "Cohort retention analysis",
            "Member lifetime value tracking",
            "Churn cost calculator",
            "Monthly retention reports",
          ],
        },
        {
          title: "Member Engagement",
          features: [
            "AI Avatar coaches",
            "Personalized workout suggestions",
            "Class recommendation engine",
            "Progress tracking & milestones",
            "Community engagement tools",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "Churn prevention is included in every GymWyse plan. No add-on fees.",
        addOns:
          "Average gym recovers $3,600/month in saved cancellations - a 36x return on the platform cost",
      }}
    />
  );
}
