
import Main from './Main';
import React, { useEffect, useState } from "react";
import SemanticHeader from '../semanticUi/SemanticHeader';
import { Container, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import Macbook from '../images/MacbookPro-x1.png'
import AcerAspire from '../images/AcerAspire-x1.png';
import Nintendo from '../images/Nintendo3DS-x1.png';
import '../index.css'
import GetUser from '../servicios/GetUser';
import {user} from '../servicios/GetUser'



function Header () {

  
    const [usuarios, setUsuarios] = useState(0);
    const [fetched, setFetched] = useState(false);

    const changePoints=(value)=>{
      
      console.log(value)
      
    }



    useEffect(() => {

        user({usuarios,setUsuarios,fetched,setFetched})
        
      }, [fetched]);


    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);
    
    return (
      <div >
        <div className='header'>
        
            <SemanticHeader
              name={usuarios.name}
              coin={usuarios.points}
              changePoints={changePoints}
            />
        </div>
       

       

        <Main
          usuarios={usuarios}
        />
        
      </div>
    );
  }



  
    

export default Header;