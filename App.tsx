import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import WhatsAppCTA from './components/WhatsAppCTA';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-pause-bg selection:bg-pause-accent selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <Story />
        
        {/* Menu Section Preview */}
        <section id="menu" className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium">Curated Selection</span>
            <h2 className="font-serif italic text-5xl md:text-7xl mt-6 mb-20">The Daily Menu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <div className="group">
                <div className="aspect-[4/5] bg-pause-secondary mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Black Coffee" />
                </div>
                <h3 className="font-serif text-2xl italic">Signature Black</h3>
                <p className="text-sm tracking-widest uppercase mt-2 opacity-50">Single Origin</p>
              </div>
              
              <div className="group">
                <div className="aspect-[4/5] bg-pause-secondary mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="White Coffee" />
                </div>
                <h3 className="font-serif text-2xl italic">Oat Flat White</h3>
                <p className="text-sm tracking-widest uppercase mt-2 opacity-50">Creamy & Balanced</p>
              </div>
              
              <div className="group">
                <div className="aspect-[4/5] bg-pause-secondary mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cold Brew" />
                </div>
                <h3 className="font-serif text-2xl italic">Hibiscus Brew</h3>
                <p className="text-sm tracking-widest uppercase mt-2 opacity-50">Floral & Refreshing</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Visit Section */}
        <section id="visit" className="py-32 px-6 md:px-12 bg-pause-bg">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 order-2 md:order-1">
              <span className="text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium">Find Us</span>
              <h2 className="font-serif italic text-5xl md:text-7xl mt-6 mb-8">Port Harcourt.</h2>
              <div className="space-y-6 text-lg font-light tracking-wide text-pause-text/70">
                <p>Gra Phase 2, Port Harcourt, Nigeria.</p>
                <div className="h-px w-20 bg-pause-accent/20"></div>
                <p>Monday — Friday: 07:00 – 20:00</p>
                <p>Saturday — Sunday: 08:00 – 21:00</p>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full aspect-square md:aspect-auto md:h-[600px] bg-pause-secondary rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-90" alt="Pause Coffee Interior" />
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <footer className="py-12 border-t border-black/5 bg-pause-bg">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center opacity-40">
          <p className="text-[10px] uppercase tracking-[0.3em]">&copy; 2024 Pause Coffee Co.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 text-[10px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-pause-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-pause-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-pause-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <WhatsAppCTA />
    </div>
  );
};

export default App;