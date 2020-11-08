export function user({ usuarios, setUsuarios, fetched, setFetched ,compra}) {
    const requestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    };
  
    const endPoint = "https://coding-challenge-api.aerolab.co/user/me";
  
    let name;
    let coin;
    let historial;
  
    if (!fetched) {
      fetch(endPoint, requestInit)
        .then((response) => response.json())
        .then((userList) => {
          setFetched(true);
          setUsuarios({
            name: userList.name,
            points: userList.points
          });
          name = userList.name;
          coin = userList.points;
          historial=usuarios.historial;
          products({ usuarios, setUsuarios, name, coin ,compra,historial});
        });
    }
  }
  
  export function points({
    usuarios,
    setUsuarios,
    setFetched,
    numberVal,
    setNumber,
    name,
    coin,
    products,
    historial
  }) {
    var request = new XMLHttpRequest();
  
    request.open("POST", "https://coding-challenge-api.aerolab.co/user/points");
  
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
    );
  
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        setFetched(true);
        setUsuarios({
          name: name,
          points: coin + numberVal,
          products: products,
          historial:historial
        });
        setNumber(numberVal);
  
        console.log("Status:", this.status);
        console.log("Headers:", this.getAllResponseHeaders());
        console.log("Body:", this.responseText);
      }
    };
  
    var body = {
      amount: numberVal
    };
  
    request.send(JSON.stringify(body));
  }
  
  function products({ usuarios, setUsuarios, name, coin,compra,historial }) {
    const requestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    };
  
    const endPoint = "https://coding-challenge-api.aerolab.co/products";
  
    fetch(endPoint, requestInit)
      .then((response) => response.json())
      .then((userList) => {
        setUsuarios({
          name: name,
          points: coin,
          products: userList,
          historial: historial
        });
         
      });
  }
  
  


  export function canjear({
    setCompra,id,setUsuarios,name,points,products,historial,fetched,setFetched ,cost
  }) {
    var request = new XMLHttpRequest();
  
    request.open("POST", 'https://coding-challenge-api.aerolab.co/redeem');
  
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
    );
  
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        setFetched(true);
        setUsuarios({
          name: name,
          points: (points-cost),
          products: products,
          historial:historial
        });
        
        history({setUsuarios,name,points,products,historial,setCompra,cost});
        console.log("Status:", this.status);
        console.log("Headers:", this.getAllResponseHeaders());
        console.log("Body:", this.responseText);
      }
      
    };
  
    var body = {
      productId: id
    };
  
    request.send(JSON.stringify(body));
  }



  function history({ setUsuarios,name,points,products,setCompra,cost}) {
    var request = new XMLHttpRequest();

request.open('GET', 'https://coding-challenge-api.aerolab.co/user/history');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    setUsuarios({
      name:name,
      points: points-cost,
      products:products,
      historial: this.responseText
    })
    
  }
};

request.send();
  }