import React from "react";

const ListForModelCards = (props) => {
  const { lists = [], OnSelecttListItem } = props;
  return (
    <div
      style={{
        margin: "20px 0",
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {lists.map((list, index) => (
        <p
          onClick={() => OnSelecttListItem(list.id)}
          style={{
            width: "100px",
            height: "50px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",
            backgroundColor: "#eaedef",
            textAlign:'center',
            overflow:'hidden'
          }}
          key={index}
        >
          {list.title}
        </p>
      ))}
    </div>
  );
};

export default ListForModelCards;
