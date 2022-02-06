import React from "react";
import CIcon from "@coreui/icons-react";
import { cilCursor } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const patientpageNav = {
  component: CNavGroup,
  name: "Patients",
  to: "/patients",
  icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "Overview",
      to: "/patients/overview",
    },
    {
      component: CNavItem,
      name: "Transfusion",
      to: "/patients/transfusion",
    },
  ],
};
