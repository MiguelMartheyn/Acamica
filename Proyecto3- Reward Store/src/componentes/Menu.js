import React from "react";
import Cards from './Cards';
import SemanticMenu from '../semanticUi-Menu/SemanticMenu'
import {products} from '../servicios/GetUser'

function Menu ({usuarios}) {
  

 
   
   
   
  
   
    return (
      <div >
      <div className='menu'>
        <SemanticMenu/>
        </div>
      <Cards 
        usuarios={usuarios}
      
      />
      </div>
    );
  }

  export default Menu;

  