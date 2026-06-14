import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import Story from './sections/Story';
import Reviews from './sections/Reviews';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize smooth scrolling behavior
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Story />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
