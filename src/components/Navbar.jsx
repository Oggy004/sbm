import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { contactDetails } from '../data/websiteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.classList.remove('light');
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy/85 backdrop-blur-md border-b border-gold/30 py-3 shadow-lg' 
        : 'bg-transparent border-b border-white/5 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="SBM Contracting" 
              className="h-10 w-auto object-contain bg-[#ffffff] p-1 rounded-sm border border-gold/20 group-hover:border-gold transition-colors duration-300"
            />
            <div className="flex flex-col">
              <span className="font-barlow font-extrabold text-xl tracking-wider text-white leading-tight uppercase group-hover:text-gold transition-colors duration-300">
                SBM
              </span>
              <span className="text-[9px] tracking-widest text-gold font-bold uppercase -mt-0.5">
                Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-gold ${
                  isActive 
                    ? 'text-gold border-b-2 border-gold pb-1' 
                    : 'text-slate-300 pb-1'
                }`}
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold px-4 py-2 rounded-sm border border-gold/40 shadow-md transform hover:-translate-y-0.5 transition-all duration-300 text-xs tracking-wider uppercase"
            >
              <PhoneCall size={14} className="animate-pulse" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-gold hover:bg-navy-light focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full bg-navy/95 border-b border-gold/20 shadow-2xl transition-all duration-300 transform origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `block px-3 py-2.5 rounded-sm text-base font-bold tracking-wider uppercase transition-colors duration-300 ${
                isActive 
                  ? 'bg-gold/10 text-gold border-l-4 border-gold' 
                  : 'text-slate-300 hover:bg-navy-light hover:text-gold'
              }`}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-800">
            <a 
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} 
              className="flex justify-center items-center space-x-2 bg-gold hover:bg-gold-light text-navy font-black px-4 py-3 rounded-sm text-center shadow-md transition-colors duration-300 w-full uppercase tracking-wider text-sm"
            >
              <PhoneCall size={16} />
              <span>Call: {contactDetails.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
