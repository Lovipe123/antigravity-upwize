import React from 'react';

// UI Mockups (Improved with better aesthetics)
const WebsiteUI = () => (
  <div className="bg-slate-900 p-3 rounded-2xl shadow-2xl border border-slate-800 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
    <div className="flex gap-1.5 mb-3">
      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
    </div>
    <div className="bg-white rounded-xl p-4 space-y-3">
      <div className="h-3 w-1/3 bg-slate-100 rounded-full"></div>
      <div className="h-24 bg-blue-50/50 rounded-lg border border-blue-100/50 flex flex-col items-center justify-center p-4">
        <div className="w-8 h-8 bg-blue-600 rounded-lg mb-2 shadow-lg shadow-blue-500/20"></div>
        <span className="text-[10px] text-blue-600 font-black uppercase tracking-tighter">Your Clinic Site</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-10 bg-slate-50 rounded-lg border border-slate-100"></div>
        <div className="h-10 bg-blue-600 rounded-lg"></div>
      </div>
    </div>
  </div>
);

const AppointmentUI = () => (
  <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs font-black text-slate-900 uppercase tracking-wide">Nov 12, 2024</span>
      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">Active</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="p-3 border border-slate-100 rounded-xl text-[10px] text-slate-400 line-through font-bold">09:00 AM</div>
      <div className="p-3 bg-blue-600 rounded-xl text-[10px] font-black text-white shadow-lg shadow-blue-500/30">10:30 AM</div>
      <div className="p-3 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-700">11:00 AM</div>
      <div className="p-3 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-700">12:30 PM</div>
    </div>
  </div>
);

const ReviewUI = () => (
  <div className="glass p-5 rounded-2xl shadow-xl text-sm border border-white group-hover:bg-white transition-colors duration-500">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" /></svg>
      </div>
      <div>
        <span className="font-black text-slate-900 block leading-none mb-1">Priya Sharma</span>
        <div className="flex text-amber-400">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" /></svg>
        </div>
      </div>
    </div>
    <p className="text-xs text-slate-500 italic font-medium">"Highly professional staff and the website made booking so easy."</p>
  </div>
);

const FollowUpUI = () => (
  <div className="bg-[#e5ddd5] p-3 space-y-3 rounded-2xl text-sm border border-[#d4c6b8] shadow-inner">
    <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-lg">
      <p className="text-[10px] text-slate-800 font-medium">Hi Rahul, your appointment is confirmed for tomorrow at 4 PM! See you then.</p>
    </div>
    <div className="flex justify-end">
      <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-lg">
        <p className="text-[10px] text-slate-800 font-medium italic">Confirmed, thank you!</p>
      </div>
    </div>
  </div>
);

const MissedCallUI = () => (
  <div className="bg-white p-4 rounded-2xl shadow-xl text-sm border border-slate-100 overflow-hidden">
    <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-50">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
        <span className="text-xs font-black text-rose-600">Missed Call</span>
      </div>
      <span className="text-[10px] text-slate-400 font-bold">2m ago</span>
    </div>
    <div className="bg-blue-50/50 p-3 rounded-xl text-[10px] text-blue-700 font-bold border border-blue-100/50 leading-snug">
      <span className="block text-blue-900 mb-1 font-black">AI TEXT-BACK:</span>
      "Hi, sorry we missed your call! How can our clinic help you today?"
    </div>
  </div>
);

const CrmUI = () => (
  <div className="bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-800">
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Total Revenue</span>
          <span className="text-xl font-black text-white">₹2,42,000</span>
        </div>
        <span className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">+14%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 w-[70%]"></div>
      </div>
      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
        <span className="text-slate-500">New Patients</span>
        <span className="text-blue-400">89</span>
      </div>
    </div>
  </div>
);

const features = [
  {
    title: "Clinic Website Engine",
    description: "Your digital storefront, automated. We build, host, and maintain a high-conversion website that captures every lead 24/7.",
    ui: <WebsiteUI />
  },
  {
    title: "Smart Appointment Booking",
    description: "Eliminate manual scheduling. Let patients book confirmed slots through a beautiful, 24/7 self-service portal.",
    ui: <AppointmentUI />
  },
  {
    title: "Review Growth Automation",
    description: "Capture 5-star Google reviews effortlessly. Our system automatically requests feedback after every successful visit.",
    ui: <ReviewUI />
  },
  {
    title: "WhatsApp AI sequences",
    description: "Never lose a lead to silence. Smart automated follow-ups nurture every enquiry until they become a patient.",
    ui: <FollowUpUI />
  },
  {
    title: "Instant Text-Backs",
    description: "Turn missed calls into appointments. The system instantly replies via WhatsApp to capture every opportunity.",
    ui: <MissedCallUI />
  },
  {
    title: "Performance Analytics",
    description: "Total clarity on your growth. Track leads, revenue, and patient satisfaction from one unified dashboard.",
    ui: <CrmUI />
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-slate-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-black uppercase tracking-widest">Powered by AI</span>
          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Everything You Need <br /><span className="text-blue-600">to Scale your Clinic.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            A unified system that handles the entire patient journey, from the first click to the final review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">{feature.description}</p>
              </div>
              <div className="mt-auto bg-slate-50/50 rounded-3xl p-8 border border-white group-hover:bg-blue-50/50 transition-colors duration-500 relative overflow-hidden">
                {/* Micro-glow effect */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
                <div className="relative transform group-hover:scale-110 transition-transform duration-700 ease-out">
                  {feature.ui}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
