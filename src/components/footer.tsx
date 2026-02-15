import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { name: "Revenue Analytics", href: "/platform/revenue-analytics" },
    { name: "Member Mobile App", href: "/platform/member-app" },
    { name: "Equipment Management", href: "/platform/equipment-qr" },
    { name: "Class Scheduling", href: "/gym-class-scheduling" },
    { name: "Payment Processing", href: "/gym-payment-processing" },
    { name: "Billing Software", href: "/gym-billing-software" },
    { name: "PT Software", href: "/personal-training-software" },
  ],
  Solutions: [
    { name: "Independent Gyms", href: "/solutions/independent-gyms" },
    { name: "Boutique Fitness", href: "/solutions/boutique-fitness" },
    { name: "Multi-Location Chains", href: "/solutions/multi-location" },
    { name: "Reduce Member Churn", href: "/reduce-gym-member-churn" },
    { name: "Increase Revenue", href: "/increase-gym-revenue" },
    { name: "Revenue Tracking", href: "/solutions/revenue-tracking" },
  ],
  "By Gym Type": [
    { name: "Yoga Studios", href: "/yoga-studio-software" },
    { name: "CrossFit Gyms", href: "/crossfit-gym-software" },
    { name: "MMA Gyms", href: "/mma-gym-software" },
    { name: "Pilates Studios", href: "/pilates-studio-software" },
    { name: "Dance Studios", href: "/dance-studio-software" },
    { name: "Barre Studios", href: "/barre-studio-software" },
    { name: "Bootcamps", href: "/bootcamp-software" },
    { name: "PT Studios", href: "/personal-training-studio-software" },
    { name: "Climbing Gyms", href: "/climbing-gym-software" },
  ],
  Compare: [
    { name: "vs. Mindbody", href: "/vs/mindbody" },
    { name: "vs. Zen Planner", href: "/vs/zenplanner" },
    { name: "vs. Glofox", href: "/vs/glofox" },
    { name: "vs. PushPress", href: "/vs/pushpress" },
    { name: "Migration Hub", href: "/migration" },
  ],
  "Top Cities": [
    { name: "Los Angeles", href: "/gym-software-los-angeles" },
    { name: "New York City", href: "/gym-software-new-york" },
    { name: "Chicago", href: "/gym-software-chicago" },
    { name: "London", href: "/gym-software-london" },
    { name: "Sydney", href: "/gym-software-sydney" },
    { name: "Dubai", href: "/gym-software-dubai" },
    { name: "Austin", href: "/gym-software-austin" },
    { name: "Manchester", href: "/gym-software-manchester" },
    { name: "Melbourne", href: "/gym-software-melbourne" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gym Software UK", href: "/uk" },
    { name: "Gym Software Australia", href: "/au" },
    { name: "Gym Software Dubai", href: "/ae" },
    { name: "Book Demo", href: "/demo" },
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
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo-white.png"
              alt="GymWyse"
              width={120}
              height={34}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-dim-gray">
            &copy; {new Date().getFullYear()} GymWyse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
