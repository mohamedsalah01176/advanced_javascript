import {delayedMessage}  from "./promise.js";

delayedMessage("Hello, World!",3000).then(res=>console.log(res));