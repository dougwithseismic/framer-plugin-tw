import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SiteState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "site-storage",
    }
  )
);

export const useSiteContext = () => {
  const { theme, setTheme } = useSiteStore();
  return { theme, setTheme };
};
