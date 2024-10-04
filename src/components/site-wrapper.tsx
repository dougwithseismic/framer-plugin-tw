import React from "react";
import { useSiteContext } from "@/contexts/site-context";

export const SiteWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useSiteContext();

  return <div className={`app ${theme}`}>{children}</div>;
};
