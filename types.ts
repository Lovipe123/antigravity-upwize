
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SearchResult {
  text: string;
  sources: Array<{
    web?: { uri: string; title: string };
    maps?: { uri: string; title: string };
  }>;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  date: string;
  time: string;
  doctorName: string;
  reason: string;
  status: AppointmentStatus;
  createdAt: string;
}
