import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Wrench, Zap, ShieldAlert, ArrowRight, CheckCircle2, ChevronRight, Phone, MessageSquare, Mail, Award, X, ZoomIn, ChevronLeft, Brush, Users, Bus, Package, Hotel, Truck } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import clientsImg from '../assets/clients.jpeg';
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
      <section className="relative min-h-[95vh] flex items-center justify-center bg-navy-dark overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100 transition-transform duration-[10000ms] ease-out hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Dark Overlay for high readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 w-full flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-dmsans font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-wider uppercase leading-tight select-none">
              SBM CONTRACTING
            </h1>
            
            <h2 className="font-dmsans font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-widest uppercase opacity-95">
              INDUSTRIAL & PROJECT CONTRACTING
            </h2>
            
            <p className="text-base sm:text-lg text-white font-dmsans tracking-wide max-w-2xl mx-auto opacity-90">
              Delivering Trustable Project Solutions—Anytime, Anywhere
            </p>

            <div className="pt-8 flex justify-center">
              <Link 
                to="/contact" 
                className="bg-[#d97736] hover:bg-[#c25e22] text-white font-semibold text-base px-10 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 inline-block"
              >
                Contact Us
              </Link>
            </div>
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
                  src={clientsImg} 
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
                Delivering Reliable & Skilled Contracting Solutions
              </h2>
              <p className="text-slate-300 leading-relaxed">
                At SBM Contracting Company, we specialize in executing complex civil structural, mechanical, and industrial contracting projects. We understand that project success relies heavily on absolute precision, strict compliance, and expert management. We have worked with many big companies in Dubai, providing high-quality project execution and compliant logistics.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our structured execution model ensures every phase of the project meets industrial standards, strict safety requirements, and global compliance benchmarks. We manage engineering logistics, safety audits, and full-scale execution so your project is delivered on time.
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
      {/* CORE CONTRACTING SERVICES & SPECIALIZATIONS */}
      <section className="py-24 bg-navy border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#d97736] text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-[#d97736]" />
              <span>Our Capabilities</span>
              <span className="w-6 h-[1px] bg-[#d97736]" />
            </span>
            <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Our Core Contracting Services
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
              SBM Contracting Company delivers professional end-to-end execution of civil construction, mechanical fit-outs, industrial electrical projects, and HSE safety management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Construction Contracting */}
            <div className="bg-navy-dark border border-slate-800 p-8 flex flex-col items-center text-center rounded-2xl hover:border-[#d97736] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/45 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-[#d97736] mb-6 group-hover:bg-[#d97736] group-hover:text-white transition-all duration-300">
                <HardHat size={32} />
              </div>
              <h3 className="font-dmsans font-bold text-lg text-white mb-3 group-hover:text-[#d97736] transition-colors duration-300">
                Construction Contracting
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Comprehensive structural works, civil engineering, formwork, and scaffolding services for major global contracting projects.
              </p>
            </div>

            {/* Card 2: Mechanical Contracting */}
            <div className="bg-navy-dark border border-slate-800 p-8 flex flex-col items-center text-center rounded-2xl hover:border-[#d97736] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/45 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-[#d97736] mb-6 group-hover:bg-[#d97736] group-hover:text-white transition-all duration-300">
                <Wrench size={32} />
              </div>
              <h3 className="font-dmsans font-bold text-lg text-white mb-3 group-hover:text-[#d97736] transition-colors duration-300">
                Mechanical Contracting
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                High-precision mechanical installations, fabrication, pressure vessel welding, and pipeline fitting for industrial complexes.
              </p>
            </div>

            {/* Card 3: Electrical Contracting */}
            <div className="bg-navy-dark border border-slate-800 p-8 flex flex-col items-center text-center rounded-2xl hover:border-[#d97736] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/45 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-[#d97736] mb-6 group-hover:bg-[#d97736] group-hover:text-white transition-all duration-300">
                <Zap size={32} />
              </div>
              <h3 className="font-dmsans font-bold text-lg text-white mb-3 group-hover:text-[#d97736] transition-colors duration-300">
                Electrical Contracting
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Industrial cabling, power grid control panel assembly, PLC automation systems, and electrical maintenance services.
              </p>
            </div>

            {/* Card 4: Safety & HSE Services */}
            <div className="bg-navy-dark border border-slate-800 p-8 flex flex-col items-center text-center rounded-2xl hover:border-[#d97736] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/45 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-[#d97736] mb-6 group-hover:bg-[#d97736] group-hover:text-white transition-all duration-300">
                <ShieldAlert size={32} />
              </div>
              <h3 className="font-dmsans font-bold text-lg text-white mb-3 group-hover:text-[#d97736] transition-colors duration-300">
                Safety & HSE Services
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Certified HSE compliance auditing, risk assessments, fire protection system setups, and site safety management.
              </p>
            </div>
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
      <section className="bg-gradient-to-r from-gold via-gold-light to-gold py-16 text-slate-950 border-y border-gold-light/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {companyHighlights.map((stat, idx) => (
              <div key={idx}>
                <p className="font-barlow font-black text-5xl sm:text-6xl mb-2">
                  <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">{stat.label}</p>
              </div>
            ))}
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
                  Inquire About Project Contracting
                </h2>
                <p className="text-slate-400 text-sm">
                  Let us know your project specifications, engineering blueprints, and timelines. Our contracting team will review and get back to you within 24 hours.
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
                    Your inquiry has been successfully sent. An SBM project director will review your technical requirements and contact you shortly.
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
                      Project Specifications & Details
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-navy-dark border border-slate-800 focus:border-gold outline-none px-4 py-3 text-sm text-white transition-colors"
                      placeholder="Describe your project scope, civil/mechanical engineering requirements, and timeline..."
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
