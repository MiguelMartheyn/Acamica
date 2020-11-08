import React from "react";
import { Card, Icon, Image, Header } from "semantic-ui-react";
import buyblue from "../images/buy-blue.svg";
import coin from "../images/coin.svg";
import SemanticCardNoCompra from "./SemanticCardNoCompra";
import SemanticCardCompra from "./SemanticCardCompra";

const CardExampleCard = ({
  nombre,
  category,
  image,
  cost,
  points,
  compra,
  setCompra,
  id,
  usuarios,
  setUsuarios
}) => (
  <div className="card">
    <Card color="blue">
      <Card.Content extra>
        <span className="span-semanticCard">
          {cost > points ? (
            <SemanticCardNoCompra cost={cost} points={points} />
          ) : (
            <SemanticCardCompra
              image={image}
              category={category}
              nombre={nombre}
              setCompra={setCompra}
              id={id}
              setUsuarios={setUsuarios}
              name={usuarios.name}
              points={usuarios.points}
              products={usuarios.products}
              historial={usuarios.historial}
              cost={cost}
            />
          )}
        </span>
      </Card.Content>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{category}</Card.Header>
        <Card.Meta>
          <span className="date">{nombre}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">
            {" "}
            <Icon name="money">Cost:{cost}</Icon>
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
