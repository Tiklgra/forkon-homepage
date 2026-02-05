'use client';

import {motion} from 'framer-motion';
import {Globe, Zap, Shield, Clock, Quote} from 'lucide-react';

export default function CaseStudiesGrid() {
  const caseStudies = [
    {
      icon: Globe,
      company: 'Peri',
      industry: 'Bau & Gerüstbau',
      title: 'Internationaler Flottenrollout in 3 Ländern',
      challenge: 'Fragmentierte Flottendaten über Regionen hinweg, inkonsistente Wartungsdokumentation, komplexe internationale Anforderungen.',
      solution: 'Angepasste ForkX-Plattform mit Echtzeit-Datenintegration über Deutschland, Belgien und Tschechien.',
      results: [
        '193 Fahrzeuge in 14 Standorten in 3 Monaten implementiert',
        '15% Reduktion der Betriebskosten',
        'Verbesserte Operator-Zufriedenheit und Compliance'
      ],
      quote: 'The introduction of the fleet management system with telematics immediately helped us make quick decisions due to the improved transparency. We were able to flexibly move forklifts between locations, avoiding downtime without relying on additional rental forklifts.',
      author: 'Reinhold Strobel, Fleet Manager',
      color: 'border-blue-200 hover:border-blue-400'
    },
    {
      icon: Zap,
      company: 'Automotive Express',
      industry: 'Automotive',
      title: 'Express Installation in einer Woche',
      challenge: '100+ Fahrzeuge mussten in einer Woche ausgerüstet werden. Jede Verzögerung hätte direkten Produktionsausfall bedeutet.',
      solution: 'Joint-Execution-Plan mit Hangcha: Vorausrüstung der Hardware, optimierte Installationsprozesse.',
      results: [
        '50+ kritische Gabelstapler vor Montag einsatzbereit',
        '0 Stunden Produktionsausfallzeit',
        '66% schnellere Installation (1h vs. 3h)',
        '50% niedrigere Installationskosten'
      ],
      quote: 'ForkOn doesn\'t just deliver technology – we deliver speed, reliability, and simplicity.',
      author: 'ForkOn Team',
      color: 'border-orange-200 hover:border-orange-400'
    },
    {
      icon: Shield,
      company: 'Duisport',
      industry: 'Logistik',
      title: 'Sicherheit & Unfallreduktion',
      challenge: 'Häufige Kollisionen durch Geschwindigkeitsüberschreitungen, unzureichende Überwachung des Fahrerverhaltens.',
      solution: 'Umfassendes Sicherheits- und Kontrollsystem mit RFID-Zugangskontrolle, Echtzeit-Schockerkennung.',
      results: [
        '85% Reduktion der Gabelstapler-Unfälle im ersten Jahr',
        '14% Reduktion der Reparatur- und Wartungskosten',
        '100% Verbesserung der Fahrer-Compliance',
        '35% Reduktion von Hochrisikoverhalten'
      ],
      quote: 'ForkOn delivered a solution that combined real-time monitoring, operator control, and customization — a level of flexibility that competitors couldn\'t match.',
      author: 'Duisport Safety Manager',
      color: 'border-green-200 hover:border-green-400'
    },
    {
      icon: Zap,
      company: 'Automotive Leader',
      industry: 'Automotive',
      title: 'Überlegene Lösung vs. Wettbewerber',
      challenge: 'Bestehende Lösung erforderte lange Lead-Times, hohe IT-Abhängigkeit und verursachte Betriebsausfälle.',
      solution: 'Next-Generation-Lösung mit 66% schnellerer Installation, benutzerfreundlichem Interface ohne IT-Abhängigkeit.',
      results: [
        '100% Reduktion der internen IT-Kosten',
        '14% Reduktion der Gesamtflottenkosten',
        '80% Reduktion von Gewaltschäden',
        '90% Reduktion der Verwaltungskosten',
        '85% niedrigere Vorlaufkosten'
      ],
      quote: 'The ability to deliver fast, scalable, and customizable solutions without relying on internal IT support gave ForkOn a clear competitive edge.',
      author: 'Automotive Fleet Manager',
      color: 'border-purple-200 hover:border-purple-400'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.2}}
                className={`border-2 ${caseStudy.color} rounded-xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-forkon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-forkon-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-forkon-orange mb-1">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {caseStudy.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700">
                      {caseStudy.title}
                    </h4>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Herausforderung</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Lösung</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Ergebnisse</h5>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-forkon-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-forkon-orange">
                  <Quote className="h-4 w-4 text-forkon-orange mb-2" />
                  <p className="text-sm text-gray-700 italic mb-2 leading-relaxed">
                    "{caseStudy.quote}"
                  </p>
                  <p className="text-xs font-medium text-gray-900">
                    — {caseStudy.author}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
          className="text-center mt-16 pt-16 border-t border-gray-200"
        >
          <h3 className="text-3xl font-bold text-forkon-blue mb-4">
            Bereit für Ihre eigene Erfolgsgeschichte?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Intralogistik optimieren. Starten Sie mit einem kostenlosen 360° Audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/de/audit"
              className="btn-primary"
            >
              360° Audit anfragen
            </a>
            <a 
              href="/de/contact"
              className="btn-secondary"
            >
              Beratung vereinbaren
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}