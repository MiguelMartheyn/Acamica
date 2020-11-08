import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import compras from "../images/compras.png";
import SemanticHistoryCard from "./SemanticHistoryCard";

const ModalExampleScrollingContent = ({ usuarios }) => {
  const [open, setOpen] = React.useState(false);

  const cards = usuarios.historial ? (
    usuarios.historial.map((card) => (
      <SemanticHistoryCard
        name={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card.createDate}
        category={card.category}
        cost={card.cost}
        points={usuarios.points}
      />
    ))
  ) : (
    <h1>no products exchanged</h1>
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button circular>RedeemHistory</Button>}
    >
      <Modal.Header>RedeemHistory</Modal.Header>
      <Modal.Content image scrolling>
        <Image circular size="medium" src={compras} wrapped />

        <Modal.Description>
          <div className="cards">{cards}</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Great! <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalExampleScrollingContent;
