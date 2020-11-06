import React,{useEffect} from "react";
import SubMenu from './SubMenu';
import SemanticCard from '../semanticUiCard/SemanticCard'
import {products} from '../servicios/GetUser'



function Cards ({usuarios}) {
  const [fetched2, setFetched2] = React.useState(false)
   const [productss, setProductss] = React.useState([])

  
   React.useEffect(() => {

        
    products({productss,setProductss,fetched2, setFetched2,usuarios})
   
    
  }, [fetched2]);

  const cards = productss.length > 0?
  productss.map((card) => (
    
    <SemanticCard
      name={card.name}
      image={card.img.url}
      createDate={card.createDate}
      cost={card.cost}
      key={card.productId}
      category={card.category}
    />)):<h1>No hay Productos disponibles</h1>
  
    
    return (
      <div>
      <div className='cards'>{cards}</div>
        <SubMenu/>
      </div>
    );
  }

  export default Cards;