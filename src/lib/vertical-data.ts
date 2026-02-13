export interface VerticalPainPoint {
  title: string;
  description: string;
  stat: string;
}

export interface VerticalFeature {
  title: string;
  description: string;
}

export interface VerticalTestimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  stats: { label: string; value: string }[];
}

export interface VerticalPageData {
  slug: string;
  verticalName: string;
  headline: string;
  tagline: string;
  exampleGyms: string;
  painPoints: VerticalPainPoint[];
  features: VerticalFeature[];
  testimonial: VerticalTestimonial;
  metaTitle: string;
  metaDescription: string;
}

export const verticalPages: VerticalPageData[] = [
  {
    slug: "yoga-studio-software",
    verticalName: "Yoga Studios",
    headline: "Yoga Studio Software That Flows With Your Practice",
    tagline:
      "Manage unlimited class types, track teacher schedules, and grow your wellness community. From hot yoga to restorative\u2014one platform handles it all.",
    exampleGyms:
      "Lotus Flow (Portland), Sacred Space (London), The Yoga Loft (Sydney)",
    painPoints: [
      {
        title: "Complex Class Scheduling",
        description:
          "Managing 15+ class types (Vinyasa, Yin, Hot, Prenatal) with different teachers, rooms, and capacities",
        stat: "Avg 23 weekly classes",
      },
      {
        title: "Drop-in vs Membership Confusion",
        description:
          "Tracking class packs, unlimited memberships, and drop-in students in one system",
        stat: "3 pricing models average",
      },
      {
        title: "Seasonal Attendance Dips",
        description:
          "Summer and holiday churn hits wellness studios harder (15-20% seasonal drop)",
        stat: "15-20% seasonal churn",
      },
    ],
    features: [
      {
        title: "Unlimited Class Types",
        description:
          "Hot yoga, yin, vinyasa, restorative, prenatal, meditation\u2014all with different durations, capacities, and pricing.",
      },
      {
        title: "Teacher Scheduling",
        description:
          "Each teacher has their own calendar. Track certifications, class assignments, and availability. Auto-notify for coverage.",
      },
      {
        title: "Flexible Pricing Models",
        description:
          "Class packs (5, 10, 20), unlimited monthly, drop-in rates, first-timer discounts. Mix and match for each student.",
      },
      {
        title: "Retail for Wellness Products",
        description:
          "Sell yoga mats, blocks, straps, essential oils, and apparel right from your POS. Track inventory and boost retail revenue.",
      },
    ],
    testimonial: {
      quote:
        "We went from 3 spreadsheets to one dashboard. Class bookings are up 34%.",
      author: "Asha Kumar",
      role: "Owner, Lotus Flow Yoga",
      location: "Portland, OR",
      stats: [
        { label: "Booking Increase", value: "+34%" },
        { label: "Admin Time Saved", value: "8 hrs/week" },
        { label: "Retail Revenue Growth", value: "+$1,200/mo" },
      ],
    },
    metaTitle: "Yoga Studio Management Software - Schedule & Grow | GymWyse",
    metaDescription:
      "Yoga studio software for scheduling, class packs, teacher management, and revenue tracking. From hot yoga to restorative. $99/mo. Free trial.",
  },
  {
    slug: "crossfit-gym-software",
    verticalName: "CrossFit Gyms",
    headline: "CrossFit Gym Software Built for the Box",
    tagline:
      "WOD programming, barbell club management, and competition tracking. Built by people who understand the CrossFit community.",
    exampleGyms:
      "Iron Republic (Austin), The Box Collective (Manchester), The Training Shed (Melbourne)",
    painPoints: [
      {
        title: "WOD Programming & Tracking",
        description:
          "Managing daily WODs, specialty programs, and open gym hours with different capacity limits",
        stat: "6+ daily sessions avg",
      },
      {
        title: "Complex Pricing Tiers",
        description:
          "Barbell club vs open gym vs unlimited. Competition memberships, drop-ins, and punch cards",
        stat: "4+ pricing models",
      },
      {
        title: "Competition Management",
        description:
          "Throwdowns, in-house competitions, and leaderboard tracking require specialized tools",
        stat: "3-4 events/year avg",
      },
    ],
    features: [
      {
        title: "WOD Programming Hub",
        description:
          "Program daily WODs, track member scores, and display on screens. Integrate with SugarWOD and BTWB.",
      },
      {
        title: "Capacity Management",
        description:
          "Set class limits for each session. Waitlists auto-fill when spots open. Perfect for box environments.",
      },
      {
        title: "Competition & Leaderboards",
        description:
          "Run in-house throwdowns, track PR boards, and manage team competitions all from one system.",
      },
      {
        title: "Community Engagement",
        description:
          "Member app with AI coaching, workout logging, and social challenges. Build community beyond the box.",
      },
    ],
    testimonial: {
      quote:
        "Our members log WODs in the app, we track revenue in the dashboard. Everything connects.",
      author: "Jake Morrison",
      role: "Owner, Iron Republic CrossFit",
      location: "Austin, TX",
      stats: [
        { label: "Member Retention", value: "+28%" },
        { label: "Revenue Growth", value: "+$3,400/mo" },
        { label: "Admin Hours Saved", value: "12 hrs/week" },
      ],
    },
    metaTitle:
      "CrossFit Gym Management Software - WODs & Competitions | GymWyse",
    metaDescription:
      "CrossFit box software for WOD programming, competition tracking, and member management. Built for the CrossFit community. $99/mo. Free trial.",
  },
  {
    slug: "mma-gym-software",
    verticalName: "MMA & Martial Arts Gyms",
    headline: "MMA Gym Software for Combat Sports",
    tagline:
      "Multi-discipline scheduling, belt progression tracking, and competition prep. Built for BJJ, Muay Thai, Boxing, and MMA gyms.",
    exampleGyms:
      "Forge Athletics (Brooklyn), The Fight Lab (Dubai), The Fight Lab (Glasgow)",
    painPoints: [
      {
        title: "Multi-Discipline Scheduling",
        description:
          "Managing BJJ, Muay Thai, Boxing, Wrestling, and MMA classes with different mats, rings, and instructors",
        stat: "5+ disciplines avg",
      },
      {
        title: "Belt & Rank Progression",
        description:
          "Tracking belt levels, stripes, and promotion eligibility across multiple martial arts",
        stat: "8+ belt levels per art",
      },
      {
        title: "Competition Prep Tracking",
        description:
          "Managing fighters\u2019 camps, weight classes, and competition schedules alongside regular members",
        stat: "Year-round prep cycles",
      },
    ],
    features: [
      {
        title: "Multi-Discipline Management",
        description:
          "Schedule BJJ, Muay Thai, Boxing, and Wrestling on separate mats/rings with different instructors and capacities.",
      },
      {
        title: "Belt Progression System",
        description:
          "Track stripes, belts, and promotion eligibility. Automated notifications when students are eligible for advancement.",
      },
      {
        title: "Competition Management",
        description:
          "Track fight records, weight management, and competition schedules. Manage fighter and recreational memberships separately.",
      },
      {
        title: "Liability & Waivers",
        description:
          "Digital waivers, equipment condition tracking via QR codes, and incident reporting built in.",
      },
    ],
    testimonial: {
      quote:
        "We run 5 disciplines across 3 mat areas. GymWyse made our scheduling chaos into a system.",
      author: "Rico Martinez",
      role: "Owner, Forge Athletics",
      location: "Brooklyn, NY",
      stats: [
        { label: "Scheduling Efficiency", value: "+45%" },
        { label: "Member Growth", value: "+22%" },
        { label: "Revenue Tracked", value: "$180K MRR" },
      ],
    },
    metaTitle: "MMA Gym Management Software - Martial Arts & Combat | GymWyse",
    metaDescription:
      "MMA and martial arts gym software for multi-discipline scheduling, belt tracking, and competition management. BJJ, Muay Thai, Boxing. $99/mo.",
  },
  {
    slug: "pilates-studio-software",
    verticalName: "Pilates Studios",
    headline: "Pilates Studio Software for Reformer & Mat Classes",
    tagline:
      "Reformer equipment booking, private vs group session pricing, and teacher certification tracking. Built for modern Pilates studios.",
    exampleGyms:
      "Core Studio (London), Reform Pilates Co. (Sydney), Reform Studio (Gold Coast)",
    painPoints: [
      {
        title: "Reformer Equipment Limits",
        description:
          "Booking reformers, chairs, and barrels with strict capacity limits per class (typically 6-12)",
        stat: "8-12 reformers avg",
      },
      {
        title: "Private vs Group Pricing",
        description:
          "Managing 1-on-1 sessions, duets, semi-private (3-4), and group classes with completely different pricing",
        stat: "4+ session types",
      },
      {
        title: "Teacher Certification Tracking",
        description:
          "Tracking Stott, BASI, Classical, and other certifications for each instructor",
        stat: "Multiple cert bodies",
      },
    ],
    features: [
      {
        title: "Equipment-Based Booking",
        description:
          "Book specific reformers, chairs, or barrels. Set capacity per equipment type per class. Waitlist when full.",
      },
      {
        title: "Flexible Session Types",
        description:
          "Private, duet, semi-private, group. Each with separate pricing, scheduling, and instructor requirements.",
      },
      {
        title: "Instructor Certification Tracking",
        description:
          "Track Stott, BASI, Balanced Body, and Classical certifications. Alerts when renewals are due.",
      },
      {
        title: "Premium Client Experience",
        description:
          "Branded member app, personalized class recommendations, and progress tracking for the premium Pilates clientele.",
      },
    ],
    testimonial: {
      quote:
        "Equipment booking alone saved us 6 hours a week. Our clients love the seamless booking experience.",
      author: "Sophie Wright",
      role: "Director, Core Studio",
      location: "London, UK",
      stats: [
        { label: "Booking Efficiency", value: "+55%" },
        { label: "Class Fill Rate", value: "92%" },
        { label: "Revenue Growth", value: "+$2,800/mo" },
      ],
    },
    metaTitle: "Pilates Studio Software - Reformer Booking & More | GymWyse",
    metaDescription:
      "Pilates studio software for reformer booking, private sessions, and instructor management. Built for modern studios. $99/mo. Free trial.",
  },
  {
    slug: "dance-studio-software",
    verticalName: "Dance Studios",
    headline: "Dance Studio Management Software",
    tagline:
      "Recital management, age-based class organization, and competition team tracking. From ballet to hip-hop\u2014one platform for every style.",
    exampleGyms:
      "Momentum Dance Project (Chicago), The Studio (Birmingham)",
    painPoints: [
      {
        title: "Recital & Performance Management",
        description:
          "Tracking costume fees, music, rehearsal schedules, and ticket sales for annual recitals",
        stat: "2-3 recitals/year",
      },
      {
        title: "Age-Based Class Organization",
        description:
          "Organizing classes by age group (toddler, youth, teen, adult) with different pricing and schedules",
        stat: "5+ age groups",
      },
      {
        title: "Competition Team Management",
        description:
          "Managing travel teams, extra rehearsals, competition fees, and costume budgets",
        stat: "4-8 competitions/season",
      },
    ],
    features: [
      {
        title: "Recital Management",
        description:
          "Track costumes, music selection, rehearsal schedules, and performance lineups. Automated parent communications.",
      },
      {
        title: "Age-Based Scheduling",
        description:
          "Organize classes by age group with appropriate pricing. Track student progression through levels.",
      },
      {
        title: "Competition Team Hub",
        description:
          "Manage travel teams, extra rehearsals, and competition fees. Track scores and placements.",
      },
      {
        title: "Family Billing",
        description:
          "Multi-student family accounts with sibling discounts. One invoice per family, multiple dancers.",
      },
    ],
    testimonial: {
      quote:
        "Recital season used to be a nightmare. Now costume fees, music, and schedules are all in one place.",
      author: "Maria Santos",
      role: "Director, Momentum Dance Project",
      location: "Chicago, IL",
      stats: [
        { label: "Parent Satisfaction", value: "+45%" },
        { label: "Admin Time Saved", value: "10 hrs/week" },
        { label: "Enrollment Growth", value: "+18%" },
      ],
    },
    metaTitle: "Dance Studio Management Software - Recitals & Classes | GymWyse",
    metaDescription:
      "Dance studio software for recital management, age-based classes, and competition teams. Ballet to hip-hop. $99/mo. Free trial.",
  },
  {
    slug: "barre-studio-software",
    verticalName: "Barre Studios",
    headline: "Barre Studio Software for Boutique Fitness",
    tagline:
      "Small class management, retail integration, and member engagement. Built for the boutique barre experience.",
    exampleGyms:
      "Barre Society (LA), The Barre Studio (Melbourne)",
    painPoints: [
      {
        title: "Boutique Studio Operations",
        description:
          "Managing intimate 8-15 person classes with premium experience expectations",
        stat: "10-15 per class avg",
      },
      {
        title: "Retail Revenue Pressure",
        description:
          "Grip socks, apparel, and accessories are essential revenue streams for barre studios",
        stat: "15-20% of revenue",
      },
      {
        title: "High Expectations",
        description:
          "Premium pricing means premium experience. Booking, communication, and ambiance must be seamless",
        stat: "$25-35/class avg",
      },
    ],
    features: [
      {
        title: "Small Class Optimization",
        description:
          "Maximize revenue from 8-15 person classes. Waitlists, late cancel fees, and optimal scheduling.",
      },
      {
        title: "Retail & POS Integration",
        description:
          "Sell grip socks, apparel, and accessories. Track inventory. Upsell at booking and check-in.",
      },
      {
        title: "Premium Member Experience",
        description:
          "Branded mobile app, personalized recommendations, and seamless booking for the premium client.",
      },
      {
        title: "Instructor Management",
        description:
          "Track instructor specialties, class ratings, and pay. Build a roster that keeps members coming back.",
      },
    ],
    testimonial: {
      quote:
        "Our retail revenue jumped 25% after adding the POS. Grip socks practically sell themselves now.",
      author: "Emma Chen",
      role: "Owner, Barre Society",
      location: "Los Angeles, CA",
      stats: [
        { label: "Retail Growth", value: "+25%" },
        { label: "Class Fill Rate", value: "94%" },
        { label: "Churn Reduction", value: "-30%" },
      ],
    },
    metaTitle: "Barre Studio Software - Boutique Fitness Management | GymWyse",
    metaDescription:
      "Barre studio software for small class management, retail POS, and premium member experience. Built for boutique studios. $99/mo.",
  },
  {
    slug: "bootcamp-software",
    verticalName: "Fitness Bootcamps",
    headline: "Fitness Bootcamp Software for Indoor & Outdoor Classes",
    tagline:
      "Manage outdoor sessions, weather cancellations, and transformation challenges. Built for bootcamp operators who train anywhere.",
    exampleGyms:
      "Sunrise Bootcamp (San Diego), Peak Fitness Co. (Perth)",
    painPoints: [
      {
        title: "Outdoor Class Management",
        description:
          "Managing parks, beaches, and outdoor locations with no fixed facility infrastructure",
        stat: "3-5 locations avg",
      },
      {
        title: "Weather-Based Cancellations",
        description:
          "Rain, heat, or storms mean last-minute changes. Members need instant notifications",
        stat: "10-15% sessions affected",
      },
      {
        title: "Challenge & Transformation Tracking",
        description:
          "6-week challenges, before/after photos, and leaderboards drive engagement but need tools",
        stat: "3-4 challenges/year",
      },
    ],
    features: [
      {
        title: "Multi-Location Sessions",
        description:
          "Schedule sessions across parks, beaches, and indoor backup venues. GPS check-in for outdoor classes.",
      },
      {
        title: "Weather Alert System",
        description:
          "Automated weather monitoring. One-tap cancellation with instant push notifications to all booked members.",
      },
      {
        title: "Challenge Management",
        description:
          "Run 6-week transformations with progress photos, measurements, leaderboards, and automated check-ins.",
      },
      {
        title: "Flexible Membership Models",
        description:
          "Weekly passes, monthly unlimited, class packs, and challenge-only pricing. All in one system.",
      },
    ],
    testimonial: {
      quote:
        "We run sessions at 4 parks. Weather cancellations used to be chaos. Now it's one tap and everyone knows.",
      author: "Dylan Park",
      role: "Founder, Sunrise Bootcamp",
      location: "San Diego, CA",
      stats: [
        { label: "No-Show Reduction", value: "-40%" },
        { label: "Challenge Signups", value: "+60%" },
        { label: "Revenue Growth", value: "+$4,200/mo" },
      ],
    },
    metaTitle: "Fitness Bootcamp Software - Outdoor & Indoor | GymWyse",
    metaDescription:
      "Bootcamp software for outdoor class management, weather alerts, and transformation challenges. Multi-location support. $99/mo. Free trial.",
  },
  {
    slug: "personal-training-studio-software",
    verticalName: "Personal Training Studios",
    headline: "Personal Training Studio Software",
    tagline:
      "1-on-1 scheduling, program design, client accountability, and revenue tracking. Built for PT studios that want to scale.",
    exampleGyms:
      "1-to-1 Performance (Seattle), The Training Room (Edinburgh)",
    painPoints: [
      {
        title: "1-on-1 Scheduling Complexity",
        description:
          "Managing individual trainer calendars, client preferences, and recurring sessions",
        stat: "20-40 sessions/trainer/week",
      },
      {
        title: "Program Design & Progression",
        description:
          "Building custom programs, tracking progression, and adapting plans based on client results",
        stat: "Unique programs per client",
      },
      {
        title: "Client Accountability",
        description:
          "Keeping clients engaged between sessions. Nutrition tracking, check-ins, and progress photos",
        stat: "2-3 sessions/week avg",
      },
    ],
    features: [
      {
        title: "Smart Scheduling",
        description:
          "Trainer availability, client preferences, recurring bookings, and auto-reminders. Reduce no-shows by 35%.",
      },
      {
        title: "Program Builder",
        description:
          "Build custom workout programs with exercise library. Track sets, reps, weight, and progression over time.",
      },
      {
        title: "Client Dashboard",
        description:
          "Each client sees their program, progress photos, measurements, and next session. Keep them accountable.",
      },
      {
        title: "Revenue Per Trainer",
        description:
          "Track revenue, session count, and client retention per trainer. Optimize your roster for profitability.",
      },
    ],
    testimonial: {
      quote:
        "Revenue per trainer went up 22% when we could actually see which trainers were retaining clients.",
      author: "Ryan Torres",
      role: "Owner, 1-to-1 Performance",
      location: "Seattle, WA",
      stats: [
        { label: "Revenue/Trainer", value: "+22%" },
        { label: "Client Retention", value: "+35%" },
        { label: "No-Show Reduction", value: "-38%" },
      ],
    },
    metaTitle: "Personal Training Studio Software - Schedule & Scale | GymWyse",
    metaDescription:
      "PT studio software for scheduling, program design, and client management. Track revenue per trainer. $99/mo. Free trial.",
  },
  {
    slug: "climbing-gym-software",
    verticalName: "Climbing Gyms",
    headline: "Climbing Gym Software for Bouldering & Rope",
    tagline:
      "Day passes, equipment rental tracking, and route setting schedules. Built for indoor climbing facilities.",
    exampleGyms:
      "The Ascent (Denver), Vertical Limit (Bristol), The Ascent (Perth)",
    painPoints: [
      {
        title: "Day Pass vs Membership Mix",
        description:
          "High day-pass volume alongside memberships makes revenue tracking complex",
        stat: "40-60% day pass revenue",
      },
      {
        title: "Equipment Rental Tracking",
        description:
          "Shoes, harnesses, belay devices. Tracking rentals, returns, and condition is labor-intensive",
        stat: "100+ rental items",
      },
      {
        title: "Route Setting Schedules",
        description:
          "Coordinating route setters, wall sections, and difficulty grades while managing closures",
        stat: "Weekly setting rotations",
      },
    ],
    features: [
      {
        title: "Flexible Pass System",
        description:
          "Day passes, punch cards, monthly memberships, and annual plans. All managed in one system with real-time tracking.",
      },
      {
        title: "Equipment Rental Management",
        description:
          "QR code tracking for shoes, harnesses, and gear. Check-out, check-in, and condition monitoring.",
      },
      {
        title: "Route Management",
        description:
          "Track wall sections, grade distribution, setter schedules, and section closures. Notify members of new routes.",
      },
      {
        title: "Waiver & Safety Management",
        description:
          "Digital waivers, belay certification tracking, and incident reporting. Keep your gym safe and compliant.",
      },
    ],
    testimonial: {
      quote:
        "Equipment rental tracking alone saved us from $3K in lost gear last year. The QR system is brilliant.",
      author: "Chris Nakamura",
      role: "Manager, The Ascent",
      location: "Denver, CO",
      stats: [
        { label: "Rental Loss Reduction", value: "-85%" },
        { label: "Day Pass Conversion", value: "+18%" },
        { label: "Member Growth", value: "+24%" },
      ],
    },
    metaTitle: "Climbing Gym Software - Day Passes & Rentals | GymWyse",
    metaDescription:
      "Climbing gym software for day passes, equipment rental tracking, and route management. Indoor bouldering & rope. $99/mo. Free trial.",
  },
];
