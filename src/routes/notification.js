import React from "react";

const Alerts = React.lazy(() => import("../views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("../views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("../views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("../views/notifications/toasts/Toasts"));

export const notificationRoutes = [
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toasts", name: "Toasts", component: Toasts },
];
