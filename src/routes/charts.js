import React from "react";

const Charts = React.lazy(() => import("../views/charts/Charts"));
const Sample = React.lazy(() => import("../views/charts/Sample"));

export const chartRoutes = [
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/samples", name: "Charts", component: Sample },
];
