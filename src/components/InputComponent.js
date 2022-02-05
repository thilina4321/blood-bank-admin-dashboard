import React from "react";

const InputComponent = (props) => {
  const { value, setValue, name, type = "text", color = "black" } = props;
  return (
    <div style={{ width: "100%", marginTop: "1rem", color: color }}>
      <label style={{ margin: "10px 0" }}> {name} </label>
      <input
        type={type}
        style={{ width: "100%", height: "50px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
