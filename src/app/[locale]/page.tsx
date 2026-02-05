import HeroSection from '@/components/sections/HeroSection';
import LogoGrid from '@/components/sections/LogoGrid';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import VideoSection from '@/components/sections/VideoSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <LogoGrid />
      <FeaturesSection />
      <BenefitsSection />
      <VideoSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}