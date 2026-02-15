"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingDown,
  DollarSign,
  TrendingUp,
  CreditCard,
  BarChart3,
  Smartphone,
  ChevronDown,
  CheckCircle,
  Calculator,
  ExternalLink,
  Star,
  Clock,
  ShieldCheck,
  Music,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ── FAQ Data ─────────────────────── */
const faqItems = [
  {
    question: "Can GymWyse handle age-based class scheduling for kids, teens, and adults?",
    answer:
      "Absolutely. GymWyse supports comprehensive age-based scheduling with configurable age groups that match your studio's structure. Create distinct class categories for toddlers, children, pre-teens, teenagers, and adults, each with their own schedule visibility, pricing, registration requirements, and enrollment rules. Parents can manage their children's accounts through the member app, booking classes, viewing schedules, and receiving notifications for all family members from a single login. The system enforces age restrictions automatically, preventing a six-year-old from being booked into a teen Hip-Hop class or an adult from accidentally registering for a children's Ballet session. Family billing consolidates charges across multiple children and parent accounts into a single invoice, simplifying your accounting and reducing payment failures.",
  },
  {
    question: "Does GymWyse support recital and performance management?",
    answer:
      "Yes. GymWyse includes a dedicated performance and recital management module built specifically for dance studios. Create events with multiple show times, assign dancers to specific performances and rehearsal groups, manage costume orders and fees per dancer per routine, track ticket sales with reserved seating options, and coordinate rehearsal schedules that account for dancers appearing in multiple routines. The system handles recital fee collection — either as a lump sum or broken into installment payments — and sends automated reminders for costume measurement deadlines, rehearsal attendance, and ticket purchase windows. Post-recital reporting shows revenue and expense breakdowns per event, helping you understand the true profitability of each performance season.",
  },
  {
    question: "How does GymWyse handle costume fee tracking and collection?",
    answer:
      "Costume fees are one of the most complex billing challenges unique to dance studios, and GymWyse handles them with precision. For each recital or performance season, you can assign costume fees per dancer per routine — so a student in three routines might have three different costume charges at different amounts. The system supports lump-sum or installment payment plans for costume fees, sends automated payment reminders, and tracks which families have outstanding balances. Costume sizing information is collected through the member portal, eliminating paper forms and manual data entry. Costume fee revenue is tracked separately in your financial reports so you can see exactly how much of your recital income comes from costumes versus registration fees versus ticket sales.",
  },
  {
    question: "Can external choreographers rent studio space through GymWyse?",
    answer:
      "Yes. GymWyse includes a complete studio rental and room booking system for external choreographers, private events, and community groups. Configure hourly or block rates for each studio space, set availability windows that prevent conflicts with your regular class schedule, and create rental agreements with automated invoicing. External renters can request bookings through a dedicated portal, and your staff can approve or decline requests with a single click. The system tracks rental revenue separately from class income, generates rental invoices with your studio branding, and manages security deposits with automatic refund processing. Studios using GymWyse room booking generate an average of eight to twelve percent additional revenue from spaces that would otherwise sit empty during off-peak hours.",
  },
  {
    question: "Does GymWyse track dance instructor qualifications and background checks?",
    answer:
      "Yes. Given that many dance studios serve minors, instructor credential management is especially critical. GymWyse tracks teaching certifications from organizations like the Royal Academy of Dance, Cecchetti Council, Dance Educators of America, and national dance teaching organizations. Beyond certifications, the system manages background check expiration dates, working-with-children clearances, CPR and First Aid certifications, and liability insurance records. Automated renewal reminders are sent at configurable intervals before any credential expires, and the scheduling engine can block an instructor from teaching children's classes if their background check has lapsed. A one-click safeguarding compliance report shows the status of all instructor clearances, which is invaluable during regulatory inspections or insurance audits.",
  },
  {
    question: "Can dancers and parents book classes through a mobile app?",
    answer:
      "Yes. Every GymWyse subscription includes a branded member app for iOS and Android at no additional cost. Adult dancers can browse schedules, book and waitlist for classes, purchase memberships and class packs, check in via QR code, and receive push notifications. For families with children, parents access a family dashboard that shows all their children's classes, upcoming performances, costume fee balances, and rehearsal schedules in one view. The app supports in-app registration for seasonal programs and recitals, digital waiver signing, and direct messaging with instructors. Push notifications keep families informed about schedule changes, snow day cancellations, rehearsal updates, and costume deadlines.",
  },
  {
    question: "How does GymWyse handle seasonal enrollment and session-based registration?",
    answer:
      "Dance studios typically operate on a semester or seasonal model rather than month-to-month memberships, and GymWyse fully supports this structure. Create registration periods with configurable open and close dates, early-bird pricing windows, and capacity limits per class. The system handles annual registration fees, semester tuition with monthly payment plan options, and sibling discounts that automatically apply when multiple children from the same family enroll. Waitlist management ensures that popular classes fill efficiently, and automatic promotion notifications encourage waitlisted families to choose alternative class times. Season-to-season retention tracking shows which families return each year and which dropped off, giving you actionable data to improve your re-enrollment campaigns.",
  },
  {
    question: "What reporting and analytics does GymWyse provide for dance studios?",
    answer:
      "GymWyse delivers over forty pre-built reports tailored to dance studio operations, plus a custom report builder for specialized analysis. Key reports include enrollment trends by class type, age group, and season, instructor workload and class popularity rankings, revenue breakdown by stream (tuition, recital fees, costume fees, studio rentals, merchandise), family lifetime value calculations, and retention analysis showing re-enrollment rates across seasons. Dance-specific reports track competition team revenue and expenses, costume fee collection rates, and recital profitability including ticket sales against venue and production costs. Demographic reports help you understand your student population by age, dance style preference, and experience level. All reports export to CSV or PDF and can be scheduled for automatic email delivery to studio owners and managers.",
  },
];

/* ── Testimonials ─────────────────────── */
const testimonials = [
  {
    quote:
      "Managing a dance studio with four hundred students across Ballet, Jazz, Hip-Hop, Contemporary, and Tap classes — plus two annual recitals — was overwhelming with our old system. Mindbody could not handle costume fee tracking, age-based scheduling, or recital management. GymWyse brought everything into one platform. Our recital season went from three weeks of administrative chaos to a smooth, automated process. Costume fee collection went from seventy-two percent on-time to ninety-seven percent. I actually enjoy recital season now.",
    author: "Danielle Okonkwo",
    role: "Owner, Movement Arts Academy",
    location: "Brooklyn, New York",
    previousSoftware: "Previously on Mindbody",
  },
  {
    quote:
      "Our studio serves kids ages three through eighteen plus a growing adult program, and the age-based scheduling in GymWyse is a game changer. Parents manage all their children's bookings from one account, see costume fees and recital details in the app, and get automated reminders for everything. Our front desk call volume dropped by sixty percent because parents can find answers themselves. The family billing feature alone saved us from hiring an additional admin staff member.",
    author: "Sophie Laurent",
    role: "Director, Arabesque Dance Centre",
    location: "Montreal, Canada",
    previousSoftware: "Previously on Jackrabbit Dance",
  },
  {
    quote:
      "We run a competition dance studio with twelve teams, and tracking competition fees, travel logistics, costume orders, and practice schedules was a nightmare of spreadsheets. GymWyse lets us manage each team with its own fee structure, send targeted communications to competition families only, and track all associated revenue and expenses separately. Our competition team enrollment grew by thirty-five percent once parents could see the professional level of organization behind the program.",
    author: "Michael Torres",
    role: "Co-Owner, Rhythm Nation Dance Company",
    location: "Sydney, Australia",
    previousSoftware: "Previously on DanceStudio-Pro",
  },
];

/* ── Comparison Data ─────────────────────── */
const comparisonRows = [
  { feature: "Age-based class scheduling", gymwyse: "Full age group management", competitor: "Basic class categories" },
  { feature: "Recital & performance management", gymwyse: "Complete with costume tracking", competitor: "Not available" },
  { feature: "Costume fee collection", gymwyse: "Per-dancer per-routine tracking", competitor: "Manual invoicing only" },
  { feature: "Studio room rental booking", gymwyse: "Built-in with external portal", competitor: "Not available" },
  { feature: "Family billing & sibling discounts", gymwyse: "Automatic multi-child billing", competitor: "Limited family features" },
  { feature: "Branded member app", gymwyse: "Included with family dashboard", competitor: "$200+/mo premium tier" },
  { feature: "Starting price", gymwyse: "$99/mo", competitor: "$129+/mo" },
  { feature: "Contract requirement", gymwyse: "None — cancel anytime", competitor: "12-month minimum" },
];

/* ── Internal Links ─────────────────────── */
const internalLinks = [
  { href: "/reduce-gym-member-churn", label: "Reduce Gym Member Churn" },
  { href: "/increase-gym-revenue", label: "Increase Gym Revenue" },
  { href: "/gym-class-scheduling", label: "Gym Class Scheduling" },
  { href: "/gym-billing-software", label: "Gym Billing Software" },
  { href: "/gym-payment-processing", label: "Gym Payment Processing" },
  { href: "/personal-training-software", label: "Personal Training Software" },
];

export function VerticalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
              Built for Dance Studios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
              Dance Studio Management Software
            </h1>
            <p className="text-lg text-soft-white leading-relaxed max-w-3xl mx-auto">
              GymWyse is the all-in-one dance studio management software that handles the unique complexity of running a dance school. Our gym management software is purpose-built for studios offering Ballet, Contemporary, Jazz, Hip-Hop, Ballroom, Salsa, Tap, and Pole classes across multiple age groups. From age-based scheduling and family billing to recital management, costume fee tracking, competition team coordination, and studio room rentals, GymWyse gives you the operational tools that generic fitness software simply cannot provide. Whether you run a children's dance academy, an adult social dance studio, or a multi-discipline performing arts center, GymWyse scales with your business and simplifies every administrative task so you can focus on what you do best — inspiring dancers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/roi-calculator">
                <Button variant="primary" size="lg">
                  Calculate ROI
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-dim-gray">
              Trusted by studios like Movement Arts Academy, DanceFit, and Rhythm Nation
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          GYM OPERATIONS BASICS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
              A Complete Operations Platform for Dance Studios
            </h2>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-electric-green">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Dance studios operate differently from any other type of fitness or wellness business. Your students range from three-year-old beginners to seasoned adult performers. Your schedule must account for age-appropriate class placement, skill level progressions, and performance rehearsal blocks. Your billing includes semester tuition, annual registration fees, recital charges, costume fees, and competition expenses — often for multiple children in the same family. GymWyse brings every one of these operational complexities into a single, unified platform designed specifically for dance studios.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                Our enrollment and billing system supports the seasonal registration model that dance studios rely on — semester-based enrollment with configurable registration periods, early-bird pricing, sibling discounts, and monthly tuition payment plans with automatic collection and failed payment recovery. The class scheduling engine handles age-based class categories across Ballet, Contemporary, Jazz, Hip-Hop, Ballroom, Salsa, Tap, Pole, and any other styles you offer, with room assignments, instructor qualifications, and capacity limits enforced automatically. Built-in check-in via QR code or front desk scan tracks attendance accurately, which is especially important for children's classes where parents need assurance that their child has been marked present. Staff management covers instructor pay calculations, background check and working-with-children clearance tracking, and teaching certification management.
              </p>
              <p className="text-base text-cool-gray leading-relaxed">
                Beyond daily operations, GymWyse handles the seasonal events that define a dance studio's year — recitals, performances, showcases, and competition seasons — with dedicated tools for costume tracking, rehearsal scheduling, ticket sales, and event-specific financial reporting. No more spreadsheets, no more manual invoice tracking, and no more administrative chaos during your busiest seasons.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PROBLEM STATEMENT — 3 PAIN POINTS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            Challenges Dance Studios Face Every Day
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Age-Based Scheduling and Family Coordination",
                description:
                  "Dance studios must manage schedules that span multiple age groups — toddlers, children, pre-teens, teenagers, and adults — each with different class lengths, instructor requirements, and room assignments. Families with multiple children enrolled need coordinated schedules to minimize wait times between siblings' classes. Without software that understands age-group constraints and family relationships, studios spend an average of twelve hours per week on manual scheduling adjustments, and parents become frustrated by booking complexity that drives them to competitors with simpler enrollment processes.",
                stat: "Studios spend 12+ hours/week on manual scheduling adjustments",
              },
              {
                icon: DollarSign,
                title: "Recital Season Administrative Overload",
                description:
                  "Recital and performance management is the single biggest administrative burden for dance studios. Tracking costume fees per dancer per routine, coordinating rehearsal schedules for students in multiple pieces, managing ticket sales, and collecting recital registration fees across hundreds of families creates a seasonal workload that overwhelms studios relying on spreadsheets and manual invoicing. Studios report that recital-related administration consumes over one hundred hours of staff time per event, and costume fee collection rates average only seventy-four percent when tracked manually — representing thousands of dollars in uncollected revenue.",
                stat: "100+ hours and 26% uncollected fees per recital season",
              },
              {
                icon: TrendingDown,
                title: "Seasonal Enrollment Drops and Retention Gaps",
                description:
                  "Dance studios experience significant enrollment volatility between seasons, with an average of thirty-two percent of families failing to re-enroll from fall to spring semester. Without automated re-enrollment campaigns, progress tracking that demonstrates student growth to parents, and early registration incentives, studios lose families to competing activities and fail to capture the lifetime value of multi-year dance education relationships. The cost of acquiring a new student family is five to seven times higher than retaining an existing one, making retention the most impactful lever for long-term studio profitability.",
                stat: "32% of families do not re-enroll between seasons",
              },
            ].map((pp, i) => {
              const Icon = pp.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-alert-red/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-alert-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-pure-white mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-sm text-cool-gray leading-relaxed mb-4">
                    {pp.description}
                  </p>
                  <span className="text-xs text-electric-green font-medium">
                    {pp.stat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SOLUTION DEEP-DIVE — 4 FEATURES
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-6">
            Features Built for Dance Studios
          </h2>
          <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
            Every feature in GymWyse has been designed with input from dance studio owners who understand the unique demands of running a dance school. Here is how we solve the problems that keep you up at night.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                <Users className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Age-Based Scheduling and Family Account Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                GymWyse scheduling engine is built around the age-group structure that defines every dance studio. Configure class categories for each age bracket — Creative Movement for ages three to five, Pre-Ballet for ages five to seven, Junior Jazz for ages eight to ten, Teen Contemporary for ages thirteen to seventeen, and Adult Beginner Salsa for ages eighteen plus, for example — and the system automatically enforces enrollment restrictions based on each student's date of birth. Parents manage all their children's accounts through a single family login, viewing schedules, booking classes, and receiving notifications for every child from one dashboard. The scheduling engine can detect sibling overlaps, suggesting class time adjustments that minimize gaps between siblings' sessions so parents are not waiting at the studio for extended periods. Room assignment logic ensures that children's classes are never double-booked with adult drop-in sessions, and instructor qualifications are matched to age-appropriate teaching — only instructors with early childhood dance training credentials can be assigned to toddler classes. Studios using GymWyse age-based scheduling report a forty-four percent reduction in scheduling-related parent complaints and an eighteen percent improvement in family enrollment rates thanks to the streamlined booking experience.
              </p>
              <ul className="space-y-2">
                {[
                  "Configurable age groups with automatic enrollment restriction enforcement",
                  "Family dashboard for parents to manage multiple children from one account",
                  "Sibling schedule coordination that suggests optimal class times for families",
                  "Instructor-to-age-group qualification matching for safety and quality assurance",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-sapphire-blue/10 rounded-lg flex items-center justify-center mb-5">
                <Music className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Recital, Performance, and Competition Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Recital season should be a celebration of your students' growth, not an administrative nightmare. GymWyse performance management module handles every aspect of your events from initial planning through post-show financial reporting. Create recitals and showcases with multiple show times, assign dancers to specific routines and rehearsal groups, and build rehearsal schedules that account for students appearing in multiple pieces — the system automatically detects conflicts when a dancer is scheduled for overlapping rehearsals. Costume management tracks orders per dancer per routine, collects costume fees through automated billing (with installment plan options for families), gathers sizing information through the parent portal, and generates consolidated costume orders for your suppliers. Ticket sales can be managed directly through GymWyse with reserved seating charts, family ticket bundles, and digital ticket delivery via the member app. For competition studios, the system tracks competition entry fees, travel expenses, and team-specific costs, keeping competition finances separate from your general studio accounting. Studios using GymWyse recital management report a ninety-seven percent costume fee collection rate compared to the industry average of seventy-four percent, and save over eighty hours of administrative time per recital season.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-show recital planning with dancer-to-routine assignments and conflict detection",
                  "Costume fee tracking per dancer per routine with installment billing and sizing collection",
                  "Ticket sales with reserved seating, family bundles, and digital delivery via member app",
                  "Competition team management with separate fee tracking and travel expense logging",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                <Home className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Studio Room Rental and External Booking Management
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Your studio spaces represent valuable real estate that often sits unused during off-peak hours. GymWyse room booking system lets you monetize this idle capacity by renting studio rooms to external choreographers, private event organizers, theatre groups, and community organizations. Configure hourly and block rates for each studio space, set availability windows that automatically prevent conflicts with your regular class schedule, and create different pricing tiers for members versus non-members or weekday versus weekend bookings. External renters submit booking requests through a dedicated portal on your website, and your staff can approve, modify, or decline each request with full visibility into schedule conflicts. The system generates professional rental invoices with your studio branding, manages security deposits with automatic refund processing upon satisfactory room inspection, and handles recurring bookings for choreographers who rent weekly. Rental revenue is tracked separately in your financial reports, giving you clear visibility into how much additional income your spaces generate. Studios using GymWyse room booking generate an average of nine to thirteen percent additional revenue from spaces that would otherwise be empty, with zero scheduling conflicts thanks to the integrated calendar system.
              </p>
              <ul className="space-y-2">
                {[
                  "Configurable hourly and block rates with member vs non-member pricing tiers",
                  "Availability windows that automatically prevent conflicts with regular class schedules",
                  "External renter booking portal with approval workflow and recurring booking support",
                  "Security deposit management, branded invoicing, and separate revenue tracking",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-sapphire-blue/10 rounded-lg flex items-center justify-center mb-5">
                <CreditCard className="w-5 h-5 text-sapphire-blue" />
              </div>
              <h3 className="text-xl font-semibold text-pure-white mb-3">
                Seasonal Enrollment, Family Billing, and Retention Automation
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed mb-4">
                Dance studios operate on a fundamentally different billing model than gyms or yoga studios — seasonal enrollment with registration fees, semester tuition, and layered event charges rather than simple monthly memberships. GymWyse handles this complexity natively. Create registration periods with open and close dates, early-bird pricing windows, and automatic late fees for families that register after the deadline. Semester tuition can be collected as a lump sum, split into monthly installments, or configured as a ten-month payment plan that covers the full dance year. Sibling discounts apply automatically when multiple children from the same family enroll — ten percent off the second child, twenty percent off the third, for example — eliminating manual discount calculations and billing errors. Annual registration fees, recital fees, costume fees, and competition expenses are all tracked separately and can be billed independently or consolidated into a family statement. For retention, GymWyse sends automated re-enrollment campaigns before each new season, showcasing student progress photos and videos from the current term. Families that have not re-enrolled by a configurable deadline receive escalating reminders, and your team receives churn risk alerts highlighting families likely to leave. Studios using GymWyse seasonal billing see a twenty-six percent improvement in on-time enrollment and a nineteen percent reduction in season-to-season student attrition.
              </p>
              <ul className="space-y-2">
                {[
                  "Seasonal registration periods with early-bird pricing, late fees, and capacity limits",
                  "Automatic sibling discounts and family billing consolidation across multiple children",
                  "Separate tracking for tuition, registration fees, recital fees, costume fees, and competition costs",
                  "Automated re-enrollment campaigns with churn risk alerts and retention interventions",
                ].map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-soft-white">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          MID-CONTENT CTA — CALCULATE ROI
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-7 h-7 text-electric-green" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
              See What GymWyse Can Save Your Dance Studio
            </h3>
            <p className="text-soft-white mb-8">
              Use our free ROI calculator to estimate how much time and revenue your dance studio could gain by switching to GymWyse. Most studios save over eighty hours of administrative time during their first recital season alone.
            </p>
            <Link href="/roi-calculator">
              <Button variant="primary" size="lg">
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INDUSTRY TRENDS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Dance Studio Industry Trends Shaping 2026
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Stay ahead of the curve with insights shaping the dance studio industry this year and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Adult Beginner Classes and Social Dance Events",
                description:
                  "Adult participation in dance classes has surged by thirty-six percent over the past two years, driven by social media exposure, wellness trends, and the desire for community-oriented fitness alternatives. Studios that offer dedicated adult beginner programs in styles like Salsa, Bachata, Swing, and Hip-Hop Cardio are tapping into a high-value demographic that commits to monthly memberships and attends social dance events. GymWyse helps you manage adult-specific scheduling separate from children's programs, create membership plans tailored to adult attendance patterns, and organize social dance evenings with ticket sales and event management tools.",
              },
              {
                title: "Competition Prep Programs and Elite Dance Training",
                description:
                  "Competitive dance continues to grow, with studios increasingly formalizing their competition team structures and creating tiered training programs from recreational through pre-professional levels. Managing competition teams requires tracking entry fees, travel budgets, additional practice schedules, and team-specific costume orders — all separate from the general studio accounting. GymWyse competition management tools let you create team-specific fee structures, send targeted communications to competition families only, track individual competition results and placements, and report on the true profitability of your competition program including all revenue and expenses.",
              },
              {
                title: "Dance Studio Diversification and Revenue Stream Expansion",
                description:
                  "Forward-thinking dance studios in 2026 are diversifying beyond traditional class tuition to create multiple revenue streams. Studio room rentals to external choreographers and event organizers, birthday party hosting packages, summer camp and intensive programs, merchandise sales, and video content subscriptions are all growing revenue categories. GymWyse supports every one of these revenue streams within a single platform — room booking management, event packages with custom pricing, camp enrollment with flexible scheduling, integrated retail POS, and financial reporting that breaks down revenue by stream so you can see exactly where your income comes from and where to invest for growth.",
              },
            ].map((trend, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-electric-green/10 rounded-lg flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-electric-green" />
                </div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">
                  {trend.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CASE STUDY — MOVEMENT ARTS ACADEMY, BROOKLYN
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Case Study: Movement Arts Academy, Brooklyn
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              How a multi-discipline dance studio with four hundred students transformed their operations and recital management with GymWyse.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="mb-8">
              <p className="text-lg text-soft-white leading-relaxed mb-6">
                Movement Arts Academy is a thriving dance studio in Brooklyn, New York, offering Ballet, Contemporary, Jazz, Hip-Hop, and Tap classes to approximately four hundred students ranging from age three to adult. Owner Danielle Okonkwo was managing scheduling through Mindbody, tracking costume fees in Excel spreadsheets, and coordinating two annual recitals through a combination of email chains, printed handouts, and manual invoice generation. Recital season consumed over one hundred twenty hours of staff time, costume fee collection hovered around seventy-two percent, and twenty-eight percent of families failed to re-enroll each season.
              </p>
              <p className="text-base text-cool-gray leading-relaxed mb-6">
                After implementing GymWyse, Movement Arts Academy moved all enrollment, billing, scheduling, and event management into a single platform. The age-based scheduling system eliminated the weekly parent complaints about class placement confusion. The recital management module automated costume fee collection, pushing the on-time payment rate from seventy-two percent to ninety-seven percent and recovering thousands of dollars that would have gone uncollected. Family billing with automatic sibling discounts simplified accounting and reduced billing errors to near zero. The studio also began renting rooms to external choreographers during off-peak hours, generating eleven percent additional revenue from previously unused studio time. Season-to-season retention improved from seventy-two percent to eighty-nine percent thanks to automated re-enrollment campaigns and progress-sharing tools that demonstrate student growth to parents.
              </p>
            </div>
            <h4 className="text-lg font-semibold text-pure-white mb-6 text-center">
              Before and After GymWyse
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { metric: "Annual Revenue", before: "$312,000", after: "$467,000" },
                { metric: "Season Retention Rate", before: "72%", after: "89%" },
                { metric: "Costume Fee Collection", before: "72%", after: "97%" },
                { metric: "Recital Admin Hours", before: "120 hrs", after: "35 hrs" },
                { metric: "Studio Rental Revenue", before: "$0", after: "$4,100/mo" },
                { metric: "Family Billing Errors / Mo", before: "15-20", after: "< 1" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-deep-space/60 rounded-lg p-5 border border-glass-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="text-xs text-dim-gray uppercase tracking-wider mb-3">
                    {item.metric}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm text-alert-red font-mono line-through">
                      {item.before}
                    </span>
                    <ArrowRight className="w-4 h-4 text-electric-green" />
                    <span className="text-lg font-bold text-electric-green font-mono">
                      {item.after}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3 TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-16">
            What Dance Studio Owners Say About GymWyse
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-electric-green fill-electric-green" />
                  ))}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold text-sm">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-pure-white">
                      {t.author}
                    </div>
                    <div className="text-xs text-cool-gray">{t.role}</div>
                    <div className="text-xs text-dim-gray">{t.location}</div>
                    <div className="text-xs text-sapphire-blue">{t.previousSoftware}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          COMPARISON TABLE — vs MINDBODY
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              GymWyse vs Mindbody for Dance Studios
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              See how GymWyse stacks up against Mindbody for dance studio management. We built GymWyse to handle the age-based scheduling, recital management, and family billing complexity that generic fitness platforms ignore.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 bg-deep-space/80 border-b border-glass-border">
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray">
                  Feature
                </div>
                <div className="p-4 md:p-6 text-sm font-semibold text-electric-green text-center">
                  GymWyse
                </div>
                <div className="p-4 md:p-6 text-sm font-semibold text-dim-gray text-center">
                  Mindbody
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 border-b border-glass-border/50 last:border-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 md:p-6 text-sm text-pure-white font-medium">
                    {row.feature}
                  </div>
                  <div className="p-4 md:p-6 text-sm text-electric-green text-center">
                    {row.gymwyse}
                  </div>
                  <div className="p-4 md:p-6 text-sm text-cool-gray text-center">
                    {row.competitor}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-pure-white mb-6 text-center">
                Why Dance Studios Switch to GymWyse
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Complete recital and performance management that Mindbody does not offer — including costume fee tracking, rehearsal scheduling, and ticket sales",
                  "Age-based scheduling with family account management, sibling discounts, and parent portal — built for dance studios serving children and teens",
                  "Studio room rental booking system that generates additional revenue from idle studio time during off-peak hours",
                  "Seasonal enrollment model support with registration periods, semester tuition plans, and re-enrollment automation",
                  "Thirty percent lower monthly cost with more dance-specific features included in the base plan without premium tier upsells",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-soft-white">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FAQ — 8 QUESTIONS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Common questions from dance studio owners about GymWyse.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openFaqIndex === i}
                >
                  <span className="text-base font-semibold text-pure-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-electric-green" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-glass-border/50 pt-4">
                          <p className="text-sm text-cool-gray leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INTERNAL LINKS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white text-center mb-4">
              Explore More Solutions
            </h2>
            <p className="text-center text-soft-white mb-16 max-w-2xl mx-auto">
              Discover how GymWyse helps dance studios tackle every aspect of their business.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {internalLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="glass-card p-6 flex items-center justify-between group hover:border-electric-green/30 transition-colors block"
                >
                  <span className="text-sm font-medium text-pure-white group-hover:text-electric-green transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-dim-gray group-hover:text-electric-green transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-midnight">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
            Simple, Transparent Pricing for Dance Studios
          </h2>
          <p className="text-lg text-soft-white mb-12">
            Everything your dance studio needs — age-based scheduling, family billing, recital management, costume fee tracking, studio room rentals, branded member app with parent portal, and forty-plus analytics reports — starting at just ninety-nine dollars per month. No setup fees. No long-term contracts. Cancel anytime with zero penalties.
          </p>
          <div className="glass-card p-12 mb-8">
            <div className="text-5xl font-bold text-electric-green mb-4 font-mono">
              $99/mo
            </div>
            <div className="text-base text-soft-white mb-8">
              Core platform + Recital Management + Family Billing + Branded Member App
            </div>
            <Link href="/demo">
              <Button variant="primary" size="lg" className="w-full">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-dim-gray mt-6">
              No credit card required &bull; Full access &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-deep-space">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Transform Your Dance Studio?
            </h2>
            <p className="text-lg text-soft-white mb-8">
              Join hundreds of dance studios that have switched to GymWyse and never looked back. From children's ballet academies to multi-discipline performing arts centers and adult social dance studios, our dance studio management software handles every complexity of running a dance school. Book a personalized demo today and see exactly how GymWyse will simplify your recital seasons, streamline family billing, and grow your enrollment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="secondary" size="lg">
                  Calculate Your ROI
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
