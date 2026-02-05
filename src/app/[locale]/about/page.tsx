export const metadata = {
  title: 'Über uns | ForkOn',
  description: 'Erfahren Sie mehr über ForkOn - Europas führende Cloud-Telematikplattform für strategische Intralogistik-Optimierung.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-forkon-blue mb-4">
              Über ForkOn
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europas führende Cloud-Telematikplattform für strategische Intralogistik-Optimierung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-forkon-blue mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Wir repositionieren uns 2026 von "Nr.1 Flottenmanagement" hin zu "More than telematics: Strategic Intralogistics Optimization" — ein strategischer Partner, kein reiner Produktanbieter.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Über 10.000 Gabelstapler haben wir bereits digitalisiert. Unser herstellerunabhängiger Ansatz ermöglicht es uns, die beste Lösung für jeden Kunden zu finden.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-forkon-blue mb-4">Unsere Werte</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-forkon-orange rounded-full"></div>
                  <span>Herstellerunabhängigkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-forkon-orange rounded-full"></div>
                  <span>Strategische Partnership</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-forkon-orange rounded-full"></div>
                  <span>Kontinuierliche Innovation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-forkon-orange rounded-full"></div>
                  <span>Nachhaltigkeit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Diese Seite befindet sich noch im Aufbau. Weitere Informationen über unser Team und unsere Geschichte folgen in Kürze.
            </p>
            <a 
              href="/de/contact" 
              className="btn-primary"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}