import React from 'react';
import { Check } from 'lucide-react';
import { Globe } from "@/components/ui/globe";

const features = [
  {
    title: "kein Risiko",
  },
  {
    title: "jede Partei gewinnt",
  },
  {
    title: "bis zu 30% Kosten einsparen",
  }
];

export default function AsconManagement() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Umweltbewusstsein, das sich für alle auszahlt - mit FE Consulting!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-gray-50 p-4 rounded-lg"
                >
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-700">
              <p>
                Seit vielen Jahren setzen wir uns mit Leidenschaft für den Umweltschutz ein und unterstützen unsere Kunden mit maßgeschneiderten Lösungen zur effizienten Wiederverwertung von Materialien.
              </p>
              <p>
                Unsere Wurzeln liegen in der Überzeugung, dass Recycling nicht nur wirtschaftlich sinnvoll, sondern auch eine Verantwortung gegenüber unserer Umwelt ist. Diese Werte prägen unser Handeln bis heute.
              </p>
              <p>
                Was uns auszeichnet? Unsere familiäre Verbundenheit, ein starkes Team und ein enger Kundenkontakt. Wir bieten Beratung, Sammlung und Probesortierung von Wertstoffen sowie nachhaltige Abfallmanagementlösungen an. Unser Ziel ist es, Ressourcen zu schonen und gemeinsam mit Ihnen eine nachhaltigere Zukunft zu gestalten.
              </p>
              <p>
                Lassen Sie uns zusammen die Welt ein Stück grüner machen – kontaktieren Sie uns!
              </p>
              <p>
                Ihre Familie Grube.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square">
              <Globe className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}