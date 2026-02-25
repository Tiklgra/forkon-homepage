'use client';

import { useTranslations } from 'next-intl';

const customers = [
  'Coca-Cola', 'Deutsche Bahn', 'Bayer', 'PERI', 
  'Migros', 'duisport', 'Hermes', 'Eurogate', 'Aurubis'
];

export default function TrustBar() {
  const t = useTranslations('TrustBar');

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container-max">
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-6">
          {t('label')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {customers.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
