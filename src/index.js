import "react-app-polyfill/stable";
import "core-js";
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import ErrorDialog from "./components/ErrorDialog";
import LoadingSpinner from "./components/LoadingSpinner";

const GlobalLoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  global.setIsLoading = setIsLoading;
  return isLoading ? (
    <div
      style={{ position: "fixed", top: "300px", left: "40%", color: "black" }}
    >
      <LoadingSpinner />
    </div>
  ) : null;
};

const GlobalErrorDialogBox = () => {
  const [errorState, setErrorState] = useState(false);
  const [errors, setErrors] = useState();

  const showAlert = (argErrors) => {
    console.log(argErrors);
    setErrorState(true);
    setErrors(argErrors);
  };

  global.showAlert = showAlert;

  return (
    <Fragment>
      <ErrorDialog
        errors={errors}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      ;
    </Fragment>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalErrorDialogBox />
    <GlobalLoadingSpinner />
  </Provider>,
  document.getElementById("root")
);

