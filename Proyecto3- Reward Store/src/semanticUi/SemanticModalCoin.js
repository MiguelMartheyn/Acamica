import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SemanticCoinAumentar from './SemanticCoinAumentar'

function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false)
  const [select, setSelect] = React.useState(0)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button onClick={() => setSelect(0)} >More Points</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
    
      <Header icon='money' content='Aumentar Points' />
      <Modal.Content>
        <p>
          ¿ Deseas mas Points?
        </p>
        <p>Por favor elige el numero de Points que deseas</p>
        
        <SemanticCoinAumentar
            
            setSelect={setSelect}
        />
{
        select > 0 && 
        <h1> Aumentaste tus Points en: {select}</h1>
        

      }
     
      </Modal.Content>
      
      <Modal.Actions>
      
        
        <Button color='green' onClick={() => setOpen(false) }>
          <Icon name='checkmark' /> Close
        </Button>

      </Modal.Actions>
      
    </Modal>
  )
}

export default ModalExampleCloseIcon