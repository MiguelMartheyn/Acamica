import React from "react";
import Cards from "./Cards";
import SemanticMenu from "../semanticUi-Menu/SemanticMenu";

function Menu({ usuarios, coin, name, setUsuarios }) {
  return (
    <div>
      <div className="menu">
        <SemanticMenu />
      </div>
      <Cards
        name={name}
        coin={coin}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
      />
    </div>
  );
}

export default Menu;

  