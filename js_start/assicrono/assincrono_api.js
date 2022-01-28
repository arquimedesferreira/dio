

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };


let url1= 'http://localhost:8000/carcontrol/register/'

fetch(url1,myInit)
  .then(response => response.json())
  .then(json => console.log(json))
