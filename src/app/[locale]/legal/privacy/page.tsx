export const metadata = {
  title: 'Datenschutzerklärung | ForkOn',
  description: 'Datenschutzerklärung der ForkOn GmbH.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold text-forkon-blue mb-8">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Diese Seite befindet sich noch im Aufbau. Die vollständige Datenschutzerklärung wird in Kürze verfügbar sein.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-forkon-blue mb-4">Kontakt für Datenschutzanfragen</h2>
              <p className="text-gray-600">
                ForkOn GmbH<br />
                Datenschutzbeauftragter<br />
                E-Mail: datenschutz@forkon.de
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}