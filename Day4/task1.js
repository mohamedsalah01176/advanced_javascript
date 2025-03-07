let arr=[1,93,8,5,8,6,80,70,63,5];

let sortArrayASC =arr.sort((a,b)=>a-b);
console.log(`Ascending Array = ${sortArrayASC}`);

let sortArrayDES =arr.sort((a,b)=>b-a);
console.log(`Descending Array = ${sortArrayDES}`);


let filteredArray=arr.filter((item)=>item>50);
console.log(`Greater Than 50 = ${filteredArray}`);

let maxNumber=Math.max(...arr);
console.log(`the max number in arr = ${maxNumber}`);

let minNumber=Math.min(...arr);
console.log(`the min number in array = ${minNumber}`);