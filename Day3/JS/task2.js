function Vehical(s,c){
    if(this.constructor === "Vehical"){
        throw new Error("Cannot create an instance of Vehical directly");
    }
    if(typeof s=="number" && typeof c=="string"){
        this.speed=s;
        this.color=c;
        Object.defineProperty(this,"useSpeed",{
            value:this.speed,
            writable:false,
            enumerable:false,
            configurable:false,
        })
        Object.defineProperty(this,"useColor",{
            get:function(){return this.speed1},     
            // set:function(val){this.color=val},
            enumerable:false,
            configurable:false,
        })
    }else{
        throw new Error("the speed must be numeric value and color must be string value");
    }
}

Vehical.prototype.turnLeft=function(){};
Vehical.prototype.turnRight=function(){};
Vehical.prototype.start=function(){};
Vehical.prototype.stop=function(){};
Vehical.prototype.goBackWord=function(sp,acc){};
Vehical.prototype.goForWord=function(sp,ass){};
Vehical.prototype.toString=function(){
    return `speed= ${this.speed}, color= ${this.color}`;
}
Vehical.prototype.valueOf=function(){
    return this.speed;
}

function Bicycle(speed,color){
    Vehical.call(this, speed, color);
}

Bicycle.prototype=Object.create(Vehical.prototype);
Bicycle.prototype.constructor=Bicycle;

Bicycle.prototype.ringBell=function(){console.log("ringBell")}

function MotorVehicle(speed,color,e,l){
    if(this.constructor == "MotorVehicle"){
        throw new Error("Cannot create an instance of MotorVehicle directly");
    }
    Vehical.call(this,speed,color);
    if(typeof e=="number" && typeof l=="string"){
        let sizeOfEngine=e;
        let licencePlate=l;
        Object.defineProperty(this,"numberOfEngine",{
            value:sizeOfEngine,
            writable:false,
            enumerable:false,
            configurable:false,
        })
        Object.defineProperty(this,"licencePlate",{
            get:function(){return licencePlate},
            enumerable:false,
            configurable:false,
        })
        this.toString=function(){
            return `speed= ${this.speed}, color= ${this.color} ,sizeOfEngine= ${sizeOfEngine} and licencePlate= ${this.licencePlate}`;
        }
    }else{
        throw new Error("the engine size must be numeric value and licence plate must be string value");
        
    }
}

MotorVehicle.prototype=Object.create(Vehical.prototype);
MotorVehicle.prototype.constructor=MotorVehicle;

function Car(speed,color,sizeOfEngine,licencePlate,d,wh,w){
    if(typeof d=="number" &typeof wh=="number" &&typeof w=="number" ){
        MotorVehicle.call(this,speed,color,sizeOfEngine,licencePlate)
        let door=d;
        let wheele=wh;
        let weight=w;
        Object.defineProperty(this,"doors",{
            value:door,
            writable:false,
            enumerable:false,
            configurable:false,
        })
        this.toString=function(){
            return `speed= ${this.speed}, color= ${this.color} ,sizeOfEngine= ${sizeOfEngine}, licencePlate= ${licencePlate},doors= ${door}, wheeles= ${wheele} and weight= ${weight}`;
        }
    }else{
        throw new Error("the door must be numeric value and wheele and weight must be numeric value");
    }
}
Car.prototype=Object.create(MotorVehicle.prototype);
Car.prototype.constructor=Car;

Car.prototype.switchonAirCon=function(){console.log("switchonAirCon")};

function DumpTruck(speed,color,sizeOfEngine,licencePlate,c,wh,w){
    if(typeof c=="number" &&typeof wh=="number" &&typeof w=="number" ){
        MotorVehicle.call(this,speed,color,sizeOfEngine,licencePlate)
        let capacity=c;
        let wheele=wh;
        let weight=w;
        Object.defineProperty(this,"capacity",{
            value:capacity,
            writable:false,
            enumerable:false,
            configurable:false,
        })
        this.toString=function(){
            return `speed= ${this.speed}, color= ${this.color} ,sizeOfEngine= ${sizeOfEngine}, licencePlate= ${licencePlate},capacity= ${capacity}, wheeles= ${wheele} and weight= ${weight}`;
        }
    }else{
        throw new Error("the door must be numeric value and wheele and weight must be numeric value");
    }
}

DumpTruck.prototype=Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor=DumpTruck;

DumpTruck.prototype.lowerLoad=function(){console.log("kkk")};
DumpTruck.prototype.raiseLoad=function(){};

let dumpTruck1=new DumpTruck(200,"red",3,"egypt",400,4,2000);
let car1=new Car(200,"red",3,"egypt",4,4,2000);
console.log(dumpTruck1.toString());
console.log(car1.toString());
console.log(car1+dumpTruck1);
