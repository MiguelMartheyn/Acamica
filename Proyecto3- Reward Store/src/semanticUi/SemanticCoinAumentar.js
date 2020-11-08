import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { points } from "../servicios/GetUser";

function ButtonExampleLabeled({
  usuarios,
  setUsuarios,
  name,
  coin,
  products,
  historial,
  compra
}) {
  const [fetched, setFetched] = React.useState(false);
  const [number, setNumber] = React.useState(0);

  const pointss = (numberVal) => {
    points({
      usuarios,
      setUsuarios,
      fetched,
      setFetched,
      numberVal,
      number,
      setNumber,
      name,
      coin,
      products,
      historial,
      compra
    });
  };

  return (
    <div>
      <Button as="div" labelPosition="right" onClick={() => pointss(1000)}>
        <Button icon>
          <Icon name="money" />
        </Button>
        <Label as="a" basic pointing="left">
          1000
        </Label>
      </Button>

      <Button as="div" labelPosition="right" onClick={() => pointss(5000)}>
        <Button icon>
          <Icon name="money" />
        </Button>
        <Label as="a" basic pointing="left">
          5000
        </Label>
      </Button>

      <Button as="div" labelPosition="right" onClick={() => pointss(7500)}>
        <Button icon>
          <Icon name="money" />
        </Button>
        <Label as="a" basic pointing="left">
          7500
        </Label>
      </Button>

      {number > 0 && <h1> you increased your points in: {number}</h1>}
    </div>
  );
}

export default ButtonExampleLabeled;
