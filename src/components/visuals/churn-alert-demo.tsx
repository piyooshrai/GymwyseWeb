"use client";

import { motion } from "framer-motion";

interface ChurnMember {
  name: string;
  risk: "High" | "Medium";
  lastVisit: string;
  reason: string;
}

const atRiskMembers: ChurnMember[] = [
  {
    name: "Member #1247",
    risk: "High",
    lastVisit: "14 days ago",
    reason: "Declining attendance",
  },
  {
    name: "Member #3891",
    risk: "Medium",
    lastVisit: "8 days ago",
    reason: "Missed 2 payments",
  },
  {
    name: "Member #5623",
    risk: "High",
    lastVisit: "21 days ago",
    reason: "No class bookings",
  },
];

export function ChurnAlertDemo() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-pure-white">
          Churn Risk Alerts
        </h3>
        <div className="px-3 py-1 rounded-full bg-alert-red/20 text-alert-red text-sm">
          3 at risk
        </div>
      </div>

      <div className="space-y-3">
        {atRiskMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="glass-card p-4 border border-alert-red/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-pure-white font-medium">
                {member.name}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-xs ${
                  member.risk === "High"
                    ? "bg-alert-red/20 text-alert-red"
                    : "bg-sunset-orange/20 text-sunset-orange"
                }`}
              >
                {member.risk} Risk
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-cool-gray">
              <span>Last visit: {member.lastVisit}</span>
              <span>&bull;</span>
              <span>{member.reason}</span>
            </div>
            <div className="mt-2 text-xs text-electric-green">
              Send win-back campaign &rarr;
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
