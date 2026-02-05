'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Mail, Phone, MapPin, Send} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich bei Ihnen.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-forkon-blue mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('getInTouch')} - Wir freuen uns auf Ihre Nachricht
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-forkon-blue mb-8">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forkon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-forkon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@forkon.de</p>
                    <p className="text-gray-600">support@forkon.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forkon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-forkon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+49 (0) 123 456 789</p>
                    <p className="text-sm text-gray-500">Mo-Fr: 8:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forkon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-forkon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      ForkOn GmbH<br />
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-forkon-blue/5 rounded-lg">
                <h3 className="font-semibold text-forkon-blue mb-2">Schneller Einstieg</h3>
                <p className="text-gray-600 mb-4">
                  Starten Sie direkt mit unserem kostenlosen 360° Audit oder buchen Sie eine Demo.
                </p>
                <div className="flex gap-3">
                  <a href="/de/audit" className="btn-primary text-sm">360° Audit</a>
                  <a 
                    href="https://forkongmbh.pipedrive.com/scheduler/82v7R9F2/digitale-flotten-analyse-dfa" 
                    className="btn-secondary text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo buchen
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-forkon-blue mb-6">
                Nachricht senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forkon-blue focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forkon-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  {t('send')}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}