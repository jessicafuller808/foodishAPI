//Foodish API Docs - https://github.com/surhud004/Foodish#readme
//------------------------------------------------
//Sends request to the site
fetch("https://foodish-api.herokuapp.com/api")
.then(res => res.json()) // parses response as JSON
.then(data => { // passes the JSON as data
  console.log(data);
})
  
.catch(err => {
    console.log(`${err}`)
});

