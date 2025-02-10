import { RouteObject } from "react-router";
import Legal from "../views/legal/Legal";

export const LEGAL_ROUTES: RouteObject[] = [
 { path: "legal/terms", element: <Legal/> },
 // { path: "*", element: <NotFound /> },
];
