import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import coin from '../images/coin.svg'
import cry from '../images/cry.png'

function ModalExampleModal({cost, points}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Header >
        
        <div className='semanticCardNoCompraText'>Te faltan {cost-points}</div>
        
          <Image circular src={coin} className='semanticCardNoCompraCoin' /> </Header>}
    >
      <Modal.Header>Compra No Procesada</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={cry} title='expresión png de pngtree.com' wrapped />
        <Modal.Description>
          <Header>Points faltantes : {cost-points}</Header>
          <p>
            Necesitas mas Points, Solicitalos!!!
          </p>
          {/* <a href='htttps://.pngtree.com/so/expresión'>expresión png de pngtree.com</a> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        
        <Button
          content="Salir"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal