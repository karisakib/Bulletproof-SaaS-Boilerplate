import { useRoutes } from "react-router";
import { routes } from "./routes/index.routes";

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
