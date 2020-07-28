const GSheetReader = require('g-sheet-api');

const SheetURL = '1PwvDFBJkQxlcAmzaYqmAWPAHjstb5Uqn72z-QL4KUmw'

const options = {
    sheetId: SheetURL,
    sheetNumber: 1,
    returnAllResults: true,
    filter: {
     // 'department': 'archaeology',
     // 'module description': 'introduction'
    },
    filterOptions: {
     // operator: 'or',
     // matching: 'loose'
    }
  }

GSheetReader(options, results => {
    console.log(results)
  });


//fetch("https://sheetdb.io/api/v1/s6saou3ex6syc")
//  .then((response) => response.json())
//  .then((data) => {

//    var obj = data[0]; 
// document.getElementById("ncTracking").src=obj.URL; 
 
//  })
//  .catch((error) => {
//    console.error(error);
//  });
