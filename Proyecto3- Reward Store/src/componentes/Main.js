import React from "react";
import Menu from './Menu';
import main from '../images/main.png'
import '../index.css'


function Main ({usuarios}){
   
  
   
    return (
      <div>
         <div className='container-img-main'>
          <img className='img-main' src={main} alt={main} height='20%' width='100%'/>
          <div className='overlay'>
          <div className="text-main">Electronics</div>
          </div>
         </div>
        
        <Menu
          usuarios={usuarios}
        />
      </div>
    );
  }

  export default Main;
