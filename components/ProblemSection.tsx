import React from 'react';

const IconPhoneOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

const IconMessageCancel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8zM15 9l-6 6m0-6l6 6" />
  </svg>
);

const IconThumbDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.484.061l2.758 1.289a1 1 0 01.545.922v4.286a1 1 0 01-.545.922l-2.758 1.289a2 2 0 01-.484.061H12M10 14v6m-4-2h4" />
  </svg>
);

const IconUserClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM16 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const problems = [
  {
    icon: <IconPhoneOff />,
    title: "Missed Calls During OPD",
    description: "Your front desk is busy. Calls ring out, and potential patients book elsewhere. That's a direct loss of immediate revenue.",
    badge: "Revenue Leak"
  },
  {
    icon: <IconMessageCancel />,
    title: "Enquiry Dead-Ends",
    description: "Patients enquire on WhatsApp but don't book immediately. Without follow-ups, they're lost and move on to other clinics.",
    badge: "Lead Loss"
  },
  {
    icon: <IconThumbDown />,
    title: "Silent Reputation",
    description: "Unhappy patients are loud, happy ones stay silent. A weak online reputation actively drives new patients away.",
    badge: "Trust Gap"
  },
  {
    icon: <IconUserClock />,
    title: "Manual Overhead",
    description: "Relying on staff memory for follow-ups leads to inconsistency and missed opportunities as your clinic grows.",
    badge: "Inconsistency"
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">The Problem</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Where Your Clinic is <span className="text-blue-600">Secretly Failing</span>
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Daily gaps in your front-office operations lead to compounding losses in revenue and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="group relative bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {problem.badge}
                </span>
              </div>
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-lg shadow-slate-200 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                {problem.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{problem.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;