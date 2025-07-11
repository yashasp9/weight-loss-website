import { create } from "zustand";

export const useLoginStore = create((set) => ({
  email: "",
  password: "",
  errorText: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setErrorText: (errorText) => set({ errorText })
}));
