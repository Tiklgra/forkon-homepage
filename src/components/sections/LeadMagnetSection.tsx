'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Download } from 'lucide-react';

export default function LeadMagnetSection() {
  const t = useTranslations('LeadMagnet');

  const points = ['point1', 'point2', 'point3', 'point4', 'point5'];

  return (
    <section id="lead-magnet" className="section-padding bg-gradient-to-br from-forkon-blue to-[#0d2466]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t('title')}
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {t('text')}
            </p>

            <div className="space-y-4">
              {points.map((key) => (
                <div key={key} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-forkon-orange flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  {t(key)}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-forkon-blue mb-2">
                {t('formTitle')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('formSubtitle')}
              </p>

              <form 
                action="https://forkongmbh.pipedrive.com/webforms/..." 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                    {t('labelName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-forkon-blue-light focus:ring-4 focus:ring-forkon-blue-light/20 outline-none transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                    {t('labelEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-forkon-blue-light focus:ring-4 focus:ring-forkon-blue-light/20 outline-none transition-all"
                    placeholder="max@unternehmen.de"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-600 mb-2">
                    {t('labelCompany')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-forkon-blue-light focus:ring-4 focus:ring-forkon-blue-light/20 outline-none transition-all"
                    placeholder="Mustermann GmbH"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  {t('submit')}
                  <Download className="w-5 h-5" />
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                {t('note')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
