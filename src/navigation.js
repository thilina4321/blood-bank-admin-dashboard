import React from "react";
import CIcon from "@coreui/icons-react";
import { baseNav } from "./navigation/base";
import { buttonNav } from "./navigation/buttons";
import { chartNav } from "./navigation/charts";
import { formNav } from "./navigation/forms";
import { iconNav } from "./navigation/icons";
import { notificationNav } from "./navigation/notifications";
import { widgetNav } from "./navigation/widgets";

import { cilSpeedometer } from "@coreui/icons";

import { CNavItem, CNavTitle } from "@coreui/react";

const navigation = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Components",
  },
  baseNav,
  buttonNav,
  chartNav,
  formNav,
  iconNav,
  notificationNav,
  widgetNav,
];

export default navigation;
