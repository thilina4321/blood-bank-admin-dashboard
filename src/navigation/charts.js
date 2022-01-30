import React from "react";

import CIcon from "@coreui/icons-react";
import { cilCursor } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const chartNav = {
  component: CNavGroup,
  name: "Chates",
  to: "/charts",
  icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "Charts",
      to: "/charts",
    },
    {
      component: CNavItem,
      name: "Samples",
      to: "/samples",
    },
  ],
};
