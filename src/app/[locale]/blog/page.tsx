export const metadata = {
  title: 'Insights & Blog | ForkOn',
  description: 'Aktuelle Insights und Trends aus der Welt der Intralogistik und Telematik.',
};

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-forkon-blue mb-4">
              Insights & Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Trends, Insights und Best Practices aus der Welt der Intralogistik
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-lg p-12 mb-8">
              <h2 className="text-2xl font-semibold text-forkon-blue mb-4">
                Blog wird gelauncht
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser Insights-Bereich befindet sich derzeit noch im Aufbau. Hier werden bald spannende Artikel, Case Studies und Trends aus der Intralogistik-Welt zu finden sein.
              </p>
              <p className="text-gray-500">
                Melden Sie sich für unseren Newsletter an, um als Erster informiert zu werden.
              </p>
            </div>

            <a 
              href="/de/contact" 
              className="btn-primary"
            >
              Newsletter anmelden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}