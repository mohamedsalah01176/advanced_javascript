

let linkedList={
    data:[],
    push: function (keyVal, val) {
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].keyVal == val){
                throw "the data is founded";
            }
        }
        
        if (this.data.length == 0 || this.data[this.data.length - 1].keyVal < val) {
            this.data.push({ keyVal: val });
        }else{
            throw "the number is less than another items";
        }
    },
    pop:function(){
        if(this.data.length==0){
            throw "array is empty";
        }else{
            this.data.pop();
        }
    },
    Insert:function(keyVal, val){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].keyVal == val){
                throw "the data is founded";
            }
        }
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].keyVal<val && this.data[i+1].keyVal>val ){
                this.data.splice(i+1,0,{keyVal:val});
                break;
            }
        }
    },
    remove:function(val){
        let isfound=false;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].keyVal == val){
                this.data.splice(i,1);
                isfound=true;
            }
        }
        if(isfound == false){
            throw "not found";
        }
    },
    dequeue:function(){
        if(this.data.length>0){
            this.data.splice(0,1);
        }else{
            throw "array is empty";
        }
    },
    display:function(){
        for(let i=0;i<this.data.length;i++){
            console.log(this.data[i]);
        }
    }
}

linkedList.push("val",1);
linkedList.push("val",4);
linkedList.push("val",6);
linkedList.Insert("val",3);
linkedList.Insert("val",5);
// linkedList.Insert("val",3);
// // linkedList.pop();

// // linkedList.dequeue();

linkedList.display();




//task2

// function reverseFun(){
//     let arr=[...arguments]
//     if(arguments.length>0){
//         return arr.reverse();
//     }else{
//         throw "no arguments";
//     }
// }

function reverseFun(){
    if(arguments.length>0){
        return [].reverse.apply(arguments);
    }else{
        throw "no arguments";
    }
}

// function reverseFun(){
//     if(arguments.length>0){
//         return [].reverse.call(arguments);
//     }else{
//         throw "no arguments";
//     }
// }
console.log(reverseFun(1,2,3,4,5,6));




//task3
var cusObj={
    id:"SD-10",
    locationU:"SV",
    getSetGen:function(){
        //we can use let (block scope)
        for (var i in this) {
            if(typeof this[i] !== "function"){
                this["get" + i] = (function (i) {
                    return function () {
                        console.log(this[i]);
                    };
                })(i);
                this["set"+i]=(function (i) {
                    return function (val) {
                            this[i]=val;
                    };
                })(i);
            }
        } 
    }
}
cusObj.getSetGen();
cusObj.setlocationU("giza");
cusObj.getlocationU();

var user = { name: "Ali", age: 10 };
cusObj.getSetGen.call(user);

user.setname("mohamed");

user.getname(); 


