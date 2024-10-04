import About from "@/features/about";
import { Examples } from "@/features/examples";
import { Route, RouteNames } from "@/router";

export const RouteContent = () => {
  return (
    <>
      <Route route={RouteNames.About}>
        <About />
      </Route>
      <Route route={RouteNames.Examples}>
        <Examples />
      </Route>
    </>
  );
};
