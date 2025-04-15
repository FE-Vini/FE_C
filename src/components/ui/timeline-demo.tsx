import React from "react";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Unsere Firmenpolitik",
    content: (
      <div className="space-y-6 text-neutral-200 text-sm md:text-base">
        <p>
          Die Dienstleistungen der FE Consulting GmbH basieren auf Kundenorientierung, Zuverlässigkeit, Fach-knowhow und Nachhaltigkeit.
        </p>
        <p>
          Bei der Ausrichtung unseres Unternehmens und den operativen Tätigkeiten berücksichtigen wir alle Stakeholder und beziehen grundsätzlich in unsere Dienstleistungsqualität den Umweltschutz mit ein.
        </p>
        <p>
          Deshalb streben wir neben der Installation der ISO 9001 (Qualitätsmanagement) Zertifizierung auch zukünftig die Zertifizierung der ISO 14001 (Umweltschutzmanagement) an.
        </p>
        <div>
          <p className="font-semibold mb-4">Zu den generellen Grundsätzen und Zielsetzungen im Rahmen des Managementsystems zählen:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>die Umsetzung und Erfüllung der zutreffenden gesetzlichen, vertraglichen und anderen Anforderungen für uns sowie für unsere Dienstleistungen.</li>
            <li>die kooperative Zusammenarbeit mit unseren Partnern, Kunden, Lieferanten, Behörden und anderen Interessengruppen sowie das Einwirken auf unsere Stakeholder unsere Ziele zu unterstützen.</li>
            <li>die regelmäßige Prüfung unseres Managementsystems auf seine Umsetzung, Durchgängigkeit und Wirksamkeit sowie die fortlaufende Verbesserung des Managementsystems.</li>
            <li>kooperative Führungskräfte, die unsere Unternehmensphilosophie und den Teamspirit vorleben.</li>
            <li>bestens qualifizierte, zuverlässige und motivierte Mitarbeiterinnen und Mitarbeiter</li>
            <li>eine gute interne und externe Kommunikation</li>
          </ul>
        </div>
        <p>
          Als Unternehmen setzen wir uns aktiv dafür ein, unsere Umweltbelastung zu minimieren und Ressourcen nachhaltig zu nutzen.
        </p>
        <p>
          Ein zentrales Ziel ist es, sämtliche Materialien, die in unseren Prozessen anfallen, möglichst wiederzuverwerten und damit Abfälle von der Verbrennung fernzuhalten.
        </p>
        <p>
          Unser Ziel ist es, recyclingfähige Materialien vollständig in den Wertstoffkreislauf zurückzuführen, sodass sie für neue Produkte genutzt werden können.
        </p>
        <p>
          Durch eine gezielte Abfalltrennung und die enge Zusammenarbeit mit zertifizierten Recyclingpartnern wollen wir sicherstellen, dass möglichst wenig Reststoffe übrig bleiben, die einer energetischen Verwertung zugeführt werden müssen.
        </p>
        <p>
          Diese Strategie ist ein wesentlicher Bestandteil unserer Unternehmensphilosophie und unseres Engagements für eine nachhaltigere Zukunft.
        </p>
      </div>
    ),
  },
  {
    title: "Unsere Qualitätspolitik",
    content: (
      <div className="space-y-6 text-neutral-200 text-sm md:text-base">
        <p>
          Die oberste Leitung verpflichtet sich, alles Notwendige zu tun, damit sie festgelegten Ziele verwirklicht und die Anforderungen der zugrunde liegenden Normen und der relevanten Richtlinien, Verordnungen und Gesetze erfüllt werden, sowie die Wirksamkeit des Managementsystems ständig verbessert wird.
        </p>
        <p>
          Die oberste Leitung versteht die Qualität der angebotenen Dienstleistungen der FE Consulting und der Zertifizierungsstelle im gesellschaftlichen und ökologischen Kontext. Wir wollen die verschiedenen Interessen des Spannungsfeldes aus kundenbezogenen, unternehmerischen, gesellschaftlichen und ökologischen Forderungen optimal befriedigen und die Grundsätze einer guten fachlichen Praxis und Qualität sowie die Anforderungen der zugrunde liegenden Norm erfüllen.
        </p>
        <p>
          Ziel ist es, langfristig eine starke Marktposition unserer Dienstleistung zu sichern und zu stärken. Die erwirtschafteten Erträge werden u.a. in moderne Ausrüstung, in die Weiterbildung der Mitarbeiter und für die Mitarbeit in Fachgremien und Expertenkreisen investiert, um auf den Stand der Technik und Wissenschaft zu bleiben und um den Kunden, Prüf- und Zertifizierungsgesellschaften stets nach aktuell gültigen Normen, Regularien und Verfahren Fachwissen bieten zu können.
        </p>
        <p>
          Jeder Mitarbeiter ist verantwortlich für die Qualität seiner Arbeit und ist aufgefordert, diese kontinuierlich zu verbessern. Die Mitarbeiter erhalten dafür das erforderliche Training und die notwendige Unterstützung. Jeder Mitarbeiter, der sich innerhalb des Unternehmens auf Leitungsebene bewegt oder sich mit Prüftätigkeiten befasst, ist verpflichtet, sich mit der Qualitätsdokumentation vertraut zu machen und die Grundsätze und Verfahrensanweisungen jederzeit umzusetzen. Inhalt und Absicht der Qualitätspolitik werden durch die nachfolgend beschriebenen (übergeordneten) Qualitätsziele definiert. Daraus abgeleitete konkrete und/oder messbare Qualitätsziele können außerhalb des Qualitätsmanagementhandbuches festgelegt werden.
        </p>
        <p>
          Innerhalb jährlicher Managementbewertungen werden die Qualitätspolitik und die Qualitätsziele diskutiert und Empfehlungen zur Verbesserung abgegeben. Erforderlichenfalls werden die Qualitätsziele angepasst, aktualisiert oder neu definiert.
        </p>
      </div>
    ),
  },
  {
    title: "Unsere Ziele",
    content: (
      <div className="space-y-6 text-neutral-200 text-sm md:text-base">
        <div>
          <h3 className="text-xl font-bold mb-4">Qualitätsziele</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">Kundenzufriedenheit steigern</p>
              <p>Bis Ende 2025 soll die Kundenzufriedenheit um 15 % steigen – durch besseren Service, optimierte Prozesse und gezielte Problemlösungen.</p>
            </li>
            <li>
              <p className="font-semibold">Fehlerquote senken</p>
              <p>Die Fehlerquote in Recycling- und Abfallwirtschaftsprozessen soll um 20 % reduziert werden, durch strengere Kontrollen und präventive Maßnahmen.</p>
            </li>
            <li>
              <p className="font-semibold">Mitarbeiterschulungen ausbauen</p>
              <p>Bis 2026 sollen alle Mitarbeitenden in Qualitätsmanagement-Methoden geschult werden, um Qualitätsbewusstsein und Eigenverantwortung zu stärken.</p>
            </li>
            <li>
              <p className="font-semibold">Nachhaltigkeit fördern</p>
              <p>Unser CO₂-Fußabdruck soll um 30 % sinken – durch ressourcenschonende Technologien, optimierte Transportwege und nachhaltige Geschäftsstrategien.</p>
            </li>
            <li>
              <p className="font-semibold">Interne Prozesse optimieren</p>
              <p>Bis 2026 setzen wir mindestens drei zentrale Prozessverbesserungen um, um Effizienz, Kostenersparnis und Qualität zu steigern.</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Umweltziele</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">CO₂-Reduktion</p>
              <p>Bis 2026 senken wir unseren CO₂-Ausstoß um 30 %, durch energieeffiziente Technologien, nachhaltige Arbeitsmodelle und optimierte Betriebsabläufe.</p>
            </li>
            <li>
              <p className="font-semibold">Erneuerbare Energien nutzen</p>
              <p>50 % unseres Energiebedarfs sollen bis 2026 aus erneuerbaren Quellen stammen, z. B. durch Solarenergie und zertifizierten Ökostrom.</p>
            </li>
            <li>
              <p className="font-semibold">Abfallmanagement optimieren</p>
              <p>Wir reduzieren Abfall um 40 % und fördern Recycling sowie eine nachhaltige Kreislaufwirtschaft.</p>
            </li>
            <li>
              <p className="font-semibold">Nachhaltige Beschaffung stärken</p>
              <p>70 % unserer Lieferanten sollen nachhaltige und ethische Kriterien erfüllen.</p>
            </li>
            <li>
              <p className="font-semibold">Mitarbeiter in Nachhaltigkeit schulen</p>
              <p>Bis 2026 werden alle Mitarbeitenden in Umwelt- und Nachhaltigkeitsthemen geschult.</p>
            </li>
            <li>
              <p className="font-semibold">Nachhaltige Mobilität fördern</p>
              <p>Wir setzen auf öffentliche Verkehrsmittel, Fahrgemeinschaften und Elektromobilität zur CO₂-Reduktion.</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export { timelineData }