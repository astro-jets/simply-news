'use client'
import { useEffect } from "react";

// Components
import Stories from './components/Stories';
import AnnouncementBanner  from './components/AnnoucementBanner';
import ContactForm from './components/ContactForm';
import Slider from './components/Slider';

export default function Home() {
  useEffect(()=>{  
    import('preline');
    import('@preline/carousel');
  },[]);
  return (
    <>
      <Slider/>
      <Stories/>
      <AnnouncementBanner />
      <ContactForm/>
    </>
  )
}
