export function user({ usuarios, setUsuarios, fetched, setFetched }) {
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
          products({ usuarios, setUsuarios, name, coin });
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
  
  function products({ usuarios, setUsuarios, name, coin }) {
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
          products: userList
        });
         historial({ usuarios, setUsuarios, name, coin ,userList})
      });
  }
  
  function historial({ usuarios, setUsuarios, name, coin ,userList}) {
    const requestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    };
  
    const endPoint = "https://coding-challenge-api.aerolab.co/user/history";
  
    fetch(endPoint, requestInit)
      .then((response) => response.json())
      .then((userList2) => {
        setUsuarios({
          name: name,
          points: coin,
          products: userList,
          historial:userList2
        });
      });
  }