const makeHTML = (json) => {
    document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
  }
fetch('https://randomuser.me/api/?results=5&nat=us')
.then((response) => response.json())
.then((myJson) => makeHTML(myJson))
.catch((error) => console.log(error))