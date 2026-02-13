"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function calculateBaseCost(locations: number): number {
  if (locations <= 1) return 99;
  if (locations <= 5) return 79 * locations;
  return 69 * locations;
}

function calculateChurnSavings(
  members: number,
  avgFee: number,
  churnRate: number
): number {
  const currentChurnMembers = (members * churnRate) / 100;
  const gymwyseChurnMembers = (members * 2.3) / 100;
  const savedMembers = Math.max(0, currentChurnMembers - gymwyseChurnMembers);
  return Math.round(savedMembers * avgFee);
}

function calculatePaymentRecovery(members: number): number {
  const failedPaymentRate = 0.03;
  const recoveryRate = 0.4;
  const avgFailedAmount = 87;
  return Math.round(
    members * failedPaymentRate * recoveryRate * avgFailedAmount
  );
}

function calculateRetailIncrease(members: number): number {
  const avgRetailPerMember = 5;
  const increaseRate = 0.15;
  return Math.round(members * avgRetailPerMember * increaseRate);
}

interface ROICalculatorProps {
  compact?: boolean;
}

export function ROICalculator({ compact = false }: ROICalculatorProps) {
  const [memberCount, setMemberCount] = useState(520);
  const [currentSoftwareCost, setCurrentSoftwareCost] = useState(129);
  const [avgMembershipFee, setAvgMembershipFee] = useState(87);
  const [churnRate, setChurnRate] = useState(3.5);
  const [locationCount, setLocationCount] = useState(1);

  const results = useMemo(() => {
    const gymwyseCost = calculateBaseCost(locationCount);
    const churnSavings = calculateChurnSavings(
      memberCount,
      avgMembershipFee,
      churnRate
    );
    const paymentRecovery = calculatePaymentRecovery(memberCount);
    const noShowFees = 500;
    const retailIncrease = calculateRetailIncrease(memberCount);

    const totalValue =
      churnSavings + paymentRecovery + noShowFees + retailIncrease;
    const netBenefit = totalValue - gymwyseCost;
    const roi = gymwyseCost > 0 ? Math.round((netBenefit / gymwyseCost) * 100) : 0;
    const payback = gymwyseCost > 0 ? Math.round((totalValue / gymwyseCost) * 10) / 10 : 0;

    return {
      gymwyseCost,
      churnSavings,
      paymentRecovery,
      noShowFees,
      retailIncrease,
      totalValue,
      netBenefit,
      roi,
      payback,
    };
  }, [memberCount, avgMembershipFee, churnRate, locationCount]);

  return (
    <div className={compact ? "space-y-6" : "grid lg:grid-cols-2 gap-12"}>
      {/* Input side */}
      <div className="space-y-6">
        <div className={compact ? "" : "glass-card p-8"}>
          {!compact && (
            <h3 className="text-2xl font-semibold text-pure-white mb-6">
              Your Gym Details
            </h3>
          )}
          <div className="space-y-5">
            <Input
              label="Number of Active Members"
              type="number"
              value={memberCount}
              onChange={(e) => setMemberCount(Number(e.target.value) || 0)}
              placeholder="520"
            />
            <Input
              label="Current Software Cost (Monthly)"
              type="number"
              prefix="$"
              value={currentSoftwareCost}
              onChange={(e) =>
                setCurrentSoftwareCost(Number(e.target.value) || 0)
              }
              placeholder="129"
            />
            <Input
              label="Average Member Monthly Fee"
              type="number"
              prefix="$"
              value={avgMembershipFee}
              onChange={(e) => setAvgMembershipFee(Number(e.target.value) || 0)}
              placeholder="87"
            />
            <Input
              label="Current Monthly Churn Rate"
              type="number"
              suffix="%"
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value) || 0)}
              placeholder="3.5"
            />
            <Input
              label="Number of Locations"
              type="number"
              value={locationCount}
              onChange={(e) => setLocationCount(Number(e.target.value) || 1)}
              placeholder="1"
            />
          </div>
        </div>
      </div>

      {/* Results side */}
      <div className="space-y-6">
        {/* GymWyse Cost */}
        <div className="glass-card p-6">
          <h4 className="text-lg font-semibold text-pure-white mb-4">
            GymWyse Cost
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-cool-gray">Base Platform</span>
              <span className="text-sm text-soft-white">
                ${results.gymwyseCost}/mo
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-cool-gray">
                Revenue Analytics (included)
              </span>
              <span className="text-sm text-soft-white">$0</span>
            </div>
            <div className="border-t border-glass-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-soft-white">
                  Total Monthly Cost
                </span>
                <motion.span
                  key={results.gymwyseCost}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-bold text-pure-white"
                >
                  ${results.gymwyseCost}
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Generated */}
        <div className="glass-card p-6 border-electric-green/20">
          <h4 className="text-lg font-semibold text-pure-white mb-4">
            Value Generated
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <span className="text-sm text-cool-gray block">
                  Churn Reduction Savings
                </span>
                <span className="text-xs text-dim-gray">
                  2.3% avg churn vs your {churnRate}%
                </span>
              </div>
              <span className="text-sm text-electric-green font-medium">
                ${results.churnSavings.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-sm text-cool-gray block">
                  Failed Payment Recovery
                </span>
                <span className="text-xs text-dim-gray">
                  Recover 40% of failed payments
                </span>
              </div>
              <span className="text-sm text-electric-green font-medium">
                ${results.paymentRecovery.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-sm text-cool-gray block">
                  No-Show Fee Collection
                </span>
                <span className="text-xs text-dim-gray">
                  Automated late cancellation fees
                </span>
              </div>
              <span className="text-sm text-electric-green font-medium">
                ${results.noShowFees}
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-sm text-cool-gray block">
                  Retail Revenue Increase
                </span>
                <span className="text-xs text-dim-gray">
                  POS system boosts retail by 15%
                </span>
              </div>
              <span className="text-sm text-electric-green font-medium">
                ${results.retailIncrease.toLocaleString()}
              </span>
            </div>
            <div className="border-t border-glass-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-soft-white">
                  Total Monthly Value
                </span>
                <motion.span
                  key={results.totalValue}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-bold text-electric-green"
                >
                  ${results.totalValue.toLocaleString()}
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="glass-card p-6 bg-electric-green/[0.08] border-electric-green/30">
          <div className="text-center space-y-4">
            <div>
              <div className="text-sm text-cool-gray">Net Monthly Benefit</div>
              <motion.div
                key={results.netBenefit}
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl font-bold text-electric-green mt-1"
              >
                ${results.netBenefit.toLocaleString()}
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-glass-border">
              <div>
                <div className="text-sm text-cool-gray">ROI</div>
                <motion.div
                  key={results.roi}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl font-bold text-pure-white"
                >
                  {results.roi.toLocaleString()}%
                </motion.div>
              </div>
              <div>
                <div className="text-sm text-cool-gray">Payback</div>
                <motion.div
                  key={results.payback}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl font-bold text-pure-white"
                >
                  {results.payback}x
                </motion.div>
              </div>
            </div>

            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full mt-4">
                Book a Demo to See This In Action
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
