import React from 'react';

const reasons = [
  {
    title: "The 'All-In-One' Advantage",
    description: "Replace your web developer, agency, and booking software. We unify everything—website, automation, and reputation—into one engine.",
    icon: "🚀"
  },
  {
    title: "Organic Revenue Focus",
    description: "Marketing agencies waste your ad spend. We focus on converting the traffic and enquiries you already have, increasing revenue without increasing budget.",
    icon: "💰"
  },
  {
    title: "Healthcare Specialized",
    description: "Built for local patient behavior. Our workflows live on WhatsApp and Google Reviews, ensuring higher response rates than generic software.",
    icon: "🏥"
  },
  {
    title: "Zero Headaches",
    description: "You focus on healthcare; we handle the code. No staff training required. We build, manage, and monitor everything for you.",
    icon: "🛡️"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-12 lg:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-black uppercase tracking-widest">
              Our Philosophy
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Built for Doctors, <br /><span className="text-slate-400 italic">Not IT Managers.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              You're a medical professional, not a developer. Upwize delivers results—more patients and better reputation—without adding a single task to your plate.
            </p>

            <div className="grid gap-6">
              <ComparisonItem
                title="Vs. Marketing Agencies"
                text="No expensive retainers. No required ad spend. You own your assets."
              />
              <ComparisonItem
                title="Vs. Generic Software"
                text="We include the website, the content, and the strategy. It's done-for-you."
              />
            </div>

            <div className="pt-4">
              <a href="#cta" className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center w-fit gap-3">
                Start Your Free Audit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-10">
            {reasons.map((reason, idx) => (
              <div key={idx} className="group flex gap-8 relative items-start">
                <div className="flex-shrink-0 w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonItem = ({ title, text }: { title: string, text: string }) => (
  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex gap-5">
    <div className="w-1.5 h-full bg-blue-600 rounded-full"></div>
    <div>
      <p className="font-black text-slate-900 mb-1">{title}</p>
      <p className="text-sm text-slate-500 font-medium">{text}</p>
    </div>
  </div>
)

export default WhyChooseUs;
