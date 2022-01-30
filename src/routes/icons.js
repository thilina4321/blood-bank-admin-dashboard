import React from "react";

const CoreUIIcons = React.lazy(() =>
  import("../views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("../views/icons/flags/Flags"));
const Brands = React.lazy(() => import("../views/icons/brands/Brands"));

export const iconRoutes = [
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
];
