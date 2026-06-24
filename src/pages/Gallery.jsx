import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { galleryItems } from '../data/websiteData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Construction', value: 'construction' },
    { label: 'Mechanical', value: 'mechanical' },
    { label: 'Electrical', value: 'electrical' },
    { label: 'Safety', value: 'safety' }
  ];

  // Filter gallery items
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-20">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-navy-dark border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            Visual Proof of Quality
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mt-3">
            Our Project Gallery
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* GALLERY SELECTION AND GRID */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-slate-800 pb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setLightboxIndex(null); // Reset lightbox indexes
                }}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === filter.value
                    ? 'bg-gold border-gold text-slate-950'
                    : 'bg-transparent border-slate-800 text-slate-300 hover:border-gold hover:text-gold'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Asymmetric Masonry Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-navy-dark border border-slate-850">
              <Image size={48} className="mx-auto text-slate-600 mb-4" />
              <h4 className="font-barlow font-bold text-lg text-white uppercase">No photos in this category</h4>
              <p className="text-xs text-slate-500 mt-1">Please select another category or check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => {
                // Apply asymmetric dimensions dynamically on the "All" tab
                const isAllTab = activeFilter === 'all';
                const isFeatured = isAllTab && (index === 0 || index === 5);
                
                return (
                  <div 
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className={`relative group overflow-hidden border border-slate-800 bg-navy-dark cursor-pointer aspect-[4/3] ${
                      isFeatured ? 'lg:col-span-2 lg:aspect-[16/9]' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-gold text-[10px] font-black uppercase tracking-widest mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide flex items-center justify-between">
                        <span>{item.title}</span>
                        <ZoomIn size={20} className="text-gold flex-shrink-0" />
                      </h4>
                    </div>

                    {/* Bottom Border Highlight */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gradient-to-r from-gold via-gold-light to-gold text-slate-950 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-barlow font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Ready to Hire Vetted Technical Trades?
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">
              Submit your trade specifications and we will prepare a mobilize strategy document.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/contact" 
              className="bg-navy hover:bg-navy-dark text-white font-black text-xs uppercase tracking-wider px-6 py-4 text-center rounded-sm transition-colors border border-navy/40"
            >
              Contact Support
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent hover:bg-slate-950/10 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 text-center rounded-sm border border-slate-950/30 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredItems.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          
          {/* Navigation - Prev */}
          <button 
            onClick={showPrevImage}
            className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Center Image Container */}
          <div 
            className="max-w-4xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredItems[lightboxIndex].image} 
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain border border-gold/30"
            />
            <div className="text-center mt-4">
              <span className="text-gold text-xs uppercase tracking-widest font-bold">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-barlow text-xl font-bold uppercase text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation - Next */}
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
