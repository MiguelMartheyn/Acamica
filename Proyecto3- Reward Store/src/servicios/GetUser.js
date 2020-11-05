
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

  



