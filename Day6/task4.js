let XML=new XMLHttpRequest();
let arrayOfUsers=[]

XML.open("get","https://jsonplaceholder.typicode.com/users",0);//sync

XML.onreadystatechange=function(){
    if(XML.readyState === 4 && XML.status === 200){
        let users=JSON.parse(XML.responseText)
        console.log("users = ",users);
        arrayOfUsers.push(...users);
    }
}

XML.send()
let ul =document.createElement("ul");
ul.style.listStyle="none";
ul.style.color="red";
document.body.appendChild(ul);
document.body.style.textAlign="center";
document.body.style.backgroundColor="black";
for(let el of arrayOfUsers){
    let li =document.createElement("li");
    ul.appendChild(li);
    li.style.marginTop="20px";
    li.style.fontSize="25px";
    li.textContent=`${el.id}- ${el.name}`;
}