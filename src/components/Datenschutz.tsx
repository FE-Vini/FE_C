import React from 'react';

export default function Datenschutz() {
  return (
    <section className="py-24 bg-white flex-grow">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">1. Einleitung und Geltungsbereich</h2>
              <p className="text-gray-600">
                Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten (nachfolgend „Daten") im Rahmen der Nutzung unserer Website [fe-consulting.eu] durch die FE Consulting GmbH. Personenbezogene Daten werden dabei im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">2. Verantwortlicher</h2>
              <p className="text-gray-600">Verantwortlicher im Sinne der DSGVO ist:</p>
              <div className="text-gray-600">
                <p>FE Consulting GmbH</p>
                <p>Industriestraße 7</p>
                <p>39126 Magdeburg</p>
                <p>Deutschland</p>
                <p>Telefon: +49 (0)391 6628 1440</p>
                <p>E-Mail: info@fe-consulting.eu</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verarbeitung</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">a) Beim Besuch der Website</h3>
                <p className="text-gray-600">
                  Beim Aufrufen unserer Website werden automatisch Informationen in Server-Logfiles gespeichert. Dies umfasst insbesondere:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>verwendeter Browser und ggf. das Betriebssystem</li>
                </ul>
                <p className="text-gray-600">
                  Diese Daten dienen der technischen Bereitstellung der Website sowie der Sicherstellung der IT-Sicherheit (z. B. Erkennung und Abwehr von Angriffen). Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>

                <h3 className="text-xl font-semibold text-gray-900">b) Terminvereinbarung und Kontaktaufnahme</h3>
                <p className="text-gray-600">
                  Wenn Sie über unsere Website einen Termin vereinbaren oder das Kontaktformular nutzen, erheben wir die von Ihnen angegebenen personenbezogenen Daten, beispielsweise:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>ggf. weitere Angaben zur Terminvereinbarung</li>
                </ul>
                <p className="text-gray-600">
                  Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. zur Terminvereinbarung verwendet und ggf. im Rahmen eines bestehenden Vertragsverhältnisses gespeichert. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO (sofern explizit eingeholt).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">4. Weitergabe von Daten</h2>
              <p className="text-gray-600">
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Erfüllung der oben genannten Zwecke erforderlich ist oder Sie ausdrücklich eingewilligt haben. Eine Übermittlung an staatliche Institutionen erfolgt im Rahmen gesetzlicher Verpflichtungen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">5. Cookies</h2>
              <p className="text-gray-600">
                Auf unserer Website werden – soweit vorhanden – ausschließlich technisch notwendige Cookies verwendet, die die Funktionalität der Website gewährleisten. Eine Zustimmung zu deren Einsatz ist nicht erforderlich. Sollten Sie weitere Hinweise zu Cookies benötigen, wenden Sie sich bitte an uns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">6. Datensicherheit</h2>
              <p className="text-gray-600">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verarbeiteten Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">7. Ihre Rechte als betroffene Person</h2>
              <p className="text-gray-600">
                Sie haben das Recht, Auskunft über die bei uns zu Ihrer Person gespeicherten Daten zu erhalten. Außerdem haben Sie das Recht auf Berichtigung, Löschung und Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit. Ferner können Sie der Verarbeitung Ihrer Daten widersprechen. Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannten Kontaktdaten. Des Weiteren steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">8. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-gray-600">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets den aktuellen rechtlichen Anforderungen oder Änderungen unserer Leistungen anzupassen. Bitte informieren Sie sich regelmäßig über den aktuellen Stand der Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}