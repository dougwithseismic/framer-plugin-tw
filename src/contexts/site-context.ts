import { framer } from "framer-plugin";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SiteState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const THEME_KEY = "site-theme";
const SEARCH_QUERY_KEY = "site-search-query";

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: async (theme) => {
        set({ theme });
        await framer.setPluginData(THEME_KEY, theme);
      },
      searchQuery: "",
      setSearchQuery: async (query) => {
        set({ searchQuery: query });
        await framer.setPluginData(SEARCH_QUERY_KEY, query);
      },
    }),
    {
      name: "site-storage",
    }
  )
);

export const useSiteContext = () => {
  const { theme, setTheme, searchQuery, setSearchQuery } = useSiteStore();
  return { theme, setTheme, searchQuery, setSearchQuery };
};

// Initialize the store with data from Framer
const initializeStore = async () => {
  const storedTheme = await framer.getPluginData(THEME_KEY);
  const storedSearchQuery = await framer.getPluginData(SEARCH_QUERY_KEY);

  if (storedTheme) {
    useSiteStore.getState().setTheme(storedTheme as "light" | "dark");
  }

  if (storedSearchQuery) {
    useSiteStore.getState().setSearchQuery(storedSearchQuery);
  }
};

initializeStore();
