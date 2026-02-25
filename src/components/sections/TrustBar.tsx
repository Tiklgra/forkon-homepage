'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const customers = [
  { name: 'Coca-Cola', emphasis: true },
  { name: 'Deutsche Bahn', emphasis: true },
  { name: 'Bayer', emphasis: true },
  { name: 'PERI', emphasis: false },
  { name: 'Migros', emphasis: false },
  { name: 'duisport', emphasis: true },
  { name: 'Hermes', emphasis: false },
  { name: 'Eurogate', emphasis: false },
  { name: 'Aurubis', emphasis: false },
];

export default function TrustBar() {
  const t = useTranslations('TrustBar');

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-10"
        >
          {t('label')}
        </motion.p>
        
        {/* Logo Marquee Effect */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-12 flex-wrap"
          >
            {customers.map(({ name, emphasis }) => (
              <span
                key={name}
                className={`text-xl font-bold transition-all duration-300 hover:scale-110 cursor-default ${
                  emphasis 
                    ? 'text-forkon-blue hover:text-forkon-orange' 
                    : 'text-gray-300 hover:text-forkon-blue'
                }`}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
