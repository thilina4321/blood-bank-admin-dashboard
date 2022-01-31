import React from "react";
import { CButton } from "@coreui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ButtonGroupComponent = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { action, backRoute, id, data } = props;

  const updateHandler = () => {
    
    dispatch(action.updateValue({ id, ...data }));
    history.replace(backRoute);
  };
  const deleteHandler = () => {
    dispatch(action.deleteValue(id));
    history.replace(backRoute);
  };
  const cancelHandler = () => {
    history.replace(backRoute);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20px 5px",
        gap: "5px",
        justifyContent: "flex-end",
      }}
    >
      <CButton
        onClick={cancelHandler}
        style={{ backgroundColor: "grey", cursor: "pointer" }}
      >
        Cancel
      </CButton>
      <CButton
        onClick={deleteHandler}
        style={{ backgroundColor: "red", cursor: "pointer" }}
      >
        Delete
      </CButton>
      <CButton
        onClick={updateHandler}
        style={{ backgroundColor: "green", cursor: "pointer" }}
      >
        Update
      </CButton>
    </div>
  );
};

export default ButtonGroupComponent;
