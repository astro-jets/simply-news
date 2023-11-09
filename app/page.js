import Image from 'next/image'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stories from './components/Stories';
import Services from './components/Services';
import AnnooucementBaner from './components/AnnoucementBanner';
import ContactForm from './components/ContactForm';
import Team from './components/Team';
import Footer from './components/Footer';
require ('preline/plugin');

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stories/>
      <Services/>
      <AnnooucementBaner/>
      <ContactForm/>
      <Team/>
      <Footer/>
    </>
  )
}
