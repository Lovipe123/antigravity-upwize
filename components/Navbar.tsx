
import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The System', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Why Us?', href: '#why-us' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between px-6 h-16 rounded-2xl transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className={`text-2xl font-black tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-800'}`}>Upwize</span>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="font-bold text-sm uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="hidden sm:block font-bold text-sm uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <a href="#cta" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0">
                Free Audit
              </a>
            </div>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
