import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm animate-bounce">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Top Rated Dental Practice Partner
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Your Clinic Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Leaking Revenue</span> Every Day.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Missed calls, unanswered WhatsApps, and forgotten follow-ups are costing you lakhs. We plug the leaks automatically with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <a
                href="#cta"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-blue-500/40 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Stop Losing Patients
              </a>
              <a
                href="#problem"
                className="glass hover:bg-white text-slate-700 px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 border border-slate-200 hover:border-slate-300"
              >
                See How It Happens
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative glass p-1 sm:p-2 rounded-3xl shadow-3xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="p-6 bg-white/50 rounded-t-2xl border-b border-slate-100">
                <h3 className="font-extrabold text-xl text-slate-800">Clinic Leak Audit</h3>
                <p className="text-slate-500 font-medium">Real-time performance metrics before switching to Upwize.</p>
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <div className="bg-rose-50/80 p-5 rounded-2xl border border-rose-100 group transition-all hover:bg-rose-100/80">
                  <p className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-1">Leaked Revenue</p>
                  <p className="text-4xl font-black text-rose-600 tabular-nums">₹85,000</p>
                  <p className="text-sm text-rose-500 mt-1 font-medium italic">from 17 lost patients</p>
                </div>
                <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-100 group transition-all hover:bg-amber-100/80">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Missed Leads</p>
                  <p className="text-4xl font-black text-amber-600 tabular-nums">42</p>
                  <p className="text-sm text-amber-500 mt-1 font-medium italic">unanswered queries</p>
                </div>
                <div className="glass-dark p-6 rounded-2xl col-span-2 shadow-inner">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Patient Trust Score</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-5xl font-black text-white">3.8</p>
                      <div className="flex text-amber-400 gap-0.5">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon empty />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-rose-400 font-bold px-3 py-1 bg-rose-400/10 rounded-full border border-rose-400/20">Critical</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-3 border-t border-slate-700 pt-3">Reputation is below average, deterring 60% of potential new patients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = ({ empty }: { empty?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={empty ? "none" : "currentColor"}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Hero;
