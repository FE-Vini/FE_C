import React, { useState } from 'react';
import ProgressIndicator from './ui/progress-indicator';
import { isValidEmail, isValidPhone } from '../lib/validation';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string | null;
};

type FormData = {
  name: string;
  company: string;
  role: string;
  employeeCount: number;
  location: string;
  wasteTypes: string[];
  wasteVolume: string;
  email: string;
  phone: string;
};

type ValidationErrors = {
  [key in keyof FormData]?: string;
};

const wasteTypeOptions = [
  'Papier',
  'Kunststoff',
  'Metall',
  'Lebensmittel',
  'Sonstiges'
];

const wasteVolumeOptions = [
  'unter 100 Tonnen',
  '100-500 Tonnen',
  'über 500 Tonnen',
  'unsicher'
];

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'company', label: 'Firma', type: 'text' },
  { name: 'role', label: 'Rolle im Unternehmen', type: 'text' },
  { name: 'employeeCount', label: 'Anzahl Mitarbeiter', type: 'number' },
  { name: 'location', label: 'Standort', type: 'text' },
  { name: 'wasteTypes', label: 'Typische Abfallarten', type: 'checkbox' },
  { name: 'wasteVolume', label: 'Abfallmenge pro Monat', type: 'select' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Telefonnummer', type: 'tel' }
];

const validateField = (name: keyof FormData, value: any): string => {
  switch (name) {
    case 'name':
      return value.length < 2 ? 'Das Feld darf nicht leer sein' : '';
    case 'company':
      return value.length < 2 ? 'Das Feld darf nicht leer sein' : '';
    case 'role':
      return value.length < 2 ? 'Das Feld darf nicht leer sein' : '';
    case 'employeeCount':
      return value <= 0 ? 'Das Feld darf nicht leer sein' : '';
    case 'location':
      return value.length < 2 ? 'Das Feld darf nicht leer sein' : '';
    case 'wasteTypes':
      return (value as string[]).length === 0 ? 'Das Feld darf nicht leer sein' : '';
    case 'wasteVolume':
      return !value ? 'Das Feld darf nicht leer sein' : '';
    case 'email':
      return !isValidEmail(value) ? 'Das Feld darf nicht leer sein' : '';
    case 'phone':
      return !isValidPhone(value) ? 'Das Feld darf nicht leer sein' : '';
    default:
      return '';
  }
};

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: null
  });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    role: '',
    employeeCount: 0,
    location: '',
    wasteTypes: [],
    wasteVolume: '',
    email: '',
    phone: ''
  });

  const isCurrentFieldValid = () => {
    const currentField = formFields[currentStep - 1];
    const error = validateField(currentField.name as keyof FormData, formData[currentField.name as keyof FormData]);
    return !error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field on change
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleCheckboxChange = (value: string) => {
    const newWasteTypes = formData.wasteTypes.includes(value)
      ? formData.wasteTypes.filter(type => type !== value)
      : [...formData.wasteTypes, value];
    
    setFormData(prev => ({ 
      ...prev,
      wasteTypes: newWasteTypes
    }));
    
    // Validate waste types on change
    const error = validateField('wasteTypes', newWasteTypes);
    setErrors(prev => ({ ...prev, wasteTypes: error }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent form submission
      if (isCurrentFieldValid()) {
        handleNext();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      // First save to Supabase
      const { error: supabaseError } = await supabase
        .from('booking_submissions')
        .insert([{
          name: formData.name.trim(),
          company: formData.company.trim(),
          role: formData.role.trim(),
          employee_count: formData.employeeCount,
          location: formData.location.trim(),
          waste_types: formData.wasteTypes,
          waste_volume: formData.wasteVolume,
          email: formData.email.trim(),
          phone: formData.phone.trim()
        }]);

      if (supabaseError) throw supabaseError;
      
      // Then send to webhook
      const webhookResponse = await fetch('https://hook.eu2.make.com/bugabxmw3wm6dyudt09kdtafdtpttj4a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          role: formData.role.trim(),
          employeeCount: formData.employeeCount,
          location: formData.location.trim(),
          wasteTypes: formData.wasteTypes,
          wasteVolume: formData.wasteVolume,
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          submittedAt: new Date().toISOString()
        })
      });

      if (!webhookResponse.ok) {
        throw new Error('Failed to send data to webhook');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Ihre Anfrage wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        company: '',
        role: '',
        employeeCount: 0,
        location: '',
        wasteTypes: [],
        wasteVolume: '',
        email: '',
        phone: ''
      });
      setCurrentStep(1);
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

  const handleNext = () => {
    if (currentStep < formFields.length && isCurrentFieldValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFinish = async () => {
    if (currentStep === formFields.length && isCurrentFieldValid()) {
      if (!isSubmitting) {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentField = formFields[currentStep - 1];

  const renderField = () => {
    switch (currentField.type) {
      case 'checkbox':
        return (
          <div className="space-y-2">
            {wasteTypeOptions.map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.wasteTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                  className="rounded border-gray-700 text-green-500 focus:ring-green-500 bg-gray-800"
                />
                <span className="text-white">{type}</span>
              </label>
            ))}
          </div>
        );

      case 'select':
        return (
          <select
            name={currentField.name}
            value={formData[currentField.name as keyof FormData] as string}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Bitte wählen</option>
            {wasteVolumeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={currentField.type}
            name={currentField.name}
            value={formData[currentField.name as keyof FormData]}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            min={currentField.type === 'number' ? "0" : undefined}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {submitStatus.message && (
        <div className={`w-full max-w-lg p-4 rounded-lg flex items-center gap-3 animate-fadeIn ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
            : 'bg-red-500/10 text-red-500 border border-red-500/20'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      )}

      <ProgressIndicator 
        step={currentStep}
        totalSteps={formFields.length}
        canProgress={isCurrentFieldValid()}
        onNext={currentStep === formFields.length ? handleFinish : handleNext}
        onBack={handleBack}
      />
      
      <form className="w-full max-w-lg">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-white mb-2">
            <div className="flex items-center justify-between">
              <span>{currentField.label}</span>
              {isSubmitting && currentStep === formFields.length && (
                <div className="flex items-center gap-2 text-green-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">Wird gesendet...</span>
                </div>
              )}
            </div>
          </label>
          <div>
            {renderField()}
            {errors[currentField.name as keyof FormData] && (
              <p className="mt-2 text-sm text-red-400">
                {errors[currentField.name as keyof FormData]}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}