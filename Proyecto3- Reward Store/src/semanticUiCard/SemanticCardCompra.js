import React from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import buyblue from "../images/buy-blue.svg";
import happy from "../images/happy.png";
import { canjear } from "../servicios/GetUser";

function ModalExampleModal({
  image,
  category,
  nombre,
  setCompra,
  id,
  setUsuarios,
  name,
  points,
  products,
  historial,
  cost
}) {
  const [open, setOpen] = React.useState(false);
  const [fetched, setFetched] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <img
          className="semanticCardCompra"
          title="Comprar"
          src={buyblue}
          onClick={() =>
            canjear({
              setCompra,
              id,
              setUsuarios,
              name,
              points,
              products,
              historial,
              fetched,
              setFetched,
              cost
            })
          }
        />
      }
    >
      <Modal.Header>You've redeem the product successfully</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={happy}
          wrapped
          title="dinero png de pngtree.com"
        />
        <Modal.Description>
          <Header>redeemed product</Header>
          <div className="card">
            <Card color="blue">
              <Image src={image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{category}</Card.Header>
                <Card.Meta>
                  <span className="date">{nombre}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>
          {/* <a href='htttps://.pngtree.com/so/dinero'>dinero png de pngtree.com</a> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Great!"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
