import React from "react";
import Menu from './Menu';
import main from '../images/main.png'


function Main (){
   
  
   
    return (
      <div>
         <div className='container-img-main'>
          <img className='img-main' src={main} alt={main} height='20%' width='100%'/>
          <div className='overlay'>
          <div className="text-main">Electronics</div>
          </div>
         </div>
        
        <Menu/>
      </div>
    );
  }

  export default Main;
