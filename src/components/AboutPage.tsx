import React from 'react';
import AboutHero from './AboutHero';
import { Timeline } from './ui/timeline';
import { timelineData } from './ui/timeline-demo';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <Timeline data={timelineData} />
    </div>
  );
}