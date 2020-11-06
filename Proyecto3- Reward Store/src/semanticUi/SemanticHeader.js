import React from "react";
import { Header, Image } from "semantic-ui-react";
import SemanticCoin from "./SemanticCoin";
import SemanticModalCoin from "./SemanticModalCoin";
import "../index.css";

const HeaderExampleImage = ({ name, coin, usuarios, setUsuarios ,products}) => (
  <Header as="h2">
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
      />
    </div>
  </Header>
);

export default HeaderExampleImage;