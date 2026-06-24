import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { contactDetails } from '../data/websiteData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMsg('Please fill in all required fields (*).');
      return;
    }
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Phone Validation (simple digit count check, e.g., at least 8 digits)
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 8) {
      setErrorMsg('Please enter a valid phone number with area code (at least 8 digits).');
      return;
    }

    setErrorMsg('');
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-navy-dark border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            Establish Partnership
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mt-3">
            Contact SBM Contracting
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-10">
              
              <div className="space-y-4">
                <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                  <span className="w-6 h-[1px] bg-gold" />
                  <span>Reach Out</span>
                </span>
                <h2 className="font-barlow font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  Let's Discuss Your Manpower Needs
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Have questions about our selection criteria, mobilization times, or labor pricing? Drop us a line, or contact our support team directly.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                <div className="bg-navy-dark border border-slate-800 p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Phone Support</h4>
                    <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-white hover:text-gold transition-colors block mt-1">
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-navy-dark border border-slate-800 p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-bold text-white hover:text-gold transition-colors block mt-1"
                    >
                      Chat Online Now
                    </a>
                  </div>
                </div>

                <div className="bg-navy-dark border border-slate-800 p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Email Inquiry</h4>
                    <a href={`mailto:${contactDetails.email}`} className="text-sm font-bold text-white hover:text-gold transition-colors block mt-1">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="bg-navy-dark border border-slate-800 p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Corporate Address</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {contactDetails.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Office Hours table */}
              <div className="bg-navy-dark border border-slate-800 p-6 space-y-4">
                <h4 className="font-barlow font-bold text-lg text-white uppercase tracking-wide flex items-center">
                  <Clock size={16} className="text-gold mr-2" />
                  <span>Office Hours</span>
                </h4>
                <div className="border-t border-slate-800/80 pt-3">
                  <table className="w-full text-xs text-slate-300">
                    <tbody>
                      {contactDetails.officeHours.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-850 py-2.5 block flex justify-between">
                          <td className="font-semibold text-slate-400">{row.days}</td>
                          <td className={`${row.hours === 'Closed' ? 'text-gold font-bold' : 'text-white'}`}>
                            {row.hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-navy-dark border border-slate-800 p-8 sm:p-12">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-barlow font-black text-3xl text-white uppercase tracking-wide">
                    Submission Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for contacting SBM Contracting Company. An account representative has received your details and will call or email you with availability estimates.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    }}
                    className="bg-gold hover:bg-gold-light text-navy font-black text-xs uppercase tracking-widest px-6 py-3 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">
                      Partnership Inquiry Form
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Please enter accurate project and contact credentials. Fields marked (*) are required.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Contact Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-navy border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-navy border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-navy border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="e.g. +91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-navy border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="Enter organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Inquiry Details & Workforce Specifications *
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full bg-navy border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                      placeholder="Specify required trades, approximate mobilization timelines, and locations..."
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy font-black text-sm uppercase tracking-wider py-4 transition-colors"
                  >
                    Send Partnership Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Styled Mockup Map Placeholder */}
      <section className="bg-navy-dark border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-barlow font-black text-2xl text-white uppercase tracking-wider">
              Our Location
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Visit our headquarters in Noida, Uttar Pradesh, India.
            </p>
          </div>
          
          <div className="relative border border-gold/20 h-[400px] bg-navy overflow-hidden">
            {/* Styled Iframe Map or Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4332997194605!2d77.36214531508269!3d28.616788582424075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55ed3e2bf57%3A0xe543e33f39a7516!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1655979500000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 opacity-90"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SBM Office Map"
            />
            {/* Overlay border */}
            <div className="absolute inset-0 pointer-events-none border-2 border-navy-dark" />
          </div>
        </div>
      </section>

    </div>
  );
}
