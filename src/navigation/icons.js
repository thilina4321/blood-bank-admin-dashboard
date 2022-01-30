import React from "react";
import CIcon from "@coreui/icons-react";
import { cilStar } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const iconNav = {
  component: CNavGroup,
  name: "Icons",
  icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "CoreUI Free",
      to: "/icons/coreui-icons",
      badge: {
        color: "success",
        text: "NEW",
      },
    },
    {
      component: CNavItem,
      name: "CoreUI Flags",
      to: "/icons/flags",
    },
    {
      component: CNavItem,
      name: "CoreUI Brands",
      to: "/icons/brands",
    },
  ],
};
