"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        shown = true;
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-deep-space/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-10 md:p-12 max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-cool-gray hover:text-pure-white cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-pure-white">
                Wait! See Your ROI Before You Go
              </h2>
              <p className="text-base text-soft-white">
                Calculate exactly how much GymWyse will save your gym in 60
                seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/roi-calculator";
                  }}
                >
                  Calculate My Savings
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
