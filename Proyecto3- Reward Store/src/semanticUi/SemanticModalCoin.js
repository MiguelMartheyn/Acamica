import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import SemanticCoinAumentar from "./SemanticCoinAumentar";

function ModalExampleCloseIcon({ usuarios, setUsuarios, name, coin }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button circular>More Points</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="money" content="Aumentar Points" />
      <Modal.Content>
        <p>¿ Deseas mas Points?</p>
        <p>Por favor elige el numero de Points que deseas</p>

        <SemanticCoinAumentar
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          name={name}
          coin={coin}
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