
// function Rectangle(w,h){
//     let width=w;
//     let height=h;
//     this.getWidth=function(){
//         if(width === "undefined"){
//             throw "not found ";
//         }else{
//             return "the width is"+width;
//         }
//     }
//     this.setWidth=function(val){
//         width=val;
//     }
//     console.log(this);
//     this.getHeight=function(){
//         if(height === "undefined"){
//             throw "not found ";
//         }else{
//             return "the height is"+height;
//         }
//     }
//     this.setHeight=function(val){
//         height=val;
//     }

//     this.area=function(){
//         return width*height+"cm^2";
//     }
//     this.perimeter=function(){
//         return 2*(width+height)+"cm";
//     }
//     this.displayInfo=function(){
//         return `the width = ${width}cm , height= ${height}cm, area= ${this.area()} and perimeter=${this.perimeter()}`
//     }
// }

// let rec=new Rectangle(5,5);
// console.log(rec);


// function Squance(s,e,p){
//     let start=s;
//     let end=e;
//     let step=p;
//     let arrOfNumber=[];
//     this.getStart=function(){
//         if(start === "undefined"){
//             throw "not found ";
//         }else{
//             return "the start is"+start;
//         }
//     }
//     this.setStart=function(val){
//         start=val;
//     }
    
//     this.getEnd=function(){
//         if(end === "undefined"){
//             throw "not found ";
//         }else{
//             return "the end is"+end;
//         }
//     }

//     this.setEnd=function(val){
//         end=val;
//     }
//     this.getStep=function(){
//         if(step === "undefined"){
//             throw "not found ";
//         }else{
//             return "the step is"+step;
//         }
//     }
//     this.setStep=function(val){
//         step=val;
//     }

//     let fillArray= function(){
//             for(var i=start;i<end;i+=step){
//                 arrOfNumber.push(i);
//             }
//     }
//     fillArray()
//     this.display=function(){
//         if(arrOfNumber.length>0){
//             return arrOfNumber.join();
//         }else{
//             throw "the array is empty";
//         }
//     }
//     this.append=function(val){
//         if(arrOfNumber.includes(val)){
//             throw "it founded";
//         }
//         if(val%step==0){
//             arrOfNumber.push(val);
//         }else{
//             throw `no the same step, step is ${step}`;
//         }
//     }
//     this.preppend=function(val){
//         if(arrOfNumber.includes(val)){
//             throw "it founded";
//         }
//         if(val%step==0){
//             arrOfNumber.splice(0,0,val);
//         }else{
//             throw `no the same step, step is ${step}`;
//         }
//     }
//     this.pop=function(){
//         if(arrOfNumber.length>0){
//             arrOfNumber.pop();
//         }else{
//             throw "it is empty";
//         }
//     }
//     this.dequeue=function(){
//         if(arrOfNumber.length>0){
//             arrOfNumber.splice(0,1)
//         }else{
//             throw "it is empty";
//         }
//     }
// }
// let sq=new Squance(4,15,2);
// // sq.append(16);
// // aq.preppend(2)
// // pop();
// // dequeue();
// console.log(sq.display());





//task3

function Book(t,a,nc,cn,p){
    this.title=t;
    this.author=a;
    this.numofChapters=nc;
    this.chapterName=cn;
    this.publisher=p;
    this.numofCopies=1;
    Book.countBook++;

}
Book.countBook=0;
Book.getNumberOfBook=function(){
    return this.countBook;
}


function Box(h,w,l,m){
    let content=[];
    let height=h;
    let width=w;
    let length=l;
    let material=m;
    this.setContent=function(val){
        Box.numbderOfBookInBox++;
        let isFound=false;
        for(var i=0;i<length;i++){
            if(content[i] !== undefined && content[i].title == val.title){
                isFound=true;
                break;
            }
        }
        if(isFound == true){
            content[i].numofCopies++;
        }else{
            content.push(val);
        }
    }
    this.deleteBook=function(val){
        let isFound=false;
        for(let i=0;i<content.length;i++){
            if( content[i].title == val){
                if(content[i].numofCopies>1){
                    content[i].numofCopies--;
                }else{
                    content.splice(i,1);
                }
                isFound=true;
                Box.numbderOfBookInBox--;
                break;
            }
        }
        if(isFound ==false){
            throw "not Found data";
        }
    }
    this.display=function(){
        console.log(content)
        for(let i=0;i<content.length;i++){
            console.log(content[i].title);
        }
    }
}
Box.numbderOfBookInBox=0;
Box.getNumberOfBook=function(){
    return this.numbderOfBookInBox;
}

let box= new Box(100,100,50,"stories");
let book1=new Book("html4","MS",3,"tag");
let book2=new Book("html5","MS",3,"tag");
let book3=new Book("css","zero",2,"style");
let book4=new Book("js","zero",2,"varibles");

box.setContent(book1);
box.setContent(book2);
box.setContent(book2);
box.setContent(book3);
box.setContent(book4);
console.log(Book.getNumberOfBook());
console.log(Box.getNumberOfBook());
// box.display();
box.deleteBook("html5");
box.deleteBook("html5");
// deleteBook("html5");
// box.display();
console.log(Book.getNumberOfBook());
console.log(Box.getNumberOfBook());