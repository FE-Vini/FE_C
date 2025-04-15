import React from 'react';
import { FileDown } from 'lucide-react';
import { Button } from './ui/button';

const downloads = [
  {
    title: 'Qualitätsmanagement-Zertifikat',
    description: 'Unser ISO 9001:2025/26 Zertifikat für Qualitätsmanagement.',
    filePath: '/assets/QAS9001- GM3691- 25-26 - DE.pdf',
    fileName: 'QAS9001-GM3691-25-26-DE.pdf'
  },
  {
    title: 'Umweltmanagement-Zertifikat',
    description: 'Unser ISO 14001:2025/26 Zertifikat für Umweltmanagement.',
    filePath: '/assets/QAS14001- GMEN1096- 25-26- DE.pdf',
    fileName: 'QAS14001-GMEN1096-25-26-DE.pdf'
  }
];

export default function DownloadsPage() {
  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(filePath);
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL
      window.URL.revokeObjectURL(url);
      
      // Open the PDF in a new tab
      window.open(filePath, '_blank');
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <section className="py-24 bg-white flex-grow">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Downloads
        </h1>
        <div className="max-w-xl mx-auto space-y-6">
          {downloads.map((download, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <FileDown className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {download.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {download.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 font-medium"
                    onClick={() => handleDownload(download.filePath, download.fileName)}
                  >
                    <FileDown className="w-4 h-4" />
                    Herunterladen
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}