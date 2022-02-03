import { widgetRoutes } from "./routes/widgets";
import { homeRoutes } from "./routes/home";
import { dashboardRoutes } from "./routes/dashboard";
const routes = [
  ...dashboardRoutes,
  ...widgetRoutes,
  ...homeRoutes,
];

export default routes;
