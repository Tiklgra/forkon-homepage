'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 section-padding py-20 lg:py-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forkon-blue leading-tight mb-6">
              {t('headline')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {t('subheadline')}
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/audit`}
                className="btn-primary text-center"
              >
                {t('ctaPrimary')}
              </Link>
              <Link
                href="https://forkongmbh.pipedrive.com/scheduler/82v7R9F2/digitale-flotten-analyse-dfa"
                className="btn-secondary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('ctaSecondary')}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-forkon-blue">10.000+</div>
                <div className="text-gray-600">Fahrzeuge in Europa</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-forkon-blue">85%</div>
                <div className="text-gray-600">Weniger Unfälle</div>
              </div>
              <div className="sm:col-span-1 col-span-2">
                <div className="text-3xl font-bold text-forkon-blue">15%</div>
                <div className="text-gray-600">Kostenreduktion</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/hero-image.png"
                alt="ForkOn Intralogistics Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-forkon-orange text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              360° Audit
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-full font-semibold shadow-lg">
              KI-gestützt
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}