import React from 'react';

const steps = [
  {
    number: "01",
    title: "We Build & Set Up",
    description: "Connect your clinic phone and WhatsApp. We build your website and configure the AI engine specialized for your practice.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    number: "02",
    title: "System Goes Live",
    description: "Launch in under 48 hours. The system instantly begins capturing leads, sending follow-ups, and managing appointments.",
    color: "from-indigo-600 to-violet-600"
  },
  {
    number: "03",
    title: "Clinic Growth",
    description: "Watch your 5-star reviews and confirmed bookings grow. Your staff focuses on patient care, while we handle the revenue leaks.",
    color: "from-violet-600 to-fuchsia-600"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-b-[100px] lg:rounded-b-[200px]"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative mt-16">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">Implementation</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            Go Live in <span className="underline decoration-blue-500 underline-offset-8">Less Than 48h</span>
          </h3>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            We do all the technical work. You just enjoy the growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              {/* Connecting Line (Only for desktop) */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[1px] bg-slate-800 z-0">
                  <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                </div>
              )}

              <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-700/50 transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-slate-800/80 group-hover:border-blue-500/30">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl font-black text-white mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{step.description}</p>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
