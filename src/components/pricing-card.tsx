"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: string;
  price: string;
  billingCycle: string;
  description?: string;
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export function PricingCard({
  tier,
  price,
  billingCycle,
  description,
  badge,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-8 flex flex-col relative",
        highlighted && "border-electric-green/30 bg-electric-green/5"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-deep-space bg-electric-green rounded-full">
          {badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-pure-white mb-2">{tier}</h3>
        {description && (
          <p className="text-sm text-cool-gray">{description}</p>
        )}
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-pure-white">{price}</span>
        <span className="text-sm text-dim-gray ml-2">{billingCycle}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
            <span className="text-sm text-cool-gray">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
