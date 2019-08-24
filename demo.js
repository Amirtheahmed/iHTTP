/**
 * iHHTP library
 * @author Amir Ahmed (Techwalia)
 * @version 1.0.0
 * Demo App
 */
const http = new iHTTP(); //initialize and load iHTTP library instance
const url = "https://jsonplaceholder.typicode.com/users"; //sample url for testing
//define UI elements
const get_button = document.getElementById("GET_button");
const post_button = document.getElementById("POST_button");
const update_button = document.getElementById("PUT_button");
const delete_button = document.getElementById("DELETE_button");
const resDiv = document.getElementById("results");

//Initialize event handlers on UI elements
get_button.addEventListener("click", getFunc);
post_button.addEventListener("click", postFunc);
update_button.addEventListener("click", updateFunc);
delete_button.addEventListener("click", deleteFunc);

//functions declarations

//sample data for the demo
const data = {
    name: 'john doe',
    username: 'johny',
    email: 'johnyy@john.com'
}

/**
 * Demo function on using iHTTP library 
 * GET method
 */
function getFunc() {
    //calling iHTTP get component
    http.get(url)
        .then(data => { resDiv.innerHTML = "GET Success!! open console log to see the response"; console.log(data) })
        .catch(error => resDiv.innerHTML = error);
}

/**
 * Demo function on using iHTTP library 
 * post method
 */
function postFunc() {
    http.post(url, data)
        .then(data => { resDiv.innerHTML = "POST Success!! open console log to see the response"; console.log(data) })
        .catch(error => resDiv.innerHTML = error);
}

/**
 * Demo function demonstrating on using iHTTP library 
 * PUT/UPDATE method
 */
function updateFunc() {
http.put(url+"/2", data)  //appended `2` to target specific record when updating data through api
    .then(data => { resDiv.innerHTML = "PUT Success!! open console log to see the response"; console.log(data) })
    .catch(error => resDiv.innerHTML = error);
}

/**
 * Demo function demonstrating on using iHTTP library 
 * DELETE method
 */
function deleteFunc() {
    http.delete(url+"/2") //appended `2` to target specific record when using the api
    .then(data => { resDiv.innerHTML = "DELETE Success!! open console log to see the response"; console.log(data) })
    .catch(error => resDiv.innerHTML = error);
}
