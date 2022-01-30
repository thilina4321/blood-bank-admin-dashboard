import { baseRoutes } from "./routes/base";
import { buttonsRoutes } from "./routes/buttons";
import { chartRoutes } from "./routes/charts";
import { formRoutes } from "./routes/forms";
import { iconRoutes } from "./routes/icons";
import { notificationRoutes } from "./routes/notification";
import { widgetRoutes } from "./routes/widgets";
import { themeRoutes } from "./routes/theme";

const routes = [
  ...themeRoutes,
  ...baseRoutes,
  ...buttonsRoutes,
  ...chartRoutes,
  ...formRoutes,
  ...iconRoutes,
  ...notificationRoutes,
  ...widgetRoutes,
];

export default routes;
