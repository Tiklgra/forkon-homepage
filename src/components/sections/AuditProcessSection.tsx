'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Search, Target, Lightbulb, Rocket} from 'lucide-react';

export default function AuditProcessSection() {
  const t = useTranslations('Audit.process');

  const steps = [
    {
      icon: Search,
      title: t('step1.title'),
      description: t('step1.description'),
      details: [
        'Bestandsaufnahme aller Gabelstapler',
        'Nutzungsmuster & Auslastung',
        'Aktuelle Sicherheitsprozesse',
        'Technische Infrastruktur'
      ]
    },
    {
      icon: Target,
      title: t('step2.title'),
      description: t('step2.description'),
      details: [
        'Effizienzpotentiale identifizieren',
        'Kosteneinsparungsmöglichkeiten',
        'Sicherheitsoptimierungen',
        'Nachhaltigkeit fördern'
      ]
    },
    {
      icon: Lightbulb,
      title: t('step3.title'),
      description: t('step3.description'),
      details: [
        'Priorisierter Maßnahmenkatalog',
        'ROI-Berechnungen',
        'Implementierungsroadmap',
        'Technologie-Empfehlungen'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{opacity: 1, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser systematischer Ansatz für maximale Erkenntnisse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 1, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.2}}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-forkon-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-forkon-blue/10 rounded-full flex items-center justify-center mb-6 mt-4">
                  <Icon className="h-8 w-8 text-forkon-blue" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-forkon-orange rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{opacity: 1, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forkon-blue mb-6">
              Zeitlicher Ablauf
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-forkon-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  Tag 1
                </div>
                <div className="text-sm font-semibold">Kick-off</div>
                <div className="text-xs text-gray-600">Termin vereinbaren</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-forkon-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  Tag 2-5
                </div>
                <div className="text-sm font-semibold">Analyse</div>
                <div className="text-xs text-gray-600">Datenerhebung</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-forkon-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  Tag 6-10
                </div>
                <div className="text-sm font-semibold">Auswertung</div>
                <div className="text-xs text-gray-600">Analyse & Bewertung</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-forkon-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  Tag 11-14
                </div>
                <div className="text-sm font-semibold">Präsentation</div>
                <div className="text-xs text-gray-600">Ergebnisse & Empfehlungen</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}