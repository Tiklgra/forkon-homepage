'use client';

import {motion} from 'framer-motion';
import {TrendingUp, Shield, Clock} from 'lucide-react';

export default function CaseStudiesHero() {
  const highlights = [
    {
      icon: Shield,
      value: '85%',
      label: 'weniger Unfälle'
    },
    {
      icon: TrendingUp,
      value: '15%',
      label: 'Kostenreduktion'
    },
    {
      icon: Clock,
      value: '3',
      label: 'Monate Rollout'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-forkon-blue via-blue-800 to-blue-900 text-white section-padding py-20 lg:py-32">
      <div className="container-max">
        <motion.div
          initial={{opacity: 1, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Erfolgsgeschichten
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Echte Ergebnisse von echten Kunden. Von internationalen Rollouts bis zur Express-Installation - sehen Sie, wie ForkOn Unternehmen dabei hilft, ihre Intralogistik zu transformieren.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{opacity: 1, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.6 + index * 0.2}}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-forkon-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-forkon-orange mb-2">
                    {highlight.value}
                  </div>
                  <div className="text-blue-100">
                    {highlight.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}