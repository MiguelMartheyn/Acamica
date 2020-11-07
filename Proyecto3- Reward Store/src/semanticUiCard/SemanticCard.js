import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ name, category, image ,cost,points,compra,setCompra}) => (
  <div className="card">
    <Card>
      <Card.Content extra>
        <a>
          <Icon name="money" />
           {cost}
        </a>
        <span className='span-semanticCard' onClick={()=>setCompra(true)}>
          <Icon name="money" />
           {points}
        </span>
      </Card.Content>
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
