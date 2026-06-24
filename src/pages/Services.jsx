import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Wrench, Zap, ShieldAlert, FileText, CheckSquare, Ship, Truck, HelpCircle, ArrowRight } from 'lucide-react';
import { 
  workforceCategories, 
  industriesSupported, 
  whyChooseUs 
} from '../data/websiteData';

const iconMap = {
  HardHat: HardHat,
  Wrench: Wrench,
  Zap: Zap,
  ShieldAlert: ShieldAlert
};

export default function Services() {
  const steps = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "We analyze your project blueprints, timelines, required skill certifications, and safety parameters to establish staffing profiles."
    },
    {
      step: "02",
      title: "Screening & Verification",
      desc: "Our trade experts test candidate capabilities, check reference reviews, and authenticate certifications and medical clearance."
    },
    {
      step: "03",
      title: "Mobilization & Logistics",
      desc: "We coordinate onboarding compliance, travel arrangements, toolbox orientations, and provide custom protective equipment."
    },
    {
      step: "04",
      title: "On-site Management",
      desc: "SBM site managers maintain ongoing communications, monitor productivity, coordinate crew schedules, and verify work logs."
    }
  ];

  return (
    <div className="pt-20">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-navy-dark border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            Expert Personnel Solutions
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mt-3">
            Our Contracting Services
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* DETAILED TRADE CARDS */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span>SBM Capabilities</span>
              <span className="w-6 h-[1px] bg-gold" />
            </span>
            <h2 className="font-barlow font-black text-4xl text-white uppercase tracking-tight">
              Detailed Trade Specializations
            </h2>
            <p className="text-slate-400 text-sm">
              Explore the specific skill matrices, qualifications, and certifications our mobilized trades carry.
            </p>
          </div>

          <div className="space-y-16">
            {workforceCategories.map((category, catIdx) => {
              const IconComponent = iconMap[category.icon] || HardHat;
              const isEven = catIdx % 2 === 0;
              return (
                <div 
                  key={category.id} 
                  className={`bg-navy-dark border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Left Column: Category Description */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-barlow font-black text-3xl text-white uppercase tracking-wider">
                      {category.title} Contracting
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="h-[1px] w-12 bg-gold" />
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      Standard Compliance: OSHA, ISO, ASME, NEBOSH
                    </p>
                  </div>

                  {/* Right Column: Trades Grid */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {category.trades.map((trade, idx) => (
                      <div key={idx} className="bg-navy border border-slate-800/80 p-6 space-y-4">
                        <h4 className="font-barlow font-bold text-lg text-gold uppercase tracking-wide">
                          {trade.name}
                        </h4>
                        
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                            Core Skills:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {trade.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="bg-navy-light text-[10px] text-slate-300 px-2 py-0.5 border border-slate-800">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                            Vetted Certifications:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {trade.certs.map((cert, cIdx) => (
                              <span key={cIdx} className="bg-gold/5 text-[10px] text-gold px-2 py-0.5 border border-gold/15">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4-STEP MOBILIZATION PROCESS */}
      <section className="py-24 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span>Operational Workflow</span>
              <span className="w-6 h-[1px] bg-gold" />
            </span>
            <h2 className="font-barlow font-black text-4xl text-white uppercase tracking-tight">
              Our 4-Step Deployment Process
            </h2>
            <p className="text-slate-400 text-sm">
              We maintain full control of staffing operations, ensuring quality is checked at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative bg-navy border border-slate-800 p-8 space-y-6 flex flex-col justify-between group">
                {/* Connector Line for larger screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gold/10 z-0" />
                )}

                <div className="space-y-4 relative z-10">
                  <span className="font-barlow font-black text-4xl text-gold/30 group-hover:text-gold transition-colors duration-300">
                    {item.step}
                  </span>
                  <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-12 h-[2px] bg-gold/30 group-hover:bg-gold transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GOLD CTA STRIP */}
      <section className="bg-gradient-to-r from-gold via-gold-light to-gold text-slate-950 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-barlow font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Need Qualified Workers On Your Project Site?
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
              to="/gallery" 
              className="bg-transparent hover:bg-slate-950/10 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 text-center rounded-sm border border-slate-950/30 transition-colors"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
