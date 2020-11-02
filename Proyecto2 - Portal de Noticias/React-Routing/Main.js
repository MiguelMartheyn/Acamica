import React from "react";
import { Switch, Route } from "react-router-dom";
import Politica from "../Componentes/Politica";
import Internacionales from "../Componentes/Internacionales";
import Tecnologia from "../Componentes/Tecnologia";
import Espectaculos from "../Componentes/Espectaculos";
import Deportes from "../Componentes/Deportes";
import Diseño from "../Componentes/Diseño";
import Buscar from "../Componentes/Buscar";
import Home from "../Componentes/Home";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/politica" component={Politica} />
        <Route path="/internacionales" component={Internacionales} />
        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/espectaculos" component={Espectaculos} />
        <Route path="/deportes" component={Deportes} />
        <Route path="/diseno" component={Diseño} />
        <Route path="/buscar" component={Buscar} />
      </Switch>
    </main>
  );
};

export default Main;
