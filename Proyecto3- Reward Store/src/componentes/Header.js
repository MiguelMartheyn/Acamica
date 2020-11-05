
import Main from './Main';
import React, { useEffect, useState } from "react";
import SemanticHeader from '../semanticUi/SemanticHeader';
import { Container, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import Macbook from '../images/MacbookPro-x1.png'
import AcerAspire from '../images/AcerAspire-x1.png';
import Nintendo from '../images/Nintendo3DS-x1.png';
import '../index.css'


function Header () {

  
    const [usuarios, setUsuarios] = useState(0);
    const [fetched, setFetched] = useState(false);

    const changePoints=(value)=>{
      
      console.log(value)
      
    }

    const requestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      },
    }

const endPoint = "https://coding-challenge-api.aerolab.co/user/me";



    useEffect(() => {
        if (!fetched) {
          fetch(endPoint, requestInit)
            .then((response) => response.json())
            .then((userList) => {
              setFetched(true);
              setUsuarios({
                name:userList.name,
                points:userList.points
              });
              console.log(usuarios)
            });
        }
        
      }, [fetched]);


    //   useEffect(() => {
    //     var request = new XMLHttpRequest();

    //     request.open('GET', 'https://coding-challenge-api.aerolab.co/user/me');
        
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.setRequestHeader('Accept', 'application/json');
    //     request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk');
        
    //     request.onreadystatechange = function () {
    //       if (this.readyState === 4) {
    //         console.log('Status:', this.status);
    //         console.log('Headers:', this.getAllResponseHeaders());
    //         // console.log('Body:', this.responseText);
            
    //         setUsuarios(this.responseText)
    //       }
    //     };
    //     console.log(usuarios)
    //     request.send();
        
        
        
    //   }, []);
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