

function Squance(s,e,p){
    let start=s;
    let end=e;
    let step=p;
    let arrOfNumber=[];
    Object.defineProperty(this,"start",{
        value:start,
        writable:false,
        enumerable:false,
        configurable:false
    })
    Object.defineProperty(this,"end",{
        value:end,
        writable:false,
        enumerable:false,
        configurable:false
    })
    Object.defineProperty(this,"step",{
        value:step,
        writable:false,
        enumerable:false,
        configurable:false
    })
    
    let fillArray= function(){
            for(var i=start;i<end;i+=step){
                arrOfNumber.push(i);
            }
    }
    fillArray()
    this.toString=function(){
        if(arrOfNumber.length>0){
            return arrOfNumber.join();
        }else{
            throw "the array is empty";
        }
    }
    this.append=function(val){
        if(arrOfNumber.includes(val)){
            throw "it founded";
        }
        if(val%step==0){
            arrOfNumber.push(val);
        }else{
            throw `no the same step, step is ${step}`;
        }
    }
    this.preppend=function(val){
        if(arrOfNumber.includes(val)){
            throw "it founded";
        }
        if(val%step==0){
            arrOfNumber.splice(0,0,val);
        }else{
            throw `no the same step, step is ${step}`;
        }
    }
    this.pop=function(){
        if(arrOfNumber.length>0){
            arrOfNumber.pop();
        }else{
            throw "it is empty";
        }
    }
    this.dequeue=function(){
        if(arrOfNumber.length>0){
            arrOfNumber.splice(0,1)
        }else{
            throw "it is empty";
        }
    }
}
let sq=new Squance(4,15,2);
sq.append(16);
sq.preppend(2)
sq.pop();
sq.dequeue();
console.log(sq.toString());

