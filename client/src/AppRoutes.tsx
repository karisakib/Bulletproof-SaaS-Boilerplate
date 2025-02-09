import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes/index.routes";

const AppRoutes = () => {
  return <BrowserRouter>{useRoutes(routes)}</BrowserRouter>;
};

export default AppRoutes;
