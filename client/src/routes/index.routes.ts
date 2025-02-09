import { BASE_ROUTES } from './base.routes';
import { AUTH_ROUTES } from './auth.routes';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { ADMIN_ROUTES } from './admin.routes';

export const ROUTES = {
  ...BASE_ROUTES,
  ...AUTH_ROUTES,
  ...DASHBOARD_ROUTES,
  ...ADMIN_ROUTES,
};


// import { RouteObject } from "react-router-dom";
// import { legalRoutes } from "./legal.routes";

// export const routes: RouteObject[] = [
  // ...legalRoutes,
// ];
