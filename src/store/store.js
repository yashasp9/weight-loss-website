import { create } from 'zustand';

export const useLoginStore = create((set) => ({
  email: '',
  password: '',
  errorText: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setErrorText: (errorText) => set({ errorText }),
}));

export const useSignupStore = create((set) => ({
  name: '',
  phone: '',
  email: '',
  password: '',
  appointmentDateTime: '',
  setName: (name) => set({ name }),
  setPhone: (phone) => set({ phone }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setAppointmentDateTime: (appointmentDateTime) => set({ appointmentDateTime }),
}));
