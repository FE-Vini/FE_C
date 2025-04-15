import React from 'react';
import { Recycle, Settings, Headphones, LineChart } from 'lucide-react';

const services = [
  {
    icon: Recycle,
    title: 'Wertstoffsammlung',
    description: 'Professionelle Sammlung und Sortierung von Wertstoffen aller Art.'
  },
  {
    icon: Settings,
    title: 'Effizienz',
    description: 'Optimierte Recyclingprozesse für maximale Ressourcenausnutzung.'
  },
  {
    icon: Headphones,
    title: 'Beratung',
    description: 'Individuelle Beratung für maßgeschneiderte Recyclinglösungen.'
  },
  {
    icon: LineChart,
    title: 'Recycling',
    description: 'Nachhaltige Verwertung mit modernster Technologie.'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Unsere Dienstleistungen
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}