import React from "react";
import { connect } from "react-redux";
import { fetchCategoria } from "../React-Redux/actionCreator";
import { addCategoria } from "../React-Redux/actionCreator";
import cargando from "../images/cargando.gif";

class Diseño extends React.Component {
  componentDidMount() {
    this.props.fetchCategoria(6);
  }
  render() {
    const { noticiasCategoria } = this.props;

    let diseno = noticiasCategoria.filter(
      (filter) => filter.category === "Diseño" && filter.img_url !== null
    );
    const disenoList = diseno.slice(0, 10);
    return (
      <div className="news">
        <h1>Diseño</h1>
        {disenoList ? (
          <ul>
            {disenoList.map((quotes) => (
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
                      alt={quotes.img_url}
                    />
                  </div>
                  <div>
                    <h1>{quotes.source_name}</h1>
                  </div>
                  <div>{quotes.title}</div>
                </div>
              </a>
            ))}
            {diseno.length > 0 ? (
              <p></p>
            ) : (
              <img className="new-image" src={cargando} alt={cargando} />
            )}
          </ul>
        ) : (
          <div>
            <p>Loading news...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const estadoAPropiedades = {
    noticiasCategoria: state.noticias.noticiasCategoria
  };
  return estadoAPropiedades;
};

const mapDispatchToProps = {
  fetchCategoria: fetchCategoria,
  addCategoria: addCategoria
};

export default connect(mapStateToProps, mapDispatchToProps)(Diseño);
