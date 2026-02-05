'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Search, CheckCircle} from 'lucide-react';

export default function AuditHeroSection() {
  const t = useTranslations('Audit');

  const benefits = [
    'Herstellerunabhängige Bewertung',
    'Identifikation von Kosteneinsparungen',
    'Strategische Optimierungsempfehlungen',
    'Keine Bindung an bestimmte Hardware'
  ];

  return (
    <section className="bg-gradient-to-br from-forkon-blue via-blue-800 to-blue-900 text-white section-padding py-20 lg:py-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{opacity: 1, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <div className="flex items-center gap-2 text-forkon-orange mb-4">
              <Search className="h-6 w-6" />
              <span className="font-semibold">KOSTENLOSER AUDIT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('title')}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
            
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 1, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.4, delay: 0.6 + index * 0.1}}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-forkon-orange flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#audit-form"
              initial={{opacity: 1, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 1}}
              className="inline-block bg-forkon-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('cta')}
            </motion.a>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{opacity: 1, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="relative"
          >
            {/* Audit Process Visualization */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Ihr 360° Audit Umfang</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-forkon-orange rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Flottenanalyse & Bestandsaufnahme</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-forkon-orange rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Sicherheits- & Compliance-Check</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-forkon-orange rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Effizienz- & Kostenanalyse</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-forkon-orange rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span>Strategische Optimierungsempfehlungen</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-forkon-orange text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              100% Kostenlos
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-forkon-blue px-4 py-2 rounded-full font-semibold shadow-lg">
              30min Dauer
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}