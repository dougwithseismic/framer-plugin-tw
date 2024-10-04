import { ReactNode, useState } from 'react';
import { Route, RouteNameValues, RouteNames, RouteParams } from './index';
import { RouterContext } from './router-context';

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider = ({ children }: RouterProviderProps) => {
  const [currentRoute, setCurrentRoute] = useState<Route>({
    route: RouteNames.Settings,
  });

  const navigate = ({
    route,
    params,
  }: {
    route: RouteNameValues;
    params?: RouteParams[RouteNameValues];
  }) => {
    setCurrentRoute({ route, params });
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>{children}</RouterContext.Provider>
  );
};
