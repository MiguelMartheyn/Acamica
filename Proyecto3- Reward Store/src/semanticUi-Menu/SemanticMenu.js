import React from "react";
import { Button, Icon } from "semantic-ui-react";
import {
  filtroCategoria,
  filtroBajoPrecio,
  filtroAltoPrecio
} from "../servicios/Filtros";

const ButtonExampleAnimated = ({
  pagina,
  setPagina,
  usuarios,
  setUsuarios,
  filtro,
  setFiltro
}) => (
  <div className="semanticMenu">
    <div className="semanticFirst">
      <div className="semanticMenuText">
        {pagina === 1 ? (
          <p className="semanticMenuTextProduct">1-16 of 32 Products</p>
        ) : (
          <p className="semanticMenuTextProduct">16-32 of 32 Products</p>
        )}
        <p>Sort by:</p>
      </div>
      <Button
        animated
        circular
        onClick={() =>
          filtroCategoria({ usuarios, setUsuarios, filtro, setFiltro })
        }
      >
        <Button.Content visible>Category</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button
        animated
        circular
        onClick={() =>
          filtroBajoPrecio({ usuarios, setUsuarios, filtro, setFiltro })
        }
      >
        <Button.Content visible>Lowest Price</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button
        animated
        circular
        onClick={() =>
          filtroAltoPrecio({ usuarios, setUsuarios, filtro, setFiltro })
        }
      >
        <Button.Content visible>Highest price</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
    <div className="semanticFlechas">
      {pagina === 1 ? (
        <Button
          circular
          icon="arrow alternate circle right outline"
          onClick={() => setPagina(2)}
        />
      ) : (
        <Button
          circular
          icon="arrow alternate circle left outline"
          onClick={() => setPagina(1)}
        />
      )}
    </div>
  </div>
);

export default ButtonExampleAnimated;
