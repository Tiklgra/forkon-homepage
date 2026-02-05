import AuditHeroSection from '@/components/sections/AuditHeroSection';
import AuditProcessSection from '@/components/sections/AuditProcessSection';
import AuditBenefitsSection from '@/components/sections/AuditBenefitsSection';
import AuditFormSection from '@/components/sections/AuditFormSection';

export const metadata = {
  title: '360° Intralogistics Audit | ForkOn',
  description: 'Kostenloses 360° Audit für Ihre Intralogistik. Decken Sie verborgene Potentiale auf und optimieren Sie Ihre Gabelstapler-Flotte strategisch.',
};

export default function AuditPage() {
  return (
    <div className="pt-20">
      <AuditHeroSection />
      <AuditProcessSection />
      <AuditBenefitsSection />
      <AuditFormSection />
    </div>
  );
}