
// function Book(t,a,nc,cn,p){
//     this.title=t;
//     this.author=a;
//     this.numofChapters=nc;
//     this.chapterName=cn;
//     this.publisher=p;
//     this.numofCopies=1;
//     Object.defineProperty(this,"useTitle",{
//         value:this.title,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Object.defineProperty(this,"useAuthor",{
//         value:this.author,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Object.defineProperty(this,"useNumofChapters",{
//         value:this.numofChapters,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Object.defineProperty(this,"useChapterName",{
//         value:this.chapterName,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Object.defineProperty(this,"usePublisher",{
//         value:this.publisher,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Object.defineProperty(this,"useNumofCopies",{
//         value:this.numofCopies,
//         writable:false,
//         enumerable:false,
//         configurable:false,
//     })
//     Book.countBook++;
// }
// Book.countBook=0;
// Book.getNumberOfBook=function(){
//     return this.countBook;
// }


// function Box(h,w,l,m){
//     let content=[];
//     let height=h;
//     let width=w;
//     let length=l;
//     let material=m;
//     let counterBooksInBox=0;
//     this.setContent=function(val){
//         counterBooksInBox++;
//         let isFound=false;
//         for(var i=0;i<length;i++){
//             if(content[i] !== undefined && content[i].title == val.title){
//                 isFound=true;
//                 break;
//             }
//         }
//         if(isFound == true){
//             content[i].numofCopies++;
//         }else{
//             content.push(val);
//         }
//     }
//     this.deleteBook=function(val){
//         let isFound=false;
//         for(let i=0;i<content.length;i++){
//             if( content[i].title == val){
//                 if(content[i].numofCopies>1){
//                     content[i].numofCopies--;
//                 }else{
//                     content.splice(i,1);
//                 }
//                 isFound=true;
//                 counterBooksInBox--;
//                 break;
//             }
//         }
//         if(isFound ==false){
//             throw "not Found data";
//         }
//     }
//     this.toString=function(){
//         // console.log(content)
//         let books=""
//         for(let i=0;i<content.length;i++){
//             if(i == content.length-1){
//                 books+=content[i].title+"";
//             }else{
//                 books+=content[i].title+" ,";
//             }
//         }
//         return `height= ${height},width= ${width},length= ${length},material= ${material} and box contain [${books}]`;
//     }
//     this.getNumberOfBook=function(){
//         return counterBooksInBox;
//     }
// }

// Box.prototype.valueOf=function(){
//     return this.getNumberOfBook();
// }

// let box= new Box(100,100,50,"stories");
// let box2= new Box(100,100,50,"stories");
// let book1=new Book("html4","MS",3,"tag");
// let book2=new Book("html5","MS",3,"tag");
// let book3=new Book("css","zero",2,"style");
// let book4=new Book("js","zero",2,"varibles");

// box.setContent(book1);
// box.setContent(book2);
// box.setContent(book2);
// box.setContent(book3);
// box.setContent(book4);

// box2.setContent(book2);
// box2.setContent(book3);
// box2.setContent(book4);
// console.log("number of books",Book.getNumberOfBook());
// console.log("number of books in box1",box.getNumberOfBook());
// console.log("number of books in box2",box2.getNumberOfBook());
// box.deleteBook("html5");
// // box.deleteBook("html5");
// // box.deleteBook("html5");
// console.log("number of books",Book.getNumberOfBook());
// console.log("number of books in box1",box.getNumberOfBook());
// console.log("number of books in box2",box2.getNumberOfBook());
// console.log(box.toString());
// console.log(box+box2)


