class MathUtils{
    constructor(radius){
        this.radius=radius
    }
    static pi=3.14;
    static calculateCircumference(radius){
        return 2 * MathUtils.pi * radius;
    }
}

let obj=new MathUtils(5);
console.log(MathUtils.calculateCircumference(5));