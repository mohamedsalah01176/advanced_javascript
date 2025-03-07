let studentScores=new Map()

studentScores.set("Alice",85);
studentScores.set("Bob",90);
studentScores.set("Charlie",78);
console.log(studentScores)

console.log(`the greade Bob is ${studentScores.get("Bob")}`);

studentScores.set("Charlie",88);
console.log(`the Charlie Bob is ${studentScores.get("Charlie")}`);

console.log(` David ${studentScores.has("David")?"found":"Not Found"}`);

console.log("Iterate by forEach ")
studentScores.forEach(el=>console.log(el))

console.log("Iterate by for_of ")
for(let student of studentScores){
    console.log(student[1]);
}