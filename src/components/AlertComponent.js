import React from "react";
import { CAlert, CCard } from "@coreui/react";

const AlertComponent = () => {
  return (
    <CCard className="mb-4">
      <CAlert
        color="warning"
        dismissible
        onClose={() => {
          alert("👋 Well, hi there! Thanks for dismissing me.");
        }}
      >
        <strong>Go right ahead</strong> and click that dimiss over there on the
        right.
      </CAlert>
    </CCard>
  );
};

export default AlertComponent;
