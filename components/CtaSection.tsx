import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="relative py-24 lg:py-48 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-blue-50/50 -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass p-8 md:p-20 rounded-[3rem] border border-white shadow-3xl text-center relative overflow-hidden group">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 space-y-8">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-500/30">
                Limited Time Offer
              </span>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                See Exactly How Many <br /><span className="text-blue-600 italic">Patients You're Losing.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Book a free 30-min Clinic Audit. We'll analyze your current system and show you the exact gaps costing you lakhs.
              </p>

              <form
                name="contact"
                method="post"
                className="max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex flex-col gap-2"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full sm:w-1/2 px-6 py-4 bg-transparent outline-none font-bold text-slate-900 placeholder:text-slate-400 border-b sm:border-b-0 sm:border-r border-slate-100"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full sm:w-1/2 px-6 py-4 bg-transparent outline-none font-bold text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                >
                  Get Free Audit
                </button>
              </form>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-6">
                No Credit Card Required • No Obligations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <StatItem label="Average Growth" value="+40%" />
            <StatItem label="Reduction in No-Shows" value="65%" />
            <StatItem label="Review Rating" value="4.9/5" />
            <StatItem label="Time to Setup" value="48h" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-1">
    <p className="text-3xl font-black text-slate-900">{value}</p>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
  </div>
);

export default CtaSection;
