import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import coin from "../images/coin.svg";
import cry from "../images/cry.png";

function ModalExampleModal({ cost, points }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Header>
          <div className="semanticCardNoCompraText">
            {" "}
            You need {cost - points} more
          </div>
          <Image circular src={coin} className="semanticCardNoCompraCoin" />{" "}
        </Header>
      }
    >
      <Modal.Header>product not redeemed</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={cry}
          title="expresión png de pngtree.com"
          wrapped
        />
        <Modal.Description>
          <Header>You need : {cost - points} Points</Header>
          <p>You need more points, request them!!</p>
          {/* <a href='htttps://.pngtree.com/so/expresión'>expresión png de pngtree.com</a> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Exit"
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
