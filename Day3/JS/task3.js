
function Rectangle(w,h){
    let width=w;
    let height=h;
    console.log(this);
    Object.defineProperty(this,"height",{
        value:height,
        writable:false,
        enumerable:false,
        configurable:false,
    })
    Object.defineProperty(this,"width",{
        value:width,
        writable:false,
        enumerable:false,
        configurable:false,
    })
    this.area=function(){
        return width*height+"cm^2";
    }
    this.perimeter=function(){
        return 2*(width+height)+"cm";
    }
    this.displayInfo=function(){
        return `the width = ${width}cm , height= ${height}cm, area= ${this.area()} and perimeter=${this.perimeter()}`
    }
}

let rec=new Rectangle(5,5);
console.log(rec.displayInfo());