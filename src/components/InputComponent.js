import React from "react";

const InputComponent = (props) => {
  const { value, setValue, name } = props;
  return (
    <div>
      <label> {name} </label>
      <input
        style={{ width: "100%" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
