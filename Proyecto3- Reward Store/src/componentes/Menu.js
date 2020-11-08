import React from "react";
import Cards from "./Cards";
import SemanticMenu from "../semanticUi-Menu/SemanticMenu";

function Menu({ usuarios, coin, name, setUsuarios,compra,setCompra}) {
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
        compra={compra}
        setCompra={setCompra}
        
      />
      
    </div>
  );
}

export default Menu;

  