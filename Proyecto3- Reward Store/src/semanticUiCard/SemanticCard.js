import React from "react";
import { Card, Icon, Image,Header } from "semantic-ui-react";
import buyblue from '../images/buy-blue.svg'
import coin from '../images/coin.svg'
import SemanticCardNoCompra from './SemanticCardNoCompra'
import SemanticCardCompra from './SemanticCardCompra'



const CardExampleCard = ({ name, category, image ,cost,points,compra,setCompra}) => (
  <div className="card">
    <Card color='blue'>
      <Card.Content extra>
        
         
        
        <span className='span-semanticCard' >
        {cost <= points?
          <SemanticCardNoCompra cost={cost} points={points} />: <SemanticCardCompra/>
        }
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
