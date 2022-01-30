import React from "react";

import { CCard, CCardBody, CCardText, CCardTitle, CCol } from "@coreui/react";

const CardComponent = (props) => {
  const { question, answer } = props;

  return (
    <CCard style={{ height: "8rem", overflow:'hidden' }}>
      <CCardBody>
        <CCardTitle>{question}</CCardTitle>
        <CCardText>{answer}</CCardText>
      </CCardBody>
    </CCard>
  );
};

export default CardComponent;
