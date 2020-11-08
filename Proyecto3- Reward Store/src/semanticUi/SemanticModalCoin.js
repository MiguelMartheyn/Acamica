import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import SemanticCoinAumentar from "./SemanticCoinAumentar";

function ModalExampleCloseIcon({
  usuarios,
  setUsuarios,
  name,
  coin,
  products,
  historial,
  compra
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button circular>More Points</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="money" content="Increase points" />
      <Modal.Content>
        <p>¿ Do you want more points??</p>
        <p>Please choose the number of Points you want</p>

        <SemanticCoinAumentar
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          name={name}
          coin={coin}
          products={products}
          historial={historial}
          compra={compra}
        />
      </Modal.Content>

      <Modal.Actions>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
