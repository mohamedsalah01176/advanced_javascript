let country=new Map();
country.set("USA",331);
country.set("India",1380);
country.set("China",1441);

// let obj2=Object.fromEntries(country);
let obj={}

for(let el of country){
    obj[el[0]]=el[1];
}
console.log("convert map to object",obj);

for(let el in obj){
    console.log(`the key is ${el} and value of key is ${obj[el]}`);
}




// let objectToMap=new Map(Object.entries(obj));
// console.log("convert object to map  ",objectToMap);


let objectToMap=new Map();
for(let el in obj){
    objectToMap.set(el,obj[el]);
}

console.log("convert object to map  ",objectToMap);


let nameOfCountry=[];

for(let el of objectToMap){
    nameOfCountry.push(el[0]);
}

// console.log(nameOfCountry);

// let SetToMAp=new Set(objectToMap.keys());
let mapToSet=new Set(nameOfCountry);
console.log("convert Map to set  ",mapToSet);

let SetToArray=Array.from(mapToSet);
console.log("convert set to Aray  ",SetToArray);
