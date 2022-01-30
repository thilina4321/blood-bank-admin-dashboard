import React from "react";
const ChecksRadios = React.lazy(() =>
  import("../views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
  import("../views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("../views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("../views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("../views/forms/layout/Layout"));
const Range = React.lazy(() => import("../views/forms/range/Range"));
const Select = React.lazy(() => import("../views/forms/select/Select"));
const Validation = React.lazy(() =>
  import("../views/forms/validation/Validation")
);

export const formRoutes = [
  { path: "/forms", name: "Forms", component: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", component: FormControl },
  { path: "/forms/select", name: "Select", component: Select },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    component: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", component: Range },
  { path: "/forms/input-group", name: "Input Group", component: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    component: FloatingLabels,
  },
  { path: "/forms/layout", name: "Layout", component: Layout },
  { path: "/forms/validation", name: "Validation", component: Validation },
];
