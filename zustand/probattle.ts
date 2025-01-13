import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import type { } from '@redux-devtools/extension' // required for devtools typing
import { Module } from "@/components/probattle/registration/types";

export interface RegistrationStore {
  teamName: string;
  members: { name: string; email: string; contact: string; cnic: string }[];
  loading: boolean;
  successMessage: string;
  errors: Record<string, string>; // Use a dictionary for better error handling

  setTeamName: (value: string) => void;
  setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) => void;
  setLoading: (value: boolean) => void;
  setSuccessMessage: (message: string) => void;
  setErrors: (errors: Record<string, string>) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  teamName: "",
  members: [{ name: "", email: "", contact: "", cnic: "" }],
  loading: false,
  successMessage: "",
  errors: {},

  setTeamName: (value: string) => set({ teamName: value }),
  setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) =>
    set({ members }),
  setLoading: (value: boolean) => set({ loading: value }),
  setSuccessMessage: (message: string) => set({ successMessage: message }),
  setErrors: (errors: Record<string, string>) => set({ errors }),
}));

export const useFormState = create<{
  selectedModules: Record<string, string>; // Keeps track of selected modules by tier
  setSelectedModule: (tier: string, moduleName: string) => void;
}>()(devtools((set) => ({
  selectedModules: {},
  setSelectedModule: (tier, moduleName) =>
    set((state) => ({
      selectedModules: { ...state.selectedModules, [tier]: moduleName },
    })),
})));