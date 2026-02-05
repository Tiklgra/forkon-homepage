import CaseStudiesHero from '@/components/sections/CaseStudiesHero';
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid';

export const metadata = {
  title: 'Case Studies | ForkOn',
  description: 'Erfolgsgeschichten unserer Kunden: Von 85% weniger Unfällen bis 15% Kostenreduktion. Echte Ergebnisse mit ForkOn Telematik.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </div>
  );
}