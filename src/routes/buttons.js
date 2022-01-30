import React from "react";

const Buttons = React.lazy(() => import("../views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("../views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("../views/buttons/dropdowns/Dropdowns")
);

export const buttonsRoutes = [
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  { path: "/buttons/dropdowns", name: "Dropdowns", component: Dropdowns },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
];
