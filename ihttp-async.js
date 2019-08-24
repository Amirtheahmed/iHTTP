/**
 * iHTTP Library
 * @version 1.0.0
 * @author Amir Ahmed (Techwalia)
 * @License MIT
 * 
 */

 class iHTTP {
    //make an http get request using async and fetch
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();

        return resData;
     }

     //make an http post request using async and fetch
     async post(url, data){
         const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'appliction/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
     }

     //make an http put request using async and fetch
     async put(url, data){
           const response = await fetch(url, {
               method: 'PUT',
               headers: {
                   'Content-type': 'appliction/json'
               },
               body: JSON.stringify(data)
           });

           const resData = await response.json();
           return resData;
    }

    //make an http delete request using async and fetch
    async delete(url, data){
           const response = await fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'appliction/json'
               }
           });
           const resData = await "resource deleted ...";
           return resData;
    }
 }

 