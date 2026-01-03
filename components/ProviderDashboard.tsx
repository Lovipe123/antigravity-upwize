
import React from 'react';
import { Appointment, AppointmentStatus } from '../types';

interface ProviderDashboardProps {
  appointments: Appointment[];
  onUpdateStatus: (id: string, status: AppointmentStatus) => void;
}

const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ appointments, onUpdateStatus }) => {
  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'cancelled': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Section inspired by 'Missed Calls' analytics logic */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total Patients</div>
          <div className="text-3xl font-extrabold text-slate-900">{appointments.length}</div>
          <div className="mt-2 text-green-600 text-sm font-bold">↑ 12% this month</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Pending Conf.</div>
          <div className="text-3xl font-extrabold text-amber-600">
            {appointments.filter(a => a.status === 'pending').length}
          </div>
          <div className="mt-2 text-slate-400 text-sm">Awaiting WhatsApp reply</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Missed Call Recovery</div>
          <div className="text-3xl font-extrabold text-blue-600">84%</div>
          <div className="mt-2 text-blue-500 text-sm font-bold">Upwize AI Optimized</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Revenue Growth</div>
          <div className="text-3xl font-extrabold text-purple-600">₹2.4L</div>
          <div className="mt-2 text-purple-500 text-sm font-bold">Projected for Nov</div>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-800">Recent Appointments</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-blue-400">All</button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-blue-400">Today</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Reason</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointments.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{app.patientName}</div>
                    <div className="text-xs text-slate-500">{app.patientPhone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-700">{new Date(app.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                    <div className="text-xs font-bold text-blue-600">{app.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-700">{app.doctorName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-500 truncate max-w-[150px]">{app.reason || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(app.status)}`}>
                      {app.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {app.status === 'pending' && (
                        <>
                          <button 
                            onClick={() => onUpdateStatus(app.id, 'confirmed')}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Confirm"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => onUpdateStatus(app.id, 'cancelled')}
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Cancel"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {appointments.length === 0 && (
            <div className="p-12 text-center text-slate-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>No appointments found for the selected period.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
