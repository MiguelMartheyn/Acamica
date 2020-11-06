
  export  function user  ({usuarios,setUsuarios,fetched,setFetched}){

    const requestInit = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
        },
      }
  
  const endPoint = "https://coding-challenge-api.aerolab.co/user/me";

  
  
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
     
  }

  
  export  function points  ({usuarios,setUsuarios,setFetched,numberVal,setNumber,name,coin}){

    var request = new XMLHttpRequest();

request.open('POST', 'https://coding-challenge-api.aerolab.co/user/points');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    setFetched(true)
    setUsuarios({
        name: name,
        points: coin+numberVal
    })
    setNumber(numberVal)
    
    console.log(usuarios)
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);

  }
};

var body = {
  'amount': numberVal
};

request.send(JSON.stringify(body));
     
  }

  
  export function products({productss,setProductss, setFetched2,usuarios}){

    var request = new XMLHttpRequest();

    request.open('GET', 'https://coding-challenge-api.aerolab.co/products');
    
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk');
    
    request.onreadystatechange = function () {
      if (this.readyState === 4 ) {
          setFetched2(true)
        //   setProductss(this.responseText)
          console.log(productss)
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    
    request.send();
  }



