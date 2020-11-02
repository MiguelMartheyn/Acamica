import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import blondeonblonde from "./componentes/blondeonblonde.jpg";
import londoncalling from "./componentes/londoncalling.jpg";
import thewhitealbum from "./componentes/thewhitealbum.jpg";
import thebeatles from "./componentes/thebeatles.jpeg";
import theclash from "./componentes/theclash.jpg";
import bobdylan from "./componentes/bobdylan.jpg";
import Name from "./componentes/Name";
import Img from "./componentes/Img";
import Artist from "./componentes/Artist";
import Year from "./componentes/Year";
import Rating from "./componentes/Rating";

const albumes = [
  {
    id: 1,
    name: "THE WHITE ALBUM",
    artist: "THE BEATLES",
    foto: thebeatles,
    year: 1968,
    img: thewhitealbum,
    rating: 1,
    liked: true
  },
  {
    id: 2,
    name: "BLONDE ON BLONDE",
    artist: "BOB DYLAN",
    foto: bobdylan,
    year: 1966,
    img: blondeonblonde,
    rating: 5,
    liked: false
  },
  {
    id: 3,
    name: "LONDON CALLING",
    artist: "THE CLASH",
    foto: theclash,
    year: 1980,
    img: londoncalling,
    rating: 3,
    liked: false
  }
];

function App() {
  return (
    <div className="App">
      <h1>Galeria de albumes</h1>
      <Album albumes={albumes} />
    </div>
  );
}

const Album = props => {
  return (
    <div>
      {props.albumes.map(album => (
        <AlbumComplete album={album} key={album.id} />
      ))}
    </div>
  );
};

const AlbumComposition = props => {
  return (
    <div className="composicion">
      <Artist artista={props.album.artist} Foto imagen={props.album.foto} />
      <Year año={props.album.year} />
      <Rating rating={props.album.rating} />
    </div>
  );
};

const AlbumComplete = props => {
  return (
    <div className="contenedor">
      <Name nombre={props.album.name} Like megusta={props.album.liked} />
      <Img imagen={props.album.img} />
      <AlbumComposition album={props.album} />
    </div>
  );
};

var styles =
  "@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');";
var newSS = document.createElement("link");
newSS.rel = "stylesheet";
newSS.href = "data:text/css," + escape(styles);
document.getElementsByTagName("head")[0].appendChild(newSS);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
