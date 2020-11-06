import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import {points} from '../servicios/GetUser'

function ButtonExampleLabeled ({usuarios,setUsuarios,name,coin})  {
  
  const [fetched, setFetched] = React.useState(false)
  const [number, setNumber] = React.useState(0)

 
   const pointss =(numberVal)=>{
     points({usuarios,setUsuarios,fetched,setFetched,numberVal,number,setNumber,name,coin});

   }


  return(
  <div>
    <Button as='div' labelPosition='right' onClick={()=>pointss(1000)}>
    
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        1,000
      </Label>
    </Button>

    <Button as='div' labelPosition='right' onClick={()=>pointss(5000)} >
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        5,000
      </Label>
    </Button>

    <Button as='div' labelPosition='right' onClick={()=>pointss(7500)}>
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        7,500
      </Label>
    </Button>

    {
        number > 0 && 
        <h1> Aumentaste tus Points en: {number}</h1>
        

      }
  </div>
)
  }

export default ButtonExampleLabeled