import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ name, category, image }) => (
  <div className="card">
    <Card>
      <Card.Content extra></Card.Content>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{category}</Card.Header>
        <Card.Meta>
          <span className="date">{name}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
