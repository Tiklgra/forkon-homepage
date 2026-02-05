'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {
  MapPin,
  Truck,
  Battery,
  Brain,
  BarChart3,
  ShieldCheck,
  PieChart,
  FileText,
  ClipboardCheck
} from 'lucide-react';

export default function FeaturesSection() {
  const t = useTranslations('Features');

  const features = [
    {
      icon: MapPin,
      key: 'gpsTracking'
    },
    {
      icon: Truck,
      key: 'fleetManagement'
    },
    {
      icon: Battery,
      key: 'energyManagement'
    },
    {
      icon: Brain,
      key: 'aiRecommendations'
    },
    {
      icon: BarChart3,
      key: 'utilization'
    },
    {
      icon: ShieldCheck,
      key: 'accessControl'
    },
    {
      icon: PieChart,
      key: 'dashboard'
    },
    {
      icon: FileText,
      key: 'documentManagement'
    },
    {
      icon: ClipboardCheck,
      key: 'preOpCheck'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="group p-6 rounded-xl border border-gray-200 hover:border-forkon-orange hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forkon-blue/10 group-hover:bg-forkon-orange/10 rounded-lg flex items-center justify-center transition-colors">
                      <Icon className="h-6 w-6 text-forkon-blue group-hover:text-forkon-orange transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`${feature.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}