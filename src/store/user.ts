import create from "zustand";

type User = {
  email: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    email: "",
  },
  setUser: (user) => set({ user }),
}));
