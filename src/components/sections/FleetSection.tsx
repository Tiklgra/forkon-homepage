'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function FleetSection() {
  const t = useTranslations('Fleet');

  const softwareFeatures = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'];
  const hardwareFeatures = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'];

  return (
    <section id="fleet" className="section-padding bg-forkon-blue relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, rgba(58, 177, 252, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(242, 114, 32, 0.15) 0%, transparent 50%)
          `
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-white/70">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Software Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <span className="inline-block px-3 py-1 bg-forkon-orange rounded-lg text-xs font-bold text-white uppercase tracking-wide mb-5">
              {t('software.badge')}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('software.title')}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('software.text')}
            </p>
            <div className="space-y-3">
              {softwareFeatures.map((key) => (
                <div key={key} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-forkon-blue-light flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-forkon-blue" />
                  </div>
                  {t(`software.${key}`)}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hardware Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <span className="inline-block px-3 py-1 bg-forkon-orange rounded-lg text-xs font-bold text-white uppercase tracking-wide mb-5">
              {t('hardware.badge')}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('hardware.title')}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('hardware.text')}
            </p>
            <div className="space-y-3">
              {hardwareFeatures.map((key) => (
                <div key={key} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-forkon-blue-light flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-forkon-blue" />
                  </div>
                  {t(`hardware.${key}`)}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="https://forkongmbh.pipedrive.com/scheduler/QhVdqIaB/digitale-flottenanalyse-bei-forkon"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
