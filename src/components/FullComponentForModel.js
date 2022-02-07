import React, { useState } from "react";

import ModelComponent from "./ModelComponent";
import ListForModelCards from "./ListForModelCards";
import { CButton } from "@coreui/react";

const FullComponentForModel = (props) => {
  const {
    imageElements = [],
    inputElements = [],
    title,
    addValues,
    updateValues,
    setList,
    allMethods,
    selectedItemMethod,
  } = props;

  const [selectedListItem, setSelectedListItem] = useState({});
  const [modelList, setModelList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modelType, setModelType] = useState(false);

  const onModelListHandler = () => {
    let idOfItemSelectedForUpdate = selectedListItem.id;

    if (idOfItemSelectedForUpdate) {
      let item = modelList.find((l) => l.id === idOfItemSelectedForUpdate);
      const updatedItem = updateValues(item);

      setModelList((prev) => [
        ...prev.filter((p) => p.id !== idOfItemSelectedForUpdate),
        updatedItem,
      ]);

      setList((prev) => [
        ...prev.filter((p) => p.id !== idOfItemSelectedForUpdate),
        updatedItem,
      ]);
    } else {
      setModelList((prev) => [
        ...prev,
        {
          id: modelList.length + 1,
          ...addValues(),
        },
      ]);

      setList((prev) => [
        ...prev,
        {
          id: modelList.length + 1,
          ...addValues(),
        },
      ]);
    }

    allMethods(true);
  };

  const onModelHandlerClose = () => {
    allMethods();
  };

  const OnSelecttListItem = (id) => {
    const findItem = modelList.find((l) => l.id === id);
    setSelectedListItem(findItem);
    selectedItemMethod(findItem);
    setIsOpen(true);
    setModelType("update");
  };

  return (
    <div
      style={{
        margin: "15px 0",
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <CButton
        onClick={() => {
          setModelType("add");
          setIsOpen(true);
        }}
      >
        You May Like
      </CButton>

      {isOpen && (
        <ModelComponent
          modelType={modelType}
          onModelHandlerClose={onModelHandlerClose}
          onModelListHandler={onModelListHandler}
          imageElements={imageElements}
          inputElements={inputElements}
          title={title}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      {modelList.length > 0 && (
        <ListForModelCards
          OnSelecttListItem={OnSelecttListItem}
          lists={modelList}
        />
      )}
    </div>
  );
};

export default FullComponentForModel;
