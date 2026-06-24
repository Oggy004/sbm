import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data/websiteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold/20 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo.png"
                alt="SBM Contracting"
                className="h-10 w-auto bg-white p-1 rounded-sm border border-gold/10"
              />
              <div className="flex flex-col">
                <span className="font-barlow font-extrabold text-xl tracking-wider text-white leading-tight uppercase">
                  SBM
                </span>
                <span className="text-[9px] tracking-widest text-gold font-bold uppercase -mt-0.5">
                  Contracting
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Trusted provider of skilled manpower and professional staffing solutions for construction, mechanical, electrical, and safety sectors globally.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-500 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-barlow text-white font-bold text-lg uppercase tracking-wider mb-6 border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors duration-300 flex items-center">
                  <span className="text-gold mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors duration-300 flex items-center">
                  <span className="text-gold mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300 flex items-center">
                  <span className="text-gold mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors duration-300 flex items-center">
                  <span className="text-gold mr-2">›</span> Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors duration-300 flex items-center">
                  <span className="text-gold mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Workforce Categories */}
          <div>
            <h3 className="font-barlow text-white font-bold text-lg uppercase tracking-wider mb-6 border-b border-slate-800 pb-2">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300">
                  Construction Manpower
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300">
                  Mechanical Fitters & Welder
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300">
                  Electrical Technicians
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300">
                  HSE & Safety Assistants
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-300">
                  Refinery Maintenance Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-barlow text-white font-bold text-lg uppercase tracking-wider mb-6 border-b border-slate-800 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-gold mt-1 flex-shrink-0" />
                <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors duration-300">
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MessageSquare size={16} className="text-gold mt-1 flex-shrink-0" />
                <a href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
                  WhatsApp: Chat Online
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-gold mt-1 flex-shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-gold transition-colors duration-300">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Office Hours:</p>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} SBM Contracting Company. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-gold transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
