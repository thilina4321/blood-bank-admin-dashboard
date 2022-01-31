import React from "react";
import { CButton } from "@coreui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const ButtonUpdateGroupComponent = (props) => {
  const { action, backRoute, id, data, url } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const { doRequest: doUpdateRequest } = useHttp({
    url,
    method: "put",
    body: data,
  });

  const { doRequest: doDeleteRequest } = useHttp({
    url: `${url}/${id}`,
    method: "delete",
    body: null,
  });

  const updateHandler = async () => {
    await doUpdateRequest();
    dispatch(action.updateValue({ id, ...data }));
    history.replace(backRoute);
  };

  const deleteHandler = async () => {
    await doDeleteRequest();
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

export default ButtonUpdateGroupComponent;
