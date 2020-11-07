import React from "react";
import SemanticSubMenu from "../semanticUiSubMenu/SemanticSubMenu.js";

function SubMenu({pagina,setPagina}) {
  return (
    <div className="submenu">
      <SemanticSubMenu 
        pagina={pagina}
        setPagina={setPagina}
      />
    </div>
  );
}

export default SubMenu;