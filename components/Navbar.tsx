
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Menu', href: '#' },
    { name: 'Visit', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-soft duration-500 ${
        isScrolled ? 'bg-pause-bg py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl md:text-3xl leading-none">Pause</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans mt-1 opacity-70">Coffee</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-sans tracking-widest uppercase relative group overflow-hidden"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
              <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-pause-accent">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60]"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-pause-text transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pause-text transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pause-text transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Full Screen Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-pause-bg z-50 flex flex-col items-center justify-center space-y-12 transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-5xl italic hover:text-pause-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-12 text-center opacity-40">
            <p className="text-xs uppercase tracking-[0.2em]">Port Harcourt</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
