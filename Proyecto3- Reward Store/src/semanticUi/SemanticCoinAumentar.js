import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonExampleLabeled = ({setSelect}) => (
  <div>
    <Button as='div' labelPosition='right' onClick={() => setSelect(1000)}>
    
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        1,000
      </Label>
    </Button>

    <Button as='div' labelPosition='right' onClick={() => setSelect(5000)} >
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        5,000
      </Label>
    </Button>

    <Button as='div' labelPosition='right' onClick={() => setSelect(7500)}>
      <Button icon>
        <Icon name='money' />
        
      </Button>
      <Label as='a' basic pointing='left'>
        7,500
      </Label>
    </Button>
  </div>
)

export default ButtonExampleLabeled