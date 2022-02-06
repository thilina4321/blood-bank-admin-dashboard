import React from "react";

const InputComponent = (props) => {
  const {
    value,
    setValue,
    name,
    type = "text",
    color = "black",
    input = true,
  } = props;

  console.log(input);
  return (
    <div style={{ width: "100%", marginTop: "1rem", color: color }}>
      <label style={{ margin: "10px 0" }}> {name} </label>
      {input ? (
        <input
          type={type}
          style={{
            width: "100%",
            height: "30px",
            paddingLeft: "10px",
            borderRadius: "5px",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <textarea
          style={{ width: "100%", paddingLeft: "10px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows="10"
        />
      )}
    </div>
  );
};

export default InputComponent;
