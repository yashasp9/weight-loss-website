import { create } from 'zustand';

export const useLoginStore = create((set) => ({
  email: '',
  password: '',
  errorText: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setErrorText: (errorText) => set({ errorText }),
}));

export const useSignUpStore = create((set) => ({
  name: '',
  phone: '',
  email: '',
  password: '',
  appointmentDateTime: '',
  errorText: '',
  signUpSubmitted: false,
  setSignUpSubmitted: (value) => set({ signUpSubmitted: value }),
  setErrorText: (errorText) => set({ errorText }),
  setName: (name) => set({ name }),
  setPhone: (phone) => set({ phone }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setAppointmentDateTime: (appointmentDateTime) => set({ appointmentDateTime }),
}));
