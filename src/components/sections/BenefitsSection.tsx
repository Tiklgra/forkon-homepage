'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ShieldCheck, TrendingDown, TrendingUp, Leaf} from 'lucide-react';

export default function BenefitsSection() {
  const t = useTranslations('Benefits');

  const benefits = [
    {
      icon: ShieldCheck,
      key: 'safety',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: TrendingDown,
      key: 'costs',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: TrendingUp,
      key: 'productivity',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Leaf,
      key: 'sustainability',
      color: 'text-emerald-600 bg-emerald-100'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="text-center"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`${benefit.key}.title`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${benefit.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}