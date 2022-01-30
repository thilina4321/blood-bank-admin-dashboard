import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell
} from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const notificationNav = {
    component: CNavGroup,
    name: "Donators",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Alerts",
        to: "/notifications/alerts",
      },
      {
        component: CNavItem,
        name: "Badges",
        to: "/notifications/badges",
      },
      {
        component: CNavItem,
        name: "Modal",
        to: "/notifications/modals",
      },
      {
        component: CNavItem,
        name: "Toasts",
        to: "/notifications/toasts",
      },
    ],
  }
