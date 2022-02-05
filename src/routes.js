import { widgetRoutes } from "./routes/widgets";
import { homeRoutes } from "./routes/home";
import { dashboardRoutes } from "./routes/dashboard";
import { patientRoutes } from "./routes/patients";
const routes = [
  ...dashboardRoutes,
  ...widgetRoutes,
  ...homeRoutes,
  ...patientRoutes,
];

export default routes;
