'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-forkon-blue via-[#0d2466] to-forkon-blue-light overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(58, 177, 252, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(242, 114, 32, 0.1) 0%, transparent 50%)
            `
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forkon-orange/15 border border-forkon-orange/30 rounded-full text-forkon-orange text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-forkon-orange rounded-full animate-pulse" />
            {t('eyebrow')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t('headline').split('unsichtbar').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-forkon-orange">unsichtbar.</span>}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            {t('subheadline')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#lead-magnet"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
            >
              {t('ctaSecondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-16 pt-10 border-t border-white/10"
          >
            <div>
              <div className="text-4xl font-bold text-white">
                {t('stat1Value')}<span className="text-forkon-orange">%</span>
              </div>
              <div className="text-sm text-white/60 mt-1">{t('stat1Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">
                {t('stat2Value')}<span className="text-forkon-orange">%</span>
              </div>
              <div className="text-sm text-white/60 mt-1">{t('stat2Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">
                {t('stat3Value')}<span className="text-forkon-orange">%</span>
              </div>
              <div className="text-sm text-white/60 mt-1">{t('stat3Label')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
