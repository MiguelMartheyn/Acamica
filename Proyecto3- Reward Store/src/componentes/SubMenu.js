import React from "react";
import SemanticSubMenu from "../semanticUiSubMenu/SemanticSubMenu.js";

function SubMenu({ pagina, setPagina, filtro, SetFiltro }) {
  return (
    <div className="submenu">
      <h1>Page {pagina}</h1>
      {filtro && <h1>Filter: {filtro}</h1>}
      <SemanticSubMenu pagina={pagina} setPagina={setPagina} />
    </div>
  );
}

export default SubMenu;
