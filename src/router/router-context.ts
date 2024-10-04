import { createContext } from 'react';
import { Route, RouteNameValues, RouteParams } from './index';

interface RouterContextType {
  currentRoute: Route;
  navigate: (args: { route: RouteNameValues; params?: RouteParams[RouteNameValues] }) => void;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);
