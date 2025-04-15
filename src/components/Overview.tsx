import React from 'react';
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/grid-pattern-card";

const cards = [
  {
    title: "Die Ausgangssituation",
    description: "Ein großes produzierendes Unternehmen erzeugt regelmäßig erhebliche Mengen an Papierabfällen.\n\nDerzeit arbeitet das Unternehmen mit einem Entsorgungsdienstleister zusammen, der die Papierreste in festen Intervallen abholt. Die Wertstoffe werden dabei unsortiert entsorgt, was deren Weiterverwertung erschwert und die Entsorgungskosten unnötig in die Höhe treibt."
  },
  {
    title: "Der Ansatz",
    description: "Wir sahen das Problem darin, dass die Papierreste unsortiert zwischengelagert wurden, was Platzprobleme verursachte und den Recyclingwert minderte. Zudem sind die Transportwege des aktuellen Entsorgers lang und ineffizient. Eine verbesserte Trennung und der Einsatz einer Presse könnten Kosten senken und die Wertstoffverwertung optimieren."
  },
  {
    title: "Die Lösung",
    description: "Das Unternehmen wechselt zu einem spezialisierten Papierrecycler mit kürzeren Transportwegen, wodurch die Wertstoffe direkt in den Rohstoffkreislauf zurückgeführt werden. Durch den Einsatz einer Presse werden die Abholungen reduziert, die Lagerung optimiert und der Sortierungsgrad verbessert. Hochwertig getrennte Papierreste können nun weiterverkauft werden, was die Entsorgungskosten senkt und zusätzliche Einnahmen generiert."
  }
];

export default function Overview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Fallbeispiel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <GridPatternCard key={index} className="shadow-xl h-full">
              <GridPatternCardBody className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {card.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {card.description}
                </p>
              </GridPatternCardBody>
            </GridPatternCard>
          ))}
        </div>
      </div>
    </section>
  );
}