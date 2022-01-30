import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilCalculator,
} from "@coreui/icons";
import {  CNavItem } from "@coreui/react";

export const widgetNav = {
    component: CNavItem,
    name: "Widgets",
    to: "/widgets",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  }
