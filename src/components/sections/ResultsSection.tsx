'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ResultsSection() {
  const t = useTranslations('Results');

  const cases = [
    {
      key: 'duisport',
      stats: ['stat1', 'stat2', 'stat3', 'stat4'],
    },
    {
      key: 'automotive',
      stats: ['stat1', 'stat2', 'stat3', 'stat4'],
    },
  ];

  return (
    <section id="results" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map(({ key, stats }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-forkon-blue to-forkon-blue-light p-8 text-white">
                <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
                  {t(`${key}.industry`)}
                </span>
                <h3 className="text-2xl font-bold mb-2">{t(`${key}.company`)}</h3>
                <p className="text-white/70">{t(`${key}.subtitle`)}</p>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div
                      key={stat}
                      className="text-center p-5 bg-gray-50 rounded-xl"
                    >
                      <div className="text-3xl font-bold text-forkon-orange">
                        {t(`${key}.${stat}Value`)}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {t(`${key}.${stat}Label`)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 italic border-l-4 border-forkon-orange pl-5">
                  "{t(`${key}.quote`)}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
