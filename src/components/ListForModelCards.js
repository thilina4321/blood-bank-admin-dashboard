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
          className="list-for-model"
          key={index}
        >
          {list.title}
        </p>
      ))}
    </div>
  );
};

export default ListForModelCards;
