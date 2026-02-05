'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Send, CheckCircle, Mail, Phone} from 'lucide-react';

export default function AuditFormSection() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    fleetSize: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Pipedrive or another form handler
    console.log('Form submitted:', formData);
    // For now, just alert
    alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="audit-form" className="section-padding bg-gradient-to-r from-forkon-blue to-blue-800 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Content */}
          <motion.div
            initial={{opacity: 1, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <h2 className="text-4xl font-bold mb-6">
              Starten Sie Ihr kostenloses 360° Audit
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen, um Ihr individuelles Audit zu planen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-forkon-orange flex-shrink-0" />
                <span className="text-blue-100">100% kostenlos und unverbindlich</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-forkon-orange flex-shrink-0" />
                <span className="text-blue-100">Herstellerunabhängige Bewertung</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-forkon-orange flex-shrink-0" />
                <span className="text-blue-100">Konkrete Handlungsempfehlungen</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-forkon-orange flex-shrink-0" />
                <span className="text-blue-100">ROI-Berechnungen inklusive</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-4">Direkter Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-forkon-orange" />
                  <span className="text-blue-100">audit@forkon.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-forkon-orange" />
                  <span className="text-blue-100">+49 (0) 123 456 789</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{opacity: 1, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Flottengröße
                    </label>
                    <select
                      id="fleetSize"
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="1-10">1-10 Fahrzeuge</option>
                      <option value="11-50">11-50 Fahrzeuge</option>
                      <option value="51-100">51-100 Fahrzeuge</option>
                      <option value="100+">Über 100 Fahrzeuge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihre aktuelle Situation und Ihre Ziele..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forkon-orange hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Kostenloses Audit anfragen
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}