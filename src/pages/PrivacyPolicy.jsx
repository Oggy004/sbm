import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 bg-navy min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="relative py-16 bg-navy-dark border-b border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            SBM Contracting Company
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-3">
            Privacy Policy
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-20 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              1. Introduction
            </h2>
            <p>
              SBM Contracting Company ("we," "us," or "our") operates from Ajman, UAE. We are committed to protecting the privacy of candidates, clients, and visitors. This Privacy Policy details how we collect, process, share, and protect personal and professional data in compliance with the relevant guidelines and global data protection standards.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              2. Data We Collect
            </h2>
            <p>
              In our capacity as an overseas recruitment and placement agency, we collect necessary personal details to process placements, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Candidate Information:</strong> Resumes, educational records, professional trade certifications (e.g., weld test clearances, safety credentials).</li>
              <li><strong>Identification Details:</strong> Passport information, Aadhaar Card, PAN Card, photographs, and medical exam clearance certificates necessary for visa stamping.</li>
              <li><strong>Contact Credentials:</strong> Full name, email, phone numbers, and WhatsApp contact details.</li>
              <li><strong>Employer & Client Information:</strong> Project requirements, company credentials, contact logs, and placement contract details.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              3. How We Use Collected Data
            </h2>
            <p>
              We process data strictly for professional recruitment and legal overseas placement services, specifically for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vetting candidate backgrounds and validating technical qualifications.</li>
              <li>Submitting candidate profiles to international project clients.</li>
              <li>Managing emigration clearances (ECNR/ECR checkup portals) and flight tickets.</li>
              <li>Applying for work permits, medical checks, and visa stamps through official consular desks.</li>
              <li>Fulfilling legal reporting requirements of the Ministry of External Affairs (India).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              4. Data Sharing & Security
            </h2>
            <p>
              Candidate profiles are shared exclusively with prospective international employers and official government licensing centers (consulates, emigration portals). SBM Contracting Company does not lease or sell user credentials to any third-party marketing services.
            </p>
            <p>
              We maintain industry-standard physical, electronic, and administrative safeguards to prevent unauthorized access, altercations, or leaks of sensitive documents (such as passports and credentials).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              5. Candidate Rights
            </h2>
            <p>
              Candidates have the right to request updates, corrections, or total removal of their resume and identification records from SBM database records, provided it does not clash with active visa processing agreements or regulatory compliance policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              6. Policy Updates & Contact Details
            </h2>
            <p>
              We reserve the right to modify this policy periodically to align with changing emigration acts and data protection standards. For inquiries or data removal queries:
            </p>
            <div className="border border-slate-800 p-6 bg-navy-dark mt-4 text-xs">
              <p className="font-semibold text-white">SBM Contracting Company (Data Desk)</p>
              <p className="mt-1">Ajman, UAE</p>
              <p>Email: sumithend02@gmail.com</p>
              <p>Phone: +971 56 174 0122</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
