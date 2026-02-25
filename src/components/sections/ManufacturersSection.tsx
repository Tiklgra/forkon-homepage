'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const manufacturers = ['Still', 'Toyota', 'Jungheinrich', 'Linde', 'Hangcha', 'Stöcklin'];

export default function ManufacturersSection() {
  const t = useTranslations('Manufacturers');

  return (
    <section className="section-padding bg-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8"
        >
          {manufacturers.map((name) => (
            <span
              key={name}
              className="text-2xl font-bold text-forkon-blue/70 hover:text-forkon-blue transition-colors"
            >
              {name}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 italic"
        >
          {t('more')}
        </motion.p>
      </div>
    </section>
  );
}
