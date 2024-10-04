export const RouteNames = {
  Examples: "examples",
  About: "about",
} as const;

export type RouteNamesType = typeof RouteNames;
export type RouteNameValues = RouteNamesType[keyof RouteNamesType];

export type RouteParams = {
  [K in RouteNameValues]: undefined;
};

export type Route = {
  route: RouteNameValues;
  params?: RouteParams[RouteNameValues];
};

// Barrel exports
export { RouterContext } from "./router-context";
export { RouterProvider } from "./router-provider";
export { useRouter } from "./use-router";
export { Route } from "./route";
