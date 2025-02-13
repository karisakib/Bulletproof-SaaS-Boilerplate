import { RouteObject } from "react-router";
import AdminLayout from "../views/admin/AdminLayout";

export const ADMIN_ROUTES: RouteObject[] = [
 { path: "admin", element: <AdminLayout/> },
];
