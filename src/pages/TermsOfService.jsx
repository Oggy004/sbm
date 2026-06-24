import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-20 bg-navy min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="relative py-16 bg-navy-dark border-b border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-gold text-xs font-black uppercase tracking-widest">
            SBM Contracting Company
          </span>
          <h1 className="font-barlow font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-3">
            Terms of Service
          </h1>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="py-20 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or utilizing the recruitment and mobilization services of SBM Contracting Company ("SBM," "we," "us"), you agree to abide by these Terms of Service. These terms apply to all visitors, job candidates, clients, and partners.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              2. Scope of Services
            </h2>
            <p>
              SBM operates as a skilled manpower contractor and recruitment agent based in Noida, India. We source, trade-test, and mobilize workers for overseas placements. Key clauses regarding our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Candidate Submissions:</strong> Vetting checks are conducted in good faith. However, SBM does not warrant that every candidate will secure an overseas visa or meet the client's localized productivity expectations indefinitely.</li>
              <li><strong>Regulatory Compliance:</strong> All deployments are subject to clear medical screenings, ECNR status validation, and approval of the Indian Protector of Emigrants (PoE) desk.</li>
              <li><strong>Project Logistics:</strong> Delivery timelines are estimates and can be influenced by host country consular schedules, visa issuance delays, or flight availabilities.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              3. Obligations of Candidates
            </h2>
            <p>
              Candidates applying through our portal or physical Noida office must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit accurate educational, work history, and credential files. Submission of fake welding, electrical, or structural clearances will result in immediate disqualification.</li>
              <li>Ensure possession of a valid Indian Passport with at least 8 months validity remaining before deployment.</li>
              <li>Undergo mandatory physical and safety tests as specified by the international client.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              4. Client Partnerships & Agreements
            </h2>
            <p>
              International contracting firms partnering with SBM agree that all recruitment billing terms, standby worker replacements, and payment structures are governed by specific bipartite Service Level Agreements (SLAs) executed directly between SBM corporate and the client.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              5. Limitation of Liability
            </h2>
            <p>
              SBM Contracting Company shall not be held liable for any indirect, incidental, or consequential damages resulting from project timeline delays, visa rejections by destination consulates, or host country immigration policy changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-barlow font-bold text-2xl text-white uppercase tracking-wide">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India, including the Emigration Act 1983. Any disputes arising out of these terms shall fall under the exclusive jurisdiction of the competent courts in Noida, Uttar Pradesh, India.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
