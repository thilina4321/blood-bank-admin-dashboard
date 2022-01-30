import React from "react";
import CIcon from "@coreui/icons-react";
import { cilCursor } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const buttonNav = {
  component: CNavGroup,
  name: "Buttons",
  to: "/buttons",
  icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "Buttons",
      to: "/buttons/buttons",
    },
    {
      component: CNavItem,
      name: "Buttons groups",
      to: "/buttons/button-groups",
    },
    {
      component: CNavItem,
      name: "Dropdowns",
      to: "/buttons/dropdowns",
    },
  ],
};
