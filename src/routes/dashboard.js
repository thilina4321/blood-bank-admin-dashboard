import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));

export const dashboardRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
];
