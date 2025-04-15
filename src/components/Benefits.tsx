import React from 'react';
import { Warehouse, Leaf, PiggyBank } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = [
  {
    icon: Warehouse,
    title: 'die Logistik zu optimieren',
    description: 'Ein wirtschaftlich effizientes Entsorgungsmanagement erfordert ständige Überprüfung: Wann wird ein Stoff ein Wertstoff? Wie lässt sich der Sortierungsgrad optimieren? Sind die Kosten marktgerecht? Nur mit vollständiger Kostentransparenz kann eine nachhaltige und wirtschaftliche Entsorgung sichergestellt werden.'
  },
  {
    icon: Leaf,
    title: 'nachhaltiger zu wirtschaften',
    description: 'Ökologisches Verantwortungsbewusstsein und die Beachtung des Verursacherprinzips sind unverzichtbar. Ein umweltfreundlicher Ansatz gewinnt zunehmend an Bedeutung, um als Unternehmen und Arbeitgeber attraktiv zu bleiben. Statt auf Verbrennung und Deponierung zu setzen, sollten Abfälle nachhaltig recycelt, wiederverwendet und verwertet werden, um langfristige Entsorgungssicherheit zu gewährleisten.'
  },
  {
    icon: PiggyBank,
    title: 'Kosten zu sparen',
    description: 'Ein wirtschaftlich effizientes Entsorgungsmanagement erfordert ständige Überprüfung: Wann wird ein Stoff zum Wertstoff? Wie lässt sich der Sortierungsgrad optimieren? Sind die Kosten marktgerecht? Nur mit vollständiger Kostentransparenz kann eine nachhaltige und wirtschaftliche Entsorgung sichergestellt werden.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Es ist erschreckend, wie viel ungenutztes Potenzial im Entsorgungsprozess vieler Unternehmen verborgen bleibt.
          </h2>
          
          <p className="text-center text-gray-600 mb-12">
            Die Experten von FE Consulting beraten Sie dazu und erstellen unabhängig passende Konzepte für Sie, um...
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="tab-0" className="w-full">
            <div className="flex justify-center mb-4">
              <TabsList className="inline-flex h-auto rounded-none border-b border-gray-200 bg-transparent p-0 w-full flex-wrap">
                {benefits.map((benefit, index) => (
                  <TabsTrigger
                    key={index}
                    value={`tab-${index}`}
                    className="relative flex-col rounded-none px-1 py-1 text-[11px] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-green-600 flex-1"
                  >
                    <benefit.icon className="mb-1 w-6 h-6 text-green-600" />
                    <span className="text-gray-700 line-clamp-2 text-center">{benefit.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {benefits.map((benefit, index) => (
              <TabsContent key={index} value={`tab-${index}`}>
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{benefit.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
        </div>
      </div>
    </section>
  );
}