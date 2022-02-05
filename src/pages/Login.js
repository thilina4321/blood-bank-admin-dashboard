import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import useHttp from "../hooks/useHttp";
import classes from "./auth.module.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useHistory();

  const loginRequest = useHttp({
    url: "/login",
    method: "post",
    body: { email, password },
    onSucsses: () => {},
  });

  const loginHandler = async () => {
    navigate.replace("/");
    return;
    await loginRequest();
  };

  return (
    <div className={classes.layout}>
      <div className={classes.auth}>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => navigate.replace("/register")}
        >
          NEW TO BLOOD BANK
        </h1>

        <InputComponent name="Email" value={email} setValue={setEmail} />
        <InputComponent
          name="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <ButtonComponent name="Login" clickHandler={loginHandler} />
      </div>
    </div>
  );
};

export default Login;
