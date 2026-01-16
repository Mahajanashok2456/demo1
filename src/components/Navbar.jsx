import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold font-heading tracking-wider text-white">
          TRAVEL<span className="text-[var(--color-primary)]">.ENV</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#packages" className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Packages</a>
          <a href="#about" className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">About</a>
          <a href="#founders" className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Founders</a>
          <a href="#contact" className="px-6 py-2 rounded-full border border-white/20 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 glass-panel">
            Plan My Trip
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
          <a href="#packages" onClick={() => setIsOpen(false)} className="text-lg text-center hover:text-[var(--color-primary)]">Packages</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg text-center hover:text-[var(--color-primary)]">About</a>
          <a href="#founders" onClick={() => setIsOpen(false)} className="text-lg text-center hover:text-[var(--color-primary)]">Founders</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg text-center text-[var(--color-primary)]">Plan My Trip</a>
        </div>
      )}
    </nav>
  );
}
