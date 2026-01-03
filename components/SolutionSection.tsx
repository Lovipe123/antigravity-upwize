import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-12 lg:py-36 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="relative glass p-10 rounded-[2.5rem] shadow-3xl border border-white">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl flex items-center justify-center shadow-2xl rotate-12 group hover:rotate-0 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-10">The Patient Engine</h3>
              <div className="space-y-10">
                <StepItem
                  title="Professional Foundation"
                  subtitle="A high-conversion website that builds trust and captures leads 24/7."
                  icon="🌐"
                  number="01"
                />
                <StepItem
                  title="Instant Automation"
                  subtitle="Zero missed opportunities with AI-powered instant WhatsApp responses."
                  icon="⚡"
                  number="02"
                />
                <StepItem
                  title="Smart Conversions"
                  subtitle="Automated scheduling that minimizes no-shows and maximizes intake."
                  icon="📅"
                  number="03"
                />
                <StepItem
                  title="Reputation Loop"
                  subtitle="Automatic review collection that powers your clinic's ranking on Google."
                  icon="⭐"
                  number="04"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-black uppercase tracking-widest">
              The Solution
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              A Complete System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Practice Growth</span>.
            </h2>
            <div className="text-xl text-slate-600 leading-relaxed font-medium space-y-6">
              <p>
                Upwize doesn't just give you tools; it gives you a system. We start by building a premium digital presence that makes patients <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">choose you over competitors</span>.
              </p>
              <p>
                Then, we automate the "leaky" parts of your business: missed calls, forgotten messages, and reviews. You focus on patients; we handle the growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <BenefitItem text="Custom Clinic Website" />
              <BenefitItem text="WhatsApp AI Automation" />
              <BenefitItem text="Smart Review System" />
              <BenefitItem text="24/7 Support Desk" />
            </div>

            <div className="pt-8">
              <a href="#features" className="group inline-flex items-center gap-4 bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl hover:shadow-blue-500/30">
                Explore Features
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ title, subtitle, icon, number }: { title: string, subtitle: string, icon: string, number: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="relative">
      <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <span className="absolute -top-2 -left-2 w-6 h-6 bg-slate-900 text-white text-[10px] font-black flex items-center justify-center rounded-lg shadow-lg">
        {number}
      </span>
    </div>
    <div className="space-y-1">
      <h4 className="font-black text-xl text-slate-900 leading-none">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-slate-800 font-bold text-sm tracking-tight">{text}</span>
  </div>
);

export default SolutionSection;
