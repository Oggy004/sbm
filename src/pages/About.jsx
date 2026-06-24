import React from 'react';
import { ShieldCheck, Award, Briefcase, Users, Users2 } from 'lucide-react';
import { companyHighlights } from '../data/websiteData';
import clientsImg from '../assets/clients.jpeg';

export default function About() {
  const values = [
    {
      title: "Skilled Teams",
      icon: Users,
      desc: "Our trade assessments are designed to select only teams with the technical capacity and experience to deliver high-quality outcomes."
    },
    {
      title: "Professional Management",
      icon: Briefcase,
      desc: "From onboarding, travel arrangement, local compliance, and work logs, our client managers oversee logistics end-to-end."
    },
    {
      title: "Safety Standards",
      icon: ShieldCheck,
      desc: "Zero compromise. All mobilized teams receive rigorous HSE training and periodic audits to maintain our flawless safety record."
    },
    {
      title: "Quality Standards",
      icon: Award,
      desc: "We ensure operations conform to international trade certifications and guidelines, keeping welding and mechanical works to code."
    }
  ];

  return (
    <div className="pt-20">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-navy-dark border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${clientsImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            SBM Contracting Company
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mt-3">
            About Our Company
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* CORE PROFILE & EXPERIENCE */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span>Our Heritage</span>
              </span>
              <h2 className="font-barlow font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                A Legacy of Support and Technical Excellence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                SBM Contracting Company was established to solve a critical bottleneck in the global engineering and construction sectors: the availability of verified, certified, and reliable contracting execution teams. Over the past decade, we have grown into a leading project contracting and engineering support partner, delivering services to high-budget international developments and industrial maintenance projects. We have successfully worked with many big companies in Dubai, supporting their complex engineering and structural contracting needs.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We believe that qualified engineering execution is the foundation of any iconic structure or manufacturing success. By managing the entire project mobilization cycle—including physical capabilities testing, certifications, compliance checkups, visa clearances, and logistics—we deliver compliant, turnkey contracting solutions that integrate smoothly into our client's on-site routines.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether executing construction works, mechanical piping installations for petrochemical refinery shutdowns, or safety audits in industrial facilities, SBM guarantees quality and compliance at every milestone.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-navy-dark p-8 border border-slate-800 space-y-3">
                <h4 className="font-barlow font-black text-4xl text-gold">10+</h4>
                <h5 className="text-white font-bold text-xs uppercase tracking-wider">Years Active</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Established in Noida, supporting infrastructure across national and regional project regions.
                </p>
              </div>
              
              <div className="bg-navy-dark p-8 border border-slate-800 space-y-3">
                <h4 className="font-barlow font-black text-4xl text-gold">500+</h4>
                <h5 className="text-white font-bold text-xs uppercase tracking-wider">Project Deliveries</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Infrastructure builds, plant maintenance, and engineering services.
                </p>
              </div>

              <div className="bg-navy-dark p-8 border border-slate-800 space-y-3">
                <h4 className="font-barlow font-black text-4xl text-gold">100%</h4>
                <h5 className="text-white font-bold text-xs uppercase tracking-wider">Safety Record</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Strict safety rules, mandatory toolboxes, zero accidents across contract terms.
                </p>
              </div>

              <div className="bg-navy-dark p-8 border border-slate-800 space-y-3">
                <h4 className="font-barlow font-black text-4xl text-gold">50+</h4>
                <h5 className="text-white font-bold text-xs uppercase tracking-wider">Projects Assisted</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Successfully supported complex refinery operations, steel plants, and high-rises.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-navy p-10 border-l-4 border-gold border-y border-r border-slate-800 space-y-4">
              <span className="font-barlow font-black text-xs text-gold uppercase tracking-wider">
                Our Mission //
              </span>
              <h3 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
                Empowering Projects Through Skilled Contracting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To deliver outstanding project outcomes by deploying rigorously tested, safety-conscious, and highly skilled contracting teams who maintain execution speed, strict safety codes, and cost efficacy.
              </p>
            </div>

            <div className="bg-navy p-10 border-l-4 border-gold border-y border-r border-slate-800 space-y-4">
              <span className="font-barlow font-black text-xs text-gold uppercase tracking-wider">
                Our Vision //
              </span>
              <h3 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
                The Preferred Contracting Partner
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be recognized globally as the most reliable, compliant, and professional contractor for industrial projects, setting benchmarks in project execution, safety protocols, and operational management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-navy border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span>How We Work</span>
              <span className="w-6 h-[1px] bg-gold" />
            </span>
            <h2 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="bg-navy-dark border border-slate-800 p-8 space-y-6 flex flex-col justify-between group hover:border-gold transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="w-8 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SAFETY & COMPLIANCE BANNER */}
      <section className="py-24 bg-navy-dark border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy border border-gold/20 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <span className="bg-gold/10 text-gold border border-gold/30 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Safety First Culture
              </span>
              <h2 className="font-barlow font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Zero Harm: Our Integrity Commitment
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                At SBM, safety isn't a checklist; it's our core operating parameter. We realize that industrial environments carry inherent risks, which is why every crew mobilization undergoes mandatory pre-site HSE inductions. 
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Our safety officers conduct routine audits and maintain active contact with site supervisors. This commitment ensures compliance with safety guidelines, resulting in a safe site, high worker confidence, and consistent project delivery.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex-shrink-0 flex flex-col items-center p-8 bg-navy-dark border border-slate-800 text-center">
              <Users2 size={48} className="text-gold mb-4" />
              <h4 className="text-white font-bold text-sm uppercase tracking-wide">HSE Trained Contracting Crew</h4>
              <p className="text-[11px] text-slate-500 max-w-[200px] mt-1 mb-4">
                All personnel receive custom safety gear orientation.
              </p>
              <span className="font-barlow text-2xl font-black text-white">100% CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
