export const OutsideWrapper = (props) => {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
};

export const InsideWrapper = (props) => {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "18rem",
        margin: "10px",
      }}
    >
      {props.children}
    </div>
  );
};
