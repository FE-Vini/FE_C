import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FE Consulting GmbH</h3>
            <p className="text-gray-400">
              Ihr Partner für nachhaltiges Recycling und Wertstoffmanagement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
            <ul className="text-gray-400">
              <li>Mo-Fr: 07:00 - 17:00</li>
              <li>Sa-So: Geschlossen</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Rechtliches</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FE Consulting GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}