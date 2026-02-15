"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    name: "Boutique Fitness Studios",
    href: "/solutions/boutique-fitness",
    desc: "Yoga, pilates, barre studios",
  },
  {
    name: "Reduce Member Churn",
    href: "/reduce-gym-member-churn",
    desc: "AI-powered retention tools",
  },
  {
    name: "Increase Revenue",
    href: "/increase-gym-revenue",
    desc: "Revenue analytics & optimization",
  },
];

const verticals = [
  { name: "Yoga Studios", href: "/yoga-studio-software" },
  { name: "CrossFit Gyms", href: "/crossfit-gym-software" },
  { name: "MMA Gyms", href: "/mma-gym-software" },
  { name: "Pilates Studios", href: "/pilates-studio-software" },
  { name: "Dance Studios", href: "/dance-studio-software" },
  { name: "Barre Studios", href: "/barre-studio-software" },
  { name: "Bootcamps", href: "/bootcamp-software" },
  { name: "PT Studios", href: "/personal-training-studio-software" },
  { name: "Climbing Gyms", href: "/climbing-gym-software" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "ROI Calculator", href: "/roi-calculator" },
  { name: "Migration Guides", href: "/migration" },
  { name: "Class Scheduling", href: "/gym-class-scheduling" },
  { name: "Payment Processing", href: "/gym-payment-processing" },
  { name: "Billing Software", href: "/gym-billing-software" },
  { name: "PT Software", href: "/personal-training-software" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-space/80 backdrop-blur-lg border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo-white.png"
              alt="GymWyse"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
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
                    className="absolute top-full left-0 w-72 bg-[#0d1230] border border-glass-border rounded-xl p-2 mt-1 shadow-2xl shadow-black/60"
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

            {/* Verticals Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("verticals")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-cool-gray hover:text-pure-white transition-colors cursor-pointer">
                By Gym Type
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === "verticals" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-56 bg-[#0d1230] border border-glass-border rounded-xl p-2 mt-1 shadow-2xl shadow-black/60"
                  >
                    {verticals.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm text-cool-gray hover:text-pure-white"
                      >
                        {item.name}
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
                    className="absolute top-full left-0 w-56 bg-[#0d1230] border border-glass-border rounded-xl p-2 mt-1 shadow-2xl shadow-black/60"
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
              <div className="py-2">
                <span className="text-xs font-medium text-dim-gray uppercase tracking-wider">
                  By Gym Type
                </span>
                {verticals.map((item) => (
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
