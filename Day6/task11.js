import {fetchUsers} from "./api.js"

let data=await fetchUsers("https://jsonplaceholder.typicode.com/users");
console.log(data)