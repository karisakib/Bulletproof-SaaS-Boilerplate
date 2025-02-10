import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <HelmetProvider>
   <BrowserRouter> {/* ✅ Wrap here instead */}
     <AppRoutes />
   </BrowserRouter>
  </HelmetProvider>
 </StrictMode>
);
