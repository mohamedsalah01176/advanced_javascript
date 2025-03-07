import {delayedMessage as fetchData}  from "./promise.js";

fetchData("Data received","Network Error",2000)
    .then(res=>res.toUpperCase())
    .then(res=>console.log(res))
    .catch((err)=>console.log(err));