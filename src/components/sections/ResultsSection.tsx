'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingDown, Shield, Clock, Zap } from 'lucide-react';

const caseIcons = [TrendingDown, Shield, Clock, Zap];

export default function ResultsSection() {
  const t = useTranslations('Results');

  const cases = [
    {
      key: 'duisport',
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      stats: ['stat1', 'stat2', 'stat3', 'stat4'],
    },
    {
      key: 'automotive',
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      stats: ['stat1', 'stat2', 'stat3', 'stat4'],
    },
  ];

  return (
    <section id="results" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-forkon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-forkon-orange/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="badge mb-6">Case Studies</span>
          <h2 className="text-forkon-blue">{t('title')}</h2>
          <p className="mt-6 text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map(({ key, gradient, stats }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                {/* Card Header - Gradient */}
                <div className={`relative bg-gradient-to-r ${gradient} p-8 pb-12`}>
                  {/* Noise Overlay */}
                  <div className="absolute inset-0 opacity-10" 
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} 
                  />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-4">
                      {t(`${key}.industry`)}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {t(`${key}.company`)}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {t(`${key}.subtitle`)}
                    </p>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border-4 border-white/10" />
                </div>

                {/* Card Body */}
                <div className="bg-white p-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, i) => {
                      const Icon = caseIcons[i];
                      return (
                        <div
                          key={stat}
                          className="group/stat relative bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-forkon-orange/5 hover:to-forkon-blue-light/5 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-gray-400 mb-3 group-hover/stat:text-forkon-orange transition-colors" />
                          <div className="stat-value text-3xl">
                            {t(`${key}.${stat}Value`)}
                          </div>
                          <div className="text-sm text-gray-500 mt-2 font-medium">
                            {t(`${key}.${stat}Label`)}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -left-2 top-0 text-6xl text-forkon-orange/20 font-serif">"</div>
                    <blockquote className="pl-8 text-gray-600 italic leading-relaxed border-l-4 border-forkon-orange">
                      {t(`${key}.quote`)}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
