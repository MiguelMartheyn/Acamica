import React from "react";
import SemanticSubMenu from "../semanticUiSubMenu/SemanticSubMenu.js";

function SubMenu({pagina,setPagina}) {
  return (
    <div className="submenu">
    <h1>Pagina {pagina}</h1>
      <SemanticSubMenu 
        pagina={pagina}
        setPagina={setPagina}
      />
    </div>
  );
}

export default SubMenu;