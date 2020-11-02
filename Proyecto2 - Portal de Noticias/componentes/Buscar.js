import React from "react";
import { connect } from "react-redux";
import { fetchBuscar, fetchEnter } from "../React-Redux/actionCreator";
import { changeText } from "../React-Redux/actionCreator";
import cargando from "../images/cargando.gif";

class Buscar extends React.Component {
  render() {
    const {
      fetchBuscar,
      changeText,
      noticiasBuscar,
      text,
      fetchEnter
    } = this.props;
    let buscar = noticiasBuscar.filter((filter) => filter.img_url !== null);
    const buscarList = buscar.slice(0, 10);

    return (
      <>
        <input
          placeholder="Digite busqueda"
          value={text}
          onChange={changeText}
          onKeyPress={(e) => fetchEnter(e, text)}
        />
        <button onClick={() => fetchBuscar(text)}>Buscar</button>
        <div className="news">
          {buscarList.length > 0 ? (
            <h1>Resultado Busqueda</h1>
          ) : (
            <h1>Haga alguna busqueda</h1>
          )}
          {buscarList ? (
            <ul>
              {buscarList.map((quotes) => (
                <a
                  key={quotes.news_id}
                  href={quotes.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="new">
                    <div className="image">
                      <img
                        className="new-image"
                        src={quotes.img_url}
                        alt="No fue posible cargar la Imagen"
                      />
                    </div>
                    <div>
                      <h1>{quotes.source_name}</h1>
                    </div>
                    <div>{quotes.title}</div>
                  </div>
                </a>
              ))}
              {buscarList.length > 0 ? (
                <p></p>
              ) : (
                <img className="new-image" src={cargando} alt={cargando} />
              )}
            </ul>
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const estadoAPropiedades = {
    text: state.noticias.text,
    noticiasBuscar: state.noticias.noticiasBuscar
  };
  return estadoAPropiedades;
};

const mapDispatchToProps = {
  changeText: changeText,
  fetchBuscar: fetchBuscar,
  fetchEnter: fetchEnter
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscar);
