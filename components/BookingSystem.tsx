
import React, { useState } from 'react';
import { Appointment } from '../types';

interface BookingSystemProps {
  onBook: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ onBook }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    date: '',
    time: '',
    doctorName: 'Dr. Vijay (General Physician)',
    reason: '',
  });

  const doctors = [
    'Dr. Vijay (General Physician)',
    'Dr. Ananya (Dentist)',
    'Dr. Rajesh (Orthopedic)',
    'Dr. Sima (Pediatrician)'
  ];

  const slots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.patientPhone || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }
    onBook(formData);
    setFormData({
      patientName: '',
      patientPhone: '',
      date: '',
      time: '',
      doctorName: 'Dr. Vijay (General Physician)',
      reason: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
      <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Patient Details
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
              <input 
                type="text" 
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. Mohit Kumar"
                value={formData.patientName}
                onChange={e => setFormData({...formData, patientName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number *</label>
              <input 
                type="tel" 
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. 9876543210"
                value={formData.patientPhone}
                onChange={e => setFormData({...formData, patientPhone: e.target.value})}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Select Doctor *</label>
              <select 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.doctorName}
                onChange={e => setFormData({...formData, doctorName: e.target.value})}
              >
                {doctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Appointment Date *</label>
              <input 
                type="date" 
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-4">Preferred Time Slot *</label>
            <div className="grid grid-cols-4 gap-3">
              {slots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData({...formData, time: slot})}
                  className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                    formData.time === slot 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Visit (Optional)</label>
            <textarea 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-24"
              placeholder="Briefly describe your symptoms or query..."
              value={formData.reason}
              onChange={e => setFormData({...formData, reason: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100 transition-all transform hover:-translate-y-1"
          >
            Confirm Booking Request
          </button>
        </form>
      </div>

      <div className="md:col-span-2 space-y-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl">
          <h4 className="text-xl font-bold mb-4">Why Book with Upwize?</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant WhatsApp confirmation with location and doctor details.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated reminders 2 hours before your appointment.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy 1-click rescheduling directly from your phone.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h5 className="font-bold text-slate-900">WhatsApp First</h5>
              <p className="text-sm text-slate-500">We communicate purely through WhatsApp for your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
