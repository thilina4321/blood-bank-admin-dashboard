import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPuzzle } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

export const baseNav = {
  component: CNavGroup,
  name: "Base",
  to: "/base",
  icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: "Accordion",
      to: "/base/accordion",
    },
    {
      component: CNavItem,
      name: "Breadcrumb",
      to: "/base/breadcrumbs",
    },
    {
      component: CNavItem,
      name: "Cards",
      to: "/base/cards",
    },
    {
      component: CNavItem,
      name: "Carousel",
      to: "/base/carousels",
    },
    {
      component: CNavItem,
      name: "Collapse",
      to: "/base/collapses",
    },
    {
      component: CNavItem,
      name: "List group",
      to: "/base/list-groups",
    },
    {
      component: CNavItem,
      name: "Navs & Tabs",
      to: "/base/navs",
    },
    {
      component: CNavItem,
      name: "Pagination",
      to: "/base/paginations",
    },
    {
      component: CNavItem,
      name: "Placeholders",
      to: "/base/placeholders",
    },
    {
      component: CNavItem,
      name: "Popovers",
      to: "/base/popovers",
    },
    {
      component: CNavItem,
      name: "Progress",
      to: "/base/progress",
    },
    {
      component: CNavItem,
      name: "Spinners",
      to: "/base/spinners",
    },
    {
      component: CNavItem,
      name: "Tables",
      to: "/base/tables",
    },
    {
      component: CNavItem,
      name: "Tooltips",
      to: "/base/tooltips",
    },
  ],
};
