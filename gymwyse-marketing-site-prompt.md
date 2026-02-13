# GymWyse Marketing Site - Claude Code Build Prompt

## Project Overview
Build a premium, high-converting marketing website for GymWyse (gymwyse.fit) - a gym management platform that delivers 1,708% ROI for independent gyms and multi-location fitness operators.

**Target Markets:** United States, United Kingdom, Australia, Middle East (UAE/Saudi Arabia)

**Visual Benchmark:** Linear's marketing site meets Stripe's dashboard showcase meets Vercel's performance aesthetic.

---

## 1. Technical Stack

### Core Framework
- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (animations and transitions)
- **Shadcn/ui** (base component library, heavily customized)
- **Lucide React** (icon system)

### Performance Requirements
- **Lighthouse Score:** 100/100 on all metrics
- **LCP (Largest Contentful Paint):** <500ms
- **Mobile Performance:** <1.5s load on 4G
- **Image Optimization:** Next.js Image with blurred placeholders
- **Code Splitting:** Aggressive lazy loading below fold
- **Font Loading:** Font subsetting, preload critical fonts

### SEO Technical Setup
```typescript
// Metadata configuration
export const metadata = {
  title: 'GymWyse - Gym Management Software That Proves Its ROI',
  description: 'Track revenue. Predict churn. Recover $12K+/month. The operating system for independent gyms and multi-location fitness operators.',
  openGraph: {
    title: 'GymWyse - Gym Software That Pays for Itself 18x Over',
    description: 'Revenue analytics, churn prevention, and multi-location management for modern gyms.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://gymwyse.fit',
    languages: {
      'en-US': 'https://gymwyse.fit',
      'en-GB': 'https://gymwyse.fit/uk',
      'en-AU': 'https://gymwyse.fit/au',
      'ar-AE': 'https://gymwyse.fit/ae',
    },
  },
}
```

- **Schema Markup:** LocalBusiness, SoftwareApplication, FAQPage, HowTo
- **hreflang Tags:** US, UK, AU, AE regional variants
- **Sitemap:** Auto-generated with priority weighting
- **Robots.txt:** Optimized for crawling

---

## 2. Design System

### Color Palette (2026 "Financial Terminal for Fitness" Aesthetic)

```typescript
// tailwind.config.ts
const colors = {
  // Backgrounds
  deepSpace: '#0A0E27',      // Primary background
  midnight: '#151B3D',        // Secondary background
  slate: '#1E293B',           // Surface color
  
  // Accents (use sparingly)
  electricGreen: '#00FF88',   // CTAs, growth metrics, success states
  sapphireBlue: '#3B82F6',    // Links, secondary accents
  sunsetOrange: '#FFC800',    // Warnings, tertiary accent
  alertRed: '#EF4444',        // Alerts, churn indicators
  
  // Text
  pureWhite: '#FFFFFF',       // Primary headings
  softWhite: '#F8FAFC',       // Body text (easier on eyes)
  coolGray: '#A0AEC0',        // Secondary text
  dimGray: '#64748B',         // Tertiary text, captions
  
  // Glassmorphism
  glass: 'rgba(255, 255, 255, 0.05)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
}
```

### Typography System

```typescript
// Font: Inter (primary) with system fallback
const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Consolas', 'monospace'],
}

// Type Scale
const fontSize = {
  'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
  'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
  'h2': ['40px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
  'h3': ['32px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
  'h4': ['24px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
  'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
  'body': ['16px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
  'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
  'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
}
```

### Spacing System

```typescript
// 4px base scale
const spacing = {
  'xs': '8px',
  'sm': '16px',
  'md': '24px',
  'lg': '32px',
  'xl': '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
  '5xl': '160px',
}

// Section spacing: 120-160px between major sections
// Container max-width: 1280px
// Content max-width (text): 720px
```

### Shadow & Elevation

```typescript
const boxShadow = {
  'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
  'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
  'lg': '0 10px 15px rgba(0, 0, 0, 0.2)',
  'xl': '0 20px 25px rgba(0, 0, 0, 0.3)',
  'glow-green': '0 0 20px rgba(0, 255, 136, 0.3)',
  'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
}
```

### Glassmorphism Style

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

---

## 3. Site Architecture & Navigation

### Navigation Structure (Double-Nav Strategy)

#### Top Navigation (Sticky, Minimalist)
```
Logo | Solutions ▼ | Why Switch | Pricing | Resources ▼ | Book Demo (CTA)
```

**Solutions Dropdown:**
- Independent Gyms (Primary target)
- Growing Chains (2-5 locations)
- Multi-Location Operators (6+ locations)
- Boutique Fitness Studios
- Combat Sports & MMA Gyms

**Resources Dropdown:**
- Blog
- Case Studies
- ROI Calculator
- Migration Guides
- Help Center

#### Footer Mega-Menu (SEO-Rich)

**Column 1: Platform**
- Revenue Analytics
- Multi-Location Management
- Member Mobile App
- Retail & POS
- Equipment Management
- Class Scheduling
- Trainer Hub

**Column 2: Solutions**
- Independent PT Studios
- Boutique Fitness
- Combat Sports & Dojos
- Multi-Location Chains
- Yoga & Wellness Studios

**Column 3: Compare**
- vs. Mindbody
- vs. Zen Planner
- vs. Glofox
- vs. PushPress
- Migration Hub

**Column 4: Resources**
- Blog
- Case Studies
- 2026 Revenue Benchmark Report
- Help Center
- API Documentation

**Column 5: Regional**
- Gym Software USA
- Gym Software UK
- Gym Software Australia
- Gym Software Dubai

**Column 6: Company**
- About
- Careers
- Privacy Policy
- Terms of Service
- Contact

### Sitemap (Priority Order)

**Tier 1 - Core Pages (Build First):**
1. `/` - Homepage
2. `/pricing` - Transparent pricing tiers
3. `/roi-calculator` - Interactive ROI tool
4. `/demo` - Demo booking with calendly embed
5. `/vs/mindbody` - Comparison page
6. `/vs/zenplanner` - Comparison page
7. `/vs/glofox` - Comparison page

**Tier 2 - Solutions Pages:**
8. `/solutions/independent-gyms` - Primary target audience
9. `/solutions/multi-location` - Portfolio management
10. `/solutions/boutique-fitness` - Niche focus
11. `/solutions/reduce-churn` - Problem-solution SEO
12. `/solutions/revenue-tracking` - Problem-solution SEO

**Tier 3 - Regional Pages:**
13. `/uk` - UK market landing page
14. `/au` - Australia market landing page
15. `/ae` - Middle East (Dubai/UAE) landing page

**Tier 4 - Platform Pages:**
16. `/platform/revenue-analytics` - Feature deep-dive
17. `/platform/member-app` - Avatar-driven app showcase
18. `/platform/multi-location` - Command center feature
19. `/platform/equipment-qr` - QR maintenance feature

**Tier 5 - Content & Support:**
20. `/migration` - Switch from legacy software guide
21. `/blog` - Content hub (build after core pages)
22. `/case-studies` - Social proof (build after core pages)

---

## 4. Page-by-Page Specifications

### Homepage (`/`)

**Above the Fold (Hero Section):**

```tsx
// Hero Component Structure
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-deepSpace via-midnight to-deepSpace">
    <div className="absolute inset-0 opacity-30">
      {/* Animated grid pattern */}
    </div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Copy */}
      <div className="space-y-6">
        <div className="inline-block">
          <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
            The Operating System for Modern Gyms
          </span>
        </div>
        
        <h1 className="text-display text-pureWhite">
          Gym Software That
          <span className="block text-electricGreen">Proves Its ROI</span>
        </h1>
        
        <p className="text-body-lg text-softWhite max-w-xl">
          Track revenue in real-time. Predict churn before it happens. 
          Recover $12K+ per month. Built for independent gyms that want 
          to scale without the enterprise price tag.
        </p>
        
        {/* Animated metrics strip */}
        <div className="flex gap-8 pt-4">
          <div>
            <div className="text-h2 text-electricGreen font-mono">1,708%</div>
            <div className="text-caption text-coolGray">Average ROI</div>
          </div>
          <div>
            <div className="text-h2 text-sapphireBlue font-mono">18×</div>
            <div className="text-caption text-coolGray">Payback Multiple</div>
          </div>
          <div>
            <div className="text-h2 text-pureWhite font-mono">$12K+</div>
            <div className="text-caption text-coolGray">Monthly Recovery</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 pt-6">
          <Button variant="primary" size="lg" className="bg-electricGreen text-deepSpace hover:shadow-glow-green">
            Calculate Your ROI
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="secondary" size="lg" className="border-glassBorder text-softWhite">
            See Live Demo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex items-center gap-6 pt-8">
          <div className="flex items-center gap-2">
            <Star className="text-sunsetOrange" />
            <span className="text-caption text-coolGray">4.9/5 on G2</span>
          </div>
          <div className="h-4 w-px bg-glassBorder" />
          <div className="text-caption text-coolGray">
            Trusted by 200+ gyms across 12 countries
          </div>
        </div>
      </div>
      
      {/* Right: Dashboard Preview */}
      <div className="relative">
        {/* Glassmorphic container with floating dashboard */}
        <div className="glass-card p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <Image
            src="/dashboard-revenue-preview.png"
            alt="GymWyse Revenue Command Center"
            width={800}
            height={600}
            className="rounded-lg"
            priority
          />
          
          {/* Floating metric cards with animations */}
          <motion.div 
            className="absolute -left-8 top-1/4 glass-card p-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-caption text-coolGray">Total MRR</div>
            <div className="text-h3 text-electricGreen">$562,500</div>
            <div className="text-caption text-electricGreen">↑ 7.3%</div>
          </motion.div>
          
          <motion.div 
            className="absolute -right-8 bottom-1/4 glass-card p-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <div className="text-caption text-coolGray">Churn Prevented</div>
            <div className="text-h3 text-sapphireBlue">23</div>
            <div className="text-caption text-sapphireBlue">This month</div>
          </motion.div>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

**Social Proof Strip:**
```tsx
<section className="py-12 border-y border-glassBorder">
  <div className="container mx-auto px-6">
    <p className="text-center text-dimGray text-caption mb-8">
      TRUSTED BY INDEPENDENT GYMS AND MULTI-LOCATION OPERATORS
    </p>
    
    {/* Infinite scroll logo carousel */}
    <InfiniteLogoCarousel logos={[
      // Gym logos (use real logos when available, placeholder for now)
    ]} />
    
    <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
      <div>
        <div className="text-h2 text-pureWhite">200+</div>
        <div className="text-caption text-coolGray">Active Gyms</div>
      </div>
      <div>
        <div className="text-h2 text-pureWhite">12</div>
        <div className="text-caption text-coolGray">Countries</div>
      </div>
      <div>
        <div className="text-h2 text-pureWhite">$45M+</div>
        <div className="text-caption text-coolGray">Revenue Tracked</div>
      </div>
      <div>
        <div className="text-h2 text-pureWhite">98%</div>
        <div className="text-caption text-coolGray">Uptime SLA</div>
      </div>
    </div>
  </div>
</section>
```

**Problem Statement Section:**
```tsx
<section className="py-24 bg-midnight">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <span className="text-alertRed text-sm font-medium tracking-wider uppercase">
        The Problem
      </span>
      <h2 className="text-h1 text-pureWhite">
        Legacy Gym Software Is Bleeding You Dry
      </h2>
      <p className="text-body-lg text-softWhite">
        You're paying $500+/month for software that can't tell you which 
        members are about to churn, which classes lose money, or where 
        your revenue is leaking.
      </p>
    </div>
    
    {/* Pain point cards */}
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <PainPointCard
        icon={<DollarSign />}
        title="Hidden Revenue Leaks"
        description="Failed payments, no-shows, and underpriced services cost you $5K+/month"
      />
      <PainPointCard
        icon={<Users />}
        title="Invisible Churn"
        description="You don't know which members are at risk until they cancel"
      />
      <PainPointCard
        icon={<TrendingDown />}
        title="No Real-Time Insights"
        description="Last month's reports don't help you make today's decisions"
      />
    </div>
  </div>
</section>
```

**Bento Grid Features Section:**
```tsx
<section className="py-32 bg-deepSpace">
  <div className="container mx-auto px-6">
    <div className="text-center space-y-6 mb-16">
      <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
        The Solution
      </span>
      <h2 className="text-h1 text-pureWhite">
        One Platform. Complete Control.
      </h2>
      <p className="text-body-lg text-softWhite max-w-2xl mx-auto">
        Everything you need to run a profitable gym. From revenue analytics 
        to member engagement. Built for independent gyms, scales to 10+ locations.
      </p>
    </div>
    
    {/* Bento Grid Layout */}
    <div className="grid md:grid-cols-12 gap-6">
      
      {/* Large feature: Revenue Analytics */}
      <BentoCard
        className="md:col-span-8 md:row-span-2"
        title="Revenue Command Center"
        description="Real-time P&L across all locations. Know exactly where your money comes from and where it goes."
        image="/features/revenue-dashboard.png"
        stats={[
          { label: 'MRR Tracking', value: 'Real-time' },
          { label: 'Churn Prediction', value: 'AI-Powered' },
          { label: 'ROI Proof', value: '1,708%' },
        ]}
        cta="Explore Revenue Analytics"
      />
      
      {/* Medium feature: Churn Prevention */}
      <BentoCard
        className="md:col-span-4"
        title="Churn Prevention AI"
        description="Identify at-risk members before they cancel. Win them back automatically."
        image="/features/churn-alerts.png"
        badge="2.3% avg churn rate"
      />
      
      {/* Medium feature: Multi-Location */}
      <BentoCard
        className="md:col-span-4"
        title="Multi-Location Hub"
        description="Manage 1 gym or 100. One dashboard for your entire portfolio."
        image="/features/multi-location.png"
        badge="Scales infinitely"
      />
      
      {/* Small feature: Member App */}
      <BentoCard
        className="md:col-span-4"
        title="AI Avatar Member App"
        description="6 personality-driven coaches. Boost engagement by 40%."
        image="/features/member-app.png"
        video="/features/avatar-demo.mp4"
      />
      
      {/* Small feature: Equipment QR */}
      <BentoCard
        className="md:col-span-4"
        title="Equipment QR Codes"
        description="Members scan. You track. Prevent liability."
        image="/features/equipment-qr.png"
      />
      
      {/* Small feature: Retail POS */}
      <BentoCard
        className="md:col-span-4"
        title="Retail & POS"
        description="Sell supplements, merch, equipment. All in one system."
        image="/features/pos-terminal.png"
      />
      
    </div>
  </div>
</section>
```

**Interactive ROI Calculator Section:**
```tsx
<section className="py-32 bg-gradient-to-b from-deepSpace to-midnight">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      
      <div className="text-center space-y-6 mb-16">
        <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
          See Your ROI
        </span>
        <h2 className="text-h1 text-pureWhite">
          Calculate Your Savings
        </h2>
        <p className="text-body-lg text-softWhite">
          See exactly how much GymWyse will save you vs. your current software.
        </p>
      </div>
      
      {/* Interactive Calculator Component */}
      <div className="glass-card p-8 md:p-12">
        <ROICalculator />
        {/* 
          This component should:
          1. Accept inputs: Member count, current software cost
          2. Calculate in real-time (no submit button)
          3. Show: GymWyse cost, value generated, net savings, ROI %
          4. Include comparison table (GymWyse vs Mindbody vs Zen Planner)
          5. Animate numbers on change
          6. CTA: "Book a demo to see this in action"
        */}
      </div>
      
    </div>
  </div>
</section>
```

**Secondary Positioning: Multi-Location Operators:**
```tsx
<section className="py-24 bg-midnight">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <span className="text-sapphireBlue text-sm font-medium tracking-wider uppercase">
          Built to Scale
        </span>
        <h2 className="text-h1 text-pureWhite mt-6">
          From 1 Location to 100
        </h2>
        <p className="text-body-lg text-softWhite mt-6">
          Start with one gym. Scale to a fitness empire. GymWyse grows with you.
        </p>
        
        <div className="space-y-6 mt-12">
          <FeatureListItem
            icon={<Building2 />}
            title="Portfolio Dashboard"
            description="See MRR, churn, and member count across all locations in one view"
          />
          <FeatureListItem
            icon={<TrendingUp />}
            title="Cross-Location Analytics"
            description="Compare performance. Find your best and worst performers instantly"
          />
          <FeatureListItem
            icon={<Users />}
            title="Centralized Member Database"
            description="Members can access any location. You track everything centrally"
          />
        </div>
        
        <Button variant="primary" size="lg" className="mt-8">
          See Multi-Location Features
        </Button>
      </div>
      
      <div>
        <Image
          src="/features/multi-location-dashboard.png"
          alt="Multi-location command center"
          width={800}
          height={600}
          className="rounded-xl shadow-xl"
        />
      </div>
      
    </div>
  </div>
</section>
```

**Testimonials Section:**
```tsx
<section className="py-24 bg-deepSpace">
  <div className="container mx-auto px-6">
    <div className="text-center space-y-6 mb-16">
      <h2 className="text-h1 text-pureWhite">
        What Gym Owners Say
      </h2>
    </div>
    
    {/* Testimonial grid */}
    <div className="grid md:grid-cols-3 gap-8">
      <TestimonialCard
        quote="GymWyse caught 18 members who were about to churn this month. That's $3,600 in saved revenue. It paid for itself 5x over."
        author="Sarah Chen"
        role="Owner, FitHub Downtown LA"
        avatar="/testimonials/sarah.jpg"
        metric="+18.3% MRR growth"
      />
      
      <TestimonialCard
        quote="I manage 4 locations. Before GymWyse, I had to log into 4 different dashboards. Now I see everything in 30 seconds."
        author="Marcus Johnson"
        role="Regional Director, Apex Fitness"
        avatar="/testimonials/marcus.jpg"
        metric="4 locations, 1 dashboard"
      />
      
      <TestimonialCard
        quote="The member app is insane. Engagement is up 40%. Members actually love their AI avatar coaches."
        author="Priya Patel"
        role="Owner, Zen Warrior Studio"
        avatar="/testimonials/priya.jpg"
        metric="+40% app engagement"
      />
    </div>
  </div>
</section>
```

**Regional Trust Section:**
```tsx
<section className="py-24 bg-midnight">
  <div className="container mx-auto px-6">
    <div className="text-center space-y-6 mb-16">
      <h2 className="text-h1 text-pureWhite">
        Global Platform. Local Expertise.
      </h2>
      <p className="text-body-lg text-softWhite max-w-2xl mx-auto">
        Built for gyms across the US, UK, Australia, and Middle East. 
        We understand regional compliance, payment methods, and market needs.
      </p>
    </div>
    
    {/* Regional feature grid */}
    <div className="grid md:grid-cols-4 gap-6">
      <RegionalCard
        flag="🇺🇸"
        region="United States"
        features={['ACH payments', 'US tax compliance', '24/7 support (EST)']}
        cta="/us"
      />
      <RegionalCard
        flag="🇬🇧"
        region="United Kingdom"
        features={['Direct Debit (BACS)', 'GDPR compliant', 'UK pricing (GBP)']}
        cta="/uk"
      />
      <RegionalCard
        flag="🇦🇺"
        region="Australia"
        features={['BPAY & Direct Debit', 'AUD pricing', 'AEST support hours']}
        cta="/au"
      />
      <RegionalCard
        flag="🇦🇪"
        region="UAE & Middle East"
        features={['RTL Arabic support', 'AED pricing', 'Local data hosting']}
        cta="/ae"
      />
    </div>
  </div>
</section>
```

**Final CTA Section:**
```tsx
<section className="py-32 bg-gradient-to-t from-deepSpace via-midnight to-deepSpace">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-display text-pureWhite">
        Ready to See Your ROI?
      </h2>
      <p className="text-body-lg text-softWhite">
        Join 200+ gyms that switched to software that actually makes them money.
      </p>
      
      <div className="flex justify-center gap-4">
        <Button variant="primary" size="xl" className="bg-electricGreen text-deepSpace">
          Start Free Trial
          <ArrowRight className="ml-2" />
        </Button>
        <Button variant="secondary" size="xl">
          Book a Demo
        </Button>
      </div>
      
      <p className="text-caption text-dimGray">
        No credit card required • 14-day free trial • Cancel anytime
      </p>
    </div>
  </div>
</section>
```

---

### Pricing Page (`/pricing`)

**Pricing Hero:**
```tsx
<section className="py-24">
  <div className="container mx-auto px-6">
    <div className="text-center space-y-6 mb-16">
      <h1 className="text-display text-pureWhite">
        Transparent Pricing
      </h1>
      <p className="text-body-lg text-softWhite max-w-2xl mx-auto">
        No hidden fees. No surprises. Pay for what you need. 
        Add modules as you grow.
      </p>
    </div>
    
    {/* Billing toggle */}
    <div className="flex justify-center mb-12">
      <BillingToggle 
        options={['Monthly', 'Annual (Save 20%)']}
        onChange={setBillingCycle}
      />
    </div>
    
    {/* Pricing tiers */}
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Starter */}
      <PricingCard
        tier="Starter"
        price="$99"
        billingCycle="per location/month"
        description="Perfect for single-location independent gyms"
        features={[
          'Core platform (unlimited members)',
          'Revenue Analytics module',
          'Member mobile app',
          'Email support',
          'Standard integrations',
        ]}
        cta="Start Free Trial"
        highlighted={false}
      />
      
      {/* Growth (Most Popular) */}
      <PricingCard
        tier="Growth"
        price="$79"
        billingCycle="per location/month"
        description="For gyms with 2-5 locations"
        badge="Most Popular"
        features={[
          'Everything in Starter, plus:',
          'Multi-location dashboard',
          'Cross-location analytics',
          'Priority support',
          'Advanced integrations',
          'Custom branding',
        ]}
        cta="Start Free Trial"
        highlighted={true}
      />
      
      {/* Enterprise */}
      <PricingCard
        tier="Enterprise"
        price="Custom"
        billingCycle="6+ locations"
        description="For multi-location fitness operators"
        features={[
          'Everything in Growth, plus:',
          'Dedicated account manager',
          'Custom integrations',
          'SLA guarantees',
          'White-label options',
          'Advanced security',
        ]}
        cta="Contact Sales"
        highlighted={false}
      />
      
    </div>
    
    {/* Module add-ons */}
    <div className="mt-24">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        Add-On Modules
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ModuleCard
          name="Retail & POS"
          price="$49/mo per location"
          description="Full point-of-sale system with inventory management"
        />
        <ModuleCard
          name="Equipment Management"
          price="$39/mo per location"
          description="QR codes, maintenance tracking, member reporting"
        />
        <ModuleCard
          name="Trainer Hub"
          price="$59/mo per location"
          description="Client management, program builder, AI workout generator"
        />
        <ModuleCard
          name="Advanced Class Management"
          price="$49/mo per location"
          description="Waitlists, instructor analytics, booking automation"
        />
      </div>
    </div>
    
    {/* Comparison table vs competitors */}
    <div className="mt-24">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        How We Compare
      </h2>
      
      <ComparisonTable
        competitors={['GymWyse', 'Mindbody', 'Zen Planner', 'Glofox']}
        features={[
          { name: 'Base Price (1 location)', gymwyse: '$99/mo', mindbody: '$129/mo', zenplanner: '$117/mo', glofox: '$110/mo' },
          { name: 'Revenue Analytics', gymwyse: true, mindbody: false, zenplanner: 'Limited', glofox: false },
          { name: 'Multi-Location Pricing', gymwyse: '$79/location', mindbody: '$129/location', zenplanner: '$117/location', glofox: '$110/location' },
          { name: 'Churn Prediction AI', gymwyse: true, mindbody: false, zenplanner: false, glofox: false },
          { name: 'Member Mobile App', gymwyse: 'Included', mindbody: '+$50/mo', zenplanner: '+$40/mo', glofox: 'Included' },
          { name: 'Setup Fees', gymwyse: '$0', mindbody: '$500+', zenplanner: '$300+', glofox: '$250+' },
          { name: 'Contract Length', gymwyse: 'Monthly', mindbody: '12 months', zenplanner: '12 months', glofox: '12 months' },
        ]}
      />
    </div>
    
  </div>
</section>
```

**Pricing FAQ:**
```tsx
<section className="py-24 bg-midnight">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        Pricing FAQ
      </h2>
      
      <Accordion items={[
        {
          question: 'Is there a setup fee?',
          answer: 'No. Unlike Mindbody ($500+) or Zen Planner ($300+), we have zero setup fees. You pay only for your subscription.',
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Yes. We have no long-term contracts. Cancel anytime with 30 days notice. Most competitors lock you into 12-month agreements.',
        },
        {
          question: 'What happens if I add more locations?',
          answer: 'You pay per location. 1 location = $99/mo. 2-5 locations = $79/mo each. 6+ locations = custom pricing with volume discounts.',
        },
        {
          question: 'Do I need all the modules?',
          answer: 'No. Start with the core platform + Revenue Analytics ($99/mo). Add modules as you need them. Average gym adds 1-2 modules.',
        },
        {
          question: 'How does the 14-day trial work?',
          answer: 'Full access to all features for 14 days. No credit card required. After trial, choose your plan or cancel with no charges.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'Credit card, ACH (US), Direct Debit (UK), BPAY (Australia). All payments processed securely via Stripe.',
        },
      ]} />
    </div>
  </div>
</section>
```

---

### ROI Calculator Page (`/roi-calculator`)

**Interactive Calculator:**
```tsx
<section className="py-24">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-display text-pureWhite">
          ROI Calculator
        </h1>
        <p className="text-body-lg text-softWhite">
          See exactly how much GymWyse will save you compared to your current software.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Input side */}
        <div className="space-y-6">
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-h3 text-pureWhite">Your Gym Details</h3>
            
            <InputField
              label="Number of Active Members"
              type="number"
              value={memberCount}
              onChange={setMemberCount}
              placeholder="520"
            />
            
            <InputField
              label="Current Software Cost (Monthly)"
              type="number"
              prefix="$"
              value={currentSoftwareCost}
              onChange={setCurrentSoftwareCost}
              placeholder="129"
            />
            
            <InputField
              label="Average Member Monthly Fee"
              type="number"
              prefix="$"
              value={avgMembershipFee}
              onChange={setAvgMembershipFee}
              placeholder="87"
            />
            
            <InputField
              label="Current Monthly Churn Rate"
              type="number"
              suffix="%"
              value={churnRate}
              onChange={setChurnRate}
              placeholder="3.5"
            />
            
            <InputField
              label="Number of Locations"
              type="number"
              value={locationCount}
              onChange={setLocationCount}
              placeholder="1"
            />
          </div>
        </div>
        
        {/* Results side (updates in real-time) */}
        <div className="space-y-6">
          
          {/* GymWyse Cost */}
          <div className="glass-card p-8">
            <h4 className="text-h4 text-pureWhite mb-4">GymWyse Cost</h4>
            <div className="space-y-3">
              <CostLine 
                label="Base Platform" 
                value={calculateBaseCost(locationCount)} 
              />
              <CostLine 
                label="Revenue Analytics (included)" 
                value="$0" 
              />
              <div className="border-t border-glassBorder pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-body text-softWhite font-medium">Total Monthly Cost</span>
                  <span className="text-h3 text-pureWhite">${calculateTotalCost(locationCount)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value Generated */}
          <div className="glass-card p-8 border-electricGreen/20">
            <h4 className="text-h4 text-pureWhite mb-4">Value Generated</h4>
            <div className="space-y-3">
              <ValueLine 
                label="Churn Reduction Savings" 
                value={calculateChurnSavings(memberCount, avgMembershipFee, churnRate)}
                description="2.3% avg churn vs your current 3.5%"
              />
              <ValueLine 
                label="Failed Payment Recovery" 
                value={calculatePaymentRecovery(memberCount)}
                description="Recover 40% of failed payments"
              />
              <ValueLine 
                label="No-Show Fee Collection" 
                value="$500"
                description="Automated late cancellation fees"
              />
              <ValueLine 
                label="Retail Revenue Increase" 
                value={calculateRetailIncrease(memberCount)}
                description="POS system boosts retail by 15%"
              />
              <div className="border-t border-glassBorder pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-body text-softWhite font-medium">Total Monthly Value</span>
                  <span className="text-h3 text-electricGreen">${calculateTotalValue(...)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ROI Summary */}
          <div className="glass-card p-8 bg-electricGreen/10 border-electricGreen/30">
            <div className="text-center space-y-4">
              <div>
                <div className="text-caption text-coolGray">Net Monthly Benefit</div>
                <div className="text-display text-electricGreen">${calculateNetBenefit(...)}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-glassBorder">
                <div>
                  <div className="text-caption text-coolGray">ROI</div>
                  <div className="text-h2 text-pureWhite">{calculateROI(...)}%</div>
                </div>
                <div>
                  <div className="text-caption text-coolGray">Payback</div>
                  <div className="text-h2 text-pureWhite">{calculatePayback(...)}x</div>
                </div>
              </div>
              
              <Button variant="primary" size="lg" className="w-full mt-6">
                Book a Demo to See This In Action
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          
        </div>
        
      </div>
      
      {/* Comparison vs Competitors */}
      <div className="mt-16">
        <h3 className="text-h3 text-pureWhite text-center mb-8">
          How You'd Do With Other Platforms
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <CompetitorCard
            name="Mindbody"
            monthlyCost={calculateMindbodyCost(locationCount)}
            monthlyValue={calculateMindbodyValue(memberCount)}
            netBenefit={...}
            roi={...}
          />
          <CompetitorCard
            name="Zen Planner"
            monthlyCost={calculateZenPlannerCost(locationCount)}
            monthlyValue={calculateZenPlannerValue(memberCount)}
            netBenefit={...}
            roi={...}
          />
          <CompetitorCard
            name="GymWyse"
            monthlyCost={calculateTotalCost(locationCount)}
            monthlyValue={calculateTotalValue(...)}
            netBenefit={...}
            roi={...}
            highlighted={true}
          />
        </div>
      </div>
      
    </div>
  </div>
</section>
```

---

### Comparison Pages (`/vs/mindbody`, `/vs/zenplanner`, `/vs/glofox`)

**Template Structure (customize per competitor):**

```tsx
// Example: /vs/mindbody

<section className="py-24">
  <div className="container mx-auto px-6">
    
    {/* Hero comparison */}
    <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
      <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
        Make the Switch
      </span>
      <h1 className="text-display text-pureWhite">
        GymWyse vs Mindbody
      </h1>
      <p className="text-body-lg text-softWhite">
        Why independent gyms are switching to GymWyse and saving $500+/month
      </p>
    </div>
    
    {/* Quick comparison table */}
    <div className="max-w-5xl mx-auto mb-24">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Mindbody column */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logos/mindbody.png" width={40} height={40} alt="Mindbody" />
            <h3 className="text-h3 text-pureWhite">Mindbody</h3>
          </div>
          
          <div className="space-y-4">
            <MetricLine label="Starting Price" value="$129/mo" negative />
            <MetricLine label="Setup Fee" value="$500+" negative />
            <MetricLine label="Contract" value="12 months" negative />
            <MetricLine label="Revenue Analytics" value="No" negative />
            <MetricLine label="Churn Prediction" value="No" negative />
            <MetricLine label="Mobile App" value="+$50/mo" negative />
          </div>
        </div>
        
        {/* GymWyse column */}
        <div className="glass-card p-8 border-electricGreen/30 bg-electricGreen/5">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" width={40} height={40} alt="GymWyse" />
            <h3 className="text-h3 text-pureWhite">GymWyse</h3>
            <Badge variant="success">Recommended</Badge>
          </div>
          
          <div className="space-y-4">
            <MetricLine label="Starting Price" value="$99/mo" positive />
            <MetricLine label="Setup Fee" value="$0" positive />
            <MetricLine label="Contract" value="Monthly" positive />
            <MetricLine label="Revenue Analytics" value="Included" positive />
            <MetricLine label="Churn Prediction" value="AI-Powered" positive />
            <MetricLine label="Mobile App" value="Included" positive />
          </div>
          
          <Button variant="primary" size="lg" className="w-full mt-6">
            Switch to GymWyse
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        
      </div>
    </div>
    
    {/* Detailed comparison sections */}
    <div className="max-w-4xl mx-auto space-y-16">
      
      <ComparisonSection
        title="Pricing & Value"
        gymwyseWins={[
          'No setup fees (Mindbody charges $500+)',
          'No long-term contracts (Mindbody locks you in for 12 months)',
          '30% cheaper for multi-location (Mindbody charges full price per location)',
          'All features included (Mindbody nickel-and-dimes with add-ons)',
        ]}
        mindbodyLoses={[
          '$500+ setup fee',
          '12-month contract minimum',
          'Full price for each location',
          'Mobile app costs extra $50/mo',
        ]}
      />
      
      <ComparisonSection
        title="Revenue Analytics"
        gymwyseWins={[
          'Real-time MRR tracking across all locations',
          'AI-powered churn prediction (catch members before they cancel)',
          'Revenue waterfall showing exactly where money comes and goes',
          'ROI calculator built-in (prove your software pays for itself)',
        ]}
        mindbodyLoses={[
          'Basic reporting only',
          'No churn prediction',
          'No revenue breakdown by stream',
          'No ROI tracking',
        ]}
      />
      
      <ComparisonSection
        title="Member Experience"
        gymwyseWins={[
          'AI Avatar coaches (6 personalities, 40% higher engagement)',
          'Integrated mobile app (included, not extra)',
          'Wearable sync ready (Apple Watch, WHOOP)',
          'QR code equipment reporting',
        ]}
        mindbodyLoses={[
          'Generic branded app',
          'Mobile app costs $50/mo extra',
          'No AI features',
          'No equipment management',
        ]}
      />
      
      <ComparisonSection
        title="Multi-Location Management"
        gymwyseWins={[
          'Portfolio dashboard (see all locations at once)',
          'Cross-location analytics and benchmarking',
          'Volume pricing (save 30% per location)',
          'Centralized member database',
        ]}
        mindbodyLoses={[
          'Separate logins per location',
          'No cross-location reporting',
          'Full price per location',
          'Siloed member data',
        ]}
      />
      
    </div>
    
    {/* Migration process */}
    <div className="mt-24 max-w-4xl mx-auto">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        Switching Is Easy
      </h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        <MigrationStep
          step="1"
          title="Book a Demo"
          description="We'll show you GymWyse and map out your migration"
        />
        <MigrationStep
          step="2"
          title="Data Import"
          description="We migrate your members, schedules, and history"
        />
        <MigrationStep
          step="3"
          title="Team Training"
          description="We train your staff (usually takes 1-2 hours)"
        />
        <MigrationStep
          step="4"
          title="Go Live"
          description="Launch with zero downtime for your members"
        />
      </div>
      
      <div className="text-center mt-12">
        <p className="text-body text-softWhite mb-6">
          Most gyms are fully migrated in 7-10 days. We handle all the heavy lifting.
        </p>
        <Button variant="primary" size="lg">
          Start Your Migration
        </Button>
      </div>
    </div>
    
    {/* Case study */}
    <div className="mt-24 max-w-4xl mx-auto">
      <div className="glass-card p-12">
        <div className="text-center mb-8">
          <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
            Case Study
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-h3 text-pureWhite mb-4">
              "We saved $6,400 in the first month"
            </h3>
            <p className="text-body text-softWhite mb-6">
              FitHub Downtown switched from Mindbody to GymWyse. They immediately 
              caught 18 members who were about to churn, recovered $2,100 in failed 
              payments, and eliminated $500 in monthly fees.
            </p>
            
            <div className="space-y-3">
              <StatLine label="Annual Savings" value="$76,800" />
              <StatLine label="Churn Reduction" value="32%" />
              <StatLine label="MRR Growth" value="+18.3%" />
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <Image src="/testimonials/sarah.jpg" width={48} height={48} className="rounded-full" alt="Sarah Chen" />
              <div>
                <div className="text-body text-pureWhite font-medium">Sarah Chen</div>
                <div className="text-caption text-coolGray">Owner, FitHub Downtown LA</div>
              </div>
            </div>
          </div>
          
          <div>
            <Image 
              src="/case-studies/fithub-results.png" 
              width={500} 
              height={400} 
              alt="FitHub results dashboard"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
```

**Create similar pages for:**
- `/vs/zenplanner` - Target: "Zen Planner alternative"
- `/vs/glofox` - Target: "Glofox vs GymWyse"
- `/vs/pushpress` - Target: "PushPress alternative"

---

### Regional Landing Pages

#### `/uk` - UK Market Page

```tsx
<section className="py-24">
  <div className="container mx-auto px-6">
    
    <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-4xl">🇬🇧</span>
        <h1 className="text-display text-pureWhite">
          Gym Software for the UK
        </h1>
      </div>
      <p className="text-body-lg text-softWhite">
        Built for UK gyms. Direct Debit (BACS), GDPR compliance, and pricing in GBP.
      </p>
    </div>
    
    {/* UK-specific features */}
    <div className="grid md:grid-cols-3 gap-8 mb-24">
      <FeatureCard
        icon={<Banknote />}
        title="Direct Debit (BACS)"
        description="Collect membership fees via Direct Debit. Reduce failed payments by 60%."
      />
      <FeatureCard
        icon={<Shield />}
        title="GDPR Compliant"
        description="Full data protection compliance. Member data hosted in UK/EU."
      />
      <FeatureCard
        icon={<PoundSterling />}
        title="GBP Pricing"
        description="All pricing in British Pounds. No currency conversion fees."
      />
    </div>
    
    {/* UK pricing */}
    <div className="max-w-4xl mx-auto mb-24">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        UK Pricing
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <PricingCard
          tier="Starter"
          price="£79"
          billingCycle="per location/month"
          features={[
            'Core platform',
            'Revenue Analytics',
            'Direct Debit integration',
            'GDPR compliance',
            'Email support',
          ]}
        />
        <PricingCard
          tier="Growth"
          price="£63"
          billingCycle="per location/month"
          description="2-5 locations"
          features={[
            'Everything in Starter',
            'Multi-location dashboard',
            'Priority support',
            'Custom branding',
          ]}
          highlighted
        />
      </div>
    </div>
    
    {/* UK gyms using GymWyse */}
    <div className="text-center">
      <p className="text-body text-softWhite mb-8">
        Join UK gyms in London, Manchester, Birmingham, and Edinburgh
      </p>
      <Button variant="primary" size="lg">
        Start Free Trial
      </Button>
    </div>
    
  </div>
</section>
```

**Create similar pages for:**
- `/au` - Australia (BPAY, AUD pricing)
- `/ae` - Middle East (RTL-ready layout, AED pricing, Arabic support mentioned)

---

### Solutions Pages

#### `/solutions/independent-gyms` - Primary Target Audience

```tsx
<section className="py-24">
  <div className="container mx-auto px-6">
    
    <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
      <span className="text-electricGreen text-sm font-medium tracking-wider uppercase">
        Built for You
      </span>
      <h1 className="text-display text-pureWhite">
        Gym Software for Independent Owners
      </h1>
      <p className="text-body-lg text-softWhite">
        You don't need enterprise software. You need tools that make you money 
        without enterprise complexity or enterprise pricing.
      </p>
    </div>
    
    {/* Problem-solution grid */}
    <div className="max-w-5xl mx-auto space-y-12 mb-24">
      
      <ProblemSolutionBlock
        problem="You're losing members and don't know why"
        solution="AI churn prediction catches at-risk members 30 days before they cancel"
        image="/solutions/churn-prediction.png"
        stats={[
          { label: 'Avg churn reduction', value: '32%' },
          { label: 'Members saved/month', value: '18' },
        ]}
      />
      
      <ProblemSolutionBlock
        problem="Failed payments are costing you thousands"
        solution="Automated payment recovery gets you paid without awkward conversations"
        image="/solutions/payment-recovery.png"
        stats={[
          { label: 'Recovery rate', value: '40%' },
          { label: 'Avg recovered/month', value: '$2,100' },
        ]}
        reversed
      />
      
      <ProblemSolutionBlock
        problem="You have no idea which services make money"
        solution="Revenue breakdown by stream shows your most profitable offerings"
        image="/solutions/revenue-streams.png"
        stats={[
          { label: 'Margin visibility', value: 'Real-time' },
          { label: 'Profit optimization', value: '+15%' },
        ]}
      />
      
    </div>
    
    {/* Independent gym features */}
    <div className="max-w-4xl mx-auto mb-24">
      <h2 className="text-h2 text-pureWhite text-center mb-12">
        Everything You Need. Nothing You Don't.
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FeatureListCard
          title="Revenue & Finance"
          features={[
            'Real-time MRR tracking',
            'Churn prediction & prevention',
            'Failed payment recovery',
            'Revenue stream breakdown',
            'Profit margin analysis',
          ]}
        />
        <FeatureListCard
          title="Member Experience"
          features={[
            'AI Avatar mobile app',
            'Booking & scheduling',
            'Digital contracts',
            'Automated communications',
            'Member portal',
          ]}
        />
        <FeatureListCard
          title="Operations"
          features={[
            'Class management',
            'Trainer scheduling',
            'Equipment tracking (QR codes)',
            'Retail & POS',
            'Maintenance logs',
          ]}
        />
        <FeatureListCard
          title="Growth Tools"
          features={[
            'Lead capture forms',
            'Trial management',
            'Referral tracking',
            'Marketing automation',
            'Member retention campaigns',
          ]}
        />
      </div>
    </div>
    
    {/* Pricing for independent gyms */}
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-h2 text-pureWhite mb-6">
        Simple Pricing for Single-Location Gyms
      </h2>
      <p className="text-body-lg text-softWhite mb-12">
        $99/month. No setup fees. No contracts. Cancel anytime.
      </p>
      
      <div className="glass-card p-12 mb-8">
        <div className="text-h1 text-electricGreen mb-4">$99/mo</div>
        <div className="text-body text-softWhite mb-8">
          Core platform + Revenue Analytics + Member App
        </div>
        
        <Button variant="primary" size="lg" className="w-full">
          Start 14-Day Free Trial
        </Button>
        
        <p className="text-caption text-dimGray mt-6">
          No credit card required • Full access • Cancel anytime
        </p>
      </div>
      
      <p className="text-body text-coolGray">
        Add modules as you grow: Retail POS (+$49), Equipment (+$39), Trainer Hub (+$59)
      </p>
    </div>
    
  </div>
</section>
```

**Create similar pages for:**
- `/solutions/multi-location` - Portfolio management focus
- `/solutions/boutique-fitness` - Yoga, pilates, barre studios
- `/solutions/reduce-churn` - Problem-solution SEO page
- `/solutions/revenue-tracking` - Problem-solution SEO page

---

## 5. Component Library

### Core Components to Build

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Primary: electricGreen background, deepSpace text
// Secondary: Glass background, white text
// Outline: Transparent bg, border, white text
// Ghost: No background, white text

// components/ui/Card.tsx
// Glass card with backdrop blur, border, hover elevation

// components/ui/Input.tsx
// Input fields with labels, validation states

// components/BentoCard.tsx
// Feature showcase card with image, stats, CTA

// components/TestimonialCard.tsx
// Quote, author, photo, metric

// components/ROICalculator.tsx
// Interactive calculator with real-time updates

// components/ComparisonTable.tsx
// Feature comparison grid

// components/PricingCard.tsx
// Pricing tier card with features list

// components/InfiniteLogoCarousel.tsx
// Smooth infinite scroll of logos

// components/AnimatedMetric.tsx
// Number that counts up on scroll into view
```

### Animation Patterns (Framer Motion)

```typescript
// Fade in on scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
}

// Stagger children
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Number count up
const countUp = {
  initial: { value: 0 },
  whileInView: { value: targetValue },
  transition: { duration: 2, ease: 'easeOut' }
}

// Hover elevation
const hoverLift = {
  whileHover: { 
    y: -4, 
    transition: { duration: 0.2 } 
  }
}
```

---

## 6. Content & SEO Strategy

### Keyword Targets (By Priority)

**High Priority (Target in first 30 days):**
1. "gym management software" (22K searches/mo)
2. "mindbody alternative" (1.2K searches/mo)
3. "gym software for small gyms" (520 searches/mo)
4. "zen planner alternative" (380 searches/mo)
5. "gym management software UK" (320 searches/mo)
6. "multi-location gym software" (210 searches/mo)
7. "gym software Australia" (210 searches/mo)
8. "crossfit gym management software" (880 searches/mo)

**Medium Priority (30-90 days):**
9. "boutique fitness software" (450 searches/mo)
10. "gym revenue analytics" (140 searches/mo)
11. "gym churn software" (90 searches/mo)
12. "gym management software Dubai" (90 searches/mo)
13. "fitness studio software London" (190 searches/mo)

### Meta Descriptions (Per Page)

```typescript
// Homepage
title: "GymWyse - Gym Management Software That Proves Its ROI"
description: "Track revenue in real-time. Predict churn. Recover $12K+/month. The operating system for independent gyms and multi-location fitness operators. Start free trial."

// Pricing
title: "GymWyse Pricing - Transparent Gym Software Pricing"
description: "No setup fees. No contracts. $99/mo for independent gyms. Compare vs Mindbody, Zen Planner, Glofox. See why 200+ gyms switched. Start 14-day free trial."

// vs/Mindbody
title: "GymWyse vs Mindbody - Why Gyms Are Switching & Saving $500+/mo"
description: "Compare GymWyse and Mindbody. No setup fees ($500 savings). No contracts. Revenue analytics included. See why independent gyms are switching. Migration takes 7-10 days."

// ROI Calculator
title: "Gym Software ROI Calculator - Calculate Your Savings"
description: "See exactly how much GymWyse will save you vs Mindbody, Zen Planner, or Glofox. Calculate churn savings, payment recovery, and net ROI. Free interactive tool."

// UK
title: "Gym Management Software UK - Direct Debit & GDPR Compliant"
description: "UK gym software with Direct Debit (BACS), GDPR compliance, and GBP pricing. Built for gyms in London, Manchester, Birmingham. Start £79/mo. Free trial."
```

### Content Hubs (Build After Core Pages)

**Blog Topics (SEO + Thought Leadership):**
- "How to Reduce Gym Churn: 12 Proven Strategies"
- "Gym Revenue Analytics: Complete Guide for Owners"
- "Multi-Location Gym Management: Portfolio Strategy"
- "Failed Payment Recovery: Get Paid Without Awkward Calls"
- "Switching from Mindbody to GymWyse: Complete Guide"

**Case Studies (Social Proof):**
- FitHub Downtown: From 3.5% to 2.3% churn in 90 days
- Apex Fitness: Managing 4 locations with one dashboard
- Zen Warrior Studio: 40% boost in member app engagement

---

## 7. Performance Optimization

### Image Strategy
```typescript
// Use Next.js Image component everywhere
<Image 
  src="/dashboard-preview.png"
  alt="Revenue dashboard"
  width={1200}
  height={800}
  placeholder="blur"
  blurDataURL="data:image/..." // Generate at build time
  quality={90}
  priority // Only for above-fold images
/>

// Image formats: WebP primary, JPEG fallback
// Image sizes: 2x retina for all screenshots
// Lazy load: Everything below fold
// Compression: TinyPNG or Squoosh before upload
```

### Code Splitting
```typescript
// Lazy load heavy components
const ROICalculator = dynamic(() => import('@/components/ROICalculator'), {
  loading: () => <CalculatorSkeleton />,
  ssr: false
})

const PricingTable = dynamic(() => import('@/components/PricingTable'), {
  loading: () => <TableSkeleton />
})
```

### Font Optimization
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif']
})

// Subset only needed characters if possible
// Preload critical fonts
// Use font-display: swap
```

---

## 8. Analytics & Conversion Tracking

### Events to Track

```typescript
// Homepage events
'hero_cta_clicked' // Calculate ROI button
'demo_button_clicked' // Book demo
'feature_card_clicked' // Bento grid interactions
'testimonial_viewed' // Social proof engagement

// Pricing page
'pricing_tier_selected'
'billing_toggle_changed' // Monthly vs Annual
'module_addon_viewed'
'competitor_comparison_viewed'

// ROI Calculator
'calculator_input_changed'
'calculator_results_viewed'
'calculator_cta_clicked'

// Comparison pages
'competitor_page_viewed' // Which competitor
'migration_cta_clicked'
'case_study_viewed'

// Regional pages
'regional_page_viewed' // UK, AU, AE
'regional_pricing_viewed'

// Form submissions
'trial_started'
'demo_booked'
'contact_form_submitted'
```

### Goal Funnels
1. Homepage → ROI Calculator → Demo Booking
2. Comparison Page → Pricing → Trial Signup
3. Regional Page → Pricing → Trial Signup
4. Homepage → Solutions Page → Pricing → Demo

---

## 9. Build Priority & Timeline

### Week 1: Core Pages
- [ ] Homepage (hero, features, ROI preview, CTA)
- [ ] Navigation (sticky header + footer)
- [ ] Design system setup (Tailwind config, colors, typography)
- [ ] Component library (Button, Card, Input basics)

### Week 2: Conversion Pages
- [ ] Pricing page (tiers, comparison table, FAQ)
- [ ] ROI Calculator (interactive, real-time)
- [ ] Demo booking page (Calendly embed or custom form)
- [ ] Thank you pages (post-signup, post-demo)

### Week 3: SEO Pages
- [ ] Comparison pages (Mindbody, Zen Planner, Glofox)
- [ ] Regional pages (UK, AU, AE)
- [ ] Solutions pages (Independent gyms, multi-location)

### Week 4: Polish & Launch
- [ ] Performance optimization (images, code splitting)
- [ ] SEO technical (schema, sitemap, hreflang)
- [ ] Analytics setup (GA4, conversion tracking)
- [ ] Launch prep (DNS, SSL, monitoring)

---

## 10. Technical Requirements Checklist

### Must-Have Before Launch
- [ ] 100/100 Lighthouse score (Performance, Accessibility, Best Practices, SEO)
- [ ] <500ms LCP on desktop
- [ ] <1.5s LCP on mobile (4G)
- [ ] All images optimized (WebP, 2x retina)
- [ ] Lazy loading below fold
- [ ] Schema markup on all pages
- [ ] hreflang tags for regional pages
- [ ] Sitemap.xml auto-generated
- [ ] Robots.txt configured
- [ ] SSL certificate
- [ ] Error pages (404, 500)
- [ ] Analytics tracking verified
- [ ] Form submissions tested
- [ ] Mobile responsive on all pages
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)

### Nice-to-Have (Post-Launch)
- [ ] Blog setup
- [ ] Case studies section
- [ ] Help center / knowledge base
- [ ] Live chat widget
- [ ] A/B testing framework
- [ ] Heatmap tracking (Hotjar/Clarity)

---

## 11. Brand Voice & Copywriting Guidelines

### Tone
- **Direct, not flowery:** "Track revenue. Predict churn." (not "Revolutionizing the fitness industry")
- **Data-driven:** Use specific numbers ($12K, 1,708% ROI, 18x payback)
- **Honest:** Don't overpromise. Prove with data.
- **Confident but not arrogant:** "Built for independent gyms" (not "The best gym software ever")

### Words to Use
- Operating system, command center, portfolio, real-time, proven, transparent
- Predict, prevent, recover, track, optimize
- Independent, multi-location, boutique, franchise

### Words to Avoid
- Revolutionary, game-changing, innovative (overused)
- Empower, leverage, synergy (corporate jargon)
- Best, #1, leading (unsubstantiated claims)

### Sentence Structure
- Short. Punchy. Scannable.
- Max 20 words per sentence
- Break up paragraphs (3-4 lines max)
- Use bullets for lists

---

## 12. Final Instructions for Claude Code

**Build this site with:**
1. Next.js 15 (App Router), TypeScript, Tailwind CSS
2. Framer Motion for animations (subtle, performant)
3. Shadcn/ui as base (customize heavily)
4. Focus on SPEED: <500ms LCP, aggressive lazy loading
5. SEO-first: Schema markup, hreflang, sitemap
6. Mobile-first responsive design
7. Accessibility: WCAG 2.1 AA minimum

**Visual Style:**
- "Financial terminal for fitness" aesthetic
- Deep space backgrounds (#0A0E27)
- Electric green accents (#00FF88) - USE SPARINGLY
- Generous whitespace (120-160px between sections)
- Glassmorphic cards with subtle borders
- High-quality dashboard screenshots (annotated)

**Content Strategy:**
- Lead with independent gyms (primary target)
- Show multi-location as proof of scale (secondary)
- Prove ROI with interactive calculator
- Target comparison keywords (vs Mindbody, Zen Planner)
- Regional pages for US, UK, AU, AE

**Conversion Focus:**
- Every section has a micro-CTA
- ROI calculator is the hero conversion tool
- Demo booking is the primary goal
- 14-day free trial is the fallback CTA

**Success Metrics:**
- Lighthouse 100/100
- Demo bookings from organic traffic within 30 days
- Rank top 10 for "mindbody alternative" within 90 days

---

## Ready to Build?

This prompt contains everything Claude Code needs to build a premium, high-converting marketing site for GymWyse. 

Start with the homepage hero section and navigation. Prioritize speed and conversion over visual complexity.

Build pages in this order:
1. Homepage
2. Pricing
3. ROI Calculator
4. vs/Mindbody
5. Regional pages (UK, AU, AE)

Let's ship a site that looks like a million bucks and converts like crazy.
