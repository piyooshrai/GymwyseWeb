import { HeroSection } from "@/components/sections/hero";
import { SocialProofStrip } from "@/components/sections/social-proof-strip";
import { ProblemSection } from "@/components/sections/problem-section";
import { BentoFeaturesSection } from "@/components/sections/bento-features";
import { ROIPreviewSection } from "@/components/sections/roi-preview";
import { MultiLocationSection } from "@/components/sections/multi-location";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { RegionalTrustSection } from "@/components/sections/regional-trust";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ProblemSection />
      <BentoFeaturesSection />
      <ROIPreviewSection />
      <MultiLocationSection />
      <TestimonialsSection />
      <RegionalTrustSection />
      <FinalCTASection />
    </>
  );
}
