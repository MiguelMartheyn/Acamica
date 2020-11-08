export function filtroBajoPrecio({ usuarios, setUsuarios, filtro, setFiltro }) {
    let name = usuarios.name;
    let points = usuarios.points;
    let products = usuarios.products;
    let historial = usuarios.historial;
  
    let productsOrder = products.sort((a, b) => a.cost - b.cost);
  
    setUsuarios({
      name: name,
      points: points,
      products: productsOrder,
      historial: historial
    });
  
    setFiltro("Lowest Price - Highest price");
  }
  
  export function filtroAltoPrecio({ usuarios, setUsuarios, filtro, setFiltro }) {
    let name = usuarios.name;
    let points = usuarios.points;
    let products = usuarios.products;
    let historial = usuarios.historial;
  
    let productsOrder = products.sort((a, b) => b.cost - a.cost);
  
    setUsuarios({
      name: name,
      points: points,
      products: productsOrder,
      historial: historial
    });
  
    setFiltro("Highest price - Lowest Price");
  }
  
  export function filtroCategoria({ usuarios, setUsuarios, filtro, setFiltro }) {
    let name = usuarios.name;
    let points = usuarios.points;
    let products = usuarios.products;
    let historial = usuarios.historial;
  
    let productsOrder = products.sort(function (a, b) {
      if (a.category > b.category) {
        return 1;
      }
      if (a.category < b.category) {
        return -1;
      }
  
      return 0;
    });
  
    setUsuarios({
      name: name,
      points: points,
      products: productsOrder,
      historial: historial
    });
    setFiltro("Category");
  }