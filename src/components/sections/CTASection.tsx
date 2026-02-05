'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ArrowRight, Calendar, Search} from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="section-padding bg-gradient-to-r from-forkon-blue to-blue-800 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bereit für die digitale Transformation?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Starten Sie mit unserem kostenlosen 360° Audit und entdecken Sie das volle Potential Ihrer Intralogistik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/audit`}
                className="bg-forkon-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                360° Audit starten
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://forkongmbh.pipedrive.com/scheduler/82v7R9F2/digitale-flotten-analyse-dfa"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Demo vereinbaren
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-forkon-orange mb-2">Kostenlos</div>
              <div className="text-blue-100">360° Intralogistics Audit</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-forkon-orange mb-2">30min</div>
              <div className="text-blue-100">Strategische Demo</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-forkon-orange mb-2">100%</div>
              <div className="text-blue-100">Herstellerunabhängig</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-forkon-orange mb-2">24/7</div>
              <div className="text-blue-100">Support & Monitoring</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}