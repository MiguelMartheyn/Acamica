import React from "react";
import SubMenu from "./SubMenu";
import SemanticCard from "../semanticUiCard/SemanticCard";

function Cards({ usuarios }) {
  const cards = usuarios.products ? (
    usuarios.products.map((card) => (
      <SemanticCard
        name={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card._id}
        category={card.category}
      />
    ))
  ) : (
    <h1>No hay Productos disponibles</h1>
  );

  return (
    <div>
      <div className="cards">{cards}</div>
      <SubMenu />
    </div>
  );
}

export default Cards;