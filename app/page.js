"use client";

// Plug Ins
import('preline');

// Components
import Hero from './components/Hero';
import Stories from './components/Stories';
import Services from './components/Services';
import AnnouncementBanner  from './components/AnnoucementBanner';
import ContactForm from './components/ContactForm';
import Team from './components/Team';

export default function Home() {
  return (
    <>
      <Hero/>
      <Stories/>
      <Services/>
      <AnnouncementBanner />
      <ContactForm/>
      <Team/>
    </>
  )
}
