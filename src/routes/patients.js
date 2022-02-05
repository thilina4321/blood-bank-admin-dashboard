import React from "react";

const PatientOverview = React.lazy(() => import("../views/patients/Overview"));

export const patientRoutes = [
  {
    path: "/patients",
    name: "Overview",
    component: PatientOverview,
    exact: true,
  },
  { path: "/patients/overview", name: "Overview", component: PatientOverview },
];
