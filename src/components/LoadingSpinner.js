import React from "react";

import { CSpinner } from "@coreui/react";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CSpinner variant="grow" />
    </div>
  );
};

export default LoadingSpinner;
