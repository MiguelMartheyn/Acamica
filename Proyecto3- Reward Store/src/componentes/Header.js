
import Main from './Main';
import React, { useEffect, useState } from "react";


const Header = () =>{
    const [usuarios, setUsuarios] = useState({
        "_id": "5edd9e99444fe4006da9924d",
        "name": "John Kite",
        "points": 10468610,
        "redeemHistory": [
          {
            "img": {
              "url": "https://aerolab-challenge.now.sh/images/AcerAspire-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/AcerAspire-x2.png"
            },
            "createDate": "2020-06-27T18:44:51.803Z",
            "productId": "5a0b36ac734d1d08bf70856c",
            "name": "Acer Aspire E1-522",
            "cost": 600,
            "category": "Laptops",
            "_id": "5e59e22c742352001ed90974"
          },
          {
            "img": {
              "url": "https://aerolab-challenge.now.sh/images/MacbookPro-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/MacbookPro-x2.png"
            },
            "createDate": "2020-06-27T18:44:57.707Z",
            "productId": "5a0b35df734d1d08bf7084cb",
            "name": "Macbook Pro",
            "cost": 1300,
            "category": "Laptops",
            "_id": "5e59e22c742352001ed90974"
          },
          {
            "img": {
              "url": "https://aerolab-challenge.now.sh/images/Switch-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Switch-x2.png"
            },
            "createDate": "2020-06-27T18:45:02.906Z",
            "productId": "5a0b35d7734d1d08bf7084c9",
            "name": "Nintendo Switch 32GB",
            "cost": 300,
            "category": "Gaming",
            "_id": "5e59e22c742352001ed90974"
          }
        ],
        "createDate": "2020-06-08T02:12:41.487Z",
        "__v": 0
      }
          );
    // const [fetched, setFetched] = useState(false);

// const headers ={
//     "Content-Type":"application/json",
//     
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
// }




    // useEffect(() => {
    //     if (!fetched) {
    //       fetch("https://coding-challenge-api.aerolab.co/user/me", headers)
    //         .then((response) => response.json())
    //         .then((userList) => {
    //           setFetched(true);
    //           setUsuarios(userList);
    //           console.log(userList)
    //         });
    //     }
        
    //   }, [fetched]);


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

    return (
      <div>
        <h1>Holis Header</h1>
       { usuarios.name}
       {usuarios.points}


       

        <Main/>
      </div>
    );
  }



  
    

export default Header;