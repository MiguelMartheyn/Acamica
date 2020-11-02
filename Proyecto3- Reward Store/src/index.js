import React from "react";
import ReactDOM from "react-dom";
import Header from './componentes/Header'
import "./index.css";




function App() {
  return (
    <>
      <Header/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


