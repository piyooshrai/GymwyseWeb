import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { name: "Revenue Analytics Dashboard", href: "/platform/revenue-analytics" },
    { name: "Branded Member App", href: "/platform/member-app" },
    { name: "QR Equipment Tracking", href: "/platform/equipment-qr" },
    { name: "Gym Class Scheduling", href: "/gym-class-scheduling" },
    { name: "Gym Payment Processing", href: "/gym-payment-processing" },
    { name: "Gym Billing Automation", href: "/gym-billing-software" },
    { name: "Personal Training Software", href: "/personal-training-software" },
    { name: "Wearable Integrations", href: "/integrations/wearables" },
  ],
  Solutions: [
    { name: "Independent Gym Software", href: "/solutions/independent-gyms" },
    { name: "Boutique Fitness Management", href: "/solutions/boutique-fitness" },
    { name: "Multi-Location Management", href: "/solutions/multi-location" },
    { name: "Reduce Gym Member Churn", href: "/reduce-gym-member-churn" },
    { name: "Increase Gym Revenue", href: "/increase-gym-revenue" },
    { name: "Revenue Tracking Software", href: "/solutions/revenue-tracking" },
    { name: "Personal Trainer Tools", href: "/solutions/personal-trainers" },
    { name: "Recovery Management", href: "/solutions/recovery-management" },
  ],
  "By Gym Type": [
    { name: "Yoga Studio Software", href: "/yoga-studio-software" },
    { name: "CrossFit Gym Software", href: "/crossfit-gym-software" },
    { name: "MMA Gym Software", href: "/mma-gym-software" },
    { name: "Pilates Studio Software", href: "/pilates-studio-software" },
    { name: "Dance Studio Software", href: "/dance-studio-software" },
    { name: "Barre Studio Software", href: "/barre-studio-software" },
    { name: "Bootcamp Software", href: "/bootcamp-software" },
    { name: "PT Studio Software", href: "/personal-training-studio-software" },
    { name: "Climbing Gym Software", href: "/climbing-gym-software" },
  ],
  Compare: [
    { name: "GymWyse vs Mindbody", href: "/vs/mindbody" },
    { name: "GymWyse vs Zen Planner", href: "/vs/zenplanner" },
    { name: "GymWyse vs Glofox", href: "/vs/glofox" },
    { name: "GymWyse vs PushPress", href: "/vs/pushpress" },
    { name: "Gym Software Migration", href: "/migration" },
    { name: "ROI Calculator", href: "/roi-calculator" },
  ],
  "Top Cities": [
    { name: "Gym Software London", href: "/gym-software-london" },
    { name: "Gym Software New York", href: "/gym-software-new-york" },
    { name: "Gym Software Los Angeles", href: "/gym-software-los-angeles" },
    { name: "Gym Software Dubai", href: "/gym-software-dubai" },
    { name: "Gym Software Sydney", href: "/gym-software-sydney" },
    { name: "Gym Software Chicago", href: "/gym-software-chicago" },
    { name: "Gym Software Melbourne", href: "/gym-software-melbourne" },
    { name: "Gym Software Manchester", href: "/gym-software-manchester" },
    { name: "Gym Software Austin", href: "/gym-software-austin" },
  ],
  Resources: [
    { name: "Blog & Insights", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing Plans", href: "/pricing" },
    { name: "Gym Software UK", href: "/uk" },
    { name: "Gym Software Australia", href: "/au" },
    { name: "Gym Software UAE", href: "/ae" },
    { name: "Security & Compliance", href: "/security" },
    { name: "Book a Demo", href: "/demo" },
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
