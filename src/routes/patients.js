import React from "react";

const PatientOverview = React.lazy(() => import("../views/patients/Overview"));
const Transfusion = React.lazy(() =>
  import("../views/patients/transfusions/Transfusion")
);
const SpecificTransfusion = React.lazy(() =>
  import("../views/patients/transfusions/SpecificTransfusion")
);

export const patientRoutes = [
  {
    path: "/patients",
    name: "Overview",
    component: PatientOverview,
    exact: true,
  },
  { path: "/patients/overview", name: "Overview", component: PatientOverview },
  {
    path: "/patients/transfusion/:id",
    name: "Specific-Transfusion",
    component: SpecificTransfusion,
  },

  {
    path: "/patients/transfusion",
    name: "Transfusion",
    component: Transfusion,
  },
];
