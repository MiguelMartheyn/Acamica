import React from "react";
import SubMenu from "./SubMenu";
import SemanticCard from "../semanticUiCard/SemanticCard";

function Cards({ usuarios }) {
  
   const val = usuarios.products? usuarios.products.slice(0,16): []
  const cards = usuarios.products ? (
    val.map((card) => (
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

  console.log(val)
  return (
    <div>
      <div className="cards">{cards}</div>
      <SubMenu />
    </div>
  );
}

export default Cards;