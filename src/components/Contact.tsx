import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
      if (error) throw error;

      // Send to webhook
      const webhookResponse = await fetch('https://hook.eu2.make.com/wjreojzkxoj6z58k6xz62dxnclrv27ls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      if (!webhookResponse.ok) {
        throw new Error('Failed to send data to webhook');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Ihre Nachricht wurde erfolgreich gesendet! Sie werden in kürze eine Antwort von uns per Email erhalten.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white scroll-mt-20" id="contact-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Kontaktieren Sie uns
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-gray-600">+49 391 6628 1440</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p className="text-gray-600">info@fe-consulting.eu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-600">Industriestraße 7<br />39126 Magdeburg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {submitStatus.message && (
                <div className={`absolute top-0 left-0 right-0 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-16">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}