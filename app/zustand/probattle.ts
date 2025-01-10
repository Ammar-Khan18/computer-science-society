import { create } from "zustand";

export interface RegistrationStore {
  teamName: string;
  selectedModules: string[]; // Assuming module IDs are strings
  members: { name: string; email: string; contact: string; cnic: string }[];
  loading: boolean;
  successMessage: string;
  errors: Record<string, string>; // Use a dictionary for better error handling

  setTeamName: (value: string) => void;
  setSelectedModules: (modules: string[]) => void;
  setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) => void;
  setLoading: (value: boolean) => void;
  setSuccessMessage: (message: string) => void;
  setErrors: (errors: Record<string, string>) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  teamName: "",
  selectedModules: [],
  members: [{ name: "", email: "", contact: "", cnic: "" }],
  loading: false,
  successMessage: "",
  errors: {},

  setTeamName: (value: string) => set({ teamName: value }),
  setSelectedModules: (modules: string[]) => set({ selectedModules: modules }),
  setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) =>
    set({ members }),
  setLoading: (value: boolean) => set({ loading: value }),
  setSuccessMessage: (message: string) => set({ successMessage: message }),
  setErrors: (errors: Record<string, string>) => set({ errors }),
}));
