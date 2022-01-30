import React from "react";

const Widgets = React.lazy(() => import("../views/widgets/Widgets"));

export const widgetRoutes = [
  { path: "/widgets", name: "Widgets", component: Widgets },
];
