import React from "react";
import CIcon from "@coreui/icons-react";
import { cilCursor } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const homepageNav = {
  component: CNavGroup,
  name: "Home Page",
  to: "/home-page",
  icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "FAQ",
      to: "/home-page/faq",
    },
  ],
};
