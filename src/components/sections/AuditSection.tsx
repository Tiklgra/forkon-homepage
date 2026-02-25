'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Search, ArrowRight } from 'lucide-react';

export default function AuditSection() {
  const t = useTranslations('Audit');

  const features = ['feature1', 'feature2', 'feature3', 'feature4'];
  const areas = [
    { key: 'area1', count: 'area1Count' },
    { key: 'area2', count: 'area2Count' },
    { key: 'area3', count: 'area3Count' },
    { key: 'area4', count: 'area4Count' },
    { key: 'area5', count: 'area5Count' },
  ];

  return (
    <section id="audit" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-forkon-blue-light/10 rounded-full text-forkon-blue-light text-sm font-semibold uppercase tracking-wide mb-5">
              {t('eyebrow')}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-forkon-blue mb-5">
              {t('title')}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('text')}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forkon-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-600">
                    <strong className="text-forkon-blue">{t(key).split('–')[0]}</strong>
                    {t(key).includes('–') && ` – ${t(key).split('–')[1]}`}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
              className="btn-primary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-forkon-blue to-forkon-blue-light flex items-center justify-center">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forkon-blue">{t('cardTitle')}</h3>
                  <p className="text-gray-400">{t('cardSubtitle')}</p>
                </div>
              </div>

              {/* Areas */}
              <div className="space-y-3">
                {areas.map(({ key, count }) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-forkon-blue-light/10 transition-colors"
                  >
                    <span className="font-semibold text-forkon-blue">{t(key)}</span>
                    <span className="text-sm font-semibold text-forkon-orange bg-forkon-orange/10 px-3 py-1 rounded-full">
                      {t(count)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
