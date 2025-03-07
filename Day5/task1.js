let arr=[1, 2, 3, 4, 5, 3, 2];

let newSet=new Set(arr);

console.log(newSet);
console.log(` is set has 3 = ${newSet.has(3)}`);
newSet.delete(2)
console.log(` set after delet 2 = ${Array.from(newSet)}`);


console.log("foreach on set")
newSet.forEach((el)=>console.log(el));

console.log("for of on set")
for(let el of newSet){
    console.log(el);
}