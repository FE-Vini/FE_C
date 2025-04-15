import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { BackgroundBeams } from './ui/background-beams';

const SHOW_BOOKING = true; // Toggle to show/hide the booking section

export default function Calendly() {
  if (!SHOW_BOOKING) return null;

  return (
    <section id="booking-form" className="py-24 bg-neutral-950 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Interesse? Dann füllen Sie das Formular aus und wir melden uns bei Ihnen.
        </h2>
        <div className="max-w-2xl mx-auto relative z-10">
          <BookingForm />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}