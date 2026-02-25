'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function FinalCTASection() {
  const t = useTranslations('FinalCTA');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forkon-blue mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('text')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
                className="btn-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('ctaPrimary')}
              </Link>
              <Link
                href="tel:+492219865240"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('ctaSecondary')}
              </Link>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-forkon-blue-light to-forkon-blue flex items-center justify-center text-4xl text-white font-bold mb-4 shadow-xl">
              VQ
            </div>
            <h3 className="text-xl font-bold text-forkon-blue">
              {t('contactName')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('contactRole')}
            </p>
            <Link
              href="mailto:volker.quirin@forkon.de"
              className="inline-flex items-center gap-2 text-forkon-blue-light hover:text-forkon-blue transition-colors"
            >
              <Mail className="w-4 h-4" />
              volker.quirin@forkon.de
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
