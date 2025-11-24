import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import ValueProps from './components/ValueProps';
import Testimonial from './components/Testimonial';
import ParkingMap from './components/ParkingMap';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const topTriggerRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    // Reveal Observer for scrolling animations
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.willChange = 'opacity, transform';
          requestAnimationFrame(() => {
            target.classList.add('is-visible');
          });
          obs.unobserve(target);
          setTimeout(() => {
            target.style.willChange = 'auto';
          }, 1000);
        }
      });
    }, { threshold: 0.15, rootMargin: "50px" });

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    // Sticky Bar Observer
    const trigger = topTriggerRef.current;
    if (!trigger) return;

    const stickyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If trigger is NOT intersecting (it scrolled out of view), show sticky bar
        setIsStickyVisible(!entry.isIntersecting);
      });
    }, { threshold: 0 });

    stickyObserver.observe(trigger);
    return () => stickyObserver.disconnect();
  }, []);

  return (
    <>
      <div id="top-trigger" ref={topTriggerRef} className="absolute top-0 h-[600px] w-full pointer-events-none opacity-0"></div>
      
      <Hero />
      
      <main className="relative z-20 -mt-6">
        <MenuCard />
        <ValueProps />
        <Testimonial />
        <ParkingMap />
      </main>

      <StickyCTA isVisible={isStickyVisible} />
      <Footer />
    </>
  );
};

export default App;