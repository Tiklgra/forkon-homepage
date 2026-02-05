import {useTranslations} from 'next-intl';

export const metadata = {
  title: 'Lösungen | ForkOn',
  description: 'Herstellerunabhängige Telematik-Lösungen für Gabelstapler. GPS-Ortung, Flottenmanagement, Energie-Management und mehr.',
};

export default function SolutionsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-forkon-blue mb-4">
              Unsere Lösungen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herstellerunabhängige Telematik-Lösungen für maximale Effizienz und Sicherheit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-forkon-blue mb-3">Flottenübersicht</h3>
              <p className="text-gray-600">Zentrale Verwaltung und Echtzeit-Monitoring aller Fahrzeuge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-forkon-blue mb-3">Fahrzeugkontrolle</h3>
              <p className="text-gray-600">GPS-Ortung und umfassende Fahrzeugdaten in Echtzeit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-forkon-blue mb-3">Echtdatenbericht</h3>
              <p className="text-gray-600">Detaillierte Analysen und KPIs für datengestützte Entscheidungen.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Diese Seite befindet sich noch im Aufbau. Weitere Informationen folgen in Kürze.
            </p>
            <a 
              href="/de/audit" 
              className="btn-primary"
            >
              360° Audit anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}