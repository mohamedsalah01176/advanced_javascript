function Shape(w,h){
    if(Shape.constructor == "Shap"){
        throw new Error("Cannot create an instance of Shape directly. Use Rectangle or Square.");
    }
    this.width=w;
    this.height=h;
    Object.defineProperty(this, "useWidth", {
        value: this.width,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    Object.defineProperty(this, "useHeight",{
        get:function(){
            return this.height;
        },
        // set:function(val){
        //     this.height=val
        // },
        enumerable: false,
        configurable: false,
    });
}

Shape.prototype.toString=function(){
    return `the width = ${this.width}cm , height= ${this.height}cm, area= ${this.area()} and perimeter=${this.perimeter()}`
}
Shape.prototype.valueOf=function(){
    return this.area();
}
Shape.prototype.area=function(){
    console.log("area of shape");
}
Shape.prototype.perimeter = function () {
    console.log("paraimeter of shape");
};


function Rectangle(w,h){
    if(Rectangle.getNumberOfBook() >=1){
        throw new Error("Only one instance of Rectangle is allowed!");
    }
    Shape.call(this,w,h);
    Rectangle.coutOfSqueare++;
}

Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;


Rectangle.coutOfSqueare=0;
Rectangle.getNumberOfBook=function(){
    return Rectangle.coutOfSqueare;
}
//overridding
Rectangle.prototype.area=function(){
    return this.width*this.height;
}
Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height) ;
};


function Square(w){
    if(Square.getNumberOfSqaure()>=1){
        throw new Error("Only one instance of Rectangle is allowed!");
    }
    Shape.call(this,w,w);
    Square.coutOfSqueare++;
}

Square.coutOfSqueare=0;
Square.getNumberOfSqaure=function(){
    return Square.coutOfSqueare;
}
Square.prototype=Object.create(Shape.prototype);
Square.prototype.constructor=Square;
Square.prototype.area=function(){
    return this.width * this.height;
}
Square.prototype.perimeter=function(){
    return 4* this.width;
}



let Rectangle2=new Rectangle(15,5);
// let Rectangle3=new Rectangle(15,5);

console.log(Rectangle2.area());
console.log(Rectangle2.toString());
console.log(Rectangle.getNumberOfBook())

let square1=new Square(15);
console.log(square1.useWidth);
console.log(square1.useHeight);
console.log(square1.perimeter());
console.log(square1.toString());
console.log(Square.getNumberOfSqaure())
