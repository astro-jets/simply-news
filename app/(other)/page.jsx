'use client'
import { useEffect } from "react";

// Components
import Stories from './components/Stories';
import AnnouncementBanner  from './components/AnnoucementBanner';
import ContactForm from './components/ContactForm';
import Slider from './components/Slider';
import Ads from "./components/Ads";
import Videos from "./components/Videos";

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
      <div className="flex flex-col md:space-x-2 md:flex-row h-full m-0">
        <div className="md:w-3/4 ">
          <Slider/>
        </div>
        <div className="md:w-2/4 h-[70vh] hidden md:flex">
          <Ads />
        </div>
      </div>
      <Stories/>
      <AnnouncementBanner />
      <Videos/>
      <ContactForm/>
    </>
  )
}
