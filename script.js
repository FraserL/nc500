fetch("https://sheetdb.io/api/v1/s6saou3ex6syc")
  .then((response) => response.json())
  .then((data) => {

    var obj = data[0]; 
 document.getElementById("ncTracking").src=obj.URL; 
 
  })
  .catch((error) => {
    console.error(error);
  });
