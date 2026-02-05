'use client';

import {motion} from 'framer-motion';
import {TrendingUp, Shield, Clock, DollarSign, Users, Zap} from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Shield,
      value: '85%',
      label: 'Reduktion Gabelstapler-Unfälle',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: DollarSign,
      value: '15%',
      label: 'Reduktion Betriebskosten',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Clock,
      value: '66%',
      label: 'Schnellere Installation',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: TrendingUp,
      value: '14%',
      label: 'Reduktion Gesamtflottenkosten',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Users,
      value: '10.000+',
      label: 'Fahrzeuge verwaltet',
      color: 'text-indigo-600 bg-indigo-100'
    },
    {
      icon: Zap,
      value: '3',
      label: 'Monate Rollout (193 Fahrzeuge)',
      color: 'text-emerald-600 bg-emerald-100'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            Messbare Erfolge unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reale Ergebnisse aus echten Kundenprojekten - von Sicherheit bis Kostenersparnis
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="text-center group"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional prominent stats */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.6}}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-forkon-orange mb-2">280%</div>
            <div className="text-gray-600">Kundenwachstum in 12 Monaten</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-forkon-orange mb-2">90%</div>
            <div className="text-gray-600">Kundenbindungsrate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-forkon-orange mb-2">98%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}