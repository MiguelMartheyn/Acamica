import React from "react";
import { Button } from "semantic-ui-react";

const ButtonExampleAnimated = ({pagina,setPagina}) => (
  <div className="semanticMenu">
    <div className="semanticFirst">
      <div className="semanticMenuText">
        <p className="semanticMenuTextProduct">16 of 32 Products</p>
      </div>
    </div>

    <div className="semanticFlechas">
    {pagina === 1?<Button circular icon="arrow alternate circle right outline" onClick={()=>setPagina(2)} />:
    
    <Button circular icon="arrow alternate circle left outline" onClick={()=>setPagina(1)} />
    
    
  }
    </div>
  </div>
);

export default ButtonExampleAnimated;
