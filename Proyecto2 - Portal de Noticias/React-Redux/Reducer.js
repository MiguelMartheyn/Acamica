import { combineReducers } from "redux";
import {
  ADD_NOTICIAS,
  ADD_BUSCAR,
  ADD_TEXT,
  ADD_CATEGORIA
} from "./actionCreator";

const initialState = {
  noticias: [],
  text: "",
  buscar: false,
  noticiasBuscar: [],
  noticiasCategoria: []
};

const noticias = (noticias = initialState, action) => {
  if (action.type === ADD_NOTICIAS) {
    return {
      noticias: action.payload.noticias,
      text: "",
      buscar: false,
      noticiasBuscar: [],
      noticiasCategoria: []
    };
  }
  if (action.type === ADD_TEXT) {
    return {
      noticias: noticias.noticias,
      text: action.value,
      buscar: false,
      noticiasBuscar: noticias.noticiasBuscar,
      noticiasCategoria: []
    };
  }
  if (action.type === ADD_BUSCAR) {
    return {
      noticias: noticias.noticias,
      text: "",
      buscar: true,
      noticiasBuscar: action.payload.noticias,
      noticiasCategoria: []
    };
  }

  if (action.type === ADD_CATEGORIA) {
    return {
      noticias: noticias.noticias,
      text: "",
      buscar: false,
      noticiasBuscar: noticias.noticiasBuscar,
      noticiasCategoria: action.payload.noticias
    };
  }
  return noticias;
};

export default combineReducers({
  noticias
});
