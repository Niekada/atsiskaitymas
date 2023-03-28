import { AuthLayoutRoutes, MainLayoutRoutes } from "./RouteTypes";
import AuthLayout from "../layouts/AuthLayouts";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Add from "../pages/Add/Add";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const HOME_PATH = "/";
export const ADD_PATH = "/Add";
export const LOGIN_PATH = "/";
export const REGISTER_PATH = "/Register";

export const mainLayoutRoutes: MainLayoutRoutes = {
    Layout: MainLayout,
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
        {
            path: ADD_PATH,  
            Component: Add,
        },
    ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
    Layout: AuthLayout,
    routes: [
        {
            path: REGISTER_PATH,  
            Component: Register,
        },
        {
            path: LOGIN_PATH,  
            Component: Login,
        },
    ],
};