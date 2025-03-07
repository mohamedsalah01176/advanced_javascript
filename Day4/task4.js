let arr1=[2,8,9,3,1,4,6];
let arr2=[2,99,5,6,2,56,3,8];
let margeArr=[...arr1,...arr2];
console.log("marge array is ",margeArr);

// let removeDeplicate=[...new Set(margeArr)];
// console.log(removeDeplicate);


// function rempveDup(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         let isUniq=true;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===newArr[j]){
//                 isUniq=false;
//                 break;
//             }
//         }
//         if(isUniq){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function rempveDup(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }

function rempveDup(arr){
    let newarr=arr.filter((item,index)=>arr.indexOf(item) === index);
    return newarr
}

let uniqeArr=rempveDup(margeArr);
console.log("uniqe Array is ",uniqeArr);

let sortArr=uniqeArr.sort((a,b) => a-b);
console.log("sort Array is ",sortArr);
