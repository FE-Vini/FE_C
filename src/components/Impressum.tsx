import React from 'react';

export default function Impressum() {
  return (
    <section className="py-24 bg-white flex-grow">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-600">
                <p>FE Consulting GmbH</p>
                <p>Industriestraße 7</p>
                <p>39126 Magdeburg</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertreten durch:</h2>
              <div className="text-gray-600">
                <p>Etienne Grube (Geschäftsführer)</p>
                <p>Frank Grube (Geschäftsführer)</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt:</h2>
              <div className="text-gray-600">
                <p>Telefon: +49 (0)391 6628 1440</p>
                <p>E-Mail: info@fe-consulting.eu</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Registereintrag:</h2>
              <div className="text-gray-600">
                <p>Eintragung im Handelsregister</p>
                <p>Registergericht: Amtsgericht Stendal</p>
                <p>Registernummer: HRB 35458</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}