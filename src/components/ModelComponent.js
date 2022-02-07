import React, { Fragment } from "react";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import InputComponent from "./InputComponent";
import ImageUpload from "./ImageUpload";

const ErrorDialog = (props) => {
  const {
    inputElements = [],
    imageElements = [],
    isOpen,
    setIsOpen,
    title,
    onModelListHandler,
    onModelHandlerClose,
    modelType,
  } = props;

  return (
    <Fragment>
      <CModal
        alignment="center"
        scrollable
        visible={isOpen}
        onClose={() => {
          setIsOpen(false);
          onModelHandlerClose();
        }}
      >
        <CModalHeader>
          <CModalTitle> {title} </CModalTitle>
        </CModalHeader>

        <CModalBody>
          {imageElements.map((element, index) => (
            <ImageUpload
              key={index}
              url={element.url}
              setFile={element.setFile}
              setModelUrl={element.setModelUrl}
            />
          ))}
          <div style={{ height: "10px" }}> </div>
          {inputElements.map((element, index) => (
            <InputComponent
              key={index}
              value={element.value}
              setValue={element.setValue}
              name={element.name}
            />
          ))}
        </CModalBody>
        <CModalFooter>
          {modelType !== "add" && (
            <CButton
              style={{ backgroundColor: "red", cursor: "pointer" }}
              onClick={() => {
                onModelListHandler();
                setIsOpen(false);
              }}
            >
              Delete
            </CButton>
          )}
          <CButton
            color="secondary"
            onClick={() => {
              onModelListHandler();
              setIsOpen(false);
            }}
          >
            {modelType === "add" ? "Add" : "Update"}
          </CButton>
        </CModalFooter>
      </CModal>
    </Fragment>
  );
};

export default ErrorDialog;
