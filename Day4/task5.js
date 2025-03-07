let infObject={
    name:"mohamed Salah",
    age:20,
    adress:{
        city:"giza",
        street:"haram"
    },
    hobbies:["football","gym","walking"]
}

let {name,age,adress:{city,street},hobbies}=infObject;
console.log(`my name is ${name}, i am ${age} , i live in ${city} at ${street} street 
,and my hobbis are ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]}`);