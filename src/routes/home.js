import React from "react";

const Faq = React.lazy(() => import("../views/home/faq/Faq"));

const SpecificFaq = React.lazy(() => import("../views/home/faq/SpecificFaq"));

export const homeRoutes = [
  { path: "/home-page", name: "Home", component: Faq, exact: true },
  { path: "/home-page/faq/:id", name: "Specific-FAQ", component: SpecificFaq },
  { path: "/home-page/faq", name: "FAQ", component: Faq },
];
