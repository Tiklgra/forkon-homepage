'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Star, Quote} from 'lucide-react';

export default function TestimonialsSection() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      quote: "The introduction of the fleet management system with telematics immediately helped us make quick decisions due to the improved transparency. We were able to flexibly move forklifts between locations, avoiding downtime without relying on additional rental forklifts.",
      author: "Reinhold Strobel",
      position: "Fleet Manager",
      company: "Peri",
      rating: 5
    },
    {
      quote: "Mit ForkOn haben wir unsere Flotteneffizienz um 30% gesteigert und gleichzeitig die Sicherheit erheblich verbessert.",
      author: "Michael Schmidt",
      position: "Logistikleiter",
      company: "Deutsche Bahn",
      rating: 5
    },
    {
      quote: "Die herstellerunabhängige Lösung war genau das, was wir gesucht haben. ForkOn integriert sich perfekt in unsere bestehende Infrastruktur.",
      author: "Sarah Weber", 
      position: "HSE Manager",
      company: "Migros",
      rating: 5
    },
    {
      quote: "Das 360° Audit von ForkOn hat uns Einsparpotentiale aufgezeigt, die wir nie für möglich gehalten hätten.",
      author: "Thomas Müller",
      position: "Geschäftsführer",
      company: "Hettich",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-forkon-blue text-white">
      <div className="container-max">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className="bg-white/10 backdrop-blur rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-forkon-orange fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-forkon-orange mb-4 opacity-60" />
              
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-white/80 text-sm">
                  {testimonial.position}
                </div>
                <div className="text-forkon-orange text-sm font-medium">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-forkon-orange mb-2">10.000+</div>
            <div className="text-white/80">Fahrzeuge in Europa</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-forkon-orange mb-2">280%</div>
            <div className="text-white/80">Kundenwachstum (12 Mon.)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-forkon-orange mb-2">90%</div>
            <div className="text-white/80">Kundenbindungsrate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-forkon-orange mb-2">85%</div>
            <div className="text-white/80">Weniger Unfälle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}