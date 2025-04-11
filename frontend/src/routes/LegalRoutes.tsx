import { Navigate, RouteObject } from "react-router";
import Legal from "../views/legal/LegalLayout";
import NotFound from "../components/layout/NotFound";
import { legalMarkdownComponents } from "../config/legal.constant";

const firstLegalPage = legalMarkdownComponents[0]?.route || "/terms"; // Default fallback

export const LEGAL_ROUTES: RouteObject[] = [
 {
  path: "legal",
  element: <Legal />,
  children: [
   { index: true, element: <Navigate to={firstLegalPage} replace /> },
   ...legalMarkdownComponents.map(({ route, element: Element }) => ({
    path: route,
    element: <Element />,
   })),
   { path: "*", element: <NotFound /> },
  ],
 },
];
