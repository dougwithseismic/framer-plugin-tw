import { ReactNode } from 'react';
import { RouteNameValues } from './index';
import { useRouter } from './use-router';

interface RouteProps {
  route: RouteNameValues;
  children: ReactNode;
}

export const Route = ({ route, children }: RouteProps) => {
  const { currentRoute } = useRouter();
  return currentRoute.route === route ? <>{children}</> : null;
};
