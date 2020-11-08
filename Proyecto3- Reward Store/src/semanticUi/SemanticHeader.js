import React from "react";
import { Header, Image } from "semantic-ui-react";
import SemanticCoin from "./SemanticCoin";
import SemanticModalCoin from "./SemanticModalCoin";
import SemanticModalHistory from "../semanticUi/SemanticModalHistory";
import "../index.css";

const HeaderExampleImage = ({
  name,
  coin,
  usuarios,
  setUsuarios,
  products,
  historial,
  compra
}) => (
  <Header as="h2" className='semanticHeader'>
    <Image
      circular
      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
    />{" "}
    <div className="user">{name}</div>
    <div className="points">
      <SemanticCoin coin={coin} />
    </div>
    <div className="modal-points">
      <SemanticModalCoin
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        name={name}
        coin={coin}
        products={products}
        historial={historial}
        compra={compra}
      />
    </div>
    <div className='semanticModalHistory'><SemanticModalHistory usuarios={usuarios} /></div>
  </Header>
);

export default HeaderExampleImage;
