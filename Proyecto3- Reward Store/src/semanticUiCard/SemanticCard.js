import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Macbook from '../images/MacbookPro-x1.png'

const CardExampleCard = ({name,category,image}) => (
    
    <div className='card'>
  <Card>
  <Card.Content extra>
      <a>
        <Icon name='money' />
        Valor
      </a>
    </Card.Content>
    <Image src= {Macbook} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{category}</Card.Header>
      <Card.Meta>
        <span className='date'>{name}</span>
      </Card.Meta>
      
    </Card.Content>
    
  </Card>
  </div>
)

export default CardExampleCard
