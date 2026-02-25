import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ProblemsSection from '@/components/sections/ProblemsSection';
import AuditSection from '@/components/sections/AuditSection';
import FleetSection from '@/components/sections/FleetSection';
import ResultsSection from '@/components/sections/ResultsSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import ManufacturersSection from '@/components/sections/ManufacturersSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <main>
      {/* Hero: Problem-oriented headline */}
      <HeroSection />
      
      {/* Trust Bar: Customer logos */}
      <TrustBar />
      
      {/* Problems: 5 pain points from ICP research */}
      <ProblemsSection />
      
      {/* Audit: Phase 1 - 360° Intralog Audit */}
      <AuditSection />
      
      {/* Fleet: Phase 2 - ForkX Cloud + ForkLink */}
      <FleetSection />
      
      {/* Results: Case Studies with KPIs */}
      <ResultsSection />
      
      {/* Lead Magnet: Checklist download */}
      <LeadMagnetSection />
      
      {/* Manufacturers: Brand independence */}
      <ManufacturersSection />
      
      {/* Final CTA: Contact */}
      <FinalCTASection />
    </main>
  );
}
