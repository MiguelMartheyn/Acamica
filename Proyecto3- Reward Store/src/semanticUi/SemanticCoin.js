import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

const ButtonExampleLabeled = ({ coin }) => (
  <div>
    <Button as="div" labelPosition="right">
      <Button icon>
        <Icon name="money" />
      </Button>
      <Label as="a" basic pointing="left">
        {coin}
      </Label>
    </Button>
  </div>
);

export default ButtonExampleLabeled;
