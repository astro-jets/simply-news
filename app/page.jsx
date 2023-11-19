'use client'
import { useEffect } from "react";

// Components
import Stories from './components/Stories';
import AnnouncementBanner  from './components/AnnoucementBanner';
import ContactForm from './components/ContactForm';
import Slider from './components/Slider';

export default function Home() {
  useEffect(() => {
  const loadPreline = async () => {
    await import('preline');
    await import('@preline/carousel');
  };
  loadPreline();
}, []);

  return (
    <>
      <Slider/>
      <Stories/>
      <AnnouncementBanner />
      <ContactForm/>
    </>
  )
}
