'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Users, BarChart3, FileCheck } from 'lucide-react';

const problemsData = [
  { key: 'problem1', icon: DollarSign, color: 'from-red-500 to-orange-500' },
  { key: 'problem2', icon: AlertTriangle, color: 'from-amber-500 to-yellow-500' },
  { key: 'problem3', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { key: 'problem4', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
  { key: 'problem5', icon: FileCheck, color: 'from-green-500 to-emerald-500' },
];

export default function ProblemsSection() {
  const t = useTranslations('Problems');

  return (
    <section id="problems" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-forkon-blue-light/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-forkon-orange/5 to-transparent" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-forkon-blue">
            {t('title')}
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Problems Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsData.map(({ key, icon: Icon, color }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-forkon-orange to-forkon-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              <div className="absolute inset-[2px] rounded-2xl bg-white -z-5" />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-6`}>
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <Icon className="w-7 h-7 text-forkon-blue" />
                </div>
              </div>

              {/* Stat - Big Number */}
              <div className="stat-value mb-3">
                {t(`${key}.stat`)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-forkon-blue mb-4 group-hover:text-forkon-orange transition-colors">
                {t(`${key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {t(`${key}.text`)}
              </p>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
