let projectOBJ={};
let data=prompt("please enter projectId - projectName - duration and use '-' between your inputs");

if(data){
    let splitData=data.split("-");
    projectOBJ.projectId=splitData[0];
    projectOBJ.projectName=splitData[1];
    projectOBJ.duration=splitData[2];
    console.log(`your projectId is ${projectOBJ.projectId}, your projectName is ${projectOBJ.projectName} , your duration ${projectOBJ.duration} `);
}else{
    alert("we did not your object");
}

