import React, { Fragment } from "react";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const ErrorDialog = (props) => {
  const { errors = [], errorState, setErrorState } = props;

  return (
    <Fragment>
      <CModal
        alignment="center"
        scrollable
        visible={errorState}
        onClose={() => setErrorState(false)}
      >
        <CModalHeader>
          <CModalTitle>Error Dialog</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {errors.map((error, index) => (
            <p key={index}> {error.message} </p>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setErrorState(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </Fragment>
  );
};

export default ErrorDialog;
