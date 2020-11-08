import React from "react";
import Cards from "./Cards";
import SemanticMenu from "../semanticUi-Menu/SemanticMenu";

function Menu({
  usuarios,
  coin,
  name,
  setUsuarios,
  compra,
  setCompra,
  filtro,
  setFiltro
}) {
  const [pagina, setPagina] = React.useState(1);

  return (
    <div>
      <div className="menu">
        <SemanticMenu
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          pagina={pagina}
          setPagina={setPagina}
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <h1>Page {pagina}</h1>
        {filtro && <h1>Filter: {filtro}</h1>}
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
        filtro={filtro}
        setFiltro={setFiltro}
      />
    </div>
  );
}

export default Menu;
