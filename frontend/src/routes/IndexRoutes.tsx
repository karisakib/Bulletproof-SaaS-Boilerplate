import { RouteObject } from "react-router";
import { LANDING_ROUTES } from './LandingRoutes';
// import { AUTH_ROUTES } from './auth.routes';
import { ADMIN_ROUTES } from './AdminRoutes';
// import { BLOG_ROUTES } from "./blog.routes";
import { LEGAL_ROUTES } from "./LegalRoutes";


export const routes: RouteObject[] = [
 ...LANDING_ROUTES,
 // ...AUTH_ROUTES,
 ...ADMIN_ROUTES,
 // ...BLOG_ROUTES,
 ...LEGAL_ROUTES
];
