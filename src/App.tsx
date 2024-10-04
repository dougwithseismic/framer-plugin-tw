import { RouterProvider } from "@/router";
import { AppContent } from "@/components/app-content";
import { SiteWrapper } from "@/components/site-wrapper";
import "./App.css";
import { framer } from "framer-plugin";

framer.showUI({
  resizable: true,
  position: "top right",
  width: 300,
  height: 560,
});

export const App = () => {
  return (
    <SiteWrapper>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </SiteWrapper>
  );
};
