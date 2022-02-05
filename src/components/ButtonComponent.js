import React from "react";

const ButtonComponent = (props) => {
  const { name, clickHandler } = props;
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <button
        style={{
          width: "100%",
          backgroundColor: "green",
          color: "white",
          height: "40px",
          cursor: "pointer",
          borderRadius: "20px",
          
        }}
        onClick={clickHandler}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonComponent;
