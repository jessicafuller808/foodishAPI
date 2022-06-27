//Foodish API Docs - https://github.com/surhud004/Foodish#readme
//------------------------------------------------

//Targets the button element and listens for a click. When clicked, getMeal is run.
document.querySelector('button').addEventListener('click', getMeal);


function getMeal() {
  //Sends request to the site
fetch("https://foodish-api.herokuapp.com/api")
.then(res => res.json()) // parses response as JSON
.then(data => { // passes the JSON as data
  console.log(data);

  document.querySelector('img').src = data.image;
})
  
.catch(err => {
    console.log(`${err}`)
});

}


