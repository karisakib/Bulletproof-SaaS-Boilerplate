import { RouteObject } from "react-router";
import { LANDING_ROUTES } from './landing.routes';
// import { AUTH_ROUTES } from './auth.routes';
import { ADMIN_ROUTES } from './admin.routes';
// import { BLOG_ROUTES } from "./blog.routes";
import { LEGAL_ROUTES } from "./legal.routes";


export const routes: RouteObject[] = [
 ...LANDING_ROUTES,
 // ...AUTH_ROUTES,
 ...ADMIN_ROUTES,
 // ...BLOG_ROUTES,
 ...LEGAL_ROUTES
];
