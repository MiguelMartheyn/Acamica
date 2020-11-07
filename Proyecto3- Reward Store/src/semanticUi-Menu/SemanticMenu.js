import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonExampleAnimated = ({pagina,setPagina}) => (
  <div className="semanticMenu">
    <div className="semanticFirst">
      <div className="semanticMenuText">
        <p className="semanticMenuTextProduct">16 of 32 Products</p>
        <p>Sort by:</p>
      </div>
      <Button animated circular>
        <Button.Content visible>Most recent</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated circular>
        <Button.Content visible>Lowest Price</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated circular>
        <Button.Content visible>Highest price</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
    <div className="semanticFlechas">
    {pagina === 1?<Button circular icon="arrow alternate circle right outline" onClick={()=>setPagina(2)} />:
    
      <Button circular icon="arrow alternate circle left outline" onClick={()=>setPagina(1)} />
      
      
    }
    </div>
    
  </div>
);

export default ButtonExampleAnimated;

