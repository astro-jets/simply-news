import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stories from './components/Stories';
import Services from './components/Services';
import AnnouncementBanner  from './components/AnnoucementBanner';
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
      <AnnouncementBanner />
      <ContactForm/>
      <Team/>
      <Footer/>
    </>
  )
}
