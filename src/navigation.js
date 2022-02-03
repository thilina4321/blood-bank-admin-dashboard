import React from "react";
import CIcon from "@coreui/icons-react";
import { widgetNav } from "./navigation/widgets";
import { homepageNav } from "./navigation/home";
import { cilSpeedometer } from "@coreui/icons";

import { CNavItem, CNavTitle } from "@coreui/react";

const navigation = [
  {
    component: CNavItem,
    name: "SL National Blood Bank",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    component: CNavTitle,
    name: "Components",
  },
  homepageNav,
  widgetNav,
];

export default navigation;
