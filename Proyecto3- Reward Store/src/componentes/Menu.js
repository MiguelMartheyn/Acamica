import React from "react";
import Cards from "./Cards";
import SemanticMenu from "../semanticUi-Menu/SemanticMenu";

function Menu({ usuarios, coin, name, setUsuarios}) {
  const[pagina,setPagina] = React.useState(1);

  return (
    <div>
      <div className="menu">
        <SemanticMenu 
         setUsuarios={setUsuarios}
         pagina={pagina}
         setPagina={setPagina}
        />
        <h1>Pagina {pagina}</h1>
      </div>
      <Cards
        name={name}
        coin={coin}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        pagina={pagina}
        setPagina={setPagina}
      />
      
    </div>
  );
}

export default Menu;

  