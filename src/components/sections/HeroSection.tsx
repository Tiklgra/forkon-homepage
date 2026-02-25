'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-forkon-blue-light/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forkon-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container-max relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge badge-light">
              <span className="w-2 h-2 bg-forkon-orange rounded-full animate-pulse" />
              {t('eyebrow')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-white leading-[1.05]"
          >
            <span className="block">80–90% Ihrer</span>
            <span className="block">Flottenkosten sind</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-forkon-orange to-yellow-400">
                unsichtbar.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <motion.path
                  d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                  stroke="#F27220"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light"
          >
            Die meisten Unternehmen kennen die wahren Kosten ihrer Staplerflotte nicht. 
            Mit ForkOn bringen Sie Transparenz in Ihre Intralogistik.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
              className="btn-primary text-lg px-10 py-5 animate-pulse-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#lead-magnet"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-white/90 hover:text-white transition-colors"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-forkon-orange group-hover:bg-forkon-orange/20 transition-all">
                <Play className="w-5 h-5 ml-0.5" />
              </span>
              <span className="font-semibold">{t('ctaSecondary')}</span>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {[
                { value: '14', suffix: '%', label: t('stat1Label') },
                { value: '80', suffix: '%', label: t('stat2Label') },
                { value: '90', suffix: '%', label: t('stat3Label') },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="text-4xl md:text-6xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-forkon-orange">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="mt-2 text-sm md:text-base text-white/50 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Element - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-96 h-96">
            {/* Abstract Shape */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-8 rounded-full border-2 border-forkon-orange/30" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-forkon-orange/20 to-forkon-blue-light/20 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-white/10">360°</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
