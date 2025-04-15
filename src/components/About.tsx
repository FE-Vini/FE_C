import React from 'react';
import { Users, Heart, Leaf } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Familiäre Verbundenheit',
    description: 'Als Familienunternehmen leben wir unsere Werte und schaffen eine persönliche Atmosphäre.'
  },
  {
    icon: Heart,
    title: 'Starkes Team',
    description: 'Unsere Mitarbeiter sind das Herzstück unseres Unternehmens und Experten in ihrem Bereich.'
  },
  {
    icon: Leaf,
    title: 'Nachhaltigkeit',
    description: 'Wir setzen uns aktiv für Umweltschutz und ressourcenschonendes Recycling ein.'
  }
];

export default function About() {
  return (
    <section className="py-24 bg-white" id="über-uns">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Über uns
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Willkommen bei FE Consulting GmbH, Ihrem familiengeführten Experten für Recycling und Nachhaltigkeit. Seit vielen Jahren setzen wir uns mit Leidenschaft für den Umweltschutz ein und unterstützen unsere Kunden mit maßgeschneiderten Lösungen zur effizienten Wiederverwertung von Materialien.
            </p>
            <p>
              Unsere Wurzeln liegen in der Überzeugung, dass Recycling nicht nur wirtschaftlich sinnvoll, sondern auch eine Verantwortung gegenüber unserer Umwelt ist. Diese Werte prägen unser Handeln bis heute.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <value.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed mb-8">
            Was uns auszeichnet? Unsere familiäre Verbundenheit, ein starkes Team und ein enger Kundenkontakt. Wir bieten Beratung, Sammlung und Probesortierung von Wertstoffen sowie nachhaltige Abfallmanagementlösungen an. Unser Ziel ist es, Ressourcen zu schonen und gemeinsam mit Ihnen eine nachhaltigere Zukunft zu gestalten.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Lassen Sie uns zusammen die Welt ein Stück grüner machen – kontaktieren Sie uns!
          </p>
          <p className="text-xl font-semibold text-green-600">
            Ihre Familie Grube.
          </p>
        </div>
      </div>
    </section>
  );
}