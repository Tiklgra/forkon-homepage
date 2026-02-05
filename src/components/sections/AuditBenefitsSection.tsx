'use client';

import {motion} from 'framer-motion';
import {TrendingUp, Shield, Euro, Leaf, Clock, Users} from 'lucide-react';

export default function AuditBenefitsSection() {
  const benefits = [
    {
      icon: Euro,
      title: 'Kosteneinsparungen identifizieren',
      description: 'Durchschnittlich 15-30% Einsparpotential',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Sicherheit maximieren',
      description: 'Unfallrisiko um bis zu 40% reduzieren',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Effizienz steigern',
      description: 'Produktivitätssteigerung von 20-35%',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Leaf,
      title: 'Nachhaltigkeit fördern',
      description: 'CO2-Reduktion durch optimierte Nutzung',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Clock,
      title: 'Zeit sparen',
      description: 'Automatisierte Prozesse und weniger Ausfälle',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Users,
      title: 'Mitarbeiterzufriedenheit',
      description: 'Bessere Arbeitsplätze und mehr Sicherheit',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{opacity: 1, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            Was Sie vom Audit erwarten können
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konkrete Erkenntnisse und messbare Verbesserungen für Ihre Intralogistik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 1, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}