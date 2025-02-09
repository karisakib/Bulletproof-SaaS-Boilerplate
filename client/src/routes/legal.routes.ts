import { RouteObject } from "react-router-dom";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import CookiesPolicy from "../pages/legal/CookiesPolicy";
import ReturnRefundPolicy from "../pages/legal/ReturnRefundPolicy";
import Disclaimer from "../pages/legal/Disclaimer";
import EULA from "../pages/legal/EULA";
import WarrantyPolicy from "../pages/legal/WarrantyPolicy";

export const legalRoutes: RouteObject[] = [
  { path: "/legal/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/legal/cookies-policy", element: <CookiesPolicy /> },
  { path: "/legal/return-refund-policy", element: <ReturnRefundPolicy /> },
  { path: "/legal/disclaimer", element: <Disclaimer /> },
  { path: "/legal/eula", element: <EULA /> },
  { path: "/legal/warranty-policy", element: <WarrantyPolicy /> },
];
