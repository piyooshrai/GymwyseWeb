"use client";

import { SolutionsPageTemplate } from "@/components/solutions-page-template";

export function ReduceChurnPage() {
  return (
    <SolutionsPageTemplate
      headline="Stop Losing Members"
      tagline="AI-powered churn prediction catches at-risk members 30 days before they cancel. Automated retention campaigns bring them back. The average gym using GymWyse saves $3,600 per month in prevented cancellations, turning your biggest revenue leak into a solved problem."
      problemSolutions={[
        {
          problem: "You find out members left after they're already gone",
          solution:
            "By the time a cancellation request hits your inbox, the member mentally checked out weeks ago. GymWyse AI analyzes over 40 behavioral signals, including visit frequency decline, booking pattern changes, payment delays, app disengagement, and class attendance drops, to generate a risk score for every active member. Members flagged as high-risk trigger alerts 30 days before their likely cancellation date, giving your team a meaningful intervention window. With 87 percent prediction accuracy, you can focus your retention energy on the members who actually need it instead of blasting generic emails to your entire list.",
          stats: [
            { label: "Early warning", value: "30 days" },
            { label: "Prediction accuracy", value: "87%" },
          ],
        },
        {
          problem: "Manual outreach doesn't scale and staff forget to follow up",
          solution:
            "Asking front desk staff to personally call every at-risk member is a plan that works for the first week and falls apart by the second. GymWyse automated retention campaigns trigger based on each member's risk score and behavior profile, delivering the right message at the right time without relying on human memory. Win-back sequences include personalized check-in messages, tailored class recommendations, limited-time offers, and escalation to a personal call when automated touchpoints do not re-engage. Gyms using automated retention recover 42 percent of at-risk members and save over 8 hours of staff time per week that would have been spent on manual outreach.",
          stats: [
            { label: "Win-back rate", value: "42%" },
            { label: "Time saved/week", value: "8 hours" },
          ],
        },
        {
          problem: "You don't know what's actually causing members to leave",
          solution:
            "Reducing churn starts with understanding why it happens, and most gym owners are guessing. GymWyse churn analytics dashboard categorizes cancellation reasons into actionable buckets: price sensitivity, class schedule dissatisfaction, low usage or disengagement, life changes, facility complaints, and competitive losses. Each category shows volume trends over time so you can spot systemic issues early. If churn spikes among evening class members after a schedule change, you will see it within days rather than months. Gyms that use churn reason analytics reduce overall churn by 32 percent within six months because they fix root causes instead of treating symptoms.",
          stats: [
            { label: "Churn reduction", value: "32%" },
            { label: "Revenue saved/mo", value: "$3,600" },
          ],
        },
        {
          problem: "You have no way to measure member health before it's too late",
          solution:
            "Churn is the final symptom of declining engagement, but most gyms have no way to measure engagement health across their membership base. GymWyse engagement scoring assigns every member a real-time health score based on visit consistency, class diversity, social participation, app usage, and spending patterns. The member health dashboard lets you filter your entire roster by engagement tier so you can see exactly how many members are thriving, coasting, or at risk at any given moment. Trend lines show whether your overall membership health is improving or deteriorating month over month, giving you a leading indicator that is far more useful than lagging churn numbers. Gyms that monitor engagement scores catch declining trends an average of 60 days before they show up in cancellation data.",
          stats: [
            { label: "Leading indicator", value: "60 days" },
            { label: "Engagement visibility", value: "Real-time" },
          ],
        },
      ]}
      featureGroups={[
        {
          title: "Churn Prediction",
          features: [
            "AI risk scoring for every active member updated daily based on 40+ behavioral signals",
            "30-day advance warning alerts delivered to staff dashboards, email, and mobile push notifications",
            "Behavioral signal analysis showing which specific factors are driving each member's risk score",
            "Risk trend tracking with historical graphs so you can see if a member's trajectory is improving or worsening",
            "Custom risk thresholds that let you define what constitutes low, medium, and high risk for your gym",
            "Cohort risk analysis showing churn probability by membership type, join date, age group, and location",
          ],
        },
        {
          title: "Automated Retention",
          features: [
            "Multi-step re-engagement campaigns that trigger automatically when a member's risk score crosses your threshold",
            "Personalized win-back offers with dynamic content based on each member's usage history and preferences",
            "Check-in message sequences from staff or trainers that feel personal even though they are automated at scale",
            "Milestone celebrations for visit count achievements, membership anniversaries, and fitness goal completions",
            "Inactivity alerts with configurable triggers such as 7 days, 14 days, or custom periods without a visit",
            "Escalation workflows that route high-risk members to a manager or retention specialist when automation is not enough",
          ],
        },
        {
          title: "Churn Analytics",
          features: [
            "Churn reason categorization with both self-reported cancellation reasons and AI-inferred behavioral causes",
            "Cohort retention analysis showing how different member segments retain over 30, 60, 90, and 365 day windows",
            "Member lifetime value tracking with projections based on current engagement and historical patterns for similar members",
            "Churn cost calculator quantifying the monthly and annual revenue impact of your current cancellation rate",
            "Monthly retention reports with executive summary, trend analysis, and actionable recommendations delivered to your inbox",
            "Cancellation flow optimization with customizable save offers, pause options, and feedback collection at the point of exit",
          ],
        },
        {
          title: "Member Engagement",
          features: [
            "AI Avatar coaches that provide personalized workout suggestions and encouragement through the member app",
            "Smart class recommendation engine that suggests classes based on a member's history, preferences, and schedule",
            "Progress tracking with visual milestones, streak counters, and personal records that keep members motivated",
            "Community engagement tools including challenge boards, social feeds, and group goal participation",
            "Engagement scoring dashboard with real-time health grades for every member and portfolio-level trend analysis",
            "New member onboarding automation with guided first-30-day sequences proven to increase long-term retention by 25 percent",
          ],
        },
      ]}
      pricing={{
        price: "$99/mo",
        description:
          "Churn prevention is included in every GymWyse plan at no extra cost. No add-on fees, no premium tier required. Every gym gets the full retention toolkit from day one.",
        addOns:
          "Average gym recovers $3,600/month in saved cancellations, a 36x return on the $99 platform cost. Most gyms see measurable churn reduction within the first 30 days.",
      }}
    />
  );
}
