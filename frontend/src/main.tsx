import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";
import "./index.css";

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   staleTime: 1000 * 60 * 5, // Cache queries for 5 minutes
   refetchOnWindowFocus: false, // Prevent refetching when switching tabs
  },
 },
});

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <QueryClientProvider client={queryClient}>
   <BrowserRouter>
    <AppRoutes />
   </BrowserRouter>
  </QueryClientProvider>
 </StrictMode>
);
