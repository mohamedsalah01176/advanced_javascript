//we can use reduce
// function Calc(sign="sum",...numbers){
//     let result=numbers[0];
//     for(let i=0;i<numbers.length-1;i++){
//         if(sign === "sum"){
//             result+=numbers[i+1];
//         }else if(sign === "subtract"){
//             result-=numbers[i+1];
//         }else if(sign === "multiply"){
//             result*=numbers[i+1];
//         }else if(sign === "divide"){
//             result/=numbers[i+1];
//         }else{
//             throw new Error("please select correct operation from this [sum subtract multiply or divide]");
//         }
//     }
//     return {sign,result}
// }


function Calc(sign="sum",...numbers){
    let result=numbers[0];
        if(sign === "sum"){
            result=numbers.reduce((total,value)=>total+value,0);
        }else if(sign === "subtract"){
            result=numbers.reduce((total,value)=>total-value,0);
        }else if(sign === "multiply"){
            result=numbers.reduce((total,value)=>total*value,1);
        }else if(sign === "divide"){
            if(numbers.includes(0)){
                throw new Error("we can not devide on zero")
            }else{
                result=numbers.reduce((total,value)=>total/value,1);
            }
        }else{
            throw new Error("please select correct operation from this [sum subtract multiply or divide]");
        }
    return {sign,result}
}
let resFun=Calc("multiply",10,5,3);

console.log(`the result of ${resFun.sign} operation is ${resFun.result}`);



