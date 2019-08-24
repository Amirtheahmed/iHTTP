# iHTTP - a very simple http-ajax library

## Introduction
iHTTP is a simple JavaScript library for making simple json based http(ajax) requests.

## Technologies
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Async-Await](https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb)
* [Fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Browser Compatibility
* [JS promises] (https://caniuse.com/#feat=promises)
* [JS Async-Await] (https://caniuse.com/#feat=async-functions)
* [JS Fetch Api] (https://caniuse.com/#feat=fetch)

** Note: ** This library uses modern Javascript ES6 features like arrow functions. 
## Getting Started

### Installing
To start using the library just include one of the two JS files in your app
```
<script src="/ihttp-async.js"></script>
```

### Usage
To start using the library first intialize instance of the library
```
const http = new iHTTP(); //initialize and load iHTTP library instance
```
#### Performing GET request
Example
call get function with URL as a parameter
```
http.get(url) 
        .then(response => console.log(response))
        .catch(error => console.log(response));
```

#### Performing POST request
Example
call post function with URL as a parameter
```
const data = {
    name: 'john doe',
    username: 'johny',
    email: 'johnyy@john.com'
}
http.post(url, data) 
        .then(response => console.log(response))
        .catch(error => console.log(response));
```

#### Performing PUT request
Example
call put/update function with URL & data as a parameter
```
const data = {
    name: 'john doe',
    username: 'johny',
    email: 'johnyy@john.com'
}
http.put(url, data) 
        .then(response => console.log(response))
        .catch(error => console.log(response));
```

#### Performing DELETE request
Example
call delete function with URL as a parameter
```
http.delete(url) 
        .then(response => console.log(response))
        .catch(error => console.log(response));
```

## Running Demo
Include clone the library to local and open index.html
### demo files
  * index.html
  * demo.html

