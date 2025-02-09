import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Landing from "./pages/Landing.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <HelmetProvider>
   <BrowserRouter>
    <Routes>
     <Route index element={<Landing />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="*" element={<NotFound />} />
    </Routes>
   </BrowserRouter>
  </HelmetProvider>
 </StrictMode>
);
