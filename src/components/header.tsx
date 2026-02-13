"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    name: "Independent Gyms",
    href: "/solutions/independent-gyms",
    desc: "Single-location gym management",
  },
  {
    name: "Growing Chains (2-5 locations)",
    href: "/solutions/multi-location",
    desc: "Multi-location portfolio tools",
  },
  {
    name: "Multi-Location Operators (6+)",
    href: "/solutions/multi-location",
    desc: "Enterprise-grade scaling",
  },
  {
    name: "Boutique Fitness Studios",
    href: "/solutions/boutique-fitness",
    desc: "Yoga, pilates, barre studios",
  },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "ROI Calculator", href: "/roi-calculator" },
  { name: "Migration Guides", href: "/migration" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-space/80 backdrop-blur-lg border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-electric-green rounded-lg flex items-center justify-center">
              <span className="text-deep-space font-bold text-sm">GW</span>
            </div>
            <span className="text-lg font-semibold text-pure-white">
              GymWyse
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-cool-gray hover:text-pure-white transition-colors cursor-pointer">
                Solutions
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-72 glass-card p-2 mt-1"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="text-sm font-medium text-pure-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-dim-gray mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm text-cool-gray hover:text-pure-white transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/vs/mindbody"
              className="px-3 py-2 text-sm text-cool-gray hover:text-pure-white transition-colors"
            >
              Why Switch
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-cool-gray hover:text-pure-white transition-colors cursor-pointer">
                Resources
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-56 glass-card p-2 mt-1"
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm text-cool-gray hover:text-pure-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/demo">
              <Button variant="primary" size="sm">
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-cool-gray"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-glass-border bg-deep-space/95 backdrop-blur-lg"
          >
            <div className="px-6 py-4 space-y-1">
              <div className="py-2">
                <span className="text-xs font-medium text-dim-gray uppercase tracking-wider">
                  Solutions
                </span>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-cool-gray hover:text-pure-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/pricing"
                className={cn(
                  "block py-2 text-sm text-cool-gray hover:text-pure-white"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/vs/mindbody"
                className="block py-2 text-sm text-cool-gray hover:text-pure-white"
                onClick={() => setMobileOpen(false)}
              >
                Why Switch
              </Link>
              <div className="py-2">
                <span className="text-xs font-medium text-dim-gray uppercase tracking-wider">
                  Resources
                </span>
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-cool-gray hover:text-pure-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-2">
                <Link href="/demo" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
