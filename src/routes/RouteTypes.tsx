import { PropsWithChildren } from "react";

export type MainRoute = {
    path: "/" | "/Add";
    Component: () => JSX.Element;
};

export type AuthRoute = {
    path: "/" | "/Register";
    Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
    Layout: (children: PropsWithChildren) => JSX.Element;
    routes: MainRoute[];
  };
  
export type AuthLayoutRoutes = {
    Layout: (children: PropsWithChildren) => JSX.Element;
    routes: AuthRoute[];
};