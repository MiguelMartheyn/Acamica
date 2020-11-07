import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import compras from '../images/compras.png'
import SemanticHistoryCard from './SemanticHistoryCard'

const ModalExampleScrollingContent = ({usuarios}) => {
  const [open, setOpen] = React.useState(false)


  const val = usuarios.historial?  usuarios.historial.filter(filter => filter.img.url) : []


  const cards = usuarios.historial ? usuarios.historial !== []? (
    val.map((card,index) => (
      <SemanticHistoryCard
        name={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card.index}
        category={card.category}
        cost={card.cost}
        points={usuarios.points}
      />
    ))
  ): <h1>No hay Productos canjeados</h1> : (
    <h1>No hay Productos canjeados</h1>
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Historial de Compras</Button>}
    >
      <Modal.Header>Historial de Compras</Modal.Header>
      <Modal.Content image scrolling>
      <Image circular size='medium' src={compras} wrapped />

        <Modal.Description>
        
          <div className="cards">{cards}</div>
          
          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Listo! <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleScrollingContent
