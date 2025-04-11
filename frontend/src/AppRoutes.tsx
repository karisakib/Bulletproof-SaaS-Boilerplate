import { useRoutes } from "react-router";
import { routes } from "./routes/IndexRoutes";

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
