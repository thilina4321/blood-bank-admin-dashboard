import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("../views/theme/typography/Typography")
);

export const themeRoutes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
];
