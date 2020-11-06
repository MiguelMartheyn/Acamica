import Main from "./Main";
import React, { useEffect } from "react";
import SemanticHeader from "../semanticUi/SemanticHeader";
import "../index.css";
import { user } from "../servicios/GetUser";

function Header() {
  const [usuarios, setUsuarios] = React.useState(0);
  const [fetched, setFetched] = React.useState(false);

  useEffect(() => {
    user({ usuarios, setUsuarios, fetched, setFetched });
  }, [fetched]);

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  return (
    <div>
      <div className="header">
        <SemanticHeader
          name={usuarios.name}
          coin={usuarios.points}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
        />
      </div>

      <Main
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        name={usuarios.name}
        coin={usuarios.points}
      />
    </div>
  );
}

export default Header;