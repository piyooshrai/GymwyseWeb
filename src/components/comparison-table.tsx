"use client";

import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  gymwyse: string | boolean;
  mindbody: string | boolean;
  zenplanner: string | boolean;
  glofox: string | boolean;
}

interface ComparisonTableProps {
  features: Feature[];
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-electric-green mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-alert-red mx-auto" />;
  }
  if (value === "Limited") {
    return (
      <span className="flex items-center justify-center gap-1 text-sm text-sunset-orange">
        <Minus className="w-4 h-4" /> Limited
      </span>
    );
  }
  return <span className="text-sm text-cool-gray">{value}</span>;
}

export function ComparisonTable({ features }: ComparisonTableProps) {
  const competitors = ["GymWyse", "Mindbody", "Zen Planner", "Glofox"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-glass-border">
            <th className="text-left py-4 px-4 text-sm font-medium text-dim-gray">
              Feature
            </th>
            {competitors.map((name) => (
              <th
                key={name}
                className={cn(
                  "py-4 px-4 text-sm font-medium text-center",
                  name === "GymWyse" ? "text-electric-green" : "text-cool-gray"
                )}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr
              key={i}
              className="border-b border-glass-border/50 hover:bg-white/[0.02]"
            >
              <td className="py-4 px-4 text-sm text-soft-white">
                {feature.name}
              </td>
              <td className="py-4 px-4 text-center bg-electric-green/5">
                <CellValue value={feature.gymwyse} />
              </td>
              <td className="py-4 px-4 text-center">
                <CellValue value={feature.mindbody} />
              </td>
              <td className="py-4 px-4 text-center">
                <CellValue value={feature.zenplanner} />
              </td>
              <td className="py-4 px-4 text-center">
                <CellValue value={feature.glofox} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
