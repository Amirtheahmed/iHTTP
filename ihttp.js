/**
 * @version 1.0.0
 * @author Amir Salih
 * @License MIT
 * 
 */

 class iHTTP {
    //make an http get request using promises and fetch
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
     }

     //make an http post request using promises and fetch
     post(url, data){
         return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'appliction/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
         });
     }

     //make an http put request using promises and fetch
     put(url, data){
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'PUT',
               headers: {
                   'Content-type': 'appliction/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(error => reject(error))
        });
    }

    //make an http delete request using promises and fetch
    delete(url, data){
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'appliction/json'
               }
           })
           .then(res => res.json())
           .then(data => resolve("resource deleted"))
           .catch(error => reject(error))
        });
    }
 }

 