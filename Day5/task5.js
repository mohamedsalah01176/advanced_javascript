class Temperature{
    _celsius=0;
    constructor(degree){
        this._celsius=degree;
    }

    get celsius(){
        return this._celsius;
    }
    set celsius(val){
        if(val <= -273.15){
            throw new Error("please enter correct temp")
        }else{
            this._celsius=val;
        }
    }
}

let obj=new Temperature(20);
console.log("getter method",obj.celsius);

obj.celsius=30;
console.log("getter method after update",obj.celsius);


obj.celsius=-273.15;