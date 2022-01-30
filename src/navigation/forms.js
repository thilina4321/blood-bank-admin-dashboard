import React from "react";
import CIcon from "@coreui/icons-react";
import { cilNotes } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const formNav = {
  component: CNavGroup,
  name: "Researchs",
  icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "Form Control",
      to: "/forms/form-control",
    },
    {
      component: CNavItem,
      name: "Select",
      to: "/forms/select",
    },
    {
      component: CNavItem,
      name: "Checks & Radios",
      to: "/forms/checks-radios",
    },
    {
      component: CNavItem,
      name: "Range",
      to: "/forms/range",
    },
    {
      component: CNavItem,
      name: "Input Group",
      to: "/forms/input-group",
    },
    {
      component: CNavItem,
      name: "Floating Labels",
      to: "/forms/floating-labels",
    },
    {
      component: CNavItem,
      name: "Layout",
      to: "/forms/layout",
    },
    {
      component: CNavItem,
      name: "Validation",
      to: "/forms/validation",
    },
  ],
};
