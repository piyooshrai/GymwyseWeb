import Link from "next/link";

const footerLinks = {
  Platform: [
    { name: "Revenue Analytics", href: "/platform/revenue-analytics" },
    { name: "Multi-Location Management", href: "/platform/multi-location" },
    { name: "Member Mobile App", href: "/platform/member-app" },
    { name: "Retail & POS", href: "/pricing" },
    { name: "Equipment Management", href: "/platform/equipment-qr" },
    { name: "Class Scheduling", href: "/solutions/independent-gyms" },
  ],
  Solutions: [
    { name: "Independent Gyms", href: "/solutions/independent-gyms" },
    { name: "Boutique Fitness", href: "/solutions/boutique-fitness" },
    { name: "Multi-Location Chains", href: "/solutions/multi-location" },
    { name: "Reduce Churn", href: "/solutions/reduce-churn" },
    { name: "Revenue Tracking", href: "/solutions/revenue-tracking" },
  ],
  Compare: [
    { name: "vs. Mindbody", href: "/vs/mindbody" },
    { name: "vs. Zen Planner", href: "/vs/zenplanner" },
    { name: "vs. Glofox", href: "/vs/glofox" },
    { name: "vs. PushPress", href: "/vs/pushpress" },
    { name: "Migration Hub", href: "/migration" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Pricing", href: "/pricing" },
  ],
  Regional: [
    { name: "Gym Software USA", href: "/" },
    { name: "Gym Software UK", href: "/uk" },
    { name: "Gym Software Australia", href: "/au" },
    { name: "Gym Software Dubai", href: "/ae" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", href: "/demo" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-pure-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-dim-gray hover:text-cool-gray transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-electric-green rounded-lg flex items-center justify-center">
              <span className="text-deep-space font-bold text-xs">GW</span>
            </div>
            <span className="text-sm font-semibold text-pure-white">
              GymWyse
            </span>
          </div>
          <p className="text-sm text-dim-gray">
            &copy; {new Date().getFullYear()} GymWyse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
