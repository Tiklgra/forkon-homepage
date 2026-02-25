'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Users, BarChart3, FileCheck } from 'lucide-react';

const icons = [DollarSign, AlertTriangle, Users, BarChart3, FileCheck];

export default function ProblemsSection() {
  const t = useTranslations('Problems');

  const problems = [
    { key: 'problem1', icon: icons[0] },
    { key: 'problem2', icon: icons[1] },
    { key: 'problem3', icon: icons[2] },
    { key: 'problem4', icon: icons[3] },
    { key: 'problem5', icon: icons[4] },
  ];

  return (
    <section id="problems" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forkon-orange to-forkon-blue-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forkon-blue-light/10 to-forkon-orange/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-forkon-blue" />
              </div>

              {/* Stat */}
              <div className="text-3xl font-bold text-forkon-orange mb-2">
                {t(`${key}.stat`)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-forkon-blue mb-3">
                {t(`${key}.title`)}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed">
                {t(`${key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
