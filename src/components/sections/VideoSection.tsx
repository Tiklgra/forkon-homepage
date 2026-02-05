'use client';

import {motion} from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forkon-blue mb-4">
            Erleben Sie ForkOn in Aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie, wie unsere Telematik-Lösung Ihre Intralogistik revolutioniert
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/X5YoocqmMjE"
              title="ForkOn Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Additional Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div>
            <h3 className="text-xl font-semibold text-forkon-blue mb-4">
              Flottenmanagement Highlights
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/t3OZ4b3HURc"
                title="ForkOn Fleet Management"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-forkon-blue mb-4">
              Sicherheit & Optimierung
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/p7OxZ3PS344"
                title="ForkOn Safety Features"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}