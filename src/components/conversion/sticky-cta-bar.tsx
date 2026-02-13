"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-deep-space/95 backdrop-blur-lg border-t border-glass-border z-40"
        >
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden sm:block">
                <div className="text-sm font-medium text-pure-white">
                  Ready to see GymWyse in action?
                </div>
                <div className="text-xs text-cool-gray">
                  Join 200+ gyms &bull; 14-day free trial &bull; No credit card
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Link href="/roi-calculator" className="flex-1 sm:flex-initial">
                  <Button variant="secondary" size="sm" className="w-full">
                    Calculate ROI
                  </Button>
                </Link>
                <Link href="/demo" className="flex-1 sm:flex-initial">
                  <Button variant="primary" size="sm" className="w-full">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
