export const metadata = {
  title: 'Impressum | ForkOn',
  description: 'Impressum der ForkOn GmbH.',
};

export default function ImprintPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold text-forkon-blue mb-8">
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-forkon-blue mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-600">
                ForkOn GmbH<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland
              </p>
              
              <h3 className="text-lg font-semibold text-forkon-blue mt-6 mb-2">Kontakt</h3>
              <p className="text-gray-600">
                Telefon: +49 (0) 123 456 789<br />
                E-Mail: info@forkon.de
              </p>
            </div>
            
            <p className="text-lg text-gray-600">
              Vollständiges Impressum wird in Kürze verfügbar sein.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}