import { Navigation } from "@/components/navigation";
import { RouteContent } from "@/components/route-content";
import { CurrentRouteDisplay } from "@/components/current-route-display";

export const AppContent = () => {
  return (
    <main className="pb-10 mx-auto max-w-4xl dark">
      <Navigation />
      <RouteContent />
      <CurrentRouteDisplay />
    </main>
  );
};
