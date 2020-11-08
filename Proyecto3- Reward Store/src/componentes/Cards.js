import React from "react";
import SubMenu from "./SubMenu";
import SemanticCard from "../semanticUiCard/SemanticCard";

function Cards({
  usuarios,
  setUsuarios,
  pagina,
  setPagina,
  compra,
  setCompra,
  filtro,
  setFiltro
}) {
  const val = usuarios.products
    ? pagina === 1
      ? usuarios.products.slice(0, 16)
      : usuarios.products.slice(16, 32)
    : [];

  const cards = usuarios.products ? (
    val.map((card) => (
      <SemanticCard
        nombre={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card._id}
        category={card.category}
        cost={card.cost}
        points={usuarios.points}
        compra={compra}
        setCompra={setCompra}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        id={card._id}
      />
    ))
  ) : (
    <h1>no products available</h1>
  );

  return (
    <div>
      <div className="cards">{cards}</div>
      <SubMenu
        pagina={pagina}
        setPagina={setPagina}
        filtro={filtro}
        setFiltro={setFiltro}
      />
    </div>
  );
}

export default Cards;
