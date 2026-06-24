import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Wrench, Zap, ShieldAlert, ArrowRight, CheckCircle2, ChevronRight, Phone, MessageSquare, Mail, Award, X, ZoomIn, ChevronLeft } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { 
  workforceCategories, 
  industriesSupported, 
  whyChooseUs, 
  galleryItems, 
  companyHighlights, 
  contactDetails 
} from '../data/websiteData';

// Map icon string names to Lucide icons
const iconMap = {
  HardHat: HardHat,
  Wrench: Wrench,
  Zap: Zap,
  ShieldAlert: ShieldAlert
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Lightbox state for Gallery preview
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in all required fields (Name, Email, Phone).');
      return;
    }
    // simple validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Preview only 6 gallery items on Home page
  const previewGallery = galleryItems.slice(0, 6);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? previewGallery.length - 1 : prev - 1));
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === previewGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-dark overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Dark Navy Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy-dark/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 w-full">
          <div className="max-w-3xl">
            {/* Gold Accent Bar */}
            <div className="w-16 h-1 bg-gold mb-6 animate-pulse" />
            
            <h1 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none mb-6">
              Connecting Skilled <span className="text-gold">Indian Workforce</span> With Global Projects
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 font-dmsans max-w-2xl mb-10 leading-relaxed">
              SBM Contracting Company is Noida's premier overseas placement agency, recruiting certified technical manpower from India and deploying them to infrastructure, oil & gas, and industrial projects worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-gold hover:bg-gold-light text-navy font-black text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 border border-gold/60 shadow-lg shadow-gold/10 hover:shadow-gold/20"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent hover:bg-white/5 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm border border-slate-700 hover:border-gold transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          
          {/* Quick Stats Overlay (Floating on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-10">
            {companyHighlights.map((stat, idx) => (
              <div key={idx} className="border-l border-gold/30 pl-4">
                <p className="font-barlow font-black text-4xl text-gold">
                  <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-navy border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] bg-navy-light rounded-sm overflow-hidden border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="SBM Construction Project" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              {/* Highlighted Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 border border-gold-light/40 shadow-2xl flex flex-col justify-center items-center text-center w-40 h-40">
                <span className="font-barlow font-black text-5xl leading-none">10+</span>
                <span className="text-[10px] tracking-widest uppercase font-black mt-2">Years of</span>
                <span className="text-[10px] tracking-widest uppercase font-black -mt-1">Experience</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span>Who We Are</span>
              </span>
              <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-none">
                Delivering Reliable & Skilled Manpower Solutions
              </h2>
              <p className="text-slate-300 leading-relaxed">
                At SBM Contracting Company, we specialize in bridging the gap between major projects and qualified professionals. We understand that success relies heavily on workforce reliability and capability.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our strict mobilization procedures ensure every single builder, mason, fitter, welder, and safety officer meets the certifications and field-tested standard required on heavy-duty sites. We handle the management and recruitment headaches so you can focus on building.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Fully Compliant</h4>
                    <p className="text-xs text-slate-400">100% adherence to labor laws and safety norms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Ready Deployment</h4>
                    <p className="text-xs text-slate-400">Streamlined logistics for rapid mobilization.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-gold font-bold text-sm uppercase tracking-widest hover:text-gold-light transition-colors group"
                >
                  <span>Read Full Company Profile</span>
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WORKFORCE CATEGORIES PREVIEW */}
      <section className="py-24 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span>Specialized Trades</span>
              <span className="w-6 h-[1px] bg-gold" />
            </span>
            <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Our Workforce Categories
            </h2>
            <p className="text-slate-400 text-sm">
              We mobilize fully qualified personnel equipped with trade certifications and site experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workforceCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || HardHat;
              return (
                <div 
                  key={category.id} 
                  className="bg-navy border border-slate-800 hover:border-gold transition-all duration-300 p-8 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide mb-3">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>
                  <div>
                    <ul className="border-t border-slate-800/80 pt-4 space-y-2 mb-6 text-xs text-slate-300">
                      {category.trades.slice(0, 3).map((trade, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-gold mr-2">•</span> {trade.name}
                        </li>
                      ))}
                      {category.trades.length > 3 && (
                        <li className="text-slate-500 italic pl-3">
                          + {category.trades.length - 3} more trades
                        </li>
                      )}
                    </ul>
                    <Link 
                      to="/services" 
                      className="text-xs font-bold text-gold uppercase tracking-wider flex items-center hover:text-gold-light"
                    >
                      <span>View Details</span>
                      <ChevronRight size={14} className="ml-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRIES SUPPORTED (Asymmetric Grid) */}
      <section className="py-24 bg-navy border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span>Sectors We Serve</span>
              </span>
              <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
                Industries We Support
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mt-4 md:mt-0">
              Providing tailored recruitment, mobilization, and compliance services for heavy industrial and infrastructure ventures.
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesSupported.map((industry, index) => {
              // Custom span for asymmetric design
              const isLarge = index === 0 || index === 5;
              return (
                <div 
                  key={index}
                  className={`relative group overflow-hidden border border-slate-800 bg-navy-dark h-80 ${
                    isLarge ? 'lg:col-span-2' : ''
                  }`}
                >
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 space-y-2">
                    <h3 className="font-barlow font-black text-2xl text-white uppercase tracking-wide group-hover:text-gold transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {industry.description}
                    </p>
                  </div>
                  {/* Decorative corner bar */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-all duration-300" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (Flat bordered design, no shadows) */}
      <section className="py-24 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span>Our Edge</span>
              <span className="w-6 h-[1px] bg-gold" />
            </span>
            <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Why Choose SBM Contracting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-800">
            {whyChooseUs.map((box, idx) => (
              <div 
                key={idx} 
                className={`p-8 bg-navy/60 hover:bg-navy transition-colors duration-300 flex flex-col justify-between min-h-[220px] ${
                  idx !== 3 ? 'border-b md:border-b-0 md:border-r border-slate-800' : ''
                } ${
                  idx === 1 && 'border-b md:border-b-0 border-slate-800' // manual border tweak for mobile row splits
                }`}
              >
                <div>
                  <span className="font-barlow font-extrabold text-xs text-gold tracking-widest uppercase">
                    0{idx + 1} //
                  </span>
                  <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide mt-4 mb-3">
                    {box.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
                <div className="h-1 w-8 bg-gold/40 group-hover:bg-gold mt-6" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY PREVIEW (Masonry Grid & Lightbox) */}
      <section className="py-24 bg-navy border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span>Work Showcase</span>
              </span>
              <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
                Project Gallery
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/gallery" 
                className="bg-transparent hover:bg-gold text-slate-300 hover:text-navy border border-slate-700 hover:border-gold font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all duration-300 inline-flex items-center"
              >
                <span>View Full Gallery</span>
                <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                className="relative group overflow-hidden border border-slate-800 bg-navy-dark aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold text-[10px] font-black uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-barlow font-bold text-lg text-white uppercase tracking-wide flex items-center justify-between">
                    <span>{item.title}</span>
                    <ZoomIn size={16} className="text-gold" />
                  </h4>
                </div>
                
                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS / BANNER */}
      <section className="bg-gradient-to-r from-gold via-gold-light to-gold py-16 text-navy border-y border-gold-light/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-barlow font-black text-5xl sm:text-6xl mb-2">500+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Workers Mobilized</p>
            </div>
            <div>
              <p className="font-barlow font-black text-5xl sm:text-6xl mb-2">50+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Projects Assisted</p>
            </div>
            <div>
              <p className="font-barlow font-black text-5xl sm:text-6xl mb-2">10+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Trades Available</p>
            </div>
            <div>
              <p className="font-barlow font-black text-5xl sm:text-6xl mb-2">100%</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Professional Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                  <span className="w-6 h-[1px] bg-gold" />
                  <span>Get In Touch</span>
                </span>
                <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
                  Request Skilled Manpower
                </h2>
                <p className="text-slate-400 text-sm">
                  Let us know your resource requirements, project timelines, and skill specifications. Our team will contact you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-navy border border-slate-800 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-400">Call Support</h4>
                    <p className="text-lg font-bold text-white mt-0.5">{contactDetails.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-navy border border-slate-800 flex items-center justify-center text-gold flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-400">WhatsApp Inquiry</h4>
                    <a 
                      href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-bold text-white hover:text-gold transition-colors mt-0.5"
                    >
                      {contactDetails.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-navy border border-slate-800 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-400">Email Address</h4>
                    <a href={`mailto:${contactDetails.email}`} className="text-lg font-bold text-white hover:text-gold transition-colors mt-0.5">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Office Hours:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div>Monday - Saturday:</div>
                  <div className="text-white font-semibold">9:00 AM - 6:00 PM</div>
                  <div>Sunday:</div>
                  <div className="text-gold font-bold">Closed</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-navy border border-slate-800 p-8 sm:p-10 relative">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-barlow font-black text-3xl text-white uppercase tracking-wide">
                    Thank You!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm">
                    Your inquiry has been successfully sent. An SBM recruitment manager will review your trade needs and call you shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-gold uppercase font-bold tracking-widest hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-navy-dark border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-navy-dark border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                        placeholder="e.g. name@company.com"
                        required
                      />
                    </div>
                  </div>

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
                      className="w-full bg-navy-dark border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                      placeholder="e.g. +91 98765 XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Resource Requirements & Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-navy-dark border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                      placeholder="Describe what trades, counts, and project timelines you require..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy font-black text-sm uppercase tracking-wider py-4 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={showPrevImage}
            className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            className="max-w-4xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={previewGallery[lightboxIndex].image} 
              alt={previewGallery[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain border border-gold/30"
            />
            <div className="text-center mt-4">
              <span className="text-gold text-xs uppercase tracking-widest font-bold">
                {previewGallery[lightboxIndex].category}
              </span>
              <h3 className="font-barlow text-xl font-bold uppercase text-white mt-1">
                {previewGallery[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button 
            onClick={showNextImage}
            className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </div>
  );
}
